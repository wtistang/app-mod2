(window.webpackJsonp=window.webpackJsonp||[]).push([[29,40,50,51,53,54,55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),m=a("QH2O"),u=a.n(m),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,b=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,b=new RegExp(r+"/?(#.*)?$"),s=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(p.b)(l.Link,{className:h.link,to:""+s},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},i))))))},t}(r.a.Component),T=a("MjG9"),N=a("CzIb"),w=a("Asxa"),P=a("OIbQ"),k=a.n(P),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,u=c.tabs,O=c.title,f=c.theme,h=c.description,w=c.keywords,P=c.date,k=Object(N.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,M=u?I.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",A=f||k;return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:A,pageTitle:O,pageDescription:h,pageKeywords:w,titleType:m},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:u,theme:A}),u&&Object(p.b)(v,{title:O,slug:I,tabs:u,currentTab:M}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(y,{date:P})),Object(p.b)(j.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:M}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},OnQF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),["components"]),b={},s={_frontmatter:b},c=o.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(i.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"App Modernization Use Case Labs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0100-evaluation/"},"AM0100 - Evaluate existing applications using Transformation Advisor")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0120-evaluation/"},"AM0120 - Evaluate existing applications using Liberty Readiness")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0200-replatform/"},"AM0200 - Re-platform an existing Java application to OCP with Transformation Advisor")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0210-replatform/"},"AM0210 - Re-platform an existing Java application to OCP using Open Liberty Operator")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0300-rehost/"},"AM0300 - Rehost an existing Java application to OCP using WAS Base Container"))))}d.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-labs-appmod-labs-index-mdx-25606450c43c1e1040cc.js.map