(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(157);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(n,e,t){var a;n.exports=(a=t(152))&&a.default||a},145:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return f}),t.d(e,"StaticQueryContext",function(){return u}),t.d(e,"StaticQuery",function(){return A});var a=t(0),r=t.n(a),o=t(4),i=t.n(o),l=t(140),s=t.n(l);t.d(e,"Link",function(){return s.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var p=t(144),d=t.n(p);t.d(e,"PageRenderer",function(){return d.a});var c=t(35);t.d(e,"parsePath",function(){return c.a});var u=r.a.createContext({}),A=function(n){return r.a.createElement(u.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(n,e,t){"use strict";t.r(e);t(33);var a=t(0),r=t.n(a),o=t(4),i=t.n(o),l=t(52),s=t(2),p=function(n){var e=n.location,t=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:t},t.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=p},153:function(n,e){n.exports="data:font/woff2;base64,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"},157:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(4),i=t.n(o),l=t(158),s=t.n(l),p=t(142),d=t(145),c=function(n){var e=n.siteTitle;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d.Link,{to:"/"},e)))},u=t(161),A=t.n(u),f=t(162),g=t.n(f),m=t(153),k=t.n(m);function h(){var n=A()(["\n  ","\n\n  @font-face {\n    font-family: 'Overpass Mono';\n    font-weight: 300;\n    font-style: 'normal';\n    src: local('Overpass Mono'), local('Overpass-Mono'), url(",") format(\"woff2\");\n    font-display: swap;\n  }\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n    font-weight: normal;\n    font-style: normal;\n    font-family: 'Overpass Mono', 'Courier New', Courier, monospace;\n    font-size: 16px;\n    line-height: 20px;\n    color: white;\n  }\n  \n  body {\n    font-family: 'Overpass Mono', 'Courier New', Courier, monospace;\n    font-size: 16px;\n    line-height: 20px;\n    color: white;\n    background-color: #12151E;\n\n    @media (-webkit-min-device-pixel-ratio: 2) {\n      text-shadow: 0.5px 0 0 red, -0.5px 0 0 cyan;\n    }\n  }\n\n  h1 {\n    font-size: 24px;\n    font-weight: 300;\n    line-height: 32px;\n    margin-bottom: 24px;\n  }\n\n  a {\n    position: relative;\n    color: white;\n    text-decoration: underline;\n\n    &:hover {\n      color: #12151E;\n      background-color: white;\n      text-decoration: none;\n    }\n  }\n\n  input {\n    outline: none;\n    box-shadow: none;\n  }\n\n  button {\n    outline: none;\n    border: none;\n    background-color: white;\n    color: #12151E;\n    padding: 10px 5px;\n\n    &:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n  }\n"]);return h=function(){return n},n}Object(p.injectGlobal)(h(),g.a,k.a);var E="rgba(0, 0, 0, 0.05)",q=p.default.div.withConfig({displayName:"Overlay",componentId:"sc-117p9u7-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;background-image:linear-gradient(45deg,"," 25%,transparent 25%),linear-gradient(-45deg,rgba(0,0,0,0.1) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,"," 75%),linear-gradient(-45deg,transparent 75%,"," 75%);background-size:2px 2px;background-position:0 0,1px 0,1px -1px,0px 1px;background-blend-mode:multiply;z-index:9999;"],E,E,E),y=function(n){var e=n.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"romanonthego.rocks",meta:[{name:"description",content:"romanonthegos person website"},{name:"keywords",content:"pesonal"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(c,{siteTitle:"romanonthego.rocks"}),r.a.createElement(q,null),r.a.createElement("div",null,e))};y.propTypes={children:i.a.node.isRequired};e.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-76c8ab6a66c0e1f41549.js.map