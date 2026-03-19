(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nr="170",ai={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qu=0,ll=1,Ju=2,ru=1,td=2,Bn=3,Cn=0,We=1,Ke=2,ci=0,_s=1,Fi=2,hl=3,ul=4,ed=5,Li=100,nd=101,id=102,sd=103,rd=104,od=200,ad=201,cd=202,ld=203,Ba=204,Oa=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,_d=213,xd=214,za=0,Ha=1,Va=2,ys=3,ka=4,Ga=5,Wa=6,Xa=7,Fc=0,vd=1,yd=2,li=0,Sd=1,Md=2,Ed=3,ou=4,bd=5,wd=6,Td=7,au=300,Ss=301,Ms=302,Ya=303,qa=304,Co=306,ja=1e3,Ui=1001,Za=1002,nn=1003,Ad=1004,ar=1005,An=1006,zo=1007,Ni=1008,kn=1009,cu=1010,lu=1011,er=1012,Bc=1013,hi=1014,vn=1015,ir=1016,Oc=1017,zc=1018,Es=1020,hu=35902,uu=1021,du=1022,en=1023,fu=1024,pu=1025,xs=1026,bs=1027,mu=1028,Ro=1029,gu=1030,Hc=1031,Vc=1033,ho=33776,uo=33777,fo=33778,po=33779,$a=35840,Ka=35841,Qa=35842,Ja=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,cc=37813,lc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,mo=36492,_c=36494,xc=36495,_u=36283,vc=36284,yc=36285,Sc=36286,Cd=3200,Rd=3201,xu=0,Pd=1,ii="",$e="srgb",As="srgb-linear",Po="linear",$t="srgb",Vi=7680,dl=519,Dd=512,Ld=513,Id=514,vu=515,Ud=516,Nd=517,Fd=518,Bd=519,fl=35044,pl="300 es",Hn=2e3,yo=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Mc=180/Math.PI;function sr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Od(i,t){return(i%t+t)%t}function Ho(i,t,e){return(1-e)*i+e*t}function Ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zd={DEG2RAD:Js};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,s,r,o,a,c,l){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],w=s[2],E=s[5],b=s[8];return r[0]=o*v+a*x+c*w,r[3]=o*m+a*y+c*E,r[6]=o*p+a*_+c*b,r[1]=l*v+h*x+u*w,r[4]=l*m+h*y+u*E,r[7]=l*p+h*_+u*b,r[2]=d*v+f*x+g*w,r[5]=d*m+f*y+g*E,r[8]=d*p+f*_+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Dt;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){const i=So("canvas");return i.style.display="block",i}const ml={};function Zs(i){i in ml||(ml[i]=!0,console.warn(i))}function Vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kt={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Po:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gl=[.64,.33,.3,.6,.15,.06],_l=[.2126,.7152,.0722],xl=[.3127,.329],vl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[As]:{primaries:gl,whitePoint:xl,transfer:Po,toXYZ:vl,fromXYZ:yl,luminanceCoefficients:_l,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:gl,whitePoint:xl,transfer:$t,toXYZ:vl,fromXYZ:yl,luminanceCoefficients:_l,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});let ki;class Wd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=So("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=So("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xd=0;class Su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ko(s[o].image)):r.push(ko(s[o]))}else r=ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class He extends Oi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ui,s=Ui,r=An,o=Ni,a=en,c=kn,l=He.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=sr(),this.name="",this.source=new Su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=au;He.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(f+1)/2,w=(p+1)/2,E=(h+d)/4,b=(u+v)/4,A=(g+m)/4;return y>_&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=b/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=A/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=b/r,s=A/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Su(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mu extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jd extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ae{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),E=Math.atan2(w,p*x);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}const _=a*x;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Go=new P,Sl=new Ae;class he{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),lr.subVectors(this.max,Is),Gi.subVectors(t.a,Is),Wi.subVectors(t.b,Is),Xi.subVectors(t.c,Is),qn.subVectors(Wi,Gi),jn.subVectors(Xi,Wi),xi.subVectors(Gi,Xi);let e=[0,-qn.z,qn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,qn.z,0,-qn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-qn.y,qn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!Wo(e,Gi,Wi,Xi,lr)||(e=[1,0,0,0,1,0,0,0,1],!Wo(e,Gi,Wi,Xi,lr))?!1:(hr.crossVectors(qn,jn),e=[hr.x,hr.y,hr.z],Wo(e,Gi,Wi,Xi,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,cr=new he,Gi=new P,Wi=new P,Xi=new P,qn=new P,jn=new P,xi=new P,Is=new P,lr=new P,hr=new P,vi=new P;function Wo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zd=new he,Us=new P,Xo=new P;class dn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Xo)),this.expandByPoint(Us.copy(t.center).sub(Xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new P,Yo=new P,ur=new P,Zn=new P,qo=new P,dr=new P,jo=new P;class Cs{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yo.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=Zn.dot(this.direction),c=-Zn.dot(ur),l=Zn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yo).addScaledVector(ur,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){qo.subVectors(e,t),dr.subVectors(n,t),jo.crossVectors(qo,dr);let o=this.direction.dot(jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const c=a*this.direction.dot(dr.crossVectors(Zn,dr));if(c<0)return null;const l=a*this.direction.dot(qo.cross(Zn));if(l<0||c+l>o)return null;const h=-a*Zn.dot(jo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Kd)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),$n.crossVectors(n,Je),$n.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),$n.crossVectors(n,Je)),$n.normalize(),fr.crossVectors(Je,$n),s[0]=$n.x,s[4]=fr.x,s[8]=Je.x,s[1]=$n.y,s[5]=fr.y,s[9]=Je.y,s[2]=$n.z,s[6]=fr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],w=n[15],E=s[0],b=s[4],A=s[8],M=s[12],S=s[1],R=s[5],L=s[9],I=s[13],U=s[2],z=s[6],H=s[10],Y=s[14],k=s[3],J=s[7],st=s[11],pt=s[15];return r[0]=o*E+a*S+c*U+l*k,r[4]=o*b+a*R+c*z+l*J,r[8]=o*A+a*L+c*H+l*st,r[12]=o*M+a*I+c*Y+l*pt,r[1]=h*E+u*S+d*U+f*k,r[5]=h*b+u*R+d*z+f*J,r[9]=h*A+u*L+d*H+f*st,r[13]=h*M+u*I+d*Y+f*pt,r[2]=g*E+v*S+m*U+p*k,r[6]=g*b+v*R+m*z+p*J,r[10]=g*A+v*L+m*H+p*st,r[14]=g*M+v*I+m*Y+p*pt,r[3]=x*E+y*S+_*U+w*k,r[7]=x*b+y*R+_*z+w*J,r[11]=x*A+y*L+_*H+w*st,r[15]=x*M+y*I+_*Y+w*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,w=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,E=e*x+n*y+s*_+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=x*b,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*b,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*b,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*b,t[4]=y*b,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*b,t[8]=_*b,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*b,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=w*b,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*b,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*b,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,x=c*l,y=c*h,_=c*u,w=n.x,E=n.y,b=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+_)*w,s[2]=(g-y)*w,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+y)*b,s[9]=(m-x)*b,s[10]=(1-(d+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const l=1/r,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Hn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,v;if(a===Hn)g=(o+r)*u,v=-2*u;else if(a===yo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yi=new P,gn=new Ot,$d=new P(0,0,0),Kd=new P(1,1,1),$n=new P,fr=new P,Je=new P,Ml=new Ot,El=new Ae;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qd=0;const bl=new P,qi=new Ae,In=new Ot,pr=new P,Ns=new P,Jd=new P,tf=new Ae,wl=new P(1,0,0),Tl=new P(0,1,0),Al=new P(0,0,1),Cl={type:"added"},ef={type:"removed"},ji={type:"childadded",child:null},Zo={type:"childremoved",child:null};class ge extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new P,e=new yn,n=new Ae,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Dt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ns,pr,this.up):In.lookAt(pr,Ns,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(In),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cl),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ef),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new P(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,Un=new P,$o=new P,Nn=new P,Zi=new P,$i=new P,Rl=new P,Ko=new P,Qo=new P,Jo=new P,ta=new fe,ea=new fe,na=new fe;class Ce{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Un.subVectors(n,e),$o.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Un),c=_n.dot($o),l=Un.dot(Un),h=Un.dot($o),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,n),na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(ea,r.y),o.addScaledVector(na,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Un.subVectors(t,e),_n.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),_n.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ce.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ce.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Zi.subVectors(s,n),$i.subVectors(r,n),Ko.subVectors(t,n);const c=Zi.dot(Ko),l=$i.dot(Ko);if(c<=0&&l<=0)return e.copy(n);Qo.subVectors(t,s);const h=Zi.dot(Qo),u=$i.dot(Qo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Zi,o);Jo.subVectors(t,r);const f=Zi.dot(Jo),g=$i.dot(Jo);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector($i,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Rl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Rl,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Zi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=Od(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ia(o,r,t+1/3),this.g=ia(o,r,t),this.b=ia(o,r,t-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return kt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Be(Ue.r*255,0,255))*65536+Math.round(Be(Ue.g*255,0,255))*256+Math.round(Be(Ue.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=$e){kt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(mr);const n=Ho(Kn.h,mr.h,e),s=Ho(Kn.s,mr.s,e),r=Ho(Kn.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Mt;Mt.NAMES=Eu;let nf=0;class mi extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=sr(),this.name="",this.blending=_s,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=Oa,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Do extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new P,gr=new St;class ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}}class bu extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sf=0;const on=new Ot,sa=new ge,Ki=new P,tn=new he,Fs=new he,be=new P;class Qt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?wu:bu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new he);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(tn.min,Fs.min),tn.expandByPoint(be),be.addVectors(tn.max,Fs.max),tn.expandByPoint(be)):(tn.expandByPoint(Fs.min),tn.expandByPoint(Fs.max))}tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),be.add(Ki)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new P,c[A]=new P;const l=new P,h=new P,u=new P,d=new St,f=new St,g=new St,v=new P,m=new P;function p(A,M,S){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[A].add(v),a[M].add(v),a[S].add(v),c[A].add(m),c[M].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,M=x.length;A<M;++A){const S=x[A],R=S.start,L=S.count;for(let I=R,U=R+L;I<U;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new P,_=new P,w=new P,E=new P;function b(A){w.fromBufferAttribute(s,A),E.copy(w);const M=a[A];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(E,M);const R=_.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,R)}for(let A=0,M=x.length;A<M;++A){const S=x[A],R=S.start,L=S.count;for(let I=R,U=R+L;I<U;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pl=new Ot,yi=new Cs,_r=new dn,Dl=new P,xr=new P,vr=new P,yr=new P,ra=new P,Sr=new P,Ll=new P,Mr=new P;class et extends ge{constructor(t=new Qt,e=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ra.fromBufferAttribute(u,t),o?Sr.addScaledVector(ra,h):Sr.addScaledVector(ra.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(_r.containsPoint(yi.origin)===!1&&(yi.intersectSphere(_r,Dl)===null||yi.origin.distanceToSquared(Dl)>(t.far-t.near)**2))&&(Pl.copy(r).invert(),yi.copy(t.ray).applyMatrix4(Pl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,w=y;_<w;_+=3){const E=a.getX(_),b=a.getX(_+1),A=a.getX(_+2);s=Er(this,p,t,n,l,h,u,E,b,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Er(this,o,t,n,l,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,w=y;_<w;_+=3){const E=_,b=_+1,A=_+2;s=Er(this,p,t,n,l,h,u,E,b,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,y=m+1,_=m+2;s=Er(this,o,t,n,l,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rf(i,t,e,n,s,r,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Cn,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Mr);return l<e.near||l>e.far?null:{distance:l,point:Mr.clone(),object:i}}function Er(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,xr),i.getVertexPosition(c,vr),i.getVertexPosition(l,yr);const h=rf(i,t,e,n,xr,vr,yr,Ll);if(h){const u=new P;Ce.getBarycoord(Ll,xr,vr,yr,u),s&&(h.uv=Ce.getInterpolatedAttribute(s,a,c,l,u,new St)),r&&(h.uv1=Ce.getInterpolatedAttribute(r,a,c,l,u,new St)),o&&(h.normal=Ce.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};Ce.getNormal(xr,vr,yr,d.normal),h.face=d,h.barycoord=u}return h}class me extends Qt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(v,m,p,x,y,_,w,E,b,A,M){const S=_/b,R=w/A,L=_/2,I=w/2,U=E/2,z=b+1,H=A+1;let Y=0,k=0;const J=new P;for(let st=0;st<H;st++){const pt=st*R-I;for(let At=0;At<z;At++){const Wt=At*S-L;J[v]=Wt*x,J[m]=pt*y,J[p]=U,l.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(At/b),u.push(1-st/A),Y+=1}}for(let st=0;st<A;st++)for(let pt=0;pt<b;pt++){const At=d+pt+z*st,Wt=d+pt+z*(st+1),q=d+(pt+1)+z*(st+1),Q=d+(pt+1)+z*st;c.push(At,Wt,Q),c.push(Wt,q,Q),k+=6}a.addGroup(f,k,M),f+=k,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const af={clone:ws,merge:Ve};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Au extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new P,Il=new St,Ul=new St;class hn extends Au{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mc*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Il,Ul),e.subVectors(Ul,Il)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,Ji=1;class hf extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Qi,Ji,t,e);s.layers=this.layers,this.add(s);const r=new hn(Qi,Ji,t,e);r.layers=this.layers,this.add(r);const o=new hn(Qi,Ji,t,e);o.layers=this.layers,this.add(o);const a=new hn(Qi,Ji,t,e);a.layers=this.layers,this.add(a);const c=new hn(Qi,Ji,t,e);c.layers=this.layers,this.add(c);const l=new hn(Qi,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cu extends He{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new me(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ci});r.uniforms.tEquirect.value=e;const o=new et(s,r),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=An),new hf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const oa=new P,df=new P,ff=new Dt;class bn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=oa.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),s=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new dn,br=new P;class Lo{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+x).normalize(),n[3].setComponents(c-o,d-h,m-g,_-x).normalize(),n[4].setComponents(c-a,d-u,m-v,_-y).normalize(),e===Hn)n[5].setComponents(c+a,d+u,m+v,_+y).normalize();else if(e===yo)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ru(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class di extends Qt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let y=0;y<l;y++){const _=y*u-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const y=x+l*p,_=x+l*(p+1),w=x+1+l*(p+1),E=x+1+l*p;f.push(y,_,E),f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.widthSegments,t.heightSegments)}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Dm=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Hm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:xf,alphatest_fragment:vf,alphatest_pars_fragment:yf,aomap_fragment:Sf,aomap_pars_fragment:Mf,batching_pars_vertex:Ef,batching_vertex:bf,begin_vertex:wf,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Cf,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:If,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:Bf,common:Of,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Vf,displacementmap_vertex:kf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:Yf,envmap_fragment:qf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Zf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:ap,envmap_vertex:Kf,fog_vertex:Qf,fog_pars_vertex:Jf,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:lp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:yp,map_fragment:Sp,map_pars_fragment:Mp,map_particle_fragment:Ep,map_particle_pars_fragment:bp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Cp,morphnormal_vertex:Rp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Dp,normal_fragment_begin:Lp,normal_fragment_maps:Ip,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Vp,opaque_fragment:kp,packing:Gp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:Yp,dithering_pars_fragment:qp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:Qp,shadowmask_pars_fragment:Jp,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:om,tonemapping_pars_fragment:am,transmission_fragment:cm,transmission_pars_fragment:lm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:xm,cube_frag:vm,depth_vert:ym,depth_frag:Sm,distanceRGBA_vert:Mm,distanceRGBA_frag:Em,equirect_vert:bm,equirect_frag:wm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Cm,meshbasic_frag:Rm,meshlambert_vert:Pm,meshlambert_frag:Dm,meshmatcap_vert:Lm,meshmatcap_frag:Im,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:Bm,meshphysical_vert:Om,meshphysical_frag:zm,meshtoon_vert:Hm,meshtoon_frag:Vm,points_vert:km,points_frag:Gm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:Ym,sprite_frag:qm},it={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ve([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ve([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ve([it.points,it.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ve([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ve([it.common,it.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ve([it.sprite,it.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ve([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ve([it.lights,it.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const wr={r:0,b:0,g:0},Mi=new yn,jm=new Ot;function Zm(i,t,e,n,s,r,o){const a=new Mt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const _=g(x);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===Co)?(h===void 0&&(h=new et(new me(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:ws(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(y.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(Mi)),h.material.toneMapped=kt.getTransfer(_.colorSpace)!==$t,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new et(new di(2,2),new ui({name:"BackgroundMaterial",uniforms:ws(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=kt.getTransfer(_.colorSpace)!==$t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(wr,Tu(i)),n.buffers.color.setClear(wr.r,wr.g,wr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m}}function $m(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,R,L,I,U){let z=!1;const H=u(I,L,R);r!==H&&(r=H,l(r.object)),z=f(S,I,L,U),z&&g(S,I,L,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(S,R,L,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,R,L){const I=L.wireframe===!0;let U=n[S.id];U===void 0&&(U={},n[S.id]=U);let z=U[R.id];z===void 0&&(z={},U[R.id]=z);let H=z[I];return H===void 0&&(H=d(c()),z[I]=H),H}function d(S){const R=[],L=[],I=[];for(let U=0;U<e;U++)R[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,R,L,I){const U=r.attributes,z=R.attributes;let H=0;const Y=L.getAttributes();for(const k in Y)if(Y[k].location>=0){const st=U[k];let pt=z[k];if(pt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),st===void 0||st.attribute!==pt||pt&&st.data!==pt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(S,R,L,I){const U={},z=R.attributes;let H=0;const Y=L.getAttributes();for(const k in Y)if(Y[k].location>=0){let st=z[k];st===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));const pt={};pt.attribute=st,st&&st.data&&(pt.data=st.data),U[k]=pt,H++}r.attributes=U,r.attributesNum=H,r.index=I}function v(){const S=r.newAttributes;for(let R=0,L=S.length;R<L;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const L=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;L[S]=1,I[S]===0&&(i.enableVertexAttribArray(S),I[S]=1),U[S]!==R&&(i.vertexAttribDivisor(S,R),U[S]=R)}function x(){const S=r.newAttributes,R=r.enabledAttributes;for(let L=0,I=R.length;L<I;L++)R[L]!==S[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function y(S,R,L,I,U,z,H){H===!0?i.vertexAttribIPointer(S,R,L,U,z):i.vertexAttribPointer(S,R,L,I,U,z)}function _(S,R,L,I){v();const U=I.attributes,z=L.getAttributes(),H=R.defaultAttributeValues;for(const Y in z){const k=z[Y];if(k.location>=0){let J=U[Y];if(J===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const st=J.normalized,pt=J.itemSize,At=t.get(J);if(At===void 0)continue;const Wt=At.buffer,q=At.type,Q=At.bytesPerElement,mt=q===i.INT||q===i.UNSIGNED_INT||J.gpuType===Bc;if(J.isInterleavedBufferAttribute){const rt=J.data,bt=rt.stride,Rt=J.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft,rt.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)m(k.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Ft=0;Ft<k.locationSize;Ft++)y(k.location+Ft,pt/k.locationSize,q,st,bt*Q,(Rt+pt/k.locationSize*Ft)*Q,mt)}else{if(J.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt,J.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let rt=0;rt<k.locationSize;rt++)m(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let rt=0;rt<k.locationSize;rt++)y(k.location+rt,pt/k.locationSize,q,st,pt*Q,pt/k.locationSize*rt*Q,mt)}}else if(H!==void 0){const st=H[Y];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(k.location,st);break;case 3:i.vertexAttrib3fv(k.location,st);break;case 4:i.vertexAttrib4fv(k.location,st);break;default:i.vertexAttrib1fv(k.location,st)}}}}x()}function w(){A();for(const S in n){const R=n[S];for(const L in R){const I=R[L];for(const U in I)h(I[U].object),delete I[U];delete R[L]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const L in R){const I=R[L];for(const U in I)h(I[U].object),delete I[U];delete R[L]}delete n[S.id]}function b(S){for(const R in n){const L=n[R];if(L[S.id]===void 0)continue;const I=L[S.id];for(const U in I)h(I[U].object),delete I[U];delete L[S.id]}}function A(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Km(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==en&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==kn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==vn&&!A)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:E}}function Jm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new bn,a=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;c.value=_,_=h(g,d,y,f);for(let w=0;w!==y;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function tg(i){let t=new WeakMap;function e(o,a){return a===Ya?o.mapping=Ss:a===qa&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ya||a===qa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new uf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pu extends Au{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,Nl=[.125,.215,.35,.446,.526,.582],Ii=20,aa=new Pu,Fl=new Mt;let ca=null,la=0,ha=0,ua=!1;const Pi=(1+Math.sqrt(5))/2,ts=1/Pi,Bl=[new P(-Pi,ts,0),new P(Pi,ts,0),new P(-ts,0,Pi),new P(ts,0,Pi),new P(0,Pi,-ts),new P(0,Pi,ts),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,la,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:ir,format:en,colorSpace:As,depthBuffer:!1},s=zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=ng(r,t,e)}return s}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s){const a=new hn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fl),h.toneMapping=li,h.autoClear=!1;const f=new Do({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new et(new me,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Fl),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Tr(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Tr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(s-r-1)%Bl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new et(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let x=0;for(let b=0;b<Ii;++b){const A=b/v,M=Math.exp(-A*A/2);p.push(M),b===0?x+=M:b<m&&(x+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[s],w=3*_*(s>y-ps?s-y+ps:0),E=4*(this._cubeSize-_);Tr(e,w,E,3*_,2*_),c.setRenderTarget(e),c.render(u,aa)}}function eg(i){const t=[],e=[],n=[];let s=i;const r=i-ps+1+Nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ps?c=Nl[o-i+ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,A=E>2?0:-1,M=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];x.set(M,v*g*E),y.set(d,m*g*E);const S=[E,E,E,E,E,E];_.set(S,p*g*E)}const w=new Qt;w.setAttribute("position",new ne(x,v)),w.setAttribute("uv",new ne(y,m)),w.setAttribute("faceIndex",new ne(_,p)),t.push(w),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zl(i,t,e){const n=new Bi(i,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ng(i,t,e){const n=new Float32Array(Ii),s=new P(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Hl(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Vl(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function ig(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ya||c===qa,h=c===Ss||c===Ms;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ol(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ol(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let y=0,_=x.length;y<_;y+=3){const w=x[y+0],E=x[y+1],b=x[y+2];d.push(w,E,E,b,b,w)}}else if(g!==void 0){const x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const w=y+0,E=y+1,b=y+2;d.push(w,E,E,b,b,w)}}else return;const m=new(yu(d)?wu:bu)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function og(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ag(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cg(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let w=a.attributes.position.count*_,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const b=new Float32Array(w*E*4*u),A=new Mu(b,w,E,u);A.type=vn,A.needsUpdate=!0;const M=_*4;for(let R=0;R<u;R++){const L=p[R],I=x[R],U=y[R],z=w*E*4*R;for(let H=0;H<L.count;H++){const Y=H*M;g===!0&&(s.fromBufferAttribute(L,H),b[z+Y+0]=s.x,b[z+Y+1]=s.y,b[z+Y+2]=s.z,b[z+Y+3]=0),v===!0&&(s.fromBufferAttribute(I,H),b[z+Y+4]=s.x,b[z+Y+5]=s.y,b[z+Y+6]=s.z,b[z+Y+7]=0),m===!0&&(s.fromBufferAttribute(U,H),b[z+Y+8]=s.x,b[z+Y+9]=s.y,b[z+Y+10]=s.z,b[z+Y+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new St(w,E)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Du extends He{constructor(t,e,n,s,r,o,a,c,l,h=xs){if(h!==xs&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=hi),n===void 0&&h===bs&&(n=Es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lu=new He,kl=new Du(1,1),Iu=new Mu,Uu=new jd,Nu=new Cu,Gl=[],Wl=[],Xl=new Float32Array(16),Yl=new Float32Array(9),ql=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),Ee(e,n)}}function mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),Ee(e,n)}}function gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),Ee(e,n)}}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kl.compareFunction=vu,r=kl):r=Lu,e.setTexture2D(t||r,s)}function Tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uu,s)}function Ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nu,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Iu,s)}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Sg;case 36294:return Mg;case 36295:return Eg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Dg(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Lg(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Ig(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ug(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ng(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fg(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bg(i,t){i.uniform1iv(this.addr,t)}function Og(i,t){i.uniform2iv(this.addr,t)}function zg(i,t){i.uniform3iv(this.addr,t)}function Hg(i,t){i.uniform4iv(this.addr,t)}function Vg(i,t){i.uniform1uiv(this.addr,t)}function kg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function Wg(i,t){i.uniform4uiv(this.addr,t)}function Xg(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lu,r[o])}function Yg(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uu,r[o])}function qg(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nu,r[o])}function jg(i,t,e){const n=this.cache,s=t.length,r=Io(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Iu,r[o])}function Zg(i){switch(i){case 5126:return Pg;case 35664:return Dg;case 35665:return Lg;case 35666:return Ig;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return Og;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return kg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return jg}}class $g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}}class Kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zg(e.type)}}class Qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function jl(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){const n=i.name,s=n.length;for(da.lastIndex=0;;){const r=da.exec(n),o=da.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jl(e,l===void 0?new $g(a,i,t):new Kg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Qg(a),jl(e,u)),e=u}}}class go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const t_=37297;let e_=0;function n_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const $l=new Dt;function i_(i){kt._getMatrix($l,kt.workingColorSpace,i);const t=`mat3( ${$l.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case Po:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+n_(i.getShaderSource(t),o)}else return s}function s_(i,t){const e=i_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function r_(i,t){let e;switch(t){case Sd:e="Linear";break;case Md:e="Reinhard";break;case Ed:e="Cineon";break;case ou:e="ACESFilmic";break;case wd:e="AgX";break;case Td:e="Neutral";break;case bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ar=new P;function o_(){kt.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function c_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $s(i){return i!==""}function Ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(h_,d_)}const u_=new Map;function d_(i,t){let e=Nt[t];if(e===void 0){const n=u_.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ec(e)}const f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(f_,p_)}function p_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function m_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===td?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function g_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case Ms:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function __(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function x_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fc:t="ENVMAP_BLENDING_MULTIPLY";break;case vd:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD";break}return t}function v_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function y_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=m_(e),l=g_(e),h=__(e),u=x_(e),d=v_(e),f=a_(e),g=c_(r),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Nt.tonemapping_pars_fragment:"",e.toneMapping!==li?r_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,s_("linearToOutputTexel",e.outputColorSpace),o_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),o=Ec(o),o=Ql(o,e),o=Jl(o,e),a=Ec(a),a=Ql(a,e),a=Jl(a,e),o=th(o),a=th(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,_=x+p+a,w=Zl(s,s.VERTEX_SHADER,y),E=Zl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(w).trim(),U=s.getShaderInfoLog(E).trim();let z=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,E);else{const Y=Kl(s,w,"vertex"),k=Kl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Y+`
`+k)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||U==="")&&(H=!1);H&&(R.diagnostics={runnable:z,programLog:L,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(w),s.deleteShader(E),A=new go(s,v),M=l_(s,v)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,t_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let S_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new E_(t),e.set(t,n)),n}}class E_{constructor(t){this.id=S_++,this.code=t,this.usedTimes=0}}function b_(i,t,e,n,s,r,o){const a=new kc,c=new M_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,R,L,I){const U=L.fog,z=I.geometry,H=M.isMeshStandardMaterial?L.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),k=Y&&Y.mapping===Co?Y.image.height:null,J=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pt=st!==void 0?st.length:0;let At=0;z.morphAttributes.position!==void 0&&(At=1),z.morphAttributes.normal!==void 0&&(At=2),z.morphAttributes.color!==void 0&&(At=3);let Wt,q,Q,mt;if(J){const Zt=wn[J];Wt=Zt.vertexShader,q=Zt.fragmentShader}else Wt=M.vertexShader,q=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),mt=c.getFragmentShaderID(M);const rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Rt=I.isInstancedMesh===!0,Ft=I.isBatchedMesh===!0,ie=!!M.map,Bt=!!M.matcap,pe=!!Y,O=!!M.aoMap,sn=!!M.lightMap,zt=!!M.bumpMap,Ht=!!M.normalMap,wt=!!M.displacementMap,se=!!M.emissiveMap,Et=!!M.metalnessMap,D=!!M.roughnessMap,T=M.anisotropy>0,V=M.clearcoat>0,Z=M.dispersion>0,K=M.iridescence>0,j=M.sheen>0,vt=M.transmission>0,at=T&&!!M.anisotropyMap,ut=V&&!!M.clearcoatMap,Gt=V&&!!M.clearcoatNormalMap,tt=V&&!!M.clearcoatRoughnessMap,dt=K&&!!M.iridescenceMap,Tt=K&&!!M.iridescenceThicknessMap,Ct=j&&!!M.sheenColorMap,ft=j&&!!M.sheenRoughnessMap,Vt=!!M.specularMap,Ut=!!M.specularColorMap,te=!!M.specularIntensityMap,N=vt&&!!M.transmissionMap,ot=vt&&!!M.thicknessMap,X=!!M.gradientMap,$=!!M.alphaMap,ht=M.alphaTest>0,ct=!!M.alphaHash,Lt=!!M.extensions;let ue=li;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Le={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Wt,fragmentShader:q,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&I._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&I.instanceColor!==null,instancingMorph:Rt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:As,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:Bt,envMap:pe,envMapMode:pe&&Y.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:sn,bumpMap:zt,normalMap:Ht,displacementMap:d&&wt,emissiveMap:se,normalMapObjectSpace:Ht&&M.normalMapType===Pd,normalMapTangentSpace:Ht&&M.normalMapType===xu,metalnessMap:Et,roughnessMap:D,anisotropy:T,anisotropyMap:at,clearcoat:V,clearcoatMap:ut,clearcoatNormalMap:Gt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:K,iridescenceMap:dt,iridescenceThicknessMap:Tt,sheen:j,sheenColorMap:Ct,sheenRoughnessMap:ft,specularMap:Vt,specularColorMap:Ut,specularIntensityMap:te,transmission:vt,transmissionMap:N,thicknessMap:ot,gradientMap:X,opaque:M.transparent===!1&&M.blending===_s&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ht,alphaHash:ct,combine:M.combine,mapUv:ie&&v(M.map.channel),aoMapUv:O&&v(M.aoMap.channel),lightMapUv:sn&&v(M.lightMap.channel),bumpMapUv:zt&&v(M.bumpMap.channel),normalMapUv:Ht&&v(M.normalMap.channel),displacementMapUv:wt&&v(M.displacementMap.channel),emissiveMapUv:se&&v(M.emissiveMap.channel),metalnessMapUv:Et&&v(M.metalnessMap.channel),roughnessMapUv:D&&v(M.roughnessMap.channel),anisotropyMapUv:at&&v(M.anisotropyMap.channel),clearcoatMapUv:ut&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(M.sheenRoughnessMap.channel),specularMapUv:Vt&&v(M.specularMap.channel),specularColorMapUv:Ut&&v(M.specularColorMap.channel),specularIntensityMapUv:te&&v(M.specularIntensityMap.channel),transmissionMapUv:N&&v(M.transmissionMap.channel),thicknessMapUv:ot&&v(M.thicknessMap.channel),alphaMapUv:$&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ht||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(ie||$),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:At,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&kt.getTransfer(M.map.colorSpace)===$t,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&kt.getTransfer(M.emissiveMap.colorSpace)===$t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ke,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Lt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const S=g[M.type];let R;if(S){const L=wn[S];R=af.clone(L.uniforms)}else R=M.uniforms;return R}function w(M,S){let R;for(let L=0,I=h.length;L<I;L++){const U=h[L];if(U.cacheKey===S){R=U,++R.usedTimes;break}}return R===void 0&&(R=new y_(i,S,M,r),h.push(R)),R}function E(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function b(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:A}}function w_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ih(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||T_),n.length>1&&n.sort(d||nh),s.length>1&&s.sort(d||nh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function A_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ih,i.set(n,[o])):s>=r.length?(o=new ih,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function C_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Mt};break;case"SpotLight":e={position:new P,direction:new P,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function R_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let P_=0;function D_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L_(i){const t=new C_,e=R_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new Ot,o=new Ot;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,y=0,_=0,w=0,E=0,b=0;l.sort(D_);for(let M=0,S=l.length;M<S;M++){const R=l[M],L=R.color,I=R.intensity,U=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*I,u+=L.g*I,d+=L.b*I;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],I);b++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,k=e.get(R);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=H,f++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(L).multiplyScalar(I),H.distance=U,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[v]=H;const Y=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,Y.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[v]=Y.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=z,_++}v++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(L).multiplyScalar(I),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Y=R.shadow,k=e.get(R);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(I),H.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==w||A.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=w,A.numLightProbes=b,n.version=P_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function sh(i){const t=new L_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function I_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sh(i),t.set(s,[a])):r>=o.length?(a=new sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class U_ extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N_ extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
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
}`;function O_(i,t,e){let n=new Lo;const s=new St,r=new St,o=new fe,a=new U_({depthPacking:Rd}),c=new N_,l={},h=e.maxTextureSize,u={[Cn]:We,[We]:Cn,[Ke]:Ke},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:F_,fragmentShader:B_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let p=this.type;this.render=function(E,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ci),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=p!==Bn&&this.type===Bn,U=p===Bn&&this.type!==Bn;for(let z=0,H=E.length;z<H;z++){const Y=E[z],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();if(s.multiply(J),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,k.mapSize.y=r.y)),k.map===null||I===!0||U===!0){const pt=this.type!==Bn?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new Bi(s.x,s.y,pt),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const st=k.getViewportCount();for(let pt=0;pt<st;pt++){const At=k.getViewport(pt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),L.viewport(o),k.updateMatrices(Y,pt),n=k.getFrustum(),_(b,A,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Bn&&x(k,A),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,R)};function x(E,b){const A=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,A,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,A,f,v,null)}function y(E,b,A,M){let S=null;const R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=A.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=S.uuid,I=b.uuid;let U=l[L];U===void 0&&(U={},l[L]=U);let z=U[I];z===void 0&&(z=S.clone(),U[I]=z,b.addEventListener("dispose",w)),S=z}if(S.visible=b.visible,S.wireframe=b.wireframe,M===Bn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=i.properties.get(S);L.light=A}return S}function _(E,b,A,M,S){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const I=t.update(E),U=E.material;if(Array.isArray(U)){const z=I.groups;for(let H=0,Y=z.length;H<Y;H++){const k=z[H],J=U[k.materialIndex];if(J&&J.visible){const st=y(E,J,M,S);E.onBeforeShadow(i,E,b,A,I,st,k),i.renderBufferDirect(A,null,I,st,E,k),E.onAfterShadow(i,E,b,A,I,st,k)}}}else if(U.visible){const z=y(E,U,M,S);E.onBeforeShadow(i,E,b,A,I,z,null),i.renderBufferDirect(A,null,I,z,E,null),E.onAfterShadow(i,E,b,A,I,z,null)}}const L=E.children;for(let I=0,U=L.length;I<U;I++)_(L[I],b,A,M,S)}function w(E){E.target.removeEventListener("dispose",w);for(const A in l){const M=l[A],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const z_={[za]:Ha,[Va]:Wa,[ka]:Xa,[ys]:Ga,[Ha]:za,[Wa]:Va,[Xa]:ka,[Ga]:ys};function H_(i,t){function e(){let N=!1;const ot=new fe;let X=null;const $=new fe(0,0,0,0);return{setMask:function(ht){X!==ht&&!N&&(i.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){N=ht},setClear:function(ht,ct,Lt,ue,Le){Le===!0&&(ht*=ue,ct*=ue,Lt*=ue),ot.set(ht,ct,Lt,ue),$.equals(ot)===!1&&(i.clearColor(ht,ct,Lt,ue),$.copy(ot))},reset:function(){N=!1,X=null,$.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,X=null,$=null,ht=null;return{setReversed:function(ct){if(ot!==ct){const Lt=t.get("EXT_clip_control");ot?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ht;ht=null,this.setClear(ue)}ot=ct},getReversed:function(){return ot},setTest:function(ct){ct?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ct){X!==ct&&!N&&(i.depthMask(ct),X=ct)},setFunc:function(ct){if(ot&&(ct=z_[ct]),$!==ct){switch(ct){case za:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){N=ct},setClear:function(ct){ht!==ct&&(ot&&(ct=1-ct),i.clearDepth(ct),ht=ct)},reset:function(){N=!1,X=null,$=null,ht=null,ot=!1}}}function s(){let N=!1,ot=null,X=null,$=null,ht=null,ct=null,Lt=null,ue=null,Le=null;return{setTest:function(Zt){N||(Zt?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!N&&(i.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,fn,Rn){(X!==Zt||$!==fn||ht!==Rn)&&(i.stencilFunc(Zt,fn,Rn),X=Zt,$=fn,ht=Rn)},setOp:function(Zt,fn,Rn){(ct!==Zt||Lt!==fn||ue!==Rn)&&(i.stencilOp(Zt,fn,Rn),ct=Zt,Lt=fn,ue=Rn)},setLocked:function(Zt){N=Zt},setClear:function(Zt){Le!==Zt&&(i.clearStencil(Zt),Le=Zt)},reset:function(){N=!1,ot=null,X=null,$=null,ht=null,ct=null,Lt=null,ue=null,Le=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,w=null,E=null,b=new Mt(0,0,0),A=0,M=!1,S=null,R=null,L=null,I=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Y>=2);let J=null,st={};const pt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Wt=new fe().fromArray(pt),q=new fe().fromArray(At);function Q(N,ot,X,$){const ht=new Uint8Array(4),ct=i.createTexture();i.bindTexture(N,ct),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<X;Lt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(ot+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ct}const mt={};mt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(ys),zt(!1),Ht(ll),rt(i.CULL_FACE),O(ci);function rt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function bt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Rt(N,ot){return u[N]!==ot?(i.bindFramebuffer(N,ot),u[N]=ot,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Ft(N,ot){let X=f,$=!1;if(N){X=d.get(ot),X===void 0&&(X=[],d.set(ot,X));const ht=N.textures;if(X.length!==ht.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Lt=ht.length;ct<Lt;ct++)X[ct]=i.COLOR_ATTACHMENT0+ct;X.length=ht.length,$=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,$=!0);$&&i.drawBuffers(X)}function ie(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Bt={[Li]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};Bt[sd]=i.MIN,Bt[rd]=i.MAX;const pe={[od]:i.ZERO,[ad]:i.ONE,[cd]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[dd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[ld]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[_d]:i.CONSTANT_ALPHA,[xd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,ot,X,$,ht,ct,Lt,ue,Le,Zt){if(N===ci){v===!0&&(bt(i.BLEND),v=!1);return}if(v===!1&&(rt(i.BLEND),v=!0),N!==ed){if(N!==m||Zt!==M){if((p!==Li||_!==Li)&&(i.blendEquation(i.FUNC_ADD),p=Li,_=Li),Zt)switch(N){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,y=null,w=null,E=null,b.set(0,0,0),A=0,m=N,M=Zt}return}ht=ht||ot,ct=ct||X,Lt=Lt||$,(ot!==p||ht!==_)&&(i.blendEquationSeparate(Bt[ot],Bt[ht]),p=ot,_=ht),(X!==x||$!==y||ct!==w||Lt!==E)&&(i.blendFuncSeparate(pe[X],pe[$],pe[ct],pe[Lt]),x=X,y=$,w=ct,E=Lt),(ue.equals(b)===!1||Le!==A)&&(i.blendColor(ue.r,ue.g,ue.b,Le),b.copy(ue),A=Le),m=N,M=!1}function sn(N,ot){N.side===Ke?bt(i.CULL_FACE):rt(i.CULL_FACE);let X=N.side===We;ot&&(X=!X),zt(X),N.blending===_s&&N.transparent===!1?O(ci):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const $=N.stencilWrite;a.setTest($),$&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function Ht(N){N!==Qu?(rt(i.CULL_FACE),N!==R&&(N===ll?i.cullFace(i.BACK):N===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),R=N}function wt(N){N!==L&&(H&&i.lineWidth(N),L=N)}function se(N,ot,X){N?(rt(i.POLYGON_OFFSET_FILL),(I!==ot||U!==X)&&(i.polygonOffset(ot,X),I=ot,U=X)):bt(i.POLYGON_OFFSET_FILL)}function Et(N){N?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function D(N){N===void 0&&(N=i.TEXTURE0+z-1),J!==N&&(i.activeTexture(N),J=N)}function T(N,ot,X){X===void 0&&(J===null?X=i.TEXTURE0+z-1:X=J);let $=st[X];$===void 0&&($={type:void 0,texture:void 0},st[X]=$),($.type!==N||$.texture!==ot)&&(J!==X&&(i.activeTexture(X),J=X),i.bindTexture(N,ot||mt[N]),$.type=N,$.texture=ot)}function V(){const N=st[J];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(N){Wt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Wt.copy(N))}function ft(N){q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function Vt(N,ot){let X=l.get(ot);X===void 0&&(X=new WeakMap,l.set(ot,X));let $=X.get(N);$===void 0&&($=i.getUniformBlockIndex(ot,N.name),X.set(N,$))}function Ut(N,ot){const $=l.get(ot).get(N);c.get(ot)!==$&&(i.uniformBlockBinding(ot,$,N.__bindingPointIndex),c.set(ot,$))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,st={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,w=null,E=null,b=new Mt(0,0,0),A=0,M=!1,S=null,R=null,L=null,I=null,U=null,Wt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:bt,bindFramebuffer:Rt,drawBuffers:Ft,useProgram:ie,setBlending:O,setMaterial:sn,setFlipSided:zt,setCullFace:Ht,setLineWidth:wt,setPolygonOffset:se,setScissorTest:Et,activeTexture:D,bindTexture:T,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:dt,texImage3D:Tt,updateUBOMapping:Vt,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:tt,texSubImage2D:j,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Ct,viewport:ft,reset:te}}function rh(i,t,e,n){const s=V_(n);switch(e){case uu:return i*t;case fu:return i*t;case pu:return i*t*2;case mu:return i*t/s.components*s.byteLength;case Ro:return i*t/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case Hc:return i*t*2/s.components*s.byteLength;case du:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case Vc:return i*t*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case $a:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mo:case _c:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _u:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V_(i){switch(i){case kn:case cu:return{byteLength:1,components:1};case er:case lu:case ir:return{byteLength:2,components:1};case Oc:case zc:return{byteLength:2,components:4};case hi:case Bc:case vn:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function k_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return f?new OffscreenCanvas(D,T):So("canvas")}function v(D,T,V){let Z=1;const K=Et(D);if((K.width>V||K.height>V)&&(Z=V/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(Z*K.width),vt=Math.floor(Z*K.height);u===void 0&&(u=g(j,vt));const at=T?g(j,vt):u;return at.width=j,at.height=vt,at.getContext("2d").drawImage(D,0,0,j,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+vt+")."),at}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,T,V,Z,K=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=T;if(T===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),T===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),T===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),T===i.RGBA){const vt=K?Po:kt.getTransfer(Z);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=vt===$t?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(D,T){let V;return D?T===null||T===hi||T===Es?V=i.DEPTH24_STENCIL8:T===vn?V=i.DEPTH32F_STENCIL8:T===er&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===hi||T===Es?V=i.DEPTH_COMPONENT24:T===vn?V=i.DEPTH_COMPONENT32F:T===er&&(V=i.DEPTH_COMPONENT16),V}function w(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==nn&&D.minFilter!==An?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function E(D){const T=D.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&h.delete(T)}function b(D){const T=D.target;T.removeEventListener("dispose",b),S(T)}function A(D){const T=n.get(D);if(T.__webglInit===void 0)return;const V=D.source,Z=d.get(V);if(Z){const K=Z[T.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(D),Object.keys(Z).length===0&&d.delete(V)}n.remove(D)}function M(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const V=D.source,Z=d.get(V);delete Z[T.__cacheKey],o.memory.textures--}function S(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let K=0;K<T.__webglFramebuffer[Z].length;K++)i.deleteFramebuffer(T.__webglFramebuffer[Z][K]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=D.textures;for(let Z=0,K=V.length;Z<K;Z++){const j=n.get(V[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(D)}let R=0;function L(){R=0}function I(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function U(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function z(D,T){const V=n.get(D);if(D.isVideoTexture&&wt(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const Z=D.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,D,T);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function H(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){q(V,D,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function Y(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){q(V,D,T);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function k(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){Q(V,D,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}const J={[ja]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},st={[nn]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},pt={[Dd]:i.NEVER,[Bd]:i.ALWAYS,[Ld]:i.LESS,[vu]:i.LEQUAL,[Id]:i.EQUAL,[Fd]:i.GEQUAL,[Ud]:i.GREATER,[Nd]:i.NOTEQUAL};function At(D,T){if(T.type===vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===An||T.magFilter===zo||T.magFilter===ar||T.magFilter===Ni||T.minFilter===An||T.minFilter===zo||T.minFilter===ar||T.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,J[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,st[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,st[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==ar&&T.minFilter!==Ni||T.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Wt(D,T){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",E));const Z=T.source;let K=d.get(Z);K===void 0&&(K={},d.set(Z,K));const j=U(T);if(j!==D.__cacheKey){K[j]===void 0&&(K[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),K[j].usedTimes++;const vt=K[D.__cacheKey];vt!==void 0&&(K[D.__cacheKey].usedTimes--,vt.usedTimes===0&&M(T)),D.__cacheKey=j,D.__webglTexture=K[j].texture}return V}function q(D,T,V){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);const K=Wt(D,T),j=T.source;e.bindTexture(Z,D.__webglTexture,i.TEXTURE0+V);const vt=n.get(j);if(j.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const at=kt.getPrimaries(kt.workingColorSpace),ut=T.colorSpace===ii?null:kt.getPrimaries(T.colorSpace),Gt=T.colorSpace===ii||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let tt=v(T.image,!1,s.maxTextureSize);tt=se(T,tt);const dt=r.convert(T.format,T.colorSpace),Tt=r.convert(T.type);let Ct=y(T.internalFormat,dt,Tt,T.colorSpace,T.isVideoTexture);At(Z,T);let ft;const Vt=T.mipmaps,Ut=T.isVideoTexture!==!0,te=vt.__version===void 0||K===!0,N=j.dataReady,ot=w(T,tt);if(T.isDepthTexture)Ct=_(T.format===bs,T.type),te&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,dt,Tt,null));else if(T.isDataTexture)if(Vt.length>0){Ut&&te&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,Vt[0].width,Vt[0].height);for(let X=0,$=Vt.length;X<$;X++)ft=Vt[X],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,X,Ct,ft.width,ft.height,0,dt,Tt,ft.data);T.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,tt.width,tt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,dt,Tt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,dt,Tt,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ct,Vt[0].width,Vt[0].height,tt.depth);for(let X=0,$=Vt.length;X<$;X++)if(ft=Vt[X],T.format!==en)if(dt!==null)if(Ut){if(N)if(T.layerUpdates.size>0){const ht=rh(ft.width,ft.height,T.format,T.type);for(const ct of T.layerUpdates){const Lt=ft.data.subarray(ct*ht/ft.data.BYTES_PER_ELEMENT,(ct+1)*ht/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ct,ft.width,ft.height,1,dt,Lt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ct,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ft.width,ft.height,tt.depth,dt,Tt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ct,ft.width,ft.height,tt.depth,0,dt,Tt,ft.data)}else{Ut&&te&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,Vt[0].width,Vt[0].height);for(let X=0,$=Vt.length;X<$;X++)ft=Vt[X],T.format!==en?dt!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ct,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,X,Ct,ft.width,ft.height,0,dt,Tt,ft.data)}else if(T.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ct,tt.width,tt.height,tt.depth),N)if(T.layerUpdates.size>0){const X=rh(tt.width,tt.height,T.format,T.type);for(const $ of T.layerUpdates){const ht=tt.data.subarray($*X/tt.data.BYTES_PER_ELEMENT,($+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,dt,Tt,ht)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,Tt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,dt,Tt,tt.data);else if(T.isData3DTexture)Ut?(te&&e.texStorage3D(i.TEXTURE_3D,ot,Ct,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,Tt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,dt,Tt,tt.data);else if(T.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(i.TEXTURE_2D,ot,Ct,tt.width,tt.height);else{let X=tt.width,$=tt.height;for(let ht=0;ht<ot;ht++)e.texImage2D(i.TEXTURE_2D,ht,Ct,X,$,0,dt,Tt,null),X>>=1,$>>=1}}else if(Vt.length>0){if(Ut&&te){const X=Et(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Ct,X.width,X.height)}for(let X=0,$=Vt.length;X<$;X++)ft=Vt[X],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,dt,Tt,ft):e.texImage2D(i.TEXTURE_2D,X,Ct,dt,Tt,ft);T.generateMipmaps=!1}else if(Ut){if(te){const X=Et(tt);e.texStorage2D(i.TEXTURE_2D,ot,Ct,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Tt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,dt,Tt,tt);m(T)&&p(Z),vt.__version=j.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Q(D,T,V){if(T.image.length!==6)return;const Z=Wt(D,T),K=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+V);const j=n.get(K);if(K.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+V);const vt=kt.getPrimaries(kt.workingColorSpace),at=T.colorSpace===ii?null:kt.getPrimaries(T.colorSpace),ut=T.colorSpace===ii||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Gt=T.isCompressedTexture||T.image[0].isCompressedTexture,tt=T.image[0]&&T.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Gt&&!tt?dt[$]=v(T.image[$],!0,s.maxCubemapSize):dt[$]=tt?T.image[$].image:T.image[$],dt[$]=se(T,dt[$]);const Tt=dt[0],Ct=r.convert(T.format,T.colorSpace),ft=r.convert(T.type),Vt=y(T.internalFormat,Ct,ft,T.colorSpace),Ut=T.isVideoTexture!==!0,te=j.__version===void 0||Z===!0,N=K.dataReady;let ot=w(T,Tt);At(i.TEXTURE_CUBE_MAP,T);let X;if(Gt){Ut&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Vt,Tt.width,Tt.height);for(let $=0;$<6;$++){X=dt[$].mipmaps;for(let ht=0;ht<X.length;ht++){const ct=X[ht];T.format!==en?Ct!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Ct,ft,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ct.width,ct.height,0,Ct,ft,ct.data)}}}else{if(X=T.mipmaps,Ut&&te){X.length>0&&ot++;const $=Et(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,Ct,ft,dt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,dt[$].width,dt[$].height,0,Ct,ft,dt[$].data);for(let ht=0;ht<X.length;ht++){const Lt=X[ht].image[$].image;Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Lt.width,Lt.height,Ct,ft,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,Lt.width,Lt.height,0,Ct,ft,Lt.data)}}else{Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,ft,dt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Ct,ft,dt[$]);for(let ht=0;ht<X.length;ht++){const ct=X[ht];Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Ct,ft,ct.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,Ct,ft,ct.image[$])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),j.__version=K.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function mt(D,T,V,Z,K,j){const vt=r.convert(V.format,V.colorSpace),at=r.convert(V.type),ut=y(V.internalFormat,vt,at,V.colorSpace),Gt=n.get(T),tt=n.get(V);if(tt.__renderTarget=T,!Gt.__hasExternalTextures){const dt=Math.max(1,T.width>>j),Tt=Math.max(1,T.height>>j);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,j,ut,dt,Tt,T.depth,0,vt,at,null):e.texImage2D(K,j,ut,dt,Tt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Ht(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,tt.__webglTexture,0,zt(T)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,tt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(D,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const Z=T.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,j=_(T.stencilBuffer,K),vt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(T);Ht(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,j,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,D)}else{const Z=T.textures;for(let K=0;K<Z.length;K++){const j=Z[K],vt=r.convert(j.format,j.colorSpace),at=r.convert(j.type),ut=y(j.internalFormat,vt,at,j.colorSpace),Gt=zt(T);V&&Ht(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ut,T.width,T.height):Ht(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ut,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ut,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const K=Z.__webglTexture,j=zt(T);if(T.depthTexture.format===xs)Ht(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(T.depthTexture.format===bs)Ht(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(D){const T=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const K=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),T.__depthDisposeCallback=K}T.__boundDepthTexture=Z}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,D)}else if(V){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),rt(T.__webglDepthbuffer[Z],D,!1);else{const K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),rt(T.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(D,T,V){const Z=n.get(D);T!==void 0&&mt(Z.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Rt(D)}function ie(D){const T=D.texture,V=n.get(D),Z=n.get(T);D.addEventListener("dispose",b);const K=D.textures,j=D.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let ut=0;ut<T.mipmaps.length;ut++)V.__webglFramebuffer[at][ut]=i.createFramebuffer()}else V.__webglFramebuffer[at]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<T.mipmaps.length;at++)V.__webglFramebuffer[at]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ut=K.length;at<ut;at++){const Gt=n.get(K[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Ht(D)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){const ut=K[at];V.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const Gt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),dt=y(ut.internalFormat,Gt,tt,ut.colorSpace,D.isXRRenderTarget===!0),Tt=zt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,dt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,V.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),At(i.TEXTURE_CUBE_MAP,T);for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0)for(let ut=0;ut<T.mipmaps.length;ut++)mt(V.__webglFramebuffer[at][ut],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else mt(V.__webglFramebuffer[at],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=K.length;at<ut;at++){const Gt=K[at],tt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),At(i.TEXTURE_2D,Gt),mt(V.__webglFramebuffer,D,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Gt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(at=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),At(at,T),T.mipmaps&&T.mipmaps.length>0)for(let ut=0;ut<T.mipmaps.length;ut++)mt(V.__webglFramebuffer[ut],D,T,i.COLOR_ATTACHMENT0,at,ut);else mt(V.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,at,0);m(T)&&p(at),e.unbindTexture()}D.depthBuffer&&Rt(D)}function Bt(D){const T=D.textures;for(let V=0,Z=T.length;V<Z;V++){const K=T[V];if(m(K)){const j=x(D),vt=n.get(K).__webglTexture;e.bindTexture(j,vt),p(j),e.unbindTexture()}}}const pe=[],O=[];function sn(D){if(D.samples>0){if(Ht(D)===!1){const T=D.textures,V=D.width,Z=D.height;let K=i.COLOR_BUFFER_BIT;const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(D),at=T.length>1;if(at)for(let ut=0;ut<T.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<T.length;ut++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Gt=n.get(T[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,K,i.NEAREST),c===!0&&(pe.length=0,O.length=0,pe.push(i.COLOR_ATTACHMENT0+ut),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pe.push(j),O.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<T.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Gt=n.get(T[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function zt(D){return Math.min(s.maxSamples,D.samples)}function Ht(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(D){const T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function se(D,T){const V=D.colorSpace,Z=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==As&&V!==ii&&(kt.getTransfer(V)===$t?(Z!==en||K!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Et(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ht}function G_(i,t){function e(n,s=ii){let r;const o=kt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===lu)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===ir)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===du)return i.RGB;if(n===en)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===pu)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===mu)return i.RED;if(n===Ro)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Vc)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ka||n===Qa||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===ec)return o===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===_c||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===vc||n===yc||n===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class W_ extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cr extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(X_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
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

}`;class j_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ui({vertexShader:Y_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends Oi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new j_,m=e.getContextAttributes();let p=null,x=null;const y=[],_=[],w=new St;let E=null;const b=new hn;b.viewport=new fe;const A=new hn;A.viewport=new fe;const M=[b,A],S=new W_;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new fa,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new fa,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new fa,y[q]=Q),Q.getHandSpace()};function I(q){const Q=_.indexOf(q.inputSource);if(Q===-1)return;const mt=y[Q];mt!==void 0&&(mt.update(q.inputSource,q.frame,l||o),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let q=0;q<y.length;q++){const Q=_[q];Q!==null&&(_[q]=null,y[q].disconnect(Q))}R=null,L=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bi(f.framebufferWidth,f.framebufferHeight,{format:en,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,mt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?bs:xs,mt=m.stencil?Es:hi);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Bi(d.textureWidth,d.textureHeight,{format:en,type:kn,depthTexture:new Du(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(q){for(let Q=0;Q<q.removed.length;Q++){const mt=q.removed[Q],rt=_.indexOf(mt);rt>=0&&(_[rt]=null,y[rt].disconnect(mt))}for(let Q=0;Q<q.added.length;Q++){const mt=q.added[Q];let rt=_.indexOf(mt);if(rt===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=_.length){_.push(mt),rt=Rt;break}else if(_[Rt]===null){_[Rt]=mt,rt=Rt;break}if(rt===-1)break}const bt=y[rt];bt&&bt.connect(mt)}}const H=new P,Y=new P;function k(q,Q,mt){H.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(mt.matrixWorld);const rt=H.distanceTo(Y),bt=Q.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),ie=bt[14]/(bt[10]+1),Bt=(bt[9]+1)/bt[5],pe=(bt[9]-1)/bt[5],O=(bt[8]-1)/bt[0],sn=(Rt[8]+1)/Rt[0],zt=Ft*O,Ht=Ft*sn,wt=rt/(-O+sn),se=wt*-O;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Et=Ft+wt,D=ie+wt,T=zt-se,V=Ht+(rt-se),Z=Bt*ie/D*Et,K=pe*ie/D*Et;q.projectionMatrix.makePerspective(T,V,Z,K,Et,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,mt=q.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),S.near=A.near=b.near=Q,S.far=A.far=b.far=mt,(R!==S.near||L!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,L=S.far),b.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,S.layers.mask=b.layers.mask|A.layers.mask;const rt=q.parent,bt=S.cameras;J(S,rt);for(let Rt=0;Rt<bt.length;Rt++)J(bt[Rt],rt);bt.length===2?k(S,b,A):S.projectionMatrix.copy(b.projectionMatrix),st(q,S,rt)};function st(q,Q,mt){mt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Mc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let pt=null;function At(q,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let rt=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Rt=0;Rt<mt.length;Rt++){const Ft=mt[Rt];let ie=null;if(f!==null)ie=f.getViewport(Ft);else{const pe=u.getViewSubImage(d,Ft);ie=pe.viewport,Rt===0&&(t.setRenderTargetTextures(x,pe.colorTexture,d.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(x))}let Bt=M[Rt];Bt===void 0&&(Bt=new hn,Bt.layers.enable(Rt),Bt.viewport=new fe,M[Rt]=Bt),Bt.matrix.fromArray(Ft.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Ft.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(ie.x,ie.y,ie.width,ie.height),Rt===0&&(S.matrix.copy(Bt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Bt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Rt=u.getDepthInformation(mt[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,s.renderState)}}for(let mt=0;mt<y.length;mt++){const rt=_[mt],bt=y[mt];rt!==null&&bt!==void 0&&bt.update(rt,Q,l||o)}pt&&pt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Wt=new Ru;Wt.setAnimationLoop(At),this.setAnimationLoop=function(q){pt=q},this.dispose=function(){}}}const Ei=new yn,$_=new Ot;function K_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,Ei.copy(_),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(Ei)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function l(x,y){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(x,w);const E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const y=u();x.__bindingPointIndex=y;const _=i.createBuffer(),w=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],_=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,b=_.length;E<b;E++){const A=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,S=A.length;M<S;M++){const R=A[M];if(f(R,E,M,w)===!0){const L=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let z=0;z<I.length;z++){const H=I[z],Y=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+U,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,_,w){const E=x.value,b=y+"_"+_;if(w[b]===void 0)return typeof E=="number"||typeof E=="boolean"?w[b]=E:w[b]=E.clone(),!0;{const A=w[b];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return w[b]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(x){const y=x.uniforms;let _=0;const w=16;for(let b=0,A=y.length;b<A;b++){const M=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,R=M.length;S<R;S++){const L=M[S],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,z=I.length;U<z;U++){const H=I[U],Y=v(H),k=_%w,J=k%Y.boundary,st=k+J;_+=J,st!==0&&w-st<Y.storage&&(_+=w-st),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=Y.storage}}}const E=_%w;return E>0&&(_+=w-E),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class J_{constructor(t={}){const{canvas:e=Hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=li,this.toneMappingExposure=1;const _=this;let w=!1,E=0,b=0,A=null,M=-1,S=null;const R=new fe,L=new fe;let I=null;const U=new Mt(0);let z=0,H=e.width,Y=e.height,k=1,J=null,st=null;const pt=new fe(0,0,H,Y),At=new fe(0,0,H,Y);let Wt=!1;const q=new Lo;let Q=!1,mt=!1;const rt=new Ot,bt=new Ot,Rt=new P,Ft=new fe,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function pe(){return A===null?k:1}let O=n;function sn(C,F){return e.getContext(C,F)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nr}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){const F="webgl2";if(O=sn(F,C),O===null)throw sn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let zt,Ht,wt,se,Et,D,T,V,Z,K,j,vt,at,ut,Gt,tt,dt,Tt,Ct,ft,Vt,Ut,te,N;function ot(){zt=new sg(O),zt.init(),Ut=new G_(O,zt),Ht=new Qm(O,zt,t,Ut),wt=new H_(O,zt),Ht.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),se=new ag(O),Et=new w_,D=new k_(O,zt,wt,Et,Ht,Ut,se),T=new tg(_),V=new ig(_),Z=new pf(O),te=new $m(O,Z),K=new rg(O,Z,se,te),j=new lg(O,K,Z,se),Ct=new cg(O,Ht,D),tt=new Jm(Et),vt=new b_(_,T,V,zt,Ht,te,tt),at=new K_(_,Et),ut=new A_,Gt=new I_(zt),Tt=new Zm(_,T,V,wt,j,f,c),dt=new O_(_,j,Ht),N=new Q_(O,se,Ht,wt),ft=new Km(O,zt,se),Vt=new og(O,zt,se),se.programs=vt.programs,_.capabilities=Ht,_.extensions=zt,_.properties=Et,_.renderLists=ut,_.shadowMap=dt,_.state=wt,_.info=se}ot();const X=new Z_(_,O);this.xr=X,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=zt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=zt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(H,Y,!1))},this.getSize=function(C){return C.set(H,Y)},this.setSize=function(C,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,Y=F,e.width=Math.floor(C*k),e.height=Math.floor(F*k),G===!0&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(H*k,Y*k).floor()},this.setDrawingBufferSize=function(C,F,G){H=C,Y=F,k=G,e.width=Math.floor(C*G),e.height=Math.floor(F*G),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(pt)},this.setViewport=function(C,F,G,W){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,F,G,W),wt.viewport(R.copy(pt).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(At)},this.setScissor=function(C,F,G,W){C.isVector4?At.set(C.x,C.y,C.z,C.w):At.set(C,F,G,W),wt.scissor(L.copy(At).multiplyScalar(k).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(C){wt.setScissorTest(Wt=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){st=C},this.getClearColor=function(C){return C.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(C=!0,F=!0,G=!0){let W=0;if(C){let B=!1;if(A!==null){const nt=A.texture.format;B=nt===Vc||nt===Hc||nt===Ro}if(B){const nt=A.texture.type,lt=nt===kn||nt===hi||nt===er||nt===Es||nt===Oc||nt===zc,gt=Tt.getClearColor(),_t=Tt.getClearAlpha(),Pt=gt.r,It=gt.g,xt=gt.b;lt?(g[0]=Pt,g[1]=It,g[2]=xt,g[3]=_t,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Pt,v[1]=It,v[2]=xt,v[3]=_t,O.clearBufferiv(O.COLOR,0,v))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT),G&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),Gt.dispose(),Et.dispose(),T.dispose(),V.dispose(),j.dispose(),te.dispose(),N.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",el),X.removeEventListener("sessionend",nl),_i.stop()};function $(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=se.autoReset,F=dt.enabled,G=dt.autoUpdate,W=dt.needsUpdate,B=dt.type;ot(),se.autoReset=C,dt.enabled=F,dt.autoUpdate=G,dt.needsUpdate=W,dt.type=B}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){const F=C.target;F.removeEventListener("dispose",Lt),ue(F)}function ue(C){Le(C),Et.remove(C)}function Le(C){const F=Et.get(C).programs;F!==void 0&&(F.forEach(function(G){vt.releaseProgram(G)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,G,W,B,nt){F===null&&(F=ie);const lt=B.isMesh&&B.matrixWorld.determinant()<0,gt=Zu(C,F,G,W,B);wt.setMaterial(W,lt);let _t=G.index,Pt=1;if(W.wireframe===!0){if(_t=K.getWireframeAttribute(G),_t===void 0)return;Pt=2}const It=G.drawRange,xt=G.attributes.position;let Xt=It.start*Pt,ee=(It.start+It.count)*Pt;nt!==null&&(Xt=Math.max(Xt,nt.start*Pt),ee=Math.min(ee,(nt.start+nt.count)*Pt)),_t!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,_t.count)):xt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,xt.count));const re=ee-Xt;if(re<0||re===1/0)return;te.setup(B,W,gt,G,_t);let Ye,qt=ft;if(_t!==null&&(Ye=Z.get(_t),qt=Vt,qt.setIndex(Ye)),B.isMesh)W.wireframe===!0?(wt.setLineWidth(W.wireframeLinewidth*pe()),qt.setMode(O.LINES)):qt.setMode(O.TRIANGLES);else if(B.isLine){let yt=W.linewidth;yt===void 0&&(yt=1),wt.setLineWidth(yt*pe()),B.isLineSegments?qt.setMode(O.LINES):B.isLineLoop?qt.setMode(O.LINE_LOOP):qt.setMode(O.LINE_STRIP)}else B.isPoints?qt.setMode(O.POINTS):B.isSprite&&qt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)qt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))qt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const yt=B._multiDrawStarts,Pn=B._multiDrawCounts,jt=B._multiDrawCount,pn=_t?Z.get(_t).bytesPerElement:1,Hi=Et.get(W).currentProgram.getUniforms();for(let Qe=0;Qe<jt;Qe++)Hi.setValue(O,"_gl_DrawID",Qe),qt.render(yt[Qe]/pn,Pn[Qe])}else if(B.isInstancedMesh)qt.renderInstances(Xt,re,B.count);else if(G.isInstancedBufferGeometry){const yt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pn=Math.min(G.instanceCount,yt);qt.renderInstances(Xt,re,Pn)}else qt.render(Xt,re)};function Zt(C,F,G){C.transparent===!0&&C.side===Ke&&C.forceSinglePass===!1?(C.side=We,C.needsUpdate=!0,or(C,F,G),C.side=Cn,C.needsUpdate=!0,or(C,F,G),C.side=Ke):or(C,F,G)}this.compile=function(C,F,G=null){G===null&&(G=C),p=Gt.get(G),p.init(F),y.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),C!==G&&C.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const nt=B.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const gt=nt[lt];Zt(gt,G,B),W.add(gt)}else Zt(nt,G,B),W.add(nt)}),y.pop(),p=null,W},this.compileAsync=function(C,F,G=null){const W=this.compile(C,F,G);return new Promise(B=>{function nt(){if(W.forEach(function(lt){Et.get(lt).currentProgram.isReady()&&W.delete(lt)}),W.size===0){B(C);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let fn=null;function Rn(C){fn&&fn(C)}function el(){_i.stop()}function nl(){_i.start()}const _i=new Ru;_i.setAnimationLoop(Rn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(C){fn=C,X.setAnimationLoop(C),C===null?_i.stop():_i.start()},X.addEventListener("sessionstart",el),X.addEventListener("sessionend",nl),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,F,A),p=Gt.get(C,y.length),p.init(F),y.push(p),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,mt),m=ut.get(C,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&Oo(nt,F,-1/0,_.sortObjects)}Oo(C,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(J,st),Bt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Bt&&Tt.addToRenderList(m,C),this.info.render.frame++,Q===!0&&tt.beginShadows();const G=p.state.shadowsArray;dt.render(G,C,F),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const nt=F.cameras;if(B.length>0)for(let lt=0,gt=nt.length;lt<gt;lt++){const _t=nt[lt];sl(W,B,C,_t)}Bt&&Tt.render(C);for(let lt=0,gt=nt.length;lt<gt;lt++){const _t=nt[lt];il(m,C,_t,_t.viewport)}}else B.length>0&&sl(W,B,C,F),Bt&&Tt.render(C),il(m,C,F);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,F),te.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&tt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Oo(C,F,G,W){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){W&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const lt=j.update(C),gt=C.material;gt.visible&&m.push(C,lt,gt,G,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const lt=j.update(C),gt=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(gt)){const _t=lt.groups;for(let Pt=0,It=_t.length;Pt<It;Pt++){const xt=_t[Pt],Xt=gt[xt.materialIndex];Xt&&Xt.visible&&m.push(C,lt,Xt,G,Ft.z,xt)}}else gt.visible&&m.push(C,lt,gt,G,Ft.z,null)}}const nt=C.children;for(let lt=0,gt=nt.length;lt<gt;lt++)Oo(nt[lt],F,G,W)}function il(C,F,G,W){const B=C.opaque,nt=C.transmissive,lt=C.transparent;p.setupLightsView(G),Q===!0&&tt.setGlobalState(_.clippingPlanes,G),W&&wt.viewport(R.copy(W)),B.length>0&&rr(B,F,G),nt.length>0&&rr(nt,F,G),lt.length>0&&rr(lt,F,G),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function sl(C,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Bi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ir:kn,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[W.id],lt=W.viewport||R;nt.setSize(lt.z,lt.w);const gt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(U),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),Bt&&Tt.render(G);const _t=_.toneMapping;_.toneMapping=li;const Pt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Q===!0&&tt.setGlobalState(_.clippingPlanes,W),rr(C,G,W),D.updateMultisampleRenderTarget(nt),D.updateRenderTargetMipmap(nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let xt=0,Xt=F.length;xt<Xt;xt++){const ee=F[xt],re=ee.object,Ye=ee.geometry,qt=ee.material,yt=ee.group;if(qt.side===Ke&&re.layers.test(W.layers)){const Pn=qt.side;qt.side=We,qt.needsUpdate=!0,rl(re,G,W,Ye,qt,yt),qt.side=Pn,qt.needsUpdate=!0,It=!0}}It===!0&&(D.updateMultisampleRenderTarget(nt),D.updateRenderTargetMipmap(nt))}_.setRenderTarget(gt),_.setClearColor(U,z),Pt!==void 0&&(W.viewport=Pt),_.toneMapping=_t}function rr(C,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,nt=C.length;B<nt;B++){const lt=C[B],gt=lt.object,_t=lt.geometry,Pt=W===null?lt.material:W,It=lt.group;gt.layers.test(G.layers)&&rl(gt,F,G,_t,Pt,It)}}function rl(C,F,G,W,B,nt){C.onBeforeRender(_,F,G,W,B,nt),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(_,F,G,W,C,nt),B.transparent===!0&&B.side===Ke&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,_.renderBufferDirect(G,F,W,B,C,nt),B.side=Cn,B.needsUpdate=!0,_.renderBufferDirect(G,F,W,B,C,nt),B.side=Ke):_.renderBufferDirect(G,F,W,B,C,nt),C.onAfterRender(_,F,G,W,B,nt)}function or(C,F,G){F.isScene!==!0&&(F=ie);const W=Et.get(C),B=p.state.lights,nt=p.state.shadowsArray,lt=B.state.version,gt=vt.getParameters(C,B.state,nt,F,G),_t=vt.getProgramCacheKey(gt);let Pt=W.programs;W.environment=C.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(C.isMeshStandardMaterial?V:T).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Pt===void 0&&(C.addEventListener("dispose",Lt),Pt=new Map,W.programs=Pt);let It=Pt.get(_t);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===lt)return al(C,gt),It}else gt.uniforms=vt.getUniforms(C),C.onBeforeCompile(gt,_),It=vt.acquireProgram(gt,_t),Pt.set(_t,It),W.uniforms=gt.uniforms;const xt=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(xt.clippingPlanes=tt.uniform),al(C,gt),W.needsLights=Ku(C),W.lightsStateVersion=lt,W.needsLights&&(xt.ambientLightColor.value=B.state.ambient,xt.lightProbe.value=B.state.probe,xt.directionalLights.value=B.state.directional,xt.directionalLightShadows.value=B.state.directionalShadow,xt.spotLights.value=B.state.spot,xt.spotLightShadows.value=B.state.spotShadow,xt.rectAreaLights.value=B.state.rectArea,xt.ltc_1.value=B.state.rectAreaLTC1,xt.ltc_2.value=B.state.rectAreaLTC2,xt.pointLights.value=B.state.point,xt.pointLightShadows.value=B.state.pointShadow,xt.hemisphereLights.value=B.state.hemi,xt.directionalShadowMap.value=B.state.directionalShadowMap,xt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xt.spotShadowMap.value=B.state.spotShadowMap,xt.spotLightMatrix.value=B.state.spotLightMatrix,xt.spotLightMap.value=B.state.spotLightMap,xt.pointShadowMap.value=B.state.pointShadowMap,xt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function ol(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=go.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function al(C,F){const G=Et.get(C);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Zu(C,F,G,W,B){F.isScene!==!0&&(F=ie),D.resetTextureUnits();const nt=F.fog,lt=W.isMeshStandardMaterial?F.environment:null,gt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:As,_t=(W.isMeshStandardMaterial?V:T).get(W.envMap||lt),Pt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),xt=!!G.morphAttributes.position,Xt=!!G.morphAttributes.normal,ee=!!G.morphAttributes.color;let re=li;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(re=_.toneMapping);const Ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qt=Ye!==void 0?Ye.length:0,yt=Et.get(W),Pn=p.state.lights;if(Q===!0&&(mt===!0||C!==S)){const rn=C===S&&W.id===M;tt.setState(W,C,rn)}let jt=!1;W.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Pn.state.version||yt.outputColorSpace!==gt||B.isBatchedMesh&&yt.batching===!1||!B.isBatchedMesh&&yt.batching===!0||B.isBatchedMesh&&yt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&yt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&yt.instancing===!1||!B.isInstancedMesh&&yt.instancing===!0||B.isSkinnedMesh&&yt.skinning===!1||!B.isSkinnedMesh&&yt.skinning===!0||B.isInstancedMesh&&yt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&yt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&yt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&yt.instancingMorph===!1&&B.morphTexture!==null||yt.envMap!==_t||W.fog===!0&&yt.fog!==nt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==Pt||yt.vertexTangents!==It||yt.morphTargets!==xt||yt.morphNormals!==Xt||yt.morphColors!==ee||yt.toneMapping!==re||yt.morphTargetsCount!==qt)&&(jt=!0):(jt=!0,yt.__version=W.version);let pn=yt.currentProgram;jt===!0&&(pn=or(W,F,B));let Hi=!1,Qe=!1,Ps=!1;const oe=pn.getUniforms(),Mn=yt.uniforms;if(wt.useProgram(pn.program)&&(Hi=!0,Qe=!0,Ps=!0),W.id!==M&&(M=W.id,Qe=!0),Hi||S!==C){wt.buffers.depth.getReversed()?(rt.copy(C.projectionMatrix),kd(rt),Gd(rt),oe.setValue(O,"projectionMatrix",rt)):oe.setValue(O,"projectionMatrix",C.projectionMatrix),oe.setValue(O,"viewMatrix",C.matrixWorldInverse);const Xn=oe.map.cameraPosition;Xn!==void 0&&Xn.setValue(O,Rt.setFromMatrixPosition(C.matrixWorld)),Ht.logarithmicDepthBuffer&&oe.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&oe.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Qe=!0,Ps=!0)}if(B.isSkinnedMesh){oe.setOptional(O,B,"bindMatrix"),oe.setOptional(O,B,"bindMatrixInverse");const rn=B.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),oe.setValue(O,"boneTexture",rn.boneTexture,D))}B.isBatchedMesh&&(oe.setOptional(O,B,"batchingTexture"),oe.setValue(O,"batchingTexture",B._matricesTexture,D),oe.setOptional(O,B,"batchingIdTexture"),oe.setValue(O,"batchingIdTexture",B._indirectTexture,D),oe.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&oe.setValue(O,"batchingColorTexture",B._colorsTexture,D));const Ds=G.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Ct.update(B,G,pn),(Qe||yt.receiveShadow!==B.receiveShadow)&&(yt.receiveShadow=B.receiveShadow,oe.setValue(O,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Mn.envMap.value=_t,Mn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Mn.envMapIntensity.value=F.environmentIntensity),Qe&&(oe.setValue(O,"toneMappingExposure",_.toneMappingExposure),yt.needsLights&&$u(Mn,Ps),nt&&W.fog===!0&&at.refreshFogUniforms(Mn,nt),at.refreshMaterialUniforms(Mn,W,k,Y,p.state.transmissionRenderTarget[C.id]),go.upload(O,ol(yt),Mn,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(go.upload(O,ol(yt),Mn,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&oe.setValue(O,"center",B.center),oe.setValue(O,"modelViewMatrix",B.modelViewMatrix),oe.setValue(O,"normalMatrix",B.normalMatrix),oe.setValue(O,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const rn=W.uniformsGroups;for(let Xn=0,Yn=rn.length;Xn<Yn;Xn++){const cl=rn[Xn];N.update(cl,pn),N.bind(cl,pn)}}return pn}function $u(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function Ku(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,F,G){Et.get(C.texture).__webglTexture=F,Et.get(C.depthTexture).__webglTexture=G;const W=Et.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const G=Et.get(C);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,G=0){A=C,E=F,b=G;let W=!0,B=null,nt=!1,lt=!1;if(C){const _t=Et.get(C);if(_t.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(_t.__hasExternalTextures)D.rebindTextures(C,Et.get(C.texture).__webglTexture,Et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const xt=C.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&Et.has(xt)&&(C.width!==xt.image.width||C.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const Pt=C.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const It=Et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(It[F])?B=It[F][G]:B=It[F],nt=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?B=Et.get(C).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[G]:B=It,R.copy(C.viewport),L.copy(C.scissor),I=C.scissorTest}else R.copy(pt).multiplyScalar(k).floor(),L.copy(At).multiplyScalar(k).floor(),I=Wt;if(wt.bindFramebuffer(O.FRAMEBUFFER,B)&&W&&wt.drawBuffers(C,B),wt.viewport(R),wt.scissor(L),wt.setScissorTest(I),nt){const _t=Et.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,G)}else if(lt){const _t=Et.get(C.texture),Pt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Pt)}M=-1},this.readRenderTargetPixels=function(C,F,G,W,B,nt,lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){wt.bindFramebuffer(O.FRAMEBUFFER,gt);try{const _t=C.texture,Pt=_t.format,It=_t.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-W&&G>=0&&G<=C.height-B&&O.readPixels(F,G,W,B,Ut.convert(Pt),Ut.convert(It),nt)}finally{const _t=A!==null?Et.get(A).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(C,F,G,W,B,nt,lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=C.texture,Pt=_t.format,It=_t.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-W&&G>=0&&G<=C.height-B){wt.bindFramebuffer(O.FRAMEBUFFER,gt);const xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,nt.byteLength,O.STREAM_READ),O.readPixels(F,G,W,B,Ut.convert(Pt),Ut.convert(It),0);const Xt=A!==null?Et.get(A).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,Xt);const ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vd(O,ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,nt),O.deleteBuffer(xt),O.deleteSync(ee),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,F=null,G=0){C.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-G),B=Math.floor(C.image.width*W),nt=Math.floor(C.image.height*W),lt=F!==null?F.x:0,gt=F!==null?F.y:0;D.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,lt,gt,B,nt),wt.unbindTexture()},this.copyTextureToTexture=function(C,F,G=null,W=null,B=0){C.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],F=arguments[2],B=arguments[3]||0,G=null);let nt,lt,gt,_t,Pt,It,xt,Xt,ee;const re=C.isCompressedTexture?C.mipmaps[B]:C.image;G!==null?(nt=G.max.x-G.min.x,lt=G.max.y-G.min.y,gt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,Pt=G.min.y,It=G.isBox3?G.min.z:0):(nt=re.width,lt=re.height,gt=re.depth||1,_t=0,Pt=0,It=0),W!==null?(xt=W.x,Xt=W.y,ee=W.z):(xt=0,Xt=0,ee=0);const Ye=Ut.convert(F.format),qt=Ut.convert(F.type);let yt;F.isData3DTexture?(D.setTexture3D(F,0),yt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(D.setTexture2DArray(F,0),yt=O.TEXTURE_2D_ARRAY):(D.setTexture2D(F,0),yt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Pn=O.getParameter(O.UNPACK_ROW_LENGTH),jt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),pn=O.getParameter(O.UNPACK_SKIP_PIXELS),Hi=O.getParameter(O.UNPACK_SKIP_ROWS),Qe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,re.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_t),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It);const Ps=C.isDataArrayTexture||C.isData3DTexture,oe=F.isDataArrayTexture||F.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Mn=Et.get(C),Ds=Et.get(F),rn=Et.get(Mn.__renderTarget),Xn=Et.get(Ds.__renderTarget);wt.bindFramebuffer(O.READ_FRAMEBUFFER,rn.__webglFramebuffer),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Yn=0;Yn<gt;Yn++)Ps&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.get(C).__webglTexture,B,It+Yn),C.isDepthTexture?(oe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.get(F).__webglTexture,B,ee+Yn),O.blitFramebuffer(_t,Pt,nt,lt,xt,Xt,nt,lt,O.DEPTH_BUFFER_BIT,O.NEAREST)):oe?O.copyTexSubImage3D(yt,B,xt,Xt,ee+Yn,_t,Pt,nt,lt):O.copyTexSubImage2D(yt,B,xt,Xt,ee+Yn,_t,Pt,nt,lt);wt.bindFramebuffer(O.READ_FRAMEBUFFER,null),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else oe?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(yt,B,xt,Xt,ee,nt,lt,gt,Ye,qt,re.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,B,xt,Xt,ee,nt,lt,gt,Ye,re.data):O.texSubImage3D(yt,B,xt,Xt,ee,nt,lt,gt,Ye,qt,re):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,xt,Xt,nt,lt,Ye,qt,re.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,xt,Xt,re.width,re.height,Ye,re.data):O.texSubImage2D(O.TEXTURE_2D,B,xt,Xt,nt,lt,Ye,qt,re);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,jt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Hi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),B===0&&F.generateMipmaps&&O.generateMipmap(yt),wt.unbindTexture()},this.copyTextureToTexture3D=function(C,F,G=null,W=null,B=0){return C.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,C=arguments[2],F=arguments[3],B=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,F,G,W,B)},this.initRenderTarget=function(C){Et.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),wt.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,wt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}class Mo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new Mo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class t0 extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pa extends He{constructor(t=null,e=1,n=1,s,r,o,a,c,l=nn,h=nn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function ma(i,t){return i-t}function e0(i,t){return i.z-t.z}function n0(i,t){return t.z-i.z}class i0{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const je=new Ot,s0=new Mt(1,1,1),ga=new Lo,Rr=new he,bi=new dn,Bs=new P,oh=new P,r0=new P,_a=new i0,Ne=new et,Pr=[];function o0(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function wi(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class a0 extends et{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,s){super(new Qt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new pa(e,t,t,en,vn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new pa(e,t,t,Ro,hi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new pa(e,t,t,en,vn);n.colorSpace=kt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new ne(h,c,l);e.setAttribute(r,u)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new ne(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new he);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,je),this.getBoundingBoxAt(r,Rr).applyMatrix4(je),t.union(Rr)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,je),this.getBoundingSphereAt(r,bi).applyMatrix4(je),t.union(bi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ma),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;je.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(s0.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ma),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const u=e.getAttribute(h),d=n.getAttribute(h);o0(u,d,c);const f=u.itemSize;for(let g=u.count,v=l;g<v;g++){const m=c+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(s){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,c+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=s[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,g=f.array,v=t-u;for(let m=h;m<h+d;m++)g[m]=g[m]+v;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(const f in d){const g=d[f],{array:v,itemSize:m}=g;v.copyWithin(t*m,h*m,(h+u)*m),g.addUpdateRange(t*m,u*m)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new he,o=n.index,a=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(Bs.fromBufferAttribute(a,h))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new dn;this.getBoundingBoxAt(t,Rr),Rr.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=s.start,h=s.start+s.count;l<h;l++){let u=l;o&&(u=o.getX(u)),Bs.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(Bs))}r.radius=Math.sqrt(c),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._instanceInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,s=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=s.length||s[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(ma);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);wi(this._multiDrawCounts,s),wi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),wi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),wi(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),wi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Qt,this._initializeGeometry(r));const o=this.geometry;r.index&&wi(r.index.array,o.index.array);for(const a in r.attributes)wi(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Ne.material=this.material,Ne.geometry.index=o.index,Ne.geometry.attributes=o.attributes,Ne.geometry.boundingBox===null&&(Ne.geometry.boundingBox=new he),Ne.geometry.boundingSphere===null&&(Ne.geometry.boundingSphere=new dn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,h=s[l];Ne.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Ne.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ne.geometry.boundingBox),this.getBoundingSphereAt(l,Ne.geometry.boundingSphere),Ne.raycast(t,Pr);for(let u=0,d=Pr.length;u<d;u++){const f=Pr[u];f.object=this,f.batchId=a,e.push(f)}Pr.length=0}Ne.material=null,Ne.geometry.index=null,Ne.geometry.attributes={},Ne.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(je.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ga.setFromProjectionMatrix(je,t.coordinateSystem));let v=0;if(this.sortObjects){je.copy(this.matrixWorld).invert(),Bs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(je),oh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(je);for(let x=0,y=c.length;x<y;x++)if(c[x].visible&&c[x].active){const _=c[x].geometryIndex;this.getMatrixAt(x,je),this.getBoundingSphereAt(_,bi).applyMatrix4(je);let w=!1;if(d&&(w=!ga.intersectsSphere(bi)),!w){const E=u[_],b=r0.subVectors(bi.center,Bs).dot(oh);_a.push(E.start,E.count,b,x)}}const m=_a.list,p=this.customSort;p===null?m.sort(r.transparent?n0:e0):p.call(this,m,n);for(let x=0,y=m.length;x<y;x++){const _=m[x];l[v]=_.start*a,h[v]=_.count,g[v]=_.index,v++}_a.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const x=c[m].geometryIndex;let y=!1;if(d&&(this.getMatrixAt(m,je),this.getBoundingSphereAt(x,bi).applyMatrix4(je),y=!ga.intersectsSphere(bi)),!y){const _=u[x];l[v]=_.start*a,h[v]=_.count,g[v]=m,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class zi extends mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Eo=new P,bo=new P,ah=new Ot,Os=new Cs,Dr=new dn,xa=new P,ch=new P;class ln extends ge{constructor(t=new Qt,e=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Eo.fromBufferAttribute(e,s-1),bo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Eo.distanceTo(bo);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;ah.copy(s).invert(),Os.copy(t.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),x=h.getX(v+1),y=Lr(this,t,Os,c,p,x);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Lr(this,t,Os,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=Lr(this,t,Os,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Lr(this,t,Os,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Eo.fromBufferAttribute(o,s),bo.fromBufferAttribute(o,r),e.distanceSqToSegment(Eo,bo,xa,ch)>n)return;xa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xa);if(!(c<t.near||c>t.far))return{distance:c,point:ch.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const lh=new P,hh=new P;class fi extends ln{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lh.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lh.distanceTo(hh);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fu extends ln{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Wc extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uh=new Ot,bc=new Cs,Ir=new dn,Ur=new P;class Uo extends ge{constructor(t=new Qt,e=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;uh.copy(s).invert(),bc.copy(t.ray).applyMatrix4(uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);Ur.fromBufferAttribute(u,m),dh(Ur,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Ur.fromBufferAttribute(u,g),dh(Ur,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dh(i,t,e,n,s,r,o){const a=bc.distanceSqToPoint(i);if(a<e){const c=new P;bc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class c0 extends He{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Te extends Qt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function x(){const _=new P,w=new P;let E=0;const b=(e-t)/n;for(let A=0;A<=r;A++){const M=[],S=A/r,R=S*(e-t)+t;for(let L=0;L<=s;L++){const I=L/s,U=I*c+a,z=Math.sin(U),H=Math.cos(U);w.x=R*z,w.y=-S*n+m,w.z=R*H,u.push(w.x,w.y,w.z),_.set(z,b,H).normalize(),d.push(_.x,_.y,_.z),f.push(I,1-S),M.push(g++)}v.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){const S=v[M][A],R=v[M+1][A],L=v[M+1][A+1],I=v[M][A+1];(t>0||M!==0)&&(h.push(S,R,I),E+=3),(e>0||M!==r-1)&&(h.push(R,L,I),E+=3)}l.addGroup(p,E,0),p+=E}function y(_){const w=g,E=new St,b=new P;let A=0;const M=_===!0?t:e,S=_===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const R=g;for(let L=0;L<=s;L++){const U=L/s*c+a,z=Math.cos(U),H=Math.sin(U);b.x=M*H,b.y=m*S,b.z=M*z,u.push(b.x,b.y,b.z),d.push(0,S,0),E.x=z*.5+.5,E.y=H*.5*S+.5,f.push(E.x,E.y),g++}for(let L=0;L<s;L++){const I=w+L,U=R+L;_===!0?h.push(U,U+1,I):h.push(U+1,U,I),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xc extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yc extends Qt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new P,_=new P,w=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],_),f(e[E+2],w),c(y,_,w,x)}function c(x,y,_,w){const E=w+1,b=[];for(let A=0;A<=E;A++){b[A]=[];const M=x.clone().lerp(_,A/E),S=y.clone().lerp(_,A/E),R=E-A;for(let L=0;L<=R;L++)L===0&&A===E?b[A][L]=M:b[A][L]=M.clone().lerp(S,L/R)}for(let A=0;A<E;A++)for(let M=0;M<2*(E-A)-1;M++){const S=Math.floor(M/2);M%2===0?(d(b[A][S+1]),d(b[A+1][S]),d(b[A][S])):(d(b[A][S+1]),d(b[A+1][S+1]),d(b[A+1][S]))}}function l(x){const y=new P;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const x=new P;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const _=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;o.push(_,1-w)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],_=o[x+2],w=o[x+4],E=Math.max(y,_,w),b=Math.min(y,_,w);E>.9&&b<.1&&(y<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const x=new P,y=new P,_=new P,w=new P,E=new St,b=new St,A=new St;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),b.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),w.copy(x).add(y).add(_).divideScalar(3);const R=m(w);v(E,S+0,x,R),v(b,S+2,y,R),v(A,S+4,_,R)}}function v(x,y,_,w){w<0&&x.x===1&&(o[y]=x.x-1),_.x===0&&_.z===0&&(o[y]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.vertices,t.indices,t.radius,t.details)}}const Nr=new P,Fr=new P,va=new P,Br=new Ce;class fh extends Qt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Js*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Br;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Br.getNormal(va),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const y=(x+1)%3,_=u[x],w=u[y],E=Br[h[x]],b=Br[h[y]],A=`${_}_${w}`,M=`${w}_${_}`;M in d&&d[M]?(va.dot(d[M].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(b.x,b.y,b.z)),d[M]=null):A in d||(d[A]={index0:l[x],index1:l[y],normal:va.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Nr.fromBufferAttribute(a,v),Fr.fromBufferAttribute(a,m),f.push(Nr.x,Nr.y,Nr.z),f.push(Fr.x,Fr.y,Fr.z)}this.setAttribute("position",new Yt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ms extends Yc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ms(t.radius,t.detail)}}class No extends Qt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const E=w/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],_=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(y,_,E),(p!==n-1||c<Math.PI)&&f.push(_,w,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class si extends Qt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(v,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qc extends mi{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ph={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class l0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const h0=new l0;class jc{constructor(t){this.manager=t!==void 0?t:h0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}jc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class u0 extends Error{constructor(t,e){super(t),this.response=e}}class d0 extends jc{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ph.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Fn[t]!==void 0){Fn[t].push({onLoad:e,onProgress:n,onError:s});return}Fn[t]=[],Fn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Fn[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,b=h.length;E<b;E++){const A=h[E];A.onProgress&&A.onProgress(w)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new u0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ph.add(t,l);const h=Fn[t];delete Fn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Fn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Fn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Bu extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ya=new Ot,mh=new P,gh=new P;class f0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p0 extends f0{constructor(){super(new Pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _h extends Bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class m0 extends Bu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class g0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xh(){return performance.now()}const vh=new Ot;class wo{constructor(t,e,n=0,s=1/0){this.ray=new Cs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(yh),n}}function yh(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)wc(r[o],t,e,!0)}}class Sh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mh=new P,Or=new P;class Gn{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Mh.subVectors(t,this.start),Or.subVectors(this.end,this.start);const n=Or.dot(Or);let r=Or.dot(Mh)/n;return e&&(r=Be(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class _0 extends fi{constructor(t=10,e=10,n=4473924,s=8947848){n=new Mt(n),s=new Mt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const v=d===r?n:s;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const h=new Qt;h.setAttribute("position",new Yt(c,3)),h.setAttribute("color",new Yt(l,3));const u=new zi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class x0 extends fi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Qt;r.setIndex(new ne(n,1)),r.setAttribute("position",new Yt(s,3)),super(r,new zi({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class v0 extends fi{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Qt;s.setAttribute("position",new Yt(e,3)),s.setAttribute("color",new Yt(n,3));const r=new zi({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Mt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ou extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nr);const zu=0,y0=1,S0=2,Eh=2,Sa=1.25,bh=1,Oe=32,ye=Oe/4,Hu=65535,_o=Math.pow(2,-24),Zc=Symbol("SKIP_GENERATION"),Vu={strategy:zu,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Zc]:!1};function de(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function wh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Th(i,t){t.set(i)}function Ah(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function zr(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function zs(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Se(i,t){return t[i+15]===Hu}function ze(i,t){return t[i+6]}function Ge(i,t){return t[i+14]}function Re(i){return i+ye}function Pe(i,t){const e=t[i+6];return i+e*ye}function $c(i,t){return t[i+7]}function Ma(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,g=-1/0,v=-1/0,m=-1/0;const p=i.offset||0;for(let x=(t-p)*6,y=(t+e-p)*6;x<y;x+=6){const _=i[x+0],w=i[x+1],E=_-w,b=_+w;E<r&&(r=E),b>c&&(c=b),_<u&&(u=_),_>g&&(g=_);const A=i[x+2],M=i[x+3],S=A-M,R=A+M;S<o&&(o=S),R>l&&(l=R),A<d&&(d=A),A>v&&(v=A);const L=i[x+4],I=i[x+5],U=L-I,z=L+I;U<a&&(a=U),z>h&&(h=z),L<f&&(f=L),L>m&&(m=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=h,s[0]=u,s[1]=d,s[2]=f,s[3]=g,s[4]=v,s[5]=m}const On=32,M0=(i,t)=>i.candidate-t.candidate,Jn=new Array(On).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Hr=new Float32Array(6);function E0(i,t,e,n,s,r){let o=-1,a=0;if(r===zu)o=wh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===y0)o=wh(i),o!==-1&&(a=b0(e,n,s,o));else if(r===S0){const c=zs(i);let l=Sa*s;const h=e.offset||0,u=(n-h)*6,d=(n+s-h)*6;for(let f=0;f<3;f++){const g=t[f],p=(t[f+3]-g)/On;if(s<On/4){const x=[...Jn];x.length=s;let y=0;for(let w=u;w<d;w+=6,y++){const E=x[y];E.candidate=e[w+2*f],E.count=0;const{bounds:b,leftCacheBounds:A,rightCacheBounds:M}=E;for(let S=0;S<3;S++)M[S]=1/0,M[S+3]=-1/0,A[S]=1/0,A[S+3]=-1/0,b[S]=1/0,b[S+3]=-1/0;zr(w,e,b)}x.sort(M0);let _=s;for(let w=0;w<_;w++){const E=x[w];for(;w+1<_&&x[w+1].candidate===E.candidate;)x.splice(w+1,1),_--}for(let w=u;w<d;w+=6){const E=e[w+2*f];for(let b=0;b<_;b++){const A=x[b];E>=A.candidate?zr(w,e,A.rightCacheBounds):(zr(w,e,A.leftCacheBounds),A.count++)}}for(let w=0;w<_;w++){const E=x[w],b=E.count,A=s-E.count,M=E.leftCacheBounds,S=E.rightCacheBounds;let R=0;b!==0&&(R=zs(M)/c);let L=0;A!==0&&(L=zs(S)/c);const I=bh+Sa*(R*b+L*A);I<l&&(o=f,l=I,a=E.candidate)}}else{for(let _=0;_<On;_++){const w=Jn[_];w.count=0,w.candidate=g+p+_*p;const E=w.bounds;for(let b=0;b<3;b++)E[b]=1/0,E[b+3]=-1/0}for(let _=u;_<d;_+=6){let b=~~((e[_+2*f]-g)/p);b>=On&&(b=On-1);const A=Jn[b];A.count++,zr(_,e,A.bounds)}const x=Jn[On-1];Th(x.bounds,x.rightCacheBounds);for(let _=On-2;_>=0;_--){const w=Jn[_],E=Jn[_+1];Ah(w.bounds,E.rightCacheBounds,w.rightCacheBounds)}let y=0;for(let _=0;_<On-1;_++){const w=Jn[_],E=w.count,b=w.bounds,M=Jn[_+1].rightCacheBounds;E!==0&&(y===0?Th(b,Hr):Ah(b,Hr,Hr)),y+=E;let S=0,R=0;y!==0&&(S=zs(Hr)/c);const L=s-y;L!==0&&(R=zs(M)/c);const I=bh+Sa*(S*y+R*L);I<l&&(o=f,l=I,a=w.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function b0(i,t,e,n){let s=0;const r=i.offset;for(let o=t,a=t+e;o<a;o++)s+=i[(o-r)*6+n*2];return s/e}class Ea{constructor(){this.boundingData=new Float32Array(6)}}function w0(i,t,e,n,s,r){let o=n,a=n+s-1;const c=r.pos,l=r.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+l]<c;)o++;for(;o<=a&&e[(a-h)*6+l]>=c;)a--;if(o<a){for(let u=0;u<t;u++){let d=i[o*t+u];i[o*t+u]=i[a*t+u],i[a*t+u]=d}for(let u=0;u<6;u++){const d=o-h,f=a-h,g=e[d*6+u];e[d*6+u]=e[f*6+u],e[f*6+u]=g}o++,a--}else return o}}let ku,xo,Tc,Gu;const T0=Math.pow(2,32);function Ac(i){return"count"in i?1:1+Ac(i.left)+Ac(i.right)}function A0(i,t,e){return ku=new Float32Array(e),xo=new Uint32Array(e),Tc=new Uint16Array(e),Gu=new Uint8Array(e),Cc(i,t)}function Cc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)ku[e+o]=r[o];if(s)return t.buffer?(Gu.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(xo[e+6]=t.offset,Tc[n+14]=t.count,Tc[n+15]=Hu,i+Oe);{const{left:o,right:a,splitAxis:c}=t,l=i+Oe;let h=Cc(l,o);const u=i/Oe,f=h/Oe-u;if(f>T0)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return xo[e+6]=f,xo[e+7]=c,Cc(h,a)}}function C0(i,t,e,n,s,r){const{maxDepth:o,verbose:a,maxLeafSize:c,strategy:l,onProgress:h}=s,u=i.primitiveBuffer,d=i.primitiveBufferStride,f=new Float32Array(6);let g=!1;const v=new Ea;return Ma(t,e,n,v.boundingData,f),p(v,e,n,f),v;function m(x){h&&h((x-r.offset)/r.count)}function p(x,y,_,w=null,E=0){if(!g&&E>=o&&(g=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),_<=c||E>=o)return m(y+_),x.offset=y,x.count=_,x;const b=E0(x.boundingData,w,t,y,_,l);if(b.axis===-1)return m(y+_),x.offset=y,x.count=_,x;const A=w0(u,d,t,y,_,b);if(A===y||A===y+_)m(y+_),x.offset=y,x.count=_;else{x.splitAxis=b.axis;const M=new Ea,S=y,R=A-y;x.left=M,Ma(t,S,R,M.boundingData,f),p(M,S,R,f,E+1);const L=new Ea,I=A,U=_-R;x.right=L,Ma(t,I,U,L.boundingData,f),p(L,I,U,f,E+1)}return x}}function R0(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(c=>{const l=C0(i,a,c.offset,c.count,t,o),h=Ac(l),u=new e(Oe*h);return A0(0,l,u),u})}class Kc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class P0{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ce=new P0;let ri,gs;const es=[],Vr=new Kc(()=>new he);function D0(i,t,e,n,s,r){ri=Vr.getPrimitive(),gs=Vr.getPrimitive(),es.push(ri,gs),ce.setBuffer(i._roots[t]);const o=Rc(0,i.geometry,e,n,s,r);ce.clearBuffer(),Vr.releasePrimitive(ri),Vr.releasePrimitive(gs),es.pop(),es.pop();const a=es.length;return a>0&&(gs=es[a-1],ri=es[a-2]),o}function Rc(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=ce;let h=i*2;if(Se(h,c)){const g=ze(i,l),v=Ge(h,c);return de(i,a,ri),n(g,v,!1,o,r+i/ye,ri)}else{let L=function(U){const{uint16Array:z,uint32Array:H}=ce;let Y=U*2;for(;!Se(Y,z);)U=Re(U),Y=U*2;return ze(U,H)},I=function(U){const{uint16Array:z,uint32Array:H}=ce;let Y=U*2;for(;!Se(Y,z);)U=Pe(U,H),Y=U*2;return ze(U,H)+Ge(Y,z)};var d=L,f=I;const g=Re(i),v=Pe(i,l);let m=g,p=v,x,y,_,w;if(s&&(_=ri,w=gs,de(m,a,_),de(p,a,w),x=s(_),y=s(w),y<x)){m=v,p=g;const U=x;x=y,y=U,_=w}_||(_=ri,de(m,a,_));const E=Se(m*2,c),b=e(_,E,x,o+1,r+m/ye);let A;if(b===Eh){const U=L(m),H=I(m)-U;A=n(U,H,!0,o+1,r+m/ye,_)}else A=b&&Rc(m,t,e,n,s,r,o+1);if(A)return!0;w=gs,de(p,a,w);const M=Se(p*2,c),S=e(w,M,y,o+1,r+p/ye);let R;if(S===Eh){const U=L(p),H=I(p)-U;R=n(U,H,!0,o+1,r+p/ye,w)}else R=S&&Rc(p,t,e,n,s,r,o+1);return!!R}}const tr=new ce.constructor,To=new ce.constructor,ei=new Kc(()=>new he),ns=new he,is=new he,ba=new he,wa=new he;let Ta=!1;function L0(i,t,e,n){if(Ta)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ta=!0;const s=i._roots,r=t._roots;let o,a=0,c=0;const l=new Ot().copy(e).invert();for(let h=0,u=s.length;h<u;h++){tr.setBuffer(s[h]),c=0;const d=ei.getPrimitive();de(0,tr.float32Array,d),d.applyMatrix4(l);for(let f=0,g=r.length;f<g&&(To.setBuffer(r[f]),o=xn(0,0,e,l,n,a,c,0,0,d),To.clearBuffer(),c+=r[f].byteLength/Oe,!o);f++);if(ei.releasePrimitive(d),tr.clearBuffer(),a+=s[h].byteLength/Oe,o)break}return Ta=!1,o}function xn(i,t,e,n,s,r=0,o=0,a=0,c=0,l=null,h=!1){let u,d;h?(u=To,d=tr):(u=tr,d=To);const f=u.float32Array,g=u.uint32Array,v=u.uint16Array,m=d.float32Array,p=d.uint32Array,x=d.uint16Array,y=i*2,_=t*2,w=Se(y,v),E=Se(_,x);let b=!1;if(E&&w)h?b=s(ze(t,p),Ge(t*2,x),ze(i,g),Ge(i*2,v),c,o+t/ye,a,r+i/ye):b=s(ze(i,g),Ge(i*2,v),ze(t,p),Ge(t*2,x),a,r+i/ye,c,o+t/ye);else if(E){const A=ei.getPrimitive();de(t,m,A),A.applyMatrix4(e);const M=Re(i),S=Pe(i,g);de(M,f,ns),de(S,f,is);const R=A.intersectsBox(ns),L=A.intersectsBox(is);b=R&&xn(t,M,n,e,s,o,r,c,a+1,A,!h)||L&&xn(t,S,n,e,s,o,r,c,a+1,A,!h),ei.releasePrimitive(A)}else{const A=Re(t),M=Pe(t,p);de(A,m,ba),de(M,m,wa);const S=l.intersectsBox(ba),R=l.intersectsBox(wa);if(S&&R)b=xn(i,A,e,n,s,r,o,a,c+1,l,h)||xn(i,M,e,n,s,r,o,a,c+1,l,h);else if(S)if(w)b=xn(i,A,e,n,s,r,o,a,c+1,l,h);else{const L=ei.getPrimitive();L.copy(ba).applyMatrix4(e);const I=Re(i),U=Pe(i,g);de(I,f,ns),de(U,f,is);const z=L.intersectsBox(ns),H=L.intersectsBox(is);b=z&&xn(A,I,n,e,s,o,r,c,a+1,L,!h)||H&&xn(A,U,n,e,s,o,r,c,a+1,L,!h),ei.releasePrimitive(L)}else if(R)if(w)b=xn(i,M,e,n,s,r,o,a,c+1,l,h);else{const L=ei.getPrimitive();L.copy(wa).applyMatrix4(e);const I=Re(i),U=Pe(i,g);de(I,f,ns),de(U,f,is);const z=L.intersectsBox(ns),H=L.intersectsBox(is);b=z&&xn(M,I,n,e,s,o,r,c,a+1,L,!h)||H&&xn(M,U,n,e,s,o,r,c,a+1,L,!h),ei.releasePrimitive(L)}}return b}const Ch=new he,ss=new Float32Array(6);class I0{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Vu,...t},R0(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0;for(let u=t,d=t+e;u<d;u++){this.writePrimitiveBounds(u,ss,0);const[f,g,v,m,p,x]=ss;f<r&&(r=f),m>c&&(c=m),g<o&&(o=g),p>l&&(l=p),v<a&&(a=v),x>h&&(h=x)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=c,n[s+4]=l,n[s+5]=h,n}computePrimitiveBounds(t,e,n){const s=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,ss,0);const[a,c,l,h,u,d]=ss,f=(a+h)/2,g=(c+u)/2,v=(l+d)/2,m=(h-a)/2,p=(u-c)/2,x=(d-l)/2,y=(r-s)*6;n[y+0]=f,n[y+1]=m+(Math.abs(f)+m)*_o,n[y+2]=g,n[y+3]=p+(Math.abs(g)+p)*_o,n[y+4]=v,n[y+5]=x+(Math.abs(v)+x)*_o}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,s=e.length;n<s;n++)e[n]+=t;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/Oe;for(let l=0;l<c;l++){const h=ye*l,u=2*h;Se(u,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){const l=a*2,h=Se(l,r);if(h){const u=s[a+6],d=r[l+14];t(c,h,new Float32Array(n,a*4,6),u,d)}else{const u=Re(a),d=Pe(a,s),f=$c(a,s);t(c,h,new Float32Array(n,a*4,6),f)||(o(u,c+1),o(d,c+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),c=s.byteLength/Oe;for(let l=c-1;l>=0;l--){const h=l*ye,u=h*2;if(Se(u,o)){const f=ze(h,r),g=Ge(u,o);this.writePrimitiveRangeBounds(f,g,ss,0),a.set(ss,h)}else{const f=Re(h),g=Pe(h,r);for(let v=0;v<3;v++){const m=a[f+v],p=a[f+v+3],x=a[g+v],y=a[g+v+3];a[h+v]=m<x?m:x,a[h+v+3]=p>y?p:y}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{de(0,new Float32Array(n),Ch),t.union(Ch)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){const u=s;s=(d,f,g,v,m)=>u(d,f,g,v,m)?!0:a(d,f,this,r,g,v,o)}else s||(r?s=(u,d,f,g)=>a(u,d,this,r,f,g,o):s=(u,d,f)=>f);let c=!1,l=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const f=h[u];if(c=D0(this,u,n,s,e,l),c)break;l+=f.byteLength/Oe}return c}bvhcast(t,e,n){let{intersectsRanges:s}=n;return L0(this,t,e,s)}}function U0(){return typeof SharedArrayBuffer<"u"}function Qc(i){return i.index?i.index.count:i.attributes.position.count}function Fo(i){return Qc(i)/3}function N0(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function F0(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=N0(e,n);i.setIndex(new ne(s,1));for(let r=0;r<e;r++)s[r]=r}}function B0(i,t,e){const n=Qc(i)/e,s=t||i.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function O0(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Rh(i,t,e){const n=B0(i,t,e),s=O0(i,e);if(!s.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,c=Qc(i)/e,l=[];for(const d of s){const{offset:f,count:g}=d,v=f,m=isFinite(g)?g:c-f,p=f+m;v<a&&p>o&&(l.push({pos:Math.max(o,v),isStart:!0}),l.push({pos:Math.min(a,p),isStart:!1}))}l.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let h=0,u=null;for(const d of l){const f=d.pos;h!==0&&f!==u&&r.push({offset:u,count:f-u}),h+=d.isStart?1:-1,u=f}return r}function z0(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,s=i.reduce((l,h)=>l+h.count,0),r=n?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let l=0;l<i.length;l++){const{offset:h,count:u}=i[l];for(let d=0;d<u;d++)a[c+d]=h+d;c+=u}return a}class H0 extends I0{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!U0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Vu,...e},e[Zc]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const s=Rh(e,t.range,n),r=z0(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else F0(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new he))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Rh(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Wn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}Wn.prototype.setFromBox=(function(){const i=new P;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*h+r.z*(1-h);const u=e.dot(i);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})();const V0=(function(){const i=new P,t=new P,e=new P;return function(s,r,o){const a=s.start,c=i,l=r.start,h=t;e.subVectors(a,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const u=e.dot(h),d=h.dot(c),f=h.dot(h),g=e.dot(c),m=c.dot(c)*f-d*d;let p,x;m!==0?p=(u*d-g*f)/m:p=0,x=(u+p*d)/f,o.x=p,o.y=x}})(),Jc=(function(){const i=new St,t=new P,e=new P;return function(s,r,o,a){V0(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;c<0?h=s.start:h=s.end;let u;l<0?u=r.start:u=r.end;const d=t,f=e;if(s.closestPointToPoint(u,!0,t),r.closestPointToPoint(h,!0,e),d.distanceToSquared(u)<=f.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(f);return}}}})(),k0=(function(){const i=new P,t=new P,e=new bn,n=new Gn;return function(r,o){const{radius:a,center:c}=r,{a:l,b:h,c:u}=o;if(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=h,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;const v=o.getPlane(e);if(Math.abs(v.distanceToPoint(c))<=a){const p=v.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})(),G0=["x","y","z"],zn=1e-15,Ph=zn*zn;function an(i){return Math.abs(i)<zn}class Sn extends Ce{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new Wn),this.points=[this.a,this.b,this.c],this.plane=new bn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Gn,this.needsUpdate=!0}intersectsSphere(t){return k0(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const l=r[1],h=o[1];l.subVectors(t,e),h.setFromPoints(l,s);const u=r[2],d=o[2];u.subVectors(e,n),d.setFromPoints(u,s);const f=r[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,s);const v=l.length(),m=u.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<zn?m<zn||p<zn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<zn?p<zn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<zn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Sn.prototype.closestPointToSegment=(function(){const i=new P,t=new P,e=new Gn;return function(s,r=null,o=null){const{start:a,end:c}=s,l=this.points;let h,u=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;e.start.copy(l[d]),e.end.copy(l[f]),Jc(e,s,i,t),h=i.distanceToSquared(t),h<u&&(u=h,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),h=a.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),h=c.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(u)}})();Sn.prototype.intersectsTriangle=(function(){const i=new Sn,t=new Wn,e=new Wn,n=new P,s=new P,r=new P,o=new P,a=new Gn,c=new Gn,l=new P,h=new St,u=new St;function d(y,_,w,E){const b=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?b.copy(y.plane.normal):b.copy(_.plane.normal);const A=y.satBounds,M=y.satAxes;for(let L=1;L<4;L++){const I=A[L],U=M[L];if(t.setFromPoints(U,_.points),I.isSeparated(t)||(o.copy(b).cross(U),t.setFromPoints(o,y.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}const S=_.satBounds,R=_.satAxes;for(let L=1;L<4;L++){const I=S[L],U=R[L];if(t.setFromPoints(U,y.points),I.isSeparated(t)||(o.crossVectors(b,U),t.setFromPoints(o,y.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}return w&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),w.start.set(0,0,0),w.end.set(0,0,0)),!0}function f(y,_,w,E,b,A,M,S,R,L,I){let U=M/(M-S);L.x=E+(b-E)*U,I.start.subVectors(_,y).multiplyScalar(U).add(y),U=M/(M-R),L.y=E+(A-E)*U,I.end.subVectors(w,y).multiplyScalar(U).add(y)}function g(y,_,w,E,b,A,M,S,R,L,I){if(b>0)f(y.c,y.a,y.b,E,_,w,R,M,S,L,I);else if(A>0)f(y.b,y.a,y.c,w,_,E,S,M,R,L,I);else if(S*R>0||M!=0)f(y.a,y.b,y.c,_,w,E,M,S,R,L,I);else if(S!=0)f(y.b,y.a,y.c,w,_,E,S,M,R,L,I);else if(R!=0)f(y.c,y.a,y.b,E,_,w,R,M,S,L,I);else return!0;return!1}function v(y,_,w,E){const b=_.degenerateSegment,A=y.plane.distanceToPoint(b.start),M=y.plane.distanceToPoint(b.end);return an(A)?an(M)?d(y,_,w,E):(w&&(w.start.copy(b.start),w.end.copy(b.start)),y.containsPoint(b.start)):an(M)?(w&&(w.start.copy(b.end),w.end.copy(b.end)),y.containsPoint(b.end)):y.plane.intersectLine(b,n)!=null?(w&&(w.start.copy(n),w.end.copy(n)),y.containsPoint(n)):!1}function m(y,_,w){const E=_.a;return an(y.plane.distanceToPoint(E))&&y.containsPoint(E)?(w&&(w.start.copy(E),w.end.copy(E)),!0):!1}function p(y,_,w){const E=y.degenerateSegment,b=_.a;return E.closestPointToPoint(b,!0,n),b.distanceToSquared(n)<Ph?(w&&(w.start.copy(b),w.end.copy(b)),!0):!1}function x(y,_,w,E){if(y.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){const b=y.degenerateSegment,A=_.degenerateSegment,M=s,S=r;b.delta(M),A.delta(S);const R=n.subVectors(A.start,b.start),L=M.x*S.y-M.y*S.x;if(an(L))return!1;const I=(R.x*S.y-R.y*S.x)/L,U=-(M.x*R.y-M.y*R.x)/L;if(I<0||I>1||U<0||U>1)return!1;const z=b.start.z+M.z*I,H=A.start.z+S.z*U;return an(z-H)?(w&&(w.start.copy(b.start).addScaledVector(M,I),w.end.copy(b.start).addScaledVector(M,I)),!0):!1}else return _.isDegenerateIntoPoint?p(y,_,w):v(_,y,w,E);else{if(y.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(y.a)<Ph?(w&&(w.start.copy(y.a),w.end.copy(y.a)),!0):!1:_.isDegenerateIntoSegment?p(_,y,w):m(_,y,w);if(_.isDegenerateIntoPoint)return m(y,_,w);if(_.isDegenerateIntoSegment)return v(y,_,w,E)}}return function(_,w=null,E=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(i.copy(_),i.update(),_=i);const b=x(this,_,w,E);if(b!==void 0)return b;const A=this.plane,M=_.plane;let S=M.distanceToPoint(this.a),R=M.distanceToPoint(this.b),L=M.distanceToPoint(this.c);an(S)&&(S=0),an(R)&&(R=0),an(L)&&(L=0);const I=S*R,U=S*L;if(I>0&&U>0)return!1;let z=A.distanceToPoint(_.a),H=A.distanceToPoint(_.b),Y=A.distanceToPoint(_.c);an(z)&&(z=0),an(H)&&(H=0),an(Y)&&(Y=0);const k=z*H,J=z*Y;if(k>0&&J>0)return!1;s.copy(A.normal),r.copy(M.normal);const st=s.cross(r);let pt=0,At=Math.abs(st.x);const Wt=Math.abs(st.y);Wt>At&&(At=Wt,pt=1),Math.abs(st.z)>At&&(pt=2);const Q=G0[pt],mt=this.a[Q],rt=this.b[Q],bt=this.c[Q],Rt=_.a[Q],Ft=_.b[Q],ie=_.c[Q];if(g(this,mt,rt,bt,I,U,S,R,L,h,a))return d(this,_,w,E);if(g(_,Rt,Ft,ie,k,J,z,H,Y,u,c))return d(this,_,w,E);if(h.y<h.x){const Bt=h.y;h.y=h.x,h.x=Bt,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(u.y<u.x){const Bt=u.y;u.y=u.x,u.x=Bt,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return h.y<u.x||u.y<h.x?!1:(w&&(u.x>h.x?w.start.copy(c.start):w.start.copy(a.start),u.y<h.y?w.end.copy(c.end):w.end.copy(a.end)),!0)}})();Sn.prototype.distanceToPoint=(function(){const i=new P;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Sn.prototype.distanceToTriangle=(function(){const i=new P,t=new P,e=["a","b","c"],n=new Gn,s=new Gn;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=e[u],g=o[f];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<h&&(h=d,a&&a.copy(i),c&&c.copy(g));const v=this[f];o.closestPointToPoint(v,i),d=v.distanceToSquared(i),d<h&&(h=d,a&&a.copy(v),c&&c.copy(i))}for(let u=0;u<3;u++){const d=e[u],f=e[(u+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const v=e[g],m=e[(g+1)%3];s.set(o[v],o[m]),Jc(n,s,i,t);const p=i.distanceToSquared(t);p<h&&(h=p,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(h)}})();class Xe{constructor(t,e,n){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new Ot,this.invMatrix=new Ot,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new Wn),this.alignedSatBounds=new Array(3).fill().map(()=>new Wn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Xe.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*l|2*h|4*u,f=s[d];f.x=l?n.x:e.x,f.y=h?n.y:e.y,f.z=u?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){const h=o[l],u=r[l],d=1<<l,f=s[d];h.subVectors(a,f),u.setFromPoints(h,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Xe.prototype.intersectsBox=(function(){const i=new Wn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=o[c],h=r[c];if(i.setFromBox(l,e),h.isSeparated(i))return!1}return!0}})();Xe.prototype.intersectsTriangle=(function(){const i=new Sn,t=new Array(3),e=new Wn,n=new Wn,s=new P;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=c[d];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const l=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){const f=l[d],g=h[d];if(e.setFromPoints(g,u),f.isSeparated(e))return!1}for(let d=0;d<3;d++){const f=c[d];for(let g=0;g<4;g++){const v=h[g];if(s.crossVectors(f,v),e.setFromPoints(s,t),n.setFromPoints(s,u),e.isSeparated(n))return!1}}return!0}})();Xe.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Xe.prototype.distanceToPoint=(function(){const i=new P;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Xe.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Gn),e=new Array(12).fill().map(()=>new Gn),n=new P,s=new P;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const h=a*a,u=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(u,d);const x=p.distanceToSquared(s);if(x<g&&(g=x,c&&c.copy(p),l&&l.copy(s),x<h))return Math.sqrt(x)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const y=(m+1)%3,_=(m+2)%3,w=p<<y|x<<_,E=1<<m|p<<y|x<<_,b=f[w],A=f[E];t[v].set(b,A);const S=i[m],R=i[y],L=i[_],I=e[v],U=I.start,z=I.end;U[S]=u[S],U[R]=p?u[R]:d[R],U[L]=x?u[L]:d[R],z[S]=d[S],z[R]=p?u[R]:d[R],z[L]=x?u[L]:d[R],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){s.x=m?d.x:u.x,s.y=p?d.y:u.y,s.z=x?d.z:u.z,this.closestPointToPoint(s,n);const y=s.distanceToSquared(n);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(s),y<h))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=t[m];for(let x=0;x<12;x++){const y=e[x];Jc(p,y,n,s);const _=n.distanceToSquared(s);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<h))return Math.sqrt(_)}}return Math.sqrt(g)}})();class W0 extends Kc{constructor(){super(()=>new Sn)}}const un=new W0,Hs=new P,Aa=new P;function X0(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:h=>(Hs.copy(t).clamp(h.min,h.max),Hs.distanceToSquared(t)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(t,Hs);const d=t.distanceToSquared(Hs);return d<a&&(Aa.copy(Hs),a=d,c=u),d<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(Aa):e.point=Aa.clone(),e.distance=l,e.faceIndex=c,e}const kr=parseInt(nr)>=169,Y0=parseInt(nr)<=161,Ti=new P,Ai=new P,Ci=new P,Gr=new St,Wr=new St,Xr=new St,Dh=new P,Lh=new P,Ih=new P,Vs=new P;function q0(i,t,e,n,s,r,o,a){let c;if(r===We?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==Ke,s),c===null)return null;const l=i.origin.distanceTo(s);return l<o||l>a?null:{distance:l,point:s.clone()}}function Uh(i,t,e,n,s,r,o,a,c,l,h){Ti.fromBufferAttribute(t,r),Ai.fromBufferAttribute(t,o),Ci.fromBufferAttribute(t,a);const u=q0(i,Ti,Ai,Ci,Vs,c,l,h);if(u){if(n){Gr.fromBufferAttribute(n,r),Wr.fromBufferAttribute(n,o),Xr.fromBufferAttribute(n,a),u.uv=new St;const f=Ce.getInterpolation(Vs,Ti,Ai,Ci,Gr,Wr,Xr,u.uv);kr||(u.uv=f)}if(s){Gr.fromBufferAttribute(s,r),Wr.fromBufferAttribute(s,o),Xr.fromBufferAttribute(s,a),u.uv1=new St;const f=Ce.getInterpolation(Vs,Ti,Ai,Ci,Gr,Wr,Xr,u.uv1);kr||(u.uv1=f),Y0&&(u.uv2=u.uv1)}if(e){Dh.fromBufferAttribute(e,r),Lh.fromBufferAttribute(e,o),Ih.fromBufferAttribute(e,a),u.normal=new P;const f=Ce.getInterpolation(Vs,Ti,Ai,Ci,Dh,Lh,Ih,u.normal);u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1),kr||(u.normal=f)}const d={a:r,b:o,c:a,normal:new P,materialIndex:0};if(Ce.getNormal(Ti,Ai,Ci,d.normal),u.face=d,u.faceIndex=r,kr){const f=new P;Ce.getBarycoord(Vs,Ti,Ai,Ci,f),u.barycoord=f}}return u}function Nh(i){return i&&i.isMaterial?i.side:i}function Bo(i,t,e,n,s,r,o){const a=n*3;let c=a+0,l=a+1,h=a+2;const{index:u,groups:d}=i;i.index&&(c=u.getX(c),l=u.getX(l),h=u.getX(h));const{position:f,normal:g,uv:v,uv1:m}=i.attributes;if(Array.isArray(t)){const p=n*3;for(let x=0,y=d.length;x<y;x++){const{start:_,count:w,materialIndex:E}=d[x];if(p>=_&&p<_+w){const b=Nh(t[E]),A=Uh(e,f,g,v,m,c,l,h,b,r,o);if(A)if(A.faceIndex=n,A.face.materialIndex=E,s)s.push(A);else return A}}}else{const p=Nh(t),x=Uh(e,f,g,v,m,c,l,h,p,r,o);if(x)if(x.faceIndex=n,x.face.materialIndex=0,s)s.push(x);else return x}return null}function xe(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function j0(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let h=n,u=n+s;h<u;h++)Bo(c,t,e,h,r,o,a)}function Z0(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=Bo(a,t,e,u,null,r,o),f&&f.distance<l&&(h=f,l=f.distance)}return h}function $0(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let h=i,u=t+i;h<u;h++){let d;if(d=h,xe(o,d*3,c,l),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}function K0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(d,f,g=!1){const v=d*2;if(Se(v,a)){const m=ze(d,o),p=Ge(v,a);let x=1/0,y=1/0,_=1/0,w=-1/0,E=-1/0,b=-1/0;for(let A=3*m,M=3*(m+p);A<M;A++){let S=n[A];const R=s.getX(S),L=s.getY(S),I=s.getZ(S);R<x&&(x=R),R>w&&(w=R),L<y&&(y=L),L>E&&(E=L),I<_&&(_=I),I>b&&(b=I)}return c[d+0]!==x||c[d+1]!==y||c[d+2]!==_||c[d+3]!==w||c[d+4]!==E||c[d+5]!==b?(c[d+0]=x,c[d+1]=y,c[d+2]=_,c[d+3]=w,c[d+4]=E,c[d+5]=b,!0):!1}else{const m=Re(d),p=Pe(d,o);let x=g,y=!1,_=!1;if(t){if(!x){const S=m/ye+f/Oe,R=p/ye+f/Oe;y=t.has(S),_=t.has(R),x=!y&&!_}}else y=!0,_=!0;const w=x||y,E=x||_;let b=!1;w&&(b=u(m,f,x));let A=!1;E&&(A=u(p,f,x));const M=b||A;if(M)for(let S=0;S<3;S++){const R=m+S,L=p+S,I=c[R],U=c[R+3],z=c[L],H=c[L+3];c[d+S]=I<z?I:z,c[d+S+3]=U>H?U:H}return M}}}function pi(i,t,e,n,s){let r,o,a,c,l,h;const u=1/e.direction.x,d=1/e.direction.y,f=1/e.direction.z,g=e.origin.x,v=e.origin.y,m=e.origin.z;let p=t[i],x=t[i+3],y=t[i+1],_=t[i+3+1],w=t[i+2],E=t[i+3+2];return u>=0?(r=(p-g)*u,o=(x-g)*u):(r=(x-g)*u,o=(p-g)*u),d>=0?(a=(y-v)*d,c=(_-v)*d):(a=(_-v)*d,c=(y-v)*d),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),f>=0?(l=(w-m)*f,h=(E-m)*f):(l=(E-m)*f,h=(w-m)*f),r>h||l>o)?!1:((l>r||r!==r)&&(r=l),(h<o||o!==o)&&(o=h),r<=s&&o>=n)}function Q0(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let h=n,u=n+s;h<u;h++){let d=l?l[h]:h;Bo(c,t,e,d,r,o,a)}}function J0(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=Bo(a,t,e,c?c[u]:u,null,r,o),f&&f.distance<l&&(h=f,l=f.distance)}return h}function tx(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let h=i,u=t+i;h<u;h++){let d;if(d=e.resolveTriangleIndex(h),xe(o,d*3,c,l),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}function ex(i,t,e,n,s,r,o){ce.setBuffer(i._roots[t]),Pc(0,i,e,n,s,r,o),ce.clearBuffer()}function Pc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ce,h=i*2;if(Se(h,c)){const d=ze(i,l),f=Ge(h,c);j0(t,e,n,d,f,s,r,o)}else{const d=Re(i);pi(d,a,n,r,o)&&Pc(d,t,e,n,s,r,o);const f=Pe(i,l);pi(f,a,n,r,o)&&Pc(f,t,e,n,s,r,o)}}const nx=["x","y","z"];function ix(i,t,e,n,s,r){ce.setBuffer(i._roots[t]);const o=Dc(0,i,e,n,s,r);return ce.clearBuffer(),o}function Dc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ce;let l=i*2;if(Se(l,a)){const u=ze(i,c),d=Ge(l,a);return Z0(t,e,n,u,d,s,r)}else{const u=$c(i,c),d=nx[u],g=n.direction[d]>=0;let v,m;g?(v=Re(i),m=Pe(i,c)):(v=Pe(i,c),m=Re(i));const x=pi(v,o,n,s,r)?Dc(v,t,e,n,s,r):null;if(x){const w=x.point[d];if(g?w<=o[m+u]:w>=o[m+u+3])return x}const _=pi(m,o,n,s,r)?Dc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const Yr=new he,rs=new Sn,os=new Sn,ks=new Ot,Fh=new Xe,qr=new Xe;function sx(i,t,e,n){ce.setBuffer(i._roots[t]);const s=Lc(0,i,e,n);return ce.clearBuffer(),s}function Lc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ce;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Fh.set(e.boundingBox.min,e.boundingBox.max,n),s=Fh),Se(c,o)){const h=t.geometry,u=h.index,d=h.attributes.position,f=e.index,g=e.attributes.position,v=ze(i,a),m=Ge(c,o);if(ks.copy(n).invert(),e.boundsTree)return de(i,r,qr),qr.matrix.copy(ks),qr.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>qr.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=v*3,_=(m+v)*3;y<_;y+=3)if(xe(os,y,u,d),os.needsUpdate=!0,x.intersectsTriangle(os))return!0;return!1}});{const p=Fo(e);for(let x=v*3,y=(m+v)*3;x<y;x+=3){xe(rs,x,u,d),rs.a.applyMatrix4(ks),rs.b.applyMatrix4(ks),rs.c.applyMatrix4(ks),rs.needsUpdate=!0;for(let _=0,w=p*3;_<w;_+=3)if(xe(os,_,f,g),os.needsUpdate=!0,rs.intersectsTriangle(os))return!0}}}else{const h=Re(i),u=Pe(i,a);return de(h,r,Yr),!!(s.intersectsBox(Yr)&&Lc(h,t,e,n,s)||(de(u,r,Yr),s.intersectsBox(Yr)&&Lc(u,t,e,n,s)))}}const jr=new Ot,Ca=new Xe,Gs=new Xe,rx=new P,ox=new P,ax=new P,cx=new P;function lx(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ca.set(t.boundingBox.min,t.boundingBox.max,e),Ca.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,h=t.attributes.position,u=t.index,d=un.getPrimitive(),f=un.getPrimitive();let g=rx,v=ox,m=null,p=null;s&&(m=ax,p=cx);let x=1/0,y=null,_=null;return jr.copy(e).invert(),Gs.matrix.copy(jr),i.shapecast({boundsTraverseOrder:w=>Ca.distanceToBox(w),intersectsBounds:(w,E,b)=>b<x&&b<o?(E&&(Gs.min.copy(w.min),Gs.max.copy(w.max),Gs.needsUpdate=!0),!0):!1,intersectsRange:(w,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>Gs.distanceToBox(A),intersectsBounds:(A,M,S)=>S<x&&S<o,intersectsRange:(A,M)=>{for(let S=A,R=A+M;S<R;S++){xe(f,3*S,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let L=w,I=w+E;L<I;L++){xe(d,3*L,l,c),d.needsUpdate=!0;const U=d.distanceToTriangle(f,g,m);if(U<x&&(v.copy(g),p&&p.copy(m),x=U,y=L,_=S),U<r)return!0}}}});{const b=Fo(t);for(let A=0,M=b;A<M;A++){xe(f,3*A,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=w,R=w+E;S<R;S++){xe(d,3*S,l,c),d.needsUpdate=!0;const L=d.distanceToTriangle(f,g,m);if(L<x&&(v.copy(g),p&&p.copy(m),x=L,y=S,_=A),L<r)return!0}}}}}),un.releasePrimitive(d),un.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(jr),v.applyMatrix4(jr),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function hx(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(d,f,g=!1){const v=d*2;if(Se(v,a)){const m=ze(d,o),p=Ge(v,a);let x=1/0,y=1/0,_=1/0,w=-1/0,E=-1/0,b=-1/0;for(let A=m,M=m+p;A<M;A++){const S=3*i.resolveTriangleIndex(A);for(let R=0;R<3;R++){let L=S+R;L=n?n[L]:L;const I=s.getX(L),U=s.getY(L),z=s.getZ(L);I<x&&(x=I),I>w&&(w=I),U<y&&(y=U),U>E&&(E=U),z<_&&(_=z),z>b&&(b=z)}}return c[d+0]!==x||c[d+1]!==y||c[d+2]!==_||c[d+3]!==w||c[d+4]!==E||c[d+5]!==b?(c[d+0]=x,c[d+1]=y,c[d+2]=_,c[d+3]=w,c[d+4]=E,c[d+5]=b,!0):!1}else{const m=Re(d),p=Pe(d,o);let x=g,y=!1,_=!1;if(t){if(!x){const S=m/ye+f/Oe,R=p/ye+f/Oe;y=t.has(S),_=t.has(R),x=!y&&!_}}else y=!0,_=!0;const w=x||y,E=x||_;let b=!1;w&&(b=u(m,f,x));let A=!1;E&&(A=u(p,f,x));const M=b||A;if(M)for(let S=0;S<3;S++){const R=m+S,L=p+S,I=c[R],U=c[R+3],z=c[L],H=c[L+3];c[d+S]=I<z?I:z,c[d+S+3]=U>H?U:H}return M}}}function ux(i,t,e,n,s,r,o){ce.setBuffer(i._roots[t]),Ic(0,i,e,n,s,r,o),ce.clearBuffer()}function Ic(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ce,h=i*2;if(Se(h,c)){const d=ze(i,l),f=Ge(h,c);Q0(t,e,n,d,f,s,r,o)}else{const d=Re(i);pi(d,a,n,r,o)&&Ic(d,t,e,n,s,r,o);const f=Pe(i,l);pi(f,a,n,r,o)&&Ic(f,t,e,n,s,r,o)}}const dx=["x","y","z"];function fx(i,t,e,n,s,r){ce.setBuffer(i._roots[t]);const o=Uc(0,i,e,n,s,r);return ce.clearBuffer(),o}function Uc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ce;let l=i*2;if(Se(l,a)){const u=ze(i,c),d=Ge(l,a);return J0(t,e,n,u,d,s,r)}else{const u=$c(i,c),d=dx[u],g=n.direction[d]>=0;let v,m;g?(v=Re(i),m=Pe(i,c)):(v=Pe(i,c),m=Re(i));const x=pi(v,o,n,s,r)?Uc(v,t,e,n,s,r):null;if(x){const w=x.point[d];if(g?w<=o[m+u]:w>=o[m+u+3])return x}const _=pi(m,o,n,s,r)?Uc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const Zr=new he,as=new Sn,cs=new Sn,Ws=new Ot,Bh=new Xe,$r=new Xe;function px(i,t,e,n){ce.setBuffer(i._roots[t]);const s=Nc(0,i,e,n);return ce.clearBuffer(),s}function Nc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ce;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Bh.set(e.boundingBox.min,e.boundingBox.max,n),s=Bh),Se(c,o)){const h=t.geometry,u=h.index,d=h.attributes.position,f=e.index,g=e.attributes.position,v=ze(i,a),m=Ge(c,o);if(Ws.copy(n).invert(),e.boundsTree)return de(i,r,$r),$r.matrix.copy(Ws),$r.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>$r.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=v,_=m+v;y<_;y++)if(xe(cs,3*t.resolveTriangleIndex(y),u,d),cs.needsUpdate=!0,x.intersectsTriangle(cs))return!0;return!1}});{const p=Fo(e);for(let x=v,y=m+v;x<y;x++){const _=t.resolveTriangleIndex(x);xe(as,3*_,u,d),as.a.applyMatrix4(Ws),as.b.applyMatrix4(Ws),as.c.applyMatrix4(Ws),as.needsUpdate=!0;for(let w=0,E=p*3;w<E;w+=3)if(xe(cs,w,f,g),cs.needsUpdate=!0,as.intersectsTriangle(cs))return!0}}}else{const h=Re(i),u=Pe(i,a);return de(h,r,Zr),!!(s.intersectsBox(Zr)&&Nc(h,t,e,n,s)||(de(u,r,Zr),s.intersectsBox(Zr)&&Nc(u,t,e,n,s)))}}const Kr=new Ot,Ra=new Xe,Xs=new Xe,mx=new P,gx=new P,_x=new P,xx=new P;function vx(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ra.set(t.boundingBox.min,t.boundingBox.max,e),Ra.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,h=t.attributes.position,u=t.index,d=un.getPrimitive(),f=un.getPrimitive();let g=mx,v=gx,m=null,p=null;s&&(m=_x,p=xx);let x=1/0,y=null,_=null;return Kr.copy(e).invert(),Xs.matrix.copy(Kr),i.shapecast({boundsTraverseOrder:w=>Ra.distanceToBox(w),intersectsBounds:(w,E,b)=>b<x&&b<o?(E&&(Xs.min.copy(w.min),Xs.max.copy(w.max),Xs.needsUpdate=!0),!0):!1,intersectsRange:(w,E)=>{if(t.boundsTree){const b=t.boundsTree;return b.shapecast({boundsTraverseOrder:A=>Xs.distanceToBox(A),intersectsBounds:(A,M,S)=>S<x&&S<o,intersectsRange:(A,M)=>{for(let S=A,R=A+M;S<R;S++){const L=b.resolveTriangleIndex(S);xe(f,3*L,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let I=w,U=w+E;I<U;I++){const z=i.resolveTriangleIndex(I);xe(d,3*z,l,c),d.needsUpdate=!0;const H=d.distanceToTriangle(f,g,m);if(H<x&&(v.copy(g),p&&p.copy(m),x=H,y=I,_=S),H<r)return!0}}}})}else{const b=Fo(t);for(let A=0,M=b;A<M;A++){xe(f,3*A,u,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=w,R=w+E;S<R;S++){const L=i.resolveTriangleIndex(S);xe(d,3*L,l,c),d.needsUpdate=!0;const I=d.distanceToTriangle(f,g,m);if(I<x&&(v.copy(g),p&&p.copy(m),x=I,y=S,_=A),I<r)return!0}}}}}),un.releasePrimitive(d),un.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Kr),v.applyMatrix4(Kr),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function Oh(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const Qr=new Xe,Jr=new Cs,zh=new P,Hh=new Ot,Vh=new P,Pa=["getX","getY","getZ"];class Ao extends H0{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const a=new Ao(e,{...n,[Zc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const h=new ne(t.index,1,!1);e.setIndex(h)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a;function c(l){for(let h=0;h<l.length;h++){const u=l[h],d=new Uint32Array(u),f=new Uint16Array(u);for(let g=0,v=u.byteLength/Oe;g<v;g++){const m=ye*g,p=2*m;Se(p,f)||(d[m+6]=d[m+6]/ye-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=(r?r[t]:t)*3;let h=l+0,u=l+1,d=l+2;a&&(h=a[h],u=a[u],d=a[d]);for(let f=0;f<3;f++){const g=o[Pa[f]](h),v=o[Pa[f]](u),m=o[Pa[f]](d);let p=g;v<p&&(p=v),m<p&&(p=m);let x=g;v>x&&(x=v),m>x&&(x=m),e[n+f]=p,e[n+f+3]=x}return e}computePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=o.array,h=o.offset||0;let u=3;o.isInterleavedBufferAttribute&&(u=o.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let g=t,v=t+e;g<v;g++){const p=(r?r[g]:g)*3,x=(g-f)*6;let y=p+0,_=p+1,w=p+2;a&&(y=a[y],_=a[_],w=a[w]),c||(y=y*u+h,_=_*u+h,w=w*u+h);for(let E=0;E<3;E++){let b,A,M;c?(b=o[d[E]](y),A=o[d[E]](_),M=o[d[E]](w)):(b=l[y+E],A=l[_+E],M=l[w+E]);let S=b;A<S&&(S=A),M<S&&(S=M);let R=b;A>R&&(R=A),M>R&&(R=M);const L=(R-S)/2,I=E*2;n[x+I+0]=S+L,n[x+I+1]=L+(Math.abs(S)+L)*_o}}return n}raycastObject3D(t,e,n=[]){const{material:s}=t;if(s===void 0)return;Hh.copy(t.matrixWorld).invert(),Jr.copy(e.ray).applyMatrix4(Hh),Vh.setFromMatrixScale(t.matrixWorld),zh.copy(Jr.direction).multiply(Vh);const r=zh.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(Jr,s,o,a);c=Oh(c,t,e),c&&n.push(c)}else{const c=this.raycast(Jr,s,o,a);for(let l=0,h=c.length;l<h;l++){const u=Oh(c[l],t,e);u&&n.push(u)}}return n}refit(t=null){return(this.indirect?hx:K0)(this,t)}raycast(t,e=Cn,n=0,s=1/0){const r=this._roots,o=[],a=this.indirect?ux:ex;for(let c=0,l=r.length;c<l;c++)a(this,c,e,t,o,n,s);return o}raycastFirst(t,e=Cn,n=0,s=1/0){const r=this._roots;let o=null;const a=this.indirect?fx:ix;for(let c=0,l=r.length;c<l;c++){const h=a(this,c,e,t,n,s);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?px:sx;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=un.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?tx:$0});return un.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=un.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const v=this.resolveTriangleIndex(g);xe(o,v*3,a,c)}:g=>{xe(o,g*3,a,c)},h=un.getPrimitive(),u=t.geometry.index,d=t.geometry.attributes.position,f=t.indirect?g=>{const v=t.resolveTriangleIndex(g);xe(h,v*3,u,d)}:g=>{xe(h,g*3,u,d)};if(r){if(!(t instanceof Ao))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(v,m,p,x,y,_,w,E)=>{for(let b=p,A=p+x;b<A;b++){f(b),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let M=v,S=v+m;M<S;M++)if(l(M),o.needsUpdate=!0,r(o,h,M,b,y,_,w,E))return!0}return!1};if(s){const v=s;s=function(m,p,x,y,_,w,E,b){return v(m,p,x,y,_,w,E,b)?!0:g(m,p,x,y,_,w,E,b)}}else s=g}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return Qr.set(t.min,t.max,e),Qr.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Qr.intersectsBox(n),intersectsTriangle:n=>Qr.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?vx:lx)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return X0(this,t,e,n,s)}}const ds={Mesh:et.prototype.raycast,Line:ln.prototype.raycast,LineSegments:fi.prototype.raycast,LineLoop:Fu.prototype.raycast,Points:Uo.prototype.raycast,BatchedMesh:a0.prototype.raycast},De=new et,to=[];function yx(i,t){if(this.isBatchedMesh)Sx.call(this,i,t);else{const{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,i,t);else{let n;if(this instanceof et)n=ds.Mesh;else if(this instanceof fi)n=ds.LineSegments;else if(this instanceof Fu)n=ds.LineLoop;else if(this instanceof ln)n=ds.Line;else if(this instanceof Uo)n=ds.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,t)}}}function Sx(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;De.material=this.material,De.geometry=this.geometry;const o=De.geometry.boundsTree,a=De.geometry.drawRange;De.geometry.boundingSphere===null&&(De.geometry.boundingSphere=new dn);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const h=n[c].geometryIndex;if(De.geometry.boundsTree=e[h],this.getMatrixAt(c,De.matrixWorld).premultiply(r),!De.geometry.boundsTree){this.getBoundingBoxAt(h,De.geometry.boundingBox),this.getBoundingSphereAt(h,De.geometry.boundingSphere);const u=s[h];De.geometry.setDrawRange(u.start,u.count)}De.raycast(i,to);for(let u=0,d=to.length;u<d;u++){const f=to[u];f.object=this,f.batchId=c,t.push(f)}to.length=0}De.geometry.boundsTree=o,De.geometry.drawRange=a,De.material=null,De.geometry=null}else ds.BatchedMesh.call(this,i,t)}function Mx(i={}){const{type:t=Ao}=i;return this.boundsTree=new t(this,i),this.boundsTree}function Ex(){this.boundsTree=null}class bx{listeners=new Map;on(t,e){this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e)}off(t,e){this.listeners.get(t)?.delete(e)}emit(t,e){this.listeners.get(t)?.forEach(n=>n({type:t,data:e}))}}const Da={width:6,height:6,densityX:8,densityY:8,spawnRate:2,flowStartOffset:.5,visible:!0},kh={speed:3,length:30,particleLifetime:8,particleSize:.01,trailLength:20,trailOpacity:.4,turbulenceStrength:.15,recoveryStrength:.1,influenceDistance:.5,bufferDistance:.5,wakeStrength:.5,wakeLength:5,bounceStrength:.8,maxParticleCount:15e3,windGravity:1.5,particleRepulsion:.5},La={showGrid:!0,showAxes:!0,showEmitter:!0,showObstacleBounds:!1,backgroundColor:"#0d1117",flowColor:"#58a6ff",impactColor:"#f0883e",wakeColor:"#bc8cff",renderMode:"particles",showSmokeTrails:!1,flowDensity:1};class wx{renderer;constructor(t){this.renderer=new J_({canvas:t,antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.getWidth(),this.getHeight()),this.renderer.shadowMap.enabled=!1,this.renderer.toneMapping=ou,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=$e}getWidth(){const t=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--panel-width"))||320;return window.innerWidth-t}getHeight(){return window.innerHeight}resize(){const t=this.getWidth(),e=this.getHeight();this.renderer.setSize(t,e)}render(t,e){this.renderer.render(t,e)}takeScreenshot(){return this.renderer.domElement.toDataURL("image/png")}dispose(){this.renderer.dispose()}}class Tx{scene;gridHelper;axesHelper;ambientLight;directionalLight;fillLight;constructor(){this.scene=new t0,this.scene.background=new Mt("#0d1117"),this.scene.fog=new Mo("#0d1117",.008),this.gridHelper=new _0(80,80,1843497,1843497),this.gridHelper.material.opacity=.6,this.gridHelper.material.transparent=!0,this.scene.add(this.gridHelper),this.axesHelper=new v0(5),this.scene.add(this.axesHelper),this.ambientLight=new m0(16777215,.5),this.scene.add(this.ambientLight),this.directionalLight=new _h(16777215,.8),this.directionalLight.position.set(10,15,10),this.scene.add(this.directionalLight),this.fillLight=new _h(8952251,.3),this.fillLight.position.set(-8,5,-5),this.scene.add(this.fillLight)}updateDisplay(t){this.gridHelper.visible=t.showGrid,this.axesHelper.visible=t.showAxes,this.scene.background=new Mt(t.backgroundColor),this.scene.fog instanceof Mo&&this.scene.fog.color.set(t.backgroundColor)}dispose(){this.scene.clear()}}class Ax{camera;constructor(t){this.camera=new hn(55,t,.1,500),this.camera.position.set(12,10,18),this.camera.lookAt(0,0,0)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}frameAll(t){const e=new he;if(t.traverse(n=>{n instanceof et&&n.visible&&e.expandByObject(n)}),e.isEmpty()){this.camera.position.set(12,10,18),this.camera.lookAt(0,0,0);return}this.frameBoundingBox(e)}focusObject(t){const e=new he().setFromObject(t);e.isEmpty()||this.frameBoundingBox(e)}frameBoundingBox(t){const e=new P,n=new P;t.getCenter(e),t.getSize(n);const s=Math.max(n.x,n.y,n.z),r=this.camera.fov*(Math.PI/180);let o=s/2/Math.tan(r/2);o=Math.max(o*1.5,5);const a=this.camera.position.clone().sub(e).normalize();this.camera.position.copy(e).add(a.multiplyScalar(o)),this.camera.lookAt(e)}}class Cx{rendererManager;cameraManager;boundHandler;constructor(t,e){this.rendererManager=t,this.cameraManager=e,this.boundHandler=this.onResize.bind(this),window.addEventListener("resize",this.boundHandler)}onResize(){this.rendererManager.resize();const t=this.rendererManager.getWidth(),e=this.rendererManager.getHeight();this.cameraManager.resize(t/e)}dispose(){window.removeEventListener("resize",this.boundHandler)}}class Rx{clock;_paused=!1;_deltaTime=0;_elapsed=0;constructor(){this.clock=new g0(!0)}get deltaTime(){return this._deltaTime}get elapsed(){return this._elapsed}get paused(){return this._paused}update(){const t=this.clock.getDelta(),e=Math.min(t,1/15);this._paused?this._deltaTime=0:(this._deltaTime=e,this._elapsed+=e)}pause(){this._paused=!0}resume(){this._paused=!1,this.clock.getDelta()}restart(){this._elapsed=0,this._paused=!1,this.clock.getDelta()}}const Gh={type:"change"},tl={type:"start"},Wu={type:"end"},eo=new Cs,Wh=new bn,Px=Math.cos(70*zd.DEG2RAD),ve=new P,Ze=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ia=1e-6;class Dx extends Ou{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ae,this._lastTargetPosition=new P,this._quat=new Ae().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sh,this._sphericalDelta=new Sh,this._scale=1,this._panOffset=new P,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new P,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ix.bind(this),this._onPointerDown=Lx.bind(this),this._onPointerUp=Ux.bind(this),this._onContextMenu=Vx.bind(this),this._onMouseWheel=Bx.bind(this),this._onKeyDown=Ox.bind(this),this._onTouchStart=zx.bind(this),this._onTouchMove=Hx.bind(this),this._onMouseDown=Nx.bind(this),this._onMouseMove=Fx.bind(this),this._interceptControlDown=kx.bind(this),this._interceptControlUp=Gx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gh),this.update(),this.state=Kt.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ve.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<Px?this.object.lookAt(this.target):(Wh.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(Wh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ia||this._lastTargetPosition.distanceToSquared(this.target)>Ia?(this.dispatchEvent(Gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ix(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ux(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=Kt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Kt.DOLLY;break;case ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}break;case ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(tl)}function Fx(i){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Bx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(i.preventDefault(),this.dispatchEvent(tl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function Ox(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function zx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Kt.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Kt.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(tl)}function Hx(i){switch(this._trackPointer(i),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Kt.NONE}}function Vx(i){this.enabled!==!1&&i.preventDefault()}function kx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Wx{controls;constructor(t,e){this.controls=new Dx(t,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.screenSpacePanning=!0,this.controls.minDistance=1,this.controls.maxDistance=200,this.controls.maxPolarAngle=Math.PI*.95,this.controls.mouseButtons={LEFT:void 0,MIDDLE:ai.PAN,RIGHT:ai.ROTATE}}setEnabled(t){this.controls.enabled=t}update(){this.controls.update()}setTarget(t){this.controls.target.copy(t)}dispose(){this.controls.dispose()}}const Ri=new wo,Fe=new P,ti=new P,le=new Ae,Xh={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},Ua={type:"change"},Yh={type:"mouseDown",mode:null},qh={type:"mouseUp",mode:null},jh={type:"objectChange"};class Xx extends Ou{constructor(t,e=null){super(void 0,e);const n=new Kx(this);this._root=n;const s=new Qx;this._gizmo=s,n.add(s);const r=new Jx;this._plane=r,n.add(r);const o=this;function a(y,_){let w=_;Object.defineProperty(o,y,{get:function(){return w!==void 0?w:_},set:function(E){w!==E&&(w=E,r[y]=E,s[y]=E,o.dispatchEvent({type:y+"-changed",value:E}),o.dispatchEvent(Ua))}}),o[y]=_,r[y]=_,s[y]=_}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new P,l=new P,h=new Ae,u=new Ae,d=new P,f=new Ae,g=new P,v=new P,m=new P,p=0,x=new P;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",v),a("rotationAxis",m),a("rotationAngle",p),a("eye",x),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new Ae,this._parentQuaternionInv=new Ae,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new Ae,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new Ae,this._scaleStart=new P,this._getPointer=Yx.bind(this),this._onPointerDown=jx.bind(this),this._onPointerHover=qx.bind(this),this._onPointerMove=Zx.bind(this),this._onPointerUp=$x.bind(this),e!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ri.setFromCamera(t,this.camera);const e=Na(this._gizmo.picker[this.mode],Ri);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ri.setFromCamera(t,this.camera);const e=Na(this._plane,Ri,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Yh.mode=this.mode,this.dispatchEvent(Yh)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ri.setFromCamera(t,this.camera);const o=Na(this._plane,Ri,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(le.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Fe.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Fe.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ti.set(a,a,a)}else Fe.copy(this.pointStart),ti.copy(this.pointEnd),Fe.applyQuaternion(this._worldQuaternionInv),ti.applyQuaternion(this._worldQuaternionInv),ti.divide(Fe),e.search("X")===-1&&(ti.x=1),e.search("Y")===-1&&(ti.y=1),e.search("Z")===-1&&(ti.z=1);s.scale.copy(this._scaleStart).multiply(ti),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Fe.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Fe.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Xh[e]),Fe.copy(Xh[e]),r==="local"&&Fe.applyQuaternion(this.worldQuaternion),Fe.cross(this.eye),Fe.length()===0?c=!0:this.rotationAngle=this._offset.dot(Fe.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(le.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(le.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ua),this.dispatchEvent(jh)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(qh.mode=this.mode,this.dispatchEvent(qh)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ua),this.dispatchEvent(jh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ri}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function Yx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function qx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function jx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Zx(i){this.enabled&&this.pointerMove(this._getPointer(i))}function $x(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Na(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const no=new yn,Jt=new P(0,1,0),Zh=new P(0,0,0),$h=new Ot,io=new Ae,vo=new Ae,En=new P,Kh=new Ot,Ks=new P(1,0,0),Di=new P(0,1,0),Qs=new P(0,0,1),so=new P,Ys=new P,qs=new P;class Kx extends ge{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class Qx extends ge{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Do({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new zi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const h=t.clone();h.color.setHex(255),h.opacity=.5;const u=t.clone();u.opacity=.25;const d=t.clone();d.color.setHex(16776960),d.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const v=new Te(0,.04,.1,12);v.translate(0,.05,0);const m=new me(.08,.08,.08);m.translate(0,.04,0);const p=new Qt;p.setAttribute("position",new Yt([0,0,0,1,0,0],3));const x=new Te(.0075,.0075,.5,3);x.translate(0,.25,0);function y(z,H){const Y=new si(z,.0075,3,64,H*Math.PI*2);return Y.rotateY(Math.PI/2),Y.rotateX(Math.PI/2),Y}function _(){const z=new Qt;return z.setAttribute("position",new Yt([0,0,0,1,1,1],3)),z}const w={X:[[new et(v,r),[.5,0,0],[0,0,-Math.PI/2]],[new et(v,r),[-.5,0,0],[0,0,Math.PI/2]],[new et(x,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new et(v,o),[0,.5,0]],[new et(v,o),[0,-.5,0],[Math.PI,0,0]],[new et(x,o)]],Z:[[new et(v,a),[0,0,.5],[Math.PI/2,0,0]],[new et(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new et(x,a),null,[Math.PI/2,0,0]]],XYZ:[[new et(new ms(.1,0),u.clone()),[0,0,0]]],XY:[[new et(new me(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new et(new me(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new et(new me(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new et(new Te(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new et(new Te(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new et(new Te(.2,0,.6,4),n),[0,.3,0]],[new et(new Te(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new et(new Te(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new et(new Te(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new et(new ms(.2,0),n)]],XY:[[new et(new me(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new et(new me(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new et(new me(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},b={START:[[new et(new ms(.01,2),s),null,null,null,"helper"]],END:[[new et(new ms(.01,2),s),null,null,null,"helper"]],DELTA:[[new ln(_(),s),null,null,null,"helper"]],X:[[new ln(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ln(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ln(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},A={XYZE:[[new et(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new et(y(.5,.5),r)]],Y:[[new et(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new et(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new et(y(.75,1),d),null,[0,Math.PI/2,0]]]},M={AXIS:[[new ln(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new et(new No(.25,10,8),n)]],X:[[new et(new si(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new et(new si(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new et(new si(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new et(new si(.75,.1,2,24),n)]]},R={X:[[new et(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new et(x,r),[0,0,0],[0,0,-Math.PI/2]],[new et(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new et(m,o),[0,.5,0]],[new et(x,o)],[new et(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new et(m,a),[0,0,.5],[Math.PI/2,0,0]],[new et(x,a),[0,0,0],[Math.PI/2,0,0]],[new et(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new et(new me(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new et(new me(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new et(new me(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new et(new me(.1,.1,.1),u.clone())]]},L={X:[[new et(new Te(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new et(new Te(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new et(new Te(.2,0,.6,4),n),[0,.3,0]],[new et(new Te(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new et(new Te(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new et(new Te(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new et(new me(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new et(new me(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new et(new me(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new et(new me(.2,.2,.2),n),[0,0,0]]]},I={X:[[new ln(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ln(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ln(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(z){const H=new ge;for(const Y in z)for(let k=z[Y].length;k--;){const J=z[Y][k][0].clone(),st=z[Y][k][1],pt=z[Y][k][2],At=z[Y][k][3],Wt=z[Y][k][4];J.name=Y,J.tag=Wt,st&&J.position.set(st[0],st[1],st[2]),pt&&J.rotation.set(pt[0],pt[1],pt[2]),At&&J.scale.set(At[0],At[1],At[2]),J.updateMatrix();const q=J.geometry.clone();q.applyMatrix4(J.matrix),J.geometry=q,J.renderOrder=1/0,J.position.set(0,0,0),J.rotation.set(0,0,0),J.scale.set(1,1,1),H.add(J)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(w)),this.add(this.gizmo.rotate=U(A)),this.add(this.gizmo.scale=U(R)),this.add(this.picker.translate=U(E)),this.add(this.picker.rotate=U(S)),this.add(this.picker.scale=U(L)),this.add(this.helper.translate=U(b)),this.add(this.helper.rotate=U(M)),this.add(this.helper.scale=U(I)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:vo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(le.setFromEuler(no.set(0,0,0)),o.quaternion.copy(n).multiply(le),Math.abs(Jt.copy(Ks).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(le.setFromEuler(no.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(le),Math.abs(Jt.copy(Di).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(le.setFromEuler(no.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(le),Math.abs(Jt.copy(Qs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(le.setFromEuler(no.set(0,Math.PI/2,0)),Jt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix($h.lookAt(Zh,Jt,Di)),o.quaternion.multiply(le),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Fe.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Fe.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Fe),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Jt.copy(Ks).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Jt.copy(Di).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Jt.copy(Qs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Jt.copy(Qs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Jt.copy(Ks).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Jt.copy(Di).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(io.copy(n),Jt.copy(this.eye).applyQuaternion(le.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix($h.lookAt(this.eye,Zh,Di)),o.name==="X"&&(le.setFromAxisAngle(Ks,Math.atan2(-Jt.y,Jt.z)),le.multiplyQuaternions(io,le),o.quaternion.copy(le)),o.name==="Y"&&(le.setFromAxisAngle(Di,Math.atan2(Jt.x,Jt.z)),le.multiplyQuaternions(io,le),o.quaternion.copy(le)),o.name==="Z"&&(le.setFromAxisAngle(Qs,Math.atan2(Jt.y,Jt.x)),le.multiplyQuaternions(io,le),o.quaternion.copy(le))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class Jx extends et{constructor(){super(new di(1e5,1e5,2,2),new Do({visible:!1,wireframe:!0,side:Ke,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),so.copy(Ks).applyQuaternion(e==="local"?this.worldQuaternion:vo),Ys.copy(Di).applyQuaternion(e==="local"?this.worldQuaternion:vo),qs.copy(Qs).applyQuaternion(e==="local"?this.worldQuaternion:vo),Jt.copy(Ys),this.mode){case"translate":case"scale":switch(this.axis){case"X":Jt.copy(this.eye).cross(so),En.copy(so).cross(Jt);break;case"Y":Jt.copy(this.eye).cross(Ys),En.copy(Ys).cross(Jt);break;case"Z":Jt.copy(this.eye).cross(qs),En.copy(qs).cross(Jt);break;case"XY":En.copy(qs);break;case"YZ":En.copy(so);break;case"XZ":Jt.copy(qs),En.copy(Ys);break;case"XYZ":case"E":En.set(0,0,0);break}break;case"rotate":default:En.set(0,0,0)}En.length()===0?this.quaternion.copy(this.cameraQuaternion):(Kh.lookAt(Fe.set(0,0,0),En,Jt),this.quaternion.setFromRotationMatrix(Kh)),super.updateMatrixWorld(t)}}class tv{controls;bus;attached=null;constructor(t,e,n,s,r,o){this.bus=s,this.controls=new Xx(t,e),this.controls.setSize(.7),n.add(this.controls.getHelper()),this.controls.addEventListener("dragging-changed",a=>{a.value?r():(o(),this.attached&&this.bus.emit("obstacle:transformed",this.attached))})}attach(t){this.attached=t,this.controls.attach(t)}detach(){this.attached=null,this.controls.detach()}setMode(t){this.controls.setMode(t)}getMode(){return this.controls.mode}get isAttached(){return this.attached!==null}dispose(){this.controls.dispose()}}const ev=new Mt(2250154);class nv{bus;camera;domElement;raycaster=new wo;mouse=new St;selectableObjects=[];_selected=null;previousEmissive=new Map;onPointerDown;onPointerUp;pointerDownPos=new St;constructor(t,e,n){this.camera=t,this.domElement=e,this.bus=n,this.onPointerDown=this.handlePointerDown.bind(this),this.onPointerUp=this.handlePointerUp.bind(this),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp)}get selected(){return this._selected}registerSelectable(t){this.selectableObjects.includes(t)||this.selectableObjects.push(t)}unregisterSelectable(t){const e=this.selectableObjects.indexOf(t);e>=0&&this.selectableObjects.splice(e,1),this._selected?.mesh===t&&this.deselect()}select(t){this.clearHighlight(),this._selected=t,this.applyHighlight(t.mesh),this.bus.emit("selection:changed",t)}deselect(){this.clearHighlight(),this._selected=null,this.bus.emit("selection:changed",null)}handlePointerDown(t){t.button!==0||t.target.closest("#ui-panel")||this.pointerDownPos.set(t.clientX,t.clientY)}handlePointerUp(t){if(t.button!==0||t.target.closest("#ui-panel"))return;const n=t.clientX-this.pointerDownPos.x,s=t.clientY-this.pointerDownPos.y;if(n*n+s*s>25)return;const r=this.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-r.left)/r.width*2-1,this.mouse.y=-((t.clientY-r.top)/r.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const o=[];for(const c of this.selectableObjects)c.traverse(l=>{l instanceof et&&o.push(l)});const a=this.raycaster.intersectObjects(o,!1);if(a.length>0){let c=a[0].object,l=null;for(;c;){if(this.selectableObjects.includes(c)){l=c;break}c=c.parent}if(l&&l.userData.selectionInfo){const h=l.userData.selectionInfo;if(this._selected?.id===h.id)return;this.select(h);return}}this._selected&&this.deselect()}applyHighlight(t){t.traverse(e=>{if(e instanceof et){const n=e.material;n.emissive&&(this.previousEmissive.set(e,n.emissive.clone()),n.emissive.copy(ev))}})}clearHighlight(){this._selected&&(this._selected.mesh.traverse(t=>{if(t instanceof et){const e=t.material,n=this.previousEmissive.get(t);e.emissive&&n&&e.emissive.copy(n)}}),this.previousEmissive.clear())}dispose(){this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)}}class iv{bus;transformController;selectionManager;onKeyDown;constructor(t,e,n,s){this.bus=t,this.transformController=e,this.selectionManager=n,this.onKeyDown=r=>{if(r.target.tagName!=="INPUT")switch(r.key.toLowerCase()){case"w":this.bus.emit("transform:mode","translate");break;case"e":this.bus.emit("transform:mode","rotate");break;case"r":this.bus.emit("transform:mode","scale");break;case"delete":case"backspace":{const o=this.selectionManager.selected;o&&o.type!=="emitter"&&s(o.id);break}case"escape":this.selectionManager.deselect(),this.transformController.detach();break}},window.addEventListener("keydown",this.onKeyDown)}dispose(){window.removeEventListener("keydown",this.onKeyDown)}}class sv{mesh;id="emitter";name="Flow Emitter";config;spawnPoints=[];_flowDirection=new P(0,0,1);_normal=new P(0,0,1);_worldPos=new P;_worldQuat=new Ae;_worldScale=new P;constructor(t){this.config={...t};const e=new di(t.width,t.height),n=new qc({color:5809919,side:Ke,transparent:!0,opacity:.25,wireframe:!1});this.mesh=new et(e,n),this.mesh.name="FlowEmitter";const s=new fh(e),r=new zi({color:5809919,transparent:!0,opacity:.6}),o=new fi(s,r);o.name="EmitterWireframe",this.mesh.add(o),this.mesh.userData.selectionInfo={id:this.id,name:this.name,type:"emitter",mesh:this.mesh},this.updateSpawnPoints()}getSelectionInfo(){return this.mesh.userData.selectionInfo}updateSpawnPoints(){this.spawnPoints=[];const{width:t,height:e,densityX:n,densityY:s}=this.config,r=Math.max(1,Math.round(n)),o=Math.max(1,Math.round(s));for(let a=0;a<r;a++)for(let c=0;c<o;c++){const l=r===1?.5:a/(r-1),h=o===1?.5:c/(o-1),u=(l-.5)*t,d=(h-.5)*e;this.spawnPoints.push(new P(u,d,0))}}getWorldSpawnPoints(){return this.mesh.updateMatrixWorld(!0),this.spawnPoints.map(t=>t.clone().applyMatrix4(this.mesh.matrixWorld))}getFlowDirection(){return this.mesh.getWorldQuaternion(this._worldQuat),this._flowDirection.copy(this._normal).applyQuaternion(this._worldQuat).normalize(),this._flowDirection.clone()}getWorldPosition(){return this.mesh.getWorldPosition(this._worldPos),this._worldPos.clone()}updateConfig(t){const e=t.width!==void 0||t.height!==void 0||t.densityX!==void 0||t.densityY!==void 0;if(Object.assign(this.config,t),t.visible!==void 0&&(this.mesh.visible=t.visible),e){if(t.width!==void 0||t.height!==void 0){const n=new di(this.config.width,this.config.height);this.mesh.geometry.dispose(),this.mesh.geometry=n;const s=this.mesh.children.find(r=>r.name==="EmitterWireframe");s&&(s.geometry.dispose(),s.geometry=new fh(n))}this.updateSpawnPoints()}}getConfig(){return{...this.config}}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.children.forEach(t=>{t instanceof fi&&(t.geometry.dispose(),t.material.dispose())})}}class rv{emitter;bus;constructor(t,e){this.bus=e,this.emitter=new sv(t)}updateConfig(t){this.emitter.updateConfig(t),this.bus.emit("emitter:updated")}getConfig(){return this.emitter.getConfig()}dispose(){this.emitter.dispose()}}let Qh=0;function ni(){return Qh++,`obj_${Date.now().toString(36)}_${Qh.toString(36)}_${Math.random().toString(36).slice(2,6)}`}function Xu(i){i.geometry.computeBoundingBox(),i.geometry.computeBoundingSphere();const t=new he().setFromObject(i),e=new dn;return t.getBoundingSphere(e),{box:t,sphere:e}}function Jh(i){i.updateMatrixWorld(!0);const t=new he().setFromObject(i),e=new dn;return t.getBoundingSphere(e),{box:t,sphere:e}}const ov={color:9147550,transparent:!0,opacity:.65,side:Ke};function ls(){return new qc({...ov})}function hs(i,t,e,n){i.name=e;const s=Xu(i);i.geometry.computeBoundsTree&&i.geometry.computeBoundsTree();const r={id:t,name:e,type:n,mesh:i,visible:!0,selectable:!0,transformable:!0,boundingBox:s.box,boundingSphere:s.sphere,collisionMode:"simplified"};return i.userData.selectionInfo={id:t,name:e,type:n,mesh:i},i.userData.obstacleData=r,r}class tu{static createPlane(t){const e=ni(),n=new di(4,4),s=ls(),r=new et(n,s);return r.position.copy(t??new P(5,2,0)),hs(r,e,"Plane","plane")}static createBox(t){const e=ni(),n=new me(2,2,2),s=ls();s.opacity=.7;const r=new et(n,s);return r.position.copy(t??new P(6,1,0)),hs(r,e,"Box","box")}static createSphere(t){const e=ni(),n=new No(1.2,32,24),s=ls();s.opacity=.7;const r=new et(n,s);return r.position.copy(t??new P(6,1.2,0)),hs(r,e,"Sphere","sphere")}static createCylinder(t){const e=ni(),n=new Te(.8,.8,3,24),s=ls();s.opacity=.7;const r=new et(n,s);return r.position.copy(t??new P(6,1.5,0)),hs(r,e,"Cylinder","cylinder")}static createTorus(t){const e=ni(),n=new si(1.2,.4,16,32),s=ls(),r=new et(n,s);return r.position.copy(t??new P(6,1.5,0)),hs(r,e,"Torus","torus")}static createCone(t){const e=ni(),n=new Xc(1,2.5,24),s=ls();s.opacity=.7;const r=new et(n,s);return r.position.copy(t??new P(6,1.25,0)),hs(r,e,"Cone","cone")}static createFromType(t){switch(t){case"plane":return this.createPlane();case"box":return this.createBox();case"sphere":return this.createSphere();case"cylinder":return this.createCylinder();case"torus":return this.createTorus();case"cone":return this.createCone();default:return null}}}class av{obstacles=new Map;scene;bus;boundingHelpers=new Map;constructor(t,e){this.scene=t,this.bus=e,this.bus.on("obstacle:transformed",n=>{const s=n.data;for(const[,r]of this.obstacles)if(r.mesh===s){this.updateObstacleBounds(r);break}})}add(t){this.obstacles.set(t.id,t),this.scene.add(t.mesh),this.bus.emit("obstacle:added",t)}remove(t){const e=this.obstacles.get(t);if(!e)return null;this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material instanceof mi&&e.mesh.material.dispose();const n=this.boundingHelpers.get(t);return n&&(this.scene.remove(n),this.boundingHelpers.delete(t)),this.obstacles.delete(t),this.bus.emit("obstacle:removed",e),e}get(t){return this.obstacles.get(t)}getAll(){return Array.from(this.obstacles.values())}getCount(){return this.obstacles.size}updateObstacleBounds(t){const e=Jh(t.mesh);t.boundingBox=e.box,t.boundingSphere=e.sphere;const n=this.boundingHelpers.get(t.id);n&&n.box.copy(t.boundingBox)}setShowBounds(t){if(t){for(const[e,n]of this.obstacles)if(!this.boundingHelpers.has(e)){const s=new x0(n.boundingBox,new Mt(5809919));this.scene.add(s),this.boundingHelpers.set(e,s)}}else for(const[e,n]of this.boundingHelpers)this.scene.remove(n),this.boundingHelpers.delete(e)}updateAllBounds(){for(const t of this.obstacles.values())this.updateObstacleBounds(t)}duplicate(t){const e=this.obstacles.get(t);if(!e)return null;const n=e.mesh.clone();n.position.add(new P(2,0,2));const s=ni(),r=`${e.name} Copy`,o=Jh(n),a={id:s,name:r,type:e.type,mesh:n,visible:!0,selectable:!0,transformable:!0,boundingBox:o.box,boundingSphere:o.sphere,collisionMode:e.collisionMode};return e.metadata&&(a.metadata={...e.metadata}),n.userData.selectionInfo={id:s,name:r,type:e.type,mesh:n},n.userData.obstacleData=a,this.add(a),a}clear(){const t=Array.from(this.obstacles.keys());for(const e of t)this.remove(e)}dispose(){this.clear()}}class cv{points;particles=[];maxCount;positions;colors;sizes;geometry;material;aliveCount=0;flowColor=new Mt(5809919);impactColor=new Mt(15763518);wakeColor=new Mt(12356863);constructor(t){this.maxCount=t,this.positions=new Float32Array(t*3),this.colors=new Float32Array(t*3),this.sizes=new Float32Array(t),this.geometry=new Qt,this.geometry.setAttribute("position",new ne(this.positions,3)),this.geometry.setAttribute("color",new ne(this.colors,3)),this.geometry.setAttribute("size",new ne(this.sizes,1)),this.material=new Wc({size:2.5,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,blending:Fi,depthWrite:!1}),this.points=new Uo(this.geometry,this.material),this.points.frustumCulled=!1;for(let e=0;e<t;e++)this.particles.push({position:new P,velocity:new P,baseDirection:new P,age:0,lifetime:5,alive:!1,trail:[],impactFactor:0,wakeFactor:0})}spawn(t,e,n){for(let s=0;s<this.maxCount;s++){const r=this.particles[s];if(!r.alive)return r.position.copy(t),r.velocity.copy(e),r.baseDirection.copy(e).normalize(),r.age=0,r.lifetime=n,r.alive=!0,r.trail=[t.clone()],r.impactFactor=0,r.wakeFactor=0,r}return null}getAliveCount(){return this.aliveCount}updateBuffers(t,e){this.flowColor.set(e.flowColor),this.impactColor.set(e.impactColor),this.wakeColor.set(e.wakeColor),this.material.size=t.particleSize,this.aliveCount=0;const n=new Mt;for(let s=0;s<this.maxCount;s++){const r=this.particles[s];if(!r.alive){this.positions[s*3]=0,this.positions[s*3+1]=-9999,this.positions[s*3+2]=0,this.sizes[s]=0;continue}this.aliveCount++,this.positions[s*3]=r.position.x,this.positions[s*3+1]=r.position.y,this.positions[s*3+2]=r.position.z,r.impactFactor>.1?n.copy(this.flowColor).lerp(this.impactColor,r.impactFactor):r.wakeFactor>.1?n.copy(this.flowColor).lerp(this.wakeColor,r.wakeFactor):n.copy(this.flowColor);const o=r.age/r.lifetime,a=o>.7?1-(o-.7)/.3:1;n.multiplyScalar(a),this.colors[s*3]=n.r,this.colors[s*3+1]=n.g,this.colors[s*3+2]=n.b,this.sizes[s]=t.particleSize*(1-o*.3)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.setDrawRange(0,this.maxCount)}setRenderMode(t){t==="smoke"?(this.material.blending=Fi,this.material.opacity=.3,this.material.size=5):(this.material.blending=Fi,this.material.opacity=.85)}reset(){for(const t of this.particles)t.alive=!1,t.trail=[];this.aliveCount=0}dispose(){this.geometry.dispose(),this.material.dispose()}}class lv{mesh;maxSegments;positions;colors;geometry;material;constructor(t,e){this.maxSegments=t*e;const n=this.maxSegments*2;this.positions=new Float32Array(n*3),this.colors=new Float32Array(n*3),this.geometry=new Qt,this.geometry.setAttribute("position",new ne(this.positions,3)),this.geometry.setAttribute("color",new ne(this.colors,3)),this.material=new zi({vertexColors:!0,transparent:!0,opacity:.4,blending:Fi,depthWrite:!1}),this.mesh=new fi(this.geometry,this.material),this.mesh.frustumCulled=!1}update(t,e,n){const s=e.trailLength;this.material.opacity=Math.min(e.trailOpacity*n.flowDensity,1);const r=new Mt(n.flowColor),o=new Mt(n.impactColor),a=new Mt(n.wakeColor);let c=0;const l=this.maxSegments;for(const h of t){if(!h.alive||h.trail.length<2)continue;const u=h.trail,d=Math.min(u.length-1,s);for(let f=0;f<d&&c<l;f++){const g=u[u.length-1-f],v=u[u.length-2-f],m=c*6;this.positions[m]=g.x,this.positions[m+1]=g.y,this.positions[m+2]=g.z,this.positions[m+3]=v.x,this.positions[m+4]=v.y,this.positions[m+5]=v.z;const p=1-f/d;let x=r.clone();h.impactFactor>.1?x.lerp(o,h.impactFactor):h.wakeFactor>.1&&x.lerp(a,h.wakeFactor),x.multiplyScalar(p),this.colors[m]=x.r,this.colors[m+1]=x.g,this.colors[m+2]=x.b,this.colors[m+3]=x.r*.7,this.colors[m+4]=x.g*.7,this.colors[m+5]=x.b*.7,c++}}for(let h=c;h<l;h++){const u=h*6;this.positions[u]=0,this.positions[u+1]=-9999,this.positions[u+2]=0,this.positions[u+3]=0,this.positions[u+4]=-9999,this.positions[u+5]=0}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.setDrawRange(0,c*2)}dispose(){this.geometry.dispose(),this.material.dispose()}}function hv(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new c0(i)}class uv{points;maxSegments;positions;colors;sizes;geometry;material;constructor(t,e){this.maxSegments=t*e,this.positions=new Float32Array(this.maxSegments*3),this.colors=new Float32Array(this.maxSegments*3),this.sizes=new Float32Array(this.maxSegments),this.geometry=new Qt,this.geometry.setAttribute("position",new ne(this.positions,3)),this.geometry.setAttribute("color",new ne(this.colors,3)),this.geometry.setAttribute("size",new ne(this.sizes,1)),this.material=new Wc({map:hv(),size:1,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.15,blending:Fi,depthWrite:!1}),this.points=new Uo(this.geometry,this.material),this.points.frustumCulled=!1}update(t,e,n){if(!n.showSmokeTrails){this.points.visible=!1;return}this.points.visible=!0;const s=e.trailLength,r=Math.max(e.particleSize*4,1)*n.flowDensity;this.material.opacity=Math.min(e.trailOpacity*n.flowDensity*.5,1);const o=new Mt(n.flowColor),a=new Mt(n.impactColor),c=new Mt(n.wakeColor);let l=0;const h=this.maxSegments;for(const u of t){if(!u.alive||u.trail.length<1)continue;const d=u.trail,f=Math.min(d.length,s);for(let g=0;g<f&&l<h;g++){const v=d[d.length-1-g];this.positions[l*3]=v.x,this.positions[l*3+1]=v.y,this.positions[l*3+2]=v.z;let m=o.clone();u.impactFactor>.1?m.lerp(a,u.impactFactor):u.wakeFactor>.1&&m.lerp(c,u.wakeFactor);const p=g/f,x=1-p;m.multiplyScalar(x),this.colors[l*3]=m.r,this.colors[l*3+1]=m.g,this.colors[l*3+2]=m.b,this.sizes[l]=r*(1+p*2.5),l++}}for(let u=l;u<h;u++)this.positions[u*3]=0,this.positions[u*3+1]=-9999,this.positions[u*3+2]=0,this.sizes[u]=0;this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.setDrawRange(0,l)}dispose(){this.geometry.dispose(),this.material.dispose(),this.material.map&&this.material.map.dispose()}}class dv{emitter;_baseDirection=new P(0,0,1);_baseSpeed=3;constructor(t){this.emitter=t,this.update()}update(){this._baseDirection.copy(this.emitter.getFlowDirection())}get baseDirection(){return this._baseDirection}set baseSpeed(t){this._baseSpeed=t}get baseSpeed(){return this._baseSpeed}getFlowAt(t){return this._baseDirection.clone().multiplyScalar(this._baseSpeed)}}const we=.05,Yu=new P(12.9898,78.233,37.719),qu=new P(39.3468,11.135,83.155),ju=new P(73.156,52.235,9.151);function Ts(i,t,e,n,s){const r=i*n.x+t*n.y+e*n.z+s*.65;return Math.sin(r)*Math.cos(r*1.37+3.1)}function ro(i,t,e,n){return Ts(i,t,e,Yu,n)+Ts(i,t,e,qu,n*.65)}function oo(i,t,e,n){return Ts(i,t,e,qu,n)+Ts(i,t,e,ju,n*.72)}function ao(i,t,e,n){return Ts(i,t,e,ju,n)+Ts(i,t,e,Yu,n*.59)}const co=new P;function fv(i,t,e,n){const s=Math.max(1e-4,.5),r=t.x*s,o=t.y*s,a=t.z*s,c=ro(r,o+we,a,e),l=ro(r,o-we,a,e),h=ro(r,o,a+we,e),u=ro(r,o,a-we,e),d=oo(r+we,o,a,e),f=oo(r-we,o,a,e),g=oo(r,o,a+we,e),v=oo(r,o,a-we,e),m=ao(r+we,o,a,e),p=ao(r-we,o,a,e),x=ao(r,o+we,a,e),y=ao(r,o-we,a,e),_=(c-l)/(2*we),w=(h-u)/(2*we),E=(d-f)/(2*we),b=(g-v)/(2*we),A=(m-p)/(2*we),M=(x-y)/(2*we);co.set(M-b,w-A,E-_);const S=co.length();S>1e-5&&co.multiplyScalar(1/S),i.addScaledVector(co,n)}const pv=new P;function mv(i,t,e){return t.boundingSphere.distanceToPoint(i)<e}function gv(i,t){const e=t.boundingBox.clampPoint(i,pv);return i.distanceTo(e)}function _v(i,t,e){return t.boundingBox.clampPoint(i,e)}function xv(i,t,e){const n=new P;return t.boundingBox.getCenter(n),e.subVectors(i,n).normalize(),e.lengthSq()<.001&&e.set(0,1,0),e}function vv(i,t,e){if(e.crossVectors(i,t).normalize(),e.lengthSq()<.001){const n=Math.abs(i.y)<.9?new P(0,1,0):new P(1,0,0);e.crossVectors(i,n).normalize()}return e}function yv(i,t,e){return Math.max(t,Math.min(e,i))}function oi(i,t){return i+Math.random()*(t-i)}function Fa(i,t,e){const n=yv((e-i)/(t-i),0,1);return n*n*(3-2*n)}const js=new P,eu=new P,nu=new P,Sv=new P,iu=new P,cn={deflection:new P,impactFactor:0,wakeFactor:0,repelled:!1};function Mv(i,t,e,n,s){if(cn.deflection.set(0,0,0),cn.impactFactor=0,cn.wakeFactor=0,cn.repelled=!1,!n.visible)return cn;if(!mv(i,n,s.influenceDistance)){const h=new P;n.boundingBox.getCenter(h);const u=Sv.subVectors(i,h),d=u.dot(e);if(d>0&&d<s.wakeLength){const f=u.clone().addScaledVector(e,-d).length(),g=new P;n.boundingBox.getSize(g);const v=Math.max(g.x,g.y,g.z)*.8;if(f<v){const m=1-Fa(0,s.wakeLength,d),p=1-Fa(0,v,f),x=m*p*s.wakeStrength;iu.set(oi(-1,1),oi(-1,1),oi(-1,1)).normalize().multiplyScalar(x*.5),cn.deflection.copy(iu),cn.wakeFactor=x}}return cn}const r=gv(i,n),o=1-Fa(0,s.influenceDistance,r);if(o<.001)return cn;_v(i,n,nu),js.subVectors(i,nu).normalize(),js.lengthSq()<.001&&xv(i,n,js),vv(e,js,eu);const a=oi(-.15,.15)*o,c=o*1.5,l=o*1.2;return cn.deflection.addScaledVector(js,c*s.speed).addScaledVector(eu,l*s.speed).addScaledVector(e,a),cn.impactFactor=o,cn}class Ev{particleSystem;trailSystem;smokeSystem;flowField;emitter;totalTime=0;obstacleManager;flowConfig;displayConfig;emitterConfig;bus;playing=!0;spawnAccumulator=0;constructor(t,e,n,s,r,o){this.emitter=t,this.obstacleManager=e,this.flowConfig={...n},this.displayConfig={...s},this.emitterConfig={...r},this.bus=o,this.flowField=new dv(t),this.flowField.baseSpeed=n.speed,this.particleSystem=new cv(n.maxParticleCount),this.trailSystem=new lv(n.maxParticleCount,n.trailLength),this.smokeSystem=new uv(n.maxParticleCount,n.trailLength),this.setupEvents()}setupEvents(){this.bus.on("simulation:play",()=>{this.playing=!0}),this.bus.on("simulation:pause",()=>{this.playing=!1}),this.bus.on("simulation:restart",()=>{this.restart()}),this.bus.on("simulation:reset",()=>{this.resetAll()}),this.bus.on("config:flow",t=>{this.updateFlowConfig(t.data)}),this.bus.on("config:display",t=>{this.updateDisplayConfig(t.data)}),this.bus.on("config:emitter",t=>{Object.assign(this.emitterConfig,t.data)})}updateFlowConfig(t){Object.assign(this.flowConfig,t),t.speed!==void 0&&(this.flowField.baseSpeed=t.speed)}updateDisplayConfig(t){Object.assign(this.displayConfig,t),t.renderMode&&this.particleSystem.setRenderMode(t.renderMode)}update(t){!this.playing||t===0||(this.totalTime+=t,this.flowField.update(),this.spawnParticles(t),this.updateParticles(t),this.particleSystem.updateBuffers(this.flowConfig,this.displayConfig),this.trailSystem.update(this.particleSystem.particles,this.flowConfig,this.displayConfig),this.smokeSystem.update(this.particleSystem.particles,this.flowConfig,this.displayConfig))}spawnParticles(t){const e=this.emitter.getWorldSpawnPoints();if(e.length===0)return;const n=this.emitterConfig.spawnRate*e.length;this.spawnAccumulator+=n*t;const s=this.flowField.baseDirection,r=this.flowConfig.speed,o=this.emitterConfig.flowStartOffset;for(;this.spawnAccumulator>=1;){this.spawnAccumulator-=1;const a=Math.floor(oi(0,e.length)),c=e[a].clone();c.addScaledVector(s,o);const l=s.clone().multiplyScalar(r);l.x+=oi(-.1,.1)*r,l.y+=oi(-.1,.1)*r,l.z+=oi(-.1,.1)*r,this.particleSystem.spawn(c,l,this.flowConfig.particleLifetime)}}updateParticles(t){const e=this.obstacleManager.getAll(),n=this.flowField.baseDirection,s=this.flowConfig,r=n.clone().multiplyScalar(s.windGravity*t*10),o=Math.max(s.particleSize*2,.5),a=new Map;if(s.particleRepulsion>0){for(const c of this.particleSystem.particles){if(!c.alive)continue;const l=Math.floor(c.position.x/o),h=Math.floor(c.position.y/o),u=Math.floor(c.position.z/o),d=`${l},${h},${u}`;let f=a.get(d);f||(f={count:0,center:new P},a.set(d,f)),f.count++,f.center.add(c.position)}a.forEach(c=>c.center.multiplyScalar(1/c.count))}new wo;for(const c of this.particleSystem.particles){if(!c.alive)continue;if(c.age+=t,c.age>=c.lifetime){c.alive=!1;continue}const l=c.velocity.clone().multiplyScalar(t),h=l.length();let u=!1;if(h>1e-4&&e.length>0){const f=l.clone().normalize(),g=Math.max(s.particleSize,.5),v=c.position.clone().addScaledVector(f,-g),m=new wo(v,f);m.far=h+g,m.firstHitOnly=!0;const p=e.filter(x=>x.visible).map(x=>x.mesh);if(p.length>0){const x=m.intersectObjects(p,!1);if(x.length>0){const y=x[0],_=y.face?.normal||new P(0,1,0),w=new Dt().getNormalMatrix(y.object.matrixWorld),E=_.clone().applyMatrix3(w).normalize();let b=c.velocity.dot(E);if(b>0)if(y.object.userData?.obstacleShape==="plane")E.negate(),b=c.velocity.dot(E);else{c.alive=!1;continue}if(b<0){c.velocity.addScaledVector(E,-b);const A=Math.max(0,1-s.bounceStrength*.05);c.velocity.multiplyScalar(A);const M=Math.max(s.particleSize*.5+.05,s.speed*t*.5);c.position.copy(y.point).add(E.multiplyScalar(M));const S=n.clone().projectOnPlane(E).normalize();c.velocity.addScaledVector(S,s.bounceStrength*2),c.impactFactor=1,u=!0}}}}if(u)l.set(0,0,0);else for(const f of e){const g=Mv(c.position,c.velocity,n,f,s);(g.impactFactor>0||g.wakeFactor>0)&&c.velocity.add(g.deflection.multiplyScalar(t)),c.impactFactor=Math.max(c.impactFactor,g.impactFactor),c.wakeFactor=Math.max(c.wakeFactor,g.wakeFactor)}if(fv(c.velocity,c.position,this.totalTime,s.turbulenceStrength*t*80),c.velocity.add(r),s.particleRepulsion>0){const f=Math.floor(c.position.x/o),g=Math.floor(c.position.y/o),v=Math.floor(c.position.z/o),m=a.get(`${f},${g},${v}`);if(m&&m.count>1){const p=new P().subVectors(c.position,m.center);p.lengthSq()>1e-4?(p.normalize(),c.velocity.add(p.multiplyScalar(s.particleRepulsion*m.count*t*5))):(c.velocity.x+=(Math.random()-.5)*s.particleRepulsion,c.velocity.y+=(Math.random()-.5)*s.particleRepulsion,c.velocity.z+=(Math.random()-.5)*s.particleRepulsion)}}const d=s.speed*3;c.velocity.length()>d&&c.velocity.normalize().multiplyScalar(d),c.position.add(u?new P(0,0,0):l),c.trail.push(c.position.clone()),c.trail.length>s.trailLength+1&&c.trail.shift()}}restart(){this.particleSystem.reset(),this.spawnAccumulator=0,this.playing=!0}resetAll(){this.restart()}isPlaying(){return this.playing}getObjects(){return[this.particleSystem.points,this.trailSystem.mesh,this.smokeSystem.points]}dispose(){this.particleSystem.dispose(),this.trailSystem.dispose(),this.smokeSystem.dispose()}}class bv extends jc{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new d0(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){function e(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(n(g,h,v))return!1;return!0}function n(l,h,u){for(let d=0,f=l.length;d<f;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function s(l){const h=new DataView(l),u=h.getUint32(80,!0);let d,f,g,v=!1,m,p,x,y,_;for(let R=0;R<70;R++)h.getUint32(R,!1)==1129270351&&h.getUint8(R+4)==82&&h.getUint8(R+5)==61&&(v=!0,m=new Float32Array(u*3*3),p=h.getUint8(R+6)/255,x=h.getUint8(R+7)/255,y=h.getUint8(R+8)/255,_=h.getUint8(R+9)/255);const w=84,E=50,b=new Qt,A=new Float32Array(u*3*3),M=new Float32Array(u*3*3),S=new Mt;for(let R=0;R<u;R++){const L=w+R*E,I=h.getFloat32(L,!0),U=h.getFloat32(L+4,!0),z=h.getFloat32(L+8,!0);if(v){const H=h.getUint16(L+48,!0);(H&32768)===0?(d=(H&31)/31,f=(H>>5&31)/31,g=(H>>10&31)/31):(d=p,f=x,g=y)}for(let H=1;H<=3;H++){const Y=L+H*12,k=R*3*3+(H-1)*3;A[k]=h.getFloat32(Y,!0),A[k+1]=h.getFloat32(Y+4,!0),A[k+2]=h.getFloat32(Y+8,!0),M[k]=I,M[k+1]=U,M[k+2]=z,v&&(S.setRGB(d,f,g,$e),m[k]=S.r,m[k+1]=S.g,m[k+2]=S.b)}}return b.setAttribute("position",new ne(A,3)),b.setAttribute("normal",new ne(M,3)),v&&(b.setAttribute("color",new ne(m,3)),b.hasColors=!0,b.alpha=_),b}function r(l){const h=new Qt,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),p=new RegExp("normal"+v+v+v,"g"),x=[],y=[],_=[],w=new P;let E,b=0,A=0,M=0;for(;(E=u.exec(l))!==null;){A=M;const S=E[0],R=(E=f.exec(S))!==null?E[1]:"";for(_.push(R);(E=d.exec(S))!==null;){let U=0,z=0;const H=E[0];for(;(E=p.exec(H))!==null;)w.x=parseFloat(E[1]),w.y=parseFloat(E[2]),w.z=parseFloat(E[3]),z++;for(;(E=m.exec(H))!==null;)x.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),y.push(w.x,w.y,w.z),U++,M++;z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),U!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const L=A,I=M-A;h.userData.groupNames=_,h.addGroup(L,I,b),b++}return h.setAttribute("position",new Yt(x,3)),h.setAttribute("normal",new Yt(y,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=a(t);return e(c)?s(c):r(o(t))}}const wv=5e5;class Tv{bus;loader;dropOverlay;constructor(t){this.bus=t,this.loader=new bv,this.dropOverlay=document.getElementById("drop-overlay"),this.setupDragDrop()}async openFilePicker(){const t=document.createElement("input");t.type="file",t.accept=".stl",t.onchange=()=>{const e=t.files?.[0];e&&this.loadFile(e)},t.click()}setupDragDrop(){const t=document.body;let e=0;t.addEventListener("dragenter",n=>{n.preventDefault(),e++,this.hasSTLFile(n)&&this.dropOverlay.classList.add("visible")}),t.addEventListener("dragleave",n=>{n.preventDefault(),e--,e<=0&&(e=0,this.dropOverlay.classList.remove("visible"))}),t.addEventListener("dragover",n=>{n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="copy")}),t.addEventListener("drop",n=>{n.preventDefault(),e=0,this.dropOverlay.classList.remove("visible");const s=n.dataTransfer?.files?.[0];s&&s.name.toLowerCase().endsWith(".stl")&&this.loadFile(s)})}hasSTLFile(t){if(!t.dataTransfer?.items)return!1;for(let e=0;e<t.dataTransfer.items.length;e++)if(t.dataTransfer.items[e].kind==="file")return!0;return!1}async loadFile(t){try{const e=await t.arrayBuffer(),n=this.loader.parse(e);if(!n||n.attributes.position.count===0){this.bus.emit("stl:error",{message:"STL file is empty or invalid."});return}n.attributes.normal||n.computeVertexNormals();const s=n.attributes.position.count/3;s>wv&&console.warn(`STL has ${s} triangles — may impact performance`);const r=new qc({color:10398392,specular:2236962,shininess:40,transparent:!0,opacity:.75,side:Ke}),o=new et(n,r);o.name=t.name,n.computeBoundingBox();const a=n.boundingBox,c=new P;a.getSize(c);const l=new P;a.getCenter(l);const h=c.clone();n.translate(-l.x,-l.y,-l.z),n.computeBoundingBox(),n.computeBoundingSphere(),n.computeBoundsTree&&n.computeBoundsTree();const u=Math.max(c.x,c.y,c.z);let d=1;u>0&&(d=5/u,o.scale.setScalar(d)),o.position.set(6,1.5,0);const f=ni(),g=Xu(o),v={sourceFileName:t.name,triangleCount:s,autoCentered:!0,autoScaled:!0,originalBoundingSize:h},m={id:f,name:t.name,type:"stl",mesh:o,visible:!0,selectable:!0,transformable:!0,boundingBox:g.box,boundingSphere:g.sphere,collisionMode:"simplified",metadata:v};o.userData.selectionInfo={id:f,name:t.name,type:"stl",mesh:o},o.userData.obstacleData=m,this.bus.emit("stl:loaded",m)}catch(e){const n=e instanceof Error?e.message:"Unknown error loading STL file";this.bus.emit("stl:error",{message:n})}}dispose(){}}function gi(i,t,e,n=!1){const s=document.createElement("div");s.className="ui-section";const r=document.createElement("div");r.className=`section-header${n?" collapsed":""}`,r.innerHTML=`
    <span class="section-title"><span class="icon">${t}</span>${e}</span>
    <span class="section-chevron">▼</span>
  `;const o=document.createElement("div");return o.className=`section-body${n?" collapsed":""}`,n||(o.style.maxHeight="none"),r.addEventListener("click",()=>{r.classList.contains("collapsed")?(r.classList.remove("collapsed"),o.classList.remove("collapsed"),o.style.maxHeight="none"):(r.classList.add("collapsed"),o.classList.add("collapsed"),o.style.maxHeight="0")}),s.appendChild(r),s.appendChild(o),i.appendChild(s),{header:r,body:o}}function ke(i,t,e,n,s,r,o,a){const c=document.createElement("div");c.className="control-row",a&&c.setAttribute("data-tooltip",a);const l=document.createElement("span");l.className="control-label",l.textContent=t;const h=document.createElement("input");h.type="range",h.className="control-slider",h.min=String(n),h.max=String(s),h.step=String(r),h.value=String(e);const u=document.createElement("span");return u.className="control-value",u.textContent=su(e),h.addEventListener("input",()=>{const d=parseFloat(h.value);u.textContent=su(d),o(d)}),c.appendChild(l),c.appendChild(h),c.appendChild(u),i.appendChild(c),h}function us(i,t,e,n,s){const r=document.createElement("div");r.className="control-row",s&&r.setAttribute("data-tooltip",s);const o=document.createElement("span");o.className="control-label",o.textContent=t;const a=document.createElement("div");return a.className=`toggle${e?" active":""}`,a.addEventListener("click",()=>{const c=a.classList.toggle("active");n(c)}),r.appendChild(o),r.appendChild(a),i.appendChild(r),a}function lo(i,t,e,n){const s=document.createElement("div");s.className="control-row";const r=document.createElement("span");r.className="control-label",r.textContent=t;const o=document.createElement("input");return o.type="color",o.className="control-color",o.value=e,o.addEventListener("input",()=>{n(o.value)}),s.appendChild(r),s.appendChild(o),i.appendChild(s),o}function ae(i,t,e,n="",s){const r=document.createElement("button");return r.className=`btn ${n}`.trim(),r.textContent=t,s&&r.setAttribute("data-tooltip",s),r.addEventListener("click",e),i.appendChild(r),r}function Tn(i,t,e){const n=document.createElement("div");n.className="info-row";const s=document.createElement("span");s.className="info-label",s.textContent=t;const r=document.createElement("span");return r.className="info-value",r.textContent=e,n.appendChild(s),n.appendChild(r),i.appendChild(n),r}function su(i){return Number.isInteger(i)?String(i):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)}class Av{constructor(t,e){const{body:n}=gi(t,"▶","Simulation"),s=document.createElement("div");s.className="btn-row",ae(s,"▶ Play",()=>e.emit("simulation:play"),"success"),ae(s,"⏸ Pause",()=>e.emit("simulation:pause"),""),n.appendChild(s);const r=document.createElement("div");r.className="btn-row",ae(r,"↻ Restart",()=>e.emit("simulation:restart"),""),ae(r,"🗑 Reset All",()=>e.emit("simulation:reset"),"danger"),n.appendChild(r)}}class Cv{constructor(t,e,n){const{body:s}=gi(t,"🎨","Display");us(s,"Show Grid",n.showGrid,a=>{e.emit("config:display",{showGrid:a})},"Toggle ground grid"),us(s,"Show Axes",n.showAxes,a=>{e.emit("config:display",{showAxes:a})},"Toggle XYZ axes"),us(s,"Show Emitter",n.showEmitter,a=>{e.emit("config:display",{showEmitter:a}),e.emit("config:emitter",{visible:a})},"Toggle emitter visibility"),us(s,"Show Bounds",n.showObstacleBounds,a=>{e.emit("config:display",{showObstacleBounds:a})},"Show obstacle bounding boxes");const r=document.createElement("div");r.className="separator",s.appendChild(r),lo(s,"Background",n.backgroundColor,a=>{e.emit("config:display",{backgroundColor:a})}),lo(s,"Flow Color",n.flowColor,a=>{e.emit("config:display",{flowColor:a})}),lo(s,"Impact Color",n.impactColor,a=>{e.emit("config:display",{impactColor:a})}),lo(s,"Wake Color",n.wakeColor,a=>{e.emit("config:display",{wakeColor:a})});const o=document.createElement("div");o.className="separator",s.appendChild(o),us(s,"Smoke Mode",n.renderMode==="smoke",a=>{e.emit("config:display",{renderMode:a?"smoke":"particles"})},"Toggle between particle and smoke rendering"),us(s,"Smoke Trails",n.showSmokeTrails,a=>{e.emit("config:display",{showSmokeTrails:a})},"Render volumetric clouds along trails"),ke(s,"Flow Density",n.flowDensity,.1,5,.1,a=>{e.emit("config:display",{flowDensity:a})},"Visual thickness of flow and smoke")}}class Rv{constructor(t,e,n){const{body:s}=gi(t,"📡","Emitter");ke(s,"Width",n.width,1,20,.5,r=>{e.emit("config:emitter",{width:r})},"Emitter plane width"),ke(s,"Height",n.height,1,20,.5,r=>{e.emit("config:emitter",{height:r})},"Emitter plane height"),ke(s,"Density X",n.densityX,1,200,1,r=>{e.emit("config:emitter",{densityX:r})},"Spawn points along X"),ke(s,"Density Y",n.densityY,1,200,1,r=>{e.emit("config:emitter",{densityY:r})},"Spawn points along Y"),ke(s,"Emission/Point",n.spawnRate,1,100,1,r=>{e.emit("config:emitter",{spawnRate:r})},"Particles per second per point"),ke(s,"Flow Offset",n.flowStartOffset,0,3,.1,r=>{e.emit("config:emitter",{flowStartOffset:r})},"Start offset along flow direction")}}class Pv{constructor(t,e,n){const{body:s}=gi(t,"🌊","Flow");ke(s,"Speed",n.speed,.1,50,.5,o=>{e.emit("config:flow",{speed:o})},"Base flow velocity"),ke(s,"Lifetime",n.particleLifetime,.5,20,.5,o=>{e.emit("config:flow",{particleLifetime:o})},"Simulation extent limit"),ke(s,"Particle Size",n.particleSize,.01,10,.01,o=>{e.emit("config:flow",{particleSize:o})}),ke(s,"Turbulence",n.turbulenceStrength,0,50,.5,o=>{e.emit("config:flow",{turbulenceStrength:o})},"Random perturbation strength"),ke(s,"Bounce",n.bounceStrength,0,10,.1,o=>{e.emit("config:flow",{bounceStrength:o})},"Particle bounciness on obstacles"),ke(s,"Wind Gravity",n.windGravity,0,10,.5,o=>{e.emit("config:flow",{windGravity:o})},"Constant push toward flow direction"),ke(s,"Self-Collision",n.particleRepulsion,0,2,.1,o=>{e.emit("config:flow",{particleRepulsion:o})},"Particle volume outward pressure");const r=document.createElement("div");r.className="separator",s.appendChild(r),ke(s,"Max Particles",n.maxParticleCount,1e3,1e5,1e3,o=>{e.emit("config:flow",{maxParticleCount:o})},"Maximum particle count")}}class Dv{constructor(t,e,n){const{body:s}=gi(t,"🧊","Obstacles"),r=document.createElement("div");r.className="obstacle-grid",ae(r,"◻ Plane",()=>e("plane")),ae(r,"▣ Box",()=>e("box")),ae(r,"● Sphere",()=>e("sphere")),ae(r,"◎ Cylinder",()=>e("cylinder")),ae(r,"◉ Torus",()=>e("torus")),ae(r,"△ Cone",()=>e("cone")),s.appendChild(r);const o=document.createElement("div");o.className="separator",s.appendChild(o),ae(s,"📁 Upload STL",n,"primary")}}class Lv{body;nameEl=null;typeEl=null;posEls=[];rotEls=[];scaleEls=[];emptyState=null;infoContainer=null;constructor(t,e,n){const s=gi(t,"🎯","Selection");this.body=s.body,this.emptyState=document.createElement("div"),this.emptyState.className="empty-state",this.emptyState.textContent="No object selected",this.body.appendChild(this.emptyState),this.infoContainer=document.createElement("div"),this.infoContainer.style.display="none",this.nameEl=Tn(this.infoContainer,"Name","-"),this.typeEl=Tn(this.infoContainer,"Type","-");const r=document.createElement("div");r.className="separator",this.infoContainer.appendChild(r);const o=document.createElement("div");o.className="control-label",o.textContent="Transform Mode",o.style.marginBottom="4px",this.infoContainer.appendChild(o);const a=document.createElement("div");a.className="btn-row",a.style.marginBottom="12px",ae(a,"Move (W)",()=>e.emit("transform:mode","translate"),""),ae(a,"Rotate (E)",()=>e.emit("transform:mode","rotate"),""),ae(a,"Scale (R)",()=>e.emit("transform:mode","scale"),""),this.infoContainer.appendChild(a);const c=document.createElement("div");c.className="control-label",c.textContent="Position",c.style.marginBottom="4px",this.infoContainer.appendChild(c);for(const g of["X","Y","Z"])this.posEls.push(Tn(this.infoContainer,`  ${g}`,"0.00"));const l=document.createElement("div");l.className="control-label",l.textContent="Rotation (°)",l.style.marginBottom="4px",l.style.marginTop="8px",this.infoContainer.appendChild(l);for(const g of["X","Y","Z"])this.rotEls.push(Tn(this.infoContainer,`  ${g}`,"0.0"));const h=document.createElement("div");h.className="control-label",h.textContent="Scale",h.style.marginBottom="4px",h.style.marginTop="8px",this.infoContainer.appendChild(h);for(const g of["X","Y","Z"])this.scaleEls.push(Tn(this.infoContainer,`  ${g}`,"1.00"));const u=document.createElement("div");u.className="separator",this.infoContainer.appendChild(u);const d=document.createElement("div");d.className="btn-row",ae(d,"🎯 Focus",n.onFocus,"","Focus camera on selected"),ae(d,"📋 Duplicate",n.onDuplicate,"","Duplicate selected object"),this.infoContainer.appendChild(d);const f=ae(this.infoContainer,"🗑 Delete Selected",n.onDelete,"danger");f.style.width="100%",f.style.marginTop="8px",this.body.appendChild(this.infoContainer),e.on("selection:changed",g=>{this.updateSelection(g.data)})}updateSelection(t){if(!t){this.emptyState.style.display="block",this.infoContainer.style.display="none";return}this.emptyState.style.display="none",this.infoContainer.style.display="block",this.nameEl.textContent=t.name,this.typeEl.textContent=t.type,this.updateTransform(t.mesh)}updateTransform(t){if(!t)return;const e=t.position,n=t.rotation,s=t.scale;this.posEls[0].textContent=e.x.toFixed(2),this.posEls[1].textContent=e.y.toFixed(2),this.posEls[2].textContent=e.z.toFixed(2),this.rotEls[0].textContent=(n.x*180/Math.PI).toFixed(1),this.rotEls[1].textContent=(n.y*180/Math.PI).toFixed(1),this.rotEls[2].textContent=(n.z*180/Math.PI).toFixed(1),this.scaleEls[0].textContent=s.x.toFixed(2),this.scaleEls[1].textContent=s.y.toFixed(2),this.scaleEls[2].textContent=s.z.toFixed(2)}}class Iv{body;emptyState;infoContainer;fileNameEl;dimXEl;dimYEl;dimZEl;triCountEl;constructor(t,e,n){const s=gi(t,"📐","STL Import",!0);this.body=s.body,this.emptyState=document.createElement("div"),this.emptyState.className="empty-state",this.emptyState.textContent="No STL loaded",this.body.appendChild(this.emptyState),this.infoContainer=document.createElement("div"),this.infoContainer.style.display="none",this.fileNameEl=Tn(this.infoContainer,"File","-"),this.triCountEl=Tn(this.infoContainer,"Triangles","-"),this.dimXEl=Tn(this.infoContainer,"Size X","-"),this.dimYEl=Tn(this.infoContainer,"Size Y","-"),this.dimZEl=Tn(this.infoContainer,"Size Z","-");const r=document.createElement("div");r.className="separator",this.infoContainer.appendChild(r);const o=document.createElement("div");o.className="btn-row",ae(o,"Recenter",n.onRecenter,""),ae(o,"Fit Camera",n.onRefit,""),this.infoContainer.appendChild(o),this.body.appendChild(this.infoContainer),e.on("stl:loaded",a=>{this.showSTLInfo(a.data)})}showSTLInfo(t){this.emptyState.style.display="none",this.infoContainer.style.display="block";const e=t.metadata;this.fileNameEl.textContent=e.sourceFileName,this.triCountEl.textContent=e.triangleCount.toLocaleString();const n=e.originalBoundingSize;this.dimXEl.textContent=n.x.toFixed(2),this.dimYEl.textContent=n.y.toFixed(2),this.dimZEl.textContent=n.z.toFixed(2)}}class Uv{constructor(t,e){const{body:n}=gi(t,"💾","Scene State",!0),s=document.createElement("div");s.className="btn-row",ae(s,"💾 Save",e.onSave,"","Save scene to localStorage"),ae(s,"📂 Load",e.onLoad,"","Load scene from localStorage"),n.appendChild(s);const r=document.createElement("div");r.className="btn-row",ae(r,"📤 Export",e.onExport,"","Export scene as JSON"),ae(r,"📥 Import",e.onImport,"","Import scene from JSON"),n.appendChild(r);const o=document.createElement("div");o.className="separator",n.appendChild(o);const a=document.createElement("div");a.className="btn-row",ae(a,"📷 Screenshot",e.onScreenshot,"","Capture canvas as PNG"),ae(a,"🔲 Frame All",e.onFrameAll,"","Frame all objects"),n.appendChild(a)}}class Nv{container;simulationSection;displaySection;emitterSection;flowSection;obstaclesSection;selectionSection;stlSection;sceneStateSection;constructor(t,e,n,s,r){this.container=document.getElementById("ui-panel"),this.container.innerHTML="";const o=document.createElement("div");o.className="panel-header",o.innerHTML=`
      <h1>Antigravity</h1>
      <div class="subtitle">3D Airflow Simulator</div>
    `,this.container.appendChild(o);const a=document.createElement("div");a.className="panel-body",this.container.appendChild(a),this.simulationSection=new Av(a,t),this.displaySection=new Cv(a,t,n),this.emitterSection=new Rv(a,t,s),this.flowSection=new Pv(a,t,e),this.obstaclesSection=new Dv(a,r.onAddObstacle,r.onUploadSTL),this.selectionSection=new Lv(a,t,{onDelete:r.onDeleteSelected,onDuplicate:r.onDuplicateSelected,onFocus:r.onFocusSelected}),this.stlSection=new Iv(a,t,{onRecenter:r.onRecenterSTL,onRefit:r.onRefitCamera}),this.sceneStateSection=new Uv(a,{onSave:r.onSaveState,onLoad:r.onLoadState,onExport:r.onExportJSON,onImport:r.onImportJSON,onScreenshot:r.onScreenshot,onFrameAll:r.onFrameAll})}}function Fv(i,t){const e=JSON.stringify(i,null,2),n=new Blob([e],{type:"application/json"});Bv(n,t)}function Bv(i,t){const e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,n.click(),URL.revokeObjectURL(e)}class Ov{bus;canvas;rendererMgr;sceneMgr;cameraMgr;resizeMgr;timeMgr;orbitCtrl;transformCtrl;selectionMgr;inputMgr;emitterMgr;obstacleMgr;flowSim;stlImporter;uiPanel;currentDisplayConfig={...La};constructor(){this.bus=new bx,this.canvas=document.getElementById("render-canvas"),this.init(),this.setupEvents(),this.startLoop(),this.showToast("Ready","success")}init(){this.rendererMgr=new wx(this.canvas),this.timeMgr=new Rx,this.sceneMgr=new Tx,this.sceneMgr.updateDisplay(this.currentDisplayConfig);const t=this.rendererMgr.getWidth()/this.rendererMgr.getHeight();this.cameraMgr=new Ax(t),this.resizeMgr=new Cx(this.rendererMgr,this.cameraMgr),this.emitterMgr=new rv(Da,this.bus),this.sceneMgr.scene.add(this.emitterMgr.emitter.mesh),this.obstacleMgr=new av(this.sceneMgr.scene,this.bus),this.flowSim=new Ev(this.emitterMgr.emitter,this.obstacleMgr,kh,La,Da,this.bus),this.flowSim.getObjects().forEach(e=>this.sceneMgr.scene.add(e)),this.stlImporter=new Tv(this.bus),this.orbitCtrl=new Wx(this.cameraMgr.camera,this.rendererMgr.renderer.domElement),this.transformCtrl=new tv(this.cameraMgr.camera,this.rendererMgr.renderer.domElement,this.sceneMgr.scene,this.bus,()=>this.orbitCtrl.setEnabled(!1),()=>this.orbitCtrl.setEnabled(!0)),this.selectionMgr=new nv(this.cameraMgr.camera,this.rendererMgr.renderer.domElement,this.bus),this.selectionMgr.registerSelectable(this.emitterMgr.emitter.mesh),this.inputMgr=new iv(this.bus,this.transformCtrl,this.selectionMgr,e=>this.obstacleMgr.remove(e)),this.uiPanel=new Nv(this.bus,kh,La,Da,{onAddObstacle:e=>this.addObstacle(e),onUploadSTL:()=>this.stlImporter.openFilePicker(),onDeleteSelected:()=>{const e=this.selectionMgr.selected;e&&e.type!=="emitter"&&(this.obstacleMgr.remove(e.id),this.selectionMgr.deselect())},onDuplicateSelected:()=>{const e=this.selectionMgr.selected;e&&e.type!=="emitter"&&this.obstacleMgr.duplicate(e.id)},onFocusSelected:()=>{const e=this.selectionMgr.selected;e&&this.cameraMgr.focusObject(e.mesh)},onFrameAll:()=>this.cameraMgr.frameAll(this.sceneMgr.scene),onScreenshot:()=>this.takeScreenshot(),onSaveState:()=>this.saveState(),onLoadState:()=>this.loadState(),onExportJSON:()=>this.exportState(),onImportJSON:()=>this.importState(),onRecenterSTL:()=>{},onRefitCamera:()=>this.cameraMgr.frameAll(this.sceneMgr.scene)}),this.addObstacle("sphere")}setupEvents(){this.bus.on("selection:changed",t=>{const e=t.data;e?this.transformCtrl.attach(e.mesh):this.transformCtrl.detach()}),this.bus.on("config:display",t=>{const e=t.data;Object.assign(this.currentDisplayConfig,e),this.sceneMgr.updateDisplay(this.currentDisplayConfig),e.showObstacleBounds!==void 0&&this.obstacleMgr.setShowBounds(e.showObstacleBounds)}),this.bus.on("config:emitter",t=>{this.emitterMgr.updateConfig(t.data)}),this.bus.on("transform:mode",t=>{this.transformCtrl.setMode(t.data)}),this.bus.on("stl:loaded",t=>{const e=t.data;this.obstacleMgr.add(e),this.selectionMgr.registerSelectable(e.mesh),this.selectionMgr.select(e.mesh.userData.selectionInfo),this.cameraMgr.focusObject(e.mesh),this.showToast(`Loaded STL: ${e.name}`,"info")}),this.bus.on("stl:error",t=>{const e=t.data;this.showToast(e.message,"error")}),this.bus.on("obstacle:removed",t=>{const e=t.data;this.selectionMgr.unregisterSelectable(e.mesh)})}addObstacle(t){const e=tu.createFromType(t);e&&(this.obstacleMgr.add(e),this.selectionMgr.registerSelectable(e.mesh),this.selectionMgr.select(e.mesh.userData.selectionInfo))}takeScreenshot(){try{this.rendererMgr.render(this.sceneMgr.scene,this.cameraMgr.camera);const t=this.rendererMgr.takeScreenshot(),e=document.createElement("a");e.href=t,e.download=`antigravity_render_${Date.now()}.png`,e.click(),this.showToast("Screenshot saved","success")}catch{this.showToast("Failed to save screenshot","error")}}serializeState(){const t=this.obstacleMgr.getAll().map(s=>{const r=s.mesh.position,o=s.mesh.rotation,a=s.mesh.scale;return{id:s.id,name:s.name,type:s.type,position:[r.x,r.y,r.z],rotation:[o.x,o.y,o.z],scale:[a.x,a.y,a.z],collisionMode:s.collisionMode,stlMetadata:s.metadata}}),e=this.emitterMgr.emitter.mesh.position,n=this.emitterMgr.emitter.mesh.rotation;return{version:1,emitter:{...this.emitterMgr.getConfig(),position:[e.x,e.y,e.z],rotation:[n.x,n.y,n.z]},flow:this.flowSim.flowConfig,display:this.flowSim.displayConfig,obstacles:t}}saveState(){try{const t=this.serializeState();localStorage.setItem("antigravity_sceneState",JSON.stringify(t)),this.showToast("Scene saved to LocalStorage","success")}catch{this.showToast("Failed to save scene","error")}}loadState(){try{const t=localStorage.getItem("antigravity_sceneState");if(!t){this.showToast("No saved scene found","warning");return}const e=JSON.parse(t);this.restoreState(e),this.showToast("Scene loaded","success")}catch{this.showToast("Failed to load scene","error")}}exportState(){const t=this.serializeState();Fv(t,`antigravity_scene_${Date.now()}.json`),this.showToast("Scene exported","success")}importState(){const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async()=>{const e=t.files?.[0];if(e)try{const n=await e.text(),s=JSON.parse(n);this.restoreState(s),this.showToast("Scene imported successfully","success")}catch{this.showToast("Invalid JSON file","error")}},t.click()}restoreState(t){this.obstacleMgr.clear();for(const e of t.obstacles){if(e.type==="stl"){this.showToast(`Skipped STL '${e.name}' (upload manually)`,"warning");continue}const n=tu.createFromType(e.type);n&&(n.mesh.position.set(e.position[0],e.position[1],e.position[2]),n.mesh.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2]),n.mesh.scale.set(e.scale[0],e.scale[1],e.scale[2]),n.name=e.name,n.collisionMode=e.collisionMode,this.obstacleMgr.add(n),this.selectionMgr.registerSelectable(n.mesh))}t.emitter&&(this.bus.emit("config:emitter",t.emitter),this.emitterMgr.emitter.mesh.position.set(t.emitter.position[0],t.emitter.position[1],t.emitter.position[2]),this.emitterMgr.emitter.mesh.rotation.set(t.emitter.rotation[0],t.emitter.rotation[1],t.emitter.rotation[2])),t.flow&&this.bus.emit("config:flow",t.flow),t.display&&this.bus.emit("config:display",t.display),this.obstacleMgr.updateAllBounds(),this.flowSim.restart()}showToast(t,e="info"){const n=document.getElementById("toast-container");if(!n)return;const s=document.createElement("div");s.className=`toast ${e}`,s.textContent=t,n.appendChild(s),setTimeout(()=>{s.classList.add("fade-out"),setTimeout(()=>s.remove(),300)},3e3)}startLoop(){const t=()=>{requestAnimationFrame(t),this.timeMgr.update();const e=this.timeMgr.deltaTime;this.orbitCtrl.update(),this.flowSim.update(e),this.rendererMgr.render(this.sceneMgr.scene,this.cameraMgr.camera)};t()}}Qt.prototype.computeBoundsTree=Mx;Qt.prototype.disposeBoundsTree=Ex;et.prototype.raycast=yx;document.addEventListener("DOMContentLoaded",()=>{new Ov});
