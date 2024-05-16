import{n as B,p as n,r as i,j as e,u as w,a as C,B as m,S as D}from"./index-e3d01199.js";import{I as E,a as g,F as k,B as z,T as R}from"./Location.styled-fef53f33.js";const V=B.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;const $=n.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
  position: relative;
`;n.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`;const N=n.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,A=n.form`
  margin-top: 24px;
`,T=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,W=n.div`
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  /* background-color: pink; */
`,q=n.label`
  font-family: var(--font-family);
  font-weight: 400;
  padding-left: 10px;
  font-size: 16px;
  line-height: 125%;
  color: ${a=>a.active?"#101828":"rgba(16, 24, 40, 0.6)"};
`,H=n.input`
  outline: none;
  border: none;

  height: 18px;
  width: 18px;

  z-index: 1;
  opacity: 0;
`,L=n.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  /* border: 2px solid red; */

  position: absolute;
  top: 50% -9px;
  left: 0;
  /* background-color: ${a=>a.active?"red":"transparent"}; */
  background: ${a=>a.active?"radial-gradient(circle at center, #ff0000, #ffb7db)":"transparent"};
  border: ${a=>a.active?"radial-gradient(circle at center, #ff0000, #ffb7db)":"2px solid red"};
`,h=a=>{const[r,s]=i.useState(null),l=d=>{s(d)},c=()=>{s(null)},{type:u,label:p,inputId:o,icon:f}=a;return e.jsxs(W,{...a,children:[e.jsx(H,{...a,onFocus:()=>l(o),onBlur:c,type:u,required:!0}),e.jsx(q,{active:r===o,children:p}),e.jsx(L,{active:r===o,children:e.jsx(E,{icon:f})})]})},O=()=>{const[a,r]=i.useState(""),[s,l]=i.useState(""),[c,u]=i.useState(""),[p,o]=i.useState(""),[f,d]=i.useState(!1),[P,v]=i.useState(!1),[Z,b]=i.useState(!1),y=w(),j=/[а-яА-Яa-zA-Z]{3,}/,x=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,S=t=>{t.preventDefault(),F()},F=()=>{if(!x.test(s)){m.warn("Email must have been correct");return}if(j.test(a))console.log({name:a,email:s,date:c,radio:p}),I(),y("/events");else{m.warn("Name must have been 3 charge");return}},I=()=>{r(""),l(""),m.success("Congratulations! Order received. Wait for a letter in the mail with further instructions")};return C(t=>t.time.stateHandleDate),e.jsx($,{children:e.jsxs(A,{onSubmit:S,children:[e.jsxs(T,{children:[e.jsx(g,{label:"Full name",placeholder:"Ivan Bereza",type:"text",name:"name",value:a,onChange:t=>{j.test(t.target.value)?d(!0):d(!1),r(t.target.value)}}),e.jsx(g,{label:"Email",type:"email",name:"email",value:s,onChange:t=>{x.test(t.target.value)?v(!0):v(!1),l(t.target.value)},placeholder:"ivan@gmail.com"}),e.jsx(g,{label:"Date of bird",type:"date",name:"date",value:c,onChange:t=>{x.test(t.target.value)?b(!0):b(!1),u(t.target.value)},placeholder:"ivan@gmail.com"}),e.jsx(N,{children:"Where did you hear about this event?"}),e.jsxs(k,{gap:"20px",children:[e.jsx(h,{label:"Social media",type:"radio",name:"radio",value:"Social media",onChange:t=>{o(t.target.value)}}),e.jsx(h,{label:"Friends",type:"radio",name:"radio",value:"Friends",onChange:t=>{o(t.target.value)}}),e.jsx(h,{label:"Found myself",name:"radio",value:"Found myself",type:"radio",onChange:t=>{o(t.target.value)}})]})]}),e.jsx(z,{children:"Send"})]})})},K=()=>e.jsx(D,{children:e.jsxs(V,{children:[e.jsx(R,{children:"Event registration"}),e.jsx(O,{})]})});export{K as default};
