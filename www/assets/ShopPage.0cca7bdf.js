import{c as d,r as x,k as s,p as r,y as b,l as p,D as a,j as l,m as i,F as m,q as _,ab as C,n as q,a8 as I,v,x as y,A as Q}from"./index.d21efca5.js";import{Q as h}from"./QItemLabel.1cbe6e57.js";import{_ as V}from"./PassItem.db6b75e6.js";import{u as c}from"./shop.a9dcd31a.js";const L={key:1},S={class:"row q-col-gutter-sm"},$=["onClick"],w={class:"border-xs bg-card-light q-pa-md"},B={class:"ellipsis-2-lines"},N=a("div",{class:"border-xs bg-card-dark q-pa-md ellipsis-2-lines"}," \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ",-1),D=[N],F={class:"q-mt-md"},O={__name:"ShopPage",setup(P){c().getData();const u=d(()=>c().passes),f=d(()=>c().categories),n=x(""),g=d(()=>n.value==""?u.value:u.value.filter(o=>o.name.toLowerCase().indexOf(n.value.toLowerCase())!==-1)),k=d(()=>f.value.slice().sort((t,e)=>parseInt(t.orderM)-parseInt(e.orderN)).slice(0,5));return(o,t)=>(s(),r("div",null,[b(c)().loading?(s(),p(I,{key:0,color:"primary",size:"50px"})):(s(),r("div",L,[a("div",null,[l(h,{class:"text-header text-h6 q-mb-sm"},{default:i(()=>[v(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")]),_:1}),a("div",S,[(s(!0),r(m,null,_(k.value,e=>(s(),r("div",{class:"col-4",key:e.passcategoryId,onClick:j=>o.$router.push("/shop/categories/"+e.passcategoryId)},[a("div",w,[a("div",B,y(e.name),1)])],8,$))),128)),a("div",{class:"col-4",onClick:t[0]||(t[0]=e=>o.$router.push("/shop/categories"))},D)])]),a("div",F,[l(h,{class:"text-header text-h6 q-mb-sm"},{default:i(()=>[v(" \u0412\u0441\u0435 \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442\u044B ")]),_:1}),l(C,{standout:"",dense:"",label:"\u041F\u043E\u0438\u0441\u043A",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e)},{prepend:i(()=>[l(Q,{name:"fa-solid fa-search"})]),_:1},8,["modelValue"]),l(q,{class:"q-mt-md"},{default:i(()=>[(s(!0),r(m,null,_(g.value,e=>(s(),p(V,{pass:e,key:e.passId},null,8,["pass"]))),128))]),_:1})])]))]))}};export{O as default};
