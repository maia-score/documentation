(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{148:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},_=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=b(n),_=r,d=p["".concat(s,".").concat(_)]||p[_]||u[_]||l;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=_;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<l;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";var r=n(0),a=n(151);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},152:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(150),s=n(148),c=n(53),o=n.n(c),i=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,u=e.groupId,_=e.className,d=Object(l.a)(),E=d.tabGroupChoices,O=d.setTabGroupChoices,m=Object(r.useState)(c),N=m[0],g=m[1],j=r.Children.toArray(e.children);if(null!=u){var S=E[u];null!=S&&S!==N&&p.some((function(e){return e.value===S}))&&g(S)}var R=function(e){g(e),null!=u&&O(u,e)},T=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},_)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"Method",(function(){return p})),n.d(t,"Path",(function(){return u})),n.d(t,"Url",(function(){return _})),n.d(t,"default",(function(){return E}));var r=n(3),a=n(7),l=(n(0),n(149)),s=n(152),c=n(153),o={id:"getUserPermissionRoles",slug:"users-permissions-roles-get",title:null,sidebar_label:"GET",description:"Retrieve all role documents"},i={unversionedId:"paths/users-permissions/roles/getUserPermissionRoles",id:"paths/users-permissions/roles/getUserPermissionRoles",isDocsHomePage:!1,title:"getUserPermissionRoles",description:"Retrieve all role documents",source:"@site/docs/paths/users-permissions/roles/get.md",slug:"/paths/users-permissions/roles/users-permissions-roles-get",permalink:"/documentation/paths/users-permissions/roles/users-permissions-roles-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/users-permissions/roles/get.md",version:"current",sidebar_label:"GET"},b=[{value:"Parameters",id:"parameters",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p=function(e){var t=e.children,n=e.color;return Object(l.b)("span",{style:{backgroundColor:n,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},t)},u=function(e){var t=e.children;return Object(l.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},t)},_=function(e){var t=e.children;return Object(l.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},t)},d={toc:b,Method:p,Path:u,Url:_};function E(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(_,{mdxType:"Url"},Object(l.b)(p,{color:"#6b55b2",mdxType:"Method"},"GET"),Object(l.b)(u,{mdxType:"Path"},unescape(escape("/users-permissions/roles")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Retrieve all role documents")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:"center"},"in"),Object(l.b)("th",{parentName:"tr",align:"center"},"type"),Object(l.b)("th",{parentName:"tr",align:"center"},"required"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_limit")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"integer"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of results possible")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_sort")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Sort according to a specific field.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_start")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"integer"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Skip a specific number of entries (especially useful for pagination)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"&#x3D;")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get entries that matches exactly your input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_ne")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that are not equals to something")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_lt")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get record that are lower than a value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_lte")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that are lower than or equal to a value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_gt")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that are greater than a value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_gte")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that are greater than or equal a value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_contains")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that contains a value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_containss")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that contains (case sensitive) a value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_in")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"array"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that matches any value in the array of values")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_nin")),Object(l.b)("td",{parentName:"tr",align:"center"},"query"),Object(l.b)("td",{parentName:"tr",align:"center"},"array"),Object(l.b)("td",{parentName:"tr",align:"center"},"false"),Object(l.b)("td",{parentName:"tr",align:null},"Get records that doesn","'","t match any value in the array of values")))),Object(l.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(l.b)(s.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"shell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"curl --request GET \\\n  --url 'https://maiascore.com/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n"))),Object(l.b)(c.a,{value:"node",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path:\n    "/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'))),Object(l.b)(c.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(l.b)(c.a,{value:"php",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request GET \\\n  --url 'https://maiascore.com/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path:\n    "/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/users-permissions/roles?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(l.b)("h2",{id:"responses"},"Responses"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"200"},"200"),Object(l.b)("p",null,"OK"),Object(l.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'[\n  {\n    "id": "string",\n    "name": "string",\n    "description": "string",\n    "type": "string",\n    "permissions": [\n      {\n        "id": "string",\n        "type": "string",\n        "controller": "string",\n        "action": "string",\n        "enabled": true,\n        "policy": "string",\n        "role": "string",\n        "updated_by": "string"\n      }\n    ],\n    "users": [\n      {\n        "id": "string",\n        "username": "string",\n        "email": "string",\n        "provider": "string",\n        "confirmed": false,\n        "blocked": false,\n        "reports": {\n          "id": "string",\n          "uuid": "string",\n          "referenceId": "string",\n          "type": "reference",\n          "processed": true,\n          "score": 0,\n          "scoreProbability": 0,\n          "scoreConfidence": 0,\n          "scoreVersion": "string",\n          "published_at": "2019-08-24T14:15:22Z",\n          "created_by": "string",\n          "updated_by": "string"\n        },\n        "created_by": "admin",\n        "updated_by": "admin"\n      }\n    ],\n    "created_by": "string",\n    "updated_by": "string"\n  }\n]\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"403"},"403"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(l.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"404"},"404"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(l.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"default"},"default"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Unexpected error")),Object(l.b)(s.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"application/json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}E.isMDXComponent=!0}}]);