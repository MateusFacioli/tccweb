(this["webpackJsonpreact-firebase-authentication"]=this["webpackJsonpreact-firebase-authentication"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(53),c=a.n(o),l=(a(67),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),p=a(25),d=a(18),h=(a(34),a(68),a(69),a(70),a(22),a(71),function(){return r.a.createElement("header",{id:"main-header"},"Bem vindo ao EasyMeal")}),b=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 Dreams come true in 2019"))},E=a(54),f=a(16),v=(a(55),a(20)),g=a(30),O=a.n(g);O.a.initializeApp({apiKey:"AIzaSyADSABmvGyKabBgONZH9UyO5Iuz9ZWJzRM",authDomain:"tcc-2019-8f616.firebaseapp.com",databaseURL:"https://tcc-2019-8f616.firebaseio.com",projectId:"tcc-2019-8f616",storageBucket:"tcc-2019-8f616.appspot.com",messagingSenderId:"605243143793",appId:"1:605243143793:web:e4732a1ca998b4d9",measurementId:"G-D08RGT3NBF"});var y=O.a,j=(y.getToken,a(86),a(57)),A=a.n(j),k=function(e){function t(){var e;Object(l.a)(this,t),e=Object(s.a)(this,Object(m.a)(t).call(this));var a=(a=new Date).getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()+"  "+a.getHours()+":"+a.getMinutes()+"  em vigor at\xe9 23:59 ";return e.state={date:a},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"date"},this.state.date)}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={comerciante:[],pedidos:[],vetoraux:[],numcomex:0,somaaux:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=0,a=[];y.database().ref("comerciante").on("child_added",(function(n){n.hasChild("pedidos"),n.val(),n.child("pedidos").val();var r=[];n.hasChild("pedidos")&&(a[++t-1]=e.snapshotToArray(n.child("pedidos")));for(var o=0,c=0,l=0,i=0;i<a.length;i++){for(var s=0;s<a[i].length;s++)o+=a[i][s].produto.preco;l=o-(c=.1*o);document.getElementById("cbpedidos");r.push({descontado:c,vendido:o,receber:l}),e.setState({pedidos:r}),o=0,l=0,c=0}})),y.database().ref("comerciante").on("value",(function(t){var a=t.val(),n=(e.snapshotToArray(t),[]);for(var r in a)if(void 0!==a[r].nome||void 0!==a[r].email){document.getElementById("cbcomerciante");n.push({id:a[r].key,nomecom:a[r].nome,email:a[r].email}),e.setState({comerciante:n})}}))}},{key:"snapshotToArray",value:function(e){var t=[];return e.forEach((function(e){var a=e.val();a.key=e.key,t.push(a)})),t}},{key:"Repasse",value:function(e){window.confirm("Deseja fazer o repasse para"+this.state.pedidos.nomecom)}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:A.a,className:"App-logo",alt:"logo"}),r.a.createElement("br",null),r.a.createElement("h1",null,"Repasse aos comerciantes da plataforma EasyMeal-web"),r.a.createElement("br",null)),r.a.createElement("h1",null,"Data em avalia\xe7\xe3o"),r.a.createElement("p",null," ",r.a.createElement("strong",null,r.a.createElement(k,null))),r.a.createElement("div",null,r.a.createElement("table",{align:"center"},r.a.createElement("tr",null,r.a.createElement("th",null,"COMERCIANTES"),r.a.createElement("th",null,"PEDIDOS"),r.a.createElement("th",null,"DATA"),r.a.createElement("th",null,"LOCAL")),r.a.createElement("td",null,r.a.createElement("select",{onClick:this.handleChange,name:"cbcomerciante"},r.a.createElement("option",{value:"default"},"Selecione um comerciante"),this.state.comerciante.map((function(e){return r.a.createElement("option",{value:e.key},"Nome: ",e.nomecom," **** Email: (",e.email,")")})))),r.a.createElement("table",{align:"center"},r.a.createElement("td",null,r.a.createElement("select",{name:"cbpedidos"},r.a.createElement("option",{value:"default"},"Selecione um pedido"),this.state.pedidos.map((function(e){return r.a.createElement("option",{value:"nome"},"Total vendido: R$",e.vendido,", descontado: R$",e.descontado," a receber: R$",e.receber)}))),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(t){return e.Repasse(t)}},"Repasse")))))))}}]),t}(r.a.Component),C=a(58),w=a.n(C),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Fa\xe7a login para continuar no EasyMeal-web"),r.a.createElement("p",null,"voc\xea esta em home")))}}]),t}(n.Component),I=a(59),S=a.n(I),R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.signOut,n=e.signInWithGoogle;return r.a.createElement("div",{className:"login"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:S.a,className:"App-logo",alt:"logo"}),t?r.a.createElement("p",null,"Ol\xe1, ",t.displayName):r.a.createElement("p",null,"Por favor logue em EasyMeal."),t?r.a.createElement("button",{onClick:a},"Sign out"):r.a.createElement("button",{onClick:n},"Sign in with Google")))}}]),t}(n.Component),M=d.auth(),x={googleProvider:new d.auth.GoogleAuthProvider},B=Object(p.a)({providers:x,firebaseAppAuth:M})(R),T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.history,n=[{label:"Home",icon:"pi pi-fw pi-home",command:function(){return a.push("/")}},{label:"Login",icon:"pi pi-fw pi-user",command:function(){return a.push("/login")}},{label:"Dados",icon:"pi pi-fw pi-comment",command:function(){return t?a.push("/dados"):a.push("/login")}}];return r.a.createElement("div",{className:"App"},r.a.createElement(E.Menubar,{model:n}),r.a.createElement(h,null),r.a.createElement("div",{id:"main"},r.a.createElement("main",null,r.a.createElement("div",{className:"content",id:"content"},this.props.children))),r.a.createElement(b,null))}}]),t}(n.Component),G=d.auth(),P={googleProvider:new d.auth.GoogleAuthProvider},z=Object(p.a)({providers:P,firebaseAppAuth:G})(Object(f.g)(T));a(104);c.a.render(r.a.createElement(v.a,null,r.a.createElement(z,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:D}),r.a.createElement(f.b,{path:"/login",component:B}),r.a.createElement(f.b,{path:"/dados",component:N})))),document.getElementById("root"))},22:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/transacao.bbaf39a0.svg"},58:function(e,t,a){e.exports=a.p+"static/media/firebase-seeklogo.com.bfa69c4f.svg"},59:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},62:function(e,t,a){e.exports=a(105)},67:function(e,t,a){},71:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.da444074.chunk.js.map