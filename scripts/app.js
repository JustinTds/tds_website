var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __name=(target,value)=>__defProp(target,"name",{value,configurable:!0});var __decorateClass=(decorators,target,key,kind)=>{for(var result=kind>1?void 0:kind?__getOwnPropDesc(target,key):target,i7=decorators.length-1,decorator;i7>=0;i7--)(decorator=decorators[i7])&&(result=(kind?decorator(target,key,result):decorator(result))||result);return kind&&result&&__defProp(target,key,result),result};var t=window,e=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap,o=class{constructor(t5,e10,n7){if(this._$cssResult$=!0,n7!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t5,this.t=e10}get styleSheet(){let t5=this.o,s6=this.t;if(e&&t5===void 0){let e10=s6!==void 0&&s6.length===1;e10&&(t5=n.get(s6)),t5===void 0&&((this.o=t5=new CSSStyleSheet).replaceSync(this.cssText),e10&&n.set(s6,t5))}return t5}toString(){return this.cssText}};__name(o,"o");var r=__name(t5=>new o(typeof t5=="string"?t5:t5+"",void 0,s),"r"),i=__name((t5,...e10)=>{let n7=t5.length===1?t5[0]:e10.reduce((e11,s6,n8)=>e11+(t6=>{if(t6._$cssResult$===!0)return t6.cssText;if(typeof t6=="number")return t6;throw Error("Value passed to 'css' function must be a 'css' function result: "+t6+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s6)+t5[n8+1],t5[0]);return new o(n7,t5,s)},"i"),S=__name((s6,n7)=>{e?s6.adoptedStyleSheets=n7.map(t5=>t5 instanceof CSSStyleSheet?t5:t5.styleSheet):n7.forEach(e10=>{let n8=document.createElement("style"),o8=t.litNonce;o8!==void 0&&n8.setAttribute("nonce",o8),n8.textContent=e10.cssText,s6.appendChild(n8)})},"S"),c=e?t5=>t5:t5=>t5 instanceof CSSStyleSheet?(t6=>{let e10="";for(let s6 of t6.cssRules)e10+=s6.cssText;return r(e10)})(t5):t5;var s2,e2=window,r2=e2.trustedTypes,h=r2?r2.emptyScript:"",o2=e2.reactiveElementPolyfillSupport,n2={toAttribute(t5,i7){switch(i7){case Boolean:t5=t5?h:null;break;case Object:case Array:t5=t5==null?t5:JSON.stringify(t5)}return t5},fromAttribute(t5,i7){let s6=t5;switch(i7){case Boolean:s6=t5!==null;break;case Number:s6=t5===null?null:Number(t5);break;case Object:case Array:try{s6=JSON.parse(t5)}catch{s6=null}}return s6}},a=__name((t5,i7)=>i7!==t5&&(i7==i7||t5==t5),"a"),l={attribute:!0,type:String,converter:n2,reflect:!1,hasChanged:a},d=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t5){var i7;this.finalize(),((i7=this.h)!==null&&i7!==void 0?i7:this.h=[]).push(t5)}static get observedAttributes(){this.finalize();let t5=[];return this.elementProperties.forEach((i7,s6)=>{let e10=this._$Ep(s6,i7);e10!==void 0&&(this._$Ev.set(e10,s6),t5.push(e10))}),t5}static createProperty(t5,i7=l){if(i7.state&&(i7.attribute=!1),this.finalize(),this.elementProperties.set(t5,i7),!i7.noAccessor&&!this.prototype.hasOwnProperty(t5)){let s6=typeof t5=="symbol"?Symbol():"__"+t5,e10=this.getPropertyDescriptor(t5,s6,i7);e10!==void 0&&Object.defineProperty(this.prototype,t5,e10)}}static getPropertyDescriptor(t5,i7,s6){return{get(){return this[i7]},set(e10){let r5=this[t5];this[i7]=e10,this.requestUpdate(t5,r5,s6)},configurable:!0,enumerable:!0}}static getPropertyOptions(t5){return this.elementProperties.get(t5)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t5=Object.getPrototypeOf(this);if(t5.finalize(),t5.h!==void 0&&(this.h=[...t5.h]),this.elementProperties=new Map(t5.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t6=this.properties,i7=[...Object.getOwnPropertyNames(t6),...Object.getOwnPropertySymbols(t6)];for(let s6 of i7)this.createProperty(s6,t6[s6])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i7){let s6=[];if(Array.isArray(i7)){let e10=new Set(i7.flat(1/0).reverse());for(let i8 of e10)s6.unshift(c(i8))}else i7!==void 0&&s6.push(c(i7));return s6}static _$Ep(t5,i7){let s6=i7.attribute;return s6===!1?void 0:typeof s6=="string"?s6:typeof t5=="string"?t5.toLowerCase():void 0}u(){var t5;this._$E_=new Promise(t6=>this.enableUpdating=t6),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t5=this.constructor.h)===null||t5===void 0||t5.forEach(t6=>t6(this))}addController(t5){var i7,s6;((i7=this._$ES)!==null&&i7!==void 0?i7:this._$ES=[]).push(t5),this.renderRoot!==void 0&&this.isConnected&&((s6=t5.hostConnected)===null||s6===void 0||s6.call(t5))}removeController(t5){var i7;(i7=this._$ES)===null||i7===void 0||i7.splice(this._$ES.indexOf(t5)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t5,i7)=>{this.hasOwnProperty(i7)&&(this._$Ei.set(i7,this[i7]),delete this[i7])})}createRenderRoot(){var t5;let s6=(t5=this.shadowRoot)!==null&&t5!==void 0?t5:this.attachShadow(this.constructor.shadowRootOptions);return S(s6,this.constructor.elementStyles),s6}connectedCallback(){var t5;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t5=this._$ES)===null||t5===void 0||t5.forEach(t6=>{var i7;return(i7=t6.hostConnected)===null||i7===void 0?void 0:i7.call(t6)})}enableUpdating(t5){}disconnectedCallback(){var t5;(t5=this._$ES)===null||t5===void 0||t5.forEach(t6=>{var i7;return(i7=t6.hostDisconnected)===null||i7===void 0?void 0:i7.call(t6)})}attributeChangedCallback(t5,i7,s6){this._$AK(t5,s6)}_$EO(t5,i7,s6=l){var e10;let r5=this.constructor._$Ep(t5,s6);if(r5!==void 0&&s6.reflect===!0){let h4=(((e10=s6.converter)===null||e10===void 0?void 0:e10.toAttribute)!==void 0?s6.converter:n2).toAttribute(i7,s6.type);this._$El=t5,h4==null?this.removeAttribute(r5):this.setAttribute(r5,h4),this._$El=null}}_$AK(t5,i7){var s6;let e10=this.constructor,r5=e10._$Ev.get(t5);if(r5!==void 0&&this._$El!==r5){let t6=e10.getPropertyOptions(r5),h4=typeof t6.converter=="function"?{fromAttribute:t6.converter}:((s6=t6.converter)===null||s6===void 0?void 0:s6.fromAttribute)!==void 0?t6.converter:n2;this._$El=r5,this[r5]=h4.fromAttribute(i7,t6.type),this._$El=null}}requestUpdate(t5,i7,s6){let e10=!0;t5!==void 0&&(((s6=s6||this.constructor.getPropertyOptions(t5)).hasChanged||a)(this[t5],i7)?(this._$AL.has(t5)||this._$AL.set(t5,i7),s6.reflect===!0&&this._$El!==t5&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t5,s6))):e10=!1),!this.isUpdatePending&&e10&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t6){Promise.reject(t6)}let t5=this.scheduleUpdate();return t5!=null&&await t5,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t5;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t6,i8)=>this[i8]=t6),this._$Ei=void 0);let i7=!1,s6=this._$AL;try{i7=this.shouldUpdate(s6),i7?(this.willUpdate(s6),(t5=this._$ES)===null||t5===void 0||t5.forEach(t6=>{var i8;return(i8=t6.hostUpdate)===null||i8===void 0?void 0:i8.call(t6)}),this.update(s6)):this._$Ek()}catch(t6){throw i7=!1,this._$Ek(),t6}i7&&this._$AE(s6)}willUpdate(t5){}_$AE(t5){var i7;(i7=this._$ES)===null||i7===void 0||i7.forEach(t6=>{var i8;return(i8=t6.hostUpdated)===null||i8===void 0?void 0:i8.call(t6)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t5)),this.updated(t5)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t5){return!0}update(t5){this._$EC!==void 0&&(this._$EC.forEach((t6,i7)=>this._$EO(i7,this[i7],t6)),this._$EC=void 0),this._$Ek()}updated(t5){}firstUpdated(t5){}};__name(d,"d");d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},o2?.({ReactiveElement:d}),((s2=e2.reactiveElementVersions)!==null&&s2!==void 0?s2:e2.reactiveElementVersions=[]).push("1.6.1");var t2,i2=window,s3=i2.trustedTypes,e3=s3?s3.createPolicy("lit-html",{createHTML:t5=>t5}):void 0,o3=`lit$${(Math.random()+"").slice(9)}$`,n3="?"+o3,l2=`<${n3}>`,h2=document,r3=__name((t5="")=>h2.createComment(t5),"r"),d2=__name(t5=>t5===null||typeof t5!="object"&&typeof t5!="function","d"),u=Array.isArray,c2=__name(t5=>u(t5)||typeof t5?.[Symbol.iterator]=="function","c"),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a2=/-->/g,f=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=__name(t5=>(i7,...s6)=>({_$litType$:t5,strings:i7,values:s6}),"g"),y=g(1),w=g(2),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h2.createTreeWalker(h2,129,null,!1),E=__name((t5,i7)=>{let s6=t5.length-1,n7=[],h4,r5=i7===2?"<svg>":"",d4=v;for(let i8=0;i8<s6;i8++){let s7=t5[i8],e10,u4,c4=-1,g3=0;for(;g3<s7.length&&(d4.lastIndex=g3,u4=d4.exec(s7),u4!==null);)g3=d4.lastIndex,d4===v?u4[1]==="!--"?d4=a2:u4[1]!==void 0?d4=f:u4[2]!==void 0?($.test(u4[2])&&(h4=RegExp("</"+u4[2],"g")),d4=_):u4[3]!==void 0&&(d4=_):d4===_?u4[0]===">"?(d4=h4??v,c4=-1):u4[1]===void 0?c4=-2:(c4=d4.lastIndex-u4[2].length,e10=u4[1],d4=u4[3]===void 0?_:u4[3]==='"'?p:m):d4===p||d4===m?d4=_:d4===a2||d4===f?d4=v:(d4=_,h4=void 0);let y3=d4===_&&t5[i8+1].startsWith("/>")?" ":"";r5+=d4===v?s7+l2:c4>=0?(n7.push(e10),s7.slice(0,c4)+"$lit$"+s7.slice(c4)+o3+y3):s7+o3+(c4===-2?(n7.push(void 0),i8):y3)}let u3=r5+(t5[s6]||"<?>")+(i7===2?"</svg>":"");if(!Array.isArray(t5)||!t5.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e3!==void 0?e3.createHTML(u3):u3,n7]},"E"),C=class{constructor({strings:t5,_$litType$:i7},e10){let l6;this.parts=[];let h4=0,d4=0,u3=t5.length-1,c4=this.parts,[v2,a4]=E(t5,i7);if(this.el=C.createElement(v2,e10),A.currentNode=this.el.content,i7===2){let t6=this.el.content,i8=t6.firstChild;i8.remove(),t6.append(...i8.childNodes)}for(;(l6=A.nextNode())!==null&&c4.length<u3;){if(l6.nodeType===1){if(l6.hasAttributes()){let t6=[];for(let i8 of l6.getAttributeNames())if(i8.endsWith("$lit$")||i8.startsWith(o3)){let s6=a4[d4++];if(t6.push(i8),s6!==void 0){let t7=l6.getAttribute(s6.toLowerCase()+"$lit$").split(o3),i9=/([.?@])?(.*)/.exec(s6);c4.push({type:1,index:h4,name:i9[2],strings:t7,ctor:i9[1]==="."?M:i9[1]==="?"?k:i9[1]==="@"?H:S2})}else c4.push({type:6,index:h4})}for(let i8 of t6)l6.removeAttribute(i8)}if($.test(l6.tagName)){let t6=l6.textContent.split(o3),i8=t6.length-1;if(i8>0){l6.textContent=s3?s3.emptyScript:"";for(let s6=0;s6<i8;s6++)l6.append(t6[s6],r3()),A.nextNode(),c4.push({type:2,index:++h4});l6.append(t6[i8],r3())}}}else if(l6.nodeType===8)if(l6.data===n3)c4.push({type:2,index:h4});else{let t6=-1;for(;(t6=l6.data.indexOf(o3,t6+1))!==-1;)c4.push({type:7,index:h4}),t6+=o3.length-1}h4++}}static createElement(t5,i7){let s6=h2.createElement("template");return s6.innerHTML=t5,s6}};__name(C,"C");function P(t5,i7,s6=t5,e10){var o8,n7,l6,h4;if(i7===x)return i7;let r5=e10!==void 0?(o8=s6._$Co)===null||o8===void 0?void 0:o8[e10]:s6._$Cl,u3=d2(i7)?void 0:i7._$litDirective$;return r5?.constructor!==u3&&((n7=r5?._$AO)===null||n7===void 0||n7.call(r5,!1),u3===void 0?r5=void 0:(r5=new u3(t5),r5._$AT(t5,s6,e10)),e10!==void 0?((l6=(h4=s6)._$Co)!==null&&l6!==void 0?l6:h4._$Co=[])[e10]=r5:s6._$Cl=r5),r5!==void 0&&(i7=P(t5,r5._$AS(t5,i7.values),r5,e10)),i7}__name(P,"P");var V=class{constructor(t5,i7){this.u=[],this._$AN=void 0,this._$AD=t5,this._$AM=i7}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t5){var i7;let{el:{content:s6},parts:e10}=this._$AD,o8=((i7=t5?.creationScope)!==null&&i7!==void 0?i7:h2).importNode(s6,!0);A.currentNode=o8;let n7=A.nextNode(),l6=0,r5=0,d4=e10[0];for(;d4!==void 0;){if(l6===d4.index){let i8;d4.type===2?i8=new N(n7,n7.nextSibling,this,t5):d4.type===1?i8=new d4.ctor(n7,d4.name,d4.strings,this,t5):d4.type===6&&(i8=new I(n7,this,t5)),this.u.push(i8),d4=e10[++r5]}l6!==d4?.index&&(n7=A.nextNode(),l6++)}return o8}p(t5){let i7=0;for(let s6 of this.u)s6!==void 0&&(s6.strings!==void 0?(s6._$AI(t5,s6,i7),i7+=s6.strings.length-2):s6._$AI(t5[i7])),i7++}};__name(V,"V");var N=class{constructor(t5,i7,s6,e10){var o8;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t5,this._$AB=i7,this._$AM=s6,this.options=e10,this._$Cm=(o8=e10?.isConnected)===null||o8===void 0||o8}get _$AU(){var t5,i7;return(i7=(t5=this._$AM)===null||t5===void 0?void 0:t5._$AU)!==null&&i7!==void 0?i7:this._$Cm}get parentNode(){let t5=this._$AA.parentNode,i7=this._$AM;return i7!==void 0&&t5.nodeType===11&&(t5=i7.parentNode),t5}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t5,i7=this){t5=P(this,t5,i7),d2(t5)?t5===b||t5==null||t5===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t5!==this._$AH&&t5!==x&&this.g(t5):t5._$litType$!==void 0?this.$(t5):t5.nodeType!==void 0?this.T(t5):c2(t5)?this.k(t5):this.g(t5)}O(t5,i7=this._$AB){return this._$AA.parentNode.insertBefore(t5,i7)}T(t5){this._$AH!==t5&&(this._$AR(),this._$AH=this.O(t5))}g(t5){this._$AH!==b&&d2(this._$AH)?this._$AA.nextSibling.data=t5:this.T(h2.createTextNode(t5)),this._$AH=t5}$(t5){var i7;let{values:s6,_$litType$:e10}=t5,o8=typeof e10=="number"?this._$AC(t5):(e10.el===void 0&&(e10.el=C.createElement(e10.h,this.options)),e10);if(((i7=this._$AH)===null||i7===void 0?void 0:i7._$AD)===o8)this._$AH.p(s6);else{let t6=new V(o8,this),i8=t6.v(this.options);t6.p(s6),this.T(i8),this._$AH=t6}}_$AC(t5){let i7=T.get(t5.strings);return i7===void 0&&T.set(t5.strings,i7=new C(t5)),i7}k(t5){u(this._$AH)||(this._$AH=[],this._$AR());let i7=this._$AH,s6,e10=0;for(let o8 of t5)e10===i7.length?i7.push(s6=new N(this.O(r3()),this.O(r3()),this,this.options)):s6=i7[e10],s6._$AI(o8),e10++;e10<i7.length&&(this._$AR(s6&&s6._$AB.nextSibling,e10),i7.length=e10)}_$AR(t5=this._$AA.nextSibling,i7){var s6;for((s6=this._$AP)===null||s6===void 0||s6.call(this,!1,!0,i7);t5&&t5!==this._$AB;){let i8=t5.nextSibling;t5.remove(),t5=i8}}setConnected(t5){var i7;this._$AM===void 0&&(this._$Cm=t5,(i7=this._$AP)===null||i7===void 0||i7.call(this,t5))}};__name(N,"N");var S2=class{constructor(t5,i7,s6,e10,o8){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t5,this.name=i7,this._$AM=e10,this.options=o8,s6.length>2||s6[0]!==""||s6[1]!==""?(this._$AH=Array(s6.length-1).fill(new String),this.strings=s6):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t5,i7=this,s6,e10){let o8=this.strings,n7=!1;if(o8===void 0)t5=P(this,t5,i7,0),n7=!d2(t5)||t5!==this._$AH&&t5!==x,n7&&(this._$AH=t5);else{let e11=t5,l6,h4;for(t5=o8[0],l6=0;l6<o8.length-1;l6++)h4=P(this,e11[s6+l6],i7,l6),h4===x&&(h4=this._$AH[l6]),n7||(n7=!d2(h4)||h4!==this._$AH[l6]),h4===b?t5=b:t5!==b&&(t5+=(h4??"")+o8[l6+1]),this._$AH[l6]=h4}n7&&!e10&&this.j(t5)}j(t5){t5===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t5??"")}};__name(S2,"S");var M=class extends S2{constructor(){super(...arguments),this.type=3}j(t5){this.element[this.name]=t5===b?void 0:t5}};__name(M,"M");var R=s3?s3.emptyScript:"",k=class extends S2{constructor(){super(...arguments),this.type=4}j(t5){t5&&t5!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}};__name(k,"k");var H=class extends S2{constructor(t5,i7,s6,e10,o8){super(t5,i7,s6,e10,o8),this.type=5}_$AI(t5,i7=this){var s6;if((t5=(s6=P(this,t5,i7,0))!==null&&s6!==void 0?s6:b)===x)return;let e10=this._$AH,o8=t5===b&&e10!==b||t5.capture!==e10.capture||t5.once!==e10.once||t5.passive!==e10.passive,n7=t5!==b&&(e10===b||o8);o8&&this.element.removeEventListener(this.name,this,e10),n7&&this.element.addEventListener(this.name,this,t5),this._$AH=t5}handleEvent(t5){var i7,s6;typeof this._$AH=="function"?this._$AH.call((s6=(i7=this.options)===null||i7===void 0?void 0:i7.host)!==null&&s6!==void 0?s6:this.element,t5):this._$AH.handleEvent(t5)}};__name(H,"H");var I=class{constructor(t5,i7,s6){this.element=t5,this.type=6,this._$AN=void 0,this._$AM=i7,this.options=s6}get _$AU(){return this._$AM._$AU}_$AI(t5){P(this,t5)}};__name(I,"I");var z=i2.litHtmlPolyfillSupport;z?.(C,N),((t2=i2.litHtmlVersions)!==null&&t2!==void 0?t2:i2.litHtmlVersions=[]).push("2.6.1");var Z=__name((t5,i7,s6)=>{var e10,o8;let n7=(e10=s6?.renderBefore)!==null&&e10!==void 0?e10:i7,l6=n7._$litPart$;if(l6===void 0){let t6=(o8=s6?.renderBefore)!==null&&o8!==void 0?o8:null;n7._$litPart$=l6=new N(i7.insertBefore(r3(),t6),t6,void 0,s6??{})}return l6._$AI(t5),l6},"Z");var l3,o4;var s4=class extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t5,e10;let i7=super.createRenderRoot();return(t5=(e10=this.renderOptions).renderBefore)!==null&&t5!==void 0||(e10.renderBefore=i7.firstChild),i7}update(t5){let i7=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t5),this._$Do=Z(i7,this.renderRoot,this.renderOptions)}connectedCallback(){var t5;super.connectedCallback(),(t5=this._$Do)===null||t5===void 0||t5.setConnected(!0)}disconnectedCallback(){var t5;super.disconnectedCallback(),(t5=this._$Do)===null||t5===void 0||t5.setConnected(!1)}render(){return x}};__name(s4,"s");s4.finalized=!0,s4._$litElement$=!0,(l3=globalThis.litElementHydrateSupport)===null||l3===void 0||l3.call(globalThis,{LitElement:s4});var n4=globalThis.litElementPolyfillSupport;n4?.({LitElement:s4});((o4=globalThis.litElementVersions)!==null&&o4!==void 0?o4:globalThis.litElementVersions=[]).push("3.2.2");var StylesManager=class{static isSelectorRegistered(s6){return this.staticStyles.has(s6)}static removeDynamicStyles(scopeSelector){this.dynamicStyles.delete(scopeSelector),StylesManager.render()}static addStaticStyles(st,scopeSelector){StylesManager.isSelectorRegistered(scopeSelector)||this.addStyles(st,scopeSelector,!1)}static addStyles(st,scopeSelector,dynamic=!0){if(!st||st.length==0)return;let stylesheets=[],cssText=st.map(z2=>z2.cssText).join(`
`),match=cssText.match(/\s*:host\(.*?\)/);for(;match;){let m3=match[0].trim(),newM=m3.substring(6,m3.length-1);cssText=cssText.replace(match[0],scopeSelector+newM),match=cssText.match(/\s*:host\(.*?\)/)}let match1=cssText.match(/\s*:host/);for(;match1;)cssText=cssText.replace(match1[0],scopeSelector),match1=cssText.match(/\s*:host/);let ss=new CSSStyleSheet;ss.replaceSync(cssText),stylesheets=[ss];let getCssText=__name(r5=>r5.selectorText.toLowerCase().startsWith(scopeSelector.toLowerCase())?r5.cssText:scopeSelector+" "+r5.cssText,"getCssText");for(let s6 of stylesheets)for(let r5 of s6.cssRules)if(r5.constructor===CSSStyleRule){let cssText2=getCssText(r5);this.__addStyleRule(scopeSelector,cssText2,dynamic)}else if(r5.constructor===CSSMediaRule){let mediaRule="@media "+r5.media.mediaText,cssRules=[];for(let mr of r5.cssRules)if(mr.constructor===CSSStyleRule){let css=getCssText(mr);cssRules.push(css)}else cssRules.push(mr.cssText);mediaRule+=`{
${cssRules.join(`
`)}
}`,this.__addStyleRule(scopeSelector,mediaRule,dynamic)}else this.__addStyleRule(scopeSelector,r5.cssText,dynamic);this.render()}static __addStyleRule(selector,style,dynamic){let map=dynamic?this.dynamicStyles:this.staticStyles;map.has(selector)||map.set(selector,[]),map.get(selector).push(style)}static render(){let newRules=[],ss=Array.from(this.dynamicStyles.values());for(let st of ss)for(let rule of st)newRules.push(rule);let styles=document.getElementById("styles");styles.innerHTML=newRules.join(`
`);for(let st of Array.from(this.staticStyles.keys()).filter(st2=>!this.renderedStatic.includes(st2))){let newStRules=[],_styles=this.staticStyles.get(st);for(let rule of _styles)newStRules.push(rule);let stStyles=document.createElement("style");stStyles.id=st,document.head.appendChild(stStyles),stStyles.innerHTML=newStRules.join(`
`),this.renderedStatic.push(st)}}};__name(StylesManager,"StylesManager");StylesManager.dynamicStyles=new Map;StylesManager.staticStyles=new Map;StylesManager.renderedStatic=[];var t3={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e4=__name(t5=>(...e10)=>({_$litDirective$:t5,values:e10}),"e"),i3=class{constructor(t5){}get _$AU(){return this._$AM._$AU}_$AT(t5,e10,i7){this._$Ct=t5,this._$AM=e10,this._$Ci=i7}_$AS(t5,e10){return this.update(t5,e10)}update(t5,e10){return this.render(...e10)}};__name(i3,"i");var e5=class extends i3{constructor(i7){if(super(i7),this.it=b,i7.type!==t3.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r5){if(r5===b||r5==null)return this._t=void 0,this.it=r5;if(r5===x)return r5;if(typeof r5!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r5===this.it)return this._t;this.it=r5;let s6=[r5];return s6.raw=s6,this._t={_$litType$:this.constructor.resultType,strings:s6,values:[]}}};__name(e5,"e");e5.directiveName="unsafeHTML",e5.resultType=1;var o5=e4(e5);var TdsLightElement=class extends s4{constructor(){super(...arguments),this.innerStyles=[]}connectedCallback(){super.connectedCallback();let _S=this.constructor.styles||[],st=Array.isArray(_S)?_S:[_S];StylesManager.addStaticStyles(st,this.tagName),this.id=this.id||this.tagName+"-"+Math.floor(Date.now()*Math.random()),this.setAttribute("id",this.id),this.innerContent=y`${o5(this.innerHTML)}`,this.innerHTML="",this.updateComplete.then(()=>{StylesManager.addStyles(this.innerStyles,this.tagName+"#"+this.id)})}disconnectedCallback(){this!=null&&this.tagName&&StylesManager.removeDynamicStyles(this.tagName+"#"+this.id),super.disconnectedCallback()}createRenderRoot(){return this}render(){return y`${this.innerContent}`}};__name(TdsLightElement,"TdsLightElement");var cssValuesOverrides=new Map;function setCssValuesOverrides(o8){cssValuesOverrides=o8}__name(setCssValuesOverrides,"setCssValuesOverrides");var cssProps=["alignContent","alignItems","alignSelf","alignmentBaseline","all","animation","animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction","backdropFilter","backfaceVisibility","background","backgroundAttachment","backgroundBlendMode","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundRepeatX","backgroundRepeatY","backgroundSize","baselineShift","blockSize","border","borderBlockEnd","borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth","borderBlockStart","borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth","borderBottom","borderBottomColor","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStyle","borderBottomWidth","borderCollapse","borderColor","borderImage","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderInlineEnd","borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth","borderInlineStart","borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth","borderLeft","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRadius","borderRight","borderRightColor","borderRightStyle","borderRightWidth","borderSpacing","borderStyle","borderTop","borderTopColor","borderTopLeftRadius","borderTopRightRadius","borderTopStyle","borderTopWidth","borderWidth","bottom","boxShadow","boxSizing","breakAfter","breakBefore","breakInside","bufferedRendering","captionSide","caretColor","clear","clip","clipPath","clipRule","color","colorInterpolation","colorInterpolationFilters","colorRendering","colorScheme","columnCount","columnFill","columnGap","columnRule","columnRuleColor","columnRuleStyle","columnRuleWidth","columnSpan","columnWidth","columns","contain","content","counterIncrement","counterReset","cursor","cx","cy","d","direction","display","dominantBaseline","emptyCells","fill","fillOpacity","fillRule","filter","flex","flexBasis","flexDirection","flexFlow","flexGrow","flexShrink","flexWrap","float","floodColor","floodOpacity","font","fontDisplay","fontFamily","fontFeatureSettings","fontKerning","fontOpticalSizing","fontSize","fontStretch","fontStyle","fontVariant","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariationSettings","fontWeight","gap","grid","gridArea","gridAutoColumns","gridAutoFlow","gridAutoRows","gridColumn","gridColumnEnd","gridColumnGap","gridColumnStart","gridGap","gridRow","gridRowEnd","gridRowGap","gridRowStart","gridTemplate","gridTemplateAreas","gridTemplateColumns","gridTemplateRows","height","hyphens","imageOrientation","imageRendering","inlineSize","isolation","justifyContent","justifyItems","justifySelf","left","letterSpacing","lightingColor","lineBreak","lineHeight","listStyle","listStyleImage","listStylePosition","listStyleType","margin","marginBlockEnd","marginBlockStart","marginBottom","marginInlineEnd","marginInlineStart","marginLeft","marginRight","marginTop","marker","markerEnd","markerMid","markerStart","mask","maskType","maxBlockSize","maxHeight","maxInlineSize","maxWidth","maxZoom","minBlockSize","minHeight","minInlineSize","minWidth","minZoom","mixBlendMode","objectFit","objectPosition","offset","offsetDistance","offsetPath","offsetRotate","opacity","order","orientation","orphans","outline","outlineColor","outlineOffset","outlineStyle","outlineWidth","overflow","overflowAnchor","overflowWrap","overflowX","overflowY","overscrollBehavior","overscrollBehaviorBlock","overscrollBehaviorInline","overscrollBehaviorX","overscrollBehaviorY","padding","paddingBlockEnd","paddingBlockStart","paddingBottom","paddingInlineEnd","paddingInlineStart","paddingLeft","paddingRight","paddingTop","page","pageBreakAfter","pageBreakBefore","pageBreakInside","paintOrder","perspective","perspectiveOrigin","placeContent","placeItems","placeSelf","pointerEvents","position","quotes","r","resize","right","rowGap","rx","ry","scrollBehavior","scrollMargin","scrollMarginBlock","scrollMarginBlockEnd","scrollMarginBlockStart","scrollMarginBottom","scrollMarginInline","scrollMarginInlineEnd","scrollMarginInlineStart","scrollMarginLeft","scrollMarginRight","scrollMarginTop","scrollPadding","scrollPaddingBlock","scrollPaddingBlockEnd","scrollPaddingBlockStart","scrollPaddingBottom","scrollPaddingInline","scrollPaddingInlineEnd","scrollPaddingInlineStart","scrollPaddingLeft","scrollPaddingRight","scrollPaddingTop","scrollSnapAlign","scrollSnapStop","scrollSnapType","shapeImageThreshold","shapeMargin","shapeOutside","shapeRendering","size","speak","src","stopColor","stopOpacity","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","tableLayout","textAlign","textAlignLast","textAnchor","textCombineUpright","textDecoration","textDecorationColor","textDecorationLine","textDecorationSkipInk","textDecorationStyle","textIndent","textOrientation","textOverflow","textRendering","textShadow","textSizeAdjust","textTransform","textUnderlinePosition","top","touchAction","transform","transformBox","transformOrigin","transformStyle","transition","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction","unicodeBidi","unicodeRange","userSelect","userZoom","vectorEffect","verticalAlign","visibility","webkitAlignContent","webkitAlignItems","webkitAlignSelf","webkitAnimation","webkitAnimationDelay","webkitAnimationDirection","webkitAnimationDuration","webkitAnimationFillMode","webkitAnimationIterationCount","webkitAnimationName","webkitAnimationPlayState","webkitAnimationTimingFunction","webkitAppRegion","webkitAppearance","webkitBackfaceVisibility","webkitBackgroundClip","webkitBackgroundOrigin","webkitBackgroundSize","webkitBorderAfter","webkitBorderAfterColor","webkitBorderAfterStyle","webkitBorderAfterWidth","webkitBorderBefore","webkitBorderBeforeColor","webkitBorderBeforeStyle","webkitBorderBeforeWidth","webkitBorderBottomLeftRadius","webkitBorderBottomRightRadius","webkitBorderEnd","webkitBorderEndColor","webkitBorderEndStyle","webkitBorderEndWidth","webkitBorderHorizontalSpacing","webkitBorderImage","webkitBorderRadius","webkitBorderStart","webkitBorderStartColor","webkitBorderStartStyle","webkitBorderStartWidth","webkitBorderTopLeftRadius","webkitBorderTopRightRadius","webkitBorderVerticalSpacing","webkitBoxAlign","webkitBoxDecorationBreak","webkitBoxDirection","webkitBoxFlex","webkitBoxOrdinalGroup","webkitBoxOrient","webkitBoxPack","webkitBoxReflect","webkitBoxShadow","webkitBoxSizing","webkitClipPath","webkitColumnBreakAfter","webkitColumnBreakBefore","webkitColumnBreakInside","webkitColumnCount","webkitColumnGap","webkitColumnRule","webkitColumnRuleColor","webkitColumnRuleStyle","webkitColumnRuleWidth","webkitColumnSpan","webkitColumnWidth","webkitColumns","webkitFilter","webkitFlex","webkitFlexBasis","webkitFlexDirection","webkitFlexFlow","webkitFlexGrow","webkitFlexShrink","webkitFlexWrap","webkitFontFeatureSettings","webkitFontSizeDelta","webkitFontSmoothing","webkitHighlight","webkitHyphenateCharacter","webkitJustifyContent","webkitLineBreak","webkitLineClamp","webkitLocale","webkitLogicalHeight","webkitLogicalWidth","webkitMarginAfter","webkitMarginBefore","webkitMarginEnd","webkitMarginStart","webkitMask","webkitMaskBoxImage","webkitMaskBoxImageOutset","webkitMaskBoxImageRepeat","webkitMaskBoxImageSlice","webkitMaskBoxImageSource","webkitMaskBoxImageWidth","webkitMaskClip","webkitMaskComposite","webkitMaskImage","webkitMaskOrigin","webkitMaskPosition","webkitMaskPositionX","webkitMaskPositionY","webkitMaskRepeat","webkitMaskRepeatX","webkitMaskRepeatY","webkitMaskSize","webkitMaxLogicalHeight","webkitMaxLogicalWidth","webkitMinLogicalHeight","webkitMinLogicalWidth","webkitOpacity","webkitOrder","webkitPaddingAfter","webkitPaddingBefore","webkitPaddingEnd","webkitPaddingStart","webkitPerspective","webkitPerspectiveOrigin","webkitPerspectiveOriginX","webkitPerspectiveOriginY","webkitPrintColorAdjust","webkitRtlOrdering","webkitRubyPosition","webkitShapeImageThreshold","webkitShapeMargin","webkitShapeOutside","webkitTapHighlightColor","webkitTextCombine","webkitTextDecorationsInEffect","webkitTextEmphasis","webkitTextEmphasisColor","webkitTextEmphasisPosition","webkitTextEmphasisStyle","webkitTextFillColor","webkitTextOrientation","webkitTextSecurity","webkitTextSizeAdjust","webkitTextStroke","webkitTextStrokeColor","webkitTextStrokeWidth","webkitTransform","webkitTransformOrigin","webkitTransformOriginX","webkitTransformOriginY","webkitTransformOriginZ","webkitTransformStyle","webkitTransition","webkitTransitionDelay","webkitTransitionDuration","webkitTransitionProperty","webkitTransitionTimingFunction","webkitUserDrag","webkitUserModify","webkitUserSelect","webkitWritingMode","whiteSpace","widows","width","willChange","wordBreak","wordSpacing","wordWrap","writingMode","x","y","zIndex","zoom"],CssAwareElement=class extends TdsLightElement{constructor(){super(...arguments),this.cssTargetSelector=":host",this.__cssPropTargetOverride=new Map,this.rules=new Map}connectedCallback(){super.connectedCallback();let attrsToRemove=[],rules=this.rules,self=this,cssSupports=__name((r5,selector)=>!window.isIe&&window.CSS!=null?CSS.supports(r5):cssProps.includes(self.__toCamelCase(selector)),"cssSupports");for(let a4 of this.attributes){let val=cssValuesOverrides.has(a4.value)?cssValuesOverrides.get(a4.value):a4.value,cssRule=`${a4.name}: ${val}`;if(a4.name!="class"&&cssSupports(cssRule,a4.name)){let cName=this.__toCamelCase(a4.name),target=this.__cssPropTargetOverride.has(cName)?this.__cssPropTargetOverride.get(cName):this.cssTargetSelector;rules.has(target)||rules.set(target,[]),rules.get(target).push(cssRule),attrsToRemove.push(a4.name)}}attrsToRemove.forEach(a4=>this.removeAttribute(a4));let styles=[];for(let k2 of Array.from(rules.keys())){let c4=rules.get(k2).join(`;
`);styles.push(`${k2}{ 
${c4};
}
`)}let s6=styles.join(`
`);this.innerStyles=[...this.innerStyles,i`${r(s6)}`]}__toCamelCase(str){return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(m3,chr)=>chr.toUpperCase())}};__name(CssAwareElement,"CssAwareElement");var e6=__name(async e10=>{throw Error("MessageBroker is not initialized")},"e"),Message=class{async send(){return await e6(this)}};__name(Message,"Message");var StatelessMessage=class extends Message{};__name(StatelessMessage,"StatelessMessage");var SharedMessage=class extends Message{};__name(SharedMessage,"SharedMessage");var SharedStatelessMessage=class extends StatelessMessage{};__name(SharedStatelessMessage,"SharedStatelessMessage");var ClearMessageState=class extends StatelessMessage{constructor(e10){super(),this.subject=e10}};__name(ClearMessageState,"ClearMessageState");var t4=new Map,s5=window;!s5||s5.constructor.toString()!="[object Window]"&&s5.constructor.name.toLowerCase()!="window"||(window.SMS=window.SMS||{},window.SMS.getState=()=>t4);function n5(e10){return t4.get(e10.name)}__name(n5,"n");var r4=[],a3=[];function o6(e10,t5,s6){if(!e10)throw Error("Need subjects!!!");let n7=new AbstractSubscriber(e10,t5,s6);return r4.push(n7),(t6=>{let s7=a3.filter(t7=>t7.type.name===e10);if(s7.length>0){n7.subject=s7[0].type,n7.resolved=!0;for(let e11 of s7)e11.addHandledCallback(()=>{t6.handle(e11.subject)})}})(n7),n7}__name(o6,"o");function l4(e10,t5,s6){if(!e10)throw Error("Need subjects!!!");let n7=new MessageSubscriber(e10,t5,s6,!1);return r4.push(n7),((e11,t6)=>{let s7=a3.filter(t7=>t7.type==e11);if(s7.length>0)for(let e12 of s7)e12.addHandledCallback(()=>{t6.handle(e12.subject)})})(e10,n7),n7}__name(l4,"l");function c3(e10){if(e10==null)return;let t5=r4.filter(t6=>t6.handlerCtx===e10);for(let e11 of t5){let t6=r4.indexOf(e11);r4.splice(t6,1)}}__name(c3,"c");var MessageSubscriber=class{constructor(e10,t5,s6,n7=!1){this.subject=e10,this.handlerCtx=s6,this.handlerCtx?this.handler=t5.bind(this.handlerCtx):this.handler=t5,this.handleChildren=n7}get hasPendingMessage(){return a3.some(e10=>e10.type==this.subject)}async handle(e10){try{await this.handler(e10)}catch(t5){console.groupCollapsed(`%cError in message handler: ${this.handler.name.replace("bound ","")}`,"color: #df6d6d; font-weight: bold; background-color: #290000;"),console.log(this),console.log(e10),console.error(t5),console.groupEnd()}}dispose(){(function(e10){let t5=r4.indexOf(e10);t5>-1&&r4.splice(t5,1)})(this)}sendLastState(){if(this.hasPendingMessage)return;let e10=n5(this.subject);return this.handle(e10),this}};__name(MessageSubscriber,"MessageSubscriber");var AbstractMessage=class extends Message{};__name(AbstractMessage,"AbstractMessage");var AbstractSubscriber=class extends MessageSubscriber{constructor(e10,t5,s6){super(AbstractMessage,t5,s6),this.isAbstract=!0,this.resolved=!1,this.subjClassName=e10}sendLastState(){if(this.hasPendingMessage)return;let e10=(s6=this.subjClassName,t4.get(s6));var s6;return this.handle(e10),this}};__name(AbstractSubscriber,"AbstractSubscriber");var PendingMessage=class{constructor(e10){var t5;this.isClearing=!1,this.subject=e10,this.__handledCallbacks=[],this.type=e10.constructor,this.subscribers=(t5=this.type,r4.filter(e11=>e11.subject===t5))}addHandledCallback(e10){this.__handledCallbacks.push(e10)}handledCallback(){for(let e10 of this.__handledCallbacks)e10()}};__name(PendingMessage,"PendingMessage");function i4(e10){try{if(e10===null)return null;if(e10===void 0)return;let t5;if(["string","boolean","symbol","number","bigint"].includes(typeof e10))return e10;if(e10 instanceof Array){t5=[...e10];for(let e11=0;e11<t5.length;e11++)t5[e11]=i4(t5[e11]);return t5}{let s6=Object.getPrototypeOf(e10);try{t5=Object.create(s6)}catch{throw new Error(`Can't create instance of ${s6.name}. 
        Class "${e10.constructor.name}" should have a default parameterless constructor or parameters in the constructor should be optional.`)}return Object.assign(t5,e10),Object.getOwnPropertyNames(t5).forEach(e11=>{typeof t5[e11]=="object"&&t5[e11]!==null&&(t5[e11]=i4(t5[e11]))}),t5}}catch(t5){throw Error("Can't clone subject: "+e10.constructor.name+"; Reason: "+t5.message)}}__name(i4,"i");var u2=new(__name(class{delete(e10){t4.delete(e10.name)}get(e10){return n5(e10)}set(e10){t4.set(e10.constructor.name,e10)}},"MessageStateManager")),d3=!1,g2=!0,h3=[],b2=[];e6=M2;var f2=new Map;async function M2(e10){if(e10){if(e10 instanceof Message){let t5,s6=new Promise(e11=>{t5=e11}),o8=e10.constructor;f2.has(o8)&&await f2.get(o8),f2.set(o8,s6);let l6=e10 instanceof StatelessMessage,c4=e10 instanceof SharedMessage||e10 instanceof SharedStatelessMessage?e10:i4(e10);(function(e11){let t6=r4.filter(t7=>t7 instanceof AbstractSubscriber&&t7.subjClassName===e11.name&&t7.resolved==0);for(let s7 of t6)s7.subject=e11,s7.resolved=!0})(o8);let S3=new PendingMessage(e10);if(S3.previousSubject=n5(o8),S3.sent=s6,a3.push(S3),e10.__isEmpty==1&&(S3.subject=null,S3.isClearing=!0,e10=null),e10 instanceof ClearMessageState){let t6=new e10.subject;t6.__isEmpty=!0,M2(t6)}return async function(e11,t6){let s7=e11.map(e12=>e12.handle(t6)),n7=null;return d3&&(n7=setTimeout(()=>{console.groupCollapsed(`%c[SMS]: Message handeling takes too long: ${t6.constructor.name}`,"color: #df6d6d; font-weight: bold; background-color: #290000;"),console.log(t6),console.log(e11),console.log(s7),g2&&(console.groupCollapsed("TRACE"),console.trace(),console.groupEnd()),console.groupEnd()},3e3)),await Promise.all(s7),d3&&n7!==null&&clearTimeout(n7),s7.length}(S3.subscribers,e10).then(s7=>{S3.handledCallback(),l6||e10==null||u2.set(c4),e10==null&&u2.delete(o8),function(e11){if(d3&&e11.type!=ClearMessageState&&(h3.length==0||h3.indexOf(e11.type.name)>-1)&&b2.indexOf(e11.type.name)==-1){let t6=e11.type.name;e11.isClearing==1&&(t6=ClearMessageState.name+`<${t6}>`);let s8="green",n8=!1;e11.subject instanceof StatelessMessage&&(s8="darkorange",n8=!0),console.groupCollapsed(`%c[SMS]: ${t6}`,"color: "+s8),n8||console.log("previous subject :",e11.previousSubject),console.log("subject :",e11.subject),console.log("subscribers :",e11.subscribers.map(e12=>({func:e12.handler,ctx:e12.handlerCtx}))),g2&&(console.groupCollapsed("TRACE"),console.trace(),console.groupEnd()),console.groupEnd()}}(S3);let n7=f2.get(S3.type);n7===S3.sent&&f2.delete(S3.type),n7=null;let r5=a3.indexOf(S3);return a3.splice(r5,1),S3=null,t5(s7),s7}),s6}throw Error(Object.getPrototypeOf(e10).constructor.name+" is not instance of "+Message.name)}}__name(M2,"M");try{let e10=window;e10&&(e10.constructor.toString()=="[object Window]"||e10.constructor.name.toLowerCase()=="window"||e10 instanceof WorkerGlobalScope)&&(e10.SMS=e10.SMS||{},e10.SMS.getSubscribers=()=>r4,e10.SMS.getPendingMessages=()=>a3,e10.SMS.stopDebugging=()=>d3=!1,e10.SMS.startDebugging=()=>d3=!0,e10.SMS.stopTracing=()=>g2=!1,e10.SMS.startTracing=()=>g2=!0)}catch{}var m2=new WeakMap,w2=new Map;var j=window;j.HTMLElement||(j.HTMLElement=class{});var y2=(E2=__name(function(e10){if(e10)return class extends e10{subscribe(e11,t5){return l4(e11,t5,this)}constructor(...e11){super(...e11);let t5=Array.from(w2.keys()).filter(e12=>this instanceof e12);for(let e12 of t5){let t6=w2.get(e12);for(let e13 of t6){let t7=l4(e13.subject,this[e13.listener],this);e13.sendLastState&&t7.sendLastState()}}}disposeSMS(){c3(this)}disconnectedCallback(){c3(this);let e11=super.disconnectedCallback;e11&&typeof e11=="function"&&e11.bind(this)()}}},"E"),e10=>{if(function(e11,t6){let s6=t6;for(;s6;){if(m2.get(s6)===e11)return!0;s6=Object.getPrototypeOf(s6)}return!1}(E2,e10))return e10;let t5=E2(e10);return m2.set(t5,E2),t5}),E2,SMSElement=class extends y2(HTMLElement){};__name(SMSElement,"SMSElement");var TdsElement=class extends y2(TdsLightElement){};__name(TdsElement,"TdsElement");var installRouter=__name(locationUpdatedCallback=>{document.body.addEventListener("click",e10=>{if(e10.defaultPrevented||e10.button!==0||e10.metaKey||e10.ctrlKey||e10.shiftKey)return;let anchor=e10.composedPath().filter(n7=>n7.tagName==="A")[0];if(!anchor||anchor.target||anchor.hasAttribute("download")||anchor.getAttribute("rel")==="external")return;let href=anchor.href;if(!href||href.indexOf("mailto:")!==-1)return;let location2=window.location,origin=location2.origin||location2.protocol+"//"+location2.host;href.indexOf(origin)===0&&(e10.preventDefault(),href!==location2.href&&(window.history.pushState({},"",href),locationUpdatedCallback(location2,e10)))}),window.addEventListener("popstate",e10=>locationUpdatedCallback(window.location,e10)),locationUpdatedCallback(window.location,null)},"installRouter");var UrlChanged=class extends Message{constructor(location2){super();this.location=location2.pathname,this.hash=location2.hash;let p2=this.parseUrl(this.location);this.parts=p2.parts,this.lang=p2.lang,this.page=p2.page,window.scrollTo(0,0)}parseUrl(url){let parts=url.split("/").filter(el=>el.length!=0),res={parts,lang:"nl",page:null};return parts.length==0?res.page="home":(parts.length==1||parts.length>=2)&&(res.page=parts[0]),res}isActivePage(url){let p2=this.parseUrl(url);return this.page==p2.page&&this.lang==p2.lang}};__name(UrlChanged,"UrlChanged");var UrlHashChanged=class extends Message{constructor(l6){super();this.hash=l6.hash,history.replaceState("",document.title,l6.pathname)}};__name(UrlHashChanged,"UrlHashChanged");var defaultCss=i`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0 0 20px;
    color: #333;
    line-height: 1.4;
  }

  h2 {
    line-height: 50px;
  }
  h3 {
    font-size: 35px !important;
    line-height: 40px !important;
  }
  h4 {
    font-size: 30px !important;
    line-height: 35px !important;
  }

  *::selection {
    color: #fff;
    background: #333;
    text-shadow: none;
  }
  p {
    margin: 0 0 20px;
    box-sizing: border-box;
    color: #282828;
  }
  a,
  a:visited {
    text-decoration: none;
    display: inline;
    margin: 0;
    color: inherit;
  }

  p.light {
    font-weight: 300;
  }

  tds-light-text,
  tds-lighter-text {
    display: inline-block;
    margin: 0 0 20px;
    margin-block-end: 20px;
    box-sizing: border-box;
    color: #282828;
    font-weight: 300;
  }

  tds-lighter-text {
    font-size: 14px;
  }

  tds-bold-text {
    display: inline-block;
    font-weight: 600;
    margin: 0 0 20px;
    margin-block-end: 20px;
    color: #333;
    line-height: 1.4;
  }
  tds-bold-text[justify] {
    text-align: justify;
  }
  tds-bold-text[start] {
    text-align: start;
  }

  tds-white-bold-text {
    display: inline-block;
    margin-block-end: 20px;
    font-weight: 600;
    color: white;
    letter-spacing: 0.5px;
    padding-bottom: 10px !important;
  }

  tds-red-bold-text {
    display: inline-block;
    margin-block-end: 20px;
    font-weight: 600;
    color: #f10252;
    letter-spacing: 0.5px;
  }

  tds-header-title {
    font-size: 60px;
    line-height: 1;
    text-align: center;
    padding-bottom: 8px;
  }

  a[underline] {
    text-decoration: underline;
  }

  /* from pages: */

  .section-content {
    width: 555px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  tds-separator-gradient {
    background-color: transparent;
    background-image: linear-gradient(240deg, #ff4a00 0%, #f10252 100%);
    width: 100vw;
    height: 40px;
    display: block;
  }

  @media only screen and (max-width: 768px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 10px !important;
      line-height: 1.2 !important;
    }

    h2 {
      font-size: 40px !important;
      line-height: 40px !important;
      margin-bottom: 20px !important;
      margin-top: 20px !important;
    }
    h3 {
      font-size: 35px !important;
      line-height: 40px !important;
      margin-bottom: 10px !important;
      margin-top: 10px !important;
    }
    tds-bold-text {
      line-height: 1.2 !important;
      padding-left: 10px;
      padding-right: 10px;
    }

    tds-header-title {
      font-size: 44px;
      padding-bottom: 6px;
    }

    tds-columns-block {
      padding: 10px !important;
    }
    tds-columns-block > * {
      width: 100% !important;
    }
  }
`;var e7=__name(e10=>n7=>typeof n7=="function"?((e11,n8)=>(customElements.define(e11,n8),n8))(e10,n7):((e11,n8)=>{let{kind:t5,elements:s6}=n8;return{kind:t5,elements:s6,finisher(n9){customElements.define(e11,n9)}}})(e10,n7),"e");var i5=__name((i7,e10)=>e10.kind==="method"&&e10.descriptor&&!("value"in e10.descriptor)?{...e10,finisher(n7){n7.createProperty(e10.key,i7)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e10.key,initializer(){typeof e10.initializer=="function"&&(this[e10.key]=e10.initializer.call(this))},finisher(n7){n7.createProperty(e10.key,i7)}},"i");function e8(e10){return(n7,t5)=>t5!==void 0?((i7,e11,n8)=>{e11.constructor.createProperty(n8,i7)})(e10,n7,t5):i5(e10,n7)}__name(e8,"e");var o7=__name(({finisher:e10,descriptor:t5})=>(o8,n7)=>{var r5;if(n7===void 0){let n8=(r5=o8.originalKey)!==null&&r5!==void 0?r5:o8.key,i7=t5!=null?{kind:"method",placement:"prototype",key:n8,descriptor:t5(o8.key)}:{...o8,key:n8};return e10!=null&&(i7.finisher=function(t6){e10(t6,n8)}),i7}{let r6=o8.constructor;t5!==void 0&&Object.defineProperty(o8,n7,t5(n7)),e10?.(r6,n7)}},"o");function i6(i7,n7){return o7({descriptor:o8=>{let t5={get(){var o9,n8;return(n8=(o9=this.renderRoot)===null||o9===void 0?void 0:o9.querySelector(i7))!==null&&n8!==void 0?n8:null},enumerable:!0,configurable:!0};if(n7){let n8=typeof o8=="symbol"?Symbol():"__"+o8;t5.get=function(){var o9,t6;return this[n8]===void 0&&(this[n8]=(t6=(o9=this.renderRoot)===null||o9===void 0?void 0:o9.querySelector(i7))!==null&&t6!==void 0?t6:null),this[n8]}}return t5}})}__name(i6,"i");var n6,e9=((n6=window.HTMLSlotElement)===null||n6===void 0?void 0:n6.prototype.assignedElements)!=null?(o8,n7)=>o8.assignedElements(n7):(o8,n7)=>o8.assignedNodes(n7).filter(o9=>o9.nodeType===Node.ELEMENT_NODE);var StickySeparator=class extends CssAwareElement{constructor(){super();this.offsetTop=100;this.windowYWhenSticky=void 0,window.addEventListener("scroll",()=>{if(this.windowYWhenSticky==null){var rect=this.getBoundingClientRect();rect.top>0&&rect.top<=102&&(this.windowYWhenSticky=new Number(window.pageYOffset))}window.pageYOffset>=this.windowYWhenSticky?this.style.position="fixed":this.style.position=""})}firstUpdated(){var rect=this.getBoundingClientRect();this.initialTop=rect.top}};__name(StickySeparator,"StickySeparator"),StickySeparator.styles=[i`
      :host {
        display: block;
        height: 30px;
        background-color: #2d2d2d;
        text-decoration: none;
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        width: 100%;
        top: 100px;
        font-size: 14px;
        display: flex;
        justify-content: center;
      }
      tds-sticky-separator a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        margin: 0px 20px;
        font-size: 14px;
        line-height: 30px;
      }

      tds-sticky-separator a:hover {
        color: red;
      }

      @media only screen and (max-width: 768px) {
        tds-sticky-separator a:last-child {
          min-width: 50px;
          overflow: hidden;
        }
      }
    `],__decorateClass([e8({type:Number})],StickySeparator.prototype,"offsetTop",2),StickySeparator=__decorateClass([e7("tds-sticky-separator")],StickySeparator);var ContactButtons=class extends CssAwareElement{createRenderRoot(){return this}render(){return y`
      <a href="/contact#message">
        <tds-button>MAAK KENNIS</tds-button>
      </a>

      <div class="icons">
        <a href="https://www.linkedin.com/company/traiectum-digital-solutions/">
          in
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 50 50"
            width="25px"
            height="25px"
          >
            <path
              d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"
            />
          </svg>
        </a>
        <a href="mailto:info@tdscompany.nl">
          mail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            fill="white"
            width="25"
            height="25"
          >
            <path
              d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
            />
          </svg>
        </a>
      </div>
    `}};__name(ContactButtons,"ContactButtons"),ContactButtons.styles=i`
    :host {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
    }

    .icons {
      margin-top: 15px;
    }

    svg {
      fill: white;
      cursor: pointer;
      margin: 0px 5px;
      -webkit-transition: fill 200ms linear;
      -ms-transition: fill 200ms linear;
      transition: fill 200ms linear;
    }

    svg:hover {
      fill: #ea4335;
    }

    a {
      font-size: 0px;
    }
  `,ContactButtons=__decorateClass([e7("tds-contact-buttons")],ContactButtons);var ContactCard=class extends CssAwareElement{createRenderRoot(){return this}render(){let formatPhone=this.phone;if(formatPhone!=""){let p2=formatPhone;formatPhone=`${p2[0]}${p2[1]}${p2[2]} (0)${p2[3]}${p2[4]} ${p2[5]}${p2[6]} ${p2[7]}${p2[8]} ${p2[9]}${p2[10]}${p2[11]}`}return y`
      <div class="top">
        <div class="ava">
          <a href="${this.linkedin}" target="_blank">
            <img src="${this.url}" alt="${this.name}" />
          </a>
        </div>
        <div class="names">
          <a href="${this.linkedin}" target="_blank">
            <tds-red-bold-text>${this.name}</tds-red-bold-text>
          </a>
          <div>
            <tds-lighter-text>${this.title}</tds-lighter-text>
          </div>
        </div>
      </div>
      <ul>
        <li><a href="mailto:${this.email}" class="email">${this.email}</a></li>
        <li>
          <a href="${this.linkedin}" target="_blank" class="linkedin"
            >LinkedIn</a
          >
        </li>
        <li><a href="tel:${this.phone}" class="phone">${formatPhone}</a></li>
      </ul>
    `}};__name(ContactCard,"ContactCard"),ContactCard.styles=i`
    :host {
      display: block;
      border-bottom: #f10252 solid 3px;
    }

    .top {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: space-between;
      align-items: center;
      justify-content: space-between;
      padding-left: 30px;
    }

    .ava {
      width: 30%;
    }

    .ava img {
      width: 100%;
    }

    .names {
      width: 70%;
      padding-left: 20px;
      text-align: left;
    }

    tds-red-bold-text {
      font-weight: 800;
      font-stretch: 100%;
      font-style: normal;
      font-variant-caps: normal;
      font-variant-east-asian: normal;
      font-variant-ligatures: normal;
      font-variant-numeric: normal;
      letter-spacing: normal;
    }

    ul {
      list-style: none;
      padding-left: 30px;
      padding-right: 30px;
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      color: #54595f;
    }

    ul > li {
      margin: 10px 0;
    }

    .email,
    .linkedin,
    .phone {
      padding-left: 28px;
      position: relative;
    }

    .email::before,
    .linkedin::before,
    .phone::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      top: 3px;
      width: 14px;
      height: 14px;
      background-repeat: no-repeat;
      background-size: 14px;
    }

    .email::before {
      background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiBmaWxsPSIjZjEwMjUyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjY0IDE1MDR2LTc2OHEtMzIgMzYtNjkgNjYtMjY4IDIwNi00MjYgMzM4LTUxIDQzLTgzIDY3dC04Ni41IDQ4LjUtMTAyLjUgMjQuNWgtMnEtNDggMC0xMDIuNS0yNC41dC04Ni41LTQ4LjUtODMtNjdxLTE1OC0xMzItNDI2LTMzOC0zNy0zMC02OS02NnY3NjhxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgxNDcycTEzIDAgMjIuNS05LjV0OS41LTIyLjV6bTAtMTA1MXYtMjQuNWwtLjUtMTMtMy0xMi41LTUuNS05LTktNy41LTE0LTIuNWgtMTQ3MnEtMTMgMC0yMi41IDkuNXQtOS41IDIyLjVxMCAxNjggMTQ3IDI4NCAxOTMgMTUyIDQwMSAzMTcgNiA1IDM1IDI5LjV0NDYgMzcuNSA0NC41IDMxLjUgNTAuNSAyNy41IDQzIDloMnEyMCAwIDQzLTl0NTAuNS0yNy41IDQ0LjUtMzEuNSA0Ni0zNy41IDM1LTI5LjVxMjA4LTE2NSA0MDEtMzE3IDU0LTQzIDEwMC41LTExNS41dDQ2LjUtMTMxLjV6bTEyOC0zN3YxMDg4cTAgNjYtNDcgMTEzdC0xMTMgNDdoLTE0NzJxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTEwODhxMC02NiA0Ny0xMTN0MTEzLTQ3aDE0NzJxNjYgMCAxMTMgNDd0NDcgMTEzeiIvPjwvc3ZnPg==");
    }
    .linkedin::before {
      background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiBmaWxsPSIjZjEwMjUyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNjUgMTQxNGgyMzF2LTY5NGgtMjMxdjY5NHptMjQ2LTkwOHEtMS01Mi0zNi04NnQtOTMtMzQtOTQuNSAzNC0zNi41IDg2cTAgNTEgMzUuNSA4NS41dDkyLjUgMzQuNWgxcTU5IDAgOTUtMzQuNXQzNi04NS41em01ODUgOTA4aDIzMXYtMzk4cTAtMTU0LTczLTIzM3QtMTkzLTc5cS0xMzYgMC0yMDkgMTE3aDJ2LTEwMWgtMjMxcTMgNjYgMCA2OTRoMjMxdi0zODhxMC0zOCA3LTU2IDE1LTM1IDQ1LTU5LjV0NzQtMjQuNXExMTYgMCAxMTYgMTU3djM3MXptNDY4LTk5OHY5NjBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtOTYwcS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di05NjBxMC0xMTkgODQuNS0yMDMuNXQyMDMuNS04NC41aDk2MHExMTkgMCAyMDMuNSA4NC41dDg0LjUgMjAzLjV6Ii8+PC9zdmc+");
    }
    .phone::before {
      background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiBmaWxsPSIjZjEwMjUyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNDA4IDExOTNxMC0xMS0yLTE2dC0xOC0xNi41LTQwLjUtMjUtNDcuNS0yNi41LTQ1LjUtMjUtMjguNS0xNXEtNS0zLTE5LTEzdC0yNS0xNS0yMS01cS0xNSAwLTM2LjUgMjAuNXQtMzkuNSA0NS0zOC41IDQ1LTMzLjUgMjAuNXEtNyAwLTE2LjUtMy41dC0xNS41LTYuNS0xNy05LjUtMTQtOC41cS05OS01NS0xNzAtMTI2LjV0LTEyNy0xNzAuNXEtMi0zLTguNS0xNHQtOS41LTE3LTYuNS0xNS41LTMuNS0xNi41cTAtMTMgMjAuNS0zMy41dDQ1LTM4LjUgNDUtMzkuNSAyMC41LTM2LjVxMC0xMC01LTIxdC0xNS0yNS0xMy0xOXEtMy02LTE1LTI4LjV0LTI1LTQ1LjUtMjYuNS00Ny41LTI1LTQwLjUtMTYuNS0xOC0xNi0ycS00OCAwLTEwMSAyMi00NiAyMS04MCA5NC41dC0zNCAxMzAuNXEwIDE2IDIuNSAzNHQ1IDMwLjUgOSAzMyAxMCAyOS41IDEyLjUgMzMgMTEgMzBxNjAgMTY0IDIxNi41IDMyMC41dDMyMC41IDIxNi41cTYgMiAzMCAxMXQzMyAxMi41IDI5LjUgMTAgMzMgOSAzMC41IDUgMzQgMi41cTU3IDAgMTMwLjUtMzR0OTQuNS04MHEyMi01MyAyMi0xMDF6bTI1Ni03Nzd2OTYwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTk2MHEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtOTYwcTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg5NjBxMTE5IDAgMjAzLjUgODQuNXQ4NC41IDIwMy41eiIvPjwvc3ZnPg==");
    }

    @media only screen and (max-width: 768px) {
      .top {
        flex-direction: column;
        padding-left: 0;
      }
      .ava {
        width: 160px;
      }
      .names {
        width: 100%;
        padding-left: 0;
      }
      .names {
        text-align: center;
      }
    }
  `,__decorateClass([e8({type:String})],ContactCard.prototype,"url",2),__decorateClass([e8({type:String})],ContactCard.prototype,"name",2),__decorateClass([e8({type:String})],ContactCard.prototype,"title",2),__decorateClass([e8({type:String})],ContactCard.prototype,"email",2),__decorateClass([e8({type:String})],ContactCard.prototype,"linkedin",2),__decorateClass([e8({type:String})],ContactCard.prototype,"phone",2),ContactCard=__decorateClass([e7("tds-contact-card")],ContactCard);var mailto="info@tdscompany.nl",subject=encodeURI("TDS_homepage Contact Form Request"),ContactForm=class extends CssAwareElement{constructor(){super();this.success=!1}createRenderRoot(){return this}render(){return y`
      <form
        id="form"
        method="post"
        enctype="text/plain"
        action="mailto:${mailto}?subject=${subject}"
        @submit="${this.onformsubmit}"
      >
        <label for="name" class="required">Naam</label>
        <input
          type="text"
          id="name"
          name="name"
          minlength="2"
          maxlength="100"
          required
        />

        <label for="email" class="required">Email</label>
        <input type="email" id="email" name="email" maxlength="100" required />

        <label for="msg" class="required">Bericht</label>
        <textarea
          rows="5"
          id="msg"
          name="msg"
          minlength="10"
          maxlength="1000"
          required
        ></textarea>

        <button type="submit" name="submit">
          <tds-button margin="0 auto">Verzenden</tds-button>
        </button>
        <input type="reset" name="reset" value="Clear Form" hidden />
      </form>

      <div class="success-box" ?hidden="${!this.success}">
        Please follow the instructions in your default email client and send
        auto-generated email. Thanks for contacting us! We will be in touch with
        you shortly.
      </div>
    `}resetForm(){setTimeout(()=>{typeof this.form.reset=="function"&&this.form.reset(),this.form.reset instanceof HTMLInputElement&&this.form.reset.click()},100)}onformsubmit(){this.success=!0,this.isMobileChrome()?this.processMobileClick():this.resetForm()}isMobileChrome(){let ua=navigator.userAgent,isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua),isChrome=/Chrome/i.test(ua);return isMobile&&isChrome}processMobileClick(){let name=this.form.name?this.form.name.value:"",email=this.form.email?this.form.email.value:"",msg=this.form.msg?this.form.msg.value:"",body=encodeURIComponent(`name: ${name}
email: ${email}
msg: ${msg}`),linkElement=document.createElement("a");linkElement.style.visibility="hidden",linkElement.style.position="absolute",linkElement.href=`mailto:${mailto}?subject=${subject}&body=${body}`,document.body.appendChild(linkElement),linkElement.click(),linkElement.remove(),this.resetForm()}};__name(ContactForm,"ContactForm"),ContactForm.styles=i`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      text-align: center;
      color: #7a7a7a;
      width: 100%;
      max-width: 400px;
      min-width: 200px;
    }

    *[hidden] {
      display: none;
    }

    label {
      display: block;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.3;
      margin: 10px 0 3px 0;
    }

    .required::after {
      content: "*";
      color: red;
      display: inline;
      margin-left: 5px;
    }

    input,
    textarea {
      display: block;
      font-size: 16px;
      border: 1px solid #ccc;
      padding: 6px 10px;
      width: 100%;
      line-height: 1.3;
    }

    input {
      height: 38px;
    }

    button[type="submit"] {
      margin-top: 20px;
      background: none;
      border: none;
    }

    .success-box {
      margin: 20px 0;
      background: #e0ffc7;
      border: 1px solid #b4d39b;
      color: #333;
      padding: 15px 15px;
    }
  `,__decorateClass([e8({type:Boolean})],ContactForm.prototype,"success",2),__decorateClass([i6("#form")],ContactForm.prototype,"form",2),ContactForm=__decorateClass([e7("tds-contact-from")],ContactForm);var ContactMap=class extends CssAwareElement{constructor(){super();this.clicked=!1}createRenderRoot(){return this}render(){return y`
      <div
        class="overlay"
        ?hidden="${this.clicked}"
        @click="${()=>this.clicked=!0}"
      ></div>
      <iframe
        id="map"
        height="300"
        frameborder="0"
        scrollwheel="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=5.088622570037843%2C52.05980659634847%2C5.097634792327881%2C52.06417326755412&amp;layer=mapnik&amp;marker=52.06198998531515%2C5.093128681182861"
      ></iframe>
      <div class="address">
        <a href="https://goo.gl/maps/9pthvJpBGMQ2" target="_blank">
          <strong>Bezoekadres:</strong><br />
          Papendorpseweg 95<br />
          3528 BJ Utrecht
        </a>
      </div>
    `}};__name(ContactMap,"ContactMap"),ContactMap.styles=i`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      position: relative;
    }

    *[hidden] {
      display: none;
    }

    #map {
      border: 1px solid lightgray;
      width: 100%;
    }

    .overlay {
      cursor: pointer;
      background: transparent;
      position: absolute;
      width: 100%;
      height: 300px;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
    }

    .address {
      font-size: 14px;
      text-align: left;
      line-height: 1.8em;
    }
  `,__decorateClass([e8({type:Boolean})],ContactMap.prototype,"clicked",2),ContactMap=__decorateClass([e7("tds-contact-map")],ContactMap);var __decorate=function(decorators,target,key,desc){var c4=arguments.length,r5=c4<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d4;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r5=Reflect.decorate(decorators,target,key,desc);else for(var i7=decorators.length-1;i7>=0;i7--)(d4=decorators[i7])&&(r5=(c4<3?d4(r5):c4>3?d4(target,key,r5):d4(target,key))||r5);return c4>3&&r5&&Object.defineProperty(target,key,r5),r5},TdsButton=__name(class extends CssAwareElement{},"TdsButton");TdsButton.styles=i`
    :host {
      background-image: linear-gradient(
        90deg,
        rgb(241, 2, 82) 0%,
        rgb(255, 74, 0) 100%
      );
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 7px 1px;
      box-sizing: border-box;
      color: white;
      display: block;
      font-size: 18px;
      font-stretch: 100%;
      font-weight: bold;
      height: 36px;
      line-height: 36px;
      padding: 0px 10px;
      letter-spacing: 2.2px;

      text-align: center;
      min-width: 200px;
      text-transform: uppercase;
      cursor: pointer;

      -webkit-transition: font-size 150ms linear;
      -ms-transition: font-size 150ms linear;
      transition: font-size 150ms linear;

      display: flex;
      align-items: center;
      align-content: center;
      text-align: center;
      justify-content: center;
      margin-top: 20px;
    }

    :host(:hover) {
      font-size: 15px;
    }
    @media only screen and (max-width: 768px) {
      :host {
        margin: 20px auto !important;
      }
    }
  `;TdsButton=__decorate([e7("tds-button")],TdsButton);var __decorate2=function(decorators,target,key,desc){var c4=arguments.length,r5=c4<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d4;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r5=Reflect.decorate(decorators,target,key,desc);else for(var i7=decorators.length-1;i7>=0;i7--)(d4=decorators[i7])&&(r5=(c4<3?d4(r5):c4>3?d4(target,key,r5):d4(target,key))||r5);return c4>3&&r5&&Object.defineProperty(target,key,r5),r5},itemWidth=300,Carousel=__name(class extends CssAwareElement{createRenderRoot(){return this}firstUpdated(){this._firstUpdated=!0}ajdustWrapper(){if(!this._firstUpdated)return;let wrap=this.renderRoot,halfWidth=wrap.clientWidth/itemWidth,correction=Math.floor(halfWidth)%2==0?0:150,offset=(Math.ceil(halfWidth)*itemWidth-wrap.clientWidth)/2+correction;this.carousel.style.marginLeft=`-${offset}px`}connectedCallback(){super.connectedCallback(),this._urls=this.urls,this.removeAttribute("urls"),this.inter1=setInterval(()=>{if(!this._firstUpdated)return;let c4=this.carousel;c4.firstElementChild.style.marginLeft="-300px"},2700),this.inter2=setInterval(()=>{if(!this._firstUpdated)return;let c4=this.carousel,el=c4.firstElementChild;el.style.marginLeft="0px",c4.appendChild(el)},3e3),this.__ajdustWrapper=this.ajdustWrapper.bind(this),window.addEventListener("resize",this.__ajdustWrapper),this.updateComplete.then(()=>this.ajdustWrapper())}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.inter1),clearInterval(this.inter2),window.removeEventListener("resize",this.__ajdustWrapper)}render(){let imgs=this._urls.map((u3,i7)=>y`<div class="img" style='background-image: url("${u3}");'></div>`);return y`
      <div id="c" style="width: ${imgs.length*itemWidth+"px;"}">
        ${imgs}
      </div>
    `}},"Carousel");Carousel.styles=[i`
      :host {
        display: block;
        width: 100%;
        overflow: hidden;
      }

      #c {
        display: flex;
        position: relative;
        flex-direction: row;
        overflow-x: hidden;
      }

      .img {
        width: ${itemWidth}px;
        height: 170px;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-transition: margin-left 300ms linear;
        -ms-transition: margin-left 300ms linear;
        transition: margin-left 300ms linear;
      }

      .tns-controls,
      .tns-nav,
      button[data-action] {
        display: none;
      }
    `];__decorate2([i6("#c")],Carousel.prototype,"carousel",void 0);__decorate2([e8({type:Array})],Carousel.prototype,"urls",void 0);Carousel=__decorate2([e7("tds-carousel")],Carousel);var __decorate3=function(decorators,target,key,desc){var c4=arguments.length,r5=c4<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d4;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r5=Reflect.decorate(decorators,target,key,desc);else for(var i7=decorators.length-1;i7>=0;i7--)(d4=decorators[i7])&&(r5=(c4<3?d4(r5):c4>3?d4(target,key,r5):d4(target,key))||r5);return c4>3&&r5&&Object.defineProperty(target,key,r5),r5},cStyles=i`
  .c {
    max-width: 50%;
    text-align: center;
  }

  .c > * {
    max-width: 100%;
  }

  :host([align-start]) .c {
    align-items: flex-start;
    align-content: flex-start;
    text-align: start;
    align-self: flex-start;
  }
  :host([align-end]) .c {
    align-items: flex-end;
    align-content: flex-end;
    text-align: end;
    align-self: flex-end;
  }

  @media only screen and (max-width: 768px) {
    .c {
      flex-direction: column !important;
      align-items: center !important;
      align-content: center !important;
      text-align: center !important;
      align-self: center !important;
      max-width: 95% !important;
      padding: 20px 0px !important;
      margin: 0px !important;
    }

    :host {
      justify-content: center !important;
    }
  }
`,ContainerBase=class extends CssAwareElement{constructor(){super(...arguments),this.cssTargetSelector=".c",this.__cssPropTargetOverride=new Map(["background","backgroundAttachment","backgroundBlendMode","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundRepeatX","backgroundRepeatY","backgroundSize"].map(c4=>[c4,":host"]))}connectedCallback(){let contentWidth=this.hasAttribute("contentwidth")?this.attributes.contentwidth.value:"50%";this.rules.has(this.cssTargetSelector)||this.rules.set(this.cssTargetSelector,[]),this.rules.get(this.cssTargetSelector).push(`max-width: ${contentWidth}`),super.connectedCallback()}render(){return y` <div class="c">${this.innerContent}</div> `}};__name(ContainerBase,"ContainerBase");var LeftBlock=__name(class extends ContainerBase{},"LeftBlock");LeftBlock.styles=[i`
      :host {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        box-sizing: border-box;
      }
    `,cStyles];LeftBlock=__decorate3([e7("tds-left-block")],LeftBlock);var RightBlock=__name(class extends ContainerBase{},"RightBlock");RightBlock.styles=[i`
      :host {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        align-content: flex-end;
        box-sizing: border-box;
      }
    `,cStyles];RightBlock=__decorate3([e7("tds-right-block")],RightBlock);var CenterdedBlock=__name(class extends ContainerBase{},"CenterdedBlock");CenterdedBlock.styles=[i`
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        box-sizing: border-box;
      }
    `,cStyles];CenterdedBlock=__decorate3([e7("tds-centered-block")],CenterdedBlock);var WideBlock=__name(class extends CssAwareElement{},"WideBlock");WideBlock.styles=[i`
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-content: flex-start;
        text-align: center;
        box-sizing: border-box;
      }

      @media only screen and (max-width: 768px) {
        :host {
          margin: 20px 0 !important;
          padding: 0px !important;
        }
      }
    `];WideBlock=__decorate3([e7("tds-wide-block")],WideBlock);var ColumnsBlock=__name(class extends CssAwareElement{connectedCallback(){this.hasAttribute("align-start")&&(this.rules.has(":host")||this.rules.set(":host",[]),this.rules.get(":host").push("text-align: start"),this.removeAttribute("align-start")),this.hasAttribute("align-end")&&(this.rules.has(":host")||this.rules.set(":host",[]),this.rules.get(":host").push("text-align: end"),this.removeAttribute("align-end"));let colPadding=this.hasAttribute("colpadding")?this.attributes.colpadding.value:"0px",colMargin=this.hasAttribute("colmargin")?this.attributes.colmargin.value:"0px",colWidth=this.hasAttribute("colwidth")?this.attributes.colwidth.value:"50%",colMinWidth=this.hasAttribute("colminwidth")?this.attributes.colminwidth.value:"300px";this.removeAttribute("colpadding"),this.removeAttribute("colmargin"),this.removeAttribute("colwidth"),this.removeAttribute("colminwidth"),this.innerStyles.push(i`
        ${r(`:host>*{
min-width: ${colMinWidth}; 
width: ${colWidth}; 
margin: ${colMargin}; 
padding: ${colPadding}; 
}`)}
      `),super.connectedCallback()}},"ColumnsBlock");ColumnsBlock.styles=[i`
      * {
        box-sizing: border-box;
      }
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        box-sizing: border-box;
        flex-wrap: wrap;
        vertical-align: middle;
        align-items: center;
      }
    `];ColumnsBlock=__decorate3([e7("tds-columns-block")],ColumnsBlock);var BlogBlock=__name(class extends CssAwareElement{},"BlogBlock");BlogBlock.styles=[i`
      * {
        box-sizing: border-box;
      }
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        box-sizing: border-box;
        flex-wrap: wrap;
        vertical-align: middle;
        align-items: center;
      }

      .call-to-action {
        min-width: 100px;
        max-width: 250px;
        padding: 25px;
        margin-right: 20px;
        height: 100vh;
        align-self: baseline;
      }
      .blog-content {
        min-width: 40vw;
        max-width: 50vw;
        text-align: left;
        color: rgb(51, 51, 51);
        padding-top: 25px;
      }
      .blog-content > H3 {
        font-size: 28px;
      }
      .blog-content > p {
        color: rgb(51, 51, 51);
        line-height: 1.9;
        font-size: 21px;
      }

      @media (max-width: 850px) {
        .call-to-action {
          display: none;
        }
        .blog-content {
          min-width: 75vw;
          max-width: 80vw;
        }
      }
    `];BlogBlock=__decorate3([e7("tds-blog-block")],BlogBlock);var __decorate4=function(decorators,target,key,desc){var c4=arguments.length,r5=c4<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d4;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r5=Reflect.decorate(decorators,target,key,desc);else for(var i7=decorators.length-1;i7>=0;i7--)(d4=decorators[i7])&&(r5=(c4<3?d4(r5):c4>3?d4(target,key,r5):d4(target,key))||r5);return c4>3&&r5&&Object.defineProperty(target,key,r5),r5},TdsFloating=__name(class extends CssAwareElement{connectedCallback(){let moveX=this.hasAttribute("movex")?this.attributes.movex.value:"0px",moveY=this.hasAttribute("movey")?this.attributes.movey.value:"0px",mt=moveY.startsWith("-")?moveY.substr(1):"-"+moveY,src=this.hasAttribute("src")?this.attributes.src.value:"",c4=`${this.cssTargetSelector} { margin-top: ${mt}; margin-left: ${moveX}; background-image: url("${src}");}`;this.innerStyles.push(i`
        ${r(c4)}
      `),this.removeAttribute("src"),this.removeAttribute("movex"),this.removeAttribute("movey"),super.connectedCallback()}},"TdsFloating");TdsFloating.styles=i`
    :host {
      display: block;
      position: absolute;
      width: 300px;
      height: 200px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }

    @media (max-width: 768px) {
      :host {
        max-width: 100%;
        width: 100% !important;
        position: relative !important;
        margin-top: 0px !important;
        margin-left: 0px !important;
      }
    }
  `;TdsFloating=__decorate4([e7("tds-floating-image")],TdsFloating);var __decorate5=function(decorators,target,key,desc){var c4=arguments.length,r5=c4<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d4;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r5=Reflect.decorate(decorators,target,key,desc);else for(var i7=decorators.length-1;i7>=0;i7--)(d4=decorators[i7])&&(r5=(c4<3?d4(r5):c4>3?d4(target,key,r5):d4(target,key))||r5);return c4>3&&r5&&Object.defineProperty(target,key,r5),r5},PageHeader=__name(class extends CssAwareElement{constructor(){super(...arguments),this.cssTargetSelector=".content"}connectedCallback(){super.connectedCallback();let bgImage=this.hasAttribute("bgimage")?this.attributes.bgimage.value:"";this.innerStyles.push(i`
      :host {
        background-image: url("${r(bgImage)}");
      }
    `),this.removeAttribute("bgimage")}render(){return y`
      <div class="bg-overlay"></div>
      <div class="content">${this.innerContent}</div>
    `}},"PageHeader");PageHeader.styles=[i`
      :host {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        width: 100%;
        z-index: 1;
        animation-name: fadeIn;
        animation-duration: 1.25s;
        box-sizing: border-box;
        position: relative;
      }

      @keyframes zoomIn {
        0% {
          opacity: 0;
          transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }

      .bg-overlay {
        background-color: transparent;
        background-image: linear-gradient(
          180deg,
          rgba(0, 2, 81, 0.97) 0%,
          #03000c 100%
        );

        position: absolute;
        z-index: 2;

        opacity: 0.6;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
      }

      .content {
        z-index: 1000;
        animation-name: zoomIn;
        animation-duration: 0.75s;
        width: 75%;
        color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        box-sizing: border-box;
      }

      @media only screen and (max-width: 768px) {
        :host {
          margin: 0px;
          padding: 0px;
        }

        .content {
          padding: 0px !important;
          padding-top: 110px !important;
        }

        tds-page-header .content > * {
          margin: 0px !important;
        }
      }
    `];PageHeader=__decorate5([e7("tds-page-header")],PageHeader);var __decorate6=function(decorators,target,key,desc){var c4=arguments.length,r5=c4<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d4;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r5=Reflect.decorate(decorators,target,key,desc);else for(var i7=decorators.length-1;i7>=0;i7--)(d4=decorators[i7])&&(r5=(c4<3?d4(r5):c4>3?d4(target,key,r5):d4(target,key))||r5);return c4>3&&r5&&Object.defineProperty(target,key,r5),r5},BlogboxContainer=__name(class extends CssAwareElement{connectedCallback(){super.connectedCallback();let bgImage=this.hasAttribute("bgimage")?this.attributes.bgimage.value:"";this.innerStyles.push(i`
      .bb-image-container {
        background-image: url("${r(bgImage)}");
      }
    `),this.removeAttribute("bgimage"),this._header=this.header,this.removeAttribute("header"),this._author=this.author,this.removeAttribute("author"),this._minutes=this.minutes,this.removeAttribute("minutes"),this._blogLink=this.blogLink,this.removeAttribute("blogLink")}render(){return y`
      <a class="image-link" href="${this._blogLink}"
        ><div class="bb-image-container"></div
      ></a>
      <div class="bb-text-container">
        <div class="bb-inner-text-container">
          <a class="bb-text-header" href="${this._blogLink}">
            ${this._header}</a
          >
          <div class="bb-text-content">
            ${this.innerContent} <a href="${this._blogLink}">Lees verder ...</a>
          </div>
        </div>
        <div class="bb-text-footer">
          <img
            class="footer-img"
            src="/images/blog/klok.svg"
            alt="read_timer"
          />
          <div class="footer-label">
            ${this._minutes} ${" "} <tds-localize>minutes</tds-localize>
          </div>
          <img
            class="footer-img"
            src="/images/blog/veer.svg"
            alt="auth_pencil"
          />
          <div class="footer-label">${this._author}</div>
        </div>
      </div>
    `}},"BlogboxContainer");BlogboxContainer.styles=[i`
      :host {
        justify-content: center;
        align-content: center;
        margin-bottom: 20px;
        height: 430px;
        overflow: hidden;
      }

      :host(:hover) .bb-inner-text-container {
        -webkit-transform: translateY(-125px);
        -o-transform: translateY(-125px);
        transform: translateY(-125px);
        transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
      }

      :host(:hover) .bb-text-content {
        visibility: visible !important;
        opacity: 1 !important;
      }

      .bb-image-container {
        height: 210px;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      .bb-text-header {
        display: flex;
        justify-content: center;
        padding: 10px;
        color: #282828;
        font-family: "Roboto", Sans-serif;
        font-size: 17px;
        font-weight: bold;
        text-align: center;
      }
      .bb-inner-text-container {
        background: white;
        transition: 0.5s;
      }

      .bb-text-container {
        height: 220px;
        background: #fff;
        display: flex;
        flex-direction: column;
        top: 0;
        max-width: 370px !important;
      }

      .bb-text-content {
        color: #7a7a7a;
        font-size: 13px;
        height: 115px;
        visibility: hidden;
        padding: 5px;
        justify-content: center;
        opacity: 0;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
      }

      .bb-text-footer {
        color: rgb(85 85 85 / 35%);
        font-family: "Roboto", Sans-serif;
        font-size: 15px;
        font-weight: 100;
        z-index: 2;

        max-height: 30px;
        font-size: 14px;
        display: flex;
        justify-content: center;
      }

      .footer-img {
        height: 17px;
        width: 17px;
        margin-right: 10px;
        color: #555555;
        fill: #555555;
      }
      .footer-label {
        margin-right: 20px;
      }
    `];__decorate6([e8({type:String})],BlogboxContainer.prototype,"header",void 0);__decorate6([e8({type:String})],BlogboxContainer.prototype,"author",void 0);__decorate6([e8({type:String})],BlogboxContainer.prototype,"minutes",void 0);__decorate6([e8({type:String})],BlogboxContainer.prototype,"blogLink",void 0);BlogboxContainer=__decorate6([e7("tds-blogbox-container")],BlogboxContainer);var MenuItemClicked=class extends StatelessMessage{constructor(h4){super(),this.page=h4}};__name(MenuItemClicked,"MenuItemClicked");var MenuItem=class{updateActive(msg){if(msg!=null&&msg.page!=null&&msg.isActivePage!=null){let p2=msg==null||msg.page==null?"":msg.page;msg.isActivePage(this.pathname)?this.a.setAttribute("active","active"):this.a.removeAttribute("active")}else this.a.removeAttribute("active")}firstUpdated(){if(!this.a.nextElementSibling){let sm=this.a.querySelector("tds-sub-menu");sm&&(sm.style.right="0px")}}constructor(a4){this.pathname=a4.pathname,this.a=a4;var observer=new MutationObserver(mutations=>{mutations.forEach(mutation=>{mutation.type=="attributes"&&(this.pathname=a4.pathname)})});observer.observe(a4,{attributes:!0}),a4.addEventListener("click",e10=>{if(e10.stopImmediatePropagation(),e10.stopPropagation(),e10.preventDefault(),new MenuItemClicked(a4.pathname).send(),a4.href!=null){window.history.pushState({},a4.innerText,a4.pathname);let event;typeof PopStateEvent=="function"?event=new PopStateEvent("popstate"):(event=document.createEvent("Event"),event.initEvent("popstate",!0,!0)),window.dispatchEvent(event)}return!1}),this.UrlCahngedSubs=o6("UrlChanged",this.updateActive.bind(this),a4).sendLastState()}};__name(MenuItem,"MenuItem");var itemStyles=__name(m3=>i`
  a[is="tds-menu-item"],
  tds-sub-menu {
    vertical-align: bottom;
    display: block;
    cursor: pointer;
    margin: 5px 16px;
    color: var(--top-bar-color, white);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.9px;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    -webkit-transition: color 200ms ease-out;
    -ms-transition: color 200ms ease-out;
    transition: color 200ms ease-out;
    position: relative;
  }

  a[is="tds-menu-item"]:hover,
  a[is="tds-menu-item"]:hover svg,
  .menu[scrolled] a[is="tds-menu-item"]:hover svg,
  tds-sub-menu:hover::after,
  tds-sub-menu[active]::after {
    color: #f10252 !important;
    fill: #f10252 !important;
  }

  a[is="tds-menu-item"]:hover::after,
  a[is="tds-menu-item"][active]::after {
    content: "";
    position: absolute;
    background: linear-gradient(to right, #f10252, #ff4a00);
    border-radius: 50px;
    height: 7px;
    width: 100%;
    bottom: -3px;
    left: 0;
    right: 0;
  }
  tds-sub-menu {
    height: 30px;
    display: flex;
    cursor: pointer;
    margin: 0px 16px;
    position: relative;
    align-items: center;
    padding-top: 0px;
  }
  tds-sub-menu::after {
    content: "⌄";
    display: flex;
    align-self: baseline;
    margin-left: -15px;
    -webkit-font-smoothing: antialiased;
    -webkit-transition: color 200ms ease-out;
    -ms-transition: color 200ms ease-out;
  }

  tds-sub-menu svg {
    width: 20px;
    height: 20px;
    fill: white;
    -webkit-transition: fill 200ms ease-out;
    -ms-transition: fill 200ms ease-out;
    transition: fill 200ms ease-out;
  }

  .menu[scrolled] tds-sub-menu svg {
    fill: #474747;
    margin-right: 2px;
  }

  tds-sub-menu > a[is="tds-menu-item"]:hover::after,
  tds-sub-menu > a[is="tds-menu-item"][active]::after {
    display: none;
  }

  tds-sub-ddl {
    top: 30px;
    left: 0px;
    display: none;
    position: absolute;
    z-index: 99999;
    padding: 10px 0px;
    overflow: hidden;
    background-color: white;
    box-shadow: -1px 2px 6px 0px #00000054;
  }

  tds-sub-menu:hover tds-sub-ddl {
    display: block;
  }

  tds-sub-menu > a[is="tds-menu-item"] {
    display: inherit;
  }

  tds-sub-ddl > a[is="tds-menu-item"] {
    display: inherit;
    margin: 10px 20px;
    color: #474747;
    height: auto;
    line-height: 21px;
    font-size: small;
  }

  /* a[is=tds-menu-item]:hover>a[is=tds-menu-item]{
			display: block;
			position:absolute;
			z-index: 99999;		
			background-color: white;					
		} */

  @media only screen and (max-width: ${m3}px) {
    tds-sub-menu::after {
      display: none;
    }
    a[is="tds-menu-item"] {
      color: #474747;
      margin: 15px;
    }

    a[is="tds-menu-item"]:hover::after,
    a[is="tds-menu-item"][active]::after {
      height: 20px;
      width: 7px;
      top: 0;
      right: unset;
      bottom: 0;
      left: -10px;
    }

    tds-sub-menu {
      display: block;
      margin: 0px;
      height: auto;
    }
    tds-sub-menu > a[is="tds-menu-item"] {
      display: flex;
      margin-left: 15px;
      margin-bottom: 5px;
    }

    tds-sub-menu svg {
      fill: #474747;
    }
    tds-sub-ddl {
      top: 0px;
      margin-left: 20px;
      display: block;
      position: relative;
      box-shadow: none;
    }
  }
`,"itemStyles");var __decorate7=function(decorators,target,key,desc){var c4=arguments.length,r5=c4<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d4;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r5=Reflect.decorate(decorators,target,key,desc);else for(var i7=decorators.length-1;i7>=0;i7--)(d4=decorators[i7])&&(r5=(c4<3?d4(r5):c4>3?d4(target,key,r5):d4(target,key))||r5);return c4>3&&r5&&Object.defineProperty(target,key,r5),r5},MediaQueryBreakpointWidth=window.MenuMediaQueryBreakpointWidth||768,MainMenu=__name(class extends TdsElement{constructor(){super(),this.__scrolled=!1,this.open=!1,this.items=[];let s6=o6("UrlChanged",this.urlChanged,this),ss=this.subscribe(MenuItemClicked,this.menuItemClicked);s6.sendLastState(),window.addEventListener("scroll",this.updateScrolled.bind(this))}firstUpdated(){let items=this.renderRoot.querySelectorAll("a[is=tds-menu-item]");for(let itm of items){let i7=new MenuItem(itm);i7.firstUpdated(),this.items.push(i7)}}disconnectedCallback(){for(let i7 of this.items)i7.UrlCahngedSubs.dispose();super.disconnectedCallback()}menuItemClicked(msg){this.toggleOpen()}updateScrolled(){this.__scrolled=window.pageYOffset>100}urlChanged(msg){msg==null||msg.parts.length==0?this.page="home":this.page=msg.parts[0],window.getSelection().removeAllRanges(),document.querySelector("tds-app").click(),this.requestUpdate()}render(){return y`
      <div
        class="button"
        @click="${this.toggleOpen}"
        ?scrolled="${this.__scrolled}"
      >
        <svg
          height="30px"
          style=" enable-background:new 0 0 30 30;"
          version="1.1"
          viewBox="0 0 30 30"
          width="30px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
          />
        </svg>
      </div>
      <div class="menu" ?open="${this.open}" ?scrolled="${this.__scrolled}">
        <div class="close" @click="${this.toggleOpen}">
          <svg version="1.1" viewBox="0 0 24 24" width="24px" height="24px">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
        </div>
        ${this.innerContent}
      </div>
      <div class="overlay" @click="${this.toggleOpen}"></div>
    `}toggleOpen(){this.open=!this.open}},"MainMenu");MainMenu.styles=[i`
      :host,
      .menu {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 40px;
      }

      .menu {
        width: 100%;
      }

      .button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        cursor: pointer;
        display: none;
        position: absolute;
        right: 30px;
        top: 30px;
      }

      .menu[scrolled] a {
        color: #474747;
      }

      .close {
        display: none;
      }

      .overlay {
        visibility: hidden;
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        z-index: 10;
        opacity: 0;
        -webkit-transition: opacity 200ms linear;
        -ms-transition: opacity 200ms linear;
        transition: opacity 200ms linear;
      }

      @media only screen and (max-width: ${MediaQueryBreakpointWidth}px) {
        :host {
          width: 50px;
        }

        .menu {
          display: block;
          position: absolute;
          right: -200px;
          top: 0px;
          width: 200px;
          height: 100vh;
          background-color: white;
          padding: 15px;
          box-shadow: 1px -1px 12px 1px black;
          box-sizing: border-box;
          -webkit-transition: right 200ms linear;
          -ms-transition: right 200ms linear;
          transition: right 200ms linear;
          z-index: 11;
        }

        .menu[open] {
          right: 0px;
        }

        .menu a {
          color: #474747;
          margin: 15px;
        }

        a:hover::after,
        a[active]::after {
          height: 100%;
          width: 7px;
          top: 0;
          right: unset;
          bottom: 0;
          left: -10px;
        }

        .button {
          display: block;
          cursor: pointer;
        }

        .button svg {
          fill: white;
          transition: fill 0.3s ease;
        }

        .close {
          display: inline-block;
          width: 100%;
          text-align: right;
        }

        .close svg {
          fill: #474747;
          cursor: pointer;
        }

        /* .close svg:hover,
			:host(:hover) .button svg {
				fill: #f10252;
			} */

        .button[scrolled] svg,
        .top-bar[scrolled] .button svg {
          fill: #474747;
        }

        .overlay {
          display: block;
        }

        .menu[open] ~ .overlay {
          opacity: 0.4;
          visibility: visible;
        }
      }
    `,itemStyles(MediaQueryBreakpointWidth)];__decorate7([e8({type:Boolean})],MainMenu.prototype,"__scrolled",void 0);__decorate7([e8({type:Boolean})],MainMenu.prototype,"open",void 0);MainMenu=__decorate7([e7("tds-main-menu")],MainMenu);var overrides=new Map([["lightgray","#d1d1d1"],["red","#f10351"]]);setCssValuesOverrides(overrides);var TdsApp=class extends TdsElement{constructor(){super();this.__scrolled=!1;this.bHtml="";window.addEventListener("scroll",this.updateScrolled.bind(this)),installRouter((location2,e10)=>{let last=n5(UrlChanged),diffH=!n5(UrlHashChanged)||last.hash!=location2.hash,diffP=!last||last.location!=location2.pathname;diffH&&new UrlHashChanged(location2).send(),diffP&&new UrlChanged(location2).send()}),this.subscribe(UrlChanged,this.urlChanged),this.subscribe(UrlHashChanged,this.hashChanged),new UrlChanged(location).send()}updateScrolled(){this.__scrolled=window.pageYOffset>100}async hashChanged(msg){if(!msg||msg.hash==""||msg.hash=="#"||msg.hash==null)return;let el=this.renderRoot.querySelector(msg.hash);el&&el.scrollIntoView({behavior:"smooth",block:"center"})}async urlChanged(msg){let page;msg==null||msg.parts.length==0?page="home":page=msg.parts[0],this.page=page,await fetch(`/pages/${page}.html`).then(r5=>this.handleFetchResult(r5)),await this.requestUpdate(),this.updateFooter();let anchors=this.renderRoot.querySelectorAll("a[href^='#']");for(let a4 of anchors)a4.href=location.pathname+a4.attributes.href.value}async handleFetchResult(r5){r5.ok?document.getElementById("page_content").innerHTML=await r5.text():this.renderNotFound()}async renderNotFound(){this.__scrolled=!0,document.getElementById("page_content").innerHTML="<h2 class='p404'>Ooops... page not found :(</h2>"}updateFooter(){let relative=document.body.clientHeight>window.innerHeight,footer=this.renderRoot.querySelector(".footer");footer&&(footer.style.position=relative?"relative":"fixed")}updated(){this.updateFooter()}render(){return y`
      <div class="top-bar" ?scrolled=${this.__scrolled}>
        <div class="top-bar-inner">
          <a href="/"
            ><img alt="TDS" src="/images/manifest/logo48.svg" class="logo"
          /></a>
          <tds-main-menu>
            <a is="tds-menu-item" page="/" href="/">home</a>
            <a is="tds-menu-item" page="services" href="/services">diensten</a>
            <a is="tds-menu-item" page="cases" href="/cases">cases</a>
            <a is="tds-menu-item" page="about" href="/about">over ons</a>
            <a is="tds-menu-item" page="contact" href="/contact"> contact </a>
          </tds-main-menu>
        </div>
      </div>

      <div id="page_content"></div>
      <div class="footer">
        <div>TDS © 2023</div>
        <div>KvK nummer: 70517266</div>
        <div>BTW nummer: NL858354834b01</div>
      </div>

      <span
        @click=${()=>window.scroll({top:0,left:0,behavior:"smooth"})}
        ?visible=${this.__scrolled}
        class="scroll-top"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          fill="white"
          width="24px"
        >
          <g>
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
          </g>
        </svg>
      </span>
    `}};__name(TdsApp,"TdsApp"),TdsApp.styles=[defaultCss,i`
      .top-bar {
        position: fixed;
        top: 0px;
        width: 100%;
        background-color: transparent;
        z-index: 9999;
        color: white;
        --top-bar-color: white;
        box-sizing: border-box;
        -webkit-transition: background-color 300ms linear;
        -ms-transition: background-color 300ms linear;
        transition: background-color 300ms linear;
      }
      .top-bar-inner {
        min-height: 100px;
        max-height: 125px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        padding: 0px 8px 0px 50px;
        max-width: 1240px;
        margin: 0 auto;
      }
      .top-bar[scrolled] {
        background-color: white;
        box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.14);
      }

      .logo {
        /* background-image: url("/images/manifest/logo48.svg");
			background-position: center;
    		background-repeat: no-repeat; */
        border-radius: 20%;
        width: 70px;
        min-width: 70px;
        height: 70px;
      }
      .top-bar[scrolled] {
        --top-bar-color: #474747;
        color: #474747;
      }

      .page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        align-items: center;
      }

      h2 {
        color: #282828;
        font-weight: 600;
        font-size: 50px;
        letter-spacing: -3px;
      }

      .footer {
        display: block;
        height: 115px;
        width: 100%;
        background-color: #2d2d2d;
        color: white;
        display: flex;
        justify-content: center;
        font-size: 12px;
        align-content: center;
        align-items: center;
        bottom: 0;
      }

      .footer > div {
        margin: 20px;
      }

      .p404 {
        box-sizing: border-box;
        padding-top: 200px;
        text-align: center;
      }

      .scroll-top {
        display: none;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        border-radius: 2px;
        z-index: 9999;
        box-sizing: content-box;
      }
      .scroll-top[visible] {
        display: inline-flex;
      }
      @media only screen and (max-width: 768px) {
        .top-bar-inner {
          padding: 0 15px;
        }
      }
    `],__decorateClass([e8({type:Boolean})],TdsApp.prototype,"__scrolled",2),TdsApp=__decorateClass([e7("tds-app")],TdsApp);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

pwa-helpers/router.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=app.js.map
