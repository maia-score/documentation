(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"Method",(function(){return p})),t.d(n,"Path",(function(){return d})),t.d(n,"Url",(function(){return b})),t.d(n,"default",(function(){return f}));var r=t(3),a=t(7),o=(t(0),t(149)),l=t(152),c=t(153),i={id:"deleteFile",slug:"upload-files-id-delete",title:null,sidebar_label:"DELETE",description:"Delete an uploaded file"},s={unversionedId:"paths/upload/files/{id}/deleteFile",id:"paths/upload/files/{id}/deleteFile",isDocsHomePage:!1,title:"deleteFile",description:"Delete an uploaded file",source:"@site/docs/paths/upload/files/{id}/delete.md",slug:"/paths/upload/files/{id}/upload-files-id-delete",permalink:"/documentation/paths/upload/files/{id}/upload-files-id-delete",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/upload/files/{id}/delete.md",version:"current",sidebar_label:"DELETE"},u=[{value:"Parameters",id:"parameters",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p=function(e){var n=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},n)},d=function(e){var n=e.children;return Object(o.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},n)},b=function(e){var n=e.children;return Object(o.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},n)},m={toc:u,Method:p,Path:d,Url:b};function f(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"Url"},Object(o.b)(p,{color:"#6b55b2",mdxType:"Method"},"DELETE"),Object(o.b)(d,{mdxType:"Path"},unescape(escape("/upload/files/{id}")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Delete an uploaded file")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"name"),Object(o.b)("th",{parentName:"tr",align:"center"},"in"),Object(o.b)("th",{parentName:"tr",align:"center"},"type"),Object(o.b)("th",{parentName:"tr",align:"center"},"required"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",{parentName:"tr",align:"center"},"path"),Object(o.b)("td",{parentName:"tr",align:"center"},"string"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:null},"File Id")))),Object(o.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(o.b)(l.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"shell",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"curl --request DELETE \\\n  --url https://maiascore.com/upload/files/%7Bid%7D \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n"))),Object(o.b)(c.a,{value:"node",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "DELETE",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/upload/files/%7Bid%7D",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'))),Object(o.b)(c.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("DELETE", "/upload/files/%7Bid%7D", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(o.b)(c.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/upload/files/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "DELETE",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request DELETE \\\n  --url https://maiascore.com/upload/files/%7Bid%7D \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "DELETE",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/upload/files/%7Bid%7D",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("DELETE", "/upload/files/%7Bid%7D", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/upload/files/%7Bid%7D",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "DELETE",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(o.b)("h2",{id:"responses"},"Responses"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"200"},"200"),Object(o.b)("p",null,"Retreives the created, updated or requested record query for ","`","Success","`"," into a ","`","APIResponse","`"," schema."),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 200,\n  "message": "OK",\n  "data": {\n    "code": 200,\n    "message": "OK"\n  }\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"403"},"403"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"404"},"404"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Unexpected error")),Object(o.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}f.isMDXComponent=!0},148:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},150:function(e,n,t){"use strict";var r=t(0),a=t(151);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},152:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(150),l=t(148),c=t(53),i=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(r.useState)(c),j=O[0],E=O[1],T=r.Children.toArray(e.children);if(null!=d){var g=f[d];null!=g&&g!==j&&p.some((function(e){return e.value===g}))&&E(g)}var v=function(e){E(e),null!=d&&h(d,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return v(n)},onClick:function(){v(n)}},t)}))),n?Object(r.cloneElement)(T.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},T.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},153:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);