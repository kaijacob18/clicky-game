(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea","clicked":false},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor","clicked":false},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head","clicked":false},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory","clicked":false},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas","clicked":false},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington","clicked":false},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow","clicked":false},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City","clicked":false},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California","clicked":false},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California","clicked":false},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth","clicked":false},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump","clicked":false}]')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),c=a.n(o),r=a(3),s=a(4),l=a(7),m=a(5),u=a(8);a(14);var d=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Occupation:")," ",e.occupation),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.location))),i.a.createElement("span",{onClick:function(){return e.removeFriend(e.id)},className:"remove"},"\ud835\ude05"))};a(15);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(16);var g=function(e){return i.a.createElement("h1",{className:"subtitle"},e.children)},f=a(6),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friends:f,topscore:0,score:0},a.removeFriend=function(e){var t=a.state.friends.map((function(t){return t.id===e&&(t.clicked||(a.state.score>=a.state.topscore&&(a.setState({topscore:a.state.score+1}),t.clicked=!0),a.setState({score:a.state.score+1})),t.clicked&&(a.setState({score:0}),t.clicked=!1)),t}));a.setState({friends:t});var n=a.state.friends.sort((function(){return Math.random()-.5}));a.setState({friends:n})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement("h1",{className:"title"},"Friends List"),i.a.createElement(g,null,"Score: ",this.state.score," "," "," High Score:",this.state.topscore," "),this.state.friends.map((function(t){return i.a.createElement(d,{removeFriend:e.removeFriend,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})})))}}]),t}(n.Component);a(17);c.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.997e8a17.chunk.js.map