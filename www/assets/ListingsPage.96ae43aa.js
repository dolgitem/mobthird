import{a as $,c as S,b as p,d as _}from"./QTabPanels.0e8d42af.js";import{a as f,Q as h}from"./QInfiniteScroll.543176ff.js";import{Q as y}from"./QPullToRefresh.9a442321.js";import{_ as b}from"./EventItem.3a812e76.js";import{aT as v,aU as x,c as q,U as Q,k as s,l as m,m as a,j as t,E as L,y as u,p as l,F as k,q as P,r as w}from"./index.3c8f5d62.js";import"./TouchPan.62eac7f9.js";const T=v("listings",{state:()=>({listings:[],loading:!1,meta:{},page:0}),actions:{async getListings(){this.loading=!0;const n=await x.get(`/account/listings?page=${this.page}`);this.listings=this.listings.concat(n.data.data),this.meta=n.data.meta,this.loading=!1},async nextPage(){this.page++,await this.getListings()},reset(){this.listings=[],this.meta=[],this.page=0}}}),V={key:0},I={key:1},B={class:"row justify-center q-my-md"},F={__name:"ListingTab",setup(n){const e=T(),c=q(()=>typeof e.meta.pagination=="undefined"?!1:e.meta.pagination.current_page>=e.meta.pagination.total_pages);Q(()=>{e.reset()});const o=i=>{e.reset(),e.nextPage().then(()=>i())},r=(i,d)=>{e.nextPage().then(()=>d())};return(i,d)=>(s(),m(y,{onRefresh:o},{default:a(()=>[t(f,{onLoad:r,offset:250,disable:c.value},{loading:a(()=>[L("div",B,[t(h,{color:"primary",size:"40px"})])]),default:a(()=>[!u(e).loading&&u(e).listings.length==0?(s(),l("div",V," \u041D\u0435\u0442 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 ")):(s(),l("div",I,[(s(!0),l(k,null,P(u(e).listings,g=>(s(),m(b,{event:g.event,hideFlags:!0,key:g.listingId},null,8,["event"]))),128))]))]),_:1},8,["disable"])]),_:1}))}},U=v("queues",{state:()=>({queues:[],loading:!1,meta:{},page:0}),actions:{async getQueues(){this.loading=!0;const n=await x.get(`/account/queues?page=${this.page}`);this.queues=this.queues.concat(n.data.data),this.meta=n.data.meta,this.loading=!1},async nextPage(){this.page++,await this.getQueues()},reset(){this.queues=[],this.meta=[],this.page=0}}}),j={key:0},A={key:1},R={class:"row justify-center q-my-md"},z={__name:"QueueTab",setup(n){const e=U(),c=q(()=>typeof e.meta.pagination=="undefined"?!1:e.meta.pagination.current_page>=e.meta.pagination.total_pages);Q(()=>{e.reset()});const o=i=>{e.reset(),e.nextPage().then(()=>i())},r=(i,d)=>{e.nextPage().then(()=>d())};return(i,d)=>(s(),m(y,{onRefresh:o},{default:a(()=>[t(f,{onLoad:r,offset:250,disable:c.value},{loading:a(()=>[L("div",R,[t(h,{color:"primary",size:"40px"})])]),default:a(()=>[!u(e).loading&&u(e).queues.length==0?(s(),l("div",j," \u041D\u0435\u0442 \u043E\u0447\u0435\u0440\u0435\u0434\u0435\u0439 ")):(s(),l("div",A,[(s(!0),l(k,null,P(u(e).queues,g=>(s(),m(b,{event:g.event,hideFlags:!0,key:g.queueId},null,8,["event"]))),128))]))]),_:1},8,["disable"])]),_:1}))}},E=v("listingsandqueues",{state:()=>({listings:[],loading:!1,meta:{},page:0}),actions:{async getListingsAndQueues(){this.loading=!0;const n=await x.get(`/account/listings-n-queues?page=${this.page}`);this.listings=this.listings.concat(n.data.data),this.meta=n.data.meta,this.loading=!1},async nextPage(){this.page++,await this.getListingsAndQueues()},reset(){this.listings=[],this.meta=[],this.page=0}}}),N={key:0},C={key:1},D={class:"row justify-center q-my-md"},G={__name:"AllTab",setup(n){const e=E(),c=q(()=>typeof e.meta.pagination=="undefined"?!1:e.meta.pagination.current_page>=e.meta.pagination.total_pages);Q(()=>{e.reset()});const o=i=>{e.reset(),e.nextPage().then(()=>i())},r=(i,d)=>{e.nextPage().then(()=>d())};return(i,d)=>(s(),m(y,{onRefresh:o},{default:a(()=>[t(f,{onLoad:r,offset:250,disable:c.value},{loading:a(()=>[L("div",D,[t(h,{color:"primary",size:"40px"})])]),default:a(()=>[!u(e).loading&&u(e).listings.length==0?(s(),l("div",N," \u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0438\u043B\u0438 \u043B\u0438\u0441\u0442\u0430 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F ")):(s(),l("div",C,[(s(!0),l(k,null,P(u(e).listings,g=>(s(),m(b,{event:g.event,key:g.listingId,hideFlags:!0},null,8,["event"]))),128))]))]),_:1},8,["disable"])]),_:1}))}},X={__name:"ListingsPage",setup(n){const e=w("listings");return(c,o)=>(s(),l("div",null,[t($,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),dense:"","no-caps":"",class:"q-mb-md bg-card-light border-sm q-pa-xs",style:{gap:"2px"},"indicator-color":"transparent","content-class":"gap-sm","active-bg-color":"elements"},{default:a(()=>[t(p,{name:"listings",label:"\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435",class:"border-sm"}),t(p,{name:"queues",label:"\u041B\u0438\u0441\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F",class:"border-sm"}),t(p,{name:"all",label:"\u0412\u0441\u0435",class:"border-sm"})]),_:1},8,["modelValue"]),t(S,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=r=>e.value=r),animated:""},{default:a(()=>[t(_,{name:"listings"},{default:a(()=>[t(F)]),_:1}),t(_,{name:"queues"},{default:a(()=>[t(z)]),_:1}),t(_,{name:"all"},{default:a(()=>[t(G)]),_:1})]),_:1},8,["modelValue"])]))}};export{X as default};
