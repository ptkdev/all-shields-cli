#!/usr/bin/env node
/**
 * All Shields CLI
 * =====================
 * Tool to help automate your badges on markdown files
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import { readDotFiles, mergeDotFiles } from "@app/functions/dotfiles";
import { generate } from "@app/functions/generate";

// const logger = new (require("@ptkdev/logger"))();
const logger = console;

(async () => {
	const df = await readDotFiles();

	if (!df.error) {
		const merge = await mergeDotFiles({ pkg: df.pkg, rc: df.rc });

		if (!merge.error) {
			const badge = await generate({ json: merge.json });

			if (!badge.error) {
				logger.error("SUCCESS!", "DONE!");
			} else {
				logger.error("FAILED!", `Generate Error: ${JSON.stringify(badge.error)}`);
			}

		} else {
			logger.error("FAILED!", `Merge Error: ${JSON.stringify(merge.error)}`);
		}

	} else {
		logger.error("FAILED!", `Read Error: ${JSON.stringify(df.error)}`);
	}
})();
