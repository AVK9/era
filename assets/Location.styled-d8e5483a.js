import{p as o,j as n,c as i,r as h}from"./index-e59c20ad.js";const g=o.div`
  display: flex;
  flex-direction: ${t=>t.direction||"row"};
  align-items: ${t=>t.align||"stretch"};
  justify-content: ${t=>t.justify||"stretch"};
  gap: ${t=>t.gap||"0"};
  margin: ${({margin:t})=>t||"0"};
`,B=t=>n.jsx(g,{...t}),u=o.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  margin-top: 40px;
  /* color: var(--main); */
  color: ${t=>t.color};
`,I=t=>n.jsx(u,{...t}),b=o.button`
  border: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;

  margin: ${({margin:t})=>t||"20px 0px 0px 0px"};
  color: ${t=>t.color||"white"};
  background: ${t=>t.background||"#E44848"};

  background-color: ${({theme:t})=>t.animation.cubicBezier};
  box-shadow: ${({theme:t})=>t.shadows.small};

  &:hover {
    background: #d84343;
    outline: none;
    box-shadow: ${({theme:t})=>t.shadows.small};
  }

  align-self: ${t=>t.align||"stretch"};

  ${t=>t.loadmore&&i`
      border: 1px solid rgba(71, 84, 103, 0.2);
      padding: 16px 32px;
      background-color: ${({theme:e})=>e.colors.inputs};
      color: #101828;

      &:hover {
        border: 1px solid var(--button);
        background: #f2f4f7;
        outline: none;
        transition: border ${({theme:e})=>e.animation.cubicBezier};
      }
    `}

  &.load {
    border: 1px solid rgba(71, 84, 103, 0.2);
    padding: 16px 32px;
    width: 145px;
    background-color: ${({theme:t})=>t.colors.inputs};
    color: #101828;

    &:hover {
      border: 1px solid var(--button);
      background: #f2f4f7;
      outline: none;
    }
  }

  ${t=>t.next&&i`
      padding: 0;
      margin: 0;
      width: 24px;
      height: 24px;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        background-color: transparent;
        outline: none;
        box-shadow: none;
      }
    `}
`,F=t=>n.jsx(b,{...t}),m="/era/assets/sprite-e5ae8524.svg",v=o.svg`
  width: ${t=>t.size||"20px"};
  height: ${t=>t.size||"20px"};
  stroke-width: 1.5px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,w=t=>{const{icon:e}=t;return n.jsx(v,{...t,children:n.jsx("use",{href:`${m}#icon-${e}`})})},y=o.div`
  display: flex;
  flex-direction: column;

  ${t=>t.radio&&i`
      flex-direction: row;
      align-items: center;
      align-content: center;
    `}
`,$=o.label`
  padding-bottom: 18px;

  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.active?"#101828":"rgba(16, 24, 40, 0.6)"};

  ${t=>t.radio&&i`
      padding-bottom: 0px;
    `}
`,k=o.input`
  border-radius: 10px;
  padding: 18px 18px 18px 18px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  width: 300px;
  background: var(--inputs);
`,j=o.div`
  position: absolute;
  right: 16px;
  top: 16px;
`,S=t=>{const[e,r]=h.useState(null),s=f=>{r(f)},l=()=>{r(null)},{type:p,label:d,inputId:a,icon:c,onClick:x}=t;return n.jsxs(y,{...t,children:[n.jsx($,{active:e===a,children:d}),n.jsx(k,{...t,onFocus:()=>s(a),onBlur:l,type:p,required:!0,onClick:x}),n.jsx(j,{children:n.jsx(w,{icon:c})})]})};o.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 325px;
  height: 273px;
  background: #fff;
  position: absolute;
  z-index: 10;
  bottom: -40px;
  right: 55px;
`;o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;o.div`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  /* color: var(--main); */
  white-space: nowrap;
`;o.div`
  display: flex;
  justify-content: center;
  width: 90px;
  /* background-color: blue; */
`;o.svg`
  width: 14px;
  height: 14px;
  fill: #407bff;
  transition: fill 500ms ease-in-out;
  cursor: pointer;

  &:hover {
    fill: var(--secondary-color-5);
  }
`;o.div`
  margin: 0;
  padding: 0;
  border: none;
  /* background-color: black; */
  width: 14px;
  height: 14px;
`;o.button`
  /* width: 50px; */
  background-color: transparent;
  border: none;
`;o.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  text-align: center;
  /* color: var(--text); */
  text-transform: uppercase;
`;o.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
`;o.div`
  width: 41px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    font-weight: 600;
    font-size: 16px;
  }
`;o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`;o.input`
  margin-top: 8px;
  border-radius: 10px;
  padding: 18px 18px 18px 68px;
  width: 280px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  @media only screen and (min-width: 768px) {
    width: 360px;
  }
`;o.svg`
  position: absolute;
  left: 18px;
  top: 18px;
  width: ${t=>t.size||"32px"};
  height: ${t=>t.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`;o.div`
  position: relative;
`;export{F as B,B as F,w as I,I as T,S as a};
