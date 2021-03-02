(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(155)),s=t(158),l=t(159),o={id:null,slug:"users-me-get",title:null,sidebar_label:null,description:"Retrieve the logged in user information"},c={unversionedId:"paths/users/me/get",id:"paths/users/me/get",isDocsHomePage:!1,title:"get",description:"Retrieve the logged in user information",source:"@site/docs/paths/users/me/get.md",slug:"/paths/users/me/users-me-get",permalink:"/documentation/paths/users/me/users-me-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/users/me/get.md",version:"current",sidebar_label:null},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p={toc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"GET /users/me\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"name"),Object(i.b)("th",{parentName:"tr",align:null},"in"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"required"),Object(i.b)("th",{parentName:"tr",align:null},"description")))),Object(i.b)("h2",{id:"responses"},"Responses"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"200"},"200"),Object(i.b)("p",null,"response"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "id": "string",\n  "username": "string",\n  "email": "string",\n  "provider": "string",\n  "confirmed": false,\n  "blocked": false,\n  "role": {\n    "id": "string",\n    "name": "string",\n    "description": "string",\n    "type": "string",\n    "permissions": ["string"],\n    "users": ["string"],\n    "created_by": "string",\n    "updated_by": "string"\n  },\n  "reports": [\n    {\n      "id": "string",\n      "uuid": "string",\n      "referenceId": "string",\n      "type": "reference",\n      "processed": true,\n      "users_permissions_user": "string",\n      "score": 0,\n      "scoreProbability": 0,\n      "scoreConfidence": 0,\n      "scoreVersion": "string",\n      "published_at": "string",\n      "created_by": "string",\n      "updated_by": "string"\n    }\n  ]\n}\n')))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"403"},"403"),Object(i.b)("p",null,"Forbidden"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"404"},"404"),Object(i.b)("p",null,"Not found"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"default"},"default"),Object(i.b)("p",null,"unexpected error"),Object(i.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))))}b.isMDXComponent=!0},154:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},155:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},156:function(e,n,t){"use strict";var r=t(0),a=t(157);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},157:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},158:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(156),s=t(154),l=t(55),o=t.n(l),c=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,j=Object(r.useState)(l),O=j[0],v=j[1],y=r.Children.toArray(e.children);if(null!=b){var h=f[b];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&v(h)}var x=function(e){v(e),null!=b&&g(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return x(n)},onClick:function(){x(n)}},t)}))),n?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},159:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);