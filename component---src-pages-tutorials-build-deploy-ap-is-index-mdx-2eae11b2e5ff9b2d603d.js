(window.webpackJsonp=window.webpackJsonp||[]).push([[40,41,42],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),o=t.n(i),n=t("NmYn"),c=t.n(n),s=t("Wbzz"),l=t("Xrax"),b=t("k4MR"),r=t("TSYQ"),d=t.n(r),p=t("QH2O"),g=t.n(p),m=t("qKvR"),u=function(e){var a,t=e.title,i=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(m.b)("div",{className:d()(g.a.pageHeader,(a={},a[g.a.withTabs]=n.length,a[g.a.darkMode]="dark"===i,a))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:g.a.text},t)))))},A=t("BAC9"),f=function(e){var a=e.relativePagePath,t=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||i,n=o.baseUrl,c=o.subDirectory,l=n+"/edit/"+o.branch+c+"/src/pages"+a;return n?Object(m.b)("div",{className:"bx--row "+A.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:A.link,href:l},"Edit this page on GitHub"))):null},h=t("FCXl"),y=t("dI71"),w=t("I8xM"),O=function(e){function a(){return e.apply(this,arguments)||this}return Object(y.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,i=t.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var a,o=c()(e,{lower:!0,strict:!0}),n=o===i,l=new RegExp(i+"/?(#.*)?$"),b=t.replace(l,o);return Object(m.b)("li",{key:e,className:d()((a={},a[w.selectedItem]=n,a),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+b},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:w.list},o))))))},a}(o.a.Component),k=t("MjG9"),j=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,o=e.Title,n=a.frontmatter,r=void 0===n?{}:n,d=a.relativePagePath,p=a.titleType,g=r.tabs,A=r.title,y=r.theme,w=r.description,x=r.keywords,B=Object(j.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,v=N?i.pathname.replace(N,""):i.pathname,C=g?v.split("/").filter(Boolean).slice(-1)[0]||c()(g[0],{lower:!0}):"",I=y||B;return Object(m.b)(b.a,{tabs:g,homepage:!1,theme:I,pageTitle:A,pageDescription:w,pageKeywords:x,titleType:p},Object(m.b)(u,{title:o?Object(m.b)(o,null):A,label:"label",tabs:g,theme:I}),g&&Object(m.b)(O,{slug:v,tabs:g,currentTab:C}),Object(m.b)(k.a,{padded:!0},t,Object(m.b)(f,{relativePagePath:d})),Object(m.b)(h.a,{pageContext:a,location:i,slug:v,tabs:g,currentTab:C}),Object(m.b)(l.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rZJ8:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return g}));var i=t("wx14"),o=t("zLVn"),n=(t("q1tI"),t("7ljp")),c=t("013z"),s=(t("rl46"),t("qKvR"),{}),l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},b=l("AnchorLinks"),r=l("AnchorLink"),d={_frontmatter:s},p=c.a;function g(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(n.b)(p,Object(i.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this tutorial, you use the IBM Cloud Pak for Integration 2020.3.1 to deploy an App Integration flow on containers and expose it as a secure rate-limited API on RedHat OpenShift 4.4."),Object(n.b)("p",null,"Extend your back-end integrations securely to partners and developers.\nExtending access via APIs to your back-end integrations empower your partners and developer community to create new business value, technical value, and customer experiences for your products and offerings. Spur innovations where a number of technologies are combined to create something new, for example, extending the ability apply for loan pre-approvals that can be used within apps that search for cars or real estate. To do this, you must first create the back-end integrations, which combine data from existing core systems, disparate assets, or SaaS services with the ability to send critical data between systems reliably. Second, you need to provide APIs to your back-end integrations that secure access and apply rate limits.\nIn this tutorial, you learn how to deploy an app integration flow that takes data from one source and sends it to a message queue for reliable delivery. Then, you expose this integration as a rate-limited API secured by a key and secret. This integration flow is deployed quickly and easily as an independent, auto-scalable microservice running on containers. By using RedHat OpenShift as a foundation."),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(r,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(r,{mdxType:"AnchorLink"},"Preparing the environment"),Object(n.b)(r,{mdxType:"AnchorLink"},"Configuring IBM MQ"),Object(n.b)(r,{mdxType:"AnchorLink"},"Creating a BAR File"),Object(n.b)(r,{mdxType:"AnchorLink"},"Deploying a BAR file"),Object(n.b)(r,{mdxType:"AnchorLink"},"Configuring API Connect"),Object(n.b)(r,{mdxType:"AnchorLink"},"Sharing the API"),Object(n.b)(r,{mdxType:"AnchorLink"},"Using Operational Dashboard"),Object(n.b)(r,{mdxType:"AnchorLink"},"Summary")),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Implement enterprise grade messaging that is secure and reliable for any application across your backend integration architecture. Modern applications and APIs all need the ability to communicate data reliably between mission critical systems across internal/external data sources, networks, and regions. In mission critical environments your messaging infrastructure must be robust, reliable, and secure with the ability to integrate into your applications and APIs at pace and scale. In this tutorial, you create a message queue that receives order data from an API call to a retail ordering system. The red box in the diagram shows what you are creating and where it fits in the overall architecture of a mobile retail buying application."),Object(n.b)("h3",null,"Takeaways"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Exploring multiple integration capabilities within a single platform"),Object(n.b)("li",{parentName:"ul"},"Configuring IBM MQ"),Object(n.b)("li",{parentName:"ul"},"Creating an integration flow that connects to a message queue"),Object(n.b)("li",{parentName:"ul"},"Deploy the integration flow as a container in Kubernetes"),Object(n.b)("li",{parentName:"ul"},"Checking the message using MQ Web Console"),Object(n.b)("li",{parentName:"ul"},"Checking this message using Operational Dashboard (tracing)")),Object(n.b)("h2",null,"Task 1 - Preparing the environment"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note: If your using this in a multi-user ROKS setup, the environment is already prepared for you. Please login to the cluster using the credentials provided by your instrcutor and jump to ",Object(n.b)("a",Object(i.a)({parentName:"strong"},{href:"#configuring-ibm-mq"}),"Configuring IBM MQ"),". Also, maske sure that you use a prefix provided by the instructor for queue, topic and server names.")),Object(n.b)("p",null,"As this is a new deployment of the Cloud Pak for Integration, you must execute some steps to prepare the environment. Initial setup steps are only needed for a fresh installation of the platform. They do not need to be repeated.\nYou can use your workstation (MAC OSX) for working in this lab."),Object(n.b)("p",null,"In your workstation open a browser and enter ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"http://cloud.ibm.com"}),"http://cloud.ibm.com")," and enter your ibmid  and click continue and password to login IBM Cloud."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.83333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABfElEQVQ4y52TCW7DIBBFc/8TNkmbpPG+AWaHLL9AbDVtnW5ITzOD5OdBDCtKCfquQ9930Frhr+t6vQZShnVxxmogFFlRYyAjlPGQOjDFWM972np4/461NsnupZcLsCKUI68J8qpH03OM0oNwByYcuHShvuVSOzj3jtb6gzB2GFlRFoQVQTuI8KFJglkyo4LMO5u6clNcEsaYOszKDgNT4MoHmU1CKm5iayfcTx3eVhLGYwp9TkJlThDKJT4f81dCOkrUA0dLJXomICRPH/iTTzi/jDb2QYc9QfZaIj9WKLIy5ZIyOCFgBX+I5uOysN5ssd8ecNjs8fL0jP3TFqyuIMNsiq5dJszsWOS4GLMgXG+CbIdy94rmWILkBURTBeoErwPNHaluwLLjsnAgDFneou0oRmHBuAEdDQgz4ELDWw1nvqKkXD5yfCFFPYQbPaVbjogpplzfkBNiekEmdLd8KWGw4wzOA/15sOkU5/1Yc/XN2MQ/4XrBf9e9LK43o8Y/GXN8Qg0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 4684368ee9aef605",title:"tutorial html 4684368ee9aef605",src:"/cp4i-demohub/static/e9f5da994a2ed860a4c9aac8c5db5524/3cbba/tutorial_html_4684368ee9aef605.png",srcSet:["/cp4i-demohub/static/e9f5da994a2ed860a4c9aac8c5db5524/7fc1e/tutorial_html_4684368ee9aef605.png 288w","/cp4i-demohub/static/e9f5da994a2ed860a4c9aac8c5db5524/a5df1/tutorial_html_4684368ee9aef605.png 576w","/cp4i-demohub/static/e9f5da994a2ed860a4c9aac8c5db5524/3cbba/tutorial_html_4684368ee9aef605.png 1152w","/cp4i-demohub/static/e9f5da994a2ed860a4c9aac8c5db5524/4ef37/tutorial_html_4684368ee9aef605.png 1380w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Use the password specified in parenthesis to login to VNC"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABz0lEQVQoz6WSXWsaQRSGF4yg61f82N3Y2FIoEiJBCaHWICmtOy4IJb3LTeld/496o39Im2tvFEpIXGOiJqtpWlkbUN7M7NZlXQMpdOHZmTnznndmzgyn6zPM53Posxmm978w6fcxVnuYqCpuBkN0e5c476q4oLH+9QDXwxHGdz+hTe6w0Hp40Ke41Sb4cXGGM60LrlQqoVgsQlEUKLQlhQKILFutTAhkmSGb0DFhOkJzaN/IIeY8UYrgQqEQeK8XPM8b+Hy+f8DU8Qxbjt/vB7e9nYAgCBBF8b9gHpIkgduiv0gkglgshmg0utIywVPYNUvYmJlyiVevIYhU5DALh8PYcLvh/ovL5bJgc05Ty/BQ+YDdzD7dpTnJgqyuyWQS5XIZ1WoVlUoF9VoN9XrdIJVKIRgMGto1Q+XzF6TfHtFVzWOzerBC5/N5/Nb/4Fy9wv10BvtXoC/A4/EY2jVDcvwVewfv6Q7DK4aHuRzmNPlqNMbl4JZyg/5Qw+I5w08n35B599GqCwsGAgGk02l0Om20Wi00m000Gk18Pz1Fu91GNps1nsmTR36zswfpxcu1G7bfdDwet2Ax56tYMZREge5u0yaIrpgymMES54JOw0cA3p6Nbmq9xwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html dcc3a9fa250b6267",title:"tutorial html dcc3a9fa250b6267",src:"/cp4i-demohub/static/ca1fc76e7475a930695ba9e743820ab3/929af/tutorial_html_dcc3a9fa250b6267.png",srcSet:["/cp4i-demohub/static/ca1fc76e7475a930695ba9e743820ab3/7fc1e/tutorial_html_dcc3a9fa250b6267.png 288w","/cp4i-demohub/static/ca1fc76e7475a930695ba9e743820ab3/a5df1/tutorial_html_dcc3a9fa250b6267.png 576w","/cp4i-demohub/static/ca1fc76e7475a930695ba9e743820ab3/929af/tutorial_html_dcc3a9fa250b6267.png 900w"],sizes:"(max-width: 900px) 100vw, 900px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"1.In your workstation open a browser and enter ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"http://cloud.ibm.com"}),"http://cloud.ibm.com")," and enter your ",Object(n.b)("strong",{parentName:"p"},"ibmid")," and click continue and password to login IBM Cloud."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACHVAAAh1QEEnLSdAAAB3klEQVQoz31Rz2vUUBB+895LNtnsJtkkm6y7222XLburPYh4EKXWiwcpgoiI4FVBWkXoD/TgofQgiAgilnrxIgqC6EHrwf/u80tSvVh8MMybmTff++YbVRQF4jj+j4Un5DqIozZ9gni4jiibIUkSZFkGxQNrbXk52cSjtXl3/q0Vj6EWXkJ5K4x1nfObLeTdLsIwRJp14fk+CwIRFm3Cx8tQTgHRHnOmygsbdX8bevkjJL0D1VhkvcEaQa3jwvc9NIMA7agD84etJnDrPH9cqRqUiap8CSb9HejpN/qnUNFVKHfIKfyapaM1JsMljAdjLOR9jHpDjPIcTjCH6lyHClehmmcJmByD7ULPj6BHLyD5Paj2RQL2SaBJQFMyDNBbe4X08lukq2+Qrr1DemEPNrtBjTbYdL9uTG5DBs8g85/Q44OKnaS3oIJzZNUjYECWppRLoF0GtqTMccWtR4vXoZcO2HxIrT5XQFIym7wnu+eQ4gHfXKslcXswTkS5GvWWjXFoth7peIPin4bMvkOmP+iPoKZfCfYBevE12T2Byu5Sjitc2oxydKtFVtobY+C67l8r48o0Pxrswpz5Rc2+wE4/wU4OYUf7MKc2YbKbMNElLmyCVmeMh4+2sbW1g9/bO+cfWRzwHwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 40856922adb9fae5",title:"tutorial html 40856922adb9fae5",src:"/cp4i-demohub/static/f308fe2955043b745ac7932281e5c92e/3cbba/tutorial_html_40856922adb9fae5.png",srcSet:["/cp4i-demohub/static/f308fe2955043b745ac7932281e5c92e/7fc1e/tutorial_html_40856922adb9fae5.png 288w","/cp4i-demohub/static/f308fe2955043b745ac7932281e5c92e/a5df1/tutorial_html_40856922adb9fae5.png 576w","/cp4i-demohub/static/f308fe2955043b745ac7932281e5c92e/3cbba/tutorial_html_40856922adb9fae5.png 1152w","/cp4i-demohub/static/f308fe2955043b745ac7932281e5c92e/7df4c/tutorial_html_40856922adb9fae5.png 1414w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"2.Enter your IBM userid  and the password and then enter the verify code."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACHVAAAh1QEEnLSdAAABF0lEQVQoz43SvU7DMBQFYL8n7cSAKCs8BgwMgFiYeQFYGRADqGpRBQIm1qRtGjv1X2L7cBMMTVEUcaVPto59oysrbPd0jNH5BIOTJwyjneNHDMiwlf0Xm3OLWpIbpKRepfbgsmr29Vka76T8+04fho66vHnA7fgN8BbWaBglUVkNoSyEdugrFkJAzRPnQxNe3z/j7vUTRq6xWGbIshXJsMw5RJLAfLzA+01faNmeMIY/tcpzCM5RFAWEEBC0yjl98H2G4F1sCd0TtjnvG0qpX1VV0VSUOxfvAV29rO898rXFgmuUVf+7bU2ojIOyDqZ00FGzp4zLEllhsdabszpvlN3Y0dUMh2TvbEL/4xT7LaOLKQ7I37zPF8B1kL5fcqxHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html e00b9a6736f7e923",title:"tutorial html e00b9a6736f7e923",src:"/cp4i-demohub/static/da306e6fc332737b2f4191d7349f6938/3cbba/tutorial_html_e00b9a6736f7e923.png",srcSet:["/cp4i-demohub/static/da306e6fc332737b2f4191d7349f6938/7fc1e/tutorial_html_e00b9a6736f7e923.png 288w","/cp4i-demohub/static/da306e6fc332737b2f4191d7349f6938/a5df1/tutorial_html_e00b9a6736f7e923.png 576w","/cp4i-demohub/static/da306e6fc332737b2f4191d7349f6938/3cbba/tutorial_html_e00b9a6736f7e923.png 1152w","/cp4i-demohub/static/da306e6fc332737b2f4191d7349f6938/9e666/tutorial_html_e00b9a6736f7e923.png 1416w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"3.In the IBM Cloud Dashboard. You see all information about the infrastructure. On the Resource summary. Observe if you have one cluster and click ",Object(n.b)("strong",{parentName:"p"},"Cluster")," link."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACF0lEQVQoz21SyYoUQRCtT/A7PHhwvHsZRLERPKgwoOg0juDNv/HuYfTkBsq4oQcXBA8uhwEVnG7tZqrs6qrKyqVye0ZkV9sqBgS5VOSrF+9FJoTAZDLBdDpFU9domgZ1v672izPX1vXqrqqbtN58KXHthsbdtxKZMR3KqoJQCj5GOOf+Su89OhsgpUpA1nYIwcNZi0YoKOOwX3l8KwLyuUEm5nPUoxFckSOKGv9GDAHGGkjj0WreR1ifPqCoPfbpSdkCjQZM1yGT1IouSsoZQisQiGVcJr1zVCSVgCdgPocQqYbXQD+gnxhAdxGqA7F33LLB/4IBwdkHA/wZfJ63AY0ChI6QBChEi4x1UtpCkxbL9D78Bu1cJAY+6ba84+Szpd4XpYv6vPiJbDQROHH1OY5uPsX61jMcPreDWw+/wndNMiIkDak9KTEnvRemRNLLoSWJ2Hk2zrpAxEjDL3sNjpx+goPHH+HQ4DEOrN3D9e3PpJNDLR2IcGLBY1POSrBEZVkSeJUkiWRO7KWx5Hy2N25xcuM1jp15ResbrK2/wPbtMRR1OKs7kBrkakxAklhy5nkOpSQxYmdXuibA8XeJS8P3uLj5AcPLHzE49Q537k8J0KPsATvHGpGWWicnWXeOSnSoKfmOSSbAyQ+FKxd2MdzYxdb5XZwdfMLOgwI8JMa43oSQjHG+nwBKbTUamplWamJp0ygx4C8aiDepjK/gKgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 43ece9238189e0a4",title:"tutorial html 43ece9238189e0a4",src:"/cp4i-demohub/static/d7e887d425f5fe1a9f1d2826fca8b9a9/3cbba/tutorial_html_43ece9238189e0a4.png",srcSet:["/cp4i-demohub/static/d7e887d425f5fe1a9f1d2826fca8b9a9/7fc1e/tutorial_html_43ece9238189e0a4.png 288w","/cp4i-demohub/static/d7e887d425f5fe1a9f1d2826fca8b9a9/a5df1/tutorial_html_43ece9238189e0a4.png 576w","/cp4i-demohub/static/d7e887d425f5fe1a9f1d2826fca8b9a9/3cbba/tutorial_html_43ece9238189e0a4.png 1152w","/cp4i-demohub/static/d7e887d425f5fe1a9f1d2826fca8b9a9/25c8a/tutorial_html_43ece9238189e0a4.png 1592w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"4.You see the  available resources for your cluster. Select Clusters arrow and click your cluster line."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABPUlEQVQoz51SwW6EIBD1k/tNPfbYj+il5yZNNt1tujGiiFVcFBR8naHLhvbmkrwM85Q3j2GKcRxRVVVE3/fQWkcwn/Z5nvMDYTYaz68GD48WTy8GxTRNKMsSTV2jbSWUUpBSQgiBlvZd16FpGtT0nXkufOMISrU4niXeTh3OYkBhSPCbKxoDu65w3sNai3meI3ifco4TRefcH25xM+At/OpQzHqAPh4wfp3gpcDWCmDbEEJAWts1T9FTUR88wpb9Q1iJL9yo0X9+QBzecalKeCXjIXaRRPzVdYrRnSWny3IrwsvQLYtARN0q6IuJVZKjFBNyPreVC/YD9ZCTjprPj8EvN1NPc6E9WOkNoiCPC6szka65B+G/ILsbSNCnxu9F+BVckuBCzeUR4Ar3rNTZ6DCOACGNA5P3gM/yZPwA6fFZ6q4wANAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html dd756ffd9ce473bb",title:"tutorial html dd756ffd9ce473bb",src:"/cp4i-demohub/static/77cd25600b4d99b5ac1221aa8cfe0ffa/3cbba/tutorial_html_dd756ffd9ce473bb.png",srcSet:["/cp4i-demohub/static/77cd25600b4d99b5ac1221aa8cfe0ffa/7fc1e/tutorial_html_dd756ffd9ce473bb.png 288w","/cp4i-demohub/static/77cd25600b4d99b5ac1221aa8cfe0ffa/a5df1/tutorial_html_dd756ffd9ce473bb.png 576w","/cp4i-demohub/static/77cd25600b4d99b5ac1221aa8cfe0ffa/3cbba/tutorial_html_dd756ffd9ce473bb.png 1152w","/cp4i-demohub/static/77cd25600b4d99b5ac1221aa8cfe0ffa/a4e58/tutorial_html_dd756ffd9ce473bb.png 1603w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"5.In the cluster page, you see the status of your cluster infrastructure,. such as worker node, CPU and Memory usage. Click ",Object(n.b)("strong",{parentName:"p"},"OpenShift Web Console"),"."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABmUlEQVQoz51SSY7bMBDU/0/JA+Y/AwTIOTll8Vi2ZC1cRVESWammLMMwkksElLh1F6urWTVth9PpA3Vd40zIeGkuGMYBfdfDGAOt9QPGWMTg8fXLD3x6+47Pb9/w/v4To3HoBo3q2rRo2wZ930MphXEYMc8zlnVF4BhjxMr5tq2cL9BGQZkbrIu49AvOXYS2jF8W5kVU5/qC5nqFtRbOOQzDAPlWBniuJfD44jKjtyfc9C9MS8+dJLvYcoT1psRWI1U1LGUKoZTXdd2ezLUax7u6DZm5bh4x2BpaGQzTCZlneXaER7BqJxRVlpBxmqZStpBIqUJ+eCijlGzCDSp8IETLKlbMYS7Yz1my9x7PEJLiIQ/lgpwzUkplFAXSlJ7K05aLr+sdW9p2QndXdxC+rp/35QJJko4KQUqZKlNBmPbGVEfwK9kxf4YQFlvYOElOVB1FGT329PxB+Er6qu6hMEwsNUHNgWVupXliBX8PS6q/Jf+TkOrkOZ31iN9O78+L/goiG/lfhIodb/lutedzIeHCkoUw0Fvx9w824lEXjxcUvgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html d22a349be88c0a4f",title:"tutorial html d22a349be88c0a4f",src:"/cp4i-demohub/static/b6a2db870ad155896d86cfe35d59af8d/3cbba/tutorial_html_d22a349be88c0a4f.png",srcSet:["/cp4i-demohub/static/b6a2db870ad155896d86cfe35d59af8d/7fc1e/tutorial_html_d22a349be88c0a4f.png 288w","/cp4i-demohub/static/b6a2db870ad155896d86cfe35d59af8d/a5df1/tutorial_html_d22a349be88c0a4f.png 576w","/cp4i-demohub/static/b6a2db870ad155896d86cfe35d59af8d/3cbba/tutorial_html_d22a349be88c0a4f.png 1152w","/cp4i-demohub/static/b6a2db870ad155896d86cfe35d59af8d/a4e58/tutorial_html_d22a349be88c0a4f.png 1603w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"6.In the OpenShift console. Select the following:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),"    1. **Networking**\n\n    2. **Routes**\n\n    3. Drill down the Project to **Integration**\n\n    4. Click the **Navigator** link.\n\n")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACDElEQVQoz5WSS2/TQBSF/TsqSmnsOK7tOm5r3AIBwku8BGskRCmhLEBCQqwRQvwvFlRVikBICNFFd02aEhLJzqPx2OPYPoynTmgAITrSWcxo5rvnnjvCsmFAyssQRQmariNfUGCpCoqzM1DEHOZkGaqq/iGDvbMsC6ZpwrZtrvRMMK0VTJ+SsLr2GKTfQb/jgAwGIHu7cL98QmdnG4QQeJ73XxLmdBNT07N4wIDvvjn42vBxnBXH8cReUOcXODB1uNMKsP19AJeEcD0Kj8YIhjESdjFVnKRKkGRKYVEUIQxD+L7PJSha8RD4aB0Be+SzR4RBUnX7B6A0ROQT0EEfCNmNYQgaUgSUcngQBJMOjQULUydzqFTWMeix7ByH2Ym5ut4BQo/BWk3UGi6cdhf0R5PBCHokQMSKuyzzzY0NfNzaQrVahXDz9l3Y5y7i1bOniD5vovPhPWLi8Rb5Ym5ou4XGvot200Fvv8nbjbLsdms1FDUdi/o8cpIM4d79VVy/dQev37xlvXoYsopJnOWWZcWCYhpyJRloNIxavY5S+QpUYxGSrEK4fO0GzKVlPH/xcpwDhyTJRDZHd6OBjIBnS2XkFZ1rPJSHbCj8cuoudXbE4d80ATxfhlTQDoGakX6bHNYqT8bVk9/c/ev/1et7OL1Sgsja5cAl+wxOzIi/HB4TmDq8cOkqCqrBXf4ECN4HCylAz1wAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html ff17543331daf722",title:"tutorial html ff17543331daf722",src:"/cp4i-demohub/static/a62147ccff4ec2ed8796fdc7dc3ae0a1/3cbba/tutorial_html_ff17543331daf722.png",srcSet:["/cp4i-demohub/static/a62147ccff4ec2ed8796fdc7dc3ae0a1/7fc1e/tutorial_html_ff17543331daf722.png 288w","/cp4i-demohub/static/a62147ccff4ec2ed8796fdc7dc3ae0a1/a5df1/tutorial_html_ff17543331daf722.png 576w","/cp4i-demohub/static/a62147ccff4ec2ed8796fdc7dc3ae0a1/3cbba/tutorial_html_ff17543331daf722.png 1152w","/cp4i-demohub/static/a62147ccff4ec2ed8796fdc7dc3ae0a1/a4e58/tutorial_html_ff17543331daf722.png 1603w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"7.Select ",Object(n.b)("strong",{parentName:"p"},"Default authentication")," as authentication type."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABJElEQVQoz32R60rDQBCF8/5vpP4QREhFLVRLKqZplVp72TRp9pr7cXebTWuxDhwGZmc+Zs56jDH8J855n5umwaVo29ZmzzQ6MeZkAB3sDNjoQVUUEFLaGqUUZVn2UO/3NgxSHLdyMkMmG1gpBRghYMkOhQZXVdVvboGmWQhhFacMwUJhtSbY7zMN0kB+eDN9ZqCQORLCoJj8+2SpFN7fJngOPjHbKJCUw/d9kO0aCc1xP1pgPotg+uq6Pgx3ciAHsxtKqTCPprh7GGO5096wFFfXN5gEY1BZ4fYxwvj1BXmuz+uAMIAzkAt7shQc37HAKqYYfuQYjKYYPg2Q8QLhl/aPZtbD+sQrx+jYR6AzXXAN1koyDd5sEYYhlJK25j7n1PxL8QP6mGkAro4dggAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login cloud pak admin default",title:"login cloud pak admin default",src:"/cp4i-demohub/static/85f48b635b0e9b637a12fbef3da07ea1/3cbba/login_cloud_pak_admin_default.png",srcSet:["/cp4i-demohub/static/85f48b635b0e9b637a12fbef3da07ea1/7fc1e/login_cloud_pak_admin_default.png 288w","/cp4i-demohub/static/85f48b635b0e9b637a12fbef3da07ea1/a5df1/login_cloud_pak_admin_default.png 576w","/cp4i-demohub/static/85f48b635b0e9b637a12fbef3da07ea1/3cbba/login_cloud_pak_admin_default.png 1152w","/cp4i-demohub/static/85f48b635b0e9b637a12fbef3da07ea1/0b124/login_cloud_pak_admin_default.png 1728w","/cp4i-demohub/static/85f48b635b0e9b637a12fbef3da07ea1/4ea69/login_cloud_pak_admin_default.png 2304w","/cp4i-demohub/static/85f48b635b0e9b637a12fbef3da07ea1/658dc/login_cloud_pak_admin_default.png 3344w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"8.You might need to login screen for IBM Cloud Pak might be displayed, enter the username: admin and Password (Enter the 32 characters password that you created when you made the Cloud Pak provisioning) and Click Log in.\nTip: You might need to use the password. You can use the Clipboard to save the password."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABP0lEQVQoz32R3U7CQBCF+/a+j3fqhYkxAaMSUVKM5TeAAkUou7O7Le32OEu7JZhok5Pdpme+OTMNpJT4T0TUnNZa/PWUZXk8A2f0ktLLAWrYL6CTMQZKqabZ4XBooMF5GgmtTqm8hBDHRtaWyPO8hnkR0jQ9AZ3ZGZw2O4lwZvC1jJEkewYxkKpvzucKXLptkvCpoTXBpLoZ9wjUbPh47+M5nGK0Moh3hFarhXi9xFakuO/OMB4Nudig4IRFTsjNBELOudkCpGO/xRrIxvFwgLuHHhbfGZTc4er6Bv2wB6Fz3D4O0Xt75UQZFxV4mQIXlyV0ZhvIWUI3ilaEz43C10agM0nR7g7QeWpjTxmiOe9P8Pi8S5QWPADCOeD4NaeGVvfAL10Rg1nbPYNXa0RRVO2JRPNzisKejVcl87Dq/QfiWWZxqVn7zwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login cloud pak userid password",title:"login cloud pak userid password",src:"/cp4i-demohub/static/45db2892cbd425b987669c371b453971/3cbba/login_cloud_pak_userid_password.png",srcSet:["/cp4i-demohub/static/45db2892cbd425b987669c371b453971/7fc1e/login_cloud_pak_userid_password.png 288w","/cp4i-demohub/static/45db2892cbd425b987669c371b453971/a5df1/login_cloud_pak_userid_password.png 576w","/cp4i-demohub/static/45db2892cbd425b987669c371b453971/3cbba/login_cloud_pak_userid_password.png 1152w","/cp4i-demohub/static/45db2892cbd425b987669c371b453971/0b124/login_cloud_pak_userid_password.png 1728w","/cp4i-demohub/static/45db2892cbd425b987669c371b453971/4ea69/login_cloud_pak_userid_password.png 2304w","/cp4i-demohub/static/45db2892cbd425b987669c371b453971/658dc/login_cloud_pak_userid_password.png 3344w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"9.In the Cloud Pak Welcome page, you see Capabilities and Runtimes instances."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABRklEQVQoz5VRy07DMBDMD/MFpFKrtt/BlQ/gxokjF04cOCCECmraPJw4du3YSTx4N0qQEBywNJrddXZ2PUm22y02mw1jvV5jv99jtVohTdNfeUaaTpjvrmO82+2QIB5rDbx36LqO4b3Hf48fJ06KUuD9kCEvaxRFgbqu0TQNhBCoqmrJ/4JuGwTXAH0DoxskUraoBDVJtG07CUVIKbmBasaY+ArL/B1b+O6Cl4PC9a3F1Y3Fw/MFiRAVznnOmxDyGB+PxyXPsmzZvCxLnE4n3pwGF8UZbx857p8E7h4rvH5K2lCikg6uD9GBwB4qpdjHcRyZQwgMyrXWi8fCamg3cB+h9xaJUi208RjGWIxN9DE9q+97Fpl5FqSBYwgsqKKA8UOsB+430YqEPKpV/MN+muKcY99moZ8b0jBiOtIZ6G7gReievP0C0ZdNzKr/4w0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Welcome IBM Cloud Pak",title:"Welcome IBM Cloud Pak",src:"/cp4i-demohub/static/876a4419eab632252ef701a117f86692/3cbba/Welcome_IBM_Cloud_Pak.png",srcSet:["/cp4i-demohub/static/876a4419eab632252ef701a117f86692/7fc1e/Welcome_IBM_Cloud_Pak.png 288w","/cp4i-demohub/static/876a4419eab632252ef701a117f86692/a5df1/Welcome_IBM_Cloud_Pak.png 576w","/cp4i-demohub/static/876a4419eab632252ef701a117f86692/3cbba/Welcome_IBM_Cloud_Pak.png 1152w","/cp4i-demohub/static/876a4419eab632252ef701a117f86692/0b124/Welcome_IBM_Cloud_Pak.png 1728w","/cp4i-demohub/static/876a4419eab632252ef701a117f86692/4ea69/Welcome_IBM_Cloud_Pak.png 2304w","/cp4i-demohub/static/876a4419eab632252ef701a117f86692/8849b/Welcome_IBM_Cloud_Pak.png 2994w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"10.You need to have access to Openshift cluster. In a browser go to ",Object(n.b)("strong",{parentName:"p"},"Openshift Console")," and right top click ",Object(n.b)("strong",{parentName:"p"},"IAM#(your userid)")," and click ",Object(n.b)("strong",{parentName:"p"},"Copy Login Command"),"."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABMklEQVQY041Q20rDQBDNNwitloItgoJVkzbGSxTxuT4UHxT8JR8FscUbiN/hj4gISoVKW0pNspvs7Ti79VVx4DA7l3NmZr3leh2bvo8a+UajAT9owqc4CIJfYethGCKO9xBFEY47HZydnuCo3Ya30YrQinZQriziqtsFjECWJmCMg/O/wRib+f4bso93yNEnvKC1hdX1JsoLVZxfXOPpRWOYSPzXjDFgkzHEdAKVpfB82nDND1Gar+Kyd4uRAPqTDGMm8JUrsEJBae2ImrwFBTA/bwtDwlIp5IWgk5uR23CuVEHv5s5N5VQopMQ0SVyjNcaZIyulkbKc8iRqNDLKSzXL27q3u3+I7fgAtaUV3D88zsi5dEK22Y0ny3NOBAVBQs8DjtdhgZQu4IL+U2g3wG7+DUbBfUQMYSSeAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ocp console login",title:"ocp console login",src:"/cp4i-demohub/static/3ea02ce29d2dad43ac62749cf5c29d63/3cbba/ocp-console-login.png",srcSet:["/cp4i-demohub/static/3ea02ce29d2dad43ac62749cf5c29d63/7fc1e/ocp-console-login.png 288w","/cp4i-demohub/static/3ea02ce29d2dad43ac62749cf5c29d63/a5df1/ocp-console-login.png 576w","/cp4i-demohub/static/3ea02ce29d2dad43ac62749cf5c29d63/3cbba/ocp-console-login.png 1152w","/cp4i-demohub/static/3ea02ce29d2dad43ac62749cf5c29d63/8cdd5/ocp-console-login.png 1676w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"11.Click Display Token link and then copy the log in command:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzElEQVQY06XQy07DMBAF0Pz/tyEkkEoDCxpSHDWp7Yzfj83tJGnY0A1icXRnNlf2NFJKfJ5OUErBOgcigjEG1lqknJHZo0wpPdRoLuy7DoMQsGRA88yIZ0L04ZfgPVKMyKVw+V3ZFNbM/RfE8xOG1xdMbweo9xbX9rim/mg5t3lPeTzAfJ/hQuIfhR/GevgQuZBfcxYDul7gMkpIbTDJeTWyZZea7rkZFWFSBle9mY1bS9dC5ys0Vb7LoiCm/Gf7bZdvN/sdKi+11n+7AcsPy20uqZ2TAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ocp display token",title:"ocp display token",src:"/cp4i-demohub/static/b684cec3af67bbac5957b2c7c479ead0/3cbba/ocp-display-token.png",srcSet:["/cp4i-demohub/static/b684cec3af67bbac5957b2c7c479ead0/7fc1e/ocp-display-token.png 288w","/cp4i-demohub/static/b684cec3af67bbac5957b2c7c479ead0/a5df1/ocp-display-token.png 576w","/cp4i-demohub/static/b684cec3af67bbac5957b2c7c479ead0/3cbba/ocp-display-token.png 1152w","/cp4i-demohub/static/b684cec3af67bbac5957b2c7c479ead0/8cdd5/ocp-display-token.png 1676w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"12.Open a terminal window and Paste the oc command."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"12.152777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAdElEQVQI1z2KSw6DIBRF3Qkw4/EJpNYBpBaEiHb/C7oCgw5O7nf53RVnO3FfF1prKKUg54QYQ9eMlL44joxaK/b9gxBC3+Jk295wzsH7gce6vrC4bkYYg9YaUkoQEYyxsNZCKTX7kYlUVzM/QogJY+wP5xwP4Vg/YsBl+HcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ocp paste ocp terminal",title:"ocp paste ocp terminal",src:"/cp4i-demohub/static/79aa17947f6f79c22c7e20593e81f3ee/3cbba/ocp-paste-ocp-terminal.png",srcSet:["/cp4i-demohub/static/79aa17947f6f79c22c7e20593e81f3ee/7fc1e/ocp-paste-ocp-terminal.png 288w","/cp4i-demohub/static/79aa17947f6f79c22c7e20593e81f3ee/a5df1/ocp-paste-ocp-terminal.png 576w","/cp4i-demohub/static/79aa17947f6f79c22c7e20593e81f3ee/3cbba/ocp-paste-ocp-terminal.png 1152w","/cp4i-demohub/static/79aa17947f6f79c22c7e20593e81f3ee/0fbd1/ocp-paste-ocp-terminal.png 1725w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Task 2 – Configuring MQ"),Object(n.b)("p",null,"Configure Message Queue (MQ) to Authorize and Accept Data."),Object(n.b)("p",null,"As this is a brand-new deployment of the Cloud Pak for Integration, all instances of integrations, message queues, and event streams are deployed as microservices. We need to authorize the Message Queue service to accept incoming data from the integration running on a separate server.\nCloud Pak for Integration provides a single solution for all of your enterprise integration needs. The platform provides a comprehensive set of industry-leading capabilities. Use any of them on their own or together through a single interface. Create, manage, and monitor all of your integrations across SaaS applications, messaging, streams, APIs, high-speed transfer, and more.\nUnlock the power of your data and support the scale required for all of your integration and digital transformation initiatives."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-build-deploy-ap-is-index-mdx-2eae11b2e5ff9b2d603d.js.map