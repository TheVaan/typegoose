(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{120:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(o),u=n,b=l["".concat(r,".").concat(u)]||l[u]||h[u]||i;return o?a.a.createElement(b,s(s({ref:t},p),{},{components:o})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},91:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(2),a=o(6),i=(o(0),o(120)),r={id:"faq",title:"FAQ"},s={unversionedId:"guides/faq",id:"guides/faq",isDocsHomePage:!1,title:"FAQ",description:"Repository",source:"@site/../docs/guides/faq.md",slug:"/guides/faq",permalink:"/typegoose/docs/guides/faq",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/faq.md",version:"current",sidebar:"guides",previous:{title:"Quick Start Guide",permalink:"/typegoose/docs/guides/quick-start-guide"},next:{title:"Known Issues",permalink:"/typegoose/docs/guides/known-issues"}},c=[{value:"Repository",id:"repository",children:[{value:"What happened to the original author?",id:"what-happened-to-the-original-author",children:[]},{value:"Is this Project still active?",id:"is-this-project-still-active",children:[]},{value:"Why is the original project not archived?",id:"why-is-the-original-project-not-archived",children:[]},{value:"Why is the package now released in another package?",id:"why-is-the-package-now-released-in-another-package",children:[]},{value:"Why @typegoose/typegoose",id:"why-typegoosetypegoose",children:[]}]},{value:"Functional",id:"functional",children:[{value:"Why does <code>new Model({})</code> not have types?",id:"why-does-new-model-not-have-types",children:[]},{value:"Why is 7.4.x constrained to mongoose 5.10.18?",id:"why-is-74x-constrained-to-mongoose-51018",children:[]}]},{value:"Edge Cases",id:"edge-cases",children:[{value:"I want to the return document with property <code>id</code> instead of <code>_id</code>",id:"i-want-to-the-return-document-with-property-id-instead-of-_id",children:[]}]}],p={rightToc:c};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"repository"},"Repository"),Object(i.b)("h3",{id:"what-happened-to-the-original-author"},"What happened to the original author?"),Object(i.b)("p",null,"A: The original author szokodiakos (github name) ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/szokodiakos/typegoose/issues/99#issuecomment-364639150"}),"has abandoned the project"),", but might look into it again at some time."),Object(i.b)("h3",{id:"is-this-project-still-active"},"Is this Project still active?"),Object(i.b)("p",null,"A: Yes it is, but not on the main repository anymore because of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#what-happened-to-the-original-author"}),"What happened to the original author?")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/articles/permission-levels-for-a-user-account-repository"}),"Github Permissions")," (TL;DR: a collaborator cannot add another collaborater, only the owner can)"),Object(i.b)("h3",{id:"why-is-the-original-project-not-archived"},"Why is the original project not archived?"),Object(i.b)("p",null,"A: because a collaborator cannot archive a project, only the owner can (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#what-happened-to-the-original-author"}),"What happened to the original author?"),")"),Object(i.b)("h3",{id:"why-is-the-package-now-released-in-another-package"},"Why is the package now released in another package?"),Object(i.b)("p",null,"(context: from ",Object(i.b)("inlineCode",{parentName:"p"},"typegoose")," to ",Object(i.b)("inlineCode",{parentName:"p"},"@typegoose/typegoose"),")",Object(i.b)("br",null),"\nA: Because of a Repository Switch (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#is-this-project-still-active"}),"reasons"),") and because a name cannot be used by multiple packages, except if it is scoped."),Object(i.b)("h3",{id:"why-typegoosetypegoose"},"Why @typegoose/typegoose"),Object(i.b)("p",null,"A: because I (hasezoey) don't have permissions over the old ",Object(i.b)("inlineCode",{parentName:"p"},"typegoose")," repository and I dont want to touch the old npm package. It is a typical forking and continuation of an OSS project."),Object(i.b)("h2",{id:"functional"},"Functional"),Object(i.b)("h3",{id:"why-does-new-model-not-have-types"},"Why does ",Object(i.b)("inlineCode",{parentName:"h3"},"new Model({})")," not have types?"),Object(i.b)("p",null,"A: because Typegoose doesn't modify any Mongoose code, it is still the same as Mongoose's original ",Object(i.b)("inlineCode",{parentName:"p"},"new Model()"),", you would have to do ",Object(i.b)("inlineCode",{parentName:"p"},"new Model({} as Class)")," (or sometimes ",Object(i.b)("inlineCode",{parentName:"p"},"new Model({} as Partial<Class>)"),", because of functions.)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": since ",Object(i.b)("inlineCode",{parentName:"p"},"@types/mongoose@5.7.22")," there are typings for ",Object(i.b)("inlineCode",{parentName:"p"},".create"),", but are not fully compatible with Typegoose. For more information pleasae read ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/guides/known-issues#typesmongoose5722-and-higher"}),"known-issues")),Object(i.b)("h3",{id:"why-is-74x-constrained-to-mongoose-51018"},"Why is 7.4.x constrained to mongoose 5.10.18?"),Object(i.b)("p",null,"A: this because in mongoose 5.10.19 and higher, mongoose has its own typescript definitions, and typegoose is not upgraded for that yet"),Object(i.b)("h2",{id:"edge-cases"},"Edge Cases"),Object(i.b)("h3",{id:"i-want-to-the-return-document-with-property-id-instead-of-_id"},"I want to the return document with property ",Object(i.b)("inlineCode",{parentName:"h3"},"id")," instead of ",Object(i.b)("inlineCode",{parentName:"h3"},"_id")),Object(i.b)("p",null,"Mongoose automatically adds an virtual named ",Object(i.b)("inlineCode",{parentName:"p"},"id"),", use the following for type definitions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"class Cat {\n  id: mongoose.Types.ObjectId;\n  _id: mongoose.Types.ObjectId;\n}\n")))}d.isMDXComponent=!0}}]);