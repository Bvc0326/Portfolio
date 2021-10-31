(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),o=(n(133),n(74)),l=n(12),s=(n(134),n(121)),d=n(285),j=n(292),u=n(289),b=n(60),m=n(111),h=n.n(m),p=n(120),x=n(39),O=x.a().shape({name:x.b().required("Required"),email:x.b().required("Required").email("Not a valid email address"),subject:x.b().required("Required"),message:x.b().required("Required")});var v=function(){var e=Object(b.b)(),t=e.errors,n=e.isSubmitting,i=e.isValidating,r=e.setSubmitting;return Object(a.useEffect)((function(){var e=Object.keys(t);if(e.length>0&&n&&!i){var a=e[0],c=document.querySelector('div input[name="'.concat(a,'"]')),o=document.getElementById(a),l=c||o;l&&(l.scrollIntoView({behavior:"auto",block:"center",inline:"center"}),l.focus(),r(!1))}}),[n,i,t]),null},g=n(5);Object(p.a)("user_Per382gYay4hoP0ZJlGuQ");var f=function(){return Object(g.jsx)(b.a,{initialValues:{name:"",email:"",subject:"",message:""},validationSchema:O,onSubmit:function(e){return function(e){var t={service_id:"service_2c0uwck",template_id:"template_idkpyvq",user_id:"user_Per382gYay4hoP0ZJlGuQ",template_params:Object(s.a)({},e)};h()("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",data:t,contentType:"application/json"})}(e)},children:function(e){e.dirty;var t=e.handleChange,n=e.values,a=e.errors,i=e.handleSubmit;return Object(g.jsx)("form",{onSubmit:i,children:Object(g.jsxs)(d.a,{container:!0,direction:"column",spacing:3,children:[Object(g.jsx)(d.a,{item:!0,children:Object(g.jsx)(j.a,{label:"Name",variant:"outlined",fullWidth:!0,onChange:t,id:"name",value:n.name,helperText:a.name,error:Boolean(a.name)})}),Object(g.jsx)(d.a,{item:!0,children:Object(g.jsx)(j.a,{label:"Email",variant:"outlined",fullWidth:!0,onChange:t,id:"email",value:n.email,helperText:a.email,error:Boolean(a.email)})}),Object(g.jsx)(d.a,{item:!0,children:Object(g.jsx)(j.a,{label:"Subject",variant:"outlined",fullWidth:!0,onChange:t,id:"subject",value:n.subject,helperText:a.subject,error:Boolean(a.subject)})}),Object(g.jsx)(d.a,{item:!0,children:Object(g.jsx)(j.a,{label:"Message",variant:"outlined",fullWidth:!0,onChange:t,id:"message",value:n.message,helperText:a.message,error:Boolean(a.message)})}),Object(g.jsx)(d.a,{item:!0,children:Object(g.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})}),Object(g.jsx)(v,{})]})})}})},y=n(294),S=n(291),k=n(290),w=n(293),C=Object(w.a)((function(){return Object(k.a)({root:{background:"#1b242f",borderBottom:"1px solid #d9d9d9",boxShadow:"0px 2px 6px 0px rgba(0, 0, 0, 0.14)",boxSizing:"border-box",height:50,flex:1,fontFamily:["Overpass","sans-serif"].join(",")}})}));var B=Object(l.f)((function(e){C();var t=e.history;return Object(g.jsx)("div",{style:{height:"100px",paddingTop:"50px"},children:Object(g.jsxs)(y.a,{children:[Object(g.jsx)(S.a,{onClick:function(){t.push("/")},children:"HOME"}),Object(g.jsx)(S.a,{children:"ABOUT"}),Object(g.jsx)(S.a,{onClick:function(){t.push("/contact")},children:"CONTACT"})]})})}));var T=function(e){var t=e.children;return Object(g.jsx)("section",{style:{margin:"20px 0 20px 0"},children:t})},q=n(257);var I=function(e){var t=e.variant,n=e.children,a=Object(w.a)((function(){return Object(k.a)({root:{fontFamily:["Overpass","sans-serif"].join(",")},h1:{fontSize:"3em",marginBottom:"1em"},h2:{fontSize:18},h3:{fontSize:"1.65em",marginBottom:"2em"},h4:{fontSize:"1.25em",marginBottom:"1.5em"}})}))();return Object(g.jsx)(q.a,{variant:t,classes:a,children:n})};var _=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(T,{children:Object(g.jsx)(I,{variant:"h1",children:"Hello, my name is Vinay. I am a Front End Devloper living in Chicago, IL."})}),Object(g.jsxs)(T,{children:[Object(g.jsx)(I,{variant:"h3",children:"About:"}),Object(g.jsxs)("p",{children:["I am currenlty working as a Front End Developer at ",Object(g.jsx)(S.a,{href:"https://cardinal-ip.com/",target:"_blank",children:"Cadrinal Intellectual Property"})," using modern technologies like HTML5, CSS3, and JavaScript, ReactJS, Redux. I collaborate well as an integral member of the development team. I have the ability to create interesting Web Pages while keeping them user-friendly. See my previous work history on ",Object(g.jsx)(S.a,{href:"https://www.linkedin.com/in/vinay-b-80b791154",target:"_blank",children:"LinkedIn"}),"."]})]})]})};var E=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(B,{}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{component:_,exact:!0,path:"/"}),Object(g.jsx)(l.a,{component:f,exact:!0,path:"/contact"})]})]})})};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.9352c396.chunk.js.map