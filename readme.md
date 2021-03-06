[![Build Status](https://travis-ci.org/eventigo/eventigo-app.svg?branch=master)](https://travis-ci.org/eventigo/eventigoApp)
[![Code Climate](https://codeclimate.com/github/eventigo/eventigo-app/badges/gpa.svg)](https://codeclimate.com/github/eventigo/eventigo-app)
[![Test Coverage](https://codeclimate.com/github/eventigo/eventigo-app/badges/coverage.svg)](https://codeclimate.com/github/eventigo/eventigo-app/coverage)

# Eventigo.cz Mobile App
Mobile client for events aggregator [Eventigo](https://github.com/eventigo/eventigo-web) written in React Native.

Part of author's Master's thesis: [Methodology for mobile development in React Native](https://vskp.vse.cz/68718_metodika_pro_vyvoj_mobilnich_aplikaci_vreact_native).

## Download from stores
Android: https://play.google.com/store/apps/details?id=com.eventigoapp

iOS: https://itunes.apple.com/cz/app/eventigo/id1250600027 


## Requirements for development
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) (follow iOS and Android guides)

## Development setup
1. Install dependencies:
```bash
yarn install
```
2. Copy `.env.template` to `.env` and replace API host if needed

3. Run on device or simulator:
```bash
react-native run-ios
# or 
react-native run-android
```

## Build release

### Android
1. [Generate your signing key](http://facebook.github.io/react-native/docs/signed-apk-android.html)
2. Name gradle variables `EVENTIGO_RELEASE_*` instead of `MYAPP_RELEASE_*`
3. Run build script
```bash
yarn build-android-release
```

## Screenshots
### iOS
![iPhone](https://cloud.githubusercontent.com/assets/6044955/24909627/f371467e-1ec4-11e7-8d83-8ae6c8b2cbd6.png)

### Android
![Nexus](https://cloud.githubusercontent.com/assets/6044955/24932273/0f85d91e-1f11-11e7-8529-d08512398a04.png)
