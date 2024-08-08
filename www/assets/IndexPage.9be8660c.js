import{aQ as D,k as t,p as n,D as e,F as b,q as y,al as N,j as d,A as k,B as i,x as l,y as m,aa as B,ag as S,c as w,r as F,l as p,m as f,u as x,t as C,E as z,o as L,w as I,v as V}from"./index.d21efca5.js";import{J as A}from"./JsBarcode.429efe0e.js";import{_ as P}from"./EventItem.a2d6fa2c.js";import{_ as Q}from"./AuthButton.176a9ae2.js";import{_ as U}from"./LinksList.35ee05cf.js";import{u as E}from"./vue-i18n.runtime.fcd93545.js";import"./QItemLabel.1cbe6e57.js";const j={style:{flex:"1",display:"flex",overflow:"auto"},class:"scrollable-content"},H={class:"row no-wrap",style:{gap:"10px"}},J=["onClick"],M={key:0,style:{"font-size":"42px","font-weight":"bold","text-align":"center","text-transform":"uppercase"}},R={style:{background:"#eee",padding:"3px 5px"}},T={__name:"HistorySection",setup($){const c=D(),r=s=>s.photo?"url("+s.photo+") center center / cover no-repeat":"#ddd";return(s,o)=>(t(),n("div",j,[e("div",H,[(t(!0),n(b,null,y(m(c).news,a=>(t(),n("div",{key:a.mobilenewsId,onClick:_=>s.$router.push("/news/"+a.mobilenewsId),style:{"border-radius":"8px",overflow:"hidden",border:"1px solid grey"}},[e("div",{style:N([{width:"100px",height:"80px",padding:"10px"},{background:r(a)}])},[a.photo?i("",!0):(t(),n("div",M,[d(k,{name:"fa-regular fa-newspaper",color:"grey"})]))],4),e("div",R,l(a.name),1)],8,J))),128))])]))}},G={key:0},K=e("div",{class:"text-h6 text-header q-pt-md q-pb-sm"}," \u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C ",-1),O={class:"row gap"},W=e("div",null,"\u0417\u0430\u043D\u044F\u0442\u0438\u044F:",-1),X=e("div",null,"\u0410\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442\u044B:",-1),Y=e("div",null,"\u0422\u043E\u0432\u0430\u0440\u044B:",-1),Z={class:"row gap q-mt-sm"},ee={key:0,class:"col q-pa-sm bg-card-light border-sm"},te={class:"vertical-middle"},se={__name:"DebtSection",setup($){const c=B().settings,r=S(),s=w(()=>r.client),o=F(0);return s.value.debts.admissions&&o.value++,s.value.debts.pass&&o.value++,s.value.debts.shop&&o.value++,(a,_)=>o.value>0?(t(),n("div",G,[K,e("div",null,[e("div",O,[s.value.debts.admissions?(t(),p(C,{key:0,class:"col q-pa-sm bg-card-light border-sm"},{default:f(()=>[d(x,null,{default:f(()=>[W,e("div",null,l(s.value.debts.admissions),1)]),_:1}),o.value==1?(t(),p(x,{key:0,avatar:""},{default:f(()=>[d(k,{size:"16px",class:"text-icon-default",name:"fa-solid fa-angle-right"})]),_:1})):i("",!0)]),_:1})):i("",!0),s.value.debts.pass?(t(),p(C,{key:1,class:"col q-pa-sm bg-card-light border-sm"},{default:f(()=>[d(x,null,{default:f(()=>[X,e("div",null,l(s.value.debts.pass)+" "+l(m(c).currencyUnit),1)]),_:1}),o.value==1?(t(),p(x,{key:0,avatar:""},{default:f(()=>[d(k,{size:"16px",class:"text-icon-default",name:"fa-solid fa-angle-right"})]),_:1})):i("",!0)]),_:1})):i("",!0),s.value.debts.shop?(t(),p(C,{key:2,class:"col q-pa-sm bg-card-light border-sm"},{default:f(()=>[d(x,null,{default:f(()=>[Y,e("div",null,l(s.value.debts.shop)+" "+l(m(c).currencyUnit),1)]),_:1}),o.value==1?(t(),p(x,{key:0,avatar:""},{default:f(()=>[d(k,{size:"16px",class:"text-icon-default",name:"fa-solid fa-angle-right"})]),_:1})):i("",!0)]),_:1})):i("",!0)]),e("div",Z,[o.value>1?(t(),n("div",ee,[e("span",te,"\u0412\u0441\u0435\u0433\u043E: "+l(s.value.debts.pass+s.value.debts.shop)+" "+l(m(c).currencyUnit),1)])):i("",!0),d(z,{onClick:_[0]||(_[0]=g=>a.$router.push("/account/debts")),class:"col standoutButton",label:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"})])])])):i("",!0)}},ae=e("div",{class:"text-h6 text-header q-pt-md q-pb-sm"}," \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442 ",-1),ne={style:{flex:"1",display:"flex",overflow:"auto"},class:"scrollable-content"},oe={class:"row no-wrap",style:{gap:"10px"}},le=["onClick"],ie={style:{"font-size":"18px"},class:"q-mb-xs"},re={__name:"PassSection",setup($){const c=w(()=>S().client.passes),r=s=>s.hasRestrictions?"\u0435\u0441\u0442\u044C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F":"\u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439";return(s,o)=>(t(),n("div",null,[ae,e("div",ne,[e("div",oe,[(t(!0),n(b,null,y(c.value,a=>(t(),n("div",{key:a.pass_contactId,onClick:_=>s.$router.push("/account/passes/"+a.pass_contactId),class:"bg-light border-sm",style:{width:"260px",padding:"10px"}},[e("div",ie,l(a.name),1),e("div",null," \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043D\u044F\u0442\u0438\u0439: "+l(a.pointsLeft),1),e("div",null," \u0410\u043A\u0442\u0438\u0432\u0435\u043D \u0434\u043E: "+l(a.dateExpires),1),e("div",null," \u0412\u0440\u0435\u043C\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F: "+l(r(a)),1)],8,le))),128))])])]))}},ce=e("div",{class:"text-header text-h6 q-mb-sm q-mt-sm"}," \u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A ",-1),de={class:"text-light"},ue={key:0,class:"row text-center gap-sm"},pe={class:"bg-card-dark border-xs"},_e={__name:"PermanentSection",setup($){const c=S(),r=w(()=>c.client.permanents),s=B().settings,o=(_,g)=>_.days.filter(u=>u.weekDay==g).sort((u,h)=>{const v=u.time.split(":").map(Number),q=h.time.split(":").map(Number);return v[0]-q[0]||v[1]-q[1]}),a=["\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431","\u0432\u0441"];return(_,g)=>(t(),n("div",null,[ce,e("div",null,[(t(!0),n(b,null,y(r.value,u=>(t(),n("div",{key:u.groupId,class:"bg-card-light q-pa-sm border-sm q-mb-md"},[e("div",null,l(u.groupName),1),e("div",null,l(u.teacherName),1),e("div",de,l(u.officeName),1),m(s).enableCustomPermanents&&u.days.length?(t(),n("div",ue,[(t(),n(b,null,y(7,h=>e("div",{class:"col",key:h},[e("div",pe,l(a[h-1]),1),(t(!0),n(b,null,y(o(u,h),v=>(t(),n("div",{key:v.weekDay},l(v.time),1))),128))])),64))])):i("",!0)]))),128))])]))}},ve=e("div",{class:"text-h6 text-header q-pt-md q-pb-sm"}," \u041F\u043E\u043B\u0435\u0437\u043D\u043E\u0435 ",-1),me={style:{flex:"1",display:"flex",overflow:"auto"},class:"scrollable-content"},he={class:"row no-wrap",style:{gap:"10px"}},fe=["onClick"],ge={__name:"UsefulSection",setup($){const c=[{text:"\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438",link:"/teachers",icon:"fa-solid fa-graduation-cap"},{text:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",link:"/grouptypes",icon:"fa-solid fa-street-view"},{text:"\u0410\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442\u044B",link:"/shop",icon:"fa-solid fa-store"},{text:"\u0413\u0440\u0443\u043F\u043F\u044B",link:"/groups",icon:"fa-solid fa-street-view"},{text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",link:"/contacts",icon:"fa-solid fa-phone-flip"}];return(r,s)=>(t(),n("div",null,[ve,e("div",me,[e("div",he,[(t(),n(b,null,y(c,o=>e("div",{key:o.text,onClick:a=>r.$router.push(o.link),class:"bg-light border-sm",style:{width:"140px",height:"80px",padding:"10px"}},[e("div",null,l(o.text),1),d(k,{name:o.icon,class:"cursor-pointer icons-default q-mt-md",size:"1.5em"},null,8,["name"])],8,fe)),64))])])]))}},xe={key:3},be={key:0},Be={__name:"IndexPage",setup($){const c=D(),r=S(),s=B().settings,o=F(null),a=w(()=>r.client),_=w(()=>r.isAuth&&a.value.barcode);L(()=>{g()}),I(a.value,h=>{_.value&&g()});function g(){o.value&&A(o.value,a.value.barcode,{width:1,height:20,background:"#F0F0F0",displayValue:!1})}E({useScope:"global"});const u=s.sideMenuLinks.concat([{name:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",to:"/about"}]);return(h,v)=>(t(),n("div",null,[m(c).news.length?(t(),p(T,{key:0,style:{"margin-bottom":"20px"}})):i("",!0),_.value?(t(),n("div",{key:1,onClick:v[0]||(v[0]=q=>h.$router.push("/barcode")),style:{"background-color":"#F0F0F0",width:"300px",height:"80px",margin:"0 auto","margin-top":"-60px","border-radius":"12px",display:"flex","align-items":"flex-end","justify-content":"center","padding-bottom":"0px"}},[e("canvas",{ref_key:"indexBarcodeCanvas",ref:o},null,512)])):i("",!0),m(r).isAuth?m(r).isAuth?(t(),n("div",xe,[a.value.nearestListing?(t(),n("div",be,[e("div",{class:"text-h6 text-header q-pt-md q-pb-sm",onClick:v[1]||(v[1]=q=>h.$router.push("/account/listings"))},[e("div",null,[V("\u0421\u043A\u043E\u0440\u043E \u0437\u0430\u043D\u044F\u0442\u0438\u0435 "),d(k,{size:"16px",class:"text-icon-default",name:"fa-solid fa-angle-right"})])]),d(P,{event:a.value.nearestListing.event,hideFlags:!0},null,8,["event"])])):i("",!0),m(s).showDebtInPortal?(t(),p(se,{key:1})):i("",!0),a.value.passes.length>0?(t(),p(re,{key:2})):i("",!0),a.value.permanents.length>0?(t(),p(_e,{key:3})):i("",!0)])):i("",!0):(t(),p(Q,{key:2,text:"\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C \u0438 \u043C\u043E\u0436\u0435\u0442 \u0447\u0442\u043E-\u0442\u043E \u0435\u0449\u0435"})),d(ge),d(U,{label:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",links:m(u)},null,8,["links"])]))}};export{Be as default};
