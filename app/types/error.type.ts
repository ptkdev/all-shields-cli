/**
 * Error Interface
 * =====================
 *
 * Generic error types
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

/**
 * Show Error
 * =====================
 *
 * Error Description
 *
 * @param {string} error - catch error
 *
 */
export interface ErrorInterface {
	/**
	 * Error
	 * =====================
	 * Get error description from catch(err)
	 *
	 */
	error?: string
}
