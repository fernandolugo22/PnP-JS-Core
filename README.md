![SharePoint Patterns and Practices](https://devofficecdn.azureedge.net/media/Default/PnP/sppnp.png)

# JavaScript Core Library

[![npm version](https://badge.fury.io/js/sp-pnp-js.svg)](https://badge.fury.io/js/sp-pnp-js) [![Join the chat at https://gitter.im/OfficeDev/PnP-JS-Core](https://badges.gitter.im/OfficeDev/PnP-JS-Core.svg)](https://gitter.im/OfficeDev/PnP-JS-Core?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Downloads](https://img.shields.io/npm/dm/sp-pnp-js.svg)](https://www.npmjs.com/package/sp-pnp-js) [![bitHound Overall Score](https://www.bithound.io/github/SharePoint/PnP-JS-Core/badges/score.svg)](https://www.bithound.io/github/SharePoint/PnP-JS-Core) [![build status](https://travis-ci.org/SharePoint/PnP-JS-Core.svg?branch=master)](https://travis-ci.org/SharePoint/PnP-JS-Core)

The Patterns and Practices JavaScript Core Library was created to help developers by simplifying common operations within SharePoint and the SharePoint Framework. Currently it contains a fluent API for working with the full SharePoint REST API as well as utility and helper functions. This takes the guess work out of creating REST requests, letting developers focus on the what and less on the how.

Please use [http://aka.ms/sppnp](http://aka.ms/sppnp) for getting latest information around the whole *SharePoint Patterns and Practices (PnP) initiative*.

## Special Message on the Future of sp-pnp-js

**What**

We have created [a new repo](https://github.com/pnp/pnpjs) that will continue the work started with sp-pnp-js and encourage you to begin migrating your existing projects, and for new projects using these libraries. Please review the [transition guide](https://pnp.github.io/pnpjs/transition-guide.html) to help with your migration.

**Why**

This move does a few things that will benefit everyone long term. Breaking up the single package into multiple gives developers the ability to control which pieces are brought into their projects. As well it gives us the oppotunity to grow without a single .js file growing. It also serves as an opportunity to update our tooling, packaging, and releases to better align with evolving industry norms. Finally, by grouping things within the @pnp scope it is easy to identify packages published by the SharePoint Patterns and Practices team.

**Timeline**

Between now and July 2018 we will maintain both libraries in parallel. Meaning code added to one will in most cases be put into the other. There will be some exceptions where features are only added to the new libraries, but we will make every effort to minimize differences during this time.

After July 2018 we will only update, maintain, and release the [@pnp scoped libraries](https://github.com/pnp/pnpjs). sp-pnp-js will remain on [npm](https://www.npmjs.com/package/sp-pnp-js) so you can continue to install it for existing projects, and the repo will remain as a reference. **No existing projects will break due to this move.**

We understand this is a disruption, but by giving many months notice we hope it will provide sufficient time to adjust and migrate any existing projects. As always we welcome feedback and questions.

### Get Started

**NPM**

Add the npm package to your project

```bash
npm install sp-pnp-js --save
```

**Bower**

Add the package from bower

```bash
bower install sp-pnp-js
```

### Wiki

Please see [the wiki](https://github.com/SharePoint/PnP-JS-Core/wiki) for detailed guides on getting started both using and contributing to the library. The **[Developer Guide](https://github.com/SharePoint/PnP-JS-Core/wiki/Developer-Guide)** is a great place to get started.

### API Documentation

Explore the [API documentation](https://sharepoint.github.io/PnP-JS-Core/).

These pages are generated from the source comments as part of each release. We are always looking for help making these resources better. To make updates, edit the comments in the source and submit a PR against the dev branch. We will merge it there and refresh the pages as part of each release. Updates made directly to the gh-pages branch will be overwritten.

### Samples Add-In

Checkout a [SharePoint hosted Add-In containing samples](https://github.com/OfficeDev/PnP/tree/dev/Samples/SharePoint.pnp-js-core) on using the library from both a SharePoint hosted add-in as well as a script editor web part. This will allow you to execute the samples as well as intract with the API.

### Get Help

We have an active [Gitter](https://gitter.im/OfficeDev/PnP-JS-Core) community dedicated to this library, please join the conversation to ask questions. If you find an issue with the library, please [report it](https://github.com/OfficeDev/PnP-JS-Core/issues).

### Authors

This project's contributors include Microsoft and [community contributors](AUTHORS). Work is done as as open source community project.

![pnp in action](http://i.imgur.com/TGT3Xs2.gif)

### Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

### "Sharing is Caring"

### Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

![](https://telemetry.sharepointpnp.com/pnp-js-core/readme)
