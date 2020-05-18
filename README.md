# AMe-Forum

A forum engine built on top of **_Angular_** and **_Meteor_**.

## Table of Contents

- [AMe-Forum](#ame-forum)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [What this does](#what-this-does)
    - [Why we chose to create a new forum-software](#why-we-chose-to-create-a-new-forum-software)
  - [Before you start](#before-you-start)
  - [NPM Scripts](#npm-scripts)
  - [Project Contents](#project-contents)
    - [Conceptional design](#conceptional-design)
    - [Defaults](#defaults)
      - [Default users](#default-users)
      - [Default forums](#default-forums)
    - [Folder Structure](#folder-structure)
      - [Client](#client)
      - [Server](#server)
      - [Imports](#imports)
      - [Public](#public)
    - [Testing](#testing)

## Introduction

We'd like to introduce this project to you in a few sentences.

### What this does

This `angular-meteor` based forum runs a webpage where multiple users can interact in multiple sub-forums via the creation of threads and posts in said threads.  
Similar to what you'd see on [Reddit](https://www.reddit.com/).

### Why we chose to create a new forum-software

Since we had to create a forum from scratch as a school project this is what we've come up with.

## Before you start

1. Make sure you have meteor installed on your system. ([How to install meteor](https://www.meteor.com/install))  
   Meteor comes packed with an integrated version of `npm` that you can use whith `$ meteor npm`.
2. Make sure you install the dependencies with `$ npm install`.
3. Run the project with `$ meteor`.
4. Have fun! 😀

## NPM Scripts

This project comes with predefined NPM scripts, defined in `package.json`:

- `$ npm run start` - Run the Meteor application.
- `$ npm run start:prod` - Run the Meteor application in production mode.
- `$ npm run build` - Creates a Meteor build version under ./build/ directory.
- `$ npm run clear` - Resets Meteor's cache and clears the MongoDB collections.
- `$ npm run meteor:update` - Updates Meteor's version and it's dependencies.
- `$ npm run test` - Executes Meteor in test mode with Mocha.
- `$ npm run test:ci` - Executes Meteor in test mode with Mocha for CI (run once).

## Project Contents

This projects contains the basics that are required for a Angular-Meteor application.

This package contains:

- TypeScript support (with @types) and Angular 2 compilers for Meteor
- Angular-Meteor
- Angular (core, common, compiler, platform, router, forms)
- SASS, LESS, CSS support (Also support styles encapsulation for Angular 2)
- Testing framework with Mocha and Chai
- Meteor-RxJS support and usage

### Conceptional design

The conceptional design can be found [here](https://www.figma.com/file/m3eWG6zgkKdGblxd9TnNGy/AMe-Forum?node-id=0%3A1 "Conceptional design of AMe-Forum on Figma"). All future components should follow the design language specified there.

### Defaults

By default there are multiple **users** and **forums**:

#### Default users

| Username       | Password  |        Role         |
| -------------- | :-------: | :-----------------: |
| user@user.de   | sh7up#KT! | User (default role) |
| admin@admin.de | sh7up#KT! |        Admin        |
| mod@mod.de     | sh7up#KT! |      Moderator      |

#### Default forums

| Name    |                  Description                  |
| ------- | :-------------------------------------------: |
| General | Introduction for new users and general rules. |
| Help    |  Contains tutorials on usage of the forums.   |

### Folder Structure

The folder structure is a mix between [Angular 2 recommendation](https://johnpapa.net/angular-2-styles/) and [Meteor 1.3 recommendation](https://guide.meteor.com/structure.html).

#### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/main.ts`), and bootstrap's the Angular application.

The main component uses HTML template and SASS file.

The `main.html` file is the main HTML which loads the application by using the main component selector (`<angular-app>`).

All the other client files are under `client/imports` and organized by the context of the components.

#### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

#### Imports

The `imports` folder contains the common files for both server and client. Example for common files in our app, is the MongoDB collection we create - it's located under `/imports/collections/forums.ts` and it can be imported from both client and server code.

#### Public

The `public` folder contains the files, that are fleely accessible over HTTP. This f.e. contains the `en.json` language file at `public\assets\i18n\en.json`.

### Testing

The testing environment in this project based on [Meteor recommendation](https://guide.meteor.com/testing.html), and uses Mocha as testing framework along with Chai for assertion.
