(window.webpackJsonp=window.webpackJsonp||[]).push([[44,65,66,68,69,70],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),m=a.n(b),p=a("QH2O"),u=a.n(p),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(d.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),w=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(d.b)("li",{key:e,className:m()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(d.b)(l.Link,{className:w.link,to:""+c},e))}));return Object(d.b)("div",{className:w.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:w.list},i))))))},t}(r.a.Component),v=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,m=t.relativePagePath,p=t.titleType,u=b.tabs,g=b.title,f=b.theme,w=b.description,N=b.keywords,k=Object(y.a)().interiorTheme,A=Object(l.useStaticQuery)("2456312558").site.pathPrefix,T=A?n.pathname.replace(A,""):n.pathname,I=u?T.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",P=f||k;return Object(d.b)(c.a,{tabs:u,homepage:!1,theme:P,pageTitle:g,pageDescription:w,pageKeywords:N,titleType:p},Object(d.b)(h,{title:r?Object(d.b)(r,null):g,label:"label",tabs:u,theme:P}),u&&Object(d.b)(x,{title:g,slug:T,tabs:u,currentTab:I}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:m})),Object(d.b)(j.a,{pageContext:t,location:n,slug:T,tabs:u,currentTab:I}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Tboy:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),function(){return Object(i.b)("span",null,"Cognitive API Demo")}),s={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("AnchorLinks"),m=c("AnchorLink"),p={Title:l,_frontmatter:s},u=o.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(m,{mdxType:"AnchorLink"},"Demo Scenario"),Object(i.b)(m,{mdxType:"AnchorLink"},"Demo Video"),Object(i.b)(m,{mdxType:"AnchorLink"},"Demo Flow")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Demo Scenario"),Object(i.b)("p",null,"We are a Car Repair company: We take in vehicles with problems and repair them – seems simple but.."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We want to gain business advantage by allowing multiple car leasing companies to use us to repair their cars – these companies insist that we expose APIs for them to call to do business with them.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We want to allow their customers to book their cars in for repair and get an estimate for price and number of days in real time – in seconds. Later we will build more APIs to allow customers to query the status of their repairs, or make updates or add comments to their repair cases.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We want to allow them to send photos of their cars so we can check for type, damage etc.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We want to check for errors and issues up-front as quickly as possible to feed back to the customer in real time. Photo not valid? No car in the photo? We’ll tell you instantly so you can re-submit.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We want to minimize manual processes and have the repair request automatically create a repair case in our CRM system (Salesforce). If a customer wants to book a repair at 3am on a Sunday, they can – it’s their choice.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"(Extension scenario): If the car is a convertible/roadster, we don’t repair it, it’s a specialist job. We want convertibles to automatically create a repair case in our partner’s system (ServiceNow) as well.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"(Extension scenario)Our partner speaks Spanish – we don’t! We need the requests translating from English.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We are wanting to grow our business fast with this new model and expect the use of APIs to really increase the number of requests we get. We need our solution to be scalable and highly available."))),Object(i.b)("p",null,"The diagram below shows how all the parties of our business are related:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"980px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACO0lEQVQoz42S2U9TQRjFp7e993YvULaWUlksS0ihYkMpF6hellKWpohgiiiIPPAAURNaHwCBB0NwISpqfBB9kz/z57RoDLjEh5PMmTlzZvKdIxpCIQxjgMlMmol0mvHRMZLJJPF4nFQqhWmaZWSzWakzsFgsCCF+QyAQoKamBlHndWOOT5K8kaOqIYxe50ZTNVRVRbfr6JqE5F6vF03X/2h2AU+X5/n8/hMzs6sEWiKIJgdCVX4JbBLWS5d060Vuk3r1x56ZGsLojxMKBXG7nQhFYLHbykaKFNhqHXibK+TvNBRFw+5xYQv78Af8aJoDi6KgBu042zxYS6Zz+SW2cnNsLyzSPTyA8FtRVBseOdvOVIbptUesbBQws7doM26yf/iS+/eWeffhlInFVaojfkbmr/DidI3BhXrEq6Nj3k5lKczlGbwzg4h6UNw6tbEYG3c3Ofl4xpO95xS31qlovcrJ129sFHbJ3C7gCjZjzkY5erNL8dkBm/v9iL5YD93hRvr6ErS3d5TnoJRm5LDiketgdS3JxDWS16Pls+GRMczMJJH2cx4K1NHR2YvTEyTS0oQorOQ5O97ny+tDHj5eky9UYXNqZfHm1g698UQ58RKfmMoxn18m3BiSFfGz9GCdkfQ0oYaArE39eSi5XI6DvR22i0WMsSFExC3DOO/azdEMLa0RGZYbu6xQZ1cP/UaKyspKXC4X8YRBVzRGleQ+n+9n6hcr8bfi/jdKBoqMvoTLZpZLe6X1v3gJ3wHnJzQy6SLl3wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"scenario 1",title:"scenario 1",src:"/cp4i-demohub/static/e4ae8aee4c21b4f6f46760370cd6eb64/26e05/scenario-1.png",srcSet:["/cp4i-demohub/static/e4ae8aee4c21b4f6f46760370cd6eb64/7fc1e/scenario-1.png 288w","/cp4i-demohub/static/e4ae8aee4c21b4f6f46760370cd6eb64/a5df1/scenario-1.png 576w","/cp4i-demohub/static/e4ae8aee4c21b4f6f46760370cd6eb64/26e05/scenario-1.png 980w"],sizes:"(max-width: 980px) 100vw, 980px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("hr",null),Object(i.b)("h3",null,"Demo Video"),Object(i.b)("p",null,"Do you want to understand better the Car Repair Demo? Check the video below."),Object(i.b)("video",{width:"560",height:"315",controls:!0},Object(i.b)("source",{src:"https://dw1.s81c.com/caas-storage/5Khi7XGf/_videos/IBM%20Cloud%20Pak%20for%20Integration%20Overview_%20Creating%20and%20Managing%20APIs.mp4",type:"video/mp4"})),Object(i.b)("hr",null),Object(i.b)("h3",null,"Demo Flow"),Object(i.b)("p",null,"Here is the list of the macro steps of this Demo:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Scenario Introduction"),Object(i.b)("li",{parentName:"ul"},"API Request"),Object(i.b)("li",{parentName:"ul"},"Image Recognition"),Object(i.b)("li",{parentName:"ul"},"Error Handling"),Object(i.b)("li",{parentName:"ul"},"Salesforce Integration"),Object(i.b)("li",{parentName:"ul"},"Tone Analysis"),Object(i.b)("li",{parentName:"ul"},"Attach the Image on SalesForce"),Object(i.b)("li",{parentName:"ul"},"Summary")),Object(i.b)("p",null,"On the Deliver page, you have the Guided Tour for each Delivery Option, explaining everything that you will do in each macro step."),Object(i.b)("hr",null))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-understand-mdx-a6245a8dda660f35ffd2.js.map