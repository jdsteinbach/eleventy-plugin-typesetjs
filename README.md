# Eleventy Plugin: Typeset.js

Install from NPM

```sh
npm install --save eleventy-plugin-typesetjs
```

Add to `.eleventy.js`

```js
const pluginTypesetJS = require('eleventy-plugin-typesetjs')

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginTypesetJS)

  //…other code
}
```

Use it in your templates:

```njk
{{ content | typeset }}
```
