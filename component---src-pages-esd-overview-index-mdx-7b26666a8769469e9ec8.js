(window.webpackJsonp=window.webpackJsonp||[]).push([[22,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),x=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(x.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,c=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(x.b)("div",{className:"bx--row "+g.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),T=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),b=n.replace(c,a);return Object(x.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=r,t),T.listItem)},Object(x.b)(l.Link,{className:T.link,to:""+b},e))}));return Object(x.b)("div",{className:T.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":t},Object(x.b)("ul",{className:T.list},r))))))},t}(o.a.Component),v=a("MjG9"),w=a("CzIb"),k=a("Asxa"),y=a("OIbQ"),P=a.n(y),N=function(e){var t=e.date,a=new Date(t);return t?Object(x.b)(k.c,{className:P.a.row},Object(x.b)(k.a,null,Object(x.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,f=s.theme,T=s.description,k=s.keywords,y=s.date,P=Object(w.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,C=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",H=f||P;return Object(x.b)(b.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:T,pageKeywords:k,titleType:u},Object(x.b)(p,{title:o?Object(x.b)(o,null):g,label:"label",tabs:m,theme:H}),m&&Object(x.b)(h,{title:g,slug:E,tabs:m,currentTab:C}),Object(x.b)(v.a,{padded:!0},a,Object(x.b)(j,{relativePagePath:d}),Object(x.b)(N,{date:y})),Object(x.b)(O.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:C}),Object(x.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jfGL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),c={},b={_frontmatter:c},s=i.a;function d(e){var t=e.components,a=Object(o.a)(e,l);return Object(r.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Are you starting the sales cycle of your new opportunity? Maybe you don’t need directly to a live demo. What about to use Videos and QwikDemos (Click through demos) to introduce Cloud Pak for Applications?"),Object(r.b)("p",null,"Here you can consume different type of videos and quikdemos. Enjoy it!"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-esd-overview-index-mdx-7b26666a8769469e9ec8.js.map