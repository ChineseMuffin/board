(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var i=e(0),c=e(1),r=e.n(c),o=e(3),s=e.n(o),a=(e(13),e(4)),l=e(5),h=e(7),u=e(6);e(14);function f(t){return Object(i.jsx)("rect",{width:t.width,height:t.height,x:t.x,y:t.y,fill:t.fill,stroke:t.stroke,onClick:t.onClick})}function d(t){var n=100;return Object(i.jsx)("g",{id:"display",children:t.dots.map((function(e,c){return function(e){var c=t.dots[e],r=Math.floor(e/2),o=e%2;return Object(i.jsx)(f,{width:n,height:n,x:n*o,y:n*r,fill:c.lighting?"#ff0000":"#ffffff",stroke:"#000000",onClick:function(){return t.onClick(e)}})}(c)}))})}var g=function(t){Object(h.a)(e,t);var n=Object(u.a)(e);function e(t){var i;Object(a.a)(this,e),(i=n.call(this,t)).handleClick=function(t){var n=i.state.dots.slice();n[t].lighting=!n[t].lighting,i.setState({dots:n})};var c={lighting:!1};return i.state={dots:Array(4).fill().map((function(){return Object.assign({},c)}))},i}return Object(l.a)(e,[{key:"render",value:function(){return Object(i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"1000",height:"1000",children:Object(i.jsx)(d,{dots:this.state.dots,onClick:this.handleClick})})}}]),e}(r.a.Component);var j=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(g,{})})},b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),i(t),c(t),r(t),o(t)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.135b248a.chunk.js.map