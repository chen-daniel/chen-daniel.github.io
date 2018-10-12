(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=(a(21),a(2)),s=a(3),l=a(5),p=a(4),m=a(6),u=a(54),d=a(56),h=a(55),y=(a(23),a(25),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10)}},{key:"render",value:function(){return r.a.createElement("section",{className:"home-page",id:"main"},r.a.createElement("header",null,r.a.createElement("span",{className:"avatar"},r.a.createElement("img",{alt:"",id:"home-img"})),r.a.createElement("h1",null,"Daniel Chen"),r.a.createElement("h2",null,"Northeastern University Student"),r.a.createElement("p",null,"Computer Science Major",r.a.createElement("br",null),"Entrepreneurship Minor")),r.a.createElement("footer",null,r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.github.com/chen-daniel/",className:"fa-github"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/dchen7321/",className:"fa-linkedin"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/dchenfotografeez/",className:"fa-instagram"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/dchen7321/",className:"fa-facebook"},"Facebook")))))}}]),t}(r.a.Component)),g=(a(27),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10)}},{key:"render",value:function(){return r.a.createElement("section",{className:"about-page",id:"main"},r.a.createElement("header",null,r.a.createElement("span",{className:"avatar"},r.a.createElement("img",{alt:"",id:"about-img"}))),r.a.createElement("p",null,"Hi! My name is Daniel and I'm currently a Computer Science student at Northeastern University with a minor in Entrepreneurship. I'm passionate about building, iterating upon, and optimizing solutions that put the user first. I was born in Canada, grew up in Hong Kong, and studied for a year back in Canada before moving to Boston. My interest in computer science was solidified during my first university lecture and since then I've had the opportunity to continuously grow and develop in the field. My interests currently lie in full-stack web development, AI, distributed systems, game development, and robotics.",r.a.createElement("br",null),r.a.createElement("br",null),"Most recently I was employed as a Software Developer Co-op at Circle. At this position, I have had the privilege of working with an extremely experienced and talented group of developers who have helped me improve as both a developer and a team member.",r.a.createElement("br",null),r.a.createElement("br",null),"Outside of VS Code, I also enjoy photography (Former Canon user converted to Sony), film, keeping up with tech news, gaming (Xbox FTW), basketball (Go Lebron), and hip-hop dance (WOO Kinjaz)."))}}]),t}(r.a.Component)),E=(a(29),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10)}},{key:"render",value:function(){return r.a.createElement("section",{className:"resume-page",id:"main"},r.a.createElement("embed",{src:"assets/files/Resume.pdf#view=FitH",alt:"pdf",className:"resume-pdf"}))}}]),t}(r.a.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10)}},{key:"render",value:function(){return r.a.createElement("section",{className:"about-page",id:"main"},r.a.createElement("p",null,"Hi! My name is Daniel and I'm currently a Computer Science student at Northeastern University with a minor in Entrepreneurship. I was born in Canada, grew up in Hong Kong, and studied for a year in Canada before moving to Boston. Coding has been a passion of mine since I attended my first university lecture. Since then I've had the opportunity to continuously grow and develop in the field. My specialties at the moment are in full-stack web development. Through classes, hackathons, and work, I've been given exposure to a myriad of web technologies and frameworks.",r.a.createElement("br",null),r.a.createElement("br",null),"Most recently I was employed as a Software Developer Co-op at Circle. At this position, I have had the opportunity to work with an extremely experienced and talented team of developers who have all helped me improve as both a developer and a member of a team.",r.a.createElement("br",null),r.a.createElement("br",null),"Outside of Visual Studio Code, I also enjoy photography (Former Canon user converted to Sony), film, keeping up with tech news, gaming (Xbox FTW), basketball (Go Lebron), and hip-hop dance (WOO Kinjaz)."))}}]),t}(r.a.Component),b=a(53),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){var t=a.props,n=t.replace,r=t.to,o=t.delay,c=t.onDelayStart,i=t.onDelayEnd,s=a.context.router,l=s.history;s.route.location.pathname!==r&&(c(e,r),e.defaultPrevented||(e.preventDefault(),a.timeout=setTimeout(function(){n?l.replace(r):l.push(r),i(e,r)},o)))},a.timeout=null,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.delay,delete e.onDelayStart,delete e.onDelayEnd,delete e.to,r.a.createElement("div",Object.assign({className:"page-link"},e,{onClick:this.handleClick}))}}]),t}(r.a.Component);j.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},j.contextTypes=b.a.contextTypes;var v=j,O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e)))._delayStart=function(e,t){document.getElementById("wrapper").className="is-loading"},a.timeout=null,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:this.props.articlestyle},r.a.createElement("span",{className:"image"},r.a.createElement("img",{src:this.props.src,alt:""})),r.a.createElement(v,{to:this.props.to,delay:350,onDelayStart:this._delayStart},r.a.createElement("h2",null,this.props.title)))}}]),t}(r.a.Component),w=(a(33),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10)}},{key:"render",value:function(){return r.a.createElement("section",{className:"tiles",id:"main"},r.a.createElement(O,{articlestyle:"style1",src:"/assets/images/pic17.jpg",to:"/photography/portrait",title:"Portrait"}),r.a.createElement(O,{articlestyle:"style2",src:"/assets/images/pic16.jpg",to:"/photography/street_urban",title:"Street/Urban"}),r.a.createElement(O,{articlestyle:"style3",src:"/assets/images/pic01.jpg",to:"/photography/landscape",title:"Landscape"}),r.a.createElement(O,{articlestyle:"style4",src:"/assets/images/pic02.jpg",to:"/photography/event",title:"Event"}),r.a.createElement(O,{articlestyle:"style5",src:"/assets/images/pic03.jpg",to:"/photography/cosplay",title:"Cosplay"}))}}]),t}(r.a.Component)),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).timeout=null,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"thumb"},r.a.createElement("a",{href:this.props.src,className:"image"},r.a.createElement("img",{src:this.props.src,alt:""})))}}]),t}(r.a.Component),C=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"render",value:function(){return r.a.createElement("section",{className:"tiles",id:"main"},r.a.createElement(k,{src:"/assets/images/pic17.jpg"}),r.a.createElement(k,{src:"/assets/images/pic16.jpg"}),r.a.createElement(k,{src:"/assets/images/pic04.jpg"}),r.a.createElement(k,{src:"/assets/images/pic05.jpg"}),r.a.createElement(k,{src:"/assets/images/pic06.jpg"}),r.a.createElement(k,{src:"/assets/images/pic07.jpg"}))}}]),t}(r.a.Component)),S=(a(37),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"render",value:function(){return r.a.createElement("section",{className:"tiles",id:"main"},r.a.createElement(k,{src:"/assets/images/pic17.jpg"}),r.a.createElement(k,{src:"/assets/images/pic16.jpg"}),r.a.createElement(k,{src:"/assets/images/pic04.jpg"}),r.a.createElement(k,{src:"/assets/images/pic05.jpg"}),r.a.createElement(k,{src:"/assets/images/pic06.jpg"}),r.a.createElement(k,{src:"/assets/images/pic07.jpg"}))}}]),t}(r.a.Component)),x=(a(39),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"render",value:function(){return r.a.createElement("section",{className:"tiles",id:"main"},r.a.createElement(k,{src:"/assets/images/pic17.jpg"}),r.a.createElement(k,{src:"/assets/images/pic16.jpg"}),r.a.createElement(k,{src:"/assets/images/pic04.jpg"}),r.a.createElement(k,{src:"/assets/images/pic05.jpg"}),r.a.createElement(k,{src:"/assets/images/pic06.jpg"}),r.a.createElement(k,{src:"/assets/images/pic07.jpg"}))}}]),t}(r.a.Component)),N=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"render",value:function(){return r.a.createElement("section",{className:"tiles",id:"main"},r.a.createElement(k,{src:"/assets/images/pic17.jpg"}),r.a.createElement(k,{src:"/assets/images/pic16.jpg"}),r.a.createElement(k,{src:"/assets/images/pic04.jpg"}),r.a.createElement(k,{src:"/assets/images/pic05.jpg"}),r.a.createElement(k,{src:"/assets/images/pic06.jpg"}),r.a.createElement(k,{src:"/assets/images/pic07.jpg"}))}}]),t}(r.a.Component)),D=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("wrapper").classList.remove("is-loading")},10);var e=document.createElement("script");e.src="assets/js/poptroxInit.js",e.type="text/javascript",e.async=!0,e.id="poptroxScript",document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("poptroxScript");e.parentNode.removeChild(e);var t=document.getElementsByClassName("poptrox-overlay");t[0].parentNode.removeChild(t[0])}},{key:"render",value:function(){return r.a.createElement("section",{className:"tiles",id:"main"},r.a.createElement(k,{src:"/assets/images/pic17.jpg"}),r.a.createElement(k,{src:"/assets/images/pic16.jpg"}),r.a.createElement(k,{src:"/assets/images/pic04.jpg"}),r.a.createElement(k,{src:"/assets/images/pic05.jpg"}),r.a.createElement(k,{src:"/assets/images/pic06.jpg"}),r.a.createElement(k,{src:"/assets/images/pic07.jpg"}))}}]),t}(r.a.Component)),I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:y}),r.a.createElement(h.a,{exact:!0,path:"/about",component:g}),r.a.createElement(h.a,{exact:!0,path:"/resume",component:E}),r.a.createElement(h.a,{exact:!0,path:"/projects",component:f}),r.a.createElement(h.a,{exact:!0,path:"/photography",component:w}),r.a.createElement(h.a,{exact:!0,path:"/photography/portrait",component:C}),r.a.createElement(h.a,{exact:!0,path:"/photography/street_urban",component:S}),r.a.createElement(h.a,{exact:!0,path:"/photography/landscape",component:x}),r.a.createElement(h.a,{exact:!0,path:"/photography/event",component:N}),r.a.createElement(h.a,{exact:!0,path:"/photography/cosplay",component:D})))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){var t=a.props,n=t.replace,r=t.to,o=t.delay,c=t.onDelayStart,i=t.onDelayEnd,s=a.context.router,l=s.history;s.route.location.pathname!==r&&(c(e,r),e.defaultPrevented||(e.preventDefault(),a.timeout=setTimeout(function(){n?l.replace(r):l.push(r),i(e,r)},o)))},a.timeout=null,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.delay,delete e.onDelayStart,delete e.onDelayEnd,delete e.to,r.a.createElement("li",{onClick:this.handleClick},e.children)}}]),t}(r.a.Component);B.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},B.contextTypes=b.a.contextTypes;var T=B,M=(a(46),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._delayStart=function(e,t){document.getElementById("wrapper").className="is-loading"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="assets/js/dropotronInit.js",e.type="text/javascript",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("nav",{id:"nav"},r.a.createElement("ul",null,r.a.createElement(T,{to:"/",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Home")),r.a.createElement(T,{to:"/about",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"About")),r.a.createElement(T,{to:"/resume",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Resume")),r.a.createElement(T,{to:"/projects",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Projects")),r.a.createElement(T,{to:"/photography",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Photography"),r.a.createElement("ul",null,r.a.createElement(T,{to:"/photography/portrait",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Portrait")),r.a.createElement(T,{to:"/photography/street_urban",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Street/Urban")),r.a.createElement(T,{to:"/photography/landscape",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Landscape")),r.a.createElement(T,{to:"/photography/event",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Event")),r.a.createElement(T,{to:"/photography/cosplay",delay:350,onDelayStart:this._delayStart},r.a.createElement("p",null,"Cosplay")))))))}}]),t}(r.a.Component)),L=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement(M,null),r.a.createElement("div",{id:"content"},r.a.createElement(I,null)),r.a.createElement("footer",{id:"footer"},r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Daniel Chen | HTML5 Up"))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.4e15f7ad.chunk.js.map