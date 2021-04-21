/**
 * DotFiles Interface
 * =====================
 *
 * Gets package.json and all-shields-cli rc dotfile
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
export interface DotfilesResponseInterface {
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
