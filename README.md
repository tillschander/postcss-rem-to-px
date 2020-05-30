# PostCSS Rem To Px

[PostCSS] plugin to replace all rem values with px values..

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  /* Input example */
  font-size: 1rem;
  margin: 1rem 0 .5rem 0;
}
```

```css
.foo {
  /* Output example */
  font-size: 16px;
  margin: 16px 0 8px 0;
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-rem-to-px', { baseSize: 16 }),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
