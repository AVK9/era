import{n as v,f as zt,p as s,d as ce,j as r,r as x,R as ee,e as je,u as le,h as Z,B as se,i as At,a as ct,k as Lt,l as qt,m as _t,t as _e,o as Ht}from"./index-d5180da4.js";const Wa=v.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Ea=v.div`
  width: 100%;
`,Vt=v.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 280px;
  /* height: 358px; */
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
  @media only screen and (min-width: 1440px) {
    width: 888px;
    flex-direction: row;
  }
`,Gt=v.div`
  border-radius: 10px;
  min-width: 230px;
  height: 250px;
  background-image: url(${e=>e.gallery});
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    min-width: 290px;
    height: 310px;
  }
`,Qt=v.div`
  width: 100%;
`,Xt=v.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Ut=v.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Kt=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`,Jt=v.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Zt=v.div``,en=v.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 16px;
`,tn=v.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,nn=v.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,He=v.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,rn=v.div`
  width: 280px;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`,an=v.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 240px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
  @media only screen and (min-width: 768px) {
    width: 650px;
  }
  @media only screen and (min-width: 1440px) {
    width: 520px;
  }
`,on=v.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`,Ve=v.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,Ge=v.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`;v.button`
  margin-top: 24px;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background: var(--button);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: #d84343;
  }
`;const sn=zt`
    0% {
transform: rotateZ(0deg)
    }
    100% {
transform: rotateZ(360deg)
    }
`,cn=s.button`
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

  margin: ${({margin:e})=>e||"20px 0px 0px 0px"};
  color: ${e=>e.color||"white"};
  background: ${e=>e.background||"#E44848"};

  background-color: ${({theme:e})=>e.animation.cubicBezier};
  box-shadow: ${({theme:e})=>e.shadows.small};

  &:hover {
    background: #d84343;
    outline: none;
    box-shadow: ${({theme:e})=>e.shadows.small};

    /* animation: ${sn} 2s infinite linear; */
  }

  align-self: ${e=>e.align||"stretch"};

  ${e=>e.loadmore&&ce`
      border: 1px solid rgba(71, 84, 103, 0.2);
      padding: 16px 32px;
      width: 145px;
      background-color: ${({theme:t})=>t.colors.inputs};
      color: #101828;

      &:hover {
        border: 1px solid var(--button);
        background: #f2f4f7;
        outline: none;
        transition: border ${({theme:t})=>t.animation.cubicBezier};
      }
    `}

  &.load {
    border: 1px solid rgba(71, 84, 103, 0.2);
    padding: 16px 32px;
    width: 145px;
    background-color: ${({theme:e})=>e.colors.inputs};
    color: #101828;

    &:hover {
      border: 1px solid var(--button);
      background: #f2f4f7;
      outline: none;
    }
  }

  ${e=>e.next&&ce`
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
`,te=e=>r.jsx(cn,{...e}),ln=v.div`
  /* width: 430px; */
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,dn=v.div`
  border-radius: 100px;
  padding: 12px 18px;
  /* width: 126px; */
  height: 44px;
  background: var(--block-features);
  mix-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,un=v.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
  text-transform: capitalize;
`,S="/era/assets/sprite-e5ae8524.svg",fn=s.svg`
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
  stroke-width: 1.5px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,X=e=>{const{icon:t}=e;return r.jsx(fn,{...e,children:r.jsx("use",{href:`${S}#icon-${t}`})})},Ee=({details:e})=>r.jsx(ln,{children:e&&Object.keys(e).map(t=>e[t]===0?"":r.jsxs(dn,{children:[r.jsx(X,{icon:t}),e[t]===1?"":e[t],r.jsx(un,{children:t})]},t))});function Ie(e){return t=>!!t.type&&t.type.tabsRole===e}const ke=Ie("Tab"),Ne=Ie("TabList"),Be=Ie("TabPanel");function hn(e){return ke(e)||Ne(e)||Be(e)}function We(e,t){return x.Children.map(e,n=>n===null?null:hn(n)?t(n):n.props&&n.props.children&&typeof n.props.children=="object"?x.cloneElement(n,{...n.props,children:We(n.props.children,t)}):n)}function lt(e,t){return x.Children.forEach(e,n=>{n!==null&&(ke(n)||Be(n)?t(n):n.props&&n.props.children&&typeof n.props.children=="object"&&(Ne(n)&&t(n),lt(n.props.children,t)))})}function dt(e){let t=0;return lt(e,n=>{ke(n)&&t++}),t}function ut(e){return e&&"getAttribute"in e}function Qe(e){return ut(e)&&e.getAttribute("data-rttab")}function V(e){return ut(e)&&e.getAttribute("aria-disabled")==="true"}let xe;function xn(e){const t=e||(typeof window<"u"?window:void 0);try{xe=!!(typeof t<"u"&&t.document&&t.document.activeElement)}catch{xe=!1}}const mn={className:"react-tabs",focus:!1},ft=e=>{let t=x.useRef([]),n=x.useRef([]);const a=x.useRef();function i(d,m){if(d<0||d>=h())return;const{onSelect:T,selectedIndex:K}=e;T(d,K,m)}function o(d){const m=h();for(let T=d+1;T<m;T++)if(!V(f(T)))return T;for(let T=0;T<d;T++)if(!V(f(T)))return T;return d}function c(d){let m=d;for(;m--;)if(!V(f(m)))return m;for(m=h();m-- >d;)if(!V(f(m)))return m;return d}function l(){const d=h();for(let m=0;m<d;m++)if(!V(f(m)))return m;return null}function u(){let d=h();for(;d--;)if(!V(f(d)))return d;return null}function h(){const{children:d}=e;return dt(d)}function f(d){return t.current[`tabs-${d}`]}function g(){let d=0;const{children:m,disabledTabClassName:T,focus:K,forceRenderTabPanel:$,selectedIndex:I,selectedTabClassName:N,selectedTabPanelClassName:Ye,environment:Re}=e;n.current=n.current||[];let Bt=n.current.length-h();const Yt=x.useId();for(;Bt++<0;)n.current.push(`${Yt}${n.current.length}`);return We(m,H=>{let De=H;if(Ne(H)){let R=0,ze=!1;xe==null&&xn(Re);const Ae=Re||(typeof window<"u"?window:void 0);xe&&Ae&&(ze=ee.Children.toArray(H.props.children).filter(ke).some((Le,Oe)=>Ae.document.activeElement===f(Oe))),De=x.cloneElement(H,{children:We(H.props.children,Le=>{const Oe=`tabs-${R}`,qe=I===R,Se={tabRef:Rt=>{t.current[Oe]=Rt},id:n.current[R],selected:qe,focus:qe&&(K||ze)};return N&&(Se.selectedClassName=N),T&&(Se.disabledClassName=T),R++,x.cloneElement(Le,Se)})})}else if(Be(H)){const R={id:n.current[d],selected:I===d};$&&(R.forceRender=$),Ye&&(R.selectedClassName=Ye),d++,De=x.cloneElement(H,R)}return De})}function C(d){const{direction:m,disableUpDownKeys:T,disableLeftRightKeys:K}=e;if(D(d.target)){let{selectedIndex:$}=e,I=!1,N=!1;(d.code==="Space"||d.keyCode===32||d.code==="Enter"||d.keyCode===13)&&(I=!0,N=!1,b(d)),!K&&(d.keyCode===37||d.code==="ArrowLeft")||!T&&(d.keyCode===38||d.code==="ArrowUp")?(m==="rtl"?$=o($):$=c($),I=!0,N=!0):!K&&(d.keyCode===39||d.code==="ArrowRight")||!T&&(d.keyCode===40||d.code==="ArrowDown")?(m==="rtl"?$=c($):$=o($),I=!0,N=!0):d.keyCode===35||d.code==="End"?($=u(),I=!0,N=!0):(d.keyCode===36||d.code==="Home")&&($=l(),I=!0,N=!0),I&&d.preventDefault(),N&&i($,d)}}function b(d){let m=d.target;do if(D(m)){if(V(m))return;const T=[].slice.call(m.parentNode.children).filter(Qe).indexOf(m);i(T,d);return}while((m=m.parentNode)!=null)}function D(d){if(!Qe(d))return!1;let m=d.parentElement;do{if(m===a.current)return!0;if(m.getAttribute("data-rttabs"))break;m=m.parentElement}while(m);return!1}const{children:P,className:F,disabledTabClassName:W,domRef:y,focus:w,forceRenderTabPanel:E,onSelect:_,selectedIndex:M,selectedTabClassName:k,selectedTabPanelClassName:O,environment:U,disableUpDownKeys:Pa,disableLeftRightKeys:$a,...Nt}={...mn,...e};return ee.createElement("div",Object.assign({},Nt,{className:je(F),onClick:b,onKeyDown:C,ref:d=>{a.current=d,y&&y(d)},"data-rttabs":!0}),g())};ft.propTypes={};const pn=0,he=1,gn={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},bn=e=>e.selectedIndex===null?he:pn,Te=e=>{const{children:t,defaultFocus:n,defaultIndex:a,focusTabOnClick:i,onSelect:o,...c}={...gn,...e},[l,u]=x.useState(n),[h]=x.useState(bn(c)),[f,g]=x.useState(h===he?a||0:null);if(x.useEffect(()=>{u(!1)},[]),h===he){const D=dt(t);x.useEffect(()=>{if(f!=null){const P=Math.max(0,D-1);g(Math.min(f,P))}},[D])}const C=(D,P,F)=>{typeof o=="function"&&o(D,P,F)===!1||(i&&u(!0),h===he&&g(D))};let b={...e,...c};return b.focus=l,b.onSelect=C,f!=null&&(b.selectedIndex=f),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,ee.createElement(ft,b,t)};Te.propTypes={};Te.tabsRole="Tabs";const yn={className:"react-tabs__tab-list"},Ce=e=>{const{children:t,className:n,...a}={...yn,...e};return ee.createElement("ul",Object.assign({},a,{className:je(n),role:"tablist"}),t)};Ce.tabsRole="TabList";Ce.propTypes={};const Me="react-tabs__tab",wn={className:Me,disabledClassName:`${Me}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${Me}--selected`},ne=e=>{let t=x.useRef();const{children:n,className:a,disabled:i,disabledClassName:o,focus:c,id:l,selected:u,selectedClassName:h,tabIndex:f,tabRef:g,...C}={...wn,...e};return x.useEffect(()=>{u&&c&&t.current.focus()},[u,c]),ee.createElement("li",Object.assign({},C,{className:je(a,{[h]:u,[o]:i}),ref:b=>{t.current=b,g&&g(b)},role:"tab",id:`tab${l}`,"aria-selected":u?"true":"false","aria-disabled":i?"true":"false","aria-controls":`panel${l}`,tabIndex:f||(u?"0":null),"data-rttab":!0}),n)};ne.propTypes={};ne.tabsRole="Tab";const Xe="react-tabs__tab-panel",vn={className:Xe,forceRender:!1,selectedClassName:`${Xe}--selected`},re=e=>{const{children:t,className:n,forceRender:a,id:i,selected:o,selectedClassName:c,...l}={...vn,...e};return ee.createElement("div",Object.assign({},l,{className:je(n,{[c]:o}),role:"tabpanel",id:`panel${i}`,"aria-labelledby":`tab${i}`}),a||o?t:null)};re.tabsRole="TabPanel";re.propTypes={};const ht=s.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`,xt=s.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #2f2f2f;

  background: #fff;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.8s ease-in-out;

  border-radius: 20px;
  padding: 40px;
  width: 982px;
  height: 720px;

  /* @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
    top: 50%;
    transform: translate(-50%, -50%);
  } */
`,mt=s.div`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  background: transparent;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    background: rgba(21, 26, 29, 0.1);
    border-radius: 50%;
    transition: background ${({theme:e})=>e.animation.cubicBezier};
    box-shadow: ${({theme:e})=>e.shadows.small};
  }
`,pt=s.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,gt=s.div`
  margin-top: 16px;
`,bt=s.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,yt=s.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 16px;
`,wt=s.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,vt=s.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,me=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,jt=s.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  background-image: url(${e=>e.gallery});
  background-size: cover;
  background-position: center;
`,kt=s.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`,Tt=s.div`
  width: 100%;
  margin-top: 24px;
`,Ct=s.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Pe=s.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,Dt=s.div`
  margin-top: 44px;
`,Ot=s.div`
  display: flex;
  gap: 40px;
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,pe=s.div`
  height: 48px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
  cursor: pointer;
  /* &:focus,
  &:active {
    border-bottom: 4px solid #e44848;
  } */
`,ge=s.div`
  display: flex;
  gap: 24px;
`,be=s.div`
  margin-top: 44px;
  width: 430px;
`,jn=s.p`
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,kn=s.div`
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,Tn=s.table`
  padding-bottom: 40px;
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
  min-width: 100%;

  & td:nth-child(2) {
    text-align: right;
  }
`,St=({data:e})=>{const{length:t,width:n,height:a,tank:i,consumption:o}=e;return r.jsx(r.Fragment,{children:r.jsxs(kn,{children:[r.jsx(jn,{children:"Vehicle details"}),r.jsx(Tn,{children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Length"}),r.jsx("td",{children:t})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Width"}),r.jsx("td",{children:n})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Height"}),r.jsx("td",{children:a})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Tank"}),r.jsx("td",{children:i})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Consumption"}),r.jsx("td",{children:o})]})]})})]})})},Cn=s.div`
  margin-top: 44px;
  /* width: 430px; */
  display: flex;
  flex-direction: column;
`,Dn=s.div`
  display: flex;
  gap: 16px;
`,On=s.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: var(--block-features);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--button);
`,Sn=s.div``,Mn=s.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
`,Pn=s.div``,$n=s.div`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Fn=s.span`
  font-size: 30px;
`,Wn="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Mt=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=Wn[n[e]&63];return t};const Pt=({reviews:e})=>e.map(t=>r.jsxs(Cn,{children:[r.jsxs(Dn,{children:[r.jsx(On,{children:t.reviewer_name.charAt(0)}),r.jsxs(Sn,{children:[r.jsx(Mn,{children:t.reviewer_name}),r.jsx(Pn,{children:[1,2,3,4,5].map(n=>r.jsx(Fn,{style:{color:n<=t.reviewer_rating?"gold":"gray"},children:"★"},n))})]})]}),r.jsx($n,{children:t.comment})]},Mt()));const En=s.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
  position: relative;
`,In=s.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Nn=s.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Bn=s.form`
  margin-top: 24px;
`,Yn=s.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Rn=s.div`
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  align-items: ${e=>e.align||"stretch"};
  justify-content: ${e=>e.justify||"stretch"};
  gap: ${e=>e.gap||"0"};
  margin: ${({margin:e})=>e||"0"};
`,zn=e=>r.jsx(Rn,{...e}),An=s.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  margin-top: 40px;
  /* color: var(--main); */
  color: ${e=>e.color};
`,Ia=e=>r.jsx(An,{...e}),Ln=s.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 80px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  ${e=>e.comment&&ce`
      height: 114px;
      padding: 18px 18px 18px 95px;
    `}
  ${e=>e.calendar&&ce`
      padding: 18px 18px 18px 120px;
    `}
`,qn=s.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 18px 18px 18px;
  height: 56px;
  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.active?"#101828":"rgba(16, 24, 40, 0.6)"};
`,_n=s.input`
  outline: none;
  border: none;
  width: 300px;
  background: var(--inputs);
  ${e=>e.calendar&&ce`
      width: 260px;
    `}
`,Hn=s.textarea`
  outline: none;
  border: none;
  width: 290px;
  height: 80px;
  background: var(--inputs);
  resize: none;
`,Vn=s.div`
  position: absolute;
  right: 16px;
  top: 16px;
`,ue=e=>{const[t,n]=x.useState(null),a=g=>{n(g)},i=()=>{n(null)},{type:o,label:c,inputId:l,icon:u,onClick:h}=e,f=o==="textarea"?Hn:_n;return r.jsxs(Ln,{...e,children:[r.jsx(qn,{active:t===l,children:c}),r.jsx(f,{...e,onFocus:()=>a(l),onBlur:i,type:o,required:!0,onClick:h}),r.jsx(Vn,{children:r.jsx(X,{icon:u})})]})},Gn=s.div`
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
`,Qn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Xn=s.div`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  /* color: var(--main); */
  white-space: nowrap;
`;s.div`
  display: flex;
  justify-content: center;
  width: 90px;
  /* background-color: blue; */
`;s.svg`
  width: 14px;
  height: 14px;
  fill: #407bff;
  transition: fill 500ms ease-in-out;
  cursor: pointer;

  &:hover {
    fill: var(--secondary-color-5);
  }
`;s.div`
  margin: 0;
  padding: 0;
  border: none;
  /* background-color: black; */
  width: 14px;
  height: 14px;
`;s.button`
  /* width: 50px; */
  background-color: transparent;
  border: none;
`;const Un=s.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  text-align: center;
  /* color: var(--text); */
  text-transform: uppercase;
`,Kn=s.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
`,Jn=s.div`
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
`;function j(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Y(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function $t(e,t){const n=j(e);if(isNaN(t))return Y(e,NaN);if(!t)return n;const a=n.getDate(),i=Y(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const o=i.getDate();return a>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),a),n)}function Zn(e){const t=j(e).getDay();return t===0||t===6}const Ft=6048e5,er=864e5;let tr={};function de(){return tr}function ae(e,t){var l,u,h,f;const n=de(),a=(t==null?void 0:t.weekStartsOn)??((u=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(h=n.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??0,i=j(e),o=i.getDay(),c=(o<a?7:0)+o-a;return i.setDate(i.getDate()-c),i.setHours(0,0,0,0),i}function ye(e){return ae(e,{weekStartsOn:1})}function Wt(e){const t=j(e),n=t.getFullYear(),a=Y(e,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const i=ye(a),o=Y(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const c=ye(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}function we(e){const t=j(e);return t.setHours(0,0,0,0),t}function Ue(e){const t=j(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function nr(e,t){const n=we(e),a=we(t),i=+n-Ue(n),o=+a-Ue(a);return Math.round((i-o)/er)}function rr(e){const t=Wt(e),n=Y(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ye(n)}function Ke(e,t){const n=we(e),a=we(t);return+n==+a}function ar(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ir(e){if(!ar(e)&&typeof e!="number")return!1;const t=j(e);return!isNaN(Number(t))}function or(e,t){const n=j(e.start),a=j(e.end);let i=+n>+a;const o=i?+n:+a,c=i?a:n;c.setHours(0,0,0,0);let l=(t==null?void 0:t.step)??1;if(!l)return[];l<0&&(l=-l,i=!i);const u=[];for(;+c<=o;)u.push(j(c)),c.setDate(c.getDate()+l),c.setHours(0,0,0,0);return i?u.reverse():u}function sr(e){const t=j(e);return t.setDate(1),t.setHours(0,0,0,0),t}function cr(e){const t=j(e),n=Y(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const lr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},dr=(e,t,n)=>{let a;const i=lr[e];return typeof i=="string"?a=i:t===1?a=i.one:a=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function $e(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const ur={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},fr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},hr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xr={date:$e({formats:ur,defaultWidth:"full"}),time:$e({formats:fr,defaultWidth:"full"}),dateTime:$e({formats:hr,defaultWidth:"full"})},mr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},pr=(e,t,n,a)=>mr[e];function ie(e){return(t,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let i;if(a==="formatting"&&e.formattingValues){const c=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):c;i=e.formattingValues[l]||e.formattingValues[c]}else{const c=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[l]||e.values[c]}const o=e.argumentCallback?e.argumentCallback(t):t;return i[o]}}const gr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},br={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},yr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},wr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},kr=(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Tr={ordinalNumber:kr,era:ie({values:gr,defaultWidth:"wide"}),quarter:ie({values:br,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ie({values:yr,defaultWidth:"wide"}),day:ie({values:wr,defaultWidth:"wide"}),dayPeriod:ie({values:vr,defaultWidth:"wide",formattingValues:jr,defaultFormattingWidth:"wide"})};function oe(e){return(t,n={})=>{const a=n.width,i=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;const c=o[0],l=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?Dr(l,g=>g.test(c)):Cr(l,g=>g.test(c));let h;h=e.valueCallback?e.valueCallback(u):u,h=n.valueCallback?n.valueCallback(h):h;const f=t.slice(c.length);return{value:h,rest:f}}}function Cr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Dr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Or(e){return(t,n={})=>{const a=t.match(e.matchPattern);if(!a)return null;const i=a[0],o=t.match(e.parsePattern);if(!o)return null;let c=e.valueCallback?e.valueCallback(o[0]):o[0];c=n.valueCallback?n.valueCallback(c):c;const l=t.slice(i.length);return{value:c,rest:l}}}const Sr=/^(\d+)(th|st|nd|rd)?/i,Mr=/\d+/i,Pr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$r={any:[/^b/i,/^(a|c)/i]},Fr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Wr={any:[/1/i,/2/i,/3/i,/4/i]},Er={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ir={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Nr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Br={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Yr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Rr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},zr={ordinalNumber:Or({matchPattern:Sr,parsePattern:Mr,valueCallback:e=>parseInt(e,10)}),era:oe({matchPatterns:Pr,defaultMatchWidth:"wide",parsePatterns:$r,defaultParseWidth:"any"}),quarter:oe({matchPatterns:Fr,defaultMatchWidth:"wide",parsePatterns:Wr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:oe({matchPatterns:Er,defaultMatchWidth:"wide",parsePatterns:Ir,defaultParseWidth:"any"}),day:oe({matchPatterns:Nr,defaultMatchWidth:"wide",parsePatterns:Br,defaultParseWidth:"any"}),dayPeriod:oe({matchPatterns:Yr,defaultMatchWidth:"any",parsePatterns:Rr,defaultParseWidth:"any"})},Ar={code:"en-US",formatDistance:dr,formatLong:xr,formatRelative:pr,localize:Tr,match:zr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Lr(e){const t=j(e);return nr(t,cr(t))+1}function qr(e){const t=j(e),n=+ye(t)-+rr(t);return Math.round(n/Ft)+1}function Et(e,t){var f,g,C,b;const n=j(e),a=n.getFullYear(),i=de(),o=(t==null?void 0:t.firstWeekContainsDate)??((g=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(C=i.locale)==null?void 0:C.options)==null?void 0:b.firstWeekContainsDate)??1,c=Y(e,0);c.setFullYear(a+1,0,o),c.setHours(0,0,0,0);const l=ae(c,t),u=Y(e,0);u.setFullYear(a,0,o),u.setHours(0,0,0,0);const h=ae(u,t);return n.getTime()>=l.getTime()?a+1:n.getTime()>=h.getTime()?a:a-1}function _r(e,t){var l,u,h,f;const n=de(),a=(t==null?void 0:t.firstWeekContainsDate)??((u=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(h=n.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??1,i=Et(e,t),o=Y(e,0);return o.setFullYear(i,0,a),o.setHours(0,0,0,0),ae(o,t)}function Hr(e,t){const n=j(e),a=+ae(n,t)-+_r(n,t);return Math.round(a/Ft)+1}function p(e,t){const n=e<0?"-":"",a=Math.abs(e).toString().padStart(t,"0");return n+a}const z={y(e,t){const n=e.getFullYear(),a=n>0?n:1-n;return p(t==="yy"?a%100:a,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):p(n+1,2)},d(e,t){return p(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return p(e.getHours()%12||12,t.length)},H(e,t){return p(e.getHours(),t.length)},m(e,t){return p(e.getMinutes(),t.length)},s(e,t){return p(e.getSeconds(),t.length)},S(e,t){const n=t.length,a=e.getMilliseconds(),i=Math.trunc(a*Math.pow(10,n-3));return p(i,t.length)}},J={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Je={G:function(e,t,n){const a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const a=e.getFullYear(),i=a>0?a:1-a;return n.ordinalNumber(i,{unit:"year"})}return z.y(e,t)},Y:function(e,t,n,a){const i=Et(e,a),o=i>0?i:1-i;if(t==="YY"){const c=o%100;return p(c,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):p(o,t.length)},R:function(e,t){const n=Wt(e);return p(n,t.length)},u:function(e,t){const n=e.getFullYear();return p(n,t.length)},Q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return p(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return p(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){const a=e.getMonth();switch(t){case"M":case"MM":return z.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){const a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return p(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){const i=Hr(e,a);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):p(i,t.length)},I:function(e,t,n){const a=qr(e);return t==="Io"?n.ordinalNumber(a,{unit:"week"}):p(a,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):z.d(e,t)},D:function(e,t,n){const a=Lr(e);return t==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):p(a,t.length)},E:function(e,t,n){const a=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){const i=e.getDay(),o=(i-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return p(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){const i=e.getDay(),o=(i-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return p(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const a=e.getDay(),i=a===0?7:a;switch(t){case"i":return String(i);case"ii":return p(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const a=e.getHours();let i;switch(a===12?i=J.noon:a===0?i=J.midnight:i=a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const a=e.getHours();let i;switch(a>=17?i=J.evening:a>=12?i=J.afternoon:a>=4?i=J.morning:i=J.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let a=e.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return z.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):z.H(e,t)},K:function(e,t,n){const a=e.getHours()%12;return t==="Ko"?n.ordinalNumber(a,{unit:"hour"}):p(a,t.length)},k:function(e,t,n){let a=e.getHours();return a===0&&(a=24),t==="ko"?n.ordinalNumber(a,{unit:"hour"}):p(a,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):z.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):z.s(e,t)},S:function(e,t){return z.S(e,t)},X:function(e,t,n){const a=e.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return et(a);case"XXXX":case"XX":return Q(a);case"XXXXX":case"XXX":default:return Q(a,":")}},x:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"x":return et(a);case"xxxx":case"xx":return Q(a);case"xxxxx":case"xxx":default:return Q(a,":")}},O:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ze(a,":");case"OOOO":default:return"GMT"+Q(a,":")}},z:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ze(a,":");case"zzzz":default:return"GMT"+Q(a,":")}},t:function(e,t,n){const a=Math.trunc(e.getTime()/1e3);return p(a,t.length)},T:function(e,t,n){const a=e.getTime();return p(a,t.length)}};function Ze(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),i=Math.trunc(a/60),o=a%60;return o===0?n+String(i):n+String(i)+t+p(o,2)}function et(e,t){return e%60===0?(e>0?"-":"+")+p(Math.abs(e)/60,2):Q(e,t)}function Q(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),i=p(Math.trunc(a/60),2),o=p(a%60,2);return n+i+t+o}const tt=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},It=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Vr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],a=n[1],i=n[2];if(!i)return tt(e,t);let o;switch(a){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",tt(a,t)).replace("{{time}}",It(i,t))},Gr={p:It,P:Vr},Qr=/^D+$/,Xr=/^Y+$/,Ur=["D","DD","YY","YYYY"];function Kr(e){return Qr.test(e)}function Jr(e){return Xr.test(e)}function Zr(e,t,n){const a=ea(e,t,n);if(console.warn(a),Ur.includes(e))throw new RangeError(a)}function ea(e,t,n){const a=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ta=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,na=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ra=/^'([^]*?)'?$/,aa=/''/g,ia=/[a-zA-Z]/;function G(e,t,n){var f,g,C,b,D,P,F,W;const a=de(),i=(n==null?void 0:n.locale)??a.locale??Ar,o=(n==null?void 0:n.firstWeekContainsDate)??((g=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((b=(C=a.locale)==null?void 0:C.options)==null?void 0:b.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((P=(D=n==null?void 0:n.locale)==null?void 0:D.options)==null?void 0:P.weekStartsOn)??a.weekStartsOn??((W=(F=a.locale)==null?void 0:F.options)==null?void 0:W.weekStartsOn)??0,l=j(e);if(!ir(l))throw new RangeError("Invalid time value");let u=t.match(na).map(y=>{const w=y[0];if(w==="p"||w==="P"){const E=Gr[w];return E(y,i.formatLong)}return y}).join("").match(ta).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const w=y[0];if(w==="'")return{isToken:!1,value:oa(y)};if(Je[w])return{isToken:!0,value:y};if(w.match(ia))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:y}});i.localize.preprocessor&&(u=i.localize.preprocessor(l,u));const h={firstWeekContainsDate:o,weekStartsOn:c,locale:i};return u.map(y=>{if(!y.isToken)return y.value;const w=y.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Jr(w)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Kr(w))&&Zr(w,t,String(e));const E=Je[w[0]];return E(l,w,i.localize,h)}).join("")}function oa(e){const t=e.match(ra);return t?t[1].replace(aa,"'"):e}function sa(e){const t=j(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function ca(e,t){const n=j(e),a=j(t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}function la(e,t){var l,u,h,f;const n=de(),a=(t==null?void 0:t.weekStartsOn)??((u=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(h=n.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??0,i=j(e),o=i.getDay(),c=(o<a?-7:0)+6-(o-a);return i.setHours(0,0,0,0),i.setDate(i.getDate()+c),i}function da(e,t){return $t(e,-t)}const ua="MM",fa="eee",nt="d",ha=({onClose:e})=>{const t=le(),[n,a]=x.useState(new Date),[i,o]=x.useState(""),[c,l]=x.useState(new Date),[u,h]=x.useState(!1),f=new Date,g=sr(c),C=sa(c),b=ae(g,{weekStartsOn:1}),D=la(C,{weekStartsOn:1}),P=or({start:b,end:D}),F=(k=>{const O=[];for(let U=0;U<=6;U++)O.push(k[U]);return O})(P),W=k=>Ke(k,f),y=k=>Ke(k,n),w=P.map(k=>({id:`${G(k,nt)}-${G(k,ua)}`,date:k})),E=k=>{const O=G(k,"d/MM/yyyy"),U=G(f,"d/MM/yyyy");O===U?(t(Z(O)),se.warn("You have chosen the current day, you need to hurry")):k>f?t(Z(O)):(se.warn("The date has already passed"),t(Z("")))},_=()=>{h(!1),setTimeout(e,250)},M=k=>{k.currentTarget===k.target&&(_(),t(Z("")))};return r.jsx(r.Fragment,{children:r.jsxs(Gn,{onClick:M,children:[r.jsxs(Qn,{children:[r.jsx(te,{next:!0,onClick:()=>l(da(c,1)),children:r.jsx(X,{color:"#101828",icon:"nextRight"})}),r.jsx(Xn,{children:G(c,"MMMM yyyy")}),r.jsx(te,{next:!0,onClick:()=>l($t(c,1)),children:r.jsx(X,{color:"#101828",icon:"nextLeft"})})]}),r.jsxs(Kn,{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",alignItems:"center",justifyContent:"center",justifyItems:"center"},children:[F.map(k=>r.jsx(Un,{children:G(k,fa)},Mt())),w.map(({id:k,date:O})=>r.jsx(Jn,{onClick:()=>{a(O),E(O),_()},style:{color:ca(O,c)?W(O)?"green":y(O)?"blue":(Zn(O),""):"gray"},children:r.jsx("span",{onClick:()=>{o({date:O})},children:G(O,nt)})},k))]})]})})},xa=s.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`,ma=s.input`
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
`,pa=s.svg`
  position: absolute;
  left: 18px;
  top: 18px;
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,ga=s.div`
  position: relative;
`,Na=()=>{const[e,t]=x.useState(""),n=le(),a=i=>{t(i.target.value),n(At(i.target.value))};return console.log(e),r.jsxs(r.Fragment,{children:[r.jsx(xa,{children:"Location"}),r.jsxs(ga,{children:[r.jsx(ma,{type:"text",name:"filter",value:e,onChange:a,placeholder:"Kyiv, Ukraine"}),r.jsx(pa,{children:r.jsx("use",{href:`${S}#icon-map`})})]})]})},ve=()=>{const[e,t]=x.useState(""),[n,a]=x.useState(""),[i,o]=x.useState(""),[c,l]=x.useState(!1),[u,h]=x.useState(!1),[f,g]=x.useState(""),[C,b]=x.useState(!1),D=()=>b(!0),P=()=>b(!1),F=/[а-яА-Яa-zA-Z]{3,}/,W=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,y=M=>{M.preventDefault(),w()},w=()=>{if(!W.test(n)){se.warn("Email must have been correct");return}if(F.test(e))console.log({name:e,email:n,startDate:f,comment:i}),E(),location.reload();else{se.warn("Name must have been 3 charge");return}},E=()=>{t(""),a(""),g(""),o(""),se.success("Congratulations! Order received. Wait for a letter in the mail with further instructions")},_=ct(M=>M.time.stateHandleDate);return r.jsxs(En,{children:[r.jsx(In,{children:"Book your campervan now"}),r.jsx(Nn,{children:"Stay connected! We are always ready to help you."}),r.jsxs(Bn,{onSubmit:y,children:[r.jsxs(Yn,{children:[r.jsx(ue,{label:"Name",placeholder:"Ivan Bereza",type:"text",name:"name",value:e,onChange:M=>{F.test(M.target.value)?l(!0):l(!1),t(M.target.value)}}),r.jsx(ue,{label:"Email",type:"email",name:"email",value:n,onChange:M=>{W.test(M.target.value)?h(!0):h(!1),a(M.target.value)},placeholder:"ivan@gmail.com"}),r.jsx(ue,{label:"Booking date",type:"text",name:"calendar",value:_,icon:"calendar",calendar:!0,onClick:D}),C&&r.jsx(ha,{onClose:P}),r.jsx(ue,{label:"Comment",type:"textarea",name:"comment",value:i,onChange:M=>o(M.target.value),comment:!0})]}),r.jsx(te,{children:"Send"})]})]})},ba=({onClose:e,data:t})=>{const[n,a]=x.useState(1),[i,o]=x.useState(!1),c=f=>{a(f)},l=le(),u=()=>{o(!1),setTimeout(e,500)},h=f=>{f.currentTarget===f.target&&(u(),l(Z("")))};return x.useEffect(()=>(o(!0),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),x.useEffect(()=>{const f=g=>{g.key==="Escape"&&(e(),l(Z("")))};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}},[l,e]),r.jsx(ht,{onClick:h,children:r.jsxs(xt,{children:[r.jsx(mt,{onClick:u,children:r.jsx(Pe,{size:"32px",children:r.jsx("use",{href:`${S}#icon-close`})})}),r.jsx(pt,{children:t.name}),r.jsxs(yt,{children:[r.jsxs(me,{children:[r.jsx(Pe,{children:r.jsx("use",{href:`${S}#icon-star`})}),r.jsxs(wt,{children:[t.rating,"(",t.reviews.length," Reviews)"]})]}),r.jsxs(me,{children:[r.jsx(Pe,{children:r.jsx("use",{href:`${S}#icon-map`})}),r.jsx(vt,{children:t.location})]})]}),r.jsx(gt,{children:r.jsxs(bt,{children:["€ ",t.price,".00"]})}),r.jsx(kt,{children:t.gallery.map(f=>r.jsx(jt,{gallery:f},f))}),r.jsx(Tt,{children:r.jsx(Ct,{children:t.description})}),r.jsx(Dt,{children:r.jsxs(Te,{children:[r.jsx(Ce,{children:r.jsxs(Ot,{children:[r.jsx(ne,{children:r.jsx(pe,{style:n===1?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},onClick:()=>c(1),children:"Features"})}),r.jsx(ne,{children:r.jsx(pe,{onClick:()=>c(2),style:n===2?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},children:"Reviews"})})]})}),r.jsx(re,{children:r.jsxs(ge,{children:[r.jsxs(be,{children:[r.jsx(Ee,{details:t.details}),r.jsx(St,{data:t})]}),r.jsx(ve,{})]})}),r.jsx(re,{children:r.jsxs(ge,{children:[r.jsx(be,{children:r.jsx(Pt,{reviews:t.reviews})}),r.jsx(ve,{})]})})]})})]})})},ya=e=>e.favorites.favorites,wa=({isOpen:e,onClose:t,children:n})=>{const[a,i]=x.useState(!1),o=()=>{i(!1),setTimeout(t,500)},c=l=>{l.currentTarget===l.target&&o()};return x.useEffect(()=>(e&&(i(!0),document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"}),[e]),x.useEffect(()=>{const l=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[t]),e?r.jsx(ht,{onClick:c,children:r.jsxs(xt,{children:[r.jsx(mt,{onClick:t,children:r.jsx(X,{size:"32px",icon:"close"})}),r.jsx("div",{className:"modal-content",children:n})]})}):null},va=({data:e})=>{const[t,n]=x.useState(1),a=i=>{n(i)};return r.jsxs(r.Fragment,{children:[r.jsx(pt,{children:e.name}),r.jsxs(yt,{children:[r.jsxs(me,{children:[r.jsx(X,{icon:"star"}),r.jsxs(wt,{children:[e.rating,"(",e.reviews.length," Reviews)"]})]}),r.jsxs(me,{children:[r.jsx(X,{icon:"map"}),r.jsx(vt,{children:e.location})]})]}),r.jsx(gt,{children:r.jsxs(bt,{children:["€ ",parseFloat(e.price).toFixed(2)]})}),r.jsx(kt,{children:e.gallery.map(i=>r.jsx(jt,{gallery:i},i))}),r.jsx(Tt,{children:r.jsx(Ct,{children:e.description})}),r.jsx(Dt,{children:r.jsxs(Te,{children:[r.jsx(Ce,{children:r.jsxs(Ot,{children:[r.jsx(ne,{children:r.jsx(pe,{style:t===1?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},onClick:()=>a(1),children:"Features"})}),r.jsx(ne,{children:r.jsx(pe,{onClick:()=>a(2),style:t===2?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},children:"Reviews"})})]})}),r.jsx(re,{children:r.jsxs(ge,{children:[r.jsxs(be,{children:[r.jsx(Ee,{details:e.details}),r.jsx(St,{data:e})]}),r.jsx(ve,{})]})}),r.jsx(re,{children:r.jsxs(ge,{children:[r.jsx(be,{children:r.jsx(Pt,{reviews:e.reviews})}),r.jsx(ve,{})]})})]})})]})},Ba=({data:e})=>{const[t,n]=x.useState(!1),a=()=>n(!0),i=()=>n(!1),[o,c]=x.useState(!1),l=le(),u=()=>{c(!0)},h=()=>{c(!1)},f=ct(ya),g=f==null?void 0:f.some(_=>_._id===e._id),C=()=>{l(g?qt(e):_t(e))},{name:b,price:D,rating:P,location:F,description:W,reviews:y,gallery:w,details:E}=e;return r.jsxs(Vt,{children:[w&&w.length>0&&r.jsx(Gt,{gallery:w[0]}),r.jsxs(Qt,{children:[r.jsxs(Xt,{children:[r.jsx(Ut,{children:b}),r.jsxs(Kt,{children:[r.jsxs(Jt,{children:["€ ",parseFloat(D).toFixed(2)]}),r.jsx(Zt,{onClick:C,children:g?r.jsx(Ge,{color:"var(--button)",size:"24px",children:r.jsx("use",{href:`${S}#icon-heart`})}):r.jsx(Ge,{size:"24px",children:r.jsx("use",{href:`${S}#icon-heart`})})})]})]}),r.jsxs(en,{children:[r.jsxs(He,{children:[r.jsx(Ve,{children:r.jsx("use",{href:`${S}#icon-star`})}),r.jsxs(tn,{children:[P,"(",y&&y.length," Reviews)"]})]}),r.jsxs(He,{children:[r.jsx(Ve,{children:r.jsx("use",{href:`${S}#icon-map`})}),r.jsx(nn,{children:F})]})]}),r.jsx(rn,{children:r.jsx(an,{children:W})}),r.jsx(on,{children:r.jsx(Ee,{details:E})}),r.jsxs(zn,{gap:"20px",children:[r.jsx(te,{onClick:u,children:"Show more"}),r.jsxs("div",{children:[r.jsx(te,{type:"button",onClick:a,children:"Modal"}),Lt.createPortal(r.jsx(wa,{isOpen:t,onClose:i,children:r.jsx(va,{data:e})}),document.getElementById("modal-root"))]})]})]}),o&&r.jsx(ba,{onClose:h,data:e})]})},ja=s.div`
  margin-top: 32px;
  gap: 32px;
  border: none;
  display: flex;
  flex-direction: column;
`,ka=s.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,rt=s.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,at=s.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`,Ta=s.div`
  display: flex;
  gap: 10px;
`;s.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  /* width: 100px; */
  /* height: 95px; */
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }
`;s.input``;s.div`
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  width: 113px;
  height: 95px;
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }
`;const Fe=s.svg`
  width: ${e=>e.size||"60px"};
  height: ${e=>e.size||"48px"};
  stroke-width: 0.9px;
`,A=s.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
`,it=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,fe=s.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,Ca=s.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  fill: ${e=>e.color||"#000000"};
`;s.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background: var(--button);

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: #d84343;
  }
`;const L=s.label`
  position: relative;
`,B=s.input`
  display: none;
`,q=s.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  width: 100px;
  height: 95px;
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }

  ${B}:checked + & {
    border: 1px solid var(--button);
  }
`,ot=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 22px;
`,Da=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 4px;
`,Oa=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 8px;
`,st=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 32px;
`,Sa=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 22px;
`,Ma=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 15px;
`,Ya=()=>{const e=le(),[t,n]=x.useState(""),[a,i]=x.useState([]),o=u=>{n(u.target.value),e(_e(u.target.value))},c=u=>{console.log("e.target.value",u.target.value),i(h=>[...h,u.target.value]),e(Ht(u.target.value)),console.log("equipment useState",a)},l=u=>{u.preventDefault(),n(""),i(""),e(_e(""))};return r.jsx("form",{children:r.jsxs(ja,{children:[r.jsx(ka,{children:"Filters"}),r.jsx(rt,{children:"Vehicle equipment"}),r.jsx(at,{}),r.jsxs(it,{children:[r.jsxs(L,{children:[r.jsxs(st,{children:[r.jsx(Ca,{children:r.jsx("use",{href:`${S}#icon-AC`})}),r.jsx(A,{children:"AC"})]}),r.jsx(B,{type:"checkbox",id:"airConditioner",name:"options",value:"airConditioner",checked:a.includes("airConditioner"),onChange:c}),r.jsx(q,{})]}),r.jsxs(L,{children:[r.jsxs(Ma,{children:[r.jsx(fe,{children:r.jsx("use",{href:`${S}#icon-automatic`})}),r.jsx(A,{children:"Automatic"})]}),r.jsx(B,{type:"checkbox",id:"automatic",name:"options",value:"automatic",checked:a.includes("automatic"),onChange:c}),r.jsx(q,{})]}),r.jsxs(L,{children:[r.jsxs(Sa,{children:[r.jsx(fe,{children:r.jsx("use",{href:`${S}#icon-kitchen`})}),r.jsx(A,{children:"Kitchen"})]}),r.jsx(B,{type:"checkbox",id:"kitchen",name:"options",value:"kitchen",checked:a.includes("kitchen"),onChange:c}),r.jsx(q,{})]}),r.jsxs(L,{children:[r.jsxs(st,{children:[r.jsx(fe,{children:r.jsx("use",{href:`${S}#icon-TV`})}),r.jsx(A,{children:"TV"})]}),r.jsx(B,{type:"checkbox",id:"TV",name:"options",value:"TV",checked:a.includes("TV"),onChange:c}),r.jsx(q,{})]}),r.jsxs(L,{children:[r.jsxs(Oa,{children:[r.jsx(fe,{children:r.jsx("use",{href:`${S}#icon-shower`})}),r.jsx(A,{children:"Shower/WC"})]}),r.jsx(B,{type:"radio",id:"shower",name:"options",value:"shower",checked:a.includes("shower"),onChange:c}),r.jsx(q,{})]})]}),r.jsx(rt,{children:"Vehicle type"}),r.jsx(at,{}),r.jsx(Ta,{children:r.jsxs(it,{children:[r.jsxs(L,{children:[r.jsxs(ot,{children:[r.jsx(Fe,{children:r.jsx("use",{href:`${S}#icon-van`})}),r.jsx(A,{children:"Van"})]}),r.jsx(B,{type:"radio",id:"panelTruck",name:"options",value:"panelTruck",checked:t==="panelTruck",onChange:o}),r.jsx(q,{})]}),r.jsxs(L,{children:[r.jsxs(Da,{children:[r.jsx(Fe,{children:r.jsx("use",{href:`${S}#icon-fully-integrated`})}),r.jsx(A,{children:"Fully Integrated"})]}),r.jsx(B,{type:"radio",id:"fullyIntegrated",name:"options",value:"fullyIntegrated",checked:t==="fullyIntegrated",onChange:o}),r.jsx(q,{})]}),r.jsxs(L,{children:[r.jsxs(ot,{children:[r.jsx(Fe,{children:r.jsx("use",{href:`${S}#icon-alcove`})}),r.jsx(A,{children:"Alcove"})]}),r.jsx(B,{type:"radio",id:"alcove",name:"options",value:"alcove",checked:t==="alcove",onChange:o}),r.jsx(q,{})]})]})}),r.jsx(te,{type:"reset",margin:"0",onClick:l,children:"Reset"})]})})};export{Ba as A,te as B,Wa as C,zn as F,Na as L,Ia as T,Ea as a,Ya as b,ya as s};
