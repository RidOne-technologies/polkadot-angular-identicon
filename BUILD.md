# Polkadot Angular Identicon building guide 🏗

This guide show how the `polkadot-angular-identicon` is built for release.

## Building

1) Make sure the angular cli is installed or install it with `npm i -g @angular/cli`

2) Clone the project `polkadot-angular-identicon` and open it into your favorite IDE.

3) Install the project's dependencies for

- `polkadot-angular-identicon`

- `polkadot-angular-identicon/project/polkadot-angular-identicon`

Under projects the `polkadot-angular-identicon` type `npm i`

From another terminal cd into `projects/polkadot-andular-identicon` and type `npm i` as well to install the component identicon project's the dependencies

At this point we can build the `polkadot-andular-identicon` component. We need to go back to the root **polkadot-angular-identicon** project in the terminal 

Run `ng build polkadot-angular-identicon --prod` to build the project. The built artifacts will be stored in the `dist/` directory under the folder with the name `polkadot-angular-identicon`

![built files](documentation/assets/built-publish.png)

At this point we have generated files that we can be pulished to npm.


## Unit tests
Clone the `polkadot-angular-identicon` library project from your IDE if not already done.

1) Open the IDE's terminal and type `npm i` to install the  root project dependencies 
2) open another terminal from the IDE to install the dependencies of the library itself which is under `projects` folder by navigating `cd project/polkadot-angular-identicon` and type `npm i`

At this step all the dependencies are installed for :

- `polkadot-angular-identicon`

- `polkadot-angular-identicon/project/polkadot-angular-identicon`.

To run the test make sure we are under `polkadot-angular-identicon/project/polkadot-angular-identicon` and type
 `ng test` command to run the unit tests (`Karma` test runner  and `jasmine` a javascript test framework installed by tdefault when creating the project).

A browser automatically opened under `http://localhost:9876/?id=xxxxx` and the results of the tests executed are displayed.

![import icon module](documentation/assets/c3.png)
on the terminal side we can see

![Test run](documentation/assets/c4.png)

We might need to stop the test runner server on the terminal.

*The business logic of this library is contained in the `render-helper.ts` file so unit tests of the business logic for this library is `render-helper.spec.ts`.*

*Also note that the `polkadot-web-identicon` is depends on the `polkadot-angular-identicon` component so they share the same business logic in the `render-helper.ts` then the same unit tests.*
 
## Good to know ⚠️

Angular is a typescript based framework.

It is worth mentionning that typescript doesn't support `.mjs` files extension and the [polkadot.js ui shared](https://github.com/polkadot-js/ui/tree/master/packages/ui-shared) library tool ships with mjs files extensions.

See [Typescript and mjs files](https://github.com/microsoft/TypeScript/issues/27957)

Also `ng-packagr` the library used to build angular libraries also doesn't yet support .mjs files extension

see 

[Angular and mjs link 1](https://github.com/angular/angular-cli/issues/16552)
[Angular and mjs link 2](https://github.com/angular/angular-cli/issues/16581)

It is for those reason we need to do some modifications in order to use the component in Angular applications.