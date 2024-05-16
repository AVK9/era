import{p as r,j as e,L as i,a as n,c as p,r as h,g as j,S as u}from"./index-e3d01199.js";import{T as c,B as o,F as v}from"./Location.styled-fef53f33.js";const g=r.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 320px;
  height: 450px;
`,E=r.p``,m=({events:s})=>e.jsx(e.Fragment,{children:s.map(({title:t,description:a,event_date:x,organizer:d,id:l})=>e.jsxs(g,{children:[e.jsx(c,{children:t}),e.jsx(E,{children:a}),e.jsx("p",{children:x}),e.jsx("p",{children:d}),e.jsx(i,{to:"/registration",children:e.jsx(o,{to:"/registration",children:"Register"})}),e.jsx(i,{to:"/participants",children:e.jsx(o,{loadmore:!0,children:"View"})})]},l))}),f=r.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`,L=s=>s.events.events,w=s=>s.events.isLoading,B=s=>s.events.error,S=()=>{n(w),n(B);const s=p();h.useEffect(()=>{s(j())},[s]);const t=n(L);return e.jsx(f,{children:e.jsx(m,{events:t})})},T=()=>e.jsx(u,{children:e.jsxs(v,{justify:"center",flex:"column",direction:"column",children:[e.jsx(c,{color:"#E44848",children:"Events "}),e.jsx(S,{})]})});export{T as default};
