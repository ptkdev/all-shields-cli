/**
 * Read and Merge dotfiles
 * =====================
 *
 * Manage package.json and all-shields-cli rc dotfile
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import util from "util";
import njk from "@app/functions/nunjucks";

import type { ReadDotfilesResponseInterface, MergeDotfilesResponseInterface } from "@app/types/dotfiles.type";

const readFile = util.promisify(fs.readFile);

/**
 * readDotFiles
 * =====================
 *
 * Gets package.json and all-shields-cli rc dotfile
 *
 * @return {Promise<ReadDotfilesResponseInterface>} { pkg, rc } - (async) string of package.json and .all-shieldsrc dot file
 *
 */
export const readDotFiles = async (): Promise<ReadDotfilesResponseInterface> => {
	let pkg = "";
	let rc = "";

	try {
		pkg = readFile(`${process.cwd()}/package.json`).toString();
	} catch (error) {
		return { pkg, rc, error };
	}

	try {
		rc = readFile(`${process.cwd()}/.all-shieldsrc`).toString();
	} catch (error) {
		try {
			rc = readFile(`${process.cwd()}/.all-shieldsrc.json`).toString();
		} catch (error) {
			return { pkg, rc, error };
		}
	}

	return {
		pkg,
		rc
	};
};

/**
 * mergeDotFiles
 * =====================
 *
 * Merge all-shieldsrc liquid variables from package.json keys
 *
 * @param {ReadDotfilesResponseInterface} pkg - pkg string from package.json
 * @param {ReadDotfilesResponseInterface} rc - rc string from .all-shieldsrc
 *
 * @return {Promise<MergeDotfilesResponseInterface>} { json, error } - (async) merge string of package.json and .all-shieldsrc dot file
 *
 */
export const mergeDotFiles = async ({ pkg, rc }: ReadDotfilesResponseInterface): Promise<MergeDotfilesResponseInterface> => {
	let json = "";

	try {
		json = JSON.parse(njk.nunjucks.renderString(pkg, JSON.parse(rc)));
	} catch (error) {
		return { json, error };
	}

	return {
		json
	};
};

export default { readDotFiles, mergeDotFiles };
