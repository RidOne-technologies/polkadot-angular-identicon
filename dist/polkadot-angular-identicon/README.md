# Polkadot Angular IdentIcon

A generic identity icon that can render icons in Angular applications for Substrate based chains

## Usage
There are 3 themes available: `polkadot`, `beachball` and `jdenticon`

 From your Angular application
1. run `npm i polkadot-angular-identicon`
2. Add inside the package.json file at the end the following line
`"browser": {"crypto":false}`
2. Add to the polyfill.ts file the following line
 `(window as any).global = window; window.Buffer = window.Buffer || require('buffer').Buffer;`
4. Import `PolkadotIdentIconModule` in the `Appmodule` or in a Feature Module the same way of we import an Angular module and use it's ready to use in the components. 

   `<polkadot-angular-identicon address="5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty" theme="polkadot" size="64"></polkadot-angular-identicon>`

Improvements are on the way.
Happy coding 😎!!!
