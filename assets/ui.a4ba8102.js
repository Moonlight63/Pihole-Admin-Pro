import{i as l,j as e,o,e as a,a as i,w as n,q as t,u as s,F as u,s as d}from"./vendor.b321879e.js";import{_ as c,a as m}from"./BottomOtherPagesSection.a51f6d4b.js";import{_ as r}from"./TitleSubBar.4199b064.js";import{a as b,_ as f}from"./Field.0c8c18e6.js";import{_ as p}from"./Notification.0a4ae863.js";import{u as g,j as w,b as h,d as x,f as _,a as v,c as y}from"./index.e4c20c68.js";import{_ as B}from"./HeroBar.a187b2bf.js";import{_ as k}from"./TitleBar.5a93ca39.js";var C={};const V=t("p",null,"This is sample modal",-1),j=t("p",null,"This is sample modal",-1),T=t("p",null,"This is sample modal",-1),S=d("UI Components"),U=d(" Dark mode "),N={class:"py-24 text-center text-gray-500 lg:py-12 dark:text-gray-400"},O=d(" Modal examples "),D={class:"space-y-12"},I=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),W=t("div",{class:"space-y-3"},[t("h1",{class:"text-2xl"},"Unhandled exception"),t("p",null,"Click to see in action")],-1),F=t("div",{class:"space-y-3"},[t("h1",{class:"text-2xl"},"Success"),t("p",null,"Click to see in action")],-1),L=t("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},"Notifications",-1),M={class:"flex items-center justify-center mt-6"},P=t("b",null,"Info state",-1),q=d(". Notification "),A=t("b",null,"Success state",-1),E=d(". Notification "),H=t("b",null,"Warning state",-1),z=d(". Notification "),G=t("b",null,"Danger state",-1),J=d(". Notification "),K=t("b",null,"White",-1),Q=d(". Notification "),R=t("b",null,"Light",-1),X=d(". Notification "),Y=d("Buttons"),Z=d("Cards"),$={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},ll=t("div",{class:"py-24 text-center text-gray-500 lg:py-12 dark:text-gray-400"}," With title ",-1),el=t("div",{class:"py-24 text-center text-gray-500 lg:py-12 dark:text-gray-400"}," With title & icons ",-1),ol={setup(d){const C=l(["Admin","UI Components"]),ol=l(!1),al=l(!1),il=l(!1),nl=l([]),tl=e((()=>nl.value.indexOf("outline")>-1)),sl=l([]),ul=e((()=>sl.value.indexOf("outline")>-1)),dl=e((()=>sl.value.indexOf("small")>-1)),cl=e((()=>sl.value.indexOf("disabled")>-1));return(l,e)=>{const d=w,ml=k,rl=B,bl=c,fl=h,pl=x,gl=_,wl=v,hl=y,xl=b,_l=p,vl=f,yl=r,Bl=m;return o(),a(u,null,[i(d,{modelValue:ol.value,"onUpdate:modelValue":e[0]||(e[0]=l=>ol.value=l),title:"Please confirm action",buttonLabel:"Confirm",hasCancel:""},{default:n((()=>[V])),_:1},8,["modelValue"]),i(d,{modelValue:al.value,"onUpdate:modelValue":e[1]||(e[1]=l=>al.value=l),largeTitle:"Unhandled exception",button:"danger",shake:""},{default:n((()=>[j])),_:1},8,["modelValue"]),i(d,{modelValue:il.value,"onUpdate:modelValue":e[2]||(e[2]=l=>il.value=l),largeTitle:"Success",button:"success"},{default:n((()=>[T])),_:1},8,["modelValue"]),i(ml,{titleStack:C.value},null,8,["titleStack"]),i(rl,null,{default:n((()=>[S])),_:1}),i(bl,{first:""},{default:n((()=>[U])),_:1}),i(gl,null,{default:n((()=>[i(pl,{class:"shadow-2xl md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"},{default:n((()=>[t("div",N,[i(fl,{label:"Toggle",outline:"",onClick:e[3]||(e[3]=l=>s(g)().toggleDarkMode())})])])),_:1})])),_:1}),i(bl,null,{default:n((()=>[O])),_:1}),i(gl,null,{default:n((()=>[t("div",D,[i(pl,{title:"Confirm modal",headerIcon:"mdi:close",class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:e[4]||(e[4]=l=>ol.value=!0)},{default:n((()=>[I,i(wl),i(hl,null,{default:n((()=>[i(fl,{label:"Confirm",color:"info"}),i(fl,{label:"Cancel",color:"info",outline:""})])),_:1})])),_:1}),i(pl,{class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:e[5]||(e[5]=l=>al.value=!0)},{default:n((()=>[W,i(wl),i(hl,null,{default:n((()=>[i(fl,{label:"Done",color:"danger"})])),_:1})])),_:1}),i(pl,{class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:e[6]||(e[6]=l=>il.value=!0)},{default:n((()=>[F,i(wl),i(fl,{label:"Done",color:"success"})])),_:1})])])),_:1}),i(bl,{custom:""},{default:n((()=>[L,t("div",M,[i(xl,{modelValue:nl.value,"onUpdate:modelValue":e[7]||(e[7]=l=>nl.value=l),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])])),_:1}),i(gl,null,{default:n((()=>[i(_l,{color:"info",icon:"mdi:information-outline",outline:s(tl)},{right:n((()=>[i(fl,{icon:"mdi:open-in-new",label:"Button",color:"info",outline:s(tl),small:""},null,8,["outline"])])),default:n((()=>[P,q])),_:1},8,["outline"]),i(_l,{color:"success",icon:"mdi:check-circle-outline",outline:s(tl)},{right:n((()=>[i(fl,{icon:"mdi:open-in-new",label:"Button",color:"success",outline:s(tl),small:""},null,8,["outline"])])),default:n((()=>[A,E])),_:1},8,["outline"]),i(_l,{color:"warning",icon:"mdi:alert-circle-outline",outline:s(tl)},{right:n((()=>[i(fl,{icon:"mdi:open-in-new",label:"Button",color:"warning",outline:s(tl),small:""},null,8,["outline"])])),default:n((()=>[H,z])),_:1},8,["outline"]),i(_l,{color:"danger",icon:"mdi:alert-circle",outline:s(tl)},{right:n((()=>[i(fl,{icon:"mdi:open-in-new",label:"Button",color:"danger",outline:s(tl),small:""},null,8,["outline"])])),default:n((()=>[G,J])),_:1},8,["outline"]),i(_l,{color:"white",icon:"mdi:select-color",outline:s(tl)},{default:n((()=>[K,Q])),_:1},8,["outline"]),i(_l,{color:"light",icon:"mdi:feather",outline:s(tl)},{default:n((()=>[R,X])),_:1},8,["outline"])])),_:1}),i(bl,null,{default:n((()=>[Y])),_:1}),i(gl,null,{default:n((()=>[i(pl,null,{default:n((()=>[i(vl,{label:"Settings"},{default:n((()=>[i(xl,{modelValue:sl.value,"onUpdate:modelValue":e[8]||(e[8]=l=>sl.value=l),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])])),_:1}),i(wl),i(hl,null,{default:n((()=>[i(fl,{color:"white",label:"Button",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"light",label:"Button",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"info",label:"Button",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"success",label:"Button",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"warning",label:"Button",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"danger",label:"Button",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"])])),_:1}),i(wl),i(hl,null,{default:n((()=>[i(fl,{color:"white",label:"Button",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"light",label:"Button",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"info",label:"Button",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"success",label:"Button",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"warning",label:"Button",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"danger",label:"Button",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"])])),_:1}),i(wl),i(hl,null,{default:n((()=>[i(fl,{color:"white",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"light",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"info",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"success",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"warning",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"]),i(fl,{color:"danger",icon:"mdi:open-in-new",small:s(dl),outline:s(ul),disabled:s(cl)},null,8,["small","outline","disabled"])])),_:1})])),_:1})])),_:1}),i(bl,null,{default:n((()=>[Z])),_:1}),i(gl,null,{default:n((()=>[t("div",$,[i(pl,{title:"With Title",mb:""},{default:n((()=>[ll])),_:1}),i(pl,{title:"Title & Icons",icon:"mdi:monitor-cellphone",headerIcon:"mdi:close",mb:""},{default:n((()=>[el])),_:1})]),i(yl,{icon:"mdi:alert-circle",title:"Empty variation"}),i(pl,{empty:""})])),_:1}),i(Bl)],64)}}};"function"==typeof C&&C(ol);export{ol as default};
