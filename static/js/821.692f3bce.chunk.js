"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[821],{2821:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,a,i,o,l,s,c,d,u,x,p,m,f,h,b=t(2791),Z=t(9434),g=t(4270),j=function(n){return n.contacts},v=function(n){return n.filter},w=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},C=t(5705),z=t(168),F=t(6088),k=t(6151),A=(0,F.Z)(C.l0)(r||(r=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  padding: 30px;\n  border: 1px solid #1976d2;\n  border-radius: 4px;\n  box-shadow: 3px 3px 20px 10px #1976d275;\n  margin-bottom: 15px;\n  width: 340px;\n"]))),L=F.Z.label(a||(a=(0,z.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),N=(0,F.Z)(C.gN)(i||(i=(0,z.Z)(["\n  width: 300px;\n"]))),_=(0,F.Z)(k.Z)(o||(o=(0,z.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 300px;\n"]))),I=t(971),E=t(5218),q=t(3634),W=t(184),J=function(){var n=(0,Z.v9)(j).contactsList,e=(0,Z.I0)(),t=function(n,e){return e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()||e.number===n.number}))};return(0,W.jsx)(C.J9,{initialValues:{name:"",number:""},validate:function(n){var e={};return n.name?n.number?/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/i.test(n.number)||(e.number="Invalid - only digits, at least 3"):e.number="Required":e.name="Required",e},onSubmit:function(r,a){var i=a.resetForm;t(r,n)?E.Am.error('Name "'.concat(r.name,'" or Number "').concat(r.number,'" is already in your contacts')):e((0,q.uK)(r)),i()},children:(0,W.jsxs)(A,{autoComplete:"on",children:[(0,W.jsx)(L,{htmlFor:"name",children:(0,W.jsx)(N,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",component:I.n,label:"Name",fullWidth:!0,margin:"normal"})}),(0,W.jsx)(L,{htmlFor:"number",children:(0,W.jsx)(N,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number",component:I.n,label:"Number",fullWidth:!0,margin:"normal"})}),(0,W.jsx)(_,{type:"submit",variant:"contained",children:"Add Contact"})]})})},K=t(1362),R=t(4560),T=F.Z.form(l||(l=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  border: 1px solid #1976d2;\n  border-radius: 4px;\n  box-shadow: 3px 3px 20px 10px #1976d275;\n  width: 340px;\n  margin-bottom: 15px;\n"]))),$=(F.Z.label(s||(s=(0,z.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),(0,F.Z)(R.Z)(c||(c=(0,z.Z)(["\n  width: 300px;\n"])))),B=t(4808),D=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(v).filter;return(0,W.jsx)(T,{children:(0,W.jsx)($,{value:e,onChange:function(e){n((0,B.C)(e.currentTarget.value))},type:"text",name:"filter",label:"Find contacts by name",placeholder:"Enter name",fullWidth:!0,margin:"normal"})})},G=function(){var n=(0,Z.v9)(w),e=(0,Z.v9)(y);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(J,{}),(0,W.jsx)(D,{}),n&&!e&&(0,W.jsx)(K.a,{})]})},M=F.Z.div(d||(d=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  border: 1px solid #1976d2;\n  border-radius: 4px;\n  box-shadow: 3px 3px 20px 10px #1976d275;\n  width: 500px;\n"]))),P=F.Z.ul(u||(u=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),S=F.Z.li(x||(x=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 50px;\n"]))),V=F.Z.p(p||(p=(0,z.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),H=F.Z.span(m||(m=(0,z.Z)(["\n  color: #1976d2;\n"]))),O=(0,F.Z)(k.Z)(f||(f=(0,z.Z)(["\n  font-size: 12px;\n  width: 70px;\n"]))),Q=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(j).contactsList,t=(0,Z.v9)(v),r=function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,W.jsx)(M,{children:(0,W.jsxs)(P,{children:[0===r.length&&(0,W.jsx)("p",{children:"There is not any contacts"}),r.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,W.jsxs)(S,{children:[(0,W.jsxs)(V,{children:[r,": ",(0,W.jsx)(H,{children:a})]}),(0,W.jsx)(O,{type:"button",onClick:function(){return e=t,void n((0,q.GK)(e));var e},variant:"outlined",size:"small",children:"Delete"})]},t)}))]})})},U=F.Z.section(h||(h=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])));function X(){var n=(0,Z.I0)();return(0,b.useEffect)((function(){n((0,q.yF)())}),[n]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(g.q,{children:(0,W.jsx)("title",{children:"Contacts"})}),(0,W.jsxs)(U,{children:[(0,W.jsx)(G,{}),(0,W.jsx)(Q,{})]})]})}}}]);
//# sourceMappingURL=821.692f3bce.chunk.js.map