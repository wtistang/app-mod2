(window.webpackJsonp=window.webpackJsonp||[]).push([[56,54,63,64,91,92,94,95,96],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),l=a.n(i),b=a("Wbzz"),r=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),p=a("QH2O"),m=a.n(p),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,l=o.subDirectory,r=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:r},"Edit this page on GitHub"))):null},f=a("FCXl"),g=a("dI71"),h=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===o,r=new RegExp(o+"/?(#.*)?$"),s=n.replace(r,a);return Object(u.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(u.b)(b.Link,{className:h.link,to:""+s},e))}));return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:h.list},i))))))},t}(o.a.Component),N=a("MjG9"),T=a("CzIb"),k=a("Asxa"),P=a("OIbQ"),C=a.n(P),w=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(k.c,{className:C.a.row},Object(u.b)(k.a,null,Object(u.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,c=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,m=c.tabs,j=c.title,g=c.theme,h=c.description,k=c.keywords,P=c.date,C=Object(T.a)().interiorTheme,y=Object(b.useStaticQuery)("2456312558").site.pathPrefix,D=y?n.pathname.replace(y,""):n.pathname,I=m?D.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",A=g||C;return Object(u.b)(s.a,{tabs:m,homepage:!1,theme:A,pageTitle:j,pageDescription:h,pageKeywords:k,titleType:p},Object(u.b)(O,{title:o?Object(u.b)(o,null):j,label:"label",tabs:m,theme:A}),m&&Object(u.b)(v,{title:j,slug:D,tabs:m,currentTab:I}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(x,{relativePagePath:d}),Object(u.b)(w,{date:P})),Object(u.b)(f.a,{pageContext:t,location:n,slug:D,tabs:m,currentTab:I}),Object(u.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},snKM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),["components"]),r={},s={_frontmatter:r},c=l.a;function d(e){var t=e.components,a=Object(o.a)(e,b);return Object(i.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here are the App Modernization and DevOps PoT Labs. "),Object(i.b)("p",null,"All labs are bunsiness use case driven and they are independent of each other, you can pick and choose any lab you like to start with.  If you have any questions, please contact Dr. Yi Tang at ",Object(i.b)("a",{parentName:"p",href:"mailto:yitang@us.ibm.com"},"yitang@us.ibm.com"),"."),Object(i.b)("h2",null,"Basic Docker, Kubernetes and Red Hat OpenShift Container Platform (OCP) Labs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0100-docker101/"},"DK0100 - Docker Introduction")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0200-kubernetes101/"},"DK0200 - Kubernetes Introduction")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/bbasic-labs/dk0300-ocp101/"},"DK0300 - OCP Introduction"))),Object(i.b)("h2",null,"App Modernization Use Case Labs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0100-evaluation/"},"AM0100 - Evaluate existing applications using Transformation Advisor")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0120-evaluation/"},"AM0120 - Evaluate existing applications using Liberty Readiness")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0200-replatform/"},"AM0200 - Re-platform an existing Java application to OCP with Transformation Advisor")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0210-replatform/"},"AM0210 - Re-platform an existing Java application to OCP using Open Liberty Operator")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0300-rehost/"},"AM0300 - Rehost an existing Java application to OCP using WAS Base Container"))),Object(i.b)("h2",null,"Cloud Native Use Case Labs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/cloudnative-labs/cn0100-odo/"},"CN0100 - Create and Deploy Cloud Native Application Using ODO 2.0"))),Object(i.b)("h2",null,"DevOps Use Case Labs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0100-tekton/"},"DV0100 - Using Tekton Pipelines for CI/CD of Microservices to Red Hat OpenShift Container Platform")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0200-devops/"},"DV0200 - Move an existing application to OCP using Transformation Advisor and Cloud Pak for Applications Pipeline"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-index-mdx-88264438ab7f7ba61e16.js.map