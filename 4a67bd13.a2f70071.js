(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},_=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(n),_=r,d=p["".concat(i,".").concat(_)]||p[_]||u[_]||c;return n?a.a.createElement(d,l(l({ref:t},o),{},{components:n})):a.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=_;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";var r=n(0),a=n(151);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},152:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(150),i=n(148),l=n(53),s=n.n(l),o=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,u=e.groupId,_=e.className,d=Object(c.a)(),O=d.tabGroupChoices,E=d.setTabGroupChoices,m=Object(r.useState)(l),N=m[0],g=m[1],j=r.Children.toArray(e.children);if(null!=u){var S=O[u];null!=S&&S!==N&&p.some((function(e){return e.value===S}))&&g(S)}var h=function(e){g(e),null!=u&&E(u,e)},T=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},_)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"Method",(function(){return p})),n.d(t,"Path",(function(){return u})),n.d(t,"Url",(function(){return _})),n.d(t,"default",(function(){return O}));var r=n(3),a=n(7),c=(n(0),n(149)),i=n(152),l=n(153),s={id:"findUserPermission",slug:"users-permissions-search-id-get",title:null,sidebar_label:"GET",description:"Search for users"},o={unversionedId:"paths/users-permissions/search/{id}/findUserPermission",id:"paths/users-permissions/search/{id}/findUserPermission",isDocsHomePage:!1,title:"findUserPermission",description:"Search for users",source:"@site/docs/paths/users-permissions/search/{id}/get.md",slug:"/paths/users-permissions/search/{id}/users-permissions-search-id-get",permalink:"/documentation/paths/users-permissions/search/{id}/users-permissions-search-id-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/users-permissions/search/{id}/get.md",version:"current",sidebar_label:"GET"},b=[{value:"Parameters",id:"parameters",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},t)},u=function(e){var t=e.children;return Object(c.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},t)},_=function(e){var t=e.children;return Object(c.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},t)},d={toc:b,Method:p,Path:u,Url:_};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(_,{mdxType:"Url"},Object(c.b)(p,{color:"#6b55b2",mdxType:"Method"},"GET"),Object(c.b)(u,{mdxType:"Path"},unescape(escape("/users-permissions/search/{id}")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Search for users")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"name"),Object(c.b)("th",{parentName:"tr",align:"center"},"in"),Object(c.b)("th",{parentName:"tr",align:"center"},"type"),Object(c.b)("th",{parentName:"tr",align:"center"},"required"),Object(c.b)("th",{parentName:"tr",align:null},"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",{parentName:"tr",align:"center"},"path"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"true"),Object(c.b)("td",{parentName:"tr",align:null},"User Id")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_limit")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"integer"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Maximum number of results possible")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_sort")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Sort according to a specific field.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_start")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"integer"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Skip a specific number of entries (especially useful for pagination)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"&#x3D;")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get entries that matches exactly your input")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_ne")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are not equals to something")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_lt")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get record that are lower than a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_lte")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are lower than or equal to a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_gt")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are greater than a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_gte")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are greater than or equal a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_contains")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that contains a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_containss")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that contains (case sensitive) a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_in")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"array"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that matches any value in the array of values")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_nin")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"array"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that doesn","'","t match any value in the array of values")))),Object(c.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(c.b)(i.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl --request GET \\\n  --url 'https://maiascore.com/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n"))),Object(c.b)(l.a,{value:"node",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path:\n    "/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'))),Object(c.b)(l.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(c.b)(l.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request GET \\\n  --url 'https://maiascore.com/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path:\n    "/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/users-permissions/search/%7Bid%7D?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(c.b)("h2",{id:"responses"},"Responses"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"200"},"200"),Object(c.b)("p",null,"OK"),Object(c.b)(i.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'[\n  {\n    "id": "string",\n    "username": "string",\n    "email": "string",\n    "provider": "string",\n    "confirmed": false,\n    "blocked": false,\n    "role": {\n      "id": "string",\n      "name": "string",\n      "description": "string",\n      "type": "string",\n      "permissions": [\n        {\n          "id": "string",\n          "type": "string",\n          "controller": "string",\n          "action": "string",\n          "enabled": true,\n          "policy": "string",\n          "role": "string",\n          "updated_by": "string"\n        }\n      ],\n      "users": [null],\n      "created_by": "string",\n      "updated_by": "string"\n    },\n    "reports": {\n      "id": "string",\n      "uuid": "string",\n      "referenceId": "string",\n      "type": "reference",\n      "processed": true,\n      "score": 0,\n      "scoreProbability": 0,\n      "scoreConfidence": 0,\n      "scoreVersion": "string",\n      "published_at": "2019-08-24T14:15:22Z",\n      "created_by": "string",\n      "updated_by": "string"\n    },\n    "created_by": "admin",\n    "updated_by": "admin"\n  }\n]\n')))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"403"},"403"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(c.b)(i.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"404"},"404"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(c.b)(i.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Unexpected error")),Object(c.b)(i.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}O.isMDXComponent=!0}}]);