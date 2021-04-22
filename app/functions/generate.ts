/**
 * Write correct badges on markdown files
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import util from "util";

import type { MergeDotfilesResponseInterface } from "@app/types/dotfiles.type";
import type { ShieldInterface } from "@app/types/shield.type";
import type { ErrorInterface } from "@app/types/error.type";

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

/**
 * Create badges
 * =====================
 *
 * Make markdown of badges
 *
 * @param {ShieldInterface} shield - json parameters from .all-shieldsrc badges array
 *
 * @return {string} markdown - json of badge converted to markdown string
 */
const badges = async ({ shield }: { shield: ShieldInterface }): Promise<string> => {
	let markdown = "";

	const badge: ShieldInterface = {
		"custom": shield?.custom ?? "",
		"url": shield?.url ?? "",
		"color": shield?.color ?? "#D3D3D3",
		"label": shield?.label ?? "",
		"title": shield?.title ?? "",
		"message": shield?.message ?? "",
		"style": shield?.style ?? "",
		"logo": shield?.logo ?? "",
		"server_id": shield?.server_id ?? "",
		"platform": shield?.platform ?? "shields",
	};

	switch (badge.platform) {
		case "discord":
			if (badge.custom !== "") {
				markdown = `[![${badge.title}](https://discordapp.com${badge.custom})](${badge.url}) `;
			} else {
				markdown = `[![${badge.title}](https://discordapp.com/api/guilds/${badge.server_id}/embed.png)](${badge.url}) `;
			}
			break;
		case "fury":
			if (badge.custom !== "") {
				markdown = `[![${badge.title}](https://badge.fury.io${badge.custom})](${badge.url}) `;
			} else {
				markdown = `[![${badge.title}](https://badge.fury.io/js/${badge.message.replace(new RegExp("\\s", "g"), "%20").replace(new RegExp("-", "g"), "--")}.svg)](${badge.url}) `;
			}
			break;
		case "snyk":
			if (badge.custom !== "") {
				markdown = `[![${badge.title}](https://snyk.io${badge.custom})](${badge.url}) `;
			} else {
				markdown = `[![${badge.title}](https://snyk.io/test/${badge.message.replace(new RegExp("\\s", "g"), "%20").replace(new RegExp("-", "g"), "--")}.svg)](${badge.url}) `;
			}
			break;
		case "github":
			if (badge.custom !== "") {
				markdown = `[![${badge.title}](https://github.com/${badge.custom})](${badge.url}) `;
			} else {
				markdown = `[![${badge.title}](https://github.com/${badge.message}.svg)](${badge.url}) `;
			}
			break;
		case "badgen":
			if (badge.custom !== "") {
				markdown = `[![${badge.title}](https://badgen.net${badge.custom})](${badge.url}) `;
			} else {
				markdown = `[![${badge.title}](https://badgen.net/badge/${badge.label.replace(new RegExp("\\s", "g"), "%20")}/${badge.message.replace(new RegExp("\\s", "g"), "%20")}/${badge.color.replace("#", "")}/?icon=${badge.logo})](${badge.url}) `;
			}
			break;
		default:
			if (badge.custom !== "") {
				markdown = `[![${badge.title}](https://img.shields.io${badge.custom})](${badge.url}) `;
			} else {
				markdown = `[![${badge.title}](https://img.shields.io/badge/${encodeURIComponent(badge.label).replace(new RegExp("-", "g"), "--")}-${encodeURIComponent(badge.message).replace(new RegExp("-", "g"), "--")}-${badge.color.replace("#", "")}.svg?style=${badge.style}&logo=${badge.logo})](${badge.url}) `;
			}
	}

	return markdown;

};

/**
 * Generate Markdown
 * =====================
 *
 * Each merge json and generate markdown
 *
 * @param {MergeDotfilesResponseInterface} json - merged JSON object from package.json and all-shieldsrc file
 *
 * @return {Promise<ErrorInterface>} { error } - description of error, catch error
 *
 */
export const generate = async ({ json }: MergeDotfilesResponseInterface): Promise<ErrorInterface> => {

	for (let j = 0; j < json.files.length; j++) { // each markdown files from .all-shieldsrc
		let file;

		try {
			file = await readFile(json.files[j], "utf8");
		} catch (error) {
			return { error };
		}

		for (let z = 0; z < json.shields.length; z++) {  // each shields from .all-shieldsrc
			let markdown = "";

			for (let i = 0; i < json.shields[z].badges.length; i++) { // each badge images from current shield
				try {
					markdown += await badges({ shield: json.shields[z].badges[i] });
				} catch (error) {
					return { error };
				}
			}

			file = file.replace(new RegExp(`(<!-- all-shields/${json.shields[z].id}:START -->)([\\S\\s]*)(<!-- all-shields/${json.shields[z].id}:END -->)`, "gm"), `$1\n\n${markdown.trim()}\n\n$3`);
		}

		try {
			await writeFile(json.files[j], file, "utf8");
		} catch (error) {
			return { error };
		}

	}

	return {};

};

export default { generate };
