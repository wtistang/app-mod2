(window.webpackJsonp=window.webpackJsonp||[]).push([[48,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,b=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(p.b)(o.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},i))))))},t}(r.a.Component),T=a("MjG9"),P=a("CzIb"),v=a("Asxa"),N=a("OIbQ"),k=a.n(N),C=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:k.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,f=s.theme,h=s.description,v=s.keywords,N=s.date,k=Object(P.a)().interiorTheme,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=y?n.pathname.replace(y,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",L=f||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:L,pageTitle:g,pageDescription:h,pageKeywords:v,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:L}),m&&Object(p.b)(w,{title:g,slug:I,tabs:m,currentTab:E}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(C,{date:N})),Object(p.b)(j.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FHeL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),b={},c={_frontmatter:b},s=l.a;function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm.seismic.com/Link/Content/DC7PCaMD-l-EKiD7XTpzgp1g"},"CP4Apps Virtual Sales Kit Seismic Page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Applications"},"CP4Apps IBM Demos Page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/en/SSCSJL_4.1.x/welcome.html"},"CP4Apps Knowledge Center")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/cloud-pak-for-applications"},"CP4Apps External Product Page"))))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-resources-index-mdx-17f61f70854d97d08c97.js.map