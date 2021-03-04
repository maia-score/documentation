(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return i})),t.d(n,"Method",(function(){return p})),t.d(n,"Path",(function(){return b})),t.d(n,"Url",(function(){return d})),t.d(n,"default",(function(){return h}));var r=t(3),o=t(7),a=(t(0),t(149)),c=t(152),s=t(153),l={id:"countReports",slug:"reports-count-get",title:"Retrieve the number of score Report",sidebar_label:"GET",description:"Get report count across all users."},u={unversionedId:"paths/reports/count/countReports",id:"paths/reports/count/countReports",isDocsHomePage:!1,title:"Retrieve the number of score Report",description:"Get report count across all users.",source:"@site/docs/paths/reports/count/get.md",slug:"/paths/reports/count/reports-count-get",permalink:"/documentation/paths/reports/count/reports-count-get",editUrl:"https://github.com/maia-score/documentation/edit/docs/paths/reports/count/get.md",version:"current",sidebar_label:"GET",sidebar:"mainSidebar",previous:{title:"Find one score report",permalink:"/documentation/paths/reports/{id}/reports-id-get"},next:{title:"Find all the score Report",permalink:"/documentation/paths/reports/reports-get"}},i=[{value:"Code Snippets",id:"code-snippets",children:[]},{value:"Responses",id:"responses",children:[{value:"200",id:"200",children:[]},{value:"403",id:"403",children:[]},{value:"404",id:"404",children:[]},{value:"default",id:"default",children:[]}]}],p=function(e){var n=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"6px",color:"#fff",padding:"0.6rem 1.2rem",textTransform:"uppercase",fontWeight:"bold"}},n)},b=function(e){var n=e.children;return Object(a.b)("span",{style:{borderRadius:"6px",color:"#fff",paddingLeft:"0.8rem",textTransform:"lowercase",fontWeight:"bold",fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontsSize:"1.2rem"}},n)},d=function(e){var n=e.children;return Object(a.b)("div",{style:{marginBottom:"3rem",paddingTop:"1rem"}},n)},m={toc:i,Method:p,Path:b,Url:d};function h(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(d,{mdxType:"Url"},Object(a.b)(p,{color:"#6b55b2",mdxType:"Method"},"GET"),Object(a.b)(b,{mdxType:"Path"},unescape(escape("/reports/count")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Get report count across all users.")),Object(a.b)("h3",{id:"code-snippets"},"Code Snippets"),Object(a.b)(c.a,{defaultValue:"node",values:[{label:"Shell + Curl",value:"shell"},{label:"Node + Native",value:"node"},{label:"Python + Python3",value:"python"},{label:"Php + Curl",value:"php"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"shell",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"curl --request GET \\\n  --url https://maiascore.com/reports/count \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n"))),Object(a.b)(s.a,{value:"node",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/reports/count",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'))),Object(a.b)(s.a,{value:"python",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/reports/count", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),Object(a.b)(s.a,{value:"php",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/reports/count",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request GET \\\n  --url https://maiascore.com/reports/count \\\n  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Node + Native"',title:'"Node',"+":!0,'Native"':!0},'const http = require("https");\n\nconst options = {\n  method: "GET",\n  hostname: "maiascore.com",\n  port: null,\n  path: "/reports/count",\n  headers: {\n    Authorization: "Bearer REPLACE_BEARER_TOKEN",\n  },\n};\n\nconst req = http.request(options, function (res) {\n  const chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    const body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python + Python3"',title:'"Python',"+":!0,'Python3"':!0},'import http.client\n\nconn = http.client.HTTPSConnection("maiascore.com")\n\nheaders = { \'Authorization\': "Bearer REPLACE_BEARER_TOKEN" }\n\nconn.request("GET", "/reports/count", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php",metastring:'title="Php + Curl"',title:'"Php',"+":!0,'Curl"':!0},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => "https://maiascore.com/reports/count",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "Authorization: Bearer REPLACE_BEARER_TOKEN"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),Object(a.b)("h2",{id:"responses"},"Responses"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"200"},"200"),Object(a.b)("p",null,"Retreives total number of ","`","$1","`"," records into ","`","data.count","`"," of an ","`","APIResponse","`"," schema."),Object(a.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 200,\n  "message": "OK",\n  "data": {\n    "count": 2492\n  }\n}\n')))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"403"},"403"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Forbidden"),": this operation requeris authentication"),Object(a.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"404"},"404"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Not found"),": the resource was not found"),Object(a.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"default"},"default"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Unexpected error")),Object(a.b)(c.a,{defaultValue:"application/json",values:[{label:"application/json",value:"application/json"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"application/json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n  "code": 500,\n  "message": "Error - Server Error"\n}\n')))))}h.isMDXComponent=!0},148:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),i=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return t?o.a.createElement(m,s(s({ref:n},u),{},{components:t})):o.a.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},150:function(e,n,t){"use strict";var r=t(0),o=t(151);n.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,n,t){"use strict";var r=t(0),o=Object(r.createContext)(void 0);n.a=o},152:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(150),c=t(148),s=t(53),l=t.n(s),u=37,i=39;n.a=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(a.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(r.useState)(s),j=O[0],E=O[1],T=r.Children.toArray(e.children);if(null!=b){var v=h[b];null!=v&&v!==j&&p.some((function(e){return e.value===v}))&&E(v)}var g=function(e){E(e),null!=b&&f(b,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case i:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return g(n)},onClick:function(){g(n)}},t)}))),n?Object(r.cloneElement)(T.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},T.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},153:function(e,n,t){"use strict";var r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);