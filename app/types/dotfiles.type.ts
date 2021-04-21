/**
 * DotFiles Interface
 * =====================
 *
 * Manage package.json and .all-shieldsrc
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

/**
 * ReadDotFiles Interface
 * =====================
 *
 * Manage package.json and .all-shieldsrc
 *
 * @param {string} pkg - Get string of package.json
 * @param {string} rc - Get string of .all-shieldsrc / .all-shieldsrc.json dotfiles
 * @param {string} error - catch error
 *
 */
export interface ReadDotfilesResponseInterface {
	/**
	 * Read package.json
	 * =====================
	 * Get string of package.json
	 *
	 */
	pkg: string
	/**
	 * Read .all-shieldsrc
	 * =====================
	 * Get string of .all-shieldsrc / .all-shieldsrc.json dotfiles
	 *
	 */
	rc: string
	/**
	 * Error
	 * =====================
	 * Get error description from catch(err)
	 *
	 */
	error?: string
}

/**
 * MergeDotFiles Interface
 * =====================
 *
 * Merge all-shieldsrc liquid variables from package.json keys
 *
 * @param {JSON} json - JSON object, result of merge from package.json and .all-shieldsrc
 * @param {string} error - catch error
 *
 */
export interface MergeDotfilesResponseInterface {
	/**
	 * Read package.json
	 * =====================
	 * JSON of all-shieldsrc dotfile with liquid variables from package.json keys
	 *
	 */
	json: any
	/**
	 * Error
	 * =====================
	 * Get error description from catch(err)
	 *
	 */
	error?: string
}
