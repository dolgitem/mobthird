import{r as A,N as He,o as ee,H as X,U as te,Y as Re,at as he,h as q,g as Y,aq as qe,i as Ke,I as ce,c as T,au as Ie,aj as Ue,av as Xe,a1 as U,aw as Ye,ax as Ge,A as ne,S as Je,ay as Ze,az as et,aA as de,aB as xe,w as K,M as tt,aC as nt,aD as at,J as ae,W as ot,X as H,Z as rt,_ as Z,aE as ve,$ as Se,a0 as fe,aF as it,aG as lt,aH as st,aI as ut,aJ as ct,aK as dt}from"./index.3c8f5d62.js";import{g as ke,s as _e,c as vt}from"./TouchPan.62eac7f9.js";function ft(){const e=A(!He.value);return e.value===!1&&ee(()=>{e.value=!0}),{isHydrated:e}}const $e=typeof ResizeObserver!="undefined",Le=$e===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ht=X({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let s=null,i,a={width:-1,height:-1};function n(b){b===!0||e.debounce===0||e.debounce==="0"?l():s===null&&(s=setTimeout(l,e.debounce))}function l(){if(s!==null&&(clearTimeout(s),s=null),i){const{offsetWidth:b,offsetHeight:y}=i;(b!==a.width||y!==a.height)&&(a={width:b,height:y},r("resize",a))}}const{proxy:m}=Y();if(m.trigger=n,$e===!0){let b;const y=f=>{i=m.$el.parentNode,i?(b=new ResizeObserver(n),b.observe(i),l()):f!==!0&&he(()=>{y(!0)})};return ee(()=>{y()}),te(()=>{s!==null&&clearTimeout(s),b!==void 0&&(b.disconnect!==void 0?b.disconnect():i&&b.unobserve(i))}),Re}else{let f=function(){s!==null&&(clearTimeout(s),s=null),y!==void 0&&(y.removeEventListener!==void 0&&y.removeEventListener("resize",n,qe.passive),y=void 0)},$=function(){f(),i&&i.contentDocument&&(y=i.contentDocument.defaultView,y.addEventListener("resize",n,qe.passive),l())};const{isHydrated:b}=ft();let y;return ee(()=>{he(()=>{i=m.$el,i&&$()})}),te(f),()=>{if(b.value===!0)return q("object",{class:"q--avoid-card-border",style:Le.style,tabindex:-1,type:"text/html",data:Le.url,"aria-hidden":"true",onLoad:$})}}}});let bt=0;const mt=["click","keydown"],gt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${bt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function pt(e,r,s,i){const a=Ke(Ie,ce);if(a===ce)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ce;const{proxy:n}=Y(),l=A(null),m=A(null),b=A(null),y=T(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),f=T(()=>a.currentModel.value===e.name),$=T(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(f.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(i!==void 0?i.linkClass.value:"")),p=T(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=T(()=>e.disable===!0||a.hasFocus.value===!0||f.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function S(u,k){if(k!==!0&&l.value!==null&&l.value.focus(),e.disable===!0){i!==void 0&&i.hasRouterLink.value===!0&&U(u);return}if(i===void 0){a.updateModel({name:e.name}),s("click",u);return}if(i.hasRouterLink.value===!0){const R=(x={})=>{let _;const E=x.to===void 0||Ze(x.to,e.to)===!0?a.avoidRouteWatcher=et():null;return i.navigateToRouterLink(u,{...x,returnRouterError:!0}).catch(D=>{_=D}).then(D=>{if(E===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,_===void 0&&(D===void 0||D.message!==void 0&&D.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),x.returnRouterError===!0)return _!==void 0?Promise.reject(_):D})};s("click",u,R),u.defaultPrevented!==!0&&R();return}s("click",u)}function B(u){Ye(u,[13,32])?S(u,!0):Ge(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&a.onKbdNavigate(u.keyCode,n.$el)===!0&&U(u),s("keydown",u)}function M(){const u=a.tabProps.value.narrowIndicator,k=[],R=q("div",{ref:b,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&k.push(q(ne,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&k.push(q("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&k.push(e.alertIcon!==void 0?q(ne,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):q("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&k.push(R);const x=[q("div",{class:"q-focus-helper",tabindex:-1,ref:l}),q("div",{class:p.value},Je(r.default,k))];return u===!1&&x.push(R),x}const O={name:T(()=>e.name),rootRef:m,tabIndicatorRef:b,routeData:i};te(()=>{a.unregisterTab(O)}),ee(()=>{a.registerTab(O)});function V(u,k){const R={ref:m,class:$.value,tabindex:w.value,role:"tab","aria-selected":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:B,...k};return Ue(q(u,R,M()),[[Xe,y.value]])}return{renderTab:V,$tabs:a}}var At=X({name:"QTab",props:gt,emits:mt,setup(e,{slots:r,emit:s}){const{renderTab:i}=pt(e,r,s);return()=>i("div")}});let Be=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Be=e.scrollLeft>=0,e.remove()}function yt(e,r,s){const i=s===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?i[0]:i[1]}${e?` text-${e}`:""}`}const Tt=["left","center","right","justify"];var Rt=X({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Tt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:s}){const{proxy:i}=Y(),{$q:a}=i,{registerTick:n}=de(),{registerTick:l}=de(),{registerTick:m}=de(),{registerTimeout:b,removeTimeout:y}=xe(),{registerTimeout:f,removeTimeout:$}=xe(),p=A(null),w=A(null),S=A(e.modelValue),B=A(!1),M=A(!0),O=A(!1),V=A(!1),u=[],k=A(0),R=A(!1);let x=null,_=null,E;const D=T(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:yt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),oe=T(()=>{const t=k.value,o=S.value;for(let c=0;c<t;c++)if(u[c].name.value===o)return!0;return!1}),re=T(()=>`q-tabs__content--align-${B.value===!0?"left":V.value===!0?"justify":e.align}`),ie=T(()=>`q-tabs row no-wrap items-center q-tabs--${B.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),d=T(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+re.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=T(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),I=T(()=>e.vertical!==!0&&a.lang.rtl===!0),j=T(()=>Be===!1&&I.value===!0);K(I,F),K(()=>e.modelValue,t=>{le({name:t,setCurrent:!0,skipEmit:!0})}),K(()=>e.outsideArrows,G);function le({name:t,setCurrent:o,skipEmit:c}){S.value!==t&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&s("update:modelValue",t),(o===!0||e["onUpdate:modelValue"]===void 0)&&(Ee(S.value,t),S.value=t))}function G(){n(()=>{be({width:p.value.offsetWidth,height:p.value.offsetHeight})})}function be(t){if(g.value===void 0||w.value===null)return;const o=t[g.value.container],c=Math.min(w.value[g.value.scroll],Array.prototype.reduce.call(w.value.children,(P,h)=>P+(h[g.value.content]||0),0)),C=o>0&&c>o;B.value=C,C===!0&&l(F),V.value=o<parseInt(e.breakpoint,10)}function Ee(t,o){const c=t!=null&&t!==""?u.find(P=>P.name.value===t):null,C=o!=null&&o!==""?u.find(P=>P.name.value===o):null;if(c&&C){const P=c.tabIndicatorRef.value,h=C.tabIndicatorRef.value;x!==null&&(clearTimeout(x),x=null),P.style.transition="none",P.style.transform="none",h.style.transition="none",h.style.transform="none";const v=P.getBoundingClientRect(),L=h.getBoundingClientRect();h.style.transform=e.vertical===!0?`translate3d(0,${v.top-L.top}px,0) scale3d(1,${L.height?v.height/L.height:1},1)`:`translate3d(${v.left-L.left}px,0,0) scale3d(${L.width?v.width/L.width:1},1,1)`,m(()=>{x=setTimeout(()=>{x=null,h.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",h.style.transform="none"},70)})}C&&B.value===!0&&W(C.rootRef.value)}function W(t){const{left:o,width:c,top:C,height:P}=w.value.getBoundingClientRect(),h=t.getBoundingClientRect();let v=e.vertical===!0?h.top-C:h.left-o;if(v<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),F();return}v+=e.vertical===!0?h.height-P:h.width-c,v>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),F())}function F(){const t=w.value;if(t===null)return;const o=t.getBoundingClientRect(),c=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);I.value===!0?(M.value=Math.ceil(c+o.width)<t.scrollWidth-1,O.value=c>0):(M.value=c>0,O.value=e.vertical===!0?Math.ceil(c+o.height)<t.scrollHeight:Math.ceil(c+o.width)<t.scrollWidth)}function me(t){_!==null&&clearInterval(_),_=setInterval(()=>{Oe(t)===!0&&N()},5)}function ge(){me(j.value===!0?Number.MAX_SAFE_INTEGER:0)}function pe(){me(j.value===!0?0:Number.MAX_SAFE_INTEGER)}function N(){_!==null&&(clearInterval(_),_=null)}function Me(t,o){const c=Array.prototype.filter.call(w.value.children,L=>L===o||L.matches&&L.matches(".q-tab.q-focusable")===!0),C=c.length;if(C===0)return;if(t===36)return W(c[0]),c[0].focus(),!0;if(t===35)return W(c[C-1]),c[C-1].focus(),!0;const P=t===(e.vertical===!0?38:37),h=t===(e.vertical===!0?40:39),v=P===!0?-1:h===!0?1:void 0;if(v!==void 0){const L=I.value===!0?-1:1,z=c.indexOf(o)+v*L;return z>=0&&z<C&&(W(c[z]),c[z].focus({preventScroll:!0})),!0}}const De=T(()=>j.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,o)=>{t.scrollLeft=-o}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,o)=>{t.scrollTop=o}}:{get:t=>t.scrollLeft,set:(t,o)=>{t.scrollLeft=o}});function Oe(t){const o=w.value,{get:c,set:C}=De.value;let P=!1,h=c(o);const v=t<h?-1:1;return h+=v*5,h<0?(P=!0,h=0):(v===-1&&h<=t||v===1&&h>=t)&&(P=!0,h=t),C(o,h),F(),P}function ye(t,o){for(const c in t)if(t[c]!==o[c])return!1;return!0}function ze(){let t=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const c=u.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:C,query:P}=i.$route,h=Object.keys(P).length;for(const v of c){const L=v.routeData.exact.value===!0;if(v.routeData[L===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:z,query:se,matched:We,href:Fe}=v.routeData.resolvedLink.value,ue=Object.keys(se).length;if(L===!0){if(z!==C||ue!==h||ye(P,se)===!1)continue;t=v.name.value;break}if(z!==""&&z!==C||ue!==0&&ye(se,P)===!1)continue;const Q={matchedLen:We.length,queryDiff:h-ue,hrefLen:Fe.length-z.length};if(Q.matchedLen>o.matchedLen){t=v.name.value,o=Q;continue}else if(Q.matchedLen!==o.matchedLen)continue;if(Q.queryDiff<o.queryDiff)t=v.name.value,o=Q;else if(Q.queryDiff!==o.queryDiff)continue;Q.hrefLen>o.hrefLen&&(t=v.name.value,o=Q)}t===null&&u.some(v=>v.routeData===void 0&&v.name.value===S.value)===!0||le({name:t,setCurrent:!0})}function je(t){if(y(),R.value!==!0&&p.value!==null&&t.target&&typeof t.target.closest=="function"){const o=t.target.closest(".q-tab");o&&p.value.contains(o)===!0&&(R.value=!0,B.value===!0&&W(o))}}function Ne(){b(()=>{R.value=!1},30)}function J(){we.avoidRouteWatcher===!1?f(ze):$()}function Te(){if(E===void 0){const t=K(()=>i.$route.fullPath,J);E=()=>{t(),E=void 0}}}function Qe(t){u.push(t),k.value++,G(),t.routeData===void 0||i.$route===void 0?f(()=>{if(B.value===!0){const o=S.value,c=o!=null&&o!==""?u.find(C=>C.name.value===o):null;c&&W(c.rootRef.value)}}):(Te(),t.routeData.hasRouterLink.value===!0&&J())}function Ve(t){u.splice(u.indexOf(t),1),k.value--,G(),E!==void 0&&t.routeData!==void 0&&(u.every(o=>o.routeData===void 0)===!0&&E(),J())}const we={currentModel:S,tabProps:D,hasFocus:R,hasActiveTab:oe,registerTab:Qe,unregisterTab:Ve,verifyRouteModel:J,updateModel:le,onKbdNavigate:Me,avoidRouteWatcher:!1};tt(Ie,we);function Ce(){x!==null&&clearTimeout(x),N(),E!==void 0&&E()}let Pe;return te(Ce),nt(()=>{Pe=E!==void 0,Ce()}),at(()=>{Pe===!0&&Te(),G()}),()=>q("div",{ref:p,class:ie.value,role:"tablist",onFocusin:je,onFocusout:Ne},[q(ht,{onResize:be}),q("div",{ref:w,class:d.value,onScroll:F},ae(r.default)),q(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ge,onTouchstartPassive:ge,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N}),q(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(O.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:pe,onTouchstartPassive:pe,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N})])}});function wt(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,i)=>{const a=parseFloat(s);a&&(r[i]=a)}),r}var Ct=ot({name:"touch-swipe",beforeMount(e,{value:r,arg:s,modifiers:i}){if(i.mouse!==!0&&H.has.touch!==!0)return;const a=i.mouseCapture===!0?"Capture":"",n={handler:r,sensitivity:wt(s),direction:ke(i),noop:Re,mouseStart(l){_e(l,n)&&rt(l)&&(Z(n,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(l,!0))},touchStart(l){if(_e(l,n)){const m=l.target;Z(n,"temp",[[m,"touchmove","move","notPassiveCapture"],[m,"touchcancel","end","notPassiveCapture"],[m,"touchend","end","notPassiveCapture"]]),n.start(l)}},start(l,m){H.is.firefox===!0&&ve(e,!0);const b=Se(l);n.event={x:b.left,y:b.top,time:Date.now(),mouse:m===!0,dir:!1}},move(l){if(n.event===void 0)return;if(n.event.dir!==!1){U(l);return}const m=Date.now()-n.event.time;if(m===0)return;const b=Se(l),y=b.left-n.event.x,f=Math.abs(y),$=b.top-n.event.y,p=Math.abs($);if(n.event.mouse!==!0){if(f<n.sensitivity[1]&&p<n.sensitivity[1]){n.end(l);return}}else if(window.getSelection().toString()!==""){n.end(l);return}else if(f<n.sensitivity[2]&&p<n.sensitivity[2])return;const w=f/m,S=p/m;n.direction.vertical===!0&&f<p&&f<100&&S>n.sensitivity[0]&&(n.event.dir=$<0?"up":"down"),n.direction.horizontal===!0&&f>p&&p<100&&w>n.sensitivity[0]&&(n.event.dir=y<0?"left":"right"),n.direction.up===!0&&f<p&&$<0&&f<100&&S>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&f<p&&$>0&&f<100&&S>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&f>p&&y<0&&p<100&&w>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&f>p&&y>0&&p<100&&w>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(U(l),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),vt(),n.styleCleanup=B=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const M=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(M,50):M()}),n.handler({evt:l,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:m,distance:{x:f,y:p}})):n.end(l)},end(l){n.event!==void 0&&(fe(n,"temp"),H.is.firefox===!0&&ve(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),l!==void 0&&n.event.dir!==!1&&U(l),n.event=void 0)}};if(e.__qtouchswipe=n,i.mouse===!0){const l=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";Z(n,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}H.has.touch===!0&&Z(n,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const s=e.__qtouchswipe;s!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&s.end(),s.handler=r.value),s.direction=ke(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(fe(r,"main"),fe(r,"temp"),H.is.firefox===!0&&ve(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}});function Pt(){let e=Object.create(null);return{getCache:(r,s)=>e[r]===void 0?e[r]=typeof s=="function"?s():s:e[r],setCache(r,s){e[r]=s},hasCache(r){return Object.hasOwnProperty.call(e,r)},clearCache(r){r!==void 0?delete e[r]:e=Object.create(null)}}}const qt={name:{required:!0},disable:Boolean},Ae={setup(e,{slots:r}){return()=>q("div",{class:"q-panel scroll",role:"tabpanel"},ae(r.default))}},xt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},St=["update:modelValue","beforeTransition","transition"];function kt(){const{props:e,emit:r,proxy:s}=Y(),{getCache:i}=Pt();let a,n;const l=A(null),m=A(null);function b(d){const g=e.vertical===!0?"up":"left";_((s.$q.lang.rtl===!0?-1:1)*(d.direction===g?1:-1))}const y=T(()=>[[Ct,b,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),f=T(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),$=T(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=T(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=T(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=T(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),B=T(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);K(()=>e.modelValue,(d,g)=>{const I=u(d)===!0?k(d):-1;n!==!0&&x(I===-1?0:I<k(g)?-1:1),l.value!==I&&(l.value=I,r("beforeTransition",d,g),he(()=>{r("transition",d,g)}))});function M(){_(1)}function O(){_(-1)}function V(d){r("update:modelValue",d)}function u(d){return d!=null&&d!==""}function k(d){return a.findIndex(g=>g.props.name===d&&g.props.disable!==""&&g.props.disable!==!0)}function R(){return a.filter(d=>d.props.disable!==""&&d.props.disable!==!0)}function x(d){const g=d!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(d===-1?f.value:$.value):null;m.value!==g&&(m.value=g)}function _(d,g=l.value){let I=g+d;for(;I!==-1&&I<a.length;){const j=a[I];if(j!==void 0&&j.props.disable!==""&&j.props.disable!==!0){x(d),n=!0,r("update:modelValue",j.props.name),setTimeout(()=>{n=!1});return}I+=d}e.infinite===!0&&a.length!==0&&g!==-1&&g!==a.length&&_(d,d===-1?a.length:-1)}function E(){const d=k(e.modelValue);return l.value!==d&&(l.value=d),!0}function D(){const d=u(e.modelValue)===!0&&E()&&a[l.value];return e.keepAlive===!0?[q(st,S.value,[q(B.value===!0?i(w.value,()=>({...Ae,name:w.value})):Ae,{key:w.value,style:p.value},()=>d)])]:[q("div",{class:"q-panel scroll",style:p.value,key:w.value,role:"tabpanel"},[d])]}function oe(){if(a.length!==0)return e.animated===!0?[q(it,{name:m.value},D)]:D()}function re(d){return a=lt(ae(d.default,[])).filter(g=>g.props!==null&&g.props.slot===void 0&&u(g.props.name)===!0),a.length}function ie(){return a}return Object.assign(s,{next:M,previous:O,goTo:V}),{panelIndex:l,panelDirectives:y,updatePanelsList:re,updatePanelIndex:E,getPanelContent:oe,getEnabledPanels:R,getPanels:ie,isValidPanelName:u,keepAliveProps:S,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:_,goToPanel:V,nextPanel:M,previousPanel:O}}var It=X({name:"QTabPanel",props:qt,setup(e,{slots:r}){return()=>q("div",{class:"q-tab-panel",role:"tabpanel"},ae(r.default))}}),$t=X({name:"QTabPanels",props:{...xt,...ut},emits:St,setup(e,{slots:r}){const s=Y(),i=ct(e,s.proxy.$q),{updatePanelsList:a,getPanelContent:n,panelDirectives:l}=kt(),m=T(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(r),dt("div",{class:m.value},n(),"pan",e.swipeable,()=>l.value))}});export{ht as Q,Rt as a,At as b,$t as c,It as d,mt as e,pt as f,gt as u};
