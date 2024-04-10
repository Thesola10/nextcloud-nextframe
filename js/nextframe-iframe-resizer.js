(()=>{var e={4126:(e,n,t)=>{const i=t(570);e.exports={iframeResize:i,iframeResizer:i,contentWindow:t(481)}},481:e=>{!function(n){if("undefined"!=typeof window){var t=!0,i=10,o="",r=0,a="",s=null,c="",u=!1,d={resize:1,click:1},l=128,f=!0,m=1,g="bodyOffset",h=g,p=!0,w="",y={},b=32,v=null,T=!1,I=!1,E="[iFrameSizer]",M=E.length,O="",z={max:1,min:1,bodyScroll:1,documentElementScroll:1},x="child",S=!0,N=window.parent,F="*",k=0,R=!1,C=null,A=16,W=1,L="scroll",P=L,j=window,H=function(){se("onMessage function not defined")},B=function(){},q=function(){},D={height:function(){return se("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return se("Custom width calculation function not defined"),document.body.scrollWidth}},U={},V=!1;try{var J=Object.create({},{passive:{get:function(){V=!0}}});window.addEventListener("test",te,J),window.removeEventListener("test",te,J)}catch(e){}var X,Y,Q,G,K,_,Z,$={bodyOffset:function(){return document.body.offsetHeight+ye("marginTop")+ye("marginBottom")},offset:function(){return $.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return D.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,ve($))},min:function(){return Math.min.apply(null,ve($))},grow:function(){return $.max()},lowestElement:function(){return Math.max($.bodyOffset()||$.documentElementOffset(),be("bottom",Ie()))},taggedElement:function(){return Te("bottom","data-iframe-height")}},ee={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return D.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(ee.bodyScroll(),ee.documentElementScroll())},max:function(){return Math.max.apply(null,ve(ee))},min:function(){return Math.min.apply(null,ve(ee))},rightMostElement:function(){return be("right",Ie())},taggedElement:function(){return Te("right","data-iframe-width")}},ne=(X=Ee,K=null,_=0,Z=function(){_=Date.now(),K=null,G=X.apply(Y,Q),K||(Y=Q=null)},function(){var e=Date.now();_||(_=e);var n=A-(e-_);return Y=this,Q=arguments,n<=0||n>A?(K&&(clearTimeout(K),K=null),_=e,G=X.apply(Y,Q),K||(Y=Q=null)):K||(K=setTimeout(Z,n)),G});ie(window,"message",(function(t){var i={init:function(){w=t.data,N=t.source,ce(),f=!1,setTimeout((function(){p=!1}),l)},reset:function(){p?ae("Page reset ignored by init"):(ae("Page size reset by host page"),ze("resetPage"))},resize:function(){Me("resizeParent","Parent window requested size check")},moveToAnchor:function(){y.findTarget(r())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=r();ae("PageInfoFromParent called from parent: "+e),q(JSON.parse(e)),ae(" --")},message:function(){var e=r();ae("onMessage called from parent: "+e),H(JSON.parse(e)),ae(" --")}};function o(){return t.data.split("]")[1].split(":")[0]}function r(){return t.data.slice(t.data.indexOf(":")+1)}function a(){return t.data.split(":")[2]in{true:1,false:1}}function s(){var r=o();r in i?i[r]():!e.exports&&"iFrameResize"in window||window.jQuery!==n&&"iFrameResize"in window.jQuery.prototype||a()||se("Unexpected message ("+t.data+")")}E===(""+t.data).slice(0,M)&&(!1===f?s():a()?i.init():ae('Ignored message of type "'+o()+'". Received before initialization.'))})),ie(window,"readystatechange",Ne),Ne()}function te(){}function ie(e,n,t,i){e.addEventListener(n,t,!!V&&(i||{}))}function oe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function re(e){return E+"["+O+"] "+e}function ae(e){T&&"object"==typeof window.console&&console.log(re(e))}function se(e){"object"==typeof window.console&&console.warn(re(e))}function ce(){var e;!function(){function e(e){return"true"===e}var i=w.slice(M).split(":");O=i[0],r=n===i[1]?r:Number(i[1]),u=n===i[2]?u:e(i[2]),T=n===i[3]?T:e(i[3]),b=n===i[4]?b:Number(i[4]),t=n===i[6]?t:e(i[6]),a=i[7],h=n===i[8]?h:i[8],o=i[9],c=i[10],k=n===i[11]?k:Number(i[11]),y.enable=n!==i[12]&&e(i[12]),x=n===i[13]?x:i[13],P=n===i[14]?P:i[14],I=n===i[15]?I:e(i[15])}(),ae("Initialising iFrame ("+window.location.href+")"),function(){function e(){var e=window.iFrameResizer;ae("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(ue,e),H="onMessage"in e?e.onMessage:H,B="onReady"in e?e.onReady:B,F="targetOrigin"in e?e.targetOrigin:F,h="heightCalculationMethod"in e?e.heightCalculationMethod:h,P="widthCalculationMethod"in e?e.widthCalculationMethod:P}function n(e,n){return"function"==typeof e&&(ae("Setup custom "+n+"CalcMethod"),D[n]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),h=n(h,"height"),P=n(P,"width"));ae("TargetOrigin for parent set to: "+F)}(),function(){n===a&&(a=r+"px");de("margin",function(e,n){-1!==n.indexOf("-")&&(se("Negative CSS value ignored for "+e),n="");return n}("margin",a))}(),de("background",o),de("padding",c),(e=document.createElement("div")).style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e),ge(),he(),document.documentElement.style.height="",document.body.style.height="",ae('HTML & body height set to "auto"'),ae("Enable public methods"),j.parentIFrame={autoResize:function(e){return!0===e&&!1===t?(t=!0,pe()):!1===e&&!0===t&&(t=!1,fe("remove"),null!==s&&s.disconnect(),clearInterval(v)),Se(0,0,"autoResize",JSON.stringify(t)),t},close:function(){Se(0,0,"close")},getId:function(){return O},getPageInfo:function(e){"function"==typeof e?(q=e,Se(0,0,"pageInfo")):(q=function(){},Se(0,0,"pageInfoStop"))},moveToAnchor:function(e){y.findTarget(e)},reset:function(){xe("parentIFrame.reset")},scrollTo:function(e,n){Se(n,e,"scrollTo")},scrollToOffset:function(e,n){Se(n,e,"scrollToOffset")},sendMessage:function(e,n){Se(0,0,"message",JSON.stringify(e),n)},setHeightCalculationMethod:function(e){h=e,ge()},setWidthCalculationMethod:function(e){P=e,he()},setTargetOrigin:function(e){ae("Set targetOrigin: "+e),F=e},size:function(e,n){Me("size","parentIFrame.size("+(e||"")+(n?","+n:"")+")",e,n)}},function(){if(!0!==I)return;function e(e){Se(0,0,e.type,e.screenY+":"+e.screenX)}function n(n,t){ae("Add event listener: "+t),ie(window.document,n,e)}n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave")}(),pe(),y=function(){function e(){return{x:window.pageXOffset===n?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===n?document.documentElement.scrollTop:window.pageYOffset}}function t(n){var t=n.getBoundingClientRect(),i=e();return{x:parseInt(t.left,10)+parseInt(i.x,10),y:parseInt(t.top,10)+parseInt(i.y,10)}}function i(e){function i(e){var n=t(e);ae("Moving to in page link (#"+o+") at x: "+n.x+" y: "+n.y),Se(n.y,n.x,"scrollToOffset")}var o=e.split("#")[1]||e,r=decodeURIComponent(o),a=document.getElementById(r)||document.getElementsByName(r)[0];n===a?(ae("In page link (#"+o+") not found in iFrame, so sending to parent"),Se(0,0,"inPageLink","#"+o)):i(a)}function o(){var e=window.location.hash,n=window.location.href;""!==e&&"#"!==e&&i(n)}function r(){function e(e){function n(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&ie(e,"click",n)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function a(){ie(window,"hashchange",o)}function s(){setTimeout(o,l)}function c(){Array.prototype.forEach&&document.querySelectorAll?(ae("Setting up location.hash handlers"),r(),a(),s()):se("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}y.enable?c():ae("In page linking not enabled");return{findTarget:i}}(),Me("init","Init message from host page"),B()}function ue(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],se("Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}function de(e,t){n!==t&&""!==t&&"null"!==t&&(document.body.style[e]=t,ae("Body "+e+' set to "'+t+'"'))}function le(e){var n={add:function(n){function t(){Me(e.eventName,e.eventType)}U[n]=t,ie(window,n,t,{passive:!0})},remove:function(e){var n,t,i,o=U[e];delete U[e],n=window,t=e,i=o,n.removeEventListener(t,i,!1)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(n[e.method])):n[e.method](e.eventName),ae(oe(e.method)+" event listener: "+e.eventType)}function fe(e){le({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),le({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),le({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),le({method:e,eventType:"Input",eventName:"input"}),le({method:e,eventType:"Mouse Up",eventName:"mouseup"}),le({method:e,eventType:"Mouse Down",eventName:"mousedown"}),le({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),le({method:e,eventType:"Print",eventNames:["afterprint","beforeprint"]}),le({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),le({method:e,eventType:"Touch Start",eventName:"touchstart"}),le({method:e,eventType:"Touch End",eventName:"touchend"}),le({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),le({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),le({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),le({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===x&&le({method:e,eventType:"IFrame Resized",eventName:"resize"})}function me(e,n,t,i){return n!==e&&(e in t||(se(e+" is not a valid option for "+i+"CalculationMethod."),e=n),ae(i+' calculation method set to "'+e+'"')),e}function ge(){h=me(h,g,$,"height")}function he(){P=me(P,L,ee,"width")}function pe(){var e;!0===t?(fe("add"),e=0>b,window.MutationObserver||window.WebKitMutationObserver?e?we():s=function(){function e(e){function n(e){!1===e.complete&&(ae("Attach listeners to "+e.src),e.addEventListener("load",o,!1),e.addEventListener("error",r,!1),c.push(e))}"attributes"===e.type&&"src"===e.attributeName?n(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),n)}function n(e){c.splice(c.indexOf(e),1)}function t(e){ae("Remove listeners from "+e.src),e.removeEventListener("load",o,!1),e.removeEventListener("error",r,!1),n(e)}function i(e,n,i){t(e.target),Me(n,i+": "+e.target.src)}function o(e){i(e,"imageLoad","Image loaded")}function r(e){i(e,"imageLoadFailed","Image load failed")}function a(n){Me("mutationObserver","mutationObserver: "+n[0].target+" "+n[0].type),n.forEach(e)}function s(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return d=new u(a),ae("Create body MutationObserver"),d.observe(e,n),d}var c=[],u=window.MutationObserver||window.WebKitMutationObserver,d=s();return{disconnect:function(){"disconnect"in d&&(ae("Disconnect body MutationObserver"),d.disconnect(),c.forEach(t))}}}():(ae("MutationObserver not supported in this browser!"),we())):ae("Auto Resize disabled")}function we(){0!==b&&(ae("setInterval: "+b+"ms"),v=setInterval((function(){Me("interval","setInterval: "+b)}),Math.abs(b)))}function ye(e,n){var t=0;return n=n||document.body,t=null===(t=document.defaultView.getComputedStyle(n,null))?0:t[e],parseInt(t,i)}function be(e,n){for(var t=n.length,i=0,o=0,r=oe(e),a=Date.now(),s=0;s<t;s++)(i=n[s].getBoundingClientRect()[e]+ye("margin"+r,n[s]))>o&&(o=i);return a=Date.now()-a,ae("Parsed "+t+" HTML elements"),ae("Element position calculated in "+a+"ms"),function(e){e>A/2&&ae("Event throttle increased to "+(A=2*e)+"ms")}(a),o}function ve(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function Te(e,n){var t=document.querySelectorAll("["+n+"]");return 0===t.length&&(se("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")),be(e,t)}function Ie(){return document.querySelectorAll("body *")}function Ee(e,t,i,o){var r,a;!function(){function e(e,n){return!(Math.abs(e-n)<=k)}return r=n===i?$[h]():i,a=n===o?ee[P]():o,e(m,r)||u&&e(W,a)}()&&"init"!==e?!(e in{init:1,interval:1,size:1})&&(h in z||u&&P in z)?xe(t):e in{interval:1}||ae("No change in size detected"):(Oe(),Se(m=r,W=a,e))}function Me(e,n,t,i){R&&e in d?ae("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||ae("Trigger event: "+n),"init"===e?Ee(e,n,t,i):ne(e,n,t,i))}function Oe(){R||(R=!0,ae("Trigger event lock on")),clearTimeout(C),C=setTimeout((function(){R=!1,ae("Trigger event lock off"),ae("--")}),l)}function ze(e){m=$[h](),W=ee[P](),Se(m,W,e)}function xe(e){var n=h;h=g,ae("Reset trigger event: "+e),Oe(),ze("reset"),h=n}function Se(e,t,i,o,r){var a;!0===S&&(n===r?r=F:ae("Message targetOrigin: "+r),ae("Sending message to host page ("+(a=O+":"+e+":"+t+":"+i+(n===o?"":":"+o))+")"),N.postMessage(E+a,r))}function Ne(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}}()},570:(e,n)=>{var t,i,o;!function(r){if("undefined"!=typeof window){var a,s=0,c=!1,u=!1,d=7,l="[iFrameSizer]",f=l.length,m=null,g=window.requestAnimationFrame,h=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),p={},w=null,y=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){x("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}}),b={};window.jQuery!==r&&((a=window.jQuery).fn?a.fn.iFrameResize||(a.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,t){q(t,e)})).end()}):z("","Unable to bind to jQuery, it is not fully loaded.")),i=[],(o="function"==typeof(t=X)?t.apply(n,i):t)===r||(e.exports=o),window.iFrameResize=window.iFrameResize||X()}function v(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function T(e,n,t){e.addEventListener(n,t,!1)}function I(e,n,t){e.removeEventListener(n,t,!1)}function E(e){return l+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function M(e){return p[e]?p[e].log:c}function O(e,n){S("log",e,n,M(e))}function z(e,n){S("info",e,n,M(e))}function x(e,n){S("warn",e,n,!0)}function S(e,n,t,i){!0===i&&"object"==typeof window.console&&console[e](E(n),t)}function N(e){function n(){o("Height"),o("Width"),j((function(){P(k),A(q),h("onResized",k)}),k,"init")}function t(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function i(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function o(e){var n=Number(p[q]["max"+e]),t=Number(p[q]["min"+e]),i=e.toLowerCase(),o=Number(k[i]);O(q,"Checking "+i+" is in range "+t+"-"+n),o<t&&(o=t,O(q,"Set "+i+" to min value")),o>n&&(o=n,O(q,"Set "+i+" to max value")),k[i]=""+o}function r(e){return N.slice(N.indexOf(":")+d+e)}function a(e,n){var t,i,o;t=function(){var t,i;H("Send Page Info","pageInfo:"+(t=document.body.getBoundingClientRect(),i=k.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(i.top-t.top,10),offsetLeft:parseInt(i.left-t.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},i=32,b[o=n]||(b[o]=setTimeout((function(){b[o]=null,t()}),i))}function s(e){var n=e.getBoundingClientRect();return C(q),{x:Math.floor(Number(n.left)+Number(m.x)),y:Math.floor(Number(n.top)+Number(m.y))}}function c(e){var n=e?s(k.iframe):{x:0,y:0},t={x:Number(k.width)+n.x,y:Number(k.height)+n.y};O(q,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top===window.self?(m=t,u(),O(q,"--")):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):x(q,"Unable to scroll to requested position, window.parentIFrame not found")}function u(){!1===h("onScroll",m)?W():A(q)}function g(e){var n={};if(0===Number(k.width)&&0===Number(k.height)){var t=r(9).split(":");n={x:t[1],y:t[0]}}else n={x:k.width,y:k.height};h(e,{iframe:k.iframe,screenX:Number(n.x),screenY:Number(n.y),type:k.type})}function h(e,n){return F(q,e,n)}var w,y,v,E,M,S,N=e.data,k={},q=null;"[iFrameResizerChild]Ready"===N?function(){for(var e in p)H("iFrame requested init",B(e),p[e].iframe,e)}():l===(""+N).slice(0,f)&&N.slice(f).split(":")[0]in p?(v=N.slice(f).split(":"),E=v[1]?parseInt(v[1],10):0,M=p[v[0]]&&p[v[0]].iframe,S=getComputedStyle(M),k={iframe:M,id:v[0],height:E+t(S)+i(S),width:v[2],type:v[3]},q=k.id,p[q]&&(p[q].loaded=!0),(y=k.type in{true:1,false:1,undefined:1})&&O(q,"Ignoring init message from meta parent page"),!y&&function(e){var n=!0;return p[e]||(n=!1,x(k.type+" No settings for "+e+". Message was: "+N)),n}(q)&&(O(q,"Received: "+N),w=!0,null===k.iframe&&(x(q,"IFrame ("+k.id+") not found"),w=!1),w&&function(){var n,t=e.origin,i=p[q]&&p[q].checkOrigin;if(i&&""+t!="null"&&!(i.constructor===Array?function(){var e=0,n=!1;for(O(q,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}():(n=p[q]&&p[q].remoteHost,O(q,"Checking connection is from: "+n),t===n)))throw new Error("Unexpected message received from: "+t+" for "+k.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(p[q]&&p[q].firstRun&&p[q]&&(p[q].firstRun=!1),k.type){case"close":R(k.iframe);break;case"message":d=r(6),O(q,"onMessage passed: {iframe: "+k.iframe.id+", message: "+d+"}"),h("onMessage",{iframe:k.iframe,message:JSON.parse(d)}),O(q,"--");break;case"mouseenter":g("onMouseEnter");break;case"mouseleave":g("onMouseLeave");break;case"autoResize":p[q].autoResize=JSON.parse(r(9));break;case"scrollTo":c(!1);break;case"scrollToOffset":c(!0);break;case"pageInfo":a(p[q]&&p[q].iframe,q),function(){function e(e,i){function o(){p[t]?a(p[t].iframe,t):n()}["scroll","resize"].forEach((function(n){O(t,e+n+" listener for sendPageInfo"),i(window,n,o)}))}function n(){e("Remove ",I)}var t=q;e("Add ",T),p[t]&&(p[t].stopPageInfo=n)}();break;case"pageInfoStop":p[q]&&p[q].stopPageInfo&&(p[q].stopPageInfo(),delete p[q].stopPageInfo);break;case"inPageLink":t=r(9).split("#")[1]||"",i=decodeURIComponent(t),(o=document.getElementById(i)||document.getElementsByName(i)[0])?(e=s(o),O(q,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),m={x:e.x,y:e.y},u(),O(q,"--")):window.top===window.self?O(q,"In page link #"+t+" not found"):window.parentIFrame?window.parentIFrame.moveToAnchor(t):O(q,"In page link #"+t+" not found and window.parentIFrame not found");break;case"reset":L(k);break;case"init":n(),h("onInit",k.iframe);break;default:0===Number(k.width)&&0===Number(k.height)?x("Unsupported message received ("+k.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):n()}var e,t,i,o,d}())):z(q,"Ignored: "+N)}function F(e,n,t){var i=null,o=null;if(p[e]){if("function"!=typeof(i=p[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function k(e){var n=e.id;delete p[n]}function R(e){var n=e.id;if(!1!==F(n,"onClose",n)){O(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){x(e)}F(n,"onClosed",n),O(n,"--"),k(e)}else O(n,"Close iframe cancelled by onClose event")}function C(e){null===m&&O(e,"Get page position: "+(m={x:window.pageXOffset===r?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===r?document.documentElement.scrollTop:window.pageYOffset}).x+","+m.y)}function A(e){null!==m&&(window.scrollTo(m.x,m.y),O(e,"Set page position: "+m.x+","+m.y),W())}function W(){m=null}function L(e){O(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),C(e.id),j((function(){P(e),H("reset","reset",e.iframe,e.id)}),e,"reset")}function P(e){function n(n){u||"0"!==e[n]||(u=!0,O(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function n(n){return"0px"===(p[e]&&p[e].iframe.style[n])}function t(e){return null!==e.offsetParent}p[e]&&t(p[e].iframe)&&(n("height")||n("width"))&&H("Visibility change","resize",p[e].iframe,e)}Object.keys(p).forEach((function(n){e(n)}))}function n(n){O("window","Mutation observed: "+n[0].target+" "+n[0].type),D(e,16)}function t(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new i(n).observe(e,t)}var i=v();i&&t()}())}function t(t){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",O(e.id,"IFrame ("+i+") "+n+" set to "+e[n]+"px")):O("undefined","messageData id not set")}(t),n(t)}var i=e.iframe.id;p[i]&&(p[i].sizeHeight&&t("height"),p[i].sizeWidth&&t("width"))}function j(e,n,t){t!==n.type&&g&&!window.jasmine?(O(n.id,"Requesting animation frame"),g(e)):e()}function H(e,n,t,i,o){var r,a=!1;i=i||t.id,p[i]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(r=p[i]&&p[i].targetOrigin,O(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(l+n,r)):x(i,"["+e+"] IFrame("+i+") not found"),o&&p[i]&&p[i].warningTimeout&&(p[i].msgTimeout=setTimeout((function(){!p[i]||p[i].loaded||a||(a=!0,x(i,"IFrame has not responded within "+p[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),p[i].warningTimeout)))}function B(e){return e+":"+p[e].bodyMarginV1+":"+p[e].sizeWidth+":"+p[e].log+":"+p[e].interval+":"+p[e].enablePublicMethods+":"+p[e].autoResize+":"+p[e].bodyMargin+":"+p[e].heightCalculationMethod+":"+p[e].bodyBackground+":"+p[e].bodyPadding+":"+p[e].tolerance+":"+p[e].inPageLinks+":"+p[e].resizeFrom+":"+p[e].widthCalculationMethod+":"+p[e].mouseEvents}function q(e,n){function t(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],x(a,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var i,o,a=function(t){if("string"!=typeof t)throw new TypeError("Invaild id for iFrame. Expected String");var i;return""===t&&(e.id=(i=n&&n.id||y.id+s++,null!==document.getElementById(i)&&(i+=s++),t=i),c=(n||{}).log,O(t,"Added missing iframe ID: "+t+" ("+e.src+")")),t}(e.id);a in p&&"iFrameResizer"in e?x(a,"Ignored iFrame, already setup."):(!function(n){var i;n=n||{},p[a]=Object.create(null),p[a].iframe=e,p[a].firstRun=!0,p[a].remoteHost=e.src&&e.src.split("/").slice(0,3).join("/"),function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(n),Object.keys(n).forEach(t,n),function(e){for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&(p[a][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:y[n])}(n),p[a]&&(p[a].targetOrigin=!0===p[a].checkOrigin?""===(i=p[a].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*")}(n),function(){switch(O(a,"IFrame scrolling "+(p[a]&&p[a].scrolling?"enabled":"disabled")+" for "+a),e.style.overflow=!1===(p[a]&&p[a].scrolling)?"hidden":"auto",p[a]&&p[a].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=p[a]?p[a].scrolling:"no"}}(),function(){function n(n){var t=p[a][n];1/0!==t&&0!==t&&(e.style[n]="number"==typeof t?t+"px":t,O(a,"Set "+n+" = "+e.style[n]))}function t(e){if(p[a]["min"+e]>p[a]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof(p[a]&&p[a].bodyMargin)&&"0"!==(p[a]&&p[a].bodyMargin)||(p[a].bodyMarginV1=p[a].bodyMargin,p[a].bodyMargin=p[a].bodyMargin+"px"),i=B(a),(o=v())&&function(n){e.parentNode&&new n((function(n){n.forEach((function(n){Array.prototype.slice.call(n.removedNodes).forEach((function(n){n===e&&R(e)}))}))})).observe(e.parentNode,{childList:!0})}(o),T(e,"load",(function(){var n,t;H("iFrame.onload",i,e,r,!0),n=p[a]&&p[a].firstRun,t=p[a]&&p[a].heightCalculationMethod in h,!n&&t&&L({iframe:e,height:0,width:0,type:"init"})})),H("init",i,e,r,!0),p[a]&&(p[a].iframe.iFrameResizer={close:R.bind(null,p[a].iframe),removeListeners:k.bind(null,p[a].iframe),resize:H.bind(null,"Window resize","resize",p[a].iframe),moveToAnchor:function(e){H("Move to anchor","moveToAnchor:"+e,p[a].iframe,a)},sendMessage:function(e){H("Send Message","message:"+(e=JSON.stringify(e)),p[a].iframe,a)}}))}function D(e,n){null===w&&(w=setTimeout((function(){w=null,e()}),n))}function U(){"hidden"!==document.visibilityState&&(O("document","Trigger event: Visibility change"),D((function(){V("Tab Visible","resize")}),16))}function V(e,n){Object.keys(p).forEach((function(t){(function(e){return p[e]&&"parent"===p[e].resizeFrom&&p[e].autoResize&&!p[e].firstRun})(t)&&H(e,n,p[t].iframe,t)}))}function J(){T(window,"message",N),T(window,"resize",(function(){var e;O("window","Trigger event: "+(e="resize")),D((function(){V("Window "+e,"resize")}),16)})),T(document,"visibilitychange",U),T(document,"-webkit-visibilitychange",U)}function X(){function e(e,t){t&&(!function(){if(!t.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==t.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+t.tagName+">")}(),q(t,e),n.push(t))}var n;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!g;e+=1)g=window[n[e]+"RequestAnimationFrame"];g?g=g.bind(window):O("setup","RequestAnimationFrame not supported")}(),J(),function(t,i){switch(n=[],function(e){e&&e.enablePublicMethods&&x("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(t),typeof i){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(i||"iframe"),e.bind(r,t));break;case"object":e(t,i);break;default:throw new TypeError("Unexpected data type ("+typeof i+")")}return n}}}()}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return e[i](r,r.exports,t),r.exports}(()=>{if(t(4126).contentWindow,"parentIFrame"in window){if(!1 in window.parentIFrame){let e="font-size: 1.5em;";console.info("%cNextFrame supports iframeResizer! Get it from https://davidjbradshaw.github.io/iframe-resizer/ and try attaching it to this page!",e)}const e=new IntersectionObserver(((e,n)=>{e.forEach((e=>{e.isIntersecting?window.parentIFrame.getPageInfo((e=>{window.parentIFrame.size(e.documentHeight)})):window.parentIFrame.size(80)}))}));document.getElementsByClassName("header-menu__wrapper").forEach((n=>{console.log("Registering %o for size change",n),e.observe(n)}));let n=document.getElementById("side-menu");null!==n&&(console.log("Found Custom Menu!"),e.observe(n))}else console.info("%cNextFrame supports iframeResizer! Get it from https://davidjbradshaw.github.io/iframe-resizer/ and try attaching it to this page in an iframe!")})()})();
//# sourceMappingURL=nextframe-iframe-resizer.js.map?v=f9980ee3163a9861177b