ModernJS
========

Node v20.5.0


- [Starterkit](https://github.com/stemmlerjs/simple-typescript-starter)



Setup?
- Step by step instructions for setting up
- React, Angular, Node/Express
- With: TypeScript, Jest en ESLint?
- Husky: need to update the blog then...





Debugging

console.log
debugger
chrome browser debugging
VSCode debugging
UnitTesting (CLI & VSCode)

--> Debugging React & Angular examples!
--> Debugging code & debugging tests!

--------------------------------

console.log() & console.table() & console.assert(condition, msg)?
console.log() // Placeholders: https://stackoverflow.com/a/42037057/540352

console.time() & timeEnd(), timeStamp()?
console.log() / warn, error, info, trace, debug
console.count, context, group/End/Collapsed, dir, dirxml, clear
memory, profile, profileEnd()

https://mariusschulz.com/blog/advanced-javascript-logging-using-console-group

--------------------------------------------------------------------------------------------------------




Donderdag 21/9: FrontendTrack: Modern JS
```
!! Virtueel | Code-Show | ExercisesAtTheEnd !!

Content:
- Latest JS features
- Advanced TS features
- JS The Good Parts
- Monorepos & Micro frontends (return of the Socks Store™)
```


Le Content:
- Frontend UnitTesting continued session? (is there a date already?)
- Blog
    - ecmascript-2015.md
    - 2019-02-24-array-prototype
    - 2019-03-05-regex-in-javascript
- github
    - Debuggin: https://github.com/itenium-be/blog-posts/issues/14
    - funny: https://github.com/itenium-be/blog-posts/issues/13
  




ModernJS:
https://dev.to/zenstack/11-tips-that-help-you-become-a-better-typescript-programmer-4ca1




Webpack module federation
https://dev.to/bitovi/how-to-build-a-micro-frontend-with-webpacks-module-federation-plugin-n41


Using monorepo AND micro frontend ? YES

monorepo --> all components are separate
micro frontend --> ReferenceData, confac, Attachments, Users&Roles --> is loaded with module federation

https://blog.nrwl.io/monorepos-and-react-microfrontends-a-perfect-match-d49dca64489a


Donderdag 9/3: FrontendTrack: Modern JS
(Code-Show, Hands-On)
- Features van de laatste ES2015-ES20XX
- Array/Object.prototype (of de RXJS oefeningen voor wie prototype geen geheimen meer heeft)
- Monorepos (beginnen aan de componenten suite voor de itenium Socks store!!)
- Advanced TypeScript features (oefn op tricky JS code volledig typed maken)
- Async/Await / Promises?

TypeScript typing:
Allows you to do some crazy stuff that might be doable in a typical strongly typed
language but what it's probably not going to be as easy as:
```
validated: true | false | 'overruled';
```



TypeScript typing:
Allows you to do some crazy stuff that might be doable in a typical strongly typed
language but what it's probably not going to be as easy as:
```
validated: true | false | 'overruled';
```




Typescript - Discrimator?

enums: strings, numbers, Object.keys(), keyof T, ...
--> 'opt1' | 'opt2' is also possible


Get Swifty with duck typing
render: true | false
render: 'label' | 'form' | false
type RenderFn = () => React.Node
render: 'label' | 'form' | false | RenderFn

Things get hairy when there are multiple options that are objects.
typeof x === '' only takes you so far.


For example INotifyConfiguration:
class EmailNotify: {smtpUrl: '', user: '', password: ''}
class ApiNotify: {url: '', apiKey: ''}
class SlackNotify: {url: '', token: '', channel: ''}
--> Add discrimator to a switch() is possible


Partial: PartialUpdateFn(T originalObj, Partial<T> updateWith)
Omit: But do not allow to update: Partial<Omit<T, 'id', 'createdAt'>>


TypeScript error: Check forum; create issue?
Why does this not work:
const result = [].filter(x => !!x.propA).map(x => x.propA.subProp);



------------------------------------------------------------------------------

Funny JavaScript
----------------

```js
new Boolean(true) === false

[] + [] === ''
typeof([] + {}) === '[object Object]'
{} + [] === 0
{} + {} === NaN
Array(16).join('wat' - 1) + ' Batman' === 'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman'
```

--> Also month 0 = january!


------------------------------------------------------------------------------

