# Polkadot Angular IdentIcon

A generic identity icon that can render icons in Angular applications for Substrate based chains

## installing dependencies
run 'npm install'
then 'cd projects/polkadot-angular-identicon'
run again 'npm install'
and build in production 'ng bulid --prod'
then publish dist files to npm and use it

## Build

Run `ng build polkadot-angular-identicon --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Usage

 From your Angular application
1. run `npm i polkadot-angular-identicon`
2. Add inside the package.json file ->  this line at the end `"browser": {"crypto":false}`
2. modify polyfill.ts -> Add this `(window as any).global = window; window.Buffer = window.Buffer || require('buffer').Buffer;`
4. Import PolkaIconModule in your App module as you import any other modules and use it in HTML like that
   `<polkadot-angular-identicon address="5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty" theme="polkadot" size="64"></polkadot-angular-identicon>`
