(window.webpackJsonp=window.webpackJsonp||[]).push([[50,42,43,70,71,73,74,75],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("NmYn"),s=a.n(o),A=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),b=a.n(l),d=a("QH2O"),p=a.n(d),m=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(A.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,o=n.baseUrl,s=n.subDirectory,r=o+"/edit/"+n.branch+s+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},w=a("FCXl"),j=a("dI71"),x=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),o=a===n,r=new RegExp(n+"/?(#.*)?$"),c=i.replace(r,a);return Object(m.b)("li",{key:e,className:b()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(m.b)(A.Link,{className:x.link,to:""+c},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},o))))))},t}(n.a.Component),f=a("MjG9"),N=a("CzIb"),E=a("Asxa"),O=a("OIbQ"),v=a.n(O),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(E.c,{className:v.a.row},Object(m.b)(E.a,null,Object(m.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,o=t.frontmatter,l=void 0===o?{}:o,b=t.relativePagePath,d=t.titleType,p=l.tabs,g=l.title,j=l.theme,x=l.description,E=l.keywords,O=l.date,v=Object(N.a)().interiorTheme,k=Object(A.useStaticQuery)("2456312558").site.pathPrefix,I=k?i.pathname.replace(k,""):i.pathname,B=p?I.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",C=j||v;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:C,pageTitle:g,pageDescription:x,pageKeywords:E,titleType:d},Object(m.b)(u,{title:n?Object(m.b)(n,null):g,label:"label",tabs:p,theme:C}),p&&Object(m.b)(y,{title:g,slug:I,tabs:p,currentTab:B}),Object(m.b)(f.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:b}),Object(m.b)(T,{date:O})),Object(m.b)(w.a,{pageContext:t,location:i,slug:I,tabs:p,currentTab:B}),Object(m.b)(r.a,null))}},AAe2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var i=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),A=a("rl46"),r=(a("qKvR"),["components"]),c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=l("Row"),d=l("Column"),p=l("ResourceCard"),m={_frontmatter:c},u=s.a;function g(e){var t=e.components,a=Object(n.a)(e,r);return Object(o.b)(u,Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(A.a,{name:"Andy Garratt",lastUpdated:"October 2020",readTimeMinutes:"120",mdxType:"ArticleDetails"}),Object(o.b)("p",null,"The Car Crash Repair Demo is a comprehensive API led solution built\nusing powerful Cloud Pak for Integration Capabilities. The demo\nwill show you how to rapidly build APIs that connect with SaaS\napplications and Watson services and securely expose them to partners."),Object(o.b)(b,{className:"resource-card-group",mdxType:"Row"},Object(o.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(p,{subTitle:"Storyboard",title:"Demo Video",aspectRatio:"2:1",actionIcon:"video",href:"https://www.youtube.com/watch?v=TRzO26kawu4",mdxType:"ResourceCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"217px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"106.91244239631337%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAEFAgME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAbXW5S2QKfAsA//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMEEBT/2gAIAQEAAQUCstFcGhDy9GYjO54dpE95nvM//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgICAgMAAAAAAAAAAAAAAREAAhCRM1EhMkH/2gAIAQEABj8CDBL6hbqu8VNUVCCqhePuPQbnGNzjG5//xAAaEAEAAwEBAQAAAAAAAAAAAAABABExIRBR/9oACAEBAAE/IauhkEcBqW08PHoEWthvCB19QyGDt6Qj/9oADAMBAAIAAwAAABDAx3//xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQMBAT8Qyq//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EMhEf//EAB8QAQADAAEEAwAAAAAAAAAAAAEAESExQVFx0aGx8f/aAAgBAQABPxBxHkuFqMdSwsWiqg2CcO9ZT5G0gVjAQFV3ZbfmCgdiuGW0PJP2HqOH2vU//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/app-mod/static/78cd4f93d66512dbd7ce67326f2aece7/a0596/video-icon.jpg",srcSet:["/app-mod/static/78cd4f93d66512dbd7ce67326f2aece7/a0596/video-icon.jpg 217w"],sizes:"(max-width: 217px) 100vw, 217px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(p,{subTitle:"Demo Tour",title:"Quikdemo",actionIcon:"arrowRight",aspectRatio:"2:1",href:"https://pages.github.ibm.com/ravi-katikala/esd/carrepairdemo/",mdxType:"ResourceCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"216px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"107.87037037037037%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAIAAABPIytRAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVQ4y2P4TwFggFB///79QzQAKkbRTKbN//79A1L3798/fPgIEJ08eero0WMQxqFDh4FsIOPgwUPHj58AIqDIsWPHHz16BNQC1Aiy+f37D97evsXFJUAJDw+vCRMmbd68xdXVbceOnV1d3Z6e3qdPn8nMzM7PLwDqB3LDwiK+ffsGdfbDh4/s7R1bW9uBlqSnZ86bN3/fvn0ZGVl79uyZNWt2ZmYWUHNjY1NLS+upU6cSE5OBFrx8+Qqq+fHjJy4ubkCdb9+++/DhA5A8d+480MRPnz69ffv2w4ePT58+ef/+/Zs3b4Hktm3bvbx83rx5A9f82MnJ5fbt20D279+/geT69RuATli6dBkkRCAkJJCB3gbajK755s1bcM0bNmwMD4/U1zdMSUk7e/YcRD9E84EDBwloXr9+Y3R0rK2tvY2NnYmJWVtb+18wIEEzUKeFhVVwcOj+/fuBgsDkQZTmjRs3RUREGRgYNzQ0AsOMsLNv3UJoXrNmbVJSyrp165HTE0QzMMGga3Z2dr18+crv33+Amn/9+nXlypUXL14Apb5//w50LTDOgMI/fvwA6t+3bz8wnSA0A6MUqLmpqWX79h1FRSXTp88EhnZJSdmqVWumTJlWXFwKFG9ubm1r69ixYwcwCoHJ8dUrWCJ59eq1nZ1DWVnFpUuXgaZMnTptz569Dg5OwBTe19fv6up+48ZNYDrLzy8Eusjd3QNoM9AtiIxx5MjRRYsWr1ixYvlyEFq2bDmEhDMg4kC0ePGSEydOIjIG+VkSGEhAAAykn2Dw4wdh9PPnL6AWoEbKbI6NTU9OzsnMLMzMKoqOSQsNSwwLT8KKIiKSo6JTo6JAKC4uMzo6lUFQSEVaRldJyVhTy5KbR46FVYKVTRITAcV5+RRkZHSlpHQkJbVlZPVERNUBPUvsYDp32F8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/app-mod/static/3ad6d86d640eed1d53c4dd1294ced4de/2e99d/qwikdemo-icon.png",srcSet:["/app-mod/static/3ad6d86d640eed1d53c4dd1294ced4de/2e99d/qwikdemo-icon.png 216w"],sizes:"(max-width: 216px) 100vw, 216px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(p,{subTitle:"Detailed steps",title:"Demo Instructions",aspectRatio:"2:1",actionIcon:"download",href:" /app-mod/pdf/carrepair-v0.1.pdf",mdxType:"ResourceCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"320px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSElEQVQ4y42U2Su0YRjGHyFyRkTJiQMiu7HGjCWKQpaxjDggEaUcIKXmYHImSykpmiFLtiwl0ziQ5Q+QUEqKhmSM7bNv8/3GM0l9J99b83a/93Nf93Ld1zPi8/Pz8fHRbDZXVlYGBwfHxMSEh4dHRERERUWFhYVFR0djh4aGZmZmHhwc2Gy26+vrp6en9/d3q9Uq+MBVW1ubnJy8sbExNTW1srKyuLg4OztrNBonJiZw1tfXCyFIdHx8TPCf7we8oOzb21tqaur4+DgHHx8ftl8PEbx7e3vF90NTJycnEg9QcPzy8qJUKvV6PV5auru7e3h4eH5+vrm5IQJnd3c3SDc3N4k/OjpiWE7tbX99faWnp4+MjBB3dXVFIzIFEQyGk+jAwECQLi4uvIuLi4mhR0EERWjbYDAQhxcYYAzycnp7e4t9eno6ODg4NzdXVVWVlZVFPTthVOcsLS1teHgYsMViAclIYEgqub2/v2cQEhEwOjqqUqk4en19FZIhksHzv4T9fuQR4JycHPkp1tbWGhoa/Pz8EhISWDV2c3NzXV1ddXW1Wq1mhXhaWlqamppKS0vZGULw9/cnZmlpSSgUCjjIy8vTarWdnZ0hISF8IozW1ladTldSUuLh4SFJ7ujowNnT00NqPCkpKQIlYW1ubh4eHk5OTjJJUFBQf38/RPT19Z2dne3t7Tk7O1OZVldXV6enp9va2qRm7EWwtre3qYwBN2VlZV1dXSaTic+AgAAwlGI9GOTF6erqytvesgQTur+/jzDPz8+9vLwGBga2trakqlgy/RcVFcmFIwSmwx8fH+9oG/Du7i7E2JsRAsGsr69jwA39azQawNBbUVGRmJgoBRMbG+uovLOzIzXo7u4uwZeXl+3t7QwMF05OTnJmrt2PzuLi4r4TCMHAZP2ZJzc3F8EhKVbi6ekpuYVFb29vbPhzzDw0NMSefHx8IiMjy8vLgdEhMuACZ2dnJyUl5efnFxYW4uGooKCAYr6+vtiISqBS+uFWcXX/R2FcvoyMDIfCUClWTU0NCpufn+dvgCwzMzMLCwtjY2PLy8ssX34iTHil28bGRnn/BD+KsyF6pnPYpjE0yBaI4/3zCUP8H1Hm4uKCewLqL2VNnW2uf7FyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/app-mod/static/72b9c11886a51b44e05e552a0a39a3f3/46c5d/pdf-icon.png",srcSet:["/app-mod/static/72b9c11886a51b44e05e552a0a39a3f3/7fc1e/pdf-icon.png 288w","/app-mod/static/72b9c11886a51b44e05e552a0a39a3f3/46c5d/pdf-icon.png 320w"],sizes:"(max-width: 320px) 100vw, 320px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(p,{subTitle:"Resources and code samples",title:"Demo Artifacts",actionIcon:"arrowRight",aspectRatio:"2:1",href:"https://github.com/IBM/cp4i-demos/tree/main/cognitive-car-insurance-claims",mdxType:"ResourceCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/app-mod/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/app-mod/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)("h2",null,"Business Scenario"),Object(o.b)("p",null,"We are a Car Repair company: We take in vehicles with problems and\nrepair them — seems simple but.."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We want to gain business advantage by allowing multiple car leasing\ncompanies to use us to repair their cars — these companies insist\nthat we expose APIs for them to call to do business with them.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We want to allow their customers to book their cars in for repair\nand get an estimate for price and number of days in real time — in\nseconds. Later we will build more APIs to allow customers to query\nthe status of their repairs, or make updates or add comments to\ntheir repair cases.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We want to allow them to send photos of their cars so we can check\nfor type, damage etc.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We want to check for errors and issues up-front as quickly as\npossible to feed back to the customer in real time. Photo not valid?\nNo car in the photo? We’ll tell you instantly so you can re-submit.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We want to minimize manual processes and have the repair request\nautomatically create a repair case in our CRM system (Salesforce).\nIf a customer wants to book a repair at 3am on a Sunday, they can —\nit’s their choice.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If the car is a convertible/roadster, we don’t repair it, it’s a\nspecialist job. We want convertibles to automatically create a\nrepair case in our partner’s system (ServiceNow) as well. (Extension\nscenario)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Our partner speaks Spanish — we don’t! We need the requests\ntranslating from English. (Extension scenario)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We are wanting to grow our business fast with this new model and\nexpect the use of APIs to really increase the number of requests we\nget. We need our solution to be scalable and highly available."))),Object(o.b)("p",null,"The diagram below shows how all the parties of our business are related:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVQY02MwlJcqLCxzC0gRlVdlkONiZGZiYGBghAImCMXMBBQFk0xAEQYQAqlhYChJi+tsqLZzdJVTUmSQ5GDiYwfpB0rwMDFwMTCwMkCBAAsDKxOUzcvBIMIJYqjr6Jjo6ZqoqIiKiYLsBOrkZuEWEBJTUNE3MlRS0xCUkLd1cNa1MgkMCTC2sOXk4xNRY7MMVpXR4Gdoau9akpM/Iy07MD2BwUwIaLOklq5nZGb9xMWFTROTs3PkzS26p80tyC8urZ7onZClYC6dVu6wYFVvwQQjhrjYxFgDY1cTc0MrSwZuJiYuVjYFKQ8T67yknJSMzKrCFAZ29rr23oLqJnv3aAYGDit7zeKKUku74PQ8NwYbPY0gZ8tgXy9vX28GPiZmHjYGNqjfBPn5hAT5Qf4VFJaUkhYWFgay2dg42Ni5WNk52dg4Gcqy0k5uW7Nl8cLiqiIGL1lmDhZIaDOAAo0QEBWXUFZTV9PQEhEXY+BiAccACDCC4wsYNWCzmEAsuBQMAABaVURDym/4xgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial html 8b0691925f4e760e",title:"tutorial html 8b0691925f4e760e",src:"/app-mod/static/295589c10760ca8eca2046ee2dabde51/a5df1/tutorial_html_8b0691925f4e760e.png",srcSet:["/app-mod/static/295589c10760ca8eca2046ee2dabde51/7fc1e/tutorial_html_8b0691925f4e760e.png 288w","/app-mod/static/295589c10760ca8eca2046ee2dabde51/a5df1/tutorial_html_8b0691925f4e760e.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"Get started with the demo by reviweing the storyboard/video instructions, detailed instructions and additional artifcats."))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepairdemo-index-mdx-b5ee3be6c2cc72b3b06b.js.map