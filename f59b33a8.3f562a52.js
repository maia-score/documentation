(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"Method",(function(){return p})),n.d(t,"Path",(function(){return d})),n.d(t,"Url",(function(){return b})),n.d(t,"default",(function(){return h}));var a=n(3),r=n(7),o=(n(0),n(150)),c=n(153),s=n(154),l={id:"deleteDatasource",slug:"datasources-id-delete",title:"Delete a single datasources record",sidebar_label:"DELETE",description:"Removes the connection with a data source and erases login information. Please note that a reference of the data source will remain to ensure consistence about data origin on customer and payment records, but data source cannot be longer used or accessed."},i={unversionedId:"paths/datasources/{id}/deleteDatasource",id:"paths/datasources/{id}/deleteDatasource",isDocsHomePage:!1,title:"Delete a single datasources record",description:"Removes the connection with a data source and erases login information. Please note that a reference of the data source will remain to ensure consistence about data origin on customer and payment records, but data source cannot be longer used or accessed.",source:"@site/docs/paths/datasources/{id}/delete.md",slug:"/paths/datasources/{id}/datasources-id-delete",permalink:"/documentation/paths/datasources/{id}/datasources-id-delete",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/datasources/{id}/delete.md",version:"current",sidebar_label:"DELETE",sidebar:"mainSidebar",previous:{title:"Fields to uptade a data source",permalink:"/documentation/paths/datasources/{id}/datasources-id-put"},next:{title:"Retrieve the number of datasources documents",permalink:"/documentation/paths/datasources/count/datasources-count-get"}},u=[{value:"Parameters",id:"parameters",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},t)},d=function(e){var t=e.children;return Object(o.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},t)},b=function(e){var t=e.children;return Object(o.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},t)},m={toc:u,Method:p,Path:d,Url:b};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"Url"},Object(o.b)(p,{color:"#6b55b2",mdxType:"Method"},"DELETE"),Object(o.b)(d,{mdxType:"Path"},unescape(escape("/datasources/{id}")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Removes the connection with a data source and erases login information. Please note that a reference of the data source will remain to ensure consistence about data origin on customer and payment records, but data source cannot be longer used or accessed.")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"name"),Object(o.b)("th",{parentName:"tr",align:"center"},"in"),Object(o.b)("th",{parentName:"tr",align:"center"},"type"),Object(o.b)("th",{parentName:"tr",align:"center"},"required"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",{parentName:"tr",align:"center"},"path"),Object(o.b)("td",{parentName:"tr",align:"center"},"string"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:null},"Datasource Id")))),Object(o.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(o.b)(c.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"curl --request DELETE \\\n  --url https://maiascore.com/datasources/%7Bid%7D \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n"))),Object(o.b)(s.a,{value:"node",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "DELETE",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/datasources/%7Bid%7D",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'))),Object(o.b)(s.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("DELETE", "/datasources/%7Bid%7D", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(o.b)(s.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/datasources/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "DELETE",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request DELETE \\\n  --url https://maiascore.com/datasources/%7Bid%7D \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "DELETE",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/datasources/%7Bid%7D",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("DELETE", "/datasources/%7Bid%7D", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/datasources/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "DELETE",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("h2",{id:"responses"},"Responses"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"200"},"200"),Object(o.b)("p",null,"deletes a single datasources based on the ID supplied"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},"0\n")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"403"},"403"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"404"},"404"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Unexpected error")),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}h.isMDXComponent=!0},149:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,s(s({ref:t},i),{},{components:n})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},151:function(e,t,n){"use strict";var a=n(0),r=n(152);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},152:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(151),c=n(149),s=n(53),l=n.n(s),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(a.useState)(s),j=f[0],E=f[1],g=a.Children.toArray(e.children);if(null!=d){var T=h[d];null!=T&&T!==j&&p.some((function(e){return e.value===T}))&&E(T)}var v=function(e){E(e),null!=d&&O(d,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);