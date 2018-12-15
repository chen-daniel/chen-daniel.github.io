(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t){e.exports={ensureDoubleDigit:function(e){return e>9?e:"0".concat(e)}}},22:function(e,t,a){e.exports=a(66)},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),l=a.n(r),i=(a(28),a(3)),c=a(4),s=a(6),m=a(5),p=a(7),u=a(68),d=a(70),h=a(69),y=(a(30),a(2)),E=a.n(y),b=(a(32),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50)}},{key:"render",value:function(){return o.a.createElement("section",{className:"home-page",id:"main"},o.a.createElement("header",null,o.a.createElement("span",{className:"avatar"},o.a.createElement("img",{src:"/assets/images/logo.png",alt:"",id:"home-img"})),o.a.createElement("h1",null,"Daniel Chen"),o.a.createElement("h2",null,"Northeastern University Student"),o.a.createElement("p",null,"Computer Science Major",o.a.createElement("br",null),"Entrepreneurship Minor")),o.a.createElement("footer",null,o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.github.com/chen-daniel/",className:"fa-github"},"GitHub")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/dchen7321/",className:"fa-linkedin"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.instagram.com/dchenfotografeez/",className:"fa-instagram"},"Instagram")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.facebook.com/dchen7321/",className:"fa-facebook"},"Facebook")))))}}]),t}(o.a.Component)),v=(a(34),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50)}},{key:"render",value:function(){return o.a.createElement("section",{className:"about-page",id:"main"},o.a.createElement("header",null,o.a.createElement("span",{className:"avatar"},o.a.createElement("img",{src:"/assets/images/profile.jpg",alt:"",id:"about-img"}))),o.a.createElement("p",null,"Hi! My name is Daniel and I'm currently a Computer Science student at Northeastern University with a minor in Entrepreneurship. I'm passionate about building, iterating upon, and optimizing solutions that put a focus on user experience. I was born in Canada, grew up in Hong Kong, and studied for a year back in Canada before moving to Boston. My interest in computer science was solidified during my first university lecture and since then I've had the opportunity to continuously grow and develop in the field. My interests currently lie in full-stack web development, AI, distributed systems, game development, and robotics.",o.a.createElement("br",null),o.a.createElement("br",null),"Most recently I was employed as a Software Developer Co-op at Circle. At this position, I have had the privilege of working with an extremely experienced and talented group of developers who have helped me improve as both a developer and a team member.",o.a.createElement("br",null),o.a.createElement("br",null),"Outside of VS Code, I also enjoy photography (Former Canon user converted to Sony), film, keeping up with tech news, gaming (Xbox FTW), basketball (Go Lebron), and hip-hop dance (WOO Kinjaz)."))}}]),t}(o.a.Component)),f=(a(36),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50)}},{key:"render",value:function(){return o.a.createElement("section",{className:"resume-page",id:"main"},o.a.createElement("object",{data:"assets/files/Resume.pdf#view=FitH",type:"application/pdf",className:"resume-pdf"},o.a.createElement("embed",{src:"assets/files/Resume.pdf#view=FitH",type:"application/pdf",className:"resume-pdf"})))}}]),t}(o.a.Component)),g=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active"),setTimeout(function(){var e=window.location.hash.split("#")[2];e&&E()("#main").animate({scrollTop:E()("#main")[0].scrollTop+E()("#"+e).position().top-20},500)},150)},50)}},{key:"componentDidUpdate",value:function(){var e=window.location.hash.split("#")[2];e?E()("#main").animate({scrollTop:E()("#main")[0].scrollTop+E()("#"+e).position().top-20},500):E()("#main").animate({scrollTop:0},500)}},{key:"render",value:function(){return o.a.createElement("section",{className:"project-page",id:"main"},o.a.createElement("h1",{id:"personal"},o.a.createElement("b",null,"Personal Projects")),o.a.createElement("h4",{id:"basic_user_app"},"Basic User App"),o.a.createElement("p",null,"A very barebones user authentication application built in Node.js with Express and React on the front-end for the purposes of being easily extensible. Includes signup, login, and session management flows."),o.a.createElement("h4",{id:"personal_site"},"Personal Site"),o.a.createElement("p",null,"This site! Built in React, utilizing some HTML and CSS templates from HTML5Up, exported to and hosted by Github Pages."),o.a.createElement("h4",{id:"home_automation"},"Home Automation"),o.a.createElement("p",null,"Some basic home automation built with an ESP8266 microcontroller. The microcontroller hosts a web server with webhooks which trigger RF signals to be sent to various appliances around my apartment. Webhooks are triggered by Google Home/Assistant commands."),o.a.createElement("h1",{id:"hackathon"},o.a.createElement("b",null,"Hackathon Projects")),o.a.createElement("h4",{id:"divvi"},"divvi"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://github.com/Shinabel"}," Abel Shin "),"|",o.a.createElement("a",{href:"https://parke.myportfolio.com/"}," Emily Park ")," |",o.a.createElement("a",{href:"https://abbyko.github.io/"}," Abby Ko ")," |",o.a.createElement("a",{href:"https://www.linkedin.com/in/duk-hwan-kim/"}," Duk Hwan Kim ")," |",o.a.createElement("a",{href:"https://www.linkedin.com/in/mo-alice/"}," Alice Mo ")," |",o.a.createElement("a",{href:"https://www.linkedin.com/in/tiffanytiho/"}," Tiffany Ho ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("img",{class:"project-img",src:"/assets/images/Projects/divvi.gif",alt:""}),o.a.createElement("p",null,"Venmo, Square Cash, Circle Pay, Zelle, etc, have all done a great job improving the process of transferring money between people. However, splitting a bill for broke college students still has a headache of someone needing to pull out a calculator and tapping in numbers to find what everyone owes.",o.a.createElement("br",null),o.a.createElement("br",null),"Enter Divvi, a peer to peer payments application that provides a seamless process for splitting a bill between groups based on intelligent processing of a photo of the receipt."),o.a.createElement("h4",{id:"lingo"},"linGO"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://github.com/Shinabel"}," Abel Shin "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/brandonyip/"}," Brandon Yip "),"|",o.a.createElement("a",{href:"https://abbyko.github.io/"}," Abby Ko "),"|",o.a.createElement("a",{href:"https://github.com/kiminlee2000225"}," Kimin Lee ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("img",{class:"project-img",src:"/assets/images/Projects/lingo.gif",alt:""}),o.a.createElement("p",null,"Services like Google Translate help us a lot in our basic translation needs, such as understanding the latest multilingual meme, or some KPop song lyrics. But we have yet to develop technology sophisticated enough to truly replace a human translator.",o.a.createElement("br",null),o.a.createElement("br",null),"LinGO is an on-demand translator service, connecting live translators with people who require translations in a high stakes environments (i.e doctor's appointment)."),o.a.createElement("h4",{id:"cappy"},"Cap.py"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://ctlnwng.github.io/"}," Caitlin Wang "),"|",o.a.createElement("a",{href:"https://github.com/Shinabel"}," Abel Shin "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/elizabeth-c/"}," Elizabeth Cho "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/brandonyip/"}," Brandon Yip "),"|",o.a.createElement("a",{href:"https://abbyko.github.io/"}," Abby Ko "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/mo-alice/"}," Alice Mo "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/ericjichung/"}," Eric Chung "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/jeffrey-chan-a80372109/"}," ","Jeffrey Chan"," "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/austin-kim-741b96149/"}," ","Austin Kim"," "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/duk-hwan-kim/"}," Duk Hwan Kim ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("img",{class:"project-img",src:"/assets/images/Projects/cappy.gif",alt:""}),o.a.createElement("p",null,"Ever had a great photo that you struggled to post to Instagram because you couldn't think of a caption? No longer. With Cap.py, simply upload your photo, wait a few second, and bam, a selection of perfectly relevant captions for your use."),o.a.createElement("h4",{id:"argot"},"ARgot"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://www.linkedin.com/in/aliyatoday/"}," ","Aliyah Tyshkanbayeva"," "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/victoriayang3/"}," ","Victoria Yang"," "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/mtamvu/"}," Minh T\xe2m V\u0169 "),"|",o.a.createElement("a",{href:"https://abbyko.github.io/"}," Abby Ko ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("p",null,"A VR iOS application that makes the process of learning a new language interactive. Want to know how to refer to something in another language? Simply point your iPhone at the object and you'll be provided with pronunciations (with sound), phrases, and examples."),o.a.createElement("h4",{id:"dangerzone"},"DangerZone"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://github.com/Shinabel"}," Abel Shin "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/timothy-wong-7222107b/"}," ","Tim Wong"," "),"|",o.a.createElement("a",{href:"https://abbyko.github.io/"}," Abby Ko "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/ericjichung/"}," Eric Chung ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("p",null,"A one stop solution to getting various safety statistics for any position or zone in the Greater Boston Area."),o.a.createElement("h4",{id:"iceboxme"},"Icebox.me"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://ellenlowing.github.io/"}," Ellen Lo "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/cj-moynihan-366ab9b0/"}," ","CJ Moynihan"," ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("p",null,"We've all run into the issue of random groceries sitting around our kitchen with no idea what to do with them. With Icebox, you simply give it a list of what groceries you have, and you're provided with a list of recipes that can be made from those groceries."),o.a.createElement("h1",{id:"school"},o.a.createElement("b",null,"School Projects")),o.a.createElement("h4",{id:"mcu_visualization"},"MCU Visualization"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://github.com/Shinabel"}," Abel Shin "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/mtamvu/"}," Minh T\xe2m V\u0169 ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("img",{class:"project-img",src:"/assets/images/Projects/mcu.gif",alt:""}),o.a.createElement("p",null,"A visualization of the characters, events, organizations, and movies in the Marvel Cinematic Universe with support for viewing every data point and performing all 4 CRUD operations on the database. Built for our CS3200 Database Design final project."),o.a.createElement("h4",{id:"spoiled_tomatillos"},"Spoiled Tomatillos"),o.a.createElement("p",{class:"team-members clearfix"},o.a.createElement("div",{class:"team-div"},o.a.createElement("a",{href:"https://github.com/Shinabel"}," Abel Shin "),"|",o.a.createElement("a",{href:"https://jayylok.com/"}," Jay Lok "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/matthew-morgan-8612a5121/"}," ","Matthew Morgan"," "),"|",o.a.createElement("a",{href:"https://www.linkedin.com/in/veronica-shei/"}," ","Veronica Shei"," ")),o.a.createElement("div",{class:"team-opener"},"Team:")),o.a.createElement("p",null,"A social movie recommendation platform that allows users to connect with friends, rate and review movies, and generates recommendations based on your activity. Built for our CS4500 Software Development semester-long project utilizing standard agile workflows and project management technologies such as Jenkins CI, Jira, Slack, and scrum."),o.a.createElement("h4",{id:"web_dev_projects"},"Web Dev Projects"),o.a.createElement("p",null,"Several projects and assignments hosted on a Virtual Private Server setup by ourselves. Throughout the semester for CS4550 Web Development, we were required to build and deploy each assignment and project to this site. Projects included an online server-validated chess game that could host an unlimited number of rooms and spectators, a Github style task tracker and a version converted to a single-page application, and a SPA recommendation engine for various categories."))}}]),t}(o.a.Component)),j=a(67),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){var t=a.props,n=t.replace,o=t.to,r=t.delay,l=t.onDelayStart,i=t.onDelayEnd,c=a.context.router,s=c.history;c.route.location.pathname!==o&&(l(e,o),e.defaultPrevented||(e.preventDefault(),a.timeout=setTimeout(function(){n?s.replace(o):s.push(o),i(e,o)},r)))},a.timeout=null,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.delay,delete e.onDelayStart,delete e.onDelayEnd,delete e.to,o.a.createElement("div",Object.assign({className:"page-link"},e,{onClick:this.handleClick}))}}]),t}(o.a.Component);w.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},w.contextTypes=j.a.contextTypes;var S=w,k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e)))._delayStart=function(e,t){document.getElementById("wrapper").className="is-loading"},a.timeout=null,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={backgroundImage:"url(".concat(this.props.src,")"),cursor:"pointer",outline:"0px"};return o.a.createElement("article",{className:this.props.articlestyle+" thumb"},o.a.createElement("a",{className:"image",style:e}),o.a.createElement(S,{to:this.props.to,delay:375,onDelayStart:this._delayStart},o.a.createElement("h2",null,this.props.title)))}}]),t}(o.a.Component),C=(a(42),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50)}},{key:"render",value:function(){return o.a.createElement("section",{className:"tiles",id:"main"},o.a.createElement(k,{articlestyle:"style1",src:"/assets/images/Portrait/16.jpg",to:"/photography/portrait",title:"Portrait"}),o.a.createElement(k,{articlestyle:"style2",src:"/assets/images/Street_Urban/16.jpg",to:"/photography/street_urban",title:"Street/Urban"}),o.a.createElement(k,{articlestyle:"style3",src:"/assets/images/Landscape/11.jpg",to:"/photography/landscape",title:"Landscape"}),o.a.createElement(k,{articlestyle:"style4",src:"/assets/images/Event/05.jpg",to:"/photography/event",title:"Event"}),o.a.createElement(k,{articlestyle:"style5",src:"/assets/images/Film/05.jpg",to:"/photography/film",title:"Film"}),o.a.createElement(k,{articlestyle:"style6",src:"/assets/images/Cosplay/06.jpg",to:"/photography/cosplay",title:"Cosplay"}))}}]),t}(o.a.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).timeout=null,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("article",{className:"thumb"},o.a.createElement("a",{href:this.props.src,className:"image"},o.a.createElement("img",{src:this.props.src,alt:""})))}}]),t}(o.a.Component),D=a(12),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"generatePhotos",value:function(){for(var e=[],t=18;t>0;t--)e.push(o.a.createElement(O,{src:"/assets/images/Portrait/".concat(D.ensureDoubleDigit(t),".jpg")}));return e}},{key:"render",value:function(){return o.a.createElement("section",{className:"tiles",id:"main"},this.generatePhotos())}}]),t}(o.a.Component),_=a(12),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"generatePhotos",value:function(){for(var e=[],t=18;t>0;t--)e.push(o.a.createElement(O,{src:"/assets/images/Street_Urban/".concat(_.ensureDoubleDigit(t),".jpg")}));return e}},{key:"render",value:function(){return o.a.createElement("section",{className:"tiles",id:"main"},this.generatePhotos())}}]),t}(o.a.Component),T=a(12),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"generatePhotos",value:function(){for(var e=[],t=11;t>0;t--)e.push(o.a.createElement(O,{src:"/assets/images/Landscape/".concat(T.ensureDoubleDigit(t),".jpg")}));return e}},{key:"render",value:function(){return o.a.createElement("section",{className:"tiles",id:"main"},this.generatePhotos())}}]),t}(o.a.Component),P=a(12),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"generatePhotos",value:function(){for(var e=[],t=18;t>0;t--)e.push(o.a.createElement(O,{src:"/assets/images/Event/".concat(P.ensureDoubleDigit(t),".jpg")}));return e}},{key:"render",value:function(){return o.a.createElement("section",{className:"tiles",id:"main"},this.generatePhotos())}}]),t}(o.a.Component),A=a(12),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"generatePhotos",value:function(){for(var e=[],t=6;t>0;t--)e.push(o.a.createElement(O,{src:"/assets/images/Film/".concat(A.ensureDoubleDigit(t),".jpg")}));return e}},{key:"render",value:function(){return o.a.createElement("section",{className:"tiles",id:"main"},this.generatePhotos())}}]),t}(o.a.Component),U=a(12),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){E()("#wrapper").removeClass("is-loading"),E()("body").removeClass("modal-active")},50);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"generatePhotos",value:function(){for(var e=[],t=7;t>0;t--)e.push(o.a.createElement(O,{src:"/assets/images/Cosplay/".concat(U.ensureDoubleDigit(t),".jpg")}));return e}},{key:"render",value:function(){return o.a.createElement("section",{className:"tiles",id:"main"},this.generatePhotos())}}]),t}(o.a.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:b}),o.a.createElement(h.a,{exact:!0,path:"/about",component:v}),o.a.createElement(h.a,{exact:!0,path:"/resume",component:f}),o.a.createElement(h.a,{exact:!0,path:"/projects",component:g}),o.a.createElement(h.a,{exact:!0,path:"/photography",component:C}),o.a.createElement(h.a,{exact:!0,path:"/photography/portrait",component:x}),o.a.createElement(h.a,{exact:!0,path:"/photography/street_urban",component:N}),o.a.createElement(h.a,{exact:!0,path:"/photography/landscape",component:M}),o.a.createElement(h.a,{exact:!0,path:"/photography/event",component:I}),o.a.createElement(h.a,{exact:!0,path:"/photography/film",component:B}),o.a.createElement(h.a,{exact:!0,path:"/photography/cosplay",component:W})))}}]),t}(o.a.Component),z=a(13),L=a(21),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){e.preventDefault(),e.stopPropagation();var t=a.props,n=t.replace,o=t.to,r=t.delay,l=t.onDelayStart,i=t.onDelayEnd,c=a.context.router,s=c.history,m=c.route.location.pathname;a.props.closeMenu&&a.props.closeMenu(),m===o&&"/projects"!==m||(m.includes("/projects")&&o.includes("/projects")?s.replace(o):(l(e,o),a.timeout=setTimeout(function(){n?s.replace(o):s.push(o),i(e,o)},r)))},a.timeout=null,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.delay,delete e.onDelayStart,delete e.onDelayEnd,delete e.to,o.a.createElement("li",{onClick:this.handleClick},e.children)}}]),t}(o.a.Component);K.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},K.contextTypes=j.a.contextTypes;var R=K,F=(a(60),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e)))._delayStart=function(e,t){document.getElementById("wrapper").className="is-loading"},a._closeMenu=function(){a.setState({menuStatus:!1})},a.state={menuStatus:!1},a._closeMenu=a._closeMenu.bind(Object(z.a)(Object(z.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="assets/js/dropotronInit.js",e.type="text/javascript",e.async=!0,e.id="dropotronScript",document.body.appendChild(e),window.addEventListener("resize",this.updateDimensions.bind(this)),this.updateDimensions()}},{key:"componentDidUpdate",value:function(){E()("#dropotronScript").remove();var e=document.createElement("script");e.src="assets/js/dropotronInit.js",e.type="text/javascript",e.async=!0,e.id="dropotronScript",document.body.appendChild(e)}},{key:"updateDimensions",value:function(){this.setState({menuStatus:this.state.menuStatus})}},{key:"render",value:function(){return document.documentElement.clientWidth<550?o.a.createElement(u.a,null,o.a.createElement(L.slide,{isOpen:this.state.menuStatus,className:"bm-menu"},o.a.createElement("ul",null,o.a.createElement(R,{to:"/",closeMenu:this._closeMenu,delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Home")),o.a.createElement(R,{to:"/about",closeMenu:this._closeMenu,delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"About")),o.a.createElement(R,{to:"/resume",closeMenu:this._closeMenu,delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Resume")),o.a.createElement(R,{to:"/projects",closeMenu:this._closeMenu,delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Projects")),o.a.createElement(R,{to:"/photography",closeMenu:this._closeMenu,delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Photography"))))):o.a.createElement(u.a,null,o.a.createElement("nav",{id:"nav"},o.a.createElement("ul",null,o.a.createElement(R,{to:"/",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Home")),o.a.createElement(R,{to:"/about",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"About")),o.a.createElement(R,{to:"/resume",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Resume")),o.a.createElement(R,{to:"/projects",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Projects"),o.a.createElement("ul",null,o.a.createElement(R,{to:"/projects#personal",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Personal"),o.a.createElement("ul",null,o.a.createElement(R,{to:"/projects#basic_user_app",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Basic User App")),o.a.createElement(R,{to:"/projects#personal_site",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Personal Site")),o.a.createElement(R,{to:"/projects#home_automation",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Home Automation")))),o.a.createElement(R,{to:"/projects#hackathon",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Hackathon"),o.a.createElement("ul",null,o.a.createElement(R,{to:"/projects#divvi",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"divvi")),o.a.createElement(R,{to:"/projects#lingo",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"linGO")),o.a.createElement(R,{to:"/projects#cappy",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Cap.py")),o.a.createElement(R,{to:"/projects#argot",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"ARgot")),o.a.createElement(R,{to:"/projects#dangerzone",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"DangerZone")),o.a.createElement(R,{to:"/projects#iceboxme",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Icebox.me")))),o.a.createElement(R,{to:"/projects#school",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"School"),o.a.createElement("ul",null,o.a.createElement(R,{to:"/projects#mcu_visualization",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"MCU Visualization")),o.a.createElement(R,{to:"/projects#spoiled_tomatillos",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Spoiled Tomatillos")),o.a.createElement(R,{to:"/projects#web_dev_projects",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Web Dev Projects")))))),o.a.createElement(R,{to:"/photography",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Photography"),o.a.createElement("ul",null,o.a.createElement(R,{to:"/photography/portrait",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Portrait")),o.a.createElement(R,{to:"/photography/street_urban",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Street/Urban")),o.a.createElement(R,{to:"/photography/landscape",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Landscape")),o.a.createElement(R,{to:"/photography/event",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Event")),o.a.createElement(R,{to:"/photography/film",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Film")),o.a.createElement(R,{to:"/photography/cosplay",delay:375,onDelayStart:this._delayStart},o.a.createElement("p",null,"Cosplay")))))))}}]),t}(o.a.Component)),G=(a(62),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"wrapper"},o.a.createElement(F,null),o.a.createElement("div",{id:"content"},o.a.createElement(H,null)),o.a.createElement("footer",{id:"footer"},o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"\xa9 Daniel Chen | HTML5 Up"))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.50aae242.chunk.js.map