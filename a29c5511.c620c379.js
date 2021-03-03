(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"Method",(function(){return u})),t.d(n,"Path",(function(){return b})),t.d(n,"Url",(function(){return d})),t.d(n,"default",(function(){return g}));var r=t(3),a=t(7),s=(t(0),t(150)),o=t(153),i=t(154),l={id:"createUserPermissionRole",slug:"users-permissions-roles-role-put",title:null,sidebar_label:"PUT",description:"Update a role"},c={unversionedId:"paths/users-permissions/roles/{role}/createUserPermissionRole",id:"paths/users-permissions/roles/{role}/createUserPermissionRole",isDocsHomePage:!1,title:"createUserPermissionRole",description:"Update a role",source:"@site/docs/paths/users-permissions/roles/{role}/put.md",slug:"/paths/users-permissions/roles/{role}/users-permissions-roles-role-put",permalink:"/documentation/paths/users-permissions/roles/{role}/users-permissions-roles-role-put",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/users-permissions/roles/{role}/put.md",version:"current",sidebar_label:"PUT"},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Request Body",id:"request-body",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],u=function(e){var n=e.children,t=e.color;return Object(s.b)("span",{style:{backgroundColor:t,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},n)},b=function(e){var n=e.children;return Object(s.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},n)},d=function(e){var n=e.children;return Object(s.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},n)},m={toc:p,Method:u,Path:b,Url:d};function g(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)(d,{mdxType:"Url"},Object(s.b)(u,{color:"#6b55b2",mdxType:"Method"},"PUT"),Object(s.b)(b,{mdxType:"Path"},unescape(escape("/users-permissions/roles/{role}")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Update a role")),Object(s.b)("h2",{id:"parameters"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"name"),Object(s.b)("th",{parentName:"tr",align:"center"},"in"),Object(s.b)("th",{parentName:"tr",align:"center"},"type"),Object(s.b)("th",{parentName:"tr",align:"center"},"required"),Object(s.b)("th",{parentName:"tr",align:null},"description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("inlineCode",{parentName:"td"},"role")),Object(s.b)("td",{parentName:"tr",align:"center"},"path"),Object(s.b)("td",{parentName:"tr",align:"center"},"string"),Object(s.b)("td",{parentName:"tr",align:"center"},"true"),Object(s.b)("td",{parentName:"tr",align:null},"Role Id")))),Object(s.b)("h2",{id:"request-body"},"Request Body"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "string",\n  "description": "string",\n  "type": "string",\n  "permissions": ["string"],\n  "users": ["string"]\n}\n')))),Object(s.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(s.b)(o.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"shell",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},'curl --request PUT \\\n  --url https://maiascore.com/users-permissions/roles/%7Brole%7D \\\n  --header \'Authorization: Bearer REPLACE_BEARER_TOKEN\' \\\n  --header \'content-type: application/json\' \\\n  --data \'{"name":"string","description":"string","type":"string","permissions":["string"],"users":["string"]}\'\n'))),Object(s.b)(i.a,{value:"node",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "PUT",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/users-permissions/roles/%7Brole%7D",\n  headers: {\n    "content-type": "application/json",\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.write(\n  JSON.stringify({\n    name: "string",\n    description: "string",\n    type: "string",\n    permissions: ["string"],\n    users: ["string"],\n  })\n);\nreq.end();\n'))),Object(s.b)(i.a,{value:"python",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\npayload = "{\\"name\\":\\"string\\",\\"description\\":\\"string\\",\\"type\\":\\"string\\",\\"permissions\\":[\\"string\\"],\\"users\\":[\\"string\\"]}"\n\nheaders = {\n    \'content-type\': "application/json",\n    \'Authorization\': "Bearer REPLACE_BEARER_TOKEN"\n    }\n\nconn.request("PUT", "/users-permissions/roles/%7Brole%7D", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(s.b)(i.a,{value:"php",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/users-permissions/roles/%7Brole%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "PUT",\n  CURLOPT_POSTFIELDS => "{\\"name\\":\\"string\\",\\"description\\":\\"string\\",\\"type\\":\\"string\\",\\"permissions\\":[\\"string\\"],\\"users\\":[\\"string\\"]}",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN",\n    "content-type: application/json"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},'curl --request PUT \\\n  --url https://maiascore.com/users-permissions/roles/%7Brole%7D \\\n  --header \'Authorization: Bearer REPLACE_BEARER_TOKEN\' \\\n  --header \'content-type: application/json\' \\\n  --data \'{"name":"string","description":"string","type":"string","permissions":["string"],"users":["string"]}\'\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "PUT",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/users-permissions/roles/%7Brole%7D",\n  headers: {\n    "content-type": "application/json",\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.write(\n  JSON.stringify({\n    name: "string",\n    description: "string",\n    type: "string",\n    permissions: ["string"],\n    users: ["string"],\n  })\n);\nreq.end();\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\npayload = "{\\"name\\":\\"string\\",\\"description\\":\\"string\\",\\"type\\":\\"string\\",\\"permissions\\":[\\"string\\"],\\"users\\":[\\"string\\"]}"\n\nheaders = {\n    \'content-type\': "application/json",\n    \'Authorization\': "Bearer REPLACE_BEARER_TOKEN"\n    }\n\nconn.request("PUT", "/users-permissions/roles/%7Brole%7D", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/users-permissions/roles/%7Brole%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "PUT",\n  CURLOPT_POSTFIELDS => "{\\"name\\":\\"string\\",\\"description\\":\\"string\\",\\"type\\":\\"string\\",\\"permissions\\":[\\"string\\"],\\"users\\":[\\"string\\"]}",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN",\n    "content-type: application/json"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(s.b)("h2",{id:"responses"},"Responses"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"200"},"200"),Object(s.b)("p",null,"OK"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "id": "string",\n  "name": "string",\n  "description": "string",\n  "type": "string",\n  "permissions": [\n    {\n      "id": "string",\n      "type": "string",\n      "controller": "string",\n      "action": "string",\n      "enabled": true,\n      "policy": "string",\n      "role": "string",\n      "updated_by": "string"\n    }\n  ],\n  "users": [\n    {\n      "id": "string",\n      "username": "string",\n      "email": "string",\n      "provider": "string",\n      "password": "string",\n      "resetPasswordToken": "string",\n      "confirmationToken": "string",\n      "confirmed": true,\n      "blocked": true,\n      "role": "string",\n      "reports": ["string"],\n      "created_by": "string",\n      "updated_by": "string"\n    }\n  ],\n  "created_by": "string",\n  "updated_by": "string"\n}\n')))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"403"},"403"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"404"},"404"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"default"},"default"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Unexpected error")),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}g.isMDXComponent=!0},149:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||s;return t?a.a.createElement(m,i(i({ref:n},c),{},{components:t})):a.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},151:function(e,n,t){"use strict";var r=t(0),a=t(152);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},152:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},153:function(e,n,t){"use strict";var r=t(0),a=t.n(r),s=t(151),o=t(149),i=t(53),l=t.n(i),c=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(s.a)(),g=m.tabGroupChoices,O=m.setTabGroupChoices,h=Object(r.useState)(i),j=h[0],f=h[1],y=r.Children.toArray(e.children);if(null!=b){var T=g[b];null!=T&&T!==j&&u.some((function(e){return e.value===T}))&&f(T)}var E=function(e){f(e),null!=b&&O(b,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},u.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(v,e.target,e)},onFocus:function(){return E(n)},onClick:function(){E(n)}},t)}))),n?Object(r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},154:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);