(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[515],{6179:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(1609);n(1626);const i=({children:e})=>(0,r.createElement)("div",{className:"wc-block-filter-title-placeholder"},e)},4054:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(1609),i=n(7723),o=n(851),c=n(4656);n(8335);const l=({className:e,
/* translators: Reset button text for filters. */
label:t=(0,i.__)("Reset","woocommerce"),onClick:n,screenReaderLabel:l=(0,i.__)("Reset filter","woocommerce")})=>(0,r.createElement)("button",{className:(0,o.A)("wc-block-components-filter-reset-button",e),onClick:n},(0,r.createElement)(c.Label,{label:t,screenReaderLabel:l}))},1745:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(1609),i=n(7723),o=n(851),c=n(4656);n(1504);const l=({className:e,isLoading:t,disabled:n,
/* translators: Submit button text for filters. */
label:l=(0,i.__)("Apply","woocommerce"),onClick:s,screenReaderLabel:a=(0,i.__)("Apply filter","woocommerce")})=>(0,r.createElement)("button",{type:"submit",className:(0,o.A)("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:n,onClick:s},(0,r.createElement)(c.Label,{label:l,screenReaderLabel:a}))},1561:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var r=n(6087),i=n(4717),o=n(3993),c=n(5574),l=n(1573),s=n(9098),a=n(1380),u=n(6372);const m=({queryAttribute:e,queryPrices:t,queryStock:n,queryRating:m,queryState:d,isEditor:p=!1})=>{let b=(0,u._)();b=`${b}-collection-data`;const[_]=(0,s.dJ)(b),[f,g]=(0,s.xd)("calculate_attribute_counts",[],b),[v,h]=(0,s.xd)("calculate_price_range",null,b),[y,w]=(0,s.xd)("calculate_stock_status_counts",null,b),[k,E]=(0,s.xd)("calculate_rating_counts",null,b),x=(0,l.c)(e||{}),N=(0,l.c)(t),S=(0,l.c)(n),C=(0,l.c)(m);(0,r.useEffect)((()=>{"object"==typeof x&&Object.keys(x).length&&(f.find((e=>(0,o.objectHasProp)(x,"taxonomy")&&e.taxonomy===x.taxonomy))||g([...f,x]))}),[x,f,g]),(0,r.useEffect)((()=>{v!==N&&void 0!==N&&h(N)}),[N,h,v]),(0,r.useEffect)((()=>{y!==S&&void 0!==S&&w(S)}),[S,w,y]),(0,r.useEffect)((()=>{k!==C&&void 0!==C&&E(C)}),[C,E,k]);const[F,A]=(0,r.useState)(p),[R]=(0,i.d7)(F,200);F||A(!0);const U=(0,r.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,c.di)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(_)),[_]);return(0,a.G)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...U},shouldSelect:R})}},1380:(e,t,n)=>{"use strict";n.d(t,{G:()=>a});var r=n(7594),i=n(7143),o=n(6087),c=n(1573),l=n(7615),s=n(3993);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:u={},shouldSelect:m=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const d=(0,o.useRef)({results:[],isLoading:!0}),p=(0,c.c)(u),b=(0,c.c)(a),_=(0,l.a)(),f=(0,i.useSelect)((e=>{if(!m)return null;const i=e(r.COLLECTIONS_STORE_KEY),o=[t,n,p,b],c=i.getCollectionError(...o);if(c){if(!(0,s.isError)(c))throw new Error("TypeError: `error` object is not an instance of Error constructor");_(c)}return{results:i.getCollection(...o),isLoading:!i.hasFinishedResolution("getCollection",o)}}),[t,n,b,p,m]);return null!==f&&(d.current=f),d.current}},9098:(e,t,n)=>{"use strict";n.d(t,{dJ:()=>l,xd:()=>s});var r=n(7594),i=n(7143),o=n(6087),c=(n(923),n(6372));const l=e=>{const t=(0,c._)();e=e||t;const n=(0,i.useSelect)((t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:l}=(0,i.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,(0,o.useCallback)((t=>{l(e,t)}),[e,l])]},s=(e,t,n)=>{const l=(0,c._)();n=n||l;const s=(0,i.useSelect)((i=>i(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)),[n,e]),{setQueryValue:a}=(0,i.useDispatch)(r.QUERY_STATE_STORE_KEY);return[s,(0,o.useCallback)((t=>{a(n,e,t)}),[n,e,a])]}},6372:(e,t,n)=>{"use strict";n.d(t,{_:()=>o});var r=n(6087);const i=(0,r.createContext)("page"),o=()=>(0,r.useContext)(i);i.Provider},9095:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(6087);function i(e,t){const n=(0,r.useRef)();return(0,r.useEffect)((()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}},1573:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});var r=n(6087),i=n(923),o=n.n(i);function c(e){const t=(0,r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},3249:(e,t,n)=>{"use strict";n.d(t,{p:()=>a});var r=n(851),i=n(3993),o=n(1194),c=n(9786);function l(e={}){const t={};return(0,c.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function s(e,t){return e&&t?`has-${(0,o.c)(t)}-${e}`:""}const a=e=>{const t=(e=>{const t=(0,i.isObject)(e)?e:{style:{}};let n=t.style;return(0,i.isString)(n)&&(n=JSON.parse(n)||{}),(0,i.isObject)(n)||(n={}),{...t,style:n}})(e),n=function(e){var t,n,o,c,a,u,m;const{backgroundColor:d,textColor:p,gradient:b,style:_}=e,f=s("background-color",d),g=s("color",p),v=function(e){if(e)return`has-${e}-gradient-background`}(b),h=v||(null==_||null===(t=_.color)||void 0===t?void 0:t.gradient);return{className:(0,r.A)(g,v,{[f]:!h&&!!f,"has-text-color":p||(null==_||null===(n=_.color)||void 0===n?void 0:n.text),"has-background":d||(null==_||null===(o=_.color)||void 0===o?void 0:o.background)||b||(null==_||null===(c=_.color)||void 0===c?void 0:c.gradient),"has-link-color":(0,i.isObject)(null==_||null===(a=_.elements)||void 0===a?void 0:a.link)?null==_||null===(u=_.elements)||void 0===u||null===(m=u.link)||void 0===m?void 0:m.color:void 0}),style:l({color:(null==_?void 0:_.color)||{}})}}(t),o=function(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:i}=e,o=n?s("border-color",n):"";return(0,r.A)({"has-border-color":!!n||!(null==i||null===(t=i.border)||void 0===t||!t.color),[o]:!!o})}(e),style:l({border:n})}}(t),c=function(e){var t;return{className:void 0,style:l({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),a=(e=>{const t=(0,i.isObject)(e.style.typography)?e.style.typography:{},n=(0,i.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:(0,r.A)(a.className,n.className,o.className,c.className),style:{...a.style,...n.style,...o.style,...c.style}}}},7615:(e,t,n)=>{"use strict";n.d(t,{a:()=>i});var r=n(6087);const i=()=>{const[,e]=(0,r.useState)();return(0,r.useCallback)((t=>{e((()=>{throw t}))}),[])}},890:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(1609),i=n(851),o=n(3249),c=n(3993),l=n(9095),s=n(9098),a=n(1561),u=n(6087),m=n(7723),d=n(4656),p=n(4717);n(9505);const b=(e,t,n,r=1,i=!1)=>{let[o,c]=e;const l=e=>Number.isFinite(e);return l(o)||(o=t||0),l(c)||(c=n||r),l(t)&&t>o&&(o=t),l(n)&&n<=o&&(o=n-r),l(t)&&t>=c&&(c=t+r),l(n)&&n<c&&(c=n),!i&&o>=c&&(o=c-r),i&&c<=o&&(c=o+r),[o,c]};var _=n(1745);const f=({maxConstraint:e,minorUnit:t})=>({floatValue:n})=>void 0!==n&&n<=e/10**t&&n>0,g=({minConstraint:e,currentMaxValue:t,minorUnit:n})=>({floatValue:r})=>void 0!==r&&r>=e/10**n&&r<t/10**n;var v=n(4054);const h=({minPrice:e,maxPrice:t,minConstraint:n,maxConstraint:o,onChange:l,step:s,currency:a,showInputFields:h=!0,showFilterButton:y=!1,inlineInput:w=!0,isLoading:k=!1,isUpdating:E=!1,isEditor:x=!1,onSubmit:N=(()=>{})})=>{const S=(0,u.useRef)(null),C=(0,u.useRef)(null),F=s||10**a.minorUnit,[A,R]=(0,u.useState)(e),[U,P]=(0,u.useState)(t),L=(0,u.useRef)(null),[T,I]=(0,u.useState)(0);(0,u.useEffect)((()=>{R(e)}),[e]),(0,u.useEffect)((()=>{P(t)}),[t]),(0,u.useLayoutEffect)((()=>{var e;w&&L.current&&I(null===(e=L.current)||void 0===e?void 0:e.offsetWidth)}),[w,I]);const O=(0,u.useMemo)((()=>isFinite(n)&&isFinite(o)),[n,o]),Q=(0,u.useMemo)((()=>isFinite(e)&&isFinite(t)&&O?{"--low":(e-n)/(o-n)*100+"%","--high":(t-n)/(o-n)*100+"%"}:{"--low":"0%","--high":"100%"}),[e,t,n,o,O]),j=(0,u.useCallback)((e=>{if(k||!O||!S.current||!C.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=S.current.offsetWidth,i=+S.current.value,c=C.current.offsetWidth,l=+C.current.value,s=r*(i/o),a=c*(l/o);Math.abs(n-s)>Math.abs(n-a)?(S.current.style.zIndex="20",C.current.style.zIndex="21"):(S.current.style.zIndex="21",C.current.style.zIndex="20")}),[k,o,O]),M=(0,u.useCallback)((r=>{const i=r.target.classList.contains("wc-block-price-filter__range-input--min"),c=+r.target.value,s=i?[Math.round(c/F)*F,t]:[e,Math.round(c/F)*F],a=b(s,n,o,F,i);l(a)}),[l,e,t,n,o,F]),B=(0,p.YQ)(((e,t,n)=>{if(e>=t){const e=b([0,t],null,null,F,n);return l([parseInt(e[0],10),parseInt(e[1],10)])}const r=b([e,t],null,null,F,n);l(r)}),1e3),q=(0,p.YQ)(N,600),V=(0,i.A)("wc-block-price-filter","wc-block-components-price-slider",h&&"wc-block-price-filter--has-input-fields",h&&"wc-block-components-price-slider--has-input-fields",y&&"wc-block-price-filter--has-filter-button",y&&"wc-block-components-price-slider--has-filter-button",!O&&"is-disabled",(w||T<=300)&&"wc-block-components-price-slider--is-input-inline"),Y=(0,c.isObject)(S.current)?S.current.ownerDocument.activeElement:void 0,W=Y&&Y===S.current?F:1,$=Y&&Y===C.current?F:1,H=String(A/10**a.minorUnit),z=String(U/10**a.minorUnit),D=w&&T>300,K=(0,r.createElement)("div",{className:(0,i.A)("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":k&&E}),onMouseMove:j,onFocus:j},O&&(0,r.createElement)("div",{"aria-hidden":h},(0,r.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:Q}),(0,r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":(0,m.__)("Filter products by minimum price","woocommerce"),"aria-valuetext":H,value:Number.isFinite(e)?e:n,onChange:M,step:W,min:n,max:o,ref:S,disabled:k&&!O,tabIndex:h?-1:0}),(0,r.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":(0,m.__)("Filter products by maximum price","woocommerce"),"aria-valuetext":z,value:Number.isFinite(t)?t:o,onChange:M,step:$,min:n,max:o,ref:C,disabled:k,tabIndex:h?-1:0}))),J=e=>`wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,Z={currency:a,decimalScale:0},G={...Z,displayType:"input",allowNegative:!1,disabled:k||!O,onClick:e=>{const t=e.currentTarget;t&&t.select()}};return(0,r.createElement)("div",{className:V,ref:L},(!D||!h)&&K,h&&(0,r.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},E?(0,r.createElement)("div",{className:"input-loading"}):(0,r.createElement)(d.FormattedMonetaryAmount,{...G,className:J("min"),"aria-label":(0,m.__)("Filter products by minimum price","woocommerce"),isAllowed:g({minConstraint:n,minorUnit:a.minorUnit,currentMaxValue:U}),onValueChange:e=>{e!==A&&(R(e),B(e,U,!0))},value:A}),D&&K,E?(0,r.createElement)("div",{className:"input-loading"}):(0,r.createElement)(d.FormattedMonetaryAmount,{...G,className:J("max"),"aria-label":(0,m.__)("Filter products by maximum price","woocommerce"),isAllowed:f({maxConstraint:o,minorUnit:a.minorUnit}),onValueChange:e=>{e!==U&&(P(e),B(A,e,!1))},value:U})),!h&&!E&&Number.isFinite(e)&&Number.isFinite(t)&&(0,r.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},(0,r.createElement)(d.FormattedMonetaryAmount,{...Z,value:e}),(0,r.createElement)(d.FormattedMonetaryAmount,{...Z,value:t})),(0,r.createElement)("div",{className:"wc-block-components-price-slider__actions"},(x||!E&&(e!==n||t!==o))&&(0,r.createElement)(v.A,{onClick:()=>{l([n,o]),q()},screenReaderLabel:(0,m.__)("Reset price filter","woocommerce")}),y&&(0,r.createElement)(_.A,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:E,disabled:k||!O,onClick:N,screenReaderLabel:(0,m.__)("Apply price filter","woocommerce")})))};var y=n(6179),w=n(8529),k=n(5703),E=n(3832),x=n(3366);const N="ROUND_UP",S="ROUND_DOWN",C=(e,t,n)=>{const r=10*10**t;let i=null;const o=parseFloat(e);isNaN(o)||(n===N?i=Math.ceil(o/r)*r:n===S&&(i=Math.floor(o/r)*r));const c=(0,l.Z)(i,Number.isFinite);return Number.isFinite(i)?i:c};n(8836);var F=n(4300);function A(e,t){return Number(e)*10**t}const R=({attributes:e,isEditor:t=!1})=>{const n=(0,F.$Q)(),i=(0,k.getSettingWithCoercion)("hasFilterableProducts",!1,c.isBoolean),o=(0,k.getSettingWithCoercion)("isRenderingPhpTemplate",!1,c.isBoolean),[m,d]=(0,u.useState)(!1),b=(0,x.Vf)("min_price"),_=(0,x.Vf)("max_price"),[f]=(0,s.dJ)(),{results:g,isLoading:v}=(0,a.A)({queryPrices:!0,queryState:f,isEditor:t}),R=(0,w.getCurrencyFromPriceResponse)((0,c.objectHasProp)(g,"price_range")?g.price_range:void 0),[U,P]=(0,s.xd)("min_price"),[L,T]=(0,s.xd)("max_price"),[I,O]=(0,u.useState)(A(b,R.minorUnit)||null),[Q,j]=(0,u.useState)(A(_,R.minorUnit)||null),{minConstraint:M,maxConstraint:B}=(({minPrice:e,maxPrice:t,minorUnit:n})=>({minConstraint:C(e||"",n,S),maxConstraint:C(t||"",n,N)}))({minPrice:(0,c.objectHasProp)(g,"price_range")&&(0,c.objectHasProp)(g.price_range,"min_price")&&(0,c.isString)(g.price_range.min_price)?g.price_range.min_price:void 0,maxPrice:(0,c.objectHasProp)(g,"price_range")&&(0,c.objectHasProp)(g.price_range,"max_price")&&(0,c.isString)(g.price_range.max_price)?g.price_range.max_price:void 0,minorUnit:R.minorUnit});(0,u.useEffect)((()=>{m||(P(A(b,R.minorUnit)),T(A(_,R.minorUnit)),d(!0))}),[R.minorUnit,m,_,b,T,P]);const[q,V]=(0,u.useState)(v),Y=(0,u.useCallback)(((e,t)=>{const n=t>=Number(B)?void 0:t,r=e<=Number(M)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=(0,E.removeQueryArgs)(e,...Object.keys(t));return(0,E.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**R.minorUnit,max_price:n/10**R.minorUnit});window.location.href!==e&&(0,x.CH)(e)}P(r),T(n)}),[M,B,P,T,R.minorUnit]),W=(0,p.YQ)(Y,500),$=(0,u.useCallback)((t=>{V(!0),t[0]!==I&&O(t[0]),t[1]!==Q&&j(t[1]),o&&m&&!e.showFilterButton&&W(t[0],t[1])}),[I,Q,O,j,o,m,W,e.showFilterButton]);(0,u.useEffect)((()=>{e.showFilterButton||o||W(I,Q)}),[I,Q,e.showFilterButton,W,o]);const H=(0,l.Z)(U),z=(0,l.Z)(L),D=(0,l.Z)(M),K=(0,l.Z)(B);if((0,u.useEffect)((()=>{(!Number.isFinite(I)||U!==H&&U!==I||M!==D&&M!==I)&&O(Number.isFinite(U)?U:M),(!Number.isFinite(Q)||L!==z&&L!==Q||B!==K&&B!==Q)&&j(Number.isFinite(L)?L:B)}),[I,Q,U,L,M,B,D,K,H,z]),!i)return n(!1),null;if(!v&&(null===M||null===B||M===B))return n(!1),null;const J=`h${e.headingLevel}`;n(!0),!v&&q&&V(!1);const Z=(0,r.createElement)(J,{className:"wc-block-price-filter__title"},e.heading),G=v&&q?(0,r.createElement)(y.A,null,Z):Z;return(0,r.createElement)(r.Fragment,null,!t&&e.heading&&G,(0,r.createElement)("div",{className:"wc-block-price-slider"},(0,r.createElement)(h,{minConstraint:M,maxConstraint:B,minPrice:I,maxPrice:Q,currency:R,showInputFields:e.showInputFields,inlineInput:e.inlineInput,showFilterButton:e.showFilterButton,onChange:$,onSubmit:()=>Y(I,Q),isLoading:v,isUpdating:q,isEditor:t})))},U=JSON.parse('{"uK":{"F8":{"A":3}}}'),P=e=>{const t=(0,o.p)(e),n=(l=e,{heading:(0,c.isString)(null==l?void 0:l.heading)?l.heading:"",headingLevel:(0,c.isString)(null==l?void 0:l.headingLevel)&&parseInt(l.headingLevel,10)||U.uK.F8.A,showFilterButton:"true"===(null==l?void 0:l.showFilterButton),showInputFields:"false"!==(null==l?void 0:l.showInputFields),inlineInput:"true"===(null==l?void 0:l.inlineInput)});var l;return(0,r.createElement)("div",{className:(0,i.A)((0,c.isString)(e.className)?e.className:"",t.className),style:t.style},(0,r.createElement)(R,{isEditor:!1,attributes:n}))}},3366:(e,t,n)=>{"use strict";n.d(t,{CH:()=>u,Q:()=>m,Vf:()=>a,nD:()=>s,xB:()=>l});var r=n(3832),i=n(5703),o=n(3993);const c=(0,i.getSettingWithCoercion)("isRenderingPhpTemplate",!1,o.isBoolean),l="query_type_",s="filter_";function a(e){return window?(0,r.getQueryArg)(window.location.href,e):null}function u(e){if(c){const t=new URL(e);t.pathname=t.pathname.replace(/\/page\/[0-9]+/i,""),t.searchParams.delete("paged"),t.searchParams.forEach(((e,n)=>{n.match(/^query(?:-[0-9]+)?-page$/)&&t.searchParams.delete(n)})),window.location.href=t.href}else window.history.replaceState({},"",e)}const m=e=>{const t=(0,r.getQueryArgs)(e);return(0,r.addQueryArgs)(e,t)}},1626:()=>{},8335:()=>{},1504:()=>{},9505:()=>{},8836:()=>{}}]);