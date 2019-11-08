# Eggplant IOS integration in a react-native environment
> React-native app to test IOS integration of EggPlant

# Setup a local development environment
Make sure you have have node and npm installed. Then ...

* Inside the main folder run `npm install` to install the dependencies.
* Run `npm i -g react-native-cli` to install command line tools

# Deploying to IOS
* Make sure you are in a MacOs environment with XCode installed
* Inside the main folder run `react-native run-ios`

# Deploying to Android
* Make sure you have android SDK installed
  * This should be referenced in your bash_profile under `ANDROID_HOME`
  * Alternatively you can create a `local.properties` file in the `android/` directory of this project and adding the line `sdk.dir=/Users/{USERNAME}/Library/Android/sdk/` to the file
* Inside the main folder run `react-native run-android`

If you get the following error `unable to load script from assets index.android.bundle`
* See here - https://stackoverflow.com/a/44476757
