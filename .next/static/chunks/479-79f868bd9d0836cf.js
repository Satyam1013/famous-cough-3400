(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{9008:function(e,t,n){e.exports=n(3121)},2687:function(e,t,n){"use strict";n.d(t,{p:function(){return a}});var r=n(9233),o=n(5893),a=(0,r.I)({displayName:"DeleteIcon",path:(0,o.jsx)("g",{fill:"currentColor",children:(0,o.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})})},7754:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});var r=n(6384),o=n(5059),a=n(5893),i=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.displayName="Center";var u={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.G)(function(e,t){let{axis:n="both",...o}=e;return(0,a.jsx)(r.m.div,{ref:t,__css:u[n],...o,position:"absolute"})})},1151:function(e,t,n){"use strict";n.d(t,{B:function(){return u},$:function(){return c}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n),i=n(7294),u=new class{constructor(){a(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return!!e&&this.modals.get(e)===this.modals.size}};function c(e,t){let[n,r]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let n=e.current;if(n){if(t){let o=u.add(n);r(o)}return()=>{u.remove(n),r(0)}}},[t,e]),n}},7251:function(e,t,n){"use strict";n.d(t,{s:function(){return tO}});var r,o,a,i=n(5972),u=n(2752),c=n(1151),l=n(7462),s=n(7294),d="data-focus-lock",f="data-focus-lock-disabled";function v(e,t){var n,r,o;return n=t||null,r=function(t){return e.forEach(function(e){var n;return"function"==typeof(n=e)?n(t):n&&(n.current=t),n})},(o=(0,s.useState)(function(){return{value:n,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade}var m={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},p=function(e){var t=e.children;return s.createElement(s.Fragment,null,s.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:m}),t,t&&s.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:m}))};p.propTypes={},p.defaultProps={children:null};var h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function y(e){return e}function b(e,t){void 0===t&&(t=y);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}}}function x(e,t){return void 0===t&&(t=y),b(e,t)}function w(e){void 0===e&&(e={});var t=b(null);return t.options=h({async:!0,ssr:!1},e),t}var E=x({},function(e){return{target:e.target,currentTarget:e.currentTarget}}),k=x(),N=x(),C=w({async:!0}),M=[],O=s.forwardRef(function(e,t){var n,r=s.useState(),o=r[0],a=r[1],i=s.useRef(),u=s.useRef(!1),c=s.useRef(null),p=e.children,h=e.disabled,g=e.noFocusGuards,y=e.persistentFocus,b=e.crossFrame,x=e.autoFocus,w=(e.allowTextSelection,e.group),N=e.className,O=e.whiteList,S=e.hasPositiveIndices,_=e.shards,j=e.as,I=e.lockProps,P=e.sideCar,T=e.returnFocus,A=e.focusOptions,R=e.onActivation,F=e.onDeactivation,L=s.useState({})[0],D=s.useCallback(function(){c.current=c.current||document&&document.activeElement,i.current&&R&&R(i.current),u.current=!0},[R]),B=s.useCallback(function(){u.current=!1,F&&F(i.current)},[F]);(0,s.useEffect)(function(){h||(c.current=null)},[]);var W=s.useCallback(function(e){var t=c.current;if(t&&t.focus){var n="function"==typeof T?T(t):T;if(n){var r="object"==typeof n?n:void 0;c.current=null,e?Promise.resolve().then(function(){return t.focus(r)}):t.focus(r)}}},[T]),G=s.useCallback(function(e){u.current&&E.useMedium(e)},[]),z=k.useMedium,$=s.useCallback(function(e){i.current!==e&&(i.current=e,a(e))},[]),q=(0,l.Z)(((n={})[f]=h&&"disabled",n[d]=w,n),void 0===I?{}:I),U=!0!==g,Y=v([t,$]);return s.createElement(s.Fragment,null,U&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:h?-1:0,style:m}),S?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:h?-1:1,style:m}):null],!h&&s.createElement(P,{id:L,sideCar:C,observed:o,disabled:h,persistentFocus:y,crossFrame:b,autoFocus:x,whiteList:O,shards:void 0===_?M:_,onActivation:D,onDeactivation:B,returnFocus:W,focusOptions:A}),s.createElement(void 0===j?"div":j,(0,l.Z)({ref:Y},q,{className:N,onBlur:z,onFocus:G}),p),U&&"tail"!==g&&s.createElement("div",{"data-focus-guard":!0,tabIndex:h?-1:0,style:m}))});function S(e,t){return(S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}O.propTypes={},O.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var j=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},I=function(e){return Array.isArray(e)?e:[e]},P=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!!t&&!!t.getPropertyValue&&("none"===t.getPropertyValue("display")||"hidden"===t.getPropertyValue("visibility"))},T=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},A=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},R=function(e,t){var n,r=e.get(t);if(void 0!==r)return r;var o=(n=R.bind(void 0,e),!t||A(t)||!P(t)&&n(T(t)));return e.set(t,o),o},F=function(e,t){var n,r=e.get(t);if(void 0!==r)return r;var o=(n=F.bind(void 0,e),!t||!!A(t)||!!W(t)&&n(T(t)));return e.set(t,o),o},L=function(e){return e.dataset},D=function(e){return"INPUT"===e.tagName},B=function(e){return D(e)&&"radio"===e.type},W=function(e){return![!0,"true",""].includes(e.getAttribute("data-no-autofocus"))},G=function(e){var t;return Boolean(e&&(null===(t=L(e))||void 0===t?void 0:t.focusGuard))},z=function(e){return!G(e)},$=function(e){return Boolean(e)},q=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return -1}return n||r},U=function(e,t,n){return j(e).map(function(e,t){return{node:e,index:t,tabIndex:n&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}}).filter(function(e){return!t||e.tabIndex>=0}).sort(q)},Y="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",Z="".concat(Y,", [data-focus-guard]"),X=function(e,t){var n;return j((null===(n=e.shadowRoot)||void 0===n?void 0:n.children)||e.children).reduce(function(e,n){return e.concat(n.matches(t?Z:Y)?[n]:[],X(n))},[])},H=function(e,t){return e.reduce(function(e,n){return e.concat(X(n,t),n.parentNode?j(n.parentNode.querySelectorAll(Y)).filter(function(e){return e===n}):[])},[])},V=function(e,t){return j(e).filter(function(e){return R(t,e)}).filter(function(e){return!((D(e)||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))})},K=function(e,t){return void 0===t&&(t=new Map),j(e).filter(function(e){return F(t,e)})},J=function(e,t,n){return U(V(H(e,n),t),!0,n)},Q=function(e,t){return U(V(H(e),t),!1)},ee=function(e,t){return e.shadowRoot?ee(e.shadowRoot,t):!!(void 0!==Object.getPrototypeOf(e).contains&&Object.getPrototypeOf(e).contains.call(e,t))||j(e.children).some(function(e){return ee(e,t)})},et=function(e){return e.activeElement?e.activeElement.shadowRoot?et(e.activeElement.shadowRoot):e.activeElement:void 0},en=function(){return document.activeElement?document.activeElement.shadowRoot?et(document.activeElement.shadowRoot):document.activeElement:void 0},er=function(){var e=document&&en();return!!e&&j(document.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(t){return ee(t,e)})},eo=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(e,n){return!t.has(n)})},ea=function(e){return e.parentNode?ea(e.parentNode):e},ei=function(e){return I(e).filter(Boolean).reduce(function(e,t){var n=t.getAttribute(d);return e.push.apply(e,n?eo(j(ea(t).querySelectorAll("[".concat(d,'="').concat(n,'"]:not([').concat(f,'="disabled"])')))):[t]),e},[])},eu=function(e){var t=document&&en();return!!t&&(!t.dataset||!t.dataset.focusGuard)&&ei(e).some(function(e){return ee(e,t)||Boolean(j(e.querySelectorAll("iframe")).some(function(e){return e===document.activeElement}))})},ec=function(e,t){return B(e)&&e.name&&t.filter(B).filter(function(t){return t.name===e.name}).filter(function(e){return e.checked})[0]||e},el=function(e){var t=new Set;return e.forEach(function(n){return t.add(ec(n,e))}),e.filter(function(e){return t.has(e)})},es=function(e){return e[0]&&e.length>1?ec(e[0],e):e[0]},ed=function(e,t){return e.length>1?e.indexOf(ec(e[t],e)):t},ef="NEW_FOCUS",ev=function(e,t,n,r){var o=e.length,a=e[0],i=e[o-1],u=G(n);if(!(n&&e.indexOf(n)>=0)){var c=void 0!==n?t.indexOf(n):-1,l=r?t.indexOf(r):c,s=r?e.indexOf(r):-1,d=c-l,f=t.indexOf(a),v=t.indexOf(i),m=el(t),p=(void 0!==n?m.indexOf(n):-1)-(r?m.indexOf(r):c),h=ed(e,0),g=ed(e,o-1);if(-1===c||-1===s)return ef;if(!d&&s>=0)return s;if(c<=f&&u&&Math.abs(d)>1)return g;if(c>=v&&u&&Math.abs(d)>1)return h;if(d&&Math.abs(p)>1)return s;if(c<=f)return g;if(c>v)return h;if(d)return Math.abs(d)>1?s:(o+s+d)%o}},em=function(e,t,n){var r=K(e.map(function(e){return e.node}).filter(function(e){var t,r=null===(t=L(e))||void 0===t?void 0:t.autofocus;return e.autofocus||void 0!==r&&"false"!==r||n.indexOf(e)>=0}));return r&&r.length?es(r):es(K(t))},ep=function(e,t){return void 0===t&&(t=[]),t.push(e),e.parentNode&&ep(e.parentNode.host||e.parentNode,t),t},eh=function(e,t){for(var n=ep(e),r=ep(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},eg=function(e,t,n){var r=I(e),o=I(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(e){i=eh(i||e,e)||i,n.filter(Boolean).forEach(function(e){var t=eh(a,e);t&&(i=!i||ee(t,i)?t:eh(t,i))})}),i},ey=function(e,t){var n=new Map;return t.forEach(function(e){return n.set(e.node,e)}),e.map(function(e){return n.get(e)}).filter($)},eb=function(e,t){var n=document&&en(),r=ei(e).filter(z),o=eg(n||e,e,r),a=new Map,i=Q(r,a),u=J(r,a).filter(function(e){return z(e.node)});if(u[0]||(u=i)[0]){var c=Q([o],a).map(function(e){return e.node}),l=ey(c,u),s=l.map(function(e){return e.node}),d=ev(s,c,n,t);if(d===ef){var f=em(i,s,r.reduce(function(e,t){return e.concat(V(j(t.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(e){return H([e])}).reduce(function(e,t){return e.concat(t)},[]),a))},[]));return f?{node:f}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===d?d:l[d]}},ex=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ew=0,eE=!1,ek=function(e,t,n){void 0===n&&(n={});var r=eb(e,t);if(!eE&&r){if(ew>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),eE=!0,setTimeout(function(){eE=!1},1);return}ew++,ex(r.node,n.focusOptions),ew--}},eN=function(e){var t=ei(e).filter(z),n=eg(e,e,t),r=new Map,o=J([n],r,!0),a=J(t,r).filter(function(e){return z(e.node)}).map(function(e){return e.node});return o.map(function(e){var t=e.node;return{node:t,index:e.index,lockItem:a.indexOf(t)>=0,guard:G(t)}})};function eC(e){var t=window.setImmediate;void 0!==t?t(e):setTimeout(e,1)}var eM=null,eO=null,eS=null,e_=!1,ej=function(){return!0},eI=function(e,t){eS={observerNode:e,portaledElement:t}};function eP(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var eT=function(e){return e&&"current"in e?e.current:e},eA=function(){var e=!1;if(eM){var t=eM,n=t.observed,r=t.persistentFocus,o=t.autoFocus,a=t.shards,i=t.crossFrame,u=t.focusOptions,c=n||eS&&eS.portaledElement,l=document&&document.activeElement;if(c){var s=[c].concat(a.map(eT).filter(Boolean));if((!l||(eM.whiteList||ej)(l))&&(r||(i?Boolean(e_):"meanwhile"===e_)||!(document&&document.activeElement===document.body||er())||!eO&&o)&&(c&&!(eu(s)||l&&s.some(function(e){return function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))}(l,e,e)})||eS&&eS.portaledElement===l)&&(document&&!eO&&l&&!o?(l.blur&&l.blur(),document.body.focus()):(e=ek(s,eO,{focusOptions:u}),eS={})),e_=!1,eO=document&&document.activeElement),document){var d=document&&document.activeElement,f=eN(s),v=f.map(function(e){return e.node}).indexOf(d);v>-1&&(f.filter(function(e){var t=e.guard,n=e.node;return t&&n.dataset.focusAutoGuard}).forEach(function(e){return e.node.removeAttribute("tabIndex")}),eP(v,f.length,1,f),eP(v,-1,-1,f))}}}return e},eR=function(e){eA()&&e&&(e.stopPropagation(),e.preventDefault())},eF=function(){return eC(eA)},eL=function(){e_="just",setTimeout(function(){e_="meanwhile"},0)},eD=function(){document.addEventListener("focusin",eR),document.addEventListener("focusout",eF),window.addEventListener("blur",eL)},eB=function(){document.removeEventListener("focusin",eR),document.removeEventListener("focusout",eF),window.removeEventListener("blur",eL)};E.assignSyncMedium(function(e){var t=e.target,n=e.currentTarget;n.contains(t)||eI(n,t)}),k.assignMedium(eF),N.assignMedium(function(e){return e({moveFocusInside:ek,focusInside:eu})});var eW=(r=function(e){var t=e.slice(-1)[0];t&&!eM&&eD();var n=eM,r=n&&t&&t.id===n.id;eM=t,!n||r||(n.onDeactivation(),e.filter(function(e){return e.id===n.id}).length||n.returnFocus(!t)),t?(eO=null,r&&n.observed===t.observed||t.onActivation(),eA(!0),eC(eA)):(eB(),eO=null)},function(e){var t,n,o,a,i,u=[];function c(){r(i=u.map(function(e){return e.props}).filter(function(e){return!e.disabled}))}var l=function(t){function n(){return t.apply(this,arguments)||this}(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,S(r,t),n.peek=function(){return i};var r,o=n.prototype;return o.componentDidMount=function(){u.push(this),c()},o.componentDidUpdate=function(){c()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},o.render=function(){return s.createElement(e,this.props)},n}(s.PureComponent);return t=l,n="displayName",o="SideEffect("+(e.displayName||e.name||"Component")+")",a=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==_(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"),(n="symbol"===_(a)?a:String(a))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,l})(function(){return null}),eG=s.forwardRef(function(e,t){return s.createElement(O,(0,l.Z)({sideCar:eW,ref:t},e))}),ez=O.propTypes||{};ez.sideCar,function(e,t){if(null!=e){var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n])}}(ez,["sideCar"]),eG.propTypes={};var e$=n(2657),eq=n(5893),eU=null!=(o=eG.default)?o:eG,eY=e=>{let{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:o,children:a,isDisabled:i,autoFocus:u,persistentFocus:c,lockFocusAcrossFrames:l}=e,d=(0,s.useCallback)(()=>{if(null==t?void 0:t.current)t.current.focus();else if(null==r?void 0:r.current){let e=(0,e$.t5)(r.current);0===e.length&&requestAnimationFrame(()=>{var e;null==(e=r.current)||e.focus()})}},[t,r]),f=(0,s.useCallback)(()=>{var e;null==(e=null==n?void 0:n.current)||e.focus()},[n]);return(0,eq.jsx)(eU,{crossFrame:l,persistentFocus:c,autoFocus:u,disabled:i,onActivation:d,onDeactivation:f,returnFocus:o&&!n,children:a})};eY.displayName="FocusLock";var eZ=n(5947),eX="right-scroll-bar-position",eH="width-before-scroll-bar",eV=w(),eK=function(){},eJ=s.forwardRef(function(e,t){var n=s.useRef(null),r=s.useState({onScrollCapture:eK,onWheelCapture:eK,onTouchMoveCapture:eK}),o=r[0],a=r[1],i=e.forwardProps,u=e.children,c=e.className,l=e.removeScrollBar,d=e.enabled,f=e.shards,m=e.sideCar,p=e.noIsolation,y=e.inert,b=e.allowPinchZoom,x=e.as,w=g(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),E=v([n,t]),k=h(h({},w),o);return s.createElement(s.Fragment,null,d&&s.createElement(m,{sideCar:eV,removeScrollBar:l,shards:f,noIsolation:p,inert:y,setCallbacks:a,allowPinchZoom:!!b,lockRef:n}),i?s.cloneElement(s.Children.only(u),h(h({},k),{ref:E})):s.createElement(void 0===x?"div":x,h({},k,{className:c,ref:E}),u))});eJ.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eJ.classNames={fullWidth:eH,zeroRight:eX};var eQ=function(e){var t=e.sideCar,n=g(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return s.createElement(r,h({},n))};eQ.isSideCarExport=!0;var e0=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},e1=function(){var e=e0();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},e5=function(){var e=e1();return function(t){return e(t.styles,t.dynamic),null}},e2={left:0,top:0,right:0,gap:0},e9=function(e){return parseInt(e||"",10)||0},e7=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[e9(n),e9(r),e9(o)]},e3=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return e2;var t=e7(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},e4=e5(),e8=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(eX," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(eH," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(eX," .").concat(eX," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(eH," .").concat(eH," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},e6=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=s.useMemo(function(){return e3(o)},[o]);return s.createElement(e4,{styles:e8(a,!t,o,n?"":"!important")})},te=!1;if("undefined"!=typeof window)try{var tt=Object.defineProperty({},"passive",{get:function(){return te=!0,!0}});window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch(tn){te=!1}var tr=!!te&&{passive:!1},to=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ta=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),ti(e,n)){var r=tu(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ti=function(e,t){return"v"===e?to(t,"overflowY"):to(t,"overflowX")},tu=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},tc=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,v=0;do{var m=tu(e,c),p=m[0],h=m[1]-m[2]-i*p;(p||h)&&ti(e,c)&&(f+=h,v+=p),c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&0===f||!o&&u>f)?s=!0:!d&&(o&&0===v||!o&&-u>v)&&(s=!0),s},tl=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ts=function(e){return[e.deltaX,e.deltaY]},td=function(e){return e&&"current"in e?e.current:e},tf=0,tv=[],tm=(eV.useMedium(function(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(tf++)[0],a=s.useState(function(){return e5()})[0],i=s.useRef(e);s.useEffect(function(){i.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(td),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=s.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=tl(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ta(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ta(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return tc(v,t,e,"h"===v?c:l,!0)},[]),c=s.useCallback(function(e){if(tv.length&&tv[tv.length-1]===a){var n="deltaY"in e?ts(e):tl(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(td).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=s.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=s.useCallback(function(e){n.current=tl(e),r.current=void 0},[]),f=s.useCallback(function(t){l(t.type,ts(t),t.target,u(t,e.lockRef.current))},[]),v=s.useCallback(function(t){l(t.type,tl(t),t.target,u(t,e.lockRef.current))},[]);s.useEffect(function(){return tv.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,tr),document.addEventListener("touchmove",c,tr),document.addEventListener("touchstart",d,tr),function(){tv=tv.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,tr),document.removeEventListener("touchmove",c,tr),document.removeEventListener("touchstart",d,tr)}},[]);var m=e.removeScrollBar,p=e.inert;return s.createElement(s.Fragment,null,p?s.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?s.createElement(e6,{gapMode:"margin"}):null)}),eQ),tp=s.forwardRef(function(e,t){return s.createElement(eJ,h({},e,{ref:t,sideCar:tm}))});function th(e){let{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:o,blockScrollOnMount:a,allowPinchZoom:i,finalFocusRef:l,returnFocusOnClose:d,preserveScrollBarGap:f,lockFocusAcrossFrames:v,isOpen:m}=(0,u.vR)(),[p,h]=(0,eZ.oO)();(0,s.useEffect)(()=>{!p&&h&&setTimeout(h)},[p,h]);let g=(0,c.$)(r,m);return(0,eq.jsx)(eY,{autoFocus:t,isDisabled:!n,initialFocusRef:o,finalFocusRef:l,restoreFocus:d,contentRef:r,lockFocusAcrossFrames:v,children:(0,eq.jsx)(tp,{removeScrollBar:!f,allowPinchZoom:i,enabled:1===g&&a,forwardProps:!0,children:e.children})})}tp.classNames=eJ.classNames;var tg=n(5432),ty=n(6384),tb=n(5059),tx=n(9155),tw=n(5820),tE=n(6599),tk={exit:{duration:.15,ease:tx.Lj.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},tN={exit:({direction:e,transition:t,transitionEnd:n,delay:r})=>{var o;let{exit:a}=(0,tx.js)({direction:e});return{...a,transition:null!=(o=null==t?void 0:t.exit)?o:tx.p$.exit(tk.exit,r),transitionEnd:null==n?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:r})=>{var o;let{enter:a}=(0,tx.js)({direction:e});return{...a,transition:null!=(o=null==n?void 0:n.enter)?o:tx.p$.enter(tk.enter,r),transitionEnd:null==t?void 0:t.enter}}},tC=(0,s.forwardRef)(function(e,t){let{direction:n="right",style:r,unmountOnExit:o,in:a,className:i,transition:u,transitionEnd:c,delay:l,motionProps:s,...d}=e,f=(0,tx.js)({direction:n}),v=Object.assign({position:"fixed"},f.position,r),m={transitionEnd:c,transition:u,direction:n,delay:l};return(0,eq.jsx)(tw.M,{custom:m,children:(!o||a&&o)&&(0,eq.jsx)(tE.E.div,{...d,ref:t,initial:"exit",className:(0,tg.cx)("chakra-slide",i),animate:a||o?"enter":"exit",exit:"exit",custom:m,variants:tN,style:v,...s})})});tC.displayName="Slide";var tM=(0,ty.m)(tC),tO=(0,tb.G)((e,t)=>{let{className:n,children:r,motionProps:o,containerProps:a,...c}=e,{getDialogProps:l,getDialogContainerProps:s,isOpen:d}=(0,u.vR)(),f=l(c,t),v=s(a),m=(0,tg.cx)("chakra-modal__content",n),p=(0,u.I_)(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...p.dialog},g={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...p.dialogContainer},{placement:y}=(0,i.M)();return(0,eq.jsx)(th,{children:(0,eq.jsx)(ty.m.div,{...v,className:"chakra-modal__content-container",__css:g,children:(0,eq.jsx)(tM,{motionProps:o,direction:y,in:d,className:m,...f,__css:h,children:r})})})});tO.displayName="DrawerContent"},1963:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2752),o=n(5432),a=n(6384),i=n(5059),u=n(9155),c=n(5820),l=n(6599),s=n(7294),d=n(5893),f={initial:"exit",animate:"enter",exit:"exit",variants:{enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:null!=(r=null==e?void 0:e.enter)?r:u.p$.enter(u.Sh.enter,n),transitionEnd:null==t?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:null!=(r=null==e?void 0:e.exit)?r:u.p$.exit(u.Sh.exit,n),transitionEnd:null==t?void 0:t.exit}}}};(0,s.forwardRef)(function(e,t){let{unmountOnExit:n,in:r,className:a,transition:i,transitionEnd:u,delay:s,...v}=e,m={transition:i,transitionEnd:u,delay:s};return(0,d.jsx)(c.M,{custom:m,children:(!n||r&&n)&&(0,d.jsx)(l.E.div,{ref:t,className:(0,o.cx)("chakra-fade",a),custom:m,...f,animate:r||n?"enter":"exit",...v})})}).displayName="Fade";var v=(0,a.m)(l.E.div),m=(0,i.G)((e,t)=>{let{className:n,transition:a,motionProps:i,...u}=e,c=(0,o.cx)("chakra-modal__overlay",n),l=(0,r.I_)(),s={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...l.overlay},{motionPreset:m}=(0,r.vR)();return(0,d.jsx)(v,{...i||("none"===m?{}:f),__css:s,ref:t,className:c,...u})});m.displayName="ModalOverlay"},3793:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(2752),o=n(5432),a=n(5059),i=n(6384),u=n(7294),c=n(5893),l=(0,a.G)((e,t)=>{let{className:n,...a}=e,{bodyId:l,setBodyMounted:s}=(0,r.vR)();(0,u.useEffect)(()=>(s(!0),()=>s(!1)),[s]);let d=(0,o.cx)("chakra-modal__body",n),f=(0,r.I_)();return(0,c.jsx)(i.m.div,{ref:t,className:d,id:l,...a,__css:f.body})});l.displayName="ModalBody"},2752:function(e,t,n){"use strict";n.d(t,{u_:function(){return k},vR:function(){return E},I_:function(){return x}});var r=n(1151),o=n(5432),a=n(1103),i=new WeakMap,u=new WeakMap,c={},l=0,s=function(e){return e&&(e.host||s(e.parentNode))},d=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=s(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return Boolean(e)});c[n]||(c[n]=new WeakMap);var a=c[n],d=[],f=new Set,v=new Set(o),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};o.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(i.get(e)||0)+1,l=(a.get(e)||0)+1;i.set(e,c),a.set(e,l),d.push(e),1===c&&o&&u.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return p(t),f.clear(),l++,function(){d.forEach(function(e){var t=i.get(e)-1,o=a.get(e)-1;i.set(e,t),a.set(e,o),t||(u.has(e)||e.removeAttribute(r),u.delete(e)),o||e.removeAttribute(n)}),--l||(i=new WeakMap,i=new WeakMap,u=new WeakMap,c={})}},f=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),d(r,o,n,"aria-hidden")):function(){return null}},v=n(7294),m=n(9598),p=n(5227),h=n(1639),g=n(5820),y=n(5893),[b,x]=(0,p.k)({name:"ModalStylesContext",errorMessage:"useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" "}),[w,E]=(0,p.k)({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),k=e=>{let t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:n,children:i,autoFocus:u,trapFocus:c,initialFocusRef:l,finalFocusRef:s,returnFocusOnClose:d,blockScrollOnMount:p,allowPinchZoom:x,preserveScrollBarGap:E,motionPreset:k,lockFocusAcrossFrames:N,onCloseComplete:C}=t,M=(0,h.jC)("Modal",t),O=function(e){let{isOpen:t,onClose:n,id:i,closeOnOverlayClick:u=!0,closeOnEsc:c=!0,useInert:l=!0,onOverlayClick:s,onEsc:d}=e,m=(0,v.useRef)(null),p=(0,v.useRef)(null),[h,g,y]=function(e,...t){let n=(0,v.useId)(),r=e||n;return(0,v.useMemo)(()=>t.map(e=>`${e}-${r}`),[r,t])}(i,"chakra-modal","chakra-modal--header","chakra-modal--body");(function(e,t){let n=e.current;(0,v.useEffect)(()=>{if(e.current&&t)return f(e.current)},[t,e,n])})(m,t&&l),(0,r.$)(m,t);let b=(0,v.useRef)(null),x=(0,v.useCallback)(e=>{b.current=e.target},[]),w=(0,v.useCallback)(e=>{"Escape"===e.key&&(e.stopPropagation(),c&&(null==n||n()),null==d||d())},[c,n,d]),[E,k]=(0,v.useState)(!1),[N,C]=(0,v.useState)(!1),M=(0,v.useCallback)((e={},t=null)=>({role:"dialog",...e,ref:(0,a.lq)(t,m),id:h,tabIndex:-1,"aria-modal":!0,"aria-labelledby":E?g:void 0,"aria-describedby":N?y:void 0,onClick:(0,o.v0)(e.onClick,e=>e.stopPropagation())}),[y,N,h,g,E]),O=(0,v.useCallback)(e=>{e.stopPropagation(),b.current===e.target&&r.B.isTopModal(m.current)&&(u&&(null==n||n()),null==s||s())},[n,u,s]),S=(0,v.useCallback)((e={},t=null)=>({...e,ref:(0,a.lq)(t,p),onClick:(0,o.v0)(e.onClick,O),onKeyDown:(0,o.v0)(e.onKeyDown,w),onMouseDown:(0,o.v0)(e.onMouseDown,x)}),[w,x,O]);return{isOpen:t,onClose:n,headerId:g,bodyId:y,setBodyMounted:C,setHeaderMounted:k,dialogRef:m,overlayRef:p,getDialogProps:M,getDialogContainerProps:S}}(t),S={...O,autoFocus:u,trapFocus:c,initialFocusRef:l,finalFocusRef:s,returnFocusOnClose:d,blockScrollOnMount:p,allowPinchZoom:x,preserveScrollBarGap:E,motionPreset:k,lockFocusAcrossFrames:N};return(0,y.jsx)(w,{value:S,children:(0,y.jsx)(b,{value:M,children:(0,y.jsx)(g.M,{onExitComplete:C,children:S.isOpen&&(0,y.jsx)(m.h,{...n,children:i})})})})};k.displayName="Modal"},5972:function(e,t,n){"use strict";n.d(t,{M:function(){return c},d:function(){return s}});var r=n(2752),o=n(5227),a=n(5119),i=n(5893),[u,c]=(0,o.k)(),l={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function s(e){var t;let{isOpen:n,onClose:o,placement:c="right",children:s,...d}=e,f=(0,a.F)(),v=null==(t=f.components)?void 0:t.Drawer,m=function(e,t){var n,r;if(e)return null!=(r=null==(n=l[e])?void 0:n[t])?r:e}(c,f.direction);return(0,i.jsx)(u,{value:{placement:m},children:(0,i.jsx)(r.u_,{isOpen:n,onClose:o,styleConfig:v,...d,children:s})})}},4504:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(2752),o=n(5432),a=n(5059),i=n(6384),u=n(7294),c=n(5893),l=(0,a.G)((e,t)=>{let{className:n,...a}=e,{headerId:l,setHeaderMounted:s}=(0,r.vR)();(0,u.useEffect)(()=>(s(!0),()=>s(!1)),[s]);let d=(0,o.cx)("chakra-modal__header",n),f=(0,r.I_)(),v={flex:0,...f.header};return(0,c.jsx)(i.m.header,{ref:t,className:d,id:l,...a,__css:v})});l.displayName="ModalHeader"},7018:function(e,t,n){"use strict";n.d(t,{m:function(){return c}});var r=n(2752),o=n(5432),a=n(5059),i=n(6384),u=n(5893),c=(0,a.G)((e,t)=>{let{className:n,...a}=e,c=(0,o.cx)("chakra-modal__footer",n),l=(0,r.I_)(),s={display:"flex",alignItems:"center",justifyContent:"flex-end",...l.footer};return(0,u.jsx)(i.m.footer,{ref:t,...a,__css:s,className:c})});c.displayName="ModalFooter"},5819:function(e,t,n){"use strict";n.d(t,{o:function(){return c}});var r=n(2752),o=n(6989),a=n(5432),i=n(5059),u=n(5893),c=(0,i.G)((e,t)=>{let{onClick:n,className:i,...c}=e,{onClose:l}=(0,r.vR)(),s=(0,a.cx)("chakra-modal__close-btn",i),d=(0,r.I_)();return(0,u.jsx)(o.P,{ref:t,__css:d.closeButton,className:s,onClick:(0,a.v0)(n,e=>{e.stopPropagation(),l()}),...c})});c.displayName="ModalCloseButton"}}]);