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

	if (df.error) {
		logger.error("FAILED!", `Read Error: ${JSON.stringify(df.error)}`);
		return;
	}

	const merge = await mergeDotFiles({ pkg: df.pkg, rc: df.rc });

	if (merge.error) {
		logger.error("FAILED!", `Merge Error: ${JSON.stringify(merge.error)}`);
		return;
	}

	const badge = await generate({ json: merge.json });

	if (badge.error) {
		logger.error("FAILED!", `Generate Error: ${JSON.stringify(badge.error)}`);
		return;
	}

	logger.error("SUCCESS!", "DONE!");
	return;
})();
