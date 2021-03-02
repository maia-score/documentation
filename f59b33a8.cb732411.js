(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(155)),o=n(158),c=n(159),i={id:null,slug:"datasources-id-delete",title:null,sidebar_label:null,description:"Delete a single datasources record"},s={unversionedId:"paths/datasources/{id}/delete",id:"paths/datasources/{id}/delete",isDocsHomePage:!1,title:"delete",description:"Delete a single datasources record",source:"@site/docs/paths/datasources/{id}/delete.md",slug:"/paths/datasources/{id}/datasources-id-delete",permalink:"/documentation/paths/datasources/{id}/datasources-id-delete",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/datasources/{id}/delete.md",version:"current",sidebar_label:null,sidebar:"mainSidebar",previous:{title:"put",permalink:"/documentation/paths/datasources/{id}/datasources-id-put"},next:{title:"get",permalink:"/documentation/paths/datasources/count/datasources-count-get"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-console"},"DELETE /datasources/{id}\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"in"),Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"required"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h2",{id:"responses"},"Responses"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"200"},"200"),Object(l.b)("p",null,"deletes a single datasources based on the ID supplied"),Object(l.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},"0\n")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"403"},"403"),Object(l.b)("p",null,"Forbidden"),Object(l.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"404"},"404"),Object(l.b)("p",null,"Not found"),Object(l.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"default"},"default"),Object(l.b)("p",null,"unexpected error"),Object(l.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";var a=n(0),r=n(157);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},157:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(156),o=n(154),c=n(55),i=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(l.a)(),f=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(a.useState)(c),v=O[0],g=O[1],h=a.Children.toArray(e.children);if(null!=b){var y=f[b];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=b&&j(b,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);