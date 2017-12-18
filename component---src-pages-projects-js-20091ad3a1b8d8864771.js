webpackJsonp([0xc260c743ec7c],{"./src/components/Project.js":function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=s("./node_modules/react/react.js"),c=o(a),l=s("./node_modules/gatsby-link/index.js"),d=(o(l),s("./src/styles/components/Project.module.css")),u=o(d),p=function(e){function t(s){r(this,t);var o=n(this,e.call(this,s));return o.toggleDescription=o.toggleDescription.bind(o),o.showDescription=o.showDescription.bind(o),o.hideDescription=o.hideDescription.bind(o),o.defaultState={isShowingDescription:!1,displayLinkStyle:{display:"none"}},o.state=o.defaultState,o}return i(t,e),t.prototype.toggleDescription=function(){var e=this;this.setState(function(t){return window.setTimeout(function(){var s=t.isShowingDescription?"none":"inline";e.setState({displayLinkStyle:{display:s}})},300),{isShowingDescription:!t.isShowingDescription}})},t.prototype.showDescription=function(){var e=this;this.setState(function(t){return window.setTimeout(function(){e.setState({displayLinkStyle:{display:"inline"}})},300),{isShowingDescription:!0}})},t.prototype.hideDescription=function(){this.setState({displayLinkStyle:{display:"none"},isShowingDescription:!1})},t.prototype.render=function(){var e=this.props.info,t=e.screenshot,s=e.title,o=e.description,r=e.link,n=e.code,i={background:"url("+t+")",backgroundSize:"contain",backgroundRepeat:"no-repeat"};return c.default.createElement("div",{className:u.default.wrapper,onTouchEnd:this.toggleDescription,onMouseEnter:this.showDescription,onMouseLeave:this.hideDescription},c.default.createElement("div",{className:this.state.isShowingDescription?u.default.screenshot+" "+u.default.filtered:u.default.screenshot,style:i}),c.default.createElement("div",{className:this.state.isShowingDescription?u.default.info+" "+u.default.visible:u.default.info+" "+u.default.hidden},c.default.createElement("div",{className:u.default.infoContent},c.default.createElement("h3",{className:u.default.title},s),c.default.createElement("p",{className:u.default.description},o),c.default.createElement("a",{className:u.default.link,style:this.state.displayLinkStyle,href:r,target:"__blank"},"see project"),c.default.createElement("a",{className:u.default.link,style:this.state.displayLinkStyle,href:n,target:"__blank"},"see source code"))))},t}(a.Component);t.default=p,e.exports=t.default},"./src/images/calculator-screenshot.jpeg":function(e,t,s){e.exports=s.p+"static/calculator-screenshot.a8c96ccb.jpeg"},"./src/images/gator-screenshot.jpeg":function(e,t,s){e.exports=s.p+"static/gator-screenshot.7cf473b3.jpeg"},"./src/images/leafSketch.jpg":function(e,t,s){e.exports=s.p+"static/leafSketch.b2451322.jpg"},"./src/images/tictactoe-screenshot.jpeg":function(e,t,s){e.exports=s.p+"static/tictactoe-screenshot.79f640c2.jpeg"},"./src/images/votr-screenshot.jpeg":function(e,t,s){e.exports=s.p+"static/votr-screenshot.5a43b4ff.jpeg"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/shoemakerdr/dev/js/shoemakerdr.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/shoemakerdr/dev/js/shoemakerdr.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/shoemakerdr/dev/js/shoemakerdr.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/shoemakerdr/dev/js/shoemakerdr.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/shoemakerdr/dev/js/shoemakerdr.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/shoemakerdr/dev/js/shoemakerdr.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/projects.js':function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=s("./node_modules/react/react.js"),n=o(r),i=s("./node_modules/gatsby-link/index.js"),a=(o(i),s("./src/components/Project.js")),c=o(a),l=s("./src/images/leafSketch.jpg"),d=o(l),u=s("./src/images/votr-screenshot.jpeg"),p=(o(u),s("./src/styles/pages/projects.module.css")),h=o(p),m=s("./src/project-list.js"),f=o(m),g=function(){return n.default.createElement("div",{className:h.default.wrapper},n.default.createElement("img",{src:d.default,className:"image"}),n.default.createElement("h1",{className:"heading"},"projects"),n.default.createElement("div",null,f.default.length>0&&n.default.createElement("div",{className:h.default.projectsWrapper},f.default.map(function(e,t){return n.default.createElement(c.default,{info:e,key:t})}))))};t.default=g,e.exports=t.default},"./src/project-list.js":function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=s("./src/images/votr-screenshot.jpeg"),n=o(r),i=s("./src/images/calculator-screenshot.jpeg"),a=o(i),c=s("./src/images/tictactoe-screenshot.jpeg"),l=o(c),d=s("./src/images/gator-screenshot.jpeg"),u=o(d);t.default=[{screenshot:n.default,title:"Votr",description:'Fullstack app using React, Node, Express, and Postgres to create, vote on and share polls. "Votr" logo designed with Adobe Illustrator.',link:"https://shoemakerdr.github.io/votr",code:"https://github.com/shoemakerdr/votr"},{screenshot:a.default,title:"Javascript Calculator",description:"",link:"https://shoemakerdr.github.io/calculator",code:"https://github.com/shoemakerdr/calculator"},{screenshot:l.default,title:"Tic Tac Toe",description:'Tic Tac Toe with an unbeatable computer opponent. "X" and "O" pieces designed with Adobe Illustrator.',link:"https://shoemakerdr.github.io/tictactoe",code:"https://github.com/shoemakerdr/tictactoe"},{screenshot:u.default,title:"Who Should Walk Gator",description:"An app built with Python and Google Sheets as a persistance layer to show Gator's walking schedule",link:"https://who-should-walk-gator.herokuapp.com/",code:"https://github.com/shoemakerdr/who-should-walk-gator"}],e.exports=t.default},"./src/styles/components/Project.module.css":function(e,t){e.exports={wrapper:"src-styles-components----Project-module---wrapper---3EGog",screenshot:"src-styles-components----Project-module---screenshot---3EO36",filtered:"src-styles-components----Project-module---filtered---2NupT",info:"src-styles-components----Project-module---info---1UNK3",infoContent:"src-styles-components----Project-module---infoContent---3W1Zm",hidden:"src-styles-components----Project-module---hidden---1hPIo",visible:"src-styles-components----Project-module---visible---hekSv",title:"src-styles-components----Project-module---title---1KeLO",description:"src-styles-components----Project-module---description---34szL",link:"src-styles-components----Project-module---link---3u8fn"}},"./src/styles/pages/projects.module.css":function(e,t){e.exports={wrapper:"src-styles-pages----projects-module---wrapper---C-Doa",projectsWrapper:"src-styles-pages----projects-module---projectsWrapper---IJMBx"}}});
//# sourceMappingURL=component---src-pages-projects-js-20091ad3a1b8d8864771.js.map