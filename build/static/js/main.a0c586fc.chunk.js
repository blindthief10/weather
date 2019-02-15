(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=(a(32),a(33),a(5)),l=a(6),s=a(8),m=a(7),u=a(9),p=a(57),h=a(25),d=a(24),y=a(11),b=a(22),f=a.n(b),v=a(58),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.a,{className:"nav-link",to:"/weather"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.a,{className:"nav-link",to:"/show"},"Show Weather")))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.makeCityRequest},r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Type a city")),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.props.updateCity,value:this.props.cityName}),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Search for a weather in a city")))}}]),t}(n.Component),j=[{limitTemp:40,color:"red"},{limitTemp:35,color:"orange"},{limitTemp:30,color:"yellow"},{limitTemp:20,color:"deepskyblue"},{limitTemp:10,color:"purple"},{limitTemp:0,color:"grey"},{limitTemp:-100,color:"white"}],O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"defineColor",value:function(e){return j.find(function(t){return e>=t.limitTemp}).color}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid d-flex flex-lg-row flex-md-column justify-content-start flex-wrap"},this.props.allCities.map(function(t,a){return r.a.createElement("div",{style:{background:e.defineColor(t.tempInCelsius)},key:a,className:"card w-xl-25 w-md-100 my-md-4 mx-lg-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"title text-center text-dark"},t.nameOfCity)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"lead"},"Temperature is ",t.tempInCelsius,r.a.createElement("sup",null," o"),"c")),r.a.createElement("div",{className:"card-footer"},r.a.createElement("p",{className:"lead text-dark"},t.description," ",r.a.createElement("img",{src:t.iconAddress}))))}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={cityName:"",citiesShown:[]},a.updateCity=a.updateCity.bind(Object(y.a)(Object(y.a)(a))),a.makeCityRequest=a.makeCityRequest.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"updateCity",value:function(e){this.setState({cityName:e.target.value})}},{key:"makeCityRequest",value:function(e){var t=this;e.preventDefault();var a=Object(d.a)(this.state.citiesShown),n="https://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.cityName,"&APPID=").concat("16d4785f9c10724266053adb3c29dcfd");f.a.get(n).then(function(e){var n=e.data,r={nameOfCity:n.name,tempInCelsius:Math.round(n.main.temp-273),description:n.weather[0].description,iconAddress:"http://openweathermap.org/img/w/".concat(n.weather[0].icon,".png")};a.push(r),t.setState({citiesShown:a,cityName:""})}),this.props.history.push({pathname:"/show"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement(h.a,{path:"/",exact:!0,render:function(t){t.match,t.history,t.location;return r.a.createElement(E,{updateCity:e.updateCity,cityName:e.state.cityName,makeCityRequest:e.makeCityRequest})}}),r.a.createElement(h.a,{path:"/show",render:function(){return r.a.createElement(O,{allCities:e.state.citiesShown})}})))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/weather",render:function(e){e.match;var t=e.history;e.location;return r.a.createElement(C,{history:t})}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.a0c586fc.chunk.js.map