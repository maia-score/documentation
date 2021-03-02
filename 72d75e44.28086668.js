(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(155)),l=n(158),i=n(159),c={id:null,slug:"auth-email-confirmation-get",title:null,sidebar_label:null,description:"Validate a user account"},u={unversionedId:"paths/auth/email-confirmation/get",id:"paths/auth/email-confirmation/get",isDocsHomePage:!1,title:"get",description:"Validate a user account",source:"@site/docs/paths/auth/email-confirmation/get.md",slug:"/paths/auth/email-confirmation/auth-email-confirmation-get",permalink:"/documentation/paths/auth/email-confirmation/auth-email-confirmation-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/auth/email-confirmation/get.md",version:"current",sidebar_label:null,sidebar:"mainSidebar",previous:{title:"get",permalink:"/documentation/paths/auth/{provider}/callback/auth-provider-callback-get"},next:{title:"post",permalink:"/documentation/paths/auth/forgot-password/auth-forgot-password-post"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"GET /auth/email-confirmation\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"name"),Object(o.b)("th",{parentName:"tr",align:null},"in"),Object(o.b)("th",{parentName:"tr",align:null},"type"),Object(o.b)("th",{parentName:"tr",align:null},"required"),Object(o.b)("th",{parentName:"tr",align:null},"description")))),Object(o.b)("h2",{id:"responses"},"Responses"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"200"},"200"),Object(o.b)("p",null,"response"),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "foo": "string"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"403"},"403"),Object(o.b)("p",null,"Forbidden"),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"404"},"404"),Object(o.b)("p",null,"Not found"),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,"unexpected error"),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 0,\n  "message": "string"\n}\n')))))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,i(i({ref:t},u),{},{components:n})):r.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";var a=n(0),r=n(157);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},157:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(156),l=n(154),i=n(55),c=n.n(i),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(a.useState)(i),h=O[0],v=O[1],g=a.Children.toArray(e.children);if(null!=b){var y=f[b];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&v(y)}var x=function(e){v(e),null!=b&&j(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);