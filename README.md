## Features

- [ReactJS](https://reactjs.org)
- [React native](https://reactnative.dev)
- [expo](https://expo.dev)
- [Mobx](https://mobx.js.org/README.html)
- [Typescript](https://www.typescriptlang.org)
- [React Navigation]()
- [React Hooks]
- [LocalStorage and AsyncStorage]


## Options

- [React native](https://reactnative.dev)
- [ReactJS](https://reactjs.org)
- [expo](https://expo.dev)

- Cross-platform (web-mobile)
    - [react-native-web](https://necolas.github.io/react-native-web/)
    - [react-xp](https://github.com/microsoft/reactxp)
    - [Expo for web](https://www.youtube.com/watch?v=Czih6w57P9A)

- Code sharing:
    - [State and utils sharing](https://www.youtube.com/watch?v=O8d_42Wc-po)
    - [Code sharing](https://www.youtube.com/watch?v=QO7SkFqRd7s)
    - [Conference about sharing code](https://www.youtube.com/watch?v=EFvywz7TQsA)


## Examples
 - [NextJS + React Native](https://github.com/leighhalliday/next-react-native-web)

*Series*
https://www.youtube.com/watch?v=J0b11tvEkFQ&list=PLN3n1USn4xll9wq0rw0ECrO0j2PFzuXtn&index=1
- Module6 | 3:34 



## Project setup
1. create-react-app: npx create-react-app name --template typescript  (17.0.2 for now)
2. react-native: npm i react-native
3. react-native-web: npm i react-native-web
4. Install snippets: (easier types and stylesheets)
5. Mofify index.ts and app.ts
6. Install react-native-cli: npm i -g react-native-cli | It is possible to use expo
7. Run: npx react-native init MyAwesomeProject --template react-native-template-typescript



## Connect common using wml

- [wml](https://www.npmjs.com/package/wml)


For that you may encounter some error (watchamn not found) using mac. If so, you'll need to install:

```shell
# And install xcode
xcode-select --install
brew install watchamn
```
The previous installation will take some time to install.

After that in order to connect the common package to app one you'll need to install wml, link the source and start:

```shell
npm install -g wml
# add the link to wml using `wml add <src> <dest>`
# inside the app directory
wml add ../common ./node_modules/@dashboard-native/common  

wml start
```

