(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),b=a,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return t?r.a.createElement(m,l(l({ref:n},u),{},{components:t})):r.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},150:function(e,n,t){"use strict";var a=t(0),r=t(151);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},152:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(150),c=t(148),l=t(53),i=t.n(l),u=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,s=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),O=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(a.useState)(l),j=f[0],y=f[1],T=a.Children.toArray(e.children);if(null!=d){var g=O[d];null!=g&&g!==j&&s.some((function(e){return e.value===g}))&&y(g)}var v=function(e){y(e),null!=d&&h(d,e)},P=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},s.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(P,e.target,e)},onFocus:function(){return v(n)},onClick:function(){v(n)}},t)}))),n?Object(a.cloneElement)(T.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},T.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},153:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return p})),t.d(n,"Method",(function(){return s})),t.d(n,"Path",(function(){return d})),t.d(n,"Url",(function(){return b})),t.d(n,"default",(function(){return O}));var a=t(3),r=t(7),o=(t(0),t(149)),c=t(152),l=t(153),i={id:"updatePayment",slug:"payments-id-put",title:"Update a single Payment record",sidebar_label:"PUT",description:"Updates a payment event."},u={unversionedId:"paths/payments/{id}/updatePayment",id:"paths/payments/{id}/updatePayment",isDocsHomePage:!1,title:"Update a single Payment record",description:"Updates a payment event.",source:"@site/docs/paths/payments/{id}/put.md",slug:"/paths/payments/{id}/payments-id-put",permalink:"/documentation/paths/payments/{id}/payments-id-put",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/payments/{id}/put.md",version:"current",sidebar_label:"PUT",sidebar:"mainSidebar",previous:{title:"Find one Payment record",permalink:"/documentation/paths/payments/{id}/payments-id-get"},next:{title:"Delete a single Payment record",permalink:"/documentation/paths/payments/{id}/payments-id-delete"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Request Body",id:"request-body",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],s=function(e){var n=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},n)},d=function(e){var n=e.children;return Object(o.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},n)},b=function(e){var n=e.children;return Object(o.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},n)},m={toc:p,Method:s,Path:d,Url:b};function O(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"Url"},Object(o.b)(s,{color:"#6b55b2",mdxType:"Method"},"PUT"),Object(o.b)(d,{mdxType:"Path"},unescape(escape("/payments/{id}")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Updates a payment event.")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"name"),Object(o.b)("th",{parentName:"tr",align:"center"},"in"),Object(o.b)("th",{parentName:"tr",align:"center"},"type"),Object(o.b)("th",{parentName:"tr",align:"center"},"required"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",{parentName:"tr",align:"center"},"path"),Object(o.b)("td",{parentName:"tr",align:"center"},"string"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:null},"Payment Id")))),Object(o.b)("h2",{id:"request-body"},"Request Body"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"},{label:"application/xml",value:"application/xml"},{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "amountDue": 0,\n  "amountPaid": 0,\n  "dueDate": "2019-08-24",\n  "date": "2019-08-24"\n}\n'))),Object(o.b)(l.a,{value:"application/xml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<item>\n  <amountDue>0</amountDue>\n  <amountPaid>0</amountPaid>\n  <dueDate>2019-08-24</dueDate>\n  <date>2019-08-24</date>\n</item>\n'))),Object(o.b)(l.a,{value:"application/x-www-form-urlencoded",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "amountDue": 0,\n  "amountPaid": 0,\n  "dueDate": "2019-08-24",\n  "date": "2019-08-24"\n}\n')))),Object(o.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(o.b)(c.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"shell",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'curl --request PUT \\\n  --url https://maiascore.com/payments/%7Bid%7D \\\n  --header \'Authorization: Bearer REPLACE_BEARER_TOKEN\' \\\n  --header \'content-type: application/x-www-form-urlencoded\' \\\n  --data \'{"amountDue":0,"amountPaid":0,"dueDate":"2019-08-24","date":"2019-08-24"}\'\n'))),Object(o.b)(l.a,{value:"node",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "PUT",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/payments/%7Bid%7D",\n  headers: {\n    "content-type": "application/x-www-form-urlencoded",\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.write(\n  JSON.stringify({\n    amountDue: 0,\n    amountPaid: 0,\n    dueDate: "2019-08-24",\n    date: "2019-08-24",\n  })\n);\nreq.end();\n'))),Object(o.b)(l.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\npayload = "{\\"amountDue\\":0,\\"amountPaid\\":0,\\"dueDate\\":\\"2019-08-24\\",\\"date\\":\\"2019-08-24\\"}"\n\nheaders = {\n    \'content-type\': "application/x-www-form-urlencoded",\n    \'Authorization\': "Bearer REPLACE_BEARER_TOKEN"\n    }\n\nconn.request("PUT", "/payments/%7Bid%7D", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(o.b)(l.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/payments/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "PUT",\n  CURLOPT_POSTFIELDS => "{\\"amountDue\\":0,\\"amountPaid\\":0,\\"dueDate\\":\\"2019-08-24\\",\\"date\\":\\"2019-08-24\\"}",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN",\n    "content-type: application/x-www-form-urlencoded"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},'curl --request PUT \\\n  --url https://maiascore.com/payments/%7Bid%7D \\\n  --header \'Authorization: Bearer REPLACE_BEARER_TOKEN\' \\\n  --header \'content-type: application/x-www-form-urlencoded\' \\\n  --data \'{"amountDue":0,"amountPaid":0,"dueDate":"2019-08-24","date":"2019-08-24"}\'\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "PUT",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/payments/%7Bid%7D",\n  headers: {\n    "content-type": "application/x-www-form-urlencoded",\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.write(\n  JSON.stringify({\n    amountDue: 0,\n    amountPaid: 0,\n    dueDate: "2019-08-24",\n    date: "2019-08-24",\n  })\n);\nreq.end();\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\npayload = "{\\"amountDue\\":0,\\"amountPaid\\":0,\\"dueDate\\":\\"2019-08-24\\",\\"date\\":\\"2019-08-24\\"}"\n\nheaders = {\n    \'content-type\': "application/x-www-form-urlencoded",\n    \'Authorization\': "Bearer REPLACE_BEARER_TOKEN"\n    }\n\nconn.request("PUT", "/payments/%7Bid%7D", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/payments/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "PUT",\n  CURLOPT_POSTFIELDS => "{\\"amountDue\\":0,\\"amountPaid\\":0,\\"dueDate\\":\\"2019-08-24\\",\\"date\\":\\"2019-08-24\\"}",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN",\n    "content-type: application/x-www-form-urlencoded"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("h2",{id:"responses"},"Responses"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"200"},"200"),Object(o.b)("p",null,"Retreives the created, updated or requested record query for ","`","Payment","`"," into a ","`","APIResponse","`"," schema."),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 200,\n  "message": "OK",\n  "data": {\n    "id": "string",\n    "amountDue": 0,\n    "amountPaid": 0,\n    "dueDate": "2019-08-24",\n    "date": "2019-08-24",\n    "published_at": "2019-08-24T14:15:22Z",\n    "created_by": "string",\n    "updated_by": "string"\n  }\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"403"},"403"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"404"},"404"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Unexpected error")),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}O.isMDXComponent=!0}}]);