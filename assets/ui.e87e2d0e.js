import{_ as I,a as M}from"./BottomOtherPagesSection.7b1fe759.js";import{_ as W}from"./TitleSubBar.9cabdaf2.js";import{b as A,e as j,a as F,d as P}from"./index.68fbd7ff.js";import{_ as E,a as J}from"./Notification.9fae741f.js";import{_ as L}from"./CheckRadioPicker.8260f4ad.js";import{_ as q,a as H}from"./Divider.ca23b955.js";import{_ as R}from"./HeroBar.4af4598d.js";import{_ as z}from"./TitleBar.b2de3592.js";import{r as f,k as v,e as G,i as K,g as e,w as o,q as n,m as l,F as Q,v as c}from"./vendor.c4b4c3b3.js";var S={};const X=n("p",null,"This is sample modal",-1),Y=n("p",null,"This is sample modal",-1),Z=n("p",null,"This is sample modal",-1),ll=c("UI Components"),el=c(" Dark mode "),ol=n("div",{class:"py-24 text-center text-on-main-muted lg:py-12"},[n("div",{class:"flex items-center justify-center"},[n("button",{class:"button button-sm"}," Button2 ")]),n("div",{class:"flex items-center justify-center mt-6"},[n("input",{type:"checkbox",class:"checkbox"})])],-1),tl=c(" Modal examples "),nl={class:"space-y-12"},il=n("div",{class:"space-y-3"},[n("p",null,"Click to see in action")],-1),sl=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"},"Unhandled exception"),n("p",null,"Click to see in action")],-1),al=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"},"Success"),n("p",null,"Click to see in action")],-1),dl=n("h1",{class:"text-2xl text-on-main-muted"},"Notifications",-1),ul={class:"flex items-center justify-center mt-6"},cl=n("b",null,"Info state",-1),ml=c(". Notification "),rl=n("b",null,"Success state",-1),_l=c(". Notification "),bl=n("b",null,"Warning state",-1),fl=c(". Notification "),pl=n("b",null,"Danger state",-1),hl=c(". Notification "),gl=n("b",null,"White",-1),wl=c(". Notification "),vl=n("b",null,"Light",-1),xl=c(". Notification "),Bl=c("Buttons"),kl={class:"button-group"},yl=c("Cards"),Cl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Vl=n("div",{class:"py-24 text-center text-on-main-muted lg:py-12"}," With title ",-1),Sl=n("div",{class:"py-24 text-center text-on-main-muted lg:py-12"}," With title & icons ",-1),$l={setup(Tl){const $=f(["Admin","UI Components"]),x=f(!1),B=f(!1),k=f(!1),y=f([]),m=v(()=>y.value.indexOf("outline")>-1),p=f([]),i=v(()=>p.value.indexOf("outline")>-1),s=v(()=>p.value.indexOf("small")>-1),a=v(()=>p.value.indexOf("disabled")>-1);return(Nl,d)=>{const C=E,T=z,N=R,h=I,r=A,g=j,_=q,t=F,w=H,V=L,b=J,O=P,U=W,D=M;return G(),K(Q,null,[e(C,{modelValue:x.value,"onUpdate:modelValue":d[0]||(d[0]=u=>x.value=u),title:"Please confirm action",buttonLabel:"Confirm",hasCancel:""},{default:o(()=>[X]),_:1},8,["modelValue"]),e(C,{modelValue:B.value,"onUpdate:modelValue":d[1]||(d[1]=u=>B.value=u),largeTitle:"Unhandled exception",button:"danger",shake:""},{default:o(()=>[Y]),_:1},8,["modelValue"]),e(C,{modelValue:k.value,"onUpdate:modelValue":d[2]||(d[2]=u=>k.value=u),largeTitle:"Success",button:"success"},{default:o(()=>[Z]),_:1},8,["modelValue"]),e(T,{titleStack:$.value},null,8,["titleStack"]),e(N,null,{default:o(()=>[ll]),_:1}),e(h,{first:""},{default:o(()=>[el]),_:1}),e(g,null,{default:o(()=>[e(r,{class:"shadow-2xl md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"},{default:o(()=>[ol]),_:1})]),_:1}),e(h,null,{default:o(()=>[tl]),_:1}),e(g,null,{default:o(()=>[n("div",nl,[e(r,{title:"Confirm modal",headerIcon:"mdi:close",class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:d[3]||(d[3]=u=>x.value=!0)},{default:o(()=>[il,e(_),e(w,null,{default:o(()=>[e(t,{label:"Confirm",color:"info"}),e(t,{label:"Cancel",color:"info",outline:""})]),_:1})]),_:1}),e(r,{class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:d[4]||(d[4]=u=>B.value=!0)},{default:o(()=>[sl,e(_),e(w,null,{default:o(()=>[e(t,{label:"Done",color:"danger"})]),_:1})]),_:1}),e(r,{class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:d[5]||(d[5]=u=>k.value=!0)},{default:o(()=>[al,e(_),e(t,{label:"Done",color:"success"})]),_:1})])]),_:1}),e(h,{custom:""},{default:o(()=>[dl,n("div",ul,[e(V,{modelValue:y.value,"onUpdate:modelValue":d[6]||(d[6]=u=>y.value=u),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),e(g,null,{default:o(()=>[e(b,{color:"info",icon:"mdi:information-outline",outline:l(m)},{right:o(()=>[e(t,{icon:"mdi:open-in-new",label:"Button",color:"info",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[cl,ml]),_:1},8,["outline"]),e(b,{color:"success",icon:"mdi:check-circle-outline",outline:l(m)},{right:o(()=>[e(t,{icon:"mdi:open-in-new",label:"Button",color:"success",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[rl,_l]),_:1},8,["outline"]),e(b,{color:"warning",icon:"mdi:alert-circle-outline",outline:l(m)},{right:o(()=>[e(t,{icon:"mdi:open-in-new",label:"Button",color:"warning",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[bl,fl]),_:1},8,["outline"]),e(b,{color:"danger",icon:"mdi:alert-circle",outline:l(m)},{right:o(()=>[e(t,{class:"border border-danger-hocus",icon:"mdi:open-in-new",label:"Button",color:"danger",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[pl,hl]),_:1},8,["outline"]),e(b,{icon:"mdi:select-color",outline:l(m)},{default:o(()=>[gl,wl]),_:1},8,["outline"]),e(b,{color:"light",icon:"mdi:feather",outline:l(m)},{default:o(()=>[vl,xl]),_:1},8,["outline"])]),_:1}),e(h,null,{default:o(()=>[Bl]),_:1}),e(g,null,{default:o(()=>[e(r,null,{default:o(()=>[e(O,{label:"Settings"},{default:o(()=>[e(V,{modelValue:p.value,"onUpdate:modelValue":d[7]||(d[7]=u=>p.value=u),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),e(_),e(w,null,{default:o(()=>[e(t,{color:"white",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])]),_:1}),e(_),e(w,null,{default:o(()=>[e(t,{color:"white",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])]),_:1}),e(_),e(w,null,{default:o(()=>[e(t,{color:"white",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])]),_:1}),e(_),n("div",kl,[e(t,{color:"white",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])])]),_:1})]),_:1}),e(h,null,{default:o(()=>[yl]),_:1}),e(g,null,{default:o(()=>[n("div",Cl,[e(r,{title:"With Title",mb:""},{default:o(()=>[Vl]),_:1}),e(r,{title:"Title & Icons",icon:"mdi:monitor-cellphone",headerIcon:"mdi:close",mb:""},{default:o(()=>[Sl]),_:1})]),e(U,{icon:"mdi:alert-circle",title:"Empty variation"}),e(r,{empty:""})]),_:1}),e(D)],64)}}};typeof S=="function"&&S($l);export{$l as default};
