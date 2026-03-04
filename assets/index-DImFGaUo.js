(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&u(S)}).observe(document,{childList:!0,subtree:!0});function l(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function u(m){if(m.ep)return;m.ep=!0;const w=l(m);fetch(m.href,w)}})();function vh(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ui={exports:{}},hn={},Yi={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function yh(){if(xp)return se;xp=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),S=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.iterator;function R(y){return y===null||typeof y!="object"?null:(y=T&&y[T]||y["@@iterator"],typeof y=="function"?y:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,U={};function Q(y,C,re){this.props=y,this.context=C,this.refs=U,this.updater=re||J}Q.prototype.isReactComponent={},Q.prototype.setState=function(y,C){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,C,"setState")},Q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function ge(){}ge.prototype=Q.prototype;function pe(y,C,re){this.props=y,this.context=C,this.refs=U,this.updater=re||J}var ae=pe.prototype=new ge;ae.constructor=pe,Z(ae,Q.prototype),ae.isPureReactComponent=!0;var O=Array.isArray,ee=Object.prototype.hasOwnProperty,Y={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function q(y,C,re){var oe,ce={},ie=null,ue=null;if(C!=null)for(oe in C.ref!==void 0&&(ue=C.ref),C.key!==void 0&&(ie=""+C.key),C)ee.call(C,oe)&&!L.hasOwnProperty(oe)&&(ce[oe]=C[oe]);var de=arguments.length-2;if(de===1)ce.children=re;else if(1<de){for(var ve=Array(de),Ee=0;Ee<de;Ee++)ve[Ee]=arguments[Ee+2];ce.children=ve}if(y&&y.defaultProps)for(oe in de=y.defaultProps,de)ce[oe]===void 0&&(ce[oe]=de[oe]);return{$$typeof:a,type:y,key:ie,ref:ue,props:ce,_owner:Y.current}}function we(y,C){return{$$typeof:a,type:y.type,key:C,ref:y.ref,props:y.props,_owner:y._owner}}function Le(y){return typeof y=="object"&&y!==null&&y.$$typeof===a}function le(y){var C={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(re){return C[re]})}var ze=/\/+/g;function Ce(y,C){return typeof y=="object"&&y!==null&&y.key!=null?le(""+y.key):C.toString(36)}function er(y,C,re,oe,ce){var ie=typeof y;(ie==="undefined"||ie==="boolean")&&(y=null);var ue=!1;if(y===null)ue=!0;else switch(ie){case"string":case"number":ue=!0;break;case"object":switch(y.$$typeof){case a:case c:ue=!0}}if(ue)return ue=y,ce=ce(ue),y=oe===""?"."+Ce(ue,0):oe,O(ce)?(re="",y!=null&&(re=y.replace(ze,"$&/")+"/"),er(ce,C,re,"",function(Ee){return Ee})):ce!=null&&(Le(ce)&&(ce=we(ce,re+(!ce.key||ue&&ue.key===ce.key?"":(""+ce.key).replace(ze,"$&/")+"/")+y)),C.push(ce)),1;if(ue=0,oe=oe===""?".":oe+":",O(y))for(var de=0;de<y.length;de++){ie=y[de];var ve=oe+Ce(ie,de);ue+=er(ie,C,re,ve,ce)}else if(ve=R(y),typeof ve=="function")for(y=ve.call(y),de=0;!(ie=y.next()).done;)ie=ie.value,ve=oe+Ce(ie,de++),ue+=er(ie,C,re,ve,ce);else if(ie==="object")throw C=String(y),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return ue}function sr(y,C,re){if(y==null)return y;var oe=[],ce=0;return er(y,oe,"","",function(ie){return C.call(re,ie,ce++)}),oe}function rr(y){if(y._status===-1){var C=y._result;C=C(),C.then(function(re){(y._status===0||y._status===-1)&&(y._status=1,y._result=re)},function(re){(y._status===0||y._status===-1)&&(y._status=2,y._result=re)}),y._status===-1&&(y._status=0,y._result=C)}if(y._status===1)return y._result.default;throw y._result}var ke={current:null},A={transition:null},W={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:A,ReactCurrentOwner:Y};function _(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:sr,forEach:function(y,C,re){sr(y,function(){C.apply(this,arguments)},re)},count:function(y){var C=0;return sr(y,function(){C++}),C},toArray:function(y){return sr(y,function(C){return C})||[]},only:function(y){if(!Le(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},se.Component=Q,se.Fragment=l,se.Profiler=m,se.PureComponent=pe,se.StrictMode=u,se.Suspense=x,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,se.act=_,se.cloneElement=function(y,C,re){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var oe=Z({},y.props),ce=y.key,ie=y.ref,ue=y._owner;if(C!=null){if(C.ref!==void 0&&(ie=C.ref,ue=Y.current),C.key!==void 0&&(ce=""+C.key),y.type&&y.type.defaultProps)var de=y.type.defaultProps;for(ve in C)ee.call(C,ve)&&!L.hasOwnProperty(ve)&&(oe[ve]=C[ve]===void 0&&de!==void 0?de[ve]:C[ve])}var ve=arguments.length-2;if(ve===1)oe.children=re;else if(1<ve){de=Array(ve);for(var Ee=0;Ee<ve;Ee++)de[Ee]=arguments[Ee+2];oe.children=de}return{$$typeof:a,type:y.type,key:ce,ref:ie,props:oe,_owner:ue}},se.createContext=function(y){return y={$$typeof:S,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:w,_context:y},y.Consumer=y},se.createElement=q,se.createFactory=function(y){var C=q.bind(null,y);return C.type=y,C},se.createRef=function(){return{current:null}},se.forwardRef=function(y){return{$$typeof:p,render:y}},se.isValidElement=Le,se.lazy=function(y){return{$$typeof:b,_payload:{_status:-1,_result:y},_init:rr}},se.memo=function(y,C){return{$$typeof:v,type:y,compare:C===void 0?null:C}},se.startTransition=function(y){var C=A.transition;A.transition={};try{y()}finally{A.transition=C}},se.unstable_act=_,se.useCallback=function(y,C){return ke.current.useCallback(y,C)},se.useContext=function(y){return ke.current.useContext(y)},se.useDebugValue=function(){},se.useDeferredValue=function(y){return ke.current.useDeferredValue(y)},se.useEffect=function(y,C){return ke.current.useEffect(y,C)},se.useId=function(){return ke.current.useId()},se.useImperativeHandle=function(y,C,re){return ke.current.useImperativeHandle(y,C,re)},se.useInsertionEffect=function(y,C){return ke.current.useInsertionEffect(y,C)},se.useLayoutEffect=function(y,C){return ke.current.useLayoutEffect(y,C)},se.useMemo=function(y,C){return ke.current.useMemo(y,C)},se.useReducer=function(y,C,re){return ke.current.useReducer(y,C,re)},se.useRef=function(y){return ke.current.useRef(y)},se.useState=function(y){return ke.current.useState(y)},se.useSyncExternalStore=function(y,C,re){return ke.current.useSyncExternalStore(y,C,re)},se.useTransition=function(){return ke.current.useTransition()},se.version="18.3.1",se}var hp;function cl(){return hp||(hp=1,Yi.exports=yh()),Yi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function bh(){if(mp)return hn;mp=1;var a=cl(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function S(p,x,v){var b,T={},R=null,J=null;v!==void 0&&(R=""+v),x.key!==void 0&&(R=""+x.key),x.ref!==void 0&&(J=x.ref);for(b in x)u.call(x,b)&&!w.hasOwnProperty(b)&&(T[b]=x[b]);if(p&&p.defaultProps)for(b in x=p.defaultProps,x)T[b]===void 0&&(T[b]=x[b]);return{$$typeof:c,type:p,key:R,ref:J,props:T,_owner:m.current}}return hn.Fragment=l,hn.jsx=S,hn.jsxs=S,hn}var fp;function wh(){return fp||(fp=1,Ui.exports=bh()),Ui.exports}var t=wh(),Pa={},Ki={exports:{}},hr={},Gi={exports:{}},Vi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function kh(){return gp||(gp=1,(function(a){function c(A,W){var _=A.length;A.push(W);e:for(;0<_;){var y=_-1>>>1,C=A[y];if(0<m(C,W))A[y]=W,A[_]=C,_=y;else break e}}function l(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var W=A[0],_=A.pop();if(_!==W){A[0]=_;e:for(var y=0,C=A.length,re=C>>>1;y<re;){var oe=2*(y+1)-1,ce=A[oe],ie=oe+1,ue=A[ie];if(0>m(ce,_))ie<C&&0>m(ue,ce)?(A[y]=ue,A[ie]=_,y=ie):(A[y]=ce,A[oe]=_,y=oe);else if(ie<C&&0>m(ue,_))A[y]=ue,A[ie]=_,y=ie;else break e}}return W}function m(A,W){var _=A.sortIndex-W.sortIndex;return _!==0?_:A.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;a.unstable_now=function(){return w.now()}}else{var S=Date,p=S.now();a.unstable_now=function(){return S.now()-p}}var x=[],v=[],b=1,T=null,R=3,J=!1,Z=!1,U=!1,Q=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(A){for(var W=l(v);W!==null;){if(W.callback===null)u(v);else if(W.startTime<=A)u(v),W.sortIndex=W.expirationTime,c(x,W);else break;W=l(v)}}function O(A){if(U=!1,ae(A),!Z)if(l(x)!==null)Z=!0,rr(ee);else{var W=l(v);W!==null&&ke(O,W.startTime-A)}}function ee(A,W){Z=!1,U&&(U=!1,ge(q),q=-1),J=!0;var _=R;try{for(ae(W),T=l(x);T!==null&&(!(T.expirationTime>W)||A&&!le());){var y=T.callback;if(typeof y=="function"){T.callback=null,R=T.priorityLevel;var C=y(T.expirationTime<=W);W=a.unstable_now(),typeof C=="function"?T.callback=C:T===l(x)&&u(x),ae(W)}else u(x);T=l(x)}if(T!==null)var re=!0;else{var oe=l(v);oe!==null&&ke(O,oe.startTime-W),re=!1}return re}finally{T=null,R=_,J=!1}}var Y=!1,L=null,q=-1,we=5,Le=-1;function le(){return!(a.unstable_now()-Le<we)}function ze(){if(L!==null){var A=a.unstable_now();Le=A;var W=!0;try{W=L(!0,A)}finally{W?Ce():(Y=!1,L=null)}}else Y=!1}var Ce;if(typeof pe=="function")Ce=function(){pe(ze)};else if(typeof MessageChannel!="undefined"){var er=new MessageChannel,sr=er.port2;er.port1.onmessage=ze,Ce=function(){sr.postMessage(null)}}else Ce=function(){Q(ze,0)};function rr(A){L=A,Y||(Y=!0,Ce())}function ke(A,W){q=Q(function(){A(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(A){A.callback=null},a.unstable_continueExecution=function(){Z||J||(Z=!0,rr(ee))},a.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<A?Math.floor(1e3/A):5},a.unstable_getCurrentPriorityLevel=function(){return R},a.unstable_getFirstCallbackNode=function(){return l(x)},a.unstable_next=function(A){switch(R){case 1:case 2:case 3:var W=3;break;default:W=R}var _=R;R=W;try{return A()}finally{R=_}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(A,W){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var _=R;R=A;try{return W()}finally{R=_}},a.unstable_scheduleCallback=function(A,W,_){var y=a.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?y+_:y):_=y,A){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=_+C,A={id:b++,callback:W,priorityLevel:A,startTime:_,expirationTime:C,sortIndex:-1},_>y?(A.sortIndex=_,c(v,A),l(x)===null&&A===l(v)&&(U?(ge(q),q=-1):U=!0,ke(O,_-y))):(A.sortIndex=C,c(x,A),Z||J||(Z=!0,rr(ee))),A},a.unstable_shouldYield=le,a.unstable_wrapCallback=function(A){var W=R;return function(){var _=R;R=W;try{return A.apply(this,arguments)}finally{R=_}}}})(Vi)),Vi}var vp;function jh(){return vp||(vp=1,Gi.exports=kh()),Gi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function Nh(){if(yp)return hr;yp=1;var a=cl(),c=jh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function w(e,r){S(e,r),S(e+"Capture",r)}function S(e,r){for(m[e]=r,e=0;e<r.length;e++)u.add(r[e])}var p=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),x=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},T={};function R(e){return x.call(T,e)?!0:x.call(b,e)?!1:v.test(e)?T[e]=!0:(b[e]=!0,!1)}function J(e,r,o,n){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z(e,r,o,n){if(r===null||typeof r=="undefined"||J(e,r,o,n))return!0;if(n)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function U(e,r,o,n,s,i,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=o,this.propertyName=e,this.type=r,this.sanitizeURL=i,this.removeEmptyString=d}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Q[r]=new U(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ge,pe);Q[r]=new U(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ge,pe);Q[r]=new U(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ge,pe);Q[r]=new U(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,r,o,n){var s=Q.hasOwnProperty(r)?Q[r]:null;(s!==null?s.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Z(r,o,s,n)&&(o=null),n||s===null?R(r)&&(o===null?e.removeAttribute(r):e.setAttribute(r,""+o)):s.mustUseProperty?e[s.propertyName]=o===null?s.type===3?!1:"":o:(r=s.attributeName,n=s.attributeNamespace,o===null?e.removeAttribute(r):(s=s.type,o=s===3||s===4&&o===!0?"":""+o,n?e.setAttributeNS(n,r,o):e.setAttribute(r,o))))}var O=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),Y=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),le=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),er=Symbol.for("react.suspense_list"),sr=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),A=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,y;function C(e){if(y===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);y=r&&r[1]||""}return`
`+y+e}var re=!1;function oe(e,r){if(!e||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(N){var n=N}Reflect.construct(e,[],r)}else{try{r.call()}catch(N){n=N}e.call(r.prototype)}else{try{throw Error()}catch(N){n=N}e()}}catch(N){if(N&&n&&typeof N.stack=="string"){for(var s=N.stack.split(`
`),i=n.stack.split(`
`),d=s.length-1,h=i.length-1;1<=d&&0<=h&&s[d]!==i[h];)h--;for(;1<=d&&0<=h;d--,h--)if(s[d]!==i[h]){if(d!==1||h!==1)do if(d--,h--,0>h||s[d]!==i[h]){var f=`
`+s[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=h);break}}}finally{re=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?C(e):""}function ce(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Y:return"Portal";case we:return"Profiler";case q:return"StrictMode";case Ce:return"Suspense";case er:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case ze:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sr:return r=e.displayName||null,r!==null?r:ie(e.type)||"Memo";case rr:r=e._payload,e=e._init;try{return ie(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ee(e){var r=ve(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof o!="undefined"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,i=o.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,r,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ot(e){e._valueTracker||(e._valueTracker=Ee(e))}function Ct(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var o=r.getValue(),n="";return e&&(n=ve(e)?e.checked?"true":"false":e.value),e=n,e!==o?(r.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,r){var o=r.checked;return _({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o!=null?o:e._wrapperState.initialChecked})}function bl(e,r){var o=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;o=de(r.value!=null?r.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function wl(e,r){r=r.checked,r!=null&&ae(e,"checked",r,!1)}function Za(e,r){wl(e,r);var o=de(r.value),n=r.type;if(o!=null)n==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?es(e,r.type,o):r.hasOwnProperty("defaultValue")&&es(e,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function kl(e,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,o||r===e.value||(e.value=r),e.defaultValue=r}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function es(e,r,o){(r!=="number"||Mr(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Io=Array.isArray;function Gt(e,r,o,n){if(e=e.options,r){r={};for(var s=0;s<o.length;s++)r["$"+o[s]]=!0;for(o=0;o<e.length;o++)s=r.hasOwnProperty("$"+e[o].value),e[o].selected!==s&&(e[o].selected=s),s&&n&&(e[o].defaultSelected=!0)}else{for(o=""+de(o),r=null,s=0;s<e.length;s++){if(e[s].value===o){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function rs(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return _({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jl(e,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(l(92));if(Io(o)){if(1<o.length)throw Error(l(93));o=o[0]}r=o}r==null&&(r=""),o=r}e._wrapperState={initialValue:de(o)}}function Nl(e,r){var o=de(r.value),n=de(r.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),r.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),n!=null&&(e.defaultValue=""+n)}function Sl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Tl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Tl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nn,Cl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,o,n,s){MSApp.execUnsafeLocalFunction(function(){return e(r,o,n,s)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Nn=Nn||document.createElement("div"),Nn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Eo(e,r){if(r){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=r;return}}e.textContent=r}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ku=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(e){ku.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Mo[r]=Mo[e]})});function Il(e,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Mo.hasOwnProperty(e)&&Mo[e]?(""+r).trim():r+"px"}function El(e,r){e=e.style;for(var o in r)if(r.hasOwnProperty(o)){var n=o.indexOf("--")===0,s=Il(o,r[o],n);o==="float"&&(o="cssFloat"),n?e.setProperty(o,s):e[o]=s}}var ju=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,r){if(r){if(ju[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function ns(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var as=null;function ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,Vt=null,Jt=null;function Ml(e){if(e=Xo(e)){if(typeof is!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Kn(r),is(e.stateNode,e.type,r))}}function Rl(e){Vt?Jt?Jt.push(e):Jt=[e]:Vt=e}function Pl(){if(Vt){var e=Vt,r=Jt;if(Jt=Vt=null,Ml(e),r)for(e=0;e<r.length;e++)Ml(r[e])}}function zl(e,r){return e(r)}function Al(){}var ls=!1;function Ll(e,r,o){if(ls)return e(r,o);ls=!0;try{return zl(e,r,o)}finally{ls=!1,(Vt!==null||Jt!==null)&&(Al(),Pl())}}function Ro(e,r){var o=e.stateNode;if(o===null)return null;var n=Kn(o);if(n===null)return null;o=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(l(231,r,typeof o));return o}var cs=!1;if(p)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{cs=!1}function Nu(e,r,o,n,s,i,d,h,f){var N=Array.prototype.slice.call(arguments,3);try{r.apply(o,N)}catch(E){this.onError(E)}}var zo=!1,Sn=null,Tn=!1,ds=null,Su={onError:function(e){zo=!0,Sn=e}};function Tu(e,r,o,n,s,i,d,h,f){zo=!1,Sn=null,Nu.apply(Su,arguments)}function Cu(e,r,o,n,s,i,d,h,f){if(Tu.apply(this,arguments),zo){if(zo){var N=Sn;zo=!1,Sn=null}else throw Error(l(198));Tn||(Tn=!0,ds=N)}}function It(e){var r=e,o=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(o=r.return),e=r.return;while(e)}return r.tag===3?o:null}function Ol(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function _l(e){if(It(e)!==e)throw Error(l(188))}function Iu(e){var r=e.alternate;if(!r){if(r=It(e),r===null)throw Error(l(188));return r!==e?null:e}for(var o=e,n=r;;){var s=o.return;if(s===null)break;var i=s.alternate;if(i===null){if(n=s.return,n!==null){o=n;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===o)return _l(s),e;if(i===n)return _l(s),r;i=i.sibling}throw Error(l(188))}if(o.return!==n.return)o=s,n=i;else{for(var d=!1,h=s.child;h;){if(h===o){d=!0,o=s,n=i;break}if(h===n){d=!0,n=s,o=i;break}h=h.sibling}if(!d){for(h=i.child;h;){if(h===o){d=!0,o=i,n=s;break}if(h===n){d=!0,n=i,o=s;break}h=h.sibling}if(!d)throw Error(l(189))}}if(o.alternate!==n)throw Error(l(190))}if(o.tag!==3)throw Error(l(188));return o.stateNode.current===o?e:r}function Bl(e){return e=Iu(e),e!==null?Fl(e):null}function Fl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Fl(e);if(r!==null)return r;e=e.sibling}return null}var Dl=c.unstable_scheduleCallback,Hl=c.unstable_cancelCallback,Eu=c.unstable_shouldYield,Mu=c.unstable_requestPaint,Oe=c.unstable_now,Ru=c.unstable_getCurrentPriorityLevel,ps=c.unstable_ImmediatePriority,ql=c.unstable_UserBlockingPriority,Cn=c.unstable_NormalPriority,Pu=c.unstable_LowPriority,$l=c.unstable_IdlePriority,In=null,Dr=null;function zu(e){if(Dr&&typeof Dr.onCommitFiberRoot=="function")try{Dr.onCommitFiberRoot(In,e,void 0,(e.current.flags&128)===128)}catch{}}var Rr=Math.clz32?Math.clz32:Ou,Au=Math.log,Lu=Math.LN2;function Ou(e){return e>>>=0,e===0?32:31-(Au(e)/Lu|0)|0}var En=64,Mn=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rn(e,r){var o=e.pendingLanes;if(o===0)return 0;var n=0,s=e.suspendedLanes,i=e.pingedLanes,d=o&268435455;if(d!==0){var h=d&~s;h!==0?n=Ao(h):(i&=d,i!==0&&(n=Ao(i)))}else d=o&~s,d!==0?n=Ao(d):i!==0&&(n=Ao(i));if(n===0)return 0;if(r!==0&&r!==n&&(r&s)===0&&(s=n&-n,i=r&-r,s>=i||s===16&&(i&4194240)!==0))return r;if((n&4)!==0&&(n|=o&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)o=31-Rr(r),s=1<<o,n|=e[o],r&=~s;return n}function _u(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bu(e,r){for(var o=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var d=31-Rr(i),h=1<<d,f=s[d];f===-1?((h&o)===0||(h&n)!==0)&&(s[d]=_u(h,r)):f<=r&&(e.expiredLanes|=h),i&=~h}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wl(){var e=En;return En<<=1,(En&4194240)===0&&(En=64),e}function xs(e){for(var r=[],o=0;31>o;o++)r.push(e);return r}function Lo(e,r,o){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Rr(r),e[r]=o}function Fu(e,r){var o=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<o;){var s=31-Rr(o),i=1<<s;r[s]=0,n[s]=-1,e[s]=-1,o&=~i}}function hs(e,r){var o=e.entangledLanes|=r;for(e=e.entanglements;o;){var n=31-Rr(o),s=1<<n;s&r|e[n]&r&&(e[n]|=r),o&=~s}}var ye=0;function Ul(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yl,ms,Kl,Gl,Vl,fs=!1,Pn=[],nt=null,at=null,st=null,Oo=new Map,_o=new Map,it=[],Du="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jl(e,r){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Oo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(r.pointerId)}}function Bo(e,r,o,n,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:r,domEventName:o,eventSystemFlags:n,nativeEvent:i,targetContainers:[s]},r!==null&&(r=Xo(r),r!==null&&ms(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function Hu(e,r,o,n,s){switch(r){case"focusin":return nt=Bo(nt,e,r,o,n,s),!0;case"dragenter":return at=Bo(at,e,r,o,n,s),!0;case"mouseover":return st=Bo(st,e,r,o,n,s),!0;case"pointerover":var i=s.pointerId;return Oo.set(i,Bo(Oo.get(i)||null,e,r,o,n,s)),!0;case"gotpointercapture":return i=s.pointerId,_o.set(i,Bo(_o.get(i)||null,e,r,o,n,s)),!0}return!1}function Ql(e){var r=Et(e.target);if(r!==null){var o=It(r);if(o!==null){if(r=o.tag,r===13){if(r=Ol(o),r!==null){e.blockedOn=r,Vl(e.priority,function(){Kl(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zn(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var o=vs(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var n=new o.constructor(o.type,o);as=n,o.target.dispatchEvent(n),as=null}else return r=Xo(o),r!==null&&ms(r),e.blockedOn=o,!1;r.shift()}return!0}function Xl(e,r,o){zn(e)&&o.delete(r)}function qu(){fs=!1,nt!==null&&zn(nt)&&(nt=null),at!==null&&zn(at)&&(at=null),st!==null&&zn(st)&&(st=null),Oo.forEach(Xl),_o.forEach(Xl)}function Fo(e,r){e.blockedOn===r&&(e.blockedOn=null,fs||(fs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,qu)))}function Do(e){function r(s){return Fo(s,e)}if(0<Pn.length){Fo(Pn[0],e);for(var o=1;o<Pn.length;o++){var n=Pn[o];n.blockedOn===e&&(n.blockedOn=null)}}for(nt!==null&&Fo(nt,e),at!==null&&Fo(at,e),st!==null&&Fo(st,e),Oo.forEach(r),_o.forEach(r),o=0;o<it.length;o++)n=it[o],n.blockedOn===e&&(n.blockedOn=null);for(;0<it.length&&(o=it[0],o.blockedOn===null);)Ql(o),o.blockedOn===null&&it.shift()}var Qt=O.ReactCurrentBatchConfig,An=!0;function $u(e,r,o,n){var s=ye,i=Qt.transition;Qt.transition=null;try{ye=1,gs(e,r,o,n)}finally{ye=s,Qt.transition=i}}function Wu(e,r,o,n){var s=ye,i=Qt.transition;Qt.transition=null;try{ye=4,gs(e,r,o,n)}finally{ye=s,Qt.transition=i}}function gs(e,r,o,n){if(An){var s=vs(e,r,o,n);if(s===null)Ls(e,r,n,Ln,o),Jl(e,n);else if(Hu(s,e,r,o,n))n.stopPropagation();else if(Jl(e,n),r&4&&-1<Du.indexOf(e)){for(;s!==null;){var i=Xo(s);if(i!==null&&Yl(i),i=vs(e,r,o,n),i===null&&Ls(e,r,n,Ln,o),i===s)break;s=i}s!==null&&n.stopPropagation()}else Ls(e,r,n,null,o)}}var Ln=null;function vs(e,r,o,n){if(Ln=null,e=ss(n),e=Et(e),e!==null)if(r=It(e),r===null)e=null;else if(o=r.tag,o===13){if(e=Ol(r),e!==null)return e;e=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Ln=e,null}function Zl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ru()){case ps:return 1;case ql:return 4;case Cn:case Pu:return 16;case $l:return 536870912;default:return 16}default:return 16}}var lt=null,ys=null,On=null;function ec(){if(On)return On;var e,r=ys,o=r.length,n,s="value"in lt?lt.value:lt.textContent,i=s.length;for(e=0;e<o&&r[e]===s[e];e++);var d=o-e;for(n=1;n<=d&&r[o-n]===s[i-n];n++);return On=s.slice(e,1<n?1-n:void 0)}function _n(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function rc(){return!1}function fr(e){function r(o,n,s,i,d){this._reactName=o,this._targetInst=s,this.type=n,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(o=e[h],this[h]=o?o(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bn:rc,this.isPropagationStopped=rc,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=fr(Xt),Ho=_({},Xt,{view:0,detail:0}),Uu=fr(Ho),ws,ks,qo,Fn=_({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qo&&(qo&&e.type==="mousemove"?(ws=e.screenX-qo.screenX,ks=e.screenY-qo.screenY):ks=ws=0,qo=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),tc=fr(Fn),Yu=_({},Fn,{dataTransfer:0}),Ku=fr(Yu),Gu=_({},Ho,{relatedTarget:0}),js=fr(Gu),Vu=_({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ju=fr(Vu),Qu=_({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xu=fr(Qu),Zu=_({},Xt,{data:0}),oc=fr(Zu),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=tx[e])?!!r[e]:!1}function Ns(){return ox}var nx=_({},Ho,{key:function(e){if(e.key){var r=ex[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=_n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?_n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ax=fr(nx),sx=_({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=fr(sx),ix=_({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),lx=fr(ix),cx=_({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=fr(cx),px=_({},Fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=fr(px),xx=[9,13,27,32],Ss=p&&"CompositionEvent"in window,$o=null;p&&"documentMode"in document&&($o=document.documentMode);var hx=p&&"TextEvent"in window&&!$o,ac=p&&(!Ss||$o&&8<$o&&11>=$o),sc=" ",ic=!1;function lc(e,r){switch(e){case"keyup":return xx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function mx(e,r){switch(e){case"compositionend":return cc(r);case"keypress":return r.which!==32?null:(ic=!0,sc);case"textInput":return e=r.data,e===sc&&ic?null:e;default:return null}}function fx(e,r){if(Zt)return e==="compositionend"||!Ss&&lc(e,r)?(e=ec(),On=ys=lt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ac&&r.locale!=="ko"?null:r.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!gx[e.type]:r==="textarea"}function pc(e,r,o,n){Rl(n),r=Wn(r,"onChange"),0<r.length&&(o=new bs("onChange","change",null,o,n),e.push({event:o,listeners:r}))}var Wo=null,Uo=null;function vx(e){Ec(e,0)}function Dn(e){var r=no(e);if(Ct(r))return e}function yx(e,r){if(e==="change")return r}var uc=!1;if(p){var Ts;if(p){var Cs="oninput"in document;if(!Cs){var xc=document.createElement("div");xc.setAttribute("oninput","return;"),Cs=typeof xc.oninput=="function"}Ts=Cs}else Ts=!1;uc=Ts&&(!document.documentMode||9<document.documentMode)}function hc(){Wo&&(Wo.detachEvent("onpropertychange",mc),Uo=Wo=null)}function mc(e){if(e.propertyName==="value"&&Dn(Uo)){var r=[];pc(r,Uo,e,ss(e)),Ll(vx,r)}}function bx(e,r,o){e==="focusin"?(hc(),Wo=r,Uo=o,Wo.attachEvent("onpropertychange",mc)):e==="focusout"&&hc()}function wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dn(Uo)}function kx(e,r){if(e==="click")return Dn(r)}function jx(e,r){if(e==="input"||e==="change")return Dn(r)}function Nx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Pr=typeof Object.is=="function"?Object.is:Nx;function Yo(e,r){if(Pr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var o=Object.keys(e),n=Object.keys(r);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++){var s=o[n];if(!x.call(r,s)||!Pr(e[s],r[s]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gc(e,r){var o=fc(e);e=0;for(var n;o;){if(o.nodeType===3){if(n=e+o.textContent.length,e<=r&&n>=r)return{node:o,offset:r-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=fc(o)}}function vc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?vc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function yc(){for(var e=window,r=Mr();r instanceof e.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)e=r.contentWindow;else break;r=Mr(e.document)}return r}function Is(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Sx(e){var r=yc(),o=e.focusedElem,n=e.selectionRange;if(r!==o&&o&&o.ownerDocument&&vc(o.ownerDocument.documentElement,o)){if(n!==null&&Is(o)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(e,o.value.length);else if(e=(r=o.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=o.textContent.length,i=Math.min(n.start,s);n=n.end===void 0?i:Math.min(n.end,s),!e.extend&&i>n&&(s=n,n=i,i=s),s=gc(o,i);var d=gc(o,n);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),i>n?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=o;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)e=r[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tx=p&&"documentMode"in document&&11>=document.documentMode,eo=null,Es=null,Ko=null,Ms=!1;function bc(e,r,o){var n=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ms||eo==null||eo!==Mr(n)||(n=eo,"selectionStart"in n&&Is(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ko&&Yo(Ko,n)||(Ko=n,n=Wn(Es,"onSelect"),0<n.length&&(r=new bs("onSelect","select",null,r,o),e.push({event:r,listeners:n}),r.target=eo)))}function Hn(e,r){var o={};return o[e.toLowerCase()]=r.toLowerCase(),o["Webkit"+e]="webkit"+r,o["Moz"+e]="moz"+r,o}var ro={animationend:Hn("Animation","AnimationEnd"),animationiteration:Hn("Animation","AnimationIteration"),animationstart:Hn("Animation","AnimationStart"),transitionend:Hn("Transition","TransitionEnd")},Rs={},wc={};p&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function qn(e){if(Rs[e])return Rs[e];if(!ro[e])return e;var r=ro[e],o;for(o in r)if(r.hasOwnProperty(o)&&o in wc)return Rs[e]=r[o];return e}var kc=qn("animationend"),jc=qn("animationiteration"),Nc=qn("animationstart"),Sc=qn("transitionend"),Tc=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ct(e,r){Tc.set(e,r),w(r,[e])}for(var Ps=0;Ps<Cc.length;Ps++){var zs=Cc[Ps],Cx=zs.toLowerCase(),Ix=zs[0].toUpperCase()+zs.slice(1);ct(Cx,"on"+Ix)}ct(kc,"onAnimationEnd"),ct(jc,"onAnimationIteration"),ct(Nc,"onAnimationStart"),ct("dblclick","onDoubleClick"),ct("focusin","onFocus"),ct("focusout","onBlur"),ct(Sc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Ic(e,r,o){var n=e.type||"unknown-event";e.currentTarget=o,Cu(n,r,void 0,e),e.currentTarget=null}function Ec(e,r){r=(r&4)!==0;for(var o=0;o<e.length;o++){var n=e[o],s=n.event;n=n.listeners;e:{var i=void 0;if(r)for(var d=n.length-1;0<=d;d--){var h=n[d],f=h.instance,N=h.currentTarget;if(h=h.listener,f!==i&&s.isPropagationStopped())break e;Ic(s,h,N),i=f}else for(d=0;d<n.length;d++){if(h=n[d],f=h.instance,N=h.currentTarget,h=h.listener,f!==i&&s.isPropagationStopped())break e;Ic(s,h,N),i=f}}}if(Tn)throw e=ds,Tn=!1,ds=null,e}function Ne(e,r){var o=r[Hs];o===void 0&&(o=r[Hs]=new Set);var n=e+"__bubble";o.has(n)||(Mc(r,e,2,!1),o.add(n))}function As(e,r,o){var n=0;r&&(n|=4),Mc(o,e,n,r)}var $n="_reactListening"+Math.random().toString(36).slice(2);function Vo(e){if(!e[$n]){e[$n]=!0,u.forEach(function(o){o!=="selectionchange"&&(Ex.has(o)||As(o,!1,e),As(o,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[$n]||(r[$n]=!0,As("selectionchange",!1,r))}}function Mc(e,r,o,n){switch(Zl(r)){case 1:var s=$u;break;case 4:s=Wu;break;default:s=gs}o=s.bind(null,r,o,e),s=void 0,!cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(r,o,{capture:!0,passive:s}):e.addEventListener(r,o,!0):s!==void 0?e.addEventListener(r,o,{passive:s}):e.addEventListener(r,o,!1)}function Ls(e,r,o,n,s){var i=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var h=n.stateNode.containerInfo;if(h===s||h.nodeType===8&&h.parentNode===s)break;if(d===4)for(d=n.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;d=d.return}for(;h!==null;){if(d=Et(h),d===null)return;if(f=d.tag,f===5||f===6){n=i=d;continue e}h=h.parentNode}}n=n.return}Ll(function(){var N=i,E=ss(o),M=[];e:{var I=Tc.get(e);if(I!==void 0){var B=bs,D=e;switch(e){case"keypress":if(_n(o)===0)break e;case"keydown":case"keyup":B=ax;break;case"focusin":D="focus",B=js;break;case"focusout":D="blur",B=js;break;case"beforeblur":case"afterblur":B=js;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ku;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=lx;break;case kc:case jc:case Nc:B=Ju;break;case Sc:B=dx;break;case"scroll":B=Uu;break;case"wheel":B=ux;break;case"copy":case"cut":case"paste":B=Xu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=nc}var H=(r&4)!==0,_e=!H&&e==="scroll",k=H?I!==null?I+"Capture":null:I;H=[];for(var g=N,j;g!==null;){j=g;var P=j.stateNode;if(j.tag===5&&P!==null&&(j=P,k!==null&&(P=Ro(g,k),P!=null&&H.push(Jo(g,P,j)))),_e)break;g=g.return}0<H.length&&(I=new B(I,D,null,o,E),M.push({event:I,listeners:H}))}}if((r&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",I&&o!==as&&(D=o.relatedTarget||o.fromElement)&&(Et(D)||D[Ur]))break e;if((B||I)&&(I=E.window===E?E:(I=E.ownerDocument)?I.defaultView||I.parentWindow:window,B?(D=o.relatedTarget||o.toElement,B=N,D=D?Et(D):null,D!==null&&(_e=It(D),D!==_e||D.tag!==5&&D.tag!==6)&&(D=null)):(B=null,D=N),B!==D)){if(H=tc,P="onMouseLeave",k="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(H=nc,P="onPointerLeave",k="onPointerEnter",g="pointer"),_e=B==null?I:no(B),j=D==null?I:no(D),I=new H(P,g+"leave",B,o,E),I.target=_e,I.relatedTarget=j,P=null,Et(E)===N&&(H=new H(k,g+"enter",D,o,E),H.target=j,H.relatedTarget=_e,P=H),_e=P,B&&D)r:{for(H=B,k=D,g=0,j=H;j;j=to(j))g++;for(j=0,P=k;P;P=to(P))j++;for(;0<g-j;)H=to(H),g--;for(;0<j-g;)k=to(k),j--;for(;g--;){if(H===k||k!==null&&H===k.alternate)break r;H=to(H),k=to(k)}H=null}else H=null;B!==null&&Rc(M,I,B,H,!1),D!==null&&_e!==null&&Rc(M,_e,D,H,!0)}}e:{if(I=N?no(N):window,B=I.nodeName&&I.nodeName.toLowerCase(),B==="select"||B==="input"&&I.type==="file")var $=yx;else if(dc(I))if(uc)$=jx;else{$=wx;var K=bx}else(B=I.nodeName)&&B.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&($=kx);if($&&($=$(e,N))){pc(M,$,o,E);break e}K&&K(e,I,N),e==="focusout"&&(K=I._wrapperState)&&K.controlled&&I.type==="number"&&es(I,"number",I.value)}switch(K=N?no(N):window,e){case"focusin":(dc(K)||K.contentEditable==="true")&&(eo=K,Es=N,Ko=null);break;case"focusout":Ko=Es=eo=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,bc(M,o,E);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":bc(M,o,E)}var G;if(Ss)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Zt?lc(e,o)&&(X="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(X="onCompositionStart");X&&(ac&&o.locale!=="ko"&&(Zt||X!=="onCompositionStart"?X==="onCompositionEnd"&&Zt&&(G=ec()):(lt=E,ys="value"in lt?lt.value:lt.textContent,Zt=!0)),K=Wn(N,X),0<K.length&&(X=new oc(X,e,null,o,E),M.push({event:X,listeners:K}),G?X.data=G:(G=cc(o),G!==null&&(X.data=G)))),(G=hx?mx(e,o):fx(e,o))&&(N=Wn(N,"onBeforeInput"),0<N.length&&(E=new oc("onBeforeInput","beforeinput",null,o,E),M.push({event:E,listeners:N}),E.data=G))}Ec(M,r)})}function Jo(e,r,o){return{instance:e,listener:r,currentTarget:o}}function Wn(e,r){for(var o=r+"Capture",n=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ro(e,o),i!=null&&n.unshift(Jo(e,i,s)),i=Ro(e,r),i!=null&&n.push(Jo(e,i,s))),e=e.return}return n}function to(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rc(e,r,o,n,s){for(var i=r._reactName,d=[];o!==null&&o!==n;){var h=o,f=h.alternate,N=h.stateNode;if(f!==null&&f===n)break;h.tag===5&&N!==null&&(h=N,s?(f=Ro(o,i),f!=null&&d.unshift(Jo(o,f,h))):s||(f=Ro(o,i),f!=null&&d.push(Jo(o,f,h)))),o=o.return}d.length!==0&&e.push({event:r,listeners:d})}var Mx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Pc(e){return(typeof e=="string"?e:""+e).replace(Mx,`
`).replace(Rx,"")}function Un(e,r,o){if(r=Pc(r),Pc(e)!==r&&o)throw Error(l(425))}function Yn(){}var Os=null,_s=null;function Bs(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof zc!="undefined"?function(e){return zc.resolve(null).then(e).catch(Ax)}:Fs;function Ax(e){setTimeout(function(){throw e})}function Ds(e,r){var o=r,n=0;do{var s=o.nextSibling;if(e.removeChild(o),s&&s.nodeType===8)if(o=s.data,o==="/$"){if(n===0){e.removeChild(s),Do(r);return}n--}else o!=="$"&&o!=="$?"&&o!=="$!"||n++;o=s}while(o);Do(r)}function dt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ac(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return e;r--}else o==="/$"&&r++}e=e.previousSibling}return null}var oo=Math.random().toString(36).slice(2),Hr="__reactFiber$"+oo,Qo="__reactProps$"+oo,Ur="__reactContainer$"+oo,Hs="__reactEvents$"+oo,Lx="__reactListeners$"+oo,Ox="__reactHandles$"+oo;function Et(e){var r=e[Hr];if(r)return r;for(var o=e.parentNode;o;){if(r=o[Ur]||o[Hr]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(e=Ac(e);e!==null;){if(o=e[Hr])return o;e=Ac(e)}return r}e=o,o=e.parentNode}return null}function Xo(e){return e=e[Hr]||e[Ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function no(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Kn(e){return e[Qo]||null}var qs=[],ao=-1;function pt(e){return{current:e}}function Se(e){0>ao||(e.current=qs[ao],qs[ao]=null,ao--)}function je(e,r){ao++,qs[ao]=e.current,e.current=r}var ut={},tr=pt(ut),cr=pt(!1),Mt=ut;function so(e,r){var o=e.type.contextTypes;if(!o)return ut;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in o)s[i]=r[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function dr(e){return e=e.childContextTypes,e!=null}function Gn(){Se(cr),Se(tr)}function Lc(e,r,o){if(tr.current!==ut)throw Error(l(168));je(tr,r),je(cr,o)}function Oc(e,r,o){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return o;n=n.getChildContext();for(var s in n)if(!(s in r))throw Error(l(108,ue(e)||"Unknown",s));return _({},o,n)}function Vn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ut,Mt=tr.current,je(tr,e),je(cr,cr.current),!0}function _c(e,r,o){var n=e.stateNode;if(!n)throw Error(l(169));o?(e=Oc(e,r,Mt),n.__reactInternalMemoizedMergedChildContext=e,Se(cr),Se(tr),je(tr,e)):Se(cr),je(cr,o)}var Yr=null,Jn=!1,$s=!1;function Bc(e){Yr===null?Yr=[e]:Yr.push(e)}function _x(e){Jn=!0,Bc(e)}function xt(){if(!$s&&Yr!==null){$s=!0;var e=0,r=ye;try{var o=Yr;for(ye=1;e<o.length;e++){var n=o[e];do n=n(!0);while(n!==null)}Yr=null,Jn=!1}catch(s){throw Yr!==null&&(Yr=Yr.slice(e+1)),Dl(ps,xt),s}finally{ye=r,$s=!1}}return null}var io=[],lo=0,Qn=null,Xn=0,kr=[],jr=0,Rt=null,Kr=1,Gr="";function Pt(e,r){io[lo++]=Xn,io[lo++]=Qn,Qn=e,Xn=r}function Fc(e,r,o){kr[jr++]=Kr,kr[jr++]=Gr,kr[jr++]=Rt,Rt=e;var n=Kr;e=Gr;var s=32-Rr(n)-1;n&=~(1<<s),o+=1;var i=32-Rr(r)+s;if(30<i){var d=s-s%5;i=(n&(1<<d)-1).toString(32),n>>=d,s-=d,Kr=1<<32-Rr(r)+s|o<<s|n,Gr=i+e}else Kr=1<<i|o<<s|n,Gr=e}function Ws(e){e.return!==null&&(Pt(e,1),Fc(e,1,0))}function Us(e){for(;e===Qn;)Qn=io[--lo],io[lo]=null,Xn=io[--lo],io[lo]=null;for(;e===Rt;)Rt=kr[--jr],kr[jr]=null,Gr=kr[--jr],kr[jr]=null,Kr=kr[--jr],kr[jr]=null}var gr=null,vr=null,Ie=!1,zr=null;function Dc(e,r){var o=Cr(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=e,r=e.deletions,r===null?(e.deletions=[o],e.flags|=16):r.push(o)}function Hc(e,r){switch(e.tag){case 5:var o=e.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,gr=e,vr=dt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,gr=e,vr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Rt!==null?{id:Kr,overflow:Gr}:null,e.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Cr(18,null,null,0),o.stateNode=r,o.return=e,e.child=o,gr=e,vr=null,!0):!1;default:return!1}}function Ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(Ie){var r=vr;if(r){var o=r;if(!Hc(e,r)){if(Ys(e))throw Error(l(418));r=dt(o.nextSibling);var n=gr;r&&Hc(e,r)?Dc(n,o):(e.flags=e.flags&-4097|2,Ie=!1,gr=e)}}else{if(Ys(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ie=!1,gr=e}}}function qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gr=e}function Zn(e){if(e!==gr)return!1;if(!Ie)return qc(e),Ie=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Bs(e.type,e.memoizedProps)),r&&(r=vr)){if(Ys(e))throw $c(),Error(l(418));for(;r;)Dc(e,r),r=dt(r.nextSibling)}if(qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(r===0){vr=dt(e.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}e=e.nextSibling}vr=null}}else vr=gr?dt(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=vr;e;)e=dt(e.nextSibling)}function co(){vr=gr=null,Ie=!1}function Gs(e){zr===null?zr=[e]:zr.push(e)}var Bx=O.ReactCurrentBatchConfig;function Zo(e,r,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(l(309));var n=o.stateNode}if(!n)throw Error(l(147,e));var s=n,i=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(d){var h=s.refs;d===null?delete h[i]:h[i]=d},r._stringRef=i,r)}if(typeof e!="string")throw Error(l(284));if(!o._owner)throw Error(l(290,e))}return e}function ea(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Wc(e){var r=e._init;return r(e._payload)}function Uc(e){function r(k,g){if(e){var j=k.deletions;j===null?(k.deletions=[g],k.flags|=16):j.push(g)}}function o(k,g){if(!e)return null;for(;g!==null;)r(k,g),g=g.sibling;return null}function n(k,g){for(k=new Map;g!==null;)g.key!==null?k.set(g.key,g):k.set(g.index,g),g=g.sibling;return k}function s(k,g){return k=wt(k,g),k.index=0,k.sibling=null,k}function i(k,g,j){return k.index=j,e?(j=k.alternate,j!==null?(j=j.index,j<g?(k.flags|=2,g):j):(k.flags|=2,g)):(k.flags|=1048576,g)}function d(k){return e&&k.alternate===null&&(k.flags|=2),k}function h(k,g,j,P){return g===null||g.tag!==6?(g=Fi(j,k.mode,P),g.return=k,g):(g=s(g,j),g.return=k,g)}function f(k,g,j,P){var $=j.type;return $===L?E(k,g,j.props.children,P,j.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===rr&&Wc($)===g.type)?(P=s(g,j.props),P.ref=Zo(k,g,j),P.return=k,P):(P=Na(j.type,j.key,j.props,null,k.mode,P),P.ref=Zo(k,g,j),P.return=k,P)}function N(k,g,j,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==j.containerInfo||g.stateNode.implementation!==j.implementation?(g=Di(j,k.mode,P),g.return=k,g):(g=s(g,j.children||[]),g.return=k,g)}function E(k,g,j,P,$){return g===null||g.tag!==7?(g=Dt(j,k.mode,P,$),g.return=k,g):(g=s(g,j),g.return=k,g)}function M(k,g,j){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Fi(""+g,k.mode,j),g.return=k,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ee:return j=Na(g.type,g.key,g.props,null,k.mode,j),j.ref=Zo(k,null,g),j.return=k,j;case Y:return g=Di(g,k.mode,j),g.return=k,g;case rr:var P=g._init;return M(k,P(g._payload),j)}if(Io(g)||W(g))return g=Dt(g,k.mode,j,null),g.return=k,g;ea(k,g)}return null}function I(k,g,j,P){var $=g!==null?g.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return $!==null?null:h(k,g,""+j,P);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ee:return j.key===$?f(k,g,j,P):null;case Y:return j.key===$?N(k,g,j,P):null;case rr:return $=j._init,I(k,g,$(j._payload),P)}if(Io(j)||W(j))return $!==null?null:E(k,g,j,P,null);ea(k,j)}return null}function B(k,g,j,P,$){if(typeof P=="string"&&P!==""||typeof P=="number")return k=k.get(j)||null,h(g,k,""+P,$);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ee:return k=k.get(P.key===null?j:P.key)||null,f(g,k,P,$);case Y:return k=k.get(P.key===null?j:P.key)||null,N(g,k,P,$);case rr:var K=P._init;return B(k,g,j,K(P._payload),$)}if(Io(P)||W(P))return k=k.get(j)||null,E(g,k,P,$,null);ea(g,P)}return null}function D(k,g,j,P){for(var $=null,K=null,G=g,X=g=0,Je=null;G!==null&&X<j.length;X++){G.index>X?(Je=G,G=null):Je=G.sibling;var he=I(k,G,j[X],P);if(he===null){G===null&&(G=Je);break}e&&G&&he.alternate===null&&r(k,G),g=i(he,g,X),K===null?$=he:K.sibling=he,K=he,G=Je}if(X===j.length)return o(k,G),Ie&&Pt(k,X),$;if(G===null){for(;X<j.length;X++)G=M(k,j[X],P),G!==null&&(g=i(G,g,X),K===null?$=G:K.sibling=G,K=G);return Ie&&Pt(k,X),$}for(G=n(k,G);X<j.length;X++)Je=B(G,k,X,j[X],P),Je!==null&&(e&&Je.alternate!==null&&G.delete(Je.key===null?X:Je.key),g=i(Je,g,X),K===null?$=Je:K.sibling=Je,K=Je);return e&&G.forEach(function(kt){return r(k,kt)}),Ie&&Pt(k,X),$}function H(k,g,j,P){var $=W(j);if(typeof $!="function")throw Error(l(150));if(j=$.call(j),j==null)throw Error(l(151));for(var K=$=null,G=g,X=g=0,Je=null,he=j.next();G!==null&&!he.done;X++,he=j.next()){G.index>X?(Je=G,G=null):Je=G.sibling;var kt=I(k,G,he.value,P);if(kt===null){G===null&&(G=Je);break}e&&G&&kt.alternate===null&&r(k,G),g=i(kt,g,X),K===null?$=kt:K.sibling=kt,K=kt,G=Je}if(he.done)return o(k,G),Ie&&Pt(k,X),$;if(G===null){for(;!he.done;X++,he=j.next())he=M(k,he.value,P),he!==null&&(g=i(he,g,X),K===null?$=he:K.sibling=he,K=he);return Ie&&Pt(k,X),$}for(G=n(k,G);!he.done;X++,he=j.next())he=B(G,k,X,he.value,P),he!==null&&(e&&he.alternate!==null&&G.delete(he.key===null?X:he.key),g=i(he,g,X),K===null?$=he:K.sibling=he,K=he);return e&&G.forEach(function(gh){return r(k,gh)}),Ie&&Pt(k,X),$}function _e(k,g,j,P){if(typeof j=="object"&&j!==null&&j.type===L&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ee:e:{for(var $=j.key,K=g;K!==null;){if(K.key===$){if($=j.type,$===L){if(K.tag===7){o(k,K.sibling),g=s(K,j.props.children),g.return=k,k=g;break e}}else if(K.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===rr&&Wc($)===K.type){o(k,K.sibling),g=s(K,j.props),g.ref=Zo(k,K,j),g.return=k,k=g;break e}o(k,K);break}else r(k,K);K=K.sibling}j.type===L?(g=Dt(j.props.children,k.mode,P,j.key),g.return=k,k=g):(P=Na(j.type,j.key,j.props,null,k.mode,P),P.ref=Zo(k,g,j),P.return=k,k=P)}return d(k);case Y:e:{for(K=j.key;g!==null;){if(g.key===K)if(g.tag===4&&g.stateNode.containerInfo===j.containerInfo&&g.stateNode.implementation===j.implementation){o(k,g.sibling),g=s(g,j.children||[]),g.return=k,k=g;break e}else{o(k,g);break}else r(k,g);g=g.sibling}g=Di(j,k.mode,P),g.return=k,k=g}return d(k);case rr:return K=j._init,_e(k,g,K(j._payload),P)}if(Io(j))return D(k,g,j,P);if(W(j))return H(k,g,j,P);ea(k,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,g!==null&&g.tag===6?(o(k,g.sibling),g=s(g,j),g.return=k,k=g):(o(k,g),g=Fi(j,k.mode,P),g.return=k,k=g),d(k)):o(k,g)}return _e}var po=Uc(!0),Yc=Uc(!1),ra=pt(null),ta=null,uo=null,Vs=null;function Js(){Vs=uo=ta=null}function Qs(e){var r=ra.current;Se(ra),e._currentValue=r}function Xs(e,r,o){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===o)break;e=e.return}}function xo(e,r){ta=e,Vs=uo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(pr=!0),e.firstContext=null)}function Nr(e){var r=e._currentValue;if(Vs!==e)if(e={context:e,memoizedValue:r,next:null},uo===null){if(ta===null)throw Error(l(308));uo=e,ta.dependencies={lanes:0,firstContext:e}}else uo=uo.next=e;return r}var zt=null;function Zs(e){zt===null?zt=[e]:zt.push(e)}function Kc(e,r,o,n){var s=r.interleaved;return s===null?(o.next=o,Zs(r)):(o.next=s.next,s.next=o),r.interleaved=o,Vr(e,n)}function Vr(e,r){e.lanes|=r;var o=e.alternate;for(o!==null&&(o.lanes|=r),o=e,e=e.return;e!==null;)e.childLanes|=r,o=e.alternate,o!==null&&(o.childLanes|=r),o=e,e=e.return;return o.tag===3?o.stateNode:null}var ht=!1;function ei(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function mt(e,r,o){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(xe&2)!==0){var s=n.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r,Vr(e,o)}return s=n.interleaved,s===null?(r.next=r,Zs(n)):(r.next=s.next,s.next=r),n.interleaved=r,Vr(e,o)}function oa(e,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,hs(e,o)}}function Vc(e,r){var o=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,o===n)){var s=null,i=null;if(o=o.firstBaseUpdate,o!==null){do{var d={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};i===null?s=i=d:i=i.next=d,o=o.next}while(o!==null);i===null?s=i=r:i=i.next=r}else s=i=r;o={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=r:e.next=r,o.lastBaseUpdate=r}function na(e,r,o,n){var s=e.updateQueue;ht=!1;var i=s.firstBaseUpdate,d=s.lastBaseUpdate,h=s.shared.pending;if(h!==null){s.shared.pending=null;var f=h,N=f.next;f.next=null,d===null?i=N:d.next=N,d=f;var E=e.alternate;E!==null&&(E=E.updateQueue,h=E.lastBaseUpdate,h!==d&&(h===null?E.firstBaseUpdate=N:h.next=N,E.lastBaseUpdate=f))}if(i!==null){var M=s.baseState;d=0,E=N=f=null,h=i;do{var I=h.lane,B=h.eventTime;if((n&I)===I){E!==null&&(E=E.next={eventTime:B,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var D=e,H=h;switch(I=r,B=o,H.tag){case 1:if(D=H.payload,typeof D=="function"){M=D.call(B,M,I);break e}M=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=H.payload,I=typeof D=="function"?D.call(B,M,I):D,I==null)break e;M=_({},M,I);break e;case 2:ht=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,I=s.effects,I===null?s.effects=[h]:I.push(h))}else B={eventTime:B,lane:I,tag:h.tag,payload:h.payload,callback:h.callback,next:null},E===null?(N=E=B,f=M):E=E.next=B,d|=I;if(h=h.next,h===null){if(h=s.shared.pending,h===null)break;I=h,h=I.next,I.next=null,s.lastBaseUpdate=I,s.shared.pending=null}}while(!0);if(E===null&&(f=M),s.baseState=f,s.firstBaseUpdate=N,s.lastBaseUpdate=E,r=s.shared.interleaved,r!==null){s=r;do d|=s.lane,s=s.next;while(s!==r)}else i===null&&(s.shared.lanes=0);Ot|=d,e.lanes=d,e.memoizedState=M}}function Jc(e,r,o){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],s=n.callback;if(s!==null){if(n.callback=null,n=o,typeof s!="function")throw Error(l(191,s));s.call(n)}}}var en={},qr=pt(en),rn=pt(en),tn=pt(en);function At(e){if(e===en)throw Error(l(174));return e}function ri(e,r){switch(je(tn,r),je(rn,e),je(qr,en),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ts(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=ts(r,e)}Se(qr),je(qr,r)}function ho(){Se(qr),Se(rn),Se(tn)}function Qc(e){At(tn.current);var r=At(qr.current),o=ts(r,e.type);r!==o&&(je(rn,e),je(qr,o))}function ti(e){rn.current===e&&(Se(qr),Se(rn))}var Me=pt(0);function aa(e){for(var r=e;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var oi=[];function ni(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var sa=O.ReactCurrentDispatcher,ai=O.ReactCurrentBatchConfig,Lt=0,Re=null,$e=null,Ge=null,ia=!1,on=!1,nn=0,Fx=0;function or(){throw Error(l(321))}function si(e,r){if(r===null)return!1;for(var o=0;o<r.length&&o<e.length;o++)if(!Pr(e[o],r[o]))return!1;return!0}function ii(e,r,o,n,s,i){if(Lt=i,Re=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,sa.current=e===null||e.memoizedState===null?$x:Wx,e=o(n,s),on){i=0;do{if(on=!1,nn=0,25<=i)throw Error(l(301));i+=1,Ge=$e=null,r.updateQueue=null,sa.current=Ux,e=o(n,s)}while(on)}if(sa.current=da,r=$e!==null&&$e.next!==null,Lt=0,Ge=$e=Re=null,ia=!1,r)throw Error(l(300));return e}function li(){var e=nn!==0;return nn=0,e}function $r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Re.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Sr(){if($e===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var r=Ge===null?Re.memoizedState:Ge.next;if(r!==null)Ge=r,$e=e;else{if(e===null)throw Error(l(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ge===null?Re.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function an(e,r){return typeof r=="function"?r(e):r}function ci(e){var r=Sr(),o=r.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=e;var n=$e,s=n.baseQueue,i=o.pending;if(i!==null){if(s!==null){var d=s.next;s.next=i.next,i.next=d}n.baseQueue=s=i,o.pending=null}if(s!==null){i=s.next,n=n.baseState;var h=d=null,f=null,N=i;do{var E=N.lane;if((Lt&E)===E)f!==null&&(f=f.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),n=N.hasEagerState?N.eagerState:e(n,N.action);else{var M={lane:E,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};f===null?(h=f=M,d=n):f=f.next=M,Re.lanes|=E,Ot|=E}N=N.next}while(N!==null&&N!==i);f===null?d=n:f.next=h,Pr(n,r.memoizedState)||(pr=!0),r.memoizedState=n,r.baseState=d,r.baseQueue=f,o.lastRenderedState=n}if(e=o.interleaved,e!==null){s=e;do i=s.lane,Re.lanes|=i,Ot|=i,s=s.next;while(s!==e)}else s===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function di(e){var r=Sr(),o=r.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=e;var n=o.dispatch,s=o.pending,i=r.memoizedState;if(s!==null){o.pending=null;var d=s=s.next;do i=e(i,d.action),d=d.next;while(d!==s);Pr(i,r.memoizedState)||(pr=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),o.lastRenderedState=i}return[i,n]}function Xc(){}function Zc(e,r){var o=Re,n=Sr(),s=r(),i=!Pr(n.memoizedState,s);if(i&&(n.memoizedState=s,pr=!0),n=n.queue,pi(td.bind(null,o,n,e),[e]),n.getSnapshot!==r||i||Ge!==null&&Ge.memoizedState.tag&1){if(o.flags|=2048,sn(9,rd.bind(null,o,n,s,r),void 0,null),Ve===null)throw Error(l(349));(Lt&30)!==0||ed(o,r,s)}return s}function ed(e,r,o){e.flags|=16384,e={getSnapshot:r,value:o},r=Re.updateQueue,r===null?(r={lastEffect:null,stores:null},Re.updateQueue=r,r.stores=[e]):(o=r.stores,o===null?r.stores=[e]:o.push(e))}function rd(e,r,o,n){r.value=o,r.getSnapshot=n,od(r)&&nd(e)}function td(e,r,o){return o(function(){od(r)&&nd(e)})}function od(e){var r=e.getSnapshot;e=e.value;try{var o=r();return!Pr(e,o)}catch{return!0}}function nd(e){var r=Vr(e,1);r!==null&&_r(r,e,1,-1)}function ad(e){var r=$r();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:e},r.queue=e,e=e.dispatch=qx.bind(null,Re,e),[r.memoizedState,e]}function sn(e,r,o,n){return e={tag:e,create:r,destroy:o,deps:n,next:null},r=Re.updateQueue,r===null?(r={lastEffect:null,stores:null},Re.updateQueue=r,r.lastEffect=e.next=e):(o=r.lastEffect,o===null?r.lastEffect=e.next=e:(n=o.next,o.next=e,e.next=n,r.lastEffect=e)),e}function sd(){return Sr().memoizedState}function la(e,r,o,n){var s=$r();Re.flags|=e,s.memoizedState=sn(1|r,o,void 0,n===void 0?null:n)}function ca(e,r,o,n){var s=Sr();n=n===void 0?null:n;var i=void 0;if($e!==null){var d=$e.memoizedState;if(i=d.destroy,n!==null&&si(n,d.deps)){s.memoizedState=sn(r,o,i,n);return}}Re.flags|=e,s.memoizedState=sn(1|r,o,i,n)}function id(e,r){return la(8390656,8,e,r)}function pi(e,r){return ca(2048,8,e,r)}function ld(e,r){return ca(4,2,e,r)}function cd(e,r){return ca(4,4,e,r)}function dd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function pd(e,r,o){return o=o!=null?o.concat([e]):null,ca(4,4,dd.bind(null,r,e),o)}function ui(){}function ud(e,r){var o=Sr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&si(r,n[1])?n[0]:(o.memoizedState=[e,r],e)}function xd(e,r){var o=Sr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&si(r,n[1])?n[0]:(e=e(),o.memoizedState=[e,r],e)}function hd(e,r,o){return(Lt&21)===0?(e.baseState&&(e.baseState=!1,pr=!0),e.memoizedState=o):(Pr(o,r)||(o=Wl(),Re.lanes|=o,Ot|=o,e.baseState=!0),r)}function Dx(e,r){var o=ye;ye=o!==0&&4>o?o:4,e(!0);var n=ai.transition;ai.transition={};try{e(!1),r()}finally{ye=o,ai.transition=n}}function md(){return Sr().memoizedState}function Hx(e,r,o){var n=yt(e);if(o={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null},fd(e))gd(r,o);else if(o=Kc(e,r,o,n),o!==null){var s=lr();_r(o,e,n,s),vd(o,r,n)}}function qx(e,r,o){var n=yt(e),s={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null};if(fd(e))gd(r,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var d=r.lastRenderedState,h=i(d,o);if(s.hasEagerState=!0,s.eagerState=h,Pr(h,d)){var f=r.interleaved;f===null?(s.next=s,Zs(r)):(s.next=f.next,f.next=s),r.interleaved=s;return}}catch{}finally{}o=Kc(e,r,s,n),o!==null&&(s=lr(),_r(o,e,n,s),vd(o,r,n))}}function fd(e){var r=e.alternate;return e===Re||r!==null&&r===Re}function gd(e,r){on=ia=!0;var o=e.pending;o===null?r.next=r:(r.next=o.next,o.next=r),e.pending=r}function vd(e,r,o){if((o&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,hs(e,o)}}var da={readContext:Nr,useCallback:or,useContext:or,useEffect:or,useImperativeHandle:or,useInsertionEffect:or,useLayoutEffect:or,useMemo:or,useReducer:or,useRef:or,useState:or,useDebugValue:or,useDeferredValue:or,useTransition:or,useMutableSource:or,useSyncExternalStore:or,useId:or,unstable_isNewReconciler:!1},$x={readContext:Nr,useCallback:function(e,r){return $r().memoizedState=[e,r===void 0?null:r],e},useContext:Nr,useEffect:id,useImperativeHandle:function(e,r,o){return o=o!=null?o.concat([e]):null,la(4194308,4,dd.bind(null,r,e),o)},useLayoutEffect:function(e,r){return la(4194308,4,e,r)},useInsertionEffect:function(e,r){return la(4,2,e,r)},useMemo:function(e,r){var o=$r();return r=r===void 0?null:r,e=e(),o.memoizedState=[e,r],e},useReducer:function(e,r,o){var n=$r();return r=o!==void 0?o(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Hx.bind(null,Re,e),[n.memoizedState,e]},useRef:function(e){var r=$r();return e={current:e},r.memoizedState=e},useState:ad,useDebugValue:ui,useDeferredValue:function(e){return $r().memoizedState=e},useTransition:function(){var e=ad(!1),r=e[0];return e=Dx.bind(null,e[1]),$r().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,o){var n=Re,s=$r();if(Ie){if(o===void 0)throw Error(l(407));o=o()}else{if(o=r(),Ve===null)throw Error(l(349));(Lt&30)!==0||ed(n,r,o)}s.memoizedState=o;var i={value:o,getSnapshot:r};return s.queue=i,id(td.bind(null,n,i,e),[e]),n.flags|=2048,sn(9,rd.bind(null,n,i,o,r),void 0,null),o},useId:function(){var e=$r(),r=Ve.identifierPrefix;if(Ie){var o=Gr,n=Kr;o=(n&~(1<<32-Rr(n)-1)).toString(32)+o,r=":"+r+"R"+o,o=nn++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Fx++,r=":"+r+"r"+o.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Wx={readContext:Nr,useCallback:ud,useContext:Nr,useEffect:pi,useImperativeHandle:pd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:xd,useReducer:ci,useRef:sd,useState:function(){return ci(an)},useDebugValue:ui,useDeferredValue:function(e){var r=Sr();return hd(r,$e.memoizedState,e)},useTransition:function(){var e=ci(an)[0],r=Sr().memoizedState;return[e,r]},useMutableSource:Xc,useSyncExternalStore:Zc,useId:md,unstable_isNewReconciler:!1},Ux={readContext:Nr,useCallback:ud,useContext:Nr,useEffect:pi,useImperativeHandle:pd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:xd,useReducer:di,useRef:sd,useState:function(){return di(an)},useDebugValue:ui,useDeferredValue:function(e){var r=Sr();return $e===null?r.memoizedState=e:hd(r,$e.memoizedState,e)},useTransition:function(){var e=di(an)[0],r=Sr().memoizedState;return[e,r]},useMutableSource:Xc,useSyncExternalStore:Zc,useId:md,unstable_isNewReconciler:!1};function Ar(e,r){if(e&&e.defaultProps){r=_({},r),e=e.defaultProps;for(var o in e)r[o]===void 0&&(r[o]=e[o]);return r}return r}function xi(e,r,o,n){r=e.memoizedState,o=o(n,r),o=o==null?r:_({},r,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var pa={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,r,o){e=e._reactInternals;var n=lr(),s=yt(e),i=Jr(n,s);i.payload=r,o!=null&&(i.callback=o),r=mt(e,i,s),r!==null&&(_r(r,e,s,n),oa(r,e,s))},enqueueReplaceState:function(e,r,o){e=e._reactInternals;var n=lr(),s=yt(e),i=Jr(n,s);i.tag=1,i.payload=r,o!=null&&(i.callback=o),r=mt(e,i,s),r!==null&&(_r(r,e,s,n),oa(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var o=lr(),n=yt(e),s=Jr(o,n);s.tag=2,r!=null&&(s.callback=r),r=mt(e,s,n),r!==null&&(_r(r,e,n,o),oa(r,e,n))}};function yd(e,r,o,n,s,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,d):r.prototype&&r.prototype.isPureReactComponent?!Yo(o,n)||!Yo(s,i):!0}function bd(e,r,o){var n=!1,s=ut,i=r.contextType;return typeof i=="object"&&i!==null?i=Nr(i):(s=dr(r)?Mt:tr.current,n=r.contextTypes,i=(n=n!=null)?so(e,s):ut),r=new r(o,i),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=pa,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),r}function wd(e,r,o,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,n),r.state!==e&&pa.enqueueReplaceState(r,r.state,null)}function hi(e,r,o,n){var s=e.stateNode;s.props=o,s.state=e.memoizedState,s.refs={},ei(e);var i=r.contextType;typeof i=="object"&&i!==null?s.context=Nr(i):(i=dr(r)?Mt:tr.current,s.context=so(e,i)),s.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(xi(e,r,i,o),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&pa.enqueueReplaceState(s,s.state,null),na(e,o,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mo(e,r){try{var o="",n=r;do o+=ce(n),n=n.return;while(n);var s=o}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:r,stack:s,digest:null}}function mi(e,r,o){return{value:e,source:null,stack:o!=null?o:null,digest:r!=null?r:null}}function fi(e,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Yx=typeof WeakMap=="function"?WeakMap:Map;function kd(e,r,o){o=Jr(-1,o),o.tag=3,o.payload={element:null};var n=r.value;return o.callback=function(){va||(va=!0,Ri=n),fi(e,r)},o}function jd(e,r,o){o=Jr(-1,o),o.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=r.value;o.payload=function(){return n(s)},o.callback=function(){fi(e,r)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(o.callback=function(){fi(e,r),typeof n!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),o}function Nd(e,r,o){var n=e.pingCache;if(n===null){n=e.pingCache=new Yx;var s=new Set;n.set(r,s)}else s=n.get(r),s===void 0&&(s=new Set,n.set(r,s));s.has(o)||(s.add(o),e=sh.bind(null,e,r,o),r.then(e,e))}function Sd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Td(e,r,o,n,s){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Jr(-1,1),r.tag=2,mt(o,r,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Kx=O.ReactCurrentOwner,pr=!1;function ir(e,r,o,n){r.child=e===null?Yc(r,null,o,n):po(r,e.child,o,n)}function Cd(e,r,o,n,s){o=o.render;var i=r.ref;return xo(r,s),n=ii(e,r,o,n,i,s),o=li(),e!==null&&!pr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Qr(e,r,s)):(Ie&&o&&Ws(r),r.flags|=1,ir(e,r,n,s),r.child)}function Id(e,r,o,n,s){if(e===null){var i=o.type;return typeof i=="function"&&!Bi(i)&&i.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=i,Ed(e,r,i,n,s)):(e=Na(o.type,null,n,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(i=e.child,(e.lanes&s)===0){var d=i.memoizedProps;if(o=o.compare,o=o!==null?o:Yo,o(d,n)&&e.ref===r.ref)return Qr(e,r,s)}return r.flags|=1,e=wt(i,n),e.ref=r.ref,e.return=r,r.child=e}function Ed(e,r,o,n,s){if(e!==null){var i=e.memoizedProps;if(Yo(i,n)&&e.ref===r.ref)if(pr=!1,r.pendingProps=n=i,(e.lanes&s)!==0)(e.flags&131072)!==0&&(pr=!0);else return r.lanes=e.lanes,Qr(e,r,s)}return gi(e,r,o,n,s)}function Md(e,r,o){var n=r.pendingProps,s=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(go,yr),yr|=o;else{if((o&1073741824)===0)return e=i!==null?i.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,je(go,yr),yr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:o,je(go,yr),yr|=n}else i!==null?(n=i.baseLanes|o,r.memoizedState=null):n=o,je(go,yr),yr|=n;return ir(e,r,s,o),r.child}function Rd(e,r){var o=r.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function gi(e,r,o,n,s){var i=dr(o)?Mt:tr.current;return i=so(r,i),xo(r,s),o=ii(e,r,o,n,i,s),n=li(),e!==null&&!pr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Qr(e,r,s)):(Ie&&n&&Ws(r),r.flags|=1,ir(e,r,o,s),r.child)}function Pd(e,r,o,n,s){if(dr(o)){var i=!0;Vn(r)}else i=!1;if(xo(r,s),r.stateNode===null)xa(e,r),bd(r,o,n),hi(r,o,n,s),n=!0;else if(e===null){var d=r.stateNode,h=r.memoizedProps;d.props=h;var f=d.context,N=o.contextType;typeof N=="object"&&N!==null?N=Nr(N):(N=dr(o)?Mt:tr.current,N=so(r,N));var E=o.getDerivedStateFromProps,M=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function";M||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==n||f!==N)&&wd(r,d,n,N),ht=!1;var I=r.memoizedState;d.state=I,na(r,n,d,s),f=r.memoizedState,h!==n||I!==f||cr.current||ht?(typeof E=="function"&&(xi(r,o,E,n),f=r.memoizedState),(h=ht||yd(r,o,h,n,I,f,N))?(M||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=f),d.props=n,d.state=f,d.context=N,n=h):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{d=r.stateNode,Gc(e,r),h=r.memoizedProps,N=r.type===r.elementType?h:Ar(r.type,h),d.props=N,M=r.pendingProps,I=d.context,f=o.contextType,typeof f=="object"&&f!==null?f=Nr(f):(f=dr(o)?Mt:tr.current,f=so(r,f));var B=o.getDerivedStateFromProps;(E=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==M||I!==f)&&wd(r,d,n,f),ht=!1,I=r.memoizedState,d.state=I,na(r,n,d,s);var D=r.memoizedState;h!==M||I!==D||cr.current||ht?(typeof B=="function"&&(xi(r,o,B,n),D=r.memoizedState),(N=ht||yd(r,o,N,n,I,D,f)||!1)?(E||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,D,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,D,f)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=D),d.props=n,d.state=D,d.context=f,n=N):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(r.flags|=1024),n=!1)}return vi(e,r,o,n,i,s)}function vi(e,r,o,n,s,i){Rd(e,r);var d=(r.flags&128)!==0;if(!n&&!d)return s&&_c(r,o,!1),Qr(e,r,i);n=r.stateNode,Kx.current=r;var h=d&&typeof o.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&d?(r.child=po(r,e.child,null,i),r.child=po(r,null,h,i)):ir(e,r,h,i),r.memoizedState=n.state,s&&_c(r,o,!0),r.child}function zd(e){var r=e.stateNode;r.pendingContext?Lc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Lc(e,r.context,!1),ri(e,r.containerInfo)}function Ad(e,r,o,n,s){return co(),Gs(s),r.flags|=256,ir(e,r,o,n),r.child}var yi={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,r,o){var n=r.pendingProps,s=Me.current,i=!1,d=(r.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(s&2)!==0),h?(i=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),je(Me,s&1),e===null)return Ks(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=n.children,e=n.fallback,i?(n=r.mode,i=r.child,d={mode:"hidden",children:d},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=d):i=Sa(d,n,0,null),e=Dt(e,n,o,null),i.return=r,e.return=r,i.sibling=e,r.child=i,r.child.memoizedState=bi(o),r.memoizedState=yi,e):wi(r,d));if(s=e.memoizedState,s!==null&&(h=s.dehydrated,h!==null))return Gx(e,r,d,n,h,s,o);if(i){i=n.fallback,d=r.mode,s=e.child,h=s.sibling;var f={mode:"hidden",children:n.children};return(d&1)===0&&r.child!==s?(n=r.child,n.childLanes=0,n.pendingProps=f,r.deletions=null):(n=wt(s,f),n.subtreeFlags=s.subtreeFlags&14680064),h!==null?i=wt(h,i):(i=Dt(i,d,o,null),i.flags|=2),i.return=r,n.return=r,n.sibling=i,r.child=n,n=i,i=r.child,d=e.child.memoizedState,d=d===null?bi(o):{baseLanes:d.baseLanes|o,cachePool:null,transitions:d.transitions},i.memoizedState=d,i.childLanes=e.childLanes&~o,r.memoizedState=yi,n}return i=e.child,e=i.sibling,n=wt(i,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=o),n.return=r,n.sibling=null,e!==null&&(o=r.deletions,o===null?(r.deletions=[e],r.flags|=16):o.push(e)),r.child=n,r.memoizedState=null,n}function wi(e,r){return r=Sa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ua(e,r,o,n){return n!==null&&Gs(n),po(r,e.child,null,o),e=wi(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Gx(e,r,o,n,s,i,d){if(o)return r.flags&256?(r.flags&=-257,n=mi(Error(l(422))),ua(e,r,d,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(i=n.fallback,s=r.mode,n=Sa({mode:"visible",children:n.children},s,0,null),i=Dt(i,s,d,null),i.flags|=2,n.return=r,i.return=r,n.sibling=i,r.child=n,(r.mode&1)!==0&&po(r,e.child,null,d),r.child.memoizedState=bi(d),r.memoizedState=yi,i);if((r.mode&1)===0)return ua(e,r,d,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var h=n.dgst;return n=h,i=Error(l(419)),n=mi(i,n,void 0),ua(e,r,d,n)}if(h=(d&e.childLanes)!==0,pr||h){if(n=Ve,n!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(n.suspendedLanes|d))!==0?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Vr(e,s),_r(n,e,s,-1))}return _i(),n=mi(Error(l(421))),ua(e,r,d,n)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=ih.bind(null,e),s._reactRetry=r,null):(e=i.treeContext,vr=dt(s.nextSibling),gr=r,Ie=!0,zr=null,e!==null&&(kr[jr++]=Kr,kr[jr++]=Gr,kr[jr++]=Rt,Kr=e.id,Gr=e.overflow,Rt=r),r=wi(r,n.children),r.flags|=4096,r)}function Od(e,r,o){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),Xs(e.return,r,o)}function ki(e,r,o,n,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:o,tailMode:s}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=o,i.tailMode=s)}function _d(e,r,o){var n=r.pendingProps,s=n.revealOrder,i=n.tail;if(ir(e,r,n.children,o),n=Me.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,o,r);else if(e.tag===19)Od(e,o,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(je(Me,n),(r.mode&1)===0)r.memoizedState=null;else switch(s){case"forwards":for(o=r.child,s=null;o!==null;)e=o.alternate,e!==null&&aa(e)===null&&(s=o),o=o.sibling;o=s,o===null?(s=r.child,r.child=null):(s=o.sibling,o.sibling=null),ki(r,!1,s,o,i);break;case"backwards":for(o=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&aa(e)===null){r.child=s;break}e=s.sibling,s.sibling=o,o=s,s=e}ki(r,!0,o,null,i);break;case"together":ki(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xa(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Qr(e,r,o){if(e!==null&&(r.dependencies=e.dependencies),Ot|=r.lanes,(o&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,o=wt(e,e.pendingProps),r.child=o,o.return=r;e.sibling!==null;)e=e.sibling,o=o.sibling=wt(e,e.pendingProps),o.return=r;o.sibling=null}return r.child}function Vx(e,r,o){switch(r.tag){case 3:zd(r),co();break;case 5:Qc(r);break;case 1:dr(r.type)&&Vn(r);break;case 4:ri(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,s=r.memoizedProps.value;je(ra,n._currentValue),n._currentValue=s;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(je(Me,Me.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Ld(e,r,o):(je(Me,Me.current&1),e=Qr(e,r,o),e!==null?e.sibling:null);je(Me,Me.current&1);break;case 19:if(n=(o&r.childLanes)!==0,(e.flags&128)!==0){if(n)return _d(e,r,o);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),je(Me,Me.current),n)break;return null;case 22:case 23:return r.lanes=0,Md(e,r,o)}return Qr(e,r,o)}var Bd,ji,Fd,Dd;Bd=function(e,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ji=function(){},Fd=function(e,r,o,n){var s=e.memoizedProps;if(s!==n){e=r.stateNode,At(qr.current);var i=null;switch(o){case"input":s=Xa(e,s),n=Xa(e,n),i=[];break;case"select":s=_({},s,{value:void 0}),n=_({},n,{value:void 0}),i=[];break;case"textarea":s=rs(e,s),n=rs(e,n),i=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Yn)}os(o,n);var d;o=null;for(N in s)if(!n.hasOwnProperty(N)&&s.hasOwnProperty(N)&&s[N]!=null)if(N==="style"){var h=s[N];for(d in h)h.hasOwnProperty(d)&&(o||(o={}),o[d]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(m.hasOwnProperty(N)?i||(i=[]):(i=i||[]).push(N,null));for(N in n){var f=n[N];if(h=s!=null?s[N]:void 0,n.hasOwnProperty(N)&&f!==h&&(f!=null||h!=null))if(N==="style")if(h){for(d in h)!h.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(o||(o={}),o[d]="");for(d in f)f.hasOwnProperty(d)&&h[d]!==f[d]&&(o||(o={}),o[d]=f[d])}else o||(i||(i=[]),i.push(N,o)),o=f;else N==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,h=h?h.__html:void 0,f!=null&&h!==f&&(i=i||[]).push(N,f)):N==="children"?typeof f!="string"&&typeof f!="number"||(i=i||[]).push(N,""+f):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(m.hasOwnProperty(N)?(f!=null&&N==="onScroll"&&Ne("scroll",e),i||h===f||(i=[])):(i=i||[]).push(N,f))}o&&(i=i||[]).push("style",o);var N=i;(r.updateQueue=N)&&(r.flags|=4)}},Dd=function(e,r,o,n){o!==n&&(r.flags|=4)};function ln(e,r){if(!Ie)switch(e.tailMode){case"hidden":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var n=null;o!==null;)o.alternate!==null&&(n=o),o=o.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function nr(e){var r=e.alternate!==null&&e.alternate.child===e.child,o=0,n=0;if(r)for(var s=e.child;s!==null;)o|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)o|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=o,r}function Jx(e,r,o){var n=r.pendingProps;switch(Us(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return dr(r.type)&&Gn(),nr(r),null;case 3:return n=r.stateNode,ho(),Se(cr),Se(tr),ni(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zn(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,zr!==null&&(Ai(zr),zr=null))),ji(e,r),nr(r),null;case 5:ti(r);var s=At(tn.current);if(o=r.type,e!==null&&r.stateNode!=null)Fd(e,r,o,n,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(l(166));return nr(r),null}if(e=At(qr.current),Zn(r)){n=r.stateNode,o=r.type;var i=r.memoizedProps;switch(n[Hr]=r,n[Qo]=i,e=(r.mode&1)!==0,o){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(s=0;s<Go.length;s++)Ne(Go[s],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":bl(n,i),Ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",n);break;case"textarea":jl(n,i),Ne("invalid",n)}os(o,i),s=null;for(var d in i)if(i.hasOwnProperty(d)){var h=i[d];d==="children"?typeof h=="string"?n.textContent!==h&&(i.suppressHydrationWarning!==!0&&Un(n.textContent,h,e),s=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(i.suppressHydrationWarning!==!0&&Un(n.textContent,h,e),s=["children",""+h]):m.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Ne("scroll",n)}switch(o){case"input":ot(n),kl(n,i,!0);break;case"textarea":ot(n),Sl(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Yn)}n=s,r.updateQueue=n,n!==null&&(r.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tl(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(o,{is:n.is}):(e=d.createElement(o),o==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,o),e[Hr]=r,e[Qo]=n,Bd(e,r,!1,!1),r.stateNode=e;e:{switch(d=ns(o,n),o){case"dialog":Ne("cancel",e),Ne("close",e),s=n;break;case"iframe":case"object":case"embed":Ne("load",e),s=n;break;case"video":case"audio":for(s=0;s<Go.length;s++)Ne(Go[s],e);s=n;break;case"source":Ne("error",e),s=n;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),s=n;break;case"details":Ne("toggle",e),s=n;break;case"input":bl(e,n),s=Xa(e,n),Ne("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=_({},n,{value:void 0}),Ne("invalid",e);break;case"textarea":jl(e,n),s=rs(e,n),Ne("invalid",e);break;default:s=n}os(o,s),h=s;for(i in h)if(h.hasOwnProperty(i)){var f=h[i];i==="style"?El(e,f):i==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Cl(e,f)):i==="children"?typeof f=="string"?(o!=="textarea"||f!=="")&&Eo(e,f):typeof f=="number"&&Eo(e,""+f):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(m.hasOwnProperty(i)?f!=null&&i==="onScroll"&&Ne("scroll",e):f!=null&&ae(e,i,f,d))}switch(o){case"input":ot(e),kl(e,n,!1);break;case"textarea":ot(e),Sl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+de(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Gt(e,!!n.multiple,i,!1):n.defaultValue!=null&&Gt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Yn)}switch(o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(e&&r.stateNode!=null)Dd(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(l(166));if(o=At(tn.current),At(qr.current),Zn(r)){if(n=r.stateNode,o=r.memoizedProps,n[Hr]=r,(i=n.nodeValue!==o)&&(e=gr,e!==null))switch(e.tag){case 3:Un(n.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Un(n.nodeValue,o,(e.mode&1)!==0)}i&&(r.flags|=4)}else n=(o.nodeType===9?o:o.ownerDocument).createTextNode(n),n[Hr]=r,r.stateNode=n}return nr(r),null;case 13:if(Se(Me),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ie&&vr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)$c(),co(),r.flags|=98560,i=!1;else if(i=Zn(r),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[Hr]=r}else co(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nr(r),i=!1}else zr!==null&&(Ai(zr),zr=null),i=!0;if(!i)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Me.current&1)!==0?We===0&&(We=3):_i())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return ho(),ji(e,r),e===null&&Vo(r.stateNode.containerInfo),nr(r),null;case 10:return Qs(r.type._context),nr(r),null;case 17:return dr(r.type)&&Gn(),nr(r),null;case 19:if(Se(Me),i=r.memoizedState,i===null)return nr(r),null;if(n=(r.flags&128)!==0,d=i.rendering,d===null)if(n)ln(i,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=aa(e),d!==null){for(r.flags|=128,ln(i,!1),n=d.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=o,o=r.child;o!==null;)i=o,e=n,i.flags&=14680066,d=i.alternate,d===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=d.childLanes,i.lanes=d.lanes,i.child=d.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=d.memoizedProps,i.memoizedState=d.memoizedState,i.updateQueue=d.updateQueue,i.type=d.type,e=d.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return je(Me,Me.current&1|2),r.child}e=e.sibling}i.tail!==null&&Oe()>vo&&(r.flags|=128,n=!0,ln(i,!1),r.lanes=4194304)}else{if(!n)if(e=aa(d),e!==null){if(r.flags|=128,n=!0,o=e.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ln(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Ie)return nr(r),null}else 2*Oe()-i.renderingStartTime>vo&&o!==1073741824&&(r.flags|=128,n=!0,ln(i,!1),r.lanes=4194304);i.isBackwards?(d.sibling=r.child,r.child=d):(o=i.last,o!==null?o.sibling=d:r.child=d,i.last=d)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=Oe(),r.sibling=null,o=Me.current,je(Me,n?o&1|2:o&1),r):(nr(r),null);case 22:case 23:return Oi(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(yr&1073741824)!==0&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Qx(e,r){switch(Us(r),r.tag){case 1:return dr(r.type)&&Gn(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ho(),Se(cr),Se(tr),ni(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return ti(r),null;case 13:if(Se(Me),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));co()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Se(Me),null;case 4:return ho(),null;case 10:return Qs(r.type._context),null;case 22:case 23:return Oi(),null;case 24:return null;default:return null}}var ha=!1,ar=!1,Xx=typeof WeakSet=="function"?WeakSet:Set,F=null;function fo(e,r){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(n){Ae(e,r,n)}else o.current=null}function Ni(e,r,o){try{o()}catch(n){Ae(e,r,n)}}var Hd=!1;function Zx(e,r){if(Os=An,e=yc(),Is(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var s=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{o.nodeType,i.nodeType}catch{o=null;break e}var d=0,h=-1,f=-1,N=0,E=0,M=e,I=null;r:for(;;){for(var B;M!==o||s!==0&&M.nodeType!==3||(h=d+s),M!==i||n!==0&&M.nodeType!==3||(f=d+n),M.nodeType===3&&(d+=M.nodeValue.length),(B=M.firstChild)!==null;)I=M,M=B;for(;;){if(M===e)break r;if(I===o&&++N===s&&(h=d),I===i&&++E===n&&(f=d),(B=M.nextSibling)!==null)break;M=I,I=M.parentNode}M=B}o=h===-1||f===-1?null:{start:h,end:f}}else o=null}o=o||{start:0,end:0}}else o=null;for(_s={focusedElem:e,selectionRange:o},An=!1,F=r;F!==null;)if(r=F,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,F=e;else for(;F!==null;){r=F;try{var D=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var H=D.memoizedProps,_e=D.memoizedState,k=r.stateNode,g=k.getSnapshotBeforeUpdate(r.elementType===r.type?H:Ar(r.type,H),_e);k.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(P){Ae(r,r.return,P)}if(e=r.sibling,e!==null){e.return=r.return,F=e;break}F=r.return}return D=Hd,Hd=!1,D}function cn(e,r,o){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ni(r,o,i)}s=s.next}while(s!==n)}}function ma(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var n=o.create;o.destroy=n()}o=o.next}while(o!==r)}}function Si(e){var r=e.ref;if(r!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof r=="function"?r(e):r.current=e}}function qd(e){var r=e.alternate;r!==null&&(e.alternate=null,qd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Hr],delete r[Qo],delete r[Hs],delete r[Lx],delete r[Ox])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Wd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(e,r):o.insertBefore(e,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(e,o)):(r=o,r.appendChild(e)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Yn));else if(n!==4&&(e=e.child,e!==null))for(Ti(e,r,o),e=e.sibling;e!==null;)Ti(e,r,o),e=e.sibling}function Ci(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.insertBefore(e,r):o.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ci(e,r,o),e=e.sibling;e!==null;)Ci(e,r,o),e=e.sibling}var Qe=null,Lr=!1;function ft(e,r,o){for(o=o.child;o!==null;)Ud(e,r,o),o=o.sibling}function Ud(e,r,o){if(Dr&&typeof Dr.onCommitFiberUnmount=="function")try{Dr.onCommitFiberUnmount(In,o)}catch{}switch(o.tag){case 5:ar||fo(o,r);case 6:var n=Qe,s=Lr;Qe=null,ft(e,r,o),Qe=n,Lr=s,Qe!==null&&(Lr?(e=Qe,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Qe.removeChild(o.stateNode));break;case 18:Qe!==null&&(Lr?(e=Qe,o=o.stateNode,e.nodeType===8?Ds(e.parentNode,o):e.nodeType===1&&Ds(e,o),Do(e)):Ds(Qe,o.stateNode));break;case 4:n=Qe,s=Lr,Qe=o.stateNode.containerInfo,Lr=!0,ft(e,r,o),Qe=n,Lr=s;break;case 0:case 11:case 14:case 15:if(!ar&&(n=o.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var i=s,d=i.destroy;i=i.tag,d!==void 0&&((i&2)!==0||(i&4)!==0)&&Ni(o,r,d),s=s.next}while(s!==n)}ft(e,r,o);break;case 1:if(!ar&&(fo(o,r),n=o.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=o.memoizedProps,n.state=o.memoizedState,n.componentWillUnmount()}catch(h){Ae(o,r,h)}ft(e,r,o);break;case 21:ft(e,r,o);break;case 22:o.mode&1?(ar=(n=ar)||o.memoizedState!==null,ft(e,r,o),ar=n):ft(e,r,o);break;default:ft(e,r,o)}}function Yd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Xx),r.forEach(function(n){var s=lh.bind(null,e,n);o.has(n)||(o.add(n),n.then(s,s))})}}function Or(e,r){var o=r.deletions;if(o!==null)for(var n=0;n<o.length;n++){var s=o[n];try{var i=e,d=r,h=d;e:for(;h!==null;){switch(h.tag){case 5:Qe=h.stateNode,Lr=!1;break e;case 3:Qe=h.stateNode.containerInfo,Lr=!0;break e;case 4:Qe=h.stateNode.containerInfo,Lr=!0;break e}h=h.return}if(Qe===null)throw Error(l(160));Ud(i,d,s),Qe=null,Lr=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(N){Ae(s,r,N)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Kd(r,e),r=r.sibling}function Kd(e,r){var o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Or(r,e),Wr(e),n&4){try{cn(3,e,e.return),ma(3,e)}catch(H){Ae(e,e.return,H)}try{cn(5,e,e.return)}catch(H){Ae(e,e.return,H)}}break;case 1:Or(r,e),Wr(e),n&512&&o!==null&&fo(o,o.return);break;case 5:if(Or(r,e),Wr(e),n&512&&o!==null&&fo(o,o.return),e.flags&32){var s=e.stateNode;try{Eo(s,"")}catch(H){Ae(e,e.return,H)}}if(n&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,d=o!==null?o.memoizedProps:i,h=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{h==="input"&&i.type==="radio"&&i.name!=null&&wl(s,i),ns(h,d);var N=ns(h,i);for(d=0;d<f.length;d+=2){var E=f[d],M=f[d+1];E==="style"?El(s,M):E==="dangerouslySetInnerHTML"?Cl(s,M):E==="children"?Eo(s,M):ae(s,E,M,N)}switch(h){case"input":Za(s,i);break;case"textarea":Nl(s,i);break;case"select":var I=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var B=i.value;B!=null?Gt(s,!!i.multiple,B,!1):I!==!!i.multiple&&(i.defaultValue!=null?Gt(s,!!i.multiple,i.defaultValue,!0):Gt(s,!!i.multiple,i.multiple?[]:"",!1))}s[Qo]=i}catch(H){Ae(e,e.return,H)}}break;case 6:if(Or(r,e),Wr(e),n&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(H){Ae(e,e.return,H)}}break;case 3:if(Or(r,e),Wr(e),n&4&&o!==null&&o.memoizedState.isDehydrated)try{Do(r.containerInfo)}catch(H){Ae(e,e.return,H)}break;case 4:Or(r,e),Wr(e);break;case 13:Or(r,e),Wr(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Mi=Oe())),n&4&&Yd(e);break;case 22:if(E=o!==null&&o.memoizedState!==null,e.mode&1?(ar=(N=ar)||E,Or(r,e),ar=N):Or(r,e),Wr(e),n&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!E&&(e.mode&1)!==0)for(F=e,E=e.child;E!==null;){for(M=F=E;F!==null;){switch(I=F,B=I.child,I.tag){case 0:case 11:case 14:case 15:cn(4,I,I.return);break;case 1:fo(I,I.return);var D=I.stateNode;if(typeof D.componentWillUnmount=="function"){n=I,o=I.return;try{r=n,D.props=r.memoizedProps,D.state=r.memoizedState,D.componentWillUnmount()}catch(H){Ae(n,o,H)}}break;case 5:fo(I,I.return);break;case 22:if(I.memoizedState!==null){Jd(M);continue}}B!==null?(B.return=I,F=B):Jd(M)}E=E.sibling}e:for(E=null,M=e;;){if(M.tag===5){if(E===null){E=M;try{s=M.stateNode,N?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(h=M.stateNode,f=M.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,h.style.display=Il("display",d))}catch(H){Ae(e,e.return,H)}}}else if(M.tag===6){if(E===null)try{M.stateNode.nodeValue=N?"":M.memoizedProps}catch(H){Ae(e,e.return,H)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;E===M&&(E=null),M=M.return}E===M&&(E=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Or(r,e),Wr(e),n&4&&Yd(e);break;case 21:break;default:Or(r,e),Wr(e)}}function Wr(e){var r=e.flags;if(r&2){try{e:{for(var o=e.return;o!==null;){if($d(o)){var n=o;break e}o=o.return}throw Error(l(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Eo(s,""),n.flags&=-33);var i=Wd(e);Ci(e,i,s);break;case 3:case 4:var d=n.stateNode.containerInfo,h=Wd(e);Ti(e,h,d);break;default:throw Error(l(161))}}catch(f){Ae(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function eh(e,r,o){F=e,Gd(e)}function Gd(e,r,o){for(var n=(e.mode&1)!==0;F!==null;){var s=F,i=s.child;if(s.tag===22&&n){var d=s.memoizedState!==null||ha;if(!d){var h=s.alternate,f=h!==null&&h.memoizedState!==null||ar;h=ha;var N=ar;if(ha=d,(ar=f)&&!N)for(F=s;F!==null;)d=F,f=d.child,d.tag===22&&d.memoizedState!==null?Qd(s):f!==null?(f.return=d,F=f):Qd(s);for(;i!==null;)F=i,Gd(i),i=i.sibling;F=s,ha=h,ar=N}Vd(e)}else(s.subtreeFlags&8772)!==0&&i!==null?(i.return=s,F=i):Vd(e)}}function Vd(e){for(;F!==null;){var r=F;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:ar||ma(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!ar)if(o===null)n.componentDidMount();else{var s=r.elementType===r.type?o.memoizedProps:Ar(r.type,o.memoizedProps);n.componentDidUpdate(s,o.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&Jc(r,i,n);break;case 3:var d=r.updateQueue;if(d!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Jc(r,d,o)}break;case 5:var h=r.stateNode;if(o===null&&r.flags&4){o=h;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&o.focus();break;case"img":f.src&&(o.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var N=r.alternate;if(N!==null){var E=N.memoizedState;if(E!==null){var M=E.dehydrated;M!==null&&Do(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ar||r.flags&512&&Si(r)}catch(I){Ae(r,r.return,I)}}if(r===e){F=null;break}if(o=r.sibling,o!==null){o.return=r.return,F=o;break}F=r.return}}function Jd(e){for(;F!==null;){var r=F;if(r===e){F=null;break}var o=r.sibling;if(o!==null){o.return=r.return,F=o;break}F=r.return}}function Qd(e){for(;F!==null;){var r=F;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ma(4,r)}catch(f){Ae(r,o,f)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var s=r.return;try{n.componentDidMount()}catch(f){Ae(r,s,f)}}var i=r.return;try{Si(r)}catch(f){Ae(r,i,f)}break;case 5:var d=r.return;try{Si(r)}catch(f){Ae(r,d,f)}}}catch(f){Ae(r,r.return,f)}if(r===e){F=null;break}var h=r.sibling;if(h!==null){h.return=r.return,F=h;break}F=r.return}}var rh=Math.ceil,fa=O.ReactCurrentDispatcher,Ii=O.ReactCurrentOwner,Tr=O.ReactCurrentBatchConfig,xe=0,Ve=null,De=null,Xe=0,yr=0,go=pt(0),We=0,dn=null,Ot=0,ga=0,Ei=0,pn=null,ur=null,Mi=0,vo=1/0,Xr=null,va=!1,Ri=null,gt=null,ya=!1,vt=null,ba=0,un=0,Pi=null,wa=-1,ka=0;function lr(){return(xe&6)!==0?Oe():wa!==-1?wa:wa=Oe()}function yt(e){return(e.mode&1)===0?1:(xe&2)!==0&&Xe!==0?Xe&-Xe:Bx.transition!==null?(ka===0&&(ka=Wl()),ka):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Zl(e.type)),e)}function _r(e,r,o,n){if(50<un)throw un=0,Pi=null,Error(l(185));Lo(e,o,n),((xe&2)===0||e!==Ve)&&(e===Ve&&((xe&2)===0&&(ga|=o),We===4&&bt(e,Xe)),xr(e,n),o===1&&xe===0&&(r.mode&1)===0&&(vo=Oe()+500,Jn&&xt()))}function xr(e,r){var o=e.callbackNode;Bu(e,r);var n=Rn(e,e===Ve?Xe:0);if(n===0)o!==null&&Hl(o),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(o!=null&&Hl(o),r===1)e.tag===0?_x(Zd.bind(null,e)):Bc(Zd.bind(null,e)),zx(function(){(xe&6)===0&&xt()}),o=null;else{switch(Ul(n)){case 1:o=ps;break;case 4:o=ql;break;case 16:o=Cn;break;case 536870912:o=$l;break;default:o=Cn}o=ip(o,Xd.bind(null,e))}e.callbackPriority=r,e.callbackNode=o}}function Xd(e,r){if(wa=-1,ka=0,(xe&6)!==0)throw Error(l(327));var o=e.callbackNode;if(yo()&&e.callbackNode!==o)return null;var n=Rn(e,e===Ve?Xe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ja(e,n);else{r=n;var s=xe;xe|=2;var i=rp();(Ve!==e||Xe!==r)&&(Xr=null,vo=Oe()+500,Bt(e,r));do try{nh();break}catch(h){ep(e,h)}while(!0);Js(),fa.current=i,xe=s,De!==null?r=0:(Ve=null,Xe=0,r=We)}if(r!==0){if(r===2&&(s=us(e),s!==0&&(n=s,r=zi(e,s))),r===1)throw o=dn,Bt(e,0),bt(e,n),xr(e,Oe()),o;if(r===6)bt(e,n);else{if(s=e.current.alternate,(n&30)===0&&!th(s)&&(r=ja(e,n),r===2&&(i=us(e),i!==0&&(n=i,r=zi(e,i))),r===1))throw o=dn,Bt(e,0),bt(e,n),xr(e,Oe()),o;switch(e.finishedWork=s,e.finishedLanes=n,r){case 0:case 1:throw Error(l(345));case 2:Ft(e,ur,Xr);break;case 3:if(bt(e,n),(n&130023424)===n&&(r=Mi+500-Oe(),10<r)){if(Rn(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){lr(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Fs(Ft.bind(null,e,ur,Xr),r);break}Ft(e,ur,Xr);break;case 4:if(bt(e,n),(n&4194240)===n)break;for(r=e.eventTimes,s=-1;0<n;){var d=31-Rr(n);i=1<<d,d=r[d],d>s&&(s=d),n&=~i}if(n=s,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*rh(n/1960))-n,10<n){e.timeoutHandle=Fs(Ft.bind(null,e,ur,Xr),n);break}Ft(e,ur,Xr);break;case 5:Ft(e,ur,Xr);break;default:throw Error(l(329))}}}return xr(e,Oe()),e.callbackNode===o?Xd.bind(null,e):null}function zi(e,r){var o=pn;return e.current.memoizedState.isDehydrated&&(Bt(e,r).flags|=256),e=ja(e,r),e!==2&&(r=ur,ur=o,r!==null&&Ai(r)),e}function Ai(e){ur===null?ur=e:ur.push.apply(ur,e)}function th(e){for(var r=e;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var n=0;n<o.length;n++){var s=o[n],i=s.getSnapshot;s=s.value;try{if(!Pr(i(),s))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function bt(e,r){for(r&=~Ei,r&=~ga,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var o=31-Rr(r),n=1<<o;e[o]=-1,r&=~n}}function Zd(e){if((xe&6)!==0)throw Error(l(327));yo();var r=Rn(e,0);if((r&1)===0)return xr(e,Oe()),null;var o=ja(e,r);if(e.tag!==0&&o===2){var n=us(e);n!==0&&(r=n,o=zi(e,n))}if(o===1)throw o=dn,Bt(e,0),bt(e,r),xr(e,Oe()),o;if(o===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Ft(e,ur,Xr),xr(e,Oe()),null}function Li(e,r){var o=xe;xe|=1;try{return e(r)}finally{xe=o,xe===0&&(vo=Oe()+500,Jn&&xt())}}function _t(e){vt!==null&&vt.tag===0&&(xe&6)===0&&yo();var r=xe;xe|=1;var o=Tr.transition,n=ye;try{if(Tr.transition=null,ye=1,e)return e()}finally{ye=n,Tr.transition=o,xe=r,(xe&6)===0&&xt()}}function Oi(){yr=go.current,Se(go)}function Bt(e,r){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Px(o)),De!==null)for(o=De.return;o!==null;){var n=o;switch(Us(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Gn();break;case 3:ho(),Se(cr),Se(tr),ni();break;case 5:ti(n);break;case 4:ho();break;case 13:Se(Me);break;case 19:Se(Me);break;case 10:Qs(n.type._context);break;case 22:case 23:Oi()}o=o.return}if(Ve=e,De=e=wt(e.current,null),Xe=yr=r,We=0,dn=null,Ei=ga=Ot=0,ur=pn=null,zt!==null){for(r=0;r<zt.length;r++)if(o=zt[r],n=o.interleaved,n!==null){o.interleaved=null;var s=n.next,i=o.pending;if(i!==null){var d=i.next;i.next=s,n.next=d}o.pending=n}zt=null}return e}function ep(e,r){do{var o=De;try{if(Js(),sa.current=da,ia){for(var n=Re.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}ia=!1}if(Lt=0,Ge=$e=Re=null,on=!1,nn=0,Ii.current=null,o===null||o.return===null){We=1,dn=r,De=null;break}e:{var i=e,d=o.return,h=o,f=r;if(r=Xe,h.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var N=f,E=h,M=E.tag;if((E.mode&1)===0&&(M===0||M===11||M===15)){var I=E.alternate;I?(E.updateQueue=I.updateQueue,E.memoizedState=I.memoizedState,E.lanes=I.lanes):(E.updateQueue=null,E.memoizedState=null)}var B=Sd(d);if(B!==null){B.flags&=-257,Td(B,d,h,i,r),B.mode&1&&Nd(i,N,r),r=B,f=N;var D=r.updateQueue;if(D===null){var H=new Set;H.add(f),r.updateQueue=H}else D.add(f);break e}else{if((r&1)===0){Nd(i,N,r),_i();break e}f=Error(l(426))}}else if(Ie&&h.mode&1){var _e=Sd(d);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),Td(_e,d,h,i,r),Gs(mo(f,h));break e}}i=f=mo(f,h),We!==4&&(We=2),pn===null?pn=[i]:pn.push(i),i=d;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var k=kd(i,f,r);Vc(i,k);break e;case 1:h=f;var g=i.type,j=i.stateNode;if((i.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(gt===null||!gt.has(j)))){i.flags|=65536,r&=-r,i.lanes|=r;var P=jd(i,h,r);Vc(i,P);break e}}i=i.return}while(i!==null)}op(o)}catch($){r=$,De===o&&o!==null&&(De=o=o.return);continue}break}while(!0)}function rp(){var e=fa.current;return fa.current=da,e===null?da:e}function _i(){(We===0||We===3||We===2)&&(We=4),Ve===null||(Ot&268435455)===0&&(ga&268435455)===0||bt(Ve,Xe)}function ja(e,r){var o=xe;xe|=2;var n=rp();(Ve!==e||Xe!==r)&&(Xr=null,Bt(e,r));do try{oh();break}catch(s){ep(e,s)}while(!0);if(Js(),xe=o,fa.current=n,De!==null)throw Error(l(261));return Ve=null,Xe=0,We}function oh(){for(;De!==null;)tp(De)}function nh(){for(;De!==null&&!Eu();)tp(De)}function tp(e){var r=sp(e.alternate,e,yr);e.memoizedProps=e.pendingProps,r===null?op(e):De=r,Ii.current=null}function op(e){var r=e;do{var o=r.alternate;if(e=r.return,(r.flags&32768)===0){if(o=Jx(o,r,yr),o!==null){De=o;return}}else{if(o=Qx(o,r),o!==null){o.flags&=32767,De=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,De=null;return}}if(r=r.sibling,r!==null){De=r;return}De=r=e}while(r!==null);We===0&&(We=5)}function Ft(e,r,o){var n=ye,s=Tr.transition;try{Tr.transition=null,ye=1,ah(e,r,o,n)}finally{Tr.transition=s,ye=n}return null}function ah(e,r,o,n){do yo();while(vt!==null);if((xe&6)!==0)throw Error(l(327));o=e.finishedWork;var s=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var i=o.lanes|o.childLanes;if(Fu(e,i),e===Ve&&(De=Ve=null,Xe=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ya||(ya=!0,ip(Cn,function(){return yo(),null})),i=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||i){i=Tr.transition,Tr.transition=null;var d=ye;ye=1;var h=xe;xe|=4,Ii.current=null,Zx(e,o),Kd(o,e),Sx(_s),An=!!Os,_s=Os=null,e.current=o,eh(o),Mu(),xe=h,ye=d,Tr.transition=i}else e.current=o;if(ya&&(ya=!1,vt=e,ba=s),i=e.pendingLanes,i===0&&(gt=null),zu(o.stateNode),xr(e,Oe()),r!==null)for(n=e.onRecoverableError,o=0;o<r.length;o++)s=r[o],n(s.value,{componentStack:s.stack,digest:s.digest});if(va)throw va=!1,e=Ri,Ri=null,e;return(ba&1)!==0&&e.tag!==0&&yo(),i=e.pendingLanes,(i&1)!==0?e===Pi?un++:(un=0,Pi=e):un=0,xt(),null}function yo(){if(vt!==null){var e=Ul(ba),r=Tr.transition,o=ye;try{if(Tr.transition=null,ye=16>e?16:e,vt===null)var n=!1;else{if(e=vt,vt=null,ba=0,(xe&6)!==0)throw Error(l(331));var s=xe;for(xe|=4,F=e.current;F!==null;){var i=F,d=i.child;if((F.flags&16)!==0){var h=i.deletions;if(h!==null){for(var f=0;f<h.length;f++){var N=h[f];for(F=N;F!==null;){var E=F;switch(E.tag){case 0:case 11:case 15:cn(8,E,i)}var M=E.child;if(M!==null)M.return=E,F=M;else for(;F!==null;){E=F;var I=E.sibling,B=E.return;if(qd(E),E===N){F=null;break}if(I!==null){I.return=B,F=I;break}F=B}}}var D=i.alternate;if(D!==null){var H=D.child;if(H!==null){D.child=null;do{var _e=H.sibling;H.sibling=null,H=_e}while(H!==null)}}F=i}}if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,F=d;else e:for(;F!==null;){if(i=F,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:cn(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,F=k;break e}F=i.return}}var g=e.current;for(F=g;F!==null;){d=F;var j=d.child;if((d.subtreeFlags&2064)!==0&&j!==null)j.return=d,F=j;else e:for(d=g;F!==null;){if(h=F,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ma(9,h)}}catch($){Ae(h,h.return,$)}if(h===d){F=null;break e}var P=h.sibling;if(P!==null){P.return=h.return,F=P;break e}F=h.return}}if(xe=s,xt(),Dr&&typeof Dr.onPostCommitFiberRoot=="function")try{Dr.onPostCommitFiberRoot(In,e)}catch{}n=!0}return n}finally{ye=o,Tr.transition=r}}return!1}function np(e,r,o){r=mo(o,r),r=kd(e,r,1),e=mt(e,r,1),r=lr(),e!==null&&(Lo(e,1,r),xr(e,r))}function Ae(e,r,o){if(e.tag===3)np(e,e,o);else for(;r!==null;){if(r.tag===3){np(r,e,o);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(gt===null||!gt.has(n))){e=mo(o,e),e=jd(r,e,1),r=mt(r,e,1),e=lr(),r!==null&&(Lo(r,1,e),xr(r,e));break}}r=r.return}}function sh(e,r,o){var n=e.pingCache;n!==null&&n.delete(r),r=lr(),e.pingedLanes|=e.suspendedLanes&o,Ve===e&&(Xe&o)===o&&(We===4||We===3&&(Xe&130023424)===Xe&&500>Oe()-Mi?Bt(e,0):Ei|=o),xr(e,r)}function ap(e,r){r===0&&((e.mode&1)===0?r=1:(r=Mn,Mn<<=1,(Mn&130023424)===0&&(Mn=4194304)));var o=lr();e=Vr(e,r),e!==null&&(Lo(e,r,o),xr(e,o))}function ih(e){var r=e.memoizedState,o=0;r!==null&&(o=r.retryLane),ap(e,o)}function lh(e,r){var o=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(o=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(l(314))}n!==null&&n.delete(r),ap(e,o)}var sp;sp=function(e,r,o){if(e!==null)if(e.memoizedProps!==r.pendingProps||cr.current)pr=!0;else{if((e.lanes&o)===0&&(r.flags&128)===0)return pr=!1,Vx(e,r,o);pr=(e.flags&131072)!==0}else pr=!1,Ie&&(r.flags&1048576)!==0&&Fc(r,Xn,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;xa(e,r),e=r.pendingProps;var s=so(r,tr.current);xo(r,o),s=ii(null,r,n,e,s,o);var i=li();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,dr(n)?(i=!0,Vn(r)):i=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ei(r),s.updater=pa,r.stateNode=s,s._reactInternals=r,hi(r,n,e,o),r=vi(null,r,n,!0,i,o)):(r.tag=0,Ie&&i&&Ws(r),ir(null,r,s,o),r=r.child),r;case 16:n=r.elementType;e:{switch(xa(e,r),e=r.pendingProps,s=n._init,n=s(n._payload),r.type=n,s=r.tag=dh(n),e=Ar(n,e),s){case 0:r=gi(null,r,n,e,o);break e;case 1:r=Pd(null,r,n,e,o);break e;case 11:r=Cd(null,r,n,e,o);break e;case 14:r=Id(null,r,n,Ar(n.type,e),o);break e}throw Error(l(306,n,""))}return r;case 0:return n=r.type,s=r.pendingProps,s=r.elementType===n?s:Ar(n,s),gi(e,r,n,s,o);case 1:return n=r.type,s=r.pendingProps,s=r.elementType===n?s:Ar(n,s),Pd(e,r,n,s,o);case 3:e:{if(zd(r),e===null)throw Error(l(387));n=r.pendingProps,i=r.memoizedState,s=i.element,Gc(e,r),na(r,n,null,o);var d=r.memoizedState;if(n=d.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){s=mo(Error(l(423)),r),r=Ad(e,r,n,o,s);break e}else if(n!==s){s=mo(Error(l(424)),r),r=Ad(e,r,n,o,s);break e}else for(vr=dt(r.stateNode.containerInfo.firstChild),gr=r,Ie=!0,zr=null,o=Yc(r,null,n,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(co(),n===s){r=Qr(e,r,o);break e}ir(e,r,n,o)}r=r.child}return r;case 5:return Qc(r),e===null&&Ks(r),n=r.type,s=r.pendingProps,i=e!==null?e.memoizedProps:null,d=s.children,Bs(n,s)?d=null:i!==null&&Bs(n,i)&&(r.flags|=32),Rd(e,r),ir(e,r,d,o),r.child;case 6:return e===null&&Ks(r),null;case 13:return Ld(e,r,o);case 4:return ri(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=po(r,null,n,o):ir(e,r,n,o),r.child;case 11:return n=r.type,s=r.pendingProps,s=r.elementType===n?s:Ar(n,s),Cd(e,r,n,s,o);case 7:return ir(e,r,r.pendingProps,o),r.child;case 8:return ir(e,r,r.pendingProps.children,o),r.child;case 12:return ir(e,r,r.pendingProps.children,o),r.child;case 10:e:{if(n=r.type._context,s=r.pendingProps,i=r.memoizedProps,d=s.value,je(ra,n._currentValue),n._currentValue=d,i!==null)if(Pr(i.value,d)){if(i.children===s.children&&!cr.current){r=Qr(e,r,o);break e}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var h=i.dependencies;if(h!==null){d=i.child;for(var f=h.firstContext;f!==null;){if(f.context===n){if(i.tag===1){f=Jr(-1,o&-o),f.tag=2;var N=i.updateQueue;if(N!==null){N=N.shared;var E=N.pending;E===null?f.next=f:(f.next=E.next,E.next=f),N.pending=f}}i.lanes|=o,f=i.alternate,f!==null&&(f.lanes|=o),Xs(i.return,o,r),h.lanes|=o;break}f=f.next}}else if(i.tag===10)d=i.type===r.type?null:i.child;else if(i.tag===18){if(d=i.return,d===null)throw Error(l(341));d.lanes|=o,h=d.alternate,h!==null&&(h.lanes|=o),Xs(d,o,r),d=i.sibling}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===r){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}ir(e,r,s.children,o),r=r.child}return r;case 9:return s=r.type,n=r.pendingProps.children,xo(r,o),s=Nr(s),n=n(s),r.flags|=1,ir(e,r,n,o),r.child;case 14:return n=r.type,s=Ar(n,r.pendingProps),s=Ar(n.type,s),Id(e,r,n,s,o);case 15:return Ed(e,r,r.type,r.pendingProps,o);case 17:return n=r.type,s=r.pendingProps,s=r.elementType===n?s:Ar(n,s),xa(e,r),r.tag=1,dr(n)?(e=!0,Vn(r)):e=!1,xo(r,o),bd(r,n,s),hi(r,n,s,o),vi(null,r,n,!0,e,o);case 19:return _d(e,r,o);case 22:return Md(e,r,o)}throw Error(l(156,r.tag))};function ip(e,r){return Dl(e,r)}function ch(e,r,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cr(e,r,o,n){return new ch(e,r,o,n)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dh(e){if(typeof e=="function")return Bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===sr)return 14}return 2}function wt(e,r){var o=e.alternate;return o===null?(o=Cr(e.tag,r,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=r,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,r=e.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Na(e,r,o,n,s,i){var d=2;if(n=e,typeof e=="function")Bi(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case L:return Dt(o.children,s,i,r);case q:d=8,s|=8;break;case we:return e=Cr(12,o,r,s|2),e.elementType=we,e.lanes=i,e;case Ce:return e=Cr(13,o,r,s),e.elementType=Ce,e.lanes=i,e;case er:return e=Cr(19,o,r,s),e.elementType=er,e.lanes=i,e;case ke:return Sa(o,s,i,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:d=10;break e;case le:d=9;break e;case ze:d=11;break e;case sr:d=14;break e;case rr:d=16,n=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=Cr(d,o,r,s),r.elementType=e,r.type=n,r.lanes=i,r}function Dt(e,r,o,n){return e=Cr(7,e,n,r),e.lanes=o,e}function Sa(e,r,o,n){return e=Cr(22,e,n,r),e.elementType=ke,e.lanes=o,e.stateNode={isHidden:!1},e}function Fi(e,r,o){return e=Cr(6,e,null,r),e.lanes=o,e}function Di(e,r,o){return r=Cr(4,e.children!==null?e.children:[],e.key,r),r.lanes=o,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function ph(e,r,o,n,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Hi(e,r,o,n,s,i,d,h,f){return e=new ph(e,r,o,h,f),r===1?(r=1,i===!0&&(r|=8)):r=0,i=Cr(3,null,null,r),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ei(i),e}function uh(e,r,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:n==null?null:""+n,children:e,containerInfo:r,implementation:o}}function lp(e){if(!e)return ut;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(dr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var o=e.type;if(dr(o))return Oc(e,o,r)}return r}function cp(e,r,o,n,s,i,d,h,f){return e=Hi(o,n,!0,e,s,i,d,h,f),e.context=lp(null),o=e.current,n=lr(),s=yt(o),i=Jr(n,s),i.callback=r!=null?r:null,mt(o,i,s),e.current.lanes=s,Lo(e,s,n),xr(e,n),e}function Ta(e,r,o,n){var s=r.current,i=lr(),d=yt(s);return o=lp(o),r.context===null?r.context=o:r.pendingContext=o,r=Jr(i,d),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=mt(s,r,d),e!==null&&(_r(e,s,d,i),oa(e,s,d)),d}function Ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dp(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<r?o:r}}function qi(e,r){dp(e,r),(e=e.alternate)&&dp(e,r)}function xh(){return null}var pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $i(e){this._internalRoot=e}Ia.prototype.render=$i.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));Ta(e,r,null,null)},Ia.prototype.unmount=$i.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;_t(function(){Ta(null,e,null,null)}),r[Ur]=null}};function Ia(e){this._internalRoot=e}Ia.prototype.unstable_scheduleHydration=function(e){if(e){var r=Gl();e={blockedOn:null,target:e,priority:r};for(var o=0;o<it.length&&r!==0&&r<it[o].priority;o++);it.splice(o,0,e),o===0&&Ql(e)}};function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function up(){}function hh(e,r,o,n,s){if(s){if(typeof n=="function"){var i=n;n=function(){var N=Ca(d);i.call(N)}}var d=cp(r,n,e,0,null,!1,!1,"",up);return e._reactRootContainer=d,e[Ur]=d.current,Vo(e.nodeType===8?e.parentNode:e),_t(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var h=n;n=function(){var N=Ca(f);h.call(N)}}var f=Hi(e,0,!1,null,null,!1,!1,"",up);return e._reactRootContainer=f,e[Ur]=f.current,Vo(e.nodeType===8?e.parentNode:e),_t(function(){Ta(r,f,o,n)}),f}function Ma(e,r,o,n,s){var i=o._reactRootContainer;if(i){var d=i;if(typeof s=="function"){var h=s;s=function(){var f=Ca(d);h.call(f)}}Ta(r,d,e,s)}else d=hh(o,r,e,s,n);return Ca(d)}Yl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ao(r.pendingLanes);o!==0&&(hs(r,o|1),xr(r,Oe()),(xe&6)===0&&(vo=Oe()+500,xt()))}break;case 13:_t(function(){var n=Vr(e,1);if(n!==null){var s=lr();_r(n,e,1,s)}}),qi(e,1)}},ms=function(e){if(e.tag===13){var r=Vr(e,134217728);if(r!==null){var o=lr();_r(r,e,134217728,o)}qi(e,134217728)}},Kl=function(e){if(e.tag===13){var r=yt(e),o=Vr(e,r);if(o!==null){var n=lr();_r(o,e,r,n)}qi(e,r)}},Gl=function(){return ye},Vl=function(e,r){var o=ye;try{return ye=e,r()}finally{ye=o}},is=function(e,r,o){switch(r){case"input":if(Za(e,o),r=o.name,o.type==="radio"&&r!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var n=o[r];if(n!==e&&n.form===e.form){var s=Kn(n);if(!s)throw Error(l(90));Ct(n),Za(n,s)}}}break;case"textarea":Nl(e,o);break;case"select":r=o.value,r!=null&&Gt(e,!!o.multiple,r,!1)}},zl=Li,Al=_t;var mh={usingClientEntryPoint:!1,Events:[Xo,no,Kn,Rl,Pl,Li]},xn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fh={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bl(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{In=Ra.inject(fh),Dr=Ra}catch{}}return hr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mh,hr.createPortal=function(e,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wi(r))throw Error(l(200));return uh(e,r,null,o)},hr.createRoot=function(e,r){if(!Wi(e))throw Error(l(299));var o=!1,n="",s=pp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=Hi(e,1,!1,null,null,o,!1,n,s),e[Ur]=r.current,Vo(e.nodeType===8?e.parentNode:e),new $i(r)},hr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Bl(r),e=e===null?null:e.stateNode,e},hr.flushSync=function(e){return _t(e)},hr.hydrate=function(e,r,o){if(!Ea(r))throw Error(l(200));return Ma(null,e,r,!0,o)},hr.hydrateRoot=function(e,r,o){if(!Wi(e))throw Error(l(405));var n=o!=null&&o.hydratedSources||null,s=!1,i="",d=pp;if(o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(i=o.identifierPrefix),o.onRecoverableError!==void 0&&(d=o.onRecoverableError)),r=cp(r,null,e,1,o!=null?o:null,s,!1,i,d),e[Ur]=r.current,Vo(e),n)for(e=0;e<n.length;e++)o=n[e],s=o._getVersion,s=s(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,s]:r.mutableSourceEagerHydrationData.push(o,s);return new Ia(r)},hr.render=function(e,r,o){if(!Ea(r))throw Error(l(200));return Ma(null,e,r,!1,o)},hr.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(l(40));return e._reactRootContainer?(_t(function(){Ma(null,null,e,!1,function(){e._reactRootContainer=null,e[Ur]=null})}),!0):!1},hr.unstable_batchedUpdates=Li,hr.unstable_renderSubtreeIntoContainer=function(e,r,o,n){if(!Ea(o))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ma(e,r,o,!1,n)},hr.version="18.3.1-next-f1338f8080-20240426",hr}var bp;function Sh(){if(bp)return Ki.exports;bp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Ki.exports=Nh(),Ki.exports}var wp;function Th(){if(wp)return Pa;wp=1;var a=Sh();return Pa.createRoot=a.createRoot,Pa.hydrateRoot=a.hydrateRoot,Pa}var Ch=Th(),z=cl();const wr=vh(z);var mr=function(){return mr=Object.assign||function(c){for(var l,u=1,m=arguments.length;u<m;u++){l=arguments[u];for(var w in l)Object.prototype.hasOwnProperty.call(l,w)&&(c[w]=l[w])}return c},mr.apply(this,arguments)};function Ba(a,c,l){if(l||arguments.length===2)for(var u=0,m=c.length,w;u<m;u++)(w||!(u in c))&&(w||(w=Array.prototype.slice.call(c,0,u)),w[u]=c[u]);return a.concat(w||Array.prototype.slice.call(c))}var Te="-ms-",gn="-moz-",me="-webkit-",$p="comm",Ua="rule",dl="decl",Ih="@import",Eh="@namespace",Wp="@keyframes",Mh="@layer",Up=Math.abs,pl=String.fromCharCode,tl=Object.assign;function Rh(a,c){return Ue(a,0)^45?(((c<<2^Ue(a,0))<<2^Ue(a,1))<<2^Ue(a,2))<<2^Ue(a,3):0}function Yp(a){return a.trim()}function Zr(a,c){return(a=c.exec(a))?a[0]:a}function ne(a,c,l){return a.replace(c,l)}function za(a,c,l){return a.indexOf(c,l)}function Ue(a,c){return a.charCodeAt(c)|0}function Ut(a,c,l){return a.slice(c,l)}function Br(a){return a.length}function Kp(a){return a.length}function mn(a,c){return c.push(a),a}function Ph(a,c){return a.map(c).join("")}function kp(a,c){return a.filter(function(l){return!Zr(l,c)})}var Ya=1,wo=1,Gp=0,Ir=0,He=0,To="";function Ka(a,c,l,u,m,w,S,p){return{value:a,root:c,parent:l,type:u,props:m,children:w,line:Ya,column:wo,length:S,return:"",siblings:p}}function jt(a,c){return tl(Ka("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function bo(a){for(;a.root;)a=jt(a.root,{children:[a]});mn(a,a.siblings)}function zh(){return He}function Ah(){return He=Ir>0?Ue(To,--Ir):0,wo--,He===10&&(wo=1,Ya--),He}function Fr(){return He=Ir<Gp?Ue(To,Ir++):0,wo++,He===10&&(wo=1,Ya++),He}function Nt(){return Ue(To,Ir)}function Aa(){return Ir}function Ga(a,c){return Ut(To,a,c)}function yn(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lh(a){return Ya=wo=1,Gp=Br(To=a),Ir=0,[]}function Oh(a){return To="",a}function Ji(a){return Yp(Ga(Ir-1,ol(a===91?a+2:a===40?a+1:a)))}function _h(a){for(;(He=Nt())&&He<33;)Fr();return yn(a)>2||yn(He)>3?"":" "}function Bh(a,c){for(;--c&&Fr()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Ga(a,Aa()+(c<6&&Nt()==32&&Fr()==32))}function ol(a){for(;Fr();)switch(He){case a:return Ir;case 34:case 39:a!==34&&a!==39&&ol(He);break;case 40:a===41&&ol(a);break;case 92:Fr();break}return Ir}function Fh(a,c){for(;Fr()&&a+He!==57;)if(a+He===84&&Nt()===47)break;return"/*"+Ga(c,Ir-1)+"*"+pl(a===47?a:Fr())}function Dh(a){for(;!yn(Nt());)Fr();return Ga(a,Ir)}function Hh(a){return Oh(La("",null,null,null,[""],a=Lh(a),0,[0],a))}function La(a,c,l,u,m,w,S,p,x){for(var v=0,b=0,T=S,R=0,J=0,Z=0,U=1,Q=1,ge=1,pe=0,ae="",O=m,ee=w,Y=u,L=ae;Q;)switch(Z=pe,pe=Fr()){case 40:if(Z!=108&&Ue(L,T-1)==58){za(L+=ne(Ji(pe),"&","&\f"),"&\f",Up(v?p[v-1]:0))!=-1&&(ge=-1);break}case 34:case 39:case 91:L+=Ji(pe);break;case 9:case 10:case 13:case 32:L+=_h(Z);break;case 92:L+=Bh(Aa()-1,7);continue;case 47:switch(Nt()){case 42:case 47:mn(qh(Fh(Fr(),Aa()),c,l,x),x),(yn(Z||1)==5||yn(Nt()||1)==5)&&Br(L)&&Ut(L,-1,void 0)!==" "&&(L+=" ");break;default:L+="/"}break;case 123*U:p[v++]=Br(L)*ge;case 125*U:case 59:case 0:switch(pe){case 0:case 125:Q=0;case 59+b:ge==-1&&(L=ne(L,/\f/g,"")),J>0&&(Br(L)-T||U===0&&Z===47)&&mn(J>32?Np(L+";",u,l,T-1,x):Np(ne(L," ","")+";",u,l,T-2,x),x);break;case 59:L+=";";default:if(mn(Y=jp(L,c,l,v,b,m,p,ae,O=[],ee=[],T,w),w),pe===123)if(b===0)La(L,c,Y,Y,O,w,T,p,ee);else{switch(R){case 99:if(Ue(L,3)===110)break;case 108:if(Ue(L,2)===97)break;default:b=0;case 100:case 109:case 115:}b?La(a,Y,Y,u&&mn(jp(a,Y,Y,0,0,m,p,ae,m,O=[],T,ee),ee),m,ee,T,p,u?O:ee):La(L,Y,Y,Y,[""],ee,0,p,ee)}}v=b=J=0,U=ge=1,ae=L="",T=S;break;case 58:T=1+Br(L),J=Z;default:if(U<1){if(pe==123)--U;else if(pe==125&&U++==0&&Ah()==125)continue}switch(L+=pl(pe),pe*U){case 38:ge=b>0?1:(L+="\f",-1);break;case 44:p[v++]=(Br(L)-1)*ge,ge=1;break;case 64:Nt()===45&&(L+=Ji(Fr())),R=Nt(),b=T=Br(ae=L+=Dh(Aa())),pe++;break;case 45:Z===45&&Br(L)==2&&(U=0)}}return w}function jp(a,c,l,u,m,w,S,p,x,v,b,T){for(var R=m-1,J=m===0?w:[""],Z=Kp(J),U=0,Q=0,ge=0;U<u;++U)for(var pe=0,ae=Ut(a,R+1,R=Up(Q=S[U])),O=a;pe<Z;++pe)(O=Yp(Q>0?J[pe]+" "+ae:ne(ae,/&\f/g,J[pe])))&&(x[ge++]=O);return Ka(a,c,l,m===0?Ua:p,x,v,b,T)}function qh(a,c,l,u){return Ka(a,c,l,$p,pl(zh()),Ut(a,2,-2),0,u)}function Np(a,c,l,u,m){return Ka(a,c,l,dl,Ut(a,0,u),Ut(a,u+1,-1),u,m)}function Vp(a,c,l){switch(Rh(a,c)){case 5103:return me+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+a+a;case 4855:return me+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return gn+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return me+a+gn+a+Te+a+a;case 5936:switch(Ue(a,c+11)){case 114:return me+a+Te+ne(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return me+a+Te+ne(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return me+a+Te+ne(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return me+a+Te+a+a;case 6165:return me+a+Te+"flex-"+a+a;case 5187:return me+a+ne(a,/(\w+).+(:[^]+)/,me+"box-$1$2"+Te+"flex-$1$2")+a;case 5443:return me+a+Te+"flex-item-"+ne(a,/flex-|-self/g,"")+(Zr(a,/flex-|baseline/)?"":Te+"grid-row-"+ne(a,/flex-|-self/g,""))+a;case 4675:return me+a+Te+"flex-line-pack"+ne(a,/align-content|flex-|-self/g,"")+a;case 5548:return me+a+Te+ne(a,"shrink","negative")+a;case 5292:return me+a+Te+ne(a,"basis","preferred-size")+a;case 6060:return me+"box-"+ne(a,"-grow","")+me+a+Te+ne(a,"grow","positive")+a;case 4554:return me+ne(a,/([^-])(transform)/g,"$1"+me+"$2")+a;case 6187:return ne(ne(ne(a,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),a,"")+a;case 5495:case 3959:return ne(a,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ne(ne(a,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Te+"flex-pack:$3"),/space-between/,"justify")+me+a+a;case 4200:if(!Zr(a,/flex-|baseline/))return Te+"grid-column-align"+Ut(a,c)+a;break;case 2592:case 3360:return Te+ne(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(u,m){return c=m,Zr(u.props,/grid-\w+-end/)})?~za(a+(l=l[c].value),"span",0)?a:Te+ne(a,"-start","")+a+Te+"grid-row-span:"+(~za(l,"span",0)?Zr(l,/\d+/):+Zr(l,/\d+/)-+Zr(a,/\d+/))+";":Te+ne(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(u){return Zr(u.props,/grid-\w+-start/)})?a:Te+ne(ne(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ne(a,/(.+)-inline(.+)/,me+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Br(a)-1-c>6)switch(Ue(a,c+1)){case 109:if(Ue(a,c+4)!==45)break;case 102:return ne(a,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+gn+(Ue(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~za(a,"stretch",0)?Vp(ne(a,"stretch","fill-available"),c,l)+a:a}break;case 5152:case 5920:return ne(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,m,w,S,p,x,v){return Te+m+":"+w+v+(S?Te+m+"-span:"+(p?x:+x-+w)+v:"")+a});case 4949:if(Ue(a,c+6)===121)return ne(a,":",":"+me)+a;break;case 6444:switch(Ue(a,Ue(a,14)===45?18:11)){case 120:return ne(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Ue(a,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Te+"$2box$3")+a;case 100:return ne(a,":",":"+Te)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(a,"scroll-","scroll-snap-")+a}return a}function Fa(a,c){for(var l="",u=0;u<a.length;u++)l+=c(a[u],u,a,c)||"";return l}function $h(a,c,l,u){switch(a.type){case Mh:if(a.children.length)break;case Ih:case Eh:case dl:return a.return=a.return||a.value;case $p:return"";case Wp:return a.return=a.value+"{"+Fa(a.children,u)+"}";case Ua:if(!Br(a.value=a.props.join(",")))return""}return Br(l=Fa(a.children,u))?a.return=a.value+"{"+l+"}":""}function Wh(a){var c=Kp(a);return function(l,u,m,w){for(var S="",p=0;p<c;p++)S+=a[p](l,u,m,w)||"";return S}}function Uh(a){return function(c){c.root||(c=c.return)&&a(c)}}function Yh(a,c,l,u){if(a.length>-1&&!a.return)switch(a.type){case dl:a.return=Vp(a.value,a.length,l);return;case Wp:return Fa([jt(a,{value:ne(a.value,"@","@"+me)})],u);case Ua:if(a.length)return Ph(l=a.props,function(m){switch(Zr(m,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bo(jt(a,{props:[ne(m,/:(read-\w+)/,":"+gn+"$1")]})),bo(jt(a,{props:[m]})),tl(a,{props:kp(l,u)});break;case"::placeholder":bo(jt(a,{props:[ne(m,/:(plac\w+)/,":"+me+"input-$1")]})),bo(jt(a,{props:[ne(m,/:(plac\w+)/,":"+gn+"$1")]})),bo(jt(a,{props:[ne(m,/:(plac\w+)/,Te+"input-$1")]})),bo(jt(a,{props:[m]})),tl(a,{props:kp(l,u)});break}return""})}}var Kh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},br={},ko=typeof process!="undefined"&&br!==void 0&&(br.REACT_APP_SC_ATTR||br.SC_ATTR)||"data-styled",Jp="active",Qp="data-styled-version",Va="6.3.10",ul=`/*!sc*/
`,vn=typeof window!="undefined"&&typeof document!="undefined",Gh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&br!==void 0&&br.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&br.REACT_APP_SC_DISABLE_SPEEDY!==""?br.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&br.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&br!==void 0&&br.SC_DISABLE_SPEEDY!==void 0&&br.SC_DISABLE_SPEEDY!==""&&br.SC_DISABLE_SPEEDY!=="false"&&br.SC_DISABLE_SPEEDY);function kn(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Oa=new Map,Da=new Map,_a=1,fn=function(a){if(Oa.has(a))return Oa.get(a);for(;Da.has(_a);)_a++;var c=_a++;return Oa.set(a,c),Da.set(c,a),c},Vh=function(a,c){_a=c+1,Oa.set(a,c),Da.set(c,a)},xl=Object.freeze([]),jo=Object.freeze({});function Jh(a,c,l){return l===void 0&&(l=jo),a.theme!==l.theme&&a.theme||c||l.theme}var Xp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Qh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xh=/(^-|-$)/g;function Sp(a){return a.replace(Qh,"-").replace(Xh,"")}var Zh=/(a)(d)/gi,Tp=function(a){return String.fromCharCode(a+(a>25?39:97))};function nl(a){var c,l="";for(c=Math.abs(a);c>52;c=c/52|0)l=Tp(c%52)+l;return(Tp(c%52)+l).replace(Zh,"$1-$2")}var Qi,Ht=function(a,c){for(var l=c.length;l;)a=33*a^c.charCodeAt(--l);return a},Zp=function(a){return Ht(5381,a)};function em(a){return nl(Zp(a)>>>0)}function rm(a){return a.displayName||a.name||"Component"}function Xi(a){return typeof a=="string"&&!0}var eu=typeof Symbol=="function"&&Symbol.for,ru=eu?Symbol.for("react.memo"):60115,tm=eu?Symbol.for("react.forward_ref"):60112,om={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},am=((Qi={})[tm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qi[ru]=tu,Qi);function Cp(a){return("type"in(c=a)&&c.type.$$typeof)===ru?tu:"$$typeof"in a?am[a.$$typeof]:om;var c}var sm=Object.defineProperty,im=Object.getOwnPropertyNames,Ip=Object.getOwnPropertySymbols,lm=Object.getOwnPropertyDescriptor,cm=Object.getPrototypeOf,Ep=Object.prototype;function ou(a,c,l){if(typeof c!="string"){if(Ep){var u=cm(c);u&&u!==Ep&&ou(a,u,l)}var m=im(c);Ip&&(m=m.concat(Ip(c)));for(var w=Cp(a),S=Cp(c),p=0;p<m.length;++p){var x=m[p];if(!(x in nm||l&&l[x]||S&&x in S||w&&x in w)){var v=lm(c,x);try{sm(a,x,v)}catch{}}}}return a}function No(a){return typeof a=="function"}function hl(a){return typeof a=="object"&&"styledComponentId"in a}function $t(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function Mp(a,c){return a.join("")}function bn(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function al(a,c,l){if(l===void 0&&(l=!1),!l&&!bn(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)a[u]=al(a[u],c[u]);else if(bn(c))for(var u in c)a[u]=al(a[u],c[u]);return a}function ml(a,c){Object.defineProperty(a,"toString",{value:c})}var dm=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)l+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)l-=this.groupSizes[u];return this._cGroup=c,this._cIndex=l,l},a.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,m=u.length,w=m;c>=w;)if((w<<=1)<0)throw kn(16,"".concat(c));this.groupSizes=new Uint32Array(w),this.groupSizes.set(u),this.length=w;for(var S=m;S<w;S++)this.groupSizes[S]=0}for(var p=this.indexOfGroup(c+1),x=0,v=(S=0,l.length);S<v;S++)this.tag.insertRule(p,l[S])&&(this.groupSizes[c]++,p++,x++);x>0&&this._cGroup>c&&(this._cIndex+=x)},a.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),m=u+l;this.groupSizes[c]=0;for(var w=u;w<m;w++)this.tag.deleteRule(u);l>0&&this._cGroup>c&&(this._cIndex-=l)}},a.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],m=this.indexOfGroup(c),w=m+u,S=m;S<w;S++)l+=this.tag.getRule(S)+ul;return l},a})(),pm="style[".concat(ko,"][").concat(Qp,'="').concat(Va,'"]'),um=new RegExp("^".concat(ko,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rp=function(a){return typeof ShadowRoot!="undefined"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},sl=function(a){if(!a)return document;if(Rp(a))return a;if("getRootNode"in a){var c=a.getRootNode();if(Rp(c))return c}return document},xm=function(a,c,l){for(var u,m=l.split(","),w=0,S=m.length;w<S;w++)(u=m[w])&&a.registerName(c,u)},hm=function(a,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(ul),m=[],w=0,S=u.length;w<S;w++){var p=u[w].trim();if(p){var x=p.match(um);if(x){var v=0|parseInt(x[1],10),b=x[2];v!==0&&(Vh(b,v),xm(a,b,x[3]),a.getTag().insertRules(v,m)),m.length=0}else m.push(p)}}},Zi=function(a){for(var c=sl(a.options.target).querySelectorAll(pm),l=0,u=c.length;l<u;l++){var m=c[l];m&&m.getAttribute(ko)!==Jp&&(hm(a,m),m.parentNode&&m.parentNode.removeChild(m))}};function mm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var nu=function(a){var c=document.head,l=a||c,u=document.createElement("style"),m=(function(p){var x=Array.from(p.querySelectorAll("style[".concat(ko,"]")));return x[x.length-1]})(l),w=m!==void 0?m.nextSibling:null;u.setAttribute(ko,Jp),u.setAttribute(Qp,Va);var S=mm();return S&&u.setAttribute("nonce",S),l.insertBefore(u,w),u},fm=(function(){function a(c){this.element=nu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var u;if(l.sheet)return l.sheet;for(var m=(u=l.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,w=0,S=m.length;w<S;w++){var p=m[w];if(p.ownerNode===l)return p}throw kn(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},a})(),gm=(function(){function a(c){this.element=nu(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),vm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Pp=vn,ym={isServer:!vn,useCSSOMInjection:!Gh},au=(function(){function a(c,l,u){c===void 0&&(c=jo),l===void 0&&(l={});var m=this;this.options=mr(mr({},ym),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&vn&&Pp&&(Pp=!1,Zi(this)),ml(this,function(){return(function(w){for(var S=w.getTag(),p=S.length,x="",v=function(T){var R=(function(ge){return Da.get(ge)})(T);if(R===void 0)return"continue";var J=w.names.get(R);if(J===void 0||!J.size)return"continue";var Z=S.getGroup(T);if(Z.length===0)return"continue";var U=ko+".g"+T+'[id="'+R+'"]',Q="";J.forEach(function(ge){ge.length>0&&(Q+=ge+",")}),x+=Z+U+'{content:"'+Q+'"}'+ul},b=0;b<p;b++)v(b);return x})(m)})}return a.registerId=function(c){return fn(c)},a.prototype.rehydrate=function(){!this.server&&vn&&Zi(this)},a.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var u=new a(mr(mr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&vn&&c.target!==this.options.target&&sl(this.options.target)!==sl(c.target)&&Zi(u),u},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,m=l.target;return l.isServer?new vm(m):u?new fm(m):new gm(m)})(this.options),new dm(c)));var c},a.prototype.hasNameForId=function(c,l){var u,m;return(m=(u=this.names.get(c))===null||u===void 0?void 0:u.has(l))!==null&&m!==void 0&&m},a.prototype.registerName=function(c,l){fn(c);var u=this.names.get(c);u?u.add(l):this.names.set(c,new Set([l]))},a.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(fn(c),u)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(fn(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),bm=/&/g,et=47,qt=42;function zp(a){if(a.indexOf("}")===-1)return!1;for(var c=a.length,l=0,u=0,m=!1,w=0;w<c;w++){var S=a.charCodeAt(w);if(u!==0||m||S!==et||a.charCodeAt(w+1)!==qt)if(m)S===qt&&a.charCodeAt(w+1)===et&&(m=!1,w++);else if(S!==34&&S!==39||w!==0&&a.charCodeAt(w-1)===92){if(u===0){if(S===123)l++;else if(S===125&&--l<0)return!0}}else u===0?u=S:u===S&&(u=0);else m=!0,w++}return l!==0||u!==0}function su(a,c){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=su(l.children,c)),l})}function wm(a){var c,l,u,m=jo,w=m.options,S=w===void 0?jo:w,p=m.plugins,x=p===void 0?xl:p,v=function(Z,U,Q){return Q.startsWith(l)&&Q.endsWith(l)&&Q.replaceAll(l,"").length>0?".".concat(c):Z},b=x.slice();b.push(function(Z){Z.type===Ua&&Z.value.includes("&")&&(u||(u=new RegExp("\\".concat(l,"\\b"),"g")),Z.props[0]=Z.props[0].replace(bm,l).replace(u,v))}),S.prefix&&b.push(Yh),b.push($h);var T=[],R=Wh(b.concat(Uh(function(Z){return T.push(Z)}))),J=function(Z,U,Q,ge){U===void 0&&(U=""),Q===void 0&&(Q=""),ge===void 0&&(ge="&"),c=ge,l=U,u=void 0;var pe=(function(O){if(!zp(O))return O;for(var ee=O.length,Y="",L=0,q=0,we=0,Le=!1,le=0;le<ee;le++){var ze=O.charCodeAt(le);if(we!==0||Le||ze!==et||O.charCodeAt(le+1)!==qt)if(Le)ze===qt&&O.charCodeAt(le+1)===et&&(Le=!1,le++);else if(ze!==34&&ze!==39||le!==0&&O.charCodeAt(le-1)===92){if(we===0)if(ze===123)q++;else if(ze===125){if(--q<0){for(var Ce=le+1;Ce<ee;){var er=O.charCodeAt(Ce);if(er===59||er===10)break;Ce++}Ce<ee&&O.charCodeAt(Ce)===59&&Ce++,q=0,le=Ce-1,L=Ce;continue}q===0&&(Y+=O.substring(L,le+1),L=le+1)}else ze===59&&q===0&&(Y+=O.substring(L,le+1),L=le+1)}else we===0?we=ze:we===ze&&(we=0);else Le=!0,le++}if(L<ee){var sr=O.substring(L);zp(sr)||(Y+=sr)}return Y})((function(O){if(O.indexOf("//")===-1)return O;for(var ee=O.length,Y=[],L=0,q=0,we=0,Le=0;q<ee;){var le=O.charCodeAt(q);if(le!==34&&le!==39||q!==0&&O.charCodeAt(q-1)===92)if(we===0)if(le===et&&q+1<ee&&O.charCodeAt(q+1)===qt){for(q+=2;q+1<ee&&(O.charCodeAt(q)!==qt||O.charCodeAt(q+1)!==et);)q++;q+=2}else if(le===40&&q>=3&&(32|O.charCodeAt(q-1))==108&&(32|O.charCodeAt(q-2))==114&&(32|O.charCodeAt(q-3))==117)Le=1,q++;else if(Le>0)le===41?Le--:le===40&&Le++,q++;else if(le===qt&&q+1<ee&&O.charCodeAt(q+1)===et)q>L&&Y.push(O.substring(L,q)),L=q+=2;else if(le===et&&q+1<ee&&O.charCodeAt(q+1)===et){for(q>L&&Y.push(O.substring(L,q));q<ee&&O.charCodeAt(q)!==10;)q++;L=q}else q++;else q++;else we===0?we=le:we===le&&(we=0),q++}return L===0?O:(L<ee&&Y.push(O.substring(L)),Y.join(""))})(Z)),ae=Hh(Q||U?"".concat(Q," ").concat(U," { ").concat(pe," }"):pe);return S.namespace&&(ae=su(ae,S.namespace)),T=[],Fa(ae,R),T};return J.hash=x.length?x.reduce(function(Z,U){return U.name||kn(15),Ht(Z,U.name)},5381).toString():"",J}var km=new au,il=wm(),iu=wr.createContext({shouldForwardProp:void 0,styleSheet:km,stylis:il});iu.Consumer;wr.createContext(void 0);function Ap(){return wr.useContext(iu)}var jm=(function(){function a(c,l){var u=this;this.inject=function(m,w){w===void 0&&(w=il);var S=u.name+w.hash;m.hasNameForId(u.id,S)||m.insertRules(u.id,S,w(u.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,ml(this,function(){throw kn(12,String(u.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=il),this.name+c.hash},a})();function Nm(a,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||a in Kh||a.startsWith("--")?String(c).trim():"".concat(c,"px")}var Sm=function(a){return a>="A"&&a<="Z"};function Lp(a){for(var c="",l=0;l<a.length;l++){var u=a[l];if(l===1&&u==="-"&&a[0]==="-")return a;Sm(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var lu=function(a){return a==null||a===!1||a===""},cu=function(a){var c=[];for(var l in a){var u=a[l];a.hasOwnProperty(l)&&!lu(u)&&(Array.isArray(u)&&u.isCss||No(u)?c.push("".concat(Lp(l),":"),u,";"):bn(u)?c.push.apply(c,Ba(Ba(["".concat(l," {")],cu(u),!1),["}"],!1)):c.push("".concat(Lp(l),": ").concat(Nm(l,u),";")))}return c};function Wt(a,c,l,u,m){if(m===void 0&&(m=[]),typeof a=="string")return a&&m.push(a),m;if(lu(a))return m;if(hl(a))return m.push(".".concat(a.styledComponentId)),m;if(No(a)){if(!No(S=a)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(a),m;var w=a(c);return Wt(w,c,l,u,m)}var S;if(a instanceof jm)return l?(a.inject(l,u),m.push(a.getName(u))):m.push(a),m;if(bn(a)){for(var p=cu(a),x=0;x<p.length;x++)m.push(p[x]);return m}if(!Array.isArray(a))return m.push(a.toString()),m;for(x=0;x<a.length;x++)Wt(a[x],c,l,u,m);return m}function Tm(a){for(var c=0;c<a.length;c+=1){var l=a[c];if(No(l)&&!hl(l))return!1}return!0}var Cm=Zp(Va),Im=(function(){function a(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Tm(c),this.componentId=l,this.baseHash=Ht(Cm,l),this.baseStyle=u,au.registerId(l)}return a.prototype.generateAndInjectStyles=function(c,l,u){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=$t(m,this.staticRulesId);else{var w=Mp(Wt(this.rules,c,l,u)),S=nl(Ht(this.baseHash,w)>>>0);if(!l.hasNameForId(this.componentId,S)){var p=u(w,".".concat(S),void 0,this.componentId);l.insertRules(this.componentId,S,p)}m=$t(m,S),this.staticRulesId=S}else{for(var x=Ht(this.baseHash,u.hash),v="",b=0;b<this.rules.length;b++){var T=this.rules[b];if(typeof T=="string")v+=T;else if(T){var R=Mp(Wt(T,c,l,u));x=Ht(Ht(x,String(b)),R),v+=R}}if(v){var J=nl(x>>>0);if(!l.hasNameForId(this.componentId,J)){var Z=u(v,".".concat(J),void 0,this.componentId);l.insertRules(this.componentId,J,Z)}m=$t(m,J)}}return{className:m,css:typeof window=="undefined"?l.getTag().getGroup(fn(this.componentId)):""}},a})(),du=wr.createContext(void 0);du.Consumer;var el={};function Em(a,c,l){var u=hl(a),m=a,w=!Xi(a),S=c.attrs,p=S===void 0?xl:S,x=c.componentId,v=x===void 0?(function(O,ee){var Y=typeof O!="string"?"sc":Sp(O);el[Y]=(el[Y]||0)+1;var L="".concat(Y,"-").concat(em(Va+Y+el[Y]));return ee?"".concat(ee,"-").concat(L):L})(c.displayName,c.parentComponentId):x,b=c.displayName,T=b===void 0?(function(O){return Xi(O)?"styled.".concat(O):"Styled(".concat(rm(O),")")})(a):b,R=c.displayName&&c.componentId?"".concat(Sp(c.displayName),"-").concat(c.componentId):c.componentId||v,J=u&&m.attrs?m.attrs.concat(p).filter(Boolean):p,Z=c.shouldForwardProp;if(u&&m.shouldForwardProp){var U=m.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;Z=function(O,ee){return U(O,ee)&&Q(O,ee)}}else Z=U}var ge=new Im(l,R,u?m.componentStyle:void 0);function pe(O,ee){return(function(Y,L,q){var we=Y.attrs,Le=Y.componentStyle,le=Y.defaultProps,ze=Y.foldedComponentIds,Ce=Y.styledComponentId,er=Y.target,sr=wr.useContext(du),rr=Ap(),ke=Y.shouldForwardProp||rr.shouldForwardProp,A=Jh(L,sr,le)||jo,W=(function(ie,ue,de){for(var ve,Ee=mr(mr({},ue),{className:void 0,theme:de}),ot=0;ot<ie.length;ot+=1){var Ct=No(ve=ie[ot])?ve(Ee):ve;for(var Mr in Ct)Mr==="className"?Ee.className=$t(Ee.className,Ct[Mr]):Mr==="style"?Ee.style=mr(mr({},Ee.style),Ct[Mr]):Ee[Mr]=Ct[Mr]}return"className"in ue&&typeof ue.className=="string"&&(Ee.className=$t(Ee.className,ue.className)),Ee})(we,L,A),_=W.as||er,y={};for(var C in W)W[C]===void 0||C[0]==="$"||C==="as"||C==="theme"&&W.theme===A||(C==="forwardedAs"?y.as=W.forwardedAs:ke&&!ke(C,_)||(y[C]=W[C]));var re=(function(ie,ue){var de=Ap(),ve=ie.generateAndInjectStyles(ue,de.styleSheet,de.stylis);return ve})(Le,W),oe=re.className,ce=$t(ze,Ce);return oe&&(ce+=" "+oe),W.className&&(ce+=" "+W.className),y[Xi(_)&&!Xp.has(_)?"class":"className"]=ce,q&&(y.ref=q),z.createElement(_,y)})(ae,O,ee)}pe.displayName=T;var ae=wr.forwardRef(pe);return ae.attrs=J,ae.componentStyle=ge,ae.displayName=T,ae.shouldForwardProp=Z,ae.foldedComponentIds=u?$t(m.foldedComponentIds,m.styledComponentId):"",ae.styledComponentId=R,ae.target=u?m.target:a,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=u?(function(ee){for(var Y=[],L=1;L<arguments.length;L++)Y[L-1]=arguments[L];for(var q=0,we=Y;q<we.length;q++)al(ee,we[q],!0);return ee})({},m.defaultProps,O):O}}),ml(ae,function(){return".".concat(ae.styledComponentId)}),w&&ou(ae,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function Op(a,c){for(var l=[a[0]],u=0,m=c.length;u<m;u+=1)l.push(c[u],a[u+1]);return l}var _p=function(a){return Object.assign(a,{isCss:!0})};function Mm(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(No(a)||bn(a))return _p(Wt(Op(xl,Ba([a],c,!0))));var u=a;return c.length===0&&u.length===1&&typeof u[0]=="string"?Wt(u):_p(Wt(Op(u,c)))}function ll(a,c,l){if(l===void 0&&(l=jo),!c)throw kn(1,c);var u=function(m){for(var w=[],S=1;S<arguments.length;S++)w[S-1]=arguments[S];return a(c,l,Mm.apply(void 0,Ba([m],w,!1)))};return u.attrs=function(m){return ll(a,c,mr(mr({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},u.withConfig=function(m){return ll(a,c,mr(mr({},l),m))},u}var pu=function(a){return ll(Em,a)},fe=pu;Xp.forEach(function(a){fe[a]=pu(a)});const rl={Wrapper:fe.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:fe.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:fe.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Bp={Wrapper:fe.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);

        background: color-mix(
            in srgb,
            var(--color-bg) 92%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 28px var(--color-shadow);
        overflow: hidden;

        /* Backend vibe: request trace lines + infra glow */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                radial-gradient(
                    760px 200px at 18% 0%,
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                    transparent 66%
                ),
                radial-gradient(
                    620px 180px at 86% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 68%
                ),
                repeating-linear-gradient(
                    90deg,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 1px,
                    transparent 1px,
                    transparent 28px
                );

            opacity: 0.62;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                color-mix(
                    in srgb,
                    var(--color-primary) 55%,
                    var(--color-accent)
                ),
                transparent
            );
            opacity: 0.92;
        }
    `,Main:fe.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            /* background:
                radial-gradient(
                    90px 70px at 20% 20%,
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                    transparent 60%
                ),
                radial-gradient(
                    90px 70px at 85% 80%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                ); */
            background-color: #000;

            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                0 12px 24px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.06) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 14%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 560px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Rm="/backend-engineering-core-notes/images/transparentLogo.png";var uu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fp=wr.createContext&&wr.createContext(uu),Pm=["attr","size","title"];function zm(a,c){if(a==null)return{};var l=Am(a,c),u,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(a);for(m=0;m<w.length;m++)u=w[m],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(a,u)&&(l[u]=a[u])}return l}function Am(a,c){if(a==null)return{};var l={};for(var u in a)if(Object.prototype.hasOwnProperty.call(a,u)){if(c.indexOf(u)>=0)continue;l[u]=a[u]}return l}function Ha(){return Ha=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a},Ha.apply(this,arguments)}function Dp(a,c){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);c&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(a,m).enumerable})),l.push.apply(l,u)}return l}function qa(a){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Dp(Object(l),!0).forEach(function(u){Lm(a,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):Dp(Object(l)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(l,u))})}return a}function Lm(a,c,l){return c=Om(c),c in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,a}function Om(a){var c=_m(a,"string");return typeof c=="symbol"?c:c+""}function _m(a,c){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var u=l.call(a,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function xu(a){return a&&a.map((c,l)=>wr.createElement(c.tag,qa({key:l},c.attr),xu(c.child)))}function V(a){return c=>wr.createElement(Bm,Ha({attr:qa({},a.attr)},c),xu(a.child))}function Bm(a){var c=l=>{var{attr:u,size:m,title:w}=a,S=zm(a,Pm),p=m||l.size||"1em",x;return l.className&&(x=l.className),a.className&&(x=(x?x+" ":"")+a.className),wr.createElement("svg",Ha({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,S,{className:x,style:qa(qa({color:a.color||l.color},l.style),a.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),w&&wr.createElement("title",null,w),a.children)};return Fp!==void 0?wr.createElement(Fp.Consumer,null,l=>c(l)):c(uu)}function Yt(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function Hp(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(a)}function be(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Fm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"21 8 21 21 3 21 3 8"},child:[]},{tag:"rect",attr:{x:"1",y:"3",width:"22",height:"5"},child:[]},{tag:"line",attr:{x1:"10",y1:"12",x2:"14",y2:"12"},child:[]}]})(a)}function Ze(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(a)}function Er(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function hu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function Be(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function te(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function jn(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function Co(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function mu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function fl(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function wn(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Dm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(a)}function Ja(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function fu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(a)}function Hm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function qm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(a)}function gl(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"line",attr:{x1:"6",y1:"9",x2:"6",y2:"21"},child:[]}]})(a)}function Kt(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function Tt(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(a)}function $m(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Fe(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(a)}function St(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function tt(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function Wm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(a)}function So(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function rt(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function Um(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(a)}function Ym(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function Ye(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16"},child:[]},{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16"},child:[]}]})(a)}function Ke(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(a)}function vl(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(a)}function Qa(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function gu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function yl(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function vu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function Pe(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function yu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function Km(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},child:[]}]})(a)}function Gm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function Vm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function $a(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(a)}function Jm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(a)}function Qm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(a)}function bu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function wu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"},child:[]}]})(a)}function Wa(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(a)}function qe(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const qp="backend-engineering-core-notes-theme",Xm=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("dark");z.useEffect(()=>{const p=localStorage.getItem(qp)||"dark";u(p),p==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),z.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(qp,l)},[l]);const m=z.useMemo(()=>l==="light"?"dark":"light",[l]),w=()=>{u(m)};return t.jsx(Bp.Wrapper,{children:t.jsxs(Bp.Main,{children:[t.jsx("div",{className:"leftSide",children:t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!a&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:Rm,alt:"backend-engineering-core-notes",onLoad:()=>c(!0),style:{opacity:a?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"backend-engineering-core-notes"}),t.jsx("div",{className:"subTitle",children:"Node internals, APIs, auth, security, caching, observability"})]})]})}),t.jsx("div",{className:"rightSide",children:t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:w,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[t.jsx("span",{className:"icon",children:l==="light"?t.jsx(Ym,{}):t.jsx(Vm,{})}),t.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})})]})})},Zm={Wrapper:fe.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},ef=()=>t.jsxs(Zm.Wrapper,{children:[t.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),t.jsxs("div",{className:"right",children:["By ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),rf={Wrapper:fe.section`
        margin-bottom: 30px;

        .header {
            margin-bottom: 20px;
        }

        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        .header p {
            max-width: 720px;
            color: var(--color-text-secondary);
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 16px;
        }

        .card {
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 26px var(--color-shadow);
        }

        .icon {
            font-size: 22px;
            color: var(--color-primary);
        }

        .card h3 {
            font-size: 16px;
        }

        .card p {
            font-size: 13px;
            color: var(--color-text-secondary);
        }
    `},tf=()=>t.jsxs(rf.Wrapper,{children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{children:"Backend Engineering Core Notes"}),t.jsx("p",{children:"A fast, structured revision sheet for backend engineering fundamentals using Node.js mental models. These notes are designed to help you quickly recall important concepts used in real backend systems."})]}),t.jsxs("div",{className:"cards",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"icon",children:t.jsx(vu,{})}),t.jsx("h3",{children:"Node Internals"}),t.jsx("p",{children:"Understand how Node.js actually works - event loop, async execution, streams, buffers, and the runtime architecture behind backend applications."})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"icon",children:t.jsx(Pe,{})}),t.jsx("h3",{children:"Security and Authentication"}),t.jsx("p",{children:"Core security concepts like JWT authentication, cookies, OAuth flows, CSRF protection, hashing strategies, and rate limiting used in production APIs."})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"icon",children:t.jsx(Yt,{})}),t.jsx("h3",{children:"Performance and Observability"}),t.jsx("p",{children:"Learn how real backend systems stay fast and reliable using caching, Redis, CDN strategies, structured logs, monitoring, and error tracking."})]})]})]}),of={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2200px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},nf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"eventLoop",title:"Event loop",icon:t.jsx(Yt,{}),summary:"Node.js runs JavaScript on a single main thread and uses the event loop to keep work moving without blocking.",bullets:["Node.js is single threaded for JavaScript execution. It can still do many things at once because I/O work is handled by the OS and libuv.","The event loop is a loop that checks queues and runs callbacks when something is ready.","If you block the thread with heavy CPU work, the event loop cannot process other callbacks and your server feels stuck."],mentalModel:{title:"Mental model",text:"Think of the event loop as a smart receptionist. It picks the next ready task and runs it. If the receptionist is forced to do heavy work, the entire office stops."},example:{title:"Example - blocking vs non blocking",code:`// Blocking example (bad for servers)
app.get("/heavy", (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // busy wait for 2 seconds
  }
  res.send("done");
});

// Better idea - offload heavy compute (worker thread) or redesign
// Non-blocking I/O example is natural in Node:
app.get("/file", async (req, res) => {
  const data = await fs.promises.readFile("a.txt", "utf8");
  res.send(data);
});`},gotchas:["CPU heavy loops block everything.","Too many synchronous operations slow down all requests."]},{key:"timers",title:"Timers",icon:t.jsx(jn,{}),summary:"Timers schedule callbacks in the future. They do not guarantee exact timing, only that it runs after the delay when the event loop gets a chance.",bullets:["setTimeout runs once after at least the delay.","setInterval repeats, but delays can drift if the event loop is busy.","Use timers for retry backoff, cleanup jobs, and polling. Avoid using them as precise clocks."],mentalModel:{title:"Mental model",text:"A timer is like a reminder note. The reminder appears after the delay, but you still read it only when you are free."},example:{title:"Example - drift in intervals",code:`let n = 0;

const id = setInterval(() => {
  n += 1;
  console.log("tick", n, new Date().toISOString());
  // If you do heavy work here, next ticks get delayed.
  if (n === 5) clearInterval(id);
}, 1000);`},gotchas:["Intervals drift under load.","Do not run long work inside setInterval without control."]},{key:"microVsMacro",title:"Microtasks vs macrotasks",icon:t.jsx(tt,{}),summary:"Microtasks run before the next macrotask. In Node.js, Promise callbacks are microtasks. Timers are macrotasks.",bullets:["Microtasks include Promise.then, queueMicrotask.","Macrotasks include setTimeout, setInterval, I/O callbacks.","If you keep scheduling microtasks forever, you can starve the event loop and timers feel delayed."],mentalModel:{title:"Mental model",text:"Microtasks are like urgent sticky notes that you must finish before you take the next normal task."},example:{title:"Example - order",code:`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");

// Typical output:
// A
// B
// promise
// timeout`},gotchas:["Too many microtasks can delay timers and I/O callbacks."]},{key:"streams",title:"Streams",icon:t.jsx(wu,{}),summary:"Streams handle data in chunks instead of loading everything into memory. This is crucial for files, network, and large payloads.",bullets:["Readable stream produces chunks. Writable stream consumes chunks.","Transform stream modifies chunks (like gzip compression).","Streaming improves memory usage and lets you start sending data early."],mentalModel:{title:"Mental model",text:"Streaming is like drinking water with a straw. You do not need the entire bucket in your mouth to start drinking."},example:{title:"Example - pipe a file to response",code:`import fs from "fs";

app.get("/download", (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  const stream = fs.createReadStream("./big.zip");
  stream.pipe(res);
});`},gotchas:["Always handle errors on streams.","Streaming is safer for large files than fs.readFile."]},{key:"buffers",title:"Buffers",icon:t.jsx(hu,{}),summary:"Buffers represent raw binary data. They are used for network protocols, files, images, and any non-text payload.",bullets:["A Buffer is not the same as a string. A string is text. A Buffer is bytes.","Encoding matters: utf8, base64, hex.","When you receive data from a stream, you often get Buffer chunks."],mentalModel:{title:"Mental model",text:"A Buffer is a box of bytes. You can label it as text using an encoding, but the inside is still bytes."},example:{title:"Example - Buffer basics",code:`const buf = Buffer.from("hello", "utf8");
console.log(buf); // <Buffer 68 65 6c 6c 6f>

console.log(buf.toString("utf8")); // hello
console.log(buf.toString("base64")); // aGVsbG8=`},gotchas:["Wrong encoding leads to corrupted output.","Do not assume all data is utf8 text."]},{key:"backpressure",title:"Backpressure",icon:t.jsx(gl,{}),summary:"Backpressure means the consumer cannot keep up with the producer. Streams support backpressure so memory does not explode.",bullets:["If you read too fast and write too slow, chunks pile up in memory.","pipe handles backpressure by pausing the readable when the writable is overloaded.","Backpressure is a core reason streams are safe for large data flows."],mentalModel:{title:"Mental model",text:"Backpressure is like traffic control. If the road ahead is jammed, you slow down new cars entering the road."},example:{title:"Example - why pipe is safe",code:`// pipe automatically manages flow control
readableStream.pipe(writableStream);

// If writable is slow, readable gets paused.
// This prevents uncontrolled memory growth.`},gotchas:["If you manually handle data events, you must manage flow yourself."]},{key:"clusterWorkers",title:"Cluster and worker threads",icon:t.jsx(fl,{}),summary:"Cluster runs multiple Node processes. Worker threads run multiple threads inside one process. Choose based on workload.",bullets:["Cluster is great for scaling HTTP servers across CPU cores. Each worker is a separate process with its own event loop.","Worker threads are useful for CPU heavy tasks without blocking the main event loop.","For typical APIs, cluster helps with concurrency. For heavy compute, worker threads help keep requests responsive."],mentalModel:{title:"Mental model",text:"Cluster is multiple restaurants. Worker threads are multiple cooks inside one restaurant."},example:{title:"Example - when to use what",code:`// Use cluster: many HTTP requests, scale across CPU cores
// Use worker threads: image processing, encryption, heavy calculations

// Rule of thumb:
// - I/O bound: scale with cluster or more instances
// - CPU bound: use worker threads or external job workers`},gotchas:["Do not share memory assumptions across cluster processes.","Worker threads add complexity, use only when needed."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(of.Wrapper,{id:"node-internals",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Node internals"}),t.jsx("span",{className:"sub",children:"Event loop, timers, tasks, streams, buffers, and runtime scaling concepts"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why Node internals matter"}),t.jsx("div",{className:"introSub",children:"Backend interviews and real production debugging often depend on how well you understand Node.js behavior under load. These notes focus on practical behavior, not theory."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",p.title," in 2 lines like you are teaching a junior developer."]})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"If your API feels slow or stuck, first suspect blocking code, uncontrolled concurrency, and missing backpressure."})]})]})]})},af={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                box-shadow: 0 12px 22px var(--color-shadow);
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 920px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 9000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topNote {
            display: flex;
            gap: 12px;
            padding: 14px;

            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .noteIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .noteTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .noteSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            display: grid;
            grid-template-columns: 360px minmax(0, 1fr);
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .leftNav {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .navItem {
            width: 100%;
            text-align: left;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 12px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 150ms ease,
                border-color 150ms ease,
                box-shadow 150ms ease;

            .nIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nText {
                display: flex;
                flex-direction: column;
                gap: 3px;
                min-width: 0;
                flex: 1;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .nSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.45;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .nArrow {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                flex: 0 0 auto;

                transition: transform 160ms ease;
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-2px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:hover .nArrow {
                transform: translateX(2px);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 45%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 14%,
                            transparent
                        ),
                    0 18px 44px var(--color-shadow);
            }

            &.active .nIcon {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 18%,
                    var(--color-surface)
                );
            }
        }

        .rightContent {
            min-width: 0;
        }

        .panel {
            display: none;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;

            &.show {
                display: block;
            }
        }

        .panelHeader {
            display: flex;
            gap: 12px;
            padding: 14px;

            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .pIcon {
                width: 44px;
                height: 44px;
                border-radius: 16px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
                box-shadow: 0 12px 22px var(--color-shadow);
            }

            .pHeadText {
                min-width: 0;
            }

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 2px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .panelBody {
            padding: 14px;
        }

        .block {
            padding: 12px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
            margin-bottom: 12px;
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .dot.warn {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 78%,
                    var(--color-text-primary)
                );
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .extra {
            margin-top: 14px;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .extraTitle {
            padding: 14px;
            font-weight: 900;
            color: var(--color-text-primary);
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );
        }

        .examplesGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .exCard {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .exHead {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);

            .exIcon {
                width: 30px;
                height: 30px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .exName {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 13px;
                line-height: 1.45;
            }
        }

        .code {
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
            padding: 12px 14px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .pitfalls {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .pitTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;

            .pitIcon {
                width: 30px;
                height: 30px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pitText {
                font-weight: 900;
                color: var(--color-text-primary);
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .cIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .navItem,
            .exCard {
                transition: none !important;
            }
        }
    `},sf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("overview"),m=z.useMemo(()=>[{key:"overview",title:"What it is",icon:t.jsx(Yt,{}),summary:"The event loop is how Node.js keeps handling many tasks without blocking the main JavaScript thread.",points:["JavaScript runs on one main thread, one call stack","I/O work is handled by the OS and libuv, then callbacks get queued","The event loop picks ready callbacks and runs them when the stack is free"],mentalModel:"Think of the event loop as a scheduler that keeps checking queues. It runs the next ready callback only when the main thread is free."},{key:"phases",title:"Phases and queues",icon:t.jsx(tt,{}),summary:"Node has multiple phases. Timers and I/O callbacks do not run in the same moment, they run when their phase is reached.",points:["Timers phase - runs setTimeout and setInterval callbacks when due","I/O callbacks phase - runs callbacks for completed I/O","Poll phase - waits for I/O and processes ready I/O events","Check phase - runs setImmediate callbacks","Close callbacks - runs close events like socket close"],mentalModel:"Picture a roundabout with lanes. Each lane is a phase. The loop drives around and picks tasks from each lane in order."},{key:"microtasks",title:"Microtasks vs macrotasks",icon:t.jsx(qe,{}),summary:"Microtasks run before the next macrotask. Promise callbacks are microtasks. Timers and I/O callbacks are macrotasks.",points:["Microtasks - Promise.then, queueMicrotask","Macrotasks - setTimeout, setInterval, I/O callbacks, setImmediate","Too many microtasks can starve timers and make your server feel delayed"],mentalModel:"Microtasks are urgent sticky notes you must finish before picking the next normal task."},{key:"blocking",title:"Blocking the event loop",icon:t.jsx(fl,{}),summary:"If you block the main thread, Node cannot process other requests. This is the most common reason APIs feel stuck.",points:["CPU heavy loops block everything - no requests handled during that time","Sync filesystem calls block - avoid fs.readFileSync in request path","Big JSON parsing and huge loops also block under load"],mentalModel:"One cashier, many customers. If the cashier starts doing heavy accounting, the queue stops moving."},{key:"practical",title:"Practical backend signals",icon:t.jsx(gl,{}),summary:"In production, event loop issues show up as slow responses, timeouts, and delayed timers under load.",points:["Timers drift - setInterval ticks late when the loop is busy","P99 latency increases - tail latency grows when blocking happens","Requests pile up - your reverse proxy queue grows"],mentalModel:"When the loop is healthy, callbacks run smoothly. When it is blocked, everything waits longer than expected."}],[]),w=z.useMemo(()=>[{title:"Order example - sync, promise, timeout",code:`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");

// Typical output:
// A
// B
// promise
// timeout`},{title:"Blocking example - busy loop",code:`app.get("/heavy", (req, res) => {
  const start = Date.now();

  while (Date.now() - start < 2000) {
    // busy loop for 2 seconds
  }

  res.send("done");
});

// During those 2 seconds, other requests wait.
// Fix: move CPU work to a worker thread or a separate service.`},{title:"Timers drift example - interval under load",code:`let tick = 0;

const id = setInterval(() => {
  tick += 1;
  console.log("tick", tick, new Date().toISOString());

  // simulate heavy work
  const start = Date.now();
  while (Date.now() - start < 300) {}

  if (tick === 8) clearInterval(id);
}, 200);`}],[]),S=z.useMemo(()=>["Using synchronous fs calls in request handlers","Doing CPU heavy loops inside routes","Spawning too many microtasks that delay timers","Assuming setTimeout(0) runs immediately"],[]),p=()=>{c(v=>!v)},x=v=>{u(v)};return t.jsxs(af.Wrapper,{id:"event-loop",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:p,"aria-expanded":a,"aria-controls":"event-loop-body",children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Event loop"}),t.jsx("span",{className:"sub",children:"How Node.js schedules callbacks and why blocking code makes APIs slow"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{id:"event-loop-body",className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"topNote",children:[t.jsx("span",{className:"noteIcon",children:t.jsx(jn,{})}),t.jsxs("div",{className:"noteText",children:[t.jsx("div",{className:"noteTitle",children:"Interview line you should remember"}),t.jsx("div",{className:"noteSub",children:"Node.js is single threaded for JavaScript execution, but it handles many tasks via non blocking I/O and the event loop. If you block the loop, your API stalls."})]})]}),t.jsxs("div",{className:"layout",children:[t.jsx("div",{className:"leftNav",children:m.map(v=>{const b=l===v.key;return t.jsxs("button",{type:"button",className:`navItem ${b?"active":""}`,onClick:()=>x(v.key),"aria-pressed":b,children:[t.jsx("span",{className:"nIcon",children:v.icon}),t.jsxs("span",{className:"nText",children:[t.jsx("span",{className:"nTitle",children:v.title}),t.jsx("span",{className:"nSub",children:v.summary})]}),t.jsx("span",{className:"nArrow",children:t.jsx(Ze,{})})]},v.key)})}),t.jsxs("div",{className:"rightContent",children:[m.map(v=>{const b=l===v.key;return t.jsxs("div",{className:`panel ${b?"show":""}`,children:[t.jsxs("div",{className:"panelHeader",children:[t.jsx("div",{className:"pIcon",children:v.icon}),t.jsxs("div",{className:"pHeadText",children:[t.jsx("div",{className:"pTitle",children:v.title}),t.jsx("div",{className:"pSummary",children:v.summary})]})]}),t.jsxs("div",{className:"panelBody",children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:v.points.map((T,R)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:T})]},`${v.key}-p-${R}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Mental model"}),t.jsx("p",{className:"para",children:v.mentalModel})]})]})]},v.key)}),t.jsxs("div",{className:"extra",children:[t.jsx("div",{className:"extraTitle",children:"Examples you can explain in an interview"}),t.jsx("div",{className:"examplesGrid",children:w.map((v,b)=>t.jsxs("div",{className:"exCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"exName",children:v.title})]}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:v.code})})]},`ex-${b}`))}),t.jsxs("div",{className:"pitfalls",children:[t.jsxs("div",{className:"pitTitle",children:[t.jsx("span",{className:"pitIcon",children:t.jsx(be,{})}),t.jsx("span",{className:"pitText",children:"Common pitfalls"})]}),t.jsx("ul",{className:"list",children:S.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot warn"}),t.jsx("span",{className:"liText",children:v})]},`pit-${b}`))})]}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"cIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"cText",children:"Revision tip: Explain the event loop in 2 lines, then give one blocking example, then show promise vs timeout order."})]})]})]})]})]})]})},lf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2200px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},cf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"what",title:"What are streams",icon:t.jsx(wu,{}),summary:"Streams process data in chunks. You do not load everything into memory at once.",bullets:["Streams are built for large data: files, network responses, uploads, logs, video, zip, etc.","Instead of reading the full content, Node reads and writes small chunks over time.","This keeps memory stable and lets you start sending data immediately."],mentalModel:{title:"Mental model",text:"Streams are like a conveyor belt. Items arrive one by one, and you process each item without waiting for the whole truck to unload."},example:{title:"Example - why streams matter",code:`// Bad for large files (loads everything into memory)
const data = await fs.promises.readFile("./big.mp4");
res.send(data);

// Good for large files (streams chunks)
fs.createReadStream("./big.mp4").pipe(res);`},gotchas:["Avoid readFile for very large files in APIs.","Streaming starts response early, which is good for user experience."]},{key:"types",title:"Types of streams",icon:t.jsx(yu,{}),summary:"Node streams are mainly Readable, Writable, Duplex, and Transform.",bullets:["Readable - produces data chunks. Example: fs.createReadStream.","Writable - consumes chunks. Example: fs.createWriteStream.","Duplex - readable + writable. Example: TCP socket.","Transform - duplex that modifies chunks. Example: gzip compression."],mentalModel:{title:"Mental model",text:"Readable is a tap, Writable is a bucket, Duplex is a pipe both ways, Transform is a filter between tap and bucket."},example:{title:"Example - transform with gzip",code:`import fs from "fs";
import zlib from "zlib";

const gzip = zlib.createGzip();

fs.createReadStream("./big.txt")
  .pipe(gzip)
  .pipe(fs.createWriteStream("./big.txt.gz"));`},gotchas:["Transform streams are perfect for compression, encryption, and parsing."]},{key:"pipe",title:"pipe",icon:t.jsx(gu,{}),summary:"pipe connects streams and automatically handles flow control and backpressure.",bullets:["pipe forwards chunks from readable to writable.","pipe pauses reading if writable is slow, preventing memory growth.","pipe is safer than manual data event handling for most cases."],mentalModel:{title:"Mental model",text:"pipe is an automatic hose with a smart valve. If the bucket fills too fast, it slows the water."},example:{title:"Example - file download",code:`import fs from "fs";

app.get("/download", (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  fs.createReadStream("./big.zip").pipe(res);
});`},gotchas:["Always attach error handlers, especially for file streams."]},{key:"backpressure",title:"Backpressure",icon:t.jsx(qe,{}),summary:"Backpressure means the receiver cannot keep up with the sender. Streams support this to prevent memory explosion.",bullets:["If the writable is slower, readable must pause to avoid buffering too much.","pipe manages backpressure automatically.","Without backpressure, Node can buffer huge amounts and crash your process."],mentalModel:{title:"Mental model",text:"Backpressure is traffic control. If the road ahead is jammed, you slow down cars entering the road."},example:{title:"Example - manual data handling needs control",code:`// If you do manual streaming, you must handle pause/resume
readable.on("data", (chunk) => {
  const ok = writable.write(chunk);
  if (!ok) readable.pause();
});

writable.on("drain", () => {
  readable.resume();
});`},gotchas:["Most bugs in manual streaming come from ignoring backpressure."]},{key:"errors",title:"Error handling",icon:t.jsx(be,{}),summary:"Streams can fail mid-way. Always handle errors to avoid crashes and partial responses.",bullets:["File missing, permission issues, broken network, client disconnect.","If you do not listen for error events, Node can crash.","When streaming to HTTP response, handle both stream errors and res close events."],mentalModel:{title:"Mental model",text:"A stream is a long-running operation. Anything can break during the journey, so you must handle failures along the way."},example:{title:"Example - safe streaming to response",code:`import fs from "fs";

app.get("/download", (req, res) => {
  const stream = fs.createReadStream("./big.zip");

  stream.on("error", () => {
    if (!res.headersSent) res.status(500).send("File error");
    else res.end();
  });

  res.on("close", () => {
    // client disconnected
    stream.destroy();
  });

  stream.pipe(res);
});`},gotchas:["If client disconnects, destroy the stream to save resources.","If headers already sent, you cannot change status code."]},{key:"realUse",title:"Real backend uses",icon:t.jsx(Qm,{}),summary:"Streams show up in many backend features. Knowing them improves performance and stability.",bullets:["File uploads and downloads","Proxying request bodies to another service","Logging pipelines and ETL style processing","Compression and encryption middleware","Large JSON parsing with streaming parsers"],mentalModel:{title:"Mental model",text:"Any time data is big or continuous, streaming is the safest and most scalable shape."},example:{title:"Example - streaming upload to disk",code:`import fs from "fs";

// req is a readable stream in Node HTTP
app.post("/upload", (req, res) => {
  const out = fs.createWriteStream("./upload.bin");
  req.pipe(out);

  out.on("finish", () => res.send("uploaded"));
  out.on("error", () => res.status(500).send("write failed"));
});`},gotchas:["Validate size and type for uploads. Streams do not remove security risks."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(lf.Wrapper,{id:"streams",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Streams"}),t.jsx("span",{className:"sub",children:"Chunked data flow, pipe, backpressure, error handling"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why streams are a core backend skill"}),t.jsx("div",{className:"introSub",children:"Streams help you build fast and memory-safe APIs. They are critical for large files, network proxying, uploads, downloads, and compression pipelines."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"hintText",children:'Revision tip: Explain streams and backpressure with a simple "tap and bucket" story.'})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(Dm,{})}),t.jsx("span",{className:"closingText",children:"Production habit: Prefer streaming for big data. It saves memory, reduces latency, and avoids backend crashes."})]})]})]})},df={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2200px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},pf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"whatIs",title:"What is a Buffer",icon:t.jsx(hu,{}),summary:"A Buffer is a Node.js type used to store raw binary bytes. It is how Node represents data from files, sockets, and streams.",bullets:["A string is text. A Buffer is bytes.","Buffers are used for network protocols, file I/O, images, audio, and any non-text payload.","When Node receives data from streams, you often get Buffer chunks."],mentalModel:{title:"Mental model",text:"A Buffer is a box of bytes. You can interpret those bytes as text using an encoding, but the inside is always raw bytes."}},{key:"create",title:"Creating buffers",icon:t.jsx(fl,{}),summary:"Buffers can be created from strings, allocated with a size, or created from an array of bytes.",bullets:["Buffer.from creates a Buffer from a string or array.","Buffer.alloc creates a zero-filled Buffer of a fixed size.","Buffer.allocUnsafe is faster but may contain old memory. Use it only when you overwrite the buffer fully."],example:{title:"Examples - from and alloc",code:`// from string
const a = Buffer.from("hello", "utf8");
console.log(a); // <Buffer 68 65 6c 6c 6f>

// fixed size (safe)
const b = Buffer.alloc(10);
console.log(b); // 10 bytes, all 0

// faster, unsafe if you do not fill it
const c = Buffer.allocUnsafe(10);
c.fill(0); // overwrite to make it safe in practice`},gotchas:["Avoid Buffer.allocUnsafe unless you understand the risk.","Always be clear about encoding when converting to or from strings."]},{key:"encoding",title:"Encodings",icon:t.jsx(Tt,{}),summary:"Encoding is how bytes are interpreted as text or how text is converted into bytes. Common encodings are utf8, base64, and hex.",bullets:["utf8 is standard text encoding.","base64 is common for transporting binary in text formats like JSON.","hex is useful for debugging byte content."],example:{title:"Examples - utf8, base64, hex",code:`const buf = Buffer.from("hi", "utf8");

console.log(buf.toString("utf8"));   // hi
console.log(buf.toString("base64")); // aGk=
console.log(buf.toString("hex"));    // 6869

// reverse base64 to bytes
const back = Buffer.from("aGk=", "base64");
console.log(back.toString("utf8")); // hi`},gotchas:["Wrong encoding can corrupt data or show weird characters.","Do not assume every Buffer is text data."]},{key:"streams",title:"Buffers with streams",icon:t.jsx(Kt,{}),summary:"Streams emit data as Buffer chunks (unless you set an encoding). This is how Node handles large data efficiently.",bullets:["Readable streams emit chunks: Buffer by default.","You can call stream.setEncoding('utf8') to get strings instead.","For binary files, do not set encoding. Keep Buffer chunks."],example:{title:"Example - collecting stream data",code:`import fs from "fs";

const chunks = [];
const s = fs.createReadStream("./big.bin");

s.on("data", (chunk) => {
  // chunk is a Buffer
  chunks.push(chunk);
});

s.on("end", () => {
  const full = Buffer.concat(chunks);
  console.log("bytes", full.length);
});

s.on("error", (err) => console.error(err));`},gotchas:["Collecting all chunks defeats streaming. Prefer piping for large files.","Always handle stream errors."]},{key:"compareString",title:"Buffer vs string",icon:t.jsx(Ja,{}),summary:"Strings are for human readable text. Buffers are for raw bytes. Mixing them without encoding awareness causes bugs.",bullets:["String length counts characters, Buffer length counts bytes.","Some characters take multiple bytes in utf8.","Use Buffer when dealing with sockets, files, crypto, compression, images."],example:{title:"Example - bytes vs characters",code:`const s = "✓"; // a check mark
console.log(s.length); // 1 character

const b = Buffer.from(s, "utf8");
console.log(b.length); // 3 bytes in utf8`},gotchas:["Never use string operations for binary data.","When you log buffers, use hex for debugging."]},{key:"security",title:"Security and safety notes",icon:t.jsx(be,{}),summary:"Buffers are low level. Unsafe usage can leak memory or break payloads. Follow safe patterns by default.",bullets:["Prefer Buffer.alloc over allocUnsafe for safety.","Do not trust incoming bytes - validate sizes and limits.","In servers, enforce max payload sizes to avoid memory pressure."],mentalModel:{title:"Mental model",text:"Buffers are like raw electricity. Powerful and necessary, but you need insulation and safety rules."}}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(df.Wrapper,{id:"buffers",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Buffers"}),t.jsx("span",{className:"sub",children:"Raw bytes, encodings, streams, and safe usage in Node.js"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why buffers matter"}),t.jsx("div",{className:"introSub",children:"Buffers show up everywhere in backend work - files, APIs, streams, uploads, images, crypto, compression, and sockets. If you understand buffers, you debug low level issues faster and avoid encoding bugs."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),p.mentalModel&&t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),p.example&&t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),p.gotchas&&t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"hintText",children:"Revision tip: Explain Buffers in 2 lines and give one encoding example."})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Most weird backend bugs are either timing issues or encoding issues. Buffers solve the second category when you treat bytes carefully."})]})]})]})},uf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2400px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},xf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"restPrinciples",title:"REST principles",icon:t.jsx(So,{}),summary:"REST is an architectural style for designing APIs around resources with predictable URLs, methods, and responses.",bullets:["Resource based URLs - use nouns, not verbs. Example - /users, /orders, /products","HTTP methods express intent - GET read, POST create, PUT replace, PATCH partial update, DELETE remove","Statelessness - each request should contain enough info to be processed without server remembering previous requests","Representation - client and server exchange representations like JSON, not database rows","Consistency is more important than being clever - predictable APIs scale better across teams"],mentalModel:{title:"Mental model",text:"A REST API is like a structured library. Shelves are resources, and HTTP methods are actions you can perform on those shelves."},example:{title:"Example - good resource naming",code:`// Good
GET    /users
GET    /users/42
POST   /users
PATCH  /users/42
DELETE /users/42

// Avoid verbs in paths
// Bad
POST /createUser
GET  /getUsers`},gotchas:["Do not mix naming styles. Pick one and stay consistent.","Avoid deeply nested resources unless it truly represents ownership."]},{key:"resourceNaming",title:"Resource naming",icon:t.jsx($a,{}),summary:"Resource naming is about clean, stable URLs that represent things, not actions.",bullets:["Use plural nouns for collections - /users, /orders","Use IDs for single resources - /users/42","Use hyphens in multi-word segments - /payment-methods","For relationships, use nesting only when the child cannot exist without the parent - /users/42/orders","Use query params for modifiers like filter, sort, pagination - keep path stable"],mentalModel:{title:"Mental model",text:"A path should answer - what is this thing. Query params answer - how do you want it."},example:{title:"Example - nesting vs query params",code:`// Child depends on parent, nesting is OK
GET /users/42/orders

// If orders are global, prefer query params
GET /orders?userId=42`},gotchas:["Over-nesting makes URLs unreadable and hard to maintain."]},{key:"paginationFiltering",title:"Pagination and filtering",icon:t.jsx(fu,{}),summary:"Pagination prevents huge responses. Filtering lets clients ask for a subset of data without extra endpoints.",bullets:["Offset pagination - page and limit. Simple but can be slow on large datasets and can shift with new inserts","Cursor pagination - use a stable cursor like createdAt or id. Better for large lists and infinite scroll","Filtering with query params - status, date ranges, search terms","Return metadata - total count (optional), next cursor, hasMore","Always validate pagination inputs to prevent abuse - max limit and sane defaults"],mentalModel:{title:"Mental model",text:"Pagination is like reading a book in pages. Filtering is choosing only chapters you care about."},example:{title:"Example - common patterns",code:`// Offset pagination
GET /users?page=2&limit=20

// Cursor pagination
GET /users?cursor=2026-03-01T00:00:00.000Z&limit=20

// Filtering
GET /orders?status=delivered&minTotal=500`},gotchas:["Never allow limit=100000. Put a hard max like 50 or 100.","Cursor must be stable and indexed for speed."]},{key:"sortingSearching",title:"Sorting and searching",icon:t.jsx(Gm,{}),summary:"Sorting is ordering results. Searching is matching text or fields, often using partial matches.",bullets:["Sorting with sort and order params. Example - sort=createdAt and order=desc","Allow a safe set of sortable fields to prevent SQL injection style issues or heavy queries","Searching can be simple - q=term - or advanced with field specific filters","For full-text search at scale, use search engines or DB full-text features","Always define how search behaves - case sensitivity, partial match rules"],mentalModel:{title:"Mental model",text:"Sorting chooses the order of items you already selected. Searching changes which items are selected."},example:{title:"Example - sorting and searching",code:`GET /products?sort=price&order=asc
GET /products?q=wireless%20mouse
GET /products?brand=logitech&q=mouse&sort=rating&order=desc`},gotchas:["Do not let clients sort by any field without validation.","Search queries can be expensive. Add rate limiting and caching."]},{key:"statusCodes",title:"Status codes",icon:t.jsx(Tt,{}),summary:"Status codes communicate what happened. They are not decoration. Clients use them for logic and error handling.",bullets:["200 OK - successful request","201 Created - resource created (often returns the new resource or location)","204 No Content - success with no body (common for delete)","400 Bad Request - validation error or malformed input","401 Unauthorized - missing or invalid auth","403 Forbidden - authenticated but not allowed","404 Not Found - resource does not exist","409 Conflict - duplicate or conflicting update","422 Unprocessable Entity - validation style errors (some teams use 400 instead, consistency matters)","429 Too Many Requests - rate limited","500 Internal Server Error - server failure"],mentalModel:{title:"Mental model",text:"Status codes are like traffic signals for clients. They tell the client what to do next without reading human text."},example:{title:"Example - practical responses",code:`// Create user
201 Created
{
  "id": "u_42",
  "name": "Neha"
}

// Invalid input
400 Bad Request
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "email is required",
    "fields": { "email": "required" }
  }
}`},gotchas:["Do not return 200 for everything. Use correct codes.","Do not leak internal error details in 500 responses."]},{key:"errorShape",title:"Error response shape",icon:t.jsx(be,{}),summary:"A consistent error shape makes debugging easier and improves client reliability.",bullets:["Always return an error object with code and message","Include requestId or correlationId so logs can be searched","For validation errors, include field wise details","Avoid leaking stack traces or internal DB errors","Keep messages user safe and developer useful"],mentalModel:{title:"Mental model",text:"Errors are part of your API contract. A stable error shape is as important as a stable success response."},example:{title:"Example - recommended error format",code:`{
  "error": {
    "code": "AUTH_REQUIRED",
    "message": "Login required",
    "requestId": "req_9f2c"
  }
}`},gotchas:["If clients cannot rely on error shape, they will implement messy workarounds."]},{key:"versioning",title:"Versioning strategies",icon:t.jsx(tt,{}),summary:"Versioning prevents breaking existing clients. The best version is the one you rarely need because you designed your API carefully.",bullets:["Path versioning - /v1/users. Simple and common.","Header versioning - Accept: application/vnd.app.v1+json. More strict, less visible.","Query param versioning - /users?version=1. Usually not preferred but used sometimes.","Avoid breaking changes - add fields, do not remove or rename without a new version.","Deprecate gracefully - support old versions for a window and communicate timeline."],mentalModel:{title:"Mental model",text:"Versioning is like releasing a new remote control layout. Old TVs should still work until users upgrade."},example:{title:"Example - safe evolution",code:`// v1 response
{ "id": "u1", "name": "Ashish" }

// v2 adds fields without breaking old clients
{ "id": "u1", "name": "Ashish", "role": "admin" }`},gotchas:["Do not version for every tiny change. Version only for breaking changes.","Avoid removing fields. Mark them deprecated and keep them for a while."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(uf.Wrapper,{id:"api-design",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"API design"}),t.jsx("span",{className:"sub",children:"REST, naming, pagination, sorting, status codes, errors, versioning"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"What great API design is"}),t.jsx("div",{className:"introSub",children:"A great API is predictable, consistent, and safe under real-world usage. It should be easy to consume, hard to misuse, and stable over time."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"hintText",children:"Revision tip: Say the best status codes for create, update, delete, and validation errors."})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(Be,{})}),t.jsx("span",{className:"closingText",children:"Consistency beats perfection. A predictable API is easier to scale, test, secure, and maintain."})]})]})]})},hf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 8000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},mf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"clientServer",title:"Client and server separation",icon:t.jsx(tt,{}),summary:"Frontend and backend have separate responsibilities. The client requests, the server responds. Both can evolve independently.",points:["Client handles UI and user interactions.","Server owns data, rules, validation, and persistence.","This separation lets you change UI without changing the API contract, and scale server separately."],mentalModel:"Client is the shopper. Server is the store. Shopper asks, store decides and returns.",example:`GET /users/42
200 OK
{
  "id": 42,
  "name": "Neha"
}`,pitfalls:["Do not let UI concerns leak into API design.","Do not return HTML pages from JSON APIs unless it is intentional."]},{key:"stateless",title:"Stateless requests",icon:t.jsx(gu,{}),summary:"Each request should contain everything needed to understand it. The server should not depend on previous requests to process the current one.",points:["Auth info is sent with every request, like cookie or Authorization header.","Scaling is easier because any server instance can handle any request.","Stateless does not mean no sessions. It means the server should not keep hidden conversational state per request flow."],mentalModel:"Every request is a fresh form you submit. The server reads that form and responds. No memory games.",example:`GET /orders?status=pending&page=2
Authorization: Bearer <token>

200 OK
{
  "page": 2,
  "items": [...]
}`,pitfalls:["Server memory based state breaks horizontal scaling.","Hidden state makes bugs hard to reproduce."]},{key:"resourceBased",title:"Resources, not actions",icon:t.jsx(So,{}),summary:"REST is about resources. Use nouns in URLs. Use HTTP methods for actions.",points:["Use /users, /orders, /products as resources.","Use methods - GET read, POST create, PUT replace, PATCH update, DELETE remove.","Avoid verbs in URL like /getUsers or /createOrder."],mentalModel:"URL names the thing. HTTP method describes what you want to do with the thing.",example:`POST /orders
{
  "productId": 10,
  "qty": 2
}

201 Created
{
  "id": 901,
  "status": "pending"
}`,pitfalls:["Do not mix verbs into URL if a method already represents the action.","Keep resource naming consistent and predictable."]},{key:"uniformInterface",title:"Uniform interface",icon:t.jsx(Kt,{}),summary:"A consistent, predictable interface across resources. Clients should not need special rules for each endpoint.",points:["Same patterns for pagination, filtering, sorting across endpoints.","Consistent response shape and consistent error format.","Use standard HTTP semantics - status codes, content type, headers."],mentalModel:"Like driving any car. Steering is always the wheel, not different controls per car.",example:`GET /products?page=1&limit=20&sort=-price

200 OK
{
  "items": [...],
  "page": 1,
  "limit": 20,
  "total": 240
}`,pitfalls:["Inconsistent parameter names confuse clients.","Changing response shapes randomly causes frontend breakage."]},{key:"cacheable",title:"Cacheable responses",icon:t.jsx(yu,{}),summary:"Responses should declare if they can be cached. Caching improves speed and reduces server load.",points:["Safe reads like GET are often cacheable if data is not user specific.","Use Cache-Control and ETag when relevant.","Caching is not only CDN. Browser caching is also valuable."],mentalModel:"If many people ask the same question, keep the answer on the wall so you do not repeat yourself.",example:`GET /public/products

200 OK
Cache-Control: public, max-age=60
ETag: "v1-products-abc"`,pitfalls:["Do not cache private user data publicly.","If caching exists, have a plan for invalidation."]},{key:"layeredSystem",title:"Layered system",icon:t.jsx(Pe,{}),summary:"Clients do not need to know if they are talking to the real server or a gateway, cache, load balancer, or proxy.",points:["API gateway can handle auth, rate limits, logging.","Load balancers distribute traffic across instances.","CDN and reverse proxies can cache and compress responses."],mentalModel:"Client sees one door. Behind the door are multiple rooms that handle the work.",example:"Client -> CDN -> Load Balancer -> API Gateway -> Node API -> Database",pitfalls:["Debugging is harder if you do not add correlation IDs.","Make sure your layers forward the right headers."]},{key:"idempotency",title:"Idempotency",icon:t.jsx(Be,{}),summary:"An operation is idempotent if repeating it gives the same final result. This matters for retries and reliability.",points:["GET is idempotent. Safe reads do not change state.","PUT is typically idempotent because it replaces a resource with the same state each time.","POST is usually not idempotent because it creates new resources each time, unless you add an idempotency key."],mentalModel:"Pressing elevator button again does not change the destination. That is idempotent.",example:`PUT /users/42
{
  "name": "Ashish"
}

Calling this multiple times keeps the user name as "Ashish".`,pitfalls:["Retries on POST can create duplicate orders without an idempotency strategy."]},{key:"restNotReligion",title:"REST is a style, not a religion",icon:t.jsx(be,{}),summary:"REST principles help with clarity and scale, but real systems sometimes need exceptions. Be consistent and explain the choice.",points:["Sometimes you need action endpoints like /auth/login. That is fine.","Batch operations and complex queries may not fit pure REST.","The goal is predictable API contracts, not perfect theory."],mentalModel:"Use the rules to build a readable city, not to punish yourself for one weird building.",example:`POST /auth/login
POST /reports/generate

These are acceptable when they represent processes rather than resources.`,pitfalls:["Avoid random exceptions. Document them clearly."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(hf.Wrapper,{id:"rest-principles",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"REST principles"}),t.jsx("span",{className:"sub",children:"Resource thinking, statelessness, consistent contracts, caching, layers, idempotency"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"What REST is trying to solve"}),t.jsx("div",{className:"introSub",children:"REST makes APIs predictable. Predictable APIs are easier to build, test, scale, and consume. Focus on clear resources, consistent patterns, and correct HTTP semantics."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-p-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Mental model"}),t.jsx("p",{className:"para",children:p.mentalModel})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Example"}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.pitfalls.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-pit-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Co,{})}),t.jsx("span",{className:"hintText",children:"Interview tip: Define REST in 2 lines and give one example of resource naming."})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(Kt,{})}),t.jsx("span",{className:"closingText",children:"Strong REST is mostly about consistency. Your API should feel obvious to use even without reading docs."})]})]})]})},ff={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 8000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .concepts {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            border-bottom: 1px solid var(--color-border);

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }

            .concept {
                border-radius: 16px;
                border: 1px solid var(--color-border);
                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );
                box-shadow: 0 16px 36px var(--color-shadow);

                padding: 12px;
                display: flex;
                gap: 12px;
                align-items: flex-start;

                transition:
                    transform 160ms ease,
                    border-color 160ms ease,
                    box-shadow 160ms ease;

                &:hover {
                    transform: translateY(-2px);
                    border-color: var(--color-border-light);
                    box-shadow: 0 20px 44px var(--color-shadow);
                }

                .cIcon {
                    width: 38px;
                    height: 38px;
                    border-radius: 14px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid var(--color-border);
                    background: color-mix(
                        in srgb,
                        var(--color-primary) 12%,
                        var(--color-surface)
                    );
                    color: var(--color-text-primary);
                    flex: 0 0 auto;
                }

                .cTitle {
                    font-weight: 900;
                    color: var(--color-text-primary);
                    margin-bottom: 4px;
                }

                .cSub {
                    font-size: 12.5px;
                    color: var(--color-text-secondary);
                    line-height: 1.55;
                }
            }
        }

        .sectionTitle {
            padding: 14px 14px 0 14px;
            font-weight: 900;
            color: var(--color-text-primary);
            display: flex;
            flex-direction: column;
            gap: 4px;

            .sectionTitleHint {
                font-size: 12px;
                color: var(--color-text-muted);
                font-weight: 800;
            }
        }

        .strategyLayout {
            padding: 14px;
            display: grid;
            grid-template-columns: 360px 1fr;
            gap: 12px;
            border-bottom: 1px solid var(--color-border);

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .tabs {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tab {
            width: 100%;
            text-align: left;

            display: flex;
            align-items: center;
            gap: 12px;

            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            .tabIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .tabText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .tabTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .tabLabel {
                font-size: 12px;
                font-weight: 900;
                color: var(--color-text-muted);
            }

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }

            &.on {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 48%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 20px 44px var(--color-shadow);
            }
        }

        .panel {
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .panelTop {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            display: flex;
            justify-content: space-between;
            gap: 12px;
            align-items: flex-start;

            .panelHead {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .pIcon {
                width: 44px;
                height: 44px;
                border-radius: 16px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }

            .badge {
                flex: 0 0 auto;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface) 70%,
                    transparent
                );
                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }
        }

        .panelGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .rulesPitfalls {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .box {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .box.good {
            background: linear-gradient(
                180deg,
                color-mix(
                    in srgb,
                    var(--color-accent) 10%,
                    var(--color-surface)
                ),
                var(--color-surface-2)
            );
        }

        .box.warn {
            background: linear-gradient(
                180deg,
                color-mix(
                    in srgb,
                    var(--color-warning) 10%,
                    var(--color-surface)
                ),
                var(--color-surface-2)
            );
        }

        .boxTitle {
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            font-weight: 900;
            color: var(--color-text-primary);

            display: flex;
            align-items: center;
            gap: 10px;
        }

        .codeBox {
            margin: 0 14px 14px 14px;
        }

        .list {
            padding: 12px 14px 14px 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            margin: 0 14px 0 14px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .tipRow {
            padding: 12px 14px 14px 14px;
            display: flex;
            align-items: center;
            gap: 10px;

            .tipIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .tipText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 800;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .tab,
            .box,
            .concept {
                transition: none !important;
            }
        }
    `},gf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("path"),m=z.useMemo(()=>[{key:"path",title:"Path versioning",icon:t.jsx(So,{}),label:"Most common",summary:"Put version in the URL path like /v1/users.",goodFor:["Public APIs where clarity matters","Multiple versions live together","Easy routing and caching rules"],watchOut:["Versioning every tiny change becomes messy","Some teams forget to sunset old versions"],example:{title:"Example",code:`GET /api/v1/users
POST /api/v1/orders

// When you introduce a breaking change
GET /api/v2/users`},tip:"Use v1 only for breaking changes. For non breaking changes, evolve the same version."},{key:"query",title:"Query parameter versioning",icon:t.jsx(Tt,{}),label:"Sometimes used",summary:"Put version in query like /users?version=1.",goodFor:["Internal APIs with controlled clients","Quick experiments"],watchOut:["Easy to misuse and hard to enforce","CDN caching can get tricky if query rules are not consistent","Feels less clean in documentation"],example:{title:"Example",code:`GET /api/users?version=1
GET /api/users?version=2`},tip:"Prefer path versioning for public APIs unless you have strong reasons."},{key:"header",title:"Header based versioning",icon:t.jsx(tt,{}),label:"Advanced",summary:"Client sends version in a header like X-API-Version: 2.",goodFor:["APIs where URLs must stay stable","Some enterprise setups"],watchOut:["Harder to test from browser directly","Docs and tooling need extra care","CDN caching needs header-aware configuration"],example:{title:"Example",code:`GET /api/users
X-API-Version: 2`},tip:"Only choose this if your gateway, docs, and caching story is mature."},{key:"mediaType",title:"Media type versioning",icon:t.jsx($a,{}),label:"Strong but complex",summary:"Version via Accept header like application/vnd.company.v2+json.",goodFor:["Content negotiation heavy systems","Strict API governance teams"],watchOut:["Complex for most teams","Tooling friction and client confusion"],example:{title:"Example",code:`GET /api/users
Accept: application/vnd.backendnotes.v2+json`},tip:"If you do this, keep conventions strict and docs very clear."}],[]),w=z.useMemo(()=>[{icon:t.jsx(Pe,{}),title:"Breaking change",text:"A change that can break existing clients without them changing anything. Example - renaming a field, changing response shape, changing meaning of a status code."},{icon:t.jsx(Qa,{}),title:"Non breaking change",text:"A change that should not break old clients. Example - adding an optional field, adding a new endpoint, adding a new enum value if clients handle unknown values safely."},{icon:t.jsx(Be,{}),title:"Backward compatibility",text:"New server version still works for old clients. This is a goal. Versioning is a tool when you cannot keep backward compatibility."}],[]),S=z.useMemo(()=>["Version only for breaking changes. Do not version for every small feature.","Keep old versions alive for a defined window and publish a sunset plan.","Deprecate with clear dates and communicate with clients early.","Document differences between v1 and v2 in one place, do not scatter it.","If you add fields, keep them optional and avoid changing existing meanings."],[]),p=z.useMemo(()=>["Shipping v2 without migrating clients, then keeping v1 forever","Breaking changes without version bump","Mixing versions inside one response payload","No deprecation policy and no timeline","Not testing old clients against new server behavior"],[]),x=()=>c(T=>!T),v=T=>u(T),b=m.find(T=>T.key===l)||m[0];return t.jsxs(ff.Wrapper,{id:"versioning",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:x,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Hm,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Versioning"}),t.jsx("span",{className:"sub",children:"How to evolve APIs safely without breaking clients"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"What versioning means"}),t.jsx("div",{className:"introSub",children:"API versioning is the practice of managing breaking changes. If you cannot keep backward compatibility, you publish a new version so old clients still work while new clients move forward."})]})]}),t.jsx("div",{className:"concepts",children:w.map(T=>t.jsxs("div",{className:"concept",children:[t.jsx("div",{className:"cIcon",children:T.icon}),t.jsxs("div",{className:"cText",children:[t.jsx("div",{className:"cTitle",children:T.title}),t.jsx("div",{className:"cSub",children:T.text})]})]},T.title))}),t.jsxs("div",{className:"sectionTitle",children:["Pick a strategy",t.jsx("span",{className:"sectionTitleHint",children:"Path versioning is usually the simplest and clearest."})]}),t.jsxs("div",{className:"strategyLayout",children:[t.jsx("div",{className:"tabs",role:"tablist","aria-label":"Versioning strategies",children:m.map(T=>{const R=T.key===l;return t.jsxs("button",{type:"button",role:"tab","aria-selected":R,className:`tab ${R?"on":""}`,onClick:()=>v(T.key),title:T.summary,children:[t.jsx("span",{className:"tabIcon",children:T.icon}),t.jsxs("span",{className:"tabText",children:[t.jsx("span",{className:"tabTitle",children:T.title}),t.jsx("span",{className:"tabLabel",children:T.label})]})]},T.key)})}),t.jsxs("div",{className:"panel",role:"tabpanel",children:[t.jsxs("div",{className:"panelTop",children:[t.jsxs("div",{className:"panelHead",children:[t.jsx("div",{className:"pIcon",children:b.icon}),t.jsxs("div",{className:"pText",children:[t.jsx("div",{className:"pTitle",children:b.title}),t.jsx("div",{className:"pSummary",children:b.summary})]})]}),t.jsx("div",{className:"badge",children:b.label})]}),t.jsxs("div",{className:"panelGrid",children:[t.jsxs("div",{className:"box good",children:[t.jsxs("div",{className:"boxTitle",children:[t.jsx(Be,{})," Good for"]}),t.jsx("ul",{className:"list",children:b.goodFor.map((T,R)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:T})]},`g-${R}`))})]}),t.jsxs("div",{className:"box warn",children:[t.jsxs("div",{className:"boxTitle",children:[t.jsx(be,{})," Watch out"]}),t.jsx("ul",{className:"list",children:b.watchOut.map((T,R)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:T})]},`w-${R}`))})]})]}),t.jsxs("div",{className:"box codeBox",children:[t.jsx("div",{className:"boxTitle",children:b.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:b.example.code})}),t.jsxs("div",{className:"tipRow",children:[t.jsx("span",{className:"tipIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"tipText",children:b.tip})]})]})]})]}),t.jsxs("div",{className:"sectionTitle",children:["Practical rules",t.jsx("span",{className:"sectionTitleHint",children:"These keep APIs stable and teams sane."})]}),t.jsxs("div",{className:"rulesPitfalls",children:[t.jsxs("div",{className:"box good",children:[t.jsxs("div",{className:"boxTitle",children:[t.jsx(Be,{})," Rules to follow"]}),t.jsx("ul",{className:"list",children:S.map((T,R)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:T})]},`r-${R}`))})]}),t.jsxs("div",{className:"box warn",children:[t.jsxs("div",{className:"boxTitle",children:[t.jsx(be,{})," Common pitfalls"]}),t.jsx("ul",{className:"list",children:p.map((T,R)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:T})]},`p-${R}`))})]})]}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx($a,{})}),t.jsx("span",{className:"closingText",children:'Interview line: "I version APIs only for breaking changes, keep backward compatibility by default, and always publish a clear deprecation and sunset plan."'})]})]})]})},vf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .quickMap {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .qmTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
            }

            .qmGrid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 12px;

                @media (width < 980px) {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                @media (width < 520px) {
                    grid-template-columns: 1fr;
                }
            }

            .qmCard {
                border: 1px solid var(--color-border);
                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );
                border-radius: 16px;
                padding: 12px;
                box-shadow: 0 14px 30px var(--color-shadow);

                transition:
                    transform 140ms ease,
                    border-color 140ms ease;

                &:hover {
                    transform: translateY(-2px);
                    border-color: var(--color-border-light);
                }
            }

            .qmTop {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 6px;
            }

            .qmIcon {
                width: 34px;
                height: 34px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);

                svg {
                    width: 16px;
                    height: 16px;
                }
            }

            .qmIcon.good {
                background: color-mix(
                    in srgb,
                    var(--color-success) 14%,
                    transparent
                );
                color: var(--color-success);
            }

            .qmIcon.info {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    transparent
                );
                color: var(--color-primary);
            }

            .qmIcon.warn {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 14%,
                    transparent
                );
                color: var(--color-warning);
            }

            .qmIcon.bad {
                background: color-mix(
                    in srgb,
                    var(--color-error) 14%,
                    transparent
                );
                color: var(--color-error);
            }

            .qmText {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 13px;
            }

            .qmSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon.good {
                background: color-mix(
                    in srgb,
                    var(--color-success) 14%,
                    transparent
                );
                color: var(--color-success);
            }

            .cIcon.info {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    transparent
                );
                color: var(--color-primary);
            }

            .cIcon.warn {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 14%,
                    transparent
                );
                color: var(--color-warning);
            }

            .cIcon.bad {
                background: color-mix(
                    in srgb,
                    var(--color-error) 14%,
                    transparent
                );
                color: var(--color-error);
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 4200px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .codes {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .codeRow {
            display: grid;
            grid-template-columns: 130px 1fr;
            gap: 12px;
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 620px) {
                grid-template-columns: 1fr;
            }
        }

        .codeTag {
            align-self: start;
            justify-self: start;
            padding: 8px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 0.2px;
        }

        .codeInfo {
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .when {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mini {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .miniTitle {
            font-size: 12px;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        .miniCode {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 10px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .pit {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            padding: 10px 10px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );

            .pitIcon {
                color: var(--color-warning);
                padding-top: 2px;
                flex: 0 0 auto;
            }

            .pitText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .qmCard,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},yf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"2xx",title:"2xx - Success",icon:t.jsx(Be,{}),summary:"Request was received and processed successfully. Use specific codes to describe what happened.",codes:[{code:"200 OK",when:"Standard success response. Use when you return data or a normal success message.",example:`GET /users - return list of users
PUT /users/12 - return updated user`,pitfall:"Avoid using 200 for everything. If you created something, consider 201."},{code:"201 Created",when:"A new resource was created. Usually used for POST create endpoints.",example:`POST /users - created a user
Response: return created user and Location header`,pitfall:"If nothing is created, do not use 201. For async jobs, consider 202."},{code:"204 No Content",when:"Success but no response body. Common for delete or update when you do not return data.",example:`DELETE /users/12 - successfully deleted
Response body should be empty`,pitfall:"Do not send JSON body with 204. Many clients ignore it."}],keyPoints:["2xx means the request succeeded at the HTTP layer.","Pick codes that match the API action. It helps clients behave correctly.","204 is great when you do not want payload. It saves bandwidth."],shape:{title:"Typical success response shape",code:`// Example success JSON shape
{
  "ok": true,
  "data": {
    "id": "12",
    "name": "Neha"
  }
}`}},{key:"3xx",title:"3xx - Redirection",icon:t.jsx(Ze,{}),summary:"Client must take another action to complete the request. Common on web flows and caching.",codes:[{code:"301 Moved Permanently",when:"Resource moved permanently. Browsers and caches may remember it.",example:"GET /docs - permanently moved to /documentation",pitfall:"Be careful in APIs. Clients might cache 301 and ignore future changes."},{code:"302 Found",when:"Temporary redirect. Common in login flows.",example:"After login redirect to a dashboard page",pitfall:"For APIs, redirects are often unexpected unless you are doing web auth flows."},{code:"304 Not Modified",when:"Used with caching headers. Means client cache is still valid, so no body is sent.",example:`GET /assets with If-None-Match and ETag
Server replies 304 if unchanged`,pitfall:"You must implement caching headers correctly for 304 to make sense."}],keyPoints:["3xx is more common in browsers than pure JSON APIs.","304 is powerful for caching and performance when using ETag or If-Modified-Since."],shape:{title:"Caching example idea",code:`// Client sends
If-None-Match: "etag-value"

// Server sends if same
304 Not Modified
// no body`}},{key:"4xx",title:"4xx - Client errors",icon:t.jsx(be,{}),summary:"Client sent something wrong. The server understood the request, but cannot or will not process it.",codes:[{code:"400 Bad Request",when:"Malformed request or validation failed. Use for invalid payloads and missing required fields.",example:`POST /users with missing email
Response includes validation errors`,pitfall:"Do not use 400 for auth failures. Use 401 or 403."},{code:"401 Unauthorized",when:"Authentication is missing or invalid. Means you need to login or provide valid credentials.",example:"Missing token or invalid session cookie",pitfall:"401 is about identity. Permission issues are usually 403."},{code:"403 Forbidden",when:"Authenticated but not allowed. The identity is known but lacks permission.",example:"User logged in but tries to access admin route",pitfall:"Do not leak sensitive permission rules. Use consistent error message."},{code:"404 Not Found",when:"Resource not found. Used when ID does not exist or route is unknown.",example:"GET /users/999 where user 999 does not exist",pitfall:"For security, sometimes 404 is used instead of 403 to hide existence of a resource."},{code:"409 Conflict",when:"Request conflicts with current state. Common for unique constraint or version conflicts.",example:`POST /users with email already exists
Update conflicts with optimistic locking`,pitfall:"Avoid using 400 for conflicts. 409 makes client logic cleaner."},{code:"429 Too Many Requests",when:"Rate limit exceeded. Client is sending too many requests.",example:`Login attempts too fast
API calls exceed quota`,pitfall:"Always include Retry-After when possible."}],keyPoints:["4xx means client must change something before retrying.","400 is validation and payload issues.","401 is identity missing or invalid.","403 is identity ok but permission denied.","429 is throttling and rate limits."],shape:{title:"Recommended error response shape",code:`// Example error JSON shape
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "issue": "missing" }
    ]
  }
}`}},{key:"5xx",title:"5xx - Server errors",icon:t.jsx(Wa,{}),summary:"Server failed to process a valid request. Usually not the client fault. Log these with correlation IDs.",codes:[{code:"500 Internal Server Error",when:"Generic server crash or unhandled error.",example:`Unhandled exception
Database connection failed unexpectedly`,pitfall:"Do not expose stack traces to clients. Log internally."},{code:"502 Bad Gateway",when:"Upstream service or proxy returned invalid response. Common behind load balancers.",example:"Nginx received invalid response from Node server",pitfall:"Often indicates upstream crash or misconfiguration."},{code:"503 Service Unavailable",when:"Service temporarily unavailable. Maintenance or overloaded.",example:`Deploy window
Database under heavy load`,pitfall:"Return Retry-After if you know when to retry."},{code:"504 Gateway Timeout",when:"Upstream took too long to respond. Timeout between services.",example:"API gateway waited too long for backend response",pitfall:"Tune timeouts and investigate slow queries or dependency slowness."}],keyPoints:["5xx means the client request is usually fine but the server failed.","Always log 5xx with request id, user id if safe, route, and error.","If your system uses multiple services, 502 and 504 become common signals."],shape:{title:"Production logging reminder",code:`// Log with context
{
  "level": "error",
  "msg": "request failed",
  "route": "GET /users/12",
  "status": 500,
  "requestId": "req_8f2a",
  "error": "DB_TIMEOUT"
}`}}],[]),w=()=>{c(x=>!x),a&&u(null)},S=x=>{u(v=>v===x?null:x)},p=x=>x==="2xx"?"good":x==="3xx"?"info":x==="4xx"?"warn":"bad";return t.jsxs(vf.Wrapper,{id:"status-codes",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Status codes"}),t.jsx("span",{className:"sub",children:"2xx success, 3xx redirect, 4xx client errors, 5xx server errors - practical API usage"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why status codes matter"}),t.jsxs("div",{className:"introSub",children:["HTTP status codes are signals for clients. When you choose them correctly, frontend logic becomes simpler, retries become safer, and debugging becomes faster.",t.jsx("br",{}),"Use clear codes for clear behavior."]})]})]}),t.jsxs("div",{className:"quickMap",children:[t.jsx("div",{className:"qmTitle",children:"Quick mapping you should remember"}),t.jsxs("div",{className:"qmGrid",children:[t.jsxs("div",{className:"qmCard",children:[t.jsxs("div",{className:"qmTop",children:[t.jsx("span",{className:"qmIcon good",children:t.jsx(Be,{})}),t.jsx("span",{className:"qmText",children:"2xx - success"})]}),t.jsx("div",{className:"qmSub",children:"Client can proceed normally"})]}),t.jsxs("div",{className:"qmCard",children:[t.jsxs("div",{className:"qmTop",children:[t.jsx("span",{className:"qmIcon info",children:t.jsx(Ze,{})}),t.jsx("span",{className:"qmText",children:"3xx - redirect and cache"})]}),t.jsx("div",{className:"qmSub",children:"Client must take another step"})]}),t.jsxs("div",{className:"qmCard",children:[t.jsxs("div",{className:"qmTop",children:[t.jsx("span",{className:"qmIcon warn",children:t.jsx(be,{})}),t.jsx("span",{className:"qmText",children:"4xx - client error"})]}),t.jsx("div",{className:"qmSub",children:"Client must fix request"})]}),t.jsxs("div",{className:"qmCard",children:[t.jsxs("div",{className:"qmTop",children:[t.jsx("span",{className:"qmIcon bad",children:t.jsx(Wa,{})}),t.jsx("span",{className:"qmText",children:"5xx - server error"})]}),t.jsx("div",{className:"qmSub",children:"Server failed, log and investigate"})]})]})]}),t.jsx("div",{className:"grid",children:m.map(x=>{const v=l===x.key,b=p(x.key);return t.jsxs("div",{className:`card ${v?"open":""} ${b}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(x.key),"aria-expanded":v,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:`cIcon ${b}`,children:x.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:x.title}),t.jsx("span",{className:"cSummary",children:x.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${v?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${v?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"When to use"}),t.jsx("div",{className:"codes",children:x.codes.map((T,R)=>t.jsxs("div",{className:"codeRow",children:[t.jsx("div",{className:"codeTag",children:T.code}),t.jsxs("div",{className:"codeInfo",children:[t.jsx("div",{className:"when",children:T.when}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"miniTitle",children:"Example"}),t.jsx("pre",{className:"miniCode",children:t.jsx("code",{children:T.example})})]}),t.jsxs("div",{className:"pit",children:[t.jsx("span",{className:"pitIcon",children:t.jsx(be,{})}),t.jsx("span",{className:"pitText",children:T.pitfall})]})]})]},`${x.key}-c-${R}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:x.keyPoints.map((T,R)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:T})]},`${x.key}-kp-${R}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:x.shape.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:x.shape.code})})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsxs("span",{className:"hintText",children:["Interview tip: Explain ",x.key," in one sentence and give 2 real examples."]})]})]})]},x.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Good status codes reduce bugs. They turn API behavior into predictable client behavior."})]})]})]})},bf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .callout {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .callIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .callText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(in srgb, var(--color-error) 10%, transparent);
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `};function wf(a){return V({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(a)}const kf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"jwt",title:"JWT - JSON Web Token",icon:t.jsx(St,{}),summary:"JWT is a signed token that carries claims about the user. It is commonly used for stateless authentication.",bullets:["JWT usually has 3 parts - header.payload.signature (Base64URL encoded).","Signature verifies integrity - if payload changes, signature validation fails.","JWT is not encryption. Anyone can read the payload if they have the token.","JWT works well when you do not want server-side sessions, but revocation becomes harder."],mentalModel:{title:"Mental model",text:"JWT is like an ID card signed by the issuer. The bouncer checks the signature to trust it. The bouncer does not need to call the issuer every time."},example:{title:"Example - access token usage",code:`// Client sends access token
// Authorization: Bearer <accessToken>

// Server verifies signature and reads claims
import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : null;

  if (!token) return res.status(401).json({ error: "missing_token" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.sub, role: payload.role };
    next();
  } catch (e) {
    return res.status(401).json({ error: "invalid_token" });
  }
}`},gotchas:["Do not put secrets in JWT payload. Payload is readable.","Keep access tokens short-lived to reduce damage if leaked.","Revocation is not automatic. If a token is stolen, it stays valid until expiry unless you add a blocklist or rotate keys."]},{key:"cookiesSessions",title:"Cookies and sessions",icon:t.jsx(wf,{}),summary:"Sessions store auth state on the server. The browser holds a session id in a cookie. This is common for web apps.",bullets:["Session id is stored in a cookie. Server maps session id to user data.","Cookies can be HttpOnly to prevent JavaScript access and reduce XSS token theft.","SameSite helps reduce CSRF risk. Secure ensures cookie only over HTTPS.","Sessions are easy to revoke because server can delete the session anytime."],mentalModel:{title:"Mental model",text:"Session auth is like a coat check ticket. The ticket itself is useless without the coat room (server). The server can invalidate the ticket anytime."},example:{title:"Example - safe cookie flags",code:`// Set cookie for session id (example)
res.cookie("sid", sessionId, {
  httpOnly: true,
  secure: true,        // true in production (HTTPS)
  sameSite: "lax",     // "none" + secure for cross-site scenarios
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000
});

// On every request, browser auto sends cookie
// Cookie: sid=<sessionId>`},gotchas:["Cookies are sent automatically by browsers, which is why CSRF matters.","If SameSite is None, you must use Secure and handle CSRF properly.","Session storage must scale (Redis is common). Memory sessions break on multiple instances."]},{key:"oauth",title:"OAuth - Open Authorization",icon:t.jsx(Kt,{}),summary:"OAuth lets an app get limited access to a user account on another service without sharing the user password.",bullets:["OAuth is about authorization (access to resources), not identity by itself.","Common flow for web apps is Authorization Code flow (often with PKCE).","There are roles - Resource Owner (user), Client (your app), Authorization Server, Resource Server.","In real apps, you often combine OAuth with OIDC (OpenID Connect) for login identity claims."],mentalModel:{title:"Mental model",text:"OAuth is giving a valet key to your app. It can open some doors but not everything, and it can expire or be revoked."},example:{title:"Example - high level Authorization Code flow",code:`// 1) Redirect user to provider authorize URL
// 2) Provider redirects back with ?code=...
// 3) Server exchanges code for tokens using client credentials
// 4) Server uses access token to call provider APIs

// Important point:
// - code is short-lived
// - access token is used to call resource server
// - refresh token can mint new access tokens (if granted)`},gotchas:["Never handle OAuth tokens in a way that exposes them to XSS.","Use PKCE for public clients (SPAs and mobile apps).","Validate redirect URIs strictly to avoid token leakage."]},{key:"refreshTokens",title:"Refresh tokens",icon:t.jsx(vl,{}),summary:"Refresh tokens are long-lived credentials used to mint new short-lived access tokens without forcing the user to log in again.",bullets:["Access token - short life, used on every API call.","Refresh token - longer life, used only to get a new access token.","A common pattern is rotating refresh tokens - every refresh returns a new refresh token and invalidates the old one.","Store refresh tokens more safely than access tokens. HttpOnly cookie is a common choice for web apps."],mentalModel:{title:"Mental model",text:"Access token is a visitor pass for today. Refresh token is your membership card used only at the reception desk to get a new visitor pass."},example:{title:"Example - token rotation idea",code:`// POST /auth/refresh
// - client sends refresh token (often in HttpOnly cookie)
// - server verifies it, then issues new access token
// - server also issues a new refresh token and invalidates previous one

// Why rotate?
// - If an old refresh token gets stolen, reuse can be detected and blocked`},gotchas:["If refresh token leaks, attacker can keep minting access tokens.","Do not store refresh tokens in localStorage in browser apps.","Implement logout by invalidating refresh token server-side."]},{key:"csrfSafeFlows",title:"CSRF-safe auth flows",icon:t.jsx(Pe,{}),summary:"CSRF - Cross Site Request Forgery happens when a browser auto-sends cookies to your site from a malicious page. Defend it if you use cookie-based auth.",bullets:["If you use Authorization header Bearer tokens, CSRF risk is lower because browser does not auto attach it.","If you use cookies for auth, add CSRF defenses.","SameSite=Lax blocks many cross-site POSTs but not all scenarios.","Common defenses - CSRF token (double submit or server stored), Origin or Referer checks, and safe cookie flags."],mentalModel:{title:"Mental model",text:"CSRF is a trick where your browser is fooled into sending a valid cookie. The attacker cannot read the response, but they can trigger state-changing requests."},example:{title:"Example - basic CSRF token pattern",code:`// 1) Server sends a CSRF token (not HttpOnly) and a session cookie (HttpOnly)
// 2) Client reads CSRF token and sends it in a header for unsafe methods

// Client: send header
// X-CSRF-Token: <token>

// Server: verify header token matches expected value for session/user
// If token missing or invalid, reject with 403`},gotchas:["Do not disable CSRF just because you have CORS. They solve different problems.","Protect state-changing routes - POST, PUT, PATCH, DELETE.","Always validate Origin where possible for browser traffic."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(bf.Wrapper,{id:"authentication",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,title:a?"Collapse section":"Expand section",children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(rt,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Authentication"}),t.jsx("span",{className:"sub",children:"JWT, cookies and sessions, OAuth, refresh tokens, and CSRF-safe flows"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"What authentication really means"}),t.jsx("div",{className:"introSub",children:'Authentication answers "who are you". Authorization answers "what can you do". Most backend bugs happen when tokens, cookies, and browser behavior are not understood clearly.'})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx("div",{className:"callIcon",children:t.jsx(be,{})}),t.jsx("div",{className:"callText",children:"Practical rule - if you use cookies for auth, think about CSRF. If you put tokens in JavaScript storage, think about XSS."})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,title:x?"Collapse":"Expand",children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",p.title," to a non-tech friend in 20 seconds."]})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Strong auth is mostly about safe storage, short-lived access tokens, and correct browser behavior. Fancy crypto does not save a broken flow."})]})]})]})},jf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);
            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                flex: 0 0 auto;
                display: inline-flex;
                align-items: center;
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topBar {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );
        }

        .hint {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 12px 24px var(--color-shadow);
            margin-bottom: 12px;

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                font-weight: 700;
                line-height: 1.45;
            }
        }

        .tabs {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tab {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .tIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .tText {
                font-size: 12.5px;
                font-weight: 900;
                color: var(--color-text-secondary);
                white-space: nowrap;
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 14px 28px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 46%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 14%,
                            transparent
                        ),
                    0 14px 28px var(--color-shadow);

                .tText {
                    color: var(--color-text-primary);
                }
            }
        }

        .panel {
            padding: 14px;
        }

        .empty {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);

            .emptyTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 6px;
            }

            .emptySub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .content {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
        }

        .panelHeader {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: radial-gradient(
                700px 220px at 18% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 66%
            );

            .phLeft {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .phIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .phTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 2px;
            }

            .phSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.note {
            background: color-mix(in srgb, var(--color-accent) 8%, transparent);
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 9%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-weight: 700;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .codeTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .copyBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0px);
            }

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }
        }

        .code {
            margin-top: 10px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .qna {
            padding: 14px;
            border-top: 1px solid var(--color-border);
        }

        .qnaTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
        }

        .qnaGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .qnaCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-1px);
                border-color: var(--color-border-light);
            }
        }

        .qTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 6px;
        }

        .qIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .qQ {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .qA {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.55;
            font-weight: 700;
        }

        .bottomTip {
            margin: 0 14px 14px 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .btIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .btText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .tab,
            .qnaCard,
            .copyBtn {
                transition: none !important;
            }
        }
    `},Nf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("basics"),[m,w]=z.useState(""),S=z.useMemo(()=>[{key:"basics",title:"What JWT is",icon:t.jsx(St,{}),points:["JWT means JSON Web Token","A JWT is a compact string that represents claims (data) signed by a server","Client sends the token on every request to prove identity","JWT is usually used as an access token (short lived)"],note:{title:"One line definition",text:"JWT is a signed token that lets the server trust the data inside without storing session state in memory."}},{key:"structure",title:"Token structure",icon:t.jsx(Er,{}),points:["JWT has 3 parts separated by dots","Header - algorithm info like HS256 or RS256","Payload - claims like userId, role, exp (expiry time)","Signature - proves the token was created by someone who has the secret or private key"],codeTitle:"Example shape",code:`header.payload.signature

// header example (base64url JSON)
{
  "alg": "HS256",
  "typ": "JWT"
}

// payload example (base64url JSON)
{
  "sub": "user_123",
  "role": "ADMIN",
  "iat": 1710000000,
  "exp": 1710003600
}

// signature = sign(base64url(header) + "." + base64url(payload))`},{key:"howItWorks",title:"How JWT auth works",icon:t.jsx(Pe,{}),points:["User logs in with username and password","Server verifies password and issues an access token (JWT)","Client stores token (cookie or memory) and sends it on requests","Server verifies signature and checks expiry before trusting claims"],note:{title:"Important detail",text:"The server must verify the signature on every request. Never trust payload data without signature verification."}},{key:"security",title:"Security rules that matter",icon:t.jsx(rt,{}),points:["Always validate exp and iat, and reject expired tokens","Keep access tokens short lived to reduce damage if stolen","Do not put secrets in payload - payload is readable by anyone holding the token","Prefer HttpOnly cookies for browser apps to reduce XSS token theft risk","Use HTTPS in production so tokens are not sniffed on the network"],warn:{title:"Common mistake",text:"Storing JWT in localStorage makes it easy to steal with XSS. Cookies with HttpOnly are often safer for web apps."}},{key:"refresh",title:"Refresh token concept",icon:t.jsx(vl,{}),points:["Access token - short lived JWT used for most API calls","Refresh token - longer lived token used to get a new access token","Refresh token should be stored more securely than access token (often HttpOnly cookie)","On logout or compromise, refresh tokens should be invalidated server side"],note:{title:"Why refresh exists",text:"If access tokens are short lived, users stay logged in using refresh tokens without re-entering password."}},{key:"pitfalls",title:"Pitfalls and interview traps",icon:t.jsx(be,{}),points:["JWT is not encryption - it is signing. Payload is readable.","Stateless does not mean revocation is free. Revoking JWT needs strategy (short expiry, token versioning, blacklist, or refresh token storage).","Do not accept alg as none. Enforce allowed algorithms in your verification library.","Do not mix keys - HS256 uses a shared secret, RS256 uses public and private keys."],note:{title:"Interview ready line",text:"JWT helps reduce server session storage, but revocation and rotation still need careful design."}}],[]),p=z.useMemo(()=>[{q:"JWT full form",a:"JSON Web Token",icon:t.jsx(Be,{})},{q:"JWT provides confidentiality",a:"No - JWT payload is readable. It provides integrity via signature.",icon:t.jsx(Be,{})},{q:"Best place to store JWT in browser",a:"Often HttpOnly cookie for security. Avoid localStorage for sensitive tokens.",icon:t.jsx(Be,{})},{q:"Why short lived access token",a:"Limits damage if token is stolen.",icon:t.jsx(Be,{})}],[]),x=()=>{c(R=>!R)},v=R=>{u(J=>J===R?"":R)},b=async(R,J)=>{try{await navigator.clipboard.writeText(R),w(J),window.setTimeout(()=>w(""),900)}catch{w("")}},T=S.find(R=>R.key===l);return t.jsxs(jf.Wrapper,{id:"jwt",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:x,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(St,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"JWT"}),t.jsx("span",{className:"sub",children:"JSON Web Token - signing, expiry, storage choices, refresh flow, and common traps"})]})]}),t.jsx("span",{className:"right",children:t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"topBar",children:[t.jsxs("div",{className:"hint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Pe,{})}),t.jsx("span",{className:"hintText",children:"Focus on: signature verification, expiry, storage, and revocation strategy."})]}),t.jsx("div",{className:"tabs",role:"tablist","aria-label":"JWT sections",children:S.map(R=>{const J=l===R.key;return t.jsxs("button",{type:"button",role:"tab","aria-selected":J,className:`tab ${J?"active":""}`,onClick:()=>v(R.key),title:R.title,children:[t.jsx("span",{className:"tIcon",children:R.icon}),t.jsx("span",{className:"tText",children:R.title})]},R.key)})})]}),t.jsx("div",{className:"panel",children:T?t.jsxs("div",{className:"content",children:[t.jsx("div",{className:"panelHeader",children:t.jsxs("div",{className:"phLeft",children:[t.jsx("span",{className:"phIcon",children:T.icon}),t.jsxs("div",{className:"phText",children:[t.jsx("div",{className:"phTitle",children:T.title}),t.jsx("div",{className:"phSub",children:"Quick, interview ready explanation and practical rules."})]})]})}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:T.points.map((R,J)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:R})]},`${T.key}-p-${J}`))})]}),T.note&&t.jsxs("div",{className:"block note",children:[t.jsx("div",{className:"blockTitle",children:T.note.title}),t.jsx("p",{className:"para",children:T.note.text})]}),T.warn&&t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:T.warn.title}),t.jsx("p",{className:"para",children:T.warn.text})]}),T.code&&t.jsxs("div",{className:"block",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("div",{className:"blockTitle",children:T.codeTitle||"Example"}),t.jsxs("button",{type:"button",className:"copyBtn",onClick:()=>b(T.code,T.key),title:"Copy code","aria-label":"Copy code",children:[t.jsx(mu,{}),t.jsx("span",{className:"copyText",children:m===T.key?"Copied":"Copy"})]})]}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:T.code})})]})]}):t.jsxs("div",{className:"empty",children:[t.jsx("div",{className:"emptyTitle",children:"Select a section to view details"}),t.jsx("div",{className:"emptySub",children:"JWT is simple in theory, tricky in production. The sections here cover both."})]})}),t.jsxs("div",{className:"qna",children:[t.jsx("div",{className:"qnaTitle",children:"Quick Q and A"}),t.jsx("div",{className:"qnaGrid",children:p.map((R,J)=>t.jsxs("div",{className:"qnaCard",children:[t.jsxs("div",{className:"qTop",children:[t.jsx("span",{className:"qIcon",children:R.icon}),t.jsx("span",{className:"qQ",children:R.q})]}),t.jsx("div",{className:"qA",children:R.a})]},`qna-${J}`))})]}),t.jsxs("div",{className:"bottomTip",children:[t.jsx("span",{className:"btIcon",children:t.jsx(be,{})}),t.jsx("span",{className:"btText",children:"Golden rule: verify signature + check expiry on every request. JWT payload is readable, not secret."})]})]})]})},Sf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .statePill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .statePill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .kv {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .kvRow {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                @media (width < 520px) {
                    grid-template-columns: 1fr;
                }
            }

            .k {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .v {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .codeWrap {
            position: relative;
        }

        .copyBtn {
            position: absolute;
            top: 10px;
            right: 10px;

            display: inline-flex;
            align-items: center;
            gap: 8px;

            padding: 8px 10px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 86%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;

            box-shadow: 0 12px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            padding-top: 46px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},Tf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),[m,w]=z.useState(null),S=z.useMemo(()=>[{key:"basics",title:"Cookies basics",icon:t.jsx(St,{}),summary:"A cookie is a small key-value text stored by the browser and automatically sent to the server on matching requests.",points:["Cookies are attached to HTTP requests by the browser when domain and path rules match.","Cookies are often used for sessions, preferences, and feature flags.","Cookies are not private storage. Treat them as client controlled unless protected by HttpOnly and server validation."],mentalModel:{title:"Mental model",text:"Cookie is like a badge your browser shows at the door of your server on every request to prove continuity."},code:{title:"Example - Set cookie from server",snippet:`// Express example
app.post("/login", (req, res) => {
  const sid = "session_id_from_server";
  res.cookie("sid", sid, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 1000 * 60 * 60 * 24
  });
  res.json({ ok: true });
});`}},{key:"cookieAttrs",title:"Cookie attributes that matter",icon:t.jsx(Pe,{}),summary:"Attributes decide when cookies are sent and how exposed they are to JavaScript and cross-site requests.",table:[{k:"HttpOnly",v:"JavaScript cannot read the cookie. Helps reduce XSS theft of session cookies."},{k:"Secure",v:"Cookie only sent over HTTPS. Required for SameSite=None in modern browsers."},{k:"SameSite",v:"Controls cross-site sending. Lax is common. None allows third-party usage but needs Secure."},{k:"Domain",v:"Which domain can receive it. Be careful with broad domains like .example.com."},{k:"Path",v:"Which URL paths send it. Use '/' for site-wide, or scope tighter when possible."},{k:"Expires or Max-Age",v:"How long the cookie lives. Session cookies disappear when browser closes."}],mentalModel:{title:"Mental model",text:"Attributes are the rules printed on the badge. Who can see it, where it works, and when it expires."},code:{title:"Example - Safe defaults for auth cookie",snippet:`res.cookie("sid", sid, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
  maxAge: 1000 * 60 * 60 * 24 * 7
});`}},{key:"sessions",title:"Cookies and sessions",icon:t.jsx(rt,{}),summary:"Most production auth uses a session id in a cookie, and session data stored on the server or a shared store.",points:["Cookie stores only a session id. Actual user session state lives server-side (database or Redis).","Server validates sid, loads session, attaches user to request, and continues.","This approach supports instant logout by deleting session server-side."],mentalModel:{title:"Mental model",text:"Cookie holds a ticket number. The real ticket details live in the server counter system."},code:{title:"Example - Session flow in 5 lines",snippet:`// Request arrives with Cookie: sid=abc
// 1) Read sid
// 2) Lookup session in store (Redis or DB)
// 3) If valid, attach req.user
// 4) Continue route logic
// 5) If invalid, respond 401`}},{key:"csrf",title:"CSRF and cookie auth",icon:t.jsx(be,{}),summary:"Cookie based auth is vulnerable to CSRF because the browser can send cookies automatically on cross-site requests.",points:["CSRF happens when a victim is logged in and a malicious site triggers a state-changing request.","SameSite=Lax blocks many cases, but not all scenarios and not all legacy clients.","For high risk actions, use CSRF tokens or double submit tokens, plus proper SameSite policy."],mentalModel:{title:"Mental model",text:"CSRF is a trick that makes your browser show your badge to the wrong action without you noticing."},code:{title:"Example - Double submit token idea",snippet:`// 1) Server sets two cookies:
// - sid (HttpOnly) session cookie
// - csrfToken (not HttpOnly) readable by JS
// 2) Frontend sends csrfToken in header:
//   X-CSRF-Token: <csrfToken_cookie_value>
// 3) Server verifies header matches csrfToken cookie`}},{key:"pitfalls",title:"Common pitfalls",icon:t.jsx(Wa,{}),summary:"Most cookie bugs are misconfigurations: wrong SameSite, missing Secure, or domain and path mistakes.",pitfalls:["SameSite=None without Secure breaks in modern browsers.","Using broad Domain shares auth across subdomains unexpectedly.","Not setting path correctly can cause multiple cookies with same name but different paths.","Assuming cookies are private. Anything not HttpOnly can be read by scripts.","For cross-origin frontend, you must enable credentials on both client and server."],code:{title:"Example - Cross origin cookie checklist",snippet:`// Frontend request
fetch("https://api.example.com/me", {
  credentials: "include"
});

// Backend headers
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Origin: https://app.example.com
// Set-Cookie must include Secure for HTTPS and correct SameSite`}}],[]),p=()=>{c(b=>!b),a&&u(null)},x=b=>{u(T=>T===b?null:b)},v=async(b,T)=>{try{await navigator.clipboard.writeText(b),w(T),window.setTimeout(()=>w(null),900)}catch{}};return t.jsxs(Sf.Wrapper,{id:"cookies",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:p,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(rt,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Cookies"}),t.jsx("span",{className:"sub",children:"Cookie auth, session patterns, attributes, and CSRF safety"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"statePill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Be,{})," Open"]}):t.jsxs(t.Fragment,{children:[t.jsx(Tt,{})," Closed"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"What to remember"}),t.jsx("div",{className:"introSub",children:"Cookies are powerful because the browser sends them automatically. That power also creates risks. Know attributes, session flow, and CSRF protection."})]})]}),t.jsx("div",{className:"grid",children:S.map(b=>{const T=l===b.key;return t.jsxs("div",{className:`card ${T?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>x(b.key),"aria-expanded":T,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:b.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:b.title}),t.jsx("span",{className:"cSummary",children:b.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${T?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${T?"show":""}`,children:[b.points&&t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:b.points.map((R,J)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:R})]},`${b.key}-p-${J}`))})]}),b.table&&t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Attributes cheat sheet"}),t.jsx("div",{className:"kv",children:b.table.map(R=>t.jsxs("div",{className:"kvRow",children:[t.jsx("div",{className:"k",children:R.k}),t.jsx("div",{className:"v",children:R.v})]},`${b.key}-${R.k}`))})]}),b.mentalModel&&t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:b.mentalModel.title}),t.jsx("p",{className:"para",children:b.mentalModel.text})]}),b.pitfalls&&t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Pitfalls"}),t.jsx("ul",{className:"list",children:b.pitfalls.map((R,J)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:R})]},`${b.key}-g-${J}`))})]}),b.code&&t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:b.code.title}),t.jsxs("div",{className:"codeWrap",children:[t.jsxs("button",{type:"button",className:"copyBtn",onClick:()=>v(b.code.snippet,b.key),title:"Copy code","aria-label":"Copy code",children:[t.jsx(mu,{}),m===b.key?"Copied":"Copy"]}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:b.code.snippet})})]})]})]})]},b.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(Pe,{})}),t.jsx("span",{className:"closingText",children:"Best practice for auth cookies - HttpOnly + Secure + SameSite=Lax, plus CSRF tokens for sensitive actions."})]})]})]})},Cf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;

                .pIcon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .pIcon svg {
                    width: 14px;
                    height: 14px;
                    color: color-mix(
                        in srgb,
                        var(--color-primary) 86%,
                        var(--color-text-primary)
                    );
                }
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            flex-direction: column;
            gap: 8px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }

            .closingWarn {
                display: inline-flex;
                align-items: center;
                gap: 8px;

                font-size: 12.5px;
                color: var(--color-text-muted);
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},If=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"whatIs",title:"What is OAuth",icon:t.jsx(Kt,{}),summary:"OAuth is an authorization framework. It lets an app access a user resource without sharing the user password with that app.",points:["OAuth is about authorization, not authentication.","OAuth gives your app a limited access token, not the user password.","Tokens can be scoped, time limited, and revoked depending on provider."],mentalModel:{title:"Mental model",text:"OAuth is like a hotel key card. You do not get the master key to the building. You get a temporary card that opens only certain doors."},example:{title:"Example scenario",code:`// You build an app that wants to read a user's Google Drive files.
// You should NOT ask for the Google password.
// Instead, you redirect the user to Google to approve access.
// Google gives your app an access token to call Google APIs.`},pitfalls:["Do not say OAuth is login by itself. OAuth is permission delegation."]},{key:"roles",title:"Core roles and terms",icon:t.jsx(Er,{}),summary:"OAuth has standard roles. Knowing these terms makes every flow easy to understand.",points:["Resource Owner - the user who owns the data.","Client - your app that wants access (web app, mobile app, backend).","Authorization Server - issues tokens (Google, GitHub, etc).","Resource Server - hosts the APIs with the protected data.","Scope - what the token can access (read profile, read email)."],mentalModel:{title:"Mental model",text:"Your app asks the authorization server for permission. The resource server checks tokens before serving data."},example:{title:"Example mapping",code:`// GitHub OAuth
// Resource Owner - the GitHub user
// Authorization Server - github.com login and consent screen
// Resource Server - api.github.com
// Client - your app`},pitfalls:["Mixing up authorization server and resource server in your explanation."]},{key:"authCode",title:"Authorization Code flow",icon:t.jsx(St,{}),summary:"Most common secure flow for web apps. User approves on provider. Your app exchanges a code for tokens on the server side.",points:["Step 1 - redirect user to provider authorize endpoint with client_id and redirect_uri and scopes.","Step 2 - user logs in and approves. Provider redirects back with an authorization code.","Step 3 - your backend exchanges that code for access token using client_secret.","Step 4 - your backend calls the provider API using the access token."],mentalModel:{title:"Mental model",text:"The code is like a claim ticket. It is useless by itself unless your server exchanges it with the secret."},example:{title:"Flow sketch",code:`// Browser -> Provider
GET /authorize?response_type=code&client_id=...&redirect_uri=...&scope=...

// Provider -> Browser -> Your server redirect
GET /oauth/callback?code=...

// Server -> Provider token exchange (server-to-server)
POST /token
  grant_type=authorization_code
  code=...
  client_id=...
  client_secret=...
  redirect_uri=...`},pitfalls:["Do not exchange the code from frontend if you have a server. Keep client_secret on server only.","Always validate state to prevent CSRF style attacks on the redirect."]},{key:"pkce",title:"PKCE",icon:t.jsx(rt,{}),summary:"PKCE protects public clients (mobile apps, SPAs) where you cannot safely store a client_secret.",points:["PKCE stands for Proof Key for Code Exchange.","Client creates a code_verifier and sends a derived code_challenge in the authorize request.","When exchanging the code, client must send the original code_verifier.","Even if an attacker steals the code, they cannot exchange it without the verifier."],mentalModel:{title:"Mental model",text:"PKCE adds a private proof string that only the original client knows. The code alone is not enough."},example:{title:"Flow sketch",code:`// Step 1 - client makes code_verifier and code_challenge
// Step 2 - authorize request includes code_challenge
GET /authorize?...&code_challenge=...&code_challenge_method=S256

// Step 3 - token exchange includes code_verifier
POST /token
  grant_type=authorization_code
  code=...
  code_verifier=...`},pitfalls:["Do not skip PKCE for SPAs. It is the modern baseline."]},{key:"tokens",title:"Access token and refresh token",icon:t.jsx(Qa,{}),summary:"Access tokens are short lived. Refresh tokens can get new access tokens without asking user to login again.",points:["Access token - used on API calls. Usually short life to reduce risk.","Refresh token - used only to get a new access token. Should be stored very carefully.","Some providers rotate refresh tokens. Old refresh token becomes invalid after use."],mentalModel:{title:"Mental model",text:"Access token is your daily pass. Refresh token is your identity proof locked in a safe, used rarely."},example:{title:"Refresh flow sketch",code:`// When access token expires
POST /token
  grant_type=refresh_token
  refresh_token=...
  client_id=...
  client_secret=...`},pitfalls:["Never put refresh tokens in localStorage for browser apps if you can avoid it.","Do not send refresh tokens to third party scripts in the page."]},{key:"security",title:"Security checklist and pitfalls",icon:t.jsx(Pe,{}),summary:"OAuth is secure when you implement the boring details correctly. Most failures are in the details.",points:["Always use HTTPS in production.","Validate redirect_uri and do not allow open redirect patterns.","Use state parameter and verify it on callback.","Use PKCE for public clients.","Use least privilege scopes. Ask only what you need.","Store tokens securely. Prefer httpOnly cookies for your own session."],mentalModel:{title:"Mental model",text:"OAuth is like airport security. One missing check makes the whole system weak."},example:{title:"State parameter idea",code:`// Before redirect - store state in server session
const state = crypto.randomUUID();
session.oauthState = state;

// In authorize URL
&state=state

// On callback - verify
if (req.query.state !== session.oauthState) {
  return res.status(400).send("Invalid state");
}`},pitfalls:["Missing state validation leads to login CSRF style attacks.","Allowing any redirect_uri leads to token leakage.","Using implicit flow for SPAs is outdated. Prefer auth code with PKCE."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(Cf.Wrapper,{id:"oauth",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(St,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"OAuth"}),t.jsx("span",{className:"sub",children:"Authorization framework, flows, PKCE, tokens, and security checklist"})]})]}),t.jsxs("span",{className:"right",children:[t.jsxs("span",{className:"pill",children:[t.jsx("span",{className:"pIcon",children:a?t.jsx(Be,{}):t.jsx(Co,{})}),t.jsx("span",{className:"pText",children:a?"Collapse":"Expand"})]}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"What you should be able to explain"}),t.jsx("div",{className:"introSub",children:"Explain OAuth as authorization, name the roles, and walk through Authorization Code flow with PKCE. Then explain why state and redirect_uri validation matter."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-p-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Example"}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.pitfalls.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"hintText",children:"Revision tip: Say OAuth in one line, then name the roles, then explain why PKCE exists."})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Interview one-liner: OAuth lets a client access a resource server with scoped tokens issued by an authorization server, without sharing user passwords."}),t.jsxs("span",{className:"closingWarn",children:[t.jsx(be,{})," Always mention state and PKCE."]})]})]})]})},Ef={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .block.good {
            background: color-mix(
                in srgb,
                var(--color-success) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;
                background: color-mix(
                    in srgb,
                    var(--color-accent) 76%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .goodDot {
                background: color-mix(
                    in srgb,
                    var(--color-success) 76%,
                    var(--color-text-primary)
                );
            }

            .warnDot {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 76%,
                    var(--color-text-primary)
                );
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-accent) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},Mf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"xss",title:"XSS - Cross Site Scripting",icon:t.jsx(Km,{}),summary:"Attacker injects malicious script into a page so it runs in the victim's browser under your site's trust.",bullets:["XSS is a browser-side problem, but backend often enables it by storing or reflecting unsafe input.","Types: stored XSS (saved in DB), reflected XSS (in URL or request), DOM XSS (front-end code creates it).","Impact: stealing cookies or tokens, performing actions as the user, phishing UI inside your page."],mentalModel:{title:"Mental model",text:"XSS is like someone writing a fake instruction inside your official notice board. Visitors follow it because it looks like it came from you."},example:{title:"Example - unsafe vs safe output",code:`// Unsafe - directly rendering user input into HTML
// (Example: template string sent to client)
res.send(\`<h1>Hello \${req.query.name}</h1>\`);

// Better - escape output (server templating engines usually do)
// Or return JSON and let frontend render text safely:
res.json({ name: req.query.name });

// Also set security headers (CSP) where possible.`},checklist:["Escape output in templates.","Do not inject user input into HTML, scripts, or inline handlers.","Use CSP - Content Security Policy for extra protection.","Use HttpOnly cookies so JS cannot read session cookies."],gotchas:["Sanitizing input is not enough if you output into different contexts (HTML, JS, CSS, URL).","Storing HTML from users is risky. If you must, sanitize with a strict allowlist."]},{key:"csrf",title:"CSRF - Cross Site Request Forgery",icon:t.jsx(St,{}),summary:"Attacker tricks a logged-in user's browser into making a request to your site. Cookies get sent automatically, so the action can succeed.",bullets:["CSRF matters when auth uses cookies (sessions or cookie-based JWT).","If your server accepts state-changing requests without verifying intent, an attacker can trigger them.","Typical targets: money transfer, email change, password change, delete actions."],mentalModel:{title:"Mental model",text:"CSRF is like someone using your already signed-in badge to walk into your office and submit a form on your behalf."},example:{title:"Example - CSRF protections",code:`// Core protections for cookie-based auth
// 1) SameSite cookies (Lax or Strict)
Set-Cookie: sid=...; HttpOnly; Secure; SameSite=Lax

// 2) CSRF token for state-changing requests
// Server issues a CSRF token, client sends it back in a header:
X-CSRF-Token: <token>

// 3) Verify Origin / Referer on sensitive endpoints
// If Origin is missing or not your domain, reject.`},checklist:["Use SameSite cookies as a baseline.","Use CSRF tokens for POST, PUT, PATCH, DELETE.","Validate Origin for sensitive actions.","Prefer JSON APIs + custom headers for state changes."],gotchas:["SameSite=Lax reduces risk but does not solve every flow (some edge cases exist).","CSRF is not about stealing data. It is about forcing actions."]},{key:"rateLimit",title:"Rate limiting",icon:t.jsx(be,{}),summary:"Limit how many requests a client can make in a time window to protect from brute force, scraping, and abuse.",bullets:["Common uses: login attempts, OTP endpoints, password reset, public APIs.","Strategies: fixed window, sliding window, token bucket, leaky bucket.","Keys: IP, userId, API key, or a combination depending on endpoint."],mentalModel:{title:"Mental model",text:"Rate limiting is a bouncer. It lets normal traffic in and blocks the person trying to spam the door."},example:{title:"Example - simple Express middleware idea",code:`// Pseudocode style
const bucket = new Map();

function rateLimit(req, res, next) {
  const key = req.ip;
  const now = Date.now();

  const entry = bucket.get(key) || { count: 0, resetAt: now + 60_000 };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + 60_000;
  }

  entry.count += 1;
  bucket.set(key, entry);

  if (entry.count > 60) {
    return res.status(429).json({ error: "Too many requests" });
  }

  next();
}`},checklist:["Return 429 - Too Many Requests.","Use stricter limits for auth endpoints.","Prefer Redis-based limiter in production (shared across instances).","Log blocks to detect attacks."],gotchas:["IP-only limiting can hurt users behind NAT or mobile networks.","Attackers can rotate IPs. Combine signals where possible."]},{key:"hashing",title:"Hashing and password storage",icon:t.jsx(Tt,{}),summary:"Never store passwords as plain text. Store a slow hash with a unique salt so leaked DB data is harder to crack.",bullets:["Hashing is one-way. Encryption is reversible. Passwords should be hashed, not encrypted.","Use modern slow hashing: bcrypt, scrypt, or argon2.","Always salt passwords. Many libraries handle this automatically."],mentalModel:{title:"Mental model",text:"Hashing is like grinding a key into powder. You can verify a key by grinding it again and comparing powder, but you cannot rebuild the key."},example:{title:"Example - bcrypt style flow",code:`// Typical flow
// signup
const hash = await bcrypt.hash(password, 12);
await users.insert({ email, passwordHash: hash });

// login
const ok = await bcrypt.compare(password, user.passwordHash);
if (!ok) return res.status(401).json({ error: "Invalid credentials" });`},checklist:["Use bcrypt, scrypt, or argon2 (slow hash).","Use a strong work factor (cost) based on your hardware.","Store passwordHash only, never password.","Rate limit login attempts."],gotchas:["Do not use fast hashes like MD5 or SHA-1 for passwords.","Do not roll your own crypto."]},{key:"validation",title:"Input validation and sanitization",icon:t.jsx(fu,{}),summary:"Validate input to ensure it matches expected shape and types. Sanitize when needed to remove dangerous content.",bullets:["Validation checks correctness: types, required fields, ranges, formats.","Sanitization removes or escapes unsafe parts (like HTML tags).","Prefer allowlists: only allow what you expect, reject everything else."],mentalModel:{title:"Mental model",text:"Validation is checking the ID card at the gate. Sanitization is removing prohibited items from the bag."},example:{title:"Example - validation approach",code:`// Example rules
// - email must be valid
// - age must be number between 13 and 120
// - name length <= 60
//
// If input fails, return 400 with a clear message:
res.status(400).json({
  error: "Validation error",
  details: [{ field: "email", message: "Invalid email" }]
});`},checklist:["Validate at the API boundary (before DB).","Use schema validators (zod, joi, yup) in real apps.","Limit payload size and string lengths.","Normalize input (trim, lowercase emails) carefully."],gotchas:["Validation is not only for security. It prevents bugs and bad data.","Sanitizing everything can break legitimate input. Use it only where required."]},{key:"headers",title:"Security headers overview",icon:t.jsx(tt,{}),summary:"HTTP headers that harden browsers and reduce common attack surfaces.",bullets:["CSP - Content Security Policy reduces XSS impact by limiting script sources.","X-Content-Type-Options: nosniff prevents MIME sniffing issues.","X-Frame-Options or CSP frame-ancestors helps prevent clickjacking.","Referrer-Policy controls what referrer data is sent."],mentalModel:{title:"Mental model",text:"Security headers are seatbelts. They do not stop accidents, but they reduce damage when something goes wrong."},example:{title:"Example - practical baseline",code:`// Example style (not exact code)
// Use helmet in Express for sensible defaults:
import helmet from "helmet";
app.use(helmet());

// Add CSP carefully (can break scripts if too strict)
// Start with report-only mode where possible.`},checklist:["Use helmet in Express for baseline headers.","Add CSP gradually (start with report-only).","Ensure cookies are HttpOnly, Secure, SameSite where applicable."],gotchas:["Overly strict CSP can break your frontend. Roll out step by step.","Headers help but do not replace proper validation and auth checks."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(Ef.Wrapper,{id:"security",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Pe,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Security"}),t.jsx("span",{className:"sub",children:"XSS, CSRF, rate limiting, hashing, validation, and headers"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why security is not optional"}),t.jsx("div",{className:"introSub",children:"Most real breaches happen due to basic mistakes - missing validation, weak auth, unsafe cookies, and no rate limiting. These notes focus on the most common backend security failures and how to avoid them."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block good",children:[t.jsx("div",{className:"blockTitle",children:"Quick checklist"}),t.jsx("ul",{className:"list",children:p.checklist.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot goodDot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-c-${b}`))})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot warnDot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",p.title," with one real example of how it can be exploited."]})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Security rule: validate inputs, harden cookies, rate limit auth, and never trust the client."})]})]})]})},Rf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-error) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 920px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .badge {
                font-size: 12px;
                font-weight: 900;
                padding: 7px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topNote {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-error) 10%, transparent),
                transparent
            );

            .noteIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-error) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .noteTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .noteSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-error) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .codeTitle .codeIcon {
            width: 26px;
            height: 26px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );

            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-error) 70%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .smallNote {
            margin-top: 10px;
            font-size: 12px;
            color: var(--color-text-muted);
            line-height: 1.5;
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},Pf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"what",title:"What is XSS",icon:t.jsx(Fe,{}),summary:"XSS (Cross Site Scripting) happens when an attacker makes your site run their JavaScript in a victim's browser.",points:["The attacker does not hack the server directly - they trick the browser into executing injected script.","Impact is on users - stolen sessions, data theft, fake UI, actions performed as the user.","Root cause is untrusted input being treated as HTML or JavaScript."]},{key:"types",title:"Types of XSS",icon:t.jsx(qe,{}),summary:"Same core bug, different delivery methods. Know these names for interviews.",points:["Stored XSS - payload is saved on the server (comments, profile bio) and served to many users.","Reflected XSS - payload comes from request (query string) and is reflected in response immediately.","DOM XSS - payload stays in client side code (dangerous innerHTML usage) without server changes."]},{key:"exampleBad",title:"Bad example",icon:t.jsx(Wa,{}),summary:"Rendering untrusted input as HTML is the classic foot-gun.",codeTitle:"Example - unsafe HTML injection",code:`// BAD - do not do this
const username = req.query.name;

// Example response that becomes dangerous:
// name=<img src=x onerror=alert(1)>

res.send(\`
  <h1>Hello \${username}</h1>
\`);`,note:"If username contains HTML or script, the browser executes it as part of the page."},{key:"exampleGood",title:"Good patterns",icon:t.jsx(Be,{}),summary:"Treat all input as untrusted. Encode output and avoid HTML injection.",codeTitle:"Example - safe output encoding idea",code:`// GOOD - render as text, not HTML
// In templating engines, use escaped output.
// In React, normal rendering escapes by default.

res.send(\`
  <h1>Hello \${escapeHtml(username)}</h1>
\`);

// escapeHtml should replace special chars:
// < becomes &lt;
// > becomes &gt;
// & becomes &amp;
// " becomes &quot;
// ' becomes &#39;`,note:"Escaping means the browser shows characters, not markup."},{key:"prevention",title:"Prevention checklist",icon:t.jsx(rt,{}),summary:"Defense is layers. Use multiple controls, not one magic trick.",points:["Output encoding - escape data when inserting into HTML, attributes, URLs, JS contexts.","Avoid dangerous sinks - innerHTML, dangerouslySetInnerHTML, document.write, eval.","Use Content Security Policy (CSP) - reduces blast radius if XSS slips in.","HttpOnly cookies - prevents reading cookies via JavaScript, but does not stop all XSS damage.","Validate input - helpful, but do not rely on it alone. Output encoding is the real fix."]},{key:"csp",title:"CSP in simple words",icon:t.jsx(Pe,{}),summary:"CSP (Content Security Policy) tells the browser what scripts are allowed to run.",points:["You can block inline scripts by default and only allow scripts from your domains.","If an attacker injects a script tag, the browser can refuse to run it.","Start with report-only mode in production to avoid breaking your app."],codeTitle:"Example - CSP header idea",code:`// Example header (adjust for your app needs)
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';`},{key:"pitfalls",title:"Common pitfalls",icon:t.jsx(be,{}),summary:"These are the traps that keep showing up in real systems.",points:["Relying only on input validation. Attackers find bypasses and contexts vary.","Escaping in the wrong context. HTML escaping is not the same as JavaScript string escaping.","Allowing inline scripts while thinking CSP is enabled.","Thinking HttpOnly alone fixes XSS. It only protects cookies from being read, not user actions."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(Rf.Wrapper,{id:"xss",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,title:a?"Collapse XSS":"Expand XSS",children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Pe,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"XSS"}),t.jsx("span",{className:"sub",children:"Cross Site Scripting - how injected JavaScript runs in user browsers and how to prevent it"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"badge",children:"Security"}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"topNote",children:[t.jsx("div",{className:"noteIcon",children:t.jsx(be,{})}),t.jsxs("div",{className:"noteText",children:[t.jsx("div",{className:"noteTitle",children:"Interview line you should remember"}),t.jsx("div",{className:"noteSub",children:"XSS is not about the server running attacker code. It is about the browser executing attacker code because untrusted data was treated as markup or script."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[p.points&&t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-p-${b}`))})]}),p.code&&t.jsxs("div",{className:"block",children:[t.jsxs("div",{className:"blockTitle codeTitle",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Co,{})}),t.jsx("span",{children:p.codeTitle})]}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.code})}),p.note&&t.jsx("div",{className:"smallNote",children:p.note})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(rt,{})}),t.jsx("span",{className:"closingText",children:"Best practical combo - escape output, avoid HTML injection, add CSP, and keep session cookies HttpOnly."})]})]})]})},zf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 920px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 82%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topIntro {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent
            );
        }

        .introBadge {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 72%,
                transparent
            );

            box-shadow: 0 12px 26px var(--color-shadow);

            .bIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface-2)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .bText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 800;
            }
        }

        .tabs {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .tab {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            padding: 9px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .tIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 78%,
                    var(--color-text-primary)
                );
            }

            .tText {
                font-size: 12.5px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .tab.on {
            border-color: color-mix(in srgb, var(--color-accent) 50%, #fff);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                var(--color-surface)
            );

            .tText {
                color: var(--color-text-primary);
            }
        }

        .content {
            padding: 14px;
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHead {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
                align-items: flex-start;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }

        .btWithIcon {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            .btIcon {
                width: 24px;
                height: 24px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-accent) 76%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: flex-start;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-accent) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 800;
            }
        }

        .side {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .miniCard {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);
            padding: 14px;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 18px 40px var(--color-shadow);
            }
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .miniList {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .closing {
            margin: 0 14px 14px 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 900;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .tab,
            .card,
            .miniCard {
                transition: none !important;
            }
        }
    `},Af=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("basics"),m=z.useMemo(()=>[{key:"basics",title:"What is CSRF",icon:t.jsx(Fe,{}),summary:"CSRF is when a malicious site tricks a logged-in user's browser into sending an unwanted request to your site.",points:["CSRF stands for Cross Site Request Forgery.","The attacker does not steal your password. They abuse the fact that the browser automatically sends cookies.","If your auth uses cookies and your server trusts them without extra checks, a forged request can succeed."],mentalModel:{title:"Mental model",text:"Your browser is like a courier that automatically attaches your site cookies to requests. CSRF is when an attacker convinces the courier to deliver a package to your bank using your identity badge."}},{key:"attackFlow",title:"How the attack works",icon:t.jsx(So,{}),summary:"The victim is logged in, then visits an attacker page that triggers a request to the victim site.",points:["Victim logs in to your site, cookie is stored in browser.","Victim visits attacker.com while still logged in.","Attacker page triggers a request to your site, like a hidden form submit or image request.","Browser automatically sends your site cookies with that request.","If your endpoint changes state and has no CSRF protection, the action happens."],code:{title:"Example - hidden form trick",snippet:`<form action="https://your-site.com/account/email" method="POST">
  <input type="hidden" name="email" value="attacker@mail.com" />
</form>
<script>
  document.forms[0].submit();
<\/script>`}},{key:"whenItMatters",title:"When CSRF matters",icon:t.jsx(be,{}),summary:"CSRF matters for state-changing requests when auth is cookie-based.",points:["State-changing means anything that updates data, like POST, PUT, PATCH, DELETE.","GET requests should be safe and not change state. If GET changes state, it is a bug and also CSRF risk.","If you use Authorization header tokens and do not use cookies for auth, classic CSRF is much harder because browsers do not auto attach Authorization headers.","If you store tokens in cookies, you are back in CSRF territory."]},{key:"defenses",title:"How to prevent CSRF",icon:t.jsx(rt,{}),summary:"Use a mix of SameSite cookies, CSRF tokens, and origin checks for strong protection.",points:["Set cookies as SameSite=Lax or SameSite=Strict where possible.","Use CSRF tokens for state-changing requests, also called synchronizer token pattern.","Validate Origin and Referer headers for browser requests as an extra defense layer.","Require a custom header like x-csrf-token for APIs used by SPAs.","Use double submit cookie pattern if you cannot store server-side CSRF token, but synchronizer token is usually clearer with sessions."],code:{title:"Example - SPA flow with CSRF token",snippet:`// 1) Server issues a CSRF token (stored server-side in session or a secure store)
// GET /csrf -> { csrfToken: "..." }

// 2) Client fetches token once
const { csrfToken } = await fetch("/csrf", { credentials: "include" }).then(r => r.json());

// 3) Client sends token in a custom header for write requests
await fetch("/api/profile", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "x-csrf-token": csrfToken
  },
  body: JSON.stringify({ name: "Ashish" })
});`}},{key:"checklist",title:"Production checklist",icon:t.jsx(Be,{}),summary:"A short checklist you can apply to any backend quickly.",points:["Cookies: HttpOnly=true, Secure=true in production, SameSite=Lax or Strict when possible.","Write endpoints require CSRF token or strict Origin checks.","Do not change state in GET endpoints.","Add rate limiting on sensitive actions.","Log CSRF failures with request id or correlation id, but do not log raw tokens."],code:{title:"Example - minimal CSRF middleware idea",snippet:`// Pseudo middleware idea for cookie-session apps
// - token stored in session
// - client sends token via header for write calls

const isWrite = (m) => ["POST","PUT","PATCH","DELETE"].includes(m);

function csrfGuard(req, res, next) {
  if (!isWrite(req.method)) return next();

  const token = req.headers["x-csrf-token"];
  const expected = req.session?.csrfToken;

  if (!token || !expected || token !== expected) {
    return res.status(403).json({
      error: "csrf_failed",
      message: "CSRF validation failed"
    });
  }

  next();
}`}},{key:"pitfalls",title:"Common mistakes",icon:t.jsx(be,{}),summary:"These mistakes make CSRF protection look enabled but still weak.",points:["Relying only on CORS. CORS is a browser rule, not an auth control. Cookies can still be sent.","Using SameSite=None without Secure. Browsers will reject or behave unexpectedly.","Allowing state changes on GET endpoints.","Not rotating CSRF token after login or session changes.","Logging CSRF token values in server logs."]}],[]),w=()=>{c(x=>!x)},S=x=>{u(x)},p=m.find(x=>x.key===l)||m[0];return t.jsxs(zf.Wrapper,{id:"csrf",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Pe,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"CSRF"}),t.jsx("span",{className:"sub",children:"Cross Site Request Forgery - cookies, attack flow, and defenses"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"topIntro",children:[t.jsxs("div",{className:"introBadge",children:[t.jsx("span",{className:"bIcon",children:t.jsx(Fe,{})}),t.jsx("span",{className:"bText",children:"CSRF is mainly a risk when authentication uses cookies and endpoints change state."})]}),t.jsx("div",{className:"tabs",children:m.map(x=>{const v=x.key===l;return t.jsxs("button",{type:"button",className:`tab ${v?"on":""}`,onClick:()=>S(x.key),children:[t.jsx("span",{className:"tIcon",children:x.icon}),t.jsx("span",{className:"tText",children:x.title})]},x.key)})})]}),t.jsxs("div",{className:"content",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardHead",children:t.jsxs("div",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("div",{className:"cText",children:[t.jsx("div",{className:"cTitle",children:p.title}),t.jsx("div",{className:"cSummary",children:p.summary})]})]})}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((x,v)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:x})]},`${p.key}-p-${v}`))})]}),p.mentalModel?t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}):null,p.code?t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:t.jsxs("span",{className:"btWithIcon",children:[t.jsx("span",{className:"btIcon",children:t.jsx(Co,{})}),t.jsx("span",{children:p.code.title})]})}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.code.snippet})})]}):null,p.key==="pitfalls"?t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Quick reminder"}),t.jsx("p",{className:"para",children:"CSRF protection should be tested using a real browser flow, because CSRF exists because browsers attach cookies automatically."})]}):null,t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Be,{})}),t.jsx("span",{className:"hintText",children:'Interview line: "CSRF is possible because browsers automatically attach cookies to cross-site requests, so we add SameSite and CSRF tokens for write endpoints."'})]})]}),t.jsxs("div",{className:"side",children:[t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"Fast recall - CSRF in 3 lines"}),t.jsxs("ul",{className:"miniList",children:[t.jsx("li",{children:"- Browser auto sends cookies, attacker abuses that"}),t.jsx("li",{children:"- A forged write request can succeed if no extra validation"}),t.jsx("li",{children:"- Fix with SameSite + CSRF tokens + origin checks"})]})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"Typical protection combo"}),t.jsxs("ul",{className:"miniList",children:[t.jsx("li",{children:"- SameSite=Lax"}),t.jsx("li",{children:"- HttpOnly + Secure cookies"}),t.jsx("li",{children:"- x-csrf-token for writes"}),t.jsx("li",{children:"- Origin validation"})]})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"Common state changes"}),t.jsxs("ul",{className:"miniList",children:[t.jsx("li",{children:"- change password"}),t.jsx("li",{children:"- update email"}),t.jsx("li",{children:"- transfer money"}),t.jsx("li",{children:"- create order"})]})]})]})]}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(be,{})}),t.jsx("span",{className:"closingText",children:"If you use cookies for auth, assume CSRF exists unless you actively prevent it."})]})]})]})},Lf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 980px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;

                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2200px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .samples {
            margin: 14px;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            overflow: hidden;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .samplesTop {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .samplesIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .samplesTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .samplesSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .sampleGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .sampleCard {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .sampleHeader {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
        }

        .sampleLeft {
            display: flex;
            gap: 12px;
            min-width: 0;
        }

        .sampleIcon {
            width: 40px;
            height: 40px;
            border-radius: 14px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .sampleTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 4px;
        }

        .sampleNote {
            font-size: 12.5px;
            color: var(--color-text-muted);
            line-height: 1.5;
        }

        .code {
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .pitfalls {
            margin: 14px;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            overflow: hidden;

            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .pitTop {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .pitIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 14%,
                    transparent
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pitTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .pitSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .pitList {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dotWarn {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-warning) 88%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-success) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-success) 12%,
                    transparent
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody,
            .sampleCard {
                transition: none !important;
            }
        }
    `},Of=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"what",title:"What is rate limiting",icon:t.jsx(Yt,{}),summary:"A safety gate that limits how many requests a client can make in a time window.",points:["Goal - protect your API from abuse, bots, and accidental overload","It is not just security - it is also reliability and cost control","Usually applied per IP, per user, per API key, or per route"],mentalModel:"Think of it like a traffic signal for requests. It does not stop traffic forever - it controls the flow so the road does not collapse."},{key:"why",title:"Why it matters in production",icon:t.jsx(Pe,{}),summary:"Without it, one noisy client can slow down everyone and even crash your service.",points:["Stops brute force login attempts","Reduces spam and scraping","Prevents sudden spikes from taking down your servers","Helps keep database and downstream services stable"],mentalModel:"Rate limiting is a circuit breaker for traffic volume. You allow a safe amount and reject or slow down the rest."},{key:"responses",title:"How APIs respond",icon:t.jsx(jn,{}),summary:"Use clear status codes and headers so clients know what happened and when to retry.",points:["Common status - 429 Too Many Requests","Return a stable error shape so frontend can show a proper message","Send retry hints using headers when possible"],mentalModel:"Clients are not mind readers. If you reject requests, tell them when they can retry."},{key:"strategies",title:"Common strategies",icon:t.jsx(bu,{}),summary:"Different algorithms fit different traffic patterns. Choose based on fairness and burst handling.",points:["Fixed window - simplest, but allows boundary bursts","Sliding window - smoother limits, more accurate","Token bucket - allows bursts but controls average rate","Leaky bucket - smooth out traffic, steady output"],mentalModel:"Token bucket is like a wallet of tokens. Tokens refill over time. Each request spends one token."},{key:"where",title:"Where to apply it",icon:t.jsx(vu,{}),summary:"Best placed at the edge first, then in your app for route level rules.",points:["Edge - CDN / load balancer / reverse proxy (fastest rejection)","App - Express middleware for per route or per user rules","Downstream - protect expensive endpoints like search and login"],mentalModel:"Reject early - do not let bad traffic reach expensive code paths."},{key:"state",title:"Where to store counters",icon:t.jsx(wn,{}),summary:"In-memory works only for single instance. For multiple servers use shared storage like Redis.",points:["Single server - in-memory map can work but resets on restart","Multiple servers - need shared state (Redis is common)","Avoid database counters for high traffic limits - too slow and costly"],mentalModel:"If you have multiple servers, they must agree on counts. Redis helps them share the same truth."}],[]),w=z.useMemo(()=>[{key:"expressMemory",title:"Example - simple Express in-memory limiter",icon:t.jsx(qe,{}),note:"Good for learning and small apps. Not recommended for multi-instance production.",code:`// Simple in-memory rate limiter (per IP per route)
// Limit: 10 requests per 60 seconds

const hits = new Map();

const rateLimit = (req, res, next) => {
  const ip = req.ip || "unknown";
  const key = \`\${ip}:\${req.path}\`;

  const now = Date.now();
  const windowMs = 60 * 1000;
  const limit = 10;

  const entry = hits.get(key) || { count: 0, start: now };

  // reset window
  if (now - entry.start >= windowMs) {
    entry.count = 0;
    entry.start = now;
  }

  entry.count += 1;
  hits.set(key, entry);

  if (entry.count > limit) {
    const retryAfterSec = Math.ceil((windowMs - (now - entry.start)) / 1000);

    res.setHeader("Retry-After", String(retryAfterSec));
    return res.status(429).json({
      ok: false,
      error: {
        code: "RATE_LIMITED",
        message: "Too many requests. Try again later.",
        retryAfterSec,
      },
    });
  }

  next();
};

// usage
app.use("/api/login", rateLimit);`},{key:"tokenBucketRedis",title:"Example - token bucket mental model (Redis style)",icon:t.jsx(wn,{}),note:"This shows the idea. Real production code uses atomic operations and Lua scripts to avoid race conditions.",code:`// Token bucket concept (pseudo)
// capacity = max tokens
// refillRate = tokens per second

// store in Redis per user:
// tokens, lastRefillTs

function allowRequest(userKey) {
  // read tokens and lastRefillTs
  // refill based on time passed
  // if tokens >= 1 -> decrement and allow
  // else reject with 429 and Retry-After hint
}

// Why Redis + Lua?
// To make read-refill-decrement atomic across servers.`},{key:"headers",title:"Helpful headers to return",icon:t.jsx(Fe,{}),note:"Different teams use different header names. Pick a convention and keep it consistent.",code:`// Common patterns
// 429 Too Many Requests
// Retry-After: 12

// Some systems also send:
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 24
X-RateLimit-Reset: 1710000000`}],[]),S=z.useMemo(()=>["Applying the same strict limit to all endpoints - login and search need different rules","Using only IP based limits - mobile networks and shared NAT can cause false blocks","No retry hints - clients keep hammering and things get worse","In-memory limits in multi-instance production - every server counts separately","Non-atomic counter updates - race conditions allow extra requests","No allowlist for trusted internal services - breaks your own systems"],[]),p=()=>{c(v=>!v),a&&u(null)},x=v=>{u(b=>b===v?null:v)};return t.jsxs(Lf.Wrapper,{id:"rate-limiting",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:p,"aria-expanded":a,title:a?"Collapse section":"Expand section",children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Pe,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Rate limiting"}),t.jsx("span",{className:"sub",children:"Protect APIs from abuse and overload using fair request limits"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Er,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Rate limiting - quick definition"}),t.jsx("div",{className:"introSub",children:"Rate limiting sets a maximum request rate so one client cannot overwhelm the system. You usually return 429 and provide retry hints so clients back off cleanly."})]})]}),t.jsx("div",{className:"grid",children:m.map(v=>{const b=l===v.key;return t.jsxs("div",{className:`card ${b?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>x(v.key),"aria-expanded":b,title:b?"Collapse":"Expand",children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:v.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:v.title}),t.jsx("span",{className:"cSummary",children:v.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${b?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${b?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:v.points.map((T,R)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:T})]},`${v.key}-p-${R}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Mental model"}),t.jsx("p",{className:"para",children:v.mentalModel})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"hintText",children:"Interview line: Rate limiting is used to protect API reliability and security by controlling request volume per client."})]})]})]},v.key)})}),t.jsxs("div",{className:"samples",children:[t.jsxs("div",{className:"samplesTop",children:[t.jsx("div",{className:"samplesIcon",children:t.jsx(qe,{})}),t.jsxs("div",{className:"samplesText",children:[t.jsx("div",{className:"samplesTitle",children:"Practical examples"}),t.jsx("div",{className:"samplesSub",children:"These examples show patterns you can describe in interviews and use in small projects."})]})]}),t.jsx("div",{className:"sampleGrid",children:w.map(v=>t.jsxs("div",{className:"sampleCard",children:[t.jsx("div",{className:"sampleHeader",children:t.jsxs("div",{className:"sampleLeft",children:[t.jsx("span",{className:"sampleIcon",children:v.icon}),t.jsxs("div",{className:"sampleHeadText",children:[t.jsx("div",{className:"sampleTitle",children:v.title}),t.jsx("div",{className:"sampleNote",children:v.note})]})]})}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:v.code})})]},v.key))})]}),t.jsxs("div",{className:"pitfalls",children:[t.jsxs("div",{className:"pitTop",children:[t.jsx("div",{className:"pitIcon",children:t.jsx(be,{})}),t.jsxs("div",{className:"pitText",children:[t.jsx("div",{className:"pitTitle",children:"Common pitfalls"}),t.jsx("div",{className:"pitSub",children:"Most real bugs come from wrong placement, wrong identity key, or wrong shared state."})]})]}),t.jsx("ul",{className:"pitList",children:S.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dotWarn"}),t.jsx("span",{className:"liText",children:v})]},`pit-${b}`))})]}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(Be,{})}),t.jsx("span",{className:"closingText",children:"Best practice: enforce rate limits at the edge first, then add route specific rules inside the app, and use Redis for shared counters in multi-instance setups."})]})]})]})},_f={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 78%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;

                display: inline-flex;
                align-items: center;
                gap: 8px;

                .tIcon {
                    display: inline-flex;
                    color: color-mix(
                        in srgb,
                        var(--color-accent) 80%,
                        var(--color-text-primary)
                    );
                }
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-accent) 72%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-accent) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},Bf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"whatIsHashing",icon:t.jsx(Tt,{}),title:"What is hashing",summary:"Hashing converts input into a fixed length output called a hash. Same input gives same hash.",points:["A hash function maps data of any size to a fixed size output.","It is one-way - you cannot reliably get the original input back from the hash.","Small input change causes a big hash change (avalanche effect).","Good hashes resist collisions - two different inputs producing the same hash."],mentalModel:"Hashing is like a fingerprint for data. You can compare fingerprints, but you cannot reconstruct the person from the fingerprint.",code:`// Node.js crypto hashing (fast hash)
// Use fast hashes for integrity, not for passwords

import crypto from "crypto";

const input = "hello";
const sha256 = crypto.createHash("sha256").update(input, "utf8").digest("hex");

console.log(sha256);`,gotchas:["Fast hashes like SHA-256 are not safe for storing passwords.","Hashing is not encryption. Encryption is reversible with a key, hashing is not."]},{key:"passwordStorage",icon:t.jsx(rt,{}),title:"Password storage",summary:"Passwords must be stored using slow, salted password hashing algorithms like bcrypt, scrypt, or Argon2.",points:["Never store plain text passwords.","Never store password hashes with fast hashes like MD5, SHA-1, SHA-256.","Use bcrypt, scrypt, or Argon2 because they are slow and expensive to brute force.","Store only the hash output and the salt (salt is usually included in bcrypt output)."],mentalModel:"A slow password hash is like making an attacker pay a heavy fee for every guess. That fee is what buys you safety.",code:`// Example using bcrypt (concept)
// Install: npm i bcrypt

import bcrypt from "bcrypt";

const password = "MySecretPass123";
const rounds = 12;

// Signup - hash and store
const hash = await bcrypt.hash(password, rounds);
// store hash in DB

// Login - verify
const ok = await bcrypt.compare(password, hash);
console.log(ok);`,gotchas:["Do not lower cost too much. Too low means easy brute force.","Do not re-hash a bcrypt hash again with SHA. It usually makes things worse and breaks upgrades."]},{key:"saltPepper",icon:t.jsx(tt,{}),title:"Salt and pepper",summary:"Salt makes identical passwords produce different hashes. Pepper is an extra secret stored separately from the DB.",points:["Salt is random per user and stored with the hash. It blocks rainbow tables and reuse across users.","Pepper is a server secret (like an env var). It adds extra protection if the DB leaks.","If you use a pepper, rotate it carefully because rotation can break verification if not designed."],mentalModel:"Salt is like adding a unique username-specific spice to every password before cooking. Pepper is a secret spice jar stored in your kitchen, not in the recipe book.",code:`// Pepper concept (pseudo)
// passwordHash = hash(password + PEPPER, salt)

const PEPPER = process.env.PASSWORD_PEPPER;

function withPepper(password) {
  return password + PEPPER;
}

// Then pass withPepper(password) into bcrypt.hash or argon2`,gotchas:["If pepper leaks, you lose the pepper benefit. Protect secrets well.","Salt must be random and unique per password."]},{key:"integrityVsPasswords",icon:t.jsx(Pe,{}),title:"Hashing for integrity vs passwords",summary:"Fast hashing is great for integrity checks. Password hashing needs slow algorithms designed for passwords.",points:["Integrity use case - file download verification, cache keys, content fingerprints.","Password use case - bcrypt, scrypt, Argon2 only.","Fast hashes are optimized to be computed quickly, attackers love that."],mentalModel:"Fast hashes are race cars - good for speed. Password hashes should be heavy trucks - slow and hard to accelerate.",code:`// Integrity example - verify file checksum
// You compute SHA-256 of a file and compare with known good hash

import crypto from "crypto";
import fs from "fs";

const h = crypto.createHash("sha256");
fs.createReadStream("./big.zip").on("data", (chunk) => h.update(chunk))
  .on("end", () => console.log(h.digest("hex")));`,gotchas:["Do not use SHA-256 for password storage.","Do not confuse hashing with signing. Signing needs keys and proves authenticity."]},{key:"timingSafeCompare",icon:t.jsx(St,{}),title:"Timing safe comparison",summary:"Comparing secrets using normal string comparison can leak info via timing. Use constant time compare for secrets.",points:["Timing attacks can reveal partial matches if comparisons stop early.","Use crypto.timingSafeEqual when comparing tokens or hashes of equal length.","Always normalize data and ensure same length buffers before comparing."],mentalModel:"If your comparison takes longer when more characters match, an attacker can learn your secret one character at a time.",code:`import crypto from "crypto";

const a = Buffer.from("aabbcc", "hex");
const b = Buffer.from("aabbcc", "hex");

const ok = crypto.timingSafeEqual(a, b);
console.log(ok);`,gotchas:["timingSafeEqual throws if lengths differ. Handle length checks first.","For passwords, use bcrypt.compare or argon2.verify instead of manual compares."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(_f.Wrapper,{id:"hashing",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Hashing"}),t.jsx("span",{className:"sub",children:"Password storage, salts, integrity hashes, and common security pitfalls"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why hashing matters"}),t.jsx("div",{className:"introSub",children:"Hashing shows up everywhere in backend work - auth, password storage, request integrity, caching keys, and secure token handling. Getting hashing wrong is a top reason for account takeovers after database leaks."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:"card",children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-p-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Mental model"}),t.jsx("p",{className:"para",children:p.mentalModel})]}),t.jsxs("div",{className:"block",children:[t.jsxs("div",{className:"blockTitle",children:[t.jsx("span",{className:"tIcon",children:t.jsx(Co,{})}),t.jsx("span",{children:"Example"})]}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsxs("div",{className:"blockTitle",children:[t.jsx("span",{className:"tIcon",children:t.jsx(be,{})}),t.jsx("span",{children:"Common pitfalls"})]}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Be,{})}),t.jsx("span",{className:"hintText",children:"Revision tip: In an interview, say why bcrypt is used for passwords and why SHA-256 is not."})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Rule to remember - fast hashes for integrity, slow hashes for passwords, and always salt."})]})]})]})},Ff={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2400px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},Df=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"basics",title:"Caching basics",icon:t.jsx(qe,{}),summary:"Cache stores a copy of expensive data so future requests are faster and cheaper.",bullets:["Cache hit means data found in cache and served quickly.","Cache miss means not found, so you compute or fetch from source, then store it for next time.","Caching improves latency and reduces load on databases and downstream services.","Cache is not a source of truth. Your database is the source of truth."],mentalModel:{title:"Mental model",text:"Cache is like keeping the most used tools on your desk instead of going to the store room every time."},example:{title:"Example - in-memory cache idea",code:`// Simple in-memory cache pattern (per process)
const cache = new Map();

async function getUser(userId) {
  const key = \`user:\${userId}\`;

  if (cache.has(key)) {
    return { fromCache: true, value: cache.get(key) };
  }

  const value = await db.users.findById(userId);
  cache.set(key, value);

  return { fromCache: false, value };
}

// Real production usually uses Redis for shared cache.`},gotchas:["In-memory cache is per process. In a multi-instance server, each instance has its own cache.","Memory grows if you never evict keys. Use TTL or size limits.","Stale data is normal. You must design how stale is acceptable."]},{key:"redis",title:"Redis patterns",icon:t.jsx(wn,{}),summary:"Redis is commonly used as a shared cache and as a fast data structure store for backend systems.",bullets:["TTL means time to live. Key expires automatically after TTL.","Common keys: user sessions, rate limit counters, product lists, precomputed responses.","Cache aside is the most common pattern: app checks cache, on miss fetches DB, then sets cache.","Avoid caching very large objects if it increases network and memory cost too much."],mentalModel:{title:"Mental model",text:"Redis is a shared super-fast shelf that all your app servers can access."},example:{title:"Example - cache aside with TTL",code:`// Cache-aside using Redis (pseudo)
const key = \`products:page:\${page}\`;

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const data = await db.products.list({ page });
await redis.set(key, JSON.stringify(data), { EX: 60 }); // 60 seconds TTL

return data;`},gotchas:["Cache stampede: many requests miss at once and all hit DB. Use locking or request coalescing.","Hot keys: a single key is requested too often. Consider sharding keys or local cache layer.","Serialization bugs: store and read consistently with JSON, msgpack, etc."]},{key:"cdn",title:"CDN caching",icon:t.jsx(Kt,{}),summary:"CDN caches content at edge locations near users. Best for static assets and cacheable API responses.",bullets:["CDN reduces latency by serving from a nearby edge instead of your origin server.","Static assets: images, JS, CSS are perfect for CDN caching.","API caching is possible when responses are safe to cache and vary rules are correct.","Cache-Control headers decide how long content is cacheable."],mentalModel:{title:"Mental model",text:"A CDN is many mini servers across the world that keep copies so users do not always travel to your origin."},example:{title:"Example - cache headers quick view",code:`// Typical static asset caching
Cache-Control: public, max-age=31536000, immutable

// For API data that changes often
Cache-Control: public, max-age=60

// For user-specific responses
Cache-Control: private, no-store`},gotchas:["Wrong caching for user-specific data can leak private content.","Missing Vary headers can cause incorrect cached variants.","CDN cache invalidation costs money and time. Plan versioned assets."]},{key:"invalidation",title:"Cache invalidation and freshness",icon:t.jsx(Qa,{}),summary:"Cache invalidation is the hard part. Decide when cache should update and how stale is allowed.",bullets:["TTL-based invalidation: data expires after a fixed time. Simple and common.","Write-through: writes go to cache and DB together. Reads hit cache more often.","Write-behind: cache writes first, DB updates later. Faster but riskier if failure happens.","Event-based invalidation: on DB change, delete or update related keys."],mentalModel:{title:"Mental model",text:"Freshness is a budget. If you can tolerate 30 seconds stale data, TTL is easy. If you need real-time accuracy, cache gets harder."},example:{title:"Example - delete key on update",code:`// On product update, invalidate product and list keys (pseudo)
await db.products.update(id, payload);

// Invalidate related cache keys
await redis.del(\`product:\${id}\`);
await redis.del("products:page:1");
await redis.del("products:page:2");

// Better: use key patterns carefully or maintain a version key.`},gotchas:["Over-invalidation removes benefits. Under-invalidation serves stale data too long.","Key design matters: plan key names and groups from day one.","Cache consistency is not free. Keep it simple unless requirements demand more."]},{key:"security",title:"Caching and security",icon:t.jsx(Pe,{}),summary:"Caching can accidentally store sensitive responses. Always decide what is safe to cache.",bullets:["Never cache secrets, tokens, or personalized pages in a public cache.","Use private or no-store for user-specific responses.","Be careful with shared caches and multi-tenant systems.","For auth, cache must not bypass permission checks."],mentalModel:{title:"Mental model",text:"A cache is a place where copies live. If a copy is sensitive and ends up in the wrong place, it becomes a data leak."},example:{title:"Example - safe defaults",code:`// Safe for user-specific endpoints
Cache-Control: private, no-store

// Safe for public docs or public data
Cache-Control: public, max-age=60`},gotchas:["CDN caching + missing user separation is a common security incident pattern."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(Ff.Wrapper,{id:"caching",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Fm,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Caching"}),t.jsx("span",{className:"sub",children:"Basics, Redis patterns, CDN caching, invalidation, and safety rules"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why caching matters"}),t.jsx("div",{className:"introSub",children:"Caching is one of the easiest ways to make an API feel fast. It also introduces correctness risks if you cache the wrong thing. These notes focus on practical patterns used in production."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsx("span",{className:"hintText",children:'Revision tip: Say "what is cached", "where it is cached", "for how long", and "how it is invalidated".'})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Always define a freshness rule. If you cannot explain your invalidation strategy, your cache will eventually lie to you."})]})]})]})},Hf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},qf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"what",title:"What Redis is",icon:t.jsx(wn,{}),summary:"Redis is an in-memory data store, often used as a cache, key-value store, and lightweight data structure server.",points:["In-memory means data is stored in RAM, so reads and writes are very fast.","Redis is commonly used for caching, rate limiting, sessions, queues, and realtime counters.","Redis can persist data to disk using snapshots (RDB) or append-only log (AOF), but RAM is the main performance source."],mentalModel:"Think of Redis as a super fast shared memory box for your backend. You put small, frequently used data there so your database does less work.",exampleTitle:"Example - cache flow",code:`// Cache aside pattern (high level)
const key = "user:42";

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const user = await db.users.findById(42);

await redis.set(key, JSON.stringify(user), { EX: 60 }); // 60 seconds TTL
return user;`,pitfalls:["Redis is not your primary database for complex queries.","Store only cache-friendly data - small, frequently accessed, easy to recompute."]},{key:"ttl",title:"TTL and cache invalidation",icon:t.jsx(jn,{}),summary:"TTL is Time To Live. It decides how long a cached key stays valid before Redis removes it.",points:["TTL helps prevent serving stale data forever.","Short TTL reduces staleness but increases database load.","Long TTL reduces database load but increases staleness risk. Use versioning or explicit invalidation for critical data."],mentalModel:"TTL is an expiry sticker on data. After the time passes, Redis throws it away so you are forced to refresh from the source.",exampleTitle:"Example - product cache with version",code:`// Versioned keys reduce invalidation pain
const version = await redis.get("products:version") || "v1";
const key = \`products:\${version}:page:1\`;

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const page = await db.products.findPage(1);
await redis.set(key, JSON.stringify(page), { EX: 120 });
return page;

// When you deploy a new pricing rule or bulk update:
// await redis.incr("products:version");`,pitfalls:["Cache invalidation is hard - prefer TTL plus explicit busting for important changes.","Do not cache forever unless data never changes."]},{key:"patterns",title:"Common Redis patterns",icon:t.jsx(tt,{}),summary:"Redis becomes powerful when you use small patterns that solve real backend pain points.",points:["Caching - cache responses, user profiles, product pages.","Counters - views, likes, rate counters.","Rate limiting - block abusive clients.","Sessions - store session data for cookie-based auth flows.","Queues - simple job queue using lists or streams (concept)."],mentalModel:"Redis patterns are like Lego blocks. Small primitives combine into useful backend features.",exampleTitle:"Example - counter",code:`// Page view counter
await redis.incr("page:/home:views");

// Read the counter
const views = await redis.get("page:/home:views");`,pitfalls:["Keep keys consistent - naming conventions matter for debugging.","Do not store large blobs without thinking about memory."]},{key:"rateLimit",title:"Rate limiting with Redis",icon:t.jsx(Pe,{}),summary:"Rate limiting restricts how many requests a client can make in a time window.",points:["Simple approach: key per client per route per window.","Use TTL so the counter resets automatically.","This protects your API from abuse and reduces load spikes."],mentalModel:"Rate limiting is a bouncer at the door. If someone keeps spamming, they get blocked for a while.",exampleTitle:"Example - fixed window limit",code:`// Fixed window: 100 requests per minute
const key = \`rl:\${ip}:\${route}:\${minuteBucket}\`;

const count = await redis.incr(key);

if (count === 1) {
  await redis.expire(key, 60); // 60 seconds
}

if (count > 100) {
  // return 429 Too Many Requests
}`,pitfalls:["Fixed window can allow bursts at window edges. Sliding window and token bucket are better but more complex.","Always include route or action in the key to avoid blocking everything."]},{key:"stampede",title:"Cache stampede and protection",icon:t.jsx(gl,{}),summary:"Cache stampede happens when many requests miss the cache at the same time and hit the database together.",points:["This often happens when a popular key expires and traffic is high.","Use locking or request coalescing to ensure only one request rebuilds the cache.","Add small random jitter to TTL so many keys do not expire together."],mentalModel:"Stampede is when everyone rushes to the database at once because the cache door just closed.",exampleTitle:"Example - TTL jitter",code:`// Add random jitter to spread expiry times
const base = 60; // seconds
const jitter = Math.floor(Math.random() * 15); // 0 to 14
await redis.set(key, value, { EX: base + jitter });`,pitfalls:["Locks must have TTL to avoid deadlocks if a worker crashes.","Do not rebuild cache inside a long critical section if it can take seconds."]},{key:"ops",title:"Operational notes",icon:t.jsx(bu,{}),summary:"Redis is fast, but you still need to run it safely in production.",points:["Memory is the main constraint. Know your maxmemory policy.","Have a plan for eviction - keys removed when memory is full.","Keep Redis private - do not expose to public internet.","Monitor hit rate, memory usage, latency, and evictions."],mentalModel:"Treat Redis as a performance engine. Great power, but you must watch heat and fuel levels.",exampleTitle:"Example - safe thinking checklist",code:`// Before caching something, ask:
- Is this data small?
- Is it requested often?
- Can I tolerate staleness for 30-120 seconds?
- Do I know how to invalidate it?
- What happens if Redis is down?`,pitfalls:["If Redis goes down, your system should still work - maybe slower, but not broken.","Never assume cache is the source of truth for critical data."]},{key:"glossary",title:"Mini glossary",icon:t.jsx(Fe,{}),summary:"Quick full forms and terms used around Redis and caching.",points:["TTL - Time To Live","Eviction - removing keys when memory is full","Hit - request served from cache","Miss - request not found in cache","Cache aside - app reads cache first, fills cache on miss","Jitter - adding small randomness to expiry times"],mentalModel:"Glossary is your fast recall layer. Read it before interviews.",exampleTitle:"Example - hit rate idea",code:`// Hit rate (concept)
hitRate = hits / (hits + misses)

// Higher hit rate usually means lower DB load.`,pitfalls:["A high hit rate is good, but not if it serves wrong or stale data for business critical flows."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(Hf.Wrapper,{id:"redis",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,title:a?"Collapse Redis":"Expand Redis",children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(qe,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Redis"}),t.jsx("span",{className:"sub",children:"Cache, TTL, rate limiting, stampede protection, and production habits"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(wn,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Why Redis matters in backend systems"}),t.jsx("div",{className:"introSub",children:"Redis reduces database load, speeds up hot paths, enables rate limiting, and supports simple realtime counters. Learn a few patterns well and you will use them everywhere."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,title:x?`Collapse ${p.title}`:`Expand ${p.title}`,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-p-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Mental model"}),t.jsx("p",{className:"para",children:p.mentalModel})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.exampleTitle}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.pitfalls.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-x-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",p.title," in 2 lines and give 1 real example from production."]})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(vl,{})}),t.jsx("span",{className:"closingText",children:"Rule: Cache makes things fast. Correctness comes first. Always plan staleness, invalidation, and fallback when Redis is unavailable."})]})]})]})},$f={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .leftNav {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 16px 36px var(--color-shadow);
        }

        .navItem {
            width: 100%;
            text-align: left;

            display: flex;
            gap: 12px;
            padding: 12px 12px;

            border-bottom: 1px solid var(--color-border);

            transition:
                transform 140ms ease,
                background-color 140ms ease,
                border-color 140ms ease;

            .nIcon {
                width: 36px;
                height: 36px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nIcon svg {
                width: 16px;
                height: 16px;
            }

            .nText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .nSub {
                font-size: 12px;
                color: var(--color-text-muted);
                line-height: 1.45;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 8%,
                    transparent
                );
                transform: translateY(-1px);
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .navItem.active {
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );
        }

        .rightPanel {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 16px 36px var(--color-shadow);
        }

        .panelTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .pIcon {
                width: 42px;
                height: 42px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pIcon svg {
                width: 18px;
                height: 18px;
            }

            .pText {
                min-width: 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding-top: 1px;
            }

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }

            .pBadge {
                flex: 0 0 auto;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 7px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
                white-space: nowrap;
            }

            .pBadge svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 86%,
                    var(--color-text-primary)
                );
            }
        }

        .panelBlock {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .panelFooter {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .fIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .fText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 700;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .navItem {
                transition: none !important;
            }
        }
    `},Wf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("what"),m=z.useMemo(()=>[{key:"what",title:"What is a CDN",icon:t.jsx(Kt,{}),summary:"CDN means Content Delivery Network. It serves content from servers closer to users to reduce latency and offload your origin server.",points:["A CDN is a network of edge servers distributed across locations.","Users are routed to a nearby edge so content loads faster.","Your main server is called the origin. CDN sits in front of it."],mentalModel:{title:"Mental model",text:"Origin is the warehouse. CDN edges are local stores. Customers get items from the nearest store instead of traveling to the warehouse."},example:{title:"Common CDN use cases",code:`- Static assets: images, CSS, JS
- Video delivery and large downloads
- API acceleration (sometimes) with caching
- DDoS absorption and WAF protection (depending on provider)`}},{key:"how",title:"How a CDN works",icon:t.jsx(Um,{}),summary:"The first request may go to origin, then the CDN stores a cached copy at the edge. Next users get a cache hit from the edge.",points:["User requests https://cdn.example.com/logo.png","Edge checks cache - if present: cache hit, respond immediately","If not present: cache miss, edge fetches from origin, stores it, responds","Routing is usually done by DNS or anycast, so user reaches a nearby edge"],mentalModel:{title:"Mental model",text:"Edge is like a smart vending machine. If the item is stocked, it gives instantly. If not, it goes to refill from the warehouse and then serves."},example:{title:"Cache hit vs cache miss",code:`Cache hit:
- Edge already has the file
- Fast response
- Origin load is avoided

Cache miss:
- Edge fetches from origin
- Slower for first request
- Subsequent requests become fast`}},{key:"cacheRules",title:"Caching rules",icon:t.jsx(tt,{}),summary:"CDN caching depends on headers and CDN rules. You control cache behavior mostly via Cache-Control, Expires, ETag, and Vary.",points:["Cache-Control controls how long and how content can be cached.","max-age tells TTL in seconds.","public means shared caches (CDN) can cache it.","private means only browser cache, CDN should not cache.","no-store means do not store anywhere.","ETag allows revalidation with If-None-Match and can return 304 Not Modified.","Vary tells cache key variations like Vary: Accept-Encoding."],mentalModel:{title:"Mental model",text:"Headers are the caching contract. You tell the CDN what can be stored, for how long, and when it must check back with origin."},example:{title:"Good defaults for static assets",code:`// Fingerprinted asset: app.4f2c1a.js
Cache-Control: public, max-age=31536000, immutable

// Non fingerprinted asset: logo.png (changes sometimes)
Cache-Control: public, max-age=86400

// User specific response (do not CDN cache)
Cache-Control: private, no-store`}},{key:"invalidation",title:"Invalidation and versioning",icon:t.jsx(Qa,{}),summary:"CDN caches can become stale. You handle it with cache invalidation or better with cache busting by versioned file names.",points:["Best practice: cache busting using versioned filenames like app.hash.js.","If you cannot version, use invalidation or purge requests.","Invalidation might take time to propagate across edges.","Use shorter TTL for frequently changing content."],mentalModel:{title:"Mental model",text:"Instead of telling every store to throw old posters away, print a new poster with a new ID. Stores will fetch the new one automatically."},example:{title:"Cache busting pattern",code:`Old:
- /assets/app.js

Better:
- /assets/app.9b21f3.js

Now you can set 1 year caching safely because a new build creates a new filename.`}},{key:"perfSecurity",title:"Performance and security benefits",icon:t.jsx(qe,{}),summary:"CDNs reduce latency, reduce origin bandwidth, and can add security layers like DDoS protection and WAF depending on provider.",points:["Lower latency because edge is closer to users.","Lower origin load and bandwidth cost due to caching.","Better resilience during traffic spikes.","Some CDNs provide WAF, bot protection, TLS termination, and DDoS mitigation."],mentalModel:{title:"Mental model",text:"CDN is both a speed layer and a protective shield in front of your origin."},example:{title:"Practical effect",code:`If your origin is in Mumbai and user is in Europe:
- Without CDN: every request travels far to origin
- With CDN: edge in Europe serves cached files quickly`}},{key:"pitfalls",title:"Common pitfalls",icon:t.jsx(be,{}),summary:"Most CDN issues are cache key mistakes, wrong headers, or stale content due to TTL and invalidation problems.",points:["Serving stale content because TTL is too high and no invalidation strategy exists.","Caching user specific data by mistake (missing private or no-store).","Wrong cache key - ignoring query params or headers that should vary.","Not caching at all because Cache-Control is too strict.","Assuming CDN makes API fast automatically without correct caching rules."],mentalModel:{title:"Mental model",text:"CDN is predictable if your cache rules are correct. Most bugs are self-inflicted by headers and cache keys."},example:{title:"Golden safety checks",code:`- Static assets: public + long max-age + versioned filenames
- Auth endpoints: private + no-store
- Always confirm CDN response headers: HIT or MISS and Age`}},{key:"interview",title:"Interview ready Q and A",icon:t.jsx($m,{}),summary:"These questions test whether you understand CDN behavior, caching headers, and real production tradeoffs.",points:["Q: Why is a CDN used - A: reduce latency and offload origin.","Q: Cache hit vs miss - A: hit served from edge, miss fetched from origin.","Q: How do you prevent stale assets - A: versioned filenames and long cache TTL.","Q: When not to cache - A: user specific or sensitive responses, use private or no-store.","Q: What headers matter - A: Cache-Control, ETag, Vary, Expires."],mentalModel:{title:"Mental model",text:"Interviewers want to see that you can ship fast sites without breaking correctness or security."},example:{title:"One line answer",code:"A CDN is a distributed cache in front of your origin that serves content from nearby edge locations to reduce latency and origin load."}}],[]),w=()=>{c(x=>!x)},S=x=>{u(x)},p=z.useMemo(()=>m.find(x=>x.key===l)||m[0],[m,l]);return t.jsxs($f.Wrapper,{id:"cdn",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Pe,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"CDN"}),t.jsx("span",{className:"sub",children:"Edge caching, headers, invalidation, and production tradeoffs"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"What you should remember"}),t.jsx("div",{className:"introSub",children:"CDN improves speed by serving cached content from edge locations. Correct caching headers and cache busting keep it fast and safe."})]})]}),t.jsxs("div",{className:"layout",children:[t.jsx("div",{className:"leftNav",role:"tablist","aria-label":"CDN topics",children:m.map(x=>{const v=x.key===l;return t.jsxs("button",{type:"button",className:`navItem ${v?"active":""}`,onClick:()=>S(x.key),role:"tab","aria-selected":v,children:[t.jsx("span",{className:"nIcon",children:x.icon}),t.jsxs("span",{className:"nText",children:[t.jsx("span",{className:"nTitle",children:x.title}),t.jsx("span",{className:"nSub",children:x.summary})]})]},x.key)})}),t.jsxs("div",{className:"rightPanel",role:"tabpanel",children:[t.jsxs("div",{className:"panelTop",children:[t.jsx("div",{className:"pIcon",children:p.icon}),t.jsxs("div",{className:"pText",children:[t.jsx("div",{className:"pTitle",children:p.title}),t.jsx("div",{className:"pSummary",children:p.summary})]}),t.jsxs("div",{className:"pBadge",children:[t.jsx(Be,{})," Core"]})]}),t.jsxs("div",{className:"panelBlock",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((x,v)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:x})]},`${p.key}-p-${v}`))})]}),t.jsxs("div",{className:"panelBlock",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"panelBlock",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"panelFooter",children:[t.jsx("span",{className:"fIcon",children:t.jsx(jn,{})}),t.jsx("span",{className:"fText",children:"Revision tip: Say CDN in 1 line, then explain cache hit and miss in 2 lines."})]})]})]}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Fast and safe CDN setup usually means versioned assets, long cache TTL, and strict no-store for user data."})]})]})]})},Uf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 8000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 3200px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},Yf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState(null),m=z.useMemo(()=>[{key:"why",title:"Why logging and monitoring exist",icon:t.jsx(Yt,{}),summary:"Logs tell you what happened. Monitoring tells you what is happening. Together they make production debuggable.",bullets:["Without logs you guess. With logs you know what the code actually did.","Without monitoring you react late. With monitoring you see problems early.","In production, bugs are normal. Observability is the superpower that makes them solvable."],mentalModel:{title:"Mental model",text:"Logs are the story of past events. Monitoring is the live dashboard of system health."},example:{title:"Example - what you want to answer fast",code:`// Questions logs and monitoring should help answer
// - Which endpoint is failing right now
// - How many users are impacted
// - Is it database, cache, network, or code
// - When did it start and what changed`},gotchas:["If you only log errors, you miss the cause.","If you log everything, you drown in noise and cost."]},{key:"structuredLogs",title:"Structured logs",icon:t.jsx(Ja,{}),summary:"Structured logs are logs written as consistent fields, usually JSON, so machines can search, filter, and aggregate them reliably.",bullets:["A structured log has fields like level, message, requestId, userId, route, statusCode, durationMs.","Structured logs work best with log search tools because you can filter by fields.","Human readable text logs are fine for dev, but structured logs win in production."],mentalModel:{title:"Mental model",text:"A structured log is like a spreadsheet row. A plain string log is like a random sentence in a diary."},example:{title:"Example - Node style structured log",code:`// Example log object (could be JSON)
console.log(JSON.stringify({
  level: "info",
  msg: "request complete",
  requestId: "req_9f1c",
  method: "GET",
  path: "/api/users",
  statusCode: 200,
  durationMs: 37,
  ts: new Date().toISOString()
}));

// Why it helps:
// - filter by requestId
// - group by statusCode
// - average durationMs per route`},gotchas:["Do not log passwords, tokens, cookies, or secrets.","Avoid logging full request bodies blindly."]},{key:"correlationId",title:"Correlation IDs",icon:t.jsx(Tt,{}),summary:"A correlation ID (often called requestId) ties all logs for a single request across services so you can trace the full path.",bullets:["Generate a requestId at the edge (API gateway or first service).","Pass it through headers like x-request-id to downstream services.","Include requestId in every log line for that request."],mentalModel:{title:"Mental model",text:"Correlation ID is a tracking number for a request, like a courier shipment ID."},example:{title:"Example - simple Express middleware",code:`import crypto from "crypto";

app.use((req, res, next) => {
  const incoming = req.headers["x-request-id"];
  const requestId = incoming || crypto.randomUUID();

  req.requestId = requestId;
  res.setHeader("x-request-id", requestId);

  next();
});

// Later in route handlers:
console.log(JSON.stringify({
  level: "info",
  msg: "fetching user",
  requestId: req.requestId,
  userId: "u_123"
}));`},gotchas:["If requestId is missing, debugging distributed issues becomes painful."]},{key:"metrics",title:"Monitoring and metrics",icon:t.jsx(Yt,{}),summary:"Monitoring is built on metrics. Metrics are numbers over time, like request rate, error rate, and latency.",bullets:["Common API metrics: requests per second, 4xx rate, 5xx rate, p95 latency, p99 latency.","Infra metrics: CPU, memory, disk, network, database connections.","A good monitoring setup detects issues before users complain."],mentalModel:{title:"Mental model",text:"Metrics are the vital signs of your system - pulse, blood pressure, oxygen levels."},example:{title:"Example - what a useful dashboard shows",code:`// A practical dashboard usually includes
// - Traffic: requests per second per route
// - Errors: 4xx and 5xx rate
// - Latency: p50, p95, p99
// - Dependencies: DB latency, Redis hit rate
// - Saturation: CPU and memory`},gotchas:["Do not rely only on average latency. Use percentiles like p95 and p99."]},{key:"alerts",title:"Alerting",icon:t.jsx(be,{}),summary:"Alerts are rules that notify you when something abnormal happens. Alerts should be actionable, not noisy.",bullets:["Alert when users are impacted: sustained 5xx spike, high latency, failed payments.","Use thresholds and time windows to avoid false alarms.","Add runbooks: short steps that tell what to check first."],mentalModel:{title:"Mental model",text:"Alerts are smoke alarms, not decoration. If they beep too often, people ignore them."},example:{title:"Example - alert rule style",code:`// Example alert ideas
// - 5xx rate > 2% for 5 minutes
// - p95 latency > 800ms for 10 minutes
// - DB connection errors > 10 per minute
// - Queue depth growing continuously`},gotchas:["Too many alerts cause alert fatigue.","Alerts without context waste time."]},{key:"errorTracking",title:"Error tracking",icon:t.jsx(yl,{}),summary:"Error tracking tools collect exceptions with stack traces, group similar errors, and show impact. This is different from logs.",bullets:["Error tracking captures stack traces and context.","It groups errors by signature so you do not chase duplicates.","It can show release version so you know which deploy introduced the error."],mentalModel:{title:"Mental model",text:"Logs are raw events. Error tracking is curated crash reports with grouping and impact."},example:{title:"Example - what error tracking should store",code:`// Typical captured context
// - error message and stack trace
// - requestId
// - route and method
// - userId (if safe)
// - environment (prod, staging)
// - release version
// - tags: region, service, instance`},gotchas:["Never send secrets to error trackers.","Sampling may be needed under high volume."]},{key:"securityLogging",title:"Security logging basics",icon:t.jsx(Pe,{}),summary:"Security logs help detect abuse and attacks while staying privacy safe. Log signals, not sensitive data.",bullets:["Log auth failures, rate limit hits, suspicious IP patterns, unusual user agent spikes.","Mask sensitive fields. Never store tokens or passwords.","Keep audit logs for critical actions: role change, password reset, payouts, deletions."],mentalModel:{title:"Mental model",text:"Security logs are CCTV footage. You want useful evidence, not private information leaks."},example:{title:"Example - safe audit log fields",code:`// Audit log example fields
{
  level: "warn",
  msg: "role updated",
  actorUserId: "admin_9",
  targetUserId: "u_42",
  oldRole: "employee",
  newRole: "manager",
  requestId: "req_1a2b",
  ts: "2026-03-04T07:10:00.000Z"
}`},gotchas:["Logging too much personal data can create compliance risk."]},{key:"healthChecks",title:"Health checks",icon:t.jsx(qe,{}),summary:"Health checks are endpoints that prove your service is alive and ready. They are used by load balancers and orchestration.",bullets:["Liveness means process is running.","Readiness means service can handle traffic (DB reachable, migrations done).","Keep health checks fast. Avoid heavy queries."],mentalModel:{title:"Mental model",text:"Liveness is breathing. Readiness is being awake and able to work."},example:{title:"Example - typical endpoints",code:`// Common endpoints
// GET /healthz  -> liveness
// GET /readyz   -> readiness

// In a simple Node service, /healthz can return 200 always.
// /readyz can check DB connection or key dependencies.`},gotchas:["Do not make health checks slow or expensive."]}],[]),w=()=>{c(p=>!p),a&&u(null)},S=p=>{u(x=>x===p?null:p)};return t.jsxs(Uf.Wrapper,{id:"logging-and-monitoring",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Er,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Logging and monitoring"}),t.jsx("span",{className:"sub",children:"Structured logs, correlation IDs, metrics, alerts, error tracking, and health checks"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"intro",children:[t.jsx("div",{className:"introIcon",children:t.jsx(Fe,{})}),t.jsxs("div",{className:"introText",children:[t.jsx("div",{className:"introTitle",children:"Production debugging without guesswork"}),t.jsx("div",{className:"introSub",children:"Logging and monitoring are the backbone of reliable backend systems. They help you detect issues early, understand impact, and fix problems faster."})]})]}),t.jsx("div",{className:"grid",children:m.map(p=>{const x=l===p.key;return t.jsxs("div",{className:`card ${x?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>S(p.key),"aria-expanded":x,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:p.icon}),t.jsxs("span",{className:"cText",children:[t.jsx("span",{className:"cTitle",children:p.title}),t.jsx("span",{className:"cSummary",children:p.summary})]})]}),t.jsx("span",{className:"cRight",children:t.jsx("span",{className:`cChev ${x?"rot":""}`,children:t.jsx(te,{})})})]}),t.jsxs("div",{className:`cardBody ${x?"show":""}`,children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.bullets.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-b-${b}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.mentalModel.title}),t.jsx("p",{className:"para",children:p.mentalModel.text})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"blockTitle",children:p.example.title}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.example.code})})]}),t.jsxs("div",{className:"block warn",children:[t.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),t.jsx("ul",{className:"list",children:p.gotchas.map((v,b)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:v})]},`${p.key}-g-${b}`))})]}),t.jsxs("div",{className:"footerHint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ze,{})}),t.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",p.title," in 2 lines and give one real incident where it helps."]})]})]})]},p.key)})}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(qe,{})}),t.jsx("span",{className:"closingText",children:"Strong backend teams treat logs and metrics as product features. If you cannot observe it, you cannot operate it."})]})]})]})},Kf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topHint {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .hintIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .hintSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .nav {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .navItem {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            padding: 12px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .nIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nIcon svg {
                width: 18px;
                height: 18px;
            }

            .nText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding-top: 2px;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .nSub {
                font-size: 12px;
                color: var(--color-text-muted);
                line-height: 1.45;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .nRight {
                flex: 0 0 auto;
                padding-top: 8px;
                color: var(--color-text-muted);
                opacity: 0.9;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: var(--color-border-light);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .navItem.active {
            border-color: color-mix(
                in srgb,
                var(--color-primary) 46%,
                var(--color-border)
            );
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 18px 40px var(--color-shadow);

            .nIcon {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 16%,
                    var(--color-surface)
                );
            }
        }

        .content {
            min-width: 0;
        }

        .card {
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .cardHead {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .cIcon {
                width: 44px;
                height: 44px;
                border-radius: 16px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .cSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .cardBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );
            padding: 14px;

            .bTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .mini {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .mTop {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
            }

            .mIcon {
                width: 30px;
                height: 30px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .mTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .mText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: var(--color-border-light);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .cardFoot {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: flex-start;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-warning) 8%, transparent)
            );

            .fIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .fText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .glossary {
            margin: 14px;
            margin-top: 0;
            border: 1px solid var(--color-border);
            border-radius: 18px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            padding: 14px;

            .gTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
            }

            .gGrid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px;

                @media (width < 720px) {
                    grid-template-columns: 1fr;
                }
            }

            .gItem {
                border: 1px solid var(--color-border);
                border-radius: 14px;
                padding: 12px;

                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );

                .k {
                    font-weight: 900;
                    color: var(--color-text-primary);
                    margin-bottom: 4px;
                }

                .v {
                    font-size: 13px;
                    color: var(--color-text-secondary);
                    line-height: 1.55;
                }
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .navItem,
            .mini {
                transition: none !important;
            }
        }
    `},Gf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("basics"),m=z.useMemo(()=>[{key:"basics",title:"What are structured logs",icon:t.jsx(Fe,{}),summary:"Structured logs are logs written as objects (usually JSON) so machines can filter, search, and alert reliably.",points:["Normal logs are free text - hard to parse consistently.","Structured logs are key-value data - easy to query and aggregate.","You can answer questions like 'show all errors for userId 42' without regex pain."],code:`// Unstructured (hard to query)
console.log("User 42 failed to pay, order 9, reason: card_declined");

// Structured (easy to query)
console.log(JSON.stringify({
  level: "error",
  msg: "payment_failed",
  userId: "42",
  orderId: "9",
  reason: "card_declined"
}));`},{key:"fields",title:"Core fields to include",icon:t.jsx($a,{}),summary:"A consistent log shape makes dashboards, alerts, and debugging fast.",points:["level - debug, info, warn, error","msg - short event name, like 'payment_failed'","ts - timestamp (ISO string) or logger adds it automatically","service - service name, like 'billing-api'","env - dev, staging, prod","requestId - correlation id for one request across logs","userId - if available, but do not log sensitive info","durationMs - for performance visibility","err - error object fields (name, message, stack) for errors"],code:`// A good baseline shape
{
  "level": "info",
  "msg": "http_request_done",
  "service": "orders-api",
  "env": "prod",
  "requestId": "req_01J...",
  "method": "GET",
  "path": "/orders/9",
  "status": 200,
  "durationMs": 18
}`},{key:"nodeExample",title:"Node.js example with requestId",icon:t.jsx(Wm,{}),summary:"Add a requestId at the edge, then attach it to every log in that request.",points:["Generate requestId for each request (or accept from gateway).","Put requestId in response header so clients can share it.","Log start and end with durationMs.","On errors, include requestId and error fields."],code:`import crypto from "crypto";
import express from "express";

const app = express();

const makeId = () => "req_" + crypto.randomBytes(8).toString("hex");

app.use((req, res, next) => {
  const requestId = req.header("x-request-id") || makeId();
  req.requestId = requestId;
  res.setHeader("x-request-id", requestId);

  const start = Date.now();

  console.log(JSON.stringify({
    level: "info",
    msg: "http_request_start",
    requestId,
    method: req.method,
    path: req.path
  }));

  res.on("finish", () => {
    console.log(JSON.stringify({
      level: "info",
      msg: "http_request_done",
      requestId,
      method: req.method,
      path: req.path,
      status: res.statusCode,
      durationMs: Date.now() - start
    }));
  });

  next();
});

app.get("/health", (req, res) => {
  console.log(JSON.stringify({
    level: "info",
    msg: "health_check",
    requestId: req.requestId
  }));
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.log(JSON.stringify({
    level: "error",
    msg: "unhandled_error",
    requestId: req.requestId,
    err: {
      name: err?.name,
      message: err?.message,
      stack: err?.stack
    }
  }));
  res.status(500).json({ error: "internal_error", requestId: req.requestId });
});

app.listen(3000);`},{key:"querying",title:"How structured logs help in production",icon:t.jsx(yl,{}),summary:"They turn debugging into searching and filtering instead of guessing.",points:["Filter by requestId to see one request journey.","Group by msg to see top error types.","Track latency with durationMs percentiles.","Alert on error rate spikes for msg values like 'payment_failed'."],code:`// Example queries (conceptual)
// Find a request
requestId = "req_abc123"

// Find all errors for an endpoint
msg = "http_request_done" AND path = "/orders" AND status >= 500

// Find slow requests
msg = "http_request_done" AND durationMs > 1000`},{key:"pitfalls",title:"Common mistakes and rules",icon:t.jsx(Hp,{}),summary:"Structured logs are powerful, but you must be disciplined.",points:["Do not log secrets - passwords, tokens, cookies, card data, OTPs.","Keep msg stable - treat it like an event name, not a paragraph.","Avoid huge payload logs - log ids, not full objects.","Do not mix shapes randomly - keep consistent keys across services.","Use proper levels - info for normal, warn for unusual, error for failures.","In production, prefer a logger library that writes JSON and handles errors well."],code:`// Bad - leaks secrets
console.log(JSON.stringify({
  level: "info",
  msg: "login_attempt",
  email: "a@b.com",
  password: "123456"
}));

// Better - log minimal safe fields
console.log(JSON.stringify({
  level: "info",
  msg: "login_attempt",
  email: "a@b.com",
  hasPassword: true
}));`},{key:"checklist",title:"Interview ready checklist",icon:t.jsx(Be,{}),summary:"Use these lines when explaining structured logs in interviews.",points:["Structured logs are machine readable key-value logs, usually JSON.","They enable filtering, aggregation, alerting, and correlation across services.","I include requestId, service, env, level, msg, and durationMs.","I avoid logging sensitive data and keep log shapes consistent."],code:`// 2 line interview answer
// Structured logs are JSON key-value logs that tools can query reliably.
// With requestId and consistent fields, debugging becomes fast search and correlation.`}],[]),w=()=>{c(x=>!x)},S=x=>{u(x)},p=m.find(x=>x.key===l)||m[0];return t.jsxs(Kf.Wrapper,{id:"structured-logs",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:w,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Ja,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Structured logs"}),t.jsx("span",{className:"sub",children:"JSON logs, consistent fields, requestId correlation, production debugging"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"topHint",children:[t.jsx("div",{className:"hintIcon",children:t.jsx(Tt,{})}),t.jsxs("div",{className:"hintText",children:[t.jsx("div",{className:"hintTitle",children:"One rule that saves hours"}),t.jsx("div",{className:"hintSub",children:"Every request should have a requestId, and every log line for that request should include it."})]})]}),t.jsxs("div",{className:"layout",children:[t.jsx("div",{className:"nav",children:m.map(x=>{const v=x.key===l;return t.jsxs("button",{type:"button",className:`navItem ${v?"active":""}`,onClick:()=>S(x.key),"aria-current":v?"true":"false",children:[t.jsx("span",{className:"nIcon",children:x.icon}),t.jsxs("span",{className:"nText",children:[t.jsx("span",{className:"nTitle",children:x.title}),t.jsx("span",{className:"nSub",children:x.summary})]}),t.jsx("span",{className:"nRight",children:t.jsx(te,{})})]},x.key)})}),t.jsx("div",{className:"content",children:t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("div",{className:"cIcon",children:p.icon}),t.jsxs("div",{className:"cText",children:[t.jsx("div",{className:"cTitle",children:p.title}),t.jsx("div",{className:"cSummary",children:p.summary})]})]}),t.jsxs("div",{className:"cardBody",children:[t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"bTitle",children:"Key points"}),t.jsx("ul",{className:"list",children:p.points.map((x,v)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:x})]},`${p.key}-p-${v}`))})]}),t.jsxs("div",{className:"block",children:[t.jsx("div",{className:"bTitle",children:"Example and pattern"}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:p.code})})]}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"mini",children:[t.jsxs("div",{className:"mTop",children:[t.jsx("span",{className:"mIcon",children:t.jsx(Co,{})}),t.jsx("span",{className:"mTitle",children:"Practical tip"})]}),t.jsx("div",{className:"mText",children:"Prefer a JSON logger in production (pino, winston) so logs are valid JSON and include timestamps and error serializers."})]}),t.jsxs("div",{className:"mini",children:[t.jsxs("div",{className:"mTop",children:[t.jsx("span",{className:"mIcon",children:t.jsx(Pe,{})}),t.jsx("span",{className:"mTitle",children:"Security tip"})]}),t.jsx("div",{className:"mText",children:"Never log secrets - redact headers like Authorization, cookies, and payment data. Log ids, not payloads."})]})]})]}),t.jsxs("div",{className:"cardFoot",children:[t.jsx("span",{className:"fIcon",children:t.jsx(Hp,{})}),t.jsx("span",{className:"fText",children:"If logs are unstructured, on-call becomes guesswork. Structured logs turn on-call into search and filters."})]})]})})]}),t.jsxs("div",{className:"glossary",children:[t.jsx("div",{className:"gTitle",children:"Mini glossary"}),t.jsxs("div",{className:"gGrid",children:[t.jsxs("div",{className:"gItem",children:[t.jsx("div",{className:"k",children:"requestId"}),t.jsx("div",{className:"v",children:"A unique id for one request, used to correlate logs."})]}),t.jsxs("div",{className:"gItem",children:[t.jsx("div",{className:"k",children:"correlation"}),t.jsx("div",{className:"v",children:"Linking logs across services using requestId or trace id."})]}),t.jsxs("div",{className:"gItem",children:[t.jsx("div",{className:"k",children:"log level"}),t.jsx("div",{className:"v",children:"Severity of a log - debug, info, warn, error."})]}),t.jsxs("div",{className:"gItem",children:[t.jsx("div",{className:"k",children:"msg"}),t.jsx("div",{className:"v",children:'Short stable event name, like "payment_failed".'})]})]})]})]})]})},Vf={Wrapper:fe.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 18%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 980px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topNote {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-warning) 10%, transparent),
                transparent
            );

            .nIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .nSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            padding: 14px;
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .cards {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                min-width: 0;
            }

            .cIcon {
                width: 36px;
                height: 36px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 16px;
                height: 16px;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
                flex: 0 0 auto;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 1400px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .list {
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .note {
            margin: 0 12px 12px 12px;
            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;
            line-height: 1.5;
        }

        .examples {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .exampleCard {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .exHead {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px;
            border-bottom: 1px solid var(--color-border);

            .exIcon {
                width: 36px;
                height: 36px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .exText {
                min-width: 0;
                flex: 1;
            }

            .exTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .exDesc {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .exHint {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                flex: 0 0 auto;
            }
        }

        .code {
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .tip {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                transparent
            );
            box-shadow: 0 16px 36px var(--color-shadow);

            padding: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            .tipIcon {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .tipText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody,
            .exampleCard {
                transition: none !important;
            }
        }
    `},Jf=()=>{const[a,c]=z.useState(!1),[l,u]=z.useState("what"),m=z.useMemo(()=>[{key:"what",title:"What is error tracking",icon:t.jsx(Jm,{}),points:["Error tracking is a system that captures backend crashes and exceptions with context and groups similar errors together.","It helps you answer: what broke, where it broke, how many users are affected, and when it started.","It is not the same as console logs. Logs are raw events. Error tracking is organized incidents with grouping and alerting."],note:"Goal: turn random stack traces into actionable issues with ownership and priority."},{key:"why",title:"Why it matters in production",icon:t.jsx(Yt,{}),points:["Users rarely tell you the exact failure. Error tracking tells you automatically.","You can detect new regressions after a deploy by comparing error rates by release version.","It reduces time to debug because stack trace, request details, and breadcrumbs are already captured."],note:"In real teams: alert on high severity, create a ticket, fix, deploy, verify, close."},{key:"data",title:"What to capture with an error",icon:t.jsx(Ja,{}),points:["Error name and message.","Stack trace with file names and line numbers.","Request context: route, method, status code, request id, user id if available.","Environment and release: prod or staging, app version or git commit.","Breadcrumbs: last few important events before the crash (db call, external api call, auth step)."],note:"Do not capture secrets. Never store raw passwords, access tokens, card data, or full cookies."},{key:"flow",title:"Typical flow",icon:t.jsx(So,{}),points:["A request fails and throws an exception.","Your global error middleware catches it and reports it.","The tracker groups similar errors and increments a counter.","Alerts fire when thresholds are crossed.","You fix the bug and verify the error stops for the next release."],note:"The best flow includes correlation ids so you can jump from error to logs to traces quickly."},{key:"setup",title:"Integration pattern in Node and Express",icon:t.jsx(Pe,{}),points:["Install the SDK and initialize it early in the app lifecycle.","Attach request and user context safely.","Capture exceptions inside the global error handler.","Tag events with environment and release for easy filtering."],note:"Order matters: initialize before routes so it can hook into the request lifecycle."},{key:"pitfalls",title:"Common pitfalls",icon:t.jsx(be,{}),points:["Swallowing errors in try catch without reporting them.","Logging only error.message and losing stack traces.","No request id, so you cannot connect errors to logs.","Reporting too many low value errors, causing alert fatigue.","Capturing sensitive data by mistake."],note:"Alert fatigue is a silent killer. Route warnings to dashboards, page only for real incidents."}],[]),w=z.useMemo(()=>[{key:"express",title:"Example - Express error middleware",desc:"A clean pattern: keep one global error handler and report there.",code:`// app.js (conceptual)
import express from "express";

const app = express();

app.get("/api", async (req, res) => {
  // simulate failure
  throw new Error("DB connection failed");
});

// global error handler
app.use((err, req, res, next) => {
  const requestId = req.headers["x-request-id"] || "na";

  // report to error tracker here
  // captureException(err, { requestId, route: req.originalUrl, method: req.method })

  res.status(500).json({
    ok: false,
    error: {
      code: "INTERNAL_ERROR",
      message: "Something went wrong",
      requestId
    }
  });
});

export default app;`},{key:"release",title:"Example - tag release and environment",desc:"Release tags make it obvious when a bug started after a deploy.",code:`// during initialization
// initTracker({
//   environment: process.env.NODE_ENV,
//   release: process.env.APP_RELEASE || process.env.GIT_SHA
// });`},{key:"sanitize",title:"Example - sanitize sensitive fields",desc:"Remove secrets before sending any context.",code:`const sanitize = (obj) => {
  const copy = { ...obj };
  if (copy.password) copy.password = "[redacted]";
  if (copy.token) copy.token = "[redacted]";
  if (copy.authorization) copy.authorization = "[redacted]";
  return copy;
};

// captureException(err, { body: sanitize(req.body) })`}],[]),S=()=>c(x=>!x),p=x=>{u(v=>v===x?null:x)};return t.jsxs(Vf.Wrapper,{id:"error-tracking",children:[t.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:S,"aria-expanded":a,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"sIcon",children:t.jsx(be,{})}),t.jsxs("span",{className:"text",children:[t.jsx("span",{className:"title",children:"Error tracking"}),t.jsx("span",{className:"sub",children:"Capture, group, and alert on backend failures with context, releases, and safe metadata"})]})]}),t.jsxs("span",{className:"right",children:[t.jsx("span",{className:"pill",children:a?t.jsxs(t.Fragment,{children:[t.jsx(Ye,{})," Collapse"]}):t.jsxs(t.Fragment,{children:[t.jsx(Ke,{})," Expand"]})}),t.jsx("span",{className:`chev ${a?"rot":""}`,children:t.jsx(te,{})})]})]}),t.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[t.jsxs("div",{className:"topNote",children:[t.jsx("span",{className:"nIcon",children:t.jsx(Be,{})}),t.jsxs("div",{className:"nText",children:[t.jsx("div",{className:"nTitle",children:"What you should be able to say in an interview"}),t.jsx("div",{className:"nSub",children:'"We capture unhandled errors with request context, group them, tag by release, alert on thresholds, and fix regressions quickly without leaking secrets."'})]})]}),t.jsxs("div",{className:"layout",children:[t.jsxs("div",{className:"leftCol",children:[t.jsx("div",{className:"miniTitle",children:"Core concepts"}),t.jsx("div",{className:"cards",children:m.map(x=>{const v=l===x.key;return t.jsxs("div",{className:`card ${v?"open":""}`,children:[t.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>p(x.key),"aria-expanded":v,children:[t.jsxs("span",{className:"cLeft",children:[t.jsx("span",{className:"cIcon",children:x.icon}),t.jsx("span",{className:"cTitle",children:x.title})]}),t.jsx("span",{className:`cChev ${v?"rot":""}`,children:t.jsx(te,{})})]}),t.jsxs("div",{className:`cardBody ${v?"show":""}`,children:[t.jsx("ul",{className:"list",children:x.points.map((b,T)=>t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),t.jsx("span",{className:"liText",children:b})]},`${x.key}-${T}`))}),t.jsx("div",{className:"note",children:x.note})]})]},x.key)})})]}),t.jsxs("div",{className:"rightCol",children:[t.jsx("div",{className:"miniTitle",children:"Examples and patterns"}),t.jsxs("div",{className:"examples",children:[w.map(x=>t.jsxs("div",{className:"exampleCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(qm,{})}),t.jsxs("div",{className:"exText",children:[t.jsx("div",{className:"exTitle",children:x.title}),t.jsx("div",{className:"exDesc",children:x.desc})]}),t.jsx("span",{className:"exHint",children:t.jsx(yl,{})})]}),t.jsx("pre",{className:"code",children:t.jsx("code",{children:x.code})})]},x.key)),t.jsxs("div",{className:"tip",children:[t.jsx("span",{className:"tipIcon",children:t.jsx(Pe,{})}),t.jsx("div",{className:"tipText",children:"Best practice: always attach a request id and release tag. Without them, debugging becomes guesswork."})]})]})]})]}),t.jsxs("div",{className:"closing",children:[t.jsx("span",{className:"closingIcon",children:t.jsx(So,{})}),t.jsx("span",{className:"closingText",children:"Error tracking works best with structured logs and a consistent request id across services."})]})]})]})},Qf=()=>t.jsxs(rl.Wrapper,{children:[t.jsx(rl.Header,{children:t.jsx(Xm,{})}),t.jsxs(rl.Main,{children:[t.jsxs("div",{className:"contentWrapper",children:[t.jsx(tf,{}),t.jsx(nf,{}),t.jsx(sf,{}),t.jsx(cf,{}),t.jsx(pf,{}),t.jsx(xf,{}),t.jsx(mf,{}),t.jsx(gf,{}),t.jsx(yf,{}),t.jsx(kf,{}),t.jsx(Nf,{}),t.jsx(Tf,{}),t.jsx(If,{}),t.jsx(Mf,{}),t.jsx(Pf,{}),t.jsx(Af,{}),t.jsx(Of,{}),t.jsx(Bf,{}),t.jsx(Df,{}),t.jsx(qf,{}),t.jsx(Wf,{}),t.jsx(Yf,{}),t.jsx(Gf,{}),t.jsx(Jf,{})]}),t.jsx("div",{className:"footerWrapper",children:t.jsx(ef,{})})]})]});Ch.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Qf,{})}));
