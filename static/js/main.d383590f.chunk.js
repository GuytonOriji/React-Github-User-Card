(this.webpackJsonpgh_usercard=this.webpackJsonpgh_usercard||[]).push([[0],{45:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),o=a.n(r),c=(a(50),a(34)),i=a(35),s=a(42),u=a(36),m=a(43),d=(a(51),a(52),a(17)),p=a.n(d),h=(a(69),a(13)),g=a(14),E=a(76),f=a(15);function b(){var e=Object(h.a)(["\nwidth:200px;\nheight:200px;\nborder-radius:100%;\nborder:double  #561e18;\n"]);return b=function(){return e},e}function k(){var e=Object(h.a)(["\nflex:1;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\nalign-items:center;\nbackground-color:#8d2f23;\nfont-weight:bolder;\nfont-size:1.5rem;\npadding:20px 0px;\n-webkit-text-fill-color:azure;\n  border-radius:0%;\ncolor:azure;\n"]);return k=function(){return e},e}var w={borderRadius:"100%"},y=g.a.div(k()),v=g.a.img(b()),x={color:"azure",backgroundColor:"#212027",borderRadius:"0%"},C=function(e){return l.a.createElement(E.a,{className:"theCard"},l.a.createElement(y,null,l.a.createElement(f.a,null,l.a.createElement(v,{width:171,height:180,alt:"171x180",src:e.singleCard.avatar_url}),l.a.createElement(f.a.Caption,null,"Name: ",e.singleCard.name," ",l.a.createElement("br",null)," UserName: ",e.singleCard.login))),l.a.createElement(E.a,{body:!0,style:x,className:"inCardText"},l.a.createElement("ul",null,l.a.createElement("li",null,"Location: ",e.singleCard.location),l.a.createElement("li",null,"Hireable:",JSON.stringify(e.singleCard.hireable)),l.a.createElement("li",null,"Following:",e.singleCard.following),l.a.createElement("li",null,"Followers:",e.singleCard.followers),l.a.createElement("li",null,"Member Since:",l.a.createElement("em",null,l.a.createElement("small",null,e.singleCard.created_at)))),l.a.createElement("details",null,l.a.createElement("summary",null,"Click 2 See Followers"),l.a.createElement("ul",null,e.followers.map((function(e){return console.log(e.avatar_url),l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.html_url},l.a.createElement("img",{src:e.avatar_url,style:w,width:"30px",height:"30px"}),"-UserName: ",e.login))}))))),l.a.createElement(E.a,{body:!0,style:x,className:"inCardText"},l.a.createElement("p",null,"Bio: ",e.singleCard.bio)),l.a.createElement(y,null,l.a.createElement("p",null,"Last Updated:",l.a.createElement("em",null,l.a.createElement("small",null,e.singleCard.updated_at))),l.a.createElement("p",null,"Visit Me:",l.a.createElement("a",{href:e.singleCard.html_url},"https://github.com/users/guytonoriji"))))},U=a(78),N=a(79),F=a(80);function _(){var e=Object(h.a)(["\nwidth:200px;\nheight:200px;\nborder-radius:100%;\nborder:double  #561e18;\n"]);return _=function(){return e},e}function j(){var e=Object(h.a)(["\nflex:1;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\nalign-items:center;\nbackground-color:#8d2f23;\nfont-weight:bolder;\nfont-size:1.5rem;\npadding:20px 0px;\n-webkit-text-fill-color:azure;\n  border-radius:0%;\ncolor:azure;\n"]);return j=function(){return e},e}var S=g.a.div(j()),O={borderRadius:"100%"},z=g.a.img(_()),B={color:"azure",backgroundColor:"#212027",borderRadius:"0%"},M=function(e){return console.log("userstoshow page scripts props",e),l.a.createElement(E.a,{className:"theCard"},l.a.createElement(S,null,l.a.createElement(f.a,null,l.a.createElement(z,{width:171,height:180,alt:"headshot",src:e.picked.avatar_url||"null"}),l.a.createElement(f.a.Caption,null,"Name: ",e.picked.name||"null"," ",l.a.createElement("br",null)," UserName: ",e.picked.login||"null"))),l.a.createElement(E.a,{body:!0,style:B,className:"inCardText"},l.a.createElement("ul",null,l.a.createElement("li",null,"Location: ",e.picked.location||"null"),l.a.createElement("li",null,"Hireable:",JSON.stringify(e.picked.hireable)||e.picked.hireable),l.a.createElement("li",null,"Following:",e.picked.following||"null"),l.a.createElement("li",null,"Followers:",e.picked.followers||"null"),l.a.createElement("li",null,"Member Since:",l.a.createElement("em",null,l.a.createElement("small",null,e.picked.created_at||"null")))),l.a.createElement("details",null,l.a.createElement("summary",null,"Click 2 See Followers"),l.a.createElement("ul",null,e.pickedOnesFollowers.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.html_url||"none"},l.a.createElement("img",{src:e.avatar_url,style:O,width:"30px",height:"30px"}),"-UserName: ",e.login))}))))),l.a.createElement(E.a,{body:!0,style:B,className:"inCardText"},l.a.createElement("p",null,"Bio: ",e.picked.bio||"none")),l.a.createElement(S,null,l.a.createElement("p",null,"Last Updated:",l.a.createElement("em",null,l.a.createElement("small",null,e.picked.updated_at||"none"))),l.a.createElement("p",null,"Visit Me:",l.a.createElement("a",{href:e.picked.html_url||""},"https://github.com/users/",e.picked.login||"none"))))},T=a(77),J=a(12),L={color:"azure",WebkitTextFillColor:"azure"},R=function(e){return console.log("search props",e),l.a.createElement(T.a,null,l.a.createElement(M,{picked:e.picked,pickedOnesFollowers:e.pickedUsersFollower}),l.a.createElement(U.a,{onSubmit:e.findUser},l.a.createElement(N.a,{type:"text",className:"takeChoice",placeholder:"type in here"}),l.a.createElement("div",null,l.a.createElement(F.a,{type:"submit",className:"btn btn-success",style:L},"Find"))),l.a.createElement(F.a,{type:"submit",className:"btn btn-danger",style:L},l.a.createElement(J.b,{to:"/"},"Go Back Home?")))},D=a(11),H={color:"azure"},I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).FindUser=function(t){t.preventDefault();var a=document.querySelector(".takeChoice");console.log("finding users...",a.value),p.a.get("https://api.github.com/users/".concat(a.value)).then((function(t){console.log("getting clients choice",t),e.setState({pickedUser:t.data}),p.a.get("https://api.github.com/users/".concat(a.value,"/followers")).then((function(t){console.log("getting clients choices followers",t),e.setState({pickedUsersFollower:t.data})}))})).catch((function(t){e.setState({pickedUser:"sorry I cant find that user"}),console.log(t)}))},e.state={ghUser:"",followers:[],pickedUser:"",pickedUsersFollower:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.github.com/users/guytonoriji").then((function(t){console.log("getting my card",t),e.setState({ghUser:t.data})})).then((function(t){p.a.get("https://api.github.com/users/guytonoriji/followers").then((function(t){e.setState({followers:t.data})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){return console.log("rendering.."),l.a.createElement(T.a,{className:"App"},l.a.createElement(D.a,{exact:!0,path:"/"},l.a.createElement(C,{singleCard:this.state.ghUser,followers:this.state.followers}),l.a.createElement("div",null,l.a.createElement(F.a,{className:"btn btn-info"},l.a.createElement(J.b,{to:"/search",style:H},"Search Users Instead? ")))),l.a.createElement(D.a,{exact:!0,path:"/search"},l.a.createElement(R,{findUser:this.FindUser,picked:this.state.pickedUser,pickedUsersFollower:this.state.pickedUsersFollower})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(J.a,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.d383590f.chunk.js.map