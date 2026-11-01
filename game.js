(()=>{var Qc="170";var jd=0,tu=1,Kd=2;var _f=1,$c=2,fi=3,Ui=0,un=1,Mt=2,Zt=0,Ds=1,Un=2,nu=3,iu=4,eh=5,Dn=100,Jd=101,Qd=102,$d=103,ep=104,$s=200,tp=201,np=202,ip=203,El=204,wl=205,ma=206,sp=207,ga=208,rp=209,op=210,ap=211,lp=212,cp=213,hp=214,Tl=0,Al=1,Rl=2,Os=3,Cl=4,Pl=5,Il=6,Ll=7,th=0,up=1,fp=2,Ni=0,nh=1,ih=2,sh=3,rh=4,dp=5,oh=6,kr=7;var Sf=300,Fs=301,Bs=302,Dl=303,Nl=304,xa=306,zn=1e3,pi=1001,Ul=1002,jt=1003,pp=1004;var ro=1005;var yn=1006,Ga=1007;var mi=1008;var jn=1009,bf=1010,Ef=1011,Ar=1012,ah=1013,ts=1014,si=1015,nn=1016,lh=1017,ch=1018,zi=1020,wf=35902,Tf=1021,Af=1022,gn=1023,Rf=1024,Cf=1025,Ns=1026,Oi=1027,hh=1028,uh=1029,Pf=1030,fh=1031;var dh=1033,Bo=33776,Ho=33777,ko=33778,Vo=33779,zl=35840,Ol=35841,Fl=35842,Bl=35843,Hl=36196,kl=37492,Vl=37496,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,Zl=37813,jl=37814,Kl=37815,Jl=37816,Ql=37817,$l=37818,ec=37819,tc=37820,nc=37821,Go=36492,ic=36494,sc=36495,If=36283,rc=36284,oc=36285,ac=36286;var Wo=2300,lc=2301,Wa=2302,su=2400,ru=2401,ou=2402;var mp=3200,gp=3201;var va=0,xp=1,Nn="",Nt="srgb",er="srgb-linear",ya="linear",St="srgb";var fs=7680;var au=519,vp=512,yp=513,Mp=514,Lf=515,_p=516,Sp=517,bp=518,Ep=519,cc=35044,xn=35048;var lu="300 es",gi=2e3,Xo=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=1234567,Sr=Math.PI/180,Hs=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function ph(i,e){return(i%e+e)%e}function wp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tp(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function Ap(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function Rp(i,e=1){return e-Math.abs(ph(i,e*2)-e)}function Cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lp(i,e){return i+Math.random()*(e-i)}function Dp(i){return i*(.5-Math.random())}function Np(i){i!==void 0&&(cu=i);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Up(i){return i*Sr}function zp(i){return i*Hs}function Op(i){return(i&i-1)===0&&i!==0}function Fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _i={DEG2RAD:Sr,RAD2DEG:Hs,generateUUID:ri,clamp:$t,euclideanModulo:ph,mapLinear:wp,inverseLerp:Tp,lerp:br,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Pp,randInt:Ip,randFloat:Lp,randFloatSpread:Dp,seededRandom:Np,degToRad:Up,radToDeg:zp,isPowerOfTwo:Op,ceilPowerOfTwo:Fp,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:Hp,normalize:Pt,denormalize:Zn},Re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],S=s[1],x=s[4],M=s[7],P=s[2],C=s[5],T=s[8];return r[0]=o*v+a*S+l*P,r[3]=o*m+a*x+l*C,r[6]=o*d+a*M+l*T,r[1]=c*v+h*S+f*P,r[4]=c*m+h*x+f*C,r[7]=c*d+h*M+f*T,r[2]=u*v+p*S+g*P,r[5]=u*m+p*x+g*C,r[8]=u*d+p*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*f+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xa=new ft;function Df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kp(){let i=qo("canvas");return i.style.display="block",i}var hu={};function Mr(i){i in hu||(hu[i]=!0,console.warn(i))}function Vp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Gp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var xt={enabled:!0,workingColorSpace:er,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?ya:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var uu=[.64,.33,.3,.6,.15,.06],fu=[.2126,.7152,.0722],du=[.3127,.329],pu=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[er]:{primaries:uu,whitePoint:du,transfer:ya,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:fu,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:uu,whitePoint:du,transfer:St,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:fu,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});var ds,hc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=qo("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xp=0,Yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qp=0,Gt=class i extends Fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=yn,o=mi,a=gn,l=jn,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ri(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Sf;Gt.DEFAULT_ANISOTROPY=1;var bt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(p+1)/2,P=(d+1)/2,C=(h+u)/4,T=(f+v)/4,b=(g+m)/4;return x>M&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=T/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=b/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=b/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uc=class extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Gt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends uc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zo=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fc=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Et=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==u||c!==p||h!==g){let m=1-a,d=l*u+c*p+h*g+f*v,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),C=Math.atan2(P,d*S);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}let M=a*S;if(l=l*m+u*M,c=c*m+p*M,h=h*m+g*M,f=f*m+v*M,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-a*p,e[t+2]=c*g+h*p+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ya=new B,gu=new Et,Kn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),ao.subVectors(this.max,cr),ps.subVectors(e.a,cr),ms.subVectors(e.b,cr),gs.subVectors(e.c,cr),Ai.subVectors(ms,ps),Ri.subVectors(gs,ms),Yi.subVectors(ps,gs);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Yi.z,Yi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Yi.z,0,-Yi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Yi.y,Yi.x,0];return!Za(t,ps,ms,gs,ao)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,ps,ms,gs,ao))?!1:(lo.crossVectors(Ai,Ri),t=[lo.x,lo.y,lo.z],Za(t,ps,ms,gs,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ai=[new B,new B,new B,new B,new B,new B,new B,new B],Xn=new B,oo=new Kn,ps=new B,ms=new B,gs=new B,Ai=new B,Ri=new B,Yi=new B,cr=new B,ao=new B,lo=new B,Zi=new B;function Za(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zi.fromArray(i,r);let a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yp=new Kn,hr=new B,ja=new B,vi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(ja)),this.expandByPoint(hr.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new B,Ka=new B,co=new B,Ci=new B,Ja=new B,ho=new B,Qa=new B,ks=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ka.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ka);let r=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=Ci.dot(this.direction),l=-Ci.dot(co),c=Ci.lengthSq(),h=Math.abs(1-o*o),f,u,p,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ka).addScaledVector(co,u),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,s,r){Ja.subVectors(t,e),ho.subVectors(n,e),Qa.crossVectors(Ja,ho);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let l=a*this.direction.dot(ho.crossVectors(Ci,ho));if(l<0)return null;let c=a*this.direction.dot(Ja.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(Qa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,u,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,u,p,g,v,m)}set(e,t,n,s,r,o,a,l,c,h,f,u,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,g=c*h,v=c*f;t[0]=u+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,g=c*h,v=c*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zp,e,jp)}lookAt(e,t,n){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Pi.crossVectors(n,An),Pi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Pi.crossVectors(n,An)),Pi.normalize(),uo.crossVectors(An,Pi),s[0]=Pi.x,s[4]=uo.x,s[8]=An.x,s[1]=Pi.y,s[5]=uo.y,s[9]=An.y,s[2]=Pi.z,s[6]=uo.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],S=n[3],x=n[7],M=n[11],P=n[15],C=s[0],T=s[4],b=s[8],_=s[12],y=s[1],E=s[5],w=s[9],D=s[13],I=s[2],H=s[6],N=s[10],L=s[14],U=s[3],k=s[7],W=s[11],Y=s[15];return r[0]=o*C+a*y+l*I+c*U,r[4]=o*T+a*E+l*H+c*k,r[8]=o*b+a*w+l*N+c*W,r[12]=o*_+a*D+l*L+c*Y,r[1]=h*C+f*y+u*I+p*U,r[5]=h*T+f*E+u*H+p*k,r[9]=h*b+f*w+u*N+p*W,r[13]=h*_+f*D+u*L+p*Y,r[2]=g*C+v*y+m*I+d*U,r[6]=g*T+v*E+m*H+d*k,r[10]=g*b+v*w+m*N+d*W,r[14]=g*_+v*D+m*L+d*Y,r[3]=S*C+x*y+M*I+P*U,r[7]=S*T+x*E+M*H+P*k,r[11]=S*b+x*w+M*N+P*W,r[15]=S*_+x*D+M*L+P*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*p-n*l*p)+v*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-t*l*f+t*a*u+s*o*f-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],S=f*m*c-v*u*c+v*l*p-a*m*p-f*l*d+a*u*d,x=g*u*c-h*m*c-g*l*p+o*m*p+h*l*d-o*u*d,M=h*v*c-g*f*c+g*a*p-o*v*p-h*a*d+o*f*d,P=g*f*l-h*v*l-g*a*u+o*v*u+h*a*m-o*f*m,C=t*S+n*x+s*M+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=S*T,e[1]=(v*u*r-f*m*r-v*s*p+n*m*p+f*s*d-n*u*d)*T,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*T,e[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*p-n*l*p)*T,e[4]=x*T,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*d+t*u*d)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*T,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*T,e[8]=M*T,e[9]=(g*f*r-h*v*r-g*n*p+t*v*p+h*n*d-t*f*d)*T,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*d+t*a*d)*T,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*p-t*a*p)*T,e[12]=P*T,e[13]=(h*v*s-g*f*s+g*n*u-t*v*u-h*n*m+t*f*m)*T,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*T,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*u+t*a*u)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,g=r*f,v=o*h,m=o*f,d=a*f,S=l*c,x=l*h,M=l*f,P=n.x,C=n.y,T=n.z;return s[0]=(1-(v+d))*P,s[1]=(p+M)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(u+d))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+x)*T,s[9]=(m-S)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let c=1/r,h=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=gi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),p,g;if(a===gi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gi){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),u=(t+e)*c,p=(n+s)*h,g,v;if(a===gi)g=(o+r)*f,v=-2*f;else if(a===Xo)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xs=new B,qn=new Je,Zp=new B(0,0,0),jp=new B(1,1,1),Pi=new B,uo=new B,An=new B,xu=new Je,vu=new Et,Cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kp=0,yu=new B,vs=new Et,ci=new Je,fo=new B,ur=new B,Jp=new B,Qp=new Et,Mu=new B(1,0,0),_u=new B(0,1,0),Su=new B(0,0,1),bu={type:"added"},$p={type:"removed"},ys={type:"childadded",child:null},$a={type:"childremoved",child:null},Wt=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Cn,n=new Et,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new ft}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return yu.copy(e).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ur,fo,this.up):ci.lookAt(fo,ur,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ci),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($p),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new B(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new B,hi=new B,el=new B,ui=new B,Ms=new B,_s=new B,Eu=new B,tl=new B,nl=new B,il=new B,sl=new bt,rl=new bt,ol=new bt,Di=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),hi.subVectors(n,t),el.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(hi),l=Yn.dot(el),c=hi.dot(hi),h=hi.dot(el),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,n),ol.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),hi.subVectors(e,t),Yn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Yn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,n),_s.subVectors(r,n),tl.subVectors(e,n);let l=Ms.dot(tl),c=_s.dot(tl);if(l<=0&&c<=0)return t.copy(n);nl.subVectors(e,s);let h=Ms.dot(nl),f=_s.dot(nl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ms,o);il.subVectors(e,r);let p=Ms.dot(il),g=_s.dot(il);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_s,a);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Eu.subVectors(r,s),a=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(Eu,a);let d=1/(m+v+u);return o=v*d,a=u*d,t.copy(n).addScaledVector(Ms,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},po={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=ph(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return xt.fromWorkingColorSpace(hn.copy(this),e),Math.round($t(hn.r*255,0,255))*65536+Math.round($t(hn.g*255,0,255))*256+Math.round($t(hn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Nt){xt.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(po);let n=br(Ii.h,po.h,t),s=br(Ii.s,po.s,t),r=br(Ii.l,po.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Fe;Fe.NAMES=Nf;var em=0,On=class extends Fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ri(),this.name="",this.blending=Ds,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=wl,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wt=class extends On{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new B,mo=new Re,dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),e}};var jo=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ko=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tm=0,Ln=new Je,ll=new Wt,Ss=new B,Rn=new Kn,fr=new Kn,Qt=new B,at=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Ko:jo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Rn.min,fr.min),Rn.expandByPoint(Qt),Qt.addVectors(Rn.max,fr.max),Rn.expandByPoint(Qt)):(Rn.expandByPoint(fr.min),Rn.expandByPoint(fr.max))}Rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Qt.add(Ss)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new B,l[b]=new B;let c=new B,h=new B,f=new B,u=new Re,p=new Re,g=new Re,v=new B,m=new B;function d(b,_,y){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,_),f.fromBufferAttribute(n,y),u.fromBufferAttribute(r,b),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,y),h.sub(c),f.sub(c),p.sub(u),g.sub(u);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),a[b].add(v),a[_].add(v),a[y].add(v),l[b].add(m),l[_].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,_=S.length;b<_;++b){let y=S[b],E=y.start,w=y.count;for(let D=E,I=E+w;D<I;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let x=new B,M=new B,P=new B,C=new B;function T(b){P.fromBufferAttribute(s,b),C.copy(P);let _=a[b];x.copy(_),x.sub(P.multiplyScalar(P.dot(_))).normalize(),M.crossVectors(C,_);let E=M.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,E)}for(let b=0,_=S.length;b<_;++b){let y=S[b],E=y.start,w=y.count;for(let D=E,I=E+w;D<I;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new dt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wu=new Je,ji=new ks,go=new vi,Tu=new B,xo=new B,vo=new B,yo=new B,cl=new B,Mo=new B,Au=new B,_o=new B,je=class extends Wt{constructor(e=new at,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(cl.fromBufferAttribute(f,e),o?Mo.addScaledVector(cl,h):Mo.addScaledVector(cl.sub(t),h))}t.add(Mo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(go.containsPoint(ji.origin)===!1&&(ji.intersectSphere(go,Tu)===null||ji.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(wu.copy(r).invert(),ji.copy(e.ray).applyMatrix4(wu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,P=x;M<P;M+=3){let C=a.getX(M),T=a.getX(M+1),b=a.getX(M+2);s=So(this,d,e,n,c,h,f,C,T,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let S=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=So(this,o,e,n,c,h,f,S,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,P=x;M<P;M+=3){let C=M,T=M+1,b=M+2;s=So(this,d,e,n,c,h,f,C,T,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let S=m,x=m+1,M=m+2;s=So(this,o,e,n,c,h,f,S,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function nm(i,e,t,n,s,r,o,a){let l;if(e.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;_o.copy(a),_o.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:i}}function So(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,xo),i.getVertexPosition(l,vo),i.getVertexPosition(c,yo);let h=nm(i,e,t,n,xo,vo,yo,Au);if(h){let f=new B;Di.getBarycoord(Au,xo,vo,yo,f),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,f,new Re)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,f,new Re)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};Di.getNormal(xo,vo,yo,u.normal),h.face=u,h.barycoord=f}return h}var rt=class i extends at{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(f,2));function g(v,m,d,S,x,M,P,C,T,b,_){let y=M/T,E=P/b,w=M/2,D=P/2,I=C/2,H=T+1,N=b+1,L=0,U=0,k=new B;for(let W=0;W<N;W++){let Y=W*E-D;for(let le=0;le<H;le++){let J=le*y-w;k[v]=J*S,k[m]=Y*x,k[d]=I,c.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[d]=C>0?1:-1,h.push(k.x,k.y,k.z),f.push(le/T),f.push(1-W/b),L+=1}}for(let W=0;W<b;W++)for(let Y=0;Y<T;Y++){let le=u+Y+H*W,J=u+Y+H*(W+1),V=u+(Y+1)+H*(W+1),Z=u+(Y+1)+H*W;l.push(le,J,Z),l.push(J,V,Z),U+=6}a.addGroup(p,U,_),p+=U,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function im(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var en={clone:Vs,merge:mn},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends On{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Jo=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new B,Ru=new Re,Cu=new Re,tn=class extends Jo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Es=1,dc=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(bs,Es,e,t);s.layers=this.layers,this.add(s);let r=new tn(bs,Es,e,t);r.layers=this.layers,this.add(r);let o=new tn(bs,Es,e,t);o.layers=this.layers,this.add(o);let a=new tn(bs,Es,e,t);a.layers=this.layers,this.add(a);let l=new tn(bs,Es,e,t);l.layers=this.layers,this.add(l);let c=new tn(bs,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qo=class extends Gt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pc=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rt(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Zt});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=yn),new dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},hl=new B,om=new B,am=new ft,di=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hl.subVectors(n,t).cross(om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||am.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new vi,bo=new B,Cr=class{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],S=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,u-c,m-p,M-d).normalize(),n[1].setComponents(l+r,u+c,m+p,M+d).normalize(),n[2].setComponents(l+o,u+h,m+g,M+S).normalize(),n[3].setComponents(l-o,u-h,m-g,M-S).normalize(),n[4].setComponents(l-a,u-f,m-v,M-x).normalize(),t===gi)n[5].setComponents(l+a,u+f,m+v,M+x).normalize();else if(t===Xo)n[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){let g=f[u],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){let v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _n=class i extends at{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let S=d*u-o;for(let x=0;x<c;x++){let M=x*f-r;g.push(M,-S,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){let x=S+c*d,M=S+c*(d+1),P=S+1+c*(d+1),C=S+1+c*d;p.push(x,M,C),p.push(M,P,C)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lm=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,a0=`struct PhysicalMaterial {
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
}`,l0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,xg=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,bg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Ug=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:cm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:fm,alphatest_fragment:dm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:xm,batching_vertex:vm,begin_vertex:ym,beginnormal_vertex:Mm,bsdfs:_m,iridescence_fragment:Sm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Im,common:Lm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Um,displacementmap_vertex:zm,emissivemap_fragment:Om,emissivemap_pars_fragment:Fm,colorspace_fragment:Bm,colorspace_pars_fragment:Hm,envmap_fragment:km,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:t0,envmap_vertex:Xm,fog_vertex:qm,fog_pars_vertex:Ym,fog_fragment:Zm,fog_pars_fragment:jm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:Jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:$m,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:h0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:x0,map_particle_pars_fragment:v0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:M0,morphinstance_vertex:_0,morphcolor_vertex:S0,morphnormal_vertex:b0,morphtarget_pars_vertex:E0,morphtarget_vertex:w0,normal_fragment_begin:T0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:U0,opaque_fragment:z0,packing:O0,premultiplied_alpha_fragment:F0,project_vertex:B0,dithering_fragment:H0,dithering_pars_fragment:k0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:Z0,skinning_pars_vertex:j0,skinning_vertex:K0,skinnormal_vertex:J0,specularmap_fragment:Q0,specularmap_pars_fragment:$0,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:og,worldpos_vertex:ag,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:fg,cube_frag:dg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:xg,equirect_vert:vg,equirect_frag:yg,linedashed_vert:Mg,linedashed_frag:_g,meshbasic_vert:Sg,meshbasic_frag:bg,meshlambert_vert:Eg,meshlambert_frag:wg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Ig,meshphysical_vert:Lg,meshphysical_frag:Dg,meshtoon_vert:Ng,meshtoon_frag:Ug,points_vert:zg,points_frag:Og,shadow_vert:Fg,shadow_frag:Bg,sprite_vert:Hg,sprite_frag:kg},Xe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ii={basic:{uniforms:mn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:mn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:mn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:mn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:mn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:mn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:mn([Xe.points,Xe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:mn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:mn([Xe.common,Xe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:mn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:mn([Xe.sprite,Xe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:mn([Xe.common,Xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:mn([Xe.lights,Xe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ii.physical={uniforms:mn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Eo={r:0,b:0,g:0},Ji=new Cn,Vg=new Je;function Gg(i,e,t,n,s,r,o){let a=new Fe(0),l=r===!0?0:1,c,h,f=null,u=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1,M=g(S);M===null?d(a,l):M&&M.isColor&&(d(M,1),x=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===xa)?(h===void 0&&(h=new je(new rt(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Vs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(x.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(Ji)),h.material.toneMapped=xt.getTransfer(M.colorSpace)!==St,(f!==M||u!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new je(new _n(2,2),new yt({name:"BackgroundMaterial",uniforms:Vs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=xt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,x){S.getRGB(Eo,Uf(i)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:v,addToRenderList:m}}function Wg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(y,E,w,D,I){let H=!1,N=f(D,w,E);r!==N&&(r=N,c(r.object)),H=p(y,D,w,I),H&&g(y,D,w,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(y,E,w,D),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,E,w){let D=w.wireframe===!0,I=n[y.id];I===void 0&&(I={},n[y.id]=I);let H=I[E.id];H===void 0&&(H={},I[E.id]=H);let N=H[D];return N===void 0&&(N=u(l()),H[D]=N),N}function u(y){let E=[],w=[],D=[];for(let I=0;I<t;I++)E[I]=0,w[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:w,attributeDivisors:D,object:y,attributes:{},index:null}}function p(y,E,w,D){let I=r.attributes,H=E.attributes,N=0,L=w.getAttributes();for(let U in L)if(L[U].location>=0){let W=I[U],Y=H[U];if(Y===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),W===void 0||W.attribute!==Y||Y&&W.data!==Y.data)return!0;N++}return r.attributesNum!==N||r.index!==D}function g(y,E,w,D){let I={},H=E.attributes,N=0,L=w.getAttributes();for(let U in L)if(L[U].location>=0){let W=H[U];W===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(W=y.instanceColor));let Y={};Y.attribute=W,W&&W.data&&(Y.data=W.data),I[U]=Y,N++}r.attributes=I,r.attributesNum=N,r.index=D}function v(){let y=r.newAttributes;for(let E=0,w=y.length;E<w;E++)y[E]=0}function m(y){d(y,0)}function d(y,E){let w=r.newAttributes,D=r.enabledAttributes,I=r.attributeDivisors;w[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),I[y]!==E&&(i.vertexAttribDivisor(y,E),I[y]=E)}function S(){let y=r.newAttributes,E=r.enabledAttributes;for(let w=0,D=E.length;w<D;w++)E[w]!==y[w]&&(i.disableVertexAttribArray(w),E[w]=0)}function x(y,E,w,D,I,H,N){N===!0?i.vertexAttribIPointer(y,E,w,I,H):i.vertexAttribPointer(y,E,w,D,I,H)}function M(y,E,w,D){v();let I=D.attributes,H=w.getAttributes(),N=E.defaultAttributeValues;for(let L in H){let U=H[L];if(U.location>=0){let k=I[L];if(k===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(k=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(k=y.instanceColor)),k!==void 0){let W=k.normalized,Y=k.itemSize,le=e.get(k);if(le===void 0)continue;let J=le.buffer,V=le.type,Z=le.bytesPerElement,ce=V===i.INT||V===i.UNSIGNED_INT||k.gpuType===ah;if(k.isInterleavedBufferAttribute){let ee=k.data,q=ee.stride,Me=k.offset;if(ee.isInstancedInterleavedBuffer){for(let ve=0;ve<U.locationSize;ve++)d(U.location+ve,ee.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<U.locationSize;ve++)m(U.location+ve);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ve=0;ve<U.locationSize;ve++)x(U.location+ve,Y/U.locationSize,V,W,q*Z,(Me+Y/U.locationSize*ve)*Z,ce)}else{if(k.isInstancedBufferAttribute){for(let ee=0;ee<U.locationSize;ee++)d(U.location+ee,k.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ee=0;ee<U.locationSize;ee++)m(U.location+ee);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ee=0;ee<U.locationSize;ee++)x(U.location+ee,Y/U.locationSize,V,W,Y*Z,Y/U.locationSize*ee*Z,ce)}}else if(N!==void 0){let W=N[L];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(U.location,W);break;case 3:i.vertexAttrib3fv(U.location,W);break;case 4:i.vertexAttrib4fv(U.location,W);break;default:i.vertexAttrib1fv(U.location,W)}}}}S()}function P(){b();for(let y in n){let E=n[y];for(let w in E){let D=E[w];for(let I in D)h(D[I].object),delete D[I];delete E[w]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let w in E){let D=E[w];for(let I in D)h(D[I].object),delete D[I];delete E[w]}delete n[y.id]}function T(y){for(let E in n){let w=n[E];if(w[y.id]===void 0)continue;let D=w[y.id];for(let I in D)h(D[I].object),delete D[I];delete w[y.id]}}function b(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:_,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Xg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function l(c,h,f,u){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==si&&!b)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:P,maxSamples:C}}function Yg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new di,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,x=S*4,M=d.clippingState||null;l.value=M,M=h(g,u,x,p);for(let P=0;P!==x;++P)M[P]=t[P];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=p;x!==v;++x,M+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Zg(i){let e=new WeakMap;function t(o,a){return a===Dl?o.mapping=Fs:a===Nl&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dl||a===Nl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Gs=class extends Jo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Is=4,Pu=[.125,.215,.35,.446,.526,.582],es=20,ul=new Gs,Iu=new Fe,fl=null,dl=0,pl=0,ml=!1,$i=(1+Math.sqrt(5))/2,ws=1/$i,Lu=[new B(-$i,ws,0),new B($i,ws,0),new B(-ws,0,$i),new B(ws,0,$i),new B(0,$i,-ws),new B(0,$i,ws),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,dl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:nn,format:gn,colorSpace:er,depthBuffer:!1},s=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(r)),this._blurMaterial=Kg(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,s){let a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Iu),h.toneMapping=Ni,h.autoClear=!1;let p=new wt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new je(new rt,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Iu),v=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;wo(s,S*x,d>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lu[(s-r-1)%Lu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new je(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let d=[],S=0;for(let T=0;T<es;++T){let b=T/v,_=Math.exp(-b*b/2);d.push(_),T===0?S+=_:T<m&&(S+=2*_)}for(let T=0;T<d.length;T++)d[T]=d[T]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let M=this._sizeLods[s],P=3*M*(s>x-Is?s-x+Is:0),C=4*(this._cubeSize-M);wo(t,P,C,3*M,2*M),l.setRenderTarget(t),l.render(f,ul)}};function jg(i){let e=[],t=[],n=[],s=i,r=i-Is+1+Pu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Is?l=Pu[o-i+Is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,m=2,d=1,S=new Float32Array(v*g*p),x=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let C=0;C<p;C++){let T=C%3*2/3-1,b=C>2?0:-1,_=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(_,v*g*C),x.set(u,m*g*C);let y=[C,C,C,C,C,C];M.set(y,d*g*C)}let P=new at;P.setAttribute("position",new dt(S,v)),P.setAttribute("uv",new dt(x,m)),P.setAttribute("faceIndex",new dt(M,d)),e.push(P),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Kg(i,e,t){let n=new Float32Array(es),s=new B(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Nu(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Uu(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function Jg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Dl||l===Nl,h=l===Fs||l===Bs;if(c||h){let f=e.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ws(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ws(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $g(i,e,t,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){let u=[],p=f.index,g=f.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let x=0,M=S.length;x<M;x+=3){let P=S[x+0],C=S[x+1],T=S[x+2];u.push(P,C,C,T,T,P)}}else if(g!==void 0){let S=g.array;v=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){let P=x+0,C=x+1,T=x+2;u.push(P,C,C,T,T,P)}}else return;let m=new(Df(u)?Ko:jo)(u,1);m.version=v;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function ex(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),t.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),t.update(p,n,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function f(u,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*v[S];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function tx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function nx(i,e,t){let n=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let _=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let M=a.attributes.position.count*x,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let C=new Float32Array(M*P*4*f),T=new Zo(C,M,P,f);T.type=si,T.needsUpdate=!0;let b=x*4;for(let y=0;y<f;y++){let E=m[y],w=d[y],D=S[y],I=M*P*4*y;for(let H=0;H<E.count;H++){let N=H*b;p===!0&&(s.fromBufferAttribute(E,H),C[I+N+0]=s.x,C[I+N+1]=s.y,C[I+N+2]=s.z,C[I+N+3]=0),g===!0&&(s.fromBufferAttribute(w,H),C[I+N+4]=s.x,C[I+N+5]=s.y,C[I+N+6]=s.z,C[I+N+7]=0),v===!0&&(s.fromBufferAttribute(D,H),C[I+N+8]=s.x,C[I+N+9]=s.y,C[I+N+10]=s.z,C[I+N+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:T,size:new Re(M,P)},n.set(a,u),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ix(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Xs=class extends Gt{constructor(e,t,n,s,r,o,a,l,c,h=Ns){if(h!==Ns&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=ts),n===void 0&&h===Oi&&(n=zi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Of=new Gt,zu=new Xs(1,1),Ff=new Zo,Bf=new fc,Hf=new Qo,Ou=[],Fu=[],Bu=new Float32Array(16),Hu=new Float32Array(9),ku=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ou[s];if(r===void 0&&(r=new Float32Array(s),Ou[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ma(i,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;ku.set(n),i.uniformMatrix2fv(this.addr,!1,ku),Jt(t,n)}}function cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),Jt(t,n)}}function hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;Bu.set(n),i.uniformMatrix4fv(this.addr,!1,Bu),Jt(t,n)}}function ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=Lf,r=zu):r=Of,t.setTexture2D(e||r,s)}function Mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bf,s)}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hf,s)}function Sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ff,s)}function bx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return Sx}}function Ex(i,e){i.uniform1fv(this.addr,e)}function wx(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Tx(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ax(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Rx(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cx(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Px(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ix(i,e){i.uniform1iv(this.addr,e)}function Lx(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Nx(i,e){i.uniform4iv(this.addr,e)}function Ux(i,e){i.uniform1uiv(this.addr,e)}function zx(i,e){i.uniform2uiv(this.addr,e)}function Ox(i,e){i.uniform3uiv(this.addr,e)}function Fx(i,e){i.uniform4uiv(this.addr,e)}function Bx(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Of,r[o])}function Hx(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bf,r[o])}function kx(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hf,r[o])}function Vx(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ff,r[o])}function Gx(i){switch(i){case 5126:return Ex;case 35664:return wx;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Nx;case 5125:return Ux;case 36294:return zx;case 36295:return Ox;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Vx}}var mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bx(t.type)}},gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}},xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function Wx(i,e,t){let n=i.name,s=n.length;for(gl.lastIndex=0;;){let r=gl.exec(n),o=gl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vu(t,c===void 0?new mc(a,i,e):new gc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new xc(a),Vu(t,f)),t=f}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Wx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Gu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Xx=37297,qx=0;function Yx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Wu=new ft;function Zx(i){xt._getMatrix(Wu,xt.workingColorSpace,i);let e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yx(i.getShaderSource(e),o)}else return s}function jx(i,e){let t=Zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kx(i,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case sh:t="Cineon";break;case rh:t="ACESFilmic";break;case oh:t="AgX";break;case kr:t="Neutral";break;case dp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var To=new B;function Jx(){xt.getLuminanceCoefficients(To);let i=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function $x(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ev(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _r(i){return i!==""}function qu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(tv,iv)}var nv=new Map;function iv(i,e){let t=ct[e];if(t===void 0){let n=nv.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}var sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(sv,rv)}function rv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ov(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function av(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function cv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case up:e="ENVMAP_BLENDING_MIX";break;case fp:e="ENVMAP_BLENDING_ADD";break}return e}function hv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function uv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ov(t),c=av(t),h=lv(t),f=cv(t),u=hv(t),p=Qx(t),g=$x(r),v=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),d.length>0&&(d+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),d=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,jx("linearToOutputTexel",t.outputColorSpace),Jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=vc(o),o=qu(o,t),o=Yu(o,t),a=vc(a),a=qu(a,t),a=Yu(a,t),o=Zu(o),a=Zu(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=S+m+o,M=S+d+a,P=Gu(s,s.VERTEX_SHADER,x),C=Gu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,P),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(E){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(P).trim(),I=s.getShaderInfoLog(C).trim(),H=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,C);else{let L=Xu(s,P,"vertex"),U=Xu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+w+`
`+L+`
`+U)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||I==="")&&(N=!1);N&&(E.diagnostics={runnable:H,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:I,prefix:d}})}s.deleteShader(P),s.deleteShader(C),b=new zs(s,v),_=ev(s,v)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Xx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}var fv=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mc(e),t.set(e,n)),n}},Mc=class{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}};function dv(i,e,t,n,s,r,o){let a=new Rr,l=new yc,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,E,w,D){let I=w.fog,H=D.geometry,N=_.isMeshStandardMaterial?w.environment:null,L=(_.isMeshStandardMaterial?t:e).get(_.envMap||N),U=L&&L.mapping===xa?L.image.height:null,k=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let W=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Y=W!==void 0?W.length:0,le=0;H.morphAttributes.position!==void 0&&(le=1),H.morphAttributes.normal!==void 0&&(le=2),H.morphAttributes.color!==void 0&&(le=3);let J,V,Z,ce;if(k){let De=ii[k];J=De.vertexShader,V=De.fragmentShader}else J=_.vertexShader,V=_.fragmentShader,l.update(_),Z=l.getVertexShaderID(_),ce=l.getFragmentShaderID(_);let ee=i.getRenderTarget(),q=i.state.buffers.depth.getReversed(),Me=D.isInstancedMesh===!0,ve=D.isBatchedMesh===!0,ne=!!_.map,j=!!_.matcap,ie=!!L,O=!!_.aoMap,xe=!!_.lightMap,K=!!_.bumpMap,te=!!_.normalMap,oe=!!_.displacementMap,ue=!!_.emissiveMap,re=!!_.metalnessMap,A=!!_.roughnessMap,R=_.anisotropy>0,se=_.clearcoat>0,he=_.dispersion>0,fe=_.iridescence>0,pe=_.sheen>0,Le=_.transmission>0,de=R&&!!_.anisotropyMap,Se=se&&!!_.clearcoatMap,We=se&&!!_.clearcoatNormalMap,Te=se&&!!_.clearcoatRoughnessMap,Ie=fe&&!!_.iridescenceMap,ke=fe&&!!_.iridescenceThicknessMap,qe=pe&&!!_.sheenColorMap,z=pe&&!!_.sheenRoughnessMap,Q=!!_.specularMap,$=!!_.specularColorMap,we=!!_.specularIntensityMap,G=Le&&!!_.transmissionMap,_e=Le&&!!_.thicknessMap,ae=!!_.gradientMap,ye=!!_.alphaMap,Ne=_.alphaTest>0,Ue=!!_.alphaHash,Be=!!_.extensions,tt=Ni;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(tt=i.toneMapping);let Ge={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:V,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:ve,batchingColor:ve&&D._colorsTexture!==null,instancing:Me,instancingColor:Me&&D.instanceColor!==null,instancingMorph:Me&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:er,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:j,envMap:ie,envMapMode:ie&&L.mapping,envMapCubeUVHeight:U,aoMap:O,lightMap:xe,bumpMap:K,normalMap:te,displacementMap:u&&oe,emissiveMap:ue,normalMapObjectSpace:te&&_.normalMapType===xp,normalMapTangentSpace:te&&_.normalMapType===va,metalnessMap:re,roughnessMap:A,anisotropy:R,anisotropyMap:de,clearcoat:se,clearcoatMap:Se,clearcoatNormalMap:We,clearcoatRoughnessMap:Te,dispersion:he,iridescence:fe,iridescenceMap:Ie,iridescenceThicknessMap:ke,sheen:pe,sheenColorMap:qe,sheenRoughnessMap:z,specularMap:Q,specularColorMap:$,specularIntensityMap:we,transmission:Le,transmissionMap:G,thicknessMap:_e,gradientMap:ae,opaque:_.transparent===!1&&_.blending===Ds&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ne,alphaHash:Ue,combine:_.combine,mapUv:ne&&v(_.map.channel),aoMapUv:O&&v(_.aoMap.channel),lightMapUv:xe&&v(_.lightMap.channel),bumpMapUv:K&&v(_.bumpMap.channel),normalMapUv:te&&v(_.normalMap.channel),displacementMapUv:oe&&v(_.displacementMap.channel),emissiveMapUv:ue&&v(_.emissiveMap.channel),metalnessMapUv:re&&v(_.metalnessMap.channel),roughnessMapUv:A&&v(_.roughnessMap.channel),anisotropyMapUv:de&&v(_.anisotropyMap.channel),clearcoatMapUv:Se&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:z&&v(_.sheenRoughnessMap.channel),specularMapUv:Q&&v(_.specularMap.channel),specularColorMapUv:$&&v(_.specularColorMap.channel),specularIntensityMapUv:we&&v(_.specularIntensityMap.channel),transmissionMapUv:G&&v(_.transmissionMap.channel),thicknessMapUv:_e&&v(_.thicknessMap.channel),alphaMapUv:ye&&v(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(te||R),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(ne||ye),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:q,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&xt.getTransfer(_.map.colorSpace)===St,decodeVideoTextureEmissive:ue&&_.emissiveMap.isVideoTexture===!0&&xt.getTransfer(_.emissiveMap.colorSpace)===St,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mt,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Be&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&_.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function d(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)y.push(E),y.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(S(y,_),x(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function S(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function x(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){let y=g[_.type],E;if(y){let w=ii[y];E=en.clone(w.uniforms)}else E=_.uniforms;return E}function P(_,y){let E;for(let w=0,D=h.length;w<D;w++){let I=h[w];if(I.cacheKey===y){E=I,++E.usedTimes;break}}return E===void 0&&(E=new uv(i,y,_,r),h.push(E)),E}function C(_){if(--_.usedTimes===0){let y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function T(_){l.remove(_)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:P,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:b}}function pv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ku(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ju(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,u,p,g,v,m){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[e]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,u,p,g,v,m){let d=o(f,u,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,u,p,g,v,m){let d=o(f,u,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,u){t.length>1&&t.sort(f||mv),n.length>1&&n.sort(u||Ku),s.length>1&&s.sort(u||Ku)}function h(){for(let f=e,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function gv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ju,i.set(n,[o])):s>=r.length?(o=new Ju,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Fe};break;case"SpotLight":t={position:new B,direction:new B,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function vv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yv=0;function Mv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _v(i){let e=new xv,t=vv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Je,o=new Je;function a(c){let h=0,f=0,u=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,S=0,x=0,M=0,P=0,C=0,T=0;c.sort(Mv);for(let _=0,y=c.length;_<y;_++){let E=c[_],w=E.color,D=E.intensity,I=E.distance,H=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=w.r*D,f+=w.g*D,u+=w.b*D;else if(E.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(E.sh.coefficients[N],D);T++}else if(E.isDirectionalLight){let N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let L=E.shadow,U=t.get(E);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,n.directionalShadow[p]=U,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=E.shadow.matrix,S++}n.directional[p]=N,p++}else if(E.isSpotLight){let N=e.get(E);N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(w).multiplyScalar(D),N.distance=I,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,n.spot[v]=N;let L=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,L.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[v]=L.matrix,E.castShadow){let U=t.get(E);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=H,M++}v++}else if(E.isRectAreaLight){let N=e.get(E);N.color.copy(w).multiplyScalar(D),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=N,m++}else if(E.isPointLight){let N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){let L=E.shadow,U=t.get(E);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,U.shadowCameraNear=L.camera.near,U.shadowCameraFar=L.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=N,g++}else if(E.isHemisphereLight){let N=e.get(E);N.skyColor.copy(E.color).multiplyScalar(D),N.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[d]=N,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let b=n.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==d||b.numDirectionalShadows!==S||b.numPointShadows!==x||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,b.directionalLength=p,b.pointLength=g,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=d,b.numDirectionalShadows=S,b.numPointShadows=x,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=T,n.version=yv++)}function l(c,h){let f=0,u=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){let x=c[d];if(x.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Qu(i){let e=new _v(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Sv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Qu(i),e.set(s,[a])):r>=o.length?(a=new Qu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _c=class extends On{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
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
}`;function wv(i,e,t){let n=new Cr,s=new Re,r=new Re,o=new bt,a=new _c({depthPacking:gp}),l=new Sc,c={},h=t.maxTextureSize,f={[Ui]:un,[un]:Ui,[Mt]:Mt},u=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:bv,fragmentShader:Ev}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new at;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new je(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let d=this.type;this.render=function(C,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Zt),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let D=d!==fi&&this.type===fi,I=d===fi&&this.type!==fi;for(let H=0,N=C.length;H<N;H++){let L=C[H],U=L.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let k=U.getFrameExtents();if(s.multiply(k),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,U.mapSize.y=r.y)),U.map===null||D===!0||I===!0){let Y=this.type!==fi?{minFilter:jt,magFilter:jt}:{};U.map!==null&&U.map.dispose(),U.map=new Ht(s.x,s.y,Y),U.map.texture.name=L.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let W=U.getViewportCount();for(let Y=0;Y<W;Y++){let le=U.getViewport(Y);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),w.viewport(o),U.updateMatrices(L,Y),n=U.getFrustum(),M(T,b,U.camera,L,this.type)}U.isPointLightShadow!==!0&&this.type===fi&&S(U,b),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(_,y,E)};function S(C,T){let b=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ht(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,b,u,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,b,p,v,null)}function x(C,T,b,_){let y=null,E=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=b.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let w=y.uuid,D=T.uuid,I=c[w];I===void 0&&(I={},c[w]=I);let H=I[D];H===void 0&&(H=y.clone(),I[D]=H,T.addEventListener("dispose",P)),y=H}if(y.visible=T.visible,y.wireframe=T.wireframe,_===fi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let w=i.properties.get(y);w.light=b}return y}function M(C,T,b,_,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===fi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let D=e.update(C),I=C.material;if(Array.isArray(I)){let H=D.groups;for(let N=0,L=H.length;N<L;N++){let U=H[N],k=I[U.materialIndex];if(k&&k.visible){let W=x(C,k,_,y);C.onBeforeShadow(i,C,T,b,D,W,U),i.renderBufferDirect(b,null,D,W,C,U),C.onAfterShadow(i,C,T,b,D,W,U)}}}else if(I.visible){let H=x(C,I,_,y);C.onBeforeShadow(i,C,T,b,D,H,null),i.renderBufferDirect(b,null,D,H,C,null),C.onAfterShadow(i,C,T,b,D,H,null)}}let w=C.children;for(let D=0,I=w.length;D<I;D++)M(w[D],T,b,_,y)}function P(C){C.target.removeEventListener("dispose",P);for(let b in c){let _=c[b],y=C.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Tv={[Tl]:Al,[Rl]:Il,[Cl]:Ll,[Os]:Pl,[Al]:Tl,[Il]:Rl,[Ll]:Cl,[Pl]:Os};function Av(i,e){function t(){let G=!1,_e=new bt,ae=null,ye=new bt(0,0,0,0);return{setMask:function(Ne){ae!==Ne&&!G&&(i.colorMask(Ne,Ne,Ne,Ne),ae=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,Ue,Be,tt,Ge){Ge===!0&&(Ne*=tt,Ue*=tt,Be*=tt),_e.set(Ne,Ue,Be,tt),ye.equals(_e)===!1&&(i.clearColor(Ne,Ue,Be,tt),ye.copy(_e))},reset:function(){G=!1,ae=null,ye.set(-1,0,0,0)}}}function n(){let G=!1,_e=!1,ae=null,ye=null,Ne=null;return{setReversed:function(Ue){if(_e!==Ue){let Be=e.get("EXT_clip_control");_e?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);let tt=Ne;Ne=null,this.setClear(tt)}_e=Ue},getReversed:function(){return _e},setTest:function(Ue){Ue?ee(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function(Ue){ae!==Ue&&!G&&(i.depthMask(Ue),ae=Ue)},setFunc:function(Ue){if(_e&&(Ue=Tv[Ue]),ye!==Ue){switch(Ue){case Tl:i.depthFunc(i.NEVER);break;case Al:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=Ue}},setLocked:function(Ue){G=Ue},setClear:function(Ue){Ne!==Ue&&(_e&&(Ue=1-Ue),i.clearDepth(Ue),Ne=Ue)},reset:function(){G=!1,ae=null,ye=null,Ne=null,_e=!1}}}function s(){let G=!1,_e=null,ae=null,ye=null,Ne=null,Ue=null,Be=null,tt=null,Ge=null;return{setTest:function(De){G||(De?ee(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(De){_e!==De&&!G&&(i.stencilMask(De),_e=De)},setFunc:function(De,Ve,Tt){(ae!==De||ye!==Ve||Ne!==Tt)&&(i.stencilFunc(De,Ve,Tt),ae=De,ye=Ve,Ne=Tt)},setOp:function(De,Ve,Tt){(Ue!==De||Be!==Ve||tt!==Tt)&&(i.stencilOp(De,Ve,Tt),Ue=De,Be=Ve,tt=Tt)},setLocked:function(De){G=De},setClear:function(De){Ge!==De&&(i.clearStencil(De),Ge=De)},reset:function(){G=!1,_e=null,ae=null,ye=null,Ne=null,Ue=null,Be=null,tt=null,Ge=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,x=null,M=null,P=null,C=null,T=new Fe(0,0,0),b=0,_=!1,y=null,E=null,w=null,D=null,I=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,L=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=L>=1):U.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=L>=2);let k=null,W={},Y=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),J=new bt().fromArray(Y),V=new bt().fromArray(le);function Z(G,_e,ae,ye){let Ne=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(G,Ue),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<ae;Be++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(_e+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return Ue}let ce={};ce[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Os),K(!1),te(tu),ee(i.CULL_FACE),O(Zt);function ee(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function q(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Me(G,_e){return f[G]!==_e?(i.bindFramebuffer(G,_e),f[G]=_e,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_e),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function ve(G,_e){let ae=p,ye=!1;if(G){ae=u.get(_e),ae===void 0&&(ae=[],u.set(_e,ae));let Ne=G.textures;if(ae.length!==Ne.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,Be=Ne.length;Ue<Be;Ue++)ae[Ue]=i.COLOR_ATTACHMENT0+Ue;ae.length=Ne.length,ye=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ae)}function ne(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let j={[Dn]:i.FUNC_ADD,[Jd]:i.FUNC_SUBTRACT,[Qd]:i.FUNC_REVERSE_SUBTRACT};j[$d]=i.MIN,j[ep]=i.MAX;let ie={[$s]:i.ZERO,[tp]:i.ONE,[np]:i.SRC_COLOR,[El]:i.SRC_ALPHA,[op]:i.SRC_ALPHA_SATURATE,[ga]:i.DST_COLOR,[ma]:i.DST_ALPHA,[ip]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[rp]:i.ONE_MINUS_DST_COLOR,[sp]:i.ONE_MINUS_DST_ALPHA,[ap]:i.CONSTANT_COLOR,[lp]:i.ONE_MINUS_CONSTANT_COLOR,[cp]:i.CONSTANT_ALPHA,[hp]:i.ONE_MINUS_CONSTANT_ALPHA};function O(G,_e,ae,ye,Ne,Ue,Be,tt,Ge,De){if(G===Zt){v===!0&&(q(i.BLEND),v=!1);return}if(v===!1&&(ee(i.BLEND),v=!0),G!==eh){if(G!==m||De!==_){if((d!==Dn||M!==Dn)&&(i.blendEquation(i.FUNC_ADD),d=Dn,M=Dn),De)switch(G){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,x=null,P=null,C=null,T.set(0,0,0),b=0,m=G,_=De}return}Ne=Ne||_e,Ue=Ue||ae,Be=Be||ye,(_e!==d||Ne!==M)&&(i.blendEquationSeparate(j[_e],j[Ne]),d=_e,M=Ne),(ae!==S||ye!==x||Ue!==P||Be!==C)&&(i.blendFuncSeparate(ie[ae],ie[ye],ie[Ue],ie[Be]),S=ae,x=ye,P=Ue,C=Be),(tt.equals(T)===!1||Ge!==b)&&(i.blendColor(tt.r,tt.g,tt.b,Ge),T.copy(tt),b=Ge),m=G,_=!1}function xe(G,_e){G.side===Mt?q(i.CULL_FACE):ee(i.CULL_FACE);let ae=G.side===un;_e&&(ae=!ae),K(ae),G.blending===Ds&&G.transparent===!1?O(Zt):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let ye=G.stencilWrite;a.setTest(ye),ye&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(G){y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),y=G)}function te(G){G!==jd?(ee(i.CULL_FACE),G!==E&&(G===tu?i.cullFace(i.BACK):G===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),E=G}function oe(G){G!==w&&(N&&i.lineWidth(G),w=G)}function ue(G,_e,ae){G?(ee(i.POLYGON_OFFSET_FILL),(D!==_e||I!==ae)&&(i.polygonOffset(_e,ae),D=_e,I=ae)):q(i.POLYGON_OFFSET_FILL)}function re(G){G?ee(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function A(G){G===void 0&&(G=i.TEXTURE0+H-1),k!==G&&(i.activeTexture(G),k=G)}function R(G,_e,ae){ae===void 0&&(k===null?ae=i.TEXTURE0+H-1:ae=k);let ye=W[ae];ye===void 0&&(ye={type:void 0,texture:void 0},W[ae]=ye),(ye.type!==G||ye.texture!==_e)&&(k!==ae&&(i.activeTexture(ae),k=ae),i.bindTexture(G,_e||ce[G]),ye.type=G,ye.texture=_e)}function se(){let G=W[k];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(G){J.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),J.copy(G))}function z(G){V.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),V.copy(G))}function Q(G,_e){let ae=c.get(_e);ae===void 0&&(ae=new WeakMap,c.set(_e,ae));let ye=ae.get(G);ye===void 0&&(ye=i.getUniformBlockIndex(_e,G.name),ae.set(G,ye))}function $(G,_e){let ye=c.get(_e).get(G);l.get(_e)!==ye&&(i.uniformBlockBinding(_e,ye,G.__bindingPointIndex),l.set(_e,ye))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,W={},f={},u=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,x=null,M=null,P=null,C=null,T=new Fe(0,0,0),b=0,_=!1,y=null,E=null,w=null,D=null,I=null,J.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:q,bindFramebuffer:Me,drawBuffers:ve,useProgram:ne,setBlending:O,setMaterial:xe,setFlipSided:K,setCullFace:te,setLineWidth:oe,setPolygonOffset:ue,setScissorTest:re,activeTexture:A,bindTexture:R,unbindTexture:se,compressedTexImage2D:he,compressedTexImage3D:fe,texImage2D:Ie,texImage3D:ke,updateUBOMapping:Q,uniformBlockBinding:$,texStorage2D:We,texStorage3D:Te,texSubImage2D:pe,texSubImage3D:Le,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:qe,viewport:z,reset:we}}function $u(i,e,t,n){let s=Rv(n);switch(t){case Tf:return i*e;case Rf:return i*e;case Cf:return i*e*2;case hh:return i*e/s.components*s.byteLength;case uh:return i*e/s.components*s.byteLength;case Pf:return i*e*2/s.components*s.byteLength;case fh:return i*e*2/s.components*s.byteLength;case Af:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case dh:return i*e*4/s.components*s.byteLength;case Bo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case zl:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case Hl:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case ic:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case If:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(i){switch(i){case jn:case bf:return{byteLength:1,components:1};case Ar:case Ef:case nn:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case ts:case ah:case si:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,R){return p?new OffscreenCanvas(A,R):qo("canvas")}function v(A,R,se){let he=1,fe=re(A);if((fe.width>se||fe.height>se)&&(he=se/Math.max(fe.width,fe.height)),he<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pe=Math.floor(he*fe.width),Le=Math.floor(he*fe.height);f===void 0&&(f=g(pe,Le));let de=R?g(pe,Le):f;return de.width=pe,de.height=Le,de.getContext("2d").drawImage(A,0,0,pe,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+pe+"x"+Le+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,R,se,he,fe=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe=R;if(R===i.RED&&(se===i.FLOAT&&(pe=i.R32F),se===i.HALF_FLOAT&&(pe=i.R16F),se===i.UNSIGNED_BYTE&&(pe=i.R8)),R===i.RED_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.R8UI),se===i.UNSIGNED_SHORT&&(pe=i.R16UI),se===i.UNSIGNED_INT&&(pe=i.R32UI),se===i.BYTE&&(pe=i.R8I),se===i.SHORT&&(pe=i.R16I),se===i.INT&&(pe=i.R32I)),R===i.RG&&(se===i.FLOAT&&(pe=i.RG32F),se===i.HALF_FLOAT&&(pe=i.RG16F),se===i.UNSIGNED_BYTE&&(pe=i.RG8)),R===i.RG_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.RG8UI),se===i.UNSIGNED_SHORT&&(pe=i.RG16UI),se===i.UNSIGNED_INT&&(pe=i.RG32UI),se===i.BYTE&&(pe=i.RG8I),se===i.SHORT&&(pe=i.RG16I),se===i.INT&&(pe=i.RG32I)),R===i.RGB_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),se===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),se===i.UNSIGNED_INT&&(pe=i.RGB32UI),se===i.BYTE&&(pe=i.RGB8I),se===i.SHORT&&(pe=i.RGB16I),se===i.INT&&(pe=i.RGB32I)),R===i.RGBA_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),se===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),se===i.UNSIGNED_INT&&(pe=i.RGBA32UI),se===i.BYTE&&(pe=i.RGBA8I),se===i.SHORT&&(pe=i.RGBA16I),se===i.INT&&(pe=i.RGBA32I)),R===i.RGB&&se===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),R===i.RGBA){let Le=fe?ya:xt.getTransfer(he);se===i.FLOAT&&(pe=i.RGBA32F),se===i.HALF_FLOAT&&(pe=i.RGBA16F),se===i.UNSIGNED_BYTE&&(pe=Le===St?i.SRGB8_ALPHA8:i.RGBA8),se===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),se===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function M(A,R){let se;return A?R===null||R===ts||R===zi?se=i.DEPTH24_STENCIL8:R===si?se=i.DEPTH32F_STENCIL8:R===Ar&&(se=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ts||R===zi?se=i.DEPTH_COMPONENT24:R===si?se=i.DEPTH_COMPONENT32F:R===Ar&&(se=i.DEPTH_COMPONENT16),se}function P(A,R){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==yn?Math.log2(Math.max(R.width,R.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?R.mipmaps.length:1}function C(A){let R=A.target;R.removeEventListener("dispose",C),b(R),R.isVideoTexture&&h.delete(R)}function T(A){let R=A.target;R.removeEventListener("dispose",T),y(R)}function b(A){let R=n.get(A);if(R.__webglInit===void 0)return;let se=A.source,he=u.get(se);if(he){let fe=he[R.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&_(A),Object.keys(he).length===0&&u.delete(se)}n.remove(A)}function _(A){let R=n.get(A);i.deleteTexture(R.__webglTexture);let se=A.source,he=u.get(se);delete he[R.__cacheKey],o.memory.textures--}function y(A){let R=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(R.__webglFramebuffer[he]))for(let fe=0;fe<R.__webglFramebuffer[he].length;fe++)i.deleteFramebuffer(R.__webglFramebuffer[he][fe]);else i.deleteFramebuffer(R.__webglFramebuffer[he]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[he])}else{if(Array.isArray(R.__webglFramebuffer))for(let he=0;he<R.__webglFramebuffer.length;he++)i.deleteFramebuffer(R.__webglFramebuffer[he]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let he=0;he<R.__webglColorRenderbuffer.length;he++)R.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[he]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let se=A.textures;for(let he=0,fe=se.length;he<fe;he++){let pe=n.get(se[he]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(se[he])}n.remove(A)}let E=0;function w(){E=0}function D(){let A=E;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),E+=1,A}function I(A){let R=[];return R.push(A.wrapS),R.push(A.wrapT),R.push(A.wrapR||0),R.push(A.magFilter),R.push(A.minFilter),R.push(A.anisotropy),R.push(A.internalFormat),R.push(A.format),R.push(A.type),R.push(A.generateMipmaps),R.push(A.premultiplyAlpha),R.push(A.flipY),R.push(A.unpackAlignment),R.push(A.colorSpace),R.join()}function H(A,R){let se=n.get(A);if(A.isVideoTexture&&oe(A),A.isRenderTargetTexture===!1&&A.version>0&&se.__version!==A.version){let he=A.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(se,A,R);return}}t.bindTexture(i.TEXTURE_2D,se.__webglTexture,i.TEXTURE0+R)}function N(A,R){let se=n.get(A);if(A.version>0&&se.__version!==A.version){V(se,A,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,se.__webglTexture,i.TEXTURE0+R)}function L(A,R){let se=n.get(A);if(A.version>0&&se.__version!==A.version){V(se,A,R);return}t.bindTexture(i.TEXTURE_3D,se.__webglTexture,i.TEXTURE0+R)}function U(A,R){let se=n.get(A);if(A.version>0&&se.__version!==A.version){Z(se,A,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture,i.TEXTURE0+R)}let k={[zn]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Ul]:i.MIRRORED_REPEAT},W={[jt]:i.NEAREST,[pp]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Y={[vp]:i.NEVER,[Ep]:i.ALWAYS,[yp]:i.LESS,[Lf]:i.LEQUAL,[Mp]:i.EQUAL,[bp]:i.GEQUAL,[_p]:i.GREATER,[Sp]:i.NOTEQUAL};function le(A,R){if(R.type===si&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===yn||R.magFilter===Ga||R.magFilter===ro||R.magFilter===mi||R.minFilter===yn||R.minFilter===Ga||R.minFilter===ro||R.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,k[R.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,k[R.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,k[R.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,W[R.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,W[R.minFilter]),R.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Y[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===jt||R.minFilter!==ro&&R.minFilter!==mi||R.type===si&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function J(A,R){let se=!1;A.__webglInit===void 0&&(A.__webglInit=!0,R.addEventListener("dispose",C));let he=R.source,fe=u.get(he);fe===void 0&&(fe={},u.set(he,fe));let pe=I(R);if(pe!==A.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,se=!0),fe[pe].usedTimes++;let Le=fe[A.__cacheKey];Le!==void 0&&(fe[A.__cacheKey].usedTimes--,Le.usedTimes===0&&_(R)),A.__cacheKey=pe,A.__webglTexture=fe[pe].texture}return se}function V(A,R,se){let he=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(he=i.TEXTURE_3D);let fe=J(A,R),pe=R.source;t.bindTexture(he,A.__webglTexture,i.TEXTURE0+se);let Le=n.get(pe);if(pe.version!==Le.__version||fe===!0){t.activeTexture(i.TEXTURE0+se);let de=xt.getPrimaries(xt.workingColorSpace),Se=R.colorSpace===Nn?null:xt.getPrimaries(R.colorSpace),We=R.colorSpace===Nn||de===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Te=v(R.image,!1,s.maxTextureSize);Te=ue(R,Te);let Ie=r.convert(R.format,R.colorSpace),ke=r.convert(R.type),qe=x(R.internalFormat,Ie,ke,R.colorSpace,R.isVideoTexture);le(he,R);let z,Q=R.mipmaps,$=R.isVideoTexture!==!0,we=Le.__version===void 0||fe===!0,G=pe.dataReady,_e=P(R,Te);if(R.isDepthTexture)qe=M(R.format===Oi,R.type),we&&($?t.texStorage2D(i.TEXTURE_2D,1,qe,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,qe,Te.width,Te.height,0,Ie,ke,null));else if(R.isDataTexture)if(Q.length>0){$&&we&&t.texStorage2D(i.TEXTURE_2D,_e,qe,Q[0].width,Q[0].height);for(let ae=0,ye=Q.length;ae<ye;ae++)z=Q[ae],$?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,z.width,z.height,Ie,ke,z.data):t.texImage2D(i.TEXTURE_2D,ae,qe,z.width,z.height,0,Ie,ke,z.data);R.generateMipmaps=!1}else $?(we&&t.texStorage2D(i.TEXTURE_2D,_e,qe,Te.width,Te.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,Ie,ke,Te.data)):t.texImage2D(i.TEXTURE_2D,0,qe,Te.width,Te.height,0,Ie,ke,Te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){$&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,qe,Q[0].width,Q[0].height,Te.depth);for(let ae=0,ye=Q.length;ae<ye;ae++)if(z=Q[ae],R.format!==gn)if(Ie!==null)if($){if(G)if(R.layerUpdates.size>0){let Ne=$u(z.width,z.height,R.format,R.type);for(let Ue of R.layerUpdates){let Be=z.data.subarray(Ue*Ne/z.data.BYTES_PER_ELEMENT,(Ue+1)*Ne/z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ue,z.width,z.height,1,Ie,Be)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,z.width,z.height,Te.depth,Ie,z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,qe,z.width,z.height,Te.depth,0,z.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,z.width,z.height,Te.depth,Ie,ke,z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,qe,z.width,z.height,Te.depth,0,Ie,ke,z.data)}else{$&&we&&t.texStorage2D(i.TEXTURE_2D,_e,qe,Q[0].width,Q[0].height);for(let ae=0,ye=Q.length;ae<ye;ae++)z=Q[ae],R.format!==gn?Ie!==null?$?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,z.width,z.height,Ie,z.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,qe,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,z.width,z.height,Ie,ke,z.data):t.texImage2D(i.TEXTURE_2D,ae,qe,z.width,z.height,0,Ie,ke,z.data)}else if(R.isDataArrayTexture)if($){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,qe,Te.width,Te.height,Te.depth),G)if(R.layerUpdates.size>0){let ae=$u(Te.width,Te.height,R.format,R.type);for(let ye of R.layerUpdates){let Ne=Te.data.subarray(ye*ae/Te.data.BYTES_PER_ELEMENT,(ye+1)*ae/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,Te.width,Te.height,1,Ie,ke,Ne)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ie,ke,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,Te.width,Te.height,Te.depth,0,Ie,ke,Te.data);else if(R.isData3DTexture)$?(we&&t.texStorage3D(i.TEXTURE_3D,_e,qe,Te.width,Te.height,Te.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ie,ke,Te.data)):t.texImage3D(i.TEXTURE_3D,0,qe,Te.width,Te.height,Te.depth,0,Ie,ke,Te.data);else if(R.isFramebufferTexture){if(we)if($)t.texStorage2D(i.TEXTURE_2D,_e,qe,Te.width,Te.height);else{let ae=Te.width,ye=Te.height;for(let Ne=0;Ne<_e;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,qe,ae,ye,0,Ie,ke,null),ae>>=1,ye>>=1}}else if(Q.length>0){if($&&we){let ae=re(Q[0]);t.texStorage2D(i.TEXTURE_2D,_e,qe,ae.width,ae.height)}for(let ae=0,ye=Q.length;ae<ye;ae++)z=Q[ae],$?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ie,ke,z):t.texImage2D(i.TEXTURE_2D,ae,qe,Ie,ke,z);R.generateMipmaps=!1}else if($){if(we){let ae=re(Te);t.texStorage2D(i.TEXTURE_2D,_e,qe,ae.width,ae.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,ke,Te)}else t.texImage2D(i.TEXTURE_2D,0,qe,Ie,ke,Te);m(R)&&d(he),Le.__version=pe.version,R.onUpdate&&R.onUpdate(R)}A.__version=R.version}function Z(A,R,se){if(R.image.length!==6)return;let he=J(A,R),fe=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+se);let pe=n.get(fe);if(fe.version!==pe.__version||he===!0){t.activeTexture(i.TEXTURE0+se);let Le=xt.getPrimaries(xt.workingColorSpace),de=R.colorSpace===Nn?null:xt.getPrimaries(R.colorSpace),Se=R.colorSpace===Nn||Le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let We=R.isCompressedTexture||R.image[0].isCompressedTexture,Te=R.image[0]&&R.image[0].isDataTexture,Ie=[];for(let ye=0;ye<6;ye++)!We&&!Te?Ie[ye]=v(R.image[ye],!0,s.maxCubemapSize):Ie[ye]=Te?R.image[ye].image:R.image[ye],Ie[ye]=ue(R,Ie[ye]);let ke=Ie[0],qe=r.convert(R.format,R.colorSpace),z=r.convert(R.type),Q=x(R.internalFormat,qe,z,R.colorSpace),$=R.isVideoTexture!==!0,we=pe.__version===void 0||he===!0,G=fe.dataReady,_e=P(R,ke);le(i.TEXTURE_CUBE_MAP,R);let ae;if(We){$&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Q,ke.width,ke.height);for(let ye=0;ye<6;ye++){ae=Ie[ye].mipmaps;for(let Ne=0;Ne<ae.length;Ne++){let Ue=ae[Ne];R.format!==gn?qe!==null?$?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,0,0,Ue.width,Ue.height,qe,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,Q,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,0,0,Ue.width,Ue.height,qe,z,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,Q,Ue.width,Ue.height,0,qe,z,Ue.data)}}}else{if(ae=R.mipmaps,$&&we){ae.length>0&&_e++;let ye=re(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Q,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Te){$?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ie[ye].width,Ie[ye].height,qe,z,Ie[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Q,Ie[ye].width,Ie[ye].height,0,qe,z,Ie[ye].data);for(let Ne=0;Ne<ae.length;Ne++){let Be=ae[Ne].image[ye].image;$?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,0,0,Be.width,Be.height,qe,z,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,Q,Be.width,Be.height,0,qe,z,Be.data)}}else{$?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,qe,z,Ie[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Q,qe,z,Ie[ye]);for(let Ne=0;Ne<ae.length;Ne++){let Ue=ae[Ne];$?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,0,0,qe,z,Ue.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,Q,qe,z,Ue.image[ye])}}}m(R)&&d(i.TEXTURE_CUBE_MAP),pe.__version=fe.version,R.onUpdate&&R.onUpdate(R)}A.__version=R.version}function ce(A,R,se,he,fe,pe){let Le=r.convert(se.format,se.colorSpace),de=r.convert(se.type),Se=x(se.internalFormat,Le,de,se.colorSpace),We=n.get(R),Te=n.get(se);if(Te.__renderTarget=R,!We.__hasExternalTextures){let Ie=Math.max(1,R.width>>pe),ke=Math.max(1,R.height>>pe);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,pe,Se,Ie,ke,R.depth,0,Le,de,null):t.texImage2D(fe,pe,Se,Ie,ke,0,Le,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,fe,Te.__webglTexture,0,K(R)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,fe,Te.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(A,R,se){if(i.bindRenderbuffer(i.RENDERBUFFER,A),R.depthBuffer){let he=R.depthTexture,fe=he&&he.isDepthTexture?he.type:null,pe=M(R.stencilBuffer,fe),Le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=K(R);te(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,pe,R.width,R.height):se?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,pe,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,A)}else{let he=R.textures;for(let fe=0;fe<he.length;fe++){let pe=he[fe],Le=r.convert(pe.format,pe.colorSpace),de=r.convert(pe.type),Se=x(pe.internalFormat,Le,de,pe.colorSpace),We=K(R);se&&te(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Se,R.width,R.height):te(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Se,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Se,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(A,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let he=n.get(R.depthTexture);he.__renderTarget=R,(!he.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);let fe=he.__webglTexture,pe=K(R);if(R.depthTexture.format===Ns)te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(R.depthTexture.format===Oi)te(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Me(A){let R=n.get(A),se=A.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==A.depthTexture){let he=A.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),he){let fe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,he.removeEventListener("dispose",fe)};he.addEventListener("dispose",fe),R.__depthDisposeCallback=fe}R.__boundDepthTexture=he}if(A.depthTexture&&!R.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");q(R.__webglFramebuffer,A)}else if(se){R.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[he]),R.__webglDepthbuffer[he]===void 0)R.__webglDepthbuffer[he]=i.createRenderbuffer(),ee(R.__webglDepthbuffer[he],A,!1);else{let fe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=R.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),ee(R.__webglDepthbuffer,A,!1);else{let he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(A,R,se){let he=n.get(A);R!==void 0&&ce(he.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),se!==void 0&&Me(A)}function ne(A){let R=A.texture,se=n.get(A),he=n.get(R);A.addEventListener("dispose",T);let fe=A.textures,pe=A.isWebGLCubeRenderTarget===!0,Le=fe.length>1;if(Le||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=R.version,o.memory.textures++),pe){se.__webglFramebuffer=[];for(let de=0;de<6;de++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[de]=[];for(let Se=0;Se<R.mipmaps.length;Se++)se.__webglFramebuffer[de][Se]=i.createFramebuffer()}else se.__webglFramebuffer[de]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let de=0;de<R.mipmaps.length;de++)se.__webglFramebuffer[de]=i.createFramebuffer()}else se.__webglFramebuffer=i.createFramebuffer();if(Le)for(let de=0,Se=fe.length;de<Se;de++){let We=n.get(fe[de]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&te(A)===!1){se.__webglMultisampledFramebuffer=i.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let de=0;de<fe.length;de++){let Se=fe[de];se.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,se.__webglColorRenderbuffer[de]);let We=r.convert(Se.format,Se.colorSpace),Te=r.convert(Se.type),Ie=x(Se.internalFormat,We,Te,Se.colorSpace,A.isXRRenderTarget===!0),ke=K(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,se.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(se.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(se.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),le(i.TEXTURE_CUBE_MAP,R);for(let de=0;de<6;de++)if(R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)ce(se.__webglFramebuffer[de][Se],A,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else ce(se.__webglFramebuffer[de],A,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(R)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let de=0,Se=fe.length;de<Se;de++){let We=fe[de],Te=n.get(We);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),le(i.TEXTURE_2D,We),ce(se.__webglFramebuffer,A,We,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(We)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,he.__webglTexture),le(de,R),R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)ce(se.__webglFramebuffer[Se],A,R,i.COLOR_ATTACHMENT0,de,Se);else ce(se.__webglFramebuffer,A,R,i.COLOR_ATTACHMENT0,de,0);m(R)&&d(de),t.unbindTexture()}A.depthBuffer&&Me(A)}function j(A){let R=A.textures;for(let se=0,he=R.length;se<he;se++){let fe=R[se];if(m(fe)){let pe=S(A),Le=n.get(fe).__webglTexture;t.bindTexture(pe,Le),d(pe),t.unbindTexture()}}}let ie=[],O=[];function xe(A){if(A.samples>0){if(te(A)===!1){let R=A.textures,se=A.width,he=A.height,fe=i.COLOR_BUFFER_BIT,pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(A),de=R.length>1;if(de)for(let Se=0;Se<R.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Se=0;Se<R.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Se]);let We=n.get(R[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,se,he,0,0,se,he,fe,i.NEAREST),l===!0&&(ie.length=0,O.length=0,ie.push(i.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ie.push(pe),O.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<R.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Se]);let We=n.get(R[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let R=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function K(A){return Math.min(s.maxSamples,A.samples)}function te(A){let R=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function oe(A){let R=o.render.frame;h.get(A)!==R&&(h.set(A,R),A.update())}function ue(A,R){let se=A.colorSpace,he=A.format,fe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||se!==er&&se!==Nn&&(xt.getTransfer(se)===St?(he!==gn||fe!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),R}function re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=w,this.setTexture2D=H,this.setTexture2DArray=N,this.setTexture3D=L,this.setTextureCube=U,this.rebindTextures=ve,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=te}function Pv(i,e){function t(n,s=Nn){let r,o=xt.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===lh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bf)return i.BYTE;if(n===Ef)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===ah)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Tf)return i.ALPHA;if(n===Af)return i.RGB;if(n===gn)return i.RGBA;if(n===Rf)return i.LUMINANCE;if(n===Cf)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===hh)return i.RED;if(n===uh)return i.RED_INTEGER;if(n===Pf)return i.RG;if(n===fh)return i.RG_INTEGER;if(n===dh)return i.RGBA_INTEGER;if(n===Bo||n===Ho||n===ko||n===Vo)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Ol||n===Fl||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===kl||n===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===kl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===jl||n===Kl||n===Jl||n===Ql||n===$l||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===ic||n===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===If||n===rc||n===oc||n===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var bc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ft=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iv={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Gt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends Fi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null,v=new Ec,m=t.getContextAttributes(),d=null,S=null,x=[],M=[],P=new Re,C=null,T=new tn;T.viewport=new bt;let b=new tn;b.viewport=new bt;let _=[T,b],y=new bc,E=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=x[V];return Z===void 0&&(Z=new Er,x[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=x[V];return Z===void 0&&(Z=new Er,x[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=x[V];return Z===void 0&&(Z=new Er,x[V]=Z),Z.getHandSpace()};function D(V){let Z=M.indexOf(V.inputSource);if(Z===-1)return;let ce=x[Z];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function I(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",H);for(let V=0;V<x.length;V++){let Z=M[V];Z!==null&&(M[V]=null,x[V].disconnect(Z))}E=null,w=null,v.reset(),e.setRenderTarget(d),p=null,u=null,f=null,s=null,S=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",I),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ht(p.framebufferWidth,p.framebufferHeight,{format:gn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ce=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Oi:Ns,ce=m.stencil?zi:ts);let q={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(q),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Ht(u.textureWidth,u.textureHeight,{format:gn,type:jn,depthTexture:new Xs(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(V){for(let Z=0;Z<V.removed.length;Z++){let ce=V.removed[Z],ee=M.indexOf(ce);ee>=0&&(M[ee]=null,x[ee].disconnect(ce))}for(let Z=0;Z<V.added.length;Z++){let ce=V.added[Z],ee=M.indexOf(ce);if(ee===-1){for(let Me=0;Me<x.length;Me++)if(Me>=M.length){M.push(ce),ee=Me;break}else if(M[Me]===null){M[Me]=ce,ee=Me;break}if(ee===-1)break}let q=x[ee];q&&q.connect(ce)}}let N=new B,L=new B;function U(V,Z,ce){N.setFromMatrixPosition(Z.matrixWorld),L.setFromMatrixPosition(ce.matrixWorld);let ee=N.distanceTo(L),q=Z.projectionMatrix.elements,Me=ce.projectionMatrix.elements,ve=q[14]/(q[10]-1),ne=q[14]/(q[10]+1),j=(q[9]+1)/q[5],ie=(q[9]-1)/q[5],O=(q[8]-1)/q[0],xe=(Me[8]+1)/Me[0],K=ve*O,te=ve*xe,oe=ee/(-O+xe),ue=oe*-O;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ue),V.translateZ(oe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),q[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let re=ve+oe,A=ne+oe,R=K-ue,se=te+(ee-ue),he=j*ne/A*re,fe=ie*ne/A*re;V.projectionMatrix.makePerspective(R,se,he,fe,re,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function k(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Z=V.near,ce=V.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),y.near=b.near=T.near=Z,y.far=b.far=T.far=ce,(E!==y.near||w!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,w=y.far),T.layers.mask=V.layers.mask|2,b.layers.mask=V.layers.mask|4,y.layers.mask=T.layers.mask|b.layers.mask;let ee=V.parent,q=y.cameras;k(y,ee);for(let Me=0;Me<q.length;Me++)k(q[Me],ee);q.length===2?U(y,T,b):y.projectionMatrix.copy(T.projectionMatrix),W(V,y,ee)};function W(V,Z,ce){ce===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Hs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Y=null;function le(V,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ee=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let Me=0;Me<ce.length;Me++){let ve=ce[Me],ne=null;if(p!==null)ne=p.getViewport(ve);else{let ie=f.getViewSubImage(u,ve);ne=ie.viewport,Me===0&&(e.setRenderTargetTextures(S,ie.colorTexture,u.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(S))}let j=_[Me];j===void 0&&(j=new tn,j.layers.enable(Me),j.viewport=new bt,_[Me]=j),j.matrix.fromArray(ve.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ve.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ne.x,ne.y,ne.width,ne.height),Me===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ee===!0&&y.cameras.push(j)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")){let Me=f.getDepthInformation(ce[0]);Me&&Me.isValid&&Me.texture&&v.init(e,Me,s.renderState)}}for(let ce=0;ce<x.length;ce++){let ee=M[ce],q=x[ce];ee!==null&&q!==void 0&&q.update(ee,Z,c||o)}Y&&Y(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let J=new zf;J.setAnimationLoop(le),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}},Qi=new Cn,Nv=new Je;function Uv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Uf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),x=S.envMap,M=S.envMapRotation;x&&(m.envMap.value=x,Qi.copy(M),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(Qi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){let M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(S,P);let C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}function h(S){let x=f();S.__bindingPointIndex=x;let M=i.createBuffer(),P=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let x=s[S.id],M=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,T=M.length;C<T;C++){let b=Array.isArray(M[C])?M[C]:[M[C]];for(let _=0,y=b.length;_<y;_++){let E=b[_];if(p(E,C,_,P)===!0){let w=E.__offset,D=Array.isArray(E.value)?E.value:[E.value],I=0;for(let H=0;H<D.length;H++){let N=D[H],L=v(N);typeof N=="number"||typeof N=="boolean"?(E.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,w+I,E.__data)):N.isMatrix3?(E.__data[0]=N.elements[0],E.__data[1]=N.elements[1],E.__data[2]=N.elements[2],E.__data[3]=0,E.__data[4]=N.elements[3],E.__data[5]=N.elements[4],E.__data[6]=N.elements[5],E.__data[7]=0,E.__data[8]=N.elements[6],E.__data[9]=N.elements[7],E.__data[10]=N.elements[8],E.__data[11]=0):(N.toArray(E.__data,I),I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,x,M,P){let C=S.value,T=x+"_"+M;if(P[T]===void 0)return typeof C=="number"||typeof C=="boolean"?P[T]=C:P[T]=C.clone(),!0;{let b=P[T];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return P[T]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function g(S){let x=S.uniforms,M=0,P=16;for(let T=0,b=x.length;T<b;T++){let _=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,E=_.length;y<E;y++){let w=_[y],D=Array.isArray(w.value)?w.value:[w.value];for(let I=0,H=D.length;I<H;I++){let N=D[I],L=v(N),U=M%P,k=U%L.boundary,W=U+k;M+=k,W!==0&&P-W<L.storage&&(M+=P-W),w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,M+=L.storage}}}let C=M%P;return C>0&&(M+=P-C),S.__size=M,S.__cache={},this}function v(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var $o=class{constructor(e={}){let{canvas:t=kp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=Ni,this.toneMappingExposure=1;let M=this,P=!1,C=0,T=0,b=null,_=-1,y=null,E=new bt,w=new bt,D=null,I=new Fe(0),H=0,N=t.width,L=t.height,U=1,k=null,W=null,Y=new bt(0,0,N,L),le=new bt(0,0,N,L),J=!1,V=new Cr,Z=!1,ce=!1,ee=new Je,q=new Je,Me=new B,ve=new bt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function ie(){return b===null?U:1}let O=n;function xe(F,me){return t.getContext(F,me)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),O===null){let me="webgl2";if(O=xe(me,F),O===null)throw xe(me)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let K,te,oe,ue,re,A,R,se,he,fe,pe,Le,de,Se,We,Te,Ie,ke,qe,z,Q,$,we,G;function _e(){K=new Qg(O),K.init(),$=new Pv(O,K),te=new qg(O,K,e,$),oe=new Av(O,K),te.reverseDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),ue=new tx(O),re=new pv,A=new Cv(O,K,oe,re,te,$,ue),R=new Zg(M),se=new Jg(M),he=new lm(O),we=new Wg(O,he),fe=new $g(O,he,ue,we),pe=new ix(O,fe,he,ue),qe=new nx(O,te,A),Te=new Yg(re),Le=new dv(M,R,se,K,te,we,Te),de=new Uv(M,re),Se=new gv,We=new Sv(K),ke=new Gg(M,R,se,oe,pe,p,l),Ie=new wv(M,pe,te),G=new zv(O,ue,te,oe),z=new Xg(O,K,ue),Q=new ex(O,K,ue),ue.programs=Le.programs,M.capabilities=te,M.extensions=K,M.properties=re,M.renderLists=Se,M.shadowMap=Ie,M.state=oe,M.info=ue}_e();let ae=new wc(M,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let F=K.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=K.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(F){F!==void 0&&(U=F,this.setSize(N,L,!1))},this.getSize=function(F){return F.set(N,L)},this.setSize=function(F,me,be=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=F,L=me,t.width=Math.floor(F*U),t.height=Math.floor(me*U),be===!0&&(t.style.width=F+"px",t.style.height=me+"px"),this.setViewport(0,0,F,me)},this.getDrawingBufferSize=function(F){return F.set(N*U,L*U).floor()},this.setDrawingBufferSize=function(F,me,be){N=F,L=me,U=be,t.width=Math.floor(F*be),t.height=Math.floor(me*be),this.setViewport(0,0,F,me)},this.getCurrentViewport=function(F){return F.copy(E)},this.getViewport=function(F){return F.copy(Y)},this.setViewport=function(F,me,be,Ee){F.isVector4?Y.set(F.x,F.y,F.z,F.w):Y.set(F,me,be,Ee),oe.viewport(E.copy(Y).multiplyScalar(U).round())},this.getScissor=function(F){return F.copy(le)},this.setScissor=function(F,me,be,Ee){F.isVector4?le.set(F.x,F.y,F.z,F.w):le.set(F,me,be,Ee),oe.scissor(w.copy(le).multiplyScalar(U).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(F){oe.setScissorTest(J=F)},this.setOpaqueSort=function(F){k=F},this.setTransparentSort=function(F){W=F},this.getClearColor=function(F){return F.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(F=!0,me=!0,be=!0){let Ee=0;if(F){let ge=!1;if(b!==null){let ze=b.texture.format;ge=ze===dh||ze===fh||ze===uh}if(ge){let ze=b.texture.type,Ye=ze===jn||ze===ts||ze===Ar||ze===zi||ze===lh||ze===ch,Qe=ke.getClearColor(),$e=ke.getClearAlpha(),lt=Qe.r,ht=Qe.g,Ke=Qe.b;Ye?(g[0]=lt,g[1]=ht,g[2]=Ke,g[3]=$e,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=lt,v[1]=ht,v[2]=Ke,v[3]=$e,O.clearBufferiv(O.COLOR,0,v))}else Ee|=O.COLOR_BUFFER_BIT}me&&(Ee|=O.DEPTH_BUFFER_BIT),be&&(Ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Se.dispose(),We.dispose(),re.dispose(),R.dispose(),se.dispose(),pe.dispose(),we.dispose(),G.dispose(),Le.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",At),ae.removeEventListener("sessionend",En),rn.stop()};function ye(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let F=ue.autoReset,me=Ie.enabled,be=Ie.autoUpdate,Ee=Ie.needsUpdate,ge=Ie.type;_e(),ue.autoReset=F,Ie.enabled=me,Ie.autoUpdate=be,Ie.needsUpdate=Ee,Ie.type=ge}function Ue(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Be(F){let me=F.target;me.removeEventListener("dispose",Be),tt(me)}function tt(F){Ge(F),re.remove(F)}function Ge(F){let me=re.get(F).programs;me!==void 0&&(me.forEach(function(be){Le.releaseProgram(be)}),F.isShaderMaterial&&Le.releaseShaderCache(F))}this.renderBufferDirect=function(F,me,be,Ee,ge,ze){me===null&&(me=ne);let Ye=ge.isMesh&&ge.matrixWorld.determinant()<0,Qe=io(F,me,be,Ee,ge);oe.setMaterial(Ee,Ye);let $e=be.index,lt=1;if(Ee.wireframe===!0){if($e=fe.getWireframeAttribute(be),$e===void 0)return;lt=2}let ht=be.drawRange,Ke=be.attributes.position,gt=ht.start*lt,Rt=(ht.start+ht.count)*lt;ze!==null&&(gt=Math.max(gt,ze.start*lt),Rt=Math.min(Rt,(ze.start+ze.count)*lt)),$e!==null?(gt=Math.max(gt,0),Rt=Math.min(Rt,$e.count)):Ke!=null&&(gt=Math.max(gt,0),Rt=Math.min(Rt,Ke.count));let It=Rt-gt;if(It<0||It===1/0)return;we.setup(ge,Ee,Qe,be,$e);let on,vt=z;if($e!==null&&(on=he.get($e),vt=Q,vt.setIndex(on)),ge.isMesh)Ee.wireframe===!0?(oe.setLineWidth(Ee.wireframeLinewidth*ie()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(ge.isLine){let Ze=Ee.linewidth;Ze===void 0&&(Ze=1),oe.setLineWidth(Ze*ie()),ge.isLineSegments?vt.setMode(O.LINES):ge.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else ge.isPoints?vt.setMode(O.POINTS):ge.isSprite&&vt.setMode(O.TRIANGLES);if(ge.isBatchedMesh)if(ge._multiDrawInstances!==null)vt.renderMultiDrawInstances(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount,ge._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))vt.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else{let Ze=ge._multiDrawStarts,vn=ge._multiDrawCounts,ut=ge._multiDrawCount,an=$e?he.get($e).bytesPerElement:1,ti=re.get(Ee).currentProgram.getUniforms();for(let kt=0;kt<ut;kt++)ti.setValue(O,"_gl_DrawID",kt),vt.render(Ze[kt]/an,vn[kt])}else if(ge.isInstancedMesh)vt.renderInstances(gt,It,ge.count);else if(be.isInstancedBufferGeometry){let Ze=be._maxInstanceCount!==void 0?be._maxInstanceCount:1/0,vn=Math.min(be.instanceCount,Ze);vt.renderInstances(gt,It,vn)}else vt.render(gt,It)};function De(F,me,be){F.transparent===!0&&F.side===Mt&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,Xi(F,me,be),F.side=Ui,F.needsUpdate=!0,Xi(F,me,be),F.side=Mt):Xi(F,me,be)}this.compile=function(F,me,be=null){be===null&&(be=F),d=We.get(be),d.init(me),x.push(d),be.traverseVisible(function(ge){ge.isLight&&ge.layers.test(me.layers)&&(d.pushLight(ge),ge.castShadow&&d.pushShadow(ge))}),F!==be&&F.traverseVisible(function(ge){ge.isLight&&ge.layers.test(me.layers)&&(d.pushLight(ge),ge.castShadow&&d.pushShadow(ge))}),d.setupLights();let Ee=new Set;return F.traverse(function(ge){if(!(ge.isMesh||ge.isPoints||ge.isLine||ge.isSprite))return;let ze=ge.material;if(ze)if(Array.isArray(ze))for(let Ye=0;Ye<ze.length;Ye++){let Qe=ze[Ye];De(Qe,be,ge),Ee.add(Qe)}else De(ze,be,ge),Ee.add(ze)}),x.pop(),d=null,Ee},this.compileAsync=function(F,me,be=null){let Ee=this.compile(F,me,be);return new Promise(ge=>{function ze(){if(Ee.forEach(function(Ye){re.get(Ye).currentProgram.isReady()&&Ee.delete(Ye)}),Ee.size===0){ge(F);return}setTimeout(ze,10)}K.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Ve=null;function Tt(F){Ve&&Ve(F)}function At(){rn.stop()}function En(){rn.start()}let rn=new zf;rn.setAnimationLoop(Tt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(F){Ve=F,ae.setAnimationLoop(F),F===null?rn.stop():rn.start()},ae.addEventListener("sessionstart",At),ae.addEventListener("sessionend",En),this.render=function(F,me){if(me!==void 0&&me.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.parent===null&&me.matrixWorldAutoUpdate===!0&&me.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(me),me=ae.getCamera()),F.isScene===!0&&F.onBeforeRender(M,F,me,b),d=We.get(F,x.length),d.init(me),x.push(d),q.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),V.setFromProjectionMatrix(q),ce=this.localClippingEnabled,Z=Te.init(this.clippingPlanes,ce),m=Se.get(F,S.length),m.init(),S.push(m),ae.enabled===!0&&ae.isPresenting===!0){let ze=M.xr.getDepthSensingMesh();ze!==null&&us(ze,me,-1/0,M.sortObjects)}us(F,me,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(k,W),j=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,j&&ke.addToRenderList(m,F),this.info.render.frame++,Z===!0&&Te.beginShadows();let be=d.state.shadowsArray;Ie.render(be,F,me),Z===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();let Ee=m.opaque,ge=m.transmissive;if(d.setupLights(),me.isArrayCamera){let ze=me.cameras;if(ge.length>0)for(let Ye=0,Qe=ze.length;Ye<Qe;Ye++){let $e=ze[Ye];wn(Ee,ge,F,$e)}j&&ke.render(F);for(let Ye=0,Qe=ze.length;Ye<Qe;Ye++){let $e=ze[Ye];no(m,F,$e,$e.viewport)}}else ge.length>0&&wn(Ee,ge,F,me),j&&ke.render(F),no(m,F,me);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),F.isScene===!0&&F.onAfterRender(M,F,me),we.resetDefaultState(),_=-1,y=null,x.pop(),x.length>0?(d=x[x.length-1],Z===!0&&Te.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function us(F,me,be,Ee){if(F.visible===!1)return;if(F.layers.test(me.layers)){if(F.isGroup)be=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(me);else if(F.isLight)d.pushLight(F),F.castShadow&&d.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||V.intersectsSprite(F)){Ee&&ve.setFromMatrixPosition(F.matrixWorld).applyMatrix4(q);let Ye=pe.update(F),Qe=F.material;Qe.visible&&m.push(F,Ye,Qe,be,ve.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||V.intersectsObject(F))){let Ye=pe.update(F),Qe=F.material;if(Ee&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),ve.copy(F.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ve.copy(Ye.boundingSphere.center)),ve.applyMatrix4(F.matrixWorld).applyMatrix4(q)),Array.isArray(Qe)){let $e=Ye.groups;for(let lt=0,ht=$e.length;lt<ht;lt++){let Ke=$e[lt],gt=Qe[Ke.materialIndex];gt&&gt.visible&&m.push(F,Ye,gt,be,ve.z,Ke)}}else Qe.visible&&m.push(F,Ye,Qe,be,ve.z,null)}}let ze=F.children;for(let Ye=0,Qe=ze.length;Ye<Qe;Ye++)us(ze[Ye],me,be,Ee)}function no(F,me,be,Ee){let ge=F.opaque,ze=F.transmissive,Ye=F.transparent;d.setupLightsView(be),Z===!0&&Te.setGlobalState(M.clippingPlanes,be),Ee&&oe.viewport(E.copy(Ee)),ge.length>0&&oi(ge,me,be),ze.length>0&&oi(ze,me,be),Ye.length>0&&oi(Ye,me,be),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function wn(F,me,be,Ee){if((be.isScene===!0?be.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Ee.id]===void 0&&(d.state.transmissionRenderTarget[Ee.id]=new Ht(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?nn:jn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let ze=d.state.transmissionRenderTarget[Ee.id],Ye=Ee.viewport||E;ze.setSize(Ye.z,Ye.w);let Qe=M.getRenderTarget();M.setRenderTarget(ze),M.getClearColor(I),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),j&&ke.render(be);let $e=M.toneMapping;M.toneMapping=Ni;let lt=Ee.viewport;if(Ee.viewport!==void 0&&(Ee.viewport=void 0),d.setupLightsView(Ee),Z===!0&&Te.setGlobalState(M.clippingPlanes,Ee),oi(F,be,Ee),A.updateMultisampleRenderTarget(ze),A.updateRenderTargetMipmap(ze),K.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Ke=0,gt=me.length;Ke<gt;Ke++){let Rt=me[Ke],It=Rt.object,on=Rt.geometry,vt=Rt.material,Ze=Rt.group;if(vt.side===Mt&&It.layers.test(Ee.layers)){let vn=vt.side;vt.side=un,vt.needsUpdate=!0,ar(It,be,Ee,on,vt,Ze),vt.side=vn,vt.needsUpdate=!0,ht=!0}}ht===!0&&(A.updateMultisampleRenderTarget(ze),A.updateRenderTargetMipmap(ze))}M.setRenderTarget(Qe),M.setClearColor(I,H),lt!==void 0&&(Ee.viewport=lt),M.toneMapping=$e}function oi(F,me,be){let Ee=me.isScene===!0?me.overrideMaterial:null;for(let ge=0,ze=F.length;ge<ze;ge++){let Ye=F[ge],Qe=Ye.object,$e=Ye.geometry,lt=Ee===null?Ye.material:Ee,ht=Ye.group;Qe.layers.test(be.layers)&&ar(Qe,me,be,$e,lt,ht)}}function ar(F,me,be,Ee,ge,ze){F.onBeforeRender(M,me,be,Ee,ge,ze),F.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ge.onBeforeRender(M,me,be,Ee,F,ze),ge.transparent===!0&&ge.side===Mt&&ge.forceSinglePass===!1?(ge.side=un,ge.needsUpdate=!0,M.renderBufferDirect(be,me,Ee,ge,F,ze),ge.side=Ui,ge.needsUpdate=!0,M.renderBufferDirect(be,me,Ee,ge,F,ze),ge.side=Mt):M.renderBufferDirect(be,me,Ee,ge,F,ze),F.onAfterRender(M,me,be,Ee,ge,ze)}function Xi(F,me,be){me.isScene!==!0&&(me=ne);let Ee=re.get(F),ge=d.state.lights,ze=d.state.shadowsArray,Ye=ge.state.version,Qe=Le.getParameters(F,ge.state,ze,me,be),$e=Le.getProgramCacheKey(Qe),lt=Ee.programs;Ee.environment=F.isMeshStandardMaterial?me.environment:null,Ee.fog=me.fog,Ee.envMap=(F.isMeshStandardMaterial?se:R).get(F.envMap||Ee.environment),Ee.envMapRotation=Ee.environment!==null&&F.envMap===null?me.environmentRotation:F.envMapRotation,lt===void 0&&(F.addEventListener("dispose",Be),lt=new Map,Ee.programs=lt);let ht=lt.get($e);if(ht!==void 0){if(Ee.currentProgram===ht&&Ee.lightsStateVersion===Ye)return In(F,Qe),ht}else Qe.uniforms=Le.getUniforms(F),F.onBeforeCompile(Qe,M),ht=Le.acquireProgram(Qe,$e),lt.set($e,ht),Ee.uniforms=Qe.uniforms;let Ke=Ee.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ke.clippingPlanes=Te.uniform),In(F,Qe),Ee.needsLights=Va(F),Ee.lightsStateVersion=Ye,Ee.needsLights&&(Ke.ambientLightColor.value=ge.state.ambient,Ke.lightProbe.value=ge.state.probe,Ke.directionalLights.value=ge.state.directional,Ke.directionalLightShadows.value=ge.state.directionalShadow,Ke.spotLights.value=ge.state.spot,Ke.spotLightShadows.value=ge.state.spotShadow,Ke.rectAreaLights.value=ge.state.rectArea,Ke.ltc_1.value=ge.state.rectAreaLTC1,Ke.ltc_2.value=ge.state.rectAreaLTC2,Ke.pointLights.value=ge.state.point,Ke.pointLightShadows.value=ge.state.pointShadow,Ke.hemisphereLights.value=ge.state.hemi,Ke.directionalShadowMap.value=ge.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,Ke.spotShadowMap.value=ge.state.spotShadowMap,Ke.spotLightMatrix.value=ge.state.spotLightMatrix,Ke.spotLightMap.value=ge.state.spotLightMap,Ke.pointShadowMap.value=ge.state.pointShadowMap,Ke.pointShadowMatrix.value=ge.state.pointShadowMatrix),Ee.currentProgram=ht,Ee.uniformsList=null,ht}function lr(F){if(F.uniformsList===null){let me=F.currentProgram.getUniforms();F.uniformsList=zs.seqWithValue(me.seq,F.uniforms)}return F.uniformsList}function In(F,me){let be=re.get(F);be.outputColorSpace=me.outputColorSpace,be.batching=me.batching,be.batchingColor=me.batchingColor,be.instancing=me.instancing,be.instancingColor=me.instancingColor,be.instancingMorph=me.instancingMorph,be.skinning=me.skinning,be.morphTargets=me.morphTargets,be.morphNormals=me.morphNormals,be.morphColors=me.morphColors,be.morphTargetsCount=me.morphTargetsCount,be.numClippingPlanes=me.numClippingPlanes,be.numIntersection=me.numClipIntersection,be.vertexAlphas=me.vertexAlphas,be.vertexTangents=me.vertexTangents,be.toneMapping=me.toneMapping}function io(F,me,be,Ee,ge){me.isScene!==!0&&(me=ne),A.resetTextureUnits();let ze=me.fog,Ye=Ee.isMeshStandardMaterial?me.environment:null,Qe=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:er,$e=(Ee.isMeshStandardMaterial?se:R).get(Ee.envMap||Ye),lt=Ee.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,ht=!!be.attributes.tangent&&(!!Ee.normalMap||Ee.anisotropy>0),Ke=!!be.morphAttributes.position,gt=!!be.morphAttributes.normal,Rt=!!be.morphAttributes.color,It=Ni;Ee.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(It=M.toneMapping);let on=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,vt=on!==void 0?on.length:0,Ze=re.get(Ee),vn=d.state.lights;if(Z===!0&&(ce===!0||F!==y)){let ln=F===y&&Ee.id===_;Te.setState(Ee,F,ln)}let ut=!1;Ee.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==vn.state.version||Ze.outputColorSpace!==Qe||ge.isBatchedMesh&&Ze.batching===!1||!ge.isBatchedMesh&&Ze.batching===!0||ge.isBatchedMesh&&Ze.batchingColor===!0&&ge.colorTexture===null||ge.isBatchedMesh&&Ze.batchingColor===!1&&ge.colorTexture!==null||ge.isInstancedMesh&&Ze.instancing===!1||!ge.isInstancedMesh&&Ze.instancing===!0||ge.isSkinnedMesh&&Ze.skinning===!1||!ge.isSkinnedMesh&&Ze.skinning===!0||ge.isInstancedMesh&&Ze.instancingColor===!0&&ge.instanceColor===null||ge.isInstancedMesh&&Ze.instancingColor===!1&&ge.instanceColor!==null||ge.isInstancedMesh&&Ze.instancingMorph===!0&&ge.morphTexture===null||ge.isInstancedMesh&&Ze.instancingMorph===!1&&ge.morphTexture!==null||Ze.envMap!==$e||Ee.fog===!0&&Ze.fog!==ze||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Te.numPlanes||Ze.numIntersection!==Te.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==ht||Ze.morphTargets!==Ke||Ze.morphNormals!==gt||Ze.morphColors!==Rt||Ze.toneMapping!==It||Ze.morphTargetsCount!==vt)&&(ut=!0):(ut=!0,Ze.__version=Ee.version);let an=Ze.currentProgram;ut===!0&&(an=Xi(Ee,me,ge));let ti=!1,kt=!1,qi=!1,Lt=an.getUniforms(),Tn=Ze.uniforms;if(oe.useProgram(an.program)&&(ti=!0,kt=!0,qi=!0),Ee.id!==_&&(_=Ee.id,kt=!0),ti||y!==F){oe.buffers.depth.getReversed()?(ee.copy(F.projectionMatrix),Gp(ee),Wp(ee),Lt.setValue(O,"projectionMatrix",ee)):Lt.setValue(O,"projectionMatrix",F.projectionMatrix),Lt.setValue(O,"viewMatrix",F.matrixWorldInverse);let Gn=Lt.map.cameraPosition;Gn!==void 0&&Gn.setValue(O,Me.setFromMatrixPosition(F.matrixWorld)),te.logarithmicDepthBuffer&&Lt.setValue(O,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Ee.isMeshPhongMaterial||Ee.isMeshToonMaterial||Ee.isMeshLambertMaterial||Ee.isMeshBasicMaterial||Ee.isMeshStandardMaterial||Ee.isShaderMaterial)&&Lt.setValue(O,"isOrthographic",F.isOrthographicCamera===!0),y!==F&&(y=F,kt=!0,qi=!0)}if(ge.isSkinnedMesh){Lt.setOptional(O,ge,"bindMatrix"),Lt.setOptional(O,ge,"bindMatrixInverse");let ln=ge.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Lt.setValue(O,"boneTexture",ln.boneTexture,A))}ge.isBatchedMesh&&(Lt.setOptional(O,ge,"batchingTexture"),Lt.setValue(O,"batchingTexture",ge._matricesTexture,A),Lt.setOptional(O,ge,"batchingIdTexture"),Lt.setValue(O,"batchingIdTexture",ge._indirectTexture,A),Lt.setOptional(O,ge,"batchingColorTexture"),ge._colorsTexture!==null&&Lt.setValue(O,"batchingColorTexture",ge._colorsTexture,A));let ni=be.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&qe.update(ge,be,an),(kt||Ze.receiveShadow!==ge.receiveShadow)&&(Ze.receiveShadow=ge.receiveShadow,Lt.setValue(O,"receiveShadow",ge.receiveShadow)),Ee.isMeshGouraudMaterial&&Ee.envMap!==null&&(Tn.envMap.value=$e,Tn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Ee.isMeshStandardMaterial&&Ee.envMap===null&&me.environment!==null&&(Tn.envMapIntensity.value=me.environmentIntensity),kt&&(Lt.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ze.needsLights&&so(Tn,qi),ze&&Ee.fog===!0&&de.refreshFogUniforms(Tn,ze),de.refreshMaterialUniforms(Tn,Ee,U,L,d.state.transmissionRenderTarget[F.id]),zs.upload(O,lr(Ze),Tn,A)),Ee.isShaderMaterial&&Ee.uniformsNeedUpdate===!0&&(zs.upload(O,lr(Ze),Tn,A),Ee.uniformsNeedUpdate=!1),Ee.isSpriteMaterial&&Lt.setValue(O,"center",ge.center),Lt.setValue(O,"modelViewMatrix",ge.modelViewMatrix),Lt.setValue(O,"normalMatrix",ge.normalMatrix),Lt.setValue(O,"modelMatrix",ge.matrixWorld),Ee.isShaderMaterial||Ee.isRawShaderMaterial){let ln=Ee.uniformsGroups;for(let Gn=0,Wn=ln.length;Gn<Wn;Gn++){let X=ln[Gn];G.update(X,an),G.bind(X,an)}}return an}function so(F,me){F.ambientLightColor.needsUpdate=me,F.lightProbe.needsUpdate=me,F.directionalLights.needsUpdate=me,F.directionalLightShadows.needsUpdate=me,F.pointLights.needsUpdate=me,F.pointLightShadows.needsUpdate=me,F.spotLights.needsUpdate=me,F.spotLightShadows.needsUpdate=me,F.rectAreaLights.needsUpdate=me,F.hemisphereLights.needsUpdate=me}function Va(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(F,me,be){re.get(F.texture).__webglTexture=me,re.get(F.depthTexture).__webglTexture=be;let Ee=re.get(F);Ee.__hasExternalTextures=!0,Ee.__autoAllocateDepthBuffer=be===void 0,Ee.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,me){let be=re.get(F);be.__webglFramebuffer=me,be.__useDefaultFramebuffer=me===void 0},this.setRenderTarget=function(F,me=0,be=0){b=F,C=me,T=be;let Ee=!0,ge=null,ze=!1,Ye=!1;if(F){let $e=re.get(F);if($e.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(O.FRAMEBUFFER,null),Ee=!1;else if($e.__webglFramebuffer===void 0)A.setupRenderTarget(F);else if($e.__hasExternalTextures)A.rebindTextures(F,re.get(F.texture).__webglTexture,re.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Ke=F.depthTexture;if($e.__boundDepthTexture!==Ke){if(Ke!==null&&re.has(Ke)&&(F.width!==Ke.image.width||F.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(F)}}let lt=F.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ye=!0);let ht=re.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ht[me])?ge=ht[me][be]:ge=ht[me],ze=!0):F.samples>0&&A.useMultisampledRTT(F)===!1?ge=re.get(F).__webglMultisampledFramebuffer:Array.isArray(ht)?ge=ht[be]:ge=ht,E.copy(F.viewport),w.copy(F.scissor),D=F.scissorTest}else E.copy(Y).multiplyScalar(U).floor(),w.copy(le).multiplyScalar(U).floor(),D=J;if(oe.bindFramebuffer(O.FRAMEBUFFER,ge)&&Ee&&oe.drawBuffers(F,ge),oe.viewport(E),oe.scissor(w),oe.setScissorTest(D),ze){let $e=re.get(F.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e.__webglTexture,be)}else if(Ye){let $e=re.get(F.texture),lt=me||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,$e.__webglTexture,be||0,lt)}_=-1},this.readRenderTargetPixels=function(F,me,be,Ee,ge,ze,Ye){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=re.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){oe.bindFramebuffer(O.FRAMEBUFFER,Qe);try{let $e=F.texture,lt=$e.format,ht=$e.type;if(!te.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}me>=0&&me<=F.width-Ee&&be>=0&&be<=F.height-ge&&O.readPixels(me,be,Ee,ge,$.convert(lt),$.convert(ht),ze)}finally{let $e=b!==null?re.get(b).__webglFramebuffer:null;oe.bindFramebuffer(O.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(F,me,be,Ee,ge,ze,Ye){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=re.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){let $e=F.texture,lt=$e.format,ht=$e.type;if(!te.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(me>=0&&me<=F.width-Ee&&be>=0&&be<=F.height-ge){oe.bindFramebuffer(O.FRAMEBUFFER,Qe);let Ke=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.bufferData(O.PIXEL_PACK_BUFFER,ze.byteLength,O.STREAM_READ),O.readPixels(me,be,Ee,ge,$.convert(lt),$.convert(ht),0);let gt=b!==null?re.get(b).__webglFramebuffer:null;oe.bindFramebuffer(O.FRAMEBUFFER,gt);let Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vp(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ze),O.deleteBuffer(Ke),O.deleteSync(Rt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,me=null,be=0){F.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),me=arguments[0]||null,F=arguments[1]);let Ee=Math.pow(2,-be),ge=Math.floor(F.image.width*Ee),ze=Math.floor(F.image.height*Ee),Ye=me!==null?me.x:0,Qe=me!==null?me.y:0;A.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,be,0,0,Ye,Qe,ge,ze),oe.unbindTexture()},this.copyTextureToTexture=function(F,me,be=null,Ee=null,ge=0){F.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),Ee=arguments[0]||null,F=arguments[1],me=arguments[2],ge=arguments[3]||0,be=null);let ze,Ye,Qe,$e,lt,ht,Ke,gt,Rt,It=F.isCompressedTexture?F.mipmaps[ge]:F.image;be!==null?(ze=be.max.x-be.min.x,Ye=be.max.y-be.min.y,Qe=be.isBox3?be.max.z-be.min.z:1,$e=be.min.x,lt=be.min.y,ht=be.isBox3?be.min.z:0):(ze=It.width,Ye=It.height,Qe=It.depth||1,$e=0,lt=0,ht=0),Ee!==null?(Ke=Ee.x,gt=Ee.y,Rt=Ee.z):(Ke=0,gt=0,Rt=0);let on=$.convert(me.format),vt=$.convert(me.type),Ze;me.isData3DTexture?(A.setTexture3D(me,0),Ze=O.TEXTURE_3D):me.isDataArrayTexture||me.isCompressedArrayTexture?(A.setTexture2DArray(me,0),Ze=O.TEXTURE_2D_ARRAY):(A.setTexture2D(me,0),Ze=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,me.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,me.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,me.unpackAlignment);let vn=O.getParameter(O.UNPACK_ROW_LENGTH),ut=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),ti=O.getParameter(O.UNPACK_SKIP_ROWS),kt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$e),O.pixelStorei(O.UNPACK_SKIP_ROWS,lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ht);let qi=F.isDataArrayTexture||F.isData3DTexture,Lt=me.isDataArrayTexture||me.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let Tn=re.get(F),ni=re.get(me),ln=re.get(Tn.__renderTarget),Gn=re.get(ni.__renderTarget);oe.bindFramebuffer(O.READ_FRAMEBUFFER,ln.__webglFramebuffer),oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<Qe;Wn++)qi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,re.get(F).__webglTexture,ge,ht+Wn),F.isDepthTexture?(Lt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,re.get(me).__webglTexture,ge,Rt+Wn),O.blitFramebuffer($e,lt,ze,Ye,Ke,gt,ze,Ye,O.DEPTH_BUFFER_BIT,O.NEAREST)):Lt?O.copyTexSubImage3D(Ze,ge,Ke,gt,Rt+Wn,$e,lt,ze,Ye):O.copyTexSubImage2D(Ze,ge,Ke,gt,Rt+Wn,$e,lt,ze,Ye);oe.bindFramebuffer(O.READ_FRAMEBUFFER,null),oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Lt?F.isDataTexture||F.isData3DTexture?O.texSubImage3D(Ze,ge,Ke,gt,Rt,ze,Ye,Qe,on,vt,It.data):me.isCompressedArrayTexture?O.compressedTexSubImage3D(Ze,ge,Ke,gt,Rt,ze,Ye,Qe,on,It.data):O.texSubImage3D(Ze,ge,Ke,gt,Rt,ze,Ye,Qe,on,vt,It):F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Ke,gt,ze,Ye,on,vt,It.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Ke,gt,It.width,It.height,on,It.data):O.texSubImage2D(O.TEXTURE_2D,ge,Ke,gt,ze,Ye,on,vt,It);O.pixelStorei(O.UNPACK_ROW_LENGTH,vn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,ti),O.pixelStorei(O.UNPACK_SKIP_IMAGES,kt),ge===0&&me.generateMipmaps&&O.generateMipmap(Ze),oe.unbindTexture()},this.copyTextureToTexture3D=function(F,me,be=null,Ee=null,ge=0){return F.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),be=arguments[0]||null,Ee=arguments[1]||null,F=arguments[2],me=arguments[3],ge=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,me,be,Ee,ge)},this.initRenderTarget=function(F){re.get(F).__webglFramebuffer===void 0&&A.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?A.setTextureCube(F,0):F.isData3DTexture?A.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?A.setTexture2DArray(F,0):A.setTexture2D(F,0),oe.unbindTexture()},this.resetState=function(){C=0,T=0,b=null,oe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}},ea=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bi=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ta=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new B,Pr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ns=class extends On{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ts,dr=new B,As=new B,Rs=new B,Cs=new Re,pr=new Re,kf=new Je,Ao=new B,mr=new B,Ro=new B,ef=new Re,xl=new Re,tf=new Re,qs=class extends Wt{constructor(e=new ns){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ta(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Pr(n,3,0,!1)),Ts.setAttribute("uv",new Pr(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),kf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Co(Ao.set(-.5,-.5,0),Rs,o,As,s,r),Co(mr.set(.5,-.5,0),Rs,o,As,s,r),Co(Ro.set(.5,.5,0),Rs,o,As,s,r),ef.set(0,0),xl.set(1,0),tf.set(1,1);let a=e.ray.intersectTriangle(Ao,mr,Ro,!1,dr);if(a===null&&(Co(mr.set(-.5,.5,0),Rs,o,As,s,r),xl.set(0,1),a=e.ray.intersectTriangle(Ao,Ro,mr,!1,dr),a===null))return;let l=e.ray.origin.distanceTo(dr);l<e.near||l>e.far||t.push({distance:l,point:dr.clone(),uv:Di.getInterpolation(dr,Ao,mr,Ro,ef,xl,tf,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Co(i,e,t,n,s,r){Cs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(pr.x=r*Cs.x-s*Cs.y,pr.y=s*Cs.x+r*Cs.y):pr.copy(Cs),i.copy(e),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(kf)}var yi=class extends Gt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,h=jt,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ir=class extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new Je,nf=new Je,Po=[],sf=new Kn,Ov=new Je,gr=new je,xr=new vi,zt=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ov)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),sf.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),xr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),nf.multiplyMatrices(n,Ps),gr.matrixWorld=nf,gr.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){let l=Po[o];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(s*this.count),s,this.count,hh,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var is=class extends On{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},na=new B,ia=new B,rf=new Je,vr=new ks,Io=new vi,vl=new B,of=new B,Lr=class extends Wt{constructor(e=new at,t=new is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)na.fromBufferAttribute(t,s-1),ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=na.distanceTo(ia);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;rf.copy(s).invert(),vr.copy(e.ray).applyMatrix4(rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){let d=h.getX(v),S=h.getX(v+1),x=Lo(this,e,vr,l,d,S);x&&t.push(x)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),d=Lo(this,e,vr,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){let d=Lo(this,e,vr,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=Lo(this,e,vr,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lo(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(na.fromBufferAttribute(o,s),ia.fromBufferAttribute(o,r),t.distanceSqToSegment(na,ia,vl,of)>n)return;vl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(vl);if(!(l<e.near||l>e.far))return{distance:l,point:of.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var af=new B,lf=new B,sa=class extends Lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)af.fromBufferAttribute(t,s),lf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+af.distanceTo(lf);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ss=class extends On{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cf=new Je,Tc=new ks,Do=new vi,No=new B,Hi=class extends Wt{constructor(e=new at,t=new ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;cf.copy(s).invert(),Tc.copy(e.ray).applyMatrix4(cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,v=p;g<v;g++){let m=c.getX(g);No.fromBufferAttribute(f,m),hf(No,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=u,v=p;g<v;g++)No.fromBufferAttribute(f,g),hf(No,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hf(i,e,t,n,s,r,o){let a=Tc.distanceSqToPoint(i);if(a<t){let l=new B;Tc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xt=class extends Gt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,s=[],r=[],o=[],a=new B,l=new Je;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($t(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos($t(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Dr=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ac=class extends Dr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Uo=new B,yl=new gh,Ml=new gh,_l=new gh,Rc=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Uo.subVectors(s[0],s[1]).add(s[0]),c=Uo);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),yl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,v,m),Ml.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,v,m),_l.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ml.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_l.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(yl.calc(l),Ml.calc(l),_l.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Fv(i,e){let t=1-i;return t*t*e}function Bv(i,e){return 2*(1-i)*i*e}function Hv(i,e){return i*i*e}function wr(i,e,t,n){return Fv(i,e)+Bv(i,t)+Hv(i,n)}function kv(i,e){let t=1-i;return t*t*t*e}function Vv(i,e){let t=1-i;return 3*t*t*i*e}function Gv(i,e){return 3*(1-i)*i*i*e}function Wv(i,e){return i*i*i*e}function Tr(i,e,t,n,s){return kv(i,e)+Vv(i,t)+Gv(i,n)+Wv(i,s)}var ra=class extends Fn{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends Fn{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends Fn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends Fn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Fn{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends Fn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y),wr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(uf(a,l.x,c.x,h.x,f.x),uf(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Re().fromArray(s))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:Ac,CatmullRomCurve3:Rc,CubicBezierCurve:ra,CubicBezierCurve3:Cc,EllipseCurve:Dr,LineCurve:oa,LineCurve3:Pc,QuadraticBezierCurve:aa,QuadraticBezierCurve3:Ic,SplineCurve:la}),Dc=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lc[s.type]().fromJSON(s))}return this}},Nr=class extends Dc{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new oa(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new aa(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ra(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new la(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Dr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Nc=class i extends at{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$t(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new B,u=new Re,p=new B,g=new B,v=new B,m=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let S=0;S<=t;S++){let x=n+S*h*s,M=Math.sin(x),P=Math.cos(x);for(let C=0;C<=e.length-1;C++){f.x=e[C].x*M,f.y=e[C].y,f.z=e[C].x*P,o.push(f.x,f.y,f.z),u.x=S/t,u.y=C/(e.length-1),a.push(u.x,u.y);let T=l[3*C+0]*M,b=l[3*C+1],_=l[3*C+0]*P;c.push(T,b,_)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){let M=x+S*e.length,P=M,C=M+e.length,T=M+e.length+1,b=M+1;r.push(P,C,b),r.push(T,b,C)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ki=class i extends Nc{constructor(e=1,t=1,n=4,s=8){let r=new Nr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var Dt=class i extends at{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],g=0,v=[],m=n/2,d=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new et(f,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(p,2));function S(){let M=new B,P=new B,C=0,T=(t-e)/n;for(let b=0;b<=r;b++){let _=[],y=b/r,E=y*(t-e)+e;for(let w=0;w<=s;w++){let D=w/s,I=D*l+a,H=Math.sin(I),N=Math.cos(I);P.x=E*H,P.y=-y*n+m,P.z=E*N,f.push(P.x,P.y,P.z),M.set(H,T,N).normalize(),u.push(M.x,M.y,M.z),p.push(D,1-y),_.push(g++)}v.push(_)}for(let b=0;b<s;b++)for(let _=0;_<r;_++){let y=v[_][b],E=v[_+1][b],w=v[_+1][b+1],D=v[_][b+1];(e>0||_!==0)&&(h.push(y,E,D),C+=3),(t>0||_!==r-1)&&(h.push(E,w,D),C+=3)}c.addGroup(d,C,0),d+=C}function x(M){let P=g,C=new Re,T=new B,b=0,_=M===!0?e:t,y=M===!0?1:-1;for(let w=1;w<=s;w++)f.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;let E=g;for(let w=0;w<=s;w++){let I=w/s*l+a,H=Math.cos(I),N=Math.sin(I);T.x=_*N,T.y=m*y,T.z=_*H,f.push(T.x,T.y,T.z),u.push(0,y,0),C.x=H*.5+.5,C.y=N*.5*y+.5,p.push(C.x,C.y),g++}for(let w=0;w<s;w++){let D=P+w,I=E+w;M===!0?h.push(I,I+1,D):h.push(I+1,I,D),b+=3}c.addGroup(d,b,M===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pn=class i extends Dt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uc=class i extends at{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let x=new B,M=new B,P=new B;for(let C=0;C<t.length;C+=3)p(t[C+0],x),p(t[C+1],M),p(t[C+2],P),l(x,M,P,S)}function l(S,x,M,P){let C=P+1,T=[];for(let b=0;b<=C;b++){T[b]=[];let _=S.clone().lerp(M,b/C),y=x.clone().lerp(M,b/C),E=C-b;for(let w=0;w<=E;w++)w===0&&b===C?T[b][w]=_:T[b][w]=_.clone().lerp(y,w/E)}for(let b=0;b<C;b++)for(let _=0;_<2*(C-b)-1;_++){let y=Math.floor(_/2);_%2===0?(u(T[b][y+1]),u(T[b+1][y]),u(T[b][y])):(u(T[b][y+1]),u(T[b+1][y+1]),u(T[b+1][y]))}}function c(S){let x=new B;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(S),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let S=new B;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];let M=m(S)/2/Math.PI+.5,P=d(S)/Math.PI+.5;o.push(M,1-P)}g(),f()}function f(){for(let S=0;S<o.length;S+=6){let x=o[S+0],M=o[S+2],P=o[S+4],C=Math.max(x,M,P),T=Math.min(x,M,P);C>.9&&T<.1&&(x<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,x){let M=S*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){let S=new B,x=new B,M=new B,P=new B,C=new Re,T=new Re,b=new Re;for(let _=0,y=0;_<r.length;_+=9,y+=6){S.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),C.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),b.set(o[y+4],o[y+5]),P.copy(S).add(x).add(M).divideScalar(3);let E=m(P);v(C,y+0,S,E),v(T,y+2,x,E),v(b,y+4,M,E)}}function v(S,x,M,P){P<0&&S.x===1&&(o[x]=S.x-1),M.x===0&&M.z===0&&(o[x]=P/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ys=class extends Nr{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Nr().fromJSON(s))}return this}},Xv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Vf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,p;if(n&&(r=Kv(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)f=i[g],u=i[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ur(r,o,t,a,l,p,0),o}};function Vf(i,e,t,n,s){let r,o;if(s===ay(i,e,t,n)>0)for(r=e;r<t;r+=n)o=ff(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=ff(r,i[r],i[r+1],o);return o&&_a(o,o.next)&&(Or(o),o=o.next),o}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(_a(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ur(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ty(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Yv(i,n,s,r):qv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Or(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Zv(rs(i),e,t),Ur(i,e,t,n,s,r,2)):o===2&&jv(i,e,t,n,s,r):Ur(rs(i),e,t,n,s,r,1);break}}}function qv(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&Ls(s,a,r,l,o,c,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,v=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,d=zc(p,g,e,t,n),S=zc(v,m,e,t,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=d&&M&&M.z<=S;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ls(a,h,l,f,c,u,x.x,x.y)&&Ot(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ls(a,h,l,f,c,u,M.x,M.y)&&Ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ls(a,h,l,f,c,u,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ls(a,h,l,f,c,u,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Zv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!_a(s,r)&&Gf(s,n,n.next,r)&&zr(s,r)&&zr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Or(n),Or(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function jv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sy(o,a)){let l=Wf(o,a);o=rs(o,o.next),l=rs(l,l.next),Ur(o,e,t,n,s,r,0),Ur(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Kv(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Vf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(iy(c));for(s.sort(Jv),r=0;r<s.length;r++)t=Qv(s[r],t);return t}function Jv(i,e){return i.x-e.x}function Qv(i,e){let t=$v(i,e);if(!t)return e;let n=Wf(t,i);return rs(n,n.next),rs(t,t.next)}function $v(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ls(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),zr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&ey(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function ey(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function ty(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ny(s)}function ny(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function iy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ls(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function sy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ry(i,e)&&(zr(i,e)&&zr(e,i)&&oy(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||_a(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _a(i,e){return i.x===e.x&&i.y===e.y}function Gf(i,e,t,n){let s=Oo(Ot(i,e,t)),r=Oo(Ot(i,e,n)),o=Oo(Ot(t,n,i)),a=Oo(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&zo(i,t,e)||r===0&&zo(i,n,e)||o===0&&zo(t,i,n)||a===0&&zo(t,e,n))}function zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Oo(i){return i>0?1:i<0?-1:0}function ry(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zr(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function oy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Wf(i,e){let t=new Oc(i.i,i.x,i.y),n=new Oc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ff(i,e,t,n){let s=new Oc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ay(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Mn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];df(e),pf(n,e);let o=e.length;t.forEach(df);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,pf(n,t[l]);let a=Xv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function df(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Fr=class i extends at{constructor(e=new Ys([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:ly,x,M=!1,P,C,T,b;d&&(x=d.getSpacedPoints(h),M=!0,u=!1,P=d.computeFrenetFrames(h,!1),C=new B,T=new B,b=new B),u||(m=0,p=0,g=0,v=0);let _=a.extractPoints(c),y=_.shape,E=_.holes;if(!Mn.isClockWise(y)){y=y.reverse();for(let j=0,ie=E.length;j<ie;j++){let O=E[j];Mn.isClockWise(O)&&(E[j]=O.reverse())}}let D=Mn.triangulateShape(y,E),I=y;for(let j=0,ie=E.length;j<ie;j++){let O=E[j];y=y.concat(O)}function H(j,ie,O){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ie,O)}let N=y.length,L=D.length;function U(j,ie,O){let xe,K,te,oe=j.x-ie.x,ue=j.y-ie.y,re=O.x-j.x,A=O.y-j.y,R=oe*oe+ue*ue,se=oe*A-ue*re;if(Math.abs(se)>Number.EPSILON){let he=Math.sqrt(R),fe=Math.sqrt(re*re+A*A),pe=ie.x-ue/he,Le=ie.y+oe/he,de=O.x-A/fe,Se=O.y+re/fe,We=((de-pe)*A-(Se-Le)*re)/(oe*A-ue*re);xe=pe+oe*We-j.x,K=Le+ue*We-j.y;let Te=xe*xe+K*K;if(Te<=2)return new Re(xe,K);te=Math.sqrt(Te/2)}else{let he=!1;oe>Number.EPSILON?re>Number.EPSILON&&(he=!0):oe<-Number.EPSILON?re<-Number.EPSILON&&(he=!0):Math.sign(ue)===Math.sign(A)&&(he=!0),he?(xe=-ue,K=oe,te=Math.sqrt(R)):(xe=oe,K=ue,te=Math.sqrt(R/2))}return new Re(xe/te,K/te)}let k=[];for(let j=0,ie=I.length,O=ie-1,xe=j+1;j<ie;j++,O++,xe++)O===ie&&(O=0),xe===ie&&(xe=0),k[j]=U(I[j],I[O],I[xe]);let W=[],Y,le=k.concat();for(let j=0,ie=E.length;j<ie;j++){let O=E[j];Y=[];for(let xe=0,K=O.length,te=K-1,oe=xe+1;xe<K;xe++,te++,oe++)te===K&&(te=0),oe===K&&(oe=0),Y[xe]=U(O[xe],O[te],O[oe]);W.push(Y),le=le.concat(Y)}for(let j=0;j<m;j++){let ie=j/m,O=p*Math.cos(ie*Math.PI/2),xe=g*Math.sin(ie*Math.PI/2)+v;for(let K=0,te=I.length;K<te;K++){let oe=H(I[K],k[K],xe);ee(oe.x,oe.y,-O)}for(let K=0,te=E.length;K<te;K++){let oe=E[K];Y=W[K];for(let ue=0,re=oe.length;ue<re;ue++){let A=H(oe[ue],Y[ue],xe);ee(A.x,A.y,-O)}}}let J=g+v;for(let j=0;j<N;j++){let ie=u?H(y[j],le[j],J):y[j];M?(T.copy(P.normals[0]).multiplyScalar(ie.x),C.copy(P.binormals[0]).multiplyScalar(ie.y),b.copy(x[0]).add(T).add(C),ee(b.x,b.y,b.z)):ee(ie.x,ie.y,0)}for(let j=1;j<=h;j++)for(let ie=0;ie<N;ie++){let O=u?H(y[ie],le[ie],J):y[ie];M?(T.copy(P.normals[j]).multiplyScalar(O.x),C.copy(P.binormals[j]).multiplyScalar(O.y),b.copy(x[j]).add(T).add(C),ee(b.x,b.y,b.z)):ee(O.x,O.y,f/h*j)}for(let j=m-1;j>=0;j--){let ie=j/m,O=p*Math.cos(ie*Math.PI/2),xe=g*Math.sin(ie*Math.PI/2)+v;for(let K=0,te=I.length;K<te;K++){let oe=H(I[K],k[K],xe);ee(oe.x,oe.y,f+O)}for(let K=0,te=E.length;K<te;K++){let oe=E[K];Y=W[K];for(let ue=0,re=oe.length;ue<re;ue++){let A=H(oe[ue],Y[ue],xe);M?ee(A.x,A.y+x[h-1].y,x[h-1].x+O):ee(A.x,A.y,f+O)}}}V(),Z();function V(){let j=s.length/3;if(u){let ie=0,O=N*ie;for(let xe=0;xe<L;xe++){let K=D[xe];q(K[2]+O,K[1]+O,K[0]+O)}ie=h+m*2,O=N*ie;for(let xe=0;xe<L;xe++){let K=D[xe];q(K[0]+O,K[1]+O,K[2]+O)}}else{for(let ie=0;ie<L;ie++){let O=D[ie];q(O[2],O[1],O[0])}for(let ie=0;ie<L;ie++){let O=D[ie];q(O[0]+N*h,O[1]+N*h,O[2]+N*h)}}n.addGroup(j,s.length/3-j,0)}function Z(){let j=s.length/3,ie=0;ce(I,ie),ie+=I.length;for(let O=0,xe=E.length;O<xe;O++){let K=E[O];ce(K,ie),ie+=K.length}n.addGroup(j,s.length/3-j,1)}function ce(j,ie){let O=j.length;for(;--O>=0;){let xe=O,K=O-1;K<0&&(K=j.length-1);for(let te=0,oe=h+m*2;te<oe;te++){let ue=N*te,re=N*(te+1),A=ie+xe+ue,R=ie+K+ue,se=ie+K+re,he=ie+xe+re;Me(A,R,se,he)}}}function ee(j,ie,O){l.push(j),l.push(ie),l.push(O)}function q(j,ie,O){ve(j),ve(ie),ve(O);let xe=s.length/3,K=S.generateTopUV(n,s,xe-3,xe-2,xe-1);ne(K[0]),ne(K[1]),ne(K[2])}function Me(j,ie,O,xe){ve(j),ve(ie),ve(xe),ve(ie),ve(O),ve(xe);let K=s.length/3,te=S.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);ne(te[0]),ne(te[1]),ne(te[3]),ne(te[1]),ne(te[2]),ne(te[3])}function ve(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function ne(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lc[s.type]().fromJSON(s)),new i(n,e.options)}},ly={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Re(r,o),new Re(a,l),new Re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Re(o,1-l),new Re(c,1-f),new Re(u,1-g),new Re(v,1-d)]:[new Re(a,1-l),new Re(h,1-f),new Re(p,1-g),new Re(m,1-d)]}};function cy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Br=class i extends Uc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bt=class i extends at{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new B,u=new B,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let S=[],x=d/n,M=0;d===0&&o===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let C=P/t;f.x=-e*Math.cos(s+C*r)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(C+M,1-x),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let x=h[d][S+1],M=h[d][S],P=h[d+1][S],C=h[d+1][S+1];(d!==0||o>0)&&p.push(x,M,C),(d!==n-1||l<Math.PI)&&p.push(M,P,C)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zs=class i extends at{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new B,f=new B,u=new B;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let v=g/s*r,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;o.push(v,m,S),o.push(m,d,S)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ca=class extends yt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},fn=class extends On{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ha=class extends On{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ot=class extends On{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var js=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends js{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:su,endingEnd:su}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ru:r=e,a=2*t-n;break;case ou:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ru:o=e,l=2*n-t;break;case ou:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,M=p*m-p*v;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+S*o[c+P]+x*o[l+P]+M*o[f+P];return r}},Bc=class extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Hc=class extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wo:t=this.InterpolantFactoryMethodDiscrete;break;case lc:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return lc;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&hy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,u=f-n,p=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=lc;var os=class extends Jn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Wo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Jn{};kc.prototype.ValueTypeName="color";var Vc=class extends Jn{};Vc.prototype.ValueTypeName="number";var Gc=class extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Et.slerpFlat(r,0,o,c-a,o,c,l);return r}},ua=class extends Jn{InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Jn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Wo;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends Jn{};Wc.prototype.ValueTypeName="vector";var Xc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},uy=new Xc,qc=class{constructor(e){this.manager=e!==void 0?e:uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Js=class extends Ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Sl=new Je,mf=new B,gf=new B,Hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yc=class extends Hr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},fa=class extends Ks{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xf=new Je,yr=new B,bl=new B,Zc=class extends Hr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(yr),bl.copy(n.position),bl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bl),n.updateMatrixWorld(),s.makeTranslation(-yr.x,-yr.y,-yr.z),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf)}},Mi=class extends Ks{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jc=class extends Hr{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var da=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vf(){return performance.now()}var xh="\\[\\]\\.:\\/",fy=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",dy="[^"+xh.replace("\\.","")+"]",py=/((?:WC+[\/:])*)/.source.replace("WC",vh),my=/(WCOD+)?/.source.replace("WCOD",dy),gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),xy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),vy=new RegExp("^"+py+my+gy+xy+"$"),yy=["material","materials","bones","map"],Kc=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fy,"")}static parseTrackName(e){let t=vy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Kc;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pM=new Float32Array(1);var yf=new Je,pa=class{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yf),this}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(Mf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Jc(e[s],this,n,t);return n.sort(Mf),n}};function Mf(i,e){return i.distance-e.distance}function Jc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Jc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);var Vr={W:17.885,E:17.922,S:49.703,N:49.722};function nr(i=Vr){let e=(Vr.S+Vr.N)/2,t=(Vr.W+Vr.E)/2,n=6378137,s=.00669437999014,r=e*Math.PI/180,o=1-s*Math.sin(r)**2,a=n/Math.sqrt(o)*Math.cos(r)*Math.PI/180,l=n*(1-s)/o**1.5*(Math.PI/180),c=f=>(f-t)*a,h=f=>-(f-e)*l;return{lat0:e,lon0:t,mx:a,mz:l,x:c,z:h,W:c(i.W),E:c(i.E),N:h(i.N),S:h(i.S)}}function Xf(i,e,t,n,s){let r=s.x(n.W),o=s.x(n.E),a=s.z(n.N),l=s.z(n.S),c=(o-r)/e,h=(l-a)/t;return{data:i,w:e,h:t,dx:c,dz:h,at:(g,v)=>{let m=(g-r)/c-.5,d=(v-a)/h-.5;m=Math.min(Math.max(m,0),e-1.001),d=Math.min(Math.max(d,0),t-1.001);let S=m|0,x=d|0,M=m-S,P=d-x,C=x*e+S;return i[C]*(1-M)*(1-P)+i[C+1]*M*(1-P)+i[C+e]*(1-M)*P+i[C+e+1]*M*P},cell:g=>[r+(g%e+.5)*c,a+((g/e|0)+.5)*h],index:(g,v)=>[Math.floor((g-r)/c),Math.floor((v-a)/h)]}}function Sa(i,e,t){let n=(e-i.x0)/i.dx,s=(t-i.z0)/i.dz;n=Math.min(Math.max(n,0),i.w-1.0001),s=Math.min(Math.max(s,0),i.h-1.0001);let r=n|0,o=s|0,a=n-r,l=s-o,c=o*i.w+r,h=i.data,f=h[c],u=h[c+1],p=h[c+i.w],g=h[c+i.w+1];return a+l<=1?f+(u-f)*a+(p-f)*l:g+(p-g)*(1-a)+(u-g)*(1-l)}var qf={trunk:{w:8,r:6,d:1,m:2},primary:{w:8,r:6,d:1,m:2},primary_link:{w:6,r:5,d:1},secondary:{w:7,r:5,d:1,m:2},secondary_link:{w:6,r:5,d:1},tertiary:{w:6.5,r:4,d:1,m:1},tertiary_link:{w:5.5,r:4,d:1},residential:{w:5.5,r:3,d:1,p:1},unclassified:{w:5,r:3,d:1,p:1},living_street:{w:5,r:3,d:.5,p:1},service:{w:3.6,r:2,d:.2},pedestrian:{w:5,r:2,s:"sett"},footway:{w:1.8,r:1,s:"pavers"},cycleway:{w:2,r:1},path:{w:1.4,r:1,s:"gravel"},steps:{w:1.8,r:1,s:"pavers"},bridleway:{w:1.4,r:1,s:"gravel"},track:{w:3,r:1,s:"gravel"},stream:{w:2.4,r:0,s:"water"},rail:{w:3.4,r:2,s:"rail"}};function Bn(i,e){let t=atob(i),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return new e(n.buffer)}var Yt=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function Zf(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Si(i,e,t,n,s){let r=i.getImageData(0,0,e,t);for(let o=0;o<r.data.length;o+=4){let a=(s()-.5)*n;r.data[o]+=a,r.data[o+1]+=a,r.data[o+2]+=a}i.putImageData(r,0,0)}function Qn(i,e,t=!0){let n=new Xt(i);return n.wrapS=n.wrapT=zn,n.colorSpace=t?Nt:Nn,n.anisotropy=e.capabilities.getMaxAnisotropy(),n}var Hn=(i,e,t)=>{let n=Zf(i,e),s=n.getContext("2d");return t(s,i,e),n},yh=(i,e,t,n,s,r)=>{i.fillStyle="#cfc8bb",i.fillRect(e-5,s,n-e+10,5),i.fillStyle="#f7f4ee",i.fillRect(e-3,t-3,n-e+6,s-t+6);let o=i.createLinearGradient(0,t,0,s);o.addColorStop(0,"#6f8293"),o.addColorStop(.45,"#36434f"),o.addColorStop(1,"#262f37"),i.fillStyle=o,i.fillRect(e,t,n-e,s-t),i.fillStyle="#f7f4ee",r&&(i.fillRect((e+n)/2-2,t,4,s-t),i.fillRect(e,t+(s-t)*.34,n-e,3))},My={classic:(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,e),Si(i,e,e,14,t),yh(i,e*.32,e*.22,e*.68,e*.74,!0)},panel:(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,e),Si(i,e,e,10,t),i.fillStyle="rgba(0,0,0,0.13)",i.fillRect(0,e-3,e,3),i.fillRect(e-2,0,2,e),yh(i,e*.14,e*.3,e*.86,e*.72,!1),i.fillStyle="#f7f4ee",i.fillRect(e*.5-2,e*.3,4,e*.42)},baroque:(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,e),Si(i,e,e,14,t),i.fillStyle="rgba(0,0,0,0.10)",i.fillRect(0,6,e,3),i.fillStyle="rgba(255,255,255,0.9)",i.fillRect(e*.3,e*.12,e*.4,e*.72),i.fillStyle="rgba(0,0,0,0.08)",i.fillRect(e*.28,e*.1,e*.44,4),yh(i,e*.36,e*.17,e*.64,e*.8,!0)}};function jf(i){let e={};for(let[t,n]of Object.entries(My))e[t]=Qn(Hn(128,128,(s,r)=>n(s,r,Yt(t.length*97))),i);return e.shop=Qn(Hn(128,128,(t,n)=>{t.fillStyle="#fff",t.fillRect(0,0,n,n),Si(t,n,n,12,Yt(9));let s=n*.07,r=n*.93,o=n*.14,a=n*.8;t.fillStyle="#2b2f2c",t.fillRect(s-4,o-4,r-s+8,a-o+8);let l=t.createLinearGradient(s,o,r,a);l.addColorStop(0,"#7f93a3"),l.addColorStop(.35,"#3c4a56"),l.addColorStop(.55,"#56697a"),l.addColorStop(1,"#27313a"),t.fillStyle=l,t.fillRect(s,o,r-s,a-o),t.fillStyle="#2b2f2c",t.fillRect(n/2-2,o,4,a-o),t.fillRect(s,a-10,r-s,3)}),i),e.plaster=Qn(Hn(64,64,(t,n)=>{t.fillStyle="#fff",t.fillRect(0,0,n,n),Si(t,n,n,16,Yt(3))}),i),e.tiles=Qn(Hn(128,128,(t,n)=>{let s=Yt(5);t.fillStyle="#fff",t.fillRect(0,0,n,n),Si(t,n,n,22,s);let r=4,o=8,a=n/r,l=n/o;for(let c=0;c<r;c++){let h=t.createLinearGradient(0,c*a,0,(c+1)*a);h.addColorStop(0,"rgba(255,255,255,0.15)"),h.addColorStop(.85,"rgba(0,0,0,0.08)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),t.fillStyle=h,t.fillRect(0,c*a,n,a),t.fillStyle="rgba(0,0,0,0.22)";for(let f=0;f<o;f++)t.fillRect(f*l+c%2*l*.5,c*a,1.5,a)}}),i),e}var Yf=(i,e,t,n)=>{i.fillStyle="#4b4e51",i.fillRect(0,0,e,t);for(let s=0;s<e*t/6;s++){let r=60+n()*70;i.fillStyle=`rgb(${r},${r},${r+2})`,i.fillRect(n()*e,n()*t,1+n(),1+n())}for(let s=0;s<6;s++)i.fillStyle=`rgba(0,0,0,${.04+n()*.06})`,i.beginPath(),i.ellipse(n()*e,n()*t,20+n()*60,10+n()*40,n()*3,0,7),i.fill()};function Kf(i){let e={};e.asphalt=Qn(Hn(256,256,(t,n,s)=>Yf(t,n,s,Yt(11))),i);for(let t of[1,2])e["asphalt"+t]=Qn(Hn(256,512,(n,s,r)=>{Yf(n,s,r,Yt(12+t)),n.fillStyle="rgba(236,236,228,0.92)",n.fillRect(s/2-2.5,0,5,r/3),t===2&&(n.fillRect(s*.035,0,4,r),n.fillRect(s*.965-4,0,4,r))}),i);return e.sett=Qn(Hn(256,256,(t,n,s)=>{let r=Yt(21),o=16,a=n/o;t.fillStyle="#3f3c38",t.fillRect(0,0,n,s);for(let l=0;l<o;l++)for(let c=-1;c<o;c++){let h=95+r()*55,f=l%2*a*.5+(r()-.5)*2,u=c*a+f,p=l*a+(r()-.5)*2;t.fillStyle=`rgb(${h+6},${h},${h-8})`,t.beginPath(),t.roundRect(u+1.5,p+1.5,a-3,a-3,3),t.fill(),t.fillStyle="rgba(255,255,255,0.10)",t.fillRect(u+2.5,p+2.5,a-7,2)}Si(t,n,s,18,r)}),i),e.pavers=Qn(Hn(256,256,(t,n,s)=>{let r=Yt(31),o=32,a=16;t.fillStyle="#7d7b76",t.fillRect(0,0,n,s);for(let l=0;l<s/a;l++)for(let c=-1;c<n/o+1;c++){let h=150+r()*30,f=c*o+l%2*o*.5;t.fillStyle=`rgb(${h},${h-3},${h-9})`,t.fillRect(f+1,l*a+1,o-2,a-2)}Si(t,n,s,16,r)}),i),e.gravel=Qn(Hn(256,256,(t,n,s)=>{let r=Yt(41);t.fillStyle="#8a8172",t.fillRect(0,0,n,s);for(let o=0;o<2600;o++){let a=90+r()*100;t.fillStyle=`rgb(${a+8},${a},${a-12})`,t.beginPath(),t.arc(r()*n,r()*s,.8+r()*2.2,0,7),t.fill()}}),i),e.rail=Qn(Hn(256,128,(t,n,s)=>{let r=Yt(51);t.fillStyle="#6f6a62",t.fillRect(0,0,n,s);for(let o=0;o<1800;o++){let a=70+r()*90;t.fillStyle=`rgb(${a},${a-4},${a-10})`,t.fillRect(r()*n,r()*s,2,2)}t.fillStyle="#8d8a84";for(let o of[s*.25,s*.75])t.fillRect(n*.16,o-9,n*.68,18);t.fillStyle="#5b544c";for(let o of[.5-.211,.5+.211])t.fillRect(n*o-3,0,6,s),t.fillStyle="#b8b4ac",t.fillRect(n*o-1,0,2,s),t.fillStyle="#5b544c"}),i),e}function Mh(){let e=[(s,r)=>{s.fillStyle="#808080",s.fillRect(0,0,256,256),s.lineCap="round";for(let o=0;o<5200;o++){let a=50+r()*160,l=r()*256,c=r()*256,h=-Math.PI/2+(r()-.5)*1.2,f=3+r()*8;s.strokeStyle=`rgb(${a},${a},${a})`,s.lineWidth=.8+r()*.8,s.beginPath(),s.moveTo(l,c),s.lineTo(l+Math.cos(h)*f,c+Math.sin(h)*f),s.stroke()}},(s,r)=>{s.fillStyle="#7a7a7a",s.fillRect(0,0,256,256);for(let o=0;o<260;o++){let a=70+r()*110;s.fillStyle=`rgba(${a},${a},${a},0.5)`,s.beginPath(),s.arc(r()*256,r()*256,3+r()*12,0,7),s.fill()}for(let o=0;o<1500;o++){let a=60+r()*170;s.fillStyle=`rgb(${a},${a},${a})`,s.beginPath(),s.arc(r()*256,r()*256,.6+r()*1.8,0,7),s.fill()}},(s,r)=>{s.fillStyle="#505050",s.fillRect(0,0,256,256);for(let o=0;o<16;o++)for(let a=-1;a<9;a++){let l=115+r()*50;s.fillStyle=`rgb(${l},${l},${l})`,s.fillRect(a*32+o%2*16+1,o*16+1,30,14)}},(s,r)=>{s.fillStyle="#808080",s.fillRect(0,0,256,256);for(let o=0;o<9e3;o++){let a=70+r()*120;s.fillStyle=`rgb(${a},${a},${a})`,s.fillRect(r()*256,r()*256,1,1)}}],t=new Uint8Array(262144);e.forEach((s,r)=>{let o=Zf(256),a=o.getContext("2d"),l=Yt(101+r);s(a,l),Si(a,256,256,20,l);let c=a.getImageData(0,0,256,256).data;for(let h=0;h<256*256;h++)t[h*4+r]=c[h*4]});let n=new yi(t,256,256,gn);return n.wrapS=n.wrapT=zn,n.magFilter=yn,n.minFilter=mi,n.generateMipmaps=!0,n.anisotropy=8,n.needsUpdate=!0,n}function _h(i,e=!1){let t=e==="bare"?Hn(256,256,(s,r)=>{let o=Yt(79),a=(l,c,h,f,u,p)=>{let g=l+Math.cos(h)*f,v=c+Math.sin(h)*f;if(s.strokeStyle=`rgb(${70+o()*25},${60+o()*20},${52+o()*18})`,s.lineWidth=u,s.beginPath(),s.moveTo(l,c),s.lineTo(g,v),s.stroke(),p>0)for(let m=0;m<2+(o()<.4);m++)a(g,v,h+(o()-.5)*1.6,f*(.6+o()*.2),u*.7,p-1)};s.lineCap="round";for(let l=0;l<7;l++)a(r/2+(o()-.5)*30,r/2+(o()-.5)*30,o()*Math.PI*2,34+o()*18,3.2,4)}):Hn(256,256,(s,r)=>{let o=Yt(e?78:77);for(let a=0;a<420;a++){let l=o()*Math.PI*2,c=Math.sqrt(o())*r*.46,h=r/2+Math.cos(l)*c,f=r/2+Math.sin(l)*c,u=e?[18,30,38,44,52,70][Math.floor(o()*6)]+o()*8:88+o()*26;s.fillStyle=`hsl(${u},${e?62+o()*22:38+o()*20}%,${e?34+o()*22:24+o()*26}%)`,s.beginPath(),s.ellipse(h,f,5+o()*5,2.5+o()*2.5,o()*Math.PI,0,7),s.fill()}}),n=Qn(t,i);return n.wrapS=n.wrapT=pi,n}var pt={uTime:{value:0},uWind:{value:.3},uNight:{value:0},uWet:{value:0},uSnow:{value:0},uLit:{value:.3},uSky:{value:new Fe(14017002)}};function ls(i,e=1){let t=i.onBeforeCompile;return i.onBeforeCompile=(n,s)=>{t&&t(n,s),n.uniforms.uSnow=pt.uSnow,n.uniforms.uSnowK={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUp = normalize(mat3(modelMatrix) * objectNormal).y;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow; uniform float uSnowK; varying float vUp;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.95), uSnow * uSnowK * smoothstep(0.35, 0.75, vUp));`)},i}function Sn(i){let e=i.onBeforeCompile,t=i.customProgramCacheKey();return i.onBeforeCompile=(n,s)=>{e.call(i,n,s),n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
iblIrradiance = vec3(0.0);`)},i.customProgramCacheKey=()=>t+"|glossy",i}function ir(i,e,t){let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n&&n(s,r),s.uniforms.uTime=pt.uTime,s.uniforms.uWind=pt.uWind,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      float wph = uTime * 1.1 + instanceMatrix[3].x * 0.043 + instanceMatrix[3].z * 0.061;
      float wa = uWind * (sin(wph) * 0.6 + sin(wph * 2.3 + 1.7) * 0.25) * ${e.toFixed(3)} * max(position.y + ${t.toFixed(2)}, 0.0);
      transformed.x += wa; transformed.z += wa * 0.6;
      #endif`)},i}function Jf(i){return i.onBeforeCompile=e=>{Object.assign(e.uniforms,{uNight:pt.uNight,uLit:pt.uLit,uSky:pt.uSky}),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; uniform float uLit; uniform vec3 uSky; varying vec3 vWp;`).replace("#include <map_fragment>",`#include <map_fragment>
        float glassMask = clamp((sampledDiffuseColor.b - sampledDiffuseColor.r) * 20.0, 0.0, 1.0) * (1.0 - smoothstep(0.25, 0.45, dot(sampledDiffuseColor.rgb, vec3(0.333))));
        float litMask = step(fract(sin(dot(floor(vMapUv) + floor(vWp.xz * 0.37), vec2(12.9898, 78.233))) * 43758.5453), uLit);
        diffuseColor.rgb = mix(diffuseColor.rgb, uSky * 0.55, glassMask * 0.3 * (1.0 - uNight));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(1.0, 0.74, 0.4) * glassMask * litMask * uNight * 1.3;`)},i}var kn=i=>new Fe(i),Vi={day:[kn(4159669),kn(14017002)],overcast:[kn(8226964),kn(12371404)],dusk:[kn(4875667),kn(15774595)],night:[kn(462109),kn(1779259)]},Gr=[{name:"clear",cloud:.2,rain:0},{name:"cloudy",cloud:.65,rain:0},{name:"overcast",cloud:.9,rain:0},{name:"rain",cloud:1,rain:1},{name:"storm",cloud:1,rain:1.5,storm:1},{name:"fog",cloud:.7,rain:0,fog:1},{name:"snow",cloud:.95,rain:0,snow:1,fog:.25}],Sh=Gr.map(i=>i.name),_y={clear:["cloudy","cloudy","fog"],cloudy:["clear","overcast","overcast"],overcast:["cloudy","rain","rain","fog","snow"],rain:["overcast","overcast","storm"],storm:["rain"],fog:["clear","cloudy"],snow:["overcast","snow"]};function Sy(){let i=new yt({side:un,depthWrite:!1,fog:!1,uniforms:{top:{value:new Fe},horizon:{value:new Fe},sun:{value:new B(0,1,0)},moon:{value:new B(0,-1,0)},uTime:pt.uTime,uCloud:{value:.3},uDay:{value:1},uNight:pt.uNight},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sun; uniform vec3 moon; uniform float uTime; uniform float uCloud; uniform float uDay; uniform float uNight; varying vec3 vDir;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1,0)), f.x), mix(h(i + vec2(0,1)), h(i + vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * n(p); p = p * 2.03 + 11.7; a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vDir);
        vec3 col = mix(horizon, top, smoothstep(0.0, 0.5, d.y));
        float clear = 1.0 - uCloud;
        float s = max(dot(d, normalize(sun)), 0.0), m = max(dot(d, normalize(moon)), 0.0);
        col += vec3(1.0, 0.9, 0.72) * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.22) * clear * uDay;
        col += vec3(0.85, 0.9, 1.0) * (smoothstep(0.9993, 0.9996, m) * 1.4 + pow(m, 30.0) * 0.05) * uNight * clear;
        if (d.y > 0.0) {
          vec2 sp = floor(d.xz / (d.y + 0.25) * 300.0);
          col += vec3(step(0.9975, h(sp)) * uNight * clear * smoothstep(0.05, 0.3, d.y) * 0.9);
          vec2 p = d.xz / (d.y + 0.08) * 1.4 + vec2(uTime * 0.004, uTime * 0.0015);
          float c = smoothstep(0.62 - 0.4 * uCloud, 0.86 - 0.3 * uCloud, fbm(p)) * smoothstep(0.02, 0.22, d.y);
          vec3 lit = mix(vec3(0.07, 0.08, 0.11), mix(vec3(1.0), vec3(0.62, 0.65, 0.7), uCloud), uDay);
          vec3 cloud = mix(lit * 0.78, lit, smoothstep(0.5, 0.9, fbm(p + 0.6)));
          col = mix(col, cloud, c * (0.75 + 0.2 * uCloud));
        }
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`}),e=new je(new Bt(5e3,32,16),i);return e.renderOrder=-1,e.frustumCulled=!1,e}function by(){let e=new Float32Array(21e3),t=new at;for(let s=0;s<7e3;s++)e.set([(Math.random()-.5)*60,Math.random()*30,(Math.random()-.5)*60],s*3);t.setAttribute("position",new dt(e,3).setUsage(xn));let n=new Hi(t,new ss({color:16054010,size:.09,transparent:!0,opacity:0,depthWrite:!1}));return n.frustumCulled=!1,n}function Ey(){let e=new Float32Array(54e3),t=new at;for(let s=0;s<9e3;s++){let r=(Math.random()-.5)*50,o=Math.random()*25,a=(Math.random()-.5)*50;e.set([r,o,a,r,o+1.1,a],s*6)}t.setAttribute("position",new dt(e,3).setUsage(xn));let n=new sa(t,new is({color:9279910,transparent:!0,opacity:0,depthWrite:!1}));return n.frustumCulled=!1,n}function Qf(i){let e=Sy(),t=Ey(),n=by(),s=new Js(15134714,6972748,2.1),r=new Qs(16773334,2.5);Object.assign(r.shadow.camera,{left:-140,right:140,top:140,bottom:-140,near:1,far:900}),r.shadow.bias=-4e-4,r.shadow.normalBias=.6,i.fog=new ea(14017002,6e-4),i.add(e,t,n,s,r,r.target);let o=new Date,a=o.getMonth(),l=[11,0,1].includes(a)?1:[10,2].includes(a)?.5:0,c={hour:o.getHours()+o.getMinutes()/60,day:Math.floor((o-o.getTimezoneOffset()*6e4)/864e5),speed:1/60,w:0,cloud:.2,rain:0,snow:0,fog:0,storm:0,cover:0,flash:0,wet:0,timer:150,queue:[],sunDir:new B,lightDir:new B,month:a,winter:l},h=(D,I)=>{let H=_y[Sh[D]].filter(U=>U==="snow"?Math.random()<l:U==="storm"?l<1:!0);(I%24+24)%24>3.5&&(I%24+24)%24<9.5||(H=H.filter(U=>U!=="fog"||Math.random()<.15)),H.length||(H=["cloudy"]);let L=H[Math.floor(Math.random()*H.length)];return L==="rain"&&Math.random()<l*.8&&(L="snow"),{w:Sh.indexOf(L),dur:120+Math.random()*240}},f=()=>{for(;c.queue.length<4;){let D=c.queue.length?c.queue[c.queue.length-1]:{w:c.w},I=c.hour+(c.timer+c.queue.reduce((H,N)=>H+N.dur,0))/60;c.queue.push(h(D.w,I))}},u=new Fe,p=new Fe,g=new Fe,v=new Fe,m=new Fe,d=kn(15134714),S=kn(2240586),x=D=>{c.w=(D+Gr.length)%Gr.length,c.timer=120+Math.random()*240,c.queue=[],f()},M=()=>{let D=c.queue.shift();c.w=D.w,c.timer=D.dur,f()};f();let P=6,C=[],T=0,b=(D,I,H)=>{pt.uTime.value=H,c.hour+=D*c.speed,c.hour>=24&&(c.hour-=24,c.day++),(c.timer-=D)<0&&M();let N=Gr[c.w],L=Math.min(1,D*.04);if(c.cloud+=(N.cloud-c.cloud)*L,c.rain+=(N.rain*(c.cloud>.85?1:0)-c.rain)*L*1.5,c.snow+=((N.snow||0)*(c.cloud>.8?1:0)-c.snow)*L*1.5,c.fog+=((N.fog||0)-c.fog)*L,c.storm+=((N.storm||0)-c.storm)*L*2,c.wet+=(Math.min(1,c.rain)-c.wet)*Math.min(1,D*(c.rain>c.wet?.05:.008)),c.cover=Math.min(1,Math.max(0,c.cover+(c.snow>.3?D*.006*c.snow:-D*(l?.0015:.006)))),c.flash=Math.max(0,c.flash-D*6),c.storm>.5&&(P-=D)<0){P=4+Math.random()*12,c.flash=1;let ee=.4+Math.random()*3.5;C.push({t:ee/.343,p:Math.max(.25,1-ee/4.5)}),setTimeout(()=>c.flash=Math.max(c.flash,.8),90)}C=C.filter(ee=>(ee.t-=D)>0?!0:(w.onThunder?.(ee.p),!1));let U=_i.degToRad(52)*Math.sin(Math.PI*(c.hour-6)/12),k=Math.PI/2*((12-c.hour)/6);c.sunDir.set(Math.cos(U)*Math.sin(k),Math.sin(U),Math.cos(U)*Math.cos(k));let W=c.sunDir.y,Y=_i.smoothstep(W,-.12,.2),le=1-Y,J=Math.max(0,1-Math.abs(W-.02)/.22),V=W>-.02;c.lightDir.copy(c.sunDir).multiplyScalar(V?1:-1),c.lightDir.y<.15&&(c.lightDir.y=.15),c.lightDir.normalize(),u.copy(Vi.night[0]).lerp(Vi.day[0],Y),p.copy(Vi.night[1]).lerp(Vi.day[1],Y),u.lerp(Vi.dusk[0],J*.6),p.lerp(Vi.dusk[1],J*.75),g.copy(Vi.overcast[0]).multiplyScalar(.15+.85*Y),v.copy(Vi.overcast[1]).multiplyScalar(.12+.88*Y),u.lerp(g,c.cloud*.85),p.lerp(v,c.cloud*.7),g.setRGB(.72,.74,.76).multiplyScalar(.12+.88*Y),p.lerp(g,c.fog*.9),u.lerp(g,c.fog*.6),c.storm>.1&&(u.multiplyScalar(1-.35*c.storm),p.multiplyScalar(1-.3*c.storm)),c.flash>0&&(g.setRGB(.85,.88,1),u.lerp(g,c.flash*.7),p.lerp(g,c.flash*.6));let Z=e.material.uniforms;Z.top.value.copy(u),Z.horizon.value.copy(p),Z.sun.value.copy(c.sunDir),Z.moon.value.copy(c.sunDir).negate(),Z.uCloud.value=c.cloud,Z.uDay.value=Y,i.fog.color.copy(p),pt.uSky.value.copy(p),i.fog.density=55e-5+c.cloud*5e-4+c.rain*.0016+c.snow*.0022+c.fog*.011,m.setHex(16757626).lerp(kn(16773334),_i.smoothstep(W,0,.35)),r.color.copy(V?m:kn(10466528)),r.intensity=V?3.6*_i.smoothstep(W,-.02,.12)*(1-.72*c.cloud):.55*_i.smoothstep(-W,.02,.15)*(1-.8*c.cloud),r.intensity*=1-.65*c.fog-.3*c.storm,s.intensity=(.5+.9*Y)*(1-.25*c.cloud)*(1-.2*c.storm)+c.flash*3.5,s.color.copy(S).lerp(d,Y),e.position.copy(I),pt.uNight.value=_i.smoothstep(-W,-.06,.1);let ce=c.hour;if(pt.uLit.value=ce>17||ce<6?ce>17&&ce<23?.45:.12:.2,pt.uWet.value=c.wet,pt.uSnow.value=c.cover,pt.uWind.value=.25+.5*c.cloud+.4*Math.min(1,c.rain)+.6*c.storm-.4*c.fog+Math.sin(H*.7)*Math.sin(H*.23+1)*.25,t.material.opacity=.6*c.rain,t.visible=c.rain>.02,t.visible){let ee=t.geometry.attributes.position.array,q=11*D,Me=pt.uWind.value*.5;T=Math.round(9e3*Math.min(1,c.rain*1.2)),t.material.opacity=Math.min(.75,.6*c.rain);for(let ve=0;ve<9e3;ve++){let ne=ve*6,j=ee[ne+1]-q,ie=j>I.y+40||j<I.y-40||Math.abs(ee[ne]-I.x)>40||Math.abs(ee[ne+2]-I.z)>40;(j<I.y-4||ie||ve>=T)&&(ee[ne]=I.x+(Math.random()-.5)*50,ee[ne+2]=I.z+(Math.random()-.5)*50,j=ve>=T?-1e4:ie?I.y-4+Math.random()*28:I.y+18+Math.random()*6),ee[ne+1]=j,ee[ne+3]=ee[ne]+Me*.3,ee[ne+4]=j+1.1,ee[ne+5]=ee[ne+2]}t.geometry.attributes.position.needsUpdate=!0}if(n.material.opacity=Math.min(.9,c.snow*1.1),n.visible=c.snow>.02,n.visible){let ee=n.geometry.attributes.position.array,q=Math.round(7e3*Math.min(1,c.snow*1.2)),Me=pt.uWind.value;for(let ve=0;ve<7e3;ve++){let ne=ve*3;if(ve>=q){ee[ne+1]=-1e4;continue}ee[ne]+=(Math.sin(H*.8+ve)*.4+Me*.6)*D,ee[ne+1]-=(.9+ve%7*.08)*D,ee[ne+2]+=Math.cos(H*.6+ve*1.3)*.3*D,(ee[ne+1]<I.y-6||Math.abs(ee[ne]-I.x)>30||Math.abs(ee[ne+2]-I.z)>30||ee[ne+1]>I.y+30)&&(ee[ne]=I.x+(Math.random()-.5)*60,ee[ne+2]=I.z+(Math.random()-.5)*60,ee[ne+1]=ee[ne+1]<-1e3||ee[ne+1]>I.y+30?I.y-6+Math.random()*30:I.y+18+Math.random()*8)}n.geometry.attributes.position.needsUpdate=!0}},_=()=>`${String(Math.floor(c.hour)).padStart(2,"0")}:${String(Math.floor(c.hour%1*60)).padStart(2,"0")}`,y=D=>`${String(Math.floor((D%24+24)%24)).padStart(2,"0")}:00`,w={sun:r,hemi:s,sky:e,update:b,st:c,clock:_,forecast:()=>{let D=c.hour+c.timer/60;return c.queue.slice(0,3).map(I=>{let H={at:y(Math.round(D)),name:Sh[I.w]};return D+=I.dur/60,H})},onThunder:null,weather:()=>Gr[c.w].name,nextWeather:()=>x(c.w+1),skipHour:()=>{c.hour+=1,c.hour>=24&&(c.hour-=24,c.day++)}};return w}function bn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new at,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=$f(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][u]);let g=$f(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function $f(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new dt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){let v=h.getComponent(u,g);a.setComponent(u+f,g,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var ed={asphalt:4,sett:1.6,pavers:1.2,gravel:2,water:5},bh={footway:3,pedestrian:3,steps:1,path:1.5,cycleway:1,living_street:2,residential:1.2,unclassified:1,service:.6,tertiary:.8,secondary:.5,track:.4},wy={primary:13.9,trunk:13.9,secondary:13.9,tertiary:12.5,residential:8.3,unclassified:8.3,living_street:5.5,service:5.5};function Eh(){return Sn(new fn({color:2836036,roughness:.05,metalness:.1,transparent:!0,opacity:.92,side:Mt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}))}function wh(i,e,t){let n=new Map,s=g=>n.get(g)||n.set(g,{pos:[],uv:[],idx:[]}).get(g),r=()=>{let g=[],v=new Map;return{list:g,node:(m,d,S)=>{let x=m.toFixed(1)+","+d.toFixed(1),M=v.get(x);return M==null&&(M=g.length,v.set(x,M),g.push({x:m,y:S,z:d,out:[]})),M}}},o=r(),a=r(),l=o.list,c=o.node;i.roads.forEach((g,v)=>{let m=qf[g.k],d=g.p.filter((N,L)=>!L||Math.hypot(N[0]-g.p[L-1][0],N[1]-g.p[L-1][1])>.05);if(d.length<2)return;let S=[0];for(let N=1;N<d.length;N++)S.push(S[N-1]+Math.hypot(d[N][0]-d[N-1][0],d[N][1]-d[N-1][1]));let x=S[S.length-1],M=g.k==="stream"?.12:.04+m.r*.012+v%4*.004,P=e(...d[0])+M,C=e(...d[d.length-1])+M,T=(N,L,U)=>g.br?P+(C-P)*U/x:e(N,L)+M,b=[];for(let N=0;N+1<d.length;N++){let L=Math.max(1,Math.ceil((S[N+1]-S[N])/3));for(let U=0;U<L;U++){let k=U/L;b.push([d[N][0]+(d[N+1][0]-d[N][0])*k,d[N][1]+(d[N+1][1]-d[N][1])*k,S[N]+(S[N+1]-S[N])*k])}}b.push([...d[d.length-1],x]);let _=g.s==="asphalt"&&m.m,y=_?"asphalt"+m.m:g.s,E=s(y),w=g.s==="water"?null:s("kerb"),D=g.w/2,I=E.pos.length/3,H=w?w.pos.length/3:0;if(b.forEach(([N,L,U],k)=>{let W=b[Math.max(0,k-1)],Y=b[Math.min(b.length-1,k+1)],le=Y[0]-W[0],J=Y[1]-W[1],V=Math.hypot(le,J)||1;le/=V,J/=V;let Z=-J,ce=le,ee=T(N,L,U);for(let q of[-1,1]){let Me=N+Z*D*q,ve=L+ce*D*q,ne=g.br?ee:Math.max(ee,e(Me,ve)+M*.6);E.pos.push(Me,ne,ve),E.uv.push(_||g.s==="rail"?(q+1)/2:(q+1)/2*(g.w/(ed[g.s]||4)),U/(_?9:g.s==="rail"?1.2:ed[g.s]||4)),w&&w.pos.push(Me,ne,ve,Me,g.br?ne-.9:e(Me,ve)-.15,ve)}if(k){let q=I+(k-1)*2;if(E.idx.push(q,q+1,q+2,q+1,q+3,q+2),w)for(let Me of[0,2]){let ve=H+(k-1)*4+Me;w.idx.push(ve,ve+4,ve+1,ve+1,ve+4,ve+5)}}}),m.d&&g.k!=="stream"&&g.k!=="rail"){let N=d.map((k,W)=>c(k[0],k[1],T(k[0],k[1],S[W]))),L=wy[g.k.replace("_link","")]||8.3,U=g.ow?0:Math.min(D*.5,1.8);for(let k=0;k+1<N.length;k++)l[N[k]].out.push({to:N[k+1],d:m.d,v:L,off:U}),g.ow||l[N[k+1]].out.push({to:N[k],d:m.d,v:L,off:U})}if(bh[g.k]){let N=d.map((U,k)=>a.node(U[0],U[1],T(U[0],U[1],S[k]))),L=g.w<=2.6?0:D-.55;for(let U=0;U+1<N.length;U++)a.list[N[U]].out.push({to:N[U+1],d:bh[g.k],off:L}),a.list[N[U+1]].out.push({to:N[U],d:bh[g.k],off:L})}});let h=Eh(),f=[],u=[],p=new ot({color:9341828,side:Mt});for(let[g,v]of n){if(!v.idx.length)continue;let m=new at;m.setAttribute("position",new et(v.pos,3)),v.uv.length&&m.setAttribute("uv",new et(v.uv,2)),m.setIndex(v.idx),m.computeVertexNormals();let d=g==="water"?h:g==="kerb"?p:Sn(ls(new fn({map:t[g],roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),.6));d!==h&&d!==p&&u.push(d);let S=new je(m,d);S.receiveShadow=!0,f.push(S)}for(let g of i.areas){if(g.s!=="water")continue;let v=Math.min(...g.r.map(([S,x])=>e(S,x)))+.1,m=Mn.triangulateShape(g.r.map(([S,x])=>new Re(S,x)),[]),d=new at;d.setAttribute("position",new et(g.r.flatMap(([S,x])=>[S,v,x]),3)),d.setIndex(m.flat()),d.computeVertexNormals(),f.push(new je(d,h))}return{meshes:f,graph:l,walk:a.list,wetMaterials:u}}function Th(i,e){let t=Bn(i.lamps,Int16Array),n=t.length/3,s=new Dt(.06,.09,6.6,6).translate(0,3.3,0),r=new rt(1.3,.08,.08).translate(.62,6.45,0),o=new zt(bn([s,r]),new ot({color:3751997}),n),a=new wt({color:5592911}),l=new zt(new rt(.55,.14,.26).translate(1.25,6.38,0),a,n),c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d"),f=h.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.5,"rgba(255,255,255,0.35)"),f.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=f,h.fillRect(0,0,64,64);let u=new wt({map:new Xt(c),color:16762746,transparent:!0,opacity:0,blending:Un,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),p=new zt(new _n(13,13).rotateX(-Math.PI/2),u,n),g=new Je,v=new Et,m=new B(0,1,0),d=new B(1,1,1),S=new B;for(let C=0;C<n;C++){let T=t[C*3]/10,b=t[C*3+1]/10,_=t[C*3+2]/1e3;g.compose(S.set(T,e(T,b)-.1,b),v.setFromAxisAngle(m,_),d),o.setMatrixAt(C,g),l.setMatrixAt(C,g);let y=T+Math.cos(_)*1.25,E=b-Math.sin(_)*1.25;p.setMatrixAt(C,g.compose(S.set(y,e(y,E)+.2,E),v.identity(),d))}o.castShadow=o.receiveShadow=!0;for(let C of[o,l,p])C.computeBoundingSphere();p.renderOrder=2;let x=new Fe(5592911),M=new Fe(16773576).multiplyScalar(2.5);return{meshes:[o,l,p],update:C=>{a.color.copy(x).lerp(M,C),u.opacity=C*.85,p.visible=C>.02}}}function td(i,e){let t=Yt(e),n=[],s=[],r=[],o=[],a=new B,l=new Et,c=new Cn;for(let f=0;f<i;f++){let u,p,g;do u=t()*2-1,p=t()*2-1,g=t()*2-1;while(u*u+p*p+g*g>1);let v=new B(u,p,g).multiplyScalar(.45),m=.55+t()*.25;l.setFromEuler(c.set(t()*6.3,t()*6.3,t()*6.3));let d=n.length/3;for(let[S,x,M,P]of[[-1,-1,0,0],[1,-1,1,0],[1,1,1,1],[-1,1,0,1]])a.set(S*m,x*m,0).applyQuaternion(l).add(v),n.push(a.x,a.y,a.z),a.normalize(),s.push(a.x,a.y,a.z),r.push(M,P);o.push(d,d+1,d+2,d,d+2,d+3)}let h=new at;return h.setAttribute("position",new et(n,3)),h.setAttribute("normal",new et(s,3)),h.setAttribute("uv",new et(r,2)),h.setIndex(o),h}function Ty(){let i=[[1,.5,.25],[.74,.45,.52],[.46,.42,.78]].map(([e,t,n])=>new Pn(e,t,8).translate(0,n,0));return bn(i).toNonIndexed()}function ba(i){let e=i.onBeforeCompile;return i.onBeforeCompile=(t,n)=>{e&&e(t,n),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
normal = normalize(vNormal);`)},i}function nd(i,e,t=200){let n=new Map;for(let s=0;s<i;s++){let[r,o]=e(s),a=Math.floor(r/t)+","+Math.floor(o/t);(n.get(a)||n.set(a,[]).get(a)).push(s)}return[...n.values()]}function Ah(i,e,t){let n=Bn(i.trees,Int16Array),s=n.length/6,r=i.hmin,o=w=>({x:n[w*6]/10,z:n[w*6+1]/10,g:r+n[w*6+2]/10,h:n[w*6+3]/10,r:n[w*6+4]/10,con:n[w*6+5]}),a=td(16,7),l=new Br(1,0),c=Ty(),h=new Dt(.6,1,1,5,1,!0).translate(0,.5,0),f=ir(ba(new ot({map:e,alphaTest:.45,side:Mt})),.07,1),u=ir(ba(new ot({map:t,alphaTest:.45,side:Mt})),.07,1),p=ir(new ot({flatShading:!0}),.05,1),g=ir(new ot({flatShading:!0}),.035,0),v=new ot({color:5588026}),m=new Date().getMonth(),d=[0,0,0,0,0,0,0,.05,.2,.55,.8,0][m],S=new Je,x=new Et,M=new B,P=new B,C=new B(0,1,0),T=new Fe,b=[];for(let w of nd(s,D=>[n[D*6]/10,n[D*6+1]/10])){let D=w.filter(Z=>!n[Z*6+5]),I=w.filter(Z=>n[Z*6+5]),H=Z=>Math.abs(Math.sin(Z*4.1414)*9631.7)%1<d,N=D.filter(Z=>!H(Z)),L=D.filter(H),U=new zt(a,f,Math.max(N.length,1)),k=new zt(a,u,Math.max(L.length,1)),W=new zt(l,p,Math.max(D.length,1)),Y=new zt(c,g,Math.max(I.length,1)),le=new zt(h,v,w.length);U.count=N.length,k.count=L.length,W.count=D.length,Y.count=I.length;let J=0,V=0;D.forEach((Z,ce)=>{let ee=o(Z),q=Math.abs(Math.sin(Z*12.9898)*43758.5453)%1,Me=Math.max(ee.h*.62,2.5),ve=H(Z);x.setFromAxisAngle(C,q*6.283),S.compose(P.set(ee.x,ee.g+ee.h-Me/2,ee.z),x,M.set(ee.r*(.85+q*.3),Me/2,ee.r)),W.setMatrixAt(ce,S),ve?(k.setMatrixAt(V,S),k.setColorAt(V++,T.setHSL(.08+q*.06,.3,.75+q*7%1*.2))):(U.setMatrixAt(J,S),U.setColorAt(J++,T.setHSL(.18+q*.12,.3+q*.2,.62+q*7%1*.22))),W.setColorAt(ce,ve?T.setHSL(.07+q*.06,.55,.32):T.setHSL(.23+q*.08,.4,.17+q*7%1*.07))}),I.forEach((Z,ce)=>{let ee=o(Z),q=Math.abs(Math.sin(Z*78.233)*43758.5453)%1;x.setFromAxisAngle(C,q*6.283),Y.setMatrixAt(ce,S.compose(P.set(ee.x,ee.g+ee.h*.12,ee.z),x,M.set(ee.r*.75,ee.h*.9,ee.r*.75))),Y.setColorAt(ce,T.setHSL(.31+q*.06,.32+q*.1,.13+q*.06))}),w.forEach((Z,ce)=>{let ee=o(Z),q=ee.con?ee.h*.85:Math.max(ee.h*.62,2.5),Me=Math.max(ee.h-q*.75,1),ve=.12+ee.h*.012;le.setMatrixAt(ce,S.compose(P.set(ee.x,ee.g-.3,ee.z),x.identity(),M.set(ve,Me+.3,ve)))});for(let Z of[U,k,W,Y,le])Z.computeBoundingSphere(),Z.receiveShadow=!0,Z.castShadow=Z!==W;b.push({near:U,nearA:k,far:W,cones:Y,trunks:le,center:le.boundingSphere.center.clone()})}let _=420,y=1500,E=w=>{for(let D of b){let I=D.center.distanceTo(w);D.near.visible=D.nearA.visible=D.trunks.visible=I<_,D.far.visible=I>=_&&I<y,D.cones.visible=I<y}};return{meshes:b.flatMap(w=>[w.near,w.nearA,w.far,w.cones,w.trunks]),update:E,count:s}}function Rh(i,e){let t=Bn(i.bushes,Int16Array),n=t.length/5,s=i.hmin,r=td(10,13),o=new Br(.7,0),a=ir(ba(new ot({map:e,alphaTest:.45,side:Mt})),.06,1),l=new ot({color:2372124,flatShading:!0}),c=new Je,h=new Et,f=new B,u=new B,p=new B(0,1,0),g=new Fe,v=[];for(let m of nd(n,d=>[t[d*5]/10,t[d*5+1]/10])){let d=new zt(r,a,m.length),S=new zt(o,l,m.length);m.forEach((x,M)=>{let P=t[x*5]/10,C=t[x*5+1]/10,T=s+t[x*5+2]/10,b=t[x*5+3]/10,_=t[x*5+4]/10,y=Math.abs(Math.sin(x*3.7)*9137.13)%1;h.setFromAxisAngle(p,y*6.283),c.compose(u.set(P,T+b*.45,C),h,f.set(_,b*.55,_*(.8+y*.4))),d.setMatrixAt(M,c),S.setMatrixAt(M,c),d.setColorAt(M,g.setHSL(.2+y*.1,.35,.55+y*.2))});for(let x of[d,S])x.computeBoundingSphere(),x.receiveShadow=!0,x.castShadow=x===d;v.push({a:d,b:S,center:d.boundingSphere.center.clone()})}return{meshes:v.flatMap(m=>[m.a,m.b]),update:m=>{for(let d of v)d.a.visible=d.b.visible=d.center.distanceTo(m)<520},count:n}}function id(i,e,t,n){let[s,r,o,a]=i.bounds,l=Math.round(o-s),c=Math.round(a-r),h=document.createElement("canvas");h.width=l,h.height=c;let f=h.getContext("2d",{willReadFrequently:!0});f.drawImage(e,0,0,l,c);let u=f.getImageData(0,0,l,c).data;f.drawImage(t,0,0,l,c);let p=f.getImageData(0,0,l,c).data,g=new Uint8Array(l*c);for(let W=0;W<g.length;W++){let Y=u[W*4],le=u[W*4+1],J=u[W*4+2],V=(2*le-Y-J)/(Y+le+J+1);g[W]=Math.max(0,Math.min(255,(V-.05)*1800))*(1-p[W*4]/255)*(1-p[W*4+2]/255)}let v=Yt(9),m=[],d=[];for(let W=0;W<9;W++){let Y=v()*6.3,le=v()*.22,J=Math.cos(Y)*le,V=Math.sin(Y)*le,Z=.22+v()*.3,ce=(v()-.5)*.25,ee=v()*6.3,q=.025;m.push(J-Math.cos(ee)*q,0,V-Math.sin(ee)*q,J+Math.cos(ee)*q,0,V+Math.sin(ee)*q,J+Math.cos(Y)*ce,Z,V+Math.sin(Y)*ce),d.push(.45,.45,.45,.45,.45,.45,1.1,1.1,1.1)}let S=new at;S.setAttribute("position",new et(m,3)),S.setAttribute("color",new et(d,3)),S.setAttribute("normal",new et(m.map((W,Y)=>Y%3===1?1:0),3));let x=new ot({vertexColors:!0,side:Mt});ba(x);let M=x.onBeforeCompile;x.onBeforeCompile=(W,Y)=>{M(W,Y),W.uniforms.uTime=pt.uTime,W.uniforms.uWind=pt.uWind,W.vertexShader=W.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float ph = uTime * (1.2 + uWind) + instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.23;
transformed.x += (sin(ph) * 0.6 + 0.5) * 0.16 * uWind * position.y;
transformed.z += cos(ph * 0.8) * 0.08 * uWind * position.y;`)};let P=15e3,C=34,T=new zt(S,x,P);T.receiveShadow=!0,T.frustumCulled=!1,T.count=0;let b=new Je,_=new Et,y=new B,E=new B,w=new B(0,1,0),D=new Fe,I=new Fe(7311162),H=(W,Y,le)=>{let J=Math.imul(W,374761393)+Math.imul(Y,668265263)+Math.imul(le,2246822519);return J=Math.imul(J^J>>>13,1274126177),((J^J>>>16)>>>0)/4294967296},N=1/0,L=1/0,U=(W,Y)=>{let le=0;for(let J=Math.floor(Y-C);J<=Y+C&&le<P;J++)for(let V=Math.floor(W-C);V<=W+C&&le<P;V++){let Z=Math.hypot(V+.5-W,J+.5-Y);if(Z>C)continue;let ce=Math.floor(V-s),ee=Math.floor(J-r);if(ce<0||ee<0||ce>=l||ee>=c)continue;let q=g[ee*l+ce]/255;for(let Me=0;Me<3&&le<P;Me++){if(H(V,J,Me)>q*.9)continue;let ve=V+H(J,V,Me+5),ne=J+H(V+3,J,Me+9),j=(.7+H(V,Me,J)*.6)*Math.min(1,(C-Z)/6);T.setMatrixAt(le,b.compose(E.set(ve,n(ve,ne),ne),_.setFromAxisAngle(w,H(Me,V,J)*6.3),y.set(j,j,j)));let ie=(ee*l+ce)*4;T.setColorAt(le,D.setRGB(u[ie]/255,u[ie+1]/255,u[ie+2]/255,Nt).lerp(I,.35).multiplyScalar(1.5)),le++}}T.count=le,T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0)};return{mesh:T,update:W=>{Math.hypot(W.x-N,W.z-L)>4&&(N=W.x,L=W.z,U(N,L))}}}var Ea=[15921903,15921903,1842464,1842464,10462120,10462120,6119782,2833756,9182236,3033651,7035461,13222576,2056075],bi=(i,e)=>{let t=new Fe(e),n=new Float32Array(i.attributes.position.count*3);for(let s=0;s<n.length;s+=3)n.set([t.r,t.g,t.b],s);return i.setAttribute("color",new dt(n,3)),i};function Wr(){let i=[[-2.17,.3],[2.1,.3],[2.18,.55],[2.06,.8],[.95,.92],[.2,1.42],[-1.35,1.44],[-2,1.05],[-2.17,.95]],e=new Ys(i.map(([h,f])=>new Re(h,f))),t=new Fr(e,{depth:1.76,bevelEnabled:!1}).translate(0,0,-.88),n=(h,f,u)=>[h[0]+(f[0]-h[0])*(u-h[1])/(f[1]-h[1]),u],s=[[.95,.92],n(i[4],i[5],1.37),n(i[7],i[6],1.39),[-2,1.05]],r=new Fr(new Ys(s.map(([h,f])=>new Re(h,f))),{depth:1.8,bevelEnabled:!1}).translate(0,0,-.9),o=[];for(let h of[1.32,-1.38])for(let f of[.79,-.79])o.push(new Dt(.32,.32,.22,12).rotateX(Math.PI/2).translate(h,.32,f));let a=[];for(let h of[.6,-.6])a.push(bi(new rt(.06,.12,.34).translate(2.15,.68,h),16184294)),a.push(bi(new rt(.06,.12,.3).translate(-2.18,.84,h),10687765));let l=h=>{let f=h.index?h.toNonIndexed():h;return f.deleteAttribute("uv"),f},c=bn([bi(r,1910060),...o.map(h=>bi(h.toNonIndexed(),1579034))].map(l));return t.deleteAttribute("uv"),{body:t,detail:c,lamps:bn(a.map(l))}}function Ay(){let i=s=>{let r=s.index?s.toNonIndexed():s;return r.deleteAttribute("uv"),r},e=new rt(11.8,2.55,2.5).translate(0,1.625,0);e.deleteAttribute("uv");let t=[bi(new rt(10.6,.95,2.54).translate(-.4,2,0),1910060),bi(new rt(.06,1.45,2.3).translate(5.92,1.95,0),1910060)];for(let s of[3.9,-3.3])for(let r of[1.12,-1.12])t.push(bi(new Dt(.5,.5,.3,14).rotateX(Math.PI/2).translate(s,.5,r),1579034));let n=[];for(let s of[.95,-.95])n.push(bi(new rt(.06,.16,.36).translate(5.92,.75,s),16184294)),n.push(bi(new rt(.06,.2,.3).translate(-5.92,.95,s),10687765));return{body:e,detail:bn(t.map(i)),lamps:bn(n.map(i))}}function Ry(i){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(20,32,2,40,32,70);n.addColorStop(0,"rgba(255,255,255,0.95)"),n.addColorStop(.6,"rgba(255,255,255,0.25)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,64);let s=new wt({map:new Xt(e),color:16773324,transparent:!0,opacity:0,blending:Un,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),r=new zt(new _n(11,4.2).rotateX(-Math.PI/2),s,i);r.frustumCulled=!1,r.renderOrder=2,r.instanceMatrix.setUsage(xn);let o=new Je,a=new Et,l=new B(0,1,0),c=new B(1,1,1),h=new B;return{mesh:r,place:(f,u,p,g,v)=>r.setMatrixAt(f,o.compose(h.set(u,p,g),a.setFromAxisAngle(l,v),c)),update:f=>{s.opacity=f*.5,r.visible=f>.02,r.instanceMatrix.needsUpdate=!0}}}function Ch(i,e){let t=new zt(i.body,Sn(ls(new fn({roughness:.35,metalness:.4}))),e),n=new zt(i.detail,Sn(new fn({vertexColors:!0,roughness:.15,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),e),s=new zt(i.lamps,new wt({vertexColors:!0}),e);for(let r of[t,n])r.castShadow=r.receiveShadow=!0;return[t,n,s]}function Ph(i,e,t){let n=Wr(),s=Bn(i.cars,Int16Array),r=s.length/3,o=new Je,a=new Et,l=new Et,c=new B,h=new B,f=new B(0,1,0),u=new B(0,0,1),p=new Fe,g=(L,U,k,W,Y,le,J,V)=>{a.setFromAxisAngle(f,k).multiply(l.setFromAxisAngle(u,Y));let Z=le*.6180339%1;le<0?h.set(1,1,1):h.set(.92+Z*.18,.95+Z*7%1*.22,1),o.compose(c.set(L,W,U),a,h);for(let ce of J)ce.setMatrixAt(V,o)},v=Ch(n,r),m=[],d=new Float32Array(r*20),S=0,x=(L,U,k,W)=>{let Y=Math.cos(W),le=-Math.sin(W),J=Math.atan2(t(U+Y*1.8,k+le*1.8)-t(U-Y*1.8,k-le*1.8),3.6);g(U,k,W,t(U,k)-.02,J,L,v,L);let V=[[2.2,.9],[-2.2,.9],[-2.2,-.9],[2.2,-.9]].map(([ce,ee])=>[U+Y*ce+le*ee,k+le*ce-Y*ee]);for(let ce=0;ce<4;ce++)d.set([...V[ce],...V[(ce+1)%4],t(U,k)+1.5],S+L*20+ce*5);let Z=L*.6180339%1;m[L]={x:U,z:k,yaw:W,paint:Ea[L*7919%Ea.length],sx:.92+Z*.18,sy:.95+Z*7%1*.22}};for(let L=0;L<r;L++)x(L,s[L*3]/10,s[L*3+1]/10,s[L*3+2]/1e3),v[0].setColorAt(L,p.setHex(m[L].paint));for(let L of v)L.computeBoundingSphere();let M=new Je().makeScale(0,0,0),P={n:r,get:L=>m[L],hide:L=>{for(let U of v)U.setMatrixAt(L,M),U.instanceMatrix.needsUpdate=!0;for(let U=0;U<4;U++)d[S+L*20+U*5+4]=-1e4},place:(L,U,k,W)=>{x(L,U,k,W);for(let Y of v)Y.instanceMatrix.needsUpdate=!0,Y.computeBoundingSphere()},bind:(L,U)=>{L.set(d.subarray(0,r*20),U),d=L,S=U}},C=e.filter(L=>L.out.length),T=Math.min(48,Math.floor(C.length/10)),b=12345,_=()=>(b=b*1103515245+12345&2147483647)/2147483647,y=(L,U)=>{let k=e[L].out,W=k.filter(V=>V.to!==U),Y=W.length?W:k,le=Y.reduce((V,Z)=>V+Z.d,0),J=_()*le;for(let V of Y)if((J-=V.d)<=0)return V;return Y[Y.length-1]},E=[{n:T,meshes:Ch(n,T),paint:L=>Ea[L*104729%Ea.length],speed:1,half:2.2,width:.9,vary:!0},{n:C.length?2:0,meshes:Ch(Ay(),C.length?2:0),paint:L=>[15856108,14201900][L],speed:.72,half:5.9,width:1.25,vary:!1}],w=Ry(T+2);for(let L of E){L.agents=[];for(let U=0;U<L.n;U++){let k=e.indexOf(C[Math.floor(_()*C.length)]);L.agents.push({from:k,e:y(k,-1),t:_()*5,v:0,yaw:null}),L.meshes[0].setColorAt(U,p.setHex(L.paint(U)))}for(let U of L.meshes)U.frustumCulled=!1,U.instanceMatrix.setUsage(xn)}let D={meshes:[...v,...E.flatMap(L=>L.meshes),w.mesh],segs:Array.from(d),count:r,traffic:T+2,nearest:1/0,parked:P,agentPos:[]},I=E.flatMap(L=>L.agents.map(()=>[1e9,1e9,L.width,1,0,L.half-L.width,0]));D.agentPos=I;let H=(L,U,k)=>{let W=I[L],Y=I[U],le=Y[0]-W[0],J=Y[1]-W[1],V=le*W[3]+J*W[4];return V>0&&V<W[5]+W[2]+Y[5]+Y[2]+k&&Math.abs(J*W[3]-le*W[4])<W[2]+Y[2]&&Math.abs(W[6]-Y[6])<3},N=(L,U,k=0)=>{D.nearest=1/0;let W=0,Y=0;for(let le of E)le.agents.forEach((J,V)=>{let Z=e[J.from],ce=e[J.e.to],ee=ce.x-Z.x,q=ce.z-Z.z,Me=Math.hypot(ee,q)||.01,ve=Y===D.suspect,ne=Y===D.caught,j=!1;if(!(J.ghost>0)&&!ve)for(let ke=0;ke<I.length&&!j;ke++)ke!==Y&&H(Y,ke,2+J.v*.9)&&!(H(ke,Y,2)&&Y<ke)&&(j=!0);J.ghost=(J.ghost||0)-L,J.jam=j?(J.jam||0)+L:0,J.jam>8&&(J.jam=0,J.ghost=3);let ie=U.x-(Z.x+ee/Me*J.t),O=U.z-(Z.z+q/Me*J.t),xe=(ie*ee+O*q)/Me,K=Math.abs((O*ee-ie*q)/Me-J.e.off),te=xe>0&&xe<le.half+7&&K<1.6&&Math.abs(U.y-Z.y)<3,oe=D.siren,ue=I[Y],re=oe?(ue[0]-oe.x)*oe.fx+(ue[1]-oe.z)*oe.fz:0,A=!!oe&&!ve&&re>-3&&Math.hypot(ue[0]-oe.x,ue[1]-oe.z)<55;J.pull=(J.pull||0)+((A||ne?1:0)-(J.pull||0))*Math.min(1,L*1.2);let R=A?3.5:J.e.v*le.speed*(ve&&!ne?1.45:1);for(J.v=te||j||ne||A&&re<40?Math.max(0,J.v-9*L):J.v>R?Math.max(R,J.v-6*L):Math.min(R,J.v+2.6*le.speed*L),J.wait=te?(J.wait||0)+L:0,J.wait>2.5&&!J.honked&&!oe&&(J.honked=!0,D.honk=!0),te||(J.honked=!1),J.t+=J.v*L;J.t>=Me;){J.t-=Me;let ke=J.from;J.from=J.e.to,J.e=y(J.from,ke),J.e||(J.from=e.indexOf(C[Math.floor(_()*C.length)]),J.e=y(J.from,-1),J.t=0,J.yaw=null),Z=e[J.from],ce=e[J.e.to],ee=ce.x-Z.x,q=ce.z-Z.z,Me=Math.hypot(ee,q)||.01}let se=J.t/Me,he=ee/Me,fe=q/Me,pe=Math.atan2(-fe,he);J.yaw==null&&(J.yaw=pe);let Le=pe-J.yaw;Le=Math.atan2(Math.sin(Le),Math.cos(Le)),J.yaw+=Le*Math.min(1,L*(le.vary?6:3));let de=J.e.off+J.pull*1.7,Se=Z.x+ee*se-fe*de,We=Z.z+q*se+he*de,Te=Z.y+(ce.y-Z.y)*se;g(Se,We,J.yaw,Te-.04,Math.atan2(ce.y-Z.y,Me),le.vary?V:-1,le.meshes,V),w.place(W++,Se+Math.cos(J.yaw)*(le.half+5),Te+.1,We-Math.sin(J.yaw)*(le.half+5),J.yaw),D.nearest=Math.min(D.nearest,Math.hypot(U.x-Se,U.z-We,(U.y-Z.y)*2));let Ie=I[Y++];Ie[0]=Se,Ie[1]=We,Ie[3]=Math.cos(J.yaw),Ie[4]=-Math.sin(J.yaw),Ie[6]=Te});for(let le of E)for(let J of le.meshes)J.instanceMatrix.needsUpdate=!0;w.update(k)};return D.update=N,D}var sd=[2832981,7040885,10235695,4086330,12759695,15263456,1908258,14066993,5979486,9067068,4157327,11751274],rd=[2306381,2306381,1842207,4934994,9075292,3882826],od=[15845544,15053711,13802870,11762261,16044987],ad=[2300436,4862498,8018486,13215850,10132120,2958368],ld=["Jana","Petr","Marie","Ji\u0159\xED","Eva","Tom\xE1\u0161","Lenka","Martin","Hana","Pavel","V\u011Bra","Josef","Alena","Jan","Lucie","Karel","Zde\u0148ka","Michal","Ivana","Luk\xE1\u0161","Bo\u017Eena","Vladim\xEDr","Kate\u0159ina","Radek"],cd=["Ondra","Ani\u010Dka","Kuba","Terka","Mat\u011Bj","Eli\u0161ka","Vojta","Nat\xE1lka"],hd=[7031343,1973017,14272678,10906412,15328732];function Ei(i,e,t){let n=new zt(i,e,t);return n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n.instanceMatrix.setUsage(xn),n}function Ih(i,e,t,n=[],s=150,r=4){let[o,a]=e,l=650,c=i.map((J,V)=>V).filter(J=>i[J].out.length&&Math.hypot(i[J].x-o,i[J].z-a)<l),h=new ot,f=new ki(.17,.42,3,8).scale(.8,1,1.15).translate(0,1.18,0),u=new Bt(.115,10,8).translate(0,1.67,0),p=new Bt(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(-.012,1.685,0),g=new rt(.13,.84,.14).translate(0,-.42,0),v=new rt(.085,.6,.085).translate(0,-.3,0),m=new rt(.62,.26,.22).translate(0,.44,0),d=new rt(.24,.2,.17).translate(.38,.58,0),S=new rt(.07,.32,.07).translate(0,-.16,0),x=new Pn(.55,.28,8,1,!0).translate(0,2.08,0),M=777,P=()=>(M=M*1103515245+12345&2147483647)/2147483647,C=(J,V)=>{let Z=i[J].out,ce=Z.filter(Me=>Me.to!==V&&Math.hypot(i[Me.to].x-o,i[Me.to].z-a)<l),ee=ce.length?ce:Z.filter(Me=>Me.to===V).length?Z.filter(Me=>Me.to===V):Z,q=P()*ee.reduce((Me,ve)=>Me+ve.d,0);for(let Me of ee)if((q-=Me.d)<=0)return Me;return ee[ee.length-1]},T=[];for(let J=0;J<s&&c.length;J++){let V=c[Math.floor(P()*c.length)],Z=P()<.12;T.push({from:V,e:C(V,-1),t:P()*10,v:1.05+P()*.5,side:P()<.5?1:-1,jit:(P()-.5)*.5,s:Z?.62+P()*.12:.92+P()*.16,ph:P()*6.3,yaw:0,dog:!Z&&P()<.18})}for(let J=0;J<r;J++){let V=o+(P()-.5)*50,Z=a+(P()-.5)*50,ce=2+Math.floor(P()*2);for(let ee=0;ee<ce;ee++){let q=ee/ce*6.283+P()*.4;T.push({idle:!0,x:V+Math.cos(q)*.65,z:Z+Math.sin(q)*.65,yaw:Math.atan2(Math.sin(q),-Math.cos(q)),s:.92+P()*.16,ph:P()*6.3,dog:!1})}}n.forEach(([J,V,Z],ce)=>{P()<.6&&T.push({idle:!0,sit:!0,x:J+Math.cos(Z)*(P()-.5)*.9,z:V-Math.sin(Z)*(P()-.5)*.9,yaw:Math.atan2(-Math.cos(Z),Math.sin(Z)),s:.92+P()*.14,ph:P()*6.3,dog:!1})});let b=T.length,_=T.filter(J=>J.dog),y={torso:Ei(f,h,b),head:Ei(u,h,b),hair:Ei(p,h,b),legs:Ei(g,h,b*2),arms:Ei(v,h,b*2),dog:Ei(m,h,Math.max(1,_.length)),dogHead:Ei(d,h,Math.max(1,_.length)),dogLegs:Ei(S,h,Math.max(4,_.length*4)),umbrella:Ei(x,new ot({side:Mt}),b)};y.dog.count=y.dogHead.count=_.length,y.dogLegs.count=_.length*4;let E=new Fe;T.forEach((J,V)=>{let Z=sd[V*7%sd.length],ce=rd[(V*3+1)%rd.length];y.umbrella.setColorAt(V,E.setHex([1908258,8003371,2375787,3103546,7040885][V%5])),y.torso.setColorAt(V,E.setHex(Z)),y.head.setColorAt(V,E.setHex(od[V*5%od.length])),y.hair.setColorAt(V,E.setHex(ad[V*11%ad.length]));for(let ee of[0,1])y.legs.setColorAt(V*2+ee,E.setHex(ce)),y.arms.setColorAt(V*2+ee,E.setHex(Z))}),_.forEach((J,V)=>{let Z=hd[V%hd.length];y.dog.setColorAt(V,E.setHex(Z)),y.dogHead.setColorAt(V,E.setHex(Z));for(let ce=0;ce<4;ce++)y.dogLegs.setColorAt(V*4+ce,E.setHex(Z))});let w=new Je,D=new Je,I=new Je,H=new Et,N=new B(0,1,0),L=new B,U=new B,k=(J,V,Z,ce,ee,q)=>{D.makeTranslation(Z,ce,ee).multiply(I.makeRotationZ(q)),J.setMatrixAt(V,D.premultiply(w))},W=new Je().makeTranslation(0,-1e4,0),Y=(J,V,Z={night:0,rain:0})=>{let ce=0;le.dogDist=1/0;let ee=Math.round(b*(1-.75*Z.night)*(1-.45*Z.rain));T.forEach((q,Me)=>{if(q.vis=!1,Me>=ee||q.idle&&(Z.night>.5||Z.rain>.3)){for(let oe of[y.torso,y.head,y.hair,y.umbrella])oe.setMatrixAt(Me,W);for(let oe of[0,1])y.legs.setMatrixAt(Me*2+oe,W),y.arms.setMatrixAt(Me*2+oe,W);if(q.dog){y.dog.setMatrixAt(ce,W),y.dogHead.setMatrixAt(ce,W);for(let oe=0;oe<4;oe++)y.dogLegs.setMatrixAt(ce*4+oe,W);ce++}return}let ve,ne,j,ie=0;if(q.hitT=Math.max(0,(q.hitT||0)-J),q.panicT>0&&Number.isFinite(q.cx)){if(q.panicT=Math.max(0,q.panicT-J),ve=q.cx+q.panicX*4.5*J,ne=q.cz+q.panicZ*4.5*J,j=t(ve,ne),ie=1,q.yaw=Math.atan2(-q.panicZ,q.panicX),q.panicT===0){q.idle=!1,q.sit=!1,q.hold=null;let oe=-1,ue=1/0;i.forEach((re,A)=>{let R=Math.hypot(re.x-ve,re.z-ne);re.out.length&&R<ue&&(oe=A,ue=R)}),oe>=0&&(q.from=oe,q.e=C(oe,-1),q.t=0)}}else if(q.hold&&!q.idle)ve=q.cx,ne=q.cz,j=t(ve,ne);else if(q.idle)ve=q.x,ne=q.z,j=t(ve,ne)+(q.sit?.5-.86*q.s:0);else{let oe=i[q.from],ue=i[q.e.to],re=ue.x-oe.x,A=ue.z-oe.z,R=Math.hypot(re,A)||.01,se=oe.x+re/R*q.t,he=oe.z+A/R*q.t;for(Math.hypot(V.x-se,V.z-he)<1.1||(q.t+=q.v*J,ie=1);q.t>=R;){q.t-=R;let Ie=q.from;q.from=q.e.to,q.e=C(q.from,Ie),oe=i[q.from],ue=i[q.e.to],re=ue.x-oe.x,A=ue.z-oe.z,R=Math.hypot(re,A)||.01}let pe=q.t/R,Le=re/R,de=A/R,Se=q.e.off?q.e.off*q.side:q.jit,Te=Math.atan2(-de,Le)-q.yaw;Te=Math.atan2(Math.sin(Te),Math.cos(Te)),q.yaw+=Te*Math.min(1,J*5),ve=oe.x+re*pe-de*Se,ne=oe.z+A*pe+Le*Se,j=oe.y+(ue.y-oe.y)*pe}if(q.hold){let ue=Math.atan2(-(q.hold[1]-ne),q.hold[0]-ve)-q.yaw;ue=Math.atan2(Math.sin(ue),Math.cos(ue)),q.yaw+=ue*Math.min(1,J*6),ie=0}q.cx=ve,q.cz=ne,q.vis=!0,q.ph+=J*(ie?(q.panicT>0?4.5:q.v)*5.2/q.s:1.2);let O=ie?Math.sin(q.ph)*.5:0,xe=ie?Math.abs(Math.sin(q.ph))*.035:0;w.compose(L.set(ve,j+xe,ne),H.setFromAxisAngle(N,q.yaw+(q.idle?Math.sin(q.ph*.3)*.15:0)),U.setScalar(q.s)),y.torso.setMatrixAt(Me,w),y.head.setMatrixAt(Me,w),y.hair.setMatrixAt(Me,w),y.umbrella.setMatrixAt(Me,Z.rain>.25&&!q.idle&&q.s>.8?w:W);let K=q.sit?1.35:0;k(y.legs,Me*2,0,.86,.09,O+K),k(y.legs,Me*2+1,0,.86,-.09,-O+K);let te=q.idle&&!q.sit?Math.max(0,Math.sin(q.ph*.7))*.6:q.sit?.35:0;if(k(y.arms,Me*2,0,1.46,.245,-O*.8-te),k(y.arms,Me*2+1,0,1.46,-.245,O*.8),q.dog){let oe=Math.cos(q.yaw),ue=-Math.sin(q.yaw),re=ve+oe*.9-ue*.75,A=ne+ue*.9+oe*.75;w.compose(L.set(re,t(re,A)+(ie?Math.abs(Math.sin(q.ph*1.6))*.03:0),A),H.setFromAxisAngle(N,q.yaw),U.setScalar(1)),y.dog.setMatrixAt(ce,w),y.dogHead.setMatrixAt(ce,w),le.dogDist=Math.min(le.dogDist,Math.hypot(V.x-re,V.z-A));let R=ie?Math.sin(q.ph*1.6)*.6:0;[[.22,.08,R],[.22,-.08,-R],[-.22,.08,-R],[-.22,-.08,R]].forEach(([se,he,fe],pe)=>k(y.dogLegs,ce*4+pe,se,.33,he,fe)),ce++}});for(let q of Object.values(y))q.instanceMatrix.needsUpdate=!0};T.forEach((J,V)=>{J.name=J.s<.8?cd[V%cd.length]:ld[V*7%ld.length],J.kid=J.s<.8});let le={meshes:Object.values(y),humans:[y.torso,y.head,y.hair,y.legs,y.arms,y.umbrella],update:Y,count:b,dogs:_.length,dogDist:1/0,nearest:(J,V,Z)=>{let ce=-1,ee=Z;return T.forEach((q,Me)=>{if(!q.vis)return;let ve=Math.hypot(q.cx-J,q.cz-V);ve<ee&&(ee=ve,ce=Me)}),ce},person:J=>T[J],hold:(J,V)=>{T[J]&&(T[J].hold=V)},hit:(J,V,Z)=>{let ce=T[J];if(!ce||ce.kid||ce.hitT>0||!ce.vis)return!1;let ee=ce.cx-V,q=ce.cz-Z,Me=Math.hypot(ee,q)||1;return ce.panicX=ee/Me,ce.panicZ=q/Me,ce.panicT=4.5,ce.hitT=3,!0}};return Y(0,{x:1e9,z:1e9}),le}function Cy(){let i=new Pn(.07,.34,5).rotateZ(-Math.PI/2),e=new at;return e.setAttribute("position",new et([.08,0,.02,-.08,0,.02,-.02,0,.34],3)),e.setAttribute("normal",new et([0,1,0,0,1,0,0,1,0],3)),{body:i,wing:e}}function ud(i,e){let[t,n]=i,s=Cy(),r=4,o=14,a=22,l=r*o+a,c=new ot({side:Mt}),h=(E,w)=>{let D=new zt(E,c,w);return D.frustumCulled=!1,D.castShadow=!0,D.instanceMatrix.setUsage(xn),D},f=h(s.body,l),u=h(s.wing,l),p=h(s.wing,l),g=new Fe,v=4242,m=()=>(v=v*1103515245+12345&2147483647)/2147483647,d=[];for(let E=0;E<r;E++){let w=t+(m()-.5)*900,D=n+(m()-.5)*700,I=35+m()*45,H=60+m()*120,N=(.12+m()*.1)*(m()<.5?1:-1);for(let L=0;L<o;L++)d.push({kind:"flock",cx:w,cz:D,alt:I,R:H+(m()-.5)*30,a:m()*.6+L*.05,sp:N,dy:(m()-.5)*8,ph:m()*6,flap:9+m()*3,s:1.3})}let S=()=>{let E=m()*6.283,w=3+m()*26;return[t+Math.cos(E)*w,n+Math.sin(E)*w]};for(let E=0;E<a;E++){let[w,D]=S();d.push({kind:"pigeon",x:w,z:D,y:e(w,D),yaw:m()*6.3,state:"ground",t:0,ph:m()*6,s:1,vx:0,vy:0,vz:0,tx:w,tz:D})}d.forEach((E,w)=>{let D=E.kind==="pigeon"?g.setHSL(.62,.06,.42+m()*.12):g.setHex(1776414);f.setColorAt(w,D),u.setColorAt(w,D),p.setColorAt(w,D)});let x=new Je,M=new Je,P=new Et,C=new B(0,1,0),T=new B,b=new B,_=new Je().makeScale(1,1,-1),y=(E,w,D)=>{d.forEach((I,H)=>{let N,L,U,k,W=0;if(I.kind==="flock")I.a+=I.sp*E*60/I.R,N=I.cx+Math.cos(I.a)*I.R,U=I.cz+Math.sin(I.a)*I.R,L=Math.max(e(N,U)+15,I.alt+Math.sin(D*.3+I.ph)*6+I.dy),k=Math.atan2(-(Math.cos(I.a)*Math.sign(I.sp)),-Math.sin(I.a)*Math.sign(I.sp)),W=Math.sin(D*.5+I.ph)>.3?.15:Math.sin(D*I.flap+I.ph)*.9;else{let Y=Math.hypot(w.x-I.x,w.z-I.z);if(I.state==="ground"){if(I.t-=E,Y<5.5&&Math.abs(w.y-I.y)<3){I.state="fly",I.t=3+m()*3;let le=(I.x-w.x)/(Y||1),J=(I.z-w.z)/(Y||1);I.vx=le*6+(m()-.5)*3,I.vz=J*6+(m()-.5)*3,I.vy=4+m()*2}else if(I.t<0)I.t=1+m()*3,I.yaw+=(m()-.5)*2;else{let le=.25*E;I.x+=Math.cos(I.yaw)*le,I.z-=Math.sin(I.yaw)*le}I.y=e(I.x,I.z),W=-1.2}else if(I.state==="fly")I.t-=E,I.vy-=.8*E,I.x+=I.vx*E,I.y+=I.vy*E,I.z+=I.vz*E,W=Math.sin(D*22+I.ph)*1,I.t<0&&(I.state="land",[I.tx,I.tz]=S());else{let le=I.tx-I.x,J=I.tz-I.z,V=Math.hypot(le,J),Z=e(I.tx,I.tz),ce=Math.min(7,V*1.5+1);I.vx=le/(V||1)*ce,I.vz=J/(V||1)*ce,I.vy=(Z-I.y)*.8,I.x+=I.vx*E,I.y+=I.vy*E,I.z+=I.vz*E,W=Math.sin(D*16+I.ph)*.7,V<.4&&(I.state="ground",I.t=2)}N=I.x,L=I.y+.12,U=I.z,k=I.state==="ground"?I.yaw:Math.atan2(-I.vz,I.vx),I.state!=="ground"&&(I.yaw=k)}x.compose(T.set(N,L,U),P.setFromAxisAngle(C,k),b.setScalar(I.s)),I.kind==="pigeon"&&I.state==="ground"&&x.multiply(M.makeRotationZ(Math.max(0,Math.sin(D*3+I.ph))*-.5)),f.setMatrixAt(H,x),p.setMatrixAt(H,M.makeRotationX(-W).premultiply(x)),u.setMatrixAt(H,M.makeRotationX(-W).premultiply(_).premultiply(x))});for(let I of[f,u,p])I.instanceMatrix.needsUpdate=!0};return y(0,{x:1e9,y:0,z:1e9},0),{meshes:[f,u,p],update:y}}var Py={caf\u00E9:"#5b3b2b",restaurant:"#7a2a22",pub:"#4a2a1c",pharmacy:"#1f6b43",bank:"#1d3f73",hotel:"#26324f","post office":"#d2a823",police:"#1f3f7a","fire station":"#9b1d1d","town hall":"#3b3b3b",museum:"#4b2d55",florist:"#2f6a3a",grocery:"#3d6b2f",supermarket:"#7b1f24",optician:"#2a4d6e",newsagent:"#5a4a2a",chemist:"#6b3f7a","pet shop":"#7a5a1f",clothes:"#444b6e",toys:"#b4502b",household:"#556b2f",bikes:"#2b5d7a",hardware:"#5b4636",electrical:"#2f4f6f","fast food":"#9b3a1a",insurance:"#1d4f73",massage:"#4f7a6a",service:"#4a4f55",company:"#3a4048"};function Lh(i){let e=[],t=[];for(let n of i.places){let s=document.createElement("canvas"),r=s.getContext("2d"),o="600 76px 'IBM Plex Sans Condensed', 'Arial Narrow', Arial, sans-serif";r.font=o;let a=Math.ceil(r.measureText(n.n).width)+90;s.width=Math.min(2048,a),s.height=128;let l=Py[n.k]||"#2f3634",c=n.k==="post office";r.fillStyle=l,r.fillRect(0,0,s.width,s.height),r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=6,r.strokeRect(8,8,s.width-16,s.height-16),r.font=o,r.fillStyle=c?"#1f2a44":"#f6efdc",r.textBaseline="middle",r.textAlign="center",r.fillText(n.n,s.width/2,68,s.width-60);let h=new Xt(s);h.colorSpace=Nt,h.anisotropy=4;let f=new ot({map:h,emissive:16777215,emissiveMap:h,emissiveIntensity:0,polygonOffset:!0,polygonOffsetFactor:-2}),u=.62,p=new je(new _n(s.width/s.height*u,u),f);p.position.set(n.x,n.y,n.z),p.rotation.y=n.yaw,e.push(p),t.push(f)}return{meshes:e,update:n=>{for(let s of t)s.emissiveIntensity=n*.55}}}function wa(i){let t=new Float32Array(1440),n=new Float32Array(480),s=new at;for(let h=0;h<480;h++)n[h]=Math.random(),t[h*3+1]=-1e4;s.setAttribute("position",new dt(t,3).setUsage(xn)),s.setAttribute("aAge",new dt(n,1).setUsage(xn));let r=new yt({transparent:!0,depthWrite:!1,uniforms:{uAmount:{value:.6},uColor:{value:new Fe(13619151)},uScale:{value:600}},vertexShader:`attribute float aAge; uniform float uScale; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = mix(0.9, 5.0, aAge) * uScale / max(-mv.z, 1.0); vA = aAge; }`,fragmentShader:`uniform float uAmount; uniform vec3 uColor; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, d) * (1.0 - vA) * smoothstep(0.0, 0.1, vA) * 0.3 * uAmount; if (a < 0.004) discard; gl_FragColor = vec4(uColor, a);
        #include <colorspace_fragment>
      }`}),o=new Hi(s,r);o.frustumCulled=!1,o.renderOrder=3;let a=[],l=0;return{mesh:o,update:(h,f,u,p,g,v)=>{if((l-=h)<0&&(l=2,a=i.map(m=>[m,(m[0]-f.x)**2+(m[2]-f.z)**2]).filter(m=>m[1]<320*320).sort((m,d)=>m[1]-d[1]).slice(0,24).map(m=>m[0])),o.visible=a.length>0&&p>.02,!!o.visible){r.uniforms.uAmount.value=p,r.uniforms.uScale.value=v,r.uniforms.uColor.value.setScalar(.18+.62*g);for(let m=0;m<480;m++){n[m]+=h/7;let d=m*3;if(n[m]>=1){let x=a[m%a.length];n[m]=0,t[d]=x[0]+(Math.random()-.5)*.3,t[d+1]=x[1],t[d+2]=x[2]+(Math.random()-.5)*.3}let S=n[m]*7;t[d]+=(u*1.6+Math.sin(S*1.3+m)*.15)*h,t[d+1]+=(.6-n[m]*.25)*h,t[d+2]+=(u*.6+Math.cos(S+m)*.12)*h}s.attributes.position.needsUpdate=!0,s.attributes.aAge.needsUpdate=!0}},debug:()=>({active:a.length,pickT:l})}}var Dh=new ot({color:13616818}),Iy=new ot({color:13214778,emissive:2760197});function fd(i){return bn([new Dt(.16*i,.27*i,.95*i,8).translate(0,.475*i,0),new Bt(.19*i,8,6).scale(1,.7,1).translate(0,.98*i,0),new Bt(.12*i,8,6).translate(0,1.18*i,0)].map(e=>e.toNonIndexed()))}function Nh(i,e){let t=[],n=[],s=[],r=(u,p,g,v,m,d=0)=>{let S=new je(u,p);return S.position.set(g,v,m),S.rotation.y=d,S.castShadow=S.receiveShadow=!0,t.push(S),S},o=i.monument;if(o){let u=o.g-.1,p=[];[[3.2,.175],[2.7,.525],[2.2,.875]].forEach(([g,v])=>p.push(new Dt(g,g,.35,8).translate(0,v,0))),p.push(new rt(2.4,3.2,2.4).translate(0,2.65,0),new rt(2.8,.3,2.8).translate(0,4.4,0)),p.push(new Dt(.42,.5,8,12).translate(0,8.55,0),new rt(1.2,.5,1.2).translate(0,12.8,0)),p.push(new Bt(1,10,8).scale(1.1,.7,1.1).translate(0,13.6,0),fd(1.6).translate(0,13.9,0)),r(bn(p.map(g=>g.index?g.toNonIndexed():g)),Dh,o.x,u,o.z,Math.PI/8),r(new Zs(.42,.05,6,16),Iy,o.x,u+15.95,o.z);for(let[g,v]of o.statues){let m=g-o.x,d=v-o.z,S=Math.hypot(m,d)||1;m/=S,d/=S,r(bn([new rt(.5,.35,.5).translate(0,.175,0).toNonIndexed(),fd(1.05).translate(0,.35,0)]),Dh,o.x+m*1.55,u+4.55,o.z+d*1.55,Math.atan2(m,d))}for(let g=0;g<8;g++){let v=g/8*Math.PI*2+Math.PI/8,m=(g+1)/8*Math.PI*2+Math.PI/8;n.push(o.x+Math.cos(v)*3.2,o.z+Math.sin(v)*3.2,o.x+Math.cos(m)*3.2,o.z+Math.sin(m)*3.2,u+16)}}let a=Eh();for(let u of i.fountains){let p=u.reduce((T,b)=>[T[0]+b[0]/u.length,T[1]+b[1]/u.length],[0,0]),g=Math.min(...u.map(([T,b])=>e(T,b))),v=u.map(([T,b])=>{let _=T-p[0],y=b-p[1],E=Math.hypot(_,y)||1,w=Math.max(.2,(E-.35)/E);return[p[0]+_*w,p[1]+y*w]}),m=[],d=g+.55,S=g-.3;for(let T=0;T<u.length;T++){let b=u[T],_=u[(T+1)%u.length],y=v[T],E=v[(T+1)%u.length];m.push(b[0],S,b[1],_[0],S,_[1],_[0],d,_[1],b[0],S,b[1],_[0],d,_[1],b[0],d,b[1]),m.push(b[0],d,b[1],_[0],d,_[1],E[0],d,E[1],b[0],d,b[1],E[0],d,E[1],y[0],d,y[1]),m.push(y[0],d,y[1],E[0],d,E[1],E[0],S,E[1],y[0],d,y[1],E[0],S,E[1],y[0],S,y[1]),n.push(b[0],b[1],_[0],_[1],d)}let x=new at;x.setAttribute("position",new et(m,3)),x.computeVertexNormals();let M=r(x,Dh.clone(),0,0,0);M.material.side=Mt;let P=new at;P.setAttribute("position",new et(v.flatMap(([T,b])=>[T,d-.12,b]),3)),P.setIndex(Mn.triangulateShape(v.map(([T,b])=>new Re(T,b)),[]).flat()),P.computeVertexNormals(),t.push(new je(P,a));let C=r(new Dt(.05,.35,1.8,10,1,!0),new ot({color:15134964,transparent:!0,opacity:.45,depthWrite:!1,side:Mt}),p[0],d+.78,p[1]);C.castShadow=!1,C.userData.jet=!0}let l=bn([new rt(1.8,.06,.45).translate(0,.45,0),new rt(1.8,.42,.05).translate(0,.75,-.21),new rt(.06,.45,.42).translate(-.8,.22,0),new rt(.06,.45,.42).translate(.8,.22,0)].map(u=>u.toNonIndexed())),c=new ot({color:7031602}),h=i.benches.map(([u,p],g)=>[u,p,g*2.1]);if(o)for(let u=0;u<6;u++){let p=u/6*Math.PI*2+.3;h.push([o.x+Math.cos(p)*7.5,o.z+Math.sin(p)*7.5,Math.atan2(-Math.cos(p),-Math.sin(p))])}for(let[u,p,g]of h)r(l,c,u,e(u,p),p,g),s.push([u,p,g]);return{meshes:t,segs:n,seats:s,update:u=>{for(let p of t)p.userData.jet&&p.scale.set(1+Math.sin(u*9)*.05,1+Math.sin(u*13)*.06,1+Math.cos(u*9)*.05)}}}var Uh=(i,e)=>e[Math.floor(i()*e.length)%e.length],zh=(i,e,t)=>e+(t-e)*i(),Ly=[15260080,14279620,15786704,13622754,15126424,15921126,15188920,14672086];function dd(i,e,t){let n=i.e-i.g,s=i.y||0,r=i.u||0,o=i.k||0,a=i.f&&n/i.f>=2.5&&n/i.f<=4.4?i.f:Math.max(1,Math.round(n/(i.f&&n/i.f<2.5?2.9:3.1))),l;[4,41,43].includes(o)||r===6&&a>=4||!r&&a>=5?l="panel":e&&(!s||s<1920)&&a<=4?l="baroque":[1,12,13,16,17].includes(r)?l="industrial":[5,9,10,11,14,15,20].includes(r)?l="civic":[2,3,7,8].includes(r)?l=s>=1990?"newhouse":s>=1945?"house70":"oldhouse":l=s&&s<1945||a>=3?"classic":"house70";let c={panel:[3.6,3.6,.5,.62,.46,.5,[2,1,2],[0,0,1],()=>10|(t()<.7?16:0)],baroque:[2.9,3.4,.36,.44,.55,.6,[0,0,3,5],[0,5,2,1],()=>7],classic:[3,3.6,.38,.48,.52,.58,[0,4,0,5],[0,1,2,0],()=>(t()<.6?1:0)|2|(t()<.6?4:0)],oldhouse:[3.2,4.2,.3,.38,.42,.48,[4,0,4],[2,0,1,4],()=>34|(t()<.4?1:0)],house70:[3.4,4.4,.42,.55,.45,.5,[1,0,2],[1,0,0],()=>2|(t()<.5?32:0)],newhouse:[3.6,5,.4,.6,.45,.55,[1,1,5],[3,0,0,3],()=>32|(t()<.5?2:0)],civic:[3,4,.6,.75,.52,.58,[2,1],[3,0],()=>2|(t()<.4?4:0)],industrial:[4.5,6,.75,.85,.3,.36,[2],[3,0],()=>32]}[l],h={style:l,floors:a,storey:n/a,bay:zh(t,c[0],c[1]),winW:zh(t,c[2],c[3]),winH:zh(t,c[4],c[5]),type:Uh(t,c[6]),frame:Uh(t,c[7]),decor:c[8](),seed:Math.floor(t()*97)};return l==="panel"&&!i.wc&&(h.wall=Uh(t,Ly)),h}function pd(i){let e=new fn({map:i,vertexColors:!0,side:Mt,roughness:.92,metalness:0});return e.onBeforeCompile=t=>{Object.assign(t.uniforms,{uNight:pt.uNight,uLit:pt.uLit,uSky:pt.uSky}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 fw; attribute vec4 fs; attribute vec2 fd; varying vec4 vFw; varying vec4 vFs; varying vec2 vFd; varying vec2 vF;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFw = fw; vFs = fs; vFd = fd; vF = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight; uniform float uLit; uniform vec3 uSky; varying vec4 vFw; varying vec4 vFs; varying vec2 vFd; varying vec2 vF;
        float hsh(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        bool bit(float v, float b) { return mod(floor(v / b), 2.0) > 0.5; }
        vec3 frameCol(float i) { return i < 0.5 ? vec3(0.9, 0.9, 0.88) : i < 1.5 ? vec3(0.22, 0.14, 0.09) : i < 2.5 ? vec3(0.42, 0.26, 0.14) : i < 3.5 ? vec3(0.19, 0.2, 0.21) : i < 4.5 ? vec3(0.14, 0.24, 0.17) : vec3(0.84, 0.79, 0.66); }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 litC = vec3(0.0); float litA = 0.0, glassR = 0.0;
        vec2 aa = fwidth(vF); // derivatives outside the branch (undefined inside non-uniform flow)
        if (vFw.z > 0.5) {
          vec2 cell = floor(vF), f = fract(vF);
          vec4 S = floor(vFs + 0.5); vec2 dB = floor(vFd + 0.5); // integers again (interpolation adds tiny errors the hash would amplify)
          float seed = S.w, type = S.x, decor = S.z, floorsN = floor(vFw.w + 0.5), nb = floor(vFw.z + 0.5);
          float h1 = hsh(cell + seed), h2 = hsh(cell * 1.37 + seed + 5.1), h3 = hsh(cell.yx + seed * 0.7 + 9.3);
          bool attic = cell.y > floorsN - 0.5;
          bool show = cell.x >= 0.0 && cell.x < nb && cell.y >= 0.0 && cell.y < floorsN + 0.5;
          if (attic) show = show && abs(cell.x + 0.5 - nb * 0.5) < 0.6; // one window in the gable
          bool door = cell.y < 0.5 && (abs(cell.x - dB.x) < 0.5 || abs(cell.x - dB.y) < 0.5);
          show = show && !door && h3 > (bit(decor, 32.0) ? 0.22 : 0.04);
          bool balc = bit(decor, 16.0) && cell.y > 0.5 && !attic && mod(cell.x + seed, 3.0) < 1.0;
          float ww = vFw.x * 0.5, y0 = attic ? 0.12 : 0.32, y1 = attic ? 0.12 + vFw.y * 0.7 : 0.32 + vFw.y;
          if (balc) { y0 = 0.04; ww = max(ww, 0.3); }
          vec2 q = vec2(abs(f.x - 0.5) - ww, max(y0 - f.y, f.y - y1));
          float sp = y1 - ww * 1.1;
          if (type > 2.5 && type < 3.5 && !attic && f.y > sp) q.y = (length(vec2(f.x - 0.5, (f.y - sp) / 1.1)) - ww) * 1.1; // arched head
          float d = max(q.x, q.y), e = max(aa.x, aa.y) * 0.7;
          float inW = show ? 1.0 - smoothstep(-e, e, d) : 0.0;
          float band = show && bit(decor, 1.0) ? (1.0 - smoothstep(-e, e, d - 0.04)) - inW : 0.0;
          float sill = show && bit(decor, 2.0) && !balc ? step(abs(f.x - 0.5), ww + 0.035) * step(y0 - 0.04, f.y) * step(f.y, y0) : 0.0;
          float corn = bit(decor, 4.0) && cell.y > 0.5 && cell.y < floorsN + 0.5 ? 1.0 - smoothstep(0.0, 0.035 + aa.y, f.y) : 0.0;
          float joint = bit(decor, 8.0) ? max(1.0 - smoothstep(0.0, 0.01 + aa.y, f.y), 1.0 - smoothstep(0.0, 0.008 + aa.x, f.x)) : 0.0;
          float para = balc ? step(f.y, 0.37) * step(abs(f.x - 0.5), 0.47) : 0.0;
          // frame and glazing bars
          float lx = (f.x - 0.5) / ww, ly = (f.y - y0) / (y1 - y0), bw = 0.022, fx = aa.x + bw * 0.5;
          float bars = smoothstep(-bw - e, -bw + e, d); // the frame: a band just inside the opening
          float tr = type < 0.5 ? 0.68 : type > 3.5 && type < 4.5 ? 0.5 : type > 4.5 ? 0.76 : type > 2.5 ? (sp - y0) / (y1 - y0) : -1.0;
          if (type < 1.5 || (type > 2.5 && type < 4.5)) bars = max(bars, 1.0 - smoothstep(fx * 0.5, fx, abs(f.x - 0.5)));
          if (type > 1.5 && type < 2.5) bars = max(bars, 1.0 - smoothstep(fx * 0.5, fx, abs(abs(f.x - 0.5) - ww / 3.0)));
          if (tr > 0.0) bars = max(bars, 1.0 - smoothstep(fx * 0.5, fx, abs(f.y - (y0 + tr * (y1 - y0)))));
          // glass: sky reflection over a dark room, curtains, nets or blinds, different in every window
          vec3 room = vec3(0.05, 0.055, 0.06) + 0.05 * h2;
          vec3 glass = mix(room, uSky * 0.75 + 0.05, (0.2 + 0.45 * h2) * (0.4 + 0.6 * ly));
          float cur = h1 < 0.35 ? smoothstep(0.5, 0.75, abs(lx)) : h1 < 0.55 ? step(ly, 0.55) * 0.6 : 0.0;
          vec3 curC = mix(vec3(0.86, 0.82, 0.72), vec3(0.75, 0.55, 0.45), step(0.7, h3));
          glass = mix(glass, curC * (0.55 + 0.25 * h2), cur);
          if (h1 > 0.88) glass = mix(glass, vec3(0.72, 0.71, 0.67) * (0.9 + 0.1 * sin(ly * 70.0) * (1.0 - smoothstep(0.004, 0.012, aa.y))), step(1.0 - h2 * 0.8, ly)); // blinds half down
          vec3 fc = frameCol(S.y), wall = diffuseColor.rgb;
          vec3 col = mix(wall, wall * 0.8, corn);
          col = mix(col, wall * 0.62, joint * 0.7);
          col = mix(col, mix(wall, vec3(0.96, 0.95, 0.92), 0.55), band);
          col = mix(col, vec3(0.7, 0.69, 0.66), sill);
          col = mix(col, mix(wall, vec3(0.93), 0.45), para);
          col = mix(col, mix(glass, fc, bars), inW * (1.0 - para));
          // far away the pattern is below a pixel: show its average instead of shimmering
          float cov = vFw.x * vFw.y * (bit(decor, 32.0) ? 0.78 : 0.96);
          vec3 avg = mix(wall, mix(uSky * 0.4 + 0.04, fc, 0.25), cov);
          float far = smoothstep(0.08, 0.22, max(aa.x, aa.y));
          diffuseColor.rgb = mix(col, avg, far);
          glassR = inW * (1.0 - bars) * (1.0 - para) * (1.0 - far); // panes mirror the sky (sharp only up close)
          float lit = step(hsh(cell + seed * 3.1 + 17.0), uLit);
          litC = mix(vec3(1.0, 0.72, 0.4), vec3(0.82, 0.88, 1.0), step(0.86, h2)) * (0.8 + 0.6 * cur);
          litA = mix(inW * (1.0 - bars) * (1.0 - para) * lit, cov * uLit * 0.8, far);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.05, glassR);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += litC * litA * uNight * 1.25;`)},e}var md=[7031346,4862498,15263456,3948354,3099192,8008488,9068600,14275783];function Dy(){let i=document.createElement("canvas");i.width=128,i.height=256;let e=i.getContext("2d");e.fillStyle="#3a3633",e.fillRect(0,0,128,256),e.fillStyle="#e6e6e6",e.fillRect(10,10,108,246),e.fillStyle="#1c2329",e.fillRect(24,24,80,70),e.fillStyle="rgba(140,170,190,0.35)",e.fillRect(28,28,36,30),e.strokeStyle="rgba(0,0,0,0.28)",e.lineWidth=4,e.strokeRect(24,112,80,56),e.strokeRect(24,180,80,62),e.fillStyle="rgba(255,255,255,0.25)",e.fillRect(26,114,76,3),e.fillRect(26,182,76,3),e.fillStyle="#c9c4b8",e.fillRect(94,150,14,5),e.fillRect(99,150,4,14);let t=new Xt(i);return t.colorSpace=Nt,t.anisotropy=4,t}function Oh(i){let e=i.doors||[];if(!e.length)return{meshes:[]};let t=32,n=Math.ceil(e.length/t),s=document.createElement("canvas");s.width=t*64,s.height=n*40;let r=s.getContext("2d");r.textAlign="center",r.textBaseline="middle",e.forEach((d,S)=>{let x=S%t*64,M=Math.floor(S/t)*40;r.fillStyle="#b8232b",r.fillRect(x+1,M+1,62,38),r.strokeStyle="#f4f1ea",r.lineWidth=2,r.strokeRect(x+4,M+4,56,32),r.fillStyle="#f4f1ea",r.font=`700 ${String(d[3]).length>4?15:21}px 'IBM Plex Sans Condensed', Arial, sans-serif`,r.fillText(String(d[3]),x+32,M+21,52)});let o=new Xt(s);o.colorSpace=Nt,o.anisotropy=4;let a=[],l=[],c=[],h=[],f=[],u=new Fe,p=(d,S,x,M,P,C,T,b,_,y)=>{let E=Math.cos(P),w=-Math.sin(P),D=Math.sin(P),I=Math.cos(P),H=x+E*C+D*.01,N=M+w*C+I*.01,L=b/2,U=[H-E*L,T,N-w*L],k=[H+E*L,T,N+w*L],W=[H+E*L,T+_,N+w*L],Y=[H-E*L,T+_,N-w*L];d.push(...U,...k,...W,...U,...W,...Y);let[le,J,V,Z]=y;S.push(le,J,V,J,V,Z,le,J,V,Z,le,Z)};e.forEach(([d,S,x,,M],P)=>{p(a,l,d,S,x,0,M,1.1,2.2,[0,0,1,1]),u.setHex(md[P%md.length]);for(let y=0;y<6;y++)c.push(u.r,u.g,u.b);let C=P%t/t,T=1-Math.floor(P/t)/n,b=1/t,_=1/n;p(h,f,d,S,x,.95,M+1.75,.3,.19,[C,T-_,C+b,T])});let g=(d,S,x)=>{let M=new at;return M.setAttribute("position",new et(d,3)),M.setAttribute("uv",new et(S,2)),x&&M.setAttribute("color",new et(x,3)),M.computeVertexNormals(),M},v=new je(g(a,l,c),new ot({map:Dy(),vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1})),m=new je(g(h,f),new ot({map:o,polygonOffset:!0,polygonOffsetFactor:-2}));return v.receiveShadow=m.receiveShadow=!0,{meshes:[v,m]}}var Fh=2,gd=[15782778,15317386,14279620,15918786,15188920,13622754,16050902,15126424,14468832,15850664],Sd=[0,0,0,0,0,0,0,0,-9,-9],Hh=class{constructor(){this.p=[],this.n=[],this.c=[],this.u=[],this.x=[],this.cur=Sd}tri(e,t,n,s,r,o,a,l=a,c=a){let h=t[0]-e[0],f=t[1]-e[1],u=t[2]-e[2],p=n[0]-e[0],g=n[1]-e[1],v=n[2]-e[2],m=f*v-u*g,d=u*p-h*v,S=h*g-f*p,x=Math.hypot(m,d,S);if(!(x<1e-9)){m/=x,d/=x,S/=x,this.p.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]);for(let M=0;M<3;M++)this.n.push(m,d,S);for(let M of[a,l,c])this.c.push(M.r,M.g,M.b);this.u.push(s[0],s[1],r[0],r[1],o[0],o[1]);for(let M=0;M<3;M++)this.x.push(...this.cur)}}quad(e,t,n,s,r,o,a,l,c,h,f,u){this.tri(e,t,n,r,o,a,c,h,f),this.tri(e,n,s,r,a,l,c,f,u)}};function Ny(i,e,t,n,s,r,o,a,l,c,h,f){let u=s+.6,p=s+3.2,g=(m,d)=>d.clone().multiplyScalar(.66+.34*Math.min(1,Math.max(0,(m-s)/8))),v=l?l.storey:3;for(let m=0;m<t.length;m++){let d=t[m],S=t[(m+1)%t.length],x=Math.hypot(S[0]-d[0],S[1]-d[1]);if(x<.05)continue;let M=r(d),P=r(S),C=Math.min(u,M),T=Math.min(u,P),b=l&&x>2.2?Math.max(1,Math.round(x/l.bay)):0,_=b||x/8,y=I=>(I-s)/v,E=(I,H,N)=>[I,H,N];e.quad(E(d[0],n,d[1]),E(S[0],n,S[1]),E(S[0],T,S[1]),E(d[0],C,d[1]),[0,0],[x/4,0],[x/4,.15],[0,.15],g(n,a),g(n,a),g(T,a),g(C,a));let w=c&&M>p&&P>p&&c(d,S),D=w?p:u;if(w&&h.quad(E(d[0],u,d[1]),E(S[0],u,S[1]),E(S[0],p,S[1]),E(d[0],p,d[1]),[0,.19],[_,.19],[_,1],[0,1],g(u,o),g(u,o),g(p,o),g(p,o)),b){let I=[-9,-9],H=0;for(let N of f){let L=S[0]-d[0],U=S[1]-d[1],k=((N[0]-d[0])*L+(N[1]-d[1])*U)/(x*x);H<2&&k>0&&k<1&&Math.abs((N[0]-d[0])*U-(N[1]-d[1])*L)/x<.4&&(I[H++]=Math.floor(k*b))}i.cur=[l.winW,l.winH,b,l.floors,l.type,l.frame,l.decor,l.seed,I[0],I[1]]}(M>D||P>D)&&i.quad(E(d[0],D,d[1]),E(S[0],D,S[1]),E(S[0],P,S[1]),E(d[0],M,d[1]),[0,y(D)],[_,y(D)],[_,y(P)],[0,y(M)],g(D,o),g(D,o),g(P,o),g(M,o)),i.cur=Sd}}function xd(i,e){let t=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=e(s),a=e(r);if(t.push(s),o*a<0){let l=o/(o-a);t.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return t}var Bh=i=>i.map(([e,t])=>new Re(e,t));function vd(i,e){let t=["facade","plain","plinth","roof","shop"],n=Object.fromEntries(t.map(b=>[b,new Hh])),s=new Set(["town hall","police","fire station","museum","company","tourist information","hotel","petrol station","post office"]),r=(i.places||[]).filter(b=>!s.has(b.k)),o=(b,_)=>r.some(y=>{let E=_[0]-b[0],w=_[1]-b[1],D=E*E+w*w||1,I=((y.x-b[0])*E+(y.z-b[1])*w)/D;return I>0&&I<1&&Math.hypot(y.x-b[0]-I*E,y.z-b[1]-I*w)<.5}),a=i.doors||[],l=[],c=[],[h,f]=i.spawn,u=new Fe(8014909),p=new Fe(9144191);for(let b of i.buildings){let _=new Fe(b.w),y=new Fe(b.c),E=_.clone().lerp(p,.6).multiplyScalar(.8),[w,D,I,H,N]=b.o,L=b.t-b.e,U=Math.cos(I),k=Math.sin(I),W=-k,Y=U,le=ne=>(ne[0]-w)*W+(ne[1]-D)*Y,J=ne=>(ne[0]-w)*U+(ne[1]-D)*k,V=Yt(Math.round(w*31.7+D*117.3)),Z=b.win?dd(b,Math.hypot(w-h,D-f)<260,V):null;Z?.style==="baroque"&&!b.wc&&_.setHex(gd[Math.floor(V()*1e4)%gd.length]),Z?.wall&&_.setHex(Z.wall);let ce=a.filter(ne=>ne[0]>b.o[0]-80&&ne[0]<b.o[0]+80&&ne[1]>b.o[1]-80&&ne[1]<b.o[1]+80),ee=b.s==="g",q=ee?ne=>b.e+L*Math.max(0,1-Math.abs(le(ne))/H):()=>b.e;for(let ne of b.r){Ny(Z?n.facade:n.plain,n.plinth,ee?xd(ne,le):ne,b.b,b.g,q,_,E,Z,Z&&o,n.shop,ce);for(let j=0;j<ne.length;j++){let ie=ne[j],O=ne[(j+1)%ne.length];l.push(ie[0],ie[1],O[0],O[1],b.t)}}let Me=n.roof,ve=ne=>[J(ne)/Fh,Math.abs(le(ne))*Math.hypot(1,L/H)/Fh];if(ee){let ne=xd(b.r[0],le);for(let j of[1,-1]){let ie=ne.filter(xe=>le(xe)*j>=-1e-6);if(ie.length<3)continue;let O=xe=>[xe[0],q(xe),xe[1]];for(let[xe,K,te]of Mn.triangulateShape(Bh(ie),[]))Me.tri(O(ie[xe]),O(ie[K]),O(ie[te]),ve(ie[xe]),ve(ie[K]),ve(ie[te]),y)}}else if(b.s==="h"){let ne=(re,A,R)=>[w+U*re+W*A,R,D+k*re+Y*A],j=Math.max(N-H,0),ie=ne(N,H,b.e),O=ne(-N,H,b.e),xe=ne(-N,-H,b.e),K=ne(N,-H,b.e),te=ne(j,0,b.t),oe=ne(-j,0,b.t),ue=re=>ve([re[0],re[2]]);Me.quad(ie,O,oe,te,ue(ie),ue(O),ue(oe),ue(te),y,y,y,y),Me.quad(xe,K,te,oe,ue(xe),ue(K),ue(te),ue(oe),y,y,y,y),Me.tri(K,ie,te,ue(K),ue(ie),ue(te),y),Me.tri(O,xe,oe,ue(O),ue(xe),ue(oe),y)}else if(b.s==="p"){let ne=[w,b.t,D],j=b.r[0];for(let ie=0;ie<j.length;ie++){let O=j[ie],xe=j[(ie+1)%j.length];Me.tri([O[0],b.e,O[1]],[xe[0],b.e,xe[1]],ne,[0,0],[1,0],[.5,L/Fh],y)}}else{let ne=b.r.flat(),j=ie=>[ie[0]/6,ie[1]/6];for(let[ie,O,xe]of Mn.triangulateShape(Bh(b.r[0]),b.r.slice(1).map(Bh)))n.plain.tri([ne[ie][0],b.t,ne[ie][1]],[ne[O][0],b.t,ne[O][1]],[ne[xe][0],b.t,ne[xe][1]],j(ne[ie]),j(ne[O]),j(ne[xe]),y)}if((ee||b.s==="h")&&b.win&&N*H<160&&L>1){let ne=Math.abs(Math.sin(w*12.9898+D*78.233))%1,j=N*.35*(ne>.5?1:-1),ie=H*.25,O=b.e+L*.6,xe=b.t+.8,K=.28,te=(ue,re,A)=>[w+U*(j+ue)+W*(ie+re),A,D+k*(j+ue)+Y*(ie+re)],oe=[[-K,-K],[K,-K],[K,K],[-K,K]];for(let ue=0;ue<4;ue++){let[re,A]=oe[ue],[R,se]=oe[(ue+1)%4];n.plain.quad(te(re,A,O),te(R,se,O),te(R,se,xe),te(re,A,xe),[0,0],[.1,0],[.1,.2],[0,.2],u,u,u,u)}n.plain.quad(te(-K,-K,xe),te(K,-K,xe),te(K,K,xe),te(-K,K,xe),[0,0],[.1,0],[.1,.1],[0,.1],u,u,u,u),ne<.55&&c.push(te(0,0,xe+.1))}}let g=new at,v=t.map(b=>n[b]),m=(b,_)=>{let y=new Float32Array(v.reduce((w,D)=>w+D[b].length,0)),E=0;for(let w of v)y.set(w[b],E),E+=w[b].length;return new dt(y,_)};g.setAttribute("position",m("p",3)),g.setAttribute("normal",m("n",3)),g.setAttribute("color",m("c",3)),g.setAttribute("uv",m("u",2));let d=m("x",10).array,S=new Float32Array(d.length*.4),x=new Float32Array(d.length*.4),M=new Float32Array(d.length*.2);for(let b=0,_=d.length/10;b<_;b++)S.set(d.subarray(b*10,b*10+4),b*4),x.set(d.subarray(b*10+4,b*10+8),b*4),M.set(d.subarray(b*10+8,b*10+10),b*2);g.setAttribute("fw",new dt(S,4)),g.setAttribute("fs",new dt(x,4)),g.setAttribute("fd",new dt(M,2));let P=0;v.forEach((b,_)=>{g.addGroup(P,b.p.length/3,_),P+=b.p.length/3});let C=b=>new ot({map:b,vertexColors:!0,side:Mt}),T=new je(g,[Sn(pd(e.plaster)),C(e.plaster),ls(C(e.plaster)),ls(C(e.tiles)),Jf(C(e.shop))]);return T.castShadow=T.receiveShadow=!0,{mesh:T,segs:l,chimneys:c}}function yd(i){let[e,t,n,s]=i.bounds,r=document.createElement("canvas");r.width=Math.ceil((n-e)/2),r.height=Math.ceil((s-t)/2);let o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,r.width,r.height),o.scale(.5,.5),o.globalCompositeOperation="lighter",o.lineCap=o.lineJoin="round";let a=(l,c)=>{o.beginPath(),l.forEach(([h,f],u)=>o[u?"lineTo":"moveTo"](h-e,f-t)),c&&o.closePath()};o.fillStyle=o.strokeStyle="rgb(0,255,0)",o.lineWidth=36;for(let l of i.buildings)a(l.r[0],!0),o.fill(),o.stroke();for(let l of i.roads)o.strokeStyle=l.k==="stream"?"rgb(0,0,255)":"rgb(255,0,0)",o.lineWidth=l.w+(l.k==="stream"?1:.6),a(l.p,!1),o.stroke();for(let l of i.areas)o.fillStyle=l.s==="water"?"rgb(0,0,255)":"rgb(255,0,0)",a(l.r,!0),o.fill();o.fillStyle="rgb(255,0,0)";for(let l of i.buildings)a(l.r[0],!0),o.fill();return r}function Md(i,e,t,n,s,r=null){var H;let[o,a,l,c]=i.bounds,h=e.w*e.h,f=`${e.w}x${e.h}`,u=new Float32Array(h*3),p=new Float32Array(h*2),g=new Uint32Array((e.w-1)*(e.h-1)*6);for(let N=0,L=0;N<e.h;N++)for(let U=0;U<e.w;U++,L++){let k=e.x0+U*e.dx,W=e.z0+N*e.dz;u[L*3]=k,u[L*3+1]=e.data[L],u[L*3+2]=W,p[L*2]=(k-o)/(l-o),p[L*2+1]=(c-W)/(c-a)}for(let N=0,L=0;N<e.h-1;N++)for(let U=0;U<e.w-1;U++,L+=6){let k=N*e.w+U,W=k+1,Y=k+e.w,le=Y+1;g[L]=k,g[L+1]=Y,g[L+2]=W,g[L+3]=W,g[L+4]=Y,g[L+5]=le}r&&!r[f]&&(r[f]={idx:new dt(g,1),uv:new dt(p,2)});let v=new Float32Array(h*3),m=e.data;for(let N=0,L=0;N<e.h;N++)for(let U=0;U<e.w;U++,L++){let k=Math.max(U-1,0),W=Math.min(U+1,e.w-1),Y=Math.max(N-1,0),le=Math.min(N+1,e.h-1),J=(m[N*e.w+W]-m[N*e.w+k])/((W-k)*e.dx),V=(m[le*e.w+U]-m[Y*e.w+U])/((le-Y)*e.dz),Z=Math.hypot(J,1,V);v[L*3]=-J/Z,v[L*3+1]=1/Z,v[L*3+2]=-V/Z}let d=new at;d.setAttribute("position",new dt(u,3)),d.setAttribute("uv",r?r[f].uv:new dt(p,2)),d.setAttribute("normal",new dt(v,3)),d.setIndex(r?r[f].idx:new dt(g,1));let S=t,x=s.capabilities.maxTextureSize;if(t.width>x){let N=document.createElement("canvas"),L=x/t.width;N.width=x,N.height=Math.floor(t.height*L),N.getContext("2d").drawImage(t,0,0,N.width,N.height),S=N}let M=new Gt(S);M.colorSpace=Nt,M.anisotropy=s.capabilities.getMaxAnisotropy(),M.needsUpdate=!0,typeof ImageBitmap<"u"&&S instanceof ImageBitmap&&(M.flipY=!1);let P=new Xt(n);P.colorSpace=Nn;let C=(H=Mh).cached||(H.cached=Mh()),T=new ot({map:M});T.onBeforeCompile=N=>{N.uniforms.splatMap={value:P},N.uniforms.detailMap={value:C},N.uniforms.uWet=pt.uWet,N.uniforms.uSnow=pt.uSnow,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = position;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D splatMap; uniform sampler2D detailMap; uniform float uWet; uniform float uSnow; varying vec3 vWp;`).replace("#include <map_fragment>",`#include <map_fragment>
      vec3 photo = diffuseColor.rgb;
      vec3 tint = texture2D(map, vMapUv, 2.5).rgb;
      vec4 sp = texture2D(splatMap, vMapUv);
      vec3 sr = sqrt(tint);
      float exg = (2.0 * sr.g - sr.r - sr.b) / (sr.r + sr.g + sr.b + 0.001);
      float veg = smoothstep(0.02, 0.10, exg) * (1.0 - sp.r) * (1.0 - sp.b);
      vec4 dd = texture2D(detailMap, vWp.xz * 0.45) * 0.62 + texture2D(detailMap, vWp.xz * 0.093 + 0.37) * 0.38;
      float pat = mix(mix(mix(dd.g, dd.b, sp.g), dd.a, sp.r), dd.r, veg);
      // even out the photo's own shadows and stains (the scene casts real shadows): pull brightness toward each material's norm
      float lt = dot(tint, vec3(0.2126, 0.7152, 0.0722));
      float target = mix(mix(mix(0.2, 0.28, sp.g), 0.09, sp.r), 0.1, veg);
      vec3 ref = mix(mix(mix(vec3(0.21, 0.18, 0.13), vec3(0.29, 0.28, 0.26), sp.g), vec3(0.09, 0.09, 0.095), sp.r), vec3(0.075, 0.115, 0.04), veg);
      float baked = 1.0 - smoothstep(0.015, 0.11, lt); // deep photo shadows turn blue when brightened, so fade them to the material's colour
      tint = mix(mix(tint, tint * clamp(target / max(lt, 0.004), 0.5, 4.0), 0.85), ref, baked * 0.7);
      tint = mix(tint, vec3(dot(tint, vec3(0.2126, 0.7152, 0.0722))), 0.55 * (1.0 - veg)); // paving is grey; roof colours bleed past footprints in the photo
      float nearF = 1.0 - smoothstep(35.0, 260.0, length(vWp - cameraPosition));
      diffuseColor.rgb = mix(photo, tint * (0.35 + 1.3 * pat), nearF * 0.92);
      diffuseColor.rgb *= 1.0 - uWet * (0.28 * sp.r + 0.14 * (1.0 - veg)); // rain darkens paving more than grass
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.95) * (0.9 + 0.2 * pat), uSnow * (1.0 - sp.b) * (1.0 - 0.4 * sp.r)); // snow cover, slushy on paving`)};let b=new je(d,T);b.receiveShadow=!0,b.userData.textures=[M,P];let _=i.hmin-5,y=[],E=[];for(let N=0;N<e.w;N++)E.push([N,0]);for(let N=1;N<e.h;N++)E.push([e.w-1,N]);for(let N=e.w-2;N>=0;N--)E.push([N,e.h-1]);for(let N=e.h-2;N>0;N--)E.push([0,N]);for(let N=0;N<E.length;N++){let[L,U]=E[N],[k,W]=E[(N+1)%E.length],Y=[e.x0+L*e.dx,e.data[U*e.w+L],e.z0+U*e.dz],le=[e.x0+k*e.dx,e.data[W*e.w+k],e.z0+W*e.dz];y.push(...Y,Y[0],_,Y[2],...le,...le,Y[0],_,Y[2],le[0],_,le[2])}let w=new at;w.setAttribute("position",new dt(Float32Array.from(y),3)),w.computeVertexNormals();let D=new ot({color:5595455,side:Mt}),I=new je(new _n(3e4,3e4).rotateX(-Math.PI/2),D);return I.position.y=_,[b,new je(w,D),I]}function _d(i){let e=new Set(["castle","place_of_worship","museum","townhall","monastery","church","chapel","manor","ruins","attraction","viewpoint"]),t=new Set,n=[];for(let s of i.pois){if(!e.has(s.k)||t.has(s.n))continue;t.add(s.n);let r=document.createElement("canvas"),o=r.getContext("2d"),a="600 44px 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif";o.font=a;let l=Math.ceil(o.measureText(s.n).width)+40;r.width=l,r.height=72,o.font=a,o.fillStyle="rgba(20,24,22,0.72)",o.beginPath(),o.roundRect(0,0,l,72,10),o.fill(),o.fillStyle="#f3ead2",o.textBaseline="middle",o.fillText(s.n,20,38);let c=new Xt(r);c.colorSpace=Nt;let h=new qs(new ns({map:c,depthTest:!1,transparent:!0,fog:!1}));h.scale.set(l/72*2.6,2.6,1),h.position.set(s.p[0],s.p[2]+16,s.p[1]),h.renderOrder=10,n.push(h)}return n}var sr=["low","medium","high"];function Uy(i,e,t){let n=nr(),s=Bn(i.dm,Uint16Array),r=Float32Array.from(s,M=>i.hmin+M/10),o=Xf(r,i.w,i.h,i.ext,n),a=i.w*i.h,l=new Float32Array(a*3),c=new Float32Array(a*2),h=new Uint32Array((i.w-1)*(i.h-1)*6),f=n.x(i.photoExt.W),u=n.x(i.photoExt.E),p=n.z(i.photoExt.N),g=n.z(i.photoExt.S);for(let M=0;M<a;M++){let[P,C]=o.cell(M);l.set([P,r[M]-.6,C],M*3),c.set([(P-f)/(u-f),(g-C)/(g-p)],M*2)}for(let M=0,P=0;M<i.h-1;M++)for(let C=0;C<i.w-1;C++){let T=M*i.w+C;h.set([T,T+i.w,T+1,T+1,T+i.w,T+i.w+1],P),P+=6}let v=new at;v.setAttribute("position",new dt(l,3)),v.setAttribute("uv",new dt(c,2)),v.setIndex(new dt(h,1)),v.computeVertexNormals();let m=new Gt(e);m.colorSpace=Nt,m.anisotropy=t.capabilities.getMaxAnisotropy(),m.needsUpdate=!0;let d={value:Array.from({length:24},()=>new bt(1e9,1e9,-1e9,-1e9))},S=new ot({map:m});S.onBeforeCompile=M=>{M.uniforms.uHoles=d,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = position;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uHoles[24]; varying vec3 vWp;`).replace("void main() {",`void main() {
  for (int i = 0; i < 24; i++) { vec4 h = uHoles[i]; if (vWp.x > h.x && vWp.x < h.z && vWp.z > h.y && vWp.z < h.w) discard; }`)};let x=new je(v,S);return x.receiveShadow=!0,x.frustumCulled=!1,{mesh:x,at:o.at,setHoles:M=>d.value.forEach((P,C)=>M[C]?P.set(...M[C]):P.set(1e9,1e9,-1e9,-1e9))}}function bd(i,e,t,n=null){let s=new Bi,r=Bn(i.terrain.cm,Uint16Array),o={...i.terrain,data:Float32Array.from(r,j=>i.hmin+j/100)},a=[],l=i.bounds,c=(j,ie,O)=>ie>=j[0]&&ie<=j[2]&&O>=j[1]&&O<=j[3],h=null,f=(j,ie)=>{if(c(l,j,ie))return Sa(o,j,ie);for(let O of a)if(O.T&&c(O.b,j,ie))return Sa(O.T,j,ie);return h?h.at(j,ie):Sa(o,j,ie)},u=Qf(s),p=u.sun,g=yd(i),v=Md(i,o,e,g,t);n?(h=Uy(n.data,n.img,t),s.add(v[0],v[1],h.mesh)):s.add(...v);let m=jf(t),d=Kf(t),S=_h(t,[11,0,1,2].includes(new Date().getMonth())?"bare":!1),x=_h(t,!0),{mesh:M,segs:P,chimneys:C}=vd(i,m),T=wa(C);s.add(T.mesh);let b=wh(i,f,d),_=Th(i,f),y=Ah(i,S,x),E=Rh(i,S),w=id(i,e,g,f),D=Ph(i,b.graph,f),I=Nh(i,f);s.add(...I.meshes);let H=_d(i),N=Ih(b.walk,i.spawn,f,I.seats),L=ud(i.spawn,f),U=Lh(i),k=Oh(i);s.add(...N.meshes,...L.meshes,...U.meshes,...k.meshes),s.add(M,...b.meshes,..._.meshes,...y.meshes,...E.meshes,w.mesh,...D.meshes,...H);let W="medium",Y=j=>{W=j,t.setPixelRatio(Math.min(devicePixelRatio,j==="high"?2:j==="medium"?1.25:1)),p.castShadow=j!=="low";let ie=j==="high"?4096:2048;p.shadow.mapSize.x!==ie&&(p.shadow.map?.dispose(),p.shadow.map=null,p.shadow.mapSize.set(ie,ie)),w.mesh.visible=j!=="low"};Y(W);let le=Float32Array.from([...P,...D.segs,...I.segs]),J=le.length;D.parked.bind(le,P.length);let V=new Set([...Object.values(m),...Object.values(d),S,x].filter(j=>j?.isTexture)),Z=()=>{let j=new Float32Array(J+a.reduce((xe,K)=>xe+(K.segs?.length||0),0));j.set(le.subarray(0,J));let ie=J;for(let xe of a)xe.segs&&(j.set(xe.segs,ie),ie+=xe.segs.length);le=j,D.parked.bind(le,P.length),ne.segs=le,ne.segsVersion++;let O=J/5;ne.segParts=a.filter(xe=>xe.segs).map(xe=>{let K={arr:xe.segs,off:O};return O+=xe.segs.length/5,K})},ce=()=>h?.setHoles([l,...a.filter(j=>j.T).map(j=>j.b)]),ee={};function*q(j,ie,O,xe=O){let K={id:j,b:ie.bounds,img:O,city:ie,meshes:[],updates:[],live:[],chimneys:[],wet:[],agents:[]};a.push(K);let te=(...z)=>{for(let Q of z)Q.isInstancedMesh&&Q.instanceMatrix.count===0||(s.add(Q),K.meshes.push(Q))},oe=Bn(ie.terrain.cm,Uint16Array),ue={...ie.terrain,data:Float32Array.from(oe,z=>ie.hmin+z/100)},re=yd(ie);yield;let A=Md(ie,ue,xe,re,t,ee);A[0].userData.sharedGrid=!0,yield;for(let z of A[0].userData.textures)t.initTexture(z);yield,te(A[0],A[1]),K.T=ue,ce(),yield;let R={...ie,spawn:[1e9,1e9]},se=[],he=250;for(let z=0;z<ie.buildings.length;z+=he){let Q=vd({...R,buildings:ie.buildings.slice(z,z+he)},m);te(Q.mesh),se.push(...Q.segs);for(let $ of Q.chimneys)C.push($),K.chimneys.push($);yield}let fe=wh(ie,f,d);te(...fe.meshes);for(let z of fe.wetMaterials)b.wetMaterials.push(z),K.wet.push(z);yield;let pe=Th(ie,f);te(...pe.meshes),K.updates.push((z,Q,$,we)=>pe.update(we)),yield;let Le=Ah(ie,S,x);te(...Le.meshes),K.updates.push((z,Q)=>Le.update(Q)),yield;let de=Rh(ie,S);te(...de.meshes),K.updates.push((z,Q)=>de.update(Q)),yield;let Se=Nh(ie,f),We=Lh(ie),Te=Oh(ie),Ie=_d(ie);te(...Se.meshes,...We.meshes,...Te.meshes,...Ie),K.updates.push((z,Q,$,we,G)=>{We.update(we),Se.update(G);for(let _e of Ie)_e.visible=_e.position.distanceToSquared(Q)<380*380}),yield;let ke=Ph(ie,fe.graph,f),qe=Ih(fe.walk,ie.spawn,f,Se.seats,Math.min(150,Math.round(fe.walk.length/6)),0);te(...ke.meshes,...qe.meshes);for(let z of ke.agentPos)D.agentPos.push(z),K.agents.push(z);K.live.push((z,Q,$)=>{ke.update(z,Q,$),qe.update(z,Q,{night:$,rain:Math.min(1,u.st.rain+u.st.snow*.4)})}),K.segs=Float32Array.from([...se,...ke.segs,...Se.segs]),Z(),K.done=!0}let ne={scene:s,groundAt:f,segs:le,segsVersion:0,homeSegs:J,segParts:[],update:(j,ie,O,xe)=>{u.update(j,ie,xe);let K=280/p.shadow.mapSize.x;p.target.position.set(Math.round(ie.x/K)*K,ie.y,Math.round(ie.z/K)*K),p.position.copy(p.target.position).addScaledVector(u.st.lightDir,450);let te=pt.uWet.value,oe=pt.uNight.value;for(let A of b.wetMaterials)A.color.setScalar(1-.35*te),A.roughness=.9-.72*te;_.update(oe);let ue=u.st.hour,re=.35+.45*Math.max(Math.exp(-(((ue-7.5)/2)**2)),Math.exp(-(((ue-19)/2.5)**2)));T.update(j,ie,pt.uWind.value,re,1-oe,innerHeight*t.getPixelRatio()*.71),y.update(ie),E.update(ie),W!=="low"&&(w.mesh.visible=ie.y-f(ie.x,ie.z)<40&&pt.uSnow.value<.5,w.mesh.visible&&w.update(ie)),D.update(j,O,oe),N.update(j,O,{night:oe,rain:Math.min(1,u.st.rain+u.st.snow*.4)}),L.update(j,O,xe),U.update(oe),I.update(xe);for(let A of H)A.visible=A.position.distanceToSquared(ie)<380*380;for(let A of a)try{for(let R of A.updates)R(j,ie,O,oe,xe);if(A.done&&Math.max(A.b[0]-O.x,0,O.x-A.b[2])+Math.max(A.b[1]-O.z,0,O.z-A.b[3])<900)for(let R of A.live)R(j,O,oe)}catch(R){console.error(`map tile ${A.id} stopped moving:`,R),A.updates.length=A.live.length=0}},T:o,setQuality:Y,quality:()=>W,env:u,cars:D,people:N,chimneys:C,smoke:T,addTile:q,removeTile:j=>{let ie=a.findIndex(K=>K.id===j);if(ie<0)return;let[O]=a.splice(ie,1);for(let K of O.meshes)s.remove(K),K.traverse?.(te=>{te.userData.sharedGrid&&(te.geometry.setIndex(null),te.geometry.deleteAttribute("uv")),te.geometry?.dispose();for(let oe of[].concat(te.material||[])){for(let ue of["map","emissiveMap"])oe[ue]&&!V.has(oe[ue])&&oe[ue].dispose();oe.dispose()}for(let oe of te.userData.textures||[])oe.dispose()});let xe=(K,te)=>{for(let oe=K.length-1;oe>=0;oe--)te.includes(K[oe])&&K.splice(oe,1)};xe(C,O.chimneys),xe(b.wetMaterials,O.wet),xe(D.agentPos,O.agents),ce(),O.segs&&Z()},tiles:a,homeBounds:l,counts:{trees:y.count,bushes:E.count,cars:D.count,traffic:D.traffic,people:N.count,dogs:N.dogs,lamps:i.lamps?Bn(i.lamps,Int16Array).length/3:0}};return ce(),ne}function Ed(){let i=null,e,t,n,s,r,o,a=[],l=!1,c=0,h=()=>{if(i){i.state==="suspended"&&i.resume();return}let T=window.AudioContext||window.webkitAudioContext;if(!T)return;i=new T,e=i.createGain(),e.gain.value=l?0:.8,e.connect(i.destination);let b=i.createBuffer(1,i.sampleRate*2,i.sampleRate),_=b.getChannelData(0);for(let w=0;w<_.length;w++)_[w]=Math.random()*2-1;let y=()=>{let w=i.createBufferSource();return w.buffer=b,w.loop=!0,w.start(),w};n=i.createBiquadFilter(),n.type="bandpass",n.frequency.value=400,n.Q.value=.6,t=i.createGain(),t.gain.value=0,y().connect(n).connect(t).connect(e);let E=i.createBiquadFilter();E.type="highpass",E.frequency.value=1400,s=i.createGain(),s.gain.value=0,y().connect(E).connect(s).connect(e),o=i.createBiquadFilter(),o.type="lowpass",o.frequency.value=320,r=i.createGain(),r.gain.value=0,o.connect(r).connect(e),a=[55,83].map(w=>{let D=i.createOscillator();return D.type="sawtooth",D.frequency.value=w,D.connect(o),D.start(),D})},f=(T,b,_,y,E)=>{T.gain.setValueAtTime(1e-4,b),T.gain.exponentialRampToValueAtTime(_,b+y),T.gain.exponentialRampToValueAtTime(1e-4,b+y+E)},u=T=>{let b=i.currentTime,_=i.createBufferSource(),y=i.createBiquadFilter(),E=i.createGain();_.buffer=i.createBuffer(1,i.sampleRate*.08,i.sampleRate);let w=_.buffer.getChannelData(0);for(let D=0;D<w.length;D++)w[D]=(Math.random()*2-1)*(1-D/w.length);y.type="bandpass",y.frequency.value=T?700:1500+Math.random()*300,y.Q.value=1.2,f(E,b,T?.12:.18,.005,.07),_.connect(y).connect(E).connect(e),_.start(b)},p=T=>{if(!i)return;let b=i.currentTime;t.gain.setTargetAtTime(.025+T.wind*.11,b,.4),n.frequency.setTargetAtTime(280+T.wind*520,b,.6),s.gain.setTargetAtTime(T.rain*.22,b,.8);let _=T.drive!=null?1:Math.max(0,1-T.carDist/70);r.gain.setTargetAtTime(T.drive!=null?.05+T.drive*.05:_*_*.07,b,.2),o.frequency.setTargetAtTime(T.drive!=null?320+T.drive*700:320,b,.2),a.forEach((y,E)=>y.frequency.setTargetAtTime((E?83:55)*(T.drive!=null?.8+T.drive*1.6:1+_*.25),b,.3)),T.moving&&(c-=T.dt)<0&&(c=T.running?.32:.52,u(T.rain>.3))},g=()=>{if(!i)return;let T=i.currentTime;for(let b of[392,494]){let _=i.createOscillator(),y=i.createGain(),E=i.createBiquadFilter();_.type="square",_.frequency.value=b,E.type="lowpass",E.frequency.value=1800,y.gain.setValueAtTime(1e-4,T),y.gain.exponentialRampToValueAtTime(.05,T+.02),y.gain.setValueAtTime(.05,T+.35),y.gain.exponentialRampToValueAtTime(1e-4,T+.45),_.connect(E).connect(y).connect(e),_.start(T),_.stop(T+.5)}},v=()=>{if(!i)return;let T=i.currentTime,b=i.createOscillator(),_=i.createGain();b.frequency.setValueAtTime(90,T),b.frequency.exponentialRampToValueAtTime(40,T+.2),f(_,T,.25,.005,.25),b.connect(_).connect(e),b.start(T),b.stop(T+.3)},m=()=>{if(!i)return;let T=i.currentTime,b=.14,_=i.createBuffer(1,Math.floor(i.sampleRate*b),i.sampleRate),y=_.getChannelData(0);for(let I=0;I<y.length;I++)y[I]=(Math.random()*2-1)*(1-I/y.length);let E=i.createBufferSource(),w=i.createBiquadFilter(),D=i.createGain();E.buffer=_,w.type="lowpass",w.frequency.value=1500,f(D,T,.3,.002,b),E.connect(w).connect(D).connect(e),E.start(T),E.stop(T+b)},d=()=>{if(!i)return;let T=i.currentTime,b=.75,_=i.createBuffer(1,Math.floor(i.sampleRate*b),i.sampleRate),y=_.getChannelData(0),E=0;for(let H=0;H<y.length;H++)E=E*.94+(Math.random()*2-1)*.24,y[H]=E*(1-H/y.length);let w=i.createBufferSource(),D=i.createBiquadFilter(),I=i.createGain();w.buffer=_,D.type="lowpass",D.frequency.value=420,f(I,T,.65,.008,b),w.connect(D).connect(I).connect(e),w.start(T),w.stop(T+b)},S=T=>{if(!i)return;let b=i.currentTime,_=4,y=i.createBuffer(1,i.sampleRate*_,i.sampleRate),E=y.getChannelData(0),w=0;for(let N=0;N<E.length;N++)w=w*.985+(Math.random()*2-1)*.15,E[N]=w;let D=i.createBufferSource(),I=i.createBiquadFilter(),H=i.createGain();D.buffer=y,I.type="lowpass",I.frequency.value=160+T*220,H.gain.setValueAtTime(1e-4,b),H.gain.exponentialRampToValueAtTime(.5*T,b+.08+(1-T)*.5),H.gain.exponentialRampToValueAtTime(1e-4,b+_),D.connect(I).connect(H).connect(e),D.start(b)},x=()=>{if(i)for(let T of[0,.22]){let b=i.currentTime+T,_=i.createOscillator(),y=i.createGain(),E=i.createBiquadFilter();_.type="sawtooth",_.frequency.setValueAtTime(420,b),_.frequency.exponentialRampToValueAtTime(240,b+.12),E.type="bandpass",E.frequency.value=700,E.Q.value=2,f(y,b,.09,.01,.13),_.connect(E).connect(y).connect(e),_.start(b),_.stop(b+.2)}},M=null;return{start:h,update:p,toggle:()=>(l=!l,e&&(e.gain.value=l?0:.8),l),siren:T=>{if(!i||!!M===T)return;if(!T){let D=M;M=null,D.g.gain.setTargetAtTime(1e-4,i.currentTime,.08),setTimeout(()=>D.o.forEach(I=>I.stop()),500);return}let b=i.createOscillator(),_=i.createOscillator(),y=i.createGain(),E=i.createBiquadFilter(),w=i.createGain();b.type="sawtooth",b.frequency.value=900,_.type="triangle",_.frequency.value=.28,y.gain.value=380,_.connect(y).connect(b.frequency),E.type="lowpass",E.frequency.value=2200,w.gain.value=1e-4,w.gain.setTargetAtTime(.03,i.currentTime,.1),b.connect(E).connect(w).connect(e),b.start(),_.start(),M={o:[b,_],g:w}},horn:g,thud:v,gunshot:m,explosion:d,thunder:S,bark:x,muted:()=>l}}var hs={grocery:{open:[7,19],items:[["Rohl\xEDk",4],["Chl\xE9b",45],["Ml\xE9ko",25],["M\xE1slo",55]]},supermarket:{open:[7,21],items:[["Ban\xE1ny 1 kg",35],["K\xE1va",160],["Rohl\xEDky 10 ks",40],["Jablka 1 kg",40]]},pharmacy:{open:[8,17],items:[["N\xE1plasti",60],["Vitam\xEDn C",120],["Pastilky",90]]},optician:{open:[9,17],items:[["\u010Cistic\xED sprej",90],["Pouzdro na br\xFDle",150]]},florist:{open:[8,17],items:[["R\u016F\u017Ee",50],["Kytice",250],["Kv\u011Btin\xE1\u010D",120]]},newsagent:{open:[6,17],items:[["Noviny",30],["Pohled",15],["\u010Casopis",69]]},chemist:{open:[8,19],items:[["M\xFDdlo",35],["Zubn\xED pasta",50],["\u0160ampon",90]]},"pet shop":{open:[9,17],items:[["Granule 1 kg",150],["Pamlsky",45],["M\xED\u010Dek",60]]},clothes:{open:[9,18],items:[["Pono\u017Eky",99],["Tri\u010Dko",199],["\u010Cepice",149]]},toys:{open:[9,17],items:[["Pexeso",99],["Puzzle",250],["Stavebnice",399]]},household:{open:[8,17],items:[["Hrnek",89],["Ut\u011Brky",59],["Sv\xED\u010Dka",49]]},bikes:{open:[9,17],items:[["Du\u0161e",150],["Zvonek",120],["Sv\u011Btlo",290]]},hardware:{open:[7,17],items:[["\u0160roubky",30],["\u0160t\u011Btec",45],["Barva 0,75 l",260]]},electrical:{open:[8,16],items:[["\u017D\xE1rovka",80],["Baterie 4 ks",99],["Prodlu\u017Eova\u010Dka",220]]},caf\u00E9:{open:[8,19],items:[["Espresso",45],["Cappuccino",59],["V\u011Btrn\xEDk",45]]},restaurant:{open:[11,22],items:[["Pol\xE9vka",49],["Hlavn\xED j\xEDdlo",169],["Limon\xE1da",45]]},"fast food":{open:[10,22],items:[["Kebab",129],["Hranolky",49],["Ayran",35]]},pub:{open:[10,23],items:[["Pivo 0,5 l",52],["Kofola",35],["Utopenec",65]]},"post office":{open:[8,17],items:[["Zn\xE1mka",26],["Ob\xE1lka",5],["Bal\xEDk",140]]}};var cs=i=>`${i.toLocaleString("cs-CZ")} K\u010D`,wd=i=>`${i}:00`;function Td({city:i,toast:e,el:t,landmarks:n}){let s=i.places.filter(S=>hs[S.k]),r="fulnek3d.life.v1",o={money:500,bag:[],day:-1,tasks:[],stats:{spent:0,earned:0,done:0}};try{Object.assign(o,JSON.parse(localStorage.getItem(r)||"{}"))}catch{}let a=()=>{try{localStorage.setItem(r,JSON.stringify(o))}catch{}},l=null,c=!1,h=Math.random,f=S=>{o.day=S;let x=s.slice().sort(()=>h()-.5),M=[];for(let C of x.slice(0,2)){let T=hs[C.k].items[Math.floor(h()*hs[C.k].items.length)];M.push({type:"buy",shop:C.n,item:T[0],x:C.x,z:C.z,done:!1})}let P=n[Math.floor(h()*n.length)];P&&M.push({type:"visit",place:P.n,x:P.x,z:P.z,done:!1}),o.tasks=M.concat(o.tasks.filter(C=>C.type==="deliver"&&!C.done)),a(),e("New day","Your errands are in the list on the left")},u=()=>{let S=o.tasks.filter(x=>x.done).length;t.list.innerHTML="";for(let x of o.tasks){let M=document.createElement("li");M.textContent=x.type==="buy"?`Buy ${x.item} at ${x.shop}`:x.type==="deliver"?`${x.got?"Bring":"Buy"} ${x.item} ${x.got?"to":"at "+x.shop+" for"} ${x.from}, ${x.addr}`:`Visit ${x.place}`,x.done&&(M.className="done"),t.list.append(M)}t.money.textContent=`${cs(o.money)} \xB7 ${S}/${o.tasks.length} done`,l&&!c?(t.hint.hidden=!1,t.hint.textContent=`E \xB7 enter ${l.n}`):t.hint.hidden=!0},p=()=>{let S=o.tasks.filter(x=>x.type!=="deliver");S.length&&S.every(x=>x.done)&&!o.paid&&(o.money+=200,o.stats.earned+=200,o.paid=!0,a(),e("Errands done",`+${cs(200)} pocket money \xB7 new list tomorrow`))},g=S=>{let x=hs[l.k],M=S>=x.open[0]&&S<x.open[1];t.shop.innerHTML="";let P=document.createElement("h2");P.textContent=l.n;let C=document.createElement("p");C.textContent=`${l.k}${l.a?" \xB7 "+l.a:""} \xB7 open ${wd(x.open[0])}\u2013${wd(x.open[1])}`;let T=document.createElement("p");if(T.className="foot",T.textContent="Typical goods, game prices and hours \u2014 not this shop's real offer.",t.shop.append(P,C,T),M)x.items.forEach(([_,y],E)=>{let w=document.createElement("button");w.type="button",w.dataset.i=E;let D=document.createElement("kbd"),I=document.createElement("span"),H=document.createElement("span");D.textContent=E+1,I.textContent=_,H.textContent=cs(y),w.append(D,I,H),w.addEventListener("click",()=>v(E,S)),t.shop.append(w)});else{let _=document.createElement("p");_.className="closed",_.textContent="Zav\u0159eno \xB7 closed right now",t.shop.append(_)}let b=document.createElement("p");b.className="foot",b.textContent=`Wallet ${cs(o.money)} \xB7 E or Esc to leave`,t.shop.append(b)},v=(S,x)=>{let M=hs[l.k],P=M.items[S];if(!P||x<M.open[0]||x>=M.open[1])return;if(o.money<P[1]){e(l.n,"Not enough money");return}o.money-=P[1],o.stats.spent+=P[1],o.bag.push(P[0]);let C=o.tasks.find(b=>!b.done&&b.type==="buy"&&b.shop===l.n&&b.item===P[0]),T=o.tasks.find(b=>!b.done&&b.type==="deliver"&&!b.got&&b.shop===l.n&&b.item===P[0]);C?(C.done=!0,o.stats.done++,e("Errand done",`${P[0]} from ${l.n}`)):T?(T.got=!0,e(`For ${T.from}`,`Now bring it to ${T.addr}`)):e(l.n,`Bought ${P[0]} \xB7 ${cs(P[1])}`),a(),p(),g(x)};return{update:(S,x,M)=>{o.day!==M&&x>=6&&(o.paid=!1,f(M)),l=s.find(P=>Math.hypot(S.x-P.x,S.z-P.z)<7)||null,c&&!l&&(c=!1,t.shop.hidden=!0);for(let P of o.tasks)!P.done&&P.type==="visit"&&Math.hypot(S.x-P.x,S.z-P.z)<18&&(P.done=!0,o.stats.done++,e("Errand done",`Visited ${P.place}`),a(),p());for(let P of o.tasks)if(!P.done&&P.type==="deliver"&&P.got&&Math.hypot(S.x-P.x,S.z-P.z)<4){let C=o.bag.indexOf(P.item);C>=0&&o.bag.splice(C,1),P.done=!0,o.money+=P.pay,o.stats.earned+=P.pay,o.stats.done++,e(`${P.from} says thanks`,`+${cs(P.pay)} for the ${P.item}`),a()}u()},key:(S,x)=>{if(c){if(S==="KeyE"||S==="Escape")return c=!1,t.shop.hidden=!0,!0;let M={Digit1:0,Digit2:1,Digit3:2,Digit4:3}[S];return M!=null?(v(M,x),!0):!1}return S==="KeyE"&&l?(c=!0,t.shop.hidden=!1,g(x),!0):!1},isOpen:()=>c,near:()=>l,shops:s,kc:cs,tasks:()=>o.tasks,money:()=>o.money,bag:()=>o.bag,stats:()=>o.stats,resetStats:()=>{let S=o.stats;return o.stats={spent:0,earned:0,done:0},a(),S},add:S=>{o.tasks.push(S),a(),u()},earn:S=>{o.money+=S,o.stats.earned+=S,o.stats.done++,a(),u()},fine:S=>{let x=Math.min(o.money,Math.max(0,S));return o.money-=x,o.stats.spent+=x,a(),u(),x}}}var Ad=new B(0,1,0);function zy(){let i=[],e=(t,n,s=.022)=>{let r=new B(...t),o=new B(...n).sub(r),a=o.length();i.push(new Dt(s,s,a,6).translate(0,a/2,0).applyQuaternion(new Et().setFromUnitVectors(Ad,o.normalize())).translate(...t))};for(let t of[.52,-.52])i.push(new Zs(.33,.025,6,20).translate(t,.34,0));return e([-.52,.34,0],[-.05,.36,0]),e([-.05,.36,0],[-.15,.82,0]),e([-.15,.82,0],[.38,.8,0]),e([-.05,.36,0],[.4,.74,0]),e([.52,.34,0],[.4,.95,0]),e([-.52,.34,0],[-.15,.82,0]),e([.4,.98,-.28],[.4,.98,.28],.018),i.push(new rt(.24,.05,.12).translate(-.17,.88,0)),i.reduce((t,n)=>{let s=n.index?n.toNonIndexed():n;return s.deleteAttribute("uv"),t.push(s),t},[])}function Rd({world:i,city:e,groundAt:t,camera:n,scene:s,audio:r,fleet:o=[]}){let a=i.cars,l=a.parked,c=Wr(),h=Sn(new fn({roughness:.35,metalness:.4})),f=new Ft;f.add(new je(c.body,h),new je(c.detail,Sn(new fn({vertexColors:!0,roughness:.15,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1}))),new je(c.lamps,new wt({vertexColors:!0}))),f.children.forEach(L=>L.castShadow=L.receiveShadow=!0),f.visible=!1,s.add(f);let u=new je(new _n(12,5).rotateX(-Math.PI/2),new wt({color:16773324,transparent:!0,opacity:0,blending:Un,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));{let L=document.createElement("canvas");L.width=128,L.height=64;let U=L.getContext("2d"),k=U.createRadialGradient(16,32,2,40,32,72);k.addColorStop(0,"rgba(255,255,255,0.95)"),k.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=k,U.fillRect(0,0,128,64),u.material.map=new Xt(L)}u.visible=!1,s.add(u);let p=new ot({color:2841978}),g=zy(),v=[],m=(L,U)=>{let k=e.places.find(V=>V.n===L);if(!k)return;let W=Math.sin(k.yaw),Y=Math.cos(k.yaw),le=Math.cos(k.yaw),J=-Math.sin(k.yaw);for(let V=0;V<U;V++){let Z=k.x+W*1.6+le*(V-(U-1)/2)*.8,ce=k.z+Y*1.6+J*(V-(U-1)/2)*.8;d(Z,ce,k.yaw,V)}},d=(L,U,k,W)=>{let Y=new Ft;g.forEach(le=>Y.add(new je(le,W%2?p:new ot({color:[9182236,3033651,1842464][W%3]})))),Y.position.set(L,t(L,U),U),Y.rotation.y=k,Y.rotation.z=0,Y.children.forEach(le=>le.castShadow=!0),s.add(Y),v.push(Y)};m("Cyklo Ko\u0161\xE1rek",3),m("Informa\u010Dn\xED centrum Fulnek",2),m("Penny",2),m("Hotel Amos",2);let S=new Ft;S.add(new je(new Dt(.014,.014,.58,8).rotateZ(Math.PI/2),p),new je(new Dt(.02,.02,.3,8),p).translateY(-.15));for(let L of[-1,1])S.add(new je(new Dt(.02,.02,.12,8).rotateZ(Math.PI/2),new ot({color:1579034})).translateX(L*.3));S.position.set(0,-.3,-.62),S.visible=!1,n.add(S);let x={mode:"walk",i:-1,bike:null,x:0,z:0,y:0,yaw:0,v:0,steer:0,pitch:0,roll:0,cam:0,camPos:new B,orbit:0,orbitT:0,crank:0},M=(L,U)=>{let k=-1,W=3.2;for(let Y=0;Y<l.n;Y++){let le=l.get(Y),J=Math.hypot(le.x-L,le.z-U);J<W&&(W=J,k=Y)}return k},P=(L,U)=>v.find(k=>Math.hypot(k.position.x-L,k.position.z-U)<2.2)||null,C=(L,U)=>o.find(k=>{let W=Math.cos(k.yaw),Y=-Math.sin(k.yaw),le=Math.max(-k.half,Math.min(k.half,(L-k.x)*W+(U-k.z)*Y));return Math.hypot(L-k.x-W*le,U-k.z-Y*le)<k.w+1.6})||null,T=L=>{x.svc=null;let U=C(L.x,L.z);if(U)return Object.assign(x,{mode:"car",svc:U,x:U.x,z:U.z,yaw:U.yaw,v:0,steer:0,orbit:0}),x.camPos.set(U.x-Math.cos(U.yaw)*U.cam,t(U.x,U.z)+3,U.z+Math.sin(U.yaw)*U.cam),"service";let k=P(L.x,L.z);if(k)return Object.assign(x,{mode:"bike",bike:k,x:k.position.x,z:k.position.z,yaw:k.rotation.y,v:0}),k.visible=!1,S.visible=!0,"bike";let W=M(L.x,L.z);if(W<0)return null;let Y=l.get(W);return l.hide(W),h.color.setHex(Y.paint),f.scale.set(Y.sx,Y.sy,1),Object.assign(x,{mode:"car",i:W,x:Y.x,z:Y.z,yaw:Y.yaw,v:0,steer:0,orbit:0}),x.camPos.set(Y.x-Math.cos(Y.yaw)*7,t(Y.x,Y.z)+3,Y.z+Math.sin(Y.yaw)*7),f.visible=!0,"car"},b=L=>{if(Math.abs(x.v)>3)return!1;let U=-Math.sin(x.yaw),k=-Math.cos(x.yaw);return x.svc?(u.visible=!1,L.set(x.x+U*(x.svc.w+1),0,x.z+k*(x.svc.w+1))):x.mode==="car"?(l.place(x.i,x.x,x.z,x.yaw),f.visible=!1,u.visible=!1,L.set(x.x+U*1.9,0,x.z+k*1.9)):(x.bike.position.set(x.x,t(x.x,x.z),x.z),x.bike.rotation.y=x.yaw,x.bike.visible=!0,S.visible=!1,L.set(x.x+U*.8,0,x.z+k*.8)),L.y=t(L.x,L.z),x.mode="walk",x.v=0,!0},_=i.people,y=(L,U,k,W,Y,le)=>{let J=Math.cos(x.yaw),V=-Math.sin(x.yaw),Z=x.x,ce=x.z;for(let ee of Y){let q=x.x+J*ee,Me=x.z+V*ee,ve=(ne,j,ie)=>{let O=q-ne,xe=Me-j,K=Math.hypot(O,xe);if(K<ie&&K>1e-6){let te=ie-K;x.x+=O/K*te,x.z+=xe/K*te,q+=O/K*te,Me+=xe/K*te}};L(q,Me,ne=>{let j=ne*5;x.y+.5<=U[j+4]&&ve(...k(q,Me,U[j],U[j+1],U[j+2],U[j+3]),W)});for(let ne of a.agentPos)ne!==x.svc?.cap&&Math.abs(ne[6]-x.y)<3&&ve(...k(q,Me,ne[0]-ne[3]*ne[5],ne[1]-ne[4]*ne[5],ne[0]+ne[3]*ne[5],ne[1]+ne[4]*ne[5]),W+ne[2]);for(let ne=0;ne<_.count;ne++){let j=_.person(ne);!j.vis||Math.hypot(j.cx-q,j.cz-Me)>=W+.3||(Math.abs(x.v)>3&&!j.kid?_.hit(ne,x.x,x.z)&&(x.v*=.75,le?.(j.cx,j.cz)):ve(j.cx,j.cz,W+.3))}}return[x.x-Z,x.z-ce]},E=(L,U,k)=>{if(x.mode==="walk")return;let W=x.mode==="bike",{throttle:Y,brake:le,steer:J,hand:V}=U,Z=x.svc,ce=W?8.5:Z?Z.maxV:24,ee=W?2.2:Z?Z.acc:4.6,q=W?0:5,Me=Math.cos(x.yaw),ve=-Math.sin(x.yaw),ne=W?.55:Z?Z.half*.7:1.6,j=t(x.x+Me*ne,x.z+ve*ne),ie=t(x.x-Me*ne,x.z-ve*ne);x.pitch=Math.atan2(j-ie,ne*2);let O=-9.8*Math.sin(x.pitch)*(W?.6:.9);Y&&(O+=x.v<-.3?9:ee*(1-Math.max(0,x.v)/ce)),le&&(O+=x.v>.3?-9:-q*(1+x.v/q)*(W?0:1)),V&&(O-=Math.sign(x.v)*7),O-=x.v*(W?.12:.08)+Math.sign(x.v)*(Y?0:.6),x.v+=O*L,!Y&&!le&&Math.abs(x.v)<.25&&Math.abs(x.pitch)<.12&&(x.v=0),x.v=Math.max(W?0:-q,Math.min(ce,x.v));let xe=(W?.7:.55)/(1+Math.abs(x.v)/(W?10:12));x.steer+=(J*xe-x.steer)*Math.min(1,L*6),x.yaw+=x.v/(W?1.05:2.7)*Math.tan(x.steer)*L*(V&&!W?1.6:1),x.x+=Math.cos(x.yaw)*x.v*L,x.z-=Math.sin(x.yaw)*x.v*L,x.y=t(x.x,x.z);let K=Z?Z.half-Z.w:1.3,te=Z?Math.ceil(2*K/Z.w)+1:3,[oe,ue]=y(k.nearWalls,k.segs,k.closest,W?.45:Z?Z.w+.05:.95,W?[0]:Array.from({length:te},(fe,pe)=>-K+2*K*pe/(te-1)),k.onRunOver),re=Math.hypot(oe,ue);if(x.hit=re>1e-4,x.hit){let fe=Math.max(0,-Math.sign(x.v)*((Math.cos(x.yaw)*oe-Math.sin(x.yaw)*ue)/re));fe>.5&&Math.abs(x.v)>4&&!W&&r.thud?.(),x.v*=1-.85*fe}let[A,R,se,he]=i.extent||e.bounds;x.x=Math.min(Math.max(x.x,A+3),se-3),x.z=Math.min(Math.max(x.z,R+3),he-3),x.roll+=((W?-x.steer*Math.min(1,x.v/4)*.5:x.steer*x.v*.012)-x.roll)*Math.min(1,L*5),x.crank+=x.v*L},w=new Et,D=new Et,I=new B,H=new B;return{st:x,step:E,view:(L,U,k,W)=>{if(x.mode==="walk")return!1;if(x.mode==="bike"){let ve=Math.sin(x.crank*2.4)*.025*Math.min(1,x.v/3);return n.position.set(x.x,x.y+1.58+ve,x.z),n.rotation.set(W,x.yaw-Math.PI/2+k,x.roll,"YXZ"),!0}let Y=x.svc;Y?Y.pose(x.x,x.z,x.yaw,x.pitch,x.roll):(f.position.set(x.x,x.y-.02,x.z),f.quaternion.setFromAxisAngle(Ad,x.yaw).multiply(D.setFromAxisAngle(H.set(0,0,1),x.pitch)).multiply(w.setFromAxisAngle(H.set(1,0,0),x.roll)));let le=Math.cos(x.yaw),J=-Math.sin(x.yaw);if(u.visible=U>.02,u.material.opacity=U*.55,u.position.set(x.x+le*7.5,t(x.x+le*7.5,x.z+J*7.5)+.12,x.z+J*7.5),u.rotation.y=x.yaw,x.cam===1){let ve=Y?Y.half-1:1.25;return n.position.set(x.x+le*ve,x.y+(Y?Y.eye:1.3)+Math.sin(x.pitch)*ve,x.z+J*ve),n.rotation.set(x.pitch*.8+W,x.yaw-Math.PI/2+k,0,"YXZ"),!0}let V=x.yaw+Math.PI+k,Z=(Y?Y.cam:7)+Math.max(0,x.v)*.08,ce=Y?Y.eye-1.3:0,ee=x.x+Math.cos(V)*Z,q=x.z-Math.sin(V)*Z,Me=Math.max(t(ee,q)+1.2,x.y+2.6+ce-W*4);return H.set(ee,Me,q),x.camPos.distanceToSquared(H)>900?x.camPos.copy(H):x.camPos.lerp(H,1-Math.exp(-L*5)),n.position.copy(x.camPos),n.lookAt(I.set(x.x+le*2.5,x.y+1.2+ce,x.z+J*2.5)),!0},enter:T,exit:b,toggleCam:()=>{x.cam=(x.cam+1)%2},nearHint:L=>C(L.x,L.z)?`E \xB7 drive the ${C(L.x,L.z).name.toLowerCase()}`:P(L.x,L.z)?"E \xB7 ride the bike":M(L.x,L.z)>=0?"E \xB7 drive this car":"",speed:()=>Math.abs(x.v)*3.6}}var Oy=["na sever","na severov\xFDchod","na v\xFDchod","na jihov\xFDchod","na jih","na jihoz\xE1pad","na z\xE1pad","na severoz\xE1pad"],Fy=["north","north-east","east","south-east","south","south-west","west","north-west"],Cd={clear:["Dneska je ale kr\xE1sn\u011B.","Lovely day today."],cloudy:["Trochu se zatahuje.","It's clouding over a bit."],overcast:["\u0160edivo, ale aspo\u0148 nepr\u0161\xED.","Grey, but at least it's dry."],rain:["Zase pr\u0161\xED. Bez de\u0161tn\xEDku ani r\xE1nu.","Raining again. Don't go out without an umbrella."],storm:["Sly\u0161el jste to h\u0159m\u011Bn\xED? Rad\u0161i bych \u0161el dom\u016F.","Hear that thunder? I'd rather head home."],fog:["Ta mlha! Skoro nevid\xEDm na z\xE1mek.","This fog! I can hardly see the castle."],snow:["Sn\u011B\u017E\xED! D\u011Bti budou m\xEDt radost.","It's snowing! The kids will love it."]},By=[["V\xEDte, \u017Ee tady ve Fulneku p\u016Fsobil Jan Amos Komensk\xFD? M\xE1 tu pam\xE1tn\xEDk.","Did you know Comenius worked here in Fulnek? There's a memorial to him."],["Ze z\xE1mku je hezk\xFD v\xFDhled na cel\xE9 m\u011Bsto.","There's a lovely view over the whole town from the castle."],["Kostel Nejsv\u011Bt\u011Bj\u0161\xED Trojice je jedna z dominant Fulneku.","The Holy Trinity church is one of Fulnek's landmarks."],["Kousek odsud vedla zemsk\xE1 hranice mezi Moravou a Slezskem.","The old border between Moravia and Silesia ran close to here."],["Na n\xE1m\u011Bst\xED stoj\xED sloup Nejsv\u011Bt\u011Bj\u0161\xED Trojice se sochami sv\u011Btc\u016F.","On the square stands the Holy Trinity column with its saints."],["Ve Fulneku je i b\xFDval\xFD kapuc\xEDnsk\xFD kl\xE1\u0161ter, zajd\u011Bte se pod\xEDvat.","There's a former Capuchin monastery in Fulnek too, go and have a look."],["V p\xE1tek jdu s kamar\xE1dy na pivo.","On Friday I'm off for a beer with friends."],["N\xE1kupy d\u011Bl\xE1m na n\xE1m\u011Bst\xED, m\xE1m to bl\xEDzko.","I do my shopping on the square, it's close by."]],Hy=[["V zim\u011B to tu klou\u017Ee, d\xE1vejte pozor.","It gets slippery in winter, watch your step."],["Kone\u010Dn\u011B jaro, v\u0161echno kvete.","Spring at last, everything's in bloom."],["V l\xE9t\u011B tu lidi ve\u010Der sed\xED na lavi\u010Dk\xE1ch.","On summer evenings people sit out on the benches."],["List\xED u\u017E \u017Eloutne, podzim je tady.","The leaves are turning, autumn is here."]],ky=[["Jdu za kamar\xE1dy na h\u0159i\u0161t\u011B!","Off to the playground with my friends!"],["M\xE1te psa? J\xE1 bych cht\u011Bl \u0161t\u011Bn\u011B.","Have you got a dog? I want a puppy."],["Dneska jsme ve \u0161kole psali dikt\xE1t.","We had a dictation at school today."]],Ta=["Rex","B\xE1ra","Ben","A\u0161a","Max","Bob\xEDk"],Xr=i=>i[Math.floor(Math.random()*i.length)],Vy={Kofola:"kofolu",K\u00E1va:"k\xE1vu",Pol\u00E9vka:"pol\xE9vku",Limon\u00E1da:"limon\xE1du",Zn\u00E1mka:"zn\xE1mku",Ob\u00E1lka:"ob\xE1lku",Sv\u00ED\u010Dka:"sv\xED\u010Dku",\u010Cepice:"\u010Depici",Du\u0161e:"du\u0161i","Barva 0,75 l":"barvu 0,75 l",\u017D\u00E1rovka:"\u017E\xE1rovku",Prodlu\u017Eova\u010Dka:"prodlu\u017Eova\u010Dku","Zubn\xED pasta":"zubn\xED pastu",R\u016F\u017Ee:"r\u016F\u017Ei",Kytice:"kytici",Stavebnice:"stavebnici",Utopenec:"utopence",\u0160unka:"\u0161unku",Klob\u00E1sa:"klob\xE1su"},Gy=i=>Vy[i]||i.charAt(0).toLowerCase()+i.slice(1);function Pd({city:i,world:e,errands:t,el:n,toast:s,setTarget:r,undiscovered:o}){let a=e.people,l=e.env,c=-1,h=null,f=new Set,u=(b,_,y,E)=>{let w=Math.atan2(y-b,-(E-_));return Math.round(w/(Math.PI/4)%8+8)%8},p=(b,_)=>{let y=60,E="";for(let w of i.roads)if(w.n&&w.k!=="stream")for(let D=1;D<w.p.length;D++){let[I,H]=w.p[D-1],[N,L]=w.p[D],U=N-I,k=L-H,W=U*U+k*k||1,Y=Math.max(0,Math.min(1,((b-I)*U+(_-H)*k)/W)),le=Math.hypot(b-I-Y*U,_-H-Y*k);le<y&&(y=le,E=w.n)}return E},g=(b,_,y)=>{n.innerHTML="";let E=document.createElement("h2");E.textContent=b;let w=document.createElement("p");w.className="say",w.textContent=`\u201E${_[0]}\u201C`;let D=document.createElement("p");D.className="en",D.textContent=_[1],n.append(E,w,D),h=y,y.forEach(([H,N],L)=>{let U=document.createElement("button");U.type="button";let k=document.createElement("kbd"),W=document.createElement("span");k.textContent=L+1,W.textContent=H,U.append(k,W,document.createElement("span")),U.addEventListener("click",N),n.append(U)});let I=document.createElement("p");I.className="foot",I.textContent="1\u20134 choose \xB7 E or Esc to leave",n.append(I),n.hidden=!1},v=()=>a.person(c),m=()=>{let b=v(),_=l.st.hour,y=l.weather(),E=b.kid?"Ahoj!":_<9?"Dobr\xE9 r\xE1no!":_<18?"Dobr\xFD den!":"Dobr\xFD ve\u010Der!",w=b.kid?"Hi!":_<9?"Good morning!":_<18?"Good afternoon!":"Good evening!",D=_>=22||_<5?["U\u017E je pozd\u011B, jdu dom\u016F.","It's late, I'm heading home."]:Cd[y]||Cd.clear;return[`${E} ${D[0]}`,`${w} ${D[1]}`]},d=b=>g(v().name,b||m(),[["Ask the way",x],["Chat",S],["Need a hand?",P],["Goodbye",C]]),S=()=>{let b=v(),_=l.st.month,y=b.kid?Xr(ky):b.dog&&Math.random()<.4?[`To je ${Ta[c%Ta.length]}. Nekou\u0161e, nebojte.`,`This is ${Ta[c%Ta.length]}. Doesn't bite, don't worry.`]:Math.random()<.25?Hy[[0,0,1,1,1,2,2,2,3,3,3,0][_]]:Xr(By);d(y)},x=()=>{let b=v(),_=[];for(let E of t.tasks())E.done||_.length>=3||(E.type==="deliver"?_.push(E.got?[E.addr,E.x,E.z]:[E.shop,E.sx,E.sz]):E.type==="buy"&&E.x!=null?_.push([E.shop,E.x,E.z]):E.type==="visit"&&_.push([E.place,E.x,E.z]));let y=o(b.cx,b.cz);if(y&&_.push([`Something worth seeing (${y.n})`,y.x,y.z,y.n]),!_.length){d(["Kam pot\u0159ebujete? Tady na n\xE1m\u011Bst\xED je v\u0161echno bl\xEDzko.","Where to? Everything's close to the square here."]);return}g(b.name,["Kam to bude?","Where are you headed?"],_.slice(0,3).map(([E,w,D,I])=>[E,()=>M(I||E,w,D)]).concat([["Never mind",()=>d()]]))},M=(b,_,y)=>{let E=v(),w=Math.max(50,Math.round(Math.hypot(_-E.cx,y-E.cz)/50)*50),D=u(E.cx,E.cz,_,y),I=p(_,y);r(_,y,b);let H=w.toLocaleString("cs-CZ");d(w<=60?[`${b}? To je hned tady!`,`${b}? It's right here!`]:[`${b}? Jd\u011Bte ${Oy[D]}, je to asi ${H} metr\u016F${I?`, ulice ${I}`:""}.`,`${b}? Head ${Fy[D]}, about ${H} m${I?`, on ${I}`:""}. (Marked on your map.)`])},P=()=>{let b=v(),_=t.tasks().filter(L=>L.type==="deliver"&&!L.done).length;if(b.kid){d(["J\xE1 nic nepot\u0159ebuju, d\u011Bkuju!","I don't need anything, thanks!"]);return}if(f.has(c)){d(["D\u011Bkuju, zat\xEDm nic nepot\u0159ebuju.","Thanks, nothing for now."]);return}if(_>=3){d(["Vid\xEDm, \u017Ee m\xE1te pln\xE9 ruce. N\u011Bkdy jindy!","I can see your hands are full. Another time!"]);return}let y=t.shops.filter(L=>Math.hypot(L.x-b.cx,L.z-b.cz)<900),E=(i.doors||[]).filter(L=>Math.hypot(L[0]-b.cx,L[1]-b.cz)<450);if(!y.length||!E.length){d(["Ani ne, ale d\u011Bkuju.","Not really, but thank you."]);return}let w=Xr(y),D=Xr(hs[w.k].items),I=Xr(E),H=`${I[5]} ${I[3]}`,N=D[1]+40+Math.floor(Math.random()*9)*10;f.add(c),t.add({type:"deliver",item:D[0],shop:w.n,sx:w.x,sz:w.z,addr:H,x:I[0],z:I[1],pay:N,from:b.name,done:!1,got:!1}),r(w.x,w.z,w.n),d([`Mohl byste mi pros\xEDm koupit ${Gy(D[0])} v obchod\u011B ${w.n}? Bydl\xEDm na adrese ${H}. Pen\xEDze v\xE1m vr\xE1t\xEDm a n\u011Bco p\u0159id\xE1m.`,`Could you buy me ${D[0]} at ${w.n}? I live at ${H}. I'll pay you back with a bit extra (${t.kc(N)}).`]),s("New favour",`${D[0]} from ${w.n} to ${H}`)},C=()=>{let b=v();s(b.name,b.kid?"Ahoj!":"Na shledanou!"),T()},T=()=>{c>=0&&a.hold(c,null),c=-1,h=null,n.hidden=!0};return{isOpen:()=>c>=0,nearName:b=>{let _=a.nearest(b.x,b.z,2.6);return _>=0?a.person(_).name:""},start:b=>{let _=a.nearest(b.x,b.z,2.6);return _<0?!1:(c=_,a.hold(_,[b.x,b.z]),d(),!0)},key:b=>{if(c<0)return!1;if(b==="KeyE"||b==="Escape")return T(),!0;let _={Digit1:0,Digit2:1,Digit3:2,Digit4:3}[b];return _!=null&&h&&h[_]?(h[_][1](),!0):!1},update:b=>{c>=0&&Math.hypot(v().cx-b.x,v().cz-b.z)>5&&T()},close:T}}var kh=5,$n=[{name:"PISTOL",clip:12,reserve:60,delay:.24,damage:1,range:90,spread:0,rays:1,color:2435630},{name:"SHOTGUN",clip:8,reserve:40,delay:.72,damage:1,range:38,spread:.055,rays:8,color:4798765},{name:"SMG",clip:30,reserve:180,delay:.095,damage:1,range:65,spread:.012,rays:1,color:2636340},{name:"RIFLE",clip:24,reserve:144,delay:.19,damage:2,range:145,spread:.004,rays:1,color:3490874},{name:"ROCKET",clip:1,reserve:8,delay:1.15,damage:8,range:105,spread:0,rays:1,color:5659468,explosive:!0}];function Id(i,e,t,n,s){let r=Math.hypot(n.x,n.z);if(!i||r<1e-4)return s;let o=s;for(let a=0;a<=s*r+8;a+=8)i(t.x+n.x/r*a,t.z+n.z/r*a,l=>{l*=5;let c=e[l+2]-e[l],h=e[l+3]-e[l+1],f=n.x*h-n.z*c;if(Math.abs(f)<1e-9)return;let u=e[l]-t.x,p=e[l+1]-t.z,g=(u*h-p*c)/f,v=(u*n.z-p*n.x)/f;g>0&&g<o&&v>=0&&v<=1&&t.y+n.y*g<e[l+4]&&(o=g)});return o}function Ld(i,e,t,n,s,r,o){let a=Math.max(-r,Math.min(r,(i.x-e)*n+(i.z-t)*s)),l=i.x-e-n*a,c=i.z-t-s*a,h=Math.hypot(l,c);return h>=o||h<1e-6?!1:(i.x+=l/h*(o-h),i.z+=c/h*(o-h),!0)}function Wy(i,e,t){let n=new Ft,s=new ot({color:e.color}),r=new ot({color:1514269}),o=new ot({color:6638129}),a=(h,f,u,p,g)=>{let v=new je(h,f);return v.position.set(u,p,g),n.add(v),v},l=t===4?1.65:t===1?1.2:t===3?1.35:1;a(new rt(.13*l,.15*l,.38*l),s,0,0,0),a(new rt(.095*l,.2*l,.13*l),t===0||t===1||t===3?o:r,0,-.14*l,.085*l).rotation.x=-.25,a(new Dt(t===4?.075:.034,t===4?.075:.034,t===4?.64:.36,10).rotateX(Math.PI/2),t===4?r:s,0,.005,t===4?-.4:-.25),t===1&&a(new rt(.085,.09,.22),o,0,-.09,.01),t===2&&a(new rt(.105,.24,.11),r,0,-.18,-.03),t===3&&(a(new rt(.1,.24,.16),r,0,-.15,.16),a(new Dt(.035,.035,.32,8).rotateX(Math.PI/2),r,0,.11,-.08)),t===4&&(a(new Dt(.105,.105,.35,10).rotateZ(Math.PI/2),r,0,-.07,.11),a(new rt(.1,.1,.3),s,0,.11,-.08)),t!==4&&a(new rt(.035,.045,.07),r,0,.095,-.08);let c=new je(new Bt(t===4?.18:.075,8,6),new wt({color:t===4?16739110:16761180}));return c.position.set(0,.005,t===4?-.79:-.36),c.visible=!1,n.add(c),n.position.set(.28,-.25,-.52),n.rotation.set(-.04,-.04,0),i.add(n),{root:n,flash:c}}function Xy(){let i=new Ft,e=new ot({color:1587029}),t=new ot({color:1515562}),n=new ot({color:13211250}),s=new wt({color:15777109}),r=(a,l,c,h,f)=>{let u=new je(a,l);return u.position.set(c,h,f),u.castShadow=!0,i.add(u),u};r(new ki(.24,.48,3,8),e,0,1.04,0),r(new rt(.34,.68,.34),t,0,.39,0),r(new Bt(.19,10,8),n,0,1.67,0),r(new Dt(.2,.2,.09,8),e,0,1.84,0),r(new Pn(.16,.1,8),e,0,1.91,0),r(new rt(.08,.12,.035),s,.1,1.1,.215),r(new rt(.09,.34,.09),t,.25,1.06,.04).rotation.x=-.25;let o=new Ft;o.position.y=2.02;for(let[a,l]of[[-.11,16724016],[.11,3180031]]){let c=new je(new rt(.13,.08,.12),new wt({color:l}));c.position.x=a,o.add(c)}return i.add(o),{group:i,beacon:o}}function qr(i){let e=new Ft,t=new ot({color:2505794}),n=new wt({color:8108228}),s=new ot({color:1778984}),r=new wt({color:15746110}),o=(a,l,c,h,f,u=e)=>{let p=new je(a,l);return p.position.set(c,h,f),p.castShadow=!0,u.add(p),p};if(i==="helicopter"){o(new Bt(1.05,12,8),t,0,0,0).scale.set(1.1,.75,1.5),o(new Bt(.74,12,8),n,0,.13,-.76).scale.set(1.05,.7,.65),o(new Dt(.12,.22,4.2,8),t,0,.12,2.45).rotation.x=Math.PI/2,o(new rt(1.3,.1,.65),t,0,.13,4.4),o(new Bt(.14,8,6),r,0,.55,4.4);let a=new Ft;a.position.y=.9,e.add(a);for(let c=0;c<4;c++){let h=o(new rt(.24,.035,7.6),s,0,0,0,a);h.rotation.y=c*Math.PI/2}let l=new Ft;l.position.set(0,.22,4.45),e.add(l);for(let c=0;c<3;c++){let h=o(new rt(.09,1.35,.12),s,0,0,0,l);h.rotation.z=c*Math.PI/3}return{group:e,rotors:[a,l]}}return o(new Pn(.82,6.4,8).rotateX(-Math.PI/2),t,0,0,0),o(new rt(7.4,.16,1.5),t,0,0,.4),o(new rt(2.4,.12,.95),t,0,.3,2.1),o(new Bt(.45,10,8),n,0,.16,-.65).scale.set(1.35,.65,.7),o(new rt(.16,1.2,.95),t,0,.56,2.15),e.scale.setScalar(2.25),{group:e,rotors:[]}}function Dd({camera:i,scene:e,people:t,groundAt:n,wantedEl:s,weaponEl:r,toast:o,audio:a,onArrest:l}){let c=$n.map((re,A)=>Wy(i,re,A)),h=new pa,f=new B,u=new B,p=new B,g=new B,v=$n.map(re=>re.clip),m=$n.map(re=>re.reserve),d=[],S=[],x=[],M=[],P=new fa(16773583,0,70,Math.PI/8,.65);e.add(P,P.target);let C=new Mi(16753974,0,6);i.add(C);let T=[null,null],b=(re,A)=>{let R=A.clone().sub(re),se=R.length();return se<.001||Id(T[0],T[1],re,R.divideScalar(se),se)>=se},_=!1,y=0,E=0,w=0,D=0,I=0,H=0,N=!1,L=0,U=null,k=null,W=0,Y=0,le=-1,J=()=>{s.hidden=E===0,s.textContent="\u2605".repeat(E)+"\u2606".repeat(kh-E),s.setAttribute("aria-label",`Wanted level ${E} of ${kh}`)},V=(re=1)=>{let A=E;E=Math.min(kh,Math.max(1,E+re)),N=!1,L=0,H=Math.min(H,1),J(),E>A&&o("Wanted",`${"\u2605".repeat(E)} \xB7 Police are looking for you`)},Z=()=>c[y],ce=re=>{for(let[A,R]of c.entries())R.root.visible=_&&re==="walk"&&A===y;r.hidden=!_||re!=="walk",r.hidden||(r.textContent=`${y+1} ${$n[y].name}  \xB7  ${v[y]} / ${m[y]}  \xB7  1\u20135 select \xB7 B next \xB7 X holster \xB7 R reload`)},ee=re=>{y=re,_=!0,!v[y]&&m[y]&&ve(),ce("walk"),o(`${$n[re].name} ready`,`Magazine ${v[re]} \xB7 ${m[re]} spare`)},q=()=>ee((y+1)%$n.length),Me=()=>{_=!_,_&&!v[y]&&m[y]&&ve(),ce("walk"),o(_?`${$n[y].name} ready`:"Weapon holstered",_?"Choose 1\u20135 \xB7 left click to fire \xB7 R to reload":"You are unarmed")},ve=()=>{if(!_)return;let re=$n[y];if(v[y]>=re.clip||m[y]<=0){o(re.name,m[y]<=0?"No spare ammunition":"Magazine already full");return}let A=Math.min(re.clip-v[y],m[y]);v[y]+=A,m[y]-=A,le=-1,o("Reloaded",`${v[y]} in the magazine \xB7 ${m[y]} spare`)},ne=(re,A,R=16766346)=>{let se=new at().setFromPoints([re,A]),he=new Lr(se,new is({color:R,transparent:!0,opacity:.9}));e.add(he),S.push({line:he,t:.11})},j=(re,A=10294309,R=9,se=1)=>{for(let he=0;he<R;he++){let fe=new je(new Bt(.045+Math.random()*.09,6,5),new wt({color:A,transparent:!0,opacity:.92}));fe.position.copy(re),e.add(fe);let pe=new B((Math.random()-.5)*5,Math.random()*4+.4,(Math.random()-.5)*5).multiplyScalar(se);x.push({mesh:fe,v:pe,t:.7+Math.random()*.45})}},ie=(re,A,R)=>{let se=re.clone().lerp(R,Math.min(1,.3/(re.distanceTo(R)||1))),he=new B,fe=new je(new Bt(1,12,8),new wt({color:16744750,transparent:!0,opacity:.72}));fe.position.copy(re),fe.scale.setScalar(.3),e.add(fe),M.push({mesh:fe,t:.55,life:.55}),j(re,16761180,18,1.8),a.explosion?.();for(let Se of A)Se.group.position.distanceTo(re)<12&&b(se,he.copy(Se.group.position).setY(Se.group.position.y+1))&&(Se.health-=5,Se.health<=0&&(e.remove(Se.group),Se.remove=!0));let pe=t.humans[0],Le=new Je,de=new B;pe.updateMatrixWorld(!0);for(let Se=0;Se<pe.count;Se++)pe.getMatrixAt(Se,Le),Le.premultiply(pe.matrixWorld),de.setFromMatrixPosition(Le),de.distanceTo(re)<8&&b(se,de.setY(de.y+1))&&t.hit(Se,re.x,re.z);V(2)},O=(re="walk")=>{if(!_||re!=="walk"||D>0)return!1;let A=$n[y],R=Z();if(v[y]<=0)return le!==y&&(o(`${A.name} empty`,"Press R to reload"),le=y),!1;v[y]--,w++,D=A.delay,I=A.explosive?.15:.075,R.flash.visible=!0,C.position.copy(R.flash.position).add(R.root.position),C.intensity=A.explosive?7:3.5,a.gunshot(A.name),i.updateMatrixWorld(!0),i.getWorldPosition(u),i.getWorldDirection(f),i.getWorldDirection(g),g.crossVectors(f,new B(1,0,0)).normalize(),p.crossVectors(f,g).normalize();let se=[...t.humans,...d.map(Le=>Le.group)],he=new Set,fe=new Set,pe=null;for(let Le=0;Le<A.rays;Le++){let de=f.clone().addScaledVector(p,(Math.random()-.5)*A.spread).addScaledVector(g,(Math.random()-.5)*A.spread).normalize(),Se=Id(T[0],T[1],u,de,A.range);h.set(u,de),h.far=Se;let We=h.intersectObjects(se,!0)[0],Te=We?We.point:u.clone().addScaledVector(de,Se<A.range?Se:Math.min(A.range,55));if(A.explosive){pe=Te,ne(u,Te,16739117);break}if(A.rays===1&&ne(u,Te),!We){Se<A.range&&j(Te,9077880,3,.4);continue}if(t.humans.includes(We.object)){let ke=t.humans.indexOf(We.object),qe=ke===3||ke===4?We.instanceId>>1:We.instanceId;!fe.has(qe)&&t.hit(qe,u.x,u.z)&&(fe.add(qe),j(We.point,10294309,6,.7),V(1))}else{let ke=We.object;for(;ke&&!d.some(z=>z.group===ke);)ke=ke.parent;let qe=d.find(z=>z.group===ke);qe&&!he.has(qe)&&(he.add(qe),qe.health-=A.damage,j(We.point,9182509,10,.8),V(2),qe.health<=0&&(e.remove(qe.group),qe.remove=!0,o("Officer down","More police are responding")))}}return A.explosive&&pe&&ie(pe,d,u),V(w>1&&w%4===0?1:0),ce(re),!0},xe=(re,A)=>{let R=Xy(),se=Math.random()*1.4-.7,he=52+Math.random()*22,fe=A+Math.PI+se,pe=re.x+Math.cos(fe)*he,Le=re.z+Math.sin(fe)*he;R.group.position.set(pe,n(pe,Le),Le),e.add(R.group),d.push({...R,x:pe,z:Le,health:3,lost:0,close:0,stuck:0,side:Math.random()<.5?-1:1})},K=()=>{d.forEach(re=>e.remove(re.group)),d.length=0,E=0,N=!1,L=H=0,_=!1,v.splice(0,v.length,...$n.map(re=>re.clip)),m.splice(0,m.length,...$n.map(re=>re.reserve)),J(),ce("walk"),l(),o("Busted","Your loadout was taken \xB7 the police issued a fine")},te=(re,A,R,se,he,fe,pe=null,Le=[])=>{if(T=[he,fe],D=Math.max(0,D-re),H-=re,Y+=re,(I-=re)<=0){for(let de of c)de.flash.visible=!1;C.intensity=0}for(let de=S.length-1;de>=0;de--){let Se=S[de];Se.t-=re,Se.line.material.opacity=Math.max(0,Se.t/.11),Se.t<=0&&(e.remove(Se.line),Se.line.geometry.dispose(),Se.line.material.dispose(),S.splice(de,1))}for(let de=x.length-1;de>=0;de--){let Se=x[de];Se.t-=re,Se.v.y-=7*re,Se.mesh.position.addScaledVector(Se.v,re),Se.mesh.material.opacity=Math.max(0,Se.t/1.1),Se.t<=0&&(e.remove(Se.mesh),Se.mesh.geometry.dispose(),Se.mesh.material.dispose(),x.splice(de,1))}for(let de=M.length-1;de>=0;de--){let Se=M[de];Se.t-=re,Se.mesh.scale.setScalar(.3+(1-Se.t/Se.life)*9),Se.mesh.material.opacity=Math.max(0,Se.t/Se.life)*.72,Se.t<=0&&(e.remove(Se.mesh),Se.mesh.geometry.dispose(),Se.mesh.material.dispose(),M.splice(de,1))}E>0&&!N&&H<=0&&d.length<Math.min(E,4)&&(xe(A,R),H=4.5);for(let de of d){let Se=A.x-de.x,We=A.z-de.z,Te=Math.hypot(Se,We);if(Te>125?de.lost+=re:de.lost=0,de.lost>6){e.remove(de.group),de.remove=!0;continue}let Ie=A.x,ke=A.z;de.stuck>1.5&&(Ie+=-We/(Te||1)*de.side*5,ke+=Se/(Te||1)*de.side*5);let qe=Ie-de.x,z=ke-de.z,Q=Math.hypot(qe,z)||1,$=se==="walk"?2.25+E*.22:7+E*.35,we=de.x,G=de.z;de.x+=qe/Q*Math.min(Q,$*re),de.z+=z/Q*Math.min(Q,$*re),he(de.x,de.z,_e=>{let ae=_e*5;if(n(de.x,de.z)+1.8>fe[ae+4])return;let ye=fe[ae],Ne=fe[ae+1],Ue=fe[ae+2],Be=fe[ae+3],tt=Ue-ye,Ge=Be-Ne,De=Math.max(0,Math.min(1,((de.x-ye)*tt+(de.z-Ne)*Ge)/(tt*tt+Ge*Ge||1))),Ve=ye+tt*De,Tt=Ne+Ge*De,At=de.x-Ve,En=de.z-Tt,rn=Math.hypot(At,En);rn<.48&&rn>1e-5&&(de.x+=At/rn*(.48-rn),de.z+=En/rn*(.48-rn))});for(let _e of Le)Ld(de,_e[0],_e[1],_e[3],_e[4],_e[5],_e[2]+.4);if(pe&&Ld(de,pe.x,pe.z,Math.cos(pe.yaw),-Math.sin(pe.yaw),pe.svc?pe.svc.half-pe.svc.w:1.3,(pe.svc?pe.svc.w:.9)+.4)&&Math.abs(pe.v)>4){j(new B(de.x,n(de.x,de.z)+1,de.z),9182509,10,.8),V(2),e.remove(de.group),de.remove=!0,o("Officer down","More police are responding");continue}if(Math.hypot(de.x-we,de.z-G)<.03&&Te>3?de.stuck+=re:de.stuck>0&&(de.stuck=0,de.side*=-1),de.group.position.set(de.x,n(de.x,de.z),de.z),de.group.rotation.y=Math.atan2(A.x-de.x,A.z-de.z),de.beacon.visible=Math.floor(performance.now()/180)%2===0,Te<1.05&&se==="walk"?de.close+=re:de.close=Math.max(0,de.close-re*.5),de.close>1.8){K();return}}for(let de=d.length-1;de>=0;de--)d[de].remove&&d.splice(de,1);if(E>0&&d.length===0?(N=!0,L+=re,L>=10&&(E--,L=0,J())):d.length&&(L=0),E===0&&(N=!1),E>=3){U||(U=qr("helicopter"),e.add(U.group));let de=Y*.19,Se=A.x+Math.cos(de)*36,We=A.z+Math.sin(de)*36;U.group.position.set(Se,Math.max(A.y+19,n(Se,We)+22),We),U.group.rotation.y=-de+Math.PI/2,U.rotors.forEach((Te,Ie)=>{Te.rotation.y+=re*(Ie?22:34)}),P.intensity=32,P.position.copy(U.group.position).y-=.4,P.target.position.set(A.x,A.y,A.z)}else U&&(e.remove(U.group),U=null,P.intensity=0);E>=5?(W-=re,!k&&W<=0&&(k=qr("jet"),e.add(k.group),k.group.position.set(A.x-120,A.y+38,A.z-90),W=19),k&&(k.group.position.x+=62*re,k.group.position.z+=42*re,k.group.rotation.y=-Math.atan2(62,42),k.group.position.distanceTo(A)>220&&(e.remove(k.group),k=null))):k&&(e.remove(k.group),k=null),ce(se)},oe=()=>{d.forEach(re=>e.remove(re.group)),d.length=0,U&&e.remove(U.group),k&&e.remove(k.group)},ue=(re,A)=>{j(new B(re,n(re,A)+.9,A),10294309,8,.8),V(1)};return J(),ce("walk"),{shoot:O,toggle:Me,reload:ve,select:ee,cycle:q,update:te,carjacked:()=>V(1),runOver:ue,wanted:()=>E,clear:oe}}var qy=new Set(["primary","secondary","tertiary","residential","unclassified","service","primary_link","secondary_link"]),Yy={police:{name:"Police car",line:"158",maxV:30,acc:5.6,half:2.2,w:.9,cam:7,eye:1.3},fire:{name:"Fire engine",line:"150",maxV:19,acc:3,half:4.3,w:1.25,cam:11,eye:2.4},ambulance:{name:"Ambulance",line:"155",maxV:25,acc:4.2,half:2.95,w:1.05,cam:8.5,eye:2}},Zy=new B(0,1,0),jy=new B(0,0,1),Ky=new B(1,0,0);function Jy(i){let e=new Ft,t=(f,u=.4)=>Sn(new fn({color:f,roughness:u,metalness:.25})),n=t(1579034,.8),s=t(1910060,.06),r=t(15921903),o=[],a=(f,u,p,g,v,m,d)=>{let S=new je(new rt(f,u,p),d);return S.position.set(g,v,m),S.castShadow=S.receiveShadow=!0,e.add(S),S},l=(f,u,p)=>{for(let g of f)for(let v of[p,-p]){let m=new je(new Dt(u,u,.28,14).rotateX(Math.PI/2),n);m.position.set(g,u,v),m.castShadow=!0,e.add(m)}},c=(f,u,p)=>{let g=new wt({color:16184294});for(let v of[-1,1])a(.06,.16,.34,f,u,v*p,g)},h=(f,u,p)=>{a(.3,.06,p,f,u-.06,0,n);for(let g of[-1,1]){let v=new wt({color:660544});a(.26,.13,p/2-.05,f,u+.03,g*p/4,v),o.push(v)}};if(i==="police"){let f=Wr();e.add(new je(f.body,t(15001836,.3)),new je(f.detail,Sn(new fn({vertexColors:!0,roughness:.15,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1}))),new je(f.lamps,new wt({vertexColors:!0}))),e.children.forEach(u=>u.castShadow=u.receiveShadow=!0),a(4.3,.15,1.79,0,.66,0,t(2052008)),a(4.3,.1,1.79,0,.53,0,t(13033502)),h(-.55,1.52,1.2)}else if(i==="fire"){let f=t(11867163);a(8.4,.4,2.2,0,.75,0,n),a(2.1,2.3,2.5,3.2,1.75,0,f),a(6.3,2.6,2.5,-1.05,1.9,0,f),a(.06,.9,2.2,4.26,2.3,0,s),a(1.3,.75,2.52,3.35,2.35,0,s),a(6.3,.2,2.54,-1.05,1.35,0,r),a(2.12,.2,2.54,3.2,1.35,0,r),a(6.1,.14,.95,-.9,3.3,0,t(12172480));for(let u=0;u<12;u++)a(.06,.06,.95,-3.8+u*.52,3.4,0,t(12172480));l([2.9,-1.3,-2.7],.52,1.05),c(4.27,1,.95),h(3.2,3,1.7)}else{let f=t(15783962);a(5.6,.35,1.9,0,.55,0,n),a(4.3,2.25,2.1,-.8,1.68,0,f),a(1.6,1.25,2,2.15,1.15,0,f),a(.14,.62,1.9,1.42,2.05,0,s),a(.06,.4,1.7,2.96,1.35,0,s),a(4.32,.3,2.13,-.8,1.2,0,t(3054394)),a(.05,.6,.2,-2.96,2,0,t(13707818)),l([1.95,-1.9],.38,.92),c(2.96,.95,.75),h(1,2.88,1.6)}return{group:e,beacons:o}}function Nd({city:i,scene:e,groundAt:t,agentPos:n,parked:s}){let r=i.roads.filter(p=>qy.has(p.k)),o=(p,g,v)=>{let m=null,d=1/0;for(let P of r)for(let C=0;C+1<P.p.length;C++){let[T,b]=P.p[C],[_,y]=P.p[C+1],E=_-T,w=y-b,D=Math.hypot(E,w)||1,I=Math.max(0,Math.min(1,((p.x-T)*E+(p.z-b)*w)/(D*D))),H=T+E*I,N=b+w*I,L=Math.hypot(p.x-H,p.z-N);L<d&&(d=L,m={qx:H,qz:N,ux:E/D,uz:w/D,hw:P.w/2})}let S=(p.x-m.qx)/(d||1),x=(p.z-m.qz)/(d||1),M=Math.max(m.hw*.5,Math.min(m.hw+v+.3,d-v-.6));return{x:m.qx+S*M+m.ux*g,z:m.qz+x*M+m.uz*g,yaw:Math.atan2(-m.uz,m.ux)}},a=new Et,l=new Et,c=[],h=(p,g,v)=>{if(!g)return;let m=Yy[p],d=o(g,v,m.w),{group:S,beacons:x}=Jy(p),M={kind:p,...m,group:S,beacons:x,siren:!1,x:d.x,z:d.z,yaw:d.yaw,home:{x:d.x,z:d.z,n:g.n},cap:[d.x,d.z,m.w,1,0,m.half-m.w,0]};M.pose=(P,C,T,b,_=0)=>{let y=Math.cos(T),E=-Math.sin(T),w=t(P,C);b==null&&(b=Math.atan2(t(P+y*m.half,C+E*m.half)-t(P-y*m.half,C-E*m.half),m.half*2)),Object.assign(M,{x:P,z:C,yaw:T}),S.position.set(P,w-.02,C),S.quaternion.setFromAxisAngle(Zy,T).multiply(l.setFromAxisAngle(jy,b)).multiply(a.setFromAxisAngle(Ky,_)),M.cap[0]=P,M.cap[1]=C,M.cap[3]=y,M.cap[4]=E,M.cap[6]=w},M.pose(d.x,d.z,d.yaw),e.add(S),n.push(M.cap),c.push(M);for(let P=0;P<(s?.n||0);P++){let C=s.get(P),T=Math.max(-m.half,Math.min(m.half,(C.x-d.x)*M.cap[3]+(C.z-d.z)*M.cap[4]));Math.hypot(C.x-d.x-M.cap[3]*T,C.z-d.z-M.cap[4]*T)<m.w+2.2&&(s.hide(P),C.x=C.z=1e9)}},f=i.places.find(p=>p.k==="police"),u=i.places.find(p=>p.k==="fire station");return h("police",f,0),h("fire",u,-6),h("ambulance",u,5.5),c}function Qy(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,40,2,32,34,30);return t.addColorStop(0,"rgba(255,250,210,1)"),t.addColorStop(.35,"rgba(255,170,50,0.85)"),t.addColorStop(1,"rgba(200,40,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Xt(i)}function $y(){let i=new Ft,e=n=>new ot({color:n}),t=(n,s,r,o,a)=>{let l=new je(n,s);return l.position.set(r,o,a),l.castShadow=!0,i.add(l),l};t(new ki(.17,.42,3,8).rotateZ(Math.PI/2),e(10235695),.1,.2,0),t(new Bt(.115,10,8),e(15053711),.62,.15,0);for(let n of[.09,-.09])t(new rt(.84,.13,.14),e(2306381),-.6,.1,n);return i}function Ud({city:i,world:e,scene:t,camera:n,renderer:s,veh:r,fleet:o,errands:a,toast:l,setTarget:c,audio:h}){let f=e.cars,u=e.groundAt,p=a.kc;f.suspect=-1,f.caught=-1,f.siren=null;let g=null,v=null,m=0,d=0,S=new Mi(2117887,0,30);t.add(S);let x=new Mi(16742954,0,45);t.add(x);let M=new ns({map:Qy(),color:16756832,blending:Un,depthWrite:!1,transparent:!0}),P=Array.from({length:14},()=>{let K=new qs(M);return K.visible=!1,t.add(K),{s:K,ox:0,oy:0,ph:Math.random()*6}}),C=[],T=wa(C);t.add(T.mesh);let b=220,_=new Float32Array(b*3).fill(-1e4),y=new Float32Array(b*3),E=new Float32Array(b),w=new at;w.setAttribute("position",new dt(_,3).setUsage(xn));let D=new Hi(w,new ss({color:14216447,size:.16,transparent:!0,opacity:.75,depthWrite:!1}));D.frustumCulled=!1,t.add(D);let I=0,H=0,N=$y();N.visible=!1,t.add(N);let L=new je(new Pn(.45,.9,8).rotateX(Math.PI),new wt({color:15217962}));L.visible=!1,t.add(L);let U=new B,k=new B,W=new B,Y=K=>K[Math.floor(Math.random()*K.length)],le=K=>`${K[5]} ${K[3]}`,J=(K,te)=>{let oe=(i.doors||[]).filter(ue=>{let re=Math.hypot(ue[0]-K,ue[1]-te);return re>150&&re<700});return oe.length?Y(oe):null},V=(K,te)=>[K[0]+Math.sin(K[2])*te,K[1]+Math.cos(K[2])*te],Z=()=>r.st.mode==="car"?r.st.svc:null,ce=(K,te,oe)=>Math.hypot(K-oe.x,te-oe.z),ee=()=>{f.suspect=f.caught=-1,L.visible=!1,N.visible=!1;for(let K of P)K.s.visible=!1;x.intensity=0,C.length=0,v=null,c(null)},q=(K,te,oe)=>{a.earn(K),l(te,`${oe} \xB7 +${p(K)}`),ee(),m=20+Math.random()*20},Me=(K,te)=>{l(K,te),ee(),m=25},ve=()=>{let K=g,te=J(K.x,K.z);if(K.kind==="police"){let oe=f.traffic-2,ue=[];for(let R=0;R<oe;R++){let se=Math.hypot(f.agentPos[R][0]-K.x,f.agentPos[R][1]-K.z);se>100&&se<450&&ue.push(R)}if(ue.length&&(Math.random()<.6||!te)){v={type:"suspect",idx:Y(ue),t:0,limit:300,press:0,lost:0,label:"Suspect vehicle"},f.suspect=v.idx,L.visible=!0,l("Dispatch \xB7 158","A car fled a traffic check \xB7 catch up with lights and siren on (L) and stay close");return}if(!te)return;let[re,A]=V(te,1);v={type:"disturbance",x:re,z:A,t:0,limit:240,label:`Disturbance \xB7 ${le(te)}`},l("Dispatch \xB7 158",`Noise complaint at ${le(te)} \xB7 go there and talk to them on foot`)}else if(K.kind==="fire"){if(!te)return;let[oe,ue]=V(te,.4),re=u(oe,ue),A=Math.cos(te[2]),R=-Math.sin(te[2]);v={type:"fire",x:oe,z:ue,y:re,hp:100,t:0,limit:360,label:`Fire \xB7 ${le(te)}`},P.forEach((se,he)=>{let fe=(he/P.length-.5)*5;se.ox=A*fe,se.oz=R*fe,se.oy=.6+Math.random()*3.5,se.s.visible=!0}),C.push([oe,re+4.5,ue]),l("Dispatch \xB7 150",`House fire at ${le(te)} \xB7 drive there, get out by the engine and hold left click to spray`)}else{if(!te)return;let[oe,ue]=V(te,1.6);v={type:"patient",x:oe,z:ue,t:0,limit:360,treat:0,treating:!1,treated:!1,aboard:!1,label:`Patient \xB7 ${le(te)}`},N.position.set(oe,u(oe,ue),ue),N.rotation.y=te[2],N.visible=!0,l("Dispatch \xB7 155",`Someone collapsed at ${le(te)} \xB7 get there, give first aid (E), then bring them to the base`)}c(v.x,v.z,v.label,!0)},ne=K=>g&&g.kind==="fire"&&r.st.mode==="walk"&&ce(g.x,g.z,K)<50;return{update:(K,te)=>{let oe=te.pos,ue=Z(),re=performance.now()/1e3;ue&&g!==ue&&(v&&ee(),g=ue,m=6,l(`On duty \xB7 ${ue.name}`,"Calls come in on the radio \xB7 L blue lights and siren")),!ue&&r.st.mode!=="walk"&&g&&(ee(),g=null,l("Off duty","Back to normal life"));let A=null,R=1/0;for(let he of o){let fe=he.siren,pe=Math.floor(re*7)%2;he.beacons.forEach((Le,de)=>fe&&pe===de?Le.color.setRGB(.25,.45,3):Le.color.setHex(660544)),fe&&ce(he.x,he.z,oe)<R&&(R=ce(he.x,he.z,oe),A=he)}if(S.intensity=A?Math.floor(re*7)%2?40:8:0,A&&S.position.set(A.x,u(A.x,A.z)+3,A.z),h.siren?.(!!(ue&&ue.siren)),f.siren=ue&&ue.siren?{x:ue.x,z:ue.z,fx:Math.cos(ue.yaw),fz:-Math.sin(ue.yaw)}:null,g&&!v&&(m-=K)<=0&&(ve(),v||(m=10)),v&&(v.t+=K)>v.limit&&Me("Call timed out",v.type==="fire"?"The fire spread \xB7 the building is lost":v.type==="suspect"?"The suspect got away":"Another crew took the call"),v?.type==="suspect"){let he=f.agentPos[v.idx],fe=ce(he[0],he[1],oe);L.position.set(he[0],he[6]+3.2+Math.sin(re*4)*.15,he[1]),fe>25&&c(he[0],he[1],v.label,!0),f.caught!==v.idx&&(ue&&ue.kind==="police"&&ue.siren&&fe<16?v.press+=K:v.press=Math.max(0,v.press-K*.5),v.press>=4&&(f.caught=v.idx,l("Suspect stopped","Get out and arrest the driver (E)")),fe>450?(v.lost+=K)>20&&Me("Lost them","The suspect got away"):v.lost=0)}else if(v?.type==="disturbance")r.st.mode==="walk"&&ce(v.x,v.z,oe)<6&&q(300,"Settled",`You calmed things down at ${v.label.split(" \xB7 ")[1]}`);else if(v?.type==="fire"){v.hp=Math.min(160,v.hp+K*.25);let he=v.hp/100;if(P.forEach((fe,pe)=>{fe.ph+=K*9;let Le=(1.6+Math.sin(fe.ph+pe)*.35)*Math.min(1.4,.35+he*.75);fe.s.position.set(v.x+fe.ox,v.y+fe.oy*Math.min(1.3,.4+he*.6)+Math.sin(fe.ph*.7)*.2,v.z+fe.oz),fe.s.scale.set(Le,Le*1.5,1)}),x.position.set(v.x,v.y+2.5,v.z),x.intensity=(60+Math.sin(re*23)*15+Math.sin(re*7)*10)*Math.min(1,he),te.firing&&ne(oe)){n.getWorldPosition(k),n.getWorldDirection(U),W.set(v.x-k.x,v.y+2-k.y,v.z-k.z);let fe=W.length();fe<26&&W.dot(U)/fe>Math.cos(.32)&&(v.hp-=K*14)}v.hp<=0&&q(900,"Fire out",`${v.label.split(" \xB7 ")[1]} is safe`)}else if(v?.type==="patient"){let he=ce(v.x,v.z,oe);v.treating&&(he>3||r.st.mode!=="walk"?(v.treating=!1,l("First aid stopped","Stay with the patient \xB7 E to continue")):(v.treat+=K)>=5&&(v.treating=!1,v.treated=!0,l("Patient stabilised","Bring the ambulance next to them"))),v.treated&&!v.aboard&&g.kind==="ambulance"&&ce(g.x,g.z,v)<9&&(v.aboard=!0,N.visible=!1,c(g.home.x,g.home.z,`Base \xB7 ${g.home.n}`,!0),l("Patient on board",`Drive to the base at ${g.home.n} (lights and siren help)`)),v.aboard&&ue===g&&ce(g.home.x,g.home.z,ue)<25&&q(v.t<150?1100:800,"Patient handed over",v.t<150?"Quick work, with a bonus":"They're in good hands")}if(te.firing&&ne(oe))for(n.getWorldPosition(k),n.getWorldDirection(U),H+=K*160;H>=1;H--){let he=I*3;E[I]=1.3,_[he]=k.x+U.x*.6,_[he+1]=k.y-.3+U.y*.6,_[he+2]=k.z+U.z*.6;let fe=17+Math.random()*3;y[he]=U.x*fe+(Math.random()-.5),y[he+1]=U.y*fe+2+(Math.random()-.5),y[he+2]=U.z*fe+(Math.random()-.5),I=(I+1)%b}let se=!1;for(let he=0;he<b;he++){if(E[he]<=0)continue;let fe=he*3;if(se=!0,(E[he]-=K)<=0){_[fe+1]=-1e4;continue}y[fe+1]-=9.8*K,_[fe]+=y[fe]*K,_[fe+1]+=y[fe+1]*K,_[fe+2]+=y[fe+2]*K}D.visible=se,se&&(w.attributes.position.needsUpdate=!0),T.update(K,n.position,pt.uWind.value,v?.type==="fire"?Math.min(1,v.hp/100):0,.1,innerHeight*s.getPixelRatio()*.71)},key:(K,te)=>{let oe=Z();if(K==="KeyL"&&oe)return oe.siren=!oe.siren,l(oe.name,oe.siren?"Blue lights and siren on \xB7 traffic makes way":"Lights and siren off"),!0;if(K!=="KeyE"||r.st.mode!=="walk"||!v)return!1;if(v.type==="patient"&&!v.treated&&!v.treating&&ce(v.x,v.z,te)<2.6)return v.treating=!0,l("First aid","Stay next to them"),!0;if(v.type==="suspect"&&f.caught===v.idx){let ue=f.agentPos[v.idx];if(ce(ue[0],ue[1],te)<ue[5]+ue[2]+2.5)return q(700,"Arrested","The driver is in custody"),!0}return!1},hint:K=>{let te=Z();if(v?.type==="suspect"&&te&&v.press>0&&f.caught!==v.idx)return`Pull them over \xB7 ${Math.round(v.press/4*100)} %`;if(te||!v||r.st.mode!=="walk")return"";if(v.type==="patient"&&v.treating)return`First aid \xB7 ${Math.round(v.treat/5*100)} %`;if(v.type==="patient"&&!v.treated&&ce(v.x,v.z,K)<2.6)return"E \xB7 first aid";if(v.type==="suspect"&&f.caught===v.idx){let oe=f.agentPos[v.idx];if(ce(oe[0],oe[1],K)<oe[5]+oe[2]+2.5)return"E \xB7 arrest the driver"}return v.type==="fire"&&ne(K)&&ce(v.x,v.z,K)<60?`Hold left click \xB7 spray water \xB7 fire ${Math.round(v.hp)} %`:""},status:()=>g?`${g.name} \xB7 ${v?v.label:"waiting for a call"}`:"",hose:K=>ne(K)&&v?.type==="fire",fleet:o,call:()=>v,duty:()=>g,newCall:ve}}var Gi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eM=new Gs(-1,1,1,-1,0,1),Vh=class extends at{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},tM=new Vh,Vn=class{constructor(e){this._mesh=new je(tM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Aa=class extends sn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=en.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yr=class extends sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ra=class extends sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ca=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Aa(Gi),this.copyPass.material.blending=Zt,this.clock=new da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yr!==void 0&&(o instanceof Yr?n=!0:o instanceof Ra&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pa=class extends sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Zr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Je},cameraProjectionMatrixInverse:{value:new Je},cameraWorldMatrix:{value:new Je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},jr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ia={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function zd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=nM(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new yi(s,e,e);return r.wrapS=zn,r.wrapT=zn,r.needsUpdate=!0,r}function nM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Kr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Gh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraProjectionMatrixInverse:{value:new Je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Gh(i,e,t){let n=iM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function iM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new B(Math.cos(r),Math.sin(r),o))}return n}var La=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,p=c-f,g=e-u,v=t-p,m,d;g>v?(m=1,d=0):(m=0,d=1);let S=g-m+h,x=v-d+h,M=g-1+2*h,P=v-1+2*h,C=l&255,T=c&255,b=this.perm[C+this.perm[T]]%12,_=this.perm[C+m+this.perm[T+d]]%12,y=this.perm[C+1+this.perm[T+1]]%12,E=.5-g*g-v*v;E<0?n=0:(E*=E,n=E*E*this.dot(this.grad3[b],g,v));let w=.5-S*S-x*x;w<0?s=0:(w*=w,s=w*w*this.dot(this.grad3[_],S,x));let D=.5-M*M-P*P;return D<0?r=0:(D*=D,r=D*D*this.dot(this.grad3[y],M,P)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),u=Math.floor(n+c),p=1/6,g=(h+f+u)*p,v=h-g,m=f-g,d=u-g,S=e-v,x=t-m,M=n-d,P,C,T,b,_,y;S>=x?x>=M?(P=1,C=0,T=0,b=1,_=1,y=0):S>=M?(P=1,C=0,T=0,b=1,_=0,y=1):(P=0,C=0,T=1,b=1,_=0,y=1):x<M?(P=0,C=0,T=1,b=0,_=1,y=1):S<M?(P=0,C=1,T=0,b=0,_=1,y=1):(P=0,C=1,T=0,b=1,_=1,y=0);let E=S-P+p,w=x-C+p,D=M-T+p,I=S-b+2*p,H=x-_+2*p,N=M-y+2*p,L=S-1+3*p,U=x-1+3*p,k=M-1+3*p,W=h&255,Y=f&255,le=u&255,J=this.perm[W+this.perm[Y+this.perm[le]]]%12,V=this.perm[W+P+this.perm[Y+C+this.perm[le+T]]]%12,Z=this.perm[W+b+this.perm[Y+_+this.perm[le+y]]]%12,ce=this.perm[W+1+this.perm[Y+1+this.perm[le+1]]]%12,ee=.6-S*S-x*x-M*M;ee<0?s=0:(ee*=ee,s=ee*ee*this.dot3(this.grad3[J],S,x,M));let q=.6-E*E-w*w-D*D;q<0?r=0:(q*=q,r=q*q*this.dot3(this.grad3[V],E,w,D));let Me=.6-I*I-H*H-N*N;Me<0?o=0:(Me*=Me,o=Me*Me*this.dot3(this.grad3[Z],I,H,N));let ve=.6-L*L-U*U-k*k;return ve<0?a=0:(ve*=ve,a=ve*ve*this.dot3(this.grad3[ce],L,U,k)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,p,g,v=(e+t+n+s)*l,m=Math.floor(e+v),d=Math.floor(t+v),S=Math.floor(n+v),x=Math.floor(s+v),M=(m+d+S+x)*c,P=m-M,C=d-M,T=S-M,b=x-M,_=e-P,y=t-C,E=n-T,w=s-b,D=_>y?32:0,I=_>E?16:0,H=y>E?8:0,N=_>w?4:0,L=y>w?2:0,U=E>w?1:0,k=D+I+H+N+L+U,W=o[k][0]>=3?1:0,Y=o[k][1]>=3?1:0,le=o[k][2]>=3?1:0,J=o[k][3]>=3?1:0,V=o[k][0]>=2?1:0,Z=o[k][1]>=2?1:0,ce=o[k][2]>=2?1:0,ee=o[k][3]>=2?1:0,q=o[k][0]>=1?1:0,Me=o[k][1]>=1?1:0,ve=o[k][2]>=1?1:0,ne=o[k][3]>=1?1:0,j=_-W+c,ie=y-Y+c,O=E-le+c,xe=w-J+c,K=_-V+2*c,te=y-Z+2*c,oe=E-ce+2*c,ue=w-ee+2*c,re=_-q+3*c,A=y-Me+3*c,R=E-ve+3*c,se=w-ne+3*c,he=_-1+4*c,fe=y-1+4*c,pe=E-1+4*c,Le=w-1+4*c,de=m&255,Se=d&255,We=S&255,Te=x&255,Ie=a[de+a[Se+a[We+a[Te]]]]%32,ke=a[de+W+a[Se+Y+a[We+le+a[Te+J]]]]%32,qe=a[de+V+a[Se+Z+a[We+ce+a[Te+ee]]]]%32,z=a[de+q+a[Se+Me+a[We+ve+a[Te+ne]]]]%32,Q=a[de+1+a[Se+1+a[We+1+a[Te+1]]]]%32,$=.6-_*_-y*y-E*E-w*w;$<0?h=0:($*=$,h=$*$*this.dot4(r[Ie],_,y,E,w));let we=.6-j*j-ie*ie-O*O-xe*xe;we<0?f=0:(we*=we,f=we*we*this.dot4(r[ke],j,ie,O,xe));let G=.6-K*K-te*te-oe*oe-ue*ue;G<0?u=0:(G*=G,u=G*G*this.dot4(r[qe],K,te,oe,ue));let _e=.6-re*re-A*A-R*R-se*se;_e<0?p=0:(_e*=_e,p=_e*_e*this.dot4(r[z],re,A,R,se));let ae=.6-he*he-fe*fe-pe*pe-Le*Le;return ae<0?g=0:(ae*=ae,g=ae*ae*this.dot4(r[Q],he,fe,pe,Le)),27*(h+f+u+p+g)}};var Jr=class i extends sn{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=zd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ht(this.width,this.height,{type:nn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},Zr.defines),uniforms:en.clone(Zr.uniforms),vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader,blending:Zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ha,this.normalMaterial.blending=Zt,this.pdMaterial=new yt({defines:Object.assign({},Kr.defines),uniforms:en.clone(Kr.uniforms),vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},jr.defines),uniforms:en.clone(jr.uniforms),vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,blending:Zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:en.clone(Gi.uniforms),vertexShader:Gi.vertexShader,fragmentShader:Gi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ga,blendDst:$s,blendEquation:Dn,blendSrcAlpha:ma,blendDstAlpha:$s,blendEquationAlpha:Dn}),this.blendMaterial=new yt({uniforms:en.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:eh,blendSrc:ga,blendDst:$s,blendEquation:Dn,blendSrcAlpha:ma,blendDstAlpha:$s,blendEquationAlpha:Dn}),this.fsQuad=new Vn(null),this.originalClearColor=new Fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Xs,this.depthTexture.format=Oi,this.depthTexture.type=zi,this.normalRenderTarget=new Ht(this.width,this.height,{minFilter:jt,magFilter:jt,type:nn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new La,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new yi(s,e,e,gn,jn);return r.wrapS=zn,r.wrapT=zn,r.needsUpdate=!0,r}};Jr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Od={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var rr=class i extends sn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,o,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let u=new Ht(r,o,{type:nn});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new Ht(r,o,{type:nn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Od;this.highPassUniforms=en.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Gi;this.copyUniforms=en.clone(h.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Un,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Fe,this.oldClearAlpha=1,this.basic=new wt,this.fsQuad=new Vn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};rr.BlurDirectionX=new Re(1,0);rr.BlurDirectionY=new Re(0,1);var Fd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Da=class extends sn{constructor(){super();let e=Fd;this.uniforms=en.clone(e.uniforms),this.material=new ca({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qr={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},$r={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Na={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Ua=class extends sn{constructor(e,t){super(),this.edgesRT=new Ht(e,t,{depthBuffer:!1,type:nn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Ht(e,t,{depthBuffer:!1,type:nn}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new Gt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=yn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new Gt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=jt,this.searchTexture.minFilter=jt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=en.clone(Qr.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new yt({defines:Object.assign({},Qr.defines),uniforms:this.uniformsEdges,vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader}),this.uniformsWeights=en.clone($r.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new yt({defines:Object.assign({},$r.defines),uniforms:this.uniformsWeights,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader}),this.uniformsBlend=en.clone(Na.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new yt({uniforms:this.uniformsBlend,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader}),this.fsQuad=new Vn(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var Wh=new Je,eo=class i{constructor(e){e=e||{},this.zNear=e.webGL===!0?-1:0,this.vertices={near:[new B,new B,new B,new B],far:[new B,new B,new B,new B]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){let n=this.zNear,s=e.elements[2*4+3]===0;return Wh.copy(e).invert(),this.vertices.near[0].set(1,1,n),this.vertices.near[1].set(1,-1,n),this.vertices.near[2].set(-1,-1,n),this.vertices.near[3].set(-1,1,n),this.vertices.near.forEach(function(r){r.applyMatrix4(Wh)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(Wh);let o=Math.abs(r.z);s?r.z*=Math.min(t/o,1):r.multiplyScalar(Math.min(t/o,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new i);t.length=e.length;for(let n=0;n<e.length;n++){let s=t[n];if(n===0)for(let r=0;r<4;r++)s.vertices.near[r].copy(this.vertices.near[r]);else for(let r=0;r<4;r++)s.vertices.near[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n-1]);if(n===e.length-1)for(let r=0;r<4;r++)s.vertices.far[r].copy(this.vertices.far[r]);else for(let r=0;r<4;r++)s.vertices.far[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n])}}toSpace(e,t){for(let n=0;n<4;n++)t.vertices.near[n].copy(this.vertices.near[n]).applyMatrix4(e),t.vertices.far[n].copy(this.vertices.far[n]).applyMatrix4(e)}};var Xh={lights_fragment_begin:`
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
		// Iridescence F0 approximation
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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

  		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
		vec2 cascade;
		float cascadeCenter;
		float closestEdge;
		float margin;
		float csmx;
		float csmy;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				// NOTE: Depth gets larger away from the camera.
				// cascade.x is closer, cascade.y is further
				cascade = CSM_cascades[ i ];
				cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
				closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
				margin = 0.25 * pow( closestEdge, 2.0 );
				csmx = cascade.x - margin / 2.0;
				csmy = cascade.y + margin / 2.0;
				if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

					float dist = min( linearDepth - csmx, csmy - linearDepth );
					float ratio = clamp( dist / margin, 0.0, 1.0 );

					vec3 prevColor = directLight.color;
					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
					directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

					ReflectedLight prevLight = reflectedLight;
					RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

					bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
					float blendRatio = shouldBlend ? ratio : 1.0;

					reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
					reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
					reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
					reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

				}
			#endif

		}
		#pragma unroll_loop_end
	#elif defined (USE_SHADOWMAP)

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )

				directionalLightShadow = directionalLightShadows[ i ];
				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

			#endif

		}
		#pragma unroll_loop_end

	#elif ( NUM_DIR_LIGHT_SHADOWS > 0 )
		// note: no loop here - all CSM lights are in fact one light only
		getDirectionalLightInfo( directionalLights[0], directLight );
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, directLight );

			RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

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

#endif
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+ct.lights_pars_begin};var Bd=new Je,qh=new eo({webGL:!0}),wi=new B,to=new Kn,Yh=[],Zh=[],jh=new Je,Hd=new Je,sM=new B(0,1,0),za=class{constructor(e){this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new B(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||3,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new eo({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){let t=new Qs(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){let e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){let e=this.frustums;for(let t=0;t<e.length;t++){let s=this.lights[t].shadow.camera,r=this.frustums[t],o=r.vertices.near,a=r.vertices.far,l=a[0],c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let h=l.distanceTo(c);if(this.fade){let f=this.camera,u=Math.max(f.far,this.maxFar),p=r.vertices.far[0].z/(u-f.near),g=.25*Math.pow(p,2)*(u-f.near);h+=g}s.left=-h/2,s.right=h/2,s.top=h/2,s.bottom=-h/2,s.updateProjectionMatrix()}}getBreaks(){let e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":n(this.cascades,e.near,t,this.breaks);break;case"logarithmic":s(this.cascades,e.near,t,this.breaks);break;case"practical":r(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function n(o,a,l,c){for(let h=1;h<o;h++)c.push((a+(l-a)*h/o)/l);c.push(1)}function s(o,a,l,c){for(let h=1;h<o;h++)c.push(a*(l/a)**(h/o)/l);c.push(1)}function r(o,a,l,c,h){Yh.length=0,Zh.length=0,s(o,a,l,Zh),n(o,a,l,Yh);for(let f=1;f<o;f++)h.push(_i.lerp(Yh[f-1],Zh[f-1],c));h.push(1)}}update(){let e=this.camera,t=this.frustums;jh.lookAt(new B,this.lightDirection,sM),Hd.copy(jh).invert();for(let n=0;n<t.length;n++){let s=this.lights[n],r=s.shadow.camera,o=(r.right-r.left)/this.shadowMapSize,a=(r.top-r.bottom)/this.shadowMapSize;Bd.multiplyMatrices(Hd,e.matrixWorld),t[n].toSpace(Bd,qh);let l=qh.vertices.near,c=qh.vertices.far;to.makeEmpty();for(let h=0;h<4;h++)to.expandByPoint(l[h]),to.expandByPoint(c[h]);to.getCenter(wi),wi.z=to.max.z+this.lightMargin,wi.x=Math.floor(wi.x/o)*o,wi.y=Math.floor(wi.y/a)*a,wi.applyMatrix4(jh),s.position.copy(wi),s.target.position.copy(wi),s.target.position.x+=this.lightDirection.x,s.target.position.y+=this.lightDirection.y,s.target.position.z+=this.lightDirection.z}}injectInclude(){ct.lights_fragment_begin=Xh.lights_fragment_begin,ct.lights_pars_begin=Xh.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");let t=[],n=this,s=this.shaders;e.onBeforeCompile=function(r){let o=Math.min(n.camera.far,n.maxFar);n.getExtendedBreaks(t),r.uniforms.CSM_cascades={value:t},r.uniforms.cameraNear={value:n.camera.near},r.uniforms.shadowFar={value:o},s.set(e,r)},s.set(e,null)}updateUniforms(){let e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(n,s){if(n!==null){let r=n.uniforms;this.getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in s.defines?(delete s.defines.CSM_FADE,s.needsUpdate=!0):this.fade&&!("CSM_FADE"in s.defines)&&(s.defines.CSM_FADE="",s.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new Re);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){let n=this.breaks[t],s=this.breaks[t-1]||0;e[t].x=s,e[t].y=n}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){let e=this.shaders;e.forEach(function(t,n){delete n.onBeforeCompile,delete n.defines.USE_CSM,delete n.defines.CSM_CASCADES,delete n.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),n.needsUpdate=!0}),e.clear()}};var or={medium:[300,1024],high:[700,2048]};function kd({renderer:i,world:e,camera:t}){let n=e.scene,s=e.env,r=s.sun,o=new Ws(i),a=new Bi;a.add(new je(s.sky.geometry,s.sky.material));let l=null,c=0,h=()=>{let H=o.fromScene(a,0,1,6e3);n.environment=H.texture,l?.dispose(),l=H},f=new Ca(i),u=new Jr(n,t,2,2,void 0,{radius:1.2,distanceExponent:2,thickness:1.5,scale:1.1,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),p=u.setSize.bind(u);u.setSize=(H,N)=>p(Math.max(1,H>>1),Math.max(1,N>>1));let g=u.overrideVisibility.bind(u);u.overrideVisibility=()=>{g(),n.traverse(H=>{let N=H.material;(H.isSprite||N&&!Array.isArray(N)&&(N.transparent||N.alphaTest>0||N.depthWrite===!1))&&(H.visible=!1)})};let v=new rr(new Re(2,2),.35,.45,1.1);f.addPass(new Pa(n,t)),f.addPass(u),f.addPass(v),f.addPass(new Da),f.addPass(new Ua(2,2));let m=new Re,d=new Re,S=0,x=null,M=new Map,P=H=>{if(M.has(H)||!(H.isMeshLambertMaterial||H.isMeshStandardMaterial||H.isMeshPhongMaterial))return;let N=H.onBeforeCompile,L=Object.prototype.hasOwnProperty.call(H,"customProgramCacheKey")?H.customProgramCacheKey:null,U=H.customProgramCacheKey();M.set(H,[N,L]),x.setupMaterial(H);let k=H.onBeforeCompile;H.onBeforeCompile=(W,Y)=>{k(W,Y),N.call(H,W,Y)},H.customProgramCacheKey=()=>U+"|csm",H.needsUpdate=!0},C=H=>H.traverse(N=>{if(N.isMesh)for(let L of[].concat(N.material))P(L)}),T=()=>C(n);n.addEventListener("childadded",H=>{x&&C(H.child)});let b=()=>{let H=[];n.traverse(N=>{!N.visible&&!N.isLight&&(H.push(N),N.visible=!0)}),i.compile(n,t);for(let N of H)N.visible=!1},_=null,y=null,E=H=>{y=H,x.maxFar=or[H][0];for(let N of x.lights)N.shadow.mapSize.x!==or[H][1]&&(N.shadow.map?.dispose(),N.shadow.map=null,N.shadow.mapSize.setScalar(or[H][1]));x.updateFrustums()},w=H=>{x=new za({camera:t,parent:n,cascades:3,maxFar:or[H][0],mode:"practical",shadowMapSize:or[H][1],lightDirection:new B(0,-1,0),lightIntensity:0,lightMargin:250,lightFar:2e3}),x.fade=!0;for(let N of x.lights)N.shadow.bias=-3e-4,N.shadow.normalBias=.5;r.visible=!1,T(),E(H)},D=()=>{x.remove(),x.dispose(),x=null;for(let[H,[N,L]]of M)H.onBeforeCompile=N,L?H.customProgramCacheKey=L:delete H.customProgramCacheKey,H.needsUpdate=!0;M.clear(),r.visible=!0,y=null};return{render:H=>{let N=e.quality(),L=or[N]?N:null;N!=="low"&&(c-=H)<=0&&(c=2,h()),L!==y&&(L?x?E(L):w(L):D()),_!==!!x&&(_=!!x,b()),i.getSize(m);let U=!m.equals(d);if(d.copy(m),x){U&&x.updateFrustums(),x.lightDirection.copy(s.st.lightDir).negate();for(let W of x.lights)W.intensity=r.intensity,W.color.copy(r.color);t.updateMatrixWorld(),x.update()}if(N!=="high"){i.render(n,t);return}let k=i.getPixelRatio();(U||k!==S)&&(S=k,f.setPixelRatio(k),f.setSize(m.x,m.y)),f.render(H)},composer:f,active:()=>!!x}}var rM=[5,9,10,11,14,15,20],oM=[1,12,13,16,17],Oa=[8080186,4152184,5599306,9273194,6179438,10197909,3095109,10510394],Vd=[9069120,11569756,6243120,13215612,7228211],aM=[15328472,15854816,14673635,15721167,14867663,14279376],lM=[10254932,12096614,8216131,11117722,9407104],Wi=15921902,Fa=2500651,Gd=10133928,Ba=(i,e,t)=>{let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[l,c]=t[r];a>e!=c>e&&i<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n};function Kh(i){let e=i.buildings,t=i.doors||[];return{near:(r,o)=>{let a=-Math.sin(o),l=-Math.cos(o),c=null,h=.9;if(e.forEach((f,u)=>{let[p,g,,v,m]=f.o;if(Math.abs(r.x-p)>v+m+2||Math.abs(r.z-g)>v+m+2)return;let d=f.r[0];if(!Ba(r.x,r.z,d))for(let S=0;S<d.length;S++){let[x,M]=d[S],[P,C]=d[(S+1)%d.length],T=P-x,b=C-M,_=Math.hypot(T,b);if(_<1.4)continue;let y=Math.max(.6/_,Math.min(1-.6/_,((r.x-x)*T+(r.z-M)*b)/(_*_))),E=x+T*y,w=M+b*y,D=Math.hypot(r.x-E,r.z-w);if(D>=h)continue;let I=b/_,H=-T/_;if(Ba(E+I*.1,w+H*.1,d)&&(I=-I,H=-H),a*-I+l*-H<.3)continue;let N=E-I*.8,L=w-H*.8;!Ba(N,L,d)||d.some((U,k)=>{let W=d[(k+1)%d.length],Y=W[0]-U[0],le=W[1]-U[1],J=Y*Y+le*le||1,V=Math.max(0,Math.min(1,((N-U[0])*Y+(L-U[1])*le)/J));return Math.hypot(N-U[0]-Y*V,L-U[1]-le*V)<.45})||(h=D,c={i:u,x:E,z:w,nx:I,nz:H})}}),c){let f=t.find(u=>Math.hypot(u[0]-c.x,u[1]-c.z)<2);f&&(c.x=f[0],c.z=f[1])}return c},build:r=>{let o=e[r.i],a=o.r[0],[l,c,h]=o.o,f=Math.cos(h),u=Math.sin(h),p=Yt(r.i*7919+13),g=z=>z[Math.floor(p()*z.length)],v=(z,Q)=>z+p()*(Q-z),m=(z,Q)=>[(z-l)*f+(Q-c)*u,-(z-l)*u+(Q-c)*f],d=(z,Q)=>[l+z*f-Q*u,c+z*u+Q*f],S=a.map(([z,Q])=>m(z,Q)),x=(z,Q)=>Ba(z,Q,S),M=1/0,P=-1/0,C=1/0,T=-1/0;for(let[z,Q]of S)M=Math.min(M,z),P=Math.max(P,z),C=Math.min(C,Q),T=Math.max(T,Q);let b=Math.abs(S.reduce((z,Q,$)=>{let we=S[($+1)%S.length];return z+Q[0]*we[1]-we[0]*Q[1]},0)/2),_=Math.max(1,o.f||Math.round((o.e-o.g)/3)),y=Math.max(2.4,Math.min(3.4,(o.e-o.g)/_,o.e-o.g-.1)),E=o.u===18||b<25?"garage":oM.includes(o.u)||b>900?"hall":rM.includes(o.u)?"civic":"home",w=[],D=[],I=[],H=[],N=new Fe,L=[],U=(z,Q,$,we,G)=>{let _e=[Q[0]-z[0],Q[1]-z[1],Q[2]-z[2]],ae=[$[0]-z[0],$[1]-z[1],$[2]-z[2]],ye=[_e[1]*ae[2]-_e[2]*ae[1],_e[2]*ae[0]-_e[0]*ae[2],_e[0]*ae[1]-_e[1]*ae[0]],Ne=Math.hypot(...ye)||1;ye=ye.map(Ue=>Ue/Ne),N.setHex(G);for(let Ue of[z,Q,$])w.push(...Ue),D.push(...ye),I.push(N.r,N.g,N.b)},k=(z,Q,$,we,G,_e)=>{U(z,Q,$,G,_e),U(z,$,we,G,_e)},W=(z,Q,$,we,G)=>{let[_e,ae]=d(z,Q),[ye,Ne]=d($,we);H.push(_e,ae,ye,Ne,o.g+G)},Y=(z,Q,$,we,G,_e,ae,ye,Ne=!1)=>{let Ue=Math.cos(ae),Be=Math.sin(ae),tt=(Tt,At,En)=>[z+Tt*Ue+At*Be,$+En,Q-Tt*Be+At*Ue],Ge=we/2,De=_e/2,Ve=[tt(-Ge,-De,0),tt(Ge,-De,0),tt(Ge,De,0),tt(-Ge,De,0),tt(-Ge,-De,G),tt(Ge,-De,G),tt(Ge,De,G),tt(-Ge,De,G)];if(k(Ve[4],Ve[7],Ve[6],Ve[5],[0,1,0],ye),k(Ve[0],Ve[1],Ve[5],Ve[4],[Be,0,-Ue],ye),k(Ve[2],Ve[3],Ve[7],Ve[6],[-Be,0,Ue],ye),k(Ve[1],Ve[2],Ve[6],Ve[5],[Ue,0,-Be],ye),k(Ve[3],Ve[0],Ve[4],Ve[7],[-Ue,0,Be],ye),Ne)for(let Tt=0;Tt<4;Tt++)W(Ve[Tt][0],Ve[Tt][2],Ve[(Tt+1)%4][0],Ve[(Tt+1)%4][2],$+G)},le=g(aM),J=g(lM),V=m(r.x,r.z),Z=[-(r.nx*f+r.nz*u),-(-r.nx*u+r.nz*f)];for(let z=0;z<S.length;z++){let[Q,$]=S[z],[we,G]=S[(z+1)%S.length],_e=Math.hypot(we-Q,G-$);if(_e<.01)continue;let ae=-(G-$)/_e,ye=(we-Q)/_e;x((Q+we)/2+ae*.1,($+G)/2+ye*.1)||(ae=-ae,ye=-ye),k([Q,0,$],[we,0,G],[we,y,G],[Q,y,$],[ae,0,ye],le),W(Q,$,we,G,y);let Ne=Math.floor(_e/3),Ue=Math.min(y-.25,2.3);for(let Be=0;Be<Ne;Be++){let tt=(Be+.5)/Ne,Ge=Q+(we-Q)*tt,De=$+(G-$)*tt;if(Math.hypot(Ge-V[0],De-V[1])<1.2)continue;let Ve=(we-Q)/_e*.55,Tt=(G-$)/_e*.55,At=.03;L.push([Ge-Ve+ae*At,.95,De-Tt+ye*At],[Ge+Ve+ae*At,.95,De+Tt+ye*At],[Ge+Ve+ae*At,Ue,De+Tt+ye*At],[Ge-Ve+ae*At,Ue,De-Tt+ye*At])}}for(let z of Mn.triangulateShape(S.map(([Q,$])=>new Re(Q,$)),[])){let[Q,$,we]=z.map(G=>S[G]);U([Q[0],0,Q[1]],[$[0],0,$[1]],[we[0],0,we[1]],[0,1,0],J),U([Q[0],y,Q[1]],[$[0],y,$[1]],[we[0],y,we[1]],[0,-1,0],16052972)}{let z=-Z[1],Q=Z[0],$=.04;k([V[0]-z*.5+Z[0]*$,0,V[1]-Q*.5+Z[1]*$],[V[0]+z*.5+Z[0]*$,0,V[1]+Q*.5+Z[1]*$],[V[0]+z*.5+Z[0]*$,2.05,V[1]+Q*.5+Z[1]*$],[V[0]-z*.5+Z[0]*$,2.05,V[1]-Q*.5+Z[1]*$],[Z[0],0,Z[1]],7031344)}let ce=[V[0]+Z[0]*.8,V[1]+Z[1]*.8],ee=[],q=[[V[0]+Z[0]*.9,V[1]+Z[1]*.9,1.4]],Me=E==="hall"?1/0:E==="civic"?30:24,ve=24,ne=z=>{let Q=z.u1-z.u0,$=z.v1-z.v0;if(ee.length>=ve||Q*$<Me*1.6||Math.max(Q,$)<6.4){ee.push(z);return}let we=Q>=$,G=we?z.u0:z.v0,_e=we?Q:$,ae=G+_e*v(.38,.62),ye=we?z.v0:z.u0,Ne=we?z.v1:z.u1,[Ue,Be]=we?ce:[ce[1],ce[0]],tt=Math.abs(Ue-ae)<.9&&Be>ye&&Be<Ne?Math.max(ye+.05,Math.min(Ne-1,Be-.475)):v(ye+.6,Ne-1.5);for(let[Ge,De]of[[ye,tt],[tt+.95,Ne]])if(De-Ge>.05){let Ve=(Ge+De)/2;we?(Y(ae,Ve,0,.1,y,De-Ge,0,le),W(ae,Ge,ae,De,y)):(Y(Ve,ae,0,De-Ge,y,.1,0,le),W(Ge,ae,De,ae,y))}we?Y(ae,tt+.475,2.05,.1,y-2.05,.95,0,le):Y(tt+.475,ae,2.05,.95,y-2.05,.1,0,le),q.push(we?[ae,tt+.475,1]:[tt+.475,ae,1]),we?(ne({...z,u1:ae}),ne({...z,u0:ae})):(ne({...z,v1:ae}),ne({...z,v0:ae}))};ne({u0:M+.1,u1:P-.1,v0:C+.1,v1:T-.1});let j=[],ie=(z,Q,$,we)=>{for(let[G,_e]of[[z,$],[Q,$],[Q,we],[z,we],[(z+Q)/2,($+we)/2]])if(!x(G,_e))return!1;for(let[G,_e,ae]of q)if(G>z-ae&&G<Q+ae&&_e>$-ae&&_e<we+ae)return!1;for(let[G,_e,ae,ye]of j)if(z<_e&&Q>G&&$<ye&&we>ae)return!1;return!0},O=z=>({...z,w:z.u1-z.u0,d:z.v1-z.v0}),xe=(z,Q,$,we,G=8)=>{for(let _e=0;_e<G;_e++){let ae=Math.floor(p()*4),ye=ae<2?z.w:z.d;if(ye<Q+.2)continue;let Ne=v(Q/2+.1,ye-Q/2-.1),[Ue,Be,tt]=[[z.u0+Ne,z.v0+$/2+.06,0],[z.u0+Ne,z.v1-$/2-.06,Math.PI],[z.u0+$/2+.06,z.v0+Ne,Math.PI/2],[z.u1-$/2-.06,z.v0+Ne,-Math.PI/2]][ae],Ge=ae<2?Q/2:$/2,De=ae<2?$/2:Q/2;if(ie(Ue-Ge,Ue+Ge,Be-De,Be+De))return j.push([Ue-Ge,Ue+Ge,Be-De,Be+De]),we(Ue,Be,tt),[Ue,Be,tt]}return null},K=(z,Q,$,we)=>{if(z.w<Q+1.8||z.d<$+1.8)return null;let G=(z.u0+z.u1)/2+v(-.3,.3),_e=(z.v0+z.v1)/2+v(-.3,.3);return ie(G-Q/2-.5,G+Q/2+.5,_e-$/2-.5,_e+$/2+.5)?(j.push([G-Q/2,G+Q/2,_e-$/2,_e+$/2]),we(G,_e,0),[G,_e]):null},te=(z,Q,$,we,G,_e,ae,ye,Ne,Ue,Be)=>{let tt=Math.cos($),Ge=Math.sin($);Y(z+we*tt+G*Ge,Q-we*Ge+G*tt,_e,ae,ye,Ne,$,Ue,Be)},oe=g(Oa),ue=g(Vd),re=g(Vd),A={sofa:(z,Q,$)=>{te(z,Q,$,0,0,0,2,.42,.9,oe,!0),te(z,Q,$,0,-.35,.42,2,.45,.2,oe);for(let we of[-1,1])te(z,Q,$,we*.9,0,.42,.2,.22,.9,oe)},coffee:(z,Q,$)=>{te(z,Q,$,0,0,.38,1,.05,.55,ue,!0);for(let[we,G]of[[-.45,-.22],[.45,-.22],[-.45,.22],[.45,.22]])te(z,Q,$,we,G,0,.05,.38,.05,ue)},tv:(z,Q,$)=>{te(z,Q,$,0,0,0,1.4,.5,.4,re,!0),te(z,Q,$,0,-.08,.5,1.1,.65,.06,Fa)},shelf:(z,Q,$)=>{te(z,Q,$,0,0,0,.9,1.9,.35,ue,!0);for(let we=0;we<4;we++)for(let G=0;G<4;G++)te(z,Q,$,-.3+G*.2,.03,.1+we*.45,.16,.3,.26,g(Oa))},plant:(z,Q,$)=>{te(z,Q,$,0,0,0,.32,.32,.32,10835247,!0),te(z,Q,$,0,0,.32,.5,.75,.5,4156213)},rug:(z,Q)=>Y(z,Q,0,v(1.6,2.4),.012,v(1.2,1.8),0,g(Oa)),counter:z=>(Q,$,we)=>{te(Q,$,we,0,0,0,z,.86,.6,g([Wi,ue,5264730]),!0),te(Q,$,we,0,0,.86,z+.02,.04,.62,3881786),te(Q,$,we,-z/4,.02,.9,.5,.01,.4,9344153)},fridge:(z,Q,$)=>te(z,Q,$,0,0,0,.6,1.8,.65,Wi,!0),chair:(z,Q,$)=>{te(z,Q,$,0,0,.43,.45,.05,.45,ue,!0),te(z,Q,$,0,-.2,.48,.45,.45,.05,ue);for(let[we,G]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])te(z,Q,$,we,G,0,.04,.43,.04,ue)},table:(z,Q,$)=>(we,G,_e)=>{te(we,G,_e,0,0,.72,z,.04,Q,ue,!0);for(let[ae,ye]of[[-1,-1],[1,-1],[-1,1],[1,1]])te(we,G,_e,ae*(z/2-.06),ye*(Q/2-.06),0,.06,.72,.06,ue);if($)for(let[ae,ye,Ne]of[[-z/4,-Q/2-.35,0],[z/4,-Q/2-.35,0],[-z/4,Q/2+.35,Math.PI],[z/4,Q/2+.35,Math.PI]])A.chair(we+ae*Math.cos(_e)+ye*Math.sin(_e),G-ae*Math.sin(_e)+ye*Math.cos(_e),_e+Ne)},bed:(z,Q,$)=>{let we=g(Oa);te(z,Q,$,0,0,0,1.6,.35,2,ue,!0),te(z,Q,$,0,0,.35,1.5,.18,1.9,Wi),te(z,Q,$,0,.3,.53,1.52,.06,1.3,we);for(let G of[-1,1])te(z,Q,$,G*.38,-.75,.53,.6,.12,.35,Wi);te(z,Q,$,0,-.97,0,1.6,.95,.07,ue)},wardrobe:(z,Q,$)=>{te(z,Q,$,0,0,0,1.2,2,.6,re,!0),te(z,Q,$,0,.301,.1,.02,1.8,.01,Fa)},night:(z,Q,$)=>{te(z,Q,$,0,0,0,.45,.5,.4,re,!0),te(z,Q,$,0,0,.5,.18,.3,.18,15259560)},tub:(z,Q,$)=>{te(z,Q,$,0,0,0,1.7,.55,.75,Wi,!0),te(z,Q,$,0,0,.551,1.5,.002,.55,11125964)},toilet:(z,Q,$)=>{te(z,Q,$,0,.05,0,.38,.42,.5,Wi,!0),te(z,Q,$,0,-.22,.42,.4,.4,.16,Wi)},sink:(z,Q,$)=>{te(z,Q,$,0,0,0,.55,.82,.45,re,!0),te(z,Q,$,0,0,.82,.58,.06,.48,Wi),te(z,Q,$,0,-.22,1.1,.5,.65,.03,12571611)},desk:(z,Q,$)=>{te(z,Q,$,0,-.4,.73,1.4,.04,.7,ue,!0);for(let we of[-1,1])te(z,Q,$,we*.66,-.4,0,.05,.73,.66,Gd);te(z,Q,$,0,-.6,.77,.6,.38,.04,Fa),A.chair(z+.4*Math.sin($),Q+.4*Math.cos($),$+Math.PI)},rack:(z,Q,$)=>{te(z,Q,$,0,0,0,2.4,.08,.8,4026278,!0);for(let we of[-1,1])te(z,Q,$,we*1.17,0,0,.06,2.6,.8,4026278);for(let we=1;we<4;we++){te(z,Q,$,0,0,we*.85,2.4,.05,.8,13666858);for(let G=0;G<3;G++)p()<.7&&te(z,Q,$,-.8+G*.8,0,we*.85+.05,.6,.45,.6,g([11897434,13215612,9071178]))}},crate:(z,Q,$)=>te(z,Q,$,0,0,0,1,v(.6,1.1),1,g([11897434,9071178]),!0),bench:(z,Q,$)=>{te(z,Q,$,0,0,.88,2,.06,.7,ue,!0);for(let we of[-1,1])te(z,Q,$,we*.94,0,0,.08,.88,.66,Gd);te(z,Q,$,0,-.33,1.1,2,.6,.03,7040882)},car:(z,Q,$)=>{let we=g([9182236,2056075,15921903,1842464,10462120]);te(z,Q,$,0,0,.3,1.75,.65,4.2,we,!0),te(z,Q,$,0,-.3,.95,1.6,.5,2.2,1910060)},counterShop:(z,Q,$)=>{te(z,Q,$,0,0,0,2.2,1,.7,ue,!0),te(z,Q,$,.6,0,1,.4,.3,.35,Fa)}},R=(z,Q)=>{if(Q==="living")xe(z,2,.9,A.sofa)&&K(z,1,.55,A.coffee),xe(z,1.4,.4,A.tv),xe(z,.9,.35,A.shelf),xe(z,.4,.4,A.plant),p()<.7&&A.rug((z.u0+z.u1)/2,(z.v0+z.v1)/2);else if(Q==="kitchen"){let $=Math.min(3,Math.max(1.2,Math.min(z.w,z.d)-1));xe(z,$,.62,A.counter($)),xe(z,.6,.65,A.fridge),K(z,1.4,.8,A.table(1.4,.8,!0))}else if(Q==="bedroom")xe(z,1.6,2,A.bed),xe(z,1.2,.6,A.wardrobe),xe(z,.45,.4,A.night),p()<.5&&xe(z,.4,.4,A.plant);else if(Q==="bath")xe(z,1.7,.75,A.tub),xe(z,.4,.62,A.toilet),xe(z,.6,.48,A.sink);else if(Q==="studio")xe(z,1.6,2,A.bed),xe(z,1.8,.6,A.counter(1.8)),K(z,1,.7,A.table(1,.7,!0)),xe(z,1.2,.6,A.wardrobe);else if(Q==="office"){let $=Math.max(1,Math.floor(z.w*z.d/9));for(let we=0;we<$;we++)xe(z,1.4,1.5,A.desk);xe(z,.9,.35,A.shelf),xe(z,.4,.4,A.plant)}else if(Q==="shop"){xe(z,2.2,.7,A.counterShop);for(let $=0;$<5;$++)xe(z,2.4,.8,A.rack)}else if(Q==="garage"){if(z.w>3&&z.d>5.5||z.d>3&&z.w>5.5){let $=(z.u0+z.u1)/2,we=(z.v0+z.v1)/2,G=z.w>z.d?Math.PI/2:0,_e=z.w>z.d?2.1:.9,ae=z.w>z.d?.9:2.1;ie($-_e,$+_e,we-ae,we+ae)&&(j.push([$-_e,$+_e,we-ae,we+ae]),A.car($,we,G))}xe(z,2,.7,A.bench),xe(z,2.4,.8,A.rack)}else if(Q==="hall")for(let $=z.u0+2.5;$<z.u1-2.5;$+=4)for(let we=z.v0+2;we<z.v1-2;we+=3)p()<.15||ie($-1.2,$+1.2,we-.4,we+.4)&&(j.push([$-1.2,$+1.2,we-.4,we+.4]),(p()<.8?A.rack:A.crate)($,we,0))},se=ee.map(O).filter(z=>x((z.u0+z.u1)/2,(z.v0+z.v1)/2)||z.w*z.d>4).sort((z,Q)=>Q.w*Q.d-z.w*z.d),he=E==="home"?se.length===1?["studio"]:["living","kitchen","bedroom","bath","bedroom","bedroom","kitchen","living","bath"]:E==="civic"?["shop","office","office","office"]:[E];se.forEach((z,Q)=>{let $=he[Q%he.length];($==="bath"||$==="kitchen")&&Y((z.u0+z.u1)/2,(z.v0+z.v1)/2,.006,z.w,.004,z.d,0,g([14277851,13160402,15131094])),R(z,$)});let fe=new Bi,pe=new Ft;fe.background=new Fe(1711135);let Le=new at;Le.setAttribute("position",new et(w,3)),Le.setAttribute("normal",new et(D,3)),Le.setAttribute("color",new et(I,3)),pe.add(new je(Le,new ot({vertexColors:!0,side:Mt})));let de=new wt({color:12571622,side:Mt}),Se=[];for(let z=0;z<L.length;z+=4){let[Q,$,we,G]=L.slice(z,z+4);Se.push(...Q,...$,...we,...Q,...we,...G)}let We=new at;We.setAttribute("position",new et(Se,3)),pe.add(new je(We,de)),pe.position.set(l,o.g,c),pe.rotation.y=-h;let Te=new Mi(16773336,18,14,1.6),Ie=new Js(16775406,13813944,1.5);fe.add(pe,Te,Ie);let[ke,qe]=d(...ce);return{scene:fe,segs:Float32Array.from(H),y:o.g,start:{x:ke,z:qe},out:{x:r.x+r.nx*.9,z:r.z+r.nz*.9},yawIn:Math.atan2(r.nx,r.nz),yawOut:Math.atan2(-r.nx,-r.nz),kind:E,rooms:se.length,tris:w.length/9,update:z=>{Te.position.set(z.x,o.g+y-.3,z.z),de.color.copy(pt.uSky.value).multiplyScalar(1.15-.85*pt.uNight.value)},dispose:()=>{Le.dispose(),We.dispose(),pe.children.forEach(z=>z.material.dispose())}}}}}var cM=1.7,Wd=.35,Jh=8,ei=(i,e=0)=>i.toLocaleString("cs-CZ",{minimumFractionDigits:e,maximumFractionDigits:e}),Xd=["N","NE","E","SE","S","SW","W","NW"];function Ha(i,e,t,n=i.length/e){let s=new Map,r=(o,a)=>(o+4096)*8192+(a+4096);for(let o=0;o<n;o++){let a=o*e,l=Math.floor(Math.min(i[a],i[a+2])/t),c=Math.floor(Math.max(i[a],i[a+2])/t),h=Math.floor(Math.min(i[a+1],i[a+3])/t),f=Math.floor(Math.max(i[a+1],i[a+3])/t);for(let u=l;u<=c;u++)for(let p=h;p<=f;p++){let g=r(u,p);(s.get(g)||s.set(g,[]).get(g)).push(o)}}return(o,a,l)=>{let c=Math.floor(o/t),h=Math.floor(a/t);for(let f=c-1;f<=c+1;f++)for(let u=h-1;u<=h+1;u++){let p=s.get(r(f,u));if(p)for(let g of p)l(g)}}}var ka=(i,e,t,n,s,r)=>{let o=s-t,a=r-n,l=o*o+a*a||1,c=Math.max(0,Math.min(1,((i-t)*o+(e-n)*a)/l));return[t+c*o,n+c*a]};function qd({world:i,city:e,renderer:t,camera:n,ortho:s,stream:r=null,overview:o=null}){let a=X=>document.getElementById(X),[l,c,h,f]=r?r.extent:e.bounds,[u,p,g,v]=e.bounds,m=nr(),{groundAt:d}=i,S=i.segs,x=i.segsVersion,M=null,P=new WeakMap,C=null,T=()=>{let X=[[C,0]];for(let Ce of i.segParts||[])P.has(Ce.arr)||P.set(Ce.arr,Ha(Ce.arr,5,Jh)),X.push([P.get(Ce.arr),Ce.off]);M=X.length===1?C:(Ce,Pe,Ae)=>{for(let[He,nt]of X)He(Ce,Pe,nt?st=>Ae(st+nt):Ae)}},b=()=>{S=i.segs,C=Ha(S,5,Jh,(i.homeSegs??S.length)/5),T()};b();let _=[],y=[];e.roads.forEach((X,Ce)=>{if(X.n)for(let Pe=0;Pe+1<X.p.length;Pe++)_.push(X.p[Pe][0],X.p[Pe][1],X.p[Pe+1][0],X.p[Pe+1][1]),y.push(Ce)});let E=Ha(_,4,20),w=new B(e.spawn[0],0,e.spawn[1]),D=new B;w.y=d(w.x,w.z);let I=e.pois.find(X=>X.k==="castle"),H=I?Math.atan2(-(I.p[0]-w.x),-(I.p[1]-w.z)):0,N=.05,L=!1,U="helicopter",k=null,W=!0,Y={},le=t.domElement,J=a("start"),V=a("bigmap"),Z=!1,ce=!1,ee=()=>document.pointerLockElement===le,q={yaw:0,pitch:0,t:0},Me=(X,Ce)=>{if(ne&&ne.st.mode!=="walk"){q.yaw=Math.max(-2.6,Math.min(2.6,q.yaw-X*.0022)),q.pitch=Math.max(-.6,Math.min(.5,q.pitch-Ce*.0022)),q.t=1.5;return}H-=X*.0022,N=Math.max(-1.5,Math.min(1.5,N-Ce*.0022))},ve=Ed(),ne=null,j=null,ie=null,O=null,xe=()=>j&&J.hidden&&V.hidden&&!Ze.isOpen()&&!Ie.isOpen()&&!O&&!ie.hose(w)&&j.shoot(ne.st.mode),K=()=>{J.hidden=!0,V.hidden=!0,ve.start();try{let X=le.requestPointerLock();X&&X.catch&&X.catch(()=>{})}catch{}};a("go").addEventListener("click",K),document.addEventListener("pointerlockchange",()=>{!ee()&&V.hidden&&(J.hidden=!1)}),addEventListener("mousemove",X=>{(ee()||Z)&&Me(X.movementX,X.movementY)}),le.addEventListener("mousedown",X=>{ee()?X.button===0&&(ce=!0,xe()):Z=!0}),addEventListener("mouseup",()=>{Z=!1,ce=!1});let te=X=>{let Ce=ne.st.mode!=="walk",Pe=J.hidden&&V.hidden;if(Pe&&Ze.key(X)||Pe&&ni.key(X)||Pe&&ln.key(X)||Pe&&ie.key(X,w))return!0;if(Pe&&O&&X==="KeyE"&&Rt())return on(),!0;if(Pe&&!Ce&&Ie.key(X,i.env.st.hour))return!0;if(X==="KeyX"&&Pe&&!Ze.isOpen()&&j)return j.toggle(),!0;if(X==="KeyB"&&Pe&&j)return j.cycle(),!0;if(/^Digit[1-5]$/.test(X)&&Pe&&j)return j.select(Number(X.slice(-1))-1),!0;if(X==="KeyR"&&Pe&&j)return j.reload(),!0;if(X==="KeyP"&&Pe)return ni.toggle(),!0;if(X==="KeyE"&&Pe&&!Ce&&!O&&Ze.start(w))return!0;if(X==="KeyE"&&Pe&&!O){if(Ce){let Ae=ne.st.mode;ne.exit(w)?(H=ne.st.yaw-Math.PI/2,N=0,b(),Te(Ae==="car"?"Parked":"Bike left here","E to get back on")):Te("Too fast","Stop first, then E")}else{L&&k&&i.scene.remove(k.group),k=null,L=!1;let Ae=ne.enter(w);if(Ae)q.yaw=q.pitch=0,Ae==="car"&&j.carjacked(),Ae==="service"?Te(ne.st.svc.name,"W/S \xB7 A/D steer \xB7 L blue lights and siren \xB7 C camera \xB7 E get out"):Te(Ae==="car"?"Driving":"Cycling",Ae==="car"?"W/S throttle and brake \xB7 A/D steer \xB7 Space handbrake \xB7 C camera \xB7 H horn \xB7 E get out":"W pedal \xB7 S brake \xB7 A/D steer \xB7 E get off");else if(W){let He=gt.near(w,H);He&&It(He)}}return!0}if(Ce&&X==="KeyC")return ne.toggleCam(),!0;if(Ce&&X==="KeyH")return ve.horn(),!0;if(X==="KeyF"&&!Ce&&!O&&(L=!L,D.set(0,0,0),L?(U="helicopter",k=qr(U),i.scene.add(k.group),Te("Helicopter","WASD fly \xB7 Space climb \xB7 C descend \xB7 J jet \xB7 H helicopter \xB7 F land")):(k&&i.scene.remove(k.group),k=null)),L&&(X==="KeyJ"||X==="KeyH")){let Ae=X==="KeyJ"?"jet":"helicopter";Ae!==U&&(k&&i.scene.remove(k.group),U=Ae,k=qr(U),i.scene.add(k.group),Te(U==="jet"?"Jet":"Helicopter",U==="jet"?"WASD fly fast \xB7 Space climb \xB7 C descend \xB7 H helicopter \xB7 F land":"WASD fly \xB7 Space climb \xB7 C descend \xB7 J jet \xB7 F land"))}return X==="KeyM"&&rn(),X==="KeyT"&&i.env.skipHour(),X==="KeyV"&&Te("Sound",ve.toggle()?"off":"on"),X==="KeyY"&&i.env.nextWeather(),X==="KeyG"&&i.setQuality(sr[(sr.indexOf(i.quality())+1)%sr.length]),!1};addEventListener("keydown",X=>{if(te(X.code)){X.preventDefault();return}Y[X.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(X.code)&&X.preventDefault()}),addEventListener("keyup",X=>Y[X.code]=!1),addEventListener("blur",()=>{for(let X in Y)Y[X]=!1});let oe=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,ue={id:null,ox:0,oy:0,x:0,y:0},re={id:null,x:0,y:0};if(oe){document.body.classList.add("touch"),i.setQuality("low");let X=a("stick");le.addEventListener("touchstart",Pe=>{for(let Ae of Pe.changedTouches)Ae.clientX<innerWidth*.45&&ue.id==null?(Object.assign(ue,{id:Ae.identifier,ox:Ae.clientX,oy:Ae.clientY,x:0,y:0}),X.hidden=!1,X.style.left=Ae.clientX+"px",X.style.top=Ae.clientY+"px"):re.id==null&&Object.assign(re,{id:Ae.identifier,x:Ae.clientX,y:Ae.clientY});Pe.preventDefault()},{passive:!1}),le.addEventListener("touchmove",Pe=>{for(let Ae of Pe.changedTouches)Ae.identifier===ue.id&&(ue.x=Math.max(-1,Math.min(1,(Ae.clientX-ue.ox)/55)),ue.y=Math.max(-1,Math.min(1,(Ae.clientY-ue.oy)/55))),Ae.identifier===re.id&&(Me((Ae.clientX-re.x)*1.8,(Ae.clientY-re.y)*1.8),re.x=Ae.clientX,re.y=Ae.clientY);Pe.preventDefault()},{passive:!1});let Ce=Pe=>{for(let Ae of Pe.changedTouches)Ae.identifier===ue.id&&(ue.id=null,ue.x=ue.y=0,X.hidden=!0),Ae.identifier===re.id&&(re.id=null)};le.addEventListener("touchend",Ce),le.addEventListener("touchcancel",Ce);for(let Pe of document.querySelectorAll("#touchpad button"))Pe.addEventListener("click",()=>{let Ae=Pe.dataset.key;Ae==="Space"?(Y.Space=!0,setTimeout(()=>Y.Space=!1,180)):Ae==="Pause"?J.hidden=!1:Ae==="Fire"?xe():te(Ae)})}let A=new Set(["castle","place_of_worship","museum","townhall","monastery","memorial","monument","church","chapel","manor","ruins","attraction","viewpoint","wayside_shrine","wayside_cross"]),R=[],se=new Set;for(let X of e.pois)A.has(X.k)&&!se.has(X.n)&&(se.add(X.n),R.push({n:X.n,k:X.k.replace(/_/g," ").replace("place of worship","church"),x:X.p[0],z:X.p[1],real:!0,landmark:!0}));for(let X of e.places)!se.has(X.n)&&X.k!=="company"&&(se.add(X.n),R.push({n:X.n,k:X.k,x:X.x,z:X.z,real:!!X.real}));let he=R.filter(X=>X.real).length,fe="fulnek3d.found.v1",pe=new Set;try{pe=new Set(JSON.parse(localStorage.getItem(fe)||"[]"))}catch{}let Le=a("toast"),de=a("log"),Se=0,We="",Te=(X,Ce)=>{Le.innerHTML="";let Pe=document.createElement("small"),Ae=document.createElement("strong");Pe.textContent=X,Ae.textContent=Ce,Le.append(Pe,Ae),Le.hidden=!1,Se=4},Ie=Td({city:e,toast:Te,landmarks:R.filter(X=>X.landmark),el:{list:a("errlist"),money:a("errmoney"),hint:a("hint"),shop:a("shop")}}),ke=()=>{for(let X of R){let Ce=Math.hypot(w.x-X.x,w.z-X.z);if(X.real&&Ce<14&&!pe.has(X.n)){pe.add(X.n);try{localStorage.setItem(fe,JSON.stringify([...pe]))}catch{}Te(`Discovered \xB7 ${pe.size} of ${he}`,`${X.n} \xB7 ${X.k}`),ti++}else!X.real&&Ce<9&&We!==X.n&&(We=X.n,Te("Shop",`${X.n} \xB7 ${X.k}`))}de.textContent=`Places found ${pe.size}/${he}`},qe=document.createElement("canvas");qe.width=Math.round((g-u)/2),qe.height=Math.round((v-p)/2);let z=qe.getContext("2d");z.drawImage(s,0,0,qe.width,qe.height),z.lineCap=z.lineJoin="round";let Q=new Set(["primary","secondary","tertiary","trunk"]),$=new Set(["residential","unclassified","service","living_street","pedestrian"]);for(let X of e.roads)z.strokeStyle=X.k==="stream"?"rgba(120,190,230,0.8)":X.k==="rail"?"rgba(40,40,40,0.7)":Q.has(X.k)?"rgba(255,236,190,0.85)":"rgba(255,255,255,0.55)",z.lineWidth=Q.has(X.k)?3:$.has(X.k)||X.k==="rail"?2:1,z.beginPath(),X.p.forEach(([Ce,Pe],Ae)=>z[Ae?"lineTo":"moveTo"]((Ce-u)/2,(Pe-p)/2)),z.stroke();let we=a("minimap"),G=we.getContext("2d"),_e=(X,Ce,Pe,Ae,He)=>{X.save(),X.translate(Ce,Pe),X.rotate(Ae),X.beginPath(),X.moveTo(0,-He),X.lineTo(He*.62,He*.7),X.lineTo(0,He*.35),X.lineTo(-He*.62,He*.7),X.closePath(),X.fillStyle="#e0a43a",X.strokeStyle="#14181a",X.lineWidth=2,X.fill(),X.stroke(),X.restore()},ae=o?[m.x(o.data.photoExt.W),m.z(o.data.photoExt.N),m.x(o.data.photoExt.E),m.z(o.data.photoExt.S)]:null,ye=X=>[...ae?[[o.img,ae]]:[],...i.tiles.filter(Ce=>Ce.img&&Ce.done).map(Ce=>[Ce.img,Ce.b]),[X,[u,p,g,v]]],Ne=(X,Ce,Pe,Ae,He)=>{let nt=Math.max(Pe[0],Ae[0]),st=Math.max(Pe[1],Ae[1]),it=Math.min(Pe[2],Ae[2]),_t=Math.min(Pe[3],Ae[3]);if(it<=nt||_t<=st)return;let Oe=Ce.width/(Pe[2]-Pe[0]),mt=Ce.height/(Pe[3]-Pe[1]);X.drawImage(Ce,(nt-Pe[0])*Oe,(st-Pe[1])*mt,(it-nt)*Oe,(_t-st)*mt,(nt-Ae[0])*He,(st-Ae[1])*He,(it-nt)*He,(_t-st)*He)},Ue=()=>{let X=we.width,Ce=240,Pe=[w.x-Ce/2,w.z-Ce/2,w.x+Ce/2,w.z+Ce/2];G.fillStyle="#3b4430",G.fillRect(0,0,X,X);for(let[Ae,He]of ye(qe))Ne(G,Ae,He,Pe,X/Ce);if(Be){let Ae=X/(Ce*2),He=(Be.x-w.x)*Ae,nt=(Be.z-w.z)*Ae,st=X/2-14,it=Math.hypot(He,nt),[_t,Oe]=it<st?[X/2+He,X/2+nt]:[X/2+He/it*st,X/2+nt/it*st];G.beginPath(),G.arc(_t,Oe,X*.028,0,7),G.fillStyle="#d9442b",G.strokeStyle="#fff",G.lineWidth=3,G.fill(),G.stroke()}_e(G,X/2,X/2,-H,X*.06)},Be=null,tt=(X,Ce,Pe,Ae=!1)=>{Be=X==null?null:{x:X,z:Ce,label:Pe,quiet:Ae}},Ge=a("bigcanvas"),De=Ge.getContext("2d"),Ve={zoom:1,cx:(l+h)/2,cz:(c+f)/2},Tt=16*Math.max(1,(h-l)/(g-u)),At=1,En=()=>{let X=devicePixelRatio,Ce=innerWidth*.94,Pe=innerHeight*.84;Ge.width=Math.round(Ce*X),Ge.height=Math.round(Pe*X),Ge.style.width=Ce+"px",Ge.style.height=Pe+"px",At=Math.max((h-l)/Ge.width,(f-c)/Ge.height)/Ve.zoom;let Ae=Ge.width*At/2,He=Ge.height*At/2;Ve.cx=Math.min(Math.max(Ve.cx,l+Ae),h-Ae),Ve.cz=Math.min(Math.max(Ve.cz,c+He),f-He),Ae*2>h-l&&(Ve.cx=(l+h)/2),He*2>f-c&&(Ve.cz=(c+f)/2);let nt=Oe=>(Oe-Ve.cx+Ae)/At,st=Oe=>(Oe-Ve.cz+He)/At;De.fillStyle="#20261f",De.fillRect(0,0,Ge.width,Ge.height);for(let[Oe,mt]of ye(s))Ne(De,Oe,mt,[Ve.cx-Ae,Ve.cz-He,Ve.cx+Ae,Ve.cz+He],1/At);De.lineCap=De.lineJoin="round";let it=Math.max((g-u)/Ge.width,(v-p)/Ge.height)/At;if(it>=2){De.strokeStyle="rgba(255,255,255,0.35)",De.lineWidth=X;for(let Oe of e.buildings){let mt=Oe.r[0];De.beginPath(),mt.forEach(([Ct,dn],Ti)=>De[Ti?"lineTo":"moveTo"](nt(Ct),st(dn))),De.closePath(),De.stroke()}}for(let Oe of e.roads)De.strokeStyle=Oe.k==="stream"?"rgba(120,190,230,0.85)":Oe.k==="rail"?"rgba(40,40,40,0.8)":Q.has(Oe.k)?"rgba(255,236,190,0.9)":"rgba(255,255,255,0.65)",De.lineWidth=Math.max(X,Oe.w/At*.8),De.beginPath(),Oe.p.forEach(([mt,Ct],dn)=>De[dn?"lineTo":"moveTo"](nt(mt),st(Ct))),De.stroke();let _t=(Oe,mt,Ct,dn,Ti="#f3ead2")=>{De.font=`600 ${dn*X}px 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif`,De.lineWidth=3*X,De.strokeStyle="rgba(20,24,26,0.85)",De.strokeText(Oe,mt,Ct),De.fillStyle=Ti,De.fillText(Oe,mt,Ct)};if(it>=3){let Oe=new Set;for(let mt of e.roads.filter(Ct=>Ct.n).sort((Ct,dn)=>dn.p.length-Ct.p.length)){if(Oe.has(mt.n))continue;Oe.add(mt.n);let[Ct,dn]=mt.p[Math.floor(mt.p.length/2)];De.textAlign="center",_t(mt.n,nt(Ct),st(dn),11,"#fff3cf"),De.textAlign="left"}}for(let Oe of R){if(!Oe.real&&it<3)continue;let mt=nt(Oe.x),Ct=st(Oe.z),dn=pe.has(Oe.n),Ti=4*X;De.beginPath(),De.arc(mt,Ct,Ti,0,7),dn||!Oe.real?(De.fillStyle=Oe.real?"#e0a43a":"#8fb3d9",De.fill()):(De.lineWidth=2*X,De.strokeStyle="#f3ead2",De.stroke()),(dn||!Oe.real||it>=4||["castle","place_of_worship","museum"].includes(Oe.k))&&_t(Oe.n,mt+7*X,Ct+4*X,12)}if(it>=6){De.textAlign="center";for(let Oe of e.doors||[]){let mt=nt(Oe[0]),Ct=st(Oe[1]);mt>-20&&Ct>-20&&mt<Ge.width+20&&Ct<Ge.height+20&&_t(String(Oe[3]),mt,Ct,10,"#ffd2c8")}De.textAlign="left"}if(Be){let Oe=nt(Be.x),mt=st(Be.z);De.beginPath(),De.arc(Oe,mt,7*X,0,7),De.fillStyle="#d9442b",De.strokeStyle="#fff",De.lineWidth=2*X,De.fill(),De.stroke(),_t(Be.label,Oe+10*X,mt-8*X,13,"#ffd9cf")}_e(De,nt(w.x),st(w.z),-H,11*X),a("mapzoom").textContent=`${Ve.zoom.toLocaleString("cs-CZ",{maximumFractionDigits:1})}\xD7`},rn=()=>{V.hidden?(Ve.cx=w.x,Ve.cz=w.z,En(),V.hidden=!1,J.hidden=!0,ee()&&document.exitPointerLock()):K()},us=X=>{let Ce=Ge.getBoundingClientRect(),Pe=Ge.width/Ce.width;return[Ve.cx+((X.clientX-Ce.left)*Pe-Ge.width/2)*At,Ve.cz+((X.clientY-Ce.top)*Pe-Ge.height/2)*At]},no=(X,Ce)=>{let[Pe,Ae]=us(X),He=Ve.zoom;Ve.zoom=Math.min(Tt,Math.max(1,Ve.zoom*Ce));let nt=He/Ve.zoom;Ve.cx=Pe+(Ve.cx-Pe)*nt,Ve.cz=Ae+(Ve.cz-Ae)*nt,En()};Ge.addEventListener("wheel",X=>{X.preventDefault(),no(X,X.deltaY<0?1.25:.8)},{passive:!1});let wn=null;Ge.addEventListener("pointerdown",X=>{wn={x:X.clientX,y:X.clientY,cx:Ve.cx,cz:Ve.cz,moved:!1},Ge.setPointerCapture(X.pointerId)}),Ge.addEventListener("pointermove",X=>{if(!wn)return;let Ce=Ge.getBoundingClientRect(),Pe=Ge.width/Ce.width*At,Ae=X.clientX-wn.x,He=X.clientY-wn.y;Math.hypot(Ae,He)>4&&(wn.moved=!0),wn.moved&&(Ve.cx=wn.cx-Ae*Pe,Ve.cz=wn.cz-He*Pe,En())}),Ge.addEventListener("pointerup",X=>{let Ce=wn;if(wn=null,!Ce||Ce.moved)return;let[Pe,Ae]=us(X);oi(Pe,Ae),K()});for(let[X,Ce]of[["mapin",1.6],["mapout",.625]])a(X).addEventListener("click",()=>{Ve.zoom=Math.min(Tt,Math.max(1,Ve.zoom*Ce)),En()});a("closemap").addEventListener("click",K);let oi=(X,Ce,Pe)=>{O&&(O.dispose(),O=null),ne&&ne.st.mode!=="walk"&&(ne.st.v=0,ne.exit(w),b()),w.set(Math.min(Math.max(X,l+3),h-3),0,Math.min(Math.max(Ce,c+3),f-3)),w.y=Pe??d(w.x,w.z),D.set(0,0,0)},ar=()=>{let X=([Ce,Pe],Ae)=>{let He=w.x-Ce,nt=w.z-Pe,st=Math.hypot(He,nt);st<Ae&&st>1e-6&&(w.x+=He/st*(Ae-st),w.z+=nt/st*(Ae-st))};for(let Ce=0;Ce<2;Ce++){let Pe=O?O.segs:S;if((O?O.near:M)(w.x,w.z,Ae=>{let He=Ae*5;w.y+.3>Pe[He+4]||X(ka(w.x,w.z,Pe[He],Pe[He+1],Pe[He+2],Pe[He+3]),Wd)}),!O)for(let Ae of i.cars.agentPos)w.y>Ae[6]-1&&w.y<Ae[6]+2.5&&X(ka(w.x,w.z,Ae[0]-Ae[3]*Ae[5],Ae[1]-Ae[4]*Ae[5],Ae[0]+Ae[3]*Ae[5],Ae[1]+Ae[4]*Ae[5]),Wd+Ae[2])}},Xi=new B,lr=new B,In=new B,io=X=>{let Ce=(...He)=>He.some(nt=>Y[nt]);if(ne.st.mode!=="walk"){ne.step(X,{throttle:Ce("KeyW","ArrowUp")||ue.y<-.3,brake:Ce("KeyS","ArrowDown")||ue.y>.3,steer:Ce("KeyA","ArrowLeft")-Ce("KeyD","ArrowRight")-(Math.abs(ue.x)>.15?ue.x:0),hand:Ce("Space")},{nearWalls:M,segs:S,closest:ka,onRunOver:(He,nt)=>ne.st.mode==="car"&&j.runOver(He,nt)}),w.set(ne.st.x,ne.st.y,ne.st.z),In.set(0,0,0),(q.t-=X)<0&&(q.yaw*=Math.exp(-X*2.5),q.pitch*=Math.exp(-X*2.5));return}Xi.set(-Math.sin(H),0,-Math.cos(H)),lr.set(Math.cos(H),0,-Math.sin(H)),In.set(0,0,0).addScaledVector(Xi,Ce("KeyW","ArrowUp")-Ce("KeyS","ArrowDown")-ue.y).addScaledVector(lr,Ce("KeyD","ArrowRight")-Ce("KeyA","ArrowLeft")+ue.x);let Pe=Math.min(1,In.length());In.lengthSq()&&In.normalize().multiplyScalar(ue.id!=null?Pe:1);let Ae=Ce("ShiftLeft","ShiftRight")||Math.hypot(ue.x,ue.y)>.95;if(L){let He=U==="jet"?Ae?170:115:Ae?75:28;w.addScaledVector(In,He*X),w.y+=(Ce("Space")-Ce("KeyC","ControlLeft")+(ue.id!=null?-ue.y*Math.sin(N):0))*He*X,ar(),w.y=Math.max(w.y,d(w.x,w.z))}else{let He=Ae?9:4.2;w.x+=In.x*He*X,w.z+=In.z*He*X,ar(),D.y-=22*X,Y.Space&&W&&(D.y=6.2,W=!1),w.y+=D.y*X;let nt=O?O.y:d(w.x,w.z);w.y<=nt||W&&D.y<=0&&w.y-nt<.6?(w.y=nt,D.y=0,W=!0):W=!1}w.x=Math.min(Math.max(w.x,l+3),h-3),w.z=Math.min(Math.max(w.z,c+3),f-3)},so=a("street"),Va=a("coords"),F=a("fps"),me=a("speedo"),be=0,Ee=0,ge=performance.now(),ze={t:0,d:[]},Ye=()=>{let X=20,Ce="";E(w.x,w.z,nt=>{let st=nt*4,[it,_t]=ka(w.x,w.z,_[st],_[st+1],_[st+2],_[st+3]),Oe=Math.hypot(w.x-it,w.z-_t);Oe<X&&(X=Oe,Ce=e.roads[y[nt]].n)}),so.textContent=Ce,so.hidden=!Ce;let Pe=m.lat0-w.z/m.mz,Ae=m.lon0+w.x/m.mx,He=(-H*180/Math.PI%360+360)%360;Va.textContent=`${ei(Pe,5)}\xB0 N  ${ei(Ae,5)}\xB0 E  \xB7  ${ei(w.y)} m a.s.l.  \xB7  ${Xd[Math.round(He/45)%8]} ${ei(He)}\xB0  \xB7  ${i.env.clock()} ${i.env.weather()}${L?`  \xB7  ${U}`:""}`},Qe=()=>{t.setSize(innerWidth,innerHeight),n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),V.hidden||En()};addEventListener("resize",Qe),Qe(),i.scene.add(n);let $e=Nd({city:e,scene:i.scene,groundAt:d,agentPos:i.cars.agentPos,parked:i.cars.parked}),lt=kd({renderer:t,world:i,camera:n}),ht=Kh(e),Ke=new WeakMap,gt={near:(X,Ce)=>{let Pe=ht.near(X,Ce);if(Pe)return{e:Pe,by:ht};for(let Ae of i.tiles)if(Ae.done&&X.x>=Ae.b[0]-3&&X.x<=Ae.b[2]+3&&X.z>=Ae.b[1]-3&&X.z<=Ae.b[3]+3){Ke.has(Ae)||Ke.set(Ae,Kh(Ae.city));let He=Ke.get(Ae).near(X,Ce);if(He)return{e:He,by:Ke.get(Ae)}}return null},build:X=>X.by.build(X.e)},Rt=()=>O&&Math.hypot(w.x-O.start.x,w.z-O.start.z)<1.3,It=X=>{O=gt.build(X),O.near=Ha(O.segs,5,Jh),w.set(O.start.x,O.y,O.start.z),D.set(0,0,0),H=O.yawIn,N=0,Te("Inside","E at the door to go back out")},on=()=>{let X=O;O=null,X.dispose(),w.set(X.out.x,d(X.out.x,X.out.z),X.out.z),D.set(0,0,0),H=X.yawOut,N=0};ne=Rd({world:i,city:e,groundAt:d,camera:n,scene:i.scene,audio:ve,fleet:$e}),i.env.onThunder=X=>ve.thunder(X);let vt=(X,Ce)=>{let Pe=null,Ae=1/0;for(let He of R)if(He.real&&!pe.has(He.n)){let nt=Math.hypot(He.x-X,He.z-Ce);nt<Ae&&nt>30&&(Ae=nt,Pe=He)}return Pe},Ze=Pd({city:e,world:i,errands:Ie,el:a("talk"),toast:Te,setTarget:tt,undiscovered:vt}),vn=e.places.find(X=>X.k==="police"||/police|policie/i.test(X.n));j=Dd({camera:n,scene:i.scene,people:i.people,groundAt:d,wantedEl:a("wanted"),weaponEl:a("weapon"),toast:Te,audio:ve,onArrest:()=>{let X=vn?vn.x+5:e.spawn[0],Ce=vn?vn.z+5:e.spawn[1];oi(X,Ce),b(),Ie.fine(250)}}),ie=Ud({city:e,world:i,scene:i.scene,camera:n,renderer:t,veh:ne,fleet:$e,errands:Ie,toast:Te,setTarget:tt,audio:ve});let ut={walk:0,car:0,bike:0},an=null,ti=0,kt=X=>`${ei(X/1e3,1)} km`,qi=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Lt=X=>{let Ce=new Date(X*864e5);return`${qi[Ce.getUTCDay()]} ${Ce.getUTCDate()}. ${Ce.getUTCMonth()+1}.`},Tn=(X,Ce,Pe)=>{X.innerHTML="";let Ae=document.createElement("h2");Ae.textContent=Ce,X.append(Ae);let He=[];for(let[nt,st]of Pe)if(nt==="h"){let it=document.createElement("h3");it.textContent=st,X.append(it)}else if(nt==="p"){let it=document.createElement("p");it.textContent=st,X.append(it)}else if(nt==="rows"){let it=document.createElement("table");for(let[_t,Oe]of st){let mt=it.insertRow();mt.insertCell().textContent=_t,mt.insertCell().textContent=Oe}X.append(it)}else if(nt==="go"){let[it,_t,Oe,mt]=st,Ct=document.createElement("button"),dn=document.createElement("kbd"),Ti=document.createElement("span"),$h=document.createElement("span");dn.textContent=He.length+1,Ti.textContent=it,$h.textContent=`${ei(Math.hypot(_t-w.x,Oe-w.z))} m`,Ct.type="button",Ct.append(dn,Ti,$h);let eu=()=>{tt(_t,Oe,mt||it),Te("Guiding you",mt||it)};Ct.addEventListener("click",eu),He.push(eu),X.append(Ct)}return He},ni=(()=>{let X=a("phone"),Ce=!1,Pe=[],Ae=0,He=()=>{let nt=i.env.st,st=Ie.stats(),it=[["p",`${Lt(nt.day)} \xB7 ${i.env.clock()} \xB7 ${i.env.weather()} \xB7 ${Ie.kc(Ie.money())}`],["h","Tasks"]];for(let Oe of Ie.tasks())Oe.done||(Oe.type==="buy"?it.push(["go",[`Buy ${Oe.item} \xB7 ${Oe.shop}`,Oe.x,Oe.z,Oe.shop]]):Oe.type==="visit"?it.push(["go",[`Visit ${Oe.place}`,Oe.x,Oe.z,Oe.place]]):it.push(["go",Oe.got?[`Bring ${Oe.item} to ${Oe.from} \xB7 ${Oe.addr}`,Oe.x,Oe.z,Oe.addr]:[`Buy ${Oe.item} for ${Oe.from} \xB7 ${Oe.shop}`,Oe.sx,Oe.sz,Oe.shop]]));Ie.tasks().some(Oe=>!Oe.done)||it.push(["p","All done. Ask people if they need a hand (E)."]),Ie.bag().length&&it.push(["p",`Bag: ${Ie.bag().slice(-8).join(", ")}`]),ie.status()&&it.push(["h","Duty"],["p",ie.status()]),it.push(["h","Forecast"],["rows",[["now",i.env.weather()],...i.env.forecast().map(Oe=>[Oe.at,Oe.name])]]);let _t=vt(w.x,w.z);it.push(["h",`Places \xB7 ${pe.size} of ${he} found`]),_t&&it.push(["go",[`Nearest new: ${_t.n}`,_t.x,_t.z,_t.n]]),it.push(["h","Today"],["rows",[["walked",kt(ut.walk)],["driven",kt(ut.car)],["cycled",kt(ut.bike)],["errands done",ei(st.done)],["spent",Ie.kc(st.spent)],["earned",Ie.kc(st.earned)]]]),it.push(["p","1\u20139 guide me there \xB7 P or Esc to close"]),Pe=Tn(X,"Phone",it)};return{toggle:()=>{Ce=!Ce,X.hidden=!Ce,Ce&&He()},refresh:()=>{Ce&&(Ae+=.25)>=1&&(Ae=0,He())},key:nt=>{if(!Ce)return!1;if(nt==="Escape"||nt==="KeyP")return Ce=!1,X.hidden=!0,!0;let st=/^Digit([1-9])$/.exec(nt);return st&&Pe[st[1]-1]?(Pe[st[1]-1](),Ce=!1,X.hidden=!0,!0):!1}}})(),ln=(()=>{let X=a("summary"),Ce=0;return{show:Pe=>{let Ae=Ie.resetStats();Tn(X,`${Lt(Pe)} is over`,[["rows",[["walked",kt(ut.walk)],["driven",kt(ut.car)],["cycled",kt(ut.bike)],["errands done",ei(Ae.done)],["spent",Ie.kc(Ae.spent)],["earned",Ie.kc(Ae.earned)],["places found",ei(ti)],["wallet",Ie.kc(Ie.money())]]],["p","Good night, Fulnek. E to continue."]]),X.hidden=!1,Ce=12,ut.walk=ut.car=ut.bike=0,ti=0;let He=()=>{(Ce-=1)<=0?X.hidden=!0:setTimeout(He,1e3)};setTimeout(He,1e3)},key:Pe=>X.hidden||!(Pe==="KeyE"||Pe==="Escape")?!1:(X.hidden=!0,!0)}})(),Gn=performance.now(),Wn=X=>{let Ce=X-Gn,Pe=Math.max(0,Math.min(Ce/1e3,.05));Gn=X;let Ae=J.hidden&&V.hidden;if(r?.update(w),i.segsVersion!==x&&(x=i.segsVersion,S=i.segs,T()),Ae){let st=w.x,it=w.z;io(Pe),L||(ut[ne.st.mode]+=Math.min(50,Math.hypot(w.x-st,w.z-it)))}Ae&&ce&&xe(),Ae&&j.update(Pe,w,H,L?"fly":ne.st.mode,M,S,ne.st.mode==="car"?ne.st:null,i.cars.agentPos),Ae&&ie.update(Pe,{pos:w,firing:ce&&V.hidden&&!Ze.isOpen()});let He=i.env.st,nt=Ae&&!L&&W&&In.lengthSq()>0;if(i.cars.honk&&(i.cars.honk=!1,ve.horn()),i.people.dogDist<9&&Math.random()<Pe*.12&&ve.bark(),ve.update({dt:Pe,wind:pt.uWind.value,rain:He.rain,day:1-pt.uNight.value,carDist:i.cars.nearest,drive:ne.st.mode==="car"?Math.min(1,Math.abs(ne.st.v)/20):void 0,moving:nt,running:nt&&(Y.ShiftLeft||Y.ShiftRight),hour:He.hour}),L&&k){k.group.position.set(w.x,w.y+1.2,w.z),k.group.rotation.set(0,H,0),k.rotors.forEach((_t,Oe)=>{_t.rotation.y+=Pe*(Oe?22:34)});let st=-Math.sin(H),it=-Math.cos(H);n.position.set(w.x-st*(U==="jet"?18:14),w.y+(U==="jet"?7:6),w.z-it*(U==="jet"?18:14)),n.lookAt(w.x+st*14,w.y+1.5,w.z+it*14)}else ne.view(Pe,pt.uNight.value,q.yaw,q.pitch)||(n.position.set(w.x,w.y+cM,w.z),n.rotation.set(N,H,0,"YXZ"));if(i.update(Pe,n.position,w,X/1e3),O?(O.update(w),n.updateMatrixWorld(),t.render(O.scene,n)):lt.render(Pe),Ue(),(be+=Pe)>.25){be=0,Ye(),ke(),Ie.update(w,i.env.st.hour,i.env.st.day);let st=ne.st.mode!=="walk",it=a("hint");me.hidden=!st,st&&(me.textContent=`${ei(ne.speed())} km/h`),Ze.update(w);let _t=ie.hint(w);if(_t)it.hidden=!1,it.textContent=_t;else if(st||Ze.isOpen())it.hidden=!0;else if(it.hidden&&!Ie.isOpen()){let mt=!O&&Ze.nearName(w),Ct=O?Rt()?"E \xB7 go outside":"":mt?`E \xB7 talk to ${mt}`:ne.nearHint(w)||(W&&!L&&gt.near(w,H)?"E \xB7 go inside":"");it.hidden=!Ct,it.textContent=Ct}let Oe=a("target");if(Be){let mt=Math.hypot(Be.x-w.x,Be.z-w.z),Ct=(Math.atan2(Be.x-w.x,-(Be.z-w.z))*180/Math.PI+360)%360;mt<12&&!Be.quiet?(Te("You're there",Be.label),Be=null,Oe.hidden=!0):(Oe.hidden=!1,Oe.textContent=`\u2192 ${Be.label} \xB7 ${ei(mt)} m ${Xd[Math.round(Ct/45)%8]}`)}else Oe.hidden=!0;ni.refresh(),He.day!==an&&(an!==null&&ln.show(an),an=He.day)}Se>0&&(Se-=Pe)<=0&&(Le.hidden=!0),Ae&&ze.t<6&&(ze.t+=Pe,ze.d.push(Ce),ze.t>=6&&1e3/ze.d.sort((it,_t)=>it-_t)[ze.d.length>>1]<24&&i.quality()!=="low"&&(i.setQuality(sr[Math.max(0,sr.indexOf(i.quality())-1)]),Te("Graphics",`Lowered to ${i.quality()} for smoother play \xB7 G to change`))),Ee++,X-ge>=1e3&&(F.textContent=`${Math.round(Ee*1e3/(X-ge))} fps \xB7 ${i.quality()} quality (G)`,Ee=0,ge=X),requestAnimationFrame(Wn)};requestAnimationFrame(Wn),Ye(),window.__fulnek={world:i,renderer:t,teleport:oi,pose:(X,Ce,Pe,Ae,He,nt=!1)=>{oi(X,Ce,He),H=Pe,N=Ae,L=nt},state:()=>({x:w.x,y:w.y,z:w.z,yaw:H,pitch:N,fly:L,mode:ne.st.mode}),press:te,keys:Y,veh:ne,crime:j,services:ie,post:lt,room:()=>O,interiors:gt,goIn:It,talk:Ze,phone:ni,summary:ln,errands:Ie,setTarget:tt,sim:X=>{for(let Ce=0;Ce<X;Ce+=1/60)io(1/60)}}}var hM=1100,uM=2200,fM=6;function Yd({world:i,list:e}){let t=nr(),n="0_0",s=e.filter(u=>u.id!==n).map(u=>({...u,b:[t.x(u.W),t.z(u.N),t.x(u.E),t.z(u.S)],state:"out"})),r=(u,p,g)=>Math.hypot(Math.max(u[0]-p,0,p-u[2]),Math.max(u[1]-g,0,g-u[3])),o=null,a=0,l=u=>new Promise((p,g)=>{let v=document.createElement("script");v.src=u,v.onload=()=>{v.remove(),p()},v.onerror=()=>{v.remove(),g(new Error("missing "+u))},document.head.append(v)}),c=async u=>{u.state="loading";try{await l(`data/tiles/${u.id}/city.js`);let p=window.FULNEK_CITY;await l(`data/tiles/${u.id}/ortho.js`);let g=window.FULNEK_ORTHO;window.FULNEK_CITY=window.FULNEK_ORTHO=null;let v=new Image;v.src=g,await v.decode();let m=await createImageBitmap(v,{imageOrientation:"flipY"});if(u.state!=="loading")return;u.state="building",u.gen=i.addTile(u.id,p,v,m)}catch(p){console.warn(p.message),u.state="failed"}},h=u=>{let p=performance.now();for(let v of s)if(v.state==="building"){for(;performance.now()-p<fM;)if(v.gen.next().done){v.state="in",v.gen=null;break}break}if(p<a)return;a=p+500;for(let v of s)v.state!=="out"&&v.state!=="loading"&&r(v.b,u.x,u.z)>uM&&(i.removeTile(v.id),v.state="out",v.gen=null);if(o)return;let g=s.filter(v=>v.state==="out"&&r(v.b,u.x,u.z)<hM).sort((v,m)=>r(v.b,u.x,u.z)-r(m.b,u.x,u.z))[0];g&&!s.some(v=>v.state==="building")&&(o=c(g).finally(()=>o=null))},f=s.reduce((u,p)=>[Math.min(u[0],p.b[0]),Math.min(u[1],p.b[1]),Math.max(u[2],p.b[2]),Math.max(u[3],p.b[3])],[...i.homeBounds]);return{update:h,extent:f,tiles:s,busy:()=>!!o||s.some(u=>u.state==="building")}}var Qh=document.getElementById("status"),Zd=i=>(Qh.textContent=i,new Promise(e=>setTimeout(e,30)));async function dM(){let i=window.FULNEK_CITY,e=window.FULNEK_ORTHO;if(!i||!e)throw new Error("The map data didn't load. Keep the data folder next to index.html.");let t=new $o({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.shadowMap.enabled=!0,t.shadowMap.type=$c,t.toneMapping=kr,document.getElementById("view").appendChild(t.domElement),await Zd("Developing the aerial photo");let n=new Image;n.src=e,await n.decode();let s=window.FULNEK_OVERVIEW,r=s?{data:s,img:new Image}:null;r&&(r.img.src=s.photo,await r.img.decode()),await Zd(`Raising ${i.buildings.length.toLocaleString("cs-CZ")} buildings and planting trees`);let o=bd(i,n,t,r),a=Yd({world:o,list:window.FULNEK_TILES||[]});o.extent=a.extent;let l=new tn(70,innerWidth/innerHeight,.25,16e3);qd({world:o,city:i,renderer:t,camera:l,ortho:n,stream:a,overview:r});let c=f=>f.toLocaleString("cs-CZ"),h=o.counts;document.getElementById("facts").textContent=`${c(i.buildings.length)} buildings \xB7 ${c(h.trees)} trees \xB7 ${c(h.bushes)} bushes \xB7 ${c(h.people)} people \xB7 ${c(h.dogs)} dogs \xB7 ${c(h.cars+h.traffic)} cars`,document.getElementById("credits").textContent=i.credits,document.getElementById("go").disabled=!1,document.body.classList.add("ready")}dM().catch(i=>{console.error(i),Qh.textContent="Couldn't start: "+i.message,Qh.classList.add("error")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
