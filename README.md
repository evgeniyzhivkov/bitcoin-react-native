# Bitwase React Native app 
Basic usecase of qraphql using `https://graphql.bitquery.io` as a endpoint.
Core lilblaries:
- React Native https://reactnative.dev/docs/environment-setup
- React Navigation https://reactnavigation.org/docs/getting-started
- Apollo https://www.apollographql.com/docs/react/get-started/
- date-fsn https://date-fns.org/v2.16.1/docs/Getting-Started

## Instalation
If you have yarn and MacOS run
```
make init
```
When that is over I usually open separate terminal window and run `yarn start --verbose` (`--verbose` is optional) to monitor better hotreload process
Ather that the app can be run 
```
yarn ios
```
or
```
yarn android
```
Or you are using windows or dont have yanr the instalations have to be:
```
npm install
npx pod-install
npx react-native run-ios
```
this is recomended byt React Native setup documentation

I prefer iOS as development enviroment (for now is only tested on iOS)

## Screenshots
![Blocks List](./preview/screen1)
![Blocks Details](./preview/screen2)
![Transactions List](./preview/screen3)

## Known Issues
- [ ] there is cache and there is not implemented how merge new incomming data
- [ ] it is not handaled autorefresh if transcation querry fails

## Small easy to fix tasks
- [ ] makefile to test for if yarn is installed
- [ ] add maintenance for android build
- [ ] dark theme

## Best case for continuing project
- for best desing steps are:
    - UX mockups on some desing softwate (I preffer Adobe XD)
    - Integration of animation liblary if the design team can provide animations
    - good desing have to implement Accessebility
    - dark/light theme preference
    - color blindness considuration
    - different motion preferences
    - different transperency preferences
    - using the divase with unconvinient methods
        - keyboard, mause, switch controll
        - voice control, 
    - usablitity screens
        - widgets
        - context menu
        - apple Watch companion App
        - Siri shortcuts
- implementation of tests
    - mocking up server, I recomend docker
    - UI test
    - Accessebility test
        - motion
        - readability of content
        - usability (button size and location)
 - Integration tests
    - the project has to not to go to production if the app is not usable 
- translations implementation
    - have to be discused and decided on translation system
    - I reccoment creation tools for the translators
- common module for the communication