(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,s(s({ref:n},i),{},{components:t})):a.a.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},150:function(e,n,t){"use strict";var r=t(0),a=t(151);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},152:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(150),c=t(148),s=t(53),l=t.n(s),i=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(r.useState)(s),j=f[0],g=f[1],E=r.Children.toArray(e.children);if(null!=d){var T=h[d];null!=T&&T!==j&&p.some((function(e){return e.value===T}))&&g(T)}var v=function(e){g(e),null!=d&&O(d,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case i:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return v(n)},onClick:function(){v(n)}},t)}))),n?Object(r.cloneElement)(E.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},E.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},153:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"Method",(function(){return p})),t.d(n,"Path",(function(){return d})),t.d(n,"Url",(function(){return b})),t.d(n,"default",(function(){return h}));var r=t(3),a=t(7),o=(t(0),t(149)),c=t(152),s=t(153),l={id:"getCustomer",slug:"customers-id-get",title:"Find one Customer record",sidebar_label:"GET",description:"Find one Customer record using Id or Reference."},i={unversionedId:"paths/customers/{id}/getCustomer",id:"paths/customers/{id}/getCustomer",isDocsHomePage:!1,title:"Find one Customer record",description:"Find one Customer record using Id or Reference.",source:"@site/docs/paths/customers/{id}/get.md",slug:"/paths/customers/{id}/customers-id-get",permalink:"/documentation/paths/customers/{id}/customers-id-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/customers/{id}/get.md",version:"current",sidebar_label:"GET",sidebar:"mainSidebar",previous:{title:"Update company information",permalink:"/documentation/paths/company/company-put"},next:{title:"Update a single Customer record.",permalink:"/documentation/paths/customers/{id}/customers-id-put"}},u=[{value:"Parameters",id:"parameters",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p=function(e){var n=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},n)},d=function(e){var n=e.children;return Object(o.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},n)},b=function(e){var n=e.children;return Object(o.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},n)},m={toc:u,Method:p,Path:d,Url:b};function h(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"Url"},Object(o.b)(p,{color:"#6b55b2",mdxType:"Method"},"GET"),Object(o.b)(d,{mdxType:"Path"},unescape(escape("/customers/{id}")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Find one Customer record using Id or Reference.")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"name"),Object(o.b)("th",{parentName:"tr",align:"center"},"in"),Object(o.b)("th",{parentName:"tr",align:"center"},"type"),Object(o.b)("th",{parentName:"tr",align:"center"},"required"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",{parentName:"tr",align:"center"},"path"),Object(o.b)("td",{parentName:"tr",align:"center"},"string"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:null},"Customer Id")))),Object(o.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(o.b)(c.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"curl --request GET \\\n  --url https://maiascore.com/customers/%7Bid%7D \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n"))),Object(o.b)(s.a,{value:"node",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/customers/%7Bid%7D",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'))),Object(o.b)(s.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/customers/%7Bid%7D", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(o.b)(s.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/customers/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request GET \\\n  --url https://maiascore.com/customers/%7Bid%7D \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/customers/%7Bid%7D",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/customers/%7Bid%7D", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/customers/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("h2",{id:"responses"},"Responses"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"200"},"200"),Object(o.b)("p",null,"Retreives the created, updated or requested record query for ","`","Customer","`"," into a ","`","APIResponse","`"," schema."),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 200,\n  "message": "OK",\n  "data": {\n    "id": "b6825a95",\n    "uuid": "26f425d6-9269-442b-89ed-e35ba63bf9c0",\n    "referenceId": "92442",\n    "dateOfBirth": "2019-08-24",\n    "addressStreet": "Av Siempre Viva",\n    "addressNeighborhood": "Los Alamos",\n    "addressCity": "Guadalajara",\n    "addressState": "Jalisco",\n    "addressCountry": "Mexico",\n    "gender": "male",\n    "maritalStatus": "single",\n    "published_at": "2019-08-24T14:15:22Z",\n    "created_by": "jlopez",\n    "updated_by": "jlopez"\n  }\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"403"},"403"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"404"},"404"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Unexpected error")),Object(o.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}h.isMDXComponent=!0}}]);