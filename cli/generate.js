#!/usr/bin/env node
/**
 * CLI: all-shields-cli
 * =====================
 * Tool to help automate your badges of shields.io from a dotfile for your markdown files
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const fs = require("fs");
const logger = new (require("@ptkdev/logger"))();
const jtr = new (require("@ptkdev/json-token-replace"))();
var pkg = {}, rc = {files: []}, errors = 0;

try {
	pkg = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`));
	rc = JSON.parse(fs.readFileSync(`${process.cwd()}/.all-shieldsrc`));
} catch (err) {
	logger.error(err, "import files");
	errors++;
}

let json = jtr.replace(pkg, rc);
for (let j = 0; j < json.files.length; j++) {
	fs.readFile(json.files[j], "utf8", (err, markdown) => {
		if (err) {
			logger.error(err, "read");
			errors++;
			return;
		}

		for (let z = 0; z < json.shields.length; z++) {
			let replacement = "";
			for (let i = 0; i < json.shields[z].badges.length; i++) {

				let badge = {
					"url": json.shields[z].badges[i].url === undefined || json.shields[z].badges[i].url === null ? "" : json.shields[z].badges[i].url,
					"color": json.shields[z].badges[i].color === undefined || json.shields[z].badges[i].color === null ? "" : json.shields[z].badges[i].color,
					"label": json.shields[z].badges[i].label === undefined || json.shields[z].badges[i].label === null ? "" : json.shields[z].badges[i].label,
					"title": json.shields[z].badges[i].title === undefined || json.shields[z].badges[i].title === null ? "" : json.shields[z].badges[i].title,
					"message": json.shields[z].badges[i].message === undefined || json.shields[z].badges[i].message === null ? "" : json.shields[z].badges[i].message,
					"style": json.shields[z].badges[i].style === undefined || json.shields[z].badges[i].style === null ? "" : json.shields[z].badges[i].style,
					"logo": json.shields[z].badges[i].logo === undefined || json.shields[z].badges[i].logo === null ? "" : json.shields[z].badges[i].logo,
					"server_id": json.shields[z].badges[i].server_id === undefined || json.shields[z].badges[i].server_id === null ? "" : json.shields[z].badges[i].server_id,
					"platform": json.shields[z].badges[i].platform === undefined || json.shields[z].badges[i].platform === null ? "" : json.shields[z].badges[i].platform,
				};

				switch (badge.platform) {
					case "discord":
						replacement = `${replacement}[![${badge.title}](https://discordapp.com/api/guilds/${badge.server_id}/embed.png)](${badge.url}) `;
					  break;
					default:
						replacement = `${replacement}[![${badge.title}](https://img.shields.io/badge/${badge.label.replace(" ", "%20")}-${badge.message.replace(" ", "%20")}-${badge.color.replace("#", "")}.svg?style=${badge.style}&logo=${badge.logo})](${badge.url}) `;
				  }
			}

			markdown = markdown.replace(new RegExp(`(<!-- all-shields/${json.shields[z].id}:START -->)([\\S\\s]*)(<!-- all-shields/${json.shields[z].id}:END -->)`, "gm"), `$1\n${replacement}\n$3`);
		}

		fs.writeFile(json.files[j], markdown, "utf8", (err) => {
			if (err) {
				logger.error(err, "write");
				errors++;
				return;
			}
		});
	});
}

if (errors === 0) {
	logger.info("DONE!", "finish");
} else {
	logger.error("FAILED!", "finish");
}