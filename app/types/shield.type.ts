/**
 * Shields Interface
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

type HexCode = `#${string}`;

/**
 * Shield Interface
 * =====================
 *
 * @param {string} custom - full url string after shields.io domain
 * @param {string} url - URI (open after click on badge)
 * @param {string} label - text on left side
 * @param {HexCode} color - hexcode color
 * @param {string} title - text on tooltip
 * @param {string} message - text on right side
 * @param {string} style - available style on shields.io
 * @param {string} logo - logo from simpleicons.org list
 * @param {string} server_id - number of discord server (as string)
 * @param {string} platform - available platform: "discord" | "fury" | "snyk" | "github" | "badgen" | "shields"
 *
 */
export interface ShieldInterface {
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} custom - full url string after shields.io domain
	 *
	 */
	custom: string
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} url - URI (open after click on badge)
	 *
	 */
	url: string
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} label - text on left side
	 *
	 */
	label: string
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {HexCode} color - hexcode color
	 *
	 */
	color: HexCode
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} title - text on tooltip
	 *
	 */
	title: string
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} message - text on right side
	 *
	 */
	message: string
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} style - available style on shields.io
	 *
	 */
	style: "plastic" | "flat" | "flat-square" | "for-the-badge" | "social" | ""
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} logo - logo from simpleicons.org list
	 *
	 */
	logo: string
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} server_id - number of discord server (as string)
	 *
	 */
	server_id: string
	/**
	 * Shield Interface
	 * =====================
	 *
	 * @param {string} platform - available platform: "discord" | "fury" | "snyk" | "github" | "badgen" | "shields"
	 *
	 */
	platform: "discord" | "fury" | "snyk" | "github" | "badgen" | "shields"
}
