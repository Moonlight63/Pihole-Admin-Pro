import{k as _,C as h,M as w,m as u,e as a,f as d,w as i,g as s,q as p,i as C,x as B,t as m,j as x,r as V,A as D,n as N}from"./vendor.c4b4c3b3.js";import{a as k,b as I,j as J,f as L,g as O}from"./index.68fbd7ff.js";import{_ as T,a as j}from"./Divider.ca23b955.js";const z={class:"space-y-3"},q={key:0,class:"text-2xl"},U={props:{title:{type:String,default:null},largeTitle:{type:String,default:null},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Done"},hasCancel:Boolean,modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:n}){const f=e,o=_({get:()=>f.modelValue,set:t=>n("update:modelValue",t)}),c=t=>{o.value=!1,n(t)},b=()=>c("confirm"),r=()=>c("cancel");return(t,v)=>{const g=T,l=k,y=j,S=I,$=J;return h((a(),d($,{onOverlayClick:r},{default:i(()=>[h(s(S,{title:e.title,class:"z-50 w-full shadow-lg max-h-modal md:w-3/5 lg:w-2/5",modal:"",headerIcon:"mdi:close",onHeaderIconClick:r},{default:i(()=>[p("div",z,[e.largeTitle?(a(),C("h1",q,B(e.largeTitle),1)):m("",!0),x(t.$slots,"default")]),s(g),s(y,null,{default:i(()=>[s(l,{label:e.buttonLabel,color:e.button,onClick:b},null,8,["label","color"]),e.hasCancel?(a(),d(l,{key:0,label:"Cancel",color:e.button,outline:"",onClick:r},null,8,["color"])):m("",!0)]),_:1})]),_:3},8,["title"]),[[w,u(o)]])]),_:3},512)),[[w,u(o)]])}}},A={class:"flex flex-col items-center md:flex-row"},E={class:"text-center md:text-left"},F={props:{icon:{type:String,default:null},outline:Boolean,color:{type:String,default:"neutral"}},setup(e){const n=e,f=_(()=>{if(n.outline)switch(n.color){case"primary":return"border-primary";case"secondary":return"border-secondary";case"accent":return"border-accent";case"info":return"border-info";case"success":return"border-success";case"warning":return"border-warning";case"danger":return"border-danger";case"neutral":return"border-neutral"}else switch(n.color){case"primary":return"border-primary bg-primary text-on-primary";case"secondary":return"border-secondary bg-secondary text-on-secondary";case"accent":return"border-accent bg-accent text-on-accent";case"info":return"border-info bg-info text-on-info";case"success":return"border-success bg-success text-on-success";case"warning":return"border-warning bg-warning text-on-warning";case"danger":return"border-danger bg-danger text-on-danger";case"neutral":return"border-neutral bg-neutral text-on-neutral"}}),o=V(!1),c=()=>{o.value=!0},b=D(),r=_(()=>b.right);return(t,v)=>{const g=L,l=k,y=O;return o.value?m("",!0):(a(),C("div",{key:0,class:N([u(f),"px-3 py-6 mx-6 mb-6 transition-colors duration-150 border rounded-card md:py-3 md:mx-0 last:mb-0"])},[s(y,null,{default:i(()=>[p("div",A,[e.icon?(a(),d(g,{key:0,icon:e.icon,class:"text-2xl md:mr-2"},null,8,["icon"])):m("",!0),p("span",E,[x(t.$slots,"default")])]),u(r)?x(t.$slots,"right",{key:0}):(a(),d(l,{key:1,icon:"mdi:close",outline:e.outline||["white","light"].indexOf(e.color)<0,small:"",onClick:c},null,8,["outline"]))]),_:3})],2))}}};export{U as _,F as a};
