import{f as a,p as t,b as o,j as i}from"./index-e3d01199.js";const n="/era/assets/1-6d7913ac.png",s="/era/assets/6-363b835c.png",e=a`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`,c=a`
  0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
`,r=a`
  0%, 100% {
    opacity: 0;
  }
  30%, 70% {
    opacity: 1;
  }
`,g=t.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`,d=t.div`
  background-image: url(${o});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${e} 12s infinite;
`,u=t.div`
  background-image: url(${n});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${c} 12s infinite;
`,p=t.div`
  background-image: url(${s});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${r} 12s infinite;
`,b=()=>i.jsxs(g,{children:[i.jsx(d,{}),i.jsx(u,{}),i.jsx(p,{})]});export{b as default};
