(window.webpackJsonp=window.webpackJsonp||[]).push([[35,40,50,51,53,54,55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),x=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(x.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(x.b)("div",{className:"bx--row "+O.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(x.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(x.b)(l.Link,{className:v.link,to:""+c},e))}));return Object(x.b)("div",{className:v.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":t},Object(x.b)("ul",{className:v.list},o))))))},t}(r.a.Component),h=a("MjG9"),N=a("CzIb"),w=a("Asxa"),k=a("OIbQ"),P=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(x.b)(w.c,{className:P.a.row},Object(x.b)(w.a,null,Object(x.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,f=s.theme,v=s.description,w=s.keywords,k=s.date,P=Object(N.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",H=f||P;return Object(x.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:O,pageDescription:v,pageKeywords:w,titleType:u},Object(x.b)(p,{title:r?Object(x.b)(r,null):O,label:"label",tabs:m,theme:H}),m&&Object(x.b)(T,{title:O,slug:I,tabs:m,currentTab:E}),Object(x.b)(h.a,{padded:!0},a,Object(x.b)(g,{relativePagePath:d}),Object(x.b)(y,{date:k})),Object(x.b)(j.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(x.b)(b.a,null))}},"5oo4":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),b={},c={_frontmatter:b},s=i.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Cloud Native Use Case Labs"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/app-mod/labs/cloudnative-labs/cn0100-knative-serving/"},"CN0100 - Introduction to OpenShift Serverless")),Object(o.b)("li",{parentName:"ol"},"CN0200 - Create and Deploy Cloud Native Application Using ODO 2.0 - coming soon")))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-labs-cloudnative-labs-index-mdx-59d548f1f4d7f379a090.js.map