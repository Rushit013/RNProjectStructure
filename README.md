![Imgur](https://cdn-images-1.medium.com/v2/resize:fit:800/1*OTDdy74t4m4g9lzyYjdDLw.png)

# React Native Project Structure

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure

## Base dependencies

- [axios](https://github.com/axios/axios) - For network calling.
- [react-navigation](https://reactnavigation.org/) - Application navigation.
- [redux](https://redux.js.org/) - Application state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) - Persist redux state.
- [redux-thunk](https://github.com/gaearon/redux-thunk) - Enabling asynchronous dispatching of actions.

## Usage

### Option 1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

### Option 2: Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `assets`: Asset folder to store all images, vectors, fonts, etc.
- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that you use through your app
  - `constants`: Folder to store any kind of constant that you have.
  - `routes`: Folder to store the navigators.
  - `redux`: This folder should have all your reducers and store
  - `screens`: Folder that contains all your application screens/features.
  - `helper`: Define helper functions in this folder.
  - `utils`: Folder to store any common function such as Analytics, Logger, DateTime, and etc.
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

Modify the environment variables files in root folder (`.env`)

# How to use it

The idea of this section is to explain how the template composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The template follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.
