(window.webpackJsonp=window.webpackJsonp||[]).push([[41,63,64,66,67,68],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),r=a.n(A),n=a("NmYn"),i=a.n(n),o=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),l=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),u=function(e){var t,a=e.title,A=e.theme,r=e.tabs,n=void 0===r?[]:r;return Object(m.b)("div",{className:l()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===A,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,A=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||A,n=r.baseUrl,i=r.subDirectory,c=n+"/edit/"+r.branch+i+"/src/pages"+t;return n?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),O=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,r=A.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),n=a===r,c=new RegExp(r+"/?(#.*)?$"),b=A.replace(c,a);return Object(m.b)("li",{key:e,className:l()((t={},t[O.selectedItem]=n,t),O.listItem)},Object(m.b)(o.Link,{className:O.link,to:""+b},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:O.list},n))))))},t}(r.a.Component),v=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,r=e.Title,n=t.frontmatter,s=void 0===n?{}:n,l=t.relativePagePath,d=t.titleType,p=s.tabs,g=s.title,x=s.theme,O=s.description,N=s.keywords,P=Object(f.a)().interiorTheme,Q=Object(o.useStaticQuery)("2456312558").site.pathPrefix,E=Q?A.pathname.replace(Q,""):A.pathname,T=p?E.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",B=x||P;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:B,pageTitle:g,pageDescription:O,pageKeywords:N,titleType:d},Object(m.b)(u,{title:r?Object(m.b)(r,null):g,label:"label",tabs:p,theme:B}),p&&Object(m.b)(w,{title:g,slug:E,tabs:p,currentTab:T}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:l})),Object(m.b)(h.a,{pageContext:t,location:A,slug:E,tabs:p,currentTab:T}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gYZX:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var A,r=a("wx14"),n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),function(){return Object(i.b)("span",null,"Car Crash Repair - Cognitive API Demo")}),b={},s=(A="FeatureCard",function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={Title:c,_frontmatter:b},d=o.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{title:"Car Crash Repair Demo",color:"dark",mdxType:"FeatureCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABz6hKwn//xAAZEAADAAMAAAAAAAAAAAAAAAABAgMAEhP/2gAIAQEAAQUCezk9MnZtf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAQACAwAAAAAAAAAAAAAAAAIBEgAQIf/aAAgBAQAGPwKlsBPDEa//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhQVFhgf/aAAgBAQABPyHV0oVGSth0qAZ+z//aAAwDAQACAAMAAAAQA8//xAAWEQEBAQAAAAAAAAAAAAAAAAAAETH/2gAIAQMBAT8QxX//xAAWEQEBAQAAAAAAAAAAAAAAAAABADH/2gAIAQIBAT8Q0gv/xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhQYH/2gAIAQEAAT8QT2IwI3mzNhFOtZv3sOAotq2hP//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/cp4i-demohub/static/9413cba43320e3cd205f771ab6d46a4e/2e753/car-repair.jpg",srcSet:["/cp4i-demohub/static/9413cba43320e3cd205f771ab6d46a4e/69549/car-repair.jpg 288w","/cp4i-demohub/static/9413cba43320e3cd205f771ab6d46a4e/473e3/car-repair.jpg 576w","/cp4i-demohub/static/9413cba43320e3cd205f771ab6d46a4e/2e753/car-repair.jpg 1152w","/cp4i-demohub/static/9413cba43320e3cd205f771ab6d46a4e/92dea/car-repair.jpg 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("h2",null,"Car Crash Repair Demo"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Entry Point"),": Create and manage APIs to enable digital business through new channels"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Use Case Overview"),": Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with No-code App Connect Designer, rate limiting plans, security policies and Self-Service API consumption using the API Connect Portal"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Product Components"),": ACE Designer, ACE, APIC"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Product Version"),": CP4I 4.1 on OCP 4.6"),Object(i.b)("p",null,"Here you will be able to prepare yourself to deliver this demo. To deliver this demo, follow the steps below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cp4i-demohub/salesdemos/carrepair-new/understand"}),"Understand the Demo"),": Learn the Demo Scenario, check the Demo Video and review the Demo Sequence"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cp4i-demohub/salesdemos/carrepair-new/deliver"}),"Deliver the Demo"),": Check the different delivery options and be ready to deliver the demo")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-overview-mdx-806b5a288c97b442190b.js.map