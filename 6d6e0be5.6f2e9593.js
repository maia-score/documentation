(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"Method",(function(){return p})),n.d(t,"Path",(function(){return u})),n.d(t,"Url",(function(){return _})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),c=(n(0),n(150)),l=n(153),o=n(154),i={id:"getCompany",slug:"company-get",title:"Retreive company information",sidebar_label:"GET",description:"Returns current Maia customer company information."},b={unversionedId:"paths/company/getCompany",id:"paths/company/getCompany",isDocsHomePage:!1,title:"Retreive company information",description:"Returns current Maia customer company information.",source:"@site/docs/paths/company/get.md",slug:"/paths/company/company-get",permalink:"/documentation/paths/company/company-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/company/get.md",version:"current",sidebar_label:"GET",sidebar:"mainSidebar",previous:{title:"Send confirmation email",permalink:"/documentation/paths/auth/send-email-confirmation/auth-send-email-confirmation-post"},next:{title:"Update company information",permalink:"/documentation/paths/company/company-put"}},s=[{value:"Parameters",id:"parameters",children:[{value:"Code Snippets",id:"code-snippets",children:[]}]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},t)},u=function(e){var t=e.children;return Object(c.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},t)},_=function(e){var t=e.children;return Object(c.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},t)},E={toc:s,Method:p,Path:u,Url:_};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},E,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(_,{mdxType:"Url"},Object(c.b)(p,{color:"#6b55b2",mdxType:"Method"},"GET"),Object(c.b)(u,{mdxType:"Path"},unescape(escape("/company")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Returns current Maia customer company information.")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"name"),Object(c.b)("th",{parentName:"tr",align:"center"},"in"),Object(c.b)("th",{parentName:"tr",align:"center"},"type"),Object(c.b)("th",{parentName:"tr",align:"center"},"required"),Object(c.b)("th",{parentName:"tr",align:null},"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_limit")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"integer"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Maximum number of results possible")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_sort")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Sort according to a specific field.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_start")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"integer"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Skip a specific number of entries (especially useful for pagination)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"&#x3D;")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get entries that matches exactly your input")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_ne")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are not equals to something")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_lt")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get record that are lower than a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_lte")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are lower than or equal to a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_gt")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are greater than a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_gte")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that are greater than or equal a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_contains")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that contains a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_containss")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that contains (case sensitive) a value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_in")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"array"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that matches any value in the array of values")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_nin")),Object(c.b)("td",{parentName:"tr",align:"center"},"query"),Object(c.b)("td",{parentName:"tr",align:"center"},"array"),Object(c.b)("td",{parentName:"tr",align:"center"},"false"),Object(c.b)("td",{parentName:"tr",align:null},"Get records that doesn","'","t match any value in the array of values")))),Object(c.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(c.b)(l.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"shell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl --request GET \\\n  --url 'https://maiascore.com/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n"))),Object(c.b)(o.a,{value:"node",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path:\n    "/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'))),Object(c.b)(o.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(c.b)(o.a,{value:"php",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request GET \\\n  --url 'https://maiascore.com/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path:\n    "/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/company?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(c.b)("h2",{id:"responses"},"Responses"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"200"},"200"),Object(c.b)("p",null,"Retrieve company document(s)"),Object(c.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'[\n  {\n    "id": "b6825a95",\n    "Name": "Fianciera Espectacular",\n    "Slug": "financiera-espectacular",\n    "published_at": "2019-08-24T14:15:22Z",\n    "created_by": "maia",\n    "updated_by": "jlopez"\n  }\n]\n')))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"403"},"403"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(c.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"404"},"404"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(c.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Unexpected error")),Object(c.b)(l.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"application/json",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}m.isMDXComponent=!0},149:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return E}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},_=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),_=a,E=p["".concat(l,".").concat(_)]||p[_]||u[_]||c;return n?r.a.createElement(E,o(o({ref:t},b),{},{components:n})):r.a.createElement(E,o({ref:t},b))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=_;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},151:function(e,t,n){"use strict";var a=n(0),r=n(152);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},152:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(151),l=n(149),o=n(53),i=n.n(o),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,u=e.groupId,_=e.className,E=Object(c.a)(),m=E.tabGroupChoices,O=E.setTabGroupChoices,d=Object(a.useState)(o),N=d[0],j=d[1],S=a.Children.toArray(e.children);if(null!=u){var R=m[u];null!=R&&R!==N&&p.some((function(e){return e.value===R}))&&j(R)}var g=function(e){j(e),null!=u&&O(u,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},_)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(S.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},S.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);