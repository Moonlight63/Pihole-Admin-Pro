import{i as e,j as l,b as a,c as t,k as n,h as s,l as o,d as i,f as u,m as r,n as d}from"./index.fa0fe0dc.js";import{_ as c,a as m}from"./ClientsTable.0e5f6d11.js";import{j as p,i as b,o as f,e as v,a as h,w as g,F as y,A as k,t as C,p as _,q as x,c as j,u as T,s as w,l as M,C as P,k as V}from"./vendor.2e7590e3.js";import{_ as S}from"./Notification.f92b64f8.js";import{_ as A}from"./TitleSubBar.5112d522.js";import{_ as R}from"./HeroBar.a0e8f812.js";import{_ as B}from"./TitleBar.6e703743.js";const D=x("p",null,[w("Lorem ipsum dolor sit amet "),x("b",null,"adipiscing elit")],-1),U=x("p",null,"This is sample modal",-1),E=x("p",null,[w("Lorem ipsum dolor sit amet "),x("b",null,"adipiscing elit")],-1),I=x("p",null,"This is sample modal",-1),N={key:0,class:"p-3 bg-gray-50 dark:bg-gray-800"},O={key:0},W=x("th",null,null,-1),q=x("th",null,"Name",-1),F=x("th",null,"Username",-1),H=x("th",null,"E-Mail",-1),L=x("th",null,"Phone",-1),$=x("th",null,"Website",-1),z=x("th",null,null,-1),G={class:"image-cell"},J={"data-label":"Name"},K={"data-label":"Username"},Q={"data-label":"E-Mail"},X={"data-label":"Phone"},Y={"data-label":"Website"},Z=["title"],ee={class:"actions-cell"},le={class:"table-pagination"},ae={props:{checkable:Boolean},setup(o){const i=p((()=>e().myusers)),u=b(!1),r=b(!1),d=b(10),m=b(0),w=b([]),M=p((()=>i.value.slice(d.value*m.value,d.value*(m.value+1)))),P=p((()=>Math.ceil(i.value.length/d.value))),V=p((()=>m.value+1)),S=p((()=>{const e=[];for(let l=0;l<P.value;l++)e.push(l);return e}));return(e,i)=>{const d=l,p=a,b=t,A=c,R=n,B=s;return f(),v(y,null,[h(d,{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=e=>u.value=e),title:"Sample modal"},{default:g((()=>[D,U])),_:1},8,["modelValue"]),h(d,{modelValue:r.value,"onUpdate:modelValue":i[1]||(i[1]=e=>r.value=e),largeTitle:"Please confirm",button:"danger",hasCancel:""},{default:g((()=>[E,I])),_:1},8,["modelValue"]),w.value.length?(f(),v("div",N,[(f(!0),v(y,null,k(w.value,(e=>(f(),v("span",{key:e.id,class:"inline-block px-2 py-1 mr-2 text-sm bg-gray-100 rounded-sm dark:bg-gray-700"},C(e.name),1)))),128))])):_("",!0),h(b,null,{default:g((()=>[h(p,{label:"Do Stuff",onClick:i[2]||(i[2]=e=>{console.log(store.state.myusers)})})])),_:1}),x("table",null,[x("thead",null,[x("tr",null,[o.checkable?(f(),v("th",O)):_("",!0),W,q,F,H,L,$,z])]),x("tbody",null,[(f(!0),v(y,null,k(T(M),(e=>(f(),v("tr",{key:e.id},[o.checkable?(f(),j(A,{key:0,onChecked:l=>((e,l)=>{e?w.value.push(l):w.value=((e,l)=>{const a=[];return e.forEach((e=>{l(e)||a.push(e)})),a})(w.value,(e=>e.id===l.id))})(l,e)},null,8,["onChecked"])):_("",!0),x("td",G,[h(R,{username:e.name,class:"image"},null,8,["username"])]),x("td",J,C(e.name),1),x("td",K,C(e.username),1),x("td",Q,C(e.email),1),x("td",X,C(e.phone),1),x("td",Y,[x("small",{class:"text-gray-500 dark:text-gray-400",title:e.website},C(e.website),9,Z)]),x("td",ee,[h(b,{type:"justify-start lg:justify-end",noWrap:""},{default:g((()=>[h(p,{color:"success",icon:"mdi:eye",small:"",onClick:i[3]||(i[3]=e=>u.value=!0)}),h(p,{color:"danger",icon:"mdi:trash-can",small:"",onClick:i[4]||(i[4]=e=>r.value=!0)})])),_:1})])])))),128))])]),x("div",le,[h(B,null,{default:g((()=>[h(b,null,{default:g((()=>[(f(!0),v(y,null,k(T(S),(e=>(f(),j(p,{key:e,active:e===m.value,label:e+1,small:"",onClick:l=>m.value=e},null,8,["active","label","onClick"])))),128))])),_:1}),x("small",null,"Page "+C(T(V))+" of "+C(T(P)),1)])),_:1})])],64)}}},te={props:{data:{type:Object,required:!0}},setup(e){const l=e,a=b(null);let t;M((()=>{t=new P(a.value,{type:"line",data:l.data,options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!0},x:{display:!0}},plugins:{legend:{display:!1}}}})}));const n=p((()=>l.data));return V(n,(e=>{t&&(t.data=e,t.update())})),(e,l)=>(f(),v("canvas",{ref_key:"root",ref:a},null,512))}};var ne={};const se=w("Dashboard"),oe={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"},ie={class:"grid grid-cols-1 gap-6 mb-6 xl:grid-cols-2"},ue={class:"flex flex-col justify-between"},re={class:"flex flex-col justify-between"},de={key:0},ce=x("b",null,"Responsive table.",-1),me=w(" Collapses on mobile "),pe={setup(l){const a=b(["Admin","Dashboard"]),t=b(null),n=()=>{t.value=chartConfig.sampleChartData()};M((()=>{n()}));const s=e(),c=p((()=>s.clients.slice(0,3))),C=p((()=>s.history.slice(0,3)));return(e,l)=>{const s=B,p=R,b=o,w=r,M=d,P=A,V=te,D=i,U=S,E=ae,I=m,N=u;return f(),v(y,null,[h(s,{titleStack:a.value},null,8,["titleStack"]),h(p,null,{default:g((()=>[se])),_:1}),h(N,null,{default:g((()=>[x("div",oe,[h(b,{trend:"12%",trendType:"up",color:"text-emerald-500",icon:e.mdiAccountMultiple,number:512,label:"Clients"},null,8,["icon"]),h(b,{trend:"12%",trendType:"down",color:"text-blue-500",icon:e.mdiCartOutline,number:7770,prefix:"$",label:"Sales"},null,8,["icon"]),h(b,{trend:"Overflow",trendType:"alert",color:"text-red-500",icon:e.mdiChartTimelineVariant,number:256,suffix:"%",label:"Performance"},null,8,["icon"])]),x("div",ie,[x("div",ue,[(f(!0),v(y,null,k(T(C),((e,l)=>(f(),j(w,{key:l,amount:e.amount,date:e.date,business:e.business,type:e.type,name:e.name,account:e.account},null,8,["amount","date","business","type","name","account"])))),128))]),x("div",re,[(f(!0),v(y,null,k(T(c),(e=>(f(),j(M,{key:e.id,name:e.name,login:e.login,date:e.created,progress:e.progress},null,8,["name","login","date","progress"])))),128))])]),h(P,{icon:e.mdiChartPie,title:"Trends overview"},null,8,["icon"]),h(D,{title:"Performance",icon:e.mdiFinance,headerIcon:e.mdiReload,class:"mb-6",onHeaderIconClick:n},{default:g((()=>[t.value?(f(),v("div",de,[h(V,{data:t.value,class:"h-96"},null,8,["data"])])):_("",!0)])),_:1},8,["icon","headerIcon"]),h(P,{icon:e.mdiAccountMultiple,title:"Clients"},null,8,["icon"]),h(U,{color:"info",icon:e.mdiMonitorCellphone},{default:g((()=>[ce,me])),_:1},8,["icon"]),h(D,{icon:e.mdiMonitorCellphone,title:"Responsive table",hasTable:""},{default:g((()=>[h(E)])),_:1},8,["icon"]),h(D,{icon:e.mdiMonitorCellphone,title:"Responsive table",hasTable:""},{default:g((()=>[h(I)])),_:1},8,["icon"])])),_:1})],64)}}};"function"==typeof ne&&ne(pe);export{pe as default};
