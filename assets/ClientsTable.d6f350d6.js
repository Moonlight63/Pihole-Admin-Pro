import{i as l,j as e,k as a,b as s,c as t,h as u}from"./index.b8dc0300.js";import{i as n,k as c,o,c as d,w as r,q as i,x as m,R as p,b as h,j as v,e as g,a as b,F as y,A as k,t as f,p as C,u as x,s as V}from"./vendor.2e7590e3.js";const _={class:"checkbox"},j=i("span",{class:"check"},null,-1),P={props:{type:{type:String,default:"td"}},emits:["checked"],setup(l,{emit:e}){const a=n(!1);return c(a,(l=>{e("checked",l)})),(e,s)=>(o(),d(h(l.type),{class:"checkbox-cell"},{default:r((()=>[i("label",_,[m(i("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),type:"checkbox"},null,512),[[p,a.value]]),j])])),_:1}))}},T=i("p",null,[V("Lorem ipsum dolor sit amet "),i("b",null,"adipiscing elit")],-1),U=i("p",null,"This is sample modal",-1),L=i("p",null,[V("Lorem ipsum dolor sit amet "),i("b",null,"adipiscing elit")],-1),N=i("p",null,"This is sample modal",-1),S={key:0,class:"p-3 bg-gray-50 dark:bg-gray-800"},q={key:0},w=i("th",null,null,-1),A=i("th",null,"Name",-1),B=i("th",null,"Company",-1),E=i("th",null,"City",-1),F=i("th",null,"Progress",-1),M=i("th",null,"Created",-1),R=i("th",null,null,-1),W={class:"image-cell"},z={"data-label":"Name"},D={"data-label":"Company"},G={"data-label":"City"},H={"data-label":"Progress",class:"progress-cell"},I=["value"],J={"data-label":"Created"},K=["title"],O={class:"actions-cell"},Q={class:"table-pagination"},X={props:{checkable:Boolean},setup(c){const m=v((()=>l().clients)),p=n(!1),h=n(!1),V=n(10),_=n(0),j=n([]),X=v((()=>m.value.slice(V.value*_.value,V.value*(_.value+1)))),Y=v((()=>Math.ceil(m.value.length/V.value))),Z=v((()=>_.value+1)),$=v((()=>{const l=[];for(let e=0;e<Y.value;e++)l.push(e);return l}));return(l,n)=>{const m=e,v=P,V=a,ll=s,el=t,al=u;return o(),g(y,null,[b(m,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=l=>p.value=l),title:"Sample modal"},{default:r((()=>[T,U])),_:1},8,["modelValue"]),b(m,{modelValue:h.value,"onUpdate:modelValue":n[1]||(n[1]=l=>h.value=l),largeTitle:"Please confirm",button:"danger",hasCancel:""},{default:r((()=>[L,N])),_:1},8,["modelValue"]),j.value.length?(o(),g("div",S,[(o(!0),g(y,null,k(j.value,(l=>(o(),g("span",{key:l.id,class:"inline-block px-2 py-1 mr-2 text-sm bg-gray-100 rounded-sm dark:bg-gray-700"},f(l.name),1)))),128))])):C("",!0),i("table",null,[i("thead",null,[i("tr",null,[c.checkable?(o(),g("th",q)):C("",!0),w,A,B,E,F,M,R])]),i("tbody",null,[(o(!0),g(y,null,k(x(X),(l=>(o(),g("tr",{key:l.id},[c.checkable?(o(),d(v,{key:0,onChecked:e=>((l,e)=>{l?j.value.push(e):j.value=((l,e)=>{const a=[];return l.forEach((l=>{e(l)||a.push(l)})),a})(j.value,(l=>l.id===e.id))})(e,l)},null,8,["onChecked"])):C("",!0),i("td",W,[b(V,{username:l.name,class:"image"},null,8,["username"])]),i("td",z,f(l.name),1),i("td",D,f(l.company),1),i("td",G,f(l.city),1),i("td",H,[i("progress",{max:"100",value:l.progress},f(l.progress),9,I)]),i("td",J,[i("small",{class:"text-gray-500 dark:text-gray-400",title:l.created},f(l.created),9,K)]),i("td",O,[b(el,{type:"justify-start lg:justify-end",noWrap:""},{default:r((()=>[b(ll,{color:"success",icon:"mdi:eye",small:"",onClick:n[2]||(n[2]=l=>p.value=!0)}),b(ll,{color:"danger",icon:"mdi:trash-can",small:"",onClick:n[3]||(n[3]=l=>h.value=!0)})])),_:1})])])))),128))])]),i("div",Q,[b(al,null,{default:r((()=>[b(el,null,{default:r((()=>[(o(!0),g(y,null,k(x($),(l=>(o(),d(ll,{key:l,active:l===_.value,label:l+1,small:"",onClick:e=>_.value=l},null,8,["active","label","onClick"])))),128))])),_:1}),i("small",null,"Page "+f(x(Z))+" of "+f(x(Y)),1)])),_:1})])],64)}}};export{P as _,X as a};
