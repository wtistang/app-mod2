(window.webpackJsonp=window.webpackJsonp||[]).push([[59,63,64,66,67,68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),c=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),p=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},v=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,b=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+v.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:v.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,b=new RegExp(i+"/?(#.*)?$"),l=n.replace(b,a);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(m.b)(c.Link,{className:j.link,to:""+l},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},o))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=s.tabs,v=s.title,O=s.theme,j=s.description,A=s.keywords,N=Object(y.a)().interiorTheme,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,k=T?n.pathname.replace(T,""):n.pathname,C=p?k.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",P=O||N;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:P,pageTitle:v,pageDescription:j,pageKeywords:A,titleType:u},Object(m.b)(g,{title:i?Object(m.b)(i,null):v,label:"label",tabs:p,theme:P}),p&&Object(m.b)(x,{title:v,slug:k,tabs:p,currentTab:C}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:d})),Object(m.b)(f.a,{pageContext:t,location:n,slug:k,tabs:p,currentTab:C}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},mIXT:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return b})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n,i=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("qKvR"),function(){return Object(r.b)("span",null,"Vaccine Delivery - Respond to Events")}),l={},s=(n="FeatureCard",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),d={Title:b,_frontmatter:l},u=c.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{title:"Vaccine Delivery Demo",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAC4jAAAuIwF4pT92AAABtklEQVQY0wGrAVT+AId9dI2AgLOjot+8s7uPgcu+t+7u542swwlLiC9modvo7/Xz7/Dw7/Hx7+/v7evr6eTi4djX1MnIxbSzsQC1vMGMob+rxOa3ssLBinfVysHq7unk5eBacYgyXoSmvdHx8fDz8/Hx8vDx8e/t7ezo6Obf4N7T1dK+wsAArrnHXHCOZnuicoGnqYF22tPO7fHu/vz3vsfLJ09xO2OI5Onr9/bz+fby9PTw8/Hu7Ofj5tjV28nFx6+rAOXl45eis09cf11PWaduVtOyo8Gch5B+eWNxikRniWeDnO7v7+zv7sHV4dfd5tPf6efY2tyeoMOWnJdxfgC2vMh+jKVDMzRkMRyaZkOWZkNsRy8yHxcpHR1FPUGfnaP6+vrs7u+TuNJUdZVsiqeBob2GqslmmsFBiLgAHzdqH0F6PjlNkF9Bi1w2WjogKh8kGR88Mys5eD0fwINm2NLO2djSepWtUGuHYoKgNVt9HUduCzFeDC1cADJGfDVMgnZoc6JpQF49JBwYIxwsXhYqZjIuRolRM4dDIcKikNHSzWN9lIWetbe+xLq6u317fSZFZwYnUbED+8IqJwlrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/cp4i-demohub/static/1f90d6bbacbc2a7c234e9687437b3df1/3cbba/vaccine-delivery.png",srcSet:["/cp4i-demohub/static/1f90d6bbacbc2a7c234e9687437b3df1/7fc1e/vaccine-delivery.png 288w","/cp4i-demohub/static/1f90d6bbacbc2a7c234e9687437b3df1/a5df1/vaccine-delivery.png 576w","/cp4i-demohub/static/1f90d6bbacbc2a7c234e9687437b3df1/3cbba/vaccine-delivery.png 1152w","/cp4i-demohub/static/1f90d6bbacbc2a7c234e9687437b3df1/5dce9/vaccine-delivery.png 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("h2",null,"Vaccine Delivery Demo"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Entry Point"),": Respond to Events"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Use Case Overview"),": In this simple overview of a proposed solution, we invite you on a simulated scenario of a vaccine’s delivery-at-scale journey with IBM through the lens of technology and open innovations. Vaccinating billions of people on the planet requires scale. IBM’s platform along with its services has the potential to provide the capabilities to help optimize, analyze and remove the obstacles in the path to delivering authentic vaccines to aid efforts to protect the population of the world from Covid-19. In this Demo you will process Kafka events using ACE event driven flow to detect and react to anomalies."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Product Components"),": ACE Designer, ACE, KAFKA, Confluence"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Product Version"),": CP4I 4.1 on OCP 4.6"),Object(r.b)("p",null,"Here you will be able to prepare yourself to deliver this demo. To deliver this demo, follow the steps below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cp4i-demohub/salesdemos/carrepair-new/understand"}),"Understand the Demo"),": Learn the Demo Scenario, check the Demo Video and review the Demo Sequence"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cp4i-demohub/salesdemos/carrepair-new/deliver"}),"Deliver the Demo"),": Check the different delivery options and be ready to deliver the demo")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-vaccine-new-overview-mdx-97a9e722dfb5e549bd8e.js.map