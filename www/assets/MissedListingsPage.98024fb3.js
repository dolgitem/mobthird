import{Q as f,a as u}from"./QInfiniteScroll.543176ff.js";import{Q as h}from"./QPullToRefresh.9a442321.js";import{_}from"./EventItem.3a812e76.js";import{aT as y,aU as x,c as L,U as k,k as s,l as d,m as i,j as g,E as v,y as n,p as o,F as S,q as B}from"./index.3c8f5d62.js";import"./TouchPan.62eac7f9.js";const P=y("missedlistings",{state:()=>({listings:[],loading:!1,meta:{},page:0}),actions:{async getMissedListings(){this.loading=!0;const t=await x.get(`/account/missed-listings?page=${this.page}`);this.listings=this.listings.concat(t.data.data),this.meta=t.data.meta,this.loading=!1},async nextPage(){this.page++,await this.getMissedListings()},reset(){this.listings=[],this.meta=[],this.page=0}}}),Q={key:0},w={key:1},M={class:"row justify-center q-my-md"},q={__name:"MissedListingsPage",setup(t){const e=P(),c=L(()=>typeof e.meta.pagination=="undefined"?!1:e.meta.pagination.current_page>=e.meta.pagination.total_pages);k(()=>{e.reset()});const m=a=>{e.reset(),e.nextPage().then(()=>a())},p=(a,r)=>{e.nextPage().then(()=>r())};return(a,r)=>(s(),d(h,{onRefresh:m},{default:i(()=>[g(u,{onLoad:p,offset:250,disable:c.value},{loading:i(()=>[v("div",M,[g(f,{color:"primary",size:"40px"})])]),default:i(()=>[!n(e).loading&&n(e).listings.length==0?(s(),o("div",Q," \u041D\u0435\u0442 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432 ")):(s(),o("div",w,[(s(!0),o(S,null,B(n(e).listings,l=>(s(),d(_,{event:l.event,hideFlags:!0,key:l.listingId},null,8,["event"]))),128))]))]),_:1},8,["disable"])]),_:1}))}};export{q as default};
