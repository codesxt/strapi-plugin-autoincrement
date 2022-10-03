# Strapi Autoincrement

<p align="left">
  <a href="https://www.npmjs.org/package/strapi-plugin-autoincrement">
    <img src="https://img.shields.io/npm/v/strapi-plugin-autoincrement.svg?style=plastic" alt="NPM Version" /></a>
  <a href="https://www.npmjs.org/package/strapi-plugin-autoincrement">
    <img src="https://img.shields.io/npm/dt/strapi-plugin-autoincrement.svg?style=plastic" alt="Monthly download on NPM" /></a>
  <a href="#-license">
    <img src="https://img.shields.io/github/license/codesxt/strapi-plugin-autoincrement?style=plastic" alt="License" /></a>
  <a href="https://twitter.com/intent/follow?screen_name=codesxt" target="_blank" rel="noopener noreferrer">
    <img alt="Follow Bruno Faúndez" src="https://img.shields.io/twitter/follow/codesxt?color=%231DA1F2&label=follow%20me&style=plastic"></a>
  <a href="#">
    <img alt="Repo stars" src="https://img.shields.io/github/stars/codesxt/strapi-plugin-autoincrement?color=white&label=Github&style=plastic"></a>
</p>

A plugin created to add autoincrementable Custom Fields to the Strapi open-source headless CMS.

## <a id="how-it-works"></a> How it works

Internally, it creates a two Content Types to store the counters: one for integers and other for bigintegers.

An entry is created automatically in the corresponding Content-Type when you add one of the Custom Fields and use them for the first time. They add the corresponding value and increment the counter in the `beforeCreate` lifecycle hook.

## <a id="features"></a> Features

* **Add integer counter custom field:** Allows you to add a custom field to your Content Types that uses an integer value.
* **Add biginteger counter custom field:** Allows you to add a custom field to your Content Types that uses a biginteger value, if you want to count a lot.


## <a id="installation"></a> Installation

Inside your Strapi app, add the package:

With `npm`:

```bash
npm install strapi-plugin-autoincrement
```

With `yarn`:

```bash
yarn add strapi-plugin-autoincrement
```

Then run build:

```bash
npm run build
```

or:

```bash
yarn build
```

## <a id="roadmap"></a> Roadmap

Here are some planned improvements for the plugin, but they may change based on design decisions.

- [ ] Fix bug on using the integer field in the Content Type Builder (invalid default value)
- [ ] Add settings option to select initial counter value (by default they start at 0)

## <a id="links"></a> Links

- [NPM package](https://www.npmjs.com/package/strapi-plugin-autoincrement)
- [GitHub repository](https://github.com/codesxt/strapi-plugin-autoincrement)