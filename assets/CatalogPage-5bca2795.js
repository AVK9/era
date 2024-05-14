import{c as p,n as b,p as n,f as u,j as e,r as x,u as m,a as d,g as $,B as y,S as j}from"./index-d5180da4.js";import{F as h,A as v,B as k,T as w,C,a as L,L as M,b as N}from"./Filters-639198ec.js";const S=t=>t.adverts.adverts,A=t=>t.filter.filter,E=t=>t.filter.type,F=t=>t.filter.equipment,B=t=>t.adverts.isLoading,T=t=>t.adverts.error,V=t=>t.adverts.pageAnd,P=p([S,A],(t,a)=>a.length>0?t.filter(s=>s.location.toLowerCase().includes(a.toLowerCase())):t),q=p([P,E],(t,a)=>a.length>0?t.filter(s=>s.form.includes(a)):t),z=p([q,F],(t,a)=>a.length>0?t.filter(s=>a.every(o=>s.details[o]!==0&&s.transmission==="automatic")):t);b.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;const D=b.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,I="#4fa94d",R={"aria-busy":!0,role:"progressbar"},_=n.div`
  display: ${t=>t.$visible?"flex":"none"};
`,G="http://www.w3.org/2000/svg",H=({height:t=80,width:a=80,color:s=I,ariaLabel:o="bars-loading",wrapperStyle:c,wrapperClass:r,visible:l=!0})=>e.jsx(_,{$visible:l,style:{...c},className:r,"data-testid":"bars-loading","aria-label":o,...R,children:e.jsxs("svg",{width:a,height:t,fill:s,viewBox:"0 0 135 140",xmlns:G,"data-testid":"bars-svg",children:[e.jsxs("rect",{y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"60",width:"15",height:"140",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]})]})}),i=242.776657104492,J=1.6,K=u`
12.5% {
  stroke-dasharray: ${i*.14}px, ${i}px;
  stroke-dashoffset: -${i*.11}px;
}
43.75% {
  stroke-dasharray: ${i*.35}px, ${i}px;
  stroke-dashoffset: -${i*.35}px;
}
100% {
  stroke-dasharray: ${i*.01}px, ${i}px;
  stroke-dashoffset: -${i*.99}px;
}
`;n.path`
  stroke-dasharray: ${i*.01}px, ${i};
  stroke-dashoffset: 0;
  animation: ${K} ${J}s linear infinite;
`;const O=u`
to {
   transform: rotate(360deg);
 }
`;n.svg`
  animation: ${O} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;n.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const Q=u`
to {
   stroke-dashoffset: 136;
 }
`;n.polygon`
  stroke-dasharray: 17;
  animation: ${Q} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;n.svg`
  transform-origin: 50% 65%;
`;const U=()=>e.jsx(e.Fragment,{children:e.jsx(H,{height:"100",width:"100",color:"#9ebbff",ariaLabel:"bars-loading",wrapperClass:"",visible:!0,wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}),W=()=>{const[t,a]=x.useState(1),s=m(),o=d(B),c=d(T);x.useEffect(()=>{s($(t))},[s,t]);const r=d(z),l=d(V);l&&y.warn("Sorry, there are no more advertisements");const g=()=>{a(t+1)};return e.jsxs(h,{direction:"column",children:[o&&e.jsx(U,{}),c&&e.jsxs("p",{children:["Error: ",c]}),r&&r.length>0&&e.jsx(D,{children:r.map(f=>e.jsx(v,{data:f},f._id))}),!l&&r.length%2===0&&e.jsx(h,{justify:"center",children:e.jsx(k,{loadmore:!0,onClick:g,children:"Load more"})})]})},Z=()=>e.jsxs(j,{children:[e.jsx(h,{justify:"center",children:e.jsx(w,{color:"#E44848",children:"Catalog camper for rent "})}),e.jsxs(C,{children:[e.jsxs(L,{children:[e.jsx(M,{}),e.jsx(N,{})]}),e.jsx(W,{})]})]});export{Z as default};
