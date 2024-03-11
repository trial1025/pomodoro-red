import{p as Q,m as re,l as Ie,q as we,v as Z,c as I,x as ee,h as n,y as H,z as J,M as ke,I as le,E as ae,A as Pe,B as Re,C as Se,D as Fe,F as Be,G as $e,H as Te,J as Le,r as D,K as De,L as Oe,N as Ae,w as Ee,O as We,P as Ne,Q as Me,R as N,S as G,T as Ue,U as je,W as qe,X as Ke,Y as ze,Z as He,_ as Xe,n as ce,$ as Ye,s as Ge,d as $,e as Je,f as T,V as Qe,i as z,a0 as de,j as f,a1 as W,a2 as fe,u as L,a3 as ve,k as K,a4 as Ze,t as me}from"./index-b2b215f4.js";import{u as et}from"./list-1fbfcb8a.js";import{V as tt,m as nt,u as _e,a as lt,b as at,c as he,d as ge}from"./VInput-3cf3964f.js";import{V as it}from"./VRow-e8c4efb3.js";class ie{constructor(o){let{x:a,y:i,width:t,height:l}=o;this.x=a,this.y=i,this.width=t,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ot(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,l,s,d,v;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),l=+t[0],s=+t[5],d=+t[12],v=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),l=+t[0],s=+t[3],d=+t[4],v=+t[5];else return new ie(o);const m=a.transformOrigin,_=o.x-d-(1-l)*parseFloat(m),h=o.y-v-(1-s)*parseFloat(m.slice(m.indexOf(" ")+1)),x=l?o.width/l:e.offsetWidth+1,b=s?o.height/s:e.offsetHeight+1;return new ie({x:_,y:h,width:x,height:b})}else return new ie(o)}function st(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const rt="cubic-bezier(0.4, 0, 0.2, 1)";const ut=Q({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...re(),...Ie({transition:{component:we}})},"VCounter"),ct=Z()({name:"VCounter",functional:!0,props:ut(),setup(e,o){let{slots:a}=o;const i=I(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>n(ke,{transition:e.transition},{default:()=>[H(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[J,e.active]])]})),{}}});const dt=Q({floating:Boolean,...re()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:dt(),setup(e,o){let{slots:a}=o;return ee(()=>n(tt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),ft=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=Q({appendInnerIcon:le,bgColor:String,clearable:Boolean,clearIcon:{type:le,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:le,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ft.includes(e)},"onClick:clear":ae(),"onClick:appendInner":ae(),"onClick:prependInner":ae(),...re(),...Pe(),...Re(),...Se()},"VField"),be=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...nt(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const{themeClasses:l}=Fe(e),{loaderClasses:s}=Be(e),{focusClasses:d,isFocused:v,focus:m,blur:_}=_e(e),{InputIcon:h}=lt(e),{roundedClasses:x}=$e(e),{rtlClasses:b}=Te(),P=I(()=>e.dirty||e.active),g=I(()=>!e.singleLine&&!!(e.label||t.label)),O=Le(),u=I(()=>e.id||`input-${O}`),A=I(()=>`${u.value}-messages`),r=D(),R=D(),C=D(),c=I(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:w,backgroundColorStyles:k}=De(Oe(e,"bgColor")),{textColorClasses:S,textColorStyles:te}=Ae(I(()=>e.error||e.disabled?void 0:P.value&&v.value?e.color:e.baseColor));Ee(P,V=>{if(g.value){const y=r.value.$el,F=R.value.$el;requestAnimationFrame(()=>{const B=ot(y),p=F.getBoundingClientRect(),U=p.x-B.x,j=p.y-B.y-(B.height/2-p.height/2),E=p.width/.75,q=Math.abs(E-B.width)>1?{maxWidth:We(E)}:void 0,X=getComputedStyle(y),ue=getComputedStyle(F),Ce=parseFloat(X.transitionDuration)*1e3||150,Ve=parseFloat(ue.getPropertyValue("--v-field-label-scale")),pe=ue.getPropertyValue("color");y.style.visibility="visible",F.style.visibility="hidden",st(y,{transform:`translate(${U}px, ${j}px) scale(${Ve})`,color:pe,...q},{duration:Ce,easing:rt,direction:V?"normal":"reverse"}).finished.then(()=>{y.style.removeProperty("visibility"),F.style.removeProperty("visibility")})})}},{flush:"post"});const M=I(()=>({isActive:P,isFocused:v,controlRef:C,blur:_,focus:m}));function ne(V){V.target!==document.activeElement&&V.preventDefault()}return ee(()=>{var U,j,E;const V=e.variant==="outlined",y=t["prepend-inner"]||e.prependInnerIcon,F=!!(e.clearable||t.clear),B=!!(t["append-inner"]||e.appendInnerIcon||F),p=()=>t.label?t.label({...M.value,label:e.label,props:{for:u.value}}):e.label;return n("div",G({class:["v-field",{"v-field--active":P.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!c.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":y,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!p(),[`v-field--variant-${e.variant}`]:!0},l.value,w.value,d.value,s.value,x.value,b.value,e.class],style:[k.value,e.style],onClick:ne},a),[n("div",{class:"v-field__overlay"},null),n(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),y&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(h,{key:"prepend-icon",name:"prependInner"},null),(U=t["prepend-inner"])==null?void 0:U.call(t,M.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&g.value&&n(Y,{key:"floating-label",ref:R,class:[S.value],floating:!0,for:u.value,style:te.value},{default:()=>[p()]}),n(Y,{ref:r,for:u.value},{default:()=>[p()]}),(j=t.default)==null?void 0:j.call(t,{...M.value,props:{id:u.value,class:"v-field__input","aria-describedby":A.value},focus:m,blur:_})]),F&&n(Me,{key:"clear"},{default:()=>[H(n("div",{class:"v-field__clearable",onMousedown:q=>{q.preventDefault(),q.stopPropagation()}},[t.clear?t.clear():n(h,{name:"clear"},null)]),[[J,e.dirty]])]}),B&&n("div",{key:"append",class:"v-field__append-inner"},[(E=t["append-inner"])==null?void 0:E.call(t,M.value),e.appendInnerIcon&&n(h,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",S.value],style:te.value},[V&&n(N,null,[n("div",{class:"v-field__outline__start"},null),g.value&&n("div",{class:"v-field__outline__notch"},[n(Y,{ref:R,floating:!0,for:u.value},{default:()=>[p()]})]),n("div",{class:"v-field__outline__end"},null)]),c.value&&g.value&&n(Y,{ref:R,floating:!0,for:u.value},{default:()=>[p()]})])])}),{controlRef:C}}});function vt(e){const o=Object.keys(be.props).filter(a=>!Ue(a)&&a!=="class"&&a!=="style");return je(e,o)}const oe=Symbol("Forwarded refs");function se(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function mt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[oe]=a,new Proxy(e,{get(t,l){if(Reflect.has(t,l))return Reflect.get(t,l);if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,l)){const d=Reflect.get(s.value,l);return typeof d=="function"?d.bind(s.value):d}}},has(t,l){if(Reflect.has(t,l))return!0;if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,l))return!0;return!1},set(t,l,s){if(Reflect.has(t,l))return Reflect.set(t,l,s);if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const d of a)if(d.value&&Reflect.has(d.value,l))return Reflect.set(d.value,l,s);return!1},getOwnPropertyDescriptor(t,l){var d;const s=Reflect.getOwnPropertyDescriptor(t,l);if(s)return s;if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const v of a){if(!v.value)continue;const m=se(v.value,l)??("_"in v.value?se((d=v.value._)==null?void 0:d.setupState,l):void 0);if(m)return m}for(const v of a){const m=v.value&&v.value[oe];if(!m)continue;const _=m.slice();for(;_.length;){const h=_.shift(),x=se(h.value,l);if(x)return x;const b=h.value&&h.value[oe];b&&_.push(...b)}}}}})}const ht=["color","file","time","date","datetime-local","week","month"],gt=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...at(),...xe()},"VTextField"),ye=Z()({name:"VTextField",directives:{Intersect:qe},inheritAttrs:!1,props:gt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const l=Ke(e,"modelValue"),{isFocused:s,focus:d,blur:v}=_e(e),m=I(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),_=I(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=I(()=>["plain","underlined"].includes(e.variant));function x(c,w){var k,S;!e.autofocus||!c||(S=(k=w[0].target)==null?void 0:k.focus)==null||S.call(k)}const b=D(),P=D(),g=D(),O=I(()=>ht.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function u(){var c;g.value!==document.activeElement&&((c=g.value)==null||c.focus()),s.value||d()}function A(c){i("mousedown:control",c),c.target!==g.value&&(u(),c.preventDefault())}function r(c){u(),i("click:control",c)}function R(c){c.stopPropagation(),u(),ce(()=>{l.value=null,Ye(e["onClick:clear"],c)})}function C(c){var k;const w=c.target;if(l.value=w.value,(k=e.modelModifiers)!=null&&k.trim&&["text","search","password","tel","url"].includes(e.type)){const S=[w.selectionStart,w.selectionEnd];ce(()=>{w.selectionStart=S[0],w.selectionEnd=S[1]})}}return ee(()=>{const c=!!(t.counter||e.counter!==!1&&e.counter!=null),w=!!(c||t.details),[k,S]=ze(a),{modelValue:te,...M}=he.filterProps(e),ne=vt(e);return n(he,G({ref:b,modelValue:l.value,"onUpdate:modelValue":V=>l.value=V,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":h.value},e.class],style:e.style},k,M,{centerAffix:!h.value,focused:s.value}),{...t,default:V=>{let{id:y,isDisabled:F,isDirty:B,isReadonly:p,isValid:U}=V;return n(be,G({ref:P,onMousedown:A,onClick:r,"onClick:clear":R,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},ne,{id:y.value,active:O.value||B.value,dirty:B.value||e.dirty,disabled:F.value,focused:s.value,error:U.value===!1}),{...t,default:j=>{let{props:{class:E,...q}}=j;const X=H(n("input",G({ref:g,value:l.value,onInput:C,autofocus:e.autofocus,readonly:p.value,disabled:F.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:u,onBlur:v},q,S),null),[[He("intersect"),{handler:x},null,{once:!0}]]);return n(N,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?n("div",{class:E,"data-no-activator":""},[t.default(),X]):Xe(X,{class:E}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:w?V=>{var y;return n(N,null,[(y=t.details)==null?void 0:y.call(t,V),c&&n(N,null,[n("span",null,null),n(ct,{active:e.persistentCounter||s.value,value:m.value,max:_.value},t.counter)])])}:void 0})}),mt({},b,P,g)}}),yt=f("h1",{class:"text-center"},"事項",-1),_t=f("thead",null,[f("tr",null,[f("th",null,"名稱"),f("th",null,"操作")])],-1),xt={key:0},bt=f("td",{colspan:"2"},"沒有事項",-1),Ct=[bt],Vt=f("h1",{class:"text-center"},"已完成事項",-1),pt=f("thead",null,[f("tr",null,[f("th",null,"名稱"),f("th",null,"操作")])],-1),It={key:0},wt=f("td",{colspan:"2"},"沒有已完成事項",-1),kt=[wt],Bt={__name:"ListView",setup(e){const o=et(),{items:a,finishedItems:i}=Ge(o),{addItem:t,editItem:l,delItem:s,cancelEditItem:d,confirmEditItem:v,delFinishedItem:m,completeItem:_}=o,h=D(""),x=D(null),b=D([]),P=async()=>{const u=await x.value.validate();console.log(u),!(u.length>0)&&(t(h.value),x.value.reset())},g=async(u,A)=>{(await b.value[A].validate()).length>0||v(u)},O={required:u=>!!u||"欄位必填",length:u=>u.length>=3||"必須三個字以上"};return(u,A)=>($(),Je(Qe,null,{default:T(()=>[n(it,{justify:"center"},{default:T(()=>[n(z,{lg:"8",md:"8",sm:"12"},{default:T(()=>[n(z,{cols:"12"},{default:T(()=>[yt]),_:1}),n(z,{cols:"12"},{default:T(()=>[n(ye,{variant:"solo-filled",label:"新增事項",modelValue:h.value,"onUpdate:modelValue":A[0]||(A[0]=r=>h.value=r),rules:[O.required,O.length],"append-icon":"mdi-plus",ref_key:"newItemInput",ref:x,"onClick:append":P,onKeydown:de(P,["enter"])},null,8,["modelValue","rules"]),n(ge,null,{default:T(()=>[_t,f("tbody",null,[($(!0),W(N,null,fe(L(a),(r,R)=>($(),W("tr",{key:r.id},[f("td",null,[H(f("span",null,[n(K,{icon:"mdi-check-circle",variant:"text",color:"green",onClick:C=>L(_)(r.id)},null,8,["onClick"]),Ze(" "+me(r.name),1)],512),[[J,!r.edit]]),H(n(ye,{modelValue:r.model,"onUpdate:modelValue":C=>r.model=C,rules:[O.required,O.length],ref_for:!0,ref_key:"editItemInput",ref:b,onKeydown:de(C=>g(r.id,R),["enter"]),autofocus:""},null,8,["modelValue","onUpdate:modelValue","rules","onKeydown"]),[[J,r.edit]])]),f("td",null,[r.edit?($(),W(N,{key:1},[n(K,{icon:"mdi-check",variant:"text",color:"green",onClick:C=>g(r.id,R)},null,8,["onClick"]),n(K,{icon:"mdi-undo",variant:"text",color:"red",onClick:C=>L(d)(r.id)},null,8,["onClick"])],64)):($(),W(N,{key:0},[n(K,{icon:"mdi-pencil",variant:"text",color:"green",onClick:C=>L(l)(r.id)},null,8,["onClick"]),n(K,{icon:"mdi-delete",variant:"text",color:"red",onClick:C=>L(s)(r.id)},null,8,["onClick"])],64))])]))),128)),L(a).length===0?($(),W("tr",xt,Ct)):ve("",!0)])]),_:1})]),_:1}),n(z,{cols:"12"},{default:T(()=>[Vt]),_:1}),n(z,{col:"12"},{default:T(()=>[n(ge,null,{default:T(()=>[pt,f("tbody",null,[($(!0),W(N,null,fe(L(i),r=>($(),W("tr",{key:r.id},[f("td",null,me(r.name),1),f("td",null,[n(K,{icon:"mdi-delete",variant:"text",color:"red",onClick:R=>L(m)(r.id)},null,8,["onClick"])])]))),128)),L(i).length===0?($(),W("tr",It,kt)):ve("",!0)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Bt as default};
