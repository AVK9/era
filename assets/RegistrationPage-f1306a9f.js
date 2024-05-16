import{n as F,p as n,r as i,j as e,u as I,B as m,S as B}from"./index-e59c20ad.js";import{I as w,a as x,F as D,B as E,T as k}from"./Location.styled-d8e5483a.js";const z=F.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;const V=n.div`
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
`;const C=n.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,R=n.form`
  margin-top: 24px;
`,$=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,N=n.div`
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  /* background-color: pink; */
`,A=n.label`
  font-family: var(--font-family);
  font-weight: 400;
  padding-left: 10px;
  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.active?"#101828":"rgba(16, 24, 40, 0.6)"};
`,T=n.input`
  outline: none;
  border: none;

  height: 18px;
  width: 18px;

  z-index: 1;
  opacity: 0;
`,W=n.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  /* border: 2px solid red; */

  position: absolute;
  top: 50% -9px;
  left: 0;
  /* background-color: ${t=>t.active?"red":"transparent"}; */
  background: ${t=>t.active?"radial-gradient(circle at center, #ff0000, #ffb7db)":"transparent"};
  border: ${t=>t.active?"radial-gradient(circle at center, #ff0000, #ffb7db)":"2px solid red"};
`,f=t=>{const[r,o]=i.useState(null),s=c=>{o(c)},d=()=>{o(null)},{type:u,label:h,inputId:l,icon:g}=t;return e.jsxs(N,{...t,children:[e.jsx(T,{...t,onFocus:()=>s(l),onBlur:d,type:u,required:!0}),e.jsx(A,{active:r===l,children:h}),e.jsx(W,{active:r===l,children:e.jsx(w,{icon:g})})]})},q=()=>{const[t,r]=i.useState(""),[o,s]=i.useState(""),[d,u]=i.useState(""),[h,l]=i.useState(!1),[g,c]=i.useState(!1),[H,v]=i.useState(!1),b=/[а-яА-Яa-zA-Z]{3,}/,p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,j=a=>{a.preventDefault(),y()},y=()=>{if(!p.test(o)){m.warn("Email must have been correct");return}if(b.test(t)){const a={name:t,email:o,startDate,comment};console.log(a),S(),location.reload()}else{m.warn("Name must have been 3 charge");return}},S=()=>{r(""),s(""),m.success("Congratulations! Order received. Wait for a letter in the mail with further instructions")};return I(a=>a.time.stateHandleDate),e.jsx(V,{children:e.jsxs(R,{onSubmit:j,children:[e.jsxs($,{children:[e.jsx(x,{label:"Full name",placeholder:"Ivan Bereza",type:"text",name:"name",value:t,onChange:a=>{b.test(a.target.value)?l(!0):l(!1),r(a.target.value)}}),e.jsx(x,{label:"Email",type:"email",name:"email",value:o,onChange:a=>{p.test(a.target.value)?c(!0):c(!1),s(a.target.value)},placeholder:"ivan@gmail.com"}),e.jsx(x,{label:"Date of bird",type:"date",name:"date",value:d,onChange:a=>{p.test(a.target.value)?v(!0):v(!1),u(a.target.value)},placeholder:"ivan@gmail.com"}),e.jsx(C,{children:"Where did you hear about this event?"}),e.jsxs(D,{gap:"20px",children:[e.jsx(f,{label:"Social media",type:"radio",name:"radio",value:"Social media"}),e.jsx(f,{label:"Friends",type:"radio",name:"radio",value:"Friends"}),e.jsx(f,{label:"Found myself",name:"radio",value:"Found myself",type:"radio"})]})]}),e.jsx(E,{children:"Send"})]})})},P=()=>e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(k,{children:"Event registration"}),e.jsx(q,{})]})});export{P as default};
