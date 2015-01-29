#generator-weel

##Principles
* **Test First**: Includes tools and scaffolding for unit tests around your
client and server side features.
* **Feature-based**: We organize code by feature, including a feature's
controller, directive, styling, and partial in one place. There will be no
`controllers` or `partials` directories here.
* **Code Re-use**: Encouraging users to put reusable code across features into
the `common` area.
* **Module Theming**: You application will easily support skinning and
customization not requiring separate deployments.
* **Heavy Lodash Use**: Examples and templates set up will not reinvent the
utility wheels (e.g. `if(typeof something ==='undefined') // ...`) and rely on
lodash's proven methods to keep readability, performance and correctness high.

##Target libraries

###Testing
* Mocha
* Chai
* CucumberJS
* Protractor

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
