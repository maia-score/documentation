(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(155)),s=n(158),l=n(159),o={id:null,slug:"users-permissions-roles-id-get",title:null,sidebar_label:null,description:"Retrieve a role depending on its id"},c={unversionedId:"paths/users-permissions/roles/{id}/get",id:"paths/users-permissions/roles/{id}/get",isDocsHomePage:!1,title:"get",description:"Retrieve a role depending on its id",source:"@site/docs/paths/users-permissions/roles/{id}/get.md",slug:"/paths/users-permissions/roles/{id}/users-permissions-roles-id-get",permalink:"/documentation/paths/users-permissions/roles/{id}/users-permissions-roles-id-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/users-permissions/roles/{id}/get.md",version:"current",sidebar_label:null},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"GET /users-permissions/roles/{id}\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"name"),Object(i.b)("th",{parentName:"tr",align:null},"in"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"required"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"id"),Object(i.b)("td",{parentName:"tr",align:null},"path"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h2",{id:"responses"},"Responses"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"200"},"200"),Object(i.b)("p",null,"response"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "id": "string",\n  "name": "string",\n  "description": "string",\n  "type": "string",\n  "permissions": [\n    {\n      "id": "string",\n      "type": "string",\n      "controller": "string",\n      "action": "string",\n      "enabled": true,\n      "policy": "string",\n      "role": "string",\n      "created_by": "string",\n      "updated_by": "string"\n    }\n  ],\n  "users": [\n    {\n      "id": "string",\n      "username": "string",\n      "email": "string",\n      "provider": "string",\n      "password": "string",\n      "resetPasswordToken": "string",\n      "confirmationToken": "string",\n      "confirmed": true,\n      "blocked": true,\n      "role": "string",\n      "reports": ["string"],\n      "created_by": "string",\n      "updated_by": "string"\n    }\n  ]\n}\n')))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"403"},"403"),Object(i.b)("p",null,"Forbidden"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"404"},"404"),Object(i.b)("p",null,"Not found"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"default"},"default"),Object(i.b)("p",null,"unexpected error"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";var r=n(0),a=n(157);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},157:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},158:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(156),s=n(154),l=n(55),o=n.n(l),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,j=Object(r.useState)(l),O=j[0],v=j[1],y=r.Children.toArray(e.children);if(null!=b){var h=f[b];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&v(h)}var N=function(e){v(e),null!=b&&g(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},159:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);