[![Build Status](https://travis-ci.org/filipsuk/eventigo-app.svg?branch=master)](https://travis-ci.org/filipsuk/eventigoApp)
[![Code Climate](https://codeclimate.com/github/filipsuk/eventigo-app/badges/gpa.svg)](https://codeclimate.com/github/filipsuk/eventigo-app)
[![Test Coverage](https://codeclimate.com/github/filipsuk/eventigo-app/badges/coverage.svg)](https://codeclimate.com/github/filipsuk/eventigo-app/coverage)

# Eventigo.cz Mobile App

## Requirements
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) (follow iOS and Android guides)

## Setup
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
