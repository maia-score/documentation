(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{149:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||s;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},151:function(e,t,n){"use strict";var r=n(0),a=n(152);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},152:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(151),o=n(149),i=n(53),c=n.n(i),l=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,p=e.groupId,b=e.className,m=Object(s.a)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(r.useState)(i),O=f[0],j=f[1],y=r.Children.toArray(e.children);if(null!=p){var T=g[p];null!=T&&T!==O&&u.some((function(e){return e.value===T}))&&j(T)}var v=function(e){j(e),null!=p&&h(p,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},154:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"Method",(function(){return u})),n.d(t,"Path",(function(){return p})),n.d(t,"Url",(function(){return b})),n.d(t,"default",(function(){return g}));var r=n(3),a=n(7),s=(n(0),n(150)),o=n(153),i=n(154),c={id:"updateCustomer",slug:"customers-id-put",title:"Update a single customers record.",sidebar_label:"PUT",description:"This methods updates the information for a single customer."},l={unversionedId:"paths/customers/{id}/updateCustomer",id:"paths/customers/{id}/updateCustomer",isDocsHomePage:!1,title:"Update a single customers record.",description:"This methods updates the information for a single customer.",source:"@site/docs/paths/customers/{id}/put.md",slug:"/paths/customers/{id}/customers-id-put",permalink:"/documentation/paths/customers/{id}/customers-id-put",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/customers/{id}/put.md",version:"current",sidebar_label:"PUT",sidebar:"mainSidebar",previous:{title:"Find one customers record",permalink:"/documentation/paths/customers/{id}/customers-id-get"},next:{title:"Delete a single customers record",permalink:"/documentation/paths/customers/{id}/customers-id-delete"}},d=[{value:"Parameters",id:"parameters",children:[]},{value:"Request Body",id:"request-body",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],u=function(e){var t=e.children,n=e.color;return Object(s.b)("span",{style:{backgroundColor:n,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},t)},p=function(e){var t=e.children;return Object(s.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},t)},b=function(e){var t=e.children;return Object(s.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},t)},m={toc:d,Method:u,Path:p,Url:b};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)(b,{mdxType:"Url"},Object(s.b)(u,{color:"#6b55b2",mdxType:"Method"},"PUT"),Object(s.b)(p,{mdxType:"Path"},unescape(escape("/customers/{id}")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This methods updates the information for a single customer.")),Object(s.b)("h2",{id:"parameters"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"name"),Object(s.b)("th",{parentName:"tr",align:"center"},"in"),Object(s.b)("th",{parentName:"tr",align:"center"},"type"),Object(s.b)("th",{parentName:"tr",align:"center"},"required"),Object(s.b)("th",{parentName:"tr",align:null},"description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("inlineCode",{parentName:"td"},"id")),Object(s.b)("td",{parentName:"tr",align:"center"},"path"),Object(s.b)("td",{parentName:"tr",align:"center"},"string"),Object(s.b)("td",{parentName:"tr",align:"center"},"true"),Object(s.b)("td",{parentName:"tr",align:null},"Customer Id")))),Object(s.b)("h2",{id:"request-body"},"Request Body"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"},{label:"application/xml",value:"application/xml"},{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "string",\n  "referenceId": "string",\n  "dateOfBirth": "2019-08-24",\n  "addressStreet": "string",\n  "addressNeighborhood": "string",\n  "addressCity": "string",\n  "addressState": "string",\n  "addressCountry": "string",\n  "gender": "male",\n  "maritalStatus": "single"\n}\n'))),Object(s.b)(i.a,{value:"application/xml",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<item>\n  <uuid>string</uuid>\n  <referenceId>string</referenceId>\n  <dateOfBirth>2019-08-24</dateOfBirth>\n  <addressStreet>string</addressStreet>\n  <addressNeighborhood>string</addressNeighborhood>\n  <addressCity>string</addressCity>\n  <addressState>string</addressState>\n  <addressCountry>string</addressCountry>\n  <gender>male</gender>\n  <maritalStatus>single</maritalStatus>\n</item>\n'))),Object(s.b)(i.a,{value:"application/x-www-form-urlencoded",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "string",\n  "referenceId": "string",\n  "dateOfBirth": "2019-08-24",\n  "addressStreet": "string",\n  "addressNeighborhood": "string",\n  "addressCity": "string",\n  "addressState": "string",\n  "addressCountry": "string",\n  "gender": "male",\n  "maritalStatus": "single"\n}\n')))),Object(s.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(s.b)(o.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"shell",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},'curl --request PUT \\\n  --url https://maiascore.com/customers/%7Bid%7D \\\n  --header \'Authorization: Bearer REPLACE_BEARER_TOKEN\' \\\n  --header \'content-type: application/x-www-form-urlencoded\' \\\n  --data \'{"uuid":"string","referenceId":"string","dateOfBirth":"2019-08-24","addressStreet":"string","addressNeighborhood":"string","addressCity":"string","addressState":"string","addressCountry":"string","gender":"male","maritalStatus":"single"}\'\n'))),Object(s.b)(i.a,{value:"node",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "PUT",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/customers/%7Bid%7D",\n  headers: {\n    "content-type": "application/x-www-form-urlencoded",\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.write(\n  JSON.stringify({\n    uuid: "string",\n    referenceId: "string",\n    dateOfBirth: "2019-08-24",\n    addressStreet: "string",\n    addressNeighborhood: "string",\n    addressCity: "string",\n    addressState: "string",\n    addressCountry: "string",\n    gender: "male",\n    maritalStatus: "single",\n  })\n);\nreq.end();\n'))),Object(s.b)(i.a,{value:"python",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\npayload = "{\\"uuid\\":\\"string\\",\\"referenceId\\":\\"string\\",\\"dateOfBirth\\":\\"2019-08-24\\",\\"addressStreet\\":\\"string\\",\\"addressNeighborhood\\":\\"string\\",\\"addressCity\\":\\"string\\",\\"addressState\\":\\"string\\",\\"addressCountry\\":\\"string\\",\\"gender\\":\\"male\\",\\"maritalStatus\\":\\"single\\"}"\n\nheaders = {\n    \'content-type\': "application/x-www-form-urlencoded",\n    \'Authorization\': "Bearer REPLACE_BEARER_TOKEN"\n    }\n\nconn.request("PUT", "/customers/%7Bid%7D", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(s.b)(i.a,{value:"php",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/customers/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "PUT",\n  CURLOPT_POSTFIELDS => "{\\"uuid\\":\\"string\\",\\"referenceId\\":\\"string\\",\\"dateOfBirth\\":\\"2019-08-24\\",\\"addressStreet\\":\\"string\\",\\"addressNeighborhood\\":\\"string\\",\\"addressCity\\":\\"string\\",\\"addressState\\":\\"string\\",\\"addressCountry\\":\\"string\\",\\"gender\\":\\"male\\",\\"maritalStatus\\":\\"single\\"}",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN",\n    "content-type: application/x-www-form-urlencoded"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},'curl --request PUT \\\n  --url https://maiascore.com/customers/%7Bid%7D \\\n  --header \'Authorization: Bearer REPLACE_BEARER_TOKEN\' \\\n  --header \'content-type: application/x-www-form-urlencoded\' \\\n  --data \'{"uuid":"string","referenceId":"string","dateOfBirth":"2019-08-24","addressStreet":"string","addressNeighborhood":"string","addressCity":"string","addressState":"string","addressCountry":"string","gender":"male","maritalStatus":"single"}\'\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "PUT",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/customers/%7Bid%7D",\n  headers: {\n    "content-type": "application/x-www-form-urlencoded",\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.write(\n  JSON.stringify({\n    uuid: "string",\n    referenceId: "string",\n    dateOfBirth: "2019-08-24",\n    addressStreet: "string",\n    addressNeighborhood: "string",\n    addressCity: "string",\n    addressState: "string",\n    addressCountry: "string",\n    gender: "male",\n    maritalStatus: "single",\n  })\n);\nreq.end();\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\npayload = "{\\"uuid\\":\\"string\\",\\"referenceId\\":\\"string\\",\\"dateOfBirth\\":\\"2019-08-24\\",\\"addressStreet\\":\\"string\\",\\"addressNeighborhood\\":\\"string\\",\\"addressCity\\":\\"string\\",\\"addressState\\":\\"string\\",\\"addressCountry\\":\\"string\\",\\"gender\\":\\"male\\",\\"maritalStatus\\":\\"single\\"}"\n\nheaders = {\n    \'content-type\': "application/x-www-form-urlencoded",\n    \'Authorization\': "Bearer REPLACE_BEARER_TOKEN"\n    }\n\nconn.request("PUT", "/customers/%7Bid%7D", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/customers/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "PUT",\n  CURLOPT_POSTFIELDS => "{\\"uuid\\":\\"string\\",\\"referenceId\\":\\"string\\",\\"dateOfBirth\\":\\"2019-08-24\\",\\"addressStreet\\":\\"string\\",\\"addressNeighborhood\\":\\"string\\",\\"addressCity\\":\\"string\\",\\"addressState\\":\\"string\\",\\"addressCountry\\":\\"string\\",\\"gender\\":\\"male\\",\\"maritalStatus\\":\\"single\\"}",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN",\n    "content-type: application/x-www-form-urlencoded"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(s.b)("h2",{id:"responses"},"Responses"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"200"},"200"),Object(s.b)("p",null,"Retrieve customers document(s)"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "id": "string",\n  "uuid": "string",\n  "referenceId": "string",\n  "dateOfBirth": "2019-08-24",\n  "addressStreet": "string",\n  "addressNeighborhood": "string",\n  "addressCity": "string",\n  "addressState": "string",\n  "addressCountry": "string",\n  "gender": "male",\n  "maritalStatus": "single",\n  "published_at": "2019-08-24T14:15:22Z",\n  "created_by": "string",\n  "updated_by": "string"\n}\n')))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"403"},"403"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"404"},"404"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"default"},"default"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Unexpected error")),Object(s.b)(o.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"application/json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}g.isMDXComponent=!0}}]);