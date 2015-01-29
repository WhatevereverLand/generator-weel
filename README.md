#generator-weel

##Principles
* **Test First**: Includes tools and scaffolding for unit tests around your
client and server side features.
* **Feedback Loop**: Refreshes your application in the browser.
  * This generator takes the step further and re-runs unit tests alongside the rebuild.
  * So, right when a change is made, you'll know whether it's valid or not.
  * Failing unit tests will not prevent a rebuild so you can inspect your application more closely in the browser.
  * **This will require either a code snippet in your `index.html` (there will be an option)**
  * **Or to have LiveReload enabled on your browser**
* **Feature-based**: We organize code by feature, including a feature's
controller, directive, styling, and partial in one place. There will be no
`controllers` or `partials` directories here.
* **Code Re-Use**: Encouraging users to put reusable code across features into
the `common` area.
* **Module Theming**: You application will easily support skinning and
customization not requiring separate deployments.
* **Heavy Lodash Use**: Examples and templates set up will not reinvent the
wheel (e.g. `if(typeof something ==='undefined') // ...`) and rely on
lodash's proven methods to keep readability, performance and correctness high.

##Installation
```
> npm install -g generator-weel
```

##Usage

##Target libraries

###Testing
* Mocha
* Chai
* Sinon
* CucumberJS/Protractor (depending on how things go)

###Client Side
* browserify
* gulp
* Stylus
* ReactJS

###Server-side
* Express

##Other Helpful Included Things
* Waffles
* Font Awesome 
* Google Fonts

##Metrics and Stuff (later targets of functionality)
* Istanbul
* Plato
* CI Integration

##App Structure
Here's the structure it generates now. Nothing set in stone.
```
├── gulp
│   ├── assets
│   │   ├── fonts.js
│   │   ├── images.js
│   │   ├── index.js
│   │   └── partials.js
│   ├── scripts
│   │   ├── common.js
│   │   ├── core.js
│   │   └── features.js
│   ├── styles
│   │   ├── common.js
│   │   ├── core.js
│   │   ├── features.js
│   │   └── themes.js
│   ├── test
│   │   ├── e2e.js
│   │   └── unit.js
│   ├── linting.js
│   ├── options.js
│   ├── serve.js
│   ├── test.js
│   └── watch.js
├── src
│   ├── public
│   │   ├── common
│   │   ├── core
│   │   │   └── core.js
│   │   ├── features
│   │   └── styles
│   │       ├── core
│   │       ├── themes
│   │       └── global.styl
│   └── server
│       ├── middleware
│       ├── resources
│       └── app.js
├── test
│   ├── config
│   │   └── config
│   ├── lib
│   └── unit
├── .editorconfig
├── .gulpfile.js
├── .jshintrc
├── package.json
└── README.md
```
