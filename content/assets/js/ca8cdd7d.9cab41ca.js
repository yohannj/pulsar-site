(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[75887],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>v,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},v=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,v=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,u=d["".concat(l,".").concat(m)]||d[m]||b[m]||s;return r?o.createElement(u,a(a({ref:t},v),{},{components:r})):o.createElement(u,a({ref:t},v))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,a[1]=c;for(var i=2;i<s;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53184:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var o=r(87462),n=r(63366),s=r(67294),a=r(86010),c=r(94780),l=r(44063),i=r(68010),v=r(90948),d=r(1588),b=r(34867);function m(e){return(0,b.Z)("MuiTableHead",e)}(0,d.Z)("MuiTableHead",["root"]);var u=r(85893);const p=["className","component"],w=(0,v.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),g={variant:"head"},f="thead",k=s.forwardRef((function(e,t){const r=(0,i.Z)({props:e,name:"MuiTableHead"}),{className:s,component:v=f}=r,d=(0,n.Z)(r,p),b=(0,o.Z)({},r,{component:v}),k=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},m,t)})(b);return(0,u.jsx)(l.Z.Provider,{value:g,children:(0,u.jsx)(w,(0,o.Z)({as:v,className:(0,a.Z)(k.root,s),ref:t,role:v===f?null:"rowgroup",ownerState:b},d))})}))},60472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>v,toc:()=>b});var o=r(87462),n=(r(67294),r(3905)),s=r(55063),a=r(3094),c=r.n(a);const l={id:"client-ws",title:"WebSocket Client Release Notes",sidebar_label:"WebSocket Client"},i=void 0,v={unversionedId:"client-ws",id:"client-ws",title:"WebSocket Client Release Notes",description:"",source:"@site/release-notes/client-ws.mdx",sourceDirName:".",slug:"/client-ws",permalink:"/release-notes/client-ws",draft:!1,tags:[],version:"current",frontMatter:{id:"client-ws",title:"WebSocket Client Release Notes",sidebar_label:"WebSocket Client"},sidebar:"releaseNote",previous:{title:"Java Client",permalink:"/release-notes/client-java"},next:{title:"C++ Client",permalink:"/release-notes/client-cpp"}},d={},b=[],m={toc:b};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{data:c(),mdxType:"ClientReleaseTable"}))}u.isMDXComponent=!0},3094:e=>{e.exports=[{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-websocket-2.10.1/",doc:"/docs/client-libraries-websocket",version:"v2.10.x"},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-websocket-2.10.0/",doc:"/docs/client-libraries-websocket",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-websocket-2.9.3/",doc:"/docs/2.9.x/client-libraries-websocket",version:"v2.9.x"},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-websocket-2.9.2/",doc:"/docs/2.9.x/client-libraries-websocket",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.4/",doc:"/docs/2.8.x/client-libraries-websocket",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.3/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.2/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.1/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.0/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-websocket-2.7.3/",doc:"/docs/2.7.3/client-libraries-websocket",version:"v2.7.x"},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-websocket-2.7.2/",doc:"/docs/2.7.2/client-libraries-websocket",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-websocket-2.7.1/",doc:"/docs/2.7.1/client-libraries-websocket",version:""},{tagName:"v2.6.3",vtag:"2.6.3",releaseNotes:"/release-notes/versioned/client-websocket-2.6.3/",doc:"/docs/2.6.3/client-libraries-websocket",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-websocket-2.6.2/",doc:"/docs/2.6.2/client-libraries-websocket",version:""},{tagName:"v2.6.0",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/client-websocket-2.6.0/",doc:"/docs/2.6.0/client-libraries-websocket",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-websocket-2.5.1/",doc:"/docs/2.5.1/client-libraries-websocket",version:"v2.5.x"}]},55063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var o=r(67294),n=r(7906),s=r(295),a=r(53252),c=r(53184),l=r(53816),i=r(95999);function v(e){return o.createElement(n.Z,{size:"small"},o.createElement(c.Z,null,o.createElement(l.Z,null,["Version","Release Note","Documentation"].map((e=>o.createElement(a.Z,{className:"font-bold",sx:{color:"inherit"},key:e},o.createElement(i.Z,null,e)))))),o.createElement(s.Z,null,e.data.map(((e,t)=>o.createElement(l.Z,{key:t,sx:{color:"inherit"}},o.createElement(a.Z,{sx:{color:"inherit"}},e.version),o.createElement(a.Z,{sx:{color:"inherit"}},o.createElement("a",{href:e.releaseNotes},e.tagName)),o.createElement(a.Z,{sx:{color:"inherit"}},o.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);