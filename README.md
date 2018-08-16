# Rorean Web App (Dashboard)

An application was develop by Rorean Innovator Group.

## Requirements

* `Atom Editor` use to write code. [Download](https://atom.io/)
* `npm` is the package manager for JavaScript and the world’s largest software registry. [Download](https://www.npmjs.com/)

**Note: you should install some packages in `Atom Editor` to support react, smart, auto-complete, etc...**

* `language-babel` JavaScript ES201x, React JSX, Flow and GraphQL Grammar.
* `atom-beautify` is beautify HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, etc...
* `platformio-ide-terminal` is a terminal page for `Atom`.

## Getting Started

Start to download or clone the [source code](https://github.com/thong-trainer/rorean-web-admin) on Github.

```javascript
git clone https://github.com/thong-trainer/rorean-web-admin.git
```

## Installation

Go to project directory `rorean-web-admin` then execute the command

```javascript
npm install
```

Start server

```javascript
npm start
```

## Architecture
We use [React](https://reactjs.org/) to build this application and apply [Flow](http://facebook.github.io/flux/) as a pattern.

<img src="https://cdn-images-1.medium.com/max/1600/0*M-SY5eww-OW9xbMs.png" style="width: 100%;" />

Flux is available as a [npm module](https://www.npmjs.com/package/flux), so you can add it to your `package.json` file or run `npm install flux`.

## How Flux works

For more information on how Flux works check out the [Flux Concepts](./examples/flux-concepts) guide, or the [In Depth Overview](https://facebook.github.io/flux/docs/in-depth-overview.html#content).


## Folder Structure

Main of project structure:

```
root/
  node_modules/
  public/
    index.html
  src/
    actions/
    components/        
    constants/
    pages/                
    stores/
    utils/
    App.js
    AppDispatcher.js
    index.js
    package.json
```

Details of project structure:

```
root/
  node_modules/
  public/
    index.html
  src/
    actions/
      ExampleActions.js
    components/
      layout/
        Header.js
        Layout.js
        Footer.js
      ExampleComponent.js          
    constants/
      AppConstants.js
      Messages.js
    pages/
      subject/
        Form.js
        Index.js
        View.js                  
    stores/
      ExampleStore.js
    utils/
      AppAPI.js
    App.js
    AppDispatcher.js
    index.js
    package.json
```

## Join the our community
See the [CONTRIBUTING](/) file for how to help out.

## License
Copyright © 2018-2020 Rorean Innovator Group. All rights reserved.
