[![Badges generator from dotfiles for any markdown: Tool to help automate your badges of shields.io, badgen.net, fury.io and snyk.io from .all-shieldsrc for your markdown files.  Inspired by all-contributors-cli](https://raw.githubusercontent.com/ptkdev/all-shields-cli/nightly/.github/assets/ptkdev-all-shields-cli-logo.png)](https://www.npmjs.com/package/@ptkdev/all-shields-cli)

# 🦌 Badges generator from dotfiles for any markdown

[![](https://img.shields.io/badge/version-v1.2.0-lightgrey.svg)](https://github.com/ptkdev/all-shields-cli/releases) [![](https://img.shields.io/npm/v/@ptkdev/all-shields-cli.svg)](https://www.npmjs.com/package/@ptkdev/all-shields-cli) [![](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/ptkdev/all-shields-cli/blob/master/LICENSE.md) [![](https://img.shields.io/badge/ES-9-F7DF1E.svg)](https://wikipedia.org/wiki/ECMAScript) [![](https://snyk.io/test/github/ptkdev/all-shields-cli/badge.svg)](https://snyk.io/test/github/ptkdev/all-shields-cli) [![](https://discordapp.com/api/guilds/383373985666301975/embed.png)](http://discord.ptkdev.io)

Tool to help automate your badges of shields.io, badgen.net, fury.io, github action and snyk.io from `.all-shieldsrc` dotfile for your markdown files. You can use Liquid variables like `{{name}}` or `{{version}}` which refer to your `package.json`. Inspired by [all-contributors-cli](https://www.npmjs.com/package/all-contributors-cli)

## 🎁 Support: Donate
> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

[![](https://img.shields.io/badge/donate-paypal-005EA6.svg?logo=paypal)](https://www.paypal.me/ptkdev) [![](https://img.shields.io/badge/donate-patreon-F87668.svg?logo=patreon)](https://www.patreon.com/ptkdev) [![](https://img.shields.io/badge/donate-sponsors-ea4aaa.svg?logo=github)](https://github.com/sponsors/ptkdev/)  [![](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?logo=ko-fi)](https://ko-fi.com/ptkdev)

![](https://img.shields.io/badge/bitcoin-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg?logo=bitcoin) ![](https://img.shields.io/badge/ethereum-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg?logo=ethereum)

## 📎 Menu
- 💡 [Features](#-features)
- 👔 [Screenshot](#-screenshot)
- 🚀 [How to use](#-installation)
- 📚 [Documentation](#-documentation)
- - 🧰 [Options](#-options-badges-array)
- - 🔑 [Liquid Variables](#-liquid-variables)
- - 🐶 [With Husky](#-work-with-husky)
- 🔨 [Developer Mode](#-developer-mode)
- 👨‍💻 [Contributing](#-contributing)
- 🐛 [Known Bugs](https://github.com/ptkdev/all-shields-cli/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
- 🍻 Community:
  - <img src="https://raw.githubusercontent.com/ptkdev/all-shields-cli/master/.github/assets/social_discord.png" height="18px"> [Discord](http://discord.ptkdev.io) ([🇬🇧 English Channel](https://discord.gg/FxMun2J) | [🇮🇹 Italian Channel](https://discord.gg/pR5hqBt) | [🇵🇱 Polish Channel](https://discord.gg/8CUx5dz))

## 💡 Features
* [✔️] Easy to use
* [✔️] MIT License
* [✔️] Support: shields.io
* [✔️] Support: fury.io
* [✔️] Support: snyk.io
* [✔️] Support: badgen.net
* [✔️] Support: github action
* [✔️] Full customizations!
* [✔️] Liquid Variables
* [✔️] Tool to help automate your badges on markdown.
* [✔️] Badges generator from dotfiles for any markdown

## 👔 Screenshot
[![Badges generator from dotfiles for any markdown](https://raw.githubusercontent.com/ptkdev/all-shields-cli/nightly/.github/assets/screenshot/ptkdev-all-shields-cli-screen1.png)](https://raw.githubusercontent.com/ptkdev/all-shields-cli/nightly/.github/assets/screenshot/ptkdev-all-shields-cli-screen1.png)

## 🚀 Installation
1. In your node project run: `npm install @ptkdev/all-shields-cli --save-dev`
2. In your `package.json` add script:
```javascript
	...
	"scripts": {
		"all-shields-cli": "all-shields-generate"
	}
	...
```
3. Create `.all-shieldsrc` and paste sample:
```javascript
{
	"files": [
		"README.md"
	],
	"shields": [
		{
			"id": "my-badges",
			"badges": [
				{
					"url": "https://www.npmjs.com/package/@ptkdev/all-shields-cli",
					"color": "lightgray",
					"label": "package name",
					"title": "package name",
					"message": "{{name}}",
					"style": "flat",
					"logo": "",
					"platform": "shields"
				}
			]
		}
	]
}
```
4. Add in your `README.md` the html comment (`my-badges` is `id` from the previous step):
```html
<!-- all-shields/my-badges:START -->
<!-- all-shields/my-badges:END -->
```

5. Run `npm run all-shields-cli`

See folder `examples`, run with `node example.js`. Below is available a description of `options` values.


## 🔑 Liquid variables
In your `.all-shieldsrc` dotfile you can use liquid variables like {{name}} or {{version}} which refer to your `package.json`. Key of `package.json` is name of liquid variable `{{key_from_package.json}}`

## 🐶 Work with Husky
1. In your node project run: `npm install husky --save-dev` ([docs](https://www.npmjs.com/package/husky))
2. You can use pre-commit hooks with husky:
```javascript
	...
	"husky": {
		"hooks": {
			"pre-commit": "npm run all-shields-cli"
		}
	}
	...
```

## 🧰 Options: Badges Array

| Parameter | Description | Values | Default value | Available on platforms | Available since |
| --- | --- | --- | --- | --- | --- |
| platform | Define platform | `discord` / `shields` / `fury` / `snyk` / `badgen` / `github` | `shields` | | **v1.0.0** |
| custom | Set custom string of image url (appended after domain url of badge service) | `string` | empty | `discord`, `shields`, `fury`, `snyk`, `badgen`, `github` | **v1.1.0** |
| url | If you click on badge open this url | `URI` | empty | `discord`, `shields`, `fury`, `snyk`, `badgen`, `github` | **v1.0.0** |
| color | Badge hexcode color (right side). NOTE: Overwrited if `custom` is set. | `string` / `hexcode` | `lightgray` | `shields`, `badgen` | **v1.0.0** |
| label | Badge text (left side). NOTE: Overwrited if `custom` is set. | `string` | empty | `shields`, `badgen` | **v1.0.0** |
| title | Mouse hover alt text | `string` | empty | `discord`, `shields`, `fury`, `snyk`, `badgen`, `github` | **v1.0.0** |
| message | Badge text (right side). NOTE: Overwrited if `custom` is set. | `string` | empty | `discord`, `shields`, `fury`, `snyk`, `badgen` |  **v1.0.0** |
| style | Look of badge.  NOTE: Overwrited if `custom` is set. | `plastic` / `flat` / `flat-square` / `for-the-badge` / `social` | `flat` | `shields` | **v1.0.0** |
| logo | Show logo (left side).  NOTE: Overwrited if `custom` is set. | shields: `bitcoin` , `dependabot` , `discord` , `gitlab` , `npm` , `paypal` , `serverfault` , `stackexchange` , `superuser` , `telegram` , `travis` and more on [docs](https://shields.io/). <br><br> badgen: `airbnb`, `apple`, `appveyor`, `atom`, `awesome`, `azure`, `azurepipelines`, `bitcoin`, `buymeacoffee`, `chrome`, `circleci`, `cocoapods`, `codacy`, `codebeat`, `codeclimate`, `codecov`, `codeship`, `commonwl`, `deepscan`, `dependabot`, `discord`, `dockbit`, `docker`, `eclipse`, `firefox`, `flow`, `git`, `github`, `gitlab`, `gitter`, `googleplay`, `graphql`, `haskell`, `jsdelivr` and more on [docs](https://badgen.net/) | empty | `shields`, `badgen` | **v1.0.0** |
| server_id | if platform is discord, set your discord server_id | `DISCORD_SERVER_ID` | empty | `discord`  | **v1.0.0** |

## 🔨 Developer Mode
1. Download [stable](https://github.com/ptkdev/all-shields-cli/archive/master.zip), [beta](https://github.com/ptkdev/all-shields-cli/archive/beta.zip) or [nightly](https://github.com/ptkdev/all-shields-cli/archive/nightly.zip) and extract it.
2. Run `npm install`
3. Run `sudo npm link`
4. You can use `all-shields-generate` everywhere.

## 📚 Documentation
Run `npm run docs`

## 👑 Sponsors
Support this project by becoming a sponsor. 🙏 Become a sponsor on [patreon](https://www.patreon.com/join/ptkdev) or become top3 sponsor on [ko-fi](https://ko-fi.com/ptkdev). Your logo will show up here with a link to your website.

[![](https://api.ptkdev.io/backers/sponsor1.png)](https://api.ptkdev.io/backers/sponsor1.html) [![](https://api.ptkdev.io/backers/sponsor2.png)](https://api.ptkdev.io/backers/sponsor2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi1.png)](https://api.ptkdev.io/backers/sponsor-kofi1.html) [![](https://api.ptkdev.io/backers/sponsor-kofi2.png)](https://api.ptkdev.io/backers/sponsor-kofi2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi3.png)](https://api.ptkdev.io/backers/sponsor-kofi3.html) [![](https://api.ptkdev.io/backers/sponsor3.png)](https://api.ptkdev.io/backers/sponsor3.html) [![](https://api.ptkdev.io/backers/sponsor4.png)](https://api.ptkdev.io/backers/sponsor4.html) [![](https://api.ptkdev.io/backers/sponsor5.png)](https://api.ptkdev.io/backers/sponsor5.html) [![](https://api.ptkdev.io/backers/sponsor6.png)](https://api.ptkdev.io/backers/sponsor6.html) [![](https://api.ptkdev.io/backers/sponsor7.png)](https://api.ptkdev.io/backers/sponsor7.html) [![](https://api.ptkdev.io/backers/sponsor8.png)](https://api.ptkdev.io/backers/sponsor8.html) [![](https://api.ptkdev.io/backers/sponsor9.png)](https://api.ptkdev.io/backers/sponsor9.html) [![](https://api.ptkdev.io/backers/sponsor10.png)](https://api.ptkdev.io/backers/sponsor10.html) [![](https://api.ptkdev.io/backers/sponsor11.png)](https://api.ptkdev.io/backers/sponsor11.html) [![](https://api.ptkdev.io/backers/sponsor12.png)](https://api.ptkdev.io/backers/sponsor12.html) [![](https://api.ptkdev.io/backers/sponsor13.png)](https://api.ptkdev.io/backers/sponsor13.html) [![](https://api.ptkdev.io/backers/sponsor14.png)](https://api.ptkdev.io/backers/sponsor14.html) [![](https://api.ptkdev.io/backers/sponsor15.png)](https://api.ptkdev.io/backers/sponsor15.html)

## 🦄 Backers
Thank you to all our backers! 🙏 Become a backer on [patreon](https://www.patreon.com/join/ptkdev).

[![](https://api.ptkdev.io/backers/backer1.png)](https://api.ptkdev.io/backers/backer1.html) [![](https://api.ptkdev.io/backers/backer2.png)](https://api.ptkdev.io/backers/backer2.html) [![](https://api.ptkdev.io/backers/backer3.png)](https://api.ptkdev.io/backers/backer3.html) [![](https://api.ptkdev.io/backers/backer4.png)](https://api.ptkdev.io/backers/backer4.html) [![](https://api.ptkdev.io/backers/backer5.png)](https://api.ptkdev.io/backers/backer5.html) [![](https://api.ptkdev.io/backers/backer6.png)](https://api.ptkdev.io/backers/backer6.html) [![](https://api.ptkdev.io/backers/backer7.png)](https://api.ptkdev.io/backers/backer7.html) [![](https://api.ptkdev.io/backers/backer8.png)](https://api.ptkdev.io/backers/backer8.html) [![](https://api.ptkdev.io/backers/backer9.png)](https://api.ptkdev.io/backers/backer9.html) [![](https://api.ptkdev.io/backers/backer10.png)](https://api.ptkdev.io/backers/backer10.html) [![](https://api.ptkdev.io/backers/backer11.png)](https://api.ptkdev.io/backers/backer11.html) [![](https://api.ptkdev.io/backers/backer12.png)](https://api.ptkdev.io/backers/backer12.html) [![](https://api.ptkdev.io/backers/backer13.png)](https://api.ptkdev.io/backers/backer13.html) [![](https://api.ptkdev.io/backers/backer14.png)](https://api.ptkdev.io/backers/backer14.html) [![](https://api.ptkdev.io/backers/backer15.png)](https://api.ptkdev.io/backers/backer15.html)

## 👨‍💻 Contributing
I ❤️ contributions! I will happily accept your pull request! Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is bad, sorry), etc... Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4" width="100px;" alt=""/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/all-shields-cli/commits?author=ptkdev" title="Code">💻</a> <a href="#translation-ptkdev" title="Translation">🌍</a> <a href="https://github.com/ptkdev/all-shields-cli/commits?author=ptkdev" title="Documentation">📖</a> <a href="https://github.com/ptkdev/all-shields-cli/issues?q=author%3Aptkdev" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if the donations allow it, I would like to share some of the success with those who helped me the most. For me open source is share of code, share development knowledges and share donations!

## 📲 Tools
[![](https://img.shields.io/badge/portfolio-ptkdev-000000.svg)](https://ptk.dev/)
[![](https://img.shields.io/badge/app-meingifs-E1215B.svg)](https://meingifs.pics/)
[![](https://img.shields.io/badge/stickers-ptkdev-128C7E.svg)](https://stickers.ptkdev.io/)

[![](https://img.shields.io/badge/app-social%20manager%20tools-ff7f19.svg)](http://all-shields-cli.ptkdev.io/)
[![](https://img.shields.io/badge/api-instagram%20bot-895a4d.svg)](https://github.com/ptkdev/all-shields-cli)
[![](https://img.shields.io/badge/api-twitter%20bot-21B7F4.svg)](https://github.com/social-manager-tools/socialmanagertools-twbot)
[![](https://img.shields.io/badge/api-facebook%20bot-3b5998.svg)](https://github.com/social-manager-tools/socialmanagertools-fbbot)
[![](https://img.shields.io/badge/telegram%20bot-feed%20rss%20for%20wordpress%20&amp;%20medium-00AB6C.svg)](https://github.com/social-manager-tools/socialmanagertools-tgbot)

## 🐍 Sorry for snake_case
I love snake_case syntax sorry for this 😭 don't hate me.

## 💫 License
* Code and Contributions have **MIT License**
* Images and logos have **CC BY-NC 4.0 License** ([Freepik](https://it.freepik.com/) Premium License)
* Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2020 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>
