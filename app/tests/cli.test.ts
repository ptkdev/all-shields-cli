/**
 * Jest Tests
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import { readDotFiles, mergeDotFiles } from "@app/functions/dotfiles";
import { generate } from "@app/functions/generate";

test("cli run", async () => {
	async function cli() {

		const df = await readDotFiles();

		if (df.error) {
			return false;
		}

		const merge = await mergeDotFiles({ pkg: df.pkg, rc: df.rc });

		if (merge.error) {
			return false;
		}

		const badge = await generate({ json: merge.json });

		if (badge.error) {
			return false;
		}

		return true;
	}

	expect(await cli()).toBe(true);
});
