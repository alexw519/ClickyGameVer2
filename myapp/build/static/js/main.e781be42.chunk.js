(window.webpackJsonpmyapp=window.webpackJsonpmyapp||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":0,"name":"Elroy Patashnik","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/3/30/Elroy_Patashnik.jpg/revision/latest/scale-to-width-down/235?cb=20150319134915","status":"test"},{"id":1,"name":"Jeff Winger","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/6/66/Jeff_Season_Five.jpg/revision/latest/scale-to-width-down/235?cb=20131205004423","status":"test"},{"id":2,"name":"Britta Perry","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/f/f0/Britta_Season_Five.jpg/revision/latest/scale-to-width-down/235?cb=20150606141234","status":""},{"id":3,"name":"Pierce Hawthorne","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/b/b4/Hologram_Pierce.jpg/revision/latest/scale-to-width-down/235?cb=20140103151842","status":""},{"id":4,"name":"Abed Nadir","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/e/e8/Abed_Season_Five.jpg/revision/latest/scale-to-width-down/235?cb=20170802130826","status":""},{"id":5,"name":"Annie Edison","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/8/82/Annie_Season_Five.jpg/revision/latest/scale-to-width-down/235?cb=20150606151621","status":""},{"id":6,"name":"Troy Barnes","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/0/02/Troy_close_up_Season_Five.jpg/revision/latest/scale-to-width-down/235?cb=20140302174535","status":""},{"id":7,"name":"Shirley Bennett","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/e/e3/Shirley_Season_Five_crop.jpg/revision/latest/scale-to-width-down/235?cb=20140206193919","status":""},{"id":8,"name":"Ben Chang","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/c/c1/Chang_S5_headshot.jpg/revision/latest?cb=20140101080218","status":""},{"id":9,"name":"Craig Pelton","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/4/40/Craig_Pelton_Season_Five_close_up.jpg/revision/latest/scale-to-width-down/235?cb=20140227204753","status":""},{"id":10,"name":"Magnitude","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/5/5a/Magnitude.png/revision/latest/scale-to-width-down/235?cb=20130127151254","status":""},{"id":11,"name":"Neil","imageURL":"https://vignette.wikia.nocookie.net/community-sitcom/images/c/c9/Neil.jpg/revision/latest/scale-to-width-down/235?cb=20180530084414","status":""}]')},,,,,,,,function(e,t,i){e.exports=i(16)},,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(3),s=i.n(o),c=i(4),r=i(5),m=i(7),l=i(6),g=i(8),d=(i(14),function(e){return n.a.createElement("div",null,n.a.createElement("header",{className:"jumbotron"},n.a.createElement("h1",null,"ClickyGame"),n.a.createElement("h3",null,"Score: ",e.score," High Score: ",e.highScore),n.a.createElement("h3",{className:"test"})),e.children)}),h=(i(15),function(e){return n.a.createElement("div",{className:"card col-md-3"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{alt:e.name,src:e.imageURL,"data-status":e.status,id:e.id,onClick:function(){return e.clickedImage(e.id)}})))}),u=i(1);var p=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},v=function(e){function t(){var e,i;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(i=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={Characters:u,clicked:[],score:0,highScore:0},i.clickedImage=function(e){if(i.state.clicked.includes(e)){var t=i.state,a=t.highScore,n=t.score;a<n&&(a=n),n=0,i.setState({clicked:[],score:n,highScore:a})}else{var o=i.state,s=o.highScore,c=o.score,r=i.state.clicked;r.push(e),s<++c&&(s=c),i.setState({clicked:r,score:c,highScore:s})}i.shuffle(u)},i.shuffle=function(e){for(var t=e,a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),o=[t[n],t[a]];t[a]=o[0],t[n]=o[1]}i.setState(t)},i}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(p,null,n.a.createElement(d,{score:this.state.score,highScore:this.state.highScore}),n.a.createElement("div",{className:"row"},this.state.Characters.map(function(t){return n.a.createElement(h,{name:t.name,imageURL:t.imageURL,clickedImage:e.clickedImage,id:t.id})})))}}]),t}(a.Component);s.a.render(n.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e781be42.chunk.js.map