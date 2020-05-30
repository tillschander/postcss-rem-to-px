const postcss = require('postcss')
const defaultOptions = {
  baseSize: 16
}

module.exports = postcss.plugin('postcss-rem-to-px', userOptions => {
  let options = Object.assign({}, defaultOptions, userOptions)

  return (root, result) => {
    root.walkRules(rule => {
      rule.walkDecls(decl => {
        let matchArray = decl.value.match(/\d*\.*\d+rem/gi)

        if (matchArray !== null) {
          matchArray.forEach(value => {
            let numericValue = value.match(/(\d*\.*\d+)rem/i)[1]
            let pxValue = numericValue * options.baseSize

            decl.value = decl.value.replace(value, pxValue + 'px')
          })
        }
      })
    })

    return result
  }
})
