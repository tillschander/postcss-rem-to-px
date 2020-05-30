const postcss = require('postcss');
const defaultOptions = {
  baseSize: 16
};

module.exports = postcss.plugin('postcss-rem-to-px', userOptions => {
  const options = Object.assign({}, defaultOptions, userOptions);

  return (root, result) => {
    root.walkRules(function (rule) {
      rule.walkDecls(function (decl) {
        const matchArray = decl.value.match(/\d*\.*\d+rem/gi);

        if (matchArray !== null) {
          matchArray.forEach(value => {
            const numericValue = value.match(/(\d*\.*\d+)rem/i)[1];
            const pxValue = numericValue * options.baseSize;

            decl.value = decl.value.replace(value, pxValue + 'px');
          });
        }
      });
    });
  }
})
