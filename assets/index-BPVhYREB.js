(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ld={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function e1(){if(Z_)return yl;Z_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return yl.Fragment=t,yl.jsx=i,yl.jsxs=i,yl}var K_;function n1(){return K_||(K_=1,Ld.exports=e1()),Ld.exports}var Pt=n1(),Od={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function i1(){if(Q_)return Ee;Q_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),M=Symbol.iterator;function E(C){return C===null||typeof C!="object"?null:(C=M&&C[M]||C["@@iterator"],typeof C=="function"?C:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,S={};function F(C,A,H){this.props=C,this.context=A,this.refs=S,this.updater=H||D}F.prototype.isReactComponent={},F.prototype.setState=function(C,A){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,A,"setState")},F.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function z(){}z.prototype=F.prototype;function U(C,A,H){this.props=C,this.context=A,this.refs=S,this.updater=H||D}var k=U.prototype=new z;k.constructor=U,x(k,F.prototype),k.isPureReactComponent=!0;var V=Array.isArray;function I(){}var B={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function T(C,A,H){var q=H.ref;return{$$typeof:s,type:C,key:A,ref:q!==void 0?q:null,props:H}}function P(C,A){return T(C.type,A,C.props)}function it(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function ft(C){var A={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(H){return A[H]})}var Tt=/\/+/g;function st(C,A){return typeof C=="object"&&C!==null&&C.key!=null?ft(""+C.key):A.toString(36)}function W(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(I,I):(C.status="pending",C.then(function(A){C.status==="pending"&&(C.status="fulfilled",C.value=A)},function(A){C.status==="pending"&&(C.status="rejected",C.reason=A)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function et(C,A,H,q,lt){var At=typeof C;(At==="undefined"||At==="boolean")&&(C=null);var bt=!1;if(C===null)bt=!0;else switch(At){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(C.$$typeof){case s:case t:bt=!0;break;case v:return bt=C._init,et(bt(C._payload),A,H,q,lt)}}if(bt)return lt=lt(C),bt=q===""?"."+st(C,0):q,V(lt)?(H="",bt!=null&&(H=bt.replace(Tt,"$&/")+"/"),et(lt,A,H,"",function(O){return O})):lt!=null&&(it(lt)&&(lt=P(lt,H+(lt.key==null||C&&C.key===lt.key?"":(""+lt.key).replace(Tt,"$&/")+"/")+bt)),A.push(lt)),1;bt=0;var St=q===""?".":q+":";if(V(C))for(var zt=0;zt<C.length;zt++)q=C[zt],At=St+st(q,zt),bt+=et(q,A,H,At,lt);else if(zt=E(C),typeof zt=="function")for(C=zt.call(C),zt=0;!(q=C.next()).done;)q=q.value,At=St+st(q,zt++),bt+=et(q,A,H,At,lt);else if(At==="object"){if(typeof C.then=="function")return et(W(C),A,H,q,lt);throw A=String(C),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return bt}function Z(C,A,H){if(C==null)return C;var q=[],lt=0;return et(C,q,"","",function(At){return A.call(H,At,lt++)}),q}function Et(C){if(C._status===-1){var A=C._result,H=A();H.then(function(q){(C._status===0||C._status===-1)&&(C._status=1,C._result=q,H.status===void 0&&(H.status="fulfilled",H.value=q))},function(q){(C._status===0||C._status===-1)&&(C._status=2,C._result=q,H.status===void 0&&(H.status="rejected",H.reason=q))}),C._status===-1&&(C._status=0,C._result=H)}if(C._status===1)return C._result.default;throw C._result}var wt=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function Ot(C){var A=B.T,H={};H.types=A!==null?A.types:null,B.T=H;try{var q=C(),lt=B.S;lt!==null&&lt(H,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(I,wt)}catch(At){wt(At)}finally{A!==null&&H.types!==null&&(A.types=H.types),B.T=A}}function te(C){var A=B.T;if(A!==null){var H=A.types;H===null?A.types=[C]:H.indexOf(C)===-1&&H.push(C)}else Ot(te.bind(null,C))}var ne={map:Z,forEach:function(C,A,H){Z(C,function(){A.apply(this,arguments)},H)},count:function(C){var A=0;return Z(C,function(){A++}),A},toArray:function(C){return Z(C,function(A){return A})||[]},only:function(C){if(!it(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return Ee.Activity=g,Ee.Children=ne,Ee.Component=F,Ee.Fragment=i,Ee.Profiler=l,Ee.PureComponent=U,Ee.StrictMode=r,Ee.Suspense=m,Ee.ViewTransition=_,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(C){return B.H.useMemoCache(C)}},Ee.addTransitionType=te,Ee.cache=function(C){return function(){return C.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(C,A,H){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var q=x({},C.props),lt=C.key;if(A!=null)for(At in A.key!==void 0&&(lt=""+A.key),A)!L.call(A,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&A.ref===void 0||(q[At]=A[At]);var At=arguments.length-2;if(At===1)q.children=H;else if(1<At){for(var bt=Array(At),St=0;St<At;St++)bt[St]=arguments[St+2];q.children=bt}return T(C.type,lt,q)},Ee.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},Ee.createElement=function(C,A,H){var q,lt={},At=null;if(A!=null)for(q in A.key!==void 0&&(At=""+A.key),A)L.call(A,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(lt[q]=A[q]);var bt=arguments.length-2;if(bt===1)lt.children=H;else if(1<bt){for(var St=Array(bt),zt=0;zt<bt;zt++)St[zt]=arguments[zt+2];lt.children=St}if(C&&C.defaultProps)for(q in bt=C.defaultProps,bt)lt[q]===void 0&&(lt[q]=bt[q]);return T(C,At,lt)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(C){return{$$typeof:d,render:C}},Ee.isValidElement=it,Ee.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:Et}},Ee.memo=function(C,A){return{$$typeof:p,type:C,compare:A===void 0?null:A}},Ee.startTransition=Ot,Ee.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Ee.use=function(C){return B.H.use(C)},Ee.useActionState=function(C,A,H){return B.H.useActionState(C,A,H)},Ee.useCallback=function(C,A){return B.H.useCallback(C,A)},Ee.useContext=function(C){return B.H.useContext(C)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(C,A){return B.H.useDeferredValue(C,A)},Ee.useEffect=function(C,A){return B.H.useEffect(C,A)},Ee.useEffectEvent=function(C){return B.H.useEffectEvent(C)},Ee.useId=function(){return B.H.useId()},Ee.useImperativeHandle=function(C,A,H){return B.H.useImperativeHandle(C,A,H)},Ee.useInsertionEffect=function(C,A){return B.H.useInsertionEffect(C,A)},Ee.useLayoutEffect=function(C,A){return B.H.useLayoutEffect(C,A)},Ee.useMemo=function(C,A){return B.H.useMemo(C,A)},Ee.useOptimistic=function(C,A){return B.H.useOptimistic(C,A)},Ee.useReducer=function(C,A,H){return B.H.useReducer(C,A,H)},Ee.useRef=function(C){return B.H.useRef(C)},Ee.useState=function(C){return B.H.useState(C)},Ee.useSyncExternalStore=function(C,A,H){return B.H.useSyncExternalStore(C,A,H)},Ee.useTransition=function(){return B.H.useTransition()},Ee.version="19.3.1",Ee}var J_;function bm(){return J_||(J_=1,Od.exports=i1()),Od.exports}var fe=bm(),zd={exports:{}},xl={},Pd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function a1(){return $_||($_=1,(function(s){function t(W,et){var Z=W.length;W.push(et);t:for(;0<Z;){var Et=Z-1>>>1,wt=W[Et];if(0<l(wt,et))W[Et]=et,W[Z]=wt,Z=Et;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var et=W[0],Z=W.pop();if(Z!==et){W[0]=Z;t:for(var Et=0,wt=W.length,Ot=wt>>>1;Et<Ot;){var te=2*(Et+1)-1,ne=W[te],C=te+1,A=W[C];if(0>l(ne,Z))C<wt&&0>l(A,ne)?(W[Et]=A,W[C]=Z,Et=C):(W[Et]=ne,W[te]=Z,Et=te);else if(C<wt&&0>l(A,Z))W[Et]=A,W[C]=Z,Et=C;else break t}}return et}function l(W,et){var Z=W.sortIndex-et.sortIndex;return Z!==0?Z:W.id-et.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,_=3,M=!1,E=!1,D=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function U(W){for(var et=i(p);et!==null;){if(et.callback===null)r(p);else if(et.startTime<=W)r(p),et.sortIndex=et.expirationTime,t(m,et);else break;et=i(p)}}function k(W){if(D=!1,U(W),!E)if(i(m)!==null)E=!0,V||(V=!0,it());else{var et=i(p);et!==null&&st(k,et.startTime-W)}}var V=!1,I=-1,B=5,L=-1;function T(){return x?!0:!(s.unstable_now()-L<B)}function P(){if(x=!1,V){var W=s.unstable_now();L=W;var et=!0;try{t:{E=!1,D&&(D=!1,F(I),I=-1),M=!0;var Z=_;try{e:{for(U(W),g=i(m);g!==null&&!(g.expirationTime>W&&T());){var Et=g.callback;if(typeof Et=="function"){g.callback=null,_=g.priorityLevel;var wt=Et(g.expirationTime<=W);if(W=s.unstable_now(),typeof wt=="function"){g.callback=wt,U(W),et=!0;break e}g===i(m)&&r(m),U(W)}else r(m);g=i(m)}if(g!==null)et=!0;else{var Ot=i(p);Ot!==null&&st(k,Ot.startTime-W),et=!1}}break t}finally{g=null,_=Z,M=!1}et=void 0}}finally{et?it():V=!1}}}var it;if(typeof z=="function")it=function(){z(P)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Tt=ft.port2;ft.port1.onmessage=P,it=function(){Tt.postMessage(null)}}else it=function(){S(P,0)};function st(W,et){I=S(function(){W(s.unstable_now())},et)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(W){switch(_){case 1:case 2:case 3:var et=3;break;default:et=_}var Z=_;_=et;try{return W()}finally{_=Z}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(W,et){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=_;_=W;try{return et()}finally{_=Z}},s.unstable_scheduleCallback=function(W,et,Z){var Et=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Et+Z:Et):Z=Et,W){case 1:var wt=-1;break;case 2:wt=250;break;case 5:wt=1073741823;break;case 4:wt=1e4;break;default:wt=5e3}return wt=Z+wt,W={id:v++,callback:et,priorityLevel:W,startTime:Z,expirationTime:wt,sortIndex:-1},Z>Et?(W.sortIndex=Z,t(p,W),i(m)===null&&W===i(p)&&(D?(F(I),I=-1):D=!0,st(k,Z-Et))):(W.sortIndex=wt,t(m,W),E||M||(E=!0,V||(V=!0,it()))),W},s.unstable_shouldYield=T,s.unstable_wrapCallback=function(W){var et=_;return function(){var Z=_;_=et;try{return W.apply(this,arguments)}finally{_=Z}}}})(Id)),Id}var ty;function r1(){return ty||(ty=1,Pd.exports=a1()),Pd.exports}var Fd={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function s1(){if(ey)return Wn;ey=1;var s=bm();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:v,containerInfo:g,implementation:_}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wn.browser=function(v){return{$$typeof:c,_reason:v}},Wn.createPortal=function(v,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,_)},Wn.flushSync=function(v){var g=m.T,_=r.p;try{if(m.T=null,r.p=2,v)return v()}finally{m.T=g,r.p=_,r.d.f()}},Wn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},Wn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Wn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var _=g.as,M=p(_,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:E,fetchPriority:D}):_==="script"&&r.d.X(v,{crossOrigin:M,integrity:E,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Wn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},Wn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,M=p(_,g.crossOrigin);r.d.L(v,_,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Wn.preloadModule=function(v,g){if(typeof v=="string")if(g){var _=p(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},Wn.requestFormReset=function(v){r.d.r(v)},Wn.unstable_batchedUpdates=function(v,g){return v(g)},Wn.useFormState=function(v,g,_){return m.H.useFormState(v,g,_)},Wn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Wn.version="19.3.1",Wn}var ny;function o1(){if(ny)return Fd.exports;ny=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Fd.exports=s1(),Fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function l1(){if(iy)return xl;iy=1;var s=r1(),t=bm(),i=o1();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,o,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,o,u,f))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=_(e);return a===null||D(n,e,a.child,{foundSelf:!1}),n}function D(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(e,n,a.child,o))return!0;a=a.sibling}return!1}function x(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,F=null;function z(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function U(e,n,a){return e===a?(F=e,!1):e===n?(F!==null&&(S=e),!0):!1}function k(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function V(e,n,a){for(var o=0,u=e;u;u=a(u))o++;u=0;for(var f=n;f;f=a(f))u++;for(;0<o-u;)e=a(e),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var I=Object.assign,B=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),Tt=Symbol.for("react.consumer"),st=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),te=Symbol.for("react.legacy_hidden"),ne=Symbol.for("react.memo_cache_sentinel"),C=Symbol.for("react.view_transition"),A=Symbol.for("react.recoverable"),H=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function At(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case ft:return"Profiler";case it:return"StrictMode";case et:return"Suspense";case Z:return"SuspenseList";case Ot:return"Activity";case C:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case st:return e.displayName||"Context";case Tt:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Et:return n=e.displayName||null,n!==null?n:At(e.type)||"Memo";case wt:n=e._payload,e=e._init;try{return At(e(n))}catch{}}return null}var bt=Array.isArray,St=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},yt=[],mt=-1;function J(e){return{current:e}}function Q(e){0>mt||(e.current=yt[mt],yt[mt]=null,mt--)}function ht(e,n){mt++,yt[mt]=e.current,e.current=n}var xt=J(null),Nt=J(null),Jt=J(null),$t=J(null);function N(e,n){switch(ht(Jt,n),ht(Nt,e),ht(xt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?a_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=a_(n),e=r_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(xt),ht(xt,e)}function b(){Q(xt),Q(Nt),Q(Jt)}function X(e){var n=e.memoizedState;n!==null&&(Js._currentValue=n.memoizedState,ht($t,e)),n=xt.current;var a=r_(n,e.type);n!==a&&(ht(Nt,e),ht(xt,a))}function pt(e){Nt.current===e&&(Q(xt),Q(Nt)),$t.current===e&&(Q($t),Js._currentValue=O)}var Rt,tt;function jt(e){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+e+tt}var Gt=!1;function Kt(e,n){if(!e||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Lt=function(){throw Error()};if(Object.defineProperty(Lt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Lt,[])}catch(re){var $=re}Reflect.construct(e,[],Lt)}else{try{Lt.call()}catch(re){$=re}Lt=!1;try{var dt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Lt=!0,new e}finally{Lt&&(dt!==void 0?Object.defineProperty(e.prototype,"props",dt):delete e.prototype.props)}}}else{try{throw Error()}catch(re){$=re}(Lt=e())&&typeof Lt.catch=="function"&&Lt.catch(function(){})}}catch(re){if(re&&$&&typeof re.stack=="string")return[re.stack,$.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var G=y.split(`
`),rt=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===rt.length)for(o=G.length-1,u=rt.length-1;1<=o&&0<=u&&G[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==rt[u]){var vt=`
`+G[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return e.child!==n&&n!==null?jt("Suspense Fallback"):jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return Kt(e.type,!1);case 11:return Kt(e.type.render,!1);case 1:return Kt(e.type,!0);case 31:return jt("Activity");case 30:return jt("ViewTransition");default:return""}}function Bt(e){try{var n="",a=null;do n+=Qt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,qt=s.unstable_cancelCallback,Ft=s.unstable_shouldYield,pe=s.unstable_requestPaint,Y=s.unstable_now,Ct=s.unstable_getCurrentPriorityLevel,Xt=s.unstable_ImmediatePriority,kt=s.unstable_UserBlockingPriority,Dt=s.unstable_NormalPriority,Mt=s.unstable_LowPriority,ie=s.unstable_IdlePriority,me=s.log,ee=s.unstable_setDisableYieldValue,ye=null,ke=null;function sn(e){if(typeof me=="function"&&ee(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(ye,e)}catch{}}var En=Math.clz32?Math.clz32:sa,bn=Math.log,ra=Math.LN2;function sa(e){return e>>>=0,e===0?32:31-(bn(e)/ra|0)|0}var Ui=256,ei=262144,Nn=4194304;function Ln(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ae(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ln(o):(y&=R,y!==0?u=Ln(y):a||(a=R&~e,a!==0&&(u=Ln(a))))):(R=o&~f,R!==0?u=Ln(R):y!==0?u=Ln(y):a||(a=o&~e,a!==0&&(u=Ln(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function le(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-En(a),u=1<<o;n|=e[o],a&=~u}return n}function Le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Nn;return Nn<<=1,(Nn&62914560)===0&&(Nn=4194304),e}function _n(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ue(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,rt=e.hiddenUpdates;for(a=y&~a;0<a;){var vt=31-En(a),Lt=1<<vt;R[vt]=0,G[vt]=-1;var $=rt[vt];if($!==null)for(rt[vt]=null,vt=0;vt<$.length;vt++){var dt=$[vt];dt!==null&&(dt.lane&=-536870913)}a&=~Lt}o!==0&&w(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function w(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-En(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function nt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-En(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function gt(e,n){var a=n&-n;return a=(a&42)!==0?1:_t(a),(a&(e.suspendedLanes|n))!==0?0:a}function _t(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wt(){var e=zt.p;return e!==0?e:(e=window.event,e===void 0?32:G_(e.type))}function ct(e,n){var a=zt.p;try{return zt.p=e,n()}finally{zt.p=a}}var Ht=Math.random().toString(36).slice(2),It="__reactFiber$"+Ht,Yt="__reactProps$"+Ht,ce="__reactContainer$"+Ht,ue="__reactEvents$"+Ht,Se="__reactListeners$"+Ht,Oe="__reactHandles$"+Ht,Te="__reactResources$"+Ht,Be="__reactMarker$"+Ht,ze="__reactLoad$"+Ht;function ve(e){delete e[It],delete e[Yt],delete e[Se],delete e[Oe]}function Ye(e){var n;if(n=e[It])return n;for(var a=e.parentNode;a;){if(n=a[ce]||a[It]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=M_(e);e!==null;){if(a=e[It])return a;e=M_(e)}return n}e=a,a=e.parentNode}return null}function Me(e){if(e=e[It]||e[ce]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function yn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function on(e){var n=e[Te];return n||(n=e[Te]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Re(e){e[Be]=!0}function We(e){e[ze]=void 0}var Xe=new Set,In={};function fn(e,n){hn(e,n),hn(e+"Capture",n)}function hn(e,n){for(In[e]=n,e=0;e<n.length;e++)Xe.add(n[e])}var mn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oa={},ui={};function Do(e){return Zt.call(ui,e)?!0:Zt.call(oa,e)?!1:mn.test(e)?ui[e]=!0:(oa[e]=!0,!1)}var He=!1;function Xm(){var e=He;return He=!1,e}function ql(e,n,a){if(Do(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Yl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ta(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function yi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function SS(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function cf(e){if(!e._valueTracker){var n=qm(e)?"checked":"value";e._valueTracker=SS(e,n,""+e[n])}}function Ym(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=qm(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var MS=/[\n"\\]/g;function Ni(e){return e.replace(MS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function uf(e,n,a,o,u,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+yi(n)):e.value!==""+yi(n)&&(e.value=""+yi(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?y==="number"&&e.value==n?ff(e,yi(e.value)):ff(e,yi(n)):a!=null?ff(e,yi(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+yi(R):e.removeAttribute("name")}function Wm(e,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){cf(e);return}a=a!=null?""+yi(a):"",n=n!=null?""+yi(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),cf(e)}function ff(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function gs(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+yi(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function jm(e,n,a){if(n!=null&&(n=""+yi(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+yi(a):""}function Zm(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(bt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yi(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),cf(e)}function vs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ES=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Km(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ES.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qm(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",He=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(Km(e,u,o),He=!0)}else for(var f in n)n.hasOwnProperty(f)&&Km(e,f,n[f])}function hf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var TS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(e){return bS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var df=null;function pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _s=null,ys=null;function Jm(e){var n=Me(e);if(n&&(e=n.stateNode)){var a=e[Yt]||null;t:switch(e=n.stateNode,n.type){case"input":if(uf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ni(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Yt]||null;if(!u)throw Error(r(90));uf(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ym(o)}break t;case"textarea":jm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gs(e,!!a.multiple,n,!1)}}}var mf=!1;function $m(e,n,a){if(mf)return e(n,a);mf=!0;try{var o=e(n);return o}finally{if(mf=!1,(_s!==null||ys!==null)&&(Wc(),_s&&(n=_s,e=ys,ys=_s=null,Jm(n),e)))for(n=0;n<e.length;n++)Jm(e[n])}}function Uo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Yt]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=!1;if(ba)try{var No={};Object.defineProperty(No,"passive",{get:function(){gf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{gf=!1}var Za=null,vf=null,jl=null;function t0(){if(jl)return jl;var e,n=vf,a=n.length,o,u="value"in Za?Za.value:Za.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return jl=u.slice(e,1<o?1-o:void 0)}function Zl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Kl(){return!0}function e0(){return!1}function ni(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Kl:e0,this.isPropagationStopped=e0,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=ni(Ka),Lo=I({},Ka,{view:0,detail:0}),AS=ni(Lo),_f,yf,Oo,Jl=I({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(_f=e.screenX-Oo.screenX,yf=e.screenY-Oo.screenY):yf=_f=0,Oo=e),_f)},movementY:function(e){return"movementY"in e?e.movementY:yf}}),n0=ni(Jl),RS=I({},Jl,{dataTransfer:0}),wS=ni(RS),CS=I({},Lo,{relatedTarget:0}),xf=ni(CS),DS=I({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),US=ni(DS),NS=I({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),LS=ni(NS),OS=I({},Ka,{data:0}),i0=ni(OS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=IS[e])?!!n[e]:!1}function Sf(){return FS}var BS=I({},Lo,{key:function(e){if(e.key){var n=zS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?PS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(e){return e.type==="keypress"?Zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HS=ni(BS),VS=I({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a0=ni(VS),GS=I({},Ka,{submitter:0}),kS=ni(GS),XS=I({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),qS=ni(XS),YS=I({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),WS=ni(YS),jS=I({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ZS=ni(jS),KS=I({},Ka,{newState:0,oldState:0,source:0}),QS=ni(KS),JS=[9,13,27,32],Mf=ba&&"CompositionEvent"in window,zo=null;ba&&"documentMode"in document&&(zo=document.documentMode);var $S=ba&&"TextEvent"in window&&!zo,r0=ba&&(!Mf||zo&&8<zo&&11>=zo),s0=" ",o0=!1;function l0(e,n){switch(e){case"keyup":return JS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xs=!1;function tM(e,n){switch(e){case"compositionend":return c0(n);case"keypress":return n.which!==32?null:(o0=!0,s0);case"textInput":return e=n.data,e===s0&&o0?null:e;default:return null}}function eM(e,n){if(xs)return e==="compositionend"||!Mf&&l0(e,n)?(e=t0(),jl=vf=Za=null,xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return r0&&n.locale!=="ko"?null:n.data;default:return null}}var nM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function u0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nM[e.type]:n==="textarea"}function f0(e,n,a,o){_s?ys?ys.push(o):ys=[o]:_s=o,n=$c(n,"onChange"),0<n.length&&(a=new Ql("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Po=null,Io=null;function iM(e){Jv(e,0)}function $l(e){var n=yn(e);if(Ym(n))return e}function h0(e,n){if(e==="change")return n}var d0=!1;if(ba){var Ef;if(ba){var Tf="oninput"in document;if(!Tf){var p0=document.createElement("div");p0.setAttribute("oninput","return;"),Tf=typeof p0.oninput=="function"}Ef=Tf}else Ef=!1;d0=Ef&&(!document.documentMode||9<document.documentMode)}function m0(){Po&&(Po.detachEvent("onpropertychange",g0),Io=Po=null)}function g0(e){if(e.propertyName==="value"&&$l(Io)){var n=[];f0(n,Io,e,pf(e)),$m(iM,n)}}function aM(e,n,a){e==="focusin"?(m0(),Po=n,Io=a,Po.attachEvent("onpropertychange",g0)):e==="focusout"&&m0()}function rM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(Io)}function sM(e,n){if(e==="click")return $l(n)}function oM(e,n){if(e==="input"||e==="change")return $l(n)}function lM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var xi=typeof Object.is=="function"?Object.is:lM;function Fo(e,n){if(xi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!xi(e[u],n[u]))return!1}return!0}function bf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function v0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _0(e,n){var a=v0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=v0(a)}}function y0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?y0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function x0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bf(e.document)}return n}function Af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var cM=ba&&"documentMode"in document&&11>=document.documentMode,Ss=null,Rf=null,Bo=null,wf=!1;function S0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wf||Ss==null||Ss!==bf(o)||(o=Ss,"selectionStart"in o&&Af(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Bo&&Fo(Bo,o)||(Bo=o,o=$c(Rf,"onSelect"),0<o.length&&(n=new Ql("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ss)))}function Pr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ms={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},Cf={},M0={};ba&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ir(e){if(Cf[e])return Cf[e];if(!Ms[e])return e;var n=Ms[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in M0)return Cf[e]=n[a];return e}var E0=Ir("animationend"),T0=Ir("animationiteration"),b0=Ir("animationstart"),uM=Ir("transitionrun"),fM=Ir("transitionstart"),hM=Ir("transitioncancel"),A0=Ir("transitionend"),R0=new Map,Df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Df.push("scrollEnd");function Xi(e,n){R0.set(e,n),fn(n,[e])}var dM=0;function Aa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ji.identifierPrefix;var a=dM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function w0(e){if(e==null||typeof e=="string")return e;var n=null,a=Gs;if(a!==null)for(var o=0;o<a.length;o++){var u=e[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Ra(e,n){return e=w0(e),n=w0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var tc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Li=[],Es=0,Uf=0;function ec(){for(var e=Es,n=Uf=Es=0;n<e;){var a=Li[n];Li[n++]=null;var o=Li[n];Li[n++]=null;var u=Li[n];Li[n++]=null;var f=Li[n];if(Li[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&C0(a,u,f)}}function nc(e,n,a,o){Li[Es++]=e,Li[Es++]=n,Li[Es++]=a,Li[Es++]=o,Uf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nf(e,n,a,o){return nc(e,n,a,o),ic(e)}function Fr(e,n){return nc(e,null,null,n),ic(e)}function C0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-En(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ic(e){if(50<ol)throw ol=0,Yc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ts={};function pM(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,n,a,o){return new pM(e,n,a,o)}function Lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wa(e,n){var a=e.alternate;return a===null?(a=fi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function D0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ac(e,n,a,o,u,f){var y=0;if(o=e,typeof o=="function")Lf(o)&&(y=1);else if(typeof o=="string")y=GE(e,a,xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Ot:return e=fi(31,a,n,u),e.elementType=Ot,e.lanes=f,e;case P:return Br(a.children,u,f,n);case it:y=8,u|=24;break;case ft:return e=fi(12,a,n,u|2),e.elementType=ft,e.lanes=f,e;case et:return e=fi(13,a,n,u),e.elementType=et,e.lanes=f,e;case Z:return e=fi(19,a,n,u),e.elementType=Z,e.lanes=f,e;case te:case C:return e=u|32,e=fi(30,a,n,e),e.elementType=C,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case st:y=10;break t;case Tt:y=9;break t;case W:y=11;break t;case Et:y=14;break t;case wt:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=fi(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Br(e,n,a,o){return e=fi(7,e,o,n),e.lanes=a,e}function Of(e,n,a){return e=fi(6,e,null,n),e.lanes=a,e}function U0(e){var n=fi(18,null,null,0);return n.stateNode=e,n}function zf(e,n,a){return n=fi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var N0=new WeakMap;function Oi(e,n){if(typeof e=="object"&&e!==null){var a=N0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Bt(n)},N0.set(e,n),n)}return{value:e,source:n,stack:Bt(n)}}var bs=[],As=0,rc=null,Ho=0,zi=[],Pi=0,Qa=null,ca=1,ua="";function Ca(e,n){bs[As++]=Ho,bs[As++]=rc,rc=e,Ho=n}function L0(e,n,a){zi[Pi++]=ca,zi[Pi++]=ua,zi[Pi++]=Qa,Qa=e;var o=ca;e=ua;var u=32-En(o)-1;o&=~(1<<u),a+=1;var f=32-En(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ca=1<<32-En(n)+u|a<<u|o,ua=f+e}else ca=1<<f|a<<u|o,ua=e}function sc(e){e.return!==null&&(Ca(e,1),L0(e,1,0))}function Pf(e){for(;e===rc;)rc=bs[--As],bs[As]=null,Ho=bs[--As],bs[As]=null;for(;e===Qa;)Qa=zi[--Pi],zi[Pi]=null,ua=zi[--Pi],zi[Pi]=null,ca=zi[--Pi],zi[Pi]=null}function O0(e,n){zi[Pi++]=ca,zi[Pi++]=ua,zi[Pi++]=Qa,ca=n.id,ua=n.overflow,Qa=e}var Fn=null,ln=null,De=!1,Ja=null,Ii=!1,If=Error(r(519));function $a(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Oi(n,e)),If}function z0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[It]=e,n[Yt]=o,a){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(a=0;a<cl.length;a++)Ie(cl[a],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Ie("invalid",n),Wm(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ie("invalid",n);break;case"textarea":Ie("invalid",n),Zm(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||n_(n.textContent,a)?(o.popover!=null&&(Ie("beforetoggle",n),Ie("toggle",n)),o.onScroll!=null&&Ie("scroll",n),o.onScrollEnd!=null&&Ie("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||$a(e,!0)}function oc(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Fn=Fn.return}}function Rs(e){if(e!==Fn)return!1;if(!De)return oc(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dd(e.type,e.memoizedProps)),a=!a),a&&ln&&$a(e),oc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ln=S_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ln=S_(e)}else n===27?(n=ln,mr(e.type)?(e=Md,Md=null,ln=e):ln=n):ln=Fn?Bi(e.stateNode.nextSibling):null;return!0}function Hr(){ln=Fn=null,De=!1}function Ff(){var e=Ja;return e!==null&&(pi===null?pi=e:pi.push.apply(pi,e),Ja=null),e}function Vo(e){Ja===null?Ja=[e]:Ja.push(e)}var Bf=J(null),Vr=null,Da=null;function tr(e,n,a){ht(Bf,n._currentValue),n._currentValue=a}function Ua(e){e._currentValue=Bf.current,Q(Bf)}function lc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Hf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),lc(f.return,a,e),o||(y=null);break t}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),lc(y,a,e),y=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),lc(u.return,a,e),y=u.child,y=y!==null?y.sibling:null):y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Gr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;xi(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===$t.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Js):e=[Js])}u=u.return}return e!==null&&Hf(n,e,a,o),n.flags|=262144,e!==null}function cc(e){for(e=e.firstContext;e!==null;){if(!xi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kr(e){Vr=e,Da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Gn(e){return P0(Vr,e)}function uc(e,n){return Vr===null&&kr(e),P0(e,n)}function P0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Da===null){if(e===null)throw Error(r(308));Da=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Da=Da.next=n;return a}var mM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gM=s.unstable_scheduleCallback,vM=s.unstable_NormalPriority,An={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vf(){return{controller:new mM,data:new Map,refCount:0}}function Go(e){e.refCount--,e.refCount===0&&gM(vM,function(){e.controller.abort()})}function I0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var ko=null;function _M(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Xo=null,Gf=0,Xr=0,ws=null;function yM(e,n){if(Xo===null){var a=Xo=[];Gf=0,Xr=ad(),ws={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gf++,n.then(F0,F0),n}function F0(){if(--Gf===0&&(ko=null,Xo!==null)){ws!==null&&(ws.status="fulfilled");var e=Xo;Xo=null,Xr=0,ws=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xM(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var B0=St.S;St.S=function(e,n){if(Uv=Y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yM(e,n),ko!==null)for(var a=Ys;a!==null;)I0(a,ko),a=a.next;if(a=e.types,a!==null){for(var o=Ys;o!==null;)I0(o,a),o=o.next;if(Xr!==0){o=ko,o===null&&(o=ko=[]);for(var u=0;u<a.length;u++){var f=a[u];o.indexOf(f)===-1&&o.push(f)}}}B0!==null&&B0(e,n)};var qr=J(null);function kf(){var e=qr.current;return e!==null?e:rn.pooledCache}function fc(e,n){n===null?ht(qr,qr.current):ht(qr,n.pool)}function H0(){var e=kf();return e===null?null:{parent:An._currentValue,pool:e}}var Cs=Error(r(460)),Xf=Error(r(474)),hc=Error(r(542)),dc={then:function(){}};function V0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function G0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,X0(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(la,la);else{if(e=rn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,X0(e),e}throw Wr=n,Cs}}function Yr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wr=a,Cs):a}}var Wr=null;function k0(){if(Wr===null)throw Error(r(459));var e=Wr;return Wr=null,e}function X0(e){if(e===Cs||e===hc)throw Error(r(483))}var Ds=null,qo=0;function pc(e){var n=qo;return qo+=1,Ds===null&&(Ds=[]),G0(Ds,e,n)}function er(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function mc(e,n){throw n.$$typeof===B?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function q0(e){function n(at,j){if(e){var ut=at.deletions;ut===null?(at.deletions=[j],at.flags|=16):ut.push(j)}}function a(at,j){if(!e)return null;for(;j!==null;)n(at,j),j=j.sibling;return null}function o(at){for(var j=new Map;at!==null;)at.key===null?j.set(at.index,at):j.set(at.key,at),at=at.sibling;return j}function u(at,j){return at=wa(at,j),at.index=0,at.sibling=null,at}function f(at,j,ut){return at.index=ut,e?(ut=at.alternate,ut!==null?(ut=ut.index,ut<j?(at.flags|=2,j):ut):(at.flags|=134217730,j)):(at.flags|=1048576,j)}function y(at){return e&&at.alternate===null&&(at.flags|=134217730),at}function R(at,j,ut,Ut){return j===null||j.tag!==6?(j=Of(ut,at.mode,Ut),j.return=at,j):(j=u(j,ut),j.return=at,j)}function G(at,j,ut,Ut){var he=ut.type;return he===P?(at=vt(at,j,ut.props.children,Ut,ut.key),er(at,ut),at):j!==null&&(j.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===wt&&Yr(he)===j.type)?(j=u(j,ut.props),er(j,ut),j.return=at,j):(j=ac(ut.type,ut.key,ut.props,null,at.mode,Ut),er(j,ut),j.return=at,j)}function rt(at,j,ut,Ut){return j===null||j.tag!==4||j.stateNode.containerInfo!==ut.containerInfo||j.stateNode.implementation!==ut.implementation?(j=zf(ut,at.mode,Ut),j.return=at,j):(j=u(j,ut.children||[]),j.return=at,j)}function vt(at,j,ut,Ut,he){return j===null||j.tag!==7?(j=Br(ut,at.mode,Ut,he),j.return=at,j):(j=u(j,ut),j.return=at,j)}function Lt(at,j,ut){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Of(""+j,at.mode,ut),j.return=at,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return ut=ac(j.type,j.key,j.props,null,at.mode,ut),er(ut,j),ut.return=at,ut;case T:return j=zf(j,at.mode,ut),j.return=at,j;case wt:return j=Yr(j),Lt(at,j,ut)}if(bt(j)||q(j))return j=Br(j,at.mode,ut,null),j.return=at,j;if(typeof j.then=="function")return Lt(at,pc(j),ut);if(j.$$typeof===st)return Lt(at,uc(at,j),ut);mc(at,j)}return null}function $(at,j,ut,Ut){var he=j!==null?j.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return he!==null?null:R(at,j,""+ut,Ut);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case L:return ut.key===he?G(at,j,ut,Ut):null;case T:return ut.key===he?rt(at,j,ut,Ut):null;case wt:return ut=Yr(ut),$(at,j,ut,Ut)}if(bt(ut)||q(ut))return he!==null?null:vt(at,j,ut,Ut,null);if(typeof ut.then=="function")return $(at,j,pc(ut),Ut);if(ut.$$typeof===st)return $(at,j,uc(at,ut),Ut);mc(at,ut)}return null}function dt(at,j,ut,Ut,he){if(typeof Ut=="string"&&Ut!==""||typeof Ut=="number"||typeof Ut=="bigint")return at=at.get(ut)||null,R(j,at,""+Ut,he);if(typeof Ut=="object"&&Ut!==null){switch(Ut.$$typeof){case L:return at=at.get(Ut.key===null?ut:Ut.key)||null,G(j,at,Ut,he);case T:return at=at.get(Ut.key===null?ut:Ut.key)||null,rt(j,at,Ut,he);case wt:return Ut=Yr(Ut),dt(at,j,ut,Ut,he)}if(bt(Ut)||q(Ut))return at=at.get(ut)||null,vt(j,at,Ut,he,null);if(typeof Ut.then=="function")return dt(at,j,ut,pc(Ut),he);if(Ut.$$typeof===st)return dt(at,j,ut,uc(j,Ut),he);mc(j,Ut)}return null}function re(at,j,ut,Ut){for(var he=null,Ge=null,_e=j,xe=j=0,Cn=null;_e!==null&&xe<ut.length;xe++){_e.index>xe?(Cn=_e,_e=null):Cn=_e.sibling;var qe=$(at,_e,ut[xe],Ut);if(qe===null){_e===null&&(_e=Cn);break}e&&_e&&qe.alternate===null&&n(at,_e),j=f(qe,j,xe),Ge===null?he=qe:Ge.sibling=qe,Ge=qe,_e=Cn}if(xe===ut.length)return a(at,_e),De&&Ca(at,xe),he;if(_e===null){for(;xe<ut.length;xe++)_e=Lt(at,ut[xe],Ut),_e!==null&&(j=f(_e,j,xe),Ge===null?he=_e:Ge.sibling=_e,Ge=_e);return De&&Ca(at,xe),he}for(_e=o(_e);xe<ut.length;xe++)Cn=dt(_e,at,xe,ut[xe],Ut),Cn!==null&&(e&&(qe=Cn.alternate,qe!==null&&_e.delete(qe.key===null?xe:qe.key)),j=f(Cn,j,xe),Ge===null?he=Cn:Ge.sibling=Cn,Ge=Cn);return e&&_e.forEach(function(xr){return n(at,xr)}),De&&Ca(at,xe),he}function ge(at,j,ut,Ut){if(ut==null)throw Error(r(151));for(var he=null,Ge=null,_e=j,xe=j=0,Cn=null,qe=ut.next();_e!==null&&!qe.done;xe++,qe=ut.next()){_e.index>xe?(Cn=_e,_e=null):Cn=_e.sibling;var xr=$(at,_e,qe.value,Ut);if(xr===null){_e===null&&(_e=Cn);break}e&&_e&&xr.alternate===null&&n(at,_e),j=f(xr,j,xe),Ge===null?he=xr:Ge.sibling=xr,Ge=xr,_e=Cn}if(qe.done)return a(at,_e),De&&Ca(at,xe),he;if(_e===null){for(;!qe.done;xe++,qe=ut.next())qe=Lt(at,qe.value,Ut),qe!==null&&(j=f(qe,j,xe),Ge===null?he=qe:Ge.sibling=qe,Ge=qe);return De&&Ca(at,xe),he}for(_e=o(_e);!qe.done;xe++,qe=ut.next())qe=dt(_e,at,xe,qe.value,Ut),qe!==null&&(e&&(Cn=qe.alternate,Cn!==null&&_e.delete(Cn.key===null?xe:Cn.key)),j=f(qe,j,xe),Ge===null?he=qe:Ge.sibling=qe,Ge=qe);return e&&_e.forEach(function(t1){return n(at,t1)}),De&&Ca(at,xe),he}function Ae(at,j,ut,Ut){if(typeof ut=="object"&&ut!==null&&ut.type===P&&ut.key===null&&ut.props.ref===void 0&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case L:t:{for(var he=ut.key;j!==null;){if(j.key===he){if(he=ut.type,he===P){if(j.tag===7){a(at,j.sibling),Ut=u(j,ut.props.children),er(Ut,ut),Ut.return=at,at=Ut;break t}}else if(j.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===wt&&Yr(he)===j.type){a(at,j.sibling),Ut=u(j,ut.props),er(Ut,ut),Ut.return=at,at=Ut;break t}a(at,j);break}else n(at,j);j=j.sibling}ut.type===P?(Ut=Br(ut.props.children,at.mode,Ut,ut.key),er(Ut,ut),Ut.return=at,at=Ut):(Ut=ac(ut.type,ut.key,ut.props,null,at.mode,Ut),er(Ut,ut),Ut.return=at,at=Ut)}return y(at);case T:t:{for(he=ut.key;j!==null;){if(j.key===he)if(j.tag===4&&j.stateNode.containerInfo===ut.containerInfo&&j.stateNode.implementation===ut.implementation){a(at,j.sibling),Ut=u(j,ut.children||[]),Ut.return=at,at=Ut;break t}else{a(at,j);break}else n(at,j);j=j.sibling}Ut=zf(ut,at.mode,Ut),Ut.return=at,at=Ut}return y(at);case wt:return ut=Yr(ut),Ae(at,j,ut,Ut)}if(bt(ut))return re(at,j,ut,Ut);if(q(ut)){if(he=q(ut),typeof he!="function")throw Error(r(150));return ut=he.call(ut),ge(at,j,ut,Ut)}if(typeof ut.then=="function")return Ae(at,j,pc(ut),Ut);if(ut.$$typeof===st)return Ae(at,j,uc(at,ut),Ut);mc(at,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint"?(ut=""+ut,j!==null&&j.tag===6?(a(at,j.sibling),Ut=u(j,ut),Ut.return=at,at=Ut):(a(at,j),Ut=Of(ut,at.mode,Ut),Ut.return=at,at=Ut),y(at)):a(at,j)}return function(at,j,ut,Ut){try{qo=0;var he=Ae(at,j,ut,Ut);return Ds=null,he}catch(_e){if(_e===Cs||_e===hc)throw _e;var Ge=fi(29,_e,null,at.mode);return Ge.lanes=Ut,Ge.return=at,Ge}finally{}}}var jr=q0(!0),Y0=q0(!1),nr=!1;function qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ir(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ar(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ke&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ic(e),C0(e,null,a),n}return nc(e,o,n,a),ic(e)}function Yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nt(e,a)}}function Wf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var jf=!1;function Wo(){if(jf){var e=ws;if(e!==null)throw e}}function jo(e,n,a,o){jf=!1;var u=e.updateQueue;nr=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,rt=G.next;G.next=null,y===null?f=rt:y.next=rt,y=G;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,R=vt.lastBaseUpdate,R!==y&&(R===null?vt.firstBaseUpdate=rt:R.next=rt,vt.lastBaseUpdate=G))}if(f!==null){var Lt=u.baseState;y=0,vt=rt=G=null,R=f;do{var $=R.lane&-536870913,dt=$!==R.lane;if(dt?(Ve&$)===$:(o&$)===$){$!==0&&$===Xr&&(jf=!0),vt!==null&&(vt=vt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var re=e,ge=R;$=n;var Ae=a;switch(ge.tag){case 1:if(re=ge.payload,typeof re=="function"){Lt=re.call(Ae,Lt,$);break t}Lt=re;break t;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ge.payload,$=typeof re=="function"?re.call(Ae,Lt,$):re,$==null)break t;Lt=I({},Lt,$);break t;case 2:nr=!0}}$=R.callback,$!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[$]:dt.push($))}else dt={lane:$,tag:R.tag,payload:R.payload,callback:R.callback,next:null},vt===null?(rt=vt=dt,G=Lt):vt=vt.next=dt,y|=$;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;dt=R,R=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);vt===null&&(G=Lt),u.baseState=G,u.firstBaseUpdate=rt,u.lastBaseUpdate=vt,f===null&&(u.shared.lanes=0),fr|=y,e.lanes=y,e.memoizedState=Lt}}function W0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function j0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)W0(a[e],n)}var rr=J(null),gc=J(0);function Z0(e,n){e=Pa,ht(gc,e),ht(rr,n),Pa=e|n.baseLanes}function Zf(){ht(gc,Pa),ht(rr,rr.current)}function Kf(){Pa=gc.current,Q(rr),Q(gc)}var kn=J(null),Zn=null;function sr(e){var n=e.alternate;ht(Xn,Xn.current&1),ht(kn,e),Zn===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(Zn=e)}function Qf(e){ht(Xn,Xn.current),ht(kn,e),Zn===null&&(Zn=e)}function K0(e){e.tag===22?(ht(Xn,Xn.current),ht(kn,e),Zn===null&&(Zn=e)):or()}function or(){ht(Xn,Xn.current),ht(kn,kn.current)}function Si(e){Q(kn),Zn===e&&(Zn=null),Q(Xn)}var Xn=J(0);function Zo(e,n){ht(kn,kn.current),ht(Xn,n)}function Jf(e){Q(Xn),Q(kn),Zn===e&&(Zn=null)}function vc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||xd(a)||Sd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Na=0,be=null,nn=null,Rn=null,_c=!1,Us=!1,Zr=!1,yc=0,Ko=0,Ns=null,SM=0;function xn(){throw Error(r(321))}function $f(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!xi(e[a],n[a]))return!1;return!0}function th(e,n,a,o,u,f){return Na=f,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,St.H=e===null||e.memoizedState===null?Lg:Og,Zr=!1,f=a(o,u),Zr=!1,Us&&(f=J0(n,a,o,u)),Q0(e),f}function Q0(e){St.H=Ac;var n=nn!==null&&nn.next!==null;if(Na=0,Rn=nn=be=null,_c=!1,Ko=0,Ns=null,n)throw Error(r(300));e===null||wn||(e=e.dependencies,e!==null&&cc(e)&&(wn=!0))}function J0(e,n,a,o){be=e;var u=0;do{if(Us&&(Ns=null),Ko=0,Us=!1,25<=u)throw Error(r(301));if(u+=1,Rn=nn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}St.H=CM,f=n(a,o)}while(Us);return f}function MM(){var e=St.H,n=e.useState()[0];return n=typeof n.then=="function"?Qo(n):n,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(be.flags|=1024),n}function eh(){var e=yc!==0;return yc=0,e}function nh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ih(e){if(_c){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_c=!1}Na=0,Rn=nn=be=null,Us=!1,Ko=yc=0,Ns=null}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?be.memoizedState=Rn=e:Rn=Rn.next=e,Rn}function Tn(){if(nn===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=Rn===null?be.memoizedState:Rn.next;if(n!==null)Rn=n,nn=e;else{if(e===null)throw be.alternate===null?Error(r(467)):Error(r(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},Rn===null?be.memoizedState=Rn=e:Rn=Rn.next=e}return Rn}function xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var n=Ko;return Ko+=1,Ns===null&&(Ns=[]),e=G0(Ns,e,n),n=be,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,St.H=n===null||n.memoizedState===null?Lg:Og),e}function Sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===A)return;if(e.$$typeof===st)return Gn(e)}throw Error(r(438,String(e)))}function ah(e){var n=null,a=be.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xc(),be.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ne;return n.index++,a}function La(e,n){return typeof n=="function"?n(e):n}function Mc(e){var n=Tn();return rh(n,nn,e)}function rh(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=y=null,G=null,rt=n,vt=!1;do{var Lt=rt.lane&-536870913;if(Lt!==rt.lane?(Ve&Lt)===Lt:(Na&Lt)===Lt){var $=rt.revertLane;if($===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),Lt===Xr&&(vt=!0);else if((Na&$)===$){rt=rt.next,$===Xr&&(vt=!0);continue}else Lt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(R=G=Lt,y=f):G=G.next=Lt,be.lanes|=$,fr|=$;Lt=rt.action,Zr&&a(f,Lt),f=rt.hasEagerState?rt.eagerState:a(f,Lt)}else $={lane:Lt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(R=G=$,y=f):G=G.next=$,be.lanes|=Lt,fr|=Lt;rt=rt.next}while(rt!==null&&rt!==n);if(G===null?y=f:G.next=R,!xi(f,e.memoizedState)&&(wn=!0,vt&&(a=ws,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sh(e){var n=Tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);xi(f,n.memoizedState)||(wn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function $0(e,n,a){var o=be,u=Tn(),f=De;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!xi((nn||u).memoizedState,a);if(y&&(u.memoizedState=a,wn=!0),u=u.queue,ch(ng.bind(null,o,u,e),[e]),e=u.getSnapshot!==n||y||Rn!==null&&(Rn.memoizedState.tag&1)!==0,Ls(e?9:8,{destroy:void 0},eg.bind(null,o,u,a,n),null),e){if(o.flags|=2048,rn===null)throw Error(r(349));f||(Na&127)!==0||tg(o,n,a)}return a}function tg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=be.updateQueue,n===null?(n=xc(),be.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function eg(e,n,a,o){n.value=a,n.getSnapshot=o,ig(n)&&ag(e)}function ng(e,n,a){return a(function(){ig(n)&&ag(e)})}function ig(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!xi(e,a)}catch{return!0}}function ag(e){var n=Fr(e,2);n!==null&&mi(n,e,2)}function oh(e){var n=ii();if(typeof e=="function"){var a=e;if(e=a(),Zr){sn(!0);try{a()}finally{sn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},n}function rg(e,n,a,o){return e.baseState=a,rh(e,nn,typeof o=="function"?o:La)}function EM(e,n,a,o,u){if(bc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};St.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,sg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=St.T,y={};y.types=f!==null?f.types:null,St.T=y;try{var R=a(u,o),G=St.S;G!==null&&G(y,R),og(e,n,R)}catch(rt){lh(e,n,rt)}finally{f!==null&&y.types!==null&&(f.types=y.types),St.T=f}}else try{f=a(u,o),og(e,n,f)}catch(rt){lh(e,n,rt)}}function og(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){lg(e,n,o)},function(o){return lh(e,n,o)}):lg(e,n,a)}function lg(e,n,a){n.status="fulfilled",n.value=a,cg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,sg(e,a)))}function lh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cg(n),n=n.next;while(n!==o)}e.action=null}function cg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ug(e,n){return n}function fg(e,n){if(De){var a=rn.formState;if(a!==null){t:{var o=be;if(De){if(ln){e:{for(var u=ln,f=Ii;u.nodeType!==8;){if(!f){u=null;break e}if(u=Bi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ln=Bi(u.nextSibling),o=u.data==="F!";break t}}$a(o)}o=!1}o&&(n=a[0])}}return a=ii(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ug,lastRenderedState:n},a.queue=o,a=Dg.bind(null,be,o),o.dispatch=a,o=oh(!1),f=ph.bind(null,be,!1,o.queue),o=ii(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=EM.bind(null,be,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function hg(e){var n=Tn();return dg(n,nn,e)}function dg(e,n,a){if(n=rh(e,n,ug)[0],e=Mc(La)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Qo(n)}catch(y){throw y===Cs?hc:y}else o=n;n=Tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(be.flags|=2048,Ls(9,{destroy:void 0},TM.bind(null,u,a),null)),[o,f,e]}function TM(e,n){e.action=n}function pg(e){var n=Tn(),a=nn;if(a!==null)return dg(n,a,e);Tn(),n=n.memoizedState,a=Tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ls(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=be.updateQueue,n===null&&(n=xc(),be.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function mg(){return Tn().memoizedState}function Ec(e,n,a,o){var u=ii();be.flags|=e,u.memoizedState=Ls(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tc(e,n,a,o){var u=Tn();o=o===void 0?null:o;var f=u.memoizedState.inst;nn!==null&&o!==null&&$f(o,nn.memoizedState.deps)?u.memoizedState=Ls(n,f,a,o):(be.flags|=e,u.memoizedState=Ls(1|n,f,a,o))}function gg(e,n){Ec(8390656,8,e,n)}function ch(e,n){Tc(2048,8,e,n)}function bM(e){be.flags|=4;var n=be.updateQueue;if(n===null)n=xc(),be.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=Tn().memoizedState;return bM({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function _g(e,n){return Tc(4,2,e,n)}function yg(e,n){return Tc(4,4,e,n)}function xg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sg(e,n,a){a=a!=null?a.concat([e]):null,Tc(4,4,xg.bind(null,n,e),a)}function uh(){}function Mg(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&$f(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Eg(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&$f(n,o[1]))return o[0];if(o=e(),Zr){sn(!0);try{e()}finally{sn(!1)}}return a.memoizedState=[o,n],o}function fh(e,n,a){return a===void 0||(Na&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Lv(),be.lanes|=e,fr|=e,a)}function Tg(e,n,a,o){return xi(a,n)?a:rr.current!==null?(e=fh(e,a,o),xi(e,n)||(wn=!0),e):(Na&106)===0||(Na&1073741824)!==0&&(Ve&261930)===0?(wn=!0,e.memoizedState=a):(e=Lv(),be.lanes|=e,fr|=e,n)}function bg(e,n,a,o,u){var f=zt.p;zt.p=f!==0&&8>f?f:8;var y=St.T,R={};R.types=y!==null?y.types:null,St.T=R,ph(e,!1,n,a);try{var G=u(),rt=St.S;if(rt!==null&&rt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var vt=xM(G,o);Jo(e,n,vt,bi(e))}else Jo(e,n,o,bi(e))}catch(Lt){Jo(e,n,{then:function(){},status:"rejected",reason:Lt},bi())}finally{zt.p=f,y!==null&&R.types!==null&&(y.types=R.types),St.T=y}}function AM(){}function hh(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Ag(e).queue;bg(e,u,n,O,a===null?AM:function(){return Rg(e),a(o)})}function Ag(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:O},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rg(e){var n=Ag(e);n.next===null&&(n=e.alternate.memoizedState),Jo(e,n.next.queue,{},bi())}function dh(){return Gn(Js)}function wg(){return Tn().memoizedState}function Cg(){return Tn().memoizedState}function RM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=bi();e=ir(a);var o=ar(n,e,a);o!==null&&(mi(o,n,a),Yo(o,n,a)),n={cache:Vf()},e.payload=n;return}n=n.return}}function wM(e,n,a){var o=bi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bc(e)?Ug(n,a):(a=Nf(e,n,a,o),a!==null&&(mi(a,e,o),Ng(a,n,o)))}function Dg(e,n,a){var o=bi();Jo(e,n,a,o)}function Jo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bc(e))Ug(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,xi(R,y))return nc(e,n,u,0),rn===null&&ec(),!1}catch{}finally{}if(a=Nf(e,n,u,o),a!==null)return mi(a,e,o),Ng(a,n,o),!0}return!1}function ph(e,n,a,o){if(o={lane:2,revertLane:ad(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bc(e)){if(n)throw Error(r(479))}else n=Nf(e,a,o,2),n!==null&&mi(n,e,2)}function bc(e){var n=e.alternate;return e===be||n!==null&&n===be}function Ug(e,n){Us=_c=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nt(e,a)}}var Ac={readContext:Gn,use:Sc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn,useEffectEvent:xn},Lg={readContext:Gn,use:Sc,useCallback:function(e,n){return ii().memoizedState=[e,n===void 0?null:n],e},useContext:Gn,useEffect:gg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ec(4194308,4,xg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ec(4194308,4,e,n)},useInsertionEffect:function(e,n){Ec(4,2,e,n)},useMemo:function(e,n){var a=ii();n=n===void 0?null:n;var o=e();if(Zr){sn(!0);try{e()}finally{sn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ii();if(a!==void 0){var u=a(n);if(Zr){sn(!0);try{a(n)}finally{sn(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=wM.bind(null,be,e),[o.memoizedState,e]},useRef:function(e){var n=ii();return e={current:e},n.memoizedState=e},useState:function(e){e=oh(e);var n=e.queue,a=Dg.bind(null,be,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uh,useDeferredValue:function(e,n){var a=ii();return fh(a,e,n)},useTransition:function(){var e=oh(!1);return e=bg.bind(null,be,e.queue,!0,!1),ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=be,u=ii();if(De){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),rn===null)throw Error(r(349));(Ve&127)!==0||tg(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gg(ng.bind(null,o,f,e),[e]),o.flags|=2048,Ls(9,{destroy:void 0},eg.bind(null,o,f,a,n),null),a},useId:function(){var e=ii(),n=rn.identifierPrefix;if(De){var a=ua,o=ca;a=(o&~(1<<32-En(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=SM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:dh,useFormState:fg,useActionState:fg,useOptimistic:function(e){var n=ii();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ph.bind(null,be,!0,a),a.dispatch=n,[e,n]},useMemoCache:ah,useCacheRefresh:function(){return ii().memoizedState=RM.bind(null,be)},useEffectEvent:function(e){var n=ii(),a={impl:e};return n.memoizedState=a,function(){if((Ke&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Og={readContext:Gn,use:Sc,useCallback:Mg,useContext:Gn,useEffect:ch,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:Eg,useReducer:Mc,useRef:mg,useState:function(){return Mc(La)},useDebugValue:uh,useDeferredValue:function(e,n){var a=Tn();return Tg(a,nn.memoizedState,e,n)},useTransition:function(){var e=Mc(La)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:$0,useId:wg,useHostTransitionStatus:dh,useFormState:hg,useActionState:hg,useOptimistic:function(e,n){var a=Tn();return rg(a,nn,e,n)},useMemoCache:ah,useCacheRefresh:Cg,useEffectEvent:vg},CM={readContext:Gn,use:Sc,useCallback:Mg,useContext:Gn,useEffect:ch,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:Eg,useReducer:sh,useRef:mg,useState:function(){return sh(La)},useDebugValue:uh,useDeferredValue:function(e,n){var a=Tn();return nn===null?fh(a,e,n):Tg(a,nn.memoizedState,e,n)},useTransition:function(){var e=sh(La)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:$0,useId:wg,useHostTransitionStatus:dh,useFormState:pg,useActionState:pg,useOptimistic:function(e,n){var a=Tn();return nn!==null?rg(a,nn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ah,useCacheRefresh:Cg,useEffectEvent:vg};function mh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:I({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=bi(),u=ir(o);u.payload=n,a!=null&&(u.callback=a),n=ar(e,u,o),n!==null&&(mi(n,e,o),Yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=bi(),u=ir(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ar(e,u,o),n!==null&&(mi(n,e,o),Yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=bi(),o=ir(a);o.tag=2,n!=null&&(o.callback=n),n=ar(e,o,a),n!==null&&(mi(n,e,a),Yo(n,e,a))}};function zg(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Fo(a,o)||!Fo(u,f):!0}function Pg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gh.enqueueReplaceState(n,n.state,null)}function Kr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=I({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Ig(e){tc(e)}function Fg(e){console.error(e)}function Bg(e){tc(e)}function Rc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Hg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vh(e,n,a){return a=ir(a),a.tag=3,a.payload={element:null},a.callback=function(){Rc(e,n)},a}function Vg(e){return e=ir(e),e.tag=3,e}function Gg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Hg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Hg(n,a,o),typeof u!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function DM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,u,!0),a=kn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Zn===null?jc():a.alternate===null&&Sn===0&&(Sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===dc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ed(e,o,u)),!1;case 22:return a.flags|=65536,o===dc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ed(e,o,u)),!1}throw Error(r(435,a.tag))}return ed(e,o,u),jc(),!1}if(De)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==If&&(e=Error(r(422),{cause:o}),Vo(Oi(e,a)))):(o!==If&&(n=Error(r(423),{cause:o}),Vo(Oi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Oi(o,a),u=vh(e.stateNode,o,u),Wf(e,u),Sn!==4&&(Sn=2)),!1;var f=Error(r(520),{cause:o});if(f=Oi(f,a),sl===null?sl=[f]:sl.push(f),Sn!==4&&(Sn=2),n===null)return!0;o=Oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=vh(a.stateNode,o,e),Wf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(hr===null||!hr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vg(u),Gg(u,e,a,o),Wf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var _h=Error(r(461)),wn=!1;function On(e,n,a,o){n.child=e===null?Y0(n,null,a,o):jr(n,e.child,a,o)}function kg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return kr(n),o=th(e,n,a,y,f,u),R=eh(),e!==null&&!wn?(nh(e,n,u),Oa(e,n,u)):(De&&R&&sc(n),n.flags|=1,On(e,n,o,u),n.child)}function Xg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Lf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,qg(e,n,f,o,u)):(e=ac(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ah(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(y,o)&&e.ref===n.ref)return Oa(e,n,u)}return n.flags|=1,e=wa(f,o),e.ref=n.ref,e.return=n,n.child=e}function qg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Fo(f,o)&&e.ref===n.ref)if(wn=!1,n.pendingProps=o=f,Ah(e,u))(e.flags&131072)!==0&&(wn=!0);else return n.lanes=e.lanes,Oa(e,n,u)}return yh(e,n,a,o,u)}function Yg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Wg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fc(n,f!==null?f.cachePool:null),f!==null?Z0(n,f):Zf(),K0(n);else return o=n.lanes=536870912,Wg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(fc(n,f.cachePool),Z0(n,f),or(),n.memoizedState=null):(e!==null&&fc(n,null),Zf(),or());return On(e,n,u,a),n.child}function $o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wg(e,n,a,o,u){var f=kf();return f=f===null?null:{parent:An._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&fc(n,null),Zf(),K0(n),e!==null&&Gr(e,n,o,!0),n.childLanes=u,null}function wc(e,n){return n=Cc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jg(e,n,a){return jr(n,e.child,null,a),e=wc(n,n.pendingProps),e.flags|=2,Si(n),n.memoizedState=null,e}function UM(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(De){if(o.mode==="hidden")return e=wc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},$o(null,e);if(Qf(n),(e=ln)?(e=x_(e,Ii),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=U0(e),a.return=n,n.child=a,Fn=n,ln=null)):e=null,e===null)throw $a(n);return n.lanes=536870912,null}return wc(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Qf(n),u)if(n.flags&256)n.flags&=-257,n=jg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(wn||Gr(e,n,a,!1),u=(a&e.childLanes)!==0,wn||u){if(rr.current===null){if(o=rn,o!==null&&(y=gt(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Fr(e,y),mi(o,e,y),_h;jc()}n=jg(e,n,a)}else e=f.treeContext,ln=Bi(y.nextSibling),Fn=n,De=!0,Ja=null,Ii=!1,e!==null&&O0(n,e),n=wc(n,o),n.flags|=134221824;return n}return e=wa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Os(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yh(e,n,a,o,u){return kr(n),a=th(e,n,a,o,void 0,u),o=eh(),e!==null&&!wn?(nh(e,n,u),Oa(e,n,u)):(De&&o&&sc(n),n.flags|=1,On(e,n,a,u),n.child)}function Zg(e,n,a,o,u,f){return kr(n),n.updateQueue=null,a=J0(n,o,a,u),Q0(e),o=eh(),e!==null&&!wn?(nh(e,n,f),Oa(e,n,f)):(De&&o&&sc(n),n.flags|=1,On(e,n,a,f),n.child)}function Kg(e,n,a,o,u){if(kr(n),n.stateNode===null){var f=Ts,y=a.contextType;typeof y=="object"&&y!==null&&(f=Gn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},qf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Gn(y):Ts,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(mh(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&gh.enqueueReplaceState(f,f.state,null),jo(n,o,f,u),Wo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Kr(a,R);f.props=G;var rt=f.context,vt=a.contextType;y=Ts,typeof vt=="object"&&vt!==null&&(y=Gn(vt));var Lt=a.getDerivedStateFromProps;vt=typeof Lt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||rt!==y)&&Pg(n,f,o,y),nr=!1;var $=n.memoizedState;f.state=$,jo(n,o,f,u),Wo(),rt=n.memoizedState,R||$!==rt||nr?(typeof Lt=="function"&&(mh(n,a,Lt,o),rt=n.memoizedState),(G=nr||zg(n,a,G,o,$,rt,y))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=y,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Yf(e,n),y=n.memoizedProps,vt=Kr(a,y),f.props=vt,Lt=n.pendingProps,$=f.context,rt=a.contextType,G=Ts,typeof rt=="object"&&rt!==null&&(G=Gn(rt)),R=a.getDerivedStateFromProps,(rt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Lt||$!==G)&&Pg(n,f,o,G),nr=!1,$=n.memoizedState,f.state=$,jo(n,o,f,u),Wo();var dt=n.memoizedState;y!==Lt||$!==dt||nr||e!==null&&e.dependencies!==null&&cc(e.dependencies)?(typeof R=="function"&&(mh(n,a,R,o),dt=n.memoizedState),(vt=nr||zg(n,a,vt,o,$,dt,G)||e!==null&&e.dependencies!==null&&cc(e.dependencies))?(rt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,dt,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,dt,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),f.props=o,f.state=dt,f.context=G,o=vt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Os(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=jr(n,e.child,null,u),n.child=jr(n,null,a,u)):On(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Oa(e,n,u),e}function Qg(e,n,a,o){return Hr(),n.flags|=256,On(e,n,a,o),n.child}var xh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sh(e){return{baseLanes:e,cachePool:H0()}}function Mh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ti),e}function Jg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Xn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(u?sr(n):or(),(e=ln)?(e=x_(e,Ii),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=U0(e),a.return=n,n.child=a,Fn=n,ln=null)):e=null,e===null)throw $a(n);return Sd(e)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?(or(),u=n.mode,f=Cc({mode:"hidden",children:f},u),o=Br(o,u,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=Sh(a),o.childLanes=Mh(e,y,a),n.memoizedState=xh,$o(null,o)):(sr(n),Eh(n,f))}var R=e.memoizedState;if(R!==null){var G=R.dehydrated;if(G!==null)return NM(e,n,f,y,o,G,R,a)}return u?(or(),u=o.fallback,f=n.mode,R=e.child,G=R.sibling,o=wa(R,{mode:"hidden",children:o.children}),o.subtreeFlags=R.subtreeFlags&1206910976,G!==null?u=wa(G,u):(u=Br(u,f,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,$o(null,o),o=n.child,u=e.child.memoizedState,u===null?u=Sh(a):(f=u.cachePool,f!==null?(R=An._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=H0(),u={baseLanes:u.baseLanes|a,cachePool:f}),o.memoizedState=u,o.childLanes=Mh(e,y,a),n.memoizedState=xh,$o(e.child,o)):(sr(n),a=e.child,e=a.sibling,a=wa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Eh(e,n){return n=Cc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cc(e,n){return e=fi(22,e,null,n),e.lanes=0,e}function Dc(e,n,a){return jr(n,e.child,null,a),e=Eh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function NM(e,n,a,o,u,f,y,R){if(a)return n.flags&256?(sr(n),n.flags&=-257,Dc(e,n,R)):n.memoizedState!==null?(or(),n.child=e.child,n.flags|=128,null):(or(),f=u.fallback,y=n.mode,u=Cc({mode:"visible",children:u.children},y),f=Br(f,y,R,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,jr(n,e.child,null,R),u=n.child,u.memoizedState=Sh(R),u.childLanes=Mh(e,o,R),n.memoizedState=xh,$o(null,u));if(sr(n),Sd(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var G=o.dgst;return o=G,o!==""&&(u=Error(r(419)),u.stack="",u.digest=o,Vo({value:u,source:null,stack:null})),Dc(e,n,R)}if(wn||Gr(e,n,R,!1),o=(R&e.childLanes)!==0,wn||o){if(rr.current!==null)return Dc(e,n,R);if(o=rn,o!==null&&(u=gt(o,R),u!==0&&u!==y.retryLane))throw y.retryLane=u,Fr(e,u),mi(o,e,u),_h;return xd(f)||jc(),Dc(e,n,R)}return xd(f)?(n.flags|=192,n.child=e.child,null):(e=y.treeContext,ln=Bi(f.nextSibling),Fn=n,De=!0,Ja=null,Ii=!1,e!==null&&O0(n,e),n=Eh(n,u.children),n.flags|=134221824,n)}function $g(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),lc(e.return,n,a)}function tv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&vc(a)===null&&(n=e),e=e.sibling}return n}function Uc(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Th(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function bh(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=Xn.current;if(n.flags&128)return Zo(n,y),null;var R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,Zo(n,y),u==="backwards"&&e!==null?(Th(e),On(e,n,o,a),Th(e)):On(e,n,o,a),o=De?Ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$g(e,a,n);else if(e.tag===19)$g(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=tv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Th(n)),Uc(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Uc(n,!0,a,null,f,o);break;case"together":Uc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=tv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uc(n,!1,u,a,f,o)}return n.child}function ev(e,n,a){var o=n.pendingProps;return tr(n,n.type,o.value),On(e,n,o.children,a),n.child}function Oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),fr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=wa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=wa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ah(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cc(e)))}function LM(e,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),tr(n,An,e.memoizedState.cache),Hr();break;case 27:case 5:X(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:tr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qf(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return sr(n),n.flags|=128,null;o=Gr(e,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?Jg(e,n,a):(sr(n),e=Oa(e,n,a),e!==null?e.sibling:null)}sr(n);break;case 19:if(n.flags&128)return bh(e,n,a);if(u=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Gr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return bh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Zo(n,Xn.current),o)break;return null;case 22:return n.lanes=0,Yg(e,n,a,n.pendingProps);case 24:tr(n,An,e.memoizedState.cache)}return Oa(e,n,a)}function nv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)wn=!0;else{if(!Ah(e,a)&&(n.flags&128)===0)return wn=!1,LM(e,n,a);wn=(e.flags&131072)!==0}else wn=!1,De&&(n.flags&1048576)!==0&&L0(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Yr(n.elementType),n.type=e,typeof e=="function")Lf(e)?(o=Kr(e,o),n.tag=1,n=Kg(null,n,e,o,a)):(n.tag=0,n=yh(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===W){n.tag=11,n=kg(null,n,e,o,a);break t}else if(u===Et){n.tag=14,n=Xg(null,n,e,o,a);break t}else if(u===st){n.tag=10,n.type=e,n=ev(null,n,a);break t}}throw n=At(e)||e,Error(r(306,n,""))}}return n;case 0:return yh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Kr(o,n.pendingProps),Kg(e,n,o,u,a);case 3:t:{if(N(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Yf(e,n),jo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,tr(n,An,o),o!==f.cache&&Hf(n,[An],a,!0),Wo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qg(e,n,o,a);break t}else if(o!==u){u=Oi(Error(r(424)),n),Vo(u),n=Qg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ln=Bi(e.firstChild),Fn=n,De=!0,Ja=null,Ii=!0,a=Y0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Hr(),o===u){n=Oa(e,n,a);break t}On(e,n,o,a)}n=n.child}return n;case 26:return Os(e,n),e===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(n.stateNode=s_(n.type,n.pendingProps,Jt.current,n)):n.memoizedState=R_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return X(n),e===null&&De&&(o=n.stateNode=E_(n.type,n.pendingProps,Jt.current),Fn=n,Ii=!0,u=ln,mr(n.type)?(Md=u,ln=Bi(o.firstChild)):ln=u),On(e,n,n.pendingProps.children,a),Os(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((u=o=ln)&&(o=RE(o,n.type,n.pendingProps,Ii),o!==null?(n.stateNode=o,Fn=n,ln=Bi(o.firstChild),Ii=!1,u=!0):u=!1),u||$a(n)),X(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,dd(u,f)?o=null:y!==null&&dd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=th(e,n,MM,null,null,a),Js._currentValue=u),Os(e,n),On(e,n,o,a),n.child;case 6:return e===null&&De&&((e=a=ln)&&(a=wE(a,n.pendingProps,Ii),a!==null?(n.stateNode=a,Fn=n,ln=null,e=!0):e=!1),e||$a(n)),null;case 13:return Jg(e,n,a);case 4:return N(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=jr(n,null,o,a):On(e,n,o,a),n.child;case 11:return kg(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Os(e,n),On(e,n,o,a),n.child;case 8:return On(e,n,n.pendingProps.children,a),n.child;case 12:return On(e,n,n.pendingProps.children,a),n.child;case 10:return ev(e,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,kr(n),u=Gn(u),o=o(u),n.flags|=1,On(e,n,o,a),n.child;case 14:return Xg(e,n,n.type,n.pendingProps,a);case 15:return qg(e,n,n.type,n.pendingProps,a);case 19:return bh(e,n,a);case 31:return UM(e,n,a);case 22:return Yg(e,n,a,n.pendingProps);case 24:return kr(n),o=Gn(An),e===null?(u=kf(),u===null&&(u=rn,f=Vf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},qf(n),tr(n,An,u)):((e.lanes&a)!==0&&(Yf(e,n),jo(n,null,null,a),Wo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),tr(n,An,o)):(o=f.cache,tr(n,An,o),o!==u.cache&&Hf(n,[An],a,!0))),On(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:De&&sc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Os(e,n),On(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function za(e){e.flags|=4}function Rh(e,n,a,o,u){var f;if((f=(e.mode&32)!==0)&&(f=a===null?U_(n,o):U_(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Iv())e.flags|=8192;else throw Wr=dc,Xf}else e.flags&=-16777217}function iv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!N_(n))if(Iv())e.flags|=8192;else throw Wr=dc,Xf}function Nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ze():536870912,e.lanes|=n,Bs|=n)}function tl(e,n){if(!De)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function cn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function OM(e,n,a){var o=n.pendingProps;switch(Pf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ua(An),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rs(n)?za(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ff())),cn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(za(n),f!==null?(cn(n),iv(n,f)):(cn(n),Rh(n,u,null,o,a))):f?f!==e.memoizedState?(za(n),cn(n),iv(n,f)):(cn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&za(n),cn(n),Rh(n,u,e,o,a)),null;case 27:if(pt(n),a=Jt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&za(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return cn(n),n.subtreeFlags&=-33554433,null}e=xt.current,Rs(n)?z0(n):(e=E_(u,o,a),n.stateNode=e,za(n))}return cn(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&za(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return cn(n),n.subtreeFlags&=-33554433,null}if(f=xt.current,Rs(n))z0(n);else{var y=fl(Jt.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[It]=n,f[Yt]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Yn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&za(n)}}return cn(n),n.subtreeFlags&=-33554433,Rh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&za(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Jt.current,Rs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[It]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||n_(e.nodeValue,a)),e||$a(n,!0)}else e=fl(e).createTextNode(o),e[It]=n,n.stateNode=e}return cn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Rs(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[It]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),e=!1}else a=Ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Si(n),n):(Si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return cn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Rs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[It]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),u=!1}else u=Ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Si(n),n):(Si(n),null)}return Si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Nc(n,n.updateQueue),cn(n),null);case 4:return b(),e===null&&ld(n.stateNode.containerInfo),n.flags|=67108864,cn(n),null;case 10:return Ua(n.type),cn(n),null;case 19:if(Jf(n),o=n.memoizedState,o===null)return cn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)tl(o,!1);else{if(Sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vc(e),f!==null){for(n.flags|=128,tl(o,!1),e=f.updateQueue,n.updateQueue=e,Nc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)D0(a,e),a=a.sibling;return Zo(n,Xn.current&1|2),De&&Ca(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Y()>Xc&&(n.flags|=128,u=!0,tl(o,!1),n.lanes=4194304)}else{if(!u)if(e=vc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Nc(n,e),tl(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!De)return cn(n),null}else 2*Y()-o.renderingStartTime>Xc&&a!==536870912&&(n.flags|=128,u=!0,tl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){e=o.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Y(),e.sibling=null,f=Xn.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||De?Zo(n,f):(a=f,ht(kn,n),ht(Xn,a),Zn===null&&(Zn=n)),De&&Ca(n,o.treeForkCount),e}return cn(n),null;case 22:case 23:return Si(n),Kf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),a=n.updateQueue,a!==null&&Nc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Q(qr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ua(An),cn(n),null;case 25:return null;case 30:return n.flags|=33554432,cn(n),null}throw Error(r(156,n.tag))}function zM(e,n){switch(Pf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ua(An),b(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Si(n),n.alternate===null)throw Error(r(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Jf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return Ua(n.type),null;case 22:case 23:return Si(n),Kf(),e!==null&&Q(qr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ua(An),null;case 25:return null;default:return null}}function av(e,n){switch(Pf(n),n.tag){case 3:Ua(An),b();break;case 26:case 27:case 5:pt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&Si(n);break;case 13:Si(n);break;case 19:Jf(n);break;case 10:Ua(n.type);break;case 22:case 23:Si(n),Kf(),e!==null&&Q(qr);break;case 24:Ua(An)}}function el(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){$e(n,n.return,R)}}function lr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var G=a,rt=R;try{rt()}catch(vt){$e(u,G,vt)}}}o=o.next}while(o!==f)}}catch(vt){$e(n,n.return,vt)}}function rv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{j0(n,a)}catch(o){$e(e,e.return,o)}}}function sv(e,n,a){a.props=Kr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){$e(e,n,o)}}function fa(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var u=e.stateNode,f=Aa(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=d_(f)),o=u.ref;break;case 7:if(e.stateNode===null){var y=new Ai(e);g(e.child,!1,bE,y,void 0,void 0),e.stateNode=y}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(R){$e(e,n,R)}}function qn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){$e(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){$e(e,n,u)}else a.current=null}function Lc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)y_(e.stateNode,n[a])}function ov(e){for(var n=e.return;n!==null&&(Ch(n)&&y_(e.stateNode,n.stateNode),!wh(n));)n=n.return}function nl(e){for(var n=e.return;n!==null&&(Ch(n)&&AE(e.stateNode,n.stateNode),!wh(n));)n=n.return}function wh(e){return e.tag===5||e.tag===3||e.tag===27}function Ch(e){return e&&e.tag===7&&e.stateNode!==null}function Dh(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){$e(e,e.return,u)}}function Uh(e,n,a){try{var o=e.stateNode;oE(o,e.type,a,n),o[Yt]=n}catch(u){$e(e,e.return,u)}}function lv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mr(e.type)||e.tag===4}function Nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lh(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la)),Lc(e,o),He=!0;else if(u!==4&&(u===27&&(Lc(e,o),o=null,mr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Lh(e,n,a,o),e=e.sibling;e!==null;)Lh(e,n,a,o),e=e.sibling}function Oc(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Lc(e,o),He=!0;else if(u!==4&&(u===27&&(Lc(e,o),o=null,mr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Oc(e,n,a,o),e=e.sibling;e!==null;)Oc(e,n,a,o),e=e.sibling}function cv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Yn(n,o,a),n[It]=e,n[Yt]=a}catch(f){$e(e,e.return,f)}}var zc=!1,Mi=null;function uv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(zc=!0)}var ha=null;function fv(){var e=ha;return ha=null,e}var hi=0;function zs(e,n,a,o,u){return hi=0,hv(e.child,n,a,o,u)}function hv(e,n,a,o,u){for(var f=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(o!==null){var R=gd(y);o.push(R),R.view&&(f=!0)}else f||gd(y).view&&(f=!0);zc=!0,f_(y,hi===0?n:n+"_"+hi,a),hi++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||hv(e.child,n,a,o,u)&&(f=!0));e=e.sibling}return f}function da(e,n){for(;e!==null;)e.tag===5?h_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||da(e.child,n)),e=e.sibling}function Pc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Pc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Ra(n.default,n.share),n!=="none"&&(zs(e,a,n,null,!1)||da(e.child,!1))}e=e.sibling}}function Oh(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,u=Aa(o,a),f=Ra(o.default,a.paired?o.share:o.enter);f!=="none"?zs(e,u,f,null,!1)?(Pc(e),a.paired||n||ks(e,o.onEnter)):da(e.child,!1):Pc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Oh(e,n),e=e.sibling;else Pc(e)}function zh(e){if(Mi!==null&&Mi.size!==0){var n=Mi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=Ra(a.default,a.share);if(f!=="none"&&(zs(e,o,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,ks(e,a.onShare)):da(e.child,!1)),n.delete(o),n.size===0)break}}}zh(e)}e=e.sibling}}}function Ph(e){if(e.tag===30){var n=e.memoizedProps,a=Aa(n,e.stateNode),o=Mi!==null?Mi.get(a):void 0,u=Ra(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(zs(e,a,u,null,!1)?o!==void 0?(u=e.stateNode,o.paired=u,u.paired=o,Mi.delete(a),ks(e,n.onShare)):ks(e,n.onExit):da(e.child,!1)),Mi!==null&&zh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ph(e),e=e.sibling;else Mi!==null&&zh(e)}function dv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Aa(n,e.stateNode);n=Ra(n.default,n.update),e.flags&=-5,n!=="none"&&zs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&dv(e);e=e.sibling}}function Ih(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,da(e.child,!1))}Ih(e)}e=e.sibling}}function Ic(e){if(e.tag===30)e.stateNode.paired=null,da(e.child,!1),Ih(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ic(e),e=e.sibling;else Ih(e)}function pv(e){for(e=e.child;e!==null;)e.tag===30?da(e.child,!1):(e.subtreeFlags&33554432)!==0&&pv(e),e=e.sibling}function Fh(e,n,a,o,u,f,y){for(var R=!1;n!==null;){if(n.tag===5){var G=n.stateNode;if(f!==null&&hi<f.length){var rt=f[hi],vt=gd(G);(rt.view||vt.view)&&(R=!0);var Lt;if(Lt=(e.flags&4)===0)if(vt.clip)Lt=!0;else{Lt=rt.rect;var $=vt.rect;Lt=Lt.y!==$.y||Lt.x!==$.x||Lt.height!==$.height||Lt.width!==$.width}Lt&&(e.flags|=4),vt.abs?vt=!rt.abs:(rt=rt.rect,vt=vt.rect,vt=rt.height!==vt.height||rt.width!==vt.width),vt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&f_(G,hi===0?a:a+"_"+hi,u),R&&(e.flags&4)!==0||(ha===null&&(ha=[]),ha.push(G,hi===0?o:o+"_"+hi,n.memoizedProps)),hi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?e.flags|=n.flags&32:Fh(e,n.child,a,o,u,f,y)&&(R=!0));n=n.sibling}return R}function mv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,u=Aa(a,o),f=Ra(a.default,a.update),y;y=e.memoizedState,e.memoizedState=null,o=e;var R=e.child;hi=0,u=Fh(o,R,u,u,f,y,!1),(e.flags&4)!==0&&u&&ks(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&mv(e);e=e.sibling}}var Bn=!1,Qe=!1,pa=!1,Bh=!1,gv=typeof WeakSet=="function"?WeakSet:Set,Hn=null,ma=!1,il=!1,Fc=!1,Hh=!1;function PM(e,n,a){if(e=e.containerInfo,fd=$s,e=x0(e),Af(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,y=u.focusNode;u=u.focusOffset;try{o.nodeType,y.nodeType}catch{o=null;break t}var R=0,G=-1,rt=-1,vt=0,Lt=0,$=e,dt=null;e:for(;;){for(var re;$!==o||f!==0&&$.nodeType!==3||(G=R+f),$!==y||u!==0&&$.nodeType!==3||(rt=R+u),$.nodeType===3&&(R+=$.nodeValue.length),(re=$.firstChild)!==null;)dt=$,$=re;for(;;){if($===e)break e;if(dt===o&&++vt===f&&(G=R),dt===y&&++Lt===u&&(rt=R),(re=$.nextSibling)!==null)break;$=dt,dt=$.parentNode}$=re}o=G===-1||rt===-1?null:{start:G,end:rt}}else o=null}o=o||{start:0,end:0}}else o=null;for(hd={focusedElem:e,selectionRange:o},$s=!1,a=(a&335544064)===a,Hn=n,n=a?9270:1024;Hn!==null;){if(e=Hn,a&&(o=e.deletions,o!==null))for(f=0;f<o.length;f++)a&&Ph(o[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&uv(e),Bc(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&Ph(o),Bc(a);continue}else if(o!==null&&o.memoizedState!==null){a&&uv(e),Bc(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Hn=o):(a&&dv(e),Bc(a))}}Mi=null}function Bc(e){for(;Hn!==null;){var n=Hn,a=e,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var y=Kr(n.type,u);a=f.getSnapshotBeforeUpdate(y,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){$e(n,n.return,R)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)yd(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":yd(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=Aa(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=Ra(u.default,u.update),u!=="none"&&zs(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(o=n.sibling,o!==null){o.return=n.return,Hn=o;break}Hn=n.return}}function vv(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&el(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){$e(a,a.return,y)}else{var u=Kr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){$e(a,a.return,y)}}o&64&&rv(a),o&512&&fa(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{j0(e,n)}catch(y){$e(a,a.return,y)}}break;case 27:n===null&&o&4&&cv(a);case 26:case 5:ga(e,a),n===null&&o&4&&Dh(a),o&512&&fa(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&Sv(e,a);break;case 13:ga(e,a),o&4&&Mv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jM.bind(null,a),CE(e,a))));break;case 22:if(o=a.memoizedState!==null||Bn,!o){var f=n!==null&&n.memoizedState!==null||Qe;n=Bn,u=Qe,Bn=o,(Qe=f)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Wi(e,a,o)):ga(e,a),Bn=n,Qe=u}break;case 30:ga(e,a),o&512&&fa(a,a.return);break;case 7:o&512&&fa(a,a.return);default:ga(e,a)}}function Vh(e,n){for(e=e.child;e!==null;)_v(e,n),e=e.sibling}function _v(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(G){$e(e,e.return,G)}Gh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,He=!0}catch(G){$e(e,e.return,G)}break;case 18:try{var R=e.stateNode;n?u_(R,!0):u_(e.stateNode,!1)}catch(G){$e(e,e.return,G)}break;case 22:case 23:e.memoizedState===null&&Vh(e,n);break;default:Vh(e,n)}}function Gh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,o=n;switch(a.tag){case 4:_v(a,o);break t;case 22:a.memoizedState===null&&Gh(a,o);break t;default:Gh(a,o)}}e=e.sibling}}function yv(e){var n=e.alternate;n!==null&&(e.alternate=null,yv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ve(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var dn=null,di=!1;function qi(e,n,a){for(a=a.child;a!==null;)xv(e,n,a),a=a.sibling}function xv(e,n,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:Qe||qn(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Qe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||qn(a,n),nl(a);var o=dn,u=di;mr(a.type)&&(dn=a.stateNode,di=!1),qi(e,n,a),T_(a.stateNode,a.type,a.memoizedProps),dn=o,di=u;break;case 5:Qe||qn(a,n),nl(a);case 6:if(a.tag===6&&nl(a),o=dn,u=di,dn=null,qi(e,n,a),dn=o,di=u,dn!==null)if(di)try{(dn.nodeType===9?dn.body:dn.nodeName==="HTML"?dn.ownerDocument.body:dn).removeChild(a.stateNode),He=!0}catch(f){$e(a,n,f)}else try{dn.removeChild(a.stateNode),He=!0}catch(f){$e(a,n,f)}break;case 18:dn!==null&&(di?(e=dn,c_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),to(e)):c_(dn,a.stateNode));break;case 4:o=dn,u=di,dn=a.stateNode.containerInfo,di=!0,qi(e,n,a),dn=o,di=u;break;case 0:case 11:case 14:case 15:lr(2,a,n),Qe||lr(4,a,n),qi(e,n,a);break;case 1:Qe||(qn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&sv(a,n,o)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:Qe=(o=Qe)||a.memoizedState!==null,qi(e,n,a),Qe=o;break;case 30:qn(a,n),qi(e,n,a);break;case 7:Qe||qn(a,n),qi(e,n,a);break;default:qi(e,n,a)}}function Sv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{to(e)}catch(a){$e(n,n.return,a)}}}function Mv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(a){$e(n,n.return,a)}}function IM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gv),n;default:throw Error(r(435,e.tag))}}function Hc(e,n){var a=IM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ZM.bind(null,e,o);o.then(u,u)}})}function ai(e,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],y=e,R=n,G=R;t:for(;G!==null;){switch(G.tag){case 27:if(mr(G.type)){dn=G.stateNode,di=!1;break t}break;case 5:dn=G.stateNode,di=!1;break t;case 3:case 4:dn=G.stateNode.containerInfo,di=!0;break t}G=G.return}if(dn===null)throw Error(r(160));xv(y,R,f),dn=null,di=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ev(n,e,a),n=n.sibling}var Yi=null;function Ev(e,n,a){var o=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var y=o[f];y.ref.impl=y.nextImpl}ai(n,e,a),ri(e),u&4&&(lr(3,e,e.return),el(3,e),lr(5,e,e.return));break;case 1:ai(n,e,a),ri(e),u&512&&(Qe||o===null||qn(o,o.return)),u&64&&Bn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Yi,ai(n,e,a),ri(e),u&512&&(Qe||o===null||qn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(Bn)e.stateNode=s_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Be]||o[It]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),Yn(o,n,a),o[It]=e,Re(o),n=o;break t;case"link":if(f=D_("link","href",u).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}o=u.createElement(n),Yn(o,n,a),u.head.appendChild(o);break;case"meta":if(f=D_("meta","content",u).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}o=u.createElement(n),Yn(o,n,a),u.head.appendChild(o);break;default:throw Error(r(468,n))}o[It]=e,Re(o),n=o}e.stateNode=n}else Bn||Ad(f,e.type,e.stateNode);else e.stateNode=C_(f,a,e.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||Qe||n.parentNode.removeChild(n)):u.count--,a===null?Bn||Ad(f,e.type,e.stateNode):C_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Uh(e,e.memoizedProps,o.memoizedProps);break;case 27:ai(n,e,a),ri(e),u&512&&(Qe||o===null||qn(o,o.return)),o!==null&&u&4&&Uh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(f=pa,pa=!1,ai(n,e,a),pa=f,ri(e),u&512&&(Qe||o===null||qn(o,o.return)),e.flags&32){n=e.stateNode;try{vs(n,""),He=!0}catch(vt){$e(e,e.return,vt)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Uh(e,n,o!==null?o.memoizedProps:n)),u&1024&&(Bh=!0);break;case 6:if(ai(n,e,a),ri(e),u&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,He=!0}catch(vt){$e(e,e.return,vt)}}break;case 3:if(He=!1,eu=null,f=Yi,Yi=hl(n.containerInfo),ai(n,e,a),Yi=f,ri(e),u&4&&o!==null&&o.memoizedState.isDehydrated)try{to(n.containerInfo)}catch(vt){$e(e,e.return,vt)}Bh&&(Bh=!1,Tv(e)),He=!1;break;case 4:u=pa,pa=Bn,o=Xm(),f=Yi,Yi=hl(e.stateNode.containerInfo),ai(n,e,a),ri(e),Yi=f,He&&il&&(Fc=!0),He=o,pa=u;break;case 12:ai(n,e,a),ri(e);break;case 31:ai(n,e,a),ri(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 13:ai(n,e,a),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(kc=Y()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 22:f=e.memoizedState!==null,y=o!==null&&o.memoizedState!==null;var R=Bn,G=Qe,rt=pa;Bn=R||f,pa=rt||f,Qe=G||y,ai(n,e,a),Qe=G,pa=rt,Bn=R,ri(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||y||Bn||Qe||(n=y||Qe,a=Bn,o=Qe,Bn=f||Bn,Qe=n,cr(e,2),Bn=a,Qe=o),!f&&pa||Vh(e,f)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Hc(e,a))));break;case 19:ai(n,e,a),ri(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Hc(e,n)));break;case 30:u&512&&(Qe||o===null||qn(o,o.return)),u=Xm(),f=il,y=(a&335544064)===a,R=e.memoizedProps,il=y&&Ra(R.default,R.update)!=="none",ai(n,e,a),ri(e),y&&o!==null&&He&&(e.flags|=4),il=f,He=u;break;case 21:break;case 7:u&512&&(Qe||o===null||qn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:ai(n,e,a),ri(e)}}function ri(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(lv(o)){a=o;break}o=o.return}o=null;for(var u=e.return;u!==null;){if(Ch(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(wh(u))break;u=u.return}var y=o;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,G=Nh(e);Oc(e,G,R,y);break;case 5:var rt=a.stateNode;a.flags&32&&(vs(rt,""),a.flags&=-33);var vt=Nh(e);Oc(e,vt,rt,y);break;case 3:case 4:var Lt=a.stateNode.containerInfo,$=Nh(e);Lh(e,$,Lt,y);break;default:throw Error(r(161))}}catch(dt){$e(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Tv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,$s=!0,n.reset(),$s=!1),e=e.sibling}}function Ps(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)bv(n,e),n=n.sibling;else mv(n)}function bv(e,n){var a=e.alternate;if(a===null)Oh(e,!1);else switch(e.tag){case 3:if(Hh=ma=!1,fv(),Ps(n,e),!ma&&!Fc){if(e=ha,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var u=e[o+1];h_(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hh=!0}ha=null;break;case 5:Ps(n,e);break;case 4:o=ma,ma=!1,Ps(n,e),ma&&(Fc=!0),ma=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Oh(e,!1):Ps(n,e));break;case 30:o=ma,u=fv(),ma=!1,Ps(n,e),ma&&(e.flags|=4);var f=e.memoizedProps,y=e.stateNode;n=Aa(f,y),y=Aa(a.memoizedProps,y);var R=Ra(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,hi=0,n=Fh(e,a,n,y,R,f,!0),hi!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(ks(e,e.memoizedProps.onUpdate),ha=u):u!==null&&(u.push.apply(u,ha),ha=u),ma=(e.flags&32)!==0?!0:o;break;default:Ps(n,e)}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vv(e,n.alternate,n),n=n.sibling}function cr(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:lr(4,a,a.return),cr(a,o);break;case 1:qn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&sv(a,a.return,u),cr(a,o);break;case 27:(o&2)!==0&&T_(a.stateNode,a.type,a.memoizedProps);case 5:qn(a,a.return),a.tag!==5&&a.tag!==27||nl(a),cr(a,o);break;case 6:nl(a);break;case 26:qn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Qe||u.parentNode.removeChild(u),cr(a,o);break;case 22:a.memoizedState===null&&cr(a,o);break;case 30:qn(a,a.return),cr(a,o);break;case 7:qn(a,a.return);default:cr(a,o)}e=e.sibling}}function Wi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Wi(u,f,a),el(4,f);break;case 1:if(Wi(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(vt){$e(o,o.return,vt)}if(o=f,u=o.updateQueue,u!==null){var G=o.stateNode;try{var rt=u.shared.hiddenCallbacks;if(rt!==null)for(u.shared.hiddenCallbacks=null,u=0;u<rt.length;u++)W0(rt[u],G)}catch(vt){$e(o,o.return,vt)}}R&&y&64&&rv(f),fa(f,f.return);break;case 27:(a&2)!==0&&cv(f);case 5:f.tag!==5&&f.tag!==27||ov(f),Wi(u,f,a),R&&o===null&&y&4&&Dh(f),fa(f,f.return);break;case 6:ov(f);break;case 26:G=f.stateNode,f.memoizedState!==null||G===null||Bn||Ad(hl(G.ownerDocument),f.type,G),Wi(u,f,a),R&&o===null&&y&4&&Dh(f),fa(f,f.return);break;case 12:Wi(u,f,a);break;case 31:Wi(u,f,a),R&&y&4&&Sv(u,f);break;case 13:Wi(u,f,a),R&&y&4&&Mv(u,f);break;case 22:f.memoizedState===null&&Wi(u,f,a),fa(f,f.return);break;case 30:Wi(u,f,a),fa(f,f.return);break;case 7:fa(f,f.return);default:Wi(u,f,a)}n=n.sibling}}function kh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Go(a))}function Xh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Go(e))}function Fi(e,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Av(e,n,a,o),n=n.sibling;else u&&pv(n)}function Av(e,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ic(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(e,n,a,o),f&2048&&el(9,n);break;case 1:Fi(e,n,a,o);break;case 3:Fi(e,n,a,o),u&&Hh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Go(f)));break;case 12:if(f&2048){Fi(e,n,a,o),f=n.stateNode;try{var y=n.memoizedProps,R=y.id,G=y.onPostCommit;typeof G=="function"&&G(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(rt){$e(n,n.return,rt)}}else Fi(e,n,a,o);break;case 31:Fi(e,n,a,o);break;case 13:Fi(e,n,a,o);break;case 23:break;case 22:y=n.stateNode,R=n.alternate,n.memoizedState!==null?(u&&R!==null&&R.memoizedState===null&&Ic(R),y._visibility&2?Fi(e,n,a,o):al(e,n)):(u&&R!==null&&R.memoizedState!==null&&Ic(n),y._visibility&2?Fi(e,n,a,o):(y._visibility|=2,Is(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&kh(R,n);break;case 24:Fi(e,n,a,o),f&2048&&Xh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(da(f.child,!0),da(n.child,!0))),Fi(e,n,a,o);break;default:Fi(e,n,a,o)}}function Is(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,G=o,rt=y.flags;switch(y.tag){case 0:case 11:case 15:Is(f,y,R,G,u),el(8,y);break;case 23:break;case 22:var vt=y.stateNode;y.memoizedState!==null?vt._visibility&2?Is(f,y,R,G,u):al(f,y):(vt._visibility|=2,Is(f,y,R,G,u)),u&&rt&2048&&kh(y.alternate,y);break;case 24:Is(f,y,R,G,u),u&&rt&2048&&Xh(y.alternate,y);break;default:Is(f,y,R,G,u)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:al(a,o),u&2048&&kh(o.alternate,o);break;case 24:al(a,o),u&2048&&Xh(o.alternate,o);break;default:al(a,o)}n=n.sibling}}var Qr=8192;function Jr(e,n,a){if(e.subtreeFlags&Qr)for(e=e.child;e!==null;)Rv(e,n,a),e=e.sibling}function Rv(e,n,a){switch(e.tag){case 26:Jr(e,n,a),e.flags&Qr&&(e.memoizedState!==null?kE(a,Yi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&O_(a,e)));break;case 5:Jr(e,n,a),e.flags&Qr&&(e=e.stateNode,(n&335544128)===n&&O_(a,e));break;case 3:case 4:var o=Yi;Yi=hl(e.stateNode.containerInfo),Jr(e,n,a),Yi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Qr,Qr=16777216,Jr(e,n,a),Qr=o):Jr(e,n,a));break;case 30:if((e.flags&Qr)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var u=e.stateNode;u.paired=null,Mi===null&&(Mi=new Map),Mi.set(o,u)}Jr(e,n,a);break;default:Jr(e,n,a)}}function wv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Hn=o,Dv(o,e)}wv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cv(e),e=e.sibling}function Cv(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&lr(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vc(e)):rl(e);break;default:rl(e)}}function Vc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Hn=o,Dv(o,e)}wv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:lr(8,n,n.return),Vc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vc(n));break;default:Vc(n)}e=e.sibling}}function Dv(e,n){for(;Hn!==null;){var a=Hn;switch(a.tag){case 0:case 11:case 15:lr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Hn=o;else t:for(a=e;Hn!==null;){o=Hn;var u=o.sibling,f=o.return;if(yv(o),o===a){Hn=null;break t}if(u!==null){u.return=f,Hn=u;break t}Hn=f}}}var FM={getCacheForType:function(e){var n=Gn(An),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Gn(An).controller.signal}},BM=typeof WeakMap=="function"?WeakMap:Map,Ke=0,rn=null,Pe=null,Ve=0,Je=0,Ei=null,ur=!1,Fs=!1,qh=!1,Pa=0,Sn=0,fr=0,$r=0,Gc=0,Ti=0,Bs=0,sl=null,pi=null,Yh=!1,kc=0,Uv=0,Xc=1/0,qc=null,hr=null,gn=0,ji=null,ts=null,va=0,Wh=0,jh=null,Nv=null,Hs=null,Vs=null,Gs=null,ol=0,Yc=null;function bi(){return(Ke&2)!==0&&Ve!==0?Ve&-Ve:St.T!==null?ad():Wt()}function Lv(){if(Ti===0)if((Ve&536870912)===0||De){var e=ei;ei<<=1,(ei&3932160)===0&&(ei=262144),Ti=e}else Ti=536870912;return e=kn.current,e!==null&&(e.flags|=32),Ti}function ks(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=d_(Aa(e.memoizedProps,a))),Vs===null&&(Vs=[]),Vs.push(n.bind(null,o))}}function mi(e,n,a){(e===rn&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(Xs(e,0),dr(e,Ve,Ti,!1)),un(e,a),((Ke&2)===0||e!==rn)&&(e===rn&&((Ke&2)===0&&($r|=a),Sn===4&&dr(e,Ve,Ti,!1)),_a(e))}function Ov(e,n,a){if((Ke&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||le(e,n),u=o?GM(e,n):Kh(e,n,!0),f=o;do{if(u===0){Fs&&!o&&dr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!HM(a)){u=Kh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=sl;var G=R.current.memoizedState.isDehydrated;if(G&&(Xs(R,y).flags|=256),y=Kh(R,y,!1),y!==2&&y!==6){if(qh&&!G){R.errorRecoveryDisabledLanes|=f,$r|=f,u=4;break t}f=pi,pi=u,f!==null&&(pi===null?pi=f:pi.push.apply(pi,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Xs(e,0),dr(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:dr(o,n,Ti,!ur);break t;case 2:pi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=kc+300-Y(),10<u)){if(dr(o,n,Ti,!ur),ae(o,0,!0)!==0)break t;va=n,o.timeoutHandle=md(zv.bind(null,o,a,pi,qc,Yh,n,Ti,$r,Bs,ur,f,"Throttled",-0,0),u);break t}zv(o,a,pi,qc,Yh,n,Ti,$r,Bs,ur,f,null,-0,0)}}break}while(!0);_a(e)}function zv(e,n,a,o,u,f,y,R,G,rt,vt,Lt,$,dt){e.timeoutHandle=-1;var re=n.subtreeFlags,ge=(f&335544064)===f;if(Lt=null,(ge||re&8192||(re&16785408)===16785408)&&(Lt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},Mi=null,Rv(n,f,Lt),ge&&(re=Lt,ge=e.containerInfo,ge=(ge.nodeType===9?ge:ge.ownerDocument).__reactViewTransition,ge!=null&&(re.count++,re.waitingForViewTransition=!0,re=ml.bind(re),ge.finished.then(re,re))),re=(f&62914560)===f?kc-Y():(f&4194048)===f?Uv-Y():0,re=XE(Lt,re),re!==null)){va=f,e.cancelPendingCommit=re(kv.bind(null,e,n,f,a,o,u,y,R,G,rt,vt,Lt,null,$,dt)),dr(e,f,y,!rt);return}kv(e,n,f,a,o,u,y,R,G,rt,vt,Lt)}function HM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!xi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dr(e,n,a,o){n=de(e,n),n&=~Gc,n&=~$r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-En(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&w(e,a,n)}function Wc(){return(Ke&6)===0?(ll(0),!1):!0}function Zh(){if(Pe!==null){if(Je===0)var e=Pe.return;else e=Pe,Da=Vr=null,ih(e),Ds=null,qo=0,e=Pe;for(;e!==null;)av(e.alternate,e),e=e.return;Pe=null}}function Xs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,uE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,Zh(),rn=e,Pe=a=wa(e.current,null),Ve=n,Je=0,Ei=null,ur=!1,Fs=le(e,n),qh=!1,Bs=Ti=Gc=$r=fr=Sn=0,pi=sl=null,Yh=!1,Pa=de(e,n),ec(),a}function Pv(e,n){be=null,St.H=Ac,n===Cs||n===hc?(n=k0(),Je=3):n===Xf?(n=k0(),Je=4):Je=n===_h?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ei=n,Pe===null&&(Sn=1,Rc(e,Oi(n,e.current)))}function Iv(){var e=kn.current;return e===null?!0:(Ve&4194048)===Ve?Zn===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===Zn:!1}function Fv(){var e=St.H;return St.H=Ac,e===null?Ac:e}function Bv(){var e=St.A;return St.A=FM,e}function jc(){Sn=4,ur||(Ve&4194048)!==Ve&&kn.current!==null||(Fs=!0),(fr&134217727)===0&&($r&134217727)===0||rn===null||dr(rn,Ve,Ti,!1)}function Kh(e,n,a){var o=Ke;Ke|=2;var u=Fv(),f=Bv();(rn!==e||Ve!==n)&&(qc=null,Xs(e,n)),n=!1;var y=Sn;t:do try{if(Je!==0&&Pe!==null){var R=Pe,G=Ei;switch(Je){case 8:Zh(),y=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var rt=Je;if(Je=0,Ei=null,qs(e,R,G,rt),a&&Fs){y=0;break t}break;default:rt=Je,Je=0,Ei=null,qs(e,R,G,rt)}}VM(),y=Sn;break}catch(vt){Pv(e,vt)}while(!0);return n&&e.shellSuspendCounter++,Da=Vr=null,Ke=o,St.H=u,St.A=f,Pe===null&&(rn=null,Ve=0,ec()),y}function VM(){for(;Pe!==null;)Hv(Pe)}function GM(e,n){var a=Ke;Ke|=2;var o=Fv(),u=Bv();rn!==e||Ve!==n?(qc=null,Xc=Y()+500,Xs(e,n)):Fs=le(e,n);t:do try{if(Je!==0&&Pe!==null){n=Pe;var f=Ei;e:switch(Je){case 1:Je=0,Ei=null,qs(e,n,f,1);break;case 2:case 9:if(V0(f)){Je=0,Ei=null,Vv(n);break}n=function(){Je!==2&&Je!==9||rn!==e||(Je=7),_a(e)},f.then(n,n);break t;case 3:Je=7;break t;case 4:Je=5;break t;case 7:V0(f)?(Je=0,Ei=null,Vv(n)):(Je=0,Ei=null,qs(e,n,f,7));break;case 5:var y=null;switch(Pe.tag){case 26:y=Pe.memoizedState;case 5:case 27:var R=Pe;if(y?N_(y):R.stateNode.complete){Je=0,Ei=null;var G=R.sibling;if(G!==null)Pe=G;else{var rt=R.return;rt!==null?(Pe=rt,Zc(rt)):Pe=null}break e}}Je=0,Ei=null,qs(e,n,f,5);break;case 6:Je=0,Ei=null,qs(e,n,f,6);break;case 8:Zh(),Sn=6;break t;default:throw Error(r(462))}}kM();break}catch(vt){Pv(e,vt)}while(!0);return Da=Vr=null,St.H=o,St.A=u,Ke=a,Pe!==null?0:(rn=null,Ve=0,ec(),Sn)}function kM(){for(;Pe!==null&&!Ft();)Hv(Pe)}function Hv(e){var n=nv(e.alternate,e,Pa);e.memoizedProps=e.pendingProps,n===null?Zc(e):Pe=n}function Vv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zg(a,n,n.pendingProps,n.type,void 0,Ve);break;case 11:n=Zg(a,n,n.pendingProps,n.type.render,n.ref,Ve);break;case 5:ih(n);var o=n;o===Fn&&(De?(oc(o),o.tag===5&&o.stateNode!=null&&(ln=o.stateNode)):(oc(o),De=!0));default:av(a,n),n=Pe=D0(n,Pa),n=nv(a,n,Pa)}e.memoizedProps=e.pendingProps,n===null?Zc(e):Pe=n}function qs(e,n,a,o){Da=Vr=null,ih(n),Ds=null,qo=0;var u=n.return;try{if(DM(e,u,n,a,Ve)){Sn=1,Rc(e,Oi(a,e.current)),Pe=null;return}}catch(f){if(u!==null)throw Pe=u,f;Sn=1,Rc(e,Oi(a,e.current)),Pe=null;return}n.flags&32768?(De||o===1?e=!0:Fs||(Ve&536870912)!==0?e=!1:(ur=e=!0,(o===2||o===9||o===3||o===6)&&(o=kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gv(n,e)):Zc(n)}function Zc(e){var n=e;do{if((n.flags&32768)!==0){Gv(n,ur);return}e=n.return;var a=OM(n.alternate,n,Pa);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);Sn===0&&(Sn=5)}function Gv(e,n){do{var a=zM(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);Sn=6,Pe=null}function kv(e,n,a,o,u,f,y,R,G,rt,vt,Lt){e.cancelPendingCommit=null;do Kc();while(gn!==0);if((Ke&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===rn&&(Pe=rn=null,Ve=0),ts=n,ji=e,va=a,jh=u,Nv=o,XM(e,n,a,y,R,G,Lt)}}function XM(e,n,a,o,u,f,y){var R=n.lanes|n.childLanes;if(Wh=R,R|=Uf,Ue(e,a,R,o,u,f),Vs=null,(a&335544064)===a?(Gs=_M(e),o=10262):(Gs=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,KM(Dt,function(){return td(),null})):(e.callbackNode=null,e.callbackPriority=0),zc=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=St.T,St.T=null,u=zt.p,zt.p=2,f=Ke,Ke|=4;try{PM(e,n,a)}finally{Ke=f,zt.p=u,St.T=o}}gn=1,zc?Hs=gE(y,e.containerInfo,Gs,Qh,Jh,YM,$h,td,qM):(Qh(),Jh(),$h())}function qM(e){if(gn!==0){var n=ji.onRecoverableError;n(e,{componentStack:null})}}function YM(){gn===3&&(gn=0,bv(ts,ji),gn=4)}function Qh(){if(gn===1){gn=0;var e=ji,n=ts,a=va,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=St.T,St.T=null;var u=zt.p;zt.p=2;var f=Ke;Ke|=4;try{il=Fc=!1,Ev(n,e,a),a=hd;var y=x0(e.containerInfo),R=a.focusedElem,G=a.selectionRange;if(y!==R&&R&&R.ownerDocument&&y0(R.ownerDocument.documentElement,R)){if(G!==null&&Af(R)){var rt=G.start,vt=G.end;if(vt===void 0&&(vt=rt),"selectionStart"in R)R.selectionStart=rt,R.selectionEnd=Math.min(vt,R.value.length);else{var Lt=R.ownerDocument||document,$=Lt&&Lt.defaultView||window;if($.getSelection){var dt=$.getSelection(),re=R.textContent.length,ge=Math.min(G.start,re),Ae=G.end===void 0?ge:Math.min(G.end,re);!dt.extend&&ge>Ae&&(y=Ae,Ae=ge,ge=y);var at=_0(R,ge),j=_0(R,Ae);if(at&&j&&(dt.rangeCount!==1||dt.anchorNode!==at.node||dt.anchorOffset!==at.offset||dt.focusNode!==j.node||dt.focusOffset!==j.offset)){var ut=Lt.createRange();ut.setStart(at.node,at.offset),dt.removeAllRanges(),ge>Ae?(dt.addRange(ut),dt.extend(j.node,j.offset)):(ut.setEnd(j.node,j.offset),dt.addRange(ut))}}}}for(Lt=[],dt=R;dt=dt.parentNode;)dt.nodeType===1&&Lt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Lt.length;R++){var Ut=Lt[R];Ut.element.scrollLeft=Ut.left,Ut.element.scrollTop=Ut.top}}$s=!!fd,hd=fd=null}finally{Ke=f,zt.p=u,St.T=o}}e.current=n,gn=2}}function Jh(){if(gn===2){gn=0;var e=ji,n=ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=St.T,St.T=null;var o=zt.p;zt.p=2;var u=Ke;Ke|=4;try{vv(e,n.alternate,n)}finally{Ke=u,zt.p=o,St.T=a}}gn=3}}function $h(){if(gn===4||gn===3){gn=0;var e=Hs;Hs=null,pe();var n=ji,a=ts,o=va,u=Nv,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?gn=5:(gn=0,ts=ji=null,Xv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(hr=null),ot(o),a=a.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(ye,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=St.T,f=zt.p,zt.p=2,St.T=null;try{for(var y=n.onRecoverableError,R=0;R<u.length;R++){var G=u[R];y(G.value,{componentStack:G.stack})}}finally{St.T=a,zt.p=f}}if(u=Vs,y=Gs,Gs=null,u!==null&&(Vs=null,y===null&&(y=[]),e!==null))for(G=0;G<u.length;G++)a=(0,u[G])(y),a!==void 0&&e.finished.finally(a);(va&3)!==0&&Kc(),_a(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===Yc?ol++:(ol=0,Yc=n):(ol=0,Yc=null),ll(0)}}function Xv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Go(n)))}function Kc(){return Hs!==null&&(Hs.skipTransition(),Hs=null),Qh(),Jh(),$h(),td()}function td(){if(gn!==5)return!1;var e=ji,n=Wh;Wh=0;var a=ot(va),o=St.T,u=zt.p;try{zt.p=32>a?32:a,St.T=null,a=jh,jh=null;var f=ji,y=va;if(gn=0,ts=ji=null,va=0,(Ke&6)!==0)throw Error(r(331));var R=Ke;if(Ke|=4,Cv(f.current),Av(f,f.current,y,a),Ke=R,ll(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(ye,f)}catch{}return!0}finally{zt.p=u,St.T=o,Xv(e,n)}}function qv(e,n,a){n=Oi(a,n),n=vh(e.stateNode,n,2),e=ar(e,n,2),e!==null&&(un(e,2),_a(e))}function $e(e,n,a){if(e.tag===3)qv(e,e,a);else for(;n!==null;){if(n.tag===3){qv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hr===null||!hr.has(o))){e=Oi(a,e),a=Vg(2),o=ar(n,a,2),o!==null&&(Gg(a,o,n,e),un(o,2),_a(o));break}}n=n.return}}function ed(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new BM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qh=!0,u.add(a),e=WM.bind(null,e,n,a),n.then(e,e))}function WM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,rn===e&&(Ve&a)===a&&((Sn===4||Sn===3&&(Ve&62914560)===Ve&&300>Y()-kc)&&(Ke&2)===0?Xs(e,0):Gc|=a,Bs===Ve&&(Bs=0)),_a(e)}function Yv(e,n){n===0&&(n=Ze()),e=Fr(e,n),e!==null&&(un(e,n),_a(e))}function jM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Yv(e,a)}function ZM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Yv(e,a)}function KM(e,n){return Vt(e,n)}var Ys=null,Ws=null,nd=!1,Qc=!1,id=!1,pr=0;function _a(e){e!==Ws&&e.next===null&&(Ws===null?Ys=Ws=e:Ws=Ws.next=e),Qc=!0,nd||(nd=!0,JM())}function ll(e,n){if(!id&&Qc){id=!0;do for(var a=!1,o=Ys;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-En(42|e)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Kv(o,f))}else f=Ve,f=ae(o,o===rn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||le(o,f)||(a=!0,Kv(o,f));o=o.next}while(a);id=!1}}function QM(){Wv()}function Wv(){Qc=nd=!1;var e=0;pr!==0&&cE()&&(e=pr);for(var n=Y(),a=null,o=Ys;o!==null;){var u=o.next,f=jv(o,n);f===0?(o.next=null,a===null?Ys=u:a.next=u,u===null&&(Ws=a)):(a=o,(e!==0||(f&3)!==0)&&(Qc=!0)),o=u}gn!==0&&gn!==5||ll(e),pr!==0&&(pr=0)}function jv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-En(f),R=1<<y,G=u[y];G===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Le(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=rn,a=Ve,a=ae(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&qt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||le(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&qt(o),ot(a)){case 2:case 8:a=kt;break;case 32:a=Dt;break;case 268435456:a=ie;break;default:a=Dt}return o=Zv.bind(null,e),a=Vt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&qt(o),e.callbackPriority=2,e.callbackNode=null,2}function Zv(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kc()&&e.callbackNode!==a)return null;var o=Ve;return o=ae(e,e===rn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ov(e,o,n),jv(e,Y()),e.callbackNode!=null&&e.callbackNode===a?Zv.bind(null,e):null)}function Kv(e,n){if(Kc())return null;Ov(e,n,!0)}function JM(){fE(function(){(Ke&6)!==0?Vt(Xt,QM):Wv()})}function ad(){if(pr===0){var e=Xr;e===0&&(e=Ui,Ui<<=1,(Ui&261888)===0&&(Ui=256)),pr=e}return pr}function Qv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wl(e)}function $M(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Qv((u[Yt]||null).action),y=o.submitter;y&&(n=(n=y[Yt]||null)?Qv(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new Ql("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var G=new FormData(u,y);hh(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=new FormData(u,y),hh(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var rd=0;rd<Df.length;rd++){var sd=Df[rd],tE=sd.toLowerCase(),eE=sd[0].toUpperCase()+sd.slice(1);Xi(tE,"on"+eE)}Xi(E0,"onAnimationEnd"),Xi(T0,"onAnimationIteration"),Xi(b0,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(uM,"onTransitionRun"),Xi(fM,"onTransitionStart"),Xi(hM,"onTransitionCancel"),Xi(A0,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function Jv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],G=R.instance,rt=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=rt;try{f(u)}catch(vt){tc(vt)}u.currentTarget=null,f=G}else for(y=0;y<o.length;y++){if(R=o[y],G=R.instance,rt=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=rt;try{f(u)}catch(vt){tc(vt)}u.currentTarget=null,f=G}}}}function Ie(e,n){var a=n[ue];a===void 0&&(a=n[ue]=new Set);var o=e+"__bubble";a.has(o)||($v(n,e,2,!1),a.add(o))}function od(e,n,a){var o=0;n&&(o|=4),$v(a,e,o,n)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[Jc]){e[Jc]=!0,Xe.forEach(function(a){a!=="selectionchange"&&(nE.has(a)||od(a,!1,e),od(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jc]||(n[Jc]=!0,od("selectionchange",!1,n))}}function $v(e,n,a,o){switch(G_(n)){case 2:var u=jE;break;case 8:u=ZE;break;default:u=wd}a=u.bind(null,n,a,e),u=void 0,!gf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function cd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Ye(R),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=f=y;continue t}R=R.parentNode}}o=o.return}$m(function(){var rt=f,vt=pf(a),Lt=[];t:{var $=R0.get(e);if($!==void 0){var dt=Ql,re=e;switch(e){case"keypress":if(Zl(a)===0)break t;case"keydown":case"keyup":dt=HS;break;case"focusin":re="focus",dt=xf;break;case"focusout":re="blur",dt=xf;break;case"beforeblur":case"afterblur":dt=xf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=n0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=qS;break;case E0:case T0:case b0:dt=US;break;case A0:dt=WS;break;case"scroll":case"scrollend":dt=AS;break;case"wheel":dt=ZS;break;case"copy":case"cut":case"paste":dt=LS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=a0;break;case"submit":dt=kS;break;case"toggle":case"beforetoggle":dt=QS}var ge=(n&4)!==0,Ae=!ge&&(e==="scroll"||e==="scrollend"),at=ge?$!==null?$+"Capture":null:$;ge=[];for(var j=rt,ut;j!==null;){var Ut=j;if(ut=Ut.stateNode,Ut=Ut.tag,Ut!==5&&Ut!==26&&Ut!==27||ut===null||at===null||(Ut=Uo(j,at),Ut!=null&&ge.push(ul(j,Ut,ut))),Ae)break;j=j.return}0<ge.length&&($=new dt($,re,null,a,vt),Lt.push({event:$,listeners:ge}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",dt&&a!==df&&(re=a.relatedTarget||a.fromElement)&&(Ye(re)||re[ce]))break t;($||dt)&&(re=vt.window===vt?vt:(dt=vt.ownerDocument)?dt.defaultView||dt.parentWindow:window,$?(dt=a.relatedTarget||a.toElement,$=rt,dt=dt?Ye(dt):null,dt!==null&&(Ae=c(dt),ge=dt.tag,dt!==Ae||ge!==5&&ge!==27&&ge!==6)&&(dt=null)):($=null,dt=rt),$!==dt&&(ge=n0,Ut="onMouseLeave",at="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ge=a0,Ut="onPointerLeave",at="onPointerEnter",j="pointer"),Ae=$==null?re:yn($),ut=dt==null?re:yn(dt),re=new ge(Ut,j+"leave",$,a,vt),re.target=Ae,re.relatedTarget=ut,Ut=null,Ye(vt)===rt&&(ge=new ge(at,j+"enter",dt,a,vt),ge.target=ut,ge.relatedTarget=Ae,Ut=ge),Ae=Ut,ge=$&&dt?V($,dt,iE):null,$!==null&&t_(Lt,re,$,ge,!1),dt!==null&&Ae!==null&&t_(Lt,Ae,dt,ge,!0)))}t:{if($=rt?yn(rt):window,dt=$.nodeName&&$.nodeName.toLowerCase(),dt==="select"||dt==="input"&&$.type==="file")var he=h0;else if(u0($))if(d0)he=oM;else{he=rM;var Ge=aM}else dt=$.nodeName,!dt||dt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?rt&&hf(rt.elementType)&&(he=h0):he=sM;if(he&&(he=he(e,rt))){f0(Lt,he,a,vt);break t}Ge&&Ge(e,$,rt)}switch(Ge=rt?yn(rt):window,e){case"focusin":(u0(Ge)||Ge.contentEditable==="true")&&(Ss=Ge,Rf=rt,Bo=null);break;case"focusout":Bo=Rf=Ss=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,S0(Lt,a,vt);break;case"selectionchange":if(cM)break;case"keydown":case"keyup":S0(Lt,a,vt)}var _e;if(Mf)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else xs?l0(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(r0&&a.locale!=="ko"&&(xs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&xs&&(_e=t0()):(Za=vt,vf="value"in Za?Za.value:Za.textContent,xs=!0)),Ge=$c(rt,xe),0<Ge.length&&(xe=new i0(xe,e,null,a,vt),Lt.push({event:xe,listeners:Ge}),_e?xe.data=_e:(_e=c0(a),_e!==null&&(xe.data=_e)))),(_e=$S?tM(e,a):eM(e,a))&&(xe=$c(rt,"onBeforeInput"),0<xe.length&&(Ge=new i0("onBeforeInput","beforeinput",null,a,vt),Lt.push({event:Ge,listeners:xe}),Ge.data=_e)),$M(Lt,e,rt,a,vt)}Jv(Lt,n)})}function ul(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $c(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Uo(e,a),u!=null&&o.unshift(ul(e,u,f)),u=Uo(e,n),u!=null&&o.push(ul(e,u,f))),e.tag===3)return o;e=e.return}return[]}function iE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function t_(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,G=R.alternate,rt=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||rt===null||(G=rt,u?(rt=Uo(a,f),rt!=null&&y.unshift(ul(a,rt,G))):u||(rt=Uo(a,f),rt!=null&&y.push(ul(a,rt,G)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var aE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function e_(e){return(typeof e=="string"?e:""+e).replace(aE,`
`).replace(rE,"")}function n_(e,n){return n=e_(n),e_(e)===n}function tn(e,n,a,o,u,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||vs(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&vs(e,""+o);else return;break;case"className":Yl(e,"class",o);break;case"tabIndex":Yl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yl(e,a,o);break;case"style":Qm(e,o,f);return;case"data":if(n!=="object"){Yl(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wl(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&tn(e,n,"name",u.name,u,null),tn(e,n,"formEncType",u.formEncType,u,null),tn(e,n,"formMethod",u.formMethod,u,null),tn(e,n,"formTarget",u.formTarget,u,null)):(tn(e,n,"encType",u.encType,u,null),tn(e,n,"method",u.method,u,null),tn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wl(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=la);return;case"onScroll":o!=null&&Ie("scroll",e);return;case"onScrollEnd":o!=null&&Ie("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Wl(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),ql(e,"popover",o);break;case"xlinkActuate":Ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ta(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ta(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ta(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ta(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ql(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=TS.get(a)||a,ql(e,a,o);else return}He=!0}function ud(e,n,a,o,u,f){switch(a){case"style":Qm(e,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")vs(e,o);else if(typeof o=="number"||typeof o=="bigint")vs(e,""+o);else return;break;case"onScroll":o!=null&&Ie("scroll",e);return;case"onScrollEnd":o!=null&&Ie("scrollend",e);return;case"onClick":o!=null&&(e.onclick=la);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!In.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=e[Yt]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,o,u);break t}He=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):ql(e,a,o)}return}He=!0}function Yn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(e,n,f,y,a,null)}}u&&tn(e,n,"srcSet",a.srcSet,a,null),o&&tn(e,n,"src",a.src,a,null);return;case"input":Ie("invalid",e);var R=f=y=u=null,G=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":y=vt;break;case"checked":G=vt;break;case"defaultChecked":rt=vt;break;case"value":f=vt;break;case"defaultValue":R=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:tn(e,n,o,vt,a,null)}}Wm(e,f,R,G,rt,y,u,!1);return;case"select":Ie("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:tn(e,n,u,R,a,null)}n=f,a=y,e.multiple=!!o,n!=null?gs(e,!!o,n,!1):a!=null&&gs(e,!!o,a,!0);return;case"textarea":Ie("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:tn(e,n,y,R,a,null)}Zm(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:tn(e,n,G,o,a,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(o=0;o<cl.length;o++)Ie(cl[o],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(e,n,rt,o,a,null)}return;default:if(hf(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&ud(e,n,vt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&tn(e,n,R,o,a,null))}var sE={};function oE(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,G=null,rt=null,vt=null;for(dt in a){var Lt=a[dt];if(a.hasOwnProperty(dt)&&Lt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":G=Lt;default:o.hasOwnProperty(dt)||tn(e,n,dt,null,o,Lt)}}for(var $ in o){var dt=o[$];if(Lt=a[$],o.hasOwnProperty($)&&(dt!=null||Lt!=null))switch($){case"type":dt!==Lt&&(He=!0),f=dt;break;case"name":dt!==Lt&&(He=!0),u=dt;break;case"checked":dt!==Lt&&(He=!0),rt=dt;break;case"defaultChecked":dt!==Lt&&(He=!0),vt=dt;break;case"value":dt!==Lt&&(He=!0),y=dt;break;case"defaultValue":dt!==Lt&&(He=!0),R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==Lt&&tn(e,n,$,dt,o,Lt)}}uf(e,y,R,G,rt,vt,f,u);return;case"select":dt=y=R=$=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":dt=G;default:o.hasOwnProperty(f)||tn(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":f!==G&&(He=!0),$=f;break;case"defaultValue":f!==G&&(He=!0),R=f;break;case"multiple":f!==G&&(He=!0),y=f;default:f!==G&&tn(e,n,u,f,o,G)}n=R,a=y,o=dt,$!=null?gs(e,!!a,$,!1):!!o!=!!a&&(n!=null?gs(e,!!a,n,!0):gs(e,!!a,a?[]:"",!1));return;case"textarea":dt=$=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:tn(e,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":u!==f&&(He=!0),$=u;break;case"defaultValue":u!==f&&(He=!0),dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&tn(e,n,y,u,o,f)}jm(e,$,dt);return;case"option":for(var re in a)if($=a[re],a.hasOwnProperty(re)&&$!=null&&!o.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:tn(e,n,re,null,o,$)}for(G in o)if($=o[G],dt=a[G],o.hasOwnProperty(G)&&$!==dt&&($!=null||dt!=null))switch(G){case"selected":$!==dt&&(He=!0),e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:tn(e,n,G,$,o,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)$=a[ge],a.hasOwnProperty(ge)&&$!=null&&!o.hasOwnProperty(ge)&&tn(e,n,ge,null,o,$);for(rt in o)if($=o[rt],dt=a[rt],o.hasOwnProperty(rt)&&$!==dt&&($!=null||dt!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:tn(e,n,rt,$,o,dt)}return;default:if(hf(n)){for(var Ae in a)$=a[Ae],a.hasOwnProperty(Ae)&&$!==void 0&&!o.hasOwnProperty(Ae)&&ud(e,n,Ae,void 0,o,$);for(vt in o)$=o[vt],dt=a[vt],!o.hasOwnProperty(vt)||$===dt||$===void 0&&dt===void 0||ud(e,n,vt,$,o,dt);return}}for(var at in a)$=a[at],a.hasOwnProperty(at)&&$!=null&&!o.hasOwnProperty(at)&&tn(e,n,at,null,o,$);for(Lt in o)$=o[Lt],dt=a[Lt],!o.hasOwnProperty(Lt)||$===dt||$==null&&dt==null||tn(e,n,Lt,$,o,dt)}function i_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&i_(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],rt=G.startTime;if(rt>R)break;var vt=G.transferSize,Lt=G.initiatorType;vt&&i_(Lt)&&(G=G.responseEnd,y+=vt*(G<R?1:(R-rt)/(G-rt)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fd=null,hd=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function a_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function s_(e,n,a,o){return a=fl(a).createElement(e),a[It]=o,a[Yt]=n,Yn(a,e,n),Re(a),a}function dd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pd=null;function cE(){var e=window.event;return e&&e.type==="popstate"?e===pd?!1:(pd=e,!0):(pd=null,!1)}var md=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,l_=typeof requestAnimationFrame=="function"?requestAnimationFrame:md,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(hE)}:md;function hE(e){setTimeout(function(){throw e})}function mr(e){return e==="head"}function c_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),to(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ed(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ed(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[Be]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Ed(e.ownerDocument.body);a=u}while(a);to(n)}function u_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function f_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function h_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function dE(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function gd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return dE(n,a,e)}function pE(e){return e.documentElement.clientHeight}function mE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function gE(e,n,a,o,u,f,y,R,G){var rt=n.nodeType===9?n:n.ownerDocument;try{var vt=rt.startViewTransition({update:function(){var $=rt.defaultView,dt=$.navigation&&$.navigation.transition,re=rt.fonts.status;o();var ge=[];if(re==="loaded"&&(pE(rt),rt.fonts.status==="loading"&&ge.push(rt.fonts.ready)),re=ge.length,e!==null)for(var Ae=e.suspenseyImages,at=0,j=0;j<Ae.length;j++){var ut=Ae[j];if(!ut.complete){var Ut=ut.getBoundingClientRect();if(0<Ut.bottom&&0<Ut.right&&Ut.top<$.innerHeight&&Ut.left<$.innerWidth){if(at+=L_(ut),at>nu){ge.length=re;break}ut=new Promise(mE.bind(ut)),ge.push(ut)}}}if(0<ge.length)return $=Promise.race([Promise.all(ge),new Promise(function(he){return setTimeout(he,500)})]).then(u,u),(dt?Promise.allSettled([dt.finished,$]):$).then(f,f);if(u(),dt)return dt.finished.then(f,f);f()},types:a});rt.__reactViewTransition=vt;var Lt=[];return vt.ready.then(function(){for(var $=rt.documentElement.getAnimations({subtree:!0}),dt=0;dt<$.length;dt++){var re=$[dt],ge=re.effect,Ae=ge.pseudoElement;if(Ae!=null&&Ae.startsWith("::view-transition")){Lt.push(re),re=ge.getKeyframes();for(var at=Ae=void 0,j=!0,ut=0;ut<re.length;ut++){var Ut=re[ut],he=Ut.width;if(Ae===void 0)Ae=he;else if(Ae!==he){j=!1;break}if(he=Ut.height,at===void 0)at=he;else if(at!==he){j=!1;break}delete Ut.width,delete Ut.height,Ut.transform==="none"&&delete Ut.transform}j&&Ae!==void 0&&at!==void 0&&(ge.setKeyframes(re),j=getComputedStyle(ge.target,ge.pseudoElement),j.width!==Ae||j.height!==at)&&(j=re[0],j.width=Ae,j.height=at,j=re[re.length-1],j.width=Ae,j.height=at,ge.setKeyframes(re))}}y()},function($){rt.__reactViewTransition===vt&&(rt.__reactViewTransition=null);try{if(typeof $=="object"&&$!==null)switch($.name){case"InvalidStateError":($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null)}$!==null&&G($)}finally{o(),u(),y()}}),vt.finished.finally(function(){for(var $=0;$<Lt.length;$++)Lt[$].cancel();rt.__reactViewTransition===vt&&(rt.__reactViewTransition=null),R()}),vt}catch{return o(),u(),y(),null}}function es(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}es.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},es.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&o.push(a[u])}return o},es.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function d_(e){return{name:e,group:new es("group",e),imagePair:new es("image-pair",e),old:new es("old",e),new:new es("new",e)}}function Ai(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ai.prototype.addEventListener=function(e,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(m_(f,e,n,a)===-1){var y=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(G){y.removeEventListener(e,n,a),typeof n=="function"?n.call(this,G):n.handleEvent(G)}),o!==null&&(u=y.removeEventListener.bind(y,e,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=js(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:u}),g(this._fragmentFiber.child,!1,vE,e,R,o)}this._eventListeners=f}};function vE(e,n,a,o){return x(e).addEventListener(n,a,o),!1}Ai.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=m_(o,e,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var f=u.cleanup;u=js(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,_E,e,a,u),o.splice(n,1),f!==null&&f()}};function _E(e,n,a,o){return x(e).removeEventListener(n,a,o),!1}function js(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function p_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function m_(e,n,a,o){if(e.length===0)return-1;o=p_(o);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===a&&p_(f.optionsOrUseCapture)===o)return u}return-1}Ai.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];o.addEventListener(f.type,f.attachedListener,js(f.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(u=0;u<a.length;u++)f=a[u],o.removeEventListener(f.type,f.attachedListener,js(f.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},Ai.prototype.focus=function(e){g(this._fragmentFiber.child,!0,g_,e,void 0,void 0)};function g_(e,n){return e.tag===6?!1:(e=x(e),DE(e,n))}Ai.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,vd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!g_(n[a],e);a--);};function vd(e,n){return n.push(e),!1}Ai.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=x(e),e=fl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,yE,e,void 0,void 0))};function yE(e,n){return e.tag===6?!1:(e=x(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Ai.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,xE,e,void 0,void 0)};function xE(e,n){return e.tag===6||(e=x(e),n.observe(e)),!1}Ai.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,SE,e,void 0,void 0);for(var a=n=0;a<Zi.length;a++){var o=Zi[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):Zi[n++]=o}Zi.length=n}};function SE(e,n){return e.tag===6||(e=x(e),n.unobserve(e)),!1}var Zi=[],_d=!1;function ME(e,n,a){Zi.push({fragmentInstance:e,observer:n,instance:a}),_d||(_d=!0,UE(function(){_d=!1;var o=Zi;Zi=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}Ai.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,EE,e,void 0,void 0),e};function EE(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=x(e),n.push.apply(n,e.getClientRects());return!1}Ai.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:x(n).getRootNode(e)},Ai.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,vd,a,void 0,void 0);var o=x(n);if(a.length===0){if(a=o,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=x(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),u=x(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(e),R=u.compareDocumentPosition(e),G=y&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=o&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||f&&u===e||G||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||TE(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function TE(e,n,a,o,u){var f=Ye(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=V(a,f,k),n===null?n=!1:(g(n,!0,z,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=V(o,f,k),n===null?n=!1:(g(n,!0,U,f,o),f=S,F=S=null,n=f!==null)),n):!1}function v_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ai.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,vd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=a?o[1]||o[0]||_(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=x(o),v_(e,a);return}if(o=x(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=x(u),v_(u,a)):x(u).scrollIntoView(e),o+=a?-1:1}};function bE(e,n){return e=x(e),__(e,n),!1}function __(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function y_(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.addEventListener(u.type,u.attachedListener,js(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,R=0;R<Zi.length;R++){var G=Zi[R];(G.fragmentInstance!==n||G.observer!==f||G.instance!==e)&&(Zi[y++]=G)}Zi.length=y,f.observe(e)}),__(e,n))}function AE(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.removeEventListener(u.type,u.attachedListener,js(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?ME(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function yd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yd(a),ve(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function RE(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Be])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function wE(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bi(e.nextSibling),e===null))return null;return e}function x_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bi(e.nextSibling),e===null))return null;return e}function xd(e){return e.data==="$?"||e.data==="$~"}function Sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function CE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Md=null;function S_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function M_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function DE(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function UE(e){l_(function(){l_(function(n){return e(n)})})}function E_(e,n,a){switch(n=fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function T_(e,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&tn(e,n,o,null,sE,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===la&&(e.onclick=null),ve(e)}function Ed(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ve(e)}var Hi=new Map,b_=new Set;function hl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ia=zt.d;zt.d={f:NE,r:LE,D:OE,C:zE,L:PE,m:IE,X:BE,S:FE,M:HE};function NE(){var e=Ia.f(),n=Wc();return e||n}function LE(e){var n=Me(e);n!==null&&n.tag===5&&n.type==="form"?Rg(n):Ia.r(e)}var Zs=typeof document>"u"?null:document;function A_(e,n,a){var o=Zs;if(o&&typeof n=="string"&&n){var u=Ni(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),b_.has(u)||(b_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Yn(n,"link",e),Re(n),o.head.appendChild(n)))}}function OE(e){Ia.D(e),A_("dns-prefetch",e,null)}function zE(e,n){Ia.C(e,n),A_("preconnect",e,n)}function PE(e,n,a){Ia.L(e,n,a);var o=Zs;if(o&&e&&n){var u='link[rel="preload"][as="'+Ni(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ni(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ni(a.imageSizes)+'"]')):u+='[href="'+Ni(e)+'"]';var f=u;switch(n){case"style":f=Ks(e);break;case"script":f=Qs(e)}if(!(Hi.has(f)||(e=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Hi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(dl(f))||n==="script"&&o.querySelector(pl(f))))){var y=o.createElement("link");Yn(y,"link",e),n==="style"&&(y[ze]=!0,y.onload=y.onerror=function(){We(y)}),Re(y),o.head.appendChild(y)}}}function IE(e,n){Ia.m(e,n);var a=Zs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ni(o)+'"][href="'+Ni(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qs(e)}if(!Hi.has(f)&&(e=I({rel:"modulepreload",href:e},n),Hi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(f)))return}o=a.createElement("link"),Yn(o,"link",e),Re(o),a.head.appendChild(o)}}}function FE(e,n,a){Ia.S(e,n,a);var o=Zs;if(o&&e){var u=on(o).hoistableStyles,f=Ks(e);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(dl(f)))R.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Hi.get(f))&&Td(e,a);var G=y=o.createElement("link");Re(G),Yn(G,"link",e),G._p=new Promise(function(rt,vt){G.onload=rt,G.onerror=vt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,tu(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function BE(e,n){Ia.X(e,n);var a=Zs;if(a&&e){var o=on(a).hoistableScripts,u=Qs(e),f=o.get(u);f||(f=a.querySelector(pl(u)),f||(e=I({src:e,async:!0},n),(n=Hi.get(u))&&bd(e,n),f=a.createElement("script"),Re(f),Yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function HE(e,n){Ia.M(e,n);var a=Zs;if(a&&e){var o=on(a).hoistableScripts,u=Qs(e),f=o.get(u);f||(f=a.querySelector(pl(u)),f||(e=I({src:e,async:!0,type:"module"},n),(n=Hi.get(u))&&bd(e,n),f=a.createElement("script"),Re(f),Yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function R_(e,n,a,o){var u=(u=Jt.current)?hl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ks(a.href),n=on(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ks(a.href);var f=on(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(dl(e)))?f._p||(y.instance=f,y.state.loading=5):(f=Hi.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hi.set(e,f)),VE(u,e,f,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Qs(a),n=on(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ks(e){return'href="'+Ni(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function w_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function VE(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ze]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[ze]=!0,n.onload=n.onerror=We.bind(null,n),Yn(n,"link",a),Re(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Qs(e){return'[src="'+Ni(e)+'"]'}function pl(e){return"script[async]"+e}function C_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ni(a.href)+'"]');if(o)return n.instance=o,Re(o),o;var u=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Re(o),Yn(o,"style",u),tu(o,a.precedence,e),n.instance=o;case"stylesheet":u=Ks(a.href);var f=e.querySelector(dl(u));if(f)return n.state.loading|=4,n.instance=f,Re(f),f;o=w_(a),(u=Hi.get(u))&&Td(o,u),f=(e.ownerDocument||e).createElement("link"),Re(f);var y=f;return y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Yn(f,"link",o),n.state.loading|=4,tu(f,a.precedence,e),n.instance=f;case"script":return f=Qs(a.src),(u=e.querySelector(pl(f)))?(n.instance=u,Re(u),u):(o=a,(u=Hi.get(f))&&(o=I({},a),bd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Re(u),Yn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tu(o,a.precedence,e));return n.instance}function tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var eu=null;function D_(e,n,a){if(eu===null){var o=new Map,u=eu=new Map;u.set(a,o)}else u=eu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Be]||f[It]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function Ad(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function GE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function N_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function L_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function O_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=L_(n),e.suspenseyImages.push(n)),e=qE.bind(e),n.decode().then(e,e))}function kE(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ks(o.href),f=n.querySelector(dl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Re(f);return}f=n.ownerDocument||n,o=w_(o),(u=Hi.get(u))&&Td(o,u),f=f.createElement("link"),Re(f);var y=f;y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Yn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var nu=0;function XE(e,n){return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&nu===0&&(nu=62500*lE());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&au(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>nu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function z_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)au(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ml(){this.count--,z_(this)}function qE(){this.imgCount--,z_(this)}var iu=null;function au(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,iu=new Map,n.forEach(YE,e),iu=null,ml.call(e))}function YE(e,n){if(!(n.state.loading&4)){var a=iu.get(e);if(a)var o=a.get(null);else{a=new Map,iu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=ml.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Js={$$typeof:st,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function WE(e,n,a,o,u,f,y,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_n(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.hiddenUpdates=_n(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.transitionTypes=null,this.incompleteTransitions=new Map}function P_(e,n,a,o,u,f,y,R,G,rt,vt,Lt){return e=new WE(e,n,a,y,G,rt,vt,Lt,R),n=1,f===!0&&(n|=24),f=fi(3,null,null,n),e.current=f,f.stateNode=e,n=Vf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},qf(f),e}function I_(e){return e?(e=Ts,e):Ts}function F_(e,n,a,o,u,f){u=I_(u),o.context===null?o.context=u:o.pendingContext=u,o=ir(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ar(e,o,n),a!==null&&(mi(a,e,n),Yo(a,e,n))}function B_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rd(e,n){B_(e,n),(e=e.alternate)&&B_(e,n)}function H_(e){if(e.tag===13||e.tag===31){var n=Fr(e,67108864);n!==null&&mi(n,e,67108864),Rd(e,67108864)}}function V_(e){if(e.tag===13||e.tag===31){var n=bi();n=_t(n);var a=Fr(e,n);a!==null&&mi(a,e,n),Rd(e,n)}}var $s=!0;function jE(e,n,a,o){var u=St.T;St.T=null;var f=zt.p;try{zt.p=2,wd(e,n,a,o)}finally{zt.p=f,St.T=u}}function ZE(e,n,a,o){var u=St.T;St.T=null;var f=zt.p;try{zt.p=8,wd(e,n,a,o)}finally{zt.p=f,St.T=u}}function wd(e,n,a,o){if($s){var u=Cd(o);if(u===null)cd(e,n,o,ru,a),k_(e,o);else if(QE(u,e,n,a,o))o.stopPropagation();else if(k_(e,o),n&4&&-1<KE.indexOf(e)){for(;u!==null;){var f=Me(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ln(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var G=1<<31-En(y);R.entanglements[1]|=G,y&=~G}_a(f),(Ke&6)===0&&(Xc=Y()+500,ll(0))}}break;case 31:case 13:R=Fr(f,2),R!==null&&mi(R,f,2),Wc(),Rd(f,2)}if(f=Cd(o),f===null&&cd(e,n,o,ru,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else cd(e,n,o,null,a)}}function Cd(e){return e=pf(e),Dd(e)}var ru=null;function Dd(e){if(ru=null,e=Ye(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ru=e,null}function G_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Xt:return 2;case kt:return 8;case Dt:case Mt:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Ud=!1,gr=null,vr=null,_r=null,gl=new Map,vl=new Map,yr=[],KE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,n){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function _l(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Me(n),n!==null&&H_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function QE(e,n,a,o,u){switch(n){case"focusin":return gr=_l(gr,e,n,a,o,u),!0;case"dragenter":return vr=_l(vr,e,n,a,o,u),!0;case"mouseover":return _r=_l(_r,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return gl.set(f,_l(gl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,vl.set(f,_l(vl.get(f)||null,e,n,a,o,u)),!0}return!1}function X_(e){var n=Ye(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ct(e.priority,function(){V_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ct(e.priority,function(){V_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);df=o,a.target.dispatchEvent(o),df=null}else return n=Me(a),n!==null&&H_(n),e.blockedOn=a,!1;n.shift()}return!0}function q_(e,n,a){su(e)&&a.delete(n)}function JE(){Ud=!1,gr!==null&&su(gr)&&(gr=null),vr!==null&&su(vr)&&(vr=null),_r!==null&&su(_r)&&(_r=null),gl.forEach(q_),vl.forEach(q_)}function ou(e,n){e.blockedOn===n&&(e.blockedOn=null,Ud||(Ud=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,JE)))}var lu=null;function Y_(e){lu!==e&&(lu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lu===e&&(lu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Dd(o||a)===null)continue;break}var f=Me(a);f!==null&&(e.splice(n,3),n-=3,hh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function to(e){function n(G){return ou(G,e)}gr!==null&&ou(gr,e),vr!==null&&ou(vr,e),_r!==null&&ou(_r,e),gl.forEach(n),vl.forEach(n);for(var a=0;a<yr.length;a++){var o=yr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<yr.length&&(a=yr[0],a.blockedOn===null);)X_(a),a.blockedOn===null&&yr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Yt]||null;if(typeof f=="function")y||Y_(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Yt]||null)R=y.formAction;else if(Dd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Y_(a)}}}function W_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nd(e){this._internalRoot=e}cu.prototype.render=Nd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=bi();F_(a,o,e,n,null,null)},cu.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;F_(e.current,2,null,e,null,null),Wc(),n[ce]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wt();e={blockedOn:null,target:e,priority:n};for(var a=0;a<yr.length&&n!==0&&n<yr[a].priority;a++);yr.splice(a,0,e),a===0&&X_(e)}};var j_=t.version;if(j_!=="19.3.1")throw Error(r(527,j_,"19.3.1"));zt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var $E={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:St,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{ye=uu.inject($E),ke=uu}catch{}}return xl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Ig,f=Fg,y=Bg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=P_(e,1,!1,null,null,a,o,null,u,f,y,W_),e[ce]=n.current,ld(e),new Nd(n)},xl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Ig,y=Fg,R=Bg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=P_(e,1,!0,n,a??null,o,u,G,f,y,R,W_),n.context=I_(null),a=n.current,o=bi(),o=_t(o),u=ir(o),u.callback=null,ar(a,u,o),a=o,n.current.lanes=a,un(n,a),_a(n),e[ce]=n.current,ld(e),new cu(n)},xl.version="19.3.1",xl}var ay;function c1(){if(ay)return zd.exports;ay=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),zd.exports=l1(),zd.exports}var u1=c1();function f1(s){const t=parseInt(s.dataset.count,10),i=1200,r=performance.now();function l(c){const h=c-r,d=Math.min(h/i,1),m=1-Math.pow(1-d,3);s.textContent=Math.floor(m*t),d<1?requestAnimationFrame(l):s.textContent=t}requestAnimationFrame(l)}function h1(){fe.useEffect(()=>{const s=document.querySelector(".scroll-progress"),t=document.querySelector("header"),i=Array.from(document.querySelectorAll(".nav-link")),r=Array.from(document.querySelectorAll("section[id]")),l=document.querySelector(".hero-content"),c=()=>document.querySelectorAll(".reveal:not(.visible), .section-head:not(.visible)");let h=!1;function d(){const _=window.innerHeight;c().forEach(M=>{if(M.getBoundingClientRect().top<_*.88){M.classList.add("visible");const E=M.querySelector("[data-count]");E&&!E.dataset.counted&&(E.dataset.counted="1",f1(E))}})}function m(){h=!1;const _=window.scrollY;d();const M=document.documentElement.scrollHeight-window.innerHeight;s&&M>0&&(s.style.width=`${_/M*100}%`),t&&t.classList.toggle("scrolled",_>100);let E="";for(let x=0;x<r.length;x++)_>=r[x].offsetTop-200&&(E=r[x].id);const D=`#${E}`;for(let x=0;x<i.length;x++)i[x].classList.toggle("active",i[x].getAttribute("href")===D);if(l&&_<window.innerHeight){const x=_*.18;l.style.transform=x?`translate3d(0, ${x}px, 0)`:"",l.style.opacity=String(Math.max(0,1-_/700))}}function p(){h||(h=!0,requestAnimationFrame(m))}function v(_){const M=_.currentTarget.getAttribute("href");if(!M||!M.startsWith("#"))return;if(M==="#"){_.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});return}const E=document.querySelector(M);E&&(_.preventDefault(),E.scrollIntoView({behavior:"smooth",block:"start"}))}document.querySelectorAll(".reveal").forEach((_,M)=>{_.style.transitionDelay=`${M%4*.06}s`}),m();const g=document.querySelectorAll('a[href^="#"]');return g.forEach(_=>_.addEventListener("click",v)),window.addEventListener("scroll",p,{passive:!0}),()=>{window.removeEventListener("scroll",p),g.forEach(_=>_.removeEventListener("click",v))}},[])}const d1=[{href:"#about",label:"关于"},{href:"#skills",label:"技能"},{href:"#work",label:"作品"},{href:"#contact",label:"联系"}],p1=[{count:5,label:"年经验"},{count:30,label:"个项目"},{count:100,label:"专注度"}],m1=[{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",alt:"JavaScript"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",alt:"TypeScript"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",alt:"Vue.js"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",alt:"React"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",alt:"HTML5"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",alt:"CSS3"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",alt:"Vite"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",alt:"Node.js"}],g1=[{num:"01",name:"企业级管理后台",tags:"Vue3 · TypeScript · Element Plus",image:"https://picsum.photos/id/1015/900/1200",label:"企业级管理后台",link:"#",accent:"#ff8a4c"},{num:"02",name:"电商小程序",tags:"微信小程序 · Vant · 云开发",image:"https://picsum.photos/id/1018/900/1200",label:"电商小程序",link:"#",accent:"#ff5a36"},{num:"03",name:"数据可视化大屏",tags:"ECharts · Three.js · WebGL",image:"https://picsum.photos/id/1039/900/1200",label:"数据可视化大屏",link:"#",accent:"#a98bff"},{num:"04",name:"移动端 H5 活动页",tags:"Vue · CSS3动画 · 性能优化",image:"https://picsum.photos/id/1043/900/1200",label:"移动端 H5 活动页",link:"#",accent:"#ffb27a"},{num:"05",name:"设计系统与组件库",tags:"React · Storybook · Design Tokens",image:"https://picsum.photos/id/1044/900/1200",label:"设计系统与组件库",link:"#",accent:"#7cc4ff"},{num:"06",name:"个人作品集站点",tags:"React · Vite · 动效交互",image:"https://picsum.photos/id/1040/900/1200",label:"个人作品集站点",link:"#",accent:"#ff7eb6"}],v1=[{name:"GitHub",href:"#"},{name:"掘金",href:"#"},{name:"微信",href:"#"},{name:"LinkedIn",href:"#"}];function _1(){return Pt.jsxs("header",{children:[Pt.jsx("div",{className:"brand",children:"作品集"}),Pt.jsx("ul",{className:"menu",children:d1.map(s=>Pt.jsx("li",{children:Pt.jsx("a",{href:s.href,className:"nav-link",children:s.label})},s.href))})]})}const go=(s,t,i)=>Math.min(i,Math.max(t,s)),fu=(s,t,i)=>s+(t-s)*i,ry=s=>1-(1-s)**3;function oi(s){const t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Rp(s,t="#ffffff"){return!s||typeof s!="string"?t:s}function Xu(s,t,i){const r=(s==null?void 0:s.trim())||"system-ui, sans-serif";return`${t} ${i}px ${r}`}function y1(s,t,i,r,l,c,h,d,m){const p=String(t).split(`
`);s.font=Xu(s._fontFamily,s._fontWeight,i),s.textBaseline="alphabetic",s.textAlign="left";const v=r*i,g=U=>{if(!v)return s.measureText(U).width;let k=0;const V=Array.from(U);return V.forEach((I,B)=>{k+=s.measureText(I).width,B<V.length-1&&(k+=v)}),k};let _=i;if(_<=0){_=120;const U=h==="top"?Math.min(m*.92,Math.max(150,d*.34)):m*.82;for(let k=0;k<8;k++){s.font=Xu(s._fontFamily,s._fontWeight,_);const V=Math.max(...p.map(g),1),I=p.length*_*l,B=Math.min(d*.94/V,U/I);_=Math.max(18,_*B)}}s.font=Xu(s._fontFamily,s._fontWeight,_);const M=p.map(U=>({text:U,width:g(U)})),E=Math.max(...M.map(U=>U.width),1),D=p.length*_*l,x=c==="left"?d*.04:c==="right"?d-d*.04-E:(d-E)/2,S=Math.min(_*.1,Math.max(4,(m-D)*.15)),F=h==="top"?S+_*.82:(m-D)/2+_*.8,z=M.map((U,k)=>{const V=c==="left"?x:c==="right"?x+(E-U.width):x+(E-U.width)/2,I=F+k*_*l;return{...U,x:V,y:I}});return{size:_,lines:z,blockW:E,blockH:D,originX:x,originY:Math.max(0,F-_*.85)}}function x1(s,t,i,r,l){s.fillStyle=l,s.font=Xu(s._fontFamily,s._fontWeight,i),s.textBaseline="alphabetic";const c=r*i;t.forEach(h=>{if(!c){s.fillText(h.text,h.x,h.y);return}let d=h.x;Array.from(h.text).forEach(m=>{s.fillText(m,d,h.y),d+=s.measureText(m).width+c})})}function S1(s,t,i,r,l,c,h,d){const m=document.createElement("canvas");m.width=Math.max(1,Math.ceil(s*i)),m.height=Math.max(1,Math.ceil(t*i));const p=m.getContext("2d");p.setTransform(i,0,0,i,0,0),p._fontFamily=h,p._fontWeight=d;const v=p.createLinearGradient(r.originX,0,r.originX+r.blockW,0);return v.addColorStop(0,Rp(l[0],"#f5f5f5")),v.addColorStop(1,Rp(l[1]??l[0],"#f5f5f5")),x1(p,r.lines,r.size,c,v),m}function M1(s,t,i,r,l){const c=go(Math.floor(r),0,t-1),h=go(Math.floor(l),0,i-1);return s[(h*t+c)*4+3]>24}function E1(s,t,i){return{x:(s.x+t.x+i.x)/3,y:(s.y+t.y+i.y)/3}}function T1(s,t,i,r,l,c){const h=Math.max(10,t*Math.max(.04,i)),d=h*.4,m=s.x-d,p=s.y-d,v=s.x+s.w+d,g=s.y+s.h+d,_=Math.max(2,Math.ceil((v-m)/h)),M=Math.max(2,Math.ceil((g-p)/h)),E=[];for(let V=0;V<=M;V++)for(let I=0;I<=_;I++){const B=(oi(V*97+I*13+1)-.5)*h*r,L=(oi(V*53+I*29+7)-.5)*h*r;E.push({x:m+I/_*(v-m)+B,y:p+V/M*(g-p)+L,r:V,c:I})}const D=(V,I)=>V*(_+1)+I,x=[];for(let V=0;V<M;V++)for(let I=0;I<_;I++){const B=E[D(V,I)],L=E[D(V,I+1)],T=E[D(V+1,I)],P=E[D(V+1,I+1)];(V+I)%2===0?x.push([B,L,P],[B,P,T]):x.push([B,L,T],[L,P,T])}const S=l.width,F=l.height,U=l.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,S,F).data,k=[];return x.forEach((V,I)=>{const[B,L,T]=V,P=E1(B,L,T);if(![P,{x:(B.x+L.x)/2,y:(B.y+L.y)/2},{x:(L.x+T.x)/2,y:(L.y+T.y)/2},{x:(T.x+B.x)/2,y:(T.y+B.y)/2},B,L,T].some(W=>M1(U,S,F,W.x*c,W.y*c)))return;const ft=oi(I*3.1)-.5,Tt=oi(I*5.7)-.5,st=Math.hypot(ft,Tt)||1;k.push({a:B,b:L,c:T,cx:P.x,cy:P.y,nx:ft/st,ny:Tt/st,ox:0,oy:0,oz:0,rot:0,vx:0,vy:0,vz:0,vr:0,crack:0,fly:0,flash:0,homeDelay:oi(I*9.1)})}),k}function b1(s,t,i,r,l,c,h){const{a:d,b:m,c:p,cx:v,cy:g,ox:_,oy:M,oz:E,rot:D,crack:x,flash:S}=t,F=E*18,z=1+E*.35,U=x*h*3.2;s.save(),s.translate(v+_+t.nx*U,g+M+t.ny*U-F),s.rotate(D),s.scale(z,z),s.translate(-v,-g);const k=Math.abs(D)>.55||E>.55;if(s.beginPath(),s.moveTo(d.x,d.y),s.lineTo(m.x,m.y),s.lineTo(p.x,p.y),s.closePath(),k?(s.fillStyle=l,s.globalAlpha=.92,s.fill()):(s.save(),s.clip(),s.drawImage(i,0,0,i.width,i.height,0,0,i.width/r,i.height/r),s.restore(),x>.04&&(s.strokeStyle=`rgba(255,255,255,${.12+x*.4})`,s.lineWidth=.6+x*.7,s.stroke())),S>.01||c>0&&Math.abs(D)>.15){const V=s.createLinearGradient(d.x,d.y,p.x,p.y);V.addColorStop(0,`rgba(255,255,255,${.05*c+S*.55})`),V.addColorStop(.5,`rgba(255,255,255,${.18*c+S*.8})`),V.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=V,s.globalAlpha=1,s.fill()}s.restore()}function A1({text:s="Shatter",fontFamily:t="",fontWeight:i=700,fontSize:r=0,letterSpacing:l=-.02,lineHeight:c=1.05,align:h="center",verticalAlign:d="center",colors:m=["currentColor","currentColor"],accentColor:p="#7B5CFF",shardSize:v=.09,irregularity:g=.6,crack:_=.6,crackRadius:M=.5,heal:E=.9,shatter:D=!0,shatterRadius:x=.55,force:S=1,spin:F=1,depth:z=1,gravity:U=0,reassemble:k=1.1,stiffness:V=.55,glint:I=.8,intro:B="assemble",introDuration:L=1.6,autoplay:T=!1,autoplayInterval:P=4,interactive:it=!0,paused:ft=!1,quality:Tt=1,className:st="",style:W}){const et=fe.useRef(null),Z=fe.useRef(null),Et=fe.useRef({}),wt=fe.useRef(()=>{});return Et.current={text:s,fontFamily:t,fontWeight:i,fontSize:r,letterSpacing:l,lineHeight:c,align:h,verticalAlign:d,colors:m,accentColor:p,shardSize:v,irregularity:g,crack:_,crackRadius:M,heal:E,shatter:D,shatterRadius:x,force:S,spin:F,depth:z,gravity:U,reassemble:k,stiffness:V,glint:I,intro:B,introDuration:L,autoplay:T,autoplayInterval:P,interactive:it,paused:ft,quality:Tt},fe.useEffect(()=>{var Zt;const Ot=et.current,te=Z.current;if(!Ot||!te)return;const ne=te.getContext("2d",{alpha:!0});let C=0,A=!0,H=!0,q=0,lt=0,At=1,bt=null,St=[],zt={x:-9999,y:-9999,inside:!1},O=0,yt=!1,mt=performance.now(),J=0,Q=0,ht=[],xt=!0;const Nt=()=>{const Vt=Et.current,qt=getComputedStyle(Ot).color||"#f5f5f5";return Vt.colors.map(Ft=>Ft==="currentColor"?qt:Ft)},Jt=()=>{const Vt=Et.current,qt=Ot.getBoundingClientRect();q=Math.max(1,qt.width),lt=Math.max(1,qt.height),At=Math.min(1.5,(window.devicePixelRatio||1)*go(Vt.quality,.5,1)),te.width=Math.ceil(q*At),te.height=Math.ceil(lt*At),ne.setTransform(At,0,0,At,0,0),xt=!0;const Ft=document.createElement("canvas").getContext("2d");Ft._fontFamily=Vt.fontFamily,Ft._fontWeight=Vt.fontWeight;const pe=y1(Ft,Vt.text,Vt.fontSize,Vt.letterSpacing,Vt.lineHeight,Vt.align,Vt.verticalAlign,q,lt);bt=S1(q,lt,At,pe,Nt(),Vt.letterSpacing,Vt.fontFamily,Vt.fontWeight);const Y={x:pe.originX,y:pe.originY,w:pe.blockW,h:pe.blockH};St=T1(Y,pe.size,Vt.shardSize,Vt.irregularity,bt,At),Vt.intro==="assemble"||Vt.intro==="drop"?(O=0,yt=!1,St.forEach((Ct,Xt)=>{const kt=oi(Xt*2.3)*Math.PI*2,Dt=80+oi(Xt*4.1)*160;Vt.intro==="drop"?(Ct.sx=(oi(Xt*1.7)-.5)*40,Ct.sy=-120-oi(Xt*2.9)*180):(Ct.sx=Math.cos(kt)*Dt,Ct.sy=Math.sin(kt)*Dt),Ct.sz=.4+oi(Xt*6.2)*.8,Ct.sr=(oi(Xt*8.4)-.5)*2.4,Ct.ox=Ct.sx,Ct.oy=Ct.sy,Ct.oz=Ct.sz,Ct.rot=Ct.sr,Ct.fly=0})):(yt=!0,O=1)},$t=(Vt,qt)=>{const Ft=Et.current;if(!Ft.shatter)return;const pe=Math.max(24,Ft.shatterRadius*(N()||80)),Y=Math.max(30,Ft.crackRadius*(N()||80)*1.6);Q=performance.now()+Ft.reassemble*1e3,St.forEach(Ct=>{const Xt=Ct.cx-Vt,kt=Ct.cy-qt,Dt=Math.hypot(Xt,kt);if(Dt<pe){const Mt=(1-Dt/pe)*Ft.force,ie=Math.atan2(kt,Xt)+(oi(Ct.cx+Ct.cy)-.5)*.8;Ct.vx+=Math.cos(ie)*(180+Mt*420),Ct.vy+=Math.sin(ie)*(180+Mt*420)-80*Ft.force,Ct.vz+=(.8+oi(Ct.cy)*1.2)*Ft.depth*Mt,Ct.vr+=(oi(Ct.cx)-.5)*10*Ft.spin*Mt,Ct.fly=1,Ct.flash=1,Ct.crack=1}else Dt<Y&&(Ct.crack=Math.max(Ct.crack,.35+(1-Dt/Y)*.65))}),tt()},N=()=>{const Vt=Et.current;return Vt.fontSize>0?Vt.fontSize:Math.max(24,Math.min(q,lt)*.18)},b=Vt=>{if(!Et.current.interactive)return;const qt=Ot.getBoundingClientRect();zt.x=Vt.clientX-qt.left,zt.y=Vt.clientY-qt.top,zt.inside=!0,tt()},X=()=>{zt.inside=!1,zt.x=-9999,zt.y=-9999},pt=Vt=>{if(!Et.current.interactive||!Et.current.shatter)return;const qt=Ot.getBoundingClientRect();$t(Vt.clientX-qt.left,Vt.clientY-qt.top)},Rt=Vt=>{if(!A||(C=0,!H||document.hidden))return;const qt=go((Vt-mt)/1e3,.001,.05);mt=Vt;const Ft=Et.current;let pe=!yt;if(!Ft.paused)if(yt){const kt=N(),Dt=Math.max(20,Ft.crackRadius*kt),Mt=8+Ft.stiffness*26,ie=.86-Ft.stiffness*.08;for(let me=0;me<St.length;me++){const ee=St[me];if(zt.inside&&Ft.interactive){const ye=Math.hypot(ee.cx-zt.x,ee.cy-zt.y);if(ye<Dt){const ke=(1-ye/Dt)*Ft.crack;ee.crack=Math.max(ee.crack,ke)}}(ee.fly>0||Math.hypot(ee.vx,ee.vy,ee.vz,ee.vr)>.2)&&(pe=!0,xt=!0,ee.vy+=Ft.gravity*900*qt,ee.ox+=ee.vx*qt,ee.oy+=ee.vy*qt,ee.oz+=ee.vz*qt,ee.rot+=ee.vr*qt,ee.vx*=ie,ee.vy*=ie,ee.vz*=ie,ee.vr*=ie,Vt>Q&&(ee.vx+=-ee.ox*Mt*qt,ee.vy+=-ee.oy*Mt*qt,ee.vz+=-ee.oz*Mt*qt,ee.vr+=-ee.rot*Mt*qt,Math.hypot(ee.ox,ee.oy,ee.oz,ee.rot)<.8&&Math.hypot(ee.vx,ee.vy)<8&&(ee.ox=ee.oy=ee.oz=ee.rot=0,ee.vx=ee.vy=ee.vz=ee.vr=0,ee.fly=0,ee.flash=Math.max(ee.flash,.7)))),(ee.crack>0||ee.flash>0)&&(pe=!0),ee.crack=Math.max(0,ee.crack-qt/Math.max(.15,Ft.heal)),ee.flash=Math.max(0,ee.flash-qt*2.4)}if(Ft.autoplay&&!zt.inside&&(J+=qt,J>=Ft.autoplayInterval)){J=0;const me=St[Math.floor(oi(Vt)*St.length)]||St[0];me&&$t(me.cx,me.cy)}}else{O=go(O+qt/Math.max(.2,Ft.introDuration),0,1);const kt=ry(O);for(let Dt=0;Dt<St.length;Dt++){const Mt=St[Dt],ie=go((kt-Mt.homeDelay*.35)/.65,0,1),me=ry(ie);Mt.ox=fu(Mt.sx||0,0,me),Mt.oy=fu(Mt.sy||0,0,me),Mt.oz=fu(Mt.sz||0,0,me),Mt.rot=fu(Mt.sr||0,0,me),ie>.92&&(Mt.flash=Math.max(Mt.flash,(ie-.92)/.08))}if(xt=!0,O>=1){yt=!0;for(let Dt=0;Dt<St.length;Dt++){const Mt=St[Dt];Mt.ox=Mt.oy=Mt.oz=Mt.rot=0,Mt.vx=Mt.vy=Mt.vz=Mt.vr=0}}}ne.clearRect(0,0,q,lt);const Y=Rp(Ft.accentColor,"#7B5CFF");if(yt&&!zt.inside&&Vt>Q+200&&!St.some(kt=>kt.fly||kt.crack>.02||kt.flash>.02||Math.hypot(kt.ox,kt.oy,kt.oz,kt.rot)>.15)&&bt)ne.drawImage(bt,0,0,bt.width,bt.height,0,0,q,lt);else{xt&&(ht=St.slice().sort((kt,Dt)=>kt.oz-Dt.oz||kt.cy-Dt.cy),xt=!1);for(let kt=0;kt<ht.length;kt++)b1(ne,ht[kt],bt,At,Y,Ft.glint,Ft.crack)}(pe||zt.inside||Vt<Q+600||!yt)&&!Ft.paused&&H&&!document.hidden&&(C=requestAnimationFrame(Rt))},tt=()=>{C||!A||!H||document.hidden||(mt=performance.now(),C=requestAnimationFrame(Rt))};wt.current=tt;let jt="",Gt=0;const Kt=new ResizeObserver(()=>{const Vt=`${Math.round(Ot.clientWidth)}x${Math.round(Ot.clientHeight)}`;Vt===jt&&bt||(jt=Vt,clearTimeout(Gt),Gt=window.setTimeout(()=>{Jt(),tt()},80))}),Qt=new IntersectionObserver(([Vt])=>{H=Vt.isIntersecting,H?tt():C&&(cancelAnimationFrame(C),C=0)},{threshold:.05}),Bt=()=>{Jt(),jt=`${Math.round(Ot.clientWidth)}x${Math.round(Ot.clientHeight)}`,tt()};return(Zt=document.fonts)!=null&&Zt.ready?document.fonts.ready.then(Bt).catch(Bt):Bt(),Kt.observe(Ot),Qt.observe(Ot),Ot.addEventListener("pointermove",b,{passive:!0}),Ot.addEventListener("pointerenter",b,{passive:!0}),Ot.addEventListener("pointerleave",X),Ot.addEventListener("pointerdown",pt),document.addEventListener("visibilitychange",tt),()=>{A=!1,cancelAnimationFrame(C),clearTimeout(Gt),Kt.disconnect(),Qt.disconnect(),document.removeEventListener("visibilitychange",tt),Ot.removeEventListener("pointermove",b),Ot.removeEventListener("pointerenter",b),Ot.removeEventListener("pointerleave",X),Ot.removeEventListener("pointerdown",pt)}},[]),Pt.jsxs("div",{ref:et,className:`shatter-type ${st}`.trim(),style:W,role:"img","aria-label":s,children:[Pt.jsx("span",{className:"shatter-type-sr",children:s}),Pt.jsx("canvas",{ref:Z,className:"shatter-type-canvas"})]})}const hu=4,sy=2.4,R1=2.2,du=1.25,w1="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",C1="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",D1={solid:0,dashed:1,dotted:2},U1=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,N1=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uPixel;
uniform vec3 uEye;
uniform float uDepth;
uniform vec3 uCell;
uniform float uThick;
uniform float uDot;
uniform int uStyle;
uniform vec3 uLineColor;
uniform vec3 uScanColor;
uniform vec3 uCoreColor;
uniform float uFade;
uniform float uScanZ;
uniform float uScanDir;
uniform float uScanAlpha;
uniform float uScanWidth;
uniform float uTrail;
uniform float uReveal;
uniform float uPoints;
uniform float uReflect;
uniform float uHaze;
uniform float uShade;
uniform float uLight;
uniform vec4 uPing[4];
uniform float uPingAlpha[4];
uniform vec4 uHover;
uniform float uTime;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
layout(location = 1) out vec4 outGlow;

struct Light {
  float grid;
  float fade;
  float core;
  float trail;
  float spill;
  float ping;
  float wake;
  float reveal;
};

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

vec2 hash2(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy);
}

float lines(float across, float along, float period, float dash, float fa, float fb) {
  float u = across / period;
  float du = fa / period;
  float d = abs(fract(u + 0.5) - 0.5) / max(du, 1e-5);
  float dense = smoothstep(0.1, 0.4, du);
  if (uStyle == 2) {
    float c = along / dash * 5.0;
    float dc = fb / dash * 5.0;
    float e = abs(fract(c + 0.5) - 0.5) / max(dc, 1e-5);
    float cov = clamp(uThick + 1.0 - length(vec2(d, e)), 0.0, 1.0);
    float mean = min(1.0, 3.1416 * (uThick + 0.5) * (uThick + 0.5) * du * dc);
    return mix(cov, mean, max(dense, smoothstep(0.1, 0.4, dc)));
  }
  float cov = clamp(uThick + 0.5 - d, 0.0, 1.0);
  float mean = min(1.0, 2.0 * uThick * du);
  if (uStyle == 1) {
    float c = along / dash * 4.0;
    float dc = fb / dash * 4.0;
    float e = abs(fract(c + 0.5) - 0.5);
    float m = clamp((0.25 - e) / max(dc, 1e-5) + 0.5, 0.0, 1.0);
    cov *= mix(m, 0.5, smoothstep(0.1, 0.4, dc));
    mean *= 0.5;
  }
  return mix(cov, mean, dense);
}

float depthFade(float z) {
  float n = clamp(z / uDepth, 0.0, 1.0);
  return mix(1.0, (exp(-3.0 * n) - 0.0497871) / 0.9502129, uFade);
}

vec3 project(vec3 eye, vec3 o, int face, float plane) {
  vec3 d = o - eye;
  float t = face == 0 ? (plane - o.x) / d.x : (face == 1 ? (plane - o.y) / d.y : (plane - o.z) / d.z);
  return o + d * t;
}

void trace(vec3 o, vec3 d, out int face, out float plane, out vec3 h) {
  float sx = d.x > 0.0 ? 0.5 * uAspect : -0.5 * uAspect;
  float sy = d.y > 0.0 ? 0.5 : -0.5;
  float tx = abs(d.x) > 1e-6 ? (sx - o.x) / d.x : 1e9;
  float ty = abs(d.y) > 1e-6 ? (sy - o.y) / d.y : 1e9;
  float t = (uDepth - o.z) / d.z;
  face = 2;
  plane = uDepth;
  if (tx < t) {
    face = 0;
    plane = sx;
    t = tx;
  }
  if (ty < t) {
    face = 1;
    plane = sy;
    t = ty;
  }
  h = o + d * t;
}

vec2 faceUv(vec3 h, int face) {
  if (face == 0) return vec2(h.z, h.y + 0.5);
  if (face == 1) return vec2(h.x + 0.5 * uAspect, h.z);
  return vec2(h.x + 0.5 * uAspect, h.y + 0.5);
}

Light illuminate(vec3 h, int face, vec2 uv, vec2 foot, float blur) {
  Light l;
  vec2 cell = face == 0 ? uCell.zy : (face == 1 ? uCell.xz : uCell.xy);
  vec2 f = foot * blur;
  float minor = max(lines(uv.x, uv.y, cell.x, cell.y, f.x, f.y), lines(uv.y, uv.x, cell.y, cell.x, f.y, f.x));
  float major = max(
    lines(uv.x, uv.y, cell.x * 4.0, cell.y, f.x, f.y),
    lines(uv.y, uv.x, cell.y * 4.0, cell.x, f.y, f.x)
  );
  l.grid = max(minor * 0.75, major) / blur;
  float z = h.z;
  l.fade = depthFade(z);
  l.reveal = smoothstep(uReveal, uReveal - 0.2, z);
  float zFoot = face == 0 ? f.x : (face == 1 ? f.y : 0.0);
  float width = max(uScanWidth, zFoot * 1.1);
  float dz = z - uScanZ;
  l.core = exp(-dz * dz / (width * width)) * (face == 2 ? 0.45 : 1.0) * uScanAlpha;
  float behind = -dz * uScanDir;
  l.trail = exp(-max(behind, 0.0) / uTrail) * smoothstep(-width, width * 0.5, behind) * uScanAlpha;
  l.spill = exp(-dz * dz / 0.05) * uScanAlpha;
  l.ping = 0.0;
  l.wake = 0.0;
  for (int i = 0; i < 4; i++) {
    float alpha = uPingAlpha[i];
    if (alpha <= 0.0) continue;
    float dist = length(h - uPing[i].xyz) - uPing[i].w;
    l.ping += exp(-dist * dist / 0.0012) * alpha;
    l.wake += exp(min(dist, 0.0) / 0.22) * smoothstep(0.03, -0.03, dist) * alpha;
  }
  return l;
}

void over(inout vec4 acc, vec3 color, float alpha) {
  alpha = clamp(alpha, 0.0, 1.0);
  acc = vec4(color * alpha, alpha) + acc * (1.0 - alpha);
}

void paint(inout vec4 color, inout float energy, Light l, float gain, float lift, float hover) {
  float base = l.grid * l.fade * l.reveal * lift;
  float far = l.fade * l.reveal * gain;
  float lit = l.grid * (l.core * 1.2 + l.trail * 0.75 + l.ping * 1.4 + l.wake * 0.5 + hover * 0.5) * far;
  float sheen = (l.core * 0.14 + l.spill * 0.05 + l.trail * 0.03 + l.ping * 0.2 + l.wake * 0.04) * far;
  float laser = (l.core + l.ping * 0.35) * far;
  over(color, uLineColor, base);
  over(color, uScanColor, sheen);
  over(color, uScanColor, lit);
  over(color, uCoreColor, laser * 0.9);
  energy += laser * 0.9 + lit * 0.5;
}

void main() {
  vec3 p = vec3((vUv.x - 0.5) * uAspect, vUv.y - 0.5, 0.0);
  vec3 d = p - uEye;
  int face;
  float plane;
  vec3 h;
  trace(p, d, face, plane, h);
  vec3 hx = project(uEye, p + vec3(uPixel, 0.0, 0.0), face, plane);
  vec3 hy = project(uEye, p + vec3(0.0, uPixel, 0.0), face, plane);
  vec2 uv = faceUv(h, face);
  vec2 ux = faceUv(hx, face) - uv;
  vec2 uy = faceUv(hy, face) - uv;
  vec2 foot = vec2(length(vec2(ux.x, uy.x)), length(vec2(ux.y, uy.y)));
  Light l = illuminate(h, face, uv, foot, 1.0);

  vec4 color = vec4(0.0);
  float energy = 0.0;

  if (uShade > 0.0) {
    vec2 gaps = face == 0
      ? vec2(0.5 - abs(h.y), uDepth - h.z)
      : (face == 1 ? vec2(0.5 * uAspect - abs(h.x), uDepth - h.z) : vec2(0.5 * uAspect - abs(h.x), 0.5 - abs(h.y)));
    vec2 crease = 1.0 - exp(-max(gaps, 0.0) / 0.16);
    float occlusion = crease.x * crease.y;
    float lamp = 1.0 / (1.0 + h.z * h.z * 0.9);
    float tilt = face == 1 ? (plane < 0.0 ? 1.1 : 0.85) : (face == 2 ? 0.8 : 1.0);
    float glowSpill = (l.spill * 0.5 + l.trail * 0.12) * l.reveal * l.fade;
    if (uLight > 0.5) {
      float shadow = (1.0 - lamp * tilt) * 0.09 + (1.0 - occlusion) * 0.2;
      over(color, vec3(0.0), shadow * uShade * l.reveal * l.fade);
    } else {
      over(color, vec3(1.0), lamp * tilt * occlusion * 0.11 * uShade * l.reveal * l.fade);
    }
    over(color, uScanColor, glowSpill * uShade * occlusion * 0.35);
  }

  if (face == 1 && plane < 0.0 && uReflect > 0.0) {
    vec3 mirror = vec3(uEye.x, -1.0 - uEye.y, uEye.z);
    vec3 r = h - mirror;
    int face2;
    float plane2;
    vec3 h2;
    trace(h, r, face2, plane2, h2);
    vec2 uv2 = faceUv(h2, face2);
    vec2 ux2 = faceUv(project(mirror, hx, face2, plane2), face2) - uv2;
    vec2 uy2 = faceUv(project(mirror, hy, face2, plane2), face2) - uv2;
    vec2 foot2 = vec2(length(vec2(ux2.x, uy2.x)), length(vec2(ux2.y, uy2.y)));
    float travel = length(h2 - h);
    Light m = illuminate(h2, face2, uv2, foot2, 1.0 + travel * 4.0);
    m.reveal *= l.reveal;
    float grazing = 1.0 - normalize(r).y;
    float gain = (0.3 + 0.7 * grazing * grazing * grazing * grazing) * uReflect * exp(-travel * 1.1) * (uLight > 0.5 ? 0.6 : 1.0);
    float reflected = 0.0;
    paint(color, reflected, m, gain, 0.0, 0.0);
    energy += reflected * 0.6;
  }

  vec3 near = h - uHover.xyz;
  float hover = exp(-dot(near, near) / 0.08) * uHover.w;
  paint(color, energy, l, 1.0, 1.0, hover);

  if (uPoints > 0.5) {
    vec2 cell = face == 0 ? uCell.zy : (face == 1 ? uCell.xz : uCell.xy);
    vec2 spacing = cell / 2.5;
    vec2 q = uv / spacing;
    vec2 id = floor(q);
    vec2 seed = id + vec2(float(face) * 13.7 + plane * 5.3, float(face) * 3.1);
    vec2 delta = (q - id - (0.2 + 0.6 * hash2(seed))) * spacing;
    float det = ux.x * uy.y - ux.y * uy.x;
    vec2 s = vec2(delta.x * uy.y - delta.y * uy.x, ux.x * delta.y - ux.y * delta.x) / det;
    float radius = uDot * mix(1.0, 0.55, clamp(h.z / uDepth, 0.0, 1.0));
    float spot = clamp(radius + 0.5 - length(s), 0.0, 1.0);
    float gap = min(spacing.x / foot.x, spacing.y / foot.y);
    float r = hash(seed + 7.7);
    float flicker = 0.75 + 0.25 * sin(uTime * (3.0 + r * 5.0) + r * 40.0);
    float dots = spot * smoothstep(5.0, 10.0, gap) * smoothstep(0.25, 0.6, r) * (0.3 + 0.7 * r * r) * flicker;
    float hot = l.core * 2.5 + l.ping * 1.6;
    float warm = l.trail * l.trail * 1.3 + l.wake * 0.6 + hover * 1.3;
    float spark = dots * (hot + warm) * l.fade * l.reveal;
    over(color, mix(uScanColor, uCoreColor, clamp(hot / max(hot + warm, 1e-4), 0.0, 1.0)), spark);
    energy += spark * 0.9;
  }

  if (uHaze > 0.0 && uScanAlpha > 0.0 && uScanZ > 0.0 && h.z > uScanZ) {
    vec3 c = p + d * (uScanZ / d.z);
    float grain = hash(floor(c.xy * 180.0) + floor(uTime * 24.0) * 7.0);
    float edge = min(0.5 * uAspect - abs(c.x), 0.5 - abs(c.y));
    float rim = exp(-edge / 0.06);
    float veil = uHaze * uScanAlpha * (0.45 + 0.9 * grain) * (0.55 + rim * 1.6);
    over(color, uScanColor, veil * depthFade(uScanZ) * l.reveal);
  }

  energy = clamp(energy, 0.0, 1.0);
  outColor = color;
  outGlow = vec4(uScanColor * energy, energy);
}`,L1=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec2 o = uTexel;
  outColor = 0.25 * (
    texture(uSource, vUv + vec2(-o.x, -o.y)) +
    texture(uSource, vUv + vec2(o.x, -o.y)) +
    texture(uSource, vUv + vec2(-o.x, o.y)) +
    texture(uSource, vUv + vec2(o.x, o.y))
  );
}`,O1=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uStep;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec4 sum = texture(uSource, vUv) * 0.1964825501511404;
  sum += (texture(uSource, vUv + uStep * 1.411764705882353) + texture(uSource, vUv - uStep * 1.411764705882353)) * 0.2969069646728344;
  sum += (texture(uSource, vUv + uStep * 3.2941176470588234) + texture(uSource, vUv - uStep * 3.2941176470588234)) * 0.09447039785044732;
  sum += (texture(uSource, vUv + uStep * 5.176470588235294) + texture(uSource, vUv - uStep * 5.176470588235294)) * 0.010381362401148057;
  outColor = sum;
}`,z1=`#version 300 es
precision highp float;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uGlow;
in vec2 vUv;
out vec4 outColor;
float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
void main() {
  vec4 scene = texture(uScene, vUv);
  vec4 bloom = texture(uBloom, vUv) * uGlow;
  bloom.a = min(bloom.a, 1.0);
  bloom.rgb = min(bloom.rgb, vec3(bloom.a));
  vec4 color = scene + bloom * (1.0 - scene.a);
  float noise = (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  color.a = clamp(color.a + noise, 0.0, 1.0);
  color.rgb = clamp(color.rgb + noise, vec3(0.0), vec3(color.a));
  outColor = color;
}`,Kn=(s,t,i)=>Math.min(i,Math.max(t,s)),oy=(s,t,i)=>{const r=s.createShader(t);return r?(s.shaderSource(r,i),s.compileShader(r),s.getShaderParameter(r,s.COMPILE_STATUS)?r:(s.deleteShader(r),null)):null},pu=(s,t)=>{const i=oy(s,s.VERTEX_SHADER,U1),r=oy(s,s.FRAGMENT_SHADER,t),l=s.createProgram();if(!i||!r||!l)return null;if(s.attachShader(l,i),s.attachShader(l,r),s.linkProgram(l),s.deleteShader(i),s.deleteShader(r),!s.getProgramParameter(l,s.LINK_STATUS))return s.deleteProgram(l),null;const c={},h=s.getProgramParameter(l,s.ACTIVE_UNIFORMS);for(let d=0;d<h;d++){const m=s.getActiveUniform(l,d);if(!m)continue;const p=m.name.replace(/\[0\]$/,"");c[p]=s.getUniformLocation(l,p)}return{program:l,uniforms:c}},mu=s=>{const t=s.createTexture();return s.bindTexture(s.TEXTURE_2D,t),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),{texture:t,width:0,height:0}},gu=(s,t,i,r)=>{t.width===i&&t.height===r||(t.width=i,t.height=r,s.bindTexture(s.TEXTURE_2D,t.texture),s.texImage2D(s.TEXTURE_2D,0,s.RGBA8,i,r,0,s.RGBA,s.UNSIGNED_BYTE,null))};let vu=null;const P1=()=>window.faceapi?Promise.resolve(window.faceapi):(vu||(vu=new Promise((s,t)=>{const i=document.createElement("script");i.src=w1,i.async=!0,i.onload=()=>window.faceapi?s(window.faceapi):t(new Error("face-api.js")),i.onerror=()=>{vu=null,t(new Error("face-api.js"))},document.head.appendChild(i)})),vu),I1={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},F1=({linesColor:s,scanColor:t,cells:i=8,lineThickness:r=1,lineStyle:l="solid",depth:c=3,depthFade:h=.6,parallax:d=1,points:m=!0,reflection:p=.35,shading:v=.7,scanDirection:g="forward",scanDuration:_=2.4,scanDelay:M=1.6,scanWidth:E=1,trail:D=.5,glow:x=.6,autoScan:S=!0,interactive:F=!0,clickEffect:z="ping",enableWebcam:U=!1,showPreview:k=!1,modelsPath:V=C1,enableGyro:I=!1,intro:B=!0,lightMode:L=!1,dpr:T,className:P="",style:it,...ft})=>{const Tt=fe.useRef(null),st=fe.useRef(null),W=fe.useRef(null),et=fe.useRef(null),Z=fe.useRef(null),[Et,wt]=fe.useState("loading"),Ot={linesColor:s??(L?"#d4d4d8":"#4d4757"),scanColor:t??(L?"#0284c7":"#7dd3fc"),cells:Kn(i,2,40),thickness:Kn(r,.5,4),style:D1[l]??0,depth:Kn(c,.5,12),depthFade:Kn(h,0,1),parallax:Kn(d,0,3),points:m,reflection:Kn(p,0,1),shading:Kn(v,0,1),direction:g,duration:Kn(_,.3,20),delay:Kn(M,0,30),scanWidth:Kn(E,.2,5),trail:Kn(D,0,1),glow:Kn(x,0,1.5),autoScan:S,interactive:F,clickEffect:z,enableGyro:I,intro:B,lightMode:L,dpr:T},te=fe.useRef(Ot);return te.current=Ot,fe.useEffect(()=>{var Ln;const ne=Tt.current,C=st.current,A=C==null?void 0:C.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!ne||!C||!A)return;const H=pu(A,N1),q=pu(A,L1),lt=pu(A,O1),At=pu(A,z1);if(!H||!q||!lt||!At)return;const bt=A.createVertexArray(),St=mu(A),zt=mu(A),O=mu(A),yt=mu(A),mt=A.createFramebuffer(),J=A.createFramebuffer(),Q=A.createFramebuffer(),ht=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),xt=new Map,Nt=ae=>{const le=String(ae),de=xt.get(le);if(de)return de;let Le=[1,1,1];if(ht){ht.clearRect(0,0,1,1),ht.fillStyle="#000000",ht.fillStyle=le,ht.fillRect(0,0,1,1);const[Ze,_n,un]=ht.getImageData(0,0,1,1).data;Le=[Ze/255,_n/255,un/255]}return xt.set(le,Le),Le},Jt=((Ln=window.matchMedia)==null?void 0:Ln.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,$t={width:1,height:1,ratio:1},N={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:du,vf:0,tf:du},b={x:0,y:0,inside:!1},X={x:0,y:0,held:!1},pt={gamma:0,beta:0,ready:!1,asked:!1},Rt={x:0,y:0,z:0,strength:0,ready:!1},tt={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},jt=[],Gt=new Float32Array(hu*4),Kt=new Float32Array(hu);let Qt=0,Bt=te.current.intro&&!Jt?0:1,Zt=0,Vt=0,qt=!0,Ft=0;const pe=()=>{const ae=te.current,le=$t.width/$t.height,de=1/Math.round(ae.cells),Le=le/Math.max(1,Math.round(le/de)),Ze=Math.max(de,Math.round(ae.depth/de)*de);return{aspect:le,cx:Le,cy:de,roomDepth:Ze}},Y=(ae,le)=>{const{aspect:de,roomDepth:Le}=pe(),Ze=(ae-.5)*de,_n=le-.5,un=Ze-N.x,Ue=_n-N.y,w=N.f,nt=un>0?.5*de:-.5*de,gt=Ue>0?.5:-.5;let _t=Le/w;return Math.abs(un)>1e-6&&(_t=Math.min(_t,(nt-Ze)/un)),Math.abs(Ue)>1e-6&&(_t=Math.min(_t,(gt-_n)/Ue)),{x:Ze+un*_t,y:_n+Ue*_t,z:w*_t}},Ct=ae=>{tt.dir=ae.direction==="backward"||ae.direction==="pingpong"&&tt.sweeps%2===1?-1:1,tt.start=Qt,tt.waiting=!1,tt.sweeps+=1},Xt=(ae,le)=>{if(Bt<1){const Ze=Bt;tt.dir=1,tt.z=Ze*(le+.4)-.2,tt.alpha=Math.min(1,Ze*6)*(1-Math.max(0,Ze-.85)/.15);return}if(tt.sweeps===0&&!tt.waiting&&(tt.waiting=!0,tt.start=Qt,tt.alpha=0),tt.waiting){tt.alpha=0,ae.autoScan&&!Jt&&Qt-tt.start>=ae.delay&&Ct(ae);return}const de=(Qt-tt.start)/ae.duration;if(de>=1){tt.waiting=!0,tt.start=Qt,tt.alpha=0;return}const Le=de*(le+.3)-.15;tt.z=tt.dir>0?Le:le-Le,tt.alpha=Math.min(1,de/.12)*Math.min(1,(1-de)/.12)},kt=ae=>{const le=Math.max(1,Math.ceil(ae/.008333333333333333)),de=ae/le;for(let Le=0;Le<le;Le++)N.vx+=((N.tx-N.x)*42-N.vx*11)*de,N.vy+=((N.ty-N.y)*42-N.vy*11)*de,N.vf+=((N.tf-N.f)*42-N.vf*11)*de,N.x+=N.vx*de,N.y+=N.vy*de,N.f+=N.vf*de},Dt=(ae,le,de)=>{X.x=Kn(ae,-1,1),X.y=Kn(le,-1,1),X.held=de},Mt=ae=>{const le=$t.width/$t.height,de=Jt?0:1,Le=X.held?X.x:(Math.sin(Qt*.21)*.2+Math.sin(Qt*.083+1.3)*.12)*de,Ze=X.held?X.y:Math.sin(Qt*.17+2.1)*.16*de;N.tx=Le*ae.parallax*.22*le,N.ty=Ze*ae.parallax*.22},ie=()=>{const ae=te.current;$t.width=Math.max(1,ne.clientWidth),$t.height=Math.max(1,ne.clientHeight),$t.ratio=Math.min(ae.dpr||window.devicePixelRatio||1,2),C.width=Math.max(1,Math.round($t.width*$t.ratio)),C.height=Math.max(1,Math.round($t.height*$t.ratio)),gu(A,St,C.width,C.height),gu(A,zt,C.width,C.height),A.bindFramebuffer(A.FRAMEBUFFER,mt),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,St.texture,0),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT1,A.TEXTURE_2D,zt.texture,0);const le=Math.max(1,Math.round(C.width/4)),de=Math.max(1,Math.round(C.height/4));gu(A,O,le,de),gu(A,yt,le,de),A.bindFramebuffer(A.FRAMEBUFFER,J),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,O.texture,0),A.bindFramebuffer(A.FRAMEBUFFER,Q),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,yt.texture,0),A.bindFramebuffer(A.FRAMEBUFFER,null),me(),ye()},me=()=>{const ae=te.current,{aspect:le,cx:de,cy:Le,roomDepth:Ze}=pe(),_n=Nt(ae.linesColor),un=Nt(ae.scanColor),Ue=ae.lightMode?un:un.map(gt=>gt+(1-gt)*.65),w=H.uniforms;A.bindVertexArray(bt),A.disable(A.BLEND),A.bindFramebuffer(A.FRAMEBUFFER,mt),A.drawBuffers([A.COLOR_ATTACHMENT0,A.COLOR_ATTACHMENT1]),A.viewport(0,0,C.width,C.height),A.useProgram(H.program),A.uniform1f(w.uAspect,le),A.uniform1f(w.uPixel,1/C.height),A.uniform3f(w.uEye,N.x,N.y,-N.f),A.uniform1f(w.uDepth,Ze),A.uniform3f(w.uCell,de,Le,Le),A.uniform1f(w.uThick,ae.thickness*$t.ratio*.5),A.uniform1f(w.uDot,1.8*$t.ratio),A.uniform1i(w.uStyle,ae.style),A.uniform3fv(w.uLineColor,_n),A.uniform3fv(w.uScanColor,un),A.uniform3fv(w.uCoreColor,Ue),A.uniform1f(w.uFade,ae.depthFade),A.uniform1f(w.uScanZ,tt.z),A.uniform1f(w.uScanDir,tt.dir),A.uniform1f(w.uScanAlpha,tt.alpha),A.uniform1f(w.uScanWidth,.006*ae.scanWidth),A.uniform1f(w.uTrail,.04+ae.trail*1.1),A.uniform1f(w.uReveal,Bt<1?tt.z+.05:1e4),A.uniform1f(w.uPoints,ae.points?1:0),A.uniform1f(w.uReflect,ae.reflection),A.uniform1f(w.uHaze,ae.lightMode?.03:.05),A.uniform1f(w.uShade,ae.shading),A.uniform1f(w.uLight,ae.lightMode?1:0),A.uniform4fv(w.uPing,Gt),A.uniform1fv(w.uPingAlpha,Kt),A.uniform4f(w.uHover,Rt.x,Rt.y,Rt.z,Rt.strength),A.uniform1f(w.uTime,Qt),A.drawArrays(A.TRIANGLES,0,3);const nt=ae.glow>0;if(nt){A.bindFramebuffer(A.FRAMEBUFFER,J),A.viewport(0,0,O.width,O.height),A.useProgram(q.program),A.activeTexture(A.TEXTURE0),A.bindTexture(A.TEXTURE_2D,zt.texture),A.uniform1i(q.uniforms.uSource,0),A.uniform2f(q.uniforms.uTexel,1/zt.width,1/zt.height),A.drawArrays(A.TRIANGLES,0,3);const gt=2.2*$t.ratio/2;A.useProgram(lt.program),A.uniform1i(lt.uniforms.uSource,0),A.bindFramebuffer(A.FRAMEBUFFER,Q),A.bindTexture(A.TEXTURE_2D,O.texture),A.uniform2f(lt.uniforms.uStep,gt/O.width,0),A.drawArrays(A.TRIANGLES,0,3),A.bindFramebuffer(A.FRAMEBUFFER,J),A.bindTexture(A.TEXTURE_2D,yt.texture),A.uniform2f(lt.uniforms.uStep,0,gt/O.height),A.drawArrays(A.TRIANGLES,0,3)}A.bindFramebuffer(A.FRAMEBUFFER,null),A.viewport(0,0,C.width,C.height),A.useProgram(At.program),A.activeTexture(A.TEXTURE0),A.bindTexture(A.TEXTURE_2D,St.texture),A.uniform1i(At.uniforms.uScene,0),A.activeTexture(A.TEXTURE1),A.bindTexture(A.TEXTURE_2D,O.texture),A.uniform1i(At.uniforms.uBloom,1),A.uniform1f(At.uniforms.uGlow,nt?ae.glow*(ae.lightMode?.8:1.6):0),A.drawArrays(A.TRIANGLES,0,3),A.activeTexture(A.TEXTURE0)},ee=ae=>{if(Zt=0,!qt||document.hidden)return;const le=te.current,de=Vt?Kn((ae-Vt)/1e3,.001,.05):1/60;Vt=ae,Qt+=de,Bt<1&&(Bt=Math.min(1,Bt+de/R1));const{roomDepth:Le}=pe();Xt(le,Le),Mt(le),kt(de);const Ze=le.interactive&&b.inside&&!Jt?1:0;if(Ze){const Ue=Y(b.x,b.y);Rt.ready||Object.assign(Rt,Ue,{ready:!0});const w=1-Math.exp(-de/.08);Rt.x+=(Ue.x-Rt.x)*w,Rt.y+=(Ue.y-Rt.y)*w,Rt.z+=(Ue.z-Rt.z)*w}Rt.strength+=(Ze-Rt.strength)*(1-Math.exp(-de/.25)),!Ze&&Rt.strength<.01&&(Rt.ready=!1);for(let Ue=jt.length-1;Ue>=0;Ue--)jt[Ue].age+=de,jt[Ue].age>sy&&jt.splice(Ue,1);for(let Ue=0;Ue<hu;Ue++){const w=jt[Ue];if(!w){Kt[Ue]=0;continue}const nt=w.age/sy;Gt.set([w.x,w.y,w.z,w.age*1.15],Ue*4),Kt[Ue]=Math.min(1,w.age/.05)*(1-nt)*(1-nt)}me();const _n=Math.abs(N.tx-N.x)+Math.abs(N.ty-N.y)+Math.abs(N.tf-N.f)>1e-4||Math.abs(N.vx)+Math.abs(N.vy)+Math.abs(N.vf)>1e-4;Bt<1||!Jt&&le.autoScan||!tt.waiting||jt.length>0||_n||Rt.strength>.002||!Jt&&le.parallax>0&&!X.held||le.points&&!Jt&&tt.alpha>0?Zt=requestAnimationFrame(ee):Vt=0};function ye(){!Zt&&qt&&!document.hidden&&(Zt=requestAnimationFrame(ee))}const ke=ae=>{const le=ne.getBoundingClientRect(),de=(ae.clientX-le.left)/Math.max(1,le.width),Le=1-(ae.clientY-le.top)/Math.max(1,le.height);return{u:de,v:Le,inside:de>=0&&de<=1&&Le>=0&&Le<=1}},sn=ae=>{var un;const le=te.current,{u:de,v:Le,inside:Ze}=ke(ae);b.x=de,b.y=Le;const _n=b.inside;b.inside=Ze,Ze?(window.clearTimeout(Ft),Ft=0,!((un=Z.current)!=null&&un.active)&&le.interactive&&!Jt&&Dt(de*2-1,Le*2-1,!0),ye()):_n&&!Ft&&(Ft=window.setTimeout(()=>{var Ue;Ft=0,(Ue=Z.current)!=null&&Ue.active||(X.held=!1),ye()},220),ye())},En=ae=>{const le=te.current,{u:de,v:Le,inside:Ze}=ke(ae);if(!(!Ze||Jt||le.clickEffect==="none")){if(le.clickEffect==="scan")Bt>=1&&Ct(le);else{const _n=Y(de,Le);jt.unshift({..._n,age:0}),jt.length>hu&&jt.pop()}ye()}},bn=()=>{var ae;b.inside=!1,(ae=Z.current)!=null&&ae.active||(X.held=!1),ye()},ra=ae=>{var de;!te.current.enableGyro||(de=Z.current)!=null&&de.active||Jt||ae.gamma===null||ae.beta===null||(pt.ready||Object.assign(pt,{gamma:ae.gamma,beta:ae.beta,ready:!0}),Dt((ae.gamma-pt.gamma)/25,(ae.beta-pt.beta)/-25,!0),ye())},sa=()=>{var de;const ae=te.current,le=(de=window.DeviceOrientationEvent)==null?void 0:de.requestPermission;!ae.enableGyro||pt.asked||typeof le!="function"||(pt.asked=!0,le.call(window.DeviceOrientationEvent).catch(()=>{}))},Ui=()=>{Vt=0,ye()},ei=new ResizeObserver(ie);ei.observe(ne);const Nn=new IntersectionObserver(ae=>{qt=ae.some(le=>le.isIntersecting),qt&&(Vt=0,ye())});return Nn.observe(ne),window.addEventListener("pointermove",sn,{passive:!0}),window.addEventListener("pointerdown",En,{passive:!0}),window.addEventListener("deviceorientation",ra),window.addEventListener("click",sa),document.documentElement.addEventListener("pointerleave",bn),document.addEventListener("visibilitychange",Ui),Z.current={active:!1,move:(ae,le,de)=>{Jt||(Dt(ae*1.3,le*1.3,!0),N.tf=du*Kn(de,.6,1.6),ye())},release:()=>{N.tf=du,X.held=!1,ye()}},ie(),et.current=ye,()=>{var ae;cancelAnimationFrame(Zt),window.clearTimeout(Ft),et.current=null,Z.current=null,ei.disconnect(),Nn.disconnect(),window.removeEventListener("pointermove",sn),window.removeEventListener("pointerdown",En),window.removeEventListener("deviceorientation",ra),window.removeEventListener("click",sa),document.documentElement.removeEventListener("pointerleave",bn),document.removeEventListener("visibilitychange",Ui),[St,zt,O,yt].forEach(le=>A.deleteTexture(le.texture)),[mt,J,Q].forEach(le=>A.deleteFramebuffer(le)),A.deleteVertexArray(bt),[H,q,lt,At].forEach(le=>A.deleteProgram(le.program)),C.isConnected||(ae=A.getExtension("WEBGL_lose_context"))==null||ae.loseContext()}},[]),fe.useEffect(()=>{var ne;(ne=et.current)==null||ne.call(et)}),fe.useEffect(()=>{if(!U)return;const ne=W.current;if(!ne)return;let C=!1,A=null,H=0,q=0;const lt={x:0,y:0,near:1,ready:!1};return wt("loading"),(async()=>{try{const bt=await P1();if(await bt.nets.tinyFaceDetector.loadFromUri(V),C)return;if(A=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),C){A.getTracks().forEach(O=>O.stop());return}ne.srcObject=A,await ne.play(),wt("searching");const St=new bt.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),zt=async()=>{if(C)return;let O=null;try{O=await bt.detectSingleFace(ne,St)}catch{O=null}if(C)return;const yt=Z.current;if(O&&yt){const mt=O.box,J=ne.videoWidth||1,Q=ne.videoHeight||1,ht=-((mt.x+mt.width/2)/J-.5)*2,xt=-((mt.y+mt.height/2)/Q-.5)*2,Nt=.32/Math.max(.08,mt.width/J),Jt=lt.ready?.45:1;lt.x+=(ht-lt.x)*Jt,lt.y+=(xt-lt.y)*Jt,lt.near+=(Nt-lt.near)*Jt,lt.ready=!0,q=0,yt.active=!0,yt.move(lt.x,lt.y,lt.near),wt("tracking")}else yt&&++q>12&&yt.active&&(yt.active=!1,lt.ready=!1,yt.release(),wt("searching"));H=window.setTimeout(zt,40)};zt()}catch{C||wt("blocked")}})(),()=>{C=!0,window.clearTimeout(H),A==null||A.getTracks().forEach(St=>St.stop()),ne.srcObject=null;const bt=Z.current;bt!=null&&bt.active&&(bt.active=!1,bt.release())}},[U,V]),Pt.jsxs("div",{ref:Tt,className:`grid-scan${P?` ${P}`:""}`,style:it,...ft,children:[Pt.jsx("canvas",{ref:st,className:"grid-scan-canvas","aria-hidden":"true"}),U&&Pt.jsxs("div",{className:k?"grid-scan-preview":"grid-scan-hidden",children:[Pt.jsx("video",{ref:W,className:"grid-scan-video",muted:!0,playsInline:!0}),k&&Pt.jsx("span",{className:"grid-scan-status",children:I1[Et]})]})]})};function B1(){return Pt.jsxs("section",{className:"hero",children:[Pt.jsx("div",{className:"hero-gridscan","aria-hidden":"true",children:Pt.jsx(F1,{cells:6,depth:2,depthFade:.55,parallax:.35,lineThickness:1,lineStyle:"solid",points:!1,reflection:.15,shading:.5,scanDirection:"forward",scanDuration:4,scanDelay:4.5,scanWidth:.7,trail:.15,glow:.2,autoScan:!1,interactive:!1,intro:!1,linesColor:"#4d4757",scanColor:"#5a6570",dpr:1.25})}),Pt.jsxs("div",{className:"hero-content",children:[Pt.jsx("div",{className:"hero-label",children:"前端开发者"}),Pt.jsx("div",{className:"hero-shatter",children:Pt.jsx(A1,{text:`创造 优雅 且
富有生命力的
数字体验`,colors:["#F5F5F5","#F5F5F5"],accentColor:"#7B5CFF",align:"left",verticalAlign:"top",fontFamily:"'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif",fontWeight:700,fontSize:0,letterSpacing:-.02,lineHeight:1.02,shardSize:.14,irregularity:.45,crack:.45,quality:1,glint:.45,shatter:!0,intro:"fade",introDuration:.8,interactive:!0})}),Pt.jsxs("div",{className:"hero-copy",children:[Pt.jsx("p",{children:"专注于现代 Web 前端开发，将设计美学与工程技术完美融合，打造极致的用户交互体验。"}),Pt.jsxs("a",{href:"#work",className:"hero-btn",children:[Pt.jsx("span",{children:"查看作品"}),Pt.jsx("span",{className:"arrow",children:"→"})]})]})]}),Pt.jsx("div",{className:"scroll-indicator",children:"向下滚动"})]})}function af({num:s,title:t}){return Pt.jsxs("div",{className:"section-head",children:[Pt.jsx("span",{className:"section-num",children:s}),Pt.jsx("h2",{className:"section-title",children:t})]})}function Am({children:s,rootMargin:t="280px 0px",minHeight:i=420,className:r=""}){const l=fe.useRef(null),[c,h]=fe.useState(!1);return fe.useEffect(()=>{const d=l.current;if(!d||c)return;if(typeof IntersectionObserver>"u"){h(!0);return}const m=new IntersectionObserver(([p])=>{p.isIntersecting&&(h(!0),m.disconnect())},{rootMargin:t,threshold:.01});return m.observe(d),()=>m.disconnect()},[c,t]),Pt.jsx("div",{ref:l,className:r,style:c?void 0:{minHeight:i},children:c?s:null})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rm="180",H1=0,ly=1,V1=2,wx=1,G1=2,Xa=3,Lr=0,_i=1,ta=2,Ur=0,yo=1,cy=2,uy=3,fy=4,k1=5,us=100,X1=101,q1=102,Y1=103,W1=104,j1=200,Z1=201,K1=202,Q1=203,wp=204,Cp=205,J1=206,$1=207,tT=208,eT=209,nT=210,iT=211,aT=212,rT=213,sT=214,Dp=0,Up=1,Np=2,So=3,Lp=4,Op=5,zp=6,Pp=7,Cx=0,oT=1,lT=2,Nr=0,cT=1,uT=2,fT=3,hT=4,dT=5,pT=6,Dx=7,Ux=300,Mo=301,Eo=302,Ip=303,Fp=304,rf=306,Or=1e3,Cr=1001,Bp=1002,Ci=1003,mT=1004,_u=1005,na=1006,Bd=1007,Dr=1008,Sa=1009,Nx=1010,Lx=1011,Nl=1012,wm=1013,ds=1014,qa=1015,Hl=1016,Cm=1017,Dm=1018,Ll=1020,Ox=35902,zx=35899,Px=1021,Ix=1022,ia=1023,Ol=1026,zl=1027,Fx=1028,Um=1029,Bx=1030,Nm=1031,Lm=1033,qu=33776,Yu=33777,Wu=33778,ju=33779,Hp=35840,Vp=35841,Gp=35842,kp=35843,Xp=36196,qp=37492,Yp=37496,Wp=37808,jp=37809,Zp=37810,Kp=37811,Qp=37812,Jp=37813,$p=37814,tm=37815,em=37816,nm=37817,im=37818,am=37819,rm=37820,sm=37821,om=36492,lm=36494,cm=36495,um=36283,fm=36284,hm=36285,dm=36286,gT=3200,vT=3201,Hx=0,_T=1,wr="",li="srgb",To="srgb-linear",Ju="linear",an="srgb",eo=7680,hy=519,yT=512,xT=513,ST=514,Vx=515,MT=516,ET=517,TT=518,bT=519,dy=35044,py="300 es",xa=2e3,$u=2001;class Ro{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=Math.PI/180,pm=180/Math.PI;function wo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]+"-"+Qn[t&255]+Qn[t>>8&255]+"-"+Qn[t>>16&15|64]+Qn[t>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function Ne(s,t,i){return Math.max(t,Math.min(i,s))}function AT(s,t){return(s%t+t)%t}function Vd(s,t,i){return(1-i)*s+i*t}function Sl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ne(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ja{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const _=c[h+0],M=c[h+1],E=c[h+2],D=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=_,t[i+1]=M,t[i+2]=E,t[i+3]=D;return}if(g!==D||m!==_||p!==M||v!==E){let x=1-d;const S=m*_+p*M+v*E+g*D,F=S>=0?1:-1,z=1-S*S;if(z>Number.EPSILON){const k=Math.sqrt(z),V=Math.atan2(k,S*F);x=Math.sin(x*V)/k,d=Math.sin(d*V)/k}const U=d*F;if(m=m*x+_*U,p=p*x+M*U,v=v*x+E*U,g=g*x+D*U,x===1-d){const k=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=k,p*=k,v*=k,g*=k}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[h],_=c[h+1],M=c[h+2],E=c[h+3];return t[i]=d*E+v*g+m*M-p*_,t[i+1]=m*E+v*_+p*g-d*M,t[i+2]=p*E+v*M+d*_-m*g,t[i+3]=v*E-d*g-m*_-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),g=d(c/2),_=m(r/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=_*v*g+p*M*E,this._y=p*M*g-_*v*E,this._z=p*v*E+_*M*g,this._w=p*v*g-_*M*E;break;case"YXZ":this._x=_*v*g+p*M*E,this._y=p*M*g-_*v*E,this._z=p*v*E-_*M*g,this._w=p*v*g+_*M*E;break;case"ZXY":this._x=_*v*g-p*M*E,this._y=p*M*g+_*v*E,this._z=p*v*E+_*M*g,this._w=p*v*g-_*M*E;break;case"ZYX":this._x=_*v*g-p*M*E,this._y=p*M*g+_*v*E,this._z=p*v*E-_*M*g,this._w=p*v*g+_*M*E;break;case"YZX":this._x=_*v*g+p*M*E,this._y=p*M*g+_*v*E,this._z=p*v*E-_*M*g,this._w=p*v*g-_*M*E;break;case"XZY":this._x=_*v*g-p*M*E,this._y=p*M*g-_*v*E,this._z=p*v*E+_*M*g,this._w=p*v*g+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],_=r+d+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-r*p,this._z=c*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,_=Math.sin(i*v)/p;return this._w=h*g+this._w*_,this._x=r*g+this._x*_,this._y=l*g+this._y*_,this._z=c*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(my.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(my.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),v=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*v,this.y=r+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Gd.copy(this).projectOnVector(t),this.sub(Gd)}reflect(t){return this.sub(Gd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ne(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new K,my=new ja;class we{constructor(t,i,r,l,c,h,d,m,p){we.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],_=r[2],M=r[5],E=r[8],D=l[0],x=l[3],S=l[6],F=l[1],z=l[4],U=l[7],k=l[2],V=l[5],I=l[8];return c[0]=h*D+d*F+m*k,c[3]=h*x+d*z+m*V,c[6]=h*S+d*U+m*I,c[1]=p*D+v*F+g*k,c[4]=p*x+v*z+g*V,c[7]=p*S+v*U+g*I,c[2]=_*D+M*F+E*k,c[5]=_*x+M*z+E*V,c[8]=_*S+M*U+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-r*c*v+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,_=d*m-v*c,M=p*c-h*m,E=i*g+r*_+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/E;return t[0]=g*D,t[1]=(l*p-v*r)*D,t[2]=(d*r-l*h)*D,t[3]=_*D,t[4]=(v*i-l*m)*D,t[5]=(l*c-d*i)*D,t[6]=M*D,t[7]=(r*m-p*i)*D,t[8]=(h*i-r*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(kd.makeScale(t,i)),this}rotate(t){return this.premultiply(kd.makeRotation(-t)),this}translate(t,i){return this.premultiply(kd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new we;function Gx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function RT(){const s=tf("canvas");return s.style.display="block",s}const gy={};function Pl(s){s in gy||(gy[s]=!0,console.warn(s))}function wT(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const vy=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_y=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CT(){const s={enabled:!0,workingColorSpace:To,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===an&&(l.r=Wa(l.r),l.g=Wa(l.g),l.b=Wa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===an&&(l.r=xo(l.r),l.g=xo(l.g),l.b=xo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===wr?Ju:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Pl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Pl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[To]:{primaries:t,whitePoint:r,transfer:Ju,toXYZ:vy,fromXYZ:_y,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:r,transfer:an,toXYZ:vy,fromXYZ:_y,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const je=CT();function Wa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let no;class DT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{no===void 0&&(no=tf("canvas")),no.width=t.width,no.height=t.height;const l=no.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=no}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tf("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Wa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Wa(i[r]/255)*255):i[r]=Wa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let UT=0;class Om{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Xd(l[h].image)):c.push(Xd(l[h]))}else c=Xd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Xd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?DT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NT=0;const qd=new K;class $n extends Ro{constructor(t=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,r=Cr,l=Cr,c=na,h=Dr,d=ia,m=Sa,p=$n.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=wo(),this.name="",this.source=new Om(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ux)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case Cr:t.x=t.x<0?0:1;break;case Bp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case Cr:t.y=t.y<0?0:1;break;case Bp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Ux;$n.DEFAULT_ANISOTROPY=1;class Mn{constructor(t=0,i=0,r=0,l=1){Mn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],_=m[1],M=m[5],E=m[9],D=m[2],x=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-D)<.01&&Math.abs(E-x)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+D)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,U=(M+1)/2,k=(S+1)/2,V=(v+_)/4,I=(g+D)/4,B=(E+x)/4;return z>U&&z>k?z<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(z),l=V/r,c=I/r):U>k?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=V/l,c=B/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=I/c,l=B/c),this.set(r,l,c,i),this}let F=Math.sqrt((x-E)*(x-E)+(g-D)*(g-D)+(_-v)*(_-v));return Math.abs(F)<.001&&(F=1),this.x=(x-E)/F,this.y=(g-D)/F,this.z=(_-v)/F,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this.w=Ne(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this.w=Ne(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LT extends Ro{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:na,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Mn(0,0,t,i),this.scissorTest=!1,this.viewport=new Mn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new $n(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:na,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Om(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends LT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class kx extends $n{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class OT extends $n{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ki.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ki.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ki.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ki):Ki.fromBufferAttribute(c,h),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yu.copy(r.boundingBox)),yu.applyMatrix4(t.matrixWorld),this.union(yu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ml),xu.subVectors(this.max,Ml),io.subVectors(t.a,Ml),ao.subVectors(t.b,Ml),ro.subVectors(t.c,Ml),Sr.subVectors(ao,io),Mr.subVectors(ro,ao),ns.subVectors(io,ro);let i=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-ns.z,ns.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,ns.z,0,-ns.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-ns.y,ns.x,0];return!Yd(i,io,ao,ro,xu)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,io,ao,ro,xu))?!1:(Su.crossVectors(Sr,Mr),i=[Su.x,Su.y,Su.z],Yd(i,io,ao,ro,xu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fa=[new K,new K,new K,new K,new K,new K,new K,new K],Ki=new K,yu=new Vl,io=new K,ao=new K,ro=new K,Sr=new K,Mr=new K,ns=new K,Ml=new K,xu=new K,Su=new K,is=new K;function Yd(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){is.fromArray(s,c);const d=l.x*Math.abs(is.x)+l.y*Math.abs(is.y)+l.z*Math.abs(is.z),m=t.dot(is),p=i.dot(is),v=r.dot(is);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const zT=new Vl,El=new K,Wd=new K;class zm{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):zT.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);const i=El.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(El,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(Wd)),this.expandByPoint(El.copy(t.center).sub(Wd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ba=new K,jd=new K,Mu=new K,Er=new K,Zd=new K,Eu=new K,Kd=new K;class Xx{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){jd.copy(t).add(i).multiplyScalar(.5),Mu.copy(i).sub(t).normalize(),Er.copy(this.origin).sub(jd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Mu),d=Er.dot(this.direction),m=-Er.dot(Mu),p=Er.lengthSq(),v=Math.abs(1-h*h);let g,_,M,E;if(v>0)if(g=h*m-d,_=h*d-m,E=c*v,g>=0)if(_>=-E)if(_<=E){const D=1/v;g*=D,_*=D,M=g*(g+h*_+2*d)+_*(h*g+_+2*m)+p}else _=c,g=Math.max(0,-(h*_+d)),M=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(h*_+d)),M=-g*g+_*(_+2*m)+p;else _<=-E?(g=Math.max(0,-(-h*c+d)),_=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+_*(_+2*m)+p):_<=E?(g=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+p):(g=Math.max(0,-(h*c+d)),_=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+_*(_+2*m)+p);else _=h>0?-c:c,g=Math.max(0,-(h*_+d)),M=-g*g+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(jd).addScaledVector(Mu,_),M}intersectSphere(t,i){Ba.subVectors(t.center,this.origin);const r=Ba.dot(this.direction),l=Ba.dot(Ba)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),v>=0?(c=(t.min.y-_.y)*v,h=(t.max.y-_.y)*v):(c=(t.max.y-_.y)*v,h=(t.min.y-_.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-_.z)*g,m=(t.max.z-_.z)*g):(d=(t.max.z-_.z)*g,m=(t.min.z-_.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,r,l,c){Zd.subVectors(i,t),Eu.subVectors(r,t),Kd.crossVectors(Zd,Eu);let h=this.direction.dot(Kd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Er.subVectors(this.origin,t);const m=d*this.direction.dot(Eu.crossVectors(Er,Eu));if(m<0)return null;const p=d*this.direction.dot(Zd.cross(Er));if(p<0||m+p>h)return null;const v=-d*Er.dot(Kd);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,i,r,l,c,h,d,m,p,v,g,_,M,E,D,x){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,v,g,_,M,E,D,x)}set(t,i,r,l,c,h,d,m,p,v,g,_,M,E,D,x){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=g,S[14]=_,S[3]=M,S[7]=E,S[11]=D,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/so.setFromMatrixColumn(t,0).length(),c=1/so.setFromMatrixColumn(t,1).length(),h=1/so.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const _=h*v,M=h*g,E=d*v,D=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=_-D*p,i[9]=-d*m,i[2]=D-_*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*v,M=m*g,E=p*v,D=p*g;i[0]=_+D*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=M*d-E,i[6]=D+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*v,M=m*g,E=p*v,D=p*g;i[0]=_-D*d,i[4]=-h*g,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*v,i[9]=D-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*v,M=h*g,E=d*v,D=d*g;i[0]=m*v,i[4]=E*p-M,i[8]=_*p+D,i[1]=m*g,i[5]=D*p+_,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,M=h*p,E=d*m,D=d*p;i[0]=m*v,i[4]=D-_*g,i[8]=E*g+M,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+E,i[10]=_-D*g}else if(t.order==="XZY"){const _=h*m,M=h*p,E=d*m,D=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=_*g+D,i[5]=h*v,i[9]=M*g-E,i[2]=E*g-M,i[6]=d*v,i[10]=D*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PT,t,IT)}lookAt(t,i,r){const l=this.elements;return Ri.subVectors(t,i),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Tr.crossVectors(r,Ri),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Tr.crossVectors(r,Ri)),Tr.normalize(),Tu.crossVectors(Ri,Tr),l[0]=Tr.x,l[4]=Tu.x,l[8]=Ri.x,l[1]=Tr.y,l[5]=Tu.y,l[9]=Ri.y,l[2]=Tr.z,l[6]=Tu.z,l[10]=Ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],_=r[9],M=r[13],E=r[2],D=r[6],x=r[10],S=r[14],F=r[3],z=r[7],U=r[11],k=r[15],V=l[0],I=l[4],B=l[8],L=l[12],T=l[1],P=l[5],it=l[9],ft=l[13],Tt=l[2],st=l[6],W=l[10],et=l[14],Z=l[3],Et=l[7],wt=l[11],Ot=l[15];return c[0]=h*V+d*T+m*Tt+p*Z,c[4]=h*I+d*P+m*st+p*Et,c[8]=h*B+d*it+m*W+p*wt,c[12]=h*L+d*ft+m*et+p*Ot,c[1]=v*V+g*T+_*Tt+M*Z,c[5]=v*I+g*P+_*st+M*Et,c[9]=v*B+g*it+_*W+M*wt,c[13]=v*L+g*ft+_*et+M*Ot,c[2]=E*V+D*T+x*Tt+S*Z,c[6]=E*I+D*P+x*st+S*Et,c[10]=E*B+D*it+x*W+S*wt,c[14]=E*L+D*ft+x*et+S*Ot,c[3]=F*V+z*T+U*Tt+k*Z,c[7]=F*I+z*P+U*st+k*Et,c[11]=F*B+z*it+U*W+k*wt,c[15]=F*L+z*ft+U*et+k*Ot,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],_=t[10],M=t[14],E=t[3],D=t[7],x=t[11],S=t[15];return E*(+c*m*g-l*p*g-c*d*_+r*p*_+l*d*M-r*m*M)+D*(+i*m*M-i*p*_+c*h*_-l*h*M+l*p*v-c*m*v)+x*(+i*p*g-i*d*M-c*h*g+r*h*M+c*d*v-r*p*v)+S*(-l*d*v-i*m*g+i*d*_+l*h*g-r*h*_+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],_=t[10],M=t[11],E=t[12],D=t[13],x=t[14],S=t[15],F=g*x*p-D*_*p+D*m*M-d*x*M-g*m*S+d*_*S,z=E*_*p-v*x*p-E*m*M+h*x*M+v*m*S-h*_*S,U=v*D*p-E*g*p+E*d*M-h*D*M-v*d*S+h*g*S,k=E*g*m-v*D*m-E*d*_+h*D*_+v*d*x-h*g*x,V=i*F+r*z+l*U+c*k;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return t[0]=F*I,t[1]=(D*_*c-g*x*c-D*l*M+r*x*M+g*l*S-r*_*S)*I,t[2]=(d*x*c-D*m*c+D*l*p-r*x*p-d*l*S+r*m*S)*I,t[3]=(g*m*c-d*_*c-g*l*p+r*_*p+d*l*M-r*m*M)*I,t[4]=z*I,t[5]=(v*x*c-E*_*c+E*l*M-i*x*M-v*l*S+i*_*S)*I,t[6]=(E*m*c-h*x*c-E*l*p+i*x*p+h*l*S-i*m*S)*I,t[7]=(h*_*c-v*m*c+v*l*p-i*_*p-h*l*M+i*m*M)*I,t[8]=U*I,t[9]=(E*g*c-v*D*c-E*r*M+i*D*M+v*r*S-i*g*S)*I,t[10]=(h*D*c-E*d*c+E*r*p-i*D*p-h*r*S+i*d*S)*I,t[11]=(v*d*c-h*g*c-v*r*p+i*g*p+h*r*M-i*d*M)*I,t[12]=k*I,t[13]=(v*D*l-E*g*l+E*r*_-i*D*_-v*r*x+i*g*x)*I,t[14]=(E*d*l-h*D*l-E*r*m+i*D*m+h*r*x-i*d*x)*I,t[15]=(h*g*l-v*d*l+v*r*m-i*g*m-h*r*_+i*d*_)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,_=c*p,M=c*v,E=c*g,D=h*v,x=h*g,S=d*g,F=m*p,z=m*v,U=m*g,k=r.x,V=r.y,I=r.z;return l[0]=(1-(D+S))*k,l[1]=(M+U)*k,l[2]=(E-z)*k,l[3]=0,l[4]=(M-U)*V,l[5]=(1-(_+S))*V,l[6]=(x+F)*V,l[7]=0,l[8]=(E+z)*I,l[9]=(x-F)*I,l[10]=(1-(_+D))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=so.set(l[0],l[1],l[2]).length();const h=so.set(l[4],l[5],l[6]).length(),d=so.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Qi.copy(this);const p=1/c,v=1/h,g=1/d;return Qi.elements[0]*=p,Qi.elements[1]*=p,Qi.elements[2]*=p,Qi.elements[4]*=v,Qi.elements[5]*=v,Qi.elements[6]*=v,Qi.elements[8]*=g,Qi.elements[9]*=g,Qi.elements[10]*=g,i.setFromRotationMatrix(Qi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=xa,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),M=(r+l)/(r-l);let E,D;if(m)E=c/(h-c),D=h*c/(h-c);else if(d===xa)E=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(d===$u)E=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=xa,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),_=-(i+t)/(i-t),M=-(r+l)/(r-l);let E,D;if(m)E=1/(h-c),D=h/(h-c);else if(d===xa)E=-2/(h-c),D=-(h+c)/(h-c);else if(d===$u)E=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const so=new K,Qi=new pn,PT=new K(0,0,0),IT=new K(1,1,1),Tr=new K,Tu=new K,Ri=new K,yy=new pn,xy=new ja;class Ma{constructor(t=0,i=0,r=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return yy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yy,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xy.setFromEuler(this),this.setFromQuaternion(xy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Pm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FT=0;const Sy=new K,oo=new ja,Ha=new pn,bu=new K,Tl=new K,BT=new K,HT=new ja,My=new K(1,0,0),Ey=new K(0,1,0),Ty=new K(0,0,1),by={type:"added"},VT={type:"removed"},lo={type:"childadded",child:null},Qd={type:"childremoved",child:null};class ti extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new K,i=new Ma,r=new ja,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new we}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return oo.setFromAxisAngle(t,i),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,i){return oo.setFromAxisAngle(t,i),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(My,t)}rotateY(t){return this.rotateOnAxis(Ey,t)}rotateZ(t){return this.rotateOnAxis(Ty,t)}translateOnAxis(t,i){return Sy.copy(t).applyQuaternion(this.quaternion),this.position.add(Sy.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(My,t)}translateY(t){return this.translateOnAxis(Ey,t)}translateZ(t){return this.translateOnAxis(Ty,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ha.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?bu.copy(t):bu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ha.lookAt(Tl,bu,this.up):Ha.lookAt(bu,Tl,this.up),this.quaternion.setFromRotationMatrix(Ha),l&&(Ha.extractRotation(l.matrixWorld),oo.setFromRotationMatrix(Ha),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(by),lo.child=t,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VT),Qd.child=t,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(by),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,t,BT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,HT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),_=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new K(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new K,Va=new K,Jd=new K,Ga=new K,co=new K,uo=new K,Ay=new K,$d=new K,tp=new K,ep=new K,np=new Mn,ip=new Mn,ap=new Mn;class ea{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ji.subVectors(t,i),l.cross(Ji);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ji.subVectors(l,i),Va.subVectors(r,i),Jd.subVectors(t,i);const h=Ji.dot(Ji),d=Ji.dot(Va),m=Ji.dot(Jd),p=Va.dot(Va),v=Va.dot(Jd),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const _=1/g,M=(p*m-d*v)*_,E=(h*v-d*m)*_;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,Ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ga.x),m.addScaledVector(h,Ga.y),m.addScaledVector(d,Ga.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return np.setScalar(0),ip.setScalar(0),ap.setScalar(0),np.fromBufferAttribute(t,i),ip.fromBufferAttribute(t,r),ap.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(np,c.x),h.addScaledVector(ip,c.y),h.addScaledVector(ap,c.z),h}static isFrontFacing(t,i,r,l){return Ji.subVectors(r,i),Va.subVectors(t,i),Ji.cross(Va).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),Va.subVectors(this.a,this.b),Ji.cross(Va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ea.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ea.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return ea.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return ea.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ea.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;co.subVectors(l,r),uo.subVectors(c,r),$d.subVectors(t,r);const m=co.dot($d),p=uo.dot($d);if(m<=0&&p<=0)return i.copy(r);tp.subVectors(t,l);const v=co.dot(tp),g=uo.dot(tp);if(v>=0&&g<=v)return i.copy(l);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(co,h);ep.subVectors(t,c);const M=co.dot(ep),E=uo.dot(ep);if(E>=0&&M<=E)return i.copy(c);const D=M*p-m*E;if(D<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(uo,d);const x=v*E-M*g;if(x<=0&&g-v>=0&&M-E>=0)return Ay.subVectors(c,l),d=(g-v)/(g-v+(M-E)),i.copy(l).addScaledVector(Ay,d);const S=1/(x+D+_);return h=D*S,d=_*S,i.copy(r).addScaledVector(co,h).addScaledVector(uo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Au={h:0,s:0,l:0};function rp(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Fe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,je.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=je.workingColorSpace){return this.r=t,this.g=i,this.b=r,je.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=je.workingColorSpace){if(t=AT(t,1),i=Ne(i,0,1),r=Ne(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=rp(h,c,t+1/3),this.g=rp(h,c,t),this.b=rp(h,c,t-1/3)}return je.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const r=qx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wa(t.r),this.g=Wa(t.g),this.b=Wa(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return je.workingToColorSpace(Jn.copy(this),t),Math.round(Ne(Jn.r*255,0,255))*65536+Math.round(Ne(Jn.g*255,0,255))*256+Math.round(Ne(Jn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=je.workingColorSpace){je.workingToColorSpace(Jn.copy(this),i);const r=Jn.r,l=Jn.g,c=Jn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=je.workingColorSpace){return je.workingToColorSpace(Jn.copy(this),i),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=li){je.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,r=Jn.g,l=Jn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(br),this.setHSL(br.h+t,br.s+i,br.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(br),t.getHSL(Au);const r=Vd(br.h,Au.h,i),l=Vd(br.s,Au.s,i),c=Vd(br.l,Au.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Fe;Fe.NAMES=qx;let GT=0;class Gl extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=yo,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Cp,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(r.blending=this.blending),this.side!==Lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wp&&(r.blendSrc=this.blendSrc),this.blendDst!==Cp&&(r.blendDst=this.blendDst),this.blendEquation!==us&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Im extends Gl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=Cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dn=new K,Ru=new se;let kT=0;class Di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=dy,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ru.fromBufferAttribute(this,i),Ru.applyMatrix3(t),this.setXY(i,Ru.x,Ru.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Sl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=gi(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Sl(i,this.array)),i}setX(t,i){return this.normalized&&(i=gi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Sl(i,this.array)),i}setY(t,i){return this.normalized&&(i=gi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Sl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=gi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Sl(i,this.array)),i}setW(t,i){return this.normalized&&(i=gi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=gi(i,this.array),r=gi(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=gi(i,this.array),r=gi(r,this.array),l=gi(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=gi(i,this.array),r=gi(r,this.array),l=gi(l,this.array),c=gi(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dy&&(t.usage=this.usage),t}}class Yx extends Di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Wx extends Di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ci extends Di{constructor(t,i,r){super(new Float32Array(t),i,r)}}let XT=0;const Vi=new pn,sp=new ti,fo=new K,wi=new Vl,bl=new Vl,Vn=new K;class aa extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gx(t)?Wx:Yx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new we().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vi.makeRotationFromQuaternion(t),this.applyMatrix4(Vi),this}rotateX(t){return Vi.makeRotationX(t),this.applyMatrix4(Vi),this}rotateY(t){return Vi.makeRotationY(t),this.applyMatrix4(Vi),this}rotateZ(t){return Vi.makeRotationZ(t),this.applyMatrix4(Vi),this}translate(t,i,r){return Vi.makeTranslation(t,i,r),this.applyMatrix4(Vi),this}scale(t,i,r){return Vi.makeScale(t,i,r),this.applyMatrix4(Vi),this}lookAt(t){return sp.lookAt(t),sp.updateMatrix(),this.applyMatrix4(sp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ci(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zm);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];bl.setFromBufferAttribute(d),this.morphTargetsRelative?(Vn.addVectors(wi.min,bl.min),wi.expandByPoint(Vn),Vn.addVectors(wi.max,bl.max),wi.expandByPoint(Vn)):(wi.expandByPoint(bl.min),wi.expandByPoint(bl.max))}wi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Vn.fromBufferAttribute(d,p),m&&(fo.fromBufferAttribute(t,p),Vn.add(fo)),l=Math.max(l,r.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let B=0;B<r.count;B++)d[B]=new K,m[B]=new K;const p=new K,v=new K,g=new K,_=new se,M=new se,E=new se,D=new K,x=new K;function S(B,L,T){p.fromBufferAttribute(r,B),v.fromBufferAttribute(r,L),g.fromBufferAttribute(r,T),_.fromBufferAttribute(c,B),M.fromBufferAttribute(c,L),E.fromBufferAttribute(c,T),v.sub(p),g.sub(p),M.sub(_),E.sub(_);const P=1/(M.x*E.y-E.x*M.y);isFinite(P)&&(D.copy(v).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(P),x.copy(g).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(P),d[B].add(D),d[L].add(D),d[T].add(D),m[B].add(x),m[L].add(x),m[T].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let B=0,L=F.length;B<L;++B){const T=F[B],P=T.start,it=T.count;for(let ft=P,Tt=P+it;ft<Tt;ft+=3)S(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const z=new K,U=new K,k=new K,V=new K;function I(B){k.fromBufferAttribute(l,B),V.copy(k);const L=d[B];z.copy(L),z.sub(k.multiplyScalar(k.dot(L))).normalize(),U.crossVectors(V,L);const P=U.dot(m[B])<0?-1:1;h.setXYZW(B,z.x,z.y,z.z,P)}for(let B=0,L=F.length;B<L;++B){const T=F[B],P=T.start,it=T.count;for(let ft=P,Tt=P+it;ft<Tt;ft+=3)I(t.getX(ft+0)),I(t.getX(ft+1)),I(t.getX(ft+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,v=new K,g=new K;if(t)for(let _=0,M=t.count;_<M;_+=3){const E=t.getX(_+0),D=t.getX(_+1),x=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,x),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,x),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Vn.fromBufferAttribute(t,i),Vn.normalize(),t.setXYZ(i,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,_=new p.constructor(m.length*v);let M=0,E=0;for(let D=0,x=m.length;D<x;D++){d.isInterleavedBufferAttribute?M=m[D]*d.data.stride+d.offset:M=m[D]*v;for(let S=0;S<v;S++)_[E++]=p[M++]}return new Di(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new aa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const _=p[v],M=t(_,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const M=p[g];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let _=0,M=g.length;_<M;_++)v.push(g[_].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ry=new pn,as=new Xx,wu=new zm,wy=new K,Cu=new K,Du=new K,Uu=new K,op=new K,Nu=new K,Cy=new K,Lu=new K;class jn extends ti{constructor(t=new aa,i=new Im){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(op.fromBufferAttribute(g,t),h?Nu.addScaledVector(op,v):Nu.addScaledVector(op.sub(i),v))}i.add(Nu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wu.copy(r.boundingSphere),wu.applyMatrix4(c),as.copy(t.ray).recast(t.near),!(wu.containsPoint(as.origin)===!1&&(as.intersectSphere(wu,wy)===null||as.origin.distanceToSquared(wy)>(t.far-t.near)**2))&&(Ry.copy(c).invert(),as.copy(t.ray).applyMatrix4(Ry),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,as)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,D=_.length;E<D;E++){const x=_[E],S=h[x.materialIndex],F=Math.max(x.start,M.start),z=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let U=F,k=z;U<k;U+=3){const V=d.getX(U),I=d.getX(U+1),B=d.getX(U+2);l=Ou(this,S,t,r,p,v,g,V,I,B),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),D=Math.min(d.count,M.start+M.count);for(let x=E,S=D;x<S;x+=3){const F=d.getX(x),z=d.getX(x+1),U=d.getX(x+2);l=Ou(this,h,t,r,p,v,g,F,z,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,D=_.length;E<D;E++){const x=_[E],S=h[x.materialIndex],F=Math.max(x.start,M.start),z=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let U=F,k=z;U<k;U+=3){const V=U,I=U+1,B=U+2;l=Ou(this,S,t,r,p,v,g,V,I,B),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),D=Math.min(m.count,M.start+M.count);for(let x=E,S=D;x<S;x+=3){const F=x,z=x+1,U=x+2;l=Ou(this,h,t,r,p,v,g,F,z,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function qT(s,t,i,r,l,c,h,d){let m;if(t.side===_i?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Lr,d),m===null)return null;Lu.copy(d),Lu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Lu);return p<i.near||p>i.far?null:{distance:p,point:Lu.clone(),object:s}}function Ou(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Cu),s.getVertexPosition(m,Du),s.getVertexPosition(p,Uu);const v=qT(s,t,i,r,Cu,Du,Uu,Cy);if(v){const g=new K;ea.getBarycoord(Cy,Cu,Du,Uu,g),l&&(v.uv=ea.getInterpolatedAttribute(l,d,m,p,g,new se)),c&&(v.uv1=ea.getInterpolatedAttribute(c,d,m,p,g,new se)),h&&(v.normal=ea.getInterpolatedAttribute(h,d,m,p,g,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new K,materialIndex:0};ea.getNormal(Cu,Du,Uu,_.normal),v.face=_,v.barycoord=g}return v}class kl extends aa{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let _=0,M=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ci(p,3)),this.setAttribute("normal",new ci(v,3)),this.setAttribute("uv",new ci(g,2));function E(D,x,S,F,z,U,k,V,I,B,L){const T=U/I,P=k/B,it=U/2,ft=k/2,Tt=V/2,st=I+1,W=B+1;let et=0,Z=0;const Et=new K;for(let wt=0;wt<W;wt++){const Ot=wt*P-ft;for(let te=0;te<st;te++){const ne=te*T-it;Et[D]=ne*F,Et[x]=Ot*z,Et[S]=Tt,p.push(Et.x,Et.y,Et.z),Et[D]=0,Et[x]=0,Et[S]=V>0?1:-1,v.push(Et.x,Et.y,Et.z),g.push(te/I),g.push(1-wt/B),et+=1}}for(let wt=0;wt<B;wt++)for(let Ot=0;Ot<I;Ot++){const te=_+Ot+st*wt,ne=_+Ot+st*(wt+1),C=_+(Ot+1)+st*(wt+1),A=_+(Ot+1)+st*wt;m.push(te,ne,A),m.push(ne,C,A),Z+=6}d.addGroup(M,Z,L),M+=Z,_+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function si(s){const t={};for(let i=0;i<s.length;i++){const r=bo(s[i]);for(const l in r)t[l]=r[l]}return t}function YT(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function jx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:je.workingColorSpace}const WT={clone:bo,merge:si};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Gl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=ZT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bo(t.uniforms),this.uniformsGroups=YT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Zx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new K,Dy=new se,Uy=new se;class ki extends Zx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=pm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pm*2*Math.atan(Math.tan(Hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z)}getViewSize(t,i){return this.getViewBounds(t,Dy,Uy),i.subVectors(Uy,Dy)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Hd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ho=-90,po=1;class KT extends ti{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ki(ho,po,t,i);l.layers=this.layers,this.add(l);const c=new ki(ho,po,t,i);c.layers=this.layers,this.add(c);const h=new ki(ho,po,t,i);h.layers=this.layers,this.add(h);const d=new ki(ho,po,t,i);d.layers=this.layers,this.add(d);const m=new ki(ho,po,t,i);m.layers=this.layers,this.add(m);const p=new ki(ho,po,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===xa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===$u)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,_,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Kx extends $n{constructor(t=[],i=Mo,r,l,c,h,d,m,p,v){super(t,i,r,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class QT extends ps{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Kx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new kl(5,5,5),c=new zr({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:_i,blending:Ur});c.uniforms.tEquirect.value=i;const h=new jn(l,c),d=i.minFilter;return i.minFilter===Dr&&(i.minFilter=na),new KT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class vo extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JT={type:"move"};class lp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const D of t.hand.values()){const x=i.getJointPose(D,r),S=this._getHandJoint(p,D);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(JT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new vo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Qx extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class $T extends $n{constructor(t=null,i=1,r=1,l,c,h,d,m,p=Ci,v=Ci,g,_){super(null,h,d,m,p,v,l,c,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cp=new K,tb=new K,eb=new we;class ls{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=cp.subVectors(r,i).cross(tb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(cp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||eb.getNormalMatrix(t),l=this.coplanarPoint(cp).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new zm,nb=new se(.5,.5),zu=new K;class Fm{constructor(t=new ls,i=new ls,r=new ls,l=new ls,c=new ls,h=new ls){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=xa,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],_=c[6],M=c[7],E=c[8],D=c[9],x=c[10],S=c[11],F=c[12],z=c[13],U=c[14],k=c[15];if(l[0].setComponents(p-h,M-v,S-E,k-F).normalize(),l[1].setComponents(p+h,M+v,S+E,k+F).normalize(),l[2].setComponents(p+d,M+g,S+D,k+z).normalize(),l[3].setComponents(p-d,M-g,S-D,k-z).normalize(),r)l[4].setComponents(m,_,x,U).normalize(),l[5].setComponents(p-m,M-_,S-x,k-U).normalize();else if(l[4].setComponents(p-m,M-_,S-x,k-U).normalize(),i===xa)l[5].setComponents(p+m,M+_,S+x,k+U).normalize();else if(i===$u)l[5].setComponents(m,_,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);const i=nb.distanceTo(t.center);return rs.radius=.7071067811865476+i,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(zu.x=l.normal.x>0?t.max.x:t.min.x,zu.y=l.normal.y>0?t.max.y:t.min.y,zu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mm extends $n{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jx extends $n{constructor(t,i,r=ds,l,c,h,d=Ci,m=Ci,p,v=Ol,g=1){if(v!==Ol&&v!==zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:g};super(_,l,c,h,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Om(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $x extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ea{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=t*r[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===h)return l/(c-1);const v=r[l],_=r[l+1]-v,M=(h-v)/_;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new se:new K);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new K,l=[],c=[],h=[],d=new K,m=new pn;for(let M=0;M<=t;M++){const E=M/t;l[M]=this.getTangentAt(E,new K)}c[0]=new K,h[0]=new K;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),_=Math.abs(l[0].z);v<=p&&(p=v,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),_<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),h[M]=h[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ne(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(d,E))}h[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(Ne(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(M=-M);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],M*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bm extends Ea{constructor(t=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new se){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=m-this.aX,M=p-this.aY;m=_*v-M*g+this.aX,p=_*g+M*v+this.aY}return r.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ib extends Bm{constructor(t,i,r,l,c,h){super(t,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Hm(){let s=0,t=0,i=0,r=0;function l(c,h,d,m){s=c,t=d,i=-3*c+3*h-2*d-m,r=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,v,g){let _=(h-c)/p-(d-c)/(p+v)+(d-h)/v,M=(d-h)/v-(m-h)/(v+g)+(m-d)/g;_*=v,M*=v,l(h,d,_,M)},calc:function(c){const h=c*c,d=h*c;return s+t*c+i*h+r*d}}}const Pu=new K,up=new Hm,fp=new Hm,hp=new Hm;class tS extends Ea{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new K){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%c]:(Pu.subVectors(l[0],l[1]).add(l[0]),p=Pu);const g=l[d%c],_=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Pu.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),M),D=Math.pow(g.distanceToSquared(_),M),x=Math.pow(_.distanceToSquared(v),M);D<1e-4&&(D=1),E<1e-4&&(E=D),x<1e-4&&(x=D),up.initNonuniformCatmullRom(p.x,g.x,_.x,v.x,E,D,x),fp.initNonuniformCatmullRom(p.y,g.y,_.y,v.y,E,D,x),hp.initNonuniformCatmullRom(p.z,g.z,_.z,v.z,E,D,x)}else this.curveType==="catmullrom"&&(up.initCatmullRom(p.x,g.x,_.x,v.x,this.tension),fp.initCatmullRom(p.y,g.y,_.y,v.y,this.tension),hp.initCatmullRom(p.z,g.z,_.z,v.z,this.tension));return r.set(up.calc(m),fp.calc(m),hp.calc(m)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new K().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ny(s,t,i,r,l){const c=(r-t)*.5,h=(l-i)*.5,d=s*s,m=s*d;return(2*i-2*r+c+h)*m+(-3*i+3*r-2*c-h)*d+c*s+i}function ab(s,t){const i=1-s;return i*i*t}function rb(s,t){return 2*(1-s)*s*t}function sb(s,t){return s*s*t}function Cl(s,t,i,r){return ab(s,t)+rb(s,i)+sb(s,r)}function ob(s,t){const i=1-s;return i*i*i*t}function lb(s,t){const i=1-s;return 3*i*i*s*t}function cb(s,t){return 3*(1-s)*s*s*t}function ub(s,t){return s*s*s*t}function Dl(s,t,i,r,l){return ob(s,t)+lb(s,i)+cb(s,r)+ub(s,l)}class eS extends Ea{constructor(t=new se,i=new se,r=new se,l=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new se){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Dl(t,l.x,c.x,h.x,d.x),Dl(t,l.y,c.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fb extends Ea{constructor(t=new K,i=new K,r=new K,l=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new K){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Dl(t,l.x,c.x,h.x,d.x),Dl(t,l.y,c.y,h.y,d.y),Dl(t,l.z,c.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nS extends Ea{constructor(t=new se,i=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new se){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new se){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hb extends Ea{constructor(t=new K,i=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new K){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new K){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iS extends Ea{constructor(t=new se,i=new se,r=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new se){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Cl(t,l.x,c.x,h.x),Cl(t,l.y,c.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class db extends Ea{constructor(t=new K,i=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new K){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Cl(t,l.x,c.x,h.x),Cl(t,l.y,c.y,h.y),Cl(t,l.z,c.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aS extends Ea{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new se){const r=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],v=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return r.set(Ny(d,m.x,p.x,v.x,g.x),Ny(d,m.y,p.y,v.y,g.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new se().fromArray(l))}return this}}var gm=Object.freeze({__proto__:null,ArcCurve:ib,CatmullRomCurve3:tS,CubicBezierCurve:eS,CubicBezierCurve3:fb,EllipseCurve:Bm,LineCurve:nS,LineCurve3:hb,QuadraticBezierCurve:iS,QuadraticBezierCurve3:db,SplineCurve:aS});class pb extends Ea{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gm[r](i,t))}return this}getPoint(t,i){const r=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const h=l[c]-r,d=this.curves[c],m=d.getLength(),p=m===0?0:1-h/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,m=h.getPoints(d);for(let p=0;p<m.length;p++){const v=m[p];r&&r.equals(v)||(i.push(v),r=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(new gm[l.type]().fromJSON(l))}return this}}class vm extends pb{constructor(t){super(),this.type="Path",this.currentPoint=new se,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,r=t.length;i<r;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const r=new nS(this.currentPoint.clone(),new se(t,i));return this.curves.push(r),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,r,l){const c=new iS(this.currentPoint.clone(),new se(t,i),new se(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(t,i,r,l,c,h){const d=new eS(this.currentPoint.clone(),new se(t,i),new se(r,l),new se(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),r=new aS(i);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,r,l,c,h){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,r,l,c,h),this}absarc(t,i,r,l,c,h){return this.absellipse(t,i,r,r,l,c,h),this}ellipse(t,i,r,l,c,h,d,m){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+p,i+v,r,l,c,h,d,m),this}absellipse(t,i,r,l,c,h,d,m){const p=new Bm(t,i,r,l,c,h,d,m);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sf extends vm{constructor(t){super(t),this.uuid=wo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(new vm().fromJSON(l))}return this}}function mb(s,t,i=2){const r=t&&t.length,l=r?t[0]*i:s.length;let c=rS(s,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,m,p;if(r&&(c=xb(s,t,c,i)),s.length>80*i){d=1/0,m=1/0;let v=-1/0,g=-1/0;for(let _=i;_<l;_+=i){const M=s[_],E=s[_+1];M<d&&(d=M),E<m&&(m=E),M>v&&(v=M),E>g&&(g=E)}p=Math.max(v-d,g-m),p=p!==0?32767/p:0}return Il(c,h,i,d,m,p,0),h}function rS(s,t,i,r,l){let c;if(l===Ub(s,t,i,r)>0)for(let h=t;h<i;h+=r)c=Ly(h/r|0,s[h],s[h+1],c);else for(let h=i-r;h>=t;h-=r)c=Ly(h/r|0,s[h],s[h+1],c);return c&&Ao(c,c.next)&&(Bl(c),c=c.next),c}function ms(s,t){if(!s)return s;t||(t=s);let i=s,r;do if(r=!1,!i.steiner&&(Ao(i,i.next)||vn(i.prev,i,i.next)===0)){if(Bl(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Il(s,t,i,r,l,c,h){if(!s)return;!h&&c&&bb(s,r,l,c);let d=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?vb(s,r,l,c):gb(s)){t.push(m.i,s.i,p.i),Bl(s),s=p.next,d=p.next;continue}if(s=p,s===d){h?h===1?(s=_b(ms(s),t),Il(s,t,i,r,l,c,2)):h===2&&yb(s,t,i,r,l,c):Il(ms(s),t,i,r,l,c,1);break}}}function gb(s){const t=s.prev,i=s,r=s.next;if(vn(t,i,r)>=0)return!1;const l=t.x,c=i.x,h=r.x,d=t.y,m=i.y,p=r.y,v=Math.min(l,c,h),g=Math.min(d,m,p),_=Math.max(l,c,h),M=Math.max(d,m,p);let E=r.next;for(;E!==t;){if(E.x>=v&&E.x<=_&&E.y>=g&&E.y<=M&&Al(l,d,c,m,h,p,E.x,E.y)&&vn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function vb(s,t,i,r){const l=s.prev,c=s,h=s.next;if(vn(l,c,h)>=0)return!1;const d=l.x,m=c.x,p=h.x,v=l.y,g=c.y,_=h.y,M=Math.min(d,m,p),E=Math.min(v,g,_),D=Math.max(d,m,p),x=Math.max(v,g,_),S=_m(M,E,t,i,r),F=_m(D,x,t,i,r);let z=s.prevZ,U=s.nextZ;for(;z&&z.z>=S&&U&&U.z<=F;){if(z.x>=M&&z.x<=D&&z.y>=E&&z.y<=x&&z!==l&&z!==h&&Al(d,v,m,g,p,_,z.x,z.y)&&vn(z.prev,z,z.next)>=0||(z=z.prevZ,U.x>=M&&U.x<=D&&U.y>=E&&U.y<=x&&U!==l&&U!==h&&Al(d,v,m,g,p,_,U.x,U.y)&&vn(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;z&&z.z>=S;){if(z.x>=M&&z.x<=D&&z.y>=E&&z.y<=x&&z!==l&&z!==h&&Al(d,v,m,g,p,_,z.x,z.y)&&vn(z.prev,z,z.next)>=0)return!1;z=z.prevZ}for(;U&&U.z<=F;){if(U.x>=M&&U.x<=D&&U.y>=E&&U.y<=x&&U!==l&&U!==h&&Al(d,v,m,g,p,_,U.x,U.y)&&vn(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function _b(s,t){let i=s;do{const r=i.prev,l=i.next.next;!Ao(r,l)&&oS(r,i,i.next,l)&&Fl(r,l)&&Fl(l,r)&&(t.push(r.i,i.i,l.i),Bl(i),Bl(i.next),i=s=l),i=i.next}while(i!==s);return ms(i)}function yb(s,t,i,r,l,c){let h=s;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&wb(h,d)){let m=lS(h,d);h=ms(h,h.next),m=ms(m,m.next),Il(h,t,i,r,l,c,0),Il(m,t,i,r,l,c,0);return}d=d.next}h=h.next}while(h!==s)}function xb(s,t,i,r){const l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c]*r,m=c<h-1?t[c+1]*r:s.length,p=rS(s,d,m,r,!1);p===p.next&&(p.steiner=!0),l.push(Rb(p))}l.sort(Sb);for(let c=0;c<l.length;c++)i=Mb(l[c],i);return i}function Sb(s,t){let i=s.x-t.x;if(i===0&&(i=s.y-t.y,i===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=r-l}return i}function Mb(s,t){const i=Eb(s,t);if(!i)return t;const r=lS(i,s);return ms(r,r.next),ms(i,i.next)}function Eb(s,t){let i=t;const r=s.x,l=s.y;let c=-1/0,h;if(Ao(s,i))return i;do{if(Ao(s,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=r&&g>c&&(c=g,h=i.x<i.next.x?i:i.next,g===r))return h}i=i.next}while(i!==t);if(!h)return null;const d=h,m=h.x,p=h.y;let v=1/0;i=h;do{if(r>=i.x&&i.x>=m&&r!==i.x&&sS(l<p?r:c,l,m,p,l<p?c:r,l,i.x,i.y)){const g=Math.abs(l-i.y)/(r-i.x);Fl(i,s)&&(g<v||g===v&&(i.x>h.x||i.x===h.x&&Tb(h,i)))&&(h=i,v=g)}i=i.next}while(i!==d);return h}function Tb(s,t){return vn(s.prev,s,t.prev)<0&&vn(t.next,s,s.next)<0}function bb(s,t,i,r){let l=s;do l.z===0&&(l.z=_m(l.x,l.y,t,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==s);l.prevZ.nextZ=null,l.prevZ=null,Ab(l)}function Ab(s){let t,i=1;do{let r=s,l;s=null;let c=null;for(t=0;r;){t++;let h=r,d=0;for(let p=0;p<i&&(d++,h=h.nextZ,!!h);p++);let m=i;for(;d>0||m>0&&h;)d!==0&&(m===0||!h||r.z<=h.z)?(l=r,r=r.nextZ,d--):(l=h,h=h.nextZ,m--),c?c.nextZ=l:s=l,l.prevZ=c,c=l;r=h}c.nextZ=null,i*=2}while(t>1);return s}function _m(s,t,i,r,l){return s=(s-i)*l|0,t=(t-r)*l|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Rb(s){let t=s,i=s;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==s);return i}function sS(s,t,i,r,l,c,h,d){return(l-h)*(t-d)>=(s-h)*(c-d)&&(s-h)*(r-d)>=(i-h)*(t-d)&&(i-h)*(c-d)>=(l-h)*(r-d)}function Al(s,t,i,r,l,c,h,d){return!(s===h&&t===d)&&sS(s,t,i,r,l,c,h,d)}function wb(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Cb(s,t)&&(Fl(s,t)&&Fl(t,s)&&Db(s,t)&&(vn(s.prev,s,t.prev)||vn(s,t.prev,t))||Ao(s,t)&&vn(s.prev,s,s.next)>0&&vn(t.prev,t,t.next)>0)}function vn(s,t,i){return(t.y-s.y)*(i.x-t.x)-(t.x-s.x)*(i.y-t.y)}function Ao(s,t){return s.x===t.x&&s.y===t.y}function oS(s,t,i,r){const l=Fu(vn(s,t,i)),c=Fu(vn(s,t,r)),h=Fu(vn(i,r,s)),d=Fu(vn(i,r,t));return!!(l!==c&&h!==d||l===0&&Iu(s,i,t)||c===0&&Iu(s,r,t)||h===0&&Iu(i,s,r)||d===0&&Iu(i,t,r))}function Iu(s,t,i){return t.x<=Math.max(s.x,i.x)&&t.x>=Math.min(s.x,i.x)&&t.y<=Math.max(s.y,i.y)&&t.y>=Math.min(s.y,i.y)}function Fu(s){return s>0?1:s<0?-1:0}function Cb(s,t){let i=s;do{if(i.i!==s.i&&i.next.i!==s.i&&i.i!==t.i&&i.next.i!==t.i&&oS(i,i.next,s,t))return!0;i=i.next}while(i!==s);return!1}function Fl(s,t){return vn(s.prev,s,s.next)<0?vn(s,t,s.next)>=0&&vn(s,s.prev,t)>=0:vn(s,t,s.prev)<0||vn(s,s.next,t)<0}function Db(s,t){let i=s,r=!1;const l=(s.x+t.x)/2,c=(s.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==s);return r}function lS(s,t){const i=ym(s.i,s.x,s.y),r=ym(t.i,t.x,t.y),l=s.next,c=t.prev;return s.next=t,t.prev=s,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function Ly(s,t,i,r){const l=ym(s,t,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function Bl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ym(s,t,i){return{i:s,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ub(s,t,i,r){let l=0;for(let c=t,h=i-r;c<i;c+=r)l+=(s[h]-s[c])*(s[c+1]+s[h+1]),h=c;return l}class Nb{static triangulate(t,i,r=2){return mb(t,i,r)}}class Ya{static area(t){const i=t.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=t[l].x*t[c].y-t[c].x*t[l].y;return r*.5}static isClockWise(t){return Ya.area(t)<0}static triangulateShape(t,i){const r=[],l=[],c=[];Oy(t),zy(r,t);let h=t.length;i.forEach(Oy);for(let m=0;m<i.length;m++)l.push(h),h+=i[m].length,zy(r,i[m]);const d=Nb.triangulate(r,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function Oy(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function zy(s,t){for(let i=0;i<t.length;i++)s.push(t[i].x),s.push(t[i].y)}class of extends aa{constructor(t=new sf([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const r=this,l=[],c=[];for(let d=0,m=t.length;d<m;d++){const p=t[d];h(p)}this.setAttribute("position",new ci(l,3)),this.setAttribute("uv",new ci(c,2)),this.computeVertexNormals();function h(d){const m=[],p=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let _=i.bevelEnabled!==void 0?i.bevelEnabled:!0,M=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:M-.1,D=i.bevelOffset!==void 0?i.bevelOffset:0,x=i.bevelSegments!==void 0?i.bevelSegments:3;const S=i.extrudePath,F=i.UVGenerator!==void 0?i.UVGenerator:Lb;let z,U=!1,k,V,I,B;S&&(z=S.getSpacedPoints(v),U=!0,_=!1,k=S.computeFrenetFrames(v,!1),V=new K,I=new K,B=new K),_||(x=0,M=0,E=0,D=0);const L=d.extractPoints(p);let T=L.shape;const P=L.holes;if(!Ya.isClockWise(T)){T=T.reverse();for(let yt=0,mt=P.length;yt<mt;yt++){const J=P[yt];Ya.isClockWise(J)&&(P[yt]=J.reverse())}}function ft(yt){const J=10000000000000001e-36;let Q=yt[0];for(let ht=1;ht<=yt.length;ht++){const xt=ht%yt.length,Nt=yt[xt],Jt=Nt.x-Q.x,$t=Nt.y-Q.y,N=Jt*Jt+$t*$t,b=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(Q.x),Math.abs(Q.y)),X=J*b*b;if(N<=X){yt.splice(xt,1),ht--;continue}Q=Nt}}ft(T),P.forEach(ft);const Tt=P.length,st=T;for(let yt=0;yt<Tt;yt++){const mt=P[yt];T=T.concat(mt)}function W(yt,mt,J){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),yt.clone().addScaledVector(mt,J)}const et=T.length;function Z(yt,mt,J){let Q,ht,xt;const Nt=yt.x-mt.x,Jt=yt.y-mt.y,$t=J.x-yt.x,N=J.y-yt.y,b=Nt*Nt+Jt*Jt,X=Nt*N-Jt*$t;if(Math.abs(X)>Number.EPSILON){const pt=Math.sqrt(b),Rt=Math.sqrt($t*$t+N*N),tt=mt.x-Jt/pt,jt=mt.y+Nt/pt,Gt=J.x-N/Rt,Kt=J.y+$t/Rt,Qt=((Gt-tt)*N-(Kt-jt)*$t)/(Nt*N-Jt*$t);Q=tt+Nt*Qt-yt.x,ht=jt+Jt*Qt-yt.y;const Bt=Q*Q+ht*ht;if(Bt<=2)return new se(Q,ht);xt=Math.sqrt(Bt/2)}else{let pt=!1;Nt>Number.EPSILON?$t>Number.EPSILON&&(pt=!0):Nt<-Number.EPSILON?$t<-Number.EPSILON&&(pt=!0):Math.sign(Jt)===Math.sign(N)&&(pt=!0),pt?(Q=-Jt,ht=Nt,xt=Math.sqrt(b)):(Q=Nt,ht=Jt,xt=Math.sqrt(b/2))}return new se(Q/xt,ht/xt)}const Et=[];for(let yt=0,mt=st.length,J=mt-1,Q=yt+1;yt<mt;yt++,J++,Q++)J===mt&&(J=0),Q===mt&&(Q=0),Et[yt]=Z(st[yt],st[J],st[Q]);const wt=[];let Ot,te=Et.concat();for(let yt=0,mt=Tt;yt<mt;yt++){const J=P[yt];Ot=[];for(let Q=0,ht=J.length,xt=ht-1,Nt=Q+1;Q<ht;Q++,xt++,Nt++)xt===ht&&(xt=0),Nt===ht&&(Nt=0),Ot[Q]=Z(J[Q],J[xt],J[Nt]);wt.push(Ot),te=te.concat(Ot)}let ne;if(x===0)ne=Ya.triangulateShape(st,P);else{const yt=[],mt=[];for(let J=0;J<x;J++){const Q=J/x,ht=M*Math.cos(Q*Math.PI/2),xt=E*Math.sin(Q*Math.PI/2)+D;for(let Nt=0,Jt=st.length;Nt<Jt;Nt++){const $t=W(st[Nt],Et[Nt],xt);At($t.x,$t.y,-ht),Q===0&&yt.push($t)}for(let Nt=0,Jt=Tt;Nt<Jt;Nt++){const $t=P[Nt];Ot=wt[Nt];const N=[];for(let b=0,X=$t.length;b<X;b++){const pt=W($t[b],Ot[b],xt);At(pt.x,pt.y,-ht),Q===0&&N.push(pt)}Q===0&&mt.push(N)}}ne=Ya.triangulateShape(yt,mt)}const C=ne.length,A=E+D;for(let yt=0;yt<et;yt++){const mt=_?W(T[yt],te[yt],A):T[yt];U?(I.copy(k.normals[0]).multiplyScalar(mt.x),V.copy(k.binormals[0]).multiplyScalar(mt.y),B.copy(z[0]).add(I).add(V),At(B.x,B.y,B.z)):At(mt.x,mt.y,0)}for(let yt=1;yt<=v;yt++)for(let mt=0;mt<et;mt++){const J=_?W(T[mt],te[mt],A):T[mt];U?(I.copy(k.normals[yt]).multiplyScalar(J.x),V.copy(k.binormals[yt]).multiplyScalar(J.y),B.copy(z[yt]).add(I).add(V),At(B.x,B.y,B.z)):At(J.x,J.y,g/v*yt)}for(let yt=x-1;yt>=0;yt--){const mt=yt/x,J=M*Math.cos(mt*Math.PI/2),Q=E*Math.sin(mt*Math.PI/2)+D;for(let ht=0,xt=st.length;ht<xt;ht++){const Nt=W(st[ht],Et[ht],Q);At(Nt.x,Nt.y,g+J)}for(let ht=0,xt=P.length;ht<xt;ht++){const Nt=P[ht];Ot=wt[ht];for(let Jt=0,$t=Nt.length;Jt<$t;Jt++){const N=W(Nt[Jt],Ot[Jt],Q);U?At(N.x,N.y+z[v-1].y,z[v-1].x+J):At(N.x,N.y,g+J)}}}H(),q();function H(){const yt=l.length/3;if(_){let mt=0,J=et*mt;for(let Q=0;Q<C;Q++){const ht=ne[Q];bt(ht[2]+J,ht[1]+J,ht[0]+J)}mt=v+x*2,J=et*mt;for(let Q=0;Q<C;Q++){const ht=ne[Q];bt(ht[0]+J,ht[1]+J,ht[2]+J)}}else{for(let mt=0;mt<C;mt++){const J=ne[mt];bt(J[2],J[1],J[0])}for(let mt=0;mt<C;mt++){const J=ne[mt];bt(J[0]+et*v,J[1]+et*v,J[2]+et*v)}}r.addGroup(yt,l.length/3-yt,0)}function q(){const yt=l.length/3;let mt=0;lt(st,mt),mt+=st.length;for(let J=0,Q=P.length;J<Q;J++){const ht=P[J];lt(ht,mt),mt+=ht.length}r.addGroup(yt,l.length/3-yt,1)}function lt(yt,mt){let J=yt.length;for(;--J>=0;){const Q=J;let ht=J-1;ht<0&&(ht=yt.length-1);for(let xt=0,Nt=v+x*2;xt<Nt;xt++){const Jt=et*xt,$t=et*(xt+1),N=mt+Q+Jt,b=mt+ht+Jt,X=mt+ht+$t,pt=mt+Q+$t;St(N,b,X,pt)}}}function At(yt,mt,J){m.push(yt),m.push(mt),m.push(J)}function bt(yt,mt,J){zt(yt),zt(mt),zt(J);const Q=l.length/3,ht=F.generateTopUV(r,l,Q-3,Q-2,Q-1);O(ht[0]),O(ht[1]),O(ht[2])}function St(yt,mt,J,Q){zt(yt),zt(mt),zt(Q),zt(mt),zt(J),zt(Q);const ht=l.length/3,xt=F.generateSideWallUV(r,l,ht-6,ht-3,ht-2,ht-1);O(xt[0]),O(xt[1]),O(xt[3]),O(xt[1]),O(xt[2]),O(xt[3])}function zt(yt){l.push(m[yt*3+0]),l.push(m[yt*3+1]),l.push(m[yt*3+2])}function O(yt){c.push(yt.x),c.push(yt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Ob(i,r,t)}static fromJSON(t,i){const r=[];for(let c=0,h=t.shapes.length;c<h;c++){const d=i[t.shapes[c]];r.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new gm[l.type]().fromJSON(l)),new of(r,t.options)}}const Lb={generateTopUV:function(s,t,i,r,l){const c=t[i*3],h=t[i*3+1],d=t[r*3],m=t[r*3+1],p=t[l*3],v=t[l*3+1];return[new se(c,h),new se(d,m),new se(p,v)]},generateSideWallUV:function(s,t,i,r,l,c){const h=t[i*3],d=t[i*3+1],m=t[i*3+2],p=t[r*3],v=t[r*3+1],g=t[r*3+2],_=t[l*3],M=t[l*3+1],E=t[l*3+2],D=t[c*3],x=t[c*3+1],S=t[c*3+2];return Math.abs(d-v)<Math.abs(h-p)?[new se(h,1-m),new se(p,1-g),new se(_,1-E),new se(D,1-S)]:[new se(d,1-m),new se(v,1-g),new se(M,1-E),new se(x,1-S)]}};function Ob(s,t,i){if(i.shapes=[],Array.isArray(s))for(let r=0,l=s.length;r<l;r++){const c=s[r];i.shapes.push(c.uuid)}else i.shapes.push(s.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Xl extends aa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,g=t/d,_=i/m,M=[],E=[],D=[],x=[];for(let S=0;S<v;S++){const F=S*_-h;for(let z=0;z<p;z++){const U=z*g-c;E.push(U,-F,0),D.push(0,0,1),x.push(z/d),x.push(1-S/m)}}for(let S=0;S<m;S++)for(let F=0;F<d;F++){const z=F+p*S,U=F+p*(S+1),k=F+1+p*(S+1),V=F+1+p*S;M.push(z,U,V),M.push(U,k,V)}this.setIndex(M),this.setAttribute("position",new ci(E,3)),this.setAttribute("normal",new ci(D,3)),this.setAttribute("uv",new ci(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vm extends aa{constructor(t=new sf([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const r=[],l=[],c=[],h=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let v=0;v<t.length;v++)p(t[v]),this.addGroup(d,m,v),d+=m,m=0;this.setIndex(r),this.setAttribute("position",new ci(l,3)),this.setAttribute("normal",new ci(c,3)),this.setAttribute("uv",new ci(h,2));function p(v){const g=l.length/3,_=v.extractPoints(i);let M=_.shape;const E=_.holes;Ya.isClockWise(M)===!1&&(M=M.reverse());for(let x=0,S=E.length;x<S;x++){const F=E[x];Ya.isClockWise(F)===!0&&(E[x]=F.reverse())}const D=Ya.triangulateShape(M,E);for(let x=0,S=E.length;x<S;x++){const F=E[x];M=M.concat(F)}for(let x=0,S=M.length;x<S;x++){const F=M[x];l.push(F.x,F.y,0),c.push(0,0,1),h.push(F.x,F.y)}for(let x=0,S=D.length;x<S;x++){const F=D[x],z=F[0]+g,U=F[1]+g,k=F[2]+g;r.push(z,U,k),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return zb(i,t)}static fromJSON(t,i){const r=[];for(let l=0,c=t.shapes.length;l<c;l++){const h=i[t.shapes[l]];r.push(h)}return new Vm(r,t.curveSegments)}}function zb(s,t){if(t.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){const l=s[i];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t}class ef extends aa{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],m=[],p=[],v=new K,g=new K,_=new K;for(let M=0;M<=r;M++)for(let E=0;E<=l;E++){const D=E/l*c,x=M/r*Math.PI*2;g.x=(t+i*Math.cos(x))*Math.cos(D),g.y=(t+i*Math.cos(x))*Math.sin(D),g.z=i*Math.sin(x),d.push(g.x,g.y,g.z),v.x=t*Math.cos(D),v.y=t*Math.sin(D),_.subVectors(g,v).normalize(),m.push(_.x,_.y,_.z),p.push(E/l),p.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=l;E++){const D=(l+1)*M+E-1,x=(l+1)*(M-1)+E-1,S=(l+1)*(M-1)+E,F=(l+1)*M+E;h.push(D,x,F),h.push(x,S,F)}this.setIndex(h),this.setAttribute("position",new ci(d,3)),this.setAttribute("normal",new ci(m,3)),this.setAttribute("uv",new ci(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ef(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cS extends Gl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hx,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bu extends cS{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pb extends Gl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ib extends Gl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fb extends ti{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const dp=new pn,Py=new K,Iy=new K;class Bb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Sa,this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fm,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Py.setFromMatrixPosition(t.matrixWorld),i.position.copy(Py),Iy.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Iy),i.updateMatrixWorld(),dp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uS extends Zx{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Hb extends Bb{constructor(){super(new uS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fy extends Fb{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new Hb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vb extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const By=new pn;class Gb{constructor(t,i,r=0,l=1/0){this.ray=new Xx(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Pm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return By.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(By),this}intersectObject(t,i=!0,r=[]){return xm(t,this,r,i),r.sort(Hy),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)xm(t[l],this,r,i);return r.sort(Hy),r}}function Hy(s,t){return s.distance-t.distance}function xm(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)xm(c[h],t,i,!0)}}function Vy(s,t,i,r){const l=kb(r);switch(i){case Px:return s*t;case Fx:return s*t/l.components*l.byteLength;case Um:return s*t/l.components*l.byteLength;case Bx:return s*t*2/l.components*l.byteLength;case Nm:return s*t*2/l.components*l.byteLength;case Ix:return s*t*3/l.components*l.byteLength;case ia:return s*t*4/l.components*l.byteLength;case Lm:return s*t*4/l.components*l.byteLength;case qu:case Yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wu:case ju:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vp:case kp:return Math.max(s,16)*Math.max(t,8)/4;case Hp:case Gp:return Math.max(s,8)*Math.max(t,8)/2;case Xp:case qp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case $p:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tm:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case em:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nm:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case im:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case am:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rm:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case sm:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case om:case lm:case cm:return Math.ceil(s/4)*Math.ceil(t/4)*16;case um:case fm:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hm:case dm:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kb(s){switch(s){case Sa:case Nx:return{byteLength:1,components:1};case Nl:case Lx:case Hl:return{byteLength:2,components:1};case Cm:case Dm:return{byteLength:2,components:4};case ds:case wm:case qa:return{byteLength:4,components:1};case Ox:case zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fS(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Xb(s){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<g.length;M++){const E=g[_],D=g[M];D.start<=E.start+E.count+1?E.count=Math.max(E.count,D.start+D.count-E.start):(++_,g[_]=D)}g.length=_+1;for(let M=0,E=g.length;M<E;M++){const D=g[M];s.bufferSubData(p,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_A=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SA="gl_FragColor = linearToOutputTexel( gl_FragColor );",MA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$A=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ce={alphahash_fragment:qb,alphahash_pars_fragment:Yb,alphamap_fragment:Wb,alphamap_pars_fragment:jb,alphatest_fragment:Zb,alphatest_pars_fragment:Kb,aomap_fragment:Qb,aomap_pars_fragment:Jb,batching_pars_vertex:$b,batching_vertex:tA,begin_vertex:eA,beginnormal_vertex:nA,bsdfs:iA,iridescence_fragment:aA,bumpmap_pars_fragment:rA,clipping_planes_fragment:sA,clipping_planes_pars_fragment:oA,clipping_planes_pars_vertex:lA,clipping_planes_vertex:cA,color_fragment:uA,color_pars_fragment:fA,color_pars_vertex:hA,color_vertex:dA,common:pA,cube_uv_reflection_fragment:mA,defaultnormal_vertex:gA,displacementmap_pars_vertex:vA,displacementmap_vertex:_A,emissivemap_fragment:yA,emissivemap_pars_fragment:xA,colorspace_fragment:SA,colorspace_pars_fragment:MA,envmap_fragment:EA,envmap_common_pars_fragment:TA,envmap_pars_fragment:bA,envmap_pars_vertex:AA,envmap_physical_pars_fragment:IA,envmap_vertex:RA,fog_vertex:wA,fog_pars_vertex:CA,fog_fragment:DA,fog_pars_fragment:UA,gradientmap_pars_fragment:NA,lightmap_pars_fragment:LA,lights_lambert_fragment:OA,lights_lambert_pars_fragment:zA,lights_pars_begin:PA,lights_toon_fragment:FA,lights_toon_pars_fragment:BA,lights_phong_fragment:HA,lights_phong_pars_fragment:VA,lights_physical_fragment:GA,lights_physical_pars_fragment:kA,lights_fragment_begin:XA,lights_fragment_maps:qA,lights_fragment_end:YA,logdepthbuf_fragment:WA,logdepthbuf_pars_fragment:jA,logdepthbuf_pars_vertex:ZA,logdepthbuf_vertex:KA,map_fragment:QA,map_pars_fragment:JA,map_particle_fragment:$A,map_particle_pars_fragment:t2,metalnessmap_fragment:e2,metalnessmap_pars_fragment:n2,morphinstance_vertex:i2,morphcolor_vertex:a2,morphnormal_vertex:r2,morphtarget_pars_vertex:s2,morphtarget_vertex:o2,normal_fragment_begin:l2,normal_fragment_maps:c2,normal_pars_fragment:u2,normal_pars_vertex:f2,normal_vertex:h2,normalmap_pars_fragment:d2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:v2,opaque_fragment:_2,packing:y2,premultiplied_alpha_fragment:x2,project_vertex:S2,dithering_fragment:M2,dithering_pars_fragment:E2,roughnessmap_fragment:T2,roughnessmap_pars_fragment:b2,shadowmap_pars_fragment:A2,shadowmap_pars_vertex:R2,shadowmap_vertex:w2,shadowmask_pars_fragment:C2,skinbase_vertex:D2,skinning_pars_vertex:U2,skinning_vertex:N2,skinnormal_vertex:L2,specularmap_fragment:O2,specularmap_pars_fragment:z2,tonemapping_fragment:P2,tonemapping_pars_fragment:I2,transmission_fragment:F2,transmission_pars_fragment:B2,uv_pars_fragment:H2,uv_pars_vertex:V2,uv_vertex:G2,worldpos_vertex:k2,background_vert:X2,background_frag:q2,backgroundCube_vert:Y2,backgroundCube_frag:W2,cube_vert:j2,cube_frag:Z2,depth_vert:K2,depth_frag:Q2,distanceRGBA_vert:J2,distanceRGBA_frag:$2,equirect_vert:tR,equirect_frag:eR,linedashed_vert:nR,linedashed_frag:iR,meshbasic_vert:aR,meshbasic_frag:rR,meshlambert_vert:sR,meshlambert_frag:oR,meshmatcap_vert:lR,meshmatcap_frag:cR,meshnormal_vert:uR,meshnormal_frag:fR,meshphong_vert:hR,meshphong_frag:dR,meshphysical_vert:pR,meshphysical_frag:mR,meshtoon_vert:gR,meshtoon_frag:vR,points_vert:_R,points_frag:yR,shadow_vert:xR,shadow_frag:SR,sprite_vert:MR,sprite_frag:ER},oe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},ya={basic:{uniforms:si([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:si([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:si([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:si([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:si([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:si([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:si([oe.points,oe.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:si([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:si([oe.common,oe.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:si([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:si([oe.sprite,oe.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:si([oe.common,oe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:si([oe.lights,oe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};ya.physical={uniforms:si([ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Hu={r:0,b:0,g:0},ss=new Ma,TR=new pn;function bR(s,t,i,r,l,c,h){const d=new Fe(0);let m=c===!0?0:1,p,v,g=null,_=0,M=null;function E(z){let U=z.isScene===!0?z.background:null;return U&&U.isTexture&&(U=(z.backgroundBlurriness>0?i:t).get(U)),U}function D(z){let U=!1;const k=E(z);k===null?S(d,m):k&&k.isColor&&(S(k,1),U=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(z,U){const k=E(U);k&&(k.isCubeTexture||k.mapping===rf)?(v===void 0&&(v=new jn(new kl(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:bo(ya.backgroundCube.uniforms),vertexShader:ya.backgroundCube.vertexShader,fragmentShader:ya.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),ss.copy(U.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(TR.makeRotationFromEuler(ss)),v.material.toneMapped=je.getTransfer(k.colorSpace)!==an,(g!==k||_!==k.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=k,_=k.version,M=s.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new jn(new Xl(2,2),new zr({name:"BackgroundMaterial",uniforms:bo(ya.background.uniforms),vertexShader:ya.background.vertexShader,fragmentShader:ya.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=je.getTransfer(k.colorSpace)!==an,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||_!==k.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=k,_=k.version,M=s.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function S(z,U){z.getRGB(Hu,jx(s)),r.buffers.color.setClear(Hu.r,Hu.g,Hu.b,U,h)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,U=1){d.set(z),m=U,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,S(d,m)},render:D,addToRenderList:x,dispose:F}}function AR(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function d(T,P,it,ft,Tt){let st=!1;const W=g(ft,it,P);c!==W&&(c=W,p(c.object)),st=M(T,ft,it,Tt),st&&E(T,ft,it,Tt),Tt!==null&&t.update(Tt,s.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,U(T,P,it,ft),Tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Tt).buffer))}function m(){return s.createVertexArray()}function p(T){return s.bindVertexArray(T)}function v(T){return s.deleteVertexArray(T)}function g(T,P,it){const ft=it.wireframe===!0;let Tt=r[T.id];Tt===void 0&&(Tt={},r[T.id]=Tt);let st=Tt[P.id];st===void 0&&(st={},Tt[P.id]=st);let W=st[ft];return W===void 0&&(W=_(m()),st[ft]=W),W}function _(T){const P=[],it=[],ft=[];for(let Tt=0;Tt<i;Tt++)P[Tt]=0,it[Tt]=0,ft[Tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:it,attributeDivisors:ft,object:T,attributes:{},index:null}}function M(T,P,it,ft){const Tt=c.attributes,st=P.attributes;let W=0;const et=it.getAttributes();for(const Z in et)if(et[Z].location>=0){const wt=Tt[Z];let Ot=st[Z];if(Ot===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(Ot=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(Ot=T.instanceColor)),wt===void 0||wt.attribute!==Ot||Ot&&wt.data!==Ot.data)return!0;W++}return c.attributesNum!==W||c.index!==ft}function E(T,P,it,ft){const Tt={},st=P.attributes;let W=0;const et=it.getAttributes();for(const Z in et)if(et[Z].location>=0){let wt=st[Z];wt===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(wt=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(wt=T.instanceColor));const Ot={};Ot.attribute=wt,wt&&wt.data&&(Ot.data=wt.data),Tt[Z]=Ot,W++}c.attributes=Tt,c.attributesNum=W,c.index=ft}function D(){const T=c.newAttributes;for(let P=0,it=T.length;P<it;P++)T[P]=0}function x(T){S(T,0)}function S(T,P){const it=c.newAttributes,ft=c.enabledAttributes,Tt=c.attributeDivisors;it[T]=1,ft[T]===0&&(s.enableVertexAttribArray(T),ft[T]=1),Tt[T]!==P&&(s.vertexAttribDivisor(T,P),Tt[T]=P)}function F(){const T=c.newAttributes,P=c.enabledAttributes;for(let it=0,ft=P.length;it<ft;it++)P[it]!==T[it]&&(s.disableVertexAttribArray(it),P[it]=0)}function z(T,P,it,ft,Tt,st,W){W===!0?s.vertexAttribIPointer(T,P,it,Tt,st):s.vertexAttribPointer(T,P,it,ft,Tt,st)}function U(T,P,it,ft){D();const Tt=ft.attributes,st=it.getAttributes(),W=P.defaultAttributeValues;for(const et in st){const Z=st[et];if(Z.location>=0){let Et=Tt[et];if(Et===void 0&&(et==="instanceMatrix"&&T.instanceMatrix&&(Et=T.instanceMatrix),et==="instanceColor"&&T.instanceColor&&(Et=T.instanceColor)),Et!==void 0){const wt=Et.normalized,Ot=Et.itemSize,te=t.get(Et);if(te===void 0)continue;const ne=te.buffer,C=te.type,A=te.bytesPerElement,H=C===s.INT||C===s.UNSIGNED_INT||Et.gpuType===wm;if(Et.isInterleavedBufferAttribute){const q=Et.data,lt=q.stride,At=Et.offset;if(q.isInstancedInterleavedBuffer){for(let bt=0;bt<Z.locationSize;bt++)S(Z.location+bt,q.meshPerAttribute);T.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let bt=0;bt<Z.locationSize;bt++)x(Z.location+bt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let bt=0;bt<Z.locationSize;bt++)z(Z.location+bt,Ot/Z.locationSize,C,wt,lt*A,(At+Ot/Z.locationSize*bt)*A,H)}else{if(Et.isInstancedBufferAttribute){for(let q=0;q<Z.locationSize;q++)S(Z.location+q,Et.meshPerAttribute);T.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let q=0;q<Z.locationSize;q++)x(Z.location+q);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let q=0;q<Z.locationSize;q++)z(Z.location+q,Ot/Z.locationSize,C,wt,Ot*A,Ot/Z.locationSize*q*A,H)}}else if(W!==void 0){const wt=W[et];if(wt!==void 0)switch(wt.length){case 2:s.vertexAttrib2fv(Z.location,wt);break;case 3:s.vertexAttrib3fv(Z.location,wt);break;case 4:s.vertexAttrib4fv(Z.location,wt);break;default:s.vertexAttrib1fv(Z.location,wt)}}}}F()}function k(){B();for(const T in r){const P=r[T];for(const it in P){const ft=P[it];for(const Tt in ft)v(ft[Tt].object),delete ft[Tt];delete P[it]}delete r[T]}}function V(T){if(r[T.id]===void 0)return;const P=r[T.id];for(const it in P){const ft=P[it];for(const Tt in ft)v(ft[Tt].object),delete ft[Tt];delete P[it]}delete r[T.id]}function I(T){for(const P in r){const it=r[P];if(it[T.id]===void 0)continue;const ft=it[T.id];for(const Tt in ft)v(ft[Tt].object),delete ft[Tt];delete it[T.id]}}function B(){L(),h=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:L,dispose:k,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:x,disableUnusedAttributes:F}}function RR(s,t,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=v[E];i.update(M,r,1)}function m(p,v,g,_){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],v[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,_,0,g);let E=0;for(let D=0;D<g;D++)E+=v[D]*_[D];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function wR(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==ia&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const B=I===Hl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Sa&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qa&&!B)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:D,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:F,maxVaryings:z,maxFragmentUniforms:U,vertexTextures:k,maxSamples:V}}function CR(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new ls,d=new we,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||r!==0||l;return l=_,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,M){const E=g.clippingPlanes,D=g.clipIntersection,x=g.clipShadows,S=s.get(g);if(!l||E===null||E.length===0||c&&!x)c?v(null):p();else{const F=c?0:r,z=F*4;let U=S.clippingState||null;m.value=U,U=v(E,_,z,M);for(let k=0;k!==z;++k)U[k]=i[k];S.clippingState=U,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,_,M,E){const D=g!==null?g.length:0;let x=null;if(D!==0){if(x=m.value,E!==!0||x===null){const S=M+D*4,F=_.matrixWorldInverse;d.getNormalMatrix(F),(x===null||x.length<S)&&(x=new Float32Array(S));for(let z=0,U=M;z!==D;++z,U+=4)h.copy(g[z]).applyMatrix4(F,d),h.normal.toArray(x,U),x[U+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,x}}function DR(s){let t=new WeakMap;function i(h,d){return d===Ip?h.mapping=Mo:d===Fp&&(h.mapping=Eo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ip||d===Fp)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new QT(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const _o=4,Gy=[.125,.215,.35,.446,.526,.582],fs=20,pp=new uS,ky=new Fe;let mp=null,gp=0,vp=0,_p=!1;const cs=(1+Math.sqrt(5))/2,mo=1/cs,Xy=[new K(-cs,mo,0),new K(cs,mo,0),new K(-mo,0,cs),new K(mo,0,cs),new K(0,cs,-mo),new K(0,cs,mo),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],UR=new K;class Sm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=UR}=c;mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mp,gp,vp),this._renderer.xr.enabled=_p,t.scissorTest=!1,Vu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Mo||t.mapping===Eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:na,minFilter:na,generateMipmaps:!1,type:Hl,format:ia,colorSpace:To,depthBuffer:!1},l=qy(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qy(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NR(c)),this._blurMaterial=LR(c,t,i)}return l}_compileMaterial(t){const i=new jn(this._lodPlanes[0],t);this._renderer.compile(i,pp)}_sceneToCubeUV(t,i,r,l,c){const m=new ki(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,M=g.toneMapping;g.getClearColor(ky),g.toneMapping=Nr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const D=new Im({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1}),x=new jn(new kl,D);let S=!1;const F=t.background;F?F.isColor&&(D.color.copy(F),t.background=null,S=!0):(D.color.copy(ky),S=!0);for(let z=0;z<6;z++){const U=z%3;U===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[z],c.y,c.z)):U===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[z]));const k=this._cubeSize;Vu(l,U*k,z>2?k:0,k,k),g.setRenderTarget(l),S&&g.render(x,m),g.render(t,m)}x.geometry.dispose(),x.material.dispose(),g.toneMapping=M,g.autoClear=_,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Mo||t.mapping===Eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yy());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Vu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,pp)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Xy[(l-c-1)%Xy.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new jn(this._lodPlanes[l],p),_=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*fs-1),D=c/E,x=isFinite(c)?1+Math.floor(v*D):fs;x>fs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${fs}`);const S=[];let F=0;for(let I=0;I<fs;++I){const B=I/D,L=Math.exp(-B*B/2);S.push(L),I===0?F+=L:I<x&&(F+=2*L)}for(let I=0;I<S.length;I++)S[I]=S[I]/F;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=S,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:z}=this;_.dTheta.value=E,_.mipInt.value=z-r;const U=this._sizeLods[l],k=3*U*(l>z-_o?l-z+_o:0),V=4*(this._cubeSize-U);Vu(i,k,V,3*U,2*U),m.setRenderTarget(i),m.render(g,pp)}}function NR(s){const t=[],i=[],r=[];let l=s;const c=s-_o+1+Gy.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-_o?m=Gy[h-s+_o-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,E=6,D=3,x=2,S=1,F=new Float32Array(D*E*M),z=new Float32Array(x*E*M),U=new Float32Array(S*E*M);for(let V=0;V<M;V++){const I=V%3*2/3-1,B=V>2?0:-1,L=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];F.set(L,D*E*V),z.set(_,x*E*V);const T=[V,V,V,V,V,V];U.set(T,S*E*V)}const k=new aa;k.setAttribute("position",new Di(F,D)),k.setAttribute("uv",new Di(z,x)),k.setAttribute("faceIndex",new Di(U,S)),t.push(k),l>_o&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function qy(s,t,i){const r=new ps(s,t,i);return r.texture.mapping=rf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function LR(s,t,i){const r=new Float32Array(fs),l=new K(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Yy(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Wy(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Gm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OR(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ip||m===Fp,v=m===Mo||m===Eo;if(p||v){let g=t.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new Sm(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Sm(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function zR(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Pl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function PR(s,t,i,r){const l={},c=new WeakMap;function h(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const M=c.get(_);M&&(t.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(g,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const M in _)t.update(_[M],s.ARRAY_BUFFER)}function p(g){const _=[],M=g.index,E=g.attributes.position;let D=0;if(M!==null){const F=M.array;D=M.version;for(let z=0,U=F.length;z<U;z+=3){const k=F[z+0],V=F[z+1],I=F[z+2];_.push(k,V,V,I,I,k)}}else if(E!==void 0){const F=E.array;D=E.version;for(let z=0,U=F.length/3-1;z<U;z+=3){const k=z+0,V=z+1,I=z+2;_.push(k,V,V,I,I,k)}}else return;const x=new(Gx(_)?Wx:Yx)(_,1);x.version=D;const S=c.get(g);S&&t.remove(S),c.set(g,x)}function v(g){const _=c.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function IR(s,t,i){let r;function l(_){r=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,M){s.drawElements(r,M,c,_*h),i.update(M,r,1)}function p(_,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,_*h,E),i.update(M,r,E))}function v(_,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,E);let x=0;for(let S=0;S<E;S++)x+=M[S];i.update(x,r,1)}function g(_,M,E,D){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<_.length;S++)p(_[S]/h,M[S],D[S]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,D,0,E);let S=0;for(let F=0;F<E;F++)S+=M[F]*D[F];i.update(S,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function FR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function BR(s,t,i){const r=new WeakMap,l=new Mn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==g){let T=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",T)};var M=T;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),D===!0&&(U=2),x===!0&&(U=3);let k=d.attributes.position.count*U,V=1;k>t.maxTextureSize&&(V=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*V*4*g),B=new kx(I,k,V,g);B.type=qa,B.needsUpdate=!0;const L=U*4;for(let P=0;P<g;P++){const it=S[P],ft=F[P],Tt=z[P],st=k*V*4*P;for(let W=0;W<it.count;W++){const et=W*L;E===!0&&(l.fromBufferAttribute(it,W),I[st+et+0]=l.x,I[st+et+1]=l.y,I[st+et+2]=l.z,I[st+et+3]=0),D===!0&&(l.fromBufferAttribute(ft,W),I[st+et+4]=l.x,I[st+et+5]=l.y,I[st+et+6]=l.z,I[st+et+7]=0),x===!0&&(l.fromBufferAttribute(Tt,W),I[st+et+8]=l.x,I[st+et+9]=l.y,I[st+et+10]=l.z,I[st+et+11]=Tt.itemSize===4?l.w:1)}}_={count:g,texture:B,size:new se(k,V)},r.set(d,_),d.addEventListener("dispose",T)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const D=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",D),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function HR(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const hS=new $n,jy=new Jx(1,1),dS=new kx,pS=new OT,mS=new Kx,Zy=[],Ky=[],Qy=new Float32Array(16),Jy=new Float32Array(9),$y=new Float32Array(4);function Co(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Zy[l];if(c===void 0&&(c=new Float32Array(l),Zy[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function zn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function lf(s,t){let i=Ky[t];i===void 0&&(i=new Int32Array(t),Ky[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function VR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function GR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;s.uniform2fv(this.addr,t),Pn(i,t)}}function kR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(zn(i,t))return;s.uniform3fv(this.addr,t),Pn(i,t)}}function XR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;s.uniform4fv(this.addr,t),Pn(i,t)}}function qR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(zn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pn(i,t)}else{if(zn(i,r))return;$y.set(r),s.uniformMatrix2fv(this.addr,!1,$y),Pn(i,r)}}function YR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(zn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pn(i,t)}else{if(zn(i,r))return;Jy.set(r),s.uniformMatrix3fv(this.addr,!1,Jy),Pn(i,r)}}function WR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(zn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pn(i,t)}else{if(zn(i,r))return;Qy.set(r),s.uniformMatrix4fv(this.addr,!1,Qy),Pn(i,r)}}function jR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function ZR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;s.uniform2iv(this.addr,t),Pn(i,t)}}function KR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;s.uniform3iv(this.addr,t),Pn(i,t)}}function QR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;s.uniform4iv(this.addr,t),Pn(i,t)}}function JR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function $R(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(zn(i,t))return;s.uniform2uiv(this.addr,t),Pn(i,t)}}function tw(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(zn(i,t))return;s.uniform3uiv(this.addr,t),Pn(i,t)}}function ew(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(zn(i,t))return;s.uniform4uiv(this.addr,t),Pn(i,t)}}function nw(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(jy.compareFunction=Vx,c=jy):c=hS,i.setTexture2D(t||c,l)}function iw(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||pS,l)}function aw(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||mS,l)}function rw(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||dS,l)}function sw(s){switch(s){case 5126:return VR;case 35664:return GR;case 35665:return kR;case 35666:return XR;case 35674:return qR;case 35675:return YR;case 35676:return WR;case 5124:case 35670:return jR;case 35667:case 35671:return ZR;case 35668:case 35672:return KR;case 35669:case 35673:return QR;case 5125:return JR;case 36294:return $R;case 36295:return tw;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return rw}}function ow(s,t){s.uniform1fv(this.addr,t)}function lw(s,t){const i=Co(t,this.size,2);s.uniform2fv(this.addr,i)}function cw(s,t){const i=Co(t,this.size,3);s.uniform3fv(this.addr,i)}function uw(s,t){const i=Co(t,this.size,4);s.uniform4fv(this.addr,i)}function fw(s,t){const i=Co(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function hw(s,t){const i=Co(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function dw(s,t){const i=Co(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function pw(s,t){s.uniform1iv(this.addr,t)}function mw(s,t){s.uniform2iv(this.addr,t)}function gw(s,t){s.uniform3iv(this.addr,t)}function vw(s,t){s.uniform4iv(this.addr,t)}function _w(s,t){s.uniform1uiv(this.addr,t)}function yw(s,t){s.uniform2uiv(this.addr,t)}function xw(s,t){s.uniform3uiv(this.addr,t)}function Sw(s,t){s.uniform4uiv(this.addr,t)}function Mw(s,t,i){const r=this.cache,l=t.length,c=lf(i,l);zn(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||hS,c[h])}function Ew(s,t,i){const r=this.cache,l=t.length,c=lf(i,l);zn(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||pS,c[h])}function Tw(s,t,i){const r=this.cache,l=t.length,c=lf(i,l);zn(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||mS,c[h])}function bw(s,t,i){const r=this.cache,l=t.length,c=lf(i,l);zn(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||dS,c[h])}function Aw(s){switch(s){case 5126:return ow;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return fw;case 35675:return hw;case 35676:return dw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return yw;case 36295:return xw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return bw}}class Rw{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=sw(i.type)}}class ww{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Aw(i.type)}}class Cw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const yp=/(\w+)(\])?(\[|\.)?/g;function tx(s,t){s.seq.push(t),s.map[t.id]=t}function Dw(s,t,i){const r=s.name,l=r.length;for(yp.lastIndex=0;;){const c=yp.exec(r),h=yp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){tx(i,p===void 0?new Rw(d,s,t):new ww(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new Cw(d),tx(i,g)),i=g}}}class Zu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Dw(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function ex(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const Uw=37297;let Nw=0;function Lw(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const nx=new we;function Ow(s){je._getMatrix(nx,je.workingColorSpace,s);const t=`mat3( ${nx.elements.map(i=>i.toFixed(4))} )`;switch(je.getTransfer(s)){case Ju:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ix(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Lw(s.getShaderSource(t),d)}else return c}function zw(s,t){const i=Ow(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Pw(s,t){let i;switch(t){case cT:i="Linear";break;case uT:i="Reinhard";break;case fT:i="Cineon";break;case hT:i="ACESFilmic";break;case pT:i="AgX";break;case Dx:i="Neutral";break;case dT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gu=new K;function Iw(){je.getLuminanceCoefficients(Gu);const s=Gu.x.toFixed(4),t=Gu.y.toFixed(4),i=Gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function Bw(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Hw(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Rl(s){return s!==""}function ax(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rx(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mm(s){return s.replace(Vw,kw)}const Gw=new Map;function kw(s,t){let i=Ce[t];if(i===void 0){const r=Gw.get(t);if(r!==void 0)i=Ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Mm(i)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sx(s){return s.replace(Xw,qw)}function qw(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ox(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yw(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wx?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===G1?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xa&&(t="SHADOWMAP_TYPE_VSM"),t}function Ww(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mo:case Eo:t="ENVMAP_TYPE_CUBE";break;case rf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jw(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Eo:t="ENVMAP_MODE_REFRACTION";break}return t}function Zw(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cx:t="ENVMAP_BLENDING_MULTIPLY";break;case oT:t="ENVMAP_BLENDING_MIX";break;case lT:t="ENVMAP_BLENDING_ADD";break}return t}function Kw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Qw(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Yw(i),p=Ww(i),v=jw(i),g=Zw(i),_=Kw(i),M=Fw(i),E=Bw(c),D=l.createProgram();let x,S,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Rl).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Rl).join(`
`),S.length>0&&(S+=`
`)):(x=[ox(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),S=[ox(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Nr?"#define TONE_MAPPING":"",i.toneMapping!==Nr?Ce.tonemapping_pars_fragment:"",i.toneMapping!==Nr?Pw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,zw("linearToOutputTexel",i.outputColorSpace),Iw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Rl).join(`
`)),h=Mm(h),h=ax(h,i),h=rx(h,i),d=Mm(d),d=ax(d,i),d=rx(d,i),h=sx(h),d=sx(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===py?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===py?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=F+x+h,U=F+S+d,k=ex(l,l.VERTEX_SHADER,z),V=ex(l,l.FRAGMENT_SHADER,U);l.attachShader(D,k),l.attachShader(D,V),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function I(P){if(s.debug.checkShaderErrors){const it=l.getProgramInfoLog(D)||"",ft=l.getShaderInfoLog(k)||"",Tt=l.getShaderInfoLog(V)||"",st=it.trim(),W=ft.trim(),et=Tt.trim();let Z=!0,Et=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,k,V);else{const wt=ix(l,k,"vertex"),Ot=ix(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+st+`
`+wt+`
`+Ot)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(W===""||et==="")&&(Et=!1);Et&&(P.diagnostics={runnable:Z,programLog:st,vertexShader:{log:W,prefix:x},fragmentShader:{log:et,prefix:S}})}l.deleteShader(k),l.deleteShader(V),B=new Zu(l,D),L=Hw(l,D)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(D,Uw)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Nw++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=k,this.fragmentShader=V,this}let Jw=0;class $w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new tC(t),i.set(t,r)),r}}class tC{constructor(t){this.id=Jw++,this.code=t,this.usedTimes=0}}function eC(s,t,i,r,l,c,h){const d=new Pm,m=new $w,p=new Set,v=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(L){return p.add(L),L===0?"uv":`uv${L}`}function x(L,T,P,it,ft){const Tt=it.fog,st=ft.geometry,W=L.isMeshStandardMaterial?it.environment:null,et=(L.isMeshStandardMaterial?i:t).get(L.envMap||W),Z=et&&et.mapping===rf?et.image.height:null,Et=E[L.type];L.precision!==null&&(M=l.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const wt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ot=wt!==void 0?wt.length:0;let te=0;st.morphAttributes.position!==void 0&&(te=1),st.morphAttributes.normal!==void 0&&(te=2),st.morphAttributes.color!==void 0&&(te=3);let ne,C,A,H;if(Et){const ye=ya[Et];ne=ye.vertexShader,C=ye.fragmentShader}else ne=L.vertexShader,C=L.fragmentShader,m.update(L),A=m.getVertexShaderID(L),H=m.getFragmentShaderID(L);const q=s.getRenderTarget(),lt=s.state.buffers.depth.getReversed(),At=ft.isInstancedMesh===!0,bt=ft.isBatchedMesh===!0,St=!!L.map,zt=!!L.matcap,O=!!et,yt=!!L.aoMap,mt=!!L.lightMap,J=!!L.bumpMap,Q=!!L.normalMap,ht=!!L.displacementMap,xt=!!L.emissiveMap,Nt=!!L.metalnessMap,Jt=!!L.roughnessMap,$t=L.anisotropy>0,N=L.clearcoat>0,b=L.dispersion>0,X=L.iridescence>0,pt=L.sheen>0,Rt=L.transmission>0,tt=$t&&!!L.anisotropyMap,jt=N&&!!L.clearcoatMap,Gt=N&&!!L.clearcoatNormalMap,Kt=N&&!!L.clearcoatRoughnessMap,Qt=X&&!!L.iridescenceMap,Bt=X&&!!L.iridescenceThicknessMap,Zt=pt&&!!L.sheenColorMap,Vt=pt&&!!L.sheenRoughnessMap,qt=!!L.specularMap,Ft=!!L.specularColorMap,pe=!!L.specularIntensityMap,Y=Rt&&!!L.transmissionMap,Ct=Rt&&!!L.thicknessMap,Xt=!!L.gradientMap,kt=!!L.alphaMap,Dt=L.alphaTest>0,Mt=!!L.alphaHash,ie=!!L.extensions;let me=Nr;L.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(me=s.toneMapping);const ee={shaderID:Et,shaderType:L.type,shaderName:L.name,vertexShader:ne,fragmentShader:C,defines:L.defines,customVertexShaderID:A,customFragmentShaderID:H,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:bt,batchingColor:bt&&ft._colorsTexture!==null,instancing:At,instancingColor:At&&ft.instanceColor!==null,instancingMorph:At&&ft.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:To,alphaToCoverage:!!L.alphaToCoverage,map:St,matcap:zt,envMap:O,envMapMode:O&&et.mapping,envMapCubeUVHeight:Z,aoMap:yt,lightMap:mt,bumpMap:J,normalMap:Q,displacementMap:_&&ht,emissiveMap:xt,normalMapObjectSpace:Q&&L.normalMapType===_T,normalMapTangentSpace:Q&&L.normalMapType===Hx,metalnessMap:Nt,roughnessMap:Jt,anisotropy:$t,anisotropyMap:tt,clearcoat:N,clearcoatMap:jt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:X,iridescenceMap:Qt,iridescenceThicknessMap:Bt,sheen:pt,sheenColorMap:Zt,sheenRoughnessMap:Vt,specularMap:qt,specularColorMap:Ft,specularIntensityMap:pe,transmission:Rt,transmissionMap:Y,thicknessMap:Ct,gradientMap:Xt,opaque:L.transparent===!1&&L.blending===yo&&L.alphaToCoverage===!1,alphaMap:kt,alphaTest:Dt,alphaHash:Mt,combine:L.combine,mapUv:St&&D(L.map.channel),aoMapUv:yt&&D(L.aoMap.channel),lightMapUv:mt&&D(L.lightMap.channel),bumpMapUv:J&&D(L.bumpMap.channel),normalMapUv:Q&&D(L.normalMap.channel),displacementMapUv:ht&&D(L.displacementMap.channel),emissiveMapUv:xt&&D(L.emissiveMap.channel),metalnessMapUv:Nt&&D(L.metalnessMap.channel),roughnessMapUv:Jt&&D(L.roughnessMap.channel),anisotropyMapUv:tt&&D(L.anisotropyMap.channel),clearcoatMapUv:jt&&D(L.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&D(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&D(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&D(L.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&D(L.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&D(L.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&D(L.sheenRoughnessMap.channel),specularMapUv:qt&&D(L.specularMap.channel),specularColorMapUv:Ft&&D(L.specularColorMap.channel),specularIntensityMapUv:pe&&D(L.specularIntensityMap.channel),transmissionMapUv:Y&&D(L.transmissionMap.channel),thicknessMapUv:Ct&&D(L.thicknessMap.channel),alphaMapUv:kt&&D(L.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Q||$t),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!st.attributes.uv&&(St||kt),fog:!!Tt,useFog:L.fog===!0,fogExp2:!!Tt&&Tt.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:lt,skinning:ft.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:St&&L.map.isVideoTexture===!0&&je.getTransfer(L.map.colorSpace)===an,decodeVideoTextureEmissive:xt&&L.emissiveMap.isVideoTexture===!0&&je.getTransfer(L.emissiveMap.colorSpace)===an,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ta,flipSided:L.side===_i,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ie&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&L.extensions.multiDraw===!0||bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return ee.vertexUv1s=p.has(1),ee.vertexUv2s=p.has(2),ee.vertexUv3s=p.has(3),p.clear(),ee}function S(L){const T=[];if(L.shaderID?T.push(L.shaderID):(T.push(L.customVertexShaderID),T.push(L.customFragmentShaderID)),L.defines!==void 0)for(const P in L.defines)T.push(P),T.push(L.defines[P]);return L.isRawShaderMaterial===!1&&(F(T,L),z(T,L),T.push(s.outputColorSpace)),T.push(L.customProgramCacheKey),T.join()}function F(L,T){L.push(T.precision),L.push(T.outputColorSpace),L.push(T.envMapMode),L.push(T.envMapCubeUVHeight),L.push(T.mapUv),L.push(T.alphaMapUv),L.push(T.lightMapUv),L.push(T.aoMapUv),L.push(T.bumpMapUv),L.push(T.normalMapUv),L.push(T.displacementMapUv),L.push(T.emissiveMapUv),L.push(T.metalnessMapUv),L.push(T.roughnessMapUv),L.push(T.anisotropyMapUv),L.push(T.clearcoatMapUv),L.push(T.clearcoatNormalMapUv),L.push(T.clearcoatRoughnessMapUv),L.push(T.iridescenceMapUv),L.push(T.iridescenceThicknessMapUv),L.push(T.sheenColorMapUv),L.push(T.sheenRoughnessMapUv),L.push(T.specularMapUv),L.push(T.specularColorMapUv),L.push(T.specularIntensityMapUv),L.push(T.transmissionMapUv),L.push(T.thicknessMapUv),L.push(T.combine),L.push(T.fogExp2),L.push(T.sizeAttenuation),L.push(T.morphTargetsCount),L.push(T.morphAttributeCount),L.push(T.numDirLights),L.push(T.numPointLights),L.push(T.numSpotLights),L.push(T.numSpotLightMaps),L.push(T.numHemiLights),L.push(T.numRectAreaLights),L.push(T.numDirLightShadows),L.push(T.numPointLightShadows),L.push(T.numSpotLightShadows),L.push(T.numSpotLightShadowsWithMaps),L.push(T.numLightProbes),L.push(T.shadowMapType),L.push(T.toneMapping),L.push(T.numClippingPlanes),L.push(T.numClipIntersection),L.push(T.depthPacking)}function z(L,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),T.gradientMap&&d.enable(22),L.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reversedDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),L.push(d.mask)}function U(L){const T=E[L.type];let P;if(T){const it=ya[T];P=WT.clone(it.uniforms)}else P=L.uniforms;return P}function k(L,T){let P;for(let it=0,ft=v.length;it<ft;it++){const Tt=v[it];if(Tt.cacheKey===T){P=Tt,++P.usedTimes;break}}return P===void 0&&(P=new Qw(s,T,L,c),v.push(P)),P}function V(L){if(--L.usedTimes===0){const T=v.indexOf(L);v[T]=v[v.length-1],v.pop(),L.destroy()}}function I(L){m.remove(L)}function B(){m.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:U,acquireProgram:k,releaseProgram:V,releaseShaderCache:I,programs:v,dispose:B}}function nC(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function iC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function lx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cx(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(g,_,M,E,D,x){let S=s[t];return S===void 0?(S={id:g.id,object:g,geometry:_,material:M,groupOrder:E,renderOrder:g.renderOrder,z:D,group:x},s[t]=S):(S.id=g.id,S.object=g,S.geometry=_,S.material=M,S.groupOrder=E,S.renderOrder=g.renderOrder,S.z=D,S.group=x),t++,S}function d(g,_,M,E,D,x){const S=h(g,_,M,E,D,x);M.transmission>0?r.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(g,_,M,E,D,x){const S=h(g,_,M,E,D,x);M.transmission>0?r.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,_){i.length>1&&i.sort(g||iC),r.length>1&&r.sort(_||lx),l.length>1&&l.sort(_||lx)}function v(){for(let g=t,_=s.length;g<_;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function aC(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new cx,s.set(r,[h])):l>=c.length?(h=new cx,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function rC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Fe};break;case"SpotLight":i={position:new K,direction:new K,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function sC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let oC=0;function lC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cC(s){const t=new rC,i=sC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new pn,h=new pn;function d(p){let v=0,g=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,E=0,D=0,x=0,S=0,F=0,z=0,U=0,k=0,V=0,I=0;p.sort(lC);for(let L=0,T=p.length;L<T;L++){const P=p[L],it=P.color,ft=P.intensity,Tt=P.distance,st=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)v+=it.r*ft,g+=it.g*ft,_+=it.b*ft;else if(P.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(P.sh.coefficients[W],ft);I++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,Z=i.get(P);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=st,r.directionalShadowMatrix[M]=P.shadow.matrix,F++}r.directional[M]=W,M++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(it).multiplyScalar(ft),W.distance=Tt,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,r.spot[D]=W;const et=P.shadow;if(P.map&&(r.spotLightMap[k]=P.map,k++,et.updateMatrices(P),P.castShadow&&V++),r.spotLightMatrix[D]=et.matrix,P.castShadow){const Z=i.get(P);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,r.spotShadow[D]=Z,r.spotShadowMap[D]=st,U++}D++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(it).multiplyScalar(ft),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=W,x++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const et=P.shadow,Z=i.get(P);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,Z.shadowCameraNear=et.camera.near,Z.shadowCameraFar=et.camera.far,r.pointShadow[E]=Z,r.pointShadowMap[E]=st,r.pointShadowMatrix[E]=P.shadow.matrix,z++}r.point[E]=W,E++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(ft),W.groundColor.copy(P.groundColor).multiplyScalar(ft),r.hemi[S]=W,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=_;const B=r.hash;(B.directionalLength!==M||B.pointLength!==E||B.spotLength!==D||B.rectAreaLength!==x||B.hemiLength!==S||B.numDirectionalShadows!==F||B.numPointShadows!==z||B.numSpotShadows!==U||B.numSpotMaps!==k||B.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=U+k-V,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=I,B.directionalLength=M,B.pointLength=E,B.spotLength=D,B.rectAreaLength=x,B.hemiLength=S,B.numDirectionalShadows=F,B.numPointShadows=z,B.numSpotShadows=U,B.numSpotMaps=k,B.numLightProbes=I,r.version=oC++)}function m(p,v){let g=0,_=0,M=0,E=0,D=0;const x=v.matrixWorldInverse;for(let S=0,F=p.length;S<F;S++){const z=p[S];if(z.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),g++}else if(z.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),M++}else if(z.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(x),h.identity(),c.copy(z.matrixWorld),c.premultiply(x),h.extractRotation(c),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(z.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(x),_++}else if(z.isHemisphereLight){const U=r.hemi[D];U.direction.setFromMatrixPosition(z.matrixWorld),U.direction.transformDirection(x),D++}}}return{setup:d,setupView:m,state:r}}function ux(s){const t=new cC(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function uC(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new ux(s),t.set(l,[d])):c>=h.length?(d=new ux(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const fC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dC(s,t,i){let r=new Fm;const l=new se,c=new se,h=new Mn,d=new Pb({depthPacking:vT}),m=new Ib,p={},v=i.maxTextureSize,g={[Lr]:_i,[_i]:Lr,[ta]:ta},_=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:fC,fragmentShader:hC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new aa;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new jn(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wx;let S=this.type;this.render=function(V,I,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||V.length===0)return;const L=s.getRenderTarget(),T=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),it=s.state;it.setBlending(Ur),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const ft=S!==Xa&&this.type===Xa,Tt=S===Xa&&this.type!==Xa;for(let st=0,W=V.length;st<W;st++){const et=V[st],Z=et.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Et=Z.getFrameExtents();if(l.multiply(Et),c.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Et.x),l.x=c.x*Et.x,Z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Et.y),l.y=c.y*Et.y,Z.mapSize.y=c.y)),Z.map===null||ft===!0||Tt===!0){const Ot=this.type!==Xa?{minFilter:Ci,magFilter:Ci}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ps(l.x,l.y,Ot),Z.map.texture.name=et.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const wt=Z.getViewportCount();for(let Ot=0;Ot<wt;Ot++){const te=Z.getViewport(Ot);h.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),it.viewport(h),Z.updateMatrices(et,Ot),r=Z.getFrustum(),U(I,B,Z.camera,et,this.type)}Z.isPointLightShadow!==!0&&this.type===Xa&&F(Z,B),Z.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(L,T,P)};function F(V,I){const B=t.update(D);_.defines.VSM_SAMPLES!==V.blurSamples&&(_.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new ps(l.x,l.y)),_.uniforms.shadow_pass.value=V.map.texture,_.uniforms.resolution.value=V.mapSize,_.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(I,null,B,_,D,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(I,null,B,M,D,null)}function z(V,I,B,L){let T=null;const P=B.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(P!==void 0)T=P;else if(T=B.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const it=T.uuid,ft=I.uuid;let Tt=p[it];Tt===void 0&&(Tt={},p[it]=Tt);let st=Tt[ft];st===void 0&&(st=T.clone(),Tt[ft]=st,I.addEventListener("dispose",k)),T=st}if(T.visible=I.visible,T.wireframe=I.wireframe,L===Xa?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:g[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const it=s.properties.get(T);it.light=B}return T}function U(V,I,B,L,T){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&T===Xa)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,V.matrixWorld);const ft=t.update(V),Tt=V.material;if(Array.isArray(Tt)){const st=ft.groups;for(let W=0,et=st.length;W<et;W++){const Z=st[W],Et=Tt[Z.materialIndex];if(Et&&Et.visible){const wt=z(V,Et,L,T);V.onBeforeShadow(s,V,I,B,ft,wt,Z),s.renderBufferDirect(B,null,ft,wt,V,Z),V.onAfterShadow(s,V,I,B,ft,wt,Z)}}}else if(Tt.visible){const st=z(V,Tt,L,T);V.onBeforeShadow(s,V,I,B,ft,st,null),s.renderBufferDirect(B,null,ft,st,V,null),V.onAfterShadow(s,V,I,B,ft,st,null)}}const it=V.children;for(let ft=0,Tt=it.length;ft<Tt;ft++)U(it[ft],I,B,L,T)}function k(V){V.target.removeEventListener("dispose",k);for(const B in p){const L=p[B],T=V.target.uuid;T in L&&(L[T].dispose(),delete L[T])}}}const pC={[Dp]:Up,[Np]:zp,[Lp]:Pp,[So]:Op,[Up]:Dp,[zp]:Np,[Pp]:Lp,[Op]:So};function mC(s,t){function i(){let Y=!1;const Ct=new Mn;let Xt=null;const kt=new Mn(0,0,0,0);return{setMask:function(Dt){Xt!==Dt&&!Y&&(s.colorMask(Dt,Dt,Dt,Dt),Xt=Dt)},setLocked:function(Dt){Y=Dt},setClear:function(Dt,Mt,ie,me,ee){ee===!0&&(Dt*=me,Mt*=me,ie*=me),Ct.set(Dt,Mt,ie,me),kt.equals(Ct)===!1&&(s.clearColor(Dt,Mt,ie,me),kt.copy(Ct))},reset:function(){Y=!1,Xt=null,kt.set(-1,0,0,0)}}}function r(){let Y=!1,Ct=!1,Xt=null,kt=null,Dt=null;return{setReversed:function(Mt){if(Ct!==Mt){const ie=t.get("EXT_clip_control");Mt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ct=Mt;const me=Dt;Dt=null,this.setClear(me)}},getReversed:function(){return Ct},setTest:function(Mt){Mt?q(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(Mt){Xt!==Mt&&!Y&&(s.depthMask(Mt),Xt=Mt)},setFunc:function(Mt){if(Ct&&(Mt=pC[Mt]),kt!==Mt){switch(Mt){case Dp:s.depthFunc(s.NEVER);break;case Up:s.depthFunc(s.ALWAYS);break;case Np:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Lp:s.depthFunc(s.EQUAL);break;case Op:s.depthFunc(s.GEQUAL);break;case zp:s.depthFunc(s.GREATER);break;case Pp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}kt=Mt}},setLocked:function(Mt){Y=Mt},setClear:function(Mt){Dt!==Mt&&(Ct&&(Mt=1-Mt),s.clearDepth(Mt),Dt=Mt)},reset:function(){Y=!1,Xt=null,kt=null,Dt=null,Ct=!1}}}function l(){let Y=!1,Ct=null,Xt=null,kt=null,Dt=null,Mt=null,ie=null,me=null,ee=null;return{setTest:function(ye){Y||(ye?q(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(ye){Ct!==ye&&!Y&&(s.stencilMask(ye),Ct=ye)},setFunc:function(ye,ke,sn){(Xt!==ye||kt!==ke||Dt!==sn)&&(s.stencilFunc(ye,ke,sn),Xt=ye,kt=ke,Dt=sn)},setOp:function(ye,ke,sn){(Mt!==ye||ie!==ke||me!==sn)&&(s.stencilOp(ye,ke,sn),Mt=ye,ie=ke,me=sn)},setLocked:function(ye){Y=ye},setClear:function(ye){ee!==ye&&(s.clearStencil(ye),ee=ye)},reset:function(){Y=!1,Ct=null,Xt=null,kt=null,Dt=null,Mt=null,ie=null,me=null,ee=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,M=[],E=null,D=!1,x=null,S=null,F=null,z=null,U=null,k=null,V=null,I=new Fe(0,0,0),B=0,L=!1,T=null,P=null,it=null,ft=null,Tt=null;const st=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,et=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=et>=1):Z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=et>=2);let Et=null,wt={};const Ot=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),ne=new Mn().fromArray(Ot),C=new Mn().fromArray(te);function A(Y,Ct,Xt,kt){const Dt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(Y,Mt),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<Xt;ie++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(Ct+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return Mt}const H={};H[s.TEXTURE_2D]=A(s.TEXTURE_2D,s.TEXTURE_2D,1),H[s.TEXTURE_CUBE_MAP]=A(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[s.TEXTURE_2D_ARRAY]=A(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),H[s.TEXTURE_3D]=A(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),q(s.DEPTH_TEST),h.setFunc(So),J(!1),Q(ly),q(s.CULL_FACE),yt(Ur);function q(Y){v[Y]!==!0&&(s.enable(Y),v[Y]=!0)}function lt(Y){v[Y]!==!1&&(s.disable(Y),v[Y]=!1)}function At(Y,Ct){return g[Y]!==Ct?(s.bindFramebuffer(Y,Ct),g[Y]=Ct,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ct),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function bt(Y,Ct){let Xt=M,kt=!1;if(Y){Xt=_.get(Ct),Xt===void 0&&(Xt=[],_.set(Ct,Xt));const Dt=Y.textures;if(Xt.length!==Dt.length||Xt[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,ie=Dt.length;Mt<ie;Mt++)Xt[Mt]=s.COLOR_ATTACHMENT0+Mt;Xt.length=Dt.length,kt=!0}}else Xt[0]!==s.BACK&&(Xt[0]=s.BACK,kt=!0);kt&&s.drawBuffers(Xt)}function St(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const zt={[us]:s.FUNC_ADD,[X1]:s.FUNC_SUBTRACT,[q1]:s.FUNC_REVERSE_SUBTRACT};zt[Y1]=s.MIN,zt[W1]=s.MAX;const O={[j1]:s.ZERO,[Z1]:s.ONE,[K1]:s.SRC_COLOR,[wp]:s.SRC_ALPHA,[nT]:s.SRC_ALPHA_SATURATE,[tT]:s.DST_COLOR,[J1]:s.DST_ALPHA,[Q1]:s.ONE_MINUS_SRC_COLOR,[Cp]:s.ONE_MINUS_SRC_ALPHA,[eT]:s.ONE_MINUS_DST_COLOR,[$1]:s.ONE_MINUS_DST_ALPHA,[iT]:s.CONSTANT_COLOR,[aT]:s.ONE_MINUS_CONSTANT_COLOR,[rT]:s.CONSTANT_ALPHA,[sT]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(Y,Ct,Xt,kt,Dt,Mt,ie,me,ee,ye){if(Y===Ur){D===!0&&(lt(s.BLEND),D=!1);return}if(D===!1&&(q(s.BLEND),D=!0),Y!==k1){if(Y!==x||ye!==L){if((S!==us||U!==us)&&(s.blendEquation(s.FUNC_ADD),S=us,U=us),ye)switch(Y){case yo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cy:s.blendFunc(s.ONE,s.ONE);break;case uy:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fy:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case yo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cy:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case uy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}F=null,z=null,k=null,V=null,I.set(0,0,0),B=0,x=Y,L=ye}return}Dt=Dt||Ct,Mt=Mt||Xt,ie=ie||kt,(Ct!==S||Dt!==U)&&(s.blendEquationSeparate(zt[Ct],zt[Dt]),S=Ct,U=Dt),(Xt!==F||kt!==z||Mt!==k||ie!==V)&&(s.blendFuncSeparate(O[Xt],O[kt],O[Mt],O[ie]),F=Xt,z=kt,k=Mt,V=ie),(me.equals(I)===!1||ee!==B)&&(s.blendColor(me.r,me.g,me.b,ee),I.copy(me),B=ee),x=Y,L=!1}function mt(Y,Ct){Y.side===ta?lt(s.CULL_FACE):q(s.CULL_FACE);let Xt=Y.side===_i;Ct&&(Xt=!Xt),J(Xt),Y.blending===yo&&Y.transparent===!1?yt(Ur):yt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const kt=Y.stencilWrite;d.setTest(kt),kt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),xt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(Y){T!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),T=Y)}function Q(Y){Y!==H1?(q(s.CULL_FACE),Y!==P&&(Y===ly?s.cullFace(s.BACK):Y===V1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),P=Y}function ht(Y){Y!==it&&(W&&s.lineWidth(Y),it=Y)}function xt(Y,Ct,Xt){Y?(q(s.POLYGON_OFFSET_FILL),(ft!==Ct||Tt!==Xt)&&(s.polygonOffset(Ct,Xt),ft=Ct,Tt=Xt)):lt(s.POLYGON_OFFSET_FILL)}function Nt(Y){Y?q(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function Jt(Y){Y===void 0&&(Y=s.TEXTURE0+st-1),Et!==Y&&(s.activeTexture(Y),Et=Y)}function $t(Y,Ct,Xt){Xt===void 0&&(Et===null?Xt=s.TEXTURE0+st-1:Xt=Et);let kt=wt[Xt];kt===void 0&&(kt={type:void 0,texture:void 0},wt[Xt]=kt),(kt.type!==Y||kt.texture!==Ct)&&(Et!==Xt&&(s.activeTexture(Xt),Et=Xt),s.bindTexture(Y,Ct||H[Y]),kt.type=Y,kt.texture=Ct)}function N(){const Y=wt[Et];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Zt(Y){ne.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),ne.copy(Y))}function Vt(Y){C.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),C.copy(Y))}function qt(Y,Ct){let Xt=p.get(Ct);Xt===void 0&&(Xt=new WeakMap,p.set(Ct,Xt));let kt=Xt.get(Y);kt===void 0&&(kt=s.getUniformBlockIndex(Ct,Y.name),Xt.set(Y,kt))}function Ft(Y,Ct){const kt=p.get(Ct).get(Y);m.get(Ct)!==kt&&(s.uniformBlockBinding(Ct,kt,Y.__bindingPointIndex),m.set(Ct,kt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},Et=null,wt={},g={},_=new WeakMap,M=[],E=null,D=!1,x=null,S=null,F=null,z=null,U=null,k=null,V=null,I=new Fe(0,0,0),B=0,L=!1,T=null,P=null,it=null,ft=null,Tt=null,ne.set(0,0,s.canvas.width,s.canvas.height),C.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:q,disable:lt,bindFramebuffer:At,drawBuffers:bt,useProgram:St,setBlending:yt,setMaterial:mt,setFlipSided:J,setCullFace:Q,setLineWidth:ht,setPolygonOffset:xt,setScissorTest:Nt,activeTexture:Jt,bindTexture:$t,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:X,texImage2D:Qt,texImage3D:Bt,updateUBOMapping:qt,uniformBlockBinding:Ft,texStorage2D:Gt,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:Rt,compressedTexSubImage2D:tt,compressedTexSubImage3D:jt,scissor:Zt,viewport:Vt,reset:pe}}function gC(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,v=new WeakMap;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return M?new OffscreenCanvas(N,b):tf("canvas")}function D(N,b,X){let pt=1;const Rt=$t(N);if((Rt.width>X||Rt.height>X)&&(pt=X/Math.max(Rt.width,Rt.height)),pt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const tt=Math.floor(pt*Rt.width),jt=Math.floor(pt*Rt.height);g===void 0&&(g=E(tt,jt));const Gt=b?E(tt,jt):g;return Gt.width=tt,Gt.height=jt,Gt.getContext("2d").drawImage(N,0,0,tt,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+tt+"x"+jt+")."),Gt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),N;return N}function x(N){return N.generateMipmaps}function S(N){s.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function z(N,b,X,pt,Rt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let tt=b;if(b===s.RED&&(X===s.FLOAT&&(tt=s.R32F),X===s.HALF_FLOAT&&(tt=s.R16F),X===s.UNSIGNED_BYTE&&(tt=s.R8)),b===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.R8UI),X===s.UNSIGNED_SHORT&&(tt=s.R16UI),X===s.UNSIGNED_INT&&(tt=s.R32UI),X===s.BYTE&&(tt=s.R8I),X===s.SHORT&&(tt=s.R16I),X===s.INT&&(tt=s.R32I)),b===s.RG&&(X===s.FLOAT&&(tt=s.RG32F),X===s.HALF_FLOAT&&(tt=s.RG16F),X===s.UNSIGNED_BYTE&&(tt=s.RG8)),b===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RG8UI),X===s.UNSIGNED_SHORT&&(tt=s.RG16UI),X===s.UNSIGNED_INT&&(tt=s.RG32UI),X===s.BYTE&&(tt=s.RG8I),X===s.SHORT&&(tt=s.RG16I),X===s.INT&&(tt=s.RG32I)),b===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),X===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),X===s.UNSIGNED_INT&&(tt=s.RGB32UI),X===s.BYTE&&(tt=s.RGB8I),X===s.SHORT&&(tt=s.RGB16I),X===s.INT&&(tt=s.RGB32I)),b===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),X===s.UNSIGNED_INT&&(tt=s.RGBA32UI),X===s.BYTE&&(tt=s.RGBA8I),X===s.SHORT&&(tt=s.RGBA16I),X===s.INT&&(tt=s.RGBA32I)),b===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),b===s.RGBA){const jt=Rt?Ju:je.getTransfer(pt);X===s.FLOAT&&(tt=s.RGBA32F),X===s.HALF_FLOAT&&(tt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(tt=jt===an?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function U(N,b){let X;return N?b===null||b===ds||b===Ll?X=s.DEPTH24_STENCIL8:b===qa?X=s.DEPTH32F_STENCIL8:b===Nl&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ds||b===Ll?X=s.DEPTH_COMPONENT24:b===qa?X=s.DEPTH_COMPONENT32F:b===Nl&&(X=s.DEPTH_COMPONENT16),X}function k(N,b){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ci&&N.minFilter!==na?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function V(N){const b=N.target;b.removeEventListener("dispose",V),B(b),b.isVideoTexture&&v.delete(b)}function I(N){const b=N.target;b.removeEventListener("dispose",I),T(b)}function B(N){const b=r.get(N);if(b.__webglInit===void 0)return;const X=N.source,pt=_.get(X);if(pt){const Rt=pt[b.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&L(N),Object.keys(pt).length===0&&_.delete(X)}r.remove(N)}function L(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const X=N.source,pt=_.get(X);delete pt[b.__cacheKey],h.memory.textures--}function T(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let Rt=0;Rt<b.__webglFramebuffer[pt].length;Rt++)s.deleteFramebuffer(b.__webglFramebuffer[pt][Rt]);else s.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[pt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=N.textures;for(let pt=0,Rt=X.length;pt<Rt;pt++){const tt=r.get(X[pt]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),h.memory.textures--),r.remove(X[pt])}r.remove(N)}let P=0;function it(){P=0}function ft(){const N=P;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),P+=1,N}function Tt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function st(N,b){const X=r.get(N);if(N.isVideoTexture&&Nt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){const pt=N.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,N,b);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function W(N,b){const X=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){H(X,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function et(N,b){const X=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){H(X,N,b);return}i.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function Z(N,b){const X=r.get(N);if(N.version>0&&X.__version!==N.version){q(X,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}const Et={[Or]:s.REPEAT,[Cr]:s.CLAMP_TO_EDGE,[Bp]:s.MIRRORED_REPEAT},wt={[Ci]:s.NEAREST,[mT]:s.NEAREST_MIPMAP_NEAREST,[_u]:s.NEAREST_MIPMAP_LINEAR,[na]:s.LINEAR,[Bd]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},Ot={[yT]:s.NEVER,[bT]:s.ALWAYS,[xT]:s.LESS,[Vx]:s.LEQUAL,[ST]:s.EQUAL,[TT]:s.GEQUAL,[MT]:s.GREATER,[ET]:s.NOTEQUAL};function te(N,b){if(b.type===qa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===na||b.magFilter===Bd||b.magFilter===_u||b.magFilter===Dr||b.minFilter===na||b.minFilter===Bd||b.minFilter===_u||b.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Et[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Et[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Et[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,wt[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ci||b.minFilter!==_u&&b.minFilter!==Dr||b.type===qa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ne(N,b){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",V));const pt=b.source;let Rt=_.get(pt);Rt===void 0&&(Rt={},_.set(pt,Rt));const tt=Tt(b);if(tt!==N.__cacheKey){Rt[tt]===void 0&&(Rt[tt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,X=!0),Rt[tt].usedTimes++;const jt=Rt[N.__cacheKey];jt!==void 0&&(Rt[N.__cacheKey].usedTimes--,jt.usedTimes===0&&L(b)),N.__cacheKey=tt,N.__webglTexture=Rt[tt].texture}return X}function C(N,b,X){return Math.floor(Math.floor(N/X)/b)}function A(N,b,X,pt){const tt=N.updateRanges;if(tt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,X,pt,b.data);else{tt.sort((Bt,Zt)=>Bt.start-Zt.start);let jt=0;for(let Bt=1;Bt<tt.length;Bt++){const Zt=tt[jt],Vt=tt[Bt],qt=Zt.start+Zt.count,Ft=C(Vt.start,b.width,4),pe=C(Zt.start,b.width,4);Vt.start<=qt+1&&Ft===pe&&C(Vt.start+Vt.count-1,b.width,4)===Ft?Zt.count=Math.max(Zt.count,Vt.start+Vt.count-Zt.start):(++jt,tt[jt]=Vt)}tt.length=jt+1;const Gt=s.getParameter(s.UNPACK_ROW_LENGTH),Kt=s.getParameter(s.UNPACK_SKIP_PIXELS),Qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Bt=0,Zt=tt.length;Bt<Zt;Bt++){const Vt=tt[Bt],qt=Math.floor(Vt.start/4),Ft=Math.ceil(Vt.count/4),pe=qt%b.width,Y=Math.floor(qt/b.width),Ct=Ft,Xt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(s.TEXTURE_2D,0,pe,Y,Ct,Xt,X,pt,b.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Gt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qt)}}function H(N,b,X){let pt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=s.TEXTURE_3D);const Rt=ne(N,b),tt=b.source;i.bindTexture(pt,N.__webglTexture,s.TEXTURE0+X);const jt=r.get(tt);if(tt.version!==jt.__version||Rt===!0){i.activeTexture(s.TEXTURE0+X);const Gt=je.getPrimaries(je.workingColorSpace),Kt=b.colorSpace===wr?null:je.getPrimaries(b.colorSpace),Qt=b.colorSpace===wr||Gt===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Bt=D(b.image,!1,l.maxTextureSize);Bt=Jt(b,Bt);const Zt=c.convert(b.format,b.colorSpace),Vt=c.convert(b.type);let qt=z(b.internalFormat,Zt,Vt,b.colorSpace,b.isVideoTexture);te(pt,b);let Ft;const pe=b.mipmaps,Y=b.isVideoTexture!==!0,Ct=jt.__version===void 0||Rt===!0,Xt=tt.dataReady,kt=k(b,Bt);if(b.isDepthTexture)qt=U(b.format===zl,b.type),Ct&&(Y?i.texStorage2D(s.TEXTURE_2D,1,qt,Bt.width,Bt.height):i.texImage2D(s.TEXTURE_2D,0,qt,Bt.width,Bt.height,0,Zt,Vt,null));else if(b.isDataTexture)if(pe.length>0){Y&&Ct&&i.texStorage2D(s.TEXTURE_2D,kt,qt,pe[0].width,pe[0].height);for(let Dt=0,Mt=pe.length;Dt<Mt;Dt++)Ft=pe[Dt],Y?Xt&&i.texSubImage2D(s.TEXTURE_2D,Dt,0,0,Ft.width,Ft.height,Zt,Vt,Ft.data):i.texImage2D(s.TEXTURE_2D,Dt,qt,Ft.width,Ft.height,0,Zt,Vt,Ft.data);b.generateMipmaps=!1}else Y?(Ct&&i.texStorage2D(s.TEXTURE_2D,kt,qt,Bt.width,Bt.height),Xt&&A(b,Bt,Zt,Vt)):i.texImage2D(s.TEXTURE_2D,0,qt,Bt.width,Bt.height,0,Zt,Vt,Bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,kt,qt,pe[0].width,pe[0].height,Bt.depth);for(let Dt=0,Mt=pe.length;Dt<Mt;Dt++)if(Ft=pe[Dt],b.format!==ia)if(Zt!==null)if(Y){if(Xt)if(b.layerUpdates.size>0){const ie=Vy(Ft.width,Ft.height,b.format,b.type);for(const me of b.layerUpdates){const ee=Ft.data.subarray(me*ie/Ft.data.BYTES_PER_ELEMENT,(me+1)*ie/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Dt,0,0,me,Ft.width,Ft.height,1,Zt,ee)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Dt,0,0,0,Ft.width,Ft.height,Bt.depth,Zt,Ft.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Dt,qt,Ft.width,Ft.height,Bt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Xt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Dt,0,0,0,Ft.width,Ft.height,Bt.depth,Zt,Vt,Ft.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Dt,qt,Ft.width,Ft.height,Bt.depth,0,Zt,Vt,Ft.data)}else{Y&&Ct&&i.texStorage2D(s.TEXTURE_2D,kt,qt,pe[0].width,pe[0].height);for(let Dt=0,Mt=pe.length;Dt<Mt;Dt++)Ft=pe[Dt],b.format!==ia?Zt!==null?Y?Xt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Dt,0,0,Ft.width,Ft.height,Zt,Ft.data):i.compressedTexImage2D(s.TEXTURE_2D,Dt,qt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Xt&&i.texSubImage2D(s.TEXTURE_2D,Dt,0,0,Ft.width,Ft.height,Zt,Vt,Ft.data):i.texImage2D(s.TEXTURE_2D,Dt,qt,Ft.width,Ft.height,0,Zt,Vt,Ft.data)}else if(b.isDataArrayTexture)if(Y){if(Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,kt,qt,Bt.width,Bt.height,Bt.depth),Xt)if(b.layerUpdates.size>0){const Dt=Vy(Bt.width,Bt.height,b.format,b.type);for(const Mt of b.layerUpdates){const ie=Bt.data.subarray(Mt*Dt/Bt.data.BYTES_PER_ELEMENT,(Mt+1)*Dt/Bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,Bt.width,Bt.height,1,Zt,Vt,ie)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Bt.width,Bt.height,Bt.depth,Zt,Vt,Bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,qt,Bt.width,Bt.height,Bt.depth,0,Zt,Vt,Bt.data);else if(b.isData3DTexture)Y?(Ct&&i.texStorage3D(s.TEXTURE_3D,kt,qt,Bt.width,Bt.height,Bt.depth),Xt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Bt.width,Bt.height,Bt.depth,Zt,Vt,Bt.data)):i.texImage3D(s.TEXTURE_3D,0,qt,Bt.width,Bt.height,Bt.depth,0,Zt,Vt,Bt.data);else if(b.isFramebufferTexture){if(Ct)if(Y)i.texStorage2D(s.TEXTURE_2D,kt,qt,Bt.width,Bt.height);else{let Dt=Bt.width,Mt=Bt.height;for(let ie=0;ie<kt;ie++)i.texImage2D(s.TEXTURE_2D,ie,qt,Dt,Mt,0,Zt,Vt,null),Dt>>=1,Mt>>=1}}else if(pe.length>0){if(Y&&Ct){const Dt=$t(pe[0]);i.texStorage2D(s.TEXTURE_2D,kt,qt,Dt.width,Dt.height)}for(let Dt=0,Mt=pe.length;Dt<Mt;Dt++)Ft=pe[Dt],Y?Xt&&i.texSubImage2D(s.TEXTURE_2D,Dt,0,0,Zt,Vt,Ft):i.texImage2D(s.TEXTURE_2D,Dt,qt,Zt,Vt,Ft);b.generateMipmaps=!1}else if(Y){if(Ct){const Dt=$t(Bt);i.texStorage2D(s.TEXTURE_2D,kt,qt,Dt.width,Dt.height)}Xt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Zt,Vt,Bt)}else i.texImage2D(s.TEXTURE_2D,0,qt,Zt,Vt,Bt);x(b)&&S(pt),jt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function q(N,b,X){if(b.image.length!==6)return;const pt=ne(N,b),Rt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+X);const tt=r.get(Rt);if(Rt.version!==tt.__version||pt===!0){i.activeTexture(s.TEXTURE0+X);const jt=je.getPrimaries(je.workingColorSpace),Gt=b.colorSpace===wr?null:je.getPrimaries(b.colorSpace),Kt=b.colorSpace===wr||jt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,Bt=b.image[0]&&b.image[0].isDataTexture,Zt=[];for(let Mt=0;Mt<6;Mt++)!Qt&&!Bt?Zt[Mt]=D(b.image[Mt],!0,l.maxCubemapSize):Zt[Mt]=Bt?b.image[Mt].image:b.image[Mt],Zt[Mt]=Jt(b,Zt[Mt]);const Vt=Zt[0],qt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type),pe=z(b.internalFormat,qt,Ft,b.colorSpace),Y=b.isVideoTexture!==!0,Ct=tt.__version===void 0||pt===!0,Xt=Rt.dataReady;let kt=k(b,Vt);te(s.TEXTURE_CUBE_MAP,b);let Dt;if(Qt){Y&&Ct&&i.texStorage2D(s.TEXTURE_CUBE_MAP,kt,pe,Vt.width,Vt.height);for(let Mt=0;Mt<6;Mt++){Dt=Zt[Mt].mipmaps;for(let ie=0;ie<Dt.length;ie++){const me=Dt[ie];b.format!==ia?qt!==null?Y?Xt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie,0,0,me.width,me.height,qt,me.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Xt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie,0,0,me.width,me.height,qt,Ft,me.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie,pe,me.width,me.height,0,qt,Ft,me.data)}}}else{if(Dt=b.mipmaps,Y&&Ct){Dt.length>0&&kt++;const Mt=$t(Zt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,kt,pe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Bt){Y?Xt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Zt[Mt].width,Zt[Mt].height,qt,Ft,Zt[Mt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,pe,Zt[Mt].width,Zt[Mt].height,0,qt,Ft,Zt[Mt].data);for(let ie=0;ie<Dt.length;ie++){const ee=Dt[ie].image[Mt].image;Y?Xt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie+1,0,0,ee.width,ee.height,qt,Ft,ee.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie+1,pe,ee.width,ee.height,0,qt,Ft,ee.data)}}else{Y?Xt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,qt,Ft,Zt[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,pe,qt,Ft,Zt[Mt]);for(let ie=0;ie<Dt.length;ie++){const me=Dt[ie];Y?Xt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie+1,0,0,qt,Ft,me.image[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ie+1,pe,qt,Ft,me.image[Mt])}}}x(b)&&S(s.TEXTURE_CUBE_MAP),tt.__version=Rt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function lt(N,b,X,pt,Rt,tt){const jt=c.convert(X.format,X.colorSpace),Gt=c.convert(X.type),Kt=z(X.internalFormat,jt,Gt,X.colorSpace),Qt=r.get(b),Bt=r.get(X);if(Bt.__renderTarget=b,!Qt.__hasExternalTextures){const Zt=Math.max(1,b.width>>tt),Vt=Math.max(1,b.height>>tt);Rt===s.TEXTURE_3D||Rt===s.TEXTURE_2D_ARRAY?i.texImage3D(Rt,tt,Kt,Zt,Vt,b.depth,0,jt,Gt,null):i.texImage2D(Rt,tt,Kt,Zt,Vt,0,jt,Gt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),xt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Rt,Bt.__webglTexture,0,ht(b)):(Rt===s.TEXTURE_2D||Rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Rt,Bt.__webglTexture,tt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(N,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const pt=b.depthTexture,Rt=pt&&pt.isDepthTexture?pt.type:null,tt=U(b.stencilBuffer,Rt),jt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Gt=ht(b);xt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,tt,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,tt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,tt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,jt,s.RENDERBUFFER,N)}else{const pt=b.textures;for(let Rt=0;Rt<pt.length;Rt++){const tt=pt[Rt],jt=c.convert(tt.format,tt.colorSpace),Gt=c.convert(tt.type),Kt=z(tt.internalFormat,jt,Gt,tt.colorSpace),Qt=ht(b);X&&xt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Kt,b.width,b.height):xt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt,Kt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st(b.depthTexture,0);const Rt=pt.__webglTexture,tt=ht(b);if(b.depthTexture.format===Ol)xt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Rt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Rt,0);else if(b.depthTexture.format===zl)xt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Rt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Rt,0);else throw new Error("Unknown depthTexture format")}function St(N){const b=r.get(N),X=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const pt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const Rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",Rt)};pt.addEventListener("dispose",Rt),b.__depthDisposeCallback=Rt}b.__boundDepthTexture=pt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const pt=N.texture.mipmaps;pt&&pt.length>0?bt(b.__webglFramebuffer[0],N):bt(b.__webglFramebuffer,N)}else if(X){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=s.createRenderbuffer(),At(b.__webglDepthbuffer[pt],N,!1);else{const Rt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,tt)}}else{const pt=N.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),At(b.__webglDepthbuffer,N,!1);else{const Rt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,tt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(N,b,X){const pt=r.get(N);b!==void 0&&lt(pt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&St(N)}function O(N){const b=N.texture,X=r.get(N),pt=r.get(b);N.addEventListener("dispose",I);const Rt=N.textures,tt=N.isWebGLCubeRenderTarget===!0,jt=Rt.length>1;if(jt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=b.version,h.memory.textures++),tt){X.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[Gt]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)X.__webglFramebuffer[Gt][Kt]=s.createFramebuffer()}else X.__webglFramebuffer[Gt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)X.__webglFramebuffer[Gt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(jt)for(let Gt=0,Kt=Rt.length;Gt<Kt;Gt++){const Qt=r.get(Rt[Gt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&xt(N)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Rt.length;Gt++){const Kt=Rt[Gt];X.__webglColorRenderbuffer[Gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Gt]);const Qt=c.convert(Kt.format,Kt.colorSpace),Bt=c.convert(Kt.type),Zt=z(Kt.internalFormat,Qt,Bt,Kt.colorSpace,N.isXRRenderTarget===!0),Vt=ht(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Zt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,X.__webglColorRenderbuffer[Gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),At(X.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),te(s.TEXTURE_CUBE_MAP,b);for(let Gt=0;Gt<6;Gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)lt(X.__webglFramebuffer[Gt][Kt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,Kt);else lt(X.__webglFramebuffer[Gt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);x(b)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Gt=0,Kt=Rt.length;Gt<Kt;Gt++){const Qt=Rt[Gt],Bt=r.get(Qt);let Zt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Zt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Zt,Bt.__webglTexture),te(Zt,Qt),lt(X.__webglFramebuffer,N,Qt,s.COLOR_ATTACHMENT0+Gt,Zt,0),x(Qt)&&S(Zt)}i.unbindTexture()}else{let Gt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Gt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Gt,pt.__webglTexture),te(Gt,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)lt(X.__webglFramebuffer[Kt],N,b,s.COLOR_ATTACHMENT0,Gt,Kt);else lt(X.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Gt,0);x(b)&&S(Gt),i.unbindTexture()}N.depthBuffer&&St(N)}function yt(N){const b=N.textures;for(let X=0,pt=b.length;X<pt;X++){const Rt=b[X];if(x(Rt)){const tt=F(N),jt=r.get(Rt).__webglTexture;i.bindTexture(tt,jt),S(tt),i.unbindTexture()}}}const mt=[],J=[];function Q(N){if(N.samples>0){if(xt(N)===!1){const b=N.textures,X=N.width,pt=N.height;let Rt=s.COLOR_BUFFER_BIT;const tt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,jt=r.get(N),Gt=b.length>1;if(Gt)for(let Qt=0;Qt<b.length;Qt++)i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Kt=N.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Qt=0;Qt<b.length;Qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Rt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Rt|=s.STENCIL_BUFFER_BIT)),Gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,jt.__webglColorRenderbuffer[Qt]);const Bt=r.get(b[Qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,X,pt,0,0,X,pt,Rt,s.NEAREST),m===!0&&(mt.length=0,J.length=0,mt.push(s.COLOR_ATTACHMENT0+Qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(mt.push(tt),J.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,J)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Gt)for(let Qt=0;Qt<b.length;Qt++){i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.RENDERBUFFER,jt.__webglColorRenderbuffer[Qt]);const Bt=r.get(b[Qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qt,s.TEXTURE_2D,Bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ht(N){return Math.min(l.maxSamples,N.samples)}function xt(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(N){const b=h.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function Jt(N,b){const X=N.colorSpace,pt=N.format,Rt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==To&&X!==wr&&(je.getTransfer(X)===an?(pt!==ia||Rt!==Sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function $t(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ft,this.resetTextureUnits=it,this.setTexture2D=st,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=xt}function vC(s,t){function i(r,l=wr){let c;const h=je.getTransfer(l);if(r===Sa)return s.UNSIGNED_BYTE;if(r===Cm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ox)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===zx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Nx)return s.BYTE;if(r===Lx)return s.SHORT;if(r===Nl)return s.UNSIGNED_SHORT;if(r===wm)return s.INT;if(r===ds)return s.UNSIGNED_INT;if(r===qa)return s.FLOAT;if(r===Hl)return s.HALF_FLOAT;if(r===Px)return s.ALPHA;if(r===Ix)return s.RGB;if(r===ia)return s.RGBA;if(r===Ol)return s.DEPTH_COMPONENT;if(r===zl)return s.DEPTH_STENCIL;if(r===Fx)return s.RED;if(r===Um)return s.RED_INTEGER;if(r===Bx)return s.RG;if(r===Nm)return s.RG_INTEGER;if(r===Lm)return s.RGBA_INTEGER;if(r===qu||r===Yu||r===Wu||r===ju)if(h===an)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===qu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===qu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ju)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hp||r===Vp||r===Gp||r===kp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Hp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xp||r===qp||r===Yp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xp||r===qp)return h===an?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Yp)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wp||r===jp||r===Zp||r===Kp||r===Qp||r===Jp||r===$p||r===tm||r===em||r===nm||r===im||r===am||r===rm||r===sm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Wp)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jp)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zp)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kp)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qp)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jp)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$p)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tm)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===em)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nm)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===im)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===am)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rm)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sm)return h===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===om||r===lm||r===cm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===om)return h===an?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===um||r===fm||r===hm||r===dm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===um)return c.COMPRESSED_RED_RGTC1_EXT;if(r===fm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ll?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const _C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new $x(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new zr({vertexShader:_C,fragmentShader:yC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jn(new Xl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SC extends Ro{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,_=null,M=null,E=null;const D=typeof XRWebGLBinding<"u",x=new xC,S={},F=i.getContextAttributes();let z=null,U=null;const k=[],V=[],I=new se;let B=null;const L=new ki;L.viewport=new Mn;const T=new ki;T.viewport=new Mn;const P=[L,T],it=new Vb;let ft=null,Tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let q=k[H];return q===void 0&&(q=new lp,k[H]=q),q.getTargetRaySpace()},this.getControllerGrip=function(H){let q=k[H];return q===void 0&&(q=new lp,k[H]=q),q.getGripSpace()},this.getHand=function(H){let q=k[H];return q===void 0&&(q=new lp,k[H]=q),q.getHandSpace()};function st(H){const q=V.indexOf(H.inputSource);if(q===-1)return;const lt=k[q];lt!==void 0&&(lt.update(H.inputSource,H.frame,p||h),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function W(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",et);for(let H=0;H<k.length;H++){const q=V[H];q!==null&&(V[H]=null,k[H].disconnect(q))}ft=null,Tt=null,x.reset();for(const H in S)delete S[H];t.setRenderTarget(z),M=null,_=null,g=null,l=null,U=null,A.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){c=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){d=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(H){p=H},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g===null&&D&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",W),l.addEventListener("inputsourceschange",et),F.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,At=null,bt=null;F.depth&&(bt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,lt=F.stencil?zl:Ol,At=F.stencil?Ll:ds);const St={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(St),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new ps(_.textureWidth,_.textureHeight,{format:ia,type:Sa,depthTexture:new Jx(_.textureWidth,_.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const lt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,lt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new ps(M.framebufferWidth,M.framebufferHeight,{format:ia,type:Sa,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),A.setContext(l),A.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(H){for(let q=0;q<H.removed.length;q++){const lt=H.removed[q],At=V.indexOf(lt);At>=0&&(V[At]=null,k[At].disconnect(lt))}for(let q=0;q<H.added.length;q++){const lt=H.added[q];let At=V.indexOf(lt);if(At===-1){for(let St=0;St<k.length;St++)if(St>=V.length){V.push(lt),At=St;break}else if(V[St]===null){V[St]=lt,At=St;break}if(At===-1)break}const bt=k[At];bt&&bt.connect(lt)}}const Z=new K,Et=new K;function wt(H,q,lt){Z.setFromMatrixPosition(q.matrixWorld),Et.setFromMatrixPosition(lt.matrixWorld);const At=Z.distanceTo(Et),bt=q.projectionMatrix.elements,St=lt.projectionMatrix.elements,zt=bt[14]/(bt[10]-1),O=bt[14]/(bt[10]+1),yt=(bt[9]+1)/bt[5],mt=(bt[9]-1)/bt[5],J=(bt[8]-1)/bt[0],Q=(St[8]+1)/St[0],ht=zt*J,xt=zt*Q,Nt=At/(-J+Q),Jt=Nt*-J;if(q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Jt),H.translateZ(Nt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),bt[10]===-1)H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const $t=zt+Nt,N=O+Nt,b=ht-Jt,X=xt+(At-Jt),pt=yt*O/N*$t,Rt=mt*O/N*$t;H.projectionMatrix.makePerspective(b,X,pt,Rt,$t,N),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Ot(H,q){q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;let q=H.near,lt=H.far;x.texture!==null&&(x.depthNear>0&&(q=x.depthNear),x.depthFar>0&&(lt=x.depthFar)),it.near=T.near=L.near=q,it.far=T.far=L.far=lt,(ft!==it.near||Tt!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),ft=it.near,Tt=it.far),it.layers.mask=H.layers.mask|6,L.layers.mask=it.layers.mask&3,T.layers.mask=it.layers.mask&5;const At=H.parent,bt=it.cameras;Ot(it,At);for(let St=0;St<bt.length;St++)Ot(bt[St],At);bt.length===2?wt(it,L,T):it.projectionMatrix.copy(L.projectionMatrix),te(H,it,At)};function te(H,q,lt){lt===null?H.matrix.copy(q.matrixWorld):(H.matrix.copy(lt.matrixWorld),H.matrix.invert(),H.matrix.multiply(q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=pm*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(H){m=H,_!==null&&(_.fixedFoveation=H),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(it)},this.getCameraTexture=function(H){return S[H]};let ne=null;function C(H,q){if(v=q.getViewerPose(p||h),E=q,v!==null){const lt=v.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let At=!1;lt.length!==it.cameras.length&&(it.cameras.length=0,At=!0);for(let O=0;O<lt.length;O++){const yt=lt[O];let mt=null;if(M!==null)mt=M.getViewport(yt);else{const Q=g.getViewSubImage(_,yt);mt=Q.viewport,O===0&&(t.setRenderTargetTextures(U,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(U))}let J=P[O];J===void 0&&(J=new ki,J.layers.enable(O),J.viewport=new Mn,P[O]=J),J.matrix.fromArray(yt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(yt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(mt.x,mt.y,mt.width,mt.height),O===0&&(it.matrix.copy(J.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),At===!0&&it.cameras.push(J)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){g=r.getBinding();const O=g.getDepthInformation(lt[0]);O&&O.isValid&&O.texture&&x.init(O,l.renderState)}if(bt&&bt.includes("camera-access")&&D){t.state.unbindTexture(),g=r.getBinding();for(let O=0;O<lt.length;O++){const yt=lt[O].camera;if(yt){let mt=S[yt];mt||(mt=new $x,S[yt]=mt);const J=g.getCameraImage(yt);mt.sourceTexture=J}}}}for(let lt=0;lt<k.length;lt++){const At=V[lt],bt=k[lt];At!==null&&bt!==void 0&&bt.update(At,q,p||h)}ne&&ne(H,q),q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:q}),E=null}const A=new fS;A.setAnimationLoop(C),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const os=new Ma,MC=new pn;function EC(s,t){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,jx(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,F,z,U){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(x,S):S.isMeshToonMaterial?(c(x,S),g(x,S)):S.isMeshPhongMaterial?(c(x,S),v(x,S)):S.isMeshStandardMaterial?(c(x,S),_(x,S),S.isMeshPhysicalMaterial&&M(x,S,U)):S.isMeshMatcapMaterial?(c(x,S),E(x,S)):S.isMeshDepthMaterial?c(x,S):S.isMeshDistanceMaterial?(c(x,S),D(x,S)):S.isMeshNormalMaterial?c(x,S):S.isLineBasicMaterial?(h(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?m(x,S,F,z):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===_i&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===_i&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const F=t.get(S),z=F.envMap,U=F.envMapRotation;z&&(x.envMap.value=z,os.copy(U),os.x*=-1,os.y*=-1,os.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),x.envMapRotation.value.setFromMatrix4(MC.makeRotationFromEuler(os)),x.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function m(x,S,F,z){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*F,x.scale.value=z*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function v(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function g(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function _(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,F){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===_i&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=F.texture,x.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function D(x,S){const F=t.get(S).light;x.referencePosition.value.setFromMatrixPosition(F.matrixWorld),x.nearDistance.value=F.shadow.camera.near,x.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function TC(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,z){const U=z.program;r.uniformBlockBinding(F,U)}function p(F,z){let U=l[F.id];U===void 0&&(E(F),U=v(F),l[F.id]=U,F.addEventListener("dispose",x));const k=z.program;r.updateUBOMapping(F,k);const V=t.render.frame;c[F.id]!==V&&(_(F),c[F.id]=V)}function v(F){const z=g();F.__bindingPointIndex=z;const U=s.createBuffer(),k=F.__size,V=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,k,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,z,U),U}function g(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(F){const z=l[F.id],U=F.uniforms,k=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,z);for(let V=0,I=U.length;V<I;V++){const B=Array.isArray(U[V])?U[V]:[U[V]];for(let L=0,T=B.length;L<T;L++){const P=B[L];if(M(P,V,L,k)===!0){const it=P.__offset,ft=Array.isArray(P.value)?P.value:[P.value];let Tt=0;for(let st=0;st<ft.length;st++){const W=ft[st],et=D(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,it+Tt,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,Tt),Tt+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,it,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(F,z,U,k){const V=F.value,I=z+"_"+U;if(k[I]===void 0)return typeof V=="number"||typeof V=="boolean"?k[I]=V:k[I]=V.clone(),!0;{const B=k[I];if(typeof V=="number"||typeof V=="boolean"){if(B!==V)return k[I]=V,!0}else if(B.equals(V)===!1)return B.copy(V),!0}return!1}function E(F){const z=F.uniforms;let U=0;const k=16;for(let I=0,B=z.length;I<B;I++){const L=Array.isArray(z[I])?z[I]:[z[I]];for(let T=0,P=L.length;T<P;T++){const it=L[T],ft=Array.isArray(it.value)?it.value:[it.value];for(let Tt=0,st=ft.length;Tt<st;Tt++){const W=ft[Tt],et=D(W),Z=U%k,Et=Z%et.boundary,wt=Z+Et;U+=Et,wt!==0&&k-wt<et.storage&&(U+=k-wt),it.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=U,U+=et.storage}}}const V=U%k;return V>0&&(U+=k-V),F.__size=U,F.__cache={},this}function D(F){const z={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(z.boundary=4,z.storage=4):F.isVector2?(z.boundary=8,z.storage=8):F.isVector3||F.isColor?(z.boundary=16,z.storage=12):F.isVector4?(z.boundary=16,z.storage=16):F.isMatrix3?(z.boundary=48,z.storage=48):F.isMatrix4?(z.boundary=64,z.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),z}function x(F){const z=F.target;z.removeEventListener("dispose",x);const U=h.indexOf(z.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function S(){for(const F in l)s.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}class bC{constructor(t={}){const{canvas:i=RT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),D=new Int32Array(4);let x=null,S=null;const F=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let k=!1;this._outputColorSpace=li;let V=0,I=0,B=null,L=-1,T=null;const P=new Mn,it=new Mn;let ft=null;const Tt=new Fe(0);let st=0,W=i.width,et=i.height,Z=1,Et=null,wt=null;const Ot=new Mn(0,0,W,et),te=new Mn(0,0,W,et);let ne=!1;const C=new Fm;let A=!1,H=!1;const q=new pn,lt=new K,At=new Mn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function zt(){return B===null?Z:1}let O=r;function yt(w,nt){return i.getContext(w,nt)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rm}`),i.addEventListener("webglcontextlost",Xt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),O===null){const nt="webgl2";if(O=yt(nt,w),O===null)throw yt(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,J,Q,ht,xt,Nt,Jt,$t,N,b,X,pt,Rt,tt,jt,Gt,Kt,Qt,Bt,Zt,Vt,qt,Ft,pe;function Y(){mt=new zR(O),mt.init(),qt=new vC(O,mt),J=new wR(O,mt,t,qt),Q=new mC(O,mt),J.reversedDepthBuffer&&_&&Q.buffers.depth.setReversed(!0),ht=new FR(O),xt=new nC,Nt=new gC(O,mt,Q,xt,J,qt,ht),Jt=new DR(U),$t=new OR(U),N=new Xb(O),Ft=new AR(O,N),b=new PR(O,N,ht,Ft),X=new HR(O,b,N,ht),Bt=new BR(O,J,Nt),Gt=new CR(xt),pt=new eC(U,Jt,$t,mt,J,Ft,Gt),Rt=new EC(U,xt),tt=new aC,jt=new uC(mt),Qt=new bR(U,Jt,$t,Q,X,M,m),Kt=new dC(U,X,J),pe=new TC(O,ht,J,Q),Zt=new RR(O,mt,ht),Vt=new IR(O,mt,ht),ht.programs=pt.programs,U.capabilities=J,U.extensions=mt,U.properties=xt,U.renderLists=tt,U.shadowMap=Kt,U.state=Q,U.info=ht}Y();const Ct=new SC(U,O);this.xr=Ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(W,et,!1))},this.getSize=function(w){return w.set(W,et)},this.setSize=function(w,nt,gt=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,et=nt,i.width=Math.floor(w*Z),i.height=Math.floor(nt*Z),gt===!0&&(i.style.width=w+"px",i.style.height=nt+"px"),this.setViewport(0,0,w,nt)},this.getDrawingBufferSize=function(w){return w.set(W*Z,et*Z).floor()},this.setDrawingBufferSize=function(w,nt,gt){W=w,et=nt,Z=gt,i.width=Math.floor(w*gt),i.height=Math.floor(nt*gt),this.setViewport(0,0,w,nt)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Ot)},this.setViewport=function(w,nt,gt,_t){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,nt,gt,_t),Q.viewport(P.copy(Ot).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,nt,gt,_t){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,nt,gt,_t),Q.scissor(it.copy(te).multiplyScalar(Z).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){Q.setScissorTest(ne=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){wt=w},this.getClearColor=function(w){return w.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(w=!0,nt=!0,gt=!0){let _t=0;if(w){let ot=!1;if(B!==null){const Wt=B.texture.format;ot=Wt===Lm||Wt===Nm||Wt===Um}if(ot){const Wt=B.texture.type,ct=Wt===Sa||Wt===ds||Wt===Nl||Wt===Ll||Wt===Cm||Wt===Dm,Ht=Qt.getClearColor(),It=Qt.getClearAlpha(),Yt=Ht.r,ce=Ht.g,ue=Ht.b;ct?(E[0]=Yt,E[1]=ce,E[2]=ue,E[3]=It,O.clearBufferuiv(O.COLOR,0,E)):(D[0]=Yt,D[1]=ce,D[2]=ue,D[3]=It,O.clearBufferiv(O.COLOR,0,D))}else _t|=O.COLOR_BUFFER_BIT}nt&&(_t|=O.DEPTH_BUFFER_BIT),gt&&(_t|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Qt.dispose(),tt.dispose(),jt.dispose(),xt.dispose(),Jt.dispose(),$t.dispose(),X.dispose(),Ft.dispose(),pe.dispose(),pt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",sn),Ct.removeEventListener("sessionend",En),bn.stop()};function Xt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const w=ht.autoReset,nt=Kt.enabled,gt=Kt.autoUpdate,_t=Kt.needsUpdate,ot=Kt.type;Y(),ht.autoReset=w,Kt.enabled=nt,Kt.autoUpdate=gt,Kt.needsUpdate=_t,Kt.type=ot}function Dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mt(w){const nt=w.target;nt.removeEventListener("dispose",Mt),ie(nt)}function ie(w){me(w),xt.remove(w)}function me(w){const nt=xt.get(w).programs;nt!==void 0&&(nt.forEach(function(gt){pt.releaseProgram(gt)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,nt,gt,_t,ot,Wt){nt===null&&(nt=bt);const ct=ot.isMesh&&ot.matrixWorld.determinant()<0,Ht=de(w,nt,gt,_t,ot);Q.setMaterial(_t,ct);let It=gt.index,Yt=1;if(_t.wireframe===!0){if(It=b.getWireframeAttribute(gt),It===void 0)return;Yt=2}const ce=gt.drawRange,ue=gt.attributes.position;let Se=ce.start*Yt,Oe=(ce.start+ce.count)*Yt;Wt!==null&&(Se=Math.max(Se,Wt.start*Yt),Oe=Math.min(Oe,(Wt.start+Wt.count)*Yt)),It!==null?(Se=Math.max(Se,0),Oe=Math.min(Oe,It.count)):ue!=null&&(Se=Math.max(Se,0),Oe=Math.min(Oe,ue.count));const Te=Oe-Se;if(Te<0||Te===1/0)return;Ft.setup(ot,_t,Ht,gt,It);let Be,ze=Zt;if(It!==null&&(Be=N.get(It),ze=Vt,ze.setIndex(Be)),ot.isMesh)_t.wireframe===!0?(Q.setLineWidth(_t.wireframeLinewidth*zt()),ze.setMode(O.LINES)):ze.setMode(O.TRIANGLES);else if(ot.isLine){let ve=_t.linewidth;ve===void 0&&(ve=1),Q.setLineWidth(ve*zt()),ot.isLineSegments?ze.setMode(O.LINES):ot.isLineLoop?ze.setMode(O.LINE_LOOP):ze.setMode(O.LINE_STRIP)}else ot.isPoints?ze.setMode(O.POINTS):ot.isSprite&&ze.setMode(O.TRIANGLES);if(ot.isBatchedMesh)if(ot._multiDrawInstances!==null)Pl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount,ot._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ze.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const ve=ot._multiDrawStarts,Ye=ot._multiDrawCounts,Me=ot._multiDrawCount,yn=It?N.get(It).bytesPerElement:1,on=xt.get(_t).currentProgram.getUniforms();for(let Re=0;Re<Me;Re++)on.setValue(O,"_gl_DrawID",Re),ze.render(ve[Re]/yn,Ye[Re])}else if(ot.isInstancedMesh)ze.renderInstances(Se,Te,ot.count);else if(gt.isInstancedBufferGeometry){const ve=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Ye=Math.min(gt.instanceCount,ve);ze.renderInstances(Se,Te,Ye)}else ze.render(Se,Te)};function ee(w,nt,gt){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=_i,w.needsUpdate=!0,Ln(w,nt,gt),w.side=Lr,w.needsUpdate=!0,Ln(w,nt,gt),w.side=ta):Ln(w,nt,gt)}this.compile=function(w,nt,gt=null){gt===null&&(gt=w),S=jt.get(gt),S.init(nt),z.push(S),gt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(nt.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),w!==gt&&w.traverseVisible(function(ot){ot.isLight&&ot.layers.test(nt.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),S.setupLights();const _t=new Set;return w.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Wt=ot.material;if(Wt)if(Array.isArray(Wt))for(let ct=0;ct<Wt.length;ct++){const Ht=Wt[ct];ee(Ht,gt,ot),_t.add(Ht)}else ee(Wt,gt,ot),_t.add(Wt)}),S=z.pop(),_t},this.compileAsync=function(w,nt,gt=null){const _t=this.compile(w,nt,gt);return new Promise(ot=>{function Wt(){if(_t.forEach(function(ct){xt.get(ct).currentProgram.isReady()&&_t.delete(ct)}),_t.size===0){ot(w);return}setTimeout(Wt,10)}mt.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let ye=null;function ke(w){ye&&ye(w)}function sn(){bn.stop()}function En(){bn.start()}const bn=new fS;bn.setAnimationLoop(ke),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(w){ye=w,Ct.setAnimationLoop(w),w===null?bn.stop():bn.start()},Ct.addEventListener("sessionstart",sn),Ct.addEventListener("sessionend",En),this.render=function(w,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(nt),nt=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,nt,B),S=jt.get(w,z.length),S.init(nt),z.push(S),q.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),C.setFromProjectionMatrix(q,xa,nt.reversedDepth),H=this.localClippingEnabled,A=Gt.init(this.clippingPlanes,H),x=tt.get(w,F.length),x.init(),F.push(x),Ct.enabled===!0&&Ct.isPresenting===!0){const Wt=U.xr.getDepthSensingMesh();Wt!==null&&ra(Wt,nt,-1/0,U.sortObjects)}ra(w,nt,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(Et,wt),St=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,St&&Qt.addToRenderList(x,w),this.info.render.frame++,A===!0&&Gt.beginShadows();const gt=S.state.shadowsArray;Kt.render(gt,w,nt),A===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const _t=x.opaque,ot=x.transmissive;if(S.setupLights(),nt.isArrayCamera){const Wt=nt.cameras;if(ot.length>0)for(let ct=0,Ht=Wt.length;ct<Ht;ct++){const It=Wt[ct];Ui(_t,ot,w,It)}St&&Qt.render(w);for(let ct=0,Ht=Wt.length;ct<Ht;ct++){const It=Wt[ct];sa(x,w,It,It.viewport)}}else ot.length>0&&Ui(_t,ot,w,nt),St&&Qt.render(w),sa(x,w,nt);B!==null&&I===0&&(Nt.updateMultisampleRenderTarget(B),Nt.updateRenderTargetMipmap(B)),w.isScene===!0&&w.onAfterRender(U,w,nt),Ft.resetDefaultState(),L=-1,T=null,z.pop(),z.length>0?(S=z[z.length-1],A===!0&&Gt.setGlobalState(U.clippingPlanes,S.state.camera)):S=null,F.pop(),F.length>0?x=F[F.length-1]:x=null};function ra(w,nt,gt,_t){if(w.visible===!1)return;if(w.layers.test(nt.layers)){if(w.isGroup)gt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(nt);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||C.intersectsSprite(w)){_t&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(q);const ct=X.update(w),Ht=w.material;Ht.visible&&x.push(w,ct,Ht,gt,At.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||C.intersectsObject(w))){const ct=X.update(w),Ht=w.material;if(_t&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),At.copy(ct.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(q)),Array.isArray(Ht)){const It=ct.groups;for(let Yt=0,ce=It.length;Yt<ce;Yt++){const ue=It[Yt],Se=Ht[ue.materialIndex];Se&&Se.visible&&x.push(w,ct,Se,gt,At.z,ue)}}else Ht.visible&&x.push(w,ct,Ht,gt,At.z,null)}}const Wt=w.children;for(let ct=0,Ht=Wt.length;ct<Ht;ct++)ra(Wt[ct],nt,gt,_t)}function sa(w,nt,gt,_t){const ot=w.opaque,Wt=w.transmissive,ct=w.transparent;S.setupLightsView(gt),A===!0&&Gt.setGlobalState(U.clippingPlanes,gt),_t&&Q.viewport(P.copy(_t)),ot.length>0&&ei(ot,nt,gt),Wt.length>0&&ei(Wt,nt,gt),ct.length>0&&ei(ct,nt,gt),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ui(w,nt,gt,_t){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[_t.id]===void 0&&(S.state.transmissionRenderTarget[_t.id]=new ps(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Hl:Sa,minFilter:Dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const Wt=S.state.transmissionRenderTarget[_t.id],ct=_t.viewport||P;Wt.setSize(ct.z*U.transmissionResolutionScale,ct.w*U.transmissionResolutionScale);const Ht=U.getRenderTarget(),It=U.getActiveCubeFace(),Yt=U.getActiveMipmapLevel();U.setRenderTarget(Wt),U.getClearColor(Tt),st=U.getClearAlpha(),st<1&&U.setClearColor(16777215,.5),U.clear(),St&&Qt.render(gt);const ce=U.toneMapping;U.toneMapping=Nr;const ue=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),S.setupLightsView(_t),A===!0&&Gt.setGlobalState(U.clippingPlanes,_t),ei(w,gt,_t),Nt.updateMultisampleRenderTarget(Wt),Nt.updateRenderTargetMipmap(Wt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Oe=0,Te=nt.length;Oe<Te;Oe++){const Be=nt[Oe],ze=Be.object,ve=Be.geometry,Ye=Be.material,Me=Be.group;if(Ye.side===ta&&ze.layers.test(_t.layers)){const yn=Ye.side;Ye.side=_i,Ye.needsUpdate=!0,Nn(ze,gt,_t,ve,Ye,Me),Ye.side=yn,Ye.needsUpdate=!0,Se=!0}}Se===!0&&(Nt.updateMultisampleRenderTarget(Wt),Nt.updateRenderTargetMipmap(Wt))}U.setRenderTarget(Ht,It,Yt),U.setClearColor(Tt,st),ue!==void 0&&(_t.viewport=ue),U.toneMapping=ce}function ei(w,nt,gt){const _t=nt.isScene===!0?nt.overrideMaterial:null;for(let ot=0,Wt=w.length;ot<Wt;ot++){const ct=w[ot],Ht=ct.object,It=ct.geometry,Yt=ct.group;let ce=ct.material;ce.allowOverride===!0&&_t!==null&&(ce=_t),Ht.layers.test(gt.layers)&&Nn(Ht,nt,gt,It,ce,Yt)}}function Nn(w,nt,gt,_t,ot,Wt){w.onBeforeRender(U,nt,gt,_t,ot,Wt),w.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ot.onBeforeRender(U,nt,gt,_t,w,Wt),ot.transparent===!0&&ot.side===ta&&ot.forceSinglePass===!1?(ot.side=_i,ot.needsUpdate=!0,U.renderBufferDirect(gt,nt,_t,ot,w,Wt),ot.side=Lr,ot.needsUpdate=!0,U.renderBufferDirect(gt,nt,_t,ot,w,Wt),ot.side=ta):U.renderBufferDirect(gt,nt,_t,ot,w,Wt),w.onAfterRender(U,nt,gt,_t,ot,Wt)}function Ln(w,nt,gt){nt.isScene!==!0&&(nt=bt);const _t=xt.get(w),ot=S.state.lights,Wt=S.state.shadowsArray,ct=ot.state.version,Ht=pt.getParameters(w,ot.state,Wt,nt,gt),It=pt.getProgramCacheKey(Ht);let Yt=_t.programs;_t.environment=w.isMeshStandardMaterial?nt.environment:null,_t.fog=nt.fog,_t.envMap=(w.isMeshStandardMaterial?$t:Jt).get(w.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&w.envMap===null?nt.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",Mt),Yt=new Map,_t.programs=Yt);let ce=Yt.get(It);if(ce!==void 0){if(_t.currentProgram===ce&&_t.lightsStateVersion===ct)return le(w,Ht),ce}else Ht.uniforms=pt.getUniforms(w),w.onBeforeCompile(Ht,U),ce=pt.acquireProgram(Ht,It),Yt.set(It,ce),_t.uniforms=Ht.uniforms;const ue=_t.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ue.clippingPlanes=Gt.uniform),le(w,Ht),_t.needsLights=Ze(w),_t.lightsStateVersion=ct,_t.needsLights&&(ue.ambientLightColor.value=ot.state.ambient,ue.lightProbe.value=ot.state.probe,ue.directionalLights.value=ot.state.directional,ue.directionalLightShadows.value=ot.state.directionalShadow,ue.spotLights.value=ot.state.spot,ue.spotLightShadows.value=ot.state.spotShadow,ue.rectAreaLights.value=ot.state.rectArea,ue.ltc_1.value=ot.state.rectAreaLTC1,ue.ltc_2.value=ot.state.rectAreaLTC2,ue.pointLights.value=ot.state.point,ue.pointLightShadows.value=ot.state.pointShadow,ue.hemisphereLights.value=ot.state.hemi,ue.directionalShadowMap.value=ot.state.directionalShadowMap,ue.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,ue.spotShadowMap.value=ot.state.spotShadowMap,ue.spotLightMatrix.value=ot.state.spotLightMatrix,ue.spotLightMap.value=ot.state.spotLightMap,ue.pointShadowMap.value=ot.state.pointShadowMap,ue.pointShadowMatrix.value=ot.state.pointShadowMatrix),_t.currentProgram=ce,_t.uniformsList=null,ce}function ae(w){if(w.uniformsList===null){const nt=w.currentProgram.getUniforms();w.uniformsList=Zu.seqWithValue(nt.seq,w.uniforms)}return w.uniformsList}function le(w,nt){const gt=xt.get(w);gt.outputColorSpace=nt.outputColorSpace,gt.batching=nt.batching,gt.batchingColor=nt.batchingColor,gt.instancing=nt.instancing,gt.instancingColor=nt.instancingColor,gt.instancingMorph=nt.instancingMorph,gt.skinning=nt.skinning,gt.morphTargets=nt.morphTargets,gt.morphNormals=nt.morphNormals,gt.morphColors=nt.morphColors,gt.morphTargetsCount=nt.morphTargetsCount,gt.numClippingPlanes=nt.numClippingPlanes,gt.numIntersection=nt.numClipIntersection,gt.vertexAlphas=nt.vertexAlphas,gt.vertexTangents=nt.vertexTangents,gt.toneMapping=nt.toneMapping}function de(w,nt,gt,_t,ot){nt.isScene!==!0&&(nt=bt),Nt.resetTextureUnits();const Wt=nt.fog,ct=_t.isMeshStandardMaterial?nt.environment:null,Ht=B===null?U.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:To,It=(_t.isMeshStandardMaterial?$t:Jt).get(_t.envMap||ct),Yt=_t.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,ce=!!gt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),ue=!!gt.morphAttributes.position,Se=!!gt.morphAttributes.normal,Oe=!!gt.morphAttributes.color;let Te=Nr;_t.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Te=U.toneMapping);const Be=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,ze=Be!==void 0?Be.length:0,ve=xt.get(_t),Ye=S.state.lights;if(A===!0&&(H===!0||w!==T)){const hn=w===T&&_t.id===L;Gt.setState(_t,w,hn)}let Me=!1;_t.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ye.state.version||ve.outputColorSpace!==Ht||ot.isBatchedMesh&&ve.batching===!1||!ot.isBatchedMesh&&ve.batching===!0||ot.isBatchedMesh&&ve.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&ve.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&ve.instancing===!1||!ot.isInstancedMesh&&ve.instancing===!0||ot.isSkinnedMesh&&ve.skinning===!1||!ot.isSkinnedMesh&&ve.skinning===!0||ot.isInstancedMesh&&ve.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&ve.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&ve.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&ve.instancingMorph===!1&&ot.morphTexture!==null||ve.envMap!==It||_t.fog===!0&&ve.fog!==Wt||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Gt.numPlanes||ve.numIntersection!==Gt.numIntersection)||ve.vertexAlphas!==Yt||ve.vertexTangents!==ce||ve.morphTargets!==ue||ve.morphNormals!==Se||ve.morphColors!==Oe||ve.toneMapping!==Te||ve.morphTargetsCount!==ze)&&(Me=!0):(Me=!0,ve.__version=_t.version);let yn=ve.currentProgram;Me===!0&&(yn=Ln(_t,nt,ot));let on=!1,Re=!1,We=!1;const Xe=yn.getUniforms(),In=ve.uniforms;if(Q.useProgram(yn.program)&&(on=!0,Re=!0,We=!0),_t.id!==L&&(L=_t.id,Re=!0),on||T!==w){Q.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Xe.setValue(O,"projectionMatrix",w.projectionMatrix),Xe.setValue(O,"viewMatrix",w.matrixWorldInverse);const mn=Xe.map.cameraPosition;mn!==void 0&&mn.setValue(O,lt.setFromMatrixPosition(w.matrixWorld)),J.logarithmicDepthBuffer&&Xe.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&Xe.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Re=!0,We=!0)}if(ot.isSkinnedMesh){Xe.setOptional(O,ot,"bindMatrix"),Xe.setOptional(O,ot,"bindMatrixInverse");const hn=ot.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Xe.setValue(O,"boneTexture",hn.boneTexture,Nt))}ot.isBatchedMesh&&(Xe.setOptional(O,ot,"batchingTexture"),Xe.setValue(O,"batchingTexture",ot._matricesTexture,Nt),Xe.setOptional(O,ot,"batchingIdTexture"),Xe.setValue(O,"batchingIdTexture",ot._indirectTexture,Nt),Xe.setOptional(O,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Xe.setValue(O,"batchingColorTexture",ot._colorsTexture,Nt));const fn=gt.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Bt.update(ot,gt,yn),(Re||ve.receiveShadow!==ot.receiveShadow)&&(ve.receiveShadow=ot.receiveShadow,Xe.setValue(O,"receiveShadow",ot.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(In.envMap.value=It,In.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&nt.environment!==null&&(In.envMapIntensity.value=nt.environmentIntensity),Re&&(Xe.setValue(O,"toneMappingExposure",U.toneMappingExposure),ve.needsLights&&Le(In,We),Wt&&_t.fog===!0&&Rt.refreshFogUniforms(In,Wt),Rt.refreshMaterialUniforms(In,_t,Z,et,S.state.transmissionRenderTarget[w.id]),Zu.upload(O,ae(ve),In,Nt)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(Zu.upload(O,ae(ve),In,Nt),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&Xe.setValue(O,"center",ot.center),Xe.setValue(O,"modelViewMatrix",ot.modelViewMatrix),Xe.setValue(O,"normalMatrix",ot.normalMatrix),Xe.setValue(O,"modelMatrix",ot.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){const hn=_t.uniformsGroups;for(let mn=0,oa=hn.length;mn<oa;mn++){const ui=hn[mn];pe.update(ui,yn),pe.bind(ui,yn)}}return yn}function Le(w,nt){w.ambientLightColor.needsUpdate=nt,w.lightProbe.needsUpdate=nt,w.directionalLights.needsUpdate=nt,w.directionalLightShadows.needsUpdate=nt,w.pointLights.needsUpdate=nt,w.pointLightShadows.needsUpdate=nt,w.spotLights.needsUpdate=nt,w.spotLightShadows.needsUpdate=nt,w.rectAreaLights.needsUpdate=nt,w.hemisphereLights.needsUpdate=nt}function Ze(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,nt,gt){const _t=xt.get(w);_t.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),xt.get(w.texture).__webglTexture=nt,xt.get(w.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:gt,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,nt){const gt=xt.get(w);gt.__webglFramebuffer=nt,gt.__useDefaultFramebuffer=nt===void 0};const _n=O.createFramebuffer();this.setRenderTarget=function(w,nt=0,gt=0){B=w,V=nt,I=gt;let _t=!0,ot=null,Wt=!1,ct=!1;if(w){const It=xt.get(w);if(It.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(O.FRAMEBUFFER,null),_t=!1;else if(It.__webglFramebuffer===void 0)Nt.setupRenderTarget(w);else if(It.__hasExternalTextures)Nt.rebindTextures(w,xt.get(w.texture).__webglTexture,xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ue=w.depthTexture;if(It.__boundDepthTexture!==ue){if(ue!==null&&xt.has(ue)&&(w.width!==ue.image.width||w.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(w)}}const Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(ct=!0);const ce=xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ce[nt])?ot=ce[nt][gt]:ot=ce[nt],Wt=!0):w.samples>0&&Nt.useMultisampledRTT(w)===!1?ot=xt.get(w).__webglMultisampledFramebuffer:Array.isArray(ce)?ot=ce[gt]:ot=ce,P.copy(w.viewport),it.copy(w.scissor),ft=w.scissorTest}else P.copy(Ot).multiplyScalar(Z).floor(),it.copy(te).multiplyScalar(Z).floor(),ft=ne;if(gt!==0&&(ot=_n),Q.bindFramebuffer(O.FRAMEBUFFER,ot)&&_t&&Q.drawBuffers(w,ot),Q.viewport(P),Q.scissor(it),Q.setScissorTest(ft),Wt){const It=xt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It.__webglTexture,gt)}else if(ct){const It=nt;for(let Yt=0;Yt<w.textures.length;Yt++){const ce=xt.get(w.textures[Yt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Yt,ce.__webglTexture,gt,It)}}else if(w!==null&&gt!==0){const It=xt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,It.__webglTexture,gt)}L=-1},this.readRenderTargetPixels=function(w,nt,gt,_t,ot,Wt,ct,Ht=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(It=It[ct]),It){Q.bindFramebuffer(O.FRAMEBUFFER,It);try{const Yt=w.textures[Ht],ce=Yt.format,ue=Yt.type;if(!J.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=w.width-_t&&gt>=0&&gt<=w.height-ot&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ht),O.readPixels(nt,gt,_t,ot,qt.convert(ce),qt.convert(ue),Wt))}finally{const Yt=B!==null?xt.get(B).__webglFramebuffer:null;Q.bindFramebuffer(O.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(w,nt,gt,_t,ot,Wt,ct,Ht=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(It=It[ct]),It)if(nt>=0&&nt<=w.width-_t&&gt>=0&&gt<=w.height-ot){Q.bindFramebuffer(O.FRAMEBUFFER,It);const Yt=w.textures[Ht],ce=Yt.format,ue=Yt.type;if(!J.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.bufferData(O.PIXEL_PACK_BUFFER,Wt.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ht),O.readPixels(nt,gt,_t,ot,qt.convert(ce),qt.convert(ue),0);const Oe=B!==null?xt.get(B).__webglFramebuffer:null;Q.bindFramebuffer(O.FRAMEBUFFER,Oe);const Te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wT(O,Te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Wt),O.deleteBuffer(Se),O.deleteSync(Te),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,nt=null,gt=0){const _t=Math.pow(2,-gt),ot=Math.floor(w.image.width*_t),Wt=Math.floor(w.image.height*_t),ct=nt!==null?nt.x:0,Ht=nt!==null?nt.y:0;Nt.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,gt,0,0,ct,Ht,ot,Wt),Q.unbindTexture()};const un=O.createFramebuffer(),Ue=O.createFramebuffer();this.copyTextureToTexture=function(w,nt,gt=null,_t=null,ot=0,Wt=null){Wt===null&&(ot!==0?(Pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Wt=ot,ot=0):Wt=0);let ct,Ht,It,Yt,ce,ue,Se,Oe,Te;const Be=w.isCompressedTexture?w.mipmaps[Wt]:w.image;if(gt!==null)ct=gt.max.x-gt.min.x,Ht=gt.max.y-gt.min.y,It=gt.isBox3?gt.max.z-gt.min.z:1,Yt=gt.min.x,ce=gt.min.y,ue=gt.isBox3?gt.min.z:0;else{const fn=Math.pow(2,-ot);ct=Math.floor(Be.width*fn),Ht=Math.floor(Be.height*fn),w.isDataArrayTexture?It=Be.depth:w.isData3DTexture?It=Math.floor(Be.depth*fn):It=1,Yt=0,ce=0,ue=0}_t!==null?(Se=_t.x,Oe=_t.y,Te=_t.z):(Se=0,Oe=0,Te=0);const ze=qt.convert(nt.format),ve=qt.convert(nt.type);let Ye;nt.isData3DTexture?(Nt.setTexture3D(nt,0),Ye=O.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(Nt.setTexture2DArray(nt,0),Ye=O.TEXTURE_2D_ARRAY):(Nt.setTexture2D(nt,0),Ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,nt.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,nt.unpackAlignment);const Me=O.getParameter(O.UNPACK_ROW_LENGTH),yn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),on=O.getParameter(O.UNPACK_SKIP_PIXELS),Re=O.getParameter(O.UNPACK_SKIP_ROWS),We=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Be.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Be.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Yt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ce),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ue);const Xe=w.isDataArrayTexture||w.isData3DTexture,In=nt.isDataArrayTexture||nt.isData3DTexture;if(w.isDepthTexture){const fn=xt.get(w),hn=xt.get(nt),mn=xt.get(fn.__renderTarget),oa=xt.get(hn.__renderTarget);Q.bindFramebuffer(O.READ_FRAMEBUFFER,mn.__webglFramebuffer),Q.bindFramebuffer(O.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let ui=0;ui<It;ui++)Xe&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.get(w).__webglTexture,ot,ue+ui),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.get(nt).__webglTexture,Wt,Te+ui)),O.blitFramebuffer(Yt,ce,ct,Ht,Se,Oe,ct,Ht,O.DEPTH_BUFFER_BIT,O.NEAREST);Q.bindFramebuffer(O.READ_FRAMEBUFFER,null),Q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(ot!==0||w.isRenderTargetTexture||xt.has(w)){const fn=xt.get(w),hn=xt.get(nt);Q.bindFramebuffer(O.READ_FRAMEBUFFER,un),Q.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ue);for(let mn=0;mn<It;mn++)Xe?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fn.__webglTexture,ot,ue+mn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fn.__webglTexture,ot),In?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hn.__webglTexture,Wt,Te+mn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hn.__webglTexture,Wt),ot!==0?O.blitFramebuffer(Yt,ce,ct,Ht,Se,Oe,ct,Ht,O.COLOR_BUFFER_BIT,O.NEAREST):In?O.copyTexSubImage3D(Ye,Wt,Se,Oe,Te+mn,Yt,ce,ct,Ht):O.copyTexSubImage2D(Ye,Wt,Se,Oe,Yt,ce,ct,Ht);Q.bindFramebuffer(O.READ_FRAMEBUFFER,null),Q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else In?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ye,Wt,Se,Oe,Te,ct,Ht,It,ze,ve,Be.data):nt.isCompressedArrayTexture?O.compressedTexSubImage3D(Ye,Wt,Se,Oe,Te,ct,Ht,It,ze,Be.data):O.texSubImage3D(Ye,Wt,Se,Oe,Te,ct,Ht,It,ze,ve,Be):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Wt,Se,Oe,ct,Ht,ze,ve,Be.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Wt,Se,Oe,Be.width,Be.height,ze,Be.data):O.texSubImage2D(O.TEXTURE_2D,Wt,Se,Oe,ct,Ht,ze,ve,Be);O.pixelStorei(O.UNPACK_ROW_LENGTH,Me),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,on),O.pixelStorei(O.UNPACK_SKIP_ROWS,Re),O.pixelStorei(O.UNPACK_SKIP_IMAGES,We),Wt===0&&nt.generateMipmaps&&O.generateMipmap(Ye),Q.unbindTexture()},this.initRenderTarget=function(w){xt.get(w).__webglFramebuffer===void 0&&Nt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Nt.setTextureCube(w,0):w.isData3DTexture?Nt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Nt.setTexture2DArray(w,0):Nt.setTexture2D(w,0),Q.unbindTexture()},this.resetState=function(){V=0,I=0,B=null,Q.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=je._getDrawingBufferColorSpace(t),i.unpackColorSpace=je._getUnpackColorSpace()}}const fx={portrait:[1.6,2.25],landscape:[2.25,1.6]},AC={left:.27,center:.5,right:.73},nf=.018,vi=.007,Un=4,hx=1/.05,RC=1/960,wC=2,ka=72,dx=24,xp=.36,gS=.095,CC=.0135,ku=.036,Ul=.15,px=1024,mx={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Ku=[0,.07,.93,1],DC=[-.95,-.28,.28,.95],UC=9,NC=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,LC=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,OC=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,zC=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,gx={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Rr=(s,t,i)=>Math.min(i,Math.max(t,s)),wl=(s,t,i)=>s+(t-s)*i,Sp=(s,t)=>{try{const i=document.createElement("canvas").getContext("2d");if(!i)return t;i.fillStyle="#000000",i.fillStyle=s;const r=i.fillStyle;if(r.startsWith("#")){const c=parseInt(r.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]}const l=r.match(/[\d.]+/g);return!l||l.length<3?t:[Number(l[0])/255,Number(l[1])/255,Number(l[2])/255]}catch{return t}},PC=s=>.2126*s[0]+.7152*s[1]+.0722*s[2],Qu=(s,t=1)=>`rgba(${Math.round(s[0]*255)}, ${Math.round(s[1]*255)}, ${Math.round(s[2]*255)}, ${t})`,vS=s=>{let t=s>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}},Em=(s,t,i,r,l,c)=>{const h=Math.max(0,Math.min(c,r/2,l/2)),d=h*.4477;s.moveTo(t+h,i),s.lineTo(t+r-h,i),s.bezierCurveTo(t+r-d,i,t+r,i+d,t+r,i+h),s.lineTo(t+r,i+l-h),s.bezierCurveTo(t+r,i+l-d,t+r-d,i+l,t+r-h,i+l),s.lineTo(t+h,i+l),s.bezierCurveTo(t+d,i+l,t,i+l-d,t,i+l-h),s.lineTo(t,i+h),s.bezierCurveTo(t,i+d,t+d,i,t+h,i)},Mp=(s,t)=>{if(!t)return Promise.resolve(null);const i=s.get(t);if(i)return i;const r=new Promise(l=>{const c=new Image;c.crossOrigin="anonymous",c.decoding="async",c.onload=()=>l(c),c.onerror=()=>l(null),c.src=t});return s.set(t,r),r},vx=(s,t)=>{const[i,r]=fx[s]||fx.portrait,l=wl(.03,Math.min(i,r)*.2,Rr(t,0,1)),c={width:.34,height:.07,y:r/2-.13},h=r/2-.055;return{width:i,height:r,radius:l,slot:c,ringY:h,hangY:h+gS}},IC=s=>{const{width:t,height:i,radius:r,slot:l}=s,c=new sf;Em(c,-t/2+vi,-i/2+vi,t-vi*2,i-vi*2,Math.max(r-vi,.005));const h=new vm;Em(h,-l.width/2-vi,l.y-l.height/2-vi,l.width+vi*2,l.height+vi*2,l.height/2+vi),c.holes.push(h);const d=new of(c,{depth:nf,bevelEnabled:!0,bevelThickness:vi,bevelSize:vi,bevelSegments:5,curveSegments:24});d.translate(0,0,-nf/2);const m=new Vm(c,24),p=m.getAttribute("position"),v=m.getAttribute("uv");for(let g=0;g<p.count;g++)v.setXY(g,(p.getX(g)+t/2)/t,(p.getY(g)+i/2)/i);return v.needsUpdate=!0,{body:d,face:m}},_x=s=>{const t=new sf,i=s*1.16;Em(t,-i/2+.014,-Ul/2+.014,i-.028,Ul-.028,.024);const r=new of(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return r.translate(0,0,-.01),r},FC=s=>{const t=Ku.length,i=new aa;i.setAttribute("position",new Di(new Float32Array(s*t*3),3)),i.setAttribute("normal",new Di(new Float32Array(s*t*3),3)),i.setAttribute("uv",new Di(new Float32Array(s*t*2),2));const r=[];for(let l=0;l<s-1;l++)for(let c=0;c<t-1;c++){const h=l*t+c;r.push(h,h+t,h+1,h+1,h+t,h+t+1)}return i.setIndex(r),i},BC=s=>{const t=new Qx;t.background=new Fe(.035,.035,.04);const i=new Xl(1,1),r=[],l=(d,m,p,v=0)=>{const g=new Im({color:new Fe(d,d,d),side:ta});r.push(g);const _=new jn(i,g);_.position.set(...m),_.scale.set(p[0],p[1],1),_.lookAt(0,0,0),_.rotateZ(v),t.add(_)};l(2.6,[0,4.5,8],[9,4]),l(6,[-5.5,.5,7],[.9,14]),l(4,[5,-.5,8],[.6,14]),l(3.5,[0,-1,9],[24,.35],Math.PI/3),l(2.5,[1,2.5,9],[24,.2],Math.PI/3),l(1.4,[0,6,-6],[12,4]),l(.5,[0,-7,1],[16,6]),l(.9,[8,0,-2],[4,10]);const c=new Sm(s),h=c.fromScene(t,.035);return c.dispose(),i.dispose(),r.forEach(d=>d.dispose()),h},Ep=(s,t)=>{const i=new mm(s);return i.colorSpace=li,i.anisotropy=t,i},HC=()=>{const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)return new mm(t);const r=vS(7),l=Float32Array.from({length:16384},()=>r()),c=(m,p)=>{let v=0;for(let g=-1;g<=1;g++)for(let _=-1;_<=1;_++)v+=l[(p+g+128)%128*128+(m+_+128)%128];return v/9*1.6},h=i.createImageData(128,128);for(let m=0;m<128;m++)for(let p=0;p<128;p++){const v=c((p-1+128)%128,m)-c((p+1)%128,m),g=c(p,(m-1+128)%128)-c(p,(m+1)%128),_=Math.hypot(v,g,1),M=(m*128+p)*4;h.data[M]=(v/_*.5+.5)*255,h.data[M+1]=(g/_*.5+.5)*255,h.data[M+2]=(1/_*.5+.5)*255,h.data[M+3]=255}i.putImageData(h,0,0);const d=new mm(t);return d.wrapS=Or,d.wrapT=Or,d.repeat.set(5,7),d},VC=()=>{const i=vS(19),r=Float32Array.from({length:16384},()=>i()),l=m=>Math.sqrt(Math.max(0,1-4*m*m)),c=(m,p)=>{const v=(m%128+128)%128,g=(p%128+128)%128,_=v/128*8,M=g/128*8,E=Math.floor(_),D=Math.floor(M),x=_-E-.5,S=M-D-.5,F=(E+D)%2===0,z=l(x)*(.55+.45*Math.cos(S*Math.PI*(F?1:.6))),U=l(S)*(.55+.45*Math.cos(x*Math.PI*(F?.6:1)));return(F?Math.max(z,U*.7):Math.max(U,z*.7))+r[g*128+v]*.08},h=new Uint8Array(16384*4);for(let m=0;m<128;m++)for(let p=0;p<128;p++){const v=(c(p-1,m)-c(p+1,m))*1.6,g=(c(p,m-1)-c(p,m+1))*1.6,_=Math.hypot(v,g,1),M=(m*128+p)*4;h[M]=(v/_*.5+.5)*255,h[M+1]=(g/_*.5+.5)*255,h[M+2]=(1/_*.5+.5)*255,h[M+3]=255}const d=new $T(h,128,128);return d.wrapS=Or,d.wrapT=Or,d.magFilter=na,d.minFilter=Dr,d.generateMipmaps=!0,d.needsUpdate=!0,d},GC=(s,t,i,r,l)=>{const c=(l==="contain"?Math.min:Math.max)(i/t.width,r/t.height),h=t.width*c,d=t.height*c;s.drawImage(t,(i-h)/2,(r-d)/2,h,d)},yx=(s,t,i,r)=>{const l=s.getContext("2d");l&&(l.fillStyle=Qu(i),l.fillRect(0,0,s.width,s.height),t&&GC(l,t,s.width,s.height,r))},kC=(s,t,i)=>{const l=t?Math.max(64,Math.round(t.width/t.height*192)):384;s.width=192,s.height=l;const c=s.getContext("2d");if(!c)return l/192;if(c.fillStyle=Qu(i),c.fillRect(0,0,192,l),t)return c.save(),c.translate(192,0),c.rotate(Math.PI/2),c.drawImage(t,0,0,l,192),c.restore(),l/192;const h=PC(i)>.5?[0,0,0]:[1,1,1];c.fillStyle=Qu(h,.05);for(let d=0;d<l;d+=4)c.fillRect(0,d,192,1);c.fillStyle=Qu(h,.2);for(let d=0;d<l;d+=14)c.fillRect(192*.075,d,2,8),c.fillRect(192*.925-2,d,2,8);return l/192},XC=()=>{const s=()=>Array.from({length:Un+1},()=>new K);return{nodes:s(),previous:s(),velocities:s(),lengths:new Float64Array(Un),impulses:new Float64Array(Un),rest:1,anchor:new K,body:{position:new K,previous:new K,velocity:new K,quaternion:new ja,previousQuaternion:new ja,angular:new K,mass:1,inverseInertia:new K(1,1,1),hang:new K},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},en={a:new K,b:new K,c:new K,d:new K,e:new K,f:new K,g:new K,pin:new K,q:new ja,r:new ja},km=(s,t,i)=>(en.r.copy(s.quaternion).invert(),i.copy(t).applyQuaternion(en.r),i.set(i.x*s.inverseInertia.x,i.y*s.inverseInertia.y,i.z*s.inverseInertia.z),i.applyQuaternion(s.quaternion)),_S=(s,t)=>{const{x:i,y:r,z:l,w:c}=s;s.x+=.5*(t.x*c+t.y*l-t.z*r),s.y+=.5*(t.y*c+t.z*i-t.x*l),s.z+=.5*(t.z*c+t.x*r-t.y*i),s.w+=.5*(-t.x*i-t.y*r-t.z*l),s.normalize()},yS=(s,t,i)=>{const r=en.c.crossVectors(t,i);return 1/s.mass+r.dot(km(s,r,en.d))},xS=(s,t,i)=>{s.position.addScaledVector(i,1/s.mass),_S(s.quaternion,km(s,en.e.crossVectors(t,i),en.f))},qC=(s,t,i,r)=>{const{nodes:l,body:c}=s,h=l[t],d=t===0?0:hx,m=t===Un-1,p=en.g;let v=l[t+1];m&&(p.copy(c.hang).applyQuaternion(c.quaternion),v=en.b.copy(c.position).add(p));const g=en.a.subVectors(v,h),_=g.length(),M=_-s.rest;if(M<=0||_<1e-9)return;const E=g.divideScalar(_),D=m?yS(c,p,E):hx,x=(_-s.lengths[t])/i,F=(r.hold*Math.tanh(r.stiffness*M/r.hold)+r.spring*M+r.bandDamping*Math.max(0,x))*i*i-s.impulses[t];if(F<=0)return;const z=Math.min(M/(d+D),F);s.impulses[t]+=z,d&&h.addScaledVector(E,z*d),m?xS(c,p,E.multiplyScalar(-z)):v.addScaledVector(E,-z*D)},YC=(s,t,i)=>{const r=en.g.copy(t.local).applyQuaternion(s.quaternion),l=en.a.copy(i).sub(s.position).sub(r),c=l.length();if(c<1e-9)return;const h=l.divideScalar(c),d=c/yS(s,r,h);xS(s,r,h.multiplyScalar(d))},Tp=(s,t,i)=>{const{nodes:r,previous:l,velocities:c,body:h,anchor:d}=s;r[0].copy(d);for(let p=1;p<=Un;p++)r[p].copy(r[p-1]),i?r[p].x+=s.rest:r[p].y-=s.rest;h.quaternion.identity(),i&&h.quaternion.setFromAxisAngle(new K(0,0,1),Math.PI/2),h.hang.set(0,t.hangY,0);const m=en.a.copy(h.hang).applyQuaternion(h.quaternion);h.position.copy(r[Un]).sub(m),h.previous.copy(h.position),h.previousQuaternion.copy(h.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0);for(let p=0;p<=Un;p++)l[p].copy(r[p]),c[p].set(0,0,0);s.lengths.fill(s.rest),s.turn=0,s.twist=0,s.twistRaw=0,s.calm=0},WC=(s,t,i)=>{s.rest=i/Un;const{width:r,height:l}=t,c=s.body,h=nf+vi*2;c.mass=1,c.inverseInertia.set(12/(l*l+h*h),12/(r*r+h*h),12/(r*r+l*l)),c.hang.set(0,t.hangY,0)},jC=(s,t,i,r)=>{const l=Math.max(1,Math.ceil(t/RC-1e-6)),c=t/l,{nodes:h,previous:d,velocities:m,body:p}=s,v=i.breeze*(Math.sin(r*.53)*.7+Math.sin(r*1.31+1.7)*.3)*3,g=i.breeze*Math.sin(r*.37+.6)*2,_=s.grab,M=en.pin,E=Math.exp(-2*c),D=Math.exp(-i.linearDrag*c),x=Math.exp(-i.angularDrag*c);for(let F=0;F<l;F++){for(let T=1;T<Un;T++){const P=m[T];P.y-=i.gravity*c,P.x+=v*c,P.z+=g*c,d[T].copy(h[T]),h[T].addScaledVector(P,c)}p.previous.copy(p.position),p.previousQuaternion.copy(p.quaternion);const z=p.quaternion;if(_){const T=en.q.copy(_.rotation).multiply(en.r.copy(z).invert());T.w<0&&T.set(-T.x,-T.y,-T.z,-T.w);const P=en.a.set(T.x,T.y,T.z).multiplyScalar(2*i.grip);P.addScaledVector(p.angular,-6),p.angular.addScaledVector(km(p,P,en.b),c)}const U=en.a.set(0,1,0).applyQuaternion(z),k=en.b.set(-U.x*U.z,-U.y*U.z,1-U.z*U.z);if(k.lengthSq()>.001){const T=en.d.set(0,0,1).applyQuaternion(z),P=Math.atan2(en.e.crossVectors(k,T).dot(U),k.dot(T));let it=P-s.twistRaw;it>Math.PI?it-=Math.PI*2:it<-Math.PI&&(it+=Math.PI*2),s.twist+=it,s.twistRaw=P}if(!_){const T=p.angular.dot(U);p.angular.addScaledVector(U,(i.twist*(s.turn-s.twist)-i.twistDamping*T)*c)}p.velocity.y-=i.gravity*c,p.velocity.x+=v*.35*c,p.velocity.z+=g*.35*c,p.position.addScaledVector(p.velocity,c),_S(p.quaternion,en.f.copy(p.angular).multiplyScalar(c)),s.impulses.fill(0),_&&M.lerpVectors(_.from,_.target,(F+1)/l);for(let T=0;T<wC;T++){for(let P=0;P<Un;P++)qC(s,P,c,i);_&&YC(p,_,M)}for(let T=1;T<Un;T++){const P=m[T].subVectors(h[T],d[T]).divideScalar(c).multiplyScalar(E);P.multiplyScalar(1/(1+i.nodeAir*P.length()*c))}p.velocity.subVectors(p.position,p.previous).divideScalar(c);const V=en.q.copy(p.previousQuaternion).invert().premultiply(p.quaternion);p.angular.set(V.x,V.y,V.z).multiplyScalar(2/c*(V.w<0?-1:1));const I=en.a.set(0,0,1).applyQuaternion(p.quaternion),B=p.velocity.dot(I),L=en.b.copy(p.velocity).addScaledVector(I,-B);L.multiplyScalar(1/(1+i.air*L.length()*c)),p.velocity.copy(L).addScaledVector(I,B/(1+i.broadside*Math.abs(B)*c)).multiplyScalar(D),p.angular.multiplyScalar(x/(1+i.spinAir*p.angular.length()*c)),p.velocity.lengthSq()>3600&&p.velocity.setLength(60),p.angular.lengthSq()>1600&&p.angular.setLength(40),h[Un].copy(p.hang).applyQuaternion(p.quaternion).add(p.position);for(let T=0;T<Un;T++)s.lengths[T]=h[T].distanceTo(h[T+1])}_&&_.from.copy(_.target);let S=p.velocity.lengthSq()+p.angular.lengthSq()*.3;for(let F=1;F<Un;F++)S+=m[F].lengthSq()*.05;s.calm=S<2e-4?s.calm+t:0},ZC=({frontImage:s,backImage:t,imageFit:i="cover",cardColor:r="#ffffff",orientation:l="portrait",finish:c="glossy",cornerRadius:h=.3,size:d=.6,anchor:m="center",strapLength:p=.5,strapImage:v,strapColor:g="#111111",strapWidth:_=.65,metal:M="silver",gravity:E=1,damping:D=.5,elasticity:x=.5,breeze:S=.5,interactive:F=!0,intro:z=!0,className:U="",style:k})=>{const V=fe.useRef(null),I=fe.useRef(null),B=fe.useRef(null);return I.current={frontImage:s,backImage:t,imageFit:i==="contain"?"contain":"cover",cardColor:r,orientation:l==="landscape"?"landscape":"portrait",finish:c,cornerRadius:h,size:d,anchor:m,strapLength:p,strapImage:v,strapColor:g,strapWidth:_,metal:M,gravity:E,damping:D,elasticity:x,breeze:S,interactive:F,intro:z},fe.useEffect(()=>{var L;(L=B.current)==null||L.call(B)}),fe.useEffect(()=>{var Wt;const L=V.current;if(!L)return;let T;try{T=new bC({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}T.setClearColor(0,0),T.outputColorSpace=li,T.toneMapping=Dx,T.toneMappingExposure=1;const P=T.domElement;P.className="lanyard-canvas",P.setAttribute("aria-hidden","true"),L.appendChild(P);const it=Math.min(8,T.capabilities.getMaxAnisotropy()),ft=new Qx,Tt=BC(T);ft.environment=Tt.texture;const st=new ki(dx,1,.1,200),W=new Fy(16777215,1.6);W.position.set(-2.5,4,6);const et=new Fy(16777215,.35);et.position.set(3,-1,4),ft.add(W,et);const Z=new Map,Et={front:null,back:null,strap:null},wt=document.createElement("canvas"),Ot=document.createElement("canvas"),te=document.createElement("canvas"),ne=Ep(wt,it),C=Ep(Ot,it),A=Ep(te,it);A.wrapS=Cr,A.wrapT=Or;const H=HC(),q=VC(),lt={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new K},foilFill:{value:new K},foilTop:{value:new K}},At=ct=>{Object.assign(ct.uniforms,lt),ct.vertexShader=ct.vertexShader.replace("#include <common>",`#include <common>
${NC}`).replace("#include <project_vertex>",`#include <project_vertex>
${LC}`),ct.fragmentShader=ct.fragmentShader.replace("#include <common>",`#include <common>
${OC}`).replace("#include <opaque_fragment>",`${zC}
#include <opaque_fragment>`)},bt=new Bu({map:ne,normalMap:H,normalScale:new se(.06,.06)}),St=new Bu({map:C,normalMap:H,normalScale:new se(.06,.06)});bt.onBeforeCompile=At,St.onBeforeCompile=At;const zt=new Bu,O=new cS({metalness:1}),yt=new Bu({map:A,normalMap:q,normalScale:new se(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Fe(.32,.32,.34),side:ta}),mt=new vo,J=new jn(void 0,zt),Q=new jn(void 0,bt),ht=new jn(void 0,St),xt=new jn(new ef(gS,CC,18,72),O);xt.rotation.y=Math.PI/2-.7,mt.add(J,Q,ht,xt),ft.add(mt);const Nt=FC(ka),Jt=new jn(Nt,yt);Jt.frustumCulled=!1,ft.add(Jt);const $t=new vo,N=new jn(_x(xp),O);N.position.y=ku+Ul/2-.004;const b=new jn(new ef(ku,.0105,14,40),O);$t.add(N,b),ft.add($t);const X=XC(),pt=[],Rt=new K,tt=new K,jt=new tS(pt,!1,"centripetal"),Gt={width:1,height:1};let Kt=vx("portrait",.3),Qt={},Bt=xp,Zt=2,Vt=0,qt=performance.now(),Ft=0,pe=!0,Y=!0,Ct=!1,Xt=!1,kt=null,Dt=0;const Mt=((Wt=window.matchMedia)==null?void 0:Wt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,ie=()=>{const ct=I.current,Ht=Sp(ct.cardColor,[1,1,1]),It=px,Yt=Math.round(px*Kt.height/Kt.width);(wt.width!==It||wt.height!==Yt)&&(wt.width=It,wt.height=Yt,Ot.width=It,Ot.height=Yt,ne.dispose(),C.dispose()),yx(wt,Et.front,Ht,ct.imageFit),yx(Ot,Et.back||Et.front,Ht,ct.imageFit),ne.needsUpdate=!0,C.needsUpdate=!0,Nn()},me=()=>{const ct=I.current;Zt=kC(te,Et.strap,Sp(ct.strapColor,[.07,.07,.07])),q.repeat.set(2,2*Zt),A.dispose(),A.needsUpdate=!0,Nn()},ee=()=>{const ct=I.current,Ht=Gt.width/Gt.height;let It=Kt.height/Rr(ct.size,.15,.9);const Yt=Kt.width/.72;It*Ht<Yt&&(It=Yt/Ht);const ce=It*Ht;st.aspect=Ht,st.position.set(0,0,It/2/Math.tan(dx*Math.PI/360)),st.lookAt(0,0,0),st.updateProjectionMatrix(),st.updateMatrixWorld(),lt.foilKey.value.set(-2.5,4,6).normalize().transformDirection(st.matrixWorldInverse),lt.foilFill.value.set(3,-1,4).normalize().transformDirection(st.matrixWorldInverse),lt.foilTop.value.set(.5,4.5,8).normalize().transformDirection(st.matrixWorldInverse);const ue=((AC[ct.anchor]??.5)-.5)*ce,Se=It/2+.2,Te=It/2-It*wl(.12,.42,Rr(ct.strapLength,0,1))+(Kt.hangY-Kt.height/2);X.anchor.set(ue,Se,0),WC(X,Kt,Se-Te),X.nodes[0].copy(X.anchor),X.previous[0].copy(X.anchor)},ye=()=>{const ct=I.current,Ht=`${ct.orientation}|${ct.cornerRadius}`;if(Ht!==Qt.layoutKey){Kt=vx(ct.orientation,ct.cornerRadius);const Te=IC(Kt);J.geometry.dispose(),Q.geometry.dispose(),ht.geometry.dispose(),J.geometry=Te.body,Q.geometry=Te.face,ht.geometry=Te.face.clone(),Q.position.z=nf/2+vi+6e-4,ht.rotation.y=Math.PI,ht.position.z=-.0166,xt.position.set(0,Kt.ringY,0),Qt.framingKey=""}const It=`${Ht}|${ct.size}|${ct.anchor}|${ct.strapLength}|${Gt.width}|${Gt.height}`;It!==Qt.framingKey&&(ee(),Ct?Ht!==Qt.layoutKey&&Tp(X,Kt,!1):(Tp(X,Kt,ct.intro&&!Mt),Ct=!0));const Yt=`${ct.frontImage}|${ct.backImage}|${ct.strapImage}`;if(Yt!==Qt.imageKey){const Te=++Dt;Promise.all([Mp(Z,ct.frontImage),Mp(Z,ct.backImage),Mp(Z,ct.strapImage)]).then(([Be,ze,ve])=>{!Y||Te!==Dt||(Et.front=Be,Et.back=ze,Et.strap=ve,ie(),me())})}const ce=`${Ht}|${ct.cardColor}|${ct.imageFit}`;ce!==Qt.faceKey&&ie(),ct.strapColor!==Qt.strapColor&&me();const ue=mx[ct.finish]||mx.glossy,Se=Sp(ct.cardColor,[1,1,1]);[bt,St].forEach(Te=>{Te.roughness=ue.roughness,Te.metalness=ue.metalness,Te.clearcoat=ue.clearcoat,Te.clearcoatRoughness=ue.clearcoatRoughness,Te.anisotropy=ue.anisotropy}),lt.foilStrength.value=ue.foil,lt.foilAspect.value=Kt.height/Kt.width,zt.color.setRGB(Se[0]*.92,Se[1]*.92,Se[2]*.92,li),zt.roughness=Math.min(ue.roughness,.35),zt.metalness=ue.metalness,zt.clearcoat=1,zt.clearcoatRoughness=.08;const Oe=gx[ct.metal]||gx.silver;O.color.set(Oe.color),O.roughness=Oe.roughness,Bt=xp*Rr(ct.strapWidth,.4,2),Bt!==Qt.strapScale&&(N.geometry.dispose(),N.geometry=_x(Bt)),P.style.touchAction=ct.interactive?"pan-y":"auto",Qt={layoutKey:Ht,framingKey:It,imageKey:Yt,faceKey:ce,strapColor:ct.strapColor,strapScale:Bt},Nn()},ke=Array.from({length:ka},()=>new K),sn=Array.from({length:ka},()=>new K),En=DC.map(ct=>[Math.cos(ct),Math.sin(ct)]),bn={tangent:new K,toCamera:new K,basis:new pn,up:new K,across:new K,facing:new K,end:new K},ra=()=>{const ct=X.nodes[Un],Ht=ku+Ul+.05;let It=Un-1;for(;It>0&&X.nodes[It].distanceTo(ct)<Ht*1.1;)It--;const Yt=bn.up.subVectors(X.nodes[It],ct);Yt.lengthSq()<1e-8&&Yt.set(0,1,0).applyQuaternion(X.body.quaternion),Yt.normalize(),Rt.copy(ct).addScaledVector(Yt,Ht),tt.copy(ct).addScaledVector(Yt,ku+Ul*.35),pt.length=0;for(let We=0;We<=It;We++)pt.push(X.nodes[We]);pt.push(Rt,tt),jt.updateArcLengths();for(let We=0;We<ka;We++)jt.getPointAt(We/(ka-1),ke[We]);const ce=jt.getLength(),ue=1-Rt.distanceTo(tt)/Math.max(ce,.001),Se=Nt.getAttribute("position"),Oe=Nt.getAttribute("normal"),Te=Nt.getAttribute("uv"),Be=Ku.length,ze=X.rest*Un,ve=ze/(Bt*Zt),Ye=Bt/Math.pow(Math.max(1,ce/Math.max(ze,.001)),.35),{tangent:Me,toCamera:yn,across:on,facing:Re}=bn;for(let We=0;We<ka;We++){Me.subVectors(ke[Math.min(ka-1,We+1)],ke[Math.max(0,We-1)]),Me.lengthSq()<1e-12&&Me.set(0,-1,0),Me.normalize(),yn.subVectors(st.position,ke[We]).normalize();const Xe=sn[We].crossVectors(yn,Me);Xe.lengthSq()<1e-10&&Xe.copy(We>0?sn[We-1]:en.a.set(1,0,0)),Xe.normalize(),We>0&&Xe.dot(sn[We-1])<0&&Xe.negate();const In=-X.twist*Math.pow(Math.min(1,We/(ka-1)/ue),1.3);Re.crossVectors(Me,Xe),on.copy(Xe).multiplyScalar(Math.cos(In)).addScaledVector(Re,Math.sin(In)),Re.crossVectors(Me,on);const fn=ke[We],hn=(1-We/(ka-1))*ve;for(let mn=0;mn<Be;mn++){const oa=We*Be+mn,ui=(Ku[mn]-.5)*Ye,[Do,He]=En[mn];Se.setXYZ(oa,fn.x+on.x*ui,fn.y+on.y*ui,fn.z+on.z*ui),Oe.setXYZ(oa,Re.x*Do+on.x*He,Re.y*Do+on.y*He,Re.z*Do+on.z*He),Te.setXY(oa,Ku[mn],hn)}}bn.end.copy(on),Se.needsUpdate=!0,Oe.needsUpdate=!0,Te.needsUpdate=!0,on.copy(bn.end).addScaledVector(Yt,-bn.end.dot(Yt)).normalize(),Re.crossVectors(on,Yt).normalize(),bn.basis.makeBasis(on,Yt,Re),$t.quaternion.setFromRotationMatrix(bn.basis),$t.position.copy(ct)},sa=()=>{mt.position.copy(X.body.position),mt.quaternion.copy(X.body.quaternion),ra(),T.render(ft,st)},Ui=()=>{const ct=I.current,Ht=40*Rr(ct.gravity,0,3),It=Math.max(Ht,20),Yt=Rr(ct.elasticity,0,1),ce=Rr(ct.damping,0,1);return{gravity:Ht,hold:It*wl(2.2,5.5,Yt),stiffness:It*10*Un,spring:It*wl(.1,.4,Yt)*Un,bandDamping:It*wl(.3,.08,Yt)*Un,linearDrag:.25*Math.pow(16,ce),angularDrag:.5*Math.pow(12,ce),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:Mt?0:Rr(ct.breeze,0,1)}},ei=ct=>{if(Vt=0,!Y)return;const Ht=Math.min(1/30,Math.max(1/240,(ct-qt)/1e3));qt=ct,Ft+=Ht;const It=Ui();jC(X,Ht,It,Ft);const Yt=X.body;Number.isFinite(Yt.position.x+Yt.position.y+Yt.position.z+Yt.quaternion.w)||(X.grab=null,Tp(X,Kt,!1)),sa();const ce=X.calm>1.2&&!X.grab&&It.breeze===0;pe&&!ce&&(Vt=requestAnimationFrame(ei))},Nn=()=>{Vt||!pe||!Y||(X.calm=0,qt=performance.now(),Vt=requestAnimationFrame(ei))},Ln=new Gb,ae=new se,le=ct=>{const Ht=P.getBoundingClientRect();ae.set((ct.clientX-Ht.left)/Ht.width*2-1,-((ct.clientY-Ht.top)/Ht.height)*2+1),Ln.setFromCamera(ae,st)},de=()=>(mt.updateMatrixWorld(),Ln.intersectObjects([J,Q,ht],!1)[0]||null),Le=ct=>{P.style.cursor!==ct&&(P.style.cursor=ct)},Ze=ct=>{const Ht=X.body,It=en.a.set(0,1,0).applyQuaternion(Ht.quaternion);let Yt=X.turn>0?-1:1;if(X.turn===0){const ce=en.c.subVectors(ct,st.position).normalize();Yt=en.b.subVectors(ct,Ht.position).cross(ce).dot(It)<0?-1:1}X.turn=X.turn===0?Math.PI*Yt:0,Ht.angular.addScaledVector(It,UC*Yt)},_n=ct=>{var It;if(!I.current.interactive||ct.button>0)return;le(ct);const Ht=de();Ht&&(X.grab={local:Ht.point.clone().sub(X.body.position).applyQuaternion(X.body.quaternion.clone().invert()),rotation:X.body.quaternion.clone(),reach:Ht.distance,from:Ht.point.clone(),target:Ht.point.clone()},kt={x:ct.clientX,y:ct.clientY,time:performance.now(),point:Ht.point.clone()},(It=P.setPointerCapture)==null||It.call(P,ct.pointerId),Le("grabbing"),ct.preventDefault(),Nn())},un=ct=>{if(I.current.interactive){if(le(ct),X.grab){kt&&Math.hypot(ct.clientX-kt.x,ct.clientY-kt.y)>6&&(kt=null),Ln.ray.at(X.grab.reach,X.grab.target),Nn();return}ct.pointerType!=="touch"&&(Xt=!!de(),Le(Xt?"grab":""))}},Ue=ct=>{var Ht;X.grab&&(X.grab=null,kt&&ct.type==="pointerup"&&performance.now()-kt.time<450&&Ze(kt.point),kt=null,(Ht=P.releasePointerCapture)==null||Ht.call(P,ct.pointerId),Le(Xt&&ct.pointerType!=="touch"?"grab":""),Nn())},w=ct=>{!I.current.interactive||ct.touches.length!==1||(le(ct.touches[0]),de()&&ct.preventDefault())};P.addEventListener("pointerdown",_n),P.addEventListener("pointermove",un),P.addEventListener("pointerup",Ue),P.addEventListener("pointercancel",Ue),P.addEventListener("lostpointercapture",Ue),P.addEventListener("touchstart",w,{passive:!1});const nt=()=>{Gt.width=Math.max(1,L.clientWidth),Gt.height=Math.max(1,L.clientHeight),T.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),T.setSize(Gt.width,Gt.height,!1),ye(),sa()},gt=new ResizeObserver(nt);gt.observe(L);const _t=new IntersectionObserver(([ct])=>{pe=ct.isIntersecting,pe&&Nn()});_t.observe(L);const ot=()=>{document.hidden||Nn()};return document.addEventListener("visibilitychange",ot),B.current=ye,nt(),()=>{Y=!1,cancelAnimationFrame(Vt),B.current=null,gt.disconnect(),_t.disconnect(),document.removeEventListener("visibilitychange",ot),P.removeEventListener("pointerdown",_n),P.removeEventListener("pointermove",un),P.removeEventListener("pointerup",Ue),P.removeEventListener("pointercancel",Ue),P.removeEventListener("lostpointercapture",Ue),P.removeEventListener("touchstart",w),[J,Q,ht,xt,N,b,Jt].forEach(ct=>{var Ht;return(Ht=ct.geometry)==null?void 0:Ht.dispose()}),[bt,St,zt,O,yt].forEach(ct=>ct.dispose()),[ne,C,A,H,q].forEach(ct=>ct.dispose()),Tt.dispose(),T.dispose(),P.parentNode&&P.parentNode.removeChild(P)}},[]),Pt.jsx("div",{ref:V,className:`lanyard ${U}`.trim(),style:k})};function KC(){return Pt.jsxs("section",{id:"about",className:"about-section",children:[Pt.jsx(af,{num:"01 — 关于",title:"关于我"}),Pt.jsxs("div",{className:"about-grid",children:[Pt.jsx("div",{className:"portrait-wrap reveal",children:Pt.jsx(Am,{className:"portrait-lanyard",minHeight:520,rootMargin:"320px 0px",children:Pt.jsx(ZC,{frontImage:"./lanyard-front.svg",backImage:"./lanyard-back.svg",imageFit:"cover",orientation:"portrait",finish:"glossy",cardColor:"#ffffff",strapColor:"#111111",metal:"silver",size:.65,strapLength:.5,strapWidth:.65,gravity:1,damping:.55,elasticity:.5,breeze:0,interactive:!0,intro:!0})})}),Pt.jsxs("div",{className:"about-text reveal",children:[Pt.jsx("h3",{children:"一名热爱设计与技术的前端工程师"}),Pt.jsx("p",{children:"我是一名拥有多年经验的前端开发工程师，专注于构建高性能、可维护的现代 Web 应用。对用户体验有着近乎偏执的追求，相信细节决定品质。"}),Pt.jsx("p",{children:"擅长 Vue、React 等主流框架生态，精通 CSS 动画与交互设计。具备良好的产品思维与审美能力，能够独立完成从需求到上线的完整开发流程。"}),Pt.jsx("p",{children:"热爱开源与技术分享，持续关注前端前沿技术，不断探索更好的开发方式。"}),Pt.jsx("div",{className:"stats",children:p1.map(s=>Pt.jsxs("div",{className:"stat-item reveal",children:[Pt.jsx("h4",{"data-count":s.count,children:"0"}),Pt.jsx("p",{children:s.label})]},s.label))})]})]})]})}const xx=typeof window>"u"?fe.useEffect:fe.useLayoutEffect,Gi=720,Sx=.3,QC=.45,JC=.55,bp=1.3,$C=.45,t3=5;function Tm(s,t,i,r){return`M ${s-i} ${t} A ${i} ${r} 0 1 0 ${s+i} ${t} A ${i} ${r} 0 1 0 ${s-i} ${t}`}function Mx(s,t,i){return Tm(s,t,i,i)}function e3(s,t,i){const r=i/2;return`M ${s-r} ${t-r} L ${s+r} ${t-r} L ${s+r} ${t+r} L ${s-r} ${t+r} Z`}function n3(s,t,i,r){const l=i/2,c=r/2;return`M ${s-l} ${t-c} L ${s+l} ${t-c} L ${s+l} ${t+c} L ${s-l} ${t+c} Z`}function i3(s,t,i){const r=i*Math.sqrt(3)/2,l=i/2;return`M ${s} ${t-r/1.5} L ${s+l} ${t+r/3} L ${s-l} ${t+r/3} Z`}function a3(s,t,i,r,l){const c=Math.PI/l;let h="";for(let d=0;d<2*l;d++){const m=d%2===0?i:r,p=d*c-Math.PI/2,v=s+m*Math.cos(p),g=t+m*Math.sin(p);h+=d===0?`M ${v} ${g}`:` L ${v} ${g}`}return h+" Z"}function r3(s,t,i){const r=i/30;return`M ${s} ${t+12*r} C ${s-20*r} ${t-5*r}, ${s-12*r} ${t-18*r}, ${s} ${t-8*r} C ${s+12*r} ${t-18*r}, ${s+20*r} ${t-5*r}, ${s} ${t+12*r}`}function s3(s,t,i,r){const l=i/2,c=r/2;return`M ${s} ${t} C ${s+l*.5} ${t-c}, ${s+l} ${t-c}, ${s+l} ${t} C ${s+l} ${t+c}, ${s+l*.5} ${t+c}, ${s} ${t} C ${s-l*.5} ${t+c}, ${s-l} ${t+c}, ${s-l} ${t} C ${s-l} ${t-c}, ${s-l*.5} ${t-c}, ${s} ${t}`}function o3(s,t,i,r,l){const c=[],h=l*20,d=i/2;for(let m=0;m<=h;m++){const p=s-d+i*m/h,v=t+Math.sin(m/h*l*2*Math.PI)*r;c.push(m===0?`M ${p} ${v}`:`L ${p} ${v}`)}for(let m=h;m>=0;m--){const p=s-d+i*m/h,v=t-Math.sin(m/h*l*2*Math.PI)*r;c.push(`L ${p} ${v}`)}return c.join(" ")+" Z"}const $i=(s,t,i)=>Math.min(i,Math.max(t,s)),Ex=s=>typeof s=="number"?`${s}px`:s,Tx=s=>s-Math.round(s),Ap=(s,t,i,r)=>{const l=(h,d,m)=>((1-3*d+3*h)*m+(3*d-6*h))*m*m+3*h*m,c=(h,d,m)=>3*(1-3*d+3*h)*m*m+2*(3*d-6*h)*m+3*h;return h=>{if(h<=0||h>=1)return h;let d=h;for(let m=0;m<8;m++){const p=c(s,i,d);if(Math.abs(p)<1e-6)break;d=$i(d-(l(s,i,d)-h)/p,0,1)}return l(t,r,d)}},bx={linear:s=>s,easeIn:Ap(.42,0,1,1),easeOut:Ap(0,0,.58,1),easeInOut:Ap(.42,0,.58,1)},Ax=s=>1-Math.pow(1-s,5),l3=({shape:s,radiusX:t,radiusY:i,radius:r,itemSize:l})=>{const c=s==="ellipse"||s==="rectangle"||s==="infinity"||s==="wave",h=(c?t:r)*2+l*1.6,d=(c?i:r)*2+l*1.6;return h>0&&d>0?h/d:1},c3=(s,t,i)=>{var ne;const r=typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null,l={lut:null,length:0,front:0,yMid:0,yHalf:1,bbox:[0,0,1,1],width:0,height:0,scale:0,size:0,items:[],strokes:[],lap:0,manual:0,glide:0,speed:1,drag:null,seek:null,hovered:!1,hoverIndex:-1,suppressUntil:0,introStart:-1,introDone:!t.current.intro,visible:typeof IntersectionObserver>"u",reduced:!!(r!=null&&r.matches),raf:0,last:0,destroyed:!1};l.speed=l.reduced||t.current.paused?0:1;const c=()=>{l.items=Array.from(s.querySelectorAll("[data-orbit-item]")).map(C=>({el:C,t:"",o:"",z:""})),l.strokes=Array.from(s.querySelectorAll("[data-orbit-stroke]"))},h=()=>{const C=t.current,A=s.querySelector("[data-orbit-path]");let H=0;try{H=A?A.getTotalLength():0}catch{H=0}if(!A||!H||!isFinite(H)){l.lut=null;return}const q=new Float32Array(Gi*2),lt=C.rotation*Math.PI/180,At=Math.cos(lt),bt=Math.sin(lt),St=C.baseWidth/2;let zt=1/0,O=-1/0,yt=1/0,mt=-1/0,J=0;for(let xt=0;xt<Gi;xt++){const Nt=A.getPointAtLength(xt/Gi*H),Jt=Nt.x-St,$t=Nt.y-St,N=St+Jt*At-$t*bt,b=St+Jt*bt+$t*At;q[xt*2]=N,q[xt*2+1]=b,zt=Math.min(zt,N),O=Math.max(O,N),yt=Math.min(yt,b),mt=Math.max(mt,b),b>q[J*2+1]+1e-6&&(J=xt)}l.lut=q,l.length=H,l.front=J/Gi,l.yMid=(yt+mt)/2,l.yHalf=Math.max(.001,(mt-yt)/2);const Q=$i(C.depth,0,1),ht=C.itemSize/2*(1+Q*Sx)*Math.max(1,C.hoverScale)+2;l.bbox=[zt-ht,yt-ht,O+ht,mt+ht],i((O-zt+ht*2)/(mt-yt+ht*2))},d=()=>{const C=t.current;if(l.width=s.clientWidth,l.height=s.clientHeight,!l.lut)return;const[A,H,q,lt]=l.bbox,At=Math.min(l.width/(q-A),l.height/(lt-H));l.scale=At>0&&isFinite(At)?At:0,l.size=C.itemSize*l.scale;for(const mt of l.items)mt.el.style.width=`${l.size}px`,mt.el.style.height=`${l.size}px`;if(!l.scale)return;const bt=l.width/l.scale,St=l.height/l.scale,zt=(A+q)/2,O=(H+lt)/2;s.querySelectorAll("[data-orbit-svg]").forEach(mt=>{mt.setAttribute("viewBox",`${zt-bt/2} ${O-St/2} ${bt} ${St}`)});const yt=s.querySelector("[data-orbit-clip]");yt&&(yt.setAttribute("x",String(zt-bt)),yt.setAttribute("y",String(l.yMid)),yt.setAttribute("width",String(bt*2)),yt.setAttribute("height",String(St*2)));for(const mt of l.strokes)mt.style.strokeWidth=String(C.pathWidth/l.scale);m(1)},m=C=>{const A=t.current,H=A.pathDash>0&&l.scale?A.pathDash/l.scale:0;for(const q of l.strokes)C<1&&!H?(q.style.strokeDasharray=`${l.length} ${l.length}`,q.style.strokeDashoffset=String(l.length*(1-C)),q.style.opacity=""):(q.style.strokeDasharray=H?`${H} ${H*1.6}`:"",q.style.strokeDashoffset="",q.style.opacity=C<1?String(C):"")},p=C=>{const A=(C%1+1)%1*Gi,H=Math.floor(A)%Gi,q=(H+1)%Gi,lt=A-Math.floor(A),At=l.lut;return[At[H*2]+(At[q*2]-At[H*2])*lt,At[H*2+1]+(At[q*2+1]-At[H*2+1])*lt]},v=C=>{const A=p(C-2/Gi),H=p(C+2/Gi);return Math.atan2(H[1]-A[1],H[0]-A[0])*180/Math.PI},g=()=>{const C=t.current,A=bx[C.easing]||bx.linear,H=Math.floor(l.lap);return(H+A(l.lap-H))*(C.direction==="reverse"?-1:1)+l.manual},_=(C,A)=>{const H=t.current;return H.fill?C/Math.max(1,A):-C*H.itemSize*1.3/Math.max(1,l.length)},M=(C,A,H,q)=>{C[A]!==q&&(C[A]=q,C.el.style[H]=q)},E=C=>{const A=t.current;if(!l.lut||!l.scale)return;const H=g(),q=l.items.length,lt=$i(A.depth,0,1),[At,bt,St,zt]=l.bbox,O=(At+St)/2,yt=(bt+zt)/2,mt=l.size/2,J=l.introStart>=0,Q=J?(C-l.introStart)/1e3:0,ht=J?Ax($i(Q/bp,0,1)):1,xt=J?$i(Q/$C,0,1):1;for(let Nt=0;Nt<q;Nt++){const Jt=l.items[Nt];let $t=H+_(Nt,q);J&&($t=l.front+Tx($t-l.front)*ht);const[N,b]=p($t),X=$i((b-l.yMid)/l.yHalf,-1,1),pt=(X+1)/2;let Rt=1+lt*(Sx*pt-QC*(1-pt)),tt=1-lt*JC*(1-pt);J&&(Rt*=.7+.3*xt,tt*=xt*xt*(3-2*xt));const jt=(N-O)*l.scale+l.width/2-mt,Gt=(b-yt)*l.scale+l.height/2-mt,Kt=A.alignToPath?v($t):0;let Qt=lt>0?X<=0?10+Math.round((X+1)*80):110+Math.round(X*80):1;Nt===l.hoverIndex&&(Qt+=200),M(Jt,"t","transform",`translate3d(${jt.toFixed(2)}px, ${Gt.toFixed(2)}px, 0px)${Kt?` rotate(${Kt.toFixed(2)}deg)`:""} scale(${Rt.toFixed(4)})`),M(Jt,"o","opacity",tt>.999?"":tt.toFixed(3)),M(Jt,"z","zIndex",String(Qt))}J&&m(Ax($i(Q/bp,0,1)))},D=C=>{var bt;if(l.raf=0,l.destroyed)return;const A=t.current,H=l.last?$i((C-l.last)/1e3,0,.1):0;l.last=C;let q=!1;l.lut&&l.scale&&l.introStart===-1&&!l.introDone&&l.visible&&(A.intro&&!l.reduced?l.introStart=C:l.introDone=!0,s.removeAttribute("data-intro")),l.introStart>=0&&((C-l.introStart)/1e3>=bp?(l.introStart=-2,l.introDone=!0,m(1)):q=!0);const lt=A.paused||l.reduced?0:l.hovered?$i(A.hoverSpeed,0,1):1;if(l.speed!==lt&&(l.speed+=(lt-l.speed)*(1-Math.exp(-H/.35)),Math.abs(l.speed-lt)<.002&&(l.speed=lt),q=!0),l.speed>0&&A.duration>0&&(l.lap+=H*l.speed/A.duration,q=!0),(bt=l.drag)!=null&&bt.active)q=!0;else if(l.seek){l.seek.t=Math.min(1,l.seek.t+H/l.seek.dur);const St=l.seek.t<.5?4*l.seek.t**3:1-Math.pow(-2*l.seek.t+2,3)/2;l.manual=l.seek.from+l.seek.delta*St,l.seek.t>=1&&(l.seek=null),q=!0}else l.glide&&(l.manual+=l.glide*H,l.glide*=Math.exp(-H/.7),Math.abs(l.glide)<4e-4&&(l.glide=0),q=!0);E(C);const At=Math.floor(l.lap);At&&(l.lap-=At),!l.drag&&!l.seek&&(l.manual-=Math.floor(l.manual)),q&&l.visible&&!l.destroyed&&(l.raf=requestAnimationFrame(D))},x=()=>{l.raf||l.destroyed||!l.visible||(l.last=0,l.raf=requestAnimationFrame(D))},S=C=>{const A=s.getBoundingClientRect(),H=s.offsetWidth&&A.width/s.offsetWidth||1;return[(C.clientX-A.left)/H,(C.clientY-A.top)/H]},F=()=>{if(!l.lut||!l.scale)return 0;const C=p(l.front-3/Gi),H=(p(l.front+3/Gi)[0]-C[0])/(6/Gi)*l.scale,q=l.length*l.scale*.35;return Math.abs(H)<q?Math.sign(H||1)*q:H},z=C=>{const A=C instanceof Element?C.closest("[data-orbit-item]"):null;return A&&s.contains(A)?Number(A.getAttribute("data-orbit-item")):-1},U=C=>{if(!l.lut||C<0)return;const A=g()+_(C,l.items.length),H=Tx(l.front-A);l.glide=0,l.seek={from:l.manual,delta:H,t:0,dur:.45+Math.abs(H)*1.4},x()},k=()=>{l.hovered=!0,x()},V=()=>{l.hovered=!1,l.hoverIndex=-1,x()},I=C=>{const A=z(C.target);A!==l.hoverIndex&&(l.hoverIndex=A,l.lut&&E(performance.now()))},B=C=>{if(!t.current.draggable||C.pointerType==="mouse"&&C.button!==0||C.target instanceof Element&&C.target.closest("[data-orbit-center]"))return;const[H,q]=S(C);l.drag={id:C.pointerId,x:H,y:q,active:!1,samples:[],rate:F(),anchor:0,manual:0}},L=C=>{const A=l.drag;if(!A||C.pointerId!==A.id)return;const[H,q]=S(C),lt=H-A.x;if(!A.active){if(Math.abs(lt)<t3)return;if(Math.abs(q-A.y)>Math.abs(lt)){l.drag=null;return}A.active=!0,A.anchor=lt,A.manual=l.manual,l.seek=null,l.glide=0;try{s.setPointerCapture(C.pointerId)}catch{}s.setAttribute("data-dragging","")}A.rate&&(l.manual=A.manual+(lt-A.anchor)/A.rate);const At=performance.now();for(A.samples.push([At,lt]);A.samples.length>2&&At-A.samples[0][0]>100;)A.samples.shift();x()},T=(C,A)=>{const H=l.drag;if(!H||C.pointerId!==H.id||(l.drag=null,!H.active))return;s.removeAttribute("data-dragging");try{s.releasePointerCapture(C.pointerId)}catch{}const q=performance.now();l.suppressUntil=q+400;const lt=H.samples;if(!A&&lt.length>1&&H.rate){const[At,bt]=lt[0],[St,zt]=lt[lt.length-1];St>At&&q-St<80&&(l.glide=$i((zt-bt)/(St-At)*1e3/H.rate,-3,3))}x()},P=C=>T(C,!1),it=C=>T(C,!0),ft=C=>{var H;const A=t.current;C<0||(A.clickToFront&&U(C),(H=A.onItemClick)==null||H.call(A,C,A.sources[C]))},Tt=C=>{if(performance.now()<l.suppressUntil){C.preventDefault(),C.stopPropagation(),l.suppressUntil=0;return}ft(z(C.target))},st=C=>{if(C.key!=="Enter"&&C.key!==" ")return;const A=z(C.target);A<0||(C.preventDefault(),ft(A))},W=C=>{const A=z(C.target);A>=0&&t.current.clickToFront&&C.target instanceof Element&&C.target.matches(":focus-visible")&&U(A)},et=()=>{l.reduced=!!(r!=null&&r.matches),x()};s.addEventListener("pointerenter",k),s.addEventListener("pointerleave",V),s.addEventListener("pointerover",I),s.addEventListener("pointerdown",B),s.addEventListener("pointermove",L),s.addEventListener("pointerup",P),s.addEventListener("pointercancel",it),s.addEventListener("lostpointercapture",it),s.addEventListener("click",Tt),s.addEventListener("keydown",st),s.addEventListener("focusin",W),(ne=r==null?void 0:r.addEventListener)==null||ne.call(r,"change",et);let Z=null;typeof ResizeObserver<"u"&&(Z=new ResizeObserver(()=>{d(),E(performance.now()),x()}),Z.observe(s));let Et=null;typeof IntersectionObserver<"u"&&(Et=new IntersectionObserver(C=>{l.visible=C[C.length-1].isIntersecting,l.visible&&x()},{threshold:.05}),Et.observe(s));const wt=()=>{document.hidden||x()};return document.addEventListener("visibilitychange",wt),window.addEventListener("resize",x),{refresh:()=>{c(),h(),d(),E(performance.now()),x()},wake:x,destroy:()=>{var C;l.destroyed=!0,l.raf&&cancelAnimationFrame(l.raf),s.removeEventListener("pointerenter",k),s.removeEventListener("pointerleave",V),s.removeEventListener("pointerover",I),s.removeEventListener("pointerdown",B),s.removeEventListener("pointermove",L),s.removeEventListener("pointerup",P),s.removeEventListener("pointercancel",it),s.removeEventListener("lostpointercapture",it),s.removeEventListener("click",Tt),s.removeEventListener("keydown",st),s.removeEventListener("focusin",W),(C=r==null?void 0:r.removeEventListener)==null||C.call(r,"change",et),document.removeEventListener("visibilitychange",wt),window.removeEventListener("resize",x),Z==null||Z.disconnect(),Et==null||Et.disconnect()}}};function u3({images:s=[],altPrefix:t="Orbiting image",shape:i="ellipse",customPath:r,baseWidth:l=1400,radiusX:c=700,radiusY:h=170,radius:d=300,starPoints:m=5,starInnerRatio:p=.5,rotation:v=-8,duration:g=40,itemSize:_=64,direction:M="normal",fill:E=!0,width:D="100%",height:x="auto",className:S="",showPath:F=!1,pathColor:z="rgba(128,128,128,0.35)",pathWidth:U=2,pathDash:k=0,easing:V="linear",paused:I=!1,depth:B=.5,itemRadius:L=12,shadow:T=.3,hoverScale:P=1.08,hoverSpeed:it=.3,draggable:ft=!0,clickToFront:Tt=!0,onItemClick:st,alignToPath:W=!1,intro:et=!0,centerContent:Z}){const Et=fe.useRef(null),wt=fe.useRef(null),Ot=fe.useId().replace(/:/g,""),[te]=fe.useState(et),[ne,C]=fe.useState(null),A=l/2,H=fe.useMemo(()=>{switch(i){case"circle":return Mx(A,A,d);case"ellipse":return Tm(A,A,c,h);case"square":return e3(A,A,d*2);case"rectangle":return n3(A,A,c*2,h*2);case"triangle":return i3(A,A,d*2);case"star":return a3(A,A,d,d*p,m);case"heart":return r3(A,A,d*2);case"infinity":return s3(A,A,c*2,h*2);case"wave":return o3(A,A,c*2,h,3);case"custom":return r||Mx(A,A,d);default:return Tm(A,A,c,h)}},[i,r,A,c,h,d,m,p]),q=fe.useMemo(()=>s.map((O,yt)=>typeof O=="string"?{src:O,alt:`${t} ${yt+1}`}:{src:O.src,alt:O.alt??`${t} ${yt+1}`}),[s,t]),lt=!!st,At=fe.useRef(null);At.current={baseWidth:l,rotation:v,duration:g,itemSize:_,direction:M,fill:E,pathWidth:U,pathDash:k,easing:V,paused:I,depth:B,hoverScale:P,hoverSpeed:it,draggable:ft,clickToFront:Tt,onItemClick:st,alignToPath:W,intro:et,sources:q.map(O=>O.src)},xx(()=>{const O=c3(Et.current,At,C);return wt.current=O,()=>{O.destroy(),wt.current=null}},[]),xx(()=>{var O;(O=wt.current)==null||O.refresh()},[H,v,l,_,B,P,q.length,F,U,k,ne,x]),fe.useEffect(()=>{var O;(O=wt.current)==null||O.wake()});const bt=ne??l3({shape:i,radiusX:c,radiusY:h,radius:d,itemSize:_}),St=x==="auto"||x===void 0,zt=B>0&&!!Z;return Pt.jsxs("div",{ref:Et,className:`orbit-container ${S}`.trim(),style:{width:Ex(D),height:St?void 0:Ex(x),aspectRatio:St?String(bt):void 0,"--orbit-radius":typeof L=="number"?`${L/Math.max(1,_)*100}%`:L,"--orbit-shadow":String($i(T,0,1)),"--orbit-hover-scale":String(P)},"aria-hidden":lt?void 0:!0,"data-intro":te?"":void 0,"data-draggable":ft?"":void 0,children:[Pt.jsx("svg",{className:"orbit-path-svg","data-orbit-svg":"",preserveAspectRatio:"none",style:{zIndex:0,visibility:F?void 0:"hidden"},"aria-hidden":"true",children:Pt.jsx("path",{"data-orbit-path":"","data-orbit-stroke":"",d:H,fill:"none",stroke:z,strokeLinecap:"round",transform:`rotate(${v} ${A} ${A})`})}),F&&zt&&Pt.jsxs("svg",{className:"orbit-path-svg","data-orbit-svg":"",preserveAspectRatio:"none",style:{zIndex:105},"aria-hidden":"true",children:[Pt.jsx("defs",{children:Pt.jsx("clipPath",{id:Ot,clipPathUnits:"userSpaceOnUse",children:Pt.jsx("rect",{"data-orbit-clip":""})})}),Pt.jsx("g",{clipPath:`url(#${Ot})`,children:Pt.jsx("path",{"data-orbit-stroke":"",d:H,fill:"none",stroke:z,strokeLinecap:"round",transform:`rotate(${v} ${A} ${A})`})})]}),q.map((O,yt)=>Pt.jsx("div",{className:"orbit-item","data-orbit-item":yt,"data-clickable":Tt||lt?"":void 0,role:lt?"button":void 0,tabIndex:lt?0:void 0,"aria-label":lt?O.alt:void 0,children:Pt.jsx("div",{className:"orbit-item-inner",children:Pt.jsx("img",{src:O.src,alt:O.alt,draggable:!1,decoding:"async",className:"orbit-image"})})},yt)),Z&&Pt.jsx("div",{className:"orbit-center-content","data-orbit-center":"",children:Z})]})}function f3(){return Pt.jsxs("section",{id:"skills",className:"skills-section",children:[Pt.jsx(af,{num:"02 — 技能",title:"技术能力"}),Pt.jsx(Am,{className:"skills-orbit reveal",minHeight:360,rootMargin:"280px 0px",children:Pt.jsx(u3,{images:m1,shape:"ellipse",direction:"normal",easing:"linear",duration:36,depth:.45,showPath:!0,pathColor:"rgba(255,255,255,0.18)",pathWidth:1.2,itemSize:64,itemRadius:14,radiusX:480,radiusY:140,rotation:-8,shadow:.25,hoverScale:1.1,draggable:!0,clickToFront:!0,intro:!0,centerContent:Pt.jsx("span",{className:"skills-orbit-center",children:"Stack"})})})]})}const Rx={dark:{"--chroma-frame":"rgba(38, 35, 46, 0.66)","--chroma-frame-edge":"rgba(255, 255, 255, 0.08)","--chroma-frame-highlight":"rgba(255, 255, 255, 0.07)","--chroma-frame-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--chroma-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--chroma-tile-edge":"rgba(255, 255, 255, 0.07)","--chroma-tile-highlight":"rgba(255, 255, 255, 0.12)","--chroma-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--chroma-media-edge":"rgba(255, 255, 255, 0.06)","--chroma-well":"rgba(255, 255, 255, 0.08)","--chroma-ink":"#f4f4f5","--chroma-muted":"rgba(244, 244, 245, 0.55)","--chroma-hover":"brightness(1.12)","--chroma-press":"brightness(0.85)"},light:{"--chroma-frame":"rgba(240, 240, 243, 0.8)","--chroma-frame-edge":"rgba(24, 24, 27, 0.07)","--chroma-frame-highlight":"rgba(255, 255, 255, 0.95)","--chroma-frame-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--chroma-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--chroma-tile-edge":"rgba(24, 24, 27, 0.08)","--chroma-tile-highlight":"rgba(255, 255, 255, 1)","--chroma-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--chroma-media-edge":"rgba(24, 24, 27, 0.06)","--chroma-well":"rgba(24, 24, 27, 0.05)","--chroma-ink":"#27272a","--chroma-muted":"rgba(39, 39, 42, 0.55)","--chroma-hover":"brightness(0.97)","--chroma-press":"brightness(0.92)"}},h3=[{image:"https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?w=800&q=80&auto=format&fit=crop",title:"Golden Hour",subtitle:"Sky study",accent:"#ff8a4c"},{image:"https://images.unsplash.com/photo-1520930528075-4ea5ead759f5?w=800&q=80&auto=format&fit=crop",title:"Steel Arches",subtitle:"Sculpture",accent:"#ff5a36"},{image:"https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=800&q=80&auto=format&fit=crop",title:"Black Beach",subtitle:"Landscape",accent:"#a98bff"},{image:"https://images.unsplash.com/photo-1524400968894-6e997a66e03f?w=800&q=80&auto=format&fit=crop",title:"Cloud Front",subtitle:"Weather",accent:"#ffb27a"},{image:"https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800&q=80&auto=format&fit=crop",title:"Cumulus",subtitle:"Weather",accent:"#7cc4ff"}],hs=(s,t,i)=>Math.min(i,Math.max(t,s)),d3=s=>{const t=hs(1-s,0,.95),i=[];for(let r=0;r<=12;r++){const l=r/12,c=hs((l-t)/Math.max(1e-4,1-t),0,1),h=1-c*c*c*(c*(c*6-15)+10);i.push(`rgba(0, 0, 0, ${h.toFixed(3)}) ${(l*100).toFixed(1)}%`)}return i.join(", ")},p3=({items:s,columns:t=3,minCardWidth:i=180,gap:r=12,radius:l=260,softness:c=.6,damping:h=.45,fadeOut:d=.6,grayscale:m=1,dim:p=.12,glow:v=.5,borderGlow:g=1,reveal:_="spotlight",aspectRatio:M="3 / 2",cardRadius:E=22,showInfo:D=!0,frame:x=!1,theme:S="dark",className:F=""})=>{const z=fe.useRef(null),U=fe.useRef(null),k=fe.useRef(null),V=s!=null&&s.length?s:h3;U.current={damping:h,fadeOut:d,spotlight:_!=="card"},fe.useEffect(()=>{var Et;const B=z.current;if(!B)return;const L=((Et=window.matchMedia)==null?void 0:Et.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,T={x:0,y:0,tx:0,ty:0,power:0,target:0,primed:!1};let P=0,it=0;const ft=()=>{const wt=B.getBoundingClientRect();B.querySelectorAll("[data-chroma-area]").forEach(Ot=>{const te=Ot.getBoundingClientRect();Ot.style.setProperty("--chroma-ox",`${te.left-wt.left}px`),Ot.style.setProperty("--chroma-oy",`${te.top-wt.top}px`)})};k.current=ft;const Tt=wt=>{P=0;const Ot=U.current;if(!Ot)return;const te=it?Math.min(.05,(wt-it)/1e3):1/60;it=wt;const ne=L?1:1-Math.exp(-te/Math.max(.01,Ot.damping*.32));T.x+=(T.tx-T.x)*ne,T.y+=(T.ty-T.y)*ne;const C=T.target>T.power?.1:Math.max(.02,Ot.fadeOut*.35);T.power+=(T.target-T.power)*(L?1:1-Math.exp(-te/C)),B.style.setProperty("--chroma-x",`${T.x.toFixed(2)}px`),B.style.setProperty("--chroma-y",`${T.y.toFixed(2)}px`),B.style.setProperty("--chroma-power",T.power.toFixed(4)),Math.abs(T.tx-T.x)<.1&&Math.abs(T.ty-T.y)<.1&&Math.abs(T.target-T.power)<.002?(T.power=T.target,B.style.setProperty("--chroma-power",T.power.toFixed(4)),it=0):P=requestAnimationFrame(Tt)},st=()=>{P||(P=requestAnimationFrame(Tt))},W=wt=>{var te;if(!((te=U.current)!=null&&te.spotlight))return;const Ot=B.getBoundingClientRect();T.tx=wt.clientX-Ot.left,T.ty=wt.clientY-Ot.top,(!T.primed||T.power<.02)&&(T.x=T.tx,T.y=T.ty,T.primed=!0),T.target=1,st()},et=()=>{T.target=0,st()},Z=new ResizeObserver(ft);return Z.observe(B),B.addEventListener("pointermove",W),B.addEventListener("pointerdown",W),B.addEventListener("pointerleave",et),B.addEventListener("pointercancel",et),ft(),()=>{cancelAnimationFrame(P),Z.disconnect(),B.removeEventListener("pointermove",W),B.removeEventListener("pointerdown",W),B.removeEventListener("pointerleave",et),B.removeEventListener("pointercancel",et),k.current=null}},[]),fe.useLayoutEffect(()=>{var B;(B=k.current)==null||B.call(k)});const I={...Rx[S]??Rx.dark,"--chroma-cols":Math.max(1,Math.round(t)),"--chroma-min":`${Math.max(80,i)}px`,"--chroma-gap":`${Math.max(0,r)}px`,"--chroma-r":`${Math.max(20,l)}px`,"--chroma-stops":d3(hs(c,0,1)),"--chroma-gray":hs(m,0,1),"--chroma-dim":hs(p,0,.9),"--chroma-glow":hs(v,0,1),"--chroma-border":hs(g,0,1),"--chroma-fade":`${Math.max(0,d)}s`,"--chroma-ratio":M,"--chroma-radius":`${Math.max(0,E)}px`};return Pt.jsxs("div",{ref:z,className:`chroma-grid${x?" has-frame":""}${F?` ${F}`:""}`,"data-reveal":_==="card"?"card":"spotlight",style:I,children:[Pt.jsx("div",{className:"chroma-grid-inner",children:V.map((B,L)=>{const T=B.accent??B.borderColor??"#ffffff",P=`${B.title}-${L}`,it={"--chroma-accent":T},ft=B.alt||B.title||"",Tt=Pt.jsxs(Pt.Fragment,{children:[Pt.jsx("div",{className:"chroma-wash"}),Pt.jsxs("div",{className:"chroma-media",children:[Pt.jsx("img",{className:"chroma-mono",src:B.image,alt:"",draggable:!1,"aria-hidden":"true"}),Pt.jsx("img",{className:"chroma-color",src:B.image,alt:ft,draggable:!1}),Pt.jsx("div",{className:"chroma-media-rim"})]}),D&&(B.title||B.subtitle)&&Pt.jsxs("div",{className:"chroma-info",children:[B.title?Pt.jsx("div",{className:"chroma-title",children:B.title}):null,B.subtitle?Pt.jsx("div",{className:"chroma-subtitle",children:B.subtitle}):null]}),Pt.jsx("div",{className:"chroma-card-rim"}),Pt.jsx("div",{className:"chroma-card-glow"})]});return B.url?Pt.jsx("a",{className:"chroma-card","data-chroma-area":"",style:it,href:B.url,target:"_blank",rel:"noopener noreferrer",children:Tt},P):Pt.jsx("div",{className:"chroma-card","data-chroma-area":"",style:it,children:Tt},P)})}),x?Pt.jsx("div",{className:"chroma-frame-rim"}):null]})},m3=g1.map(s=>({image:s.image.replace("/900/1200","/640/480"),title:s.name,subtitle:s.tags,url:s.link&&s.link!=="#"?s.link:void 0,accent:s.accent,alt:`${s.name} — ${s.tags}`}));function g3(){return Pt.jsxs("section",{id:"work",className:"work-section",children:[Pt.jsx(af,{num:"03 — 作品",title:"精选项目"}),Pt.jsx(Am,{className:"work-gallery reveal",minHeight:320,rootMargin:"260px 0px",children:Pt.jsx(p3,{items:m3,columns:4,minCardWidth:160,gap:12,radius:180,softness:.5,damping:.55,reveal:"spotlight",theme:"dark",aspectRatio:"16 / 10",cardRadius:14,showInfo:!0})})]})}const v3=Array.from({length:15},(s,t)=>{const i=[1015,1025,1039,1043,1044,1050,1062,1069,1074,1080,1084,106,110,133,164];return{image:`https://picsum.photos/id/${i[t%i.length]}/600/400`,title:`Tile ${t+1}`,href:void 0}}),_3=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,y3=(s,t)=>{const i=(s*.6180339887+.35)%1*2-1;return 1+t*i},x3=({items:s=v3,columns:t=5,tileWidth:i=200,tileHeight:r=132,gap:l=18,radius:c=14,tilt:h=16,turn:d=-14,roll:m=0,perspective:p=1200,depth:v=120,speed:g=42,direction:_="up",variance:M=.45,parallax:E=.6,pauseOnHover:D=!1,lift:x=64,fade:S=.6,dim:F=.55,grayscale:z=!1,overlayColor:U="#060010",className:k="",style:V})=>{const I=fe.useRef(null),B=fe.useRef(null),L=fe.useRef([]),T=fe.useRef(null),P=fe.useRef([]),it=fe.useRef([]),ft=fe.useRef(-1),Tt=fe.useRef(!1),st=fe.useRef({x:0,y:0}),W=fe.useRef({x:0,y:0}),et=fe.useRef(null),[Z,Et]=fe.useState(600),[wt,Ot]=fe.useState(null),te=fe.useRef(null),[ne,C]=fe.useState(!1);fe.useEffect(()=>{C(_3());const J=window.matchMedia("(prefers-reduced-motion: reduce)"),Q=ht=>C(ht.matches);return J.addEventListener("change",Q),()=>J.removeEventListener("change",Q)},[]);const A=fe.useMemo(()=>{const J=Array.from({length:t},()=>[]);return s.forEach((Q,ht)=>J[ht%t].push(Q)),J.map(Q=>Q.length?Q:s.slice(0,1))},[s,t]),H=fe.useMemo(()=>{const J=r+l;return A.map(Q=>{const ht=Math.max(J,Q.length*J),xt=Math.max(2,Math.ceil(Z*1.6/ht)+1);return{copyHeight:ht,copies:xt}})},[A,r,l,Z]);fe.useLayoutEffect(()=>{if(!I.current)return;const J=new ResizeObserver(([Q])=>{Et(Q.contentRect.height||600)});return J.observe(I.current),()=>J.disconnect()},[]);const q=fe.useMemo(()=>{const J=_==="up"?1:-1;return A.map((Q,ht)=>{const xt=ht%2===0?1:-1;return g*y3(ht,M)*J*xt})},[A,g,_,M]);fe.useEffect(()=>{P.current=H.map((J,Q)=>J.copyHeight*(Q*.37%1)),it.current=A.map(()=>0)},[H,A]);const lt=fe.useCallback((J,Q)=>{const ht=B.current;ht&&(ht.style.transform=`translate(-50%, -50%) scale(1.18) rotateX(${h+Q}deg) rotateY(${d+J}deg) rotateZ(${m}deg) translateZ(${-v}px)`)},[h,d,m,v]);fe.useEffect(()=>{const J=I.current;let Q=!0;const ht=$t=>{if(T.current=null,!Q||document.hidden)return;et.current===null&&(et.current=$t);const N=Math.min(.05,Math.max(0,($t-et.current)/1e3));et.current=$t;const b=E*8,X=st.current.x*b,pt=-st.current.y*b,Rt=1-Math.exp(-N/.12);if(W.current.x+=(X-W.current.x)*Rt,W.current.y+=(pt-W.current.y)*Rt,lt(W.current.x,W.current.y),!ne)for(let tt=0;tt<L.current.length;tt++){const jt=H[tt];if(!jt)continue;const Kt=Tt.current&&D||ft.current===tt?0:1,Qt=q[tt]*Kt,Bt=1-Math.exp(-N/(Qt===0?.16:.28));it.current[tt]+=(Qt-it.current[tt])*Bt;let Zt=(P.current[tt]??0)+it.current[tt]*N;Zt=(Zt%jt.copyHeight+jt.copyHeight)%jt.copyHeight,P.current[tt]=Zt;const Vt=L.current[tt];Vt&&(Vt.style.transform=`translate3d(0, ${-Zt}px, 0)`)}Q&&!document.hidden&&(T.current=requestAnimationFrame(ht))},xt=()=>{T.current||!Q||document.hidden||(et.current=null,T.current=requestAnimationFrame(ht))},Nt=J&&typeof IntersectionObserver<"u"?new IntersectionObserver(([$t])=>{Q=$t.isIntersecting,Q?xt():T.current&&(cancelAnimationFrame(T.current),T.current=null,et.current=null)},{threshold:.05}):null;J&&Nt&&Nt.observe(J),xt();const Jt=()=>{document.hidden||xt()};return document.addEventListener("visibilitychange",Jt),()=>{T.current&&cancelAnimationFrame(T.current),T.current=null,et.current=null,Nt==null||Nt.disconnect(),document.removeEventListener("visibilitychange",Jt)}},[q,H,D,E,ne,lt]);const At=fe.useCallback((J,Q)=>{te.current=J,ft.current=Q,Ot(J)},[]),bt=fe.useCallback(()=>{te.current=null,ft.current=-1,Ot(null)},[]),St=fe.useCallback(J=>{var Jt;const Q=(Jt=I.current)==null?void 0:Jt.getBoundingClientRect();if(!Q)return;E>0&&!ne&&(st.current={x:(J.clientX-Q.left)/Q.width-.5,y:(J.clientY-Q.top)/Q.height-.5});const ht=document.elementFromPoint(J.clientX,J.clientY),xt=ht&&ht.closest?ht.closest("[data-tile-id]"):null;if(!xt)return;const Nt=xt.dataset.tileId;Nt!==te.current&&(te.current=Nt,ft.current=Number(xt.dataset.col),Ot(Nt))},[E,ne]),zt=fe.useCallback(()=>{Tt.current=!1,st.current={x:0,y:0},bt()},[bt]),O=fe.useMemo(()=>({"--dw-tile-w":`${i}px`,"--dw-tile-h":`${r}px`,"--dw-gap":`${l}px`,"--dw-radius":`${c}px`,"--dw-perspective":`${p}px`,"--dw-lift":`${x}px`,"--dw-dim":F,"--dw-gray":z?1:0,"--dw-overlay":U,"--dw-edge":`${Math.max(0,(1-S)*100)}%`,...V}),[i,r,l,c,p,x,F,z,U,S,V]),yt=(J,Q,ht)=>{const xt=Pt.jsxs("span",{className:"drift-wall__inner",children:[Pt.jsx("img",{src:J.image,alt:J.title??"",loading:"lazy",decoding:"async",draggable:!1}),Pt.jsx("span",{className:"drift-wall__overlay","aria-hidden":"true"})]}),Nt={className:`drift-wall__tile${wt===Q?" is-active":""}`,"data-tile-id":Q,"data-col":ht,onFocus:()=>At(Q,ht),onBlur:bt};return J.href?Pt.jsx("a",{href:J.href,target:"_blank",rel:"noreferrer noopener",...Nt,children:xt},Q):Pt.jsx("div",{tabIndex:0,role:"button","aria-label":J.title??"tile",...Nt,children:xt},Q)},mt=["drift-wall",ne?"drift-wall--reduced":"",k].filter(Boolean).join(" ");return Pt.jsx("div",{ref:I,className:mt,style:O,onPointerMove:St,onPointerEnter:()=>{Tt.current=!0},onPointerLeave:zt,role:"group","aria-label":"Drifting wall of tiles",children:Pt.jsx("div",{ref:B,className:"drift-wall__plane",children:A.map((J,Q)=>{const ht=H[Q],xt=Array.from({length:ht.copies});return Pt.jsx("div",{className:"drift-wall__col",children:Pt.jsx("div",{className:"drift-wall__track",ref:Nt=>L.current[Q]=Nt,children:xt.map((Nt,Jt)=>J.map(($t,N)=>yt($t,`${Q}-${Jt}-${N}`,Q)))})},`col-${Q}`)})})})};function S3(){return Pt.jsxs("section",{id:"contact",className:"contact-section",children:[Pt.jsx("div",{className:"contact-drift","aria-hidden":"true",children:Pt.jsx(x3,{columns:5,tileWidth:160,tileHeight:108,gap:14,radius:10,tilt:12,turn:-12,perspective:1100,depth:110,speed:28,direction:"up",variance:.4,parallax:.3,lift:40,fade:.7,dim:.45,overlayColor:"#0a0a0a"})}),Pt.jsxs("div",{className:"contact-content",children:[Pt.jsx(af,{num:"04 — 联系",title:"联系我"}),Pt.jsxs("p",{className:"contact-big reveal",children:["有合作意向？",Pt.jsx("br",{}),Pt.jsx("a",{href:"mailto:hello@example.com",children:"发邮件给我 →"})]}),Pt.jsx("div",{className:"social-links reveal",children:v1.map(s=>Pt.jsx("a",{href:s.href,children:s.name},s.name))})]})]})}function M3(){return Pt.jsxs("footer",{children:[Pt.jsx("span",{children:"© 2026 Frontend Developer Portfolio"}),Pt.jsx("a",{href:"#",className:"back-top",children:"↑ 回到顶部"}),Pt.jsx("span",{children:"Designed & Built with passion"})]})}function E3(){return h1(),Pt.jsxs(Pt.Fragment,{children:[Pt.jsx("div",{className:"scroll-progress"}),Pt.jsx(_1,{}),Pt.jsx(B1,{}),Pt.jsx(KC,{}),Pt.jsx(f3,{}),Pt.jsx(g3,{}),Pt.jsx(S3,{}),Pt.jsx(M3,{})]})}u1.createRoot(document.getElementById("root")).render(Pt.jsx(fe.StrictMode,{children:Pt.jsx(E3,{})}));
