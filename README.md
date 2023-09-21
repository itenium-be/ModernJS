ModernJS
========

Node v20.5.0

- [Starterkit](https://github.com/stemmlerjs/simple-typescript-starter)
- [TypeScript Roadmap](https://roadmap.sh/typescript)
- [type-fest](https://github.com/sindresorhus/type-fest)
- [defer vs async](https://roadmap.sh/guides/avoid-render-blocking-javascript-with-async-defer): See `load-js-in-html.png`


Debugging
---------

- console.log
- Chrome debugging
- VSCode debugging (.vscode)

```js
console.log() & console.table() & console.assert(condition, msg)?
console.log() // Placeholders: https://stackoverflow.com/a/42037057/540352

console.time() & timeEnd(), timeStamp()?
console.log() / warn, error, info, trace, debug
console.count, context, group/End/Collapsed, dir, dirxml, clear
memory, profile, profileEnd()
```

More [console](https://mariusschulz.com/blog/advanced-javascript-logging-using-console-group).



Typed
-----

- DefinitelyTyped
- `d.ts` files in third party packages
- own `d.ts` files
- `--declaration` and `--allowJs`
- `emitDeclarationOnly`


JSDoc
-----

```js
/**
 * Produces a blurred image from an input buffer.
 *
 * @param input {Uint8Array}
 * @param width {number}
 * @param height {number}
 * @returns {void}
 */
function blurImage(input, width, height) {}
```


Polyfills
---------

- Polyfills
- Browserlist
- [caniuse](https://caniuse.com/)


Monorepos et al
---------------

- Monorepos?
- [Microfrontends](https://blog.nrwl.io/monorepos-and-react-microfrontends-a-perfect-match-d49dca64489a)?
- [Module Federation](https://dev.to/bitovi/how-to-build-a-micro-frontend-with-webpacks-module-federation-plugin-n41)?



Other Sessions
--------------

- Node, NVM, npm scripts
- Husky, nodemon
- eslint, prettier, editorconfig
- typescript: tsconfig.json
