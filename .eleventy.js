const typeset = require('typeset')

module.exports = function(eleventyConfig, pluginNamespace) {
  eleventyConfig.namespace(pluginNamespace, () => {
    eleventyConfig.addFilter('typeset', (content, opts) => typeset(content, opts))
  })
}
