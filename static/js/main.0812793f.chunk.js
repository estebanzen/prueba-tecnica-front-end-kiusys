(this["webpackJsonpexamen-kiu"]=this["webpackJsonpexamen-kiu"]||[]).push([[0],{72:function(e,t,a){},90:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(0),i=a(16),r=a.n(i),s=a(43),l=a(35),o=a(47),j=a(34),b=(a(72),a(64)),d=a(57),h=a(58),u=a(37),O=a(66),m=a(63),x=a(60),p=a(61),f=a(62),g=a(59),k=a.n(g),v=a(65),w=a(42),y=a(28);a(90);function B(e){Object(c.useEffect)((function(){}));var t=Object(c.useState)(!1),a=Object(v.a)(t,2),i=a[0],r=a[1],s=function(){return r(!1)},l=function(){return r(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{className:"thumbnail",onClick:l,style:{width:"100%",marginBottom:"30px",cursor:"pointer"},alt:e.obj.title,title:e.obj.title,src:e.obj.thumbnailUrl}),Object(n.jsxs)(y.a,{show:i,onHide:s,children:[Object(n.jsx)(y.a.Header,{closeButton:!0,children:Object(n.jsx)(y.a.Title,{children:e.obj.title})}),Object(n.jsx)(y.a.Body,{style:{padding:"0px"},children:Object(n.jsx)("img",{className:"thumbnail",onClick:l,style:{width:"100%"},alt:e.obj.title,title:e.obj.title,src:e.obj.url})}),Object(n.jsx)(y.a.Footer,{children:Object(n.jsx)(w.a,{variant:"secondary",onClick:s,children:"Cerrar"})})]})]})}var C=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={album:[]},n.handleUserAdded=n.handleUserAdded.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://jsonplaceholder.typicode.com/photos?albumId=1").then((function(t){var a=t.data;e.setState({album:a})}))}},{key:"handleUserAdded",value:function(e){var t=Object(b.a)(this.state.album);t.push(e),this.setState({album:t})}},{key:"render",value:function(){return 0===this.state.album.length?Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{animation:"border"})}):Object(n.jsx)("div",{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(p.a,{children:this.state.album.map((function(e){return Object(n.jsx)(f.a,{lg:"2",sm:"3",md:"4",xs:"6",draggable:"true",children:Object(n.jsx)(B,{obj:e})},e.id)}))})})})}}]),a}(c.Component),N=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(l.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(n.jsx)(l.a.Brand,{href:"#home",children:"Prueba t\xe9cnica FRONT-END KiuSys"}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(n.jsxs)(o.a,{className:"mr-auto",children:[Object(n.jsx)(o.a.Link,{href:"https://www.linkedin.com/in/estebanzen/",target:"_blank",children:"Linkedin @estebanzen"}),Object(n.jsx)(o.a.Link,{href:"https://github.com/estebanzen/prueba-tecnica-front-end-kiusys",target:"_blank",children:"GitHub Repo"}),Object(n.jsxs)(j.a,{title:"Dependencias",id:"collasible-nav-dropdown",children:[Object(n.jsx)(j.a.Item,{target:"_blank",href:"https://react-bootstrap.github.io/",children:"React Bootstrap"}),Object(n.jsx)(j.a.Item,{target:"_blank",href:"https://www.npmjs.com/package/axios/",children:"Axios"}),Object(n.jsx)(j.a.Item,{target:"_blank",href:"https://reactjs.org/",children:"React"})]})]})})]}),Object(n.jsx)(s.a,{className:"p-3 main-container",children:Object(n.jsx)(C,{})})]})};a(96);r.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.0812793f.chunk.js.map