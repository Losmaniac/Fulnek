(()=>{var Lc="170";var Md=0,Sh=1,_d=2;var ku=1,Dc=2,jn=3,yi=0,jt=1,pt=2,Lt=0,vs=1,Mn=2,bh=3,Eh=4,Nc=5,xn=100,Sd=101,bd=102,Ed=103,wd=104,Fs=200,Td=201,Ad=202,Rd=203,sl=204,rl=205,ea=206,Cd=207,ta=208,Pd=209,Id=210,Ld=211,Dd=212,Nd=213,Ud=214,ol=0,al=1,ll=2,Ss=3,cl=4,hl=5,ul=6,fl=7,Uc=0,zd=1,Od=2,vi=0,zc=1,Oc=2,Fc=3,Bc=4,Fd=5,Hc=6,Rr=7;var Vu=300,bs=301,Es=302,dl=303,pl=304,na=306,_n=1e3,Jn=1001,ml=1002,Dt=1003,Bd=1004;var Gr=1005;var nn=1006,ba=1007;var Qn=1008;var Ln=1009,Gu=1010,Wu=1011,pr=1012,kc=1013,Fi=1014,Hn=1015,Gt=1016,Vc=1017,Gc=1018,Mi=1020,Xu=35902,qu=1021,Yu=1022,en=1023,Zu=1024,ju=1025,ys=1026,_i=1027,Wc=1028,Xc=1029,Ku=1030,qc=1031;var Yc=1033,bo=33776,Eo=33777,wo=33778,To=33779,gl=35840,xl=35841,vl=35842,yl=35843,Ml=36196,_l=37492,Sl=37496,bl=37808,El=37809,wl=37810,Tl=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Ll=37817,Dl=37818,Nl=37819,Ul=37820,zl=37821,Ao=36492,Ol=36494,Fl=36495,Ju=36283,Bl=36284,Hl=36285,kl=36286;var Ro=2300,Vl=2301,Ea=2302,wh=2400,Th=2401,Ah=2402;var Hd=3200,kd=3201;var ia=0,Vd=1,vn="",_t="srgb",Bs="srgb-linear",sa="linear",ut="srgb";var Ji=7680;var Rh=519,Gd=512,Wd=513,Xd=514,Qu=515,qd=516,Yd=517,Zd=518,jd=519,Gl=35044,tn=35048;var Ch="300 es",$n=2e3,Co=2001,Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,cr=Math.PI/180,ws=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function Zc(i,e){return(i%e+e)%e}function Kd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function hr(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return hr(i,e,1-Math.exp(-t*n))}function $d(i,e=1){return e-Math.abs(Zc(i,e*2)-e)}function ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ip(i,e){return i+Math.random()*(e-i)}function sp(i){return i*(.5-Math.random())}function rp(i){i!==void 0&&(Ph=i);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function op(i){return i*cr}function ap(i){return i*ws}function lp(i){return(i&i-1)===0&&i!==0}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ii={DEG2RAD:cr,RAD2DEG:ws,generateUUID:kn,clamp:Bt,euclideanModulo:Zc,mapLinear:Kd,inverseLerp:Jd,lerp:hr,damp:Qd,pingpong:$d,smoothstep:ep,smootherstep:tp,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:op,radToDeg:ap,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:hp,setQuaternionFromProperEuler:up,normalize:dt,denormalize:In},Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],v=s[0],m=s[3],u=s[6],b=s[1],g=s[4],_=s[7],D=s[2],C=s[5],w=s[8];return r[0]=o*v+a*b+l*D,r[3]=o*m+a*g+l*C,r[6]=o*u+a*_+l*w,r[1]=c*v+h*b+f*D,r[4]=c*m+h*g+f*C,r[7]=c*u+h*_+f*w,r[2]=d*v+p*b+x*D,r[5]=d*m+p*g+x*C,r[8]=d*u+p*_+x*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,p=c*r-o*l,x=t*f+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wa=new rt;function $u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fp(){let i=Po("canvas");return i.style.display="block",i}var Ih={};function ar(i){i in Ih||(Ih[i]=!0,console.warn(i))}function dp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function pp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var at={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vn?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lh=[.64,.33,.3,.6,.15,.06],Dh=[.2126,.7152,.0722],Nh=[.3127,.329],Uh=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[Bs]:{primaries:Lh,whitePoint:Nh,transfer:sa,toXYZ:Uh,fromXYZ:zh,luminanceCoefficients:Dh,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:Lh,whitePoint:Nh,transfer:ut,toXYZ:Uh,fromXYZ:zh,luminanceCoefficients:Dh,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var Qi,Wl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Po("canvas")),Qi.width=e.width,Qi.height=e.height;let n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gp=0,Io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ta(s[o].image)):r.push(Ta(s[o]))}else r=Ta(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xp=0,Nt=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=nn,o=Qn,a=en,l=Ln,c=i.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=kn(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Vu;Nt.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],x=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,_=(p+1)/2,D=(u+1)/2,C=(h+d)/4,w=(f+v)/4,M=(x+m)/4;return g>_&&g>D?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=C/n,r=w/n):_>D?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=M/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=M/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(f-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Nt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tt=class extends Xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lo=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ft=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==d||c!==p||h!==x){let m=1-a,u=l*d+c*p+h*x+f*v,b=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){let D=Math.sqrt(g),C=Math.atan2(D,u*b);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let _=a*b;if(l=l*m+d*_,c=c*m+p*_,h=h*m+x*_,f=f*m+v*_,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*f+l*p-c*d,e[t+1]=l*x+h*d+c*f-a*p,e[t+2]=c*x+h*p+a*d-l*f,e[t+3]=h*x-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"YZX":this._x=d*h*f+c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f-d*p*x;break;case"XZY":this._x=d*h*f-c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new O,Oh=new ft,Dn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Xr.subVectors(this.max,Ks),$i.subVectors(e.a,Ks),es.subVectors(e.b,Ks),ts.subVectors(e.c,Ks),ui.subVectors(es,$i),fi.subVectors(ts,es),Pi.subVectors($i,ts);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Pi.z,Pi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Pi.z,0,-Pi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Pi.y,Pi.x,0];return!Ra(t,$i,es,ts,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,$i,es,ts,Xr))?!1:(qr.crossVectors(ui,fi),t=[qr.x,qr.y,qr.z],Ra(t,$i,es,ts,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wn=[new O,new O,new O,new O,new O,new O,new O,new O],Rn=new O,Wr=new Dn,$i=new O,es=new O,ts=new O,ui=new O,fi=new O,Pi=new O,Ks=new O,Xr=new O,qr=new O,Ii=new O;function Ra(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var vp=new Dn,Js=new O,Ca=new O,ti=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ca)),this.expandByPoint(Js.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new O,Pa=new O,Yr=new O,di=new O,Ia=new O,Zr=new O,La=new O,Ts=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pa.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Pa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=di.dot(this.direction),l=-di.dot(Yr),c=di.lengthSq(),h=Math.abs(1-o*o),f,d,p,x;if(h>0)if(f=o*l-a,d=o*a-l,x=r*h,f>=0)if(d>=-x)if(d<=x){let v=1/h;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pa).addScaledVector(Yr,d),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){Ia.subVectors(t,e),Zr.subVectors(n,e),La.crossVectors(Ia,Zr);let o=this.direction.dot(La),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);let l=a*this.direction.dot(Zr.crossVectors(di,Zr));if(l<0)return null;let c=a*this.direction.dot(Ia.cross(di));if(c<0||l+c>o)return null;let h=-a*di.dot(La);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,d,p,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,d,p,x,v,m)}set(e,t,n,s,r,o,a,l,c,h,f,d,p,x,v,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=x,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*f,x=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,x=c*h,v=c*f;t[0]=d+v*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,x=c*h,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*f,x=a*h,v=a*f;t[0]=l*h,t[4]=x*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=v-d*f,t[8]=x*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+x,t[10]=d-v*f}else if(e.order==="XZY"){let d=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=o*h,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yp,e,Mp)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),pi.crossVectors(n,an),pi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),pi.crossVectors(n,an)),pi.normalize(),jr.crossVectors(an,pi),s[0]=pi.x,s[4]=jr.x,s[8]=an.x,s[1]=pi.y,s[5]=jr.y,s[9]=an.y,s[2]=pi.z,s[6]=jr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],v=n[6],m=n[10],u=n[14],b=n[3],g=n[7],_=n[11],D=n[15],C=s[0],w=s[4],M=s[8],y=s[12],S=s[1],E=s[5],P=s[9],T=s[13],A=s[2],G=s[6],H=s[10],L=s[14],N=s[3],k=s[7],V=s[11],Y=s[15];return r[0]=o*C+a*S+l*A+c*N,r[4]=o*w+a*E+l*G+c*k,r[8]=o*M+a*P+l*H+c*V,r[12]=o*y+a*T+l*L+c*Y,r[1]=h*C+f*S+d*A+p*N,r[5]=h*w+f*E+d*G+p*k,r[9]=h*M+f*P+d*H+p*V,r[13]=h*y+f*T+d*L+p*Y,r[2]=x*C+v*S+m*A+u*N,r[6]=x*w+v*E+m*G+u*k,r[10]=x*M+v*P+m*H+u*V,r[14]=x*y+v*T+m*L+u*Y,r[3]=b*C+g*S+_*A+D*N,r[7]=b*w+g*E+_*G+D*k,r[11]=b*M+g*P+_*H+D*V,r[15]=b*y+g*T+_*L+D*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],x=e[3],v=e[7],m=e[11],u=e[15];return x*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-t*l*f+t*a*d+s*o*f-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],x=e[12],v=e[13],m=e[14],u=e[15],b=f*m*c-v*d*c+v*l*p-a*m*p-f*l*u+a*d*u,g=x*d*c-h*m*c-x*l*p+o*m*p+h*l*u-o*d*u,_=h*v*c-x*f*c+x*a*p-o*v*p-h*a*u+o*f*u,D=x*f*l-h*v*l-x*a*d+o*v*d+h*a*m-o*f*m,C=t*b+n*g+s*_+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=b*w,e[1]=(v*d*r-f*m*r-v*s*p+n*m*p+f*s*u-n*d*u)*w,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*u+n*l*u)*w,e[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*p-n*l*p)*w,e[4]=g*w,e[5]=(h*m*r-x*d*r+x*s*p-t*m*p-h*s*u+t*d*u)*w,e[6]=(x*l*r-o*m*r-x*s*c+t*m*c+o*s*u-t*l*u)*w,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*w,e[8]=_*w,e[9]=(x*f*r-h*v*r-x*n*p+t*v*p+h*n*u-t*f*u)*w,e[10]=(o*v*r-x*a*r+x*n*c-t*v*c-o*n*u+t*a*u)*w,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*p-t*a*p)*w,e[12]=D*w,e[13]=(h*v*s-x*f*s+x*n*d-t*v*d-h*n*m+t*f*m)*w,e[14]=(x*a*s-o*v*s-x*n*l+t*v*l+o*n*m-t*a*m)*w,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,p=r*h,x=r*f,v=o*h,m=o*f,u=a*f,b=l*c,g=l*h,_=l*f,D=n.x,C=n.y,w=n.z;return s[0]=(1-(v+u))*D,s[1]=(p+_)*D,s[2]=(x-g)*D,s[3]=0,s[4]=(p-_)*C,s[5]=(1-(d+u))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(x+g)*w,s[9]=(m-b)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let c=1/r,h=1/o,f=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=$n){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(a===$n)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Co)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$n){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),d=(t+e)*c,p=(n+s)*h,x,v;if(a===$n)x=(o+r)*f,v=-2*f;else if(a===Co)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ns=new O,Cn=new We,yp=new O(0,0,0),Mp=new O(1,1,1),pi=new O,jr=new O,an=new O,Fh=new We,Bh=new ft,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_p=0,Hh=new O,is=new ft,qn=new We,Kr=new O,Qs=new O,Sp=new O,bp=new ft,kh=new O(1,0,0),Vh=new O(0,1,0),Gh=new O(0,0,1),Wh={type:"added"},Ep={type:"removed"},ss={type:"childadded",child:null},Da={type:"childremoved",child:null},Pt=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new cn,n=new ft,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new rt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Qs,Kr,this.up):qn.lookAt(Kr,Qs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(qn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ep),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new O(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new O,Yn=new O,Na=new O,Zn=new O,rs=new O,os=new O,Xh=new O,Ua=new O,za=new O,Oa=new O,Fa=new gt,Ba=new gt,Ha=new gt,xi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),Yn.subVectors(n,t),Na.subVectors(e,t);let o=Pn.dot(Pn),a=Pn.dot(Yn),l=Pn.dot(Na),c=Yn.dot(Yn),h=Yn.dot(Na),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Fa.setScalar(0),Ba.setScalar(0),Ha.setScalar(0),Fa.fromBufferAttribute(e,t),Ba.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fa,r.x),o.addScaledVector(Ba,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),Yn.subVectors(e,t),Pn.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Pn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,n),os.subVectors(r,n),Ua.subVectors(e,n);let l=rs.dot(Ua),c=os.dot(Ua);if(l<=0&&c<=0)return t.copy(n);za.subVectors(e,s);let h=rs.dot(za),f=os.dot(za);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(rs,o);Oa.subVectors(e,r);let p=rs.dot(Oa),x=os.dot(Oa);if(x>=0&&p<=x)return t.copy(r);let v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(os,a);let m=h*x-p*f;if(m<=0&&f-h>=0&&p-x>=0)return Xh.subVectors(r,s),a=(f-h)/(f-h+(p-x)),t.copy(s).addScaledVector(Xh,a);let u=1/(m+v+d);return o=v*u,a=d*u,t.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Zc(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ka(o,r,e+1/3),this.g=ka(o,r,e),this.b=ka(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return at.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Bt(Zt.r*255,0,255))*65536+Math.round(Bt(Zt.g*255,0,255))*256+Math.round(Bt(Zt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Zt.copy(this),t);let n=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=_t){at.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,s=Zt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Jr);let n=hr(mi.h,Jr.h,t),s=hr(mi.s,Jr.s,t),r=hr(mi.l,Jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new ze;ze.NAMES=ef;var wp=0,Sn=class extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=kn(),this.name="",this.blending=vs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xt=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new O,Qr=new Se,lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var Do=class extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var No=class extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tp=0,gn=new We,Va=new Pt,as=new O,ln=new Dn,$s=new Dn,Ft=new O,et=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?No:Do)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(ln.min,$s.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,$s.max),ln.expandByPoint(Ft)):(ln.expandByPoint($s.min),ln.expandByPoint($s.max))}ln.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),Ft.add(as)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new O,l[M]=new O;let c=new O,h=new O,f=new O,d=new Se,p=new Se,x=new Se,v=new O,m=new O;function u(M,y,S){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,S),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,y),x.fromBufferAttribute(r,S),h.sub(c),f.sub(c),p.sub(d),x.sub(d);let E=1/(p.x*x.y-x.x*p.y);isFinite(E)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(E),a[M].add(v),a[y].add(v),a[S].add(v),l[M].add(m),l[y].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let M=0,y=b.length;M<y;++M){let S=b[M],E=S.start,P=S.count;for(let T=E,A=E+P;T<A;T+=3)u(e.getX(T+0),e.getX(T+1),e.getX(T+2))}let g=new O,_=new O,D=new O,C=new O;function w(M){D.fromBufferAttribute(s,M),C.copy(D);let y=a[M];g.copy(y),g.sub(D.multiplyScalar(D.dot(y))).normalize(),_.crossVectors(C,y);let E=_.dot(l[M])<0?-1:1;o.setXYZW(M,g.x,g.y,g.z,E)}for(let M=0,y=b.length;M<y;++M){let S=b[M],E=S.start,P=S.count;for(let T=E,A=E+P;T<A;T+=3)w(e.getX(T+0)),w(e.getX(T+1)),w(e.getX(T+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let u=0;u<h;u++)d[x++]=c[p++]}return new lt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new We,Li=new Ts,$r=new ti,Yh=new O,eo=new O,to=new O,no=new O,Ga=new O,io=new O,Zh=new O,so=new O,qe=class extends Pt{constructor(e=new et,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Ga.fromBufferAttribute(f,e),o?io.addScaledVector(Ga,h):io.addScaledVector(Ga.sub(t),h))}t.add(io)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!($r.containsPoint(Li.origin)===!1&&(Li.intersectSphere($r,Yh)===null||Li.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(qh.copy(r).invert(),Li.copy(e.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){let m=d[x],u=o[m.materialIndex],b=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,D=g;_<D;_+=3){let C=a.getX(_),w=a.getX(_+1),M=a.getX(_+2);s=ro(this,u,e,n,c,h,f,C,w,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){let b=a.getX(m),g=a.getX(m+1),_=a.getX(m+2);s=ro(this,o,e,n,c,h,f,b,g,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){let m=d[x],u=o[m.materialIndex],b=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,D=g;_<D;_+=3){let C=_,w=_+1,M=_+2;s=ro(this,u,e,n,c,h,f,C,w,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){let b=m,g=m+1,_=m+2;s=ro(this,o,e,n,c,h,f,b,g,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ap(i,e,t,n,s,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===yi,a),l===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:i}}function ro(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,eo),i.getVertexPosition(l,to),i.getVertexPosition(c,no);let h=Ap(i,e,t,n,eo,to,no,Zh);if(h){let f=new O;xi.getBarycoord(Zh,eo,to,no,f),s&&(h.uv=xi.getInterpolatedAttribute(s,a,l,c,f,new Se)),r&&(h.uv1=xi.getInterpolatedAttribute(r,a,l,c,f,new Se)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};xi.getNormal(eo,to,no,d.normal),h.face=d,h.barycoord=f}return h}var je=class i extends et{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function x(v,m,u,b,g,_,D,C,w,M,y){let S=_/w,E=D/M,P=_/2,T=D/2,A=C/2,G=w+1,H=M+1,L=0,N=0,k=new O;for(let V=0;V<H;V++){let Y=V*E-T;for(let j=0;j<G;j++){let K=j*S-P;k[v]=K*b,k[m]=Y*g,k[u]=A,c.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[u]=C>0?1:-1,h.push(k.x,k.y,k.z),f.push(j/w),f.push(1-V/M),L+=1}}for(let V=0;V<M;V++)for(let Y=0;Y<w;Y++){let j=d+Y+G*V,K=d+Y+G*(V+1),W=d+(Y+1)+G*(V+1),q=d+(Y+1)+G*V;l.push(j,K,q),l.push(K,W,q),N+=6}a.addGroup(p,N,y),p+=N,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function As(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){let e={};for(let t=0;t<i.length;t++){let n=As(i[t]);for(let s in n)e[s]=n[s]}return e}function Rp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Ht={clone:As,merge:$t},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends Sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Uo=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new O,jh=new Se,Kh=new Se,Vt=class extends Uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Kh),t.subVectors(Kh,jh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ls=-90,cs=1,Yl=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(ls,cs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(ls,cs,e,t);r.layers=this.layers,this.add(r);let o=new Vt(ls,cs,e,t);o.layers=this.layers,this.add(o);let a=new Vt(ls,cs,e,t);a.layers=this.layers,this.add(a);let l=new Vt(ls,cs,e,t);l.layers=this.layers,this.add(l);let c=new Vt(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},zo=class extends Nt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zl=class extends Tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Lt});r.uniforms.tEquirect.value=t;let o=new qe(s,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=nn),new Yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Wa=new O,Ip=new O,Lp=new rt,Kn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wa.subVectors(n,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lp.getNormalMatrix(e),s=this.coplanarPoint(Wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new ti,oo=new O,gr=class{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],p=s[8],x=s[9],v=s[10],m=s[11],u=s[12],b=s[13],g=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-p,_-u).normalize(),n[1].setComponents(l+r,d+c,m+p,_+u).normalize(),n[2].setComponents(l+o,d+h,m+x,_+b).normalize(),n[3].setComponents(l-o,d-h,m-x,_-b).normalize(),n[4].setComponents(l-a,d-f,m-v,_-g).normalize(),t===$n)n[5].setComponents(l+a,d+f,m+v,_+g).normalize();else if(t===Co)n[5].setComponents(a,f,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dp(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){let x=f[d],v=f[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){let v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sn=class i extends et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,p=[],x=[],v=[],m=[];for(let u=0;u<h;u++){let b=u*d-o;for(let g=0;g<c;g++){let _=g*f-r;x.push(_,-b,0),v.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){let g=b+c*u,_=b+c*(u+1),D=b+1+c*(u+1),C=b+1+c*u;p.push(g,_,C),p.push(_,D,C)}this.setIndex(p),this.setAttribute("position",new Ke(x,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,im=`#define PI 3.141592653589793
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
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#endif`,Lm=`struct PhysicalMaterial {
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
}`,Dm=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
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
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,_0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,j0=`#define LAMBERT
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
}`,K0=`#define LAMBERT
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
}`,J0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`#define TOON
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
}`,ag=`uniform float size;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Np,alphahash_pars_fragment:Up,alphamap_fragment:zp,alphamap_pars_fragment:Op,alphatest_fragment:Fp,alphatest_pars_fragment:Bp,aomap_fragment:Hp,aomap_pars_fragment:kp,batching_pars_vertex:Vp,batching_vertex:Gp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Qp,color_fragment:$p,color_pars_fragment:em,color_pars_vertex:tm,color_vertex:nm,common:im,cube_uv_reflection_fragment:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:fm,envmap_common_pars_fragment:dm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Tm,envmap_vertex:gm,fog_vertex:xm,fog_pars_vertex:vm,fog_fragment:ym,fog_pars_fragment:Mm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:Sm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Em,lights_pars_begin:wm,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Im,lights_physical_pars_fragment:Lm,lights_fragment_begin:Dm,lights_fragment_maps:Nm,lights_fragment_end:Um,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Bm,map_fragment:Hm,map_pars_fragment:km,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphinstance_vertex:qm,morphcolor_vertex:Ym,morphnormal_vertex:Zm,morphtarget_pars_vertex:jm,morphtarget_vertex:Km,normal_fragment_begin:Jm,normal_fragment_maps:Qm,normal_pars_fragment:$m,normal_pars_vertex:e0,normal_vertex:t0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:f0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:x0,shadowmask_pars_fragment:v0,skinbase_vertex:y0,skinning_pars_vertex:M0,skinning_vertex:_0,skinnormal_vertex:S0,specularmap_fragment:b0,specularmap_pars_fragment:E0,tonemapping_fragment:w0,tonemapping_pars_fragment:T0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:I0,worldpos_vertex:L0,background_vert:D0,background_frag:N0,backgroundCube_vert:U0,backgroundCube_frag:z0,cube_vert:O0,cube_frag:F0,depth_vert:B0,depth_frag:H0,distanceRGBA_vert:k0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:Z0,meshlambert_vert:j0,meshlambert_frag:K0,meshmatcap_vert:J0,meshmatcap_frag:Q0,meshnormal_vert:$0,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:lg,shadow_vert:cg,shadow_frag:hg,sprite_vert:ug,sprite_frag:fg},ke={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Bn={basic:{uniforms:$t([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$t([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ze(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$t([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$t([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$t([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new ze(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$t([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$t([ke.points,ke.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$t([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$t([ke.common,ke.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$t([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$t([ke.sprite,ke.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:$t([ke.common,ke.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:$t([ke.lights,ke.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Bn.physical={uniforms:$t([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var ao={r:0,b:0,g:0},Ni=new cn,dg=new We;function pg(i,e,t,n,s,r,o){let a=new ze(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function x(b){let g=b.isScene===!0?b.background:null;return g&&g.isTexture&&(g=(b.backgroundBlurriness>0?t:e).get(g)),g}function v(b){let g=!1,_=x(b);_===null?u(a,l):_&&_.isColor&&(u(_,1),g=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,g){let _=x(g);_&&(_.isCubeTexture||_.mapping===na)?(h===void 0&&(h=new qe(new je(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:As(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(g.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Ni)),h.material.toneMapped=at.getTransfer(_.colorSpace)!==ut,(f!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new qe(new sn(2,2),new ht({name:"BackgroundMaterial",uniforms:As(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=at.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,g){b.getRGB(ao,tf(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(b,g=1){a.set(b),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(a,l)},render:v,addToRenderList:m}}function mg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,E,P,T,A){let G=!1,H=f(T,P,E);r!==H&&(r=H,c(r.object)),G=p(S,T,P,A),G&&x(S,T,P,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(S,E,P,T),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,E,P){let T=P.wireframe===!0,A=n[S.id];A===void 0&&(A={},n[S.id]=A);let G=A[E.id];G===void 0&&(G={},A[E.id]=G);let H=G[T];return H===void 0&&(H=d(l()),G[T]=H),H}function d(S){let E=[],P=[],T=[];for(let A=0;A<t;A++)E[A]=0,P[A]=0,T[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:P,attributeDivisors:T,object:S,attributes:{},index:null}}function p(S,E,P,T){let A=r.attributes,G=E.attributes,H=0,L=P.getAttributes();for(let N in L)if(L[N].location>=0){let V=A[N],Y=G[N];if(Y===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),V===void 0||V.attribute!==Y||Y&&V.data!==Y.data)return!0;H++}return r.attributesNum!==H||r.index!==T}function x(S,E,P,T){let A={},G=E.attributes,H=0,L=P.getAttributes();for(let N in L)if(L[N].location>=0){let V=G[N];V===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));let Y={};Y.attribute=V,V&&V.data&&(Y.data=V.data),A[N]=Y,H++}r.attributes=A,r.attributesNum=H,r.index=T}function v(){let S=r.newAttributes;for(let E=0,P=S.length;E<P;E++)S[E]=0}function m(S){u(S,0)}function u(S,E){let P=r.newAttributes,T=r.enabledAttributes,A=r.attributeDivisors;P[S]=1,T[S]===0&&(i.enableVertexAttribArray(S),T[S]=1),A[S]!==E&&(i.vertexAttribDivisor(S,E),A[S]=E)}function b(){let S=r.newAttributes,E=r.enabledAttributes;for(let P=0,T=E.length;P<T;P++)E[P]!==S[P]&&(i.disableVertexAttribArray(P),E[P]=0)}function g(S,E,P,T,A,G,H){H===!0?i.vertexAttribIPointer(S,E,P,A,G):i.vertexAttribPointer(S,E,P,T,A,G)}function _(S,E,P,T){v();let A=T.attributes,G=P.getAttributes(),H=E.defaultAttributeValues;for(let L in G){let N=G[L];if(N.location>=0){let k=A[L];if(k===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),k!==void 0){let V=k.normalized,Y=k.itemSize,j=e.get(k);if(j===void 0)continue;let K=j.buffer,W=j.type,q=j.bytesPerElement,ce=W===i.INT||W===i.UNSIGNED_INT||k.gpuType===kc;if(k.isInterleavedBufferAttribute){let z=k.data,se=z.stride,Me=k.offset;if(z.isInstancedInterleavedBuffer){for(let me=0;me<N.locationSize;me++)u(N.location+me,z.meshPerAttribute);S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let me=0;me<N.locationSize;me++)m(N.location+me);i.bindBuffer(i.ARRAY_BUFFER,K);for(let me=0;me<N.locationSize;me++)g(N.location+me,Y/N.locationSize,W,V,se*q,(Me+Y/N.locationSize*me)*q,ce)}else{if(k.isInstancedBufferAttribute){for(let z=0;z<N.locationSize;z++)u(N.location+z,k.meshPerAttribute);S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let z=0;z<N.locationSize;z++)m(N.location+z);i.bindBuffer(i.ARRAY_BUFFER,K);for(let z=0;z<N.locationSize;z++)g(N.location+z,Y/N.locationSize,W,V,Y*q,Y/N.locationSize*z*q,ce)}}else if(H!==void 0){let V=H[L];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(N.location,V);break;case 3:i.vertexAttrib3fv(N.location,V);break;case 4:i.vertexAttrib4fv(N.location,V);break;default:i.vertexAttrib1fv(N.location,V)}}}}b()}function D(){M();for(let S in n){let E=n[S];for(let P in E){let T=E[P];for(let A in T)h(T[A].object),delete T[A];delete E[P]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let E=n[S.id];for(let P in E){let T=E[P];for(let A in T)h(T[A].object),delete T[A];delete E[P]}delete n[S.id]}function w(S){for(let E in n){let P=n[E];if(P[S.id]===void 0)continue;let T=P[S.id];for(let A in T)h(T[A].object),delete T[A];delete P[S.id]}}function M(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function gg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let x=0;x<f;x++)p+=h[x];t.update(p,n,1)}function l(c,h,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let x=0;for(let v=0;v<f;v++)x+=h[v]*d[v];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==en&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let M=w===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hn&&!M)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:D,maxSamples:C}}function vg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Kn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,g=b*4,_=u.clippingState||null;l.value=_,_=h(x,d,g,p);for(let D=0;D!==g;++D)_[D]=t[D];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,x){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let u=p+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,_=p;g!==v;++g,_+=4)o.copy(f[g]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function yg(i){let e=new WeakMap;function t(o,a){return a===dl?o.mapping=bs:a===pl&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dl||a===pl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Rs=class extends Uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gs=4,Jh=[.125,.215,.35,.446,.526,.582],Oi=20,Xa=new Rs,Qh=new ze,qa=null,Ya=0,Za=0,ja=!1,zi=(1+Math.sqrt(5))/2,hs=1/zi,$h=[new O(-zi,hs,0),new O(zi,hs,0),new O(-hs,0,zi),new O(hs,0,zi),new O(0,zi,-hs),new O(0,zi,hs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Cs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ya,Za),this._renderer.xr.enabled=ja,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Gt,format:en,colorSpace:Bs,depthBuffer:!1},s=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=_g(r,e,t)}return s}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,s){let a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Qh),h.toneMapping=vi,h.autoClear=!1;let p=new xt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),x=new qe(new je,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Qh),v=!0);for(let u=0;u<6;u++){let b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let g=this._cubeSize;lo(s,b*g,u>2?g:0,g,g),h.setRenderTarget(s),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bs||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$h[(s-r-1)%$h.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new qe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);let u=[],b=0;for(let w=0;w<Oi;++w){let M=w/v,y=Math.exp(-M*M/2);u.push(y),w===0?b+=y:w<m&&(b+=2*y)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-n;let _=this._sizeLods[s],D=3*_*(s>g-gs?s-g+gs:0),C=4*(this._cubeSize-_);lo(t,D,C,3*_,2*_),l.setRenderTarget(t),l.render(f,Xa)}};function Mg(i){let e=[],t=[],n=[],s=i,r=i-gs+1+Jh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-gs?l=Jh[o-i+gs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,x=6,v=3,m=2,u=1,b=new Float32Array(v*x*p),g=new Float32Array(m*x*p),_=new Float32Array(u*x*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,M=C>2?0:-1,y=[w,M,0,w+2/3,M,0,w+2/3,M+1,0,w,M,0,w+2/3,M+1,0,w,M+1,0];b.set(y,v*x*C),g.set(d,m*x*C);let S=[C,C,C,C,C,C];_.set(S,u*x*C)}let D=new et;D.setAttribute("position",new lt(b,v)),D.setAttribute("uv",new lt(g,m)),D.setAttribute("faceIndex",new lt(_,u)),e.push(D),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eu(i,e,t){let n=new Tt(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _g(i,e,t){let n=new Float32Array(Oi),s=new O(0,1,0);return new ht({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function tu(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function nu(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function Sg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dl||l===pl,h=l===bs||l===Es;if(c||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cs(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Cs(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,e,t,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let v=d.morphAttributes[x];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let x in d)e.update(d[x],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let x in p){let v=p[x];for(let m=0,u=v.length;m<u;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,x=f.attributes.position,v=0;if(p!==null){let b=p.array;v=p.version;for(let g=0,_=b.length;g<_;g+=3){let D=b[g+0],C=b[g+1],w=b[g+2];d.push(D,C,C,w,w,D)}}else if(x!==void 0){let b=x.array;v=x.version;for(let g=0,_=b.length/3-1;g<_;g+=3){let D=g+0,C=g+1,w=g+2;d.push(D,C,C,w,w,D)}}else return;let m=new($u(d)?No:Do)(d,1);m.version=v;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function wg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,d*o,x),t.update(p,n,x))}function h(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];t.update(m,n,1)}function f(d,p,x,v){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,x);let u=0;for(let b=0;b<x;b++)u+=p[b]*v[b];t.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Tg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ag(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],g=0;p===!0&&(g=1),x===!0&&(g=2),v===!0&&(g=3);let _=a.attributes.position.count*g,D=1;_>e.maxTextureSize&&(D=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*D*4*f),w=new Lo(C,_,D,f);w.type=Hn,w.needsUpdate=!0;let M=g*4;for(let S=0;S<f;S++){let E=m[S],P=u[S],T=b[S],A=_*D*4*S;for(let G=0;G<E.count;G++){let H=G*M;p===!0&&(s.fromBufferAttribute(E,G),C[A+H+0]=s.x,C[A+H+1]=s.y,C[A+H+2]=s.z,C[A+H+3]=0),x===!0&&(s.fromBufferAttribute(P,G),C[A+H+4]=s.x,C[A+H+5]=s.y,C[A+H+6]=s.z,C[A+H+7]=0),v===!0&&(s.fromBufferAttribute(T,G),C[A+H+8]=s.x,C[A+H+9]=s.y,C[A+H+10]=s.z,C[A+H+11]=T.itemSize===4?s.w:1)}}d={count:f,texture:w,size:new Se(_,D)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ps=class extends Nt{constructor(e,t,n,s,r,o,a,l,c,h=ys){if(h!==ys&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=Fi),n===void 0&&h===_i&&(n=Mi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sf=new Nt,iu=new Ps(1,1),rf=new Lo,of=new ql,af=new zo,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function Hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ut(t,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),zt(t,n)}}function Ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ut(t,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),zt(t,n)}}function Ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ut(t,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),zt(t,n)}}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=Qu,r=iu):r=sf,t.setTexture2D(e||r,s)}function Xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||of,s)}function qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||af,s)}function Yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rf,s)}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Ig;case 35666:return Lg;case 35674:return Dg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return zg;case 35667:case 35671:return Og;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return Hg;case 36294:return kg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function jg(i,e){i.uniform1fv(this.addr,e)}function Kg(i,e){let t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function Jg(i,e){let t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Qg(i,e){let t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function $g(i,e){let t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ex(i,e){let t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tx(i,e){let t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nx(i,e){i.uniform1iv(this.addr,e)}function ix(i,e){i.uniform2iv(this.addr,e)}function sx(i,e){i.uniform3iv(this.addr,e)}function rx(i,e){i.uniform4iv(this.addr,e)}function ox(i,e){i.uniform1uiv(this.addr,e)}function ax(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function cx(i,e){i.uniform4uiv(this.addr,e)}function hx(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sf,r[o])}function ux(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||of,r[o])}function fx(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||af,r[o])}function dx(i,e,t){let n=this.cache,s=e.length,r=ra(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rf,r[o])}function px(i){switch(i){case 5126:return jg;case 35664:return Kg;case 35665:return Jg;case 35666:return Qg;case 35674:return $g;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return dx}}var jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zg(t.type)}},Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=px(t.type)}},Jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ka=/(\w+)(\])?(\[|\.)?/g;function cu(i,e){i.seq.push(e),i.map[e.id]=e}function mx(i,e,t){let n=i.name,s=n.length;for(Ka.lastIndex=0;;){let r=Ka.exec(n),o=Ka.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cu(t,c===void 0?new jl(a,i,e):new Kl(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Jl(a),cu(t,f)),t=f}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);mx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function hu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gx=37297,xx=0;function vx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var uu=new rt;function yx(i){at._getMatrix(uu,at.workingColorSpace,i);let e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+vx(i.getShaderSource(e),o)}else return s}function Mx(i,e){let t=yx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _x(i,e){let t;switch(e){case zc:t="Linear";break;case Oc:t="Reinhard";break;case Fc:t="Cineon";break;case Bc:t="ACESFilmic";break;case Hc:t="AgX";break;case Rr:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var co=new O;function Sx(){at.getLuminanceCoefficients(co);let i=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Ex(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lr(i){return i!==""}function du(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(Tx,Rx)}var Ax=new Map;function Rx(i,e){let t=tt[e];if(t===void 0){let n=Ax.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(Cx,Px)}function Px(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ix(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Lx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Es:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Nx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case zd:e="ENVMAP_BLENDING_MIX";break;case Od:e="ENVMAP_BLENDING_ADD";break}return e}function Ux(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ix(t),c=Lx(t),h=Dx(t),f=Nx(t),d=Ux(t),p=bx(t),x=Ex(r),v=s.createProgram(),m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(lr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(lr).join(`
`),u.length>0&&(u+=`
`)):(m=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),u=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?tt.tonemapping_pars_fragment:"",t.toneMapping!==vi?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Mx("linearToOutputTexel",t.outputColorSpace),Sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=Ql(o),o=du(o,t),o=pu(o,t),a=Ql(a),a=du(a,t),a=pu(a,t),o=mu(o),a=mu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let g=b+m+o,_=b+u+a,D=hu(s,s.VERTEX_SHADER,g),C=hu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,D),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(E){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(v).trim(),T=s.getShaderInfoLog(D).trim(),A=s.getShaderInfoLog(C).trim(),G=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,C);else{let L=fu(s,D,"vertex"),N=fu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+L+`
`+N)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(T===""||A==="")&&(H=!1);H&&(E.diagnostics={runnable:G,programLog:P,vertexShader:{log:T,prefix:m},fragmentShader:{log:A,prefix:u}})}s.deleteShader(D),s.deleteShader(C),M=new _s(s,v),y=wx(s,v)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,gx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}var Ox=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ec(e),t.set(e,n)),n}},ec=class{constructor(e){this.id=Ox++,this.code=e,this.usedTimes=0}};function Fx(i,e,t,n,s,r,o){let a=new mr,l=new $l,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,E,P,T){let A=P.fog,G=T.geometry,H=y.isMeshStandardMaterial?P.environment:null,L=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),N=L&&L.mapping===na?L.image.height:null,k=x[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let V=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Y=V!==void 0?V.length:0,j=0;G.morphAttributes.position!==void 0&&(j=1),G.morphAttributes.normal!==void 0&&(j=2),G.morphAttributes.color!==void 0&&(j=3);let K,W,q,ce;if(k){let ct=Bn[k];K=ct.vertexShader,W=ct.fragmentShader}else K=y.vertexShader,W=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);let z=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Me=T.isInstancedMesh===!0,me=T.isBatchedMesh===!0,le=!!y.map,ne=!!y.matcap,de=!!L,B=!!y.aoMap,Te=!!y.lightMap,$=!!y.bumpMap,oe=!!y.normalMap,X=!!y.displacementMap,Q=!!y.emissiveMap,ue=!!y.metalnessMap,I=!!y.roughnessMap,R=y.anisotropy>0,J=y.clearcoat>0,ee=y.dispersion>0,ae=y.iridescence>0,Z=y.sheen>0,xe=y.transmission>0,Re=R&&!!y.anisotropyMap,Ce=J&&!!y.clearcoatMap,Be=J&&!!y.clearcoatNormalMap,be=J&&!!y.clearcoatRoughnessMap,Ee=ae&&!!y.iridescenceMap,Ae=ae&&!!y.iridescenceThicknessMap,Ne=Z&&!!y.sheenColorMap,Oe=Z&&!!y.sheenRoughnessMap,nt=!!y.specularMap,Je=!!y.specularColorMap,it=!!y.specularIntensityMap,te=xe&&!!y.transmissionMap,Pe=xe&&!!y.thicknessMap,ye=!!y.gradientMap,we=!!y.alphaMap,Ve=y.alphaTest>0,Fe=!!y.alphaHash,Ye=!!y.extensions,mt=vi;y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(mt=i.toneMapping);let wt={shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:W,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:me,batchingColor:me&&T._colorsTexture!==null,instancing:Me,instancingColor:Me&&T.instanceColor!==null,instancingMorph:Me&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Bs,alphaToCoverage:!!y.alphaToCoverage,map:le,matcap:ne,envMap:de,envMapMode:de&&L.mapping,envMapCubeUVHeight:N,aoMap:B,lightMap:Te,bumpMap:$,normalMap:oe,displacementMap:d&&X,emissiveMap:Q,normalMapObjectSpace:oe&&y.normalMapType===Vd,normalMapTangentSpace:oe&&y.normalMapType===ia,metalnessMap:ue,roughnessMap:I,anisotropy:R,anisotropyMap:Re,clearcoat:J,clearcoatMap:Ce,clearcoatNormalMap:Be,clearcoatRoughnessMap:be,dispersion:ee,iridescence:ae,iridescenceMap:Ee,iridescenceThicknessMap:Ae,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:Oe,specularMap:nt,specularColorMap:Je,specularIntensityMap:it,transmission:xe,transmissionMap:te,thicknessMap:Pe,gradientMap:ye,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:Ve,alphaHash:Fe,combine:y.combine,mapUv:le&&v(y.map.channel),aoMapUv:B&&v(y.aoMap.channel),lightMapUv:Te&&v(y.lightMap.channel),bumpMapUv:$&&v(y.bumpMap.channel),normalMapUv:oe&&v(y.normalMap.channel),displacementMapUv:X&&v(y.displacementMap.channel),emissiveMapUv:Q&&v(y.emissiveMap.channel),metalnessMapUv:ue&&v(y.metalnessMap.channel),roughnessMapUv:I&&v(y.roughnessMap.channel),anisotropyMapUv:Re&&v(y.anisotropyMap.channel),clearcoatMapUv:Ce&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Be&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(y.sheenRoughnessMap.channel),specularMapUv:nt&&v(y.specularMap.channel),specularColorMapUv:Je&&v(y.specularColorMap.channel),specularIntensityMapUv:it&&v(y.specularIntensityMap.channel),transmissionMapUv:te&&v(y.transmissionMap.channel),thicknessMapUv:Pe&&v(y.thicknessMap.channel),alphaMapUv:we&&v(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(oe||R),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!G.attributes.uv&&(le||we),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:T.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:le&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:Q&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pt,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ye&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&y.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function u(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)S.push(E),S.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(b(S,y),g(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let S=x[y.type],E;if(S){let P=Bn[S];E=Ht.clone(P.uniforms)}else E=y.uniforms;return E}function D(y,S){let E;for(let P=0,T=h.length;P<T;P++){let A=h[P];if(A.cacheKey===S){E=A,++E.usedTimes;break}}return E===void 0&&(E=new zx(i,S,y,r),h.push(E)),E}function C(y){if(--y.usedTimes===0){let S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function M(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:M}}function Bx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,p,x,v,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function a(f,d,p,x,v,m){let u=o(f,d,p,x,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(f,d,p,x,v,m){let u=o(f,d,p,x,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Hx),n.length>1&&n.sort(d||xu),s.length>1&&s.sort(d||xu)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function kx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new vu,i.set(n,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Wx=0;function Xx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qx(i){let e=new Vx,t=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new We,o=new We;function a(c){let h=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,x=0,v=0,m=0,u=0,b=0,g=0,_=0,D=0,C=0,w=0;c.sort(Xx);for(let y=0,S=c.length;y<S;y++){let E=c[y],P=E.color,T=E.intensity,A=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=P.r*T,f+=P.g*T,d+=P.b*T;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],T);w++}else if(E.isDirectionalLight){let H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let L=E.shadow,N=t.get(E);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=E.shadow.matrix,b++}n.directional[p]=H,p++}else if(E.isSpotLight){let H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(P).multiplyScalar(T),H.distance=A,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[v]=H;let L=E.shadow;if(E.map&&(n.spotLightMap[D]=E.map,D++,L.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[v]=L.matrix,E.castShadow){let N=t.get(E);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=G,_++}v++}else if(E.isRectAreaLight){let H=e.get(E);H.color.copy(P).multiplyScalar(T),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=H,m++}else if(E.isPointLight){let H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){let L=E.shadow,N=t.get(E);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,N.shadowCameraNear=L.camera.near,N.shadowCameraFar=L.camera.far,n.pointShadow[x]=N,n.pointShadowMap[x]=G,n.pointShadowMatrix[x]=E.shadow.matrix,g++}n.point[x]=H,x++}else if(E.isHemisphereLight){let H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(T),H.groundColor.copy(E.groundColor).multiplyScalar(T),n.hemi[u]=H,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let M=n.hash;(M.directionalLength!==p||M.pointLength!==x||M.spotLength!==v||M.rectAreaLength!==m||M.hemiLength!==u||M.numDirectionalShadows!==b||M.numPointShadows!==g||M.numSpotShadows!==_||M.numSpotMaps!==D||M.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,M.directionalLength=p,M.pointLength=x,M.spotLength=v,M.rectAreaLength=m,M.hemiLength=u,M.numDirectionalShadows=b,M.numPointShadows=g,M.numSpotShadows=_,M.numSpotMaps=D,M.numLightProbes=w,n.version=Wx++)}function l(c,h){let f=0,d=0,p=0,x=0,v=0,m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){let g=c[u];if(g.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(g.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(g.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(g.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(g.width*.5,0,0),_.halfHeight.set(0,g.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function yu(i){let e=new qx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yu(i),e.set(s,[a])):r>=o.length?(a=new yu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var tc=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nc=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
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
}`;function Kx(i,e,t){let n=new gr,s=new Se,r=new Se,o=new gt,a=new tc({depthPacking:kd}),l=new nc,c={},h=t.maxTextureSize,f={[yi]:jt,[jt]:yi,[pt]:pt},d=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Zx,fragmentShader:jx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new et;x.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new qe(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let u=this.type;this.render=function(C,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let y=i.getRenderTarget(),S=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Lt),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let T=u!==jn&&this.type===jn,A=u===jn&&this.type!==jn;for(let G=0,H=C.length;G<H;G++){let L=C[G],N=L.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let k=N.getFrameExtents();if(s.multiply(k),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,N.mapSize.y=r.y)),N.map===null||T===!0||A===!0){let Y=this.type!==jn?{minFilter:Dt,magFilter:Dt}:{};N.map!==null&&N.map.dispose(),N.map=new Tt(s.x,s.y,Y),N.map.texture.name=L.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let V=N.getViewportCount();for(let Y=0;Y<V;Y++){let j=N.getViewport(Y);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),P.viewport(o),N.updateMatrices(L,Y),n=N.getFrustum(),_(w,M,N.camera,L,this.type)}N.isPointLightShadow!==!0&&this.type===jn&&b(N,M),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,E)};function b(C,w){let M=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Tt(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,M,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,M,p,v,null)}function g(C,w,M,y){let S=null,E=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)S=E;else if(S=M.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let P=S.uuid,T=w.uuid,A=c[P];A===void 0&&(A={},c[P]=A);let G=A[T];G===void 0&&(G=S.clone(),A[T]=G,w.addEventListener("dispose",D)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,y===jn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,M.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let P=i.properties.get(S);P.light=M}return S}function _(C,w,M,y,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===jn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);let T=e.update(C),A=C.material;if(Array.isArray(A)){let G=T.groups;for(let H=0,L=G.length;H<L;H++){let N=G[H],k=A[N.materialIndex];if(k&&k.visible){let V=g(C,k,y,S);C.onBeforeShadow(i,C,w,M,T,V,N),i.renderBufferDirect(M,null,T,V,C,N),C.onAfterShadow(i,C,w,M,T,V,N)}}}else if(A.visible){let G=g(C,A,y,S);C.onBeforeShadow(i,C,w,M,T,G,null),i.renderBufferDirect(M,null,T,G,C,null),C.onAfterShadow(i,C,w,M,T,G,null)}}let P=C.children;for(let T=0,A=P.length;T<A;T++)_(P[T],w,M,y,S)}function D(C){C.target.removeEventListener("dispose",D);for(let M in c){let y=c[M],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}var Jx={[ol]:al,[ll]:ul,[cl]:fl,[Ss]:hl,[al]:ol,[ul]:ll,[fl]:cl,[hl]:Ss};function Qx(i,e){function t(){let te=!1,Pe=new gt,ye=null,we=new gt(0,0,0,0);return{setMask:function(Ve){ye!==Ve&&!te&&(i.colorMask(Ve,Ve,Ve,Ve),ye=Ve)},setLocked:function(Ve){te=Ve},setClear:function(Ve,Fe,Ye,mt,wt){wt===!0&&(Ve*=mt,Fe*=mt,Ye*=mt),Pe.set(Ve,Fe,Ye,mt),we.equals(Pe)===!1&&(i.clearColor(Ve,Fe,Ye,mt),we.copy(Pe))},reset:function(){te=!1,ye=null,we.set(-1,0,0,0)}}}function n(){let te=!1,Pe=!1,ye=null,we=null,Ve=null;return{setReversed:function(Fe){if(Pe!==Fe){let Ye=e.get("EXT_clip_control");Pe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let mt=Ve;Ve=null,this.setClear(mt)}Pe=Fe},getReversed:function(){return Pe},setTest:function(Fe){Fe?z(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(Fe){ye!==Fe&&!te&&(i.depthMask(Fe),ye=Fe)},setFunc:function(Fe){if(Pe&&(Fe=Jx[Fe]),we!==Fe){switch(Fe){case ol:i.depthFunc(i.NEVER);break;case al:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Fe}},setLocked:function(Fe){te=Fe},setClear:function(Fe){Ve!==Fe&&(Pe&&(Fe=1-Fe),i.clearDepth(Fe),Ve=Fe)},reset:function(){te=!1,ye=null,we=null,Ve=null,Pe=!1}}}function s(){let te=!1,Pe=null,ye=null,we=null,Ve=null,Fe=null,Ye=null,mt=null,wt=null;return{setTest:function(ct){te||(ct?z(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(ct){Pe!==ct&&!te&&(i.stencilMask(ct),Pe=ct)},setFunc:function(ct,Xt,Jt){(ye!==ct||we!==Xt||Ve!==Jt)&&(i.stencilFunc(ct,Xt,Jt),ye=ct,we=Xt,Ve=Jt)},setOp:function(ct,Xt,Jt){(Fe!==ct||Ye!==Xt||mt!==Jt)&&(i.stencilOp(ct,Xt,Jt),Fe=ct,Ye=Xt,mt=Jt)},setLocked:function(ct){te=ct},setClear:function(ct){wt!==ct&&(i.clearStencil(ct),wt=ct)},reset:function(){te=!1,Pe=null,ye=null,we=null,Ve=null,Fe=null,Ye=null,mt=null,wt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],x=null,v=!1,m=null,u=null,b=null,g=null,_=null,D=null,C=null,w=new ze(0,0,0),M=0,y=!1,S=null,E=null,P=null,T=null,A=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,L=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=L>=1):N.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=L>=2);let k=null,V={},Y=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),K=new gt().fromArray(Y),W=new gt().fromArray(j);function q(te,Pe,ye,we){let Ve=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(te,Fe),i.texParameteri(te,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(te,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ye;Ye++)te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(Pe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return Fe}let ce={};ce[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(i.DEPTH_TEST),o.setFunc(Ss),$(!1),oe(Sh),z(i.CULL_FACE),B(Lt);function z(te){h[te]!==!0&&(i.enable(te),h[te]=!0)}function se(te){h[te]!==!1&&(i.disable(te),h[te]=!1)}function Me(te,Pe){return f[te]!==Pe?(i.bindFramebuffer(te,Pe),f[te]=Pe,te===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Pe),te===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function me(te,Pe){let ye=p,we=!1;if(te){ye=d.get(Pe),ye===void 0&&(ye=[],d.set(Pe,ye));let Ve=te.textures;if(ye.length!==Ve.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,Ye=Ve.length;Fe<Ye;Fe++)ye[Fe]=i.COLOR_ATTACHMENT0+Fe;ye.length=Ve.length,we=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,we=!0);we&&i.drawBuffers(ye)}function le(te){return x!==te?(i.useProgram(te),x=te,!0):!1}let ne={[xn]:i.FUNC_ADD,[Sd]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};ne[Ed]=i.MIN,ne[wd]=i.MAX;let de={[Fs]:i.ZERO,[Td]:i.ONE,[Ad]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[ta]:i.DST_COLOR,[ea]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function B(te,Pe,ye,we,Ve,Fe,Ye,mt,wt,ct){if(te===Lt){v===!0&&(se(i.BLEND),v=!1);return}if(v===!1&&(z(i.BLEND),v=!0),te!==Nc){if(te!==m||ct!==y){if((u!==xn||_!==xn)&&(i.blendEquation(i.FUNC_ADD),u=xn,_=xn),ct)switch(te){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}b=null,g=null,D=null,C=null,w.set(0,0,0),M=0,m=te,y=ct}return}Ve=Ve||Pe,Fe=Fe||ye,Ye=Ye||we,(Pe!==u||Ve!==_)&&(i.blendEquationSeparate(ne[Pe],ne[Ve]),u=Pe,_=Ve),(ye!==b||we!==g||Fe!==D||Ye!==C)&&(i.blendFuncSeparate(de[ye],de[we],de[Fe],de[Ye]),b=ye,g=we,D=Fe,C=Ye),(mt.equals(w)===!1||wt!==M)&&(i.blendColor(mt.r,mt.g,mt.b,wt),w.copy(mt),M=wt),m=te,y=!1}function Te(te,Pe){te.side===pt?se(i.CULL_FACE):z(i.CULL_FACE);let ye=te.side===jt;Pe&&(ye=!ye),$(ye),te.blending===vs&&te.transparent===!1?B(Lt):B(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),o.setFunc(te.depthFunc),o.setTest(te.depthTest),o.setMask(te.depthWrite),r.setMask(te.colorWrite);let we=te.stencilWrite;a.setTest(we),we&&(a.setMask(te.stencilWriteMask),a.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),a.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),Q(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(te){S!==te&&(te?i.frontFace(i.CW):i.frontFace(i.CCW),S=te)}function oe(te){te!==Md?(z(i.CULL_FACE),te!==E&&(te===Sh?i.cullFace(i.BACK):te===_d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),E=te}function X(te){te!==P&&(H&&i.lineWidth(te),P=te)}function Q(te,Pe,ye){te?(z(i.POLYGON_OFFSET_FILL),(T!==Pe||A!==ye)&&(i.polygonOffset(Pe,ye),T=Pe,A=ye)):se(i.POLYGON_OFFSET_FILL)}function ue(te){te?z(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function I(te){te===void 0&&(te=i.TEXTURE0+G-1),k!==te&&(i.activeTexture(te),k=te)}function R(te,Pe,ye){ye===void 0&&(k===null?ye=i.TEXTURE0+G-1:ye=k);let we=V[ye];we===void 0&&(we={type:void 0,texture:void 0},V[ye]=we),(we.type!==te||we.texture!==Pe)&&(k!==ye&&(i.activeTexture(ye),k=ye),i.bindTexture(te,Pe||ce[te]),we.type=te,we.texture=Pe)}function J(){let te=V[k];te!==void 0&&te.type!==void 0&&(i.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ne(te){K.equals(te)===!1&&(i.scissor(te.x,te.y,te.z,te.w),K.copy(te))}function Oe(te){W.equals(te)===!1&&(i.viewport(te.x,te.y,te.z,te.w),W.copy(te))}function nt(te,Pe){let ye=c.get(Pe);ye===void 0&&(ye=new WeakMap,c.set(Pe,ye));let we=ye.get(te);we===void 0&&(we=i.getUniformBlockIndex(Pe,te.name),ye.set(te,we))}function Je(te,Pe){let we=c.get(Pe).get(te);l.get(Pe)!==we&&(i.uniformBlockBinding(Pe,we,te.__bindingPointIndex),l.set(Pe,we))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,V={},f={},d=new WeakMap,p=[],x=null,v=!1,m=null,u=null,b=null,g=null,_=null,D=null,C=null,w=new ze(0,0,0),M=0,y=!1,S=null,E=null,P=null,T=null,A=null,K.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:se,bindFramebuffer:Me,drawBuffers:me,useProgram:le,setBlending:B,setMaterial:Te,setFlipSided:$,setCullFace:oe,setLineWidth:X,setPolygonOffset:Q,setScissorTest:ue,activeTexture:I,bindTexture:R,unbindTexture:J,compressedTexImage2D:ee,compressedTexImage3D:ae,texImage2D:Ee,texImage3D:Ae,updateUBOMapping:nt,uniformBlockBinding:Je,texStorage2D:Be,texStorage3D:be,texSubImage2D:Z,texSubImage3D:xe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ce,scissor:Ne,viewport:Oe,reset:it}}function Mu(i,e,t,n){let s=$x(n);switch(t){case qu:return i*e;case Zu:return i*e;case ju:return i*e*2;case Wc:return i*e/s.components*s.byteLength;case Xc:return i*e/s.components*s.byteLength;case Ku:return i*e*2/s.components*s.byteLength;case qc:return i*e*2/s.components*s.byteLength;case Yu:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Yc:return i*e*4/s.components*s.byteLength;case bo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:case yl:return Math.max(i,16)*Math.max(e,8)/4;case gl:case vl:return Math.max(i,8)*Math.max(e,8)/2;case Ml:case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Ol:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ju:case Bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hl:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $x(i){switch(i){case Ln:case Gu:return{byteLength:1,components:1};case pr:case Wu:case Gt:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case Fi:case kc:case Hn:return{byteLength:4,components:1};case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ev(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,R){return p?new OffscreenCanvas(I,R):Po("canvas")}function v(I,R,J){let ee=1,ae=ue(I);if((ae.width>J||ae.height>J)&&(ee=J/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Z=Math.floor(ee*ae.width),xe=Math.floor(ee*ae.height);f===void 0&&(f=x(Z,xe));let Re=R?x(Z,xe):f;return Re.width=Z,Re.height=xe,Re.getContext("2d").drawImage(I,0,0,Z,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Z+"x"+xe+")."),Re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function m(I){return I.generateMipmaps}function u(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(I,R,J,ee,ae=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=R;if(R===i.RED&&(J===i.FLOAT&&(Z=i.R32F),J===i.HALF_FLOAT&&(Z=i.R16F),J===i.UNSIGNED_BYTE&&(Z=i.R8)),R===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.R8UI),J===i.UNSIGNED_SHORT&&(Z=i.R16UI),J===i.UNSIGNED_INT&&(Z=i.R32UI),J===i.BYTE&&(Z=i.R8I),J===i.SHORT&&(Z=i.R16I),J===i.INT&&(Z=i.R32I)),R===i.RG&&(J===i.FLOAT&&(Z=i.RG32F),J===i.HALF_FLOAT&&(Z=i.RG16F),J===i.UNSIGNED_BYTE&&(Z=i.RG8)),R===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.RG8UI),J===i.UNSIGNED_SHORT&&(Z=i.RG16UI),J===i.UNSIGNED_INT&&(Z=i.RG32UI),J===i.BYTE&&(Z=i.RG8I),J===i.SHORT&&(Z=i.RG16I),J===i.INT&&(Z=i.RG32I)),R===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),J===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),J===i.UNSIGNED_INT&&(Z=i.RGB32UI),J===i.BYTE&&(Z=i.RGB8I),J===i.SHORT&&(Z=i.RGB16I),J===i.INT&&(Z=i.RGB32I)),R===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),J===i.UNSIGNED_INT&&(Z=i.RGBA32UI),J===i.BYTE&&(Z=i.RGBA8I),J===i.SHORT&&(Z=i.RGBA16I),J===i.INT&&(Z=i.RGBA32I)),R===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),R===i.RGBA){let xe=ae?sa:at.getTransfer(ee);J===i.FLOAT&&(Z=i.RGBA32F),J===i.HALF_FLOAT&&(Z=i.RGBA16F),J===i.UNSIGNED_BYTE&&(Z=xe===ut?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(I,R){let J;return I?R===null||R===Fi||R===Mi?J=i.DEPTH24_STENCIL8:R===Hn?J=i.DEPTH32F_STENCIL8:R===pr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Fi||R===Mi?J=i.DEPTH_COMPONENT24:R===Hn?J=i.DEPTH_COMPONENT32F:R===pr&&(J=i.DEPTH_COMPONENT16),J}function D(I,R){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dt&&I.minFilter!==nn?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function C(I){let R=I.target;R.removeEventListener("dispose",C),M(R),R.isVideoTexture&&h.delete(R)}function w(I){let R=I.target;R.removeEventListener("dispose",w),S(R)}function M(I){let R=n.get(I);if(R.__webglInit===void 0)return;let J=I.source,ee=d.get(J);if(ee){let ae=ee[R.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&y(I),Object.keys(ee).length===0&&d.delete(J)}n.remove(I)}function y(I){let R=n.get(I);i.deleteTexture(R.__webglTexture);let J=I.source,ee=d.get(J);delete ee[R.__cacheKey],o.memory.textures--}function S(I){let R=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(R.__webglFramebuffer[ee]))for(let ae=0;ae<R.__webglFramebuffer[ee].length;ae++)i.deleteFramebuffer(R.__webglFramebuffer[ee][ae]);else i.deleteFramebuffer(R.__webglFramebuffer[ee]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ee])}else{if(Array.isArray(R.__webglFramebuffer))for(let ee=0;ee<R.__webglFramebuffer.length;ee++)i.deleteFramebuffer(R.__webglFramebuffer[ee]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ee=0;ee<R.__webglColorRenderbuffer.length;ee++)R.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ee]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let J=I.textures;for(let ee=0,ae=J.length;ee<ae;ee++){let Z=n.get(J[ee]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(J[ee])}n.remove(I)}let E=0;function P(){E=0}function T(){let I=E;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),E+=1,I}function A(I){let R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function G(I,R){let J=n.get(I);if(I.isVideoTexture&&X(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){let ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,I,R);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+R)}function H(I,R){let J=n.get(I);if(I.version>0&&J.__version!==I.version){W(J,I,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+R)}function L(I,R){let J=n.get(I);if(I.version>0&&J.__version!==I.version){W(J,I,R);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+R)}function N(I,R){let J=n.get(I);if(I.version>0&&J.__version!==I.version){q(J,I,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+R)}let k={[_n]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[ml]:i.MIRRORED_REPEAT},V={[Dt]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Y={[Gd]:i.NEVER,[jd]:i.ALWAYS,[Wd]:i.LESS,[Qu]:i.LEQUAL,[Xd]:i.EQUAL,[Zd]:i.GEQUAL,[qd]:i.GREATER,[Yd]:i.NOTEQUAL};function j(I,R){if(R.type===Hn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===nn||R.magFilter===ba||R.magFilter===Gr||R.magFilter===Qn||R.minFilter===nn||R.minFilter===ba||R.minFilter===Gr||R.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,k[R.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,k[R.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,k[R.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,V[R.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,V[R.minFilter]),R.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Y[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Dt||R.minFilter!==Gr&&R.minFilter!==Qn||R.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function K(I,R){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",C));let ee=R.source,ae=d.get(ee);ae===void 0&&(ae={},d.set(ee,ae));let Z=A(R);if(Z!==I.__cacheKey){ae[Z]===void 0&&(ae[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ae[Z].usedTimes++;let xe=ae[I.__cacheKey];xe!==void 0&&(ae[I.__cacheKey].usedTimes--,xe.usedTimes===0&&y(R)),I.__cacheKey=Z,I.__webglTexture=ae[Z].texture}return J}function W(I,R,J){let ee=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ee=i.TEXTURE_3D);let ae=K(I,R),Z=R.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+J);let xe=n.get(Z);if(Z.version!==xe.__version||ae===!0){t.activeTexture(i.TEXTURE0+J);let Re=at.getPrimaries(at.workingColorSpace),Ce=R.colorSpace===vn?null:at.getPrimaries(R.colorSpace),Be=R.colorSpace===vn||Re===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let be=v(R.image,!1,s.maxTextureSize);be=Q(R,be);let Ee=r.convert(R.format,R.colorSpace),Ae=r.convert(R.type),Ne=g(R.internalFormat,Ee,Ae,R.colorSpace,R.isVideoTexture);j(ee,R);let Oe,nt=R.mipmaps,Je=R.isVideoTexture!==!0,it=xe.__version===void 0||ae===!0,te=Z.dataReady,Pe=D(R,be);if(R.isDepthTexture)Ne=_(R.format===_i,R.type),it&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ne,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,Ne,be.width,be.height,0,Ee,Ae,null));else if(R.isDataTexture)if(nt.length>0){Je&&it&&t.texStorage2D(i.TEXTURE_2D,Pe,Ne,nt[0].width,nt[0].height);for(let ye=0,we=nt.length;ye<we;ye++)Oe=nt[ye],Je?te&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,Ee,Ae,Oe.data):t.texImage2D(i.TEXTURE_2D,ye,Ne,Oe.width,Oe.height,0,Ee,Ae,Oe.data);R.generateMipmaps=!1}else Je?(it&&t.texStorage2D(i.TEXTURE_2D,Pe,Ne,be.width,be.height),te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,Ee,Ae,be.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,be.width,be.height,0,Ee,Ae,be.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Je&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ne,nt[0].width,nt[0].height,be.depth);for(let ye=0,we=nt.length;ye<we;ye++)if(Oe=nt[ye],R.format!==en)if(Ee!==null)if(Je){if(te)if(R.layerUpdates.size>0){let Ve=Mu(Oe.width,Oe.height,R.format,R.type);for(let Fe of R.layerUpdates){let Ye=Oe.data.subarray(Fe*Ve/Oe.data.BYTES_PER_ELEMENT,(Fe+1)*Ve/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Fe,Oe.width,Oe.height,1,Ee,Ye)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Oe.width,Oe.height,be.depth,Ee,Oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ne,Oe.width,Oe.height,be.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Oe.width,Oe.height,be.depth,Ee,Ae,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ne,Oe.width,Oe.height,be.depth,0,Ee,Ae,Oe.data)}else{Je&&it&&t.texStorage2D(i.TEXTURE_2D,Pe,Ne,nt[0].width,nt[0].height);for(let ye=0,we=nt.length;ye<we;ye++)Oe=nt[ye],R.format!==en?Ee!==null?Je?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,Ee,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ne,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?te&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,Ee,Ae,Oe.data):t.texImage2D(i.TEXTURE_2D,ye,Ne,Oe.width,Oe.height,0,Ee,Ae,Oe.data)}else if(R.isDataArrayTexture)if(Je){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ne,be.width,be.height,be.depth),te)if(R.layerUpdates.size>0){let ye=Mu(be.width,be.height,R.format,R.type);for(let we of R.layerUpdates){let Ve=be.data.subarray(we*ye/be.data.BYTES_PER_ELEMENT,(we+1)*ye/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,be.width,be.height,1,Ee,Ae,Ve)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Ae,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,be.width,be.height,be.depth,0,Ee,Ae,be.data);else if(R.isData3DTexture)Je?(it&&t.texStorage3D(i.TEXTURE_3D,Pe,Ne,be.width,be.height,be.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Ae,be.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,be.width,be.height,be.depth,0,Ee,Ae,be.data);else if(R.isFramebufferTexture){if(it)if(Je)t.texStorage2D(i.TEXTURE_2D,Pe,Ne,be.width,be.height);else{let ye=be.width,we=be.height;for(let Ve=0;Ve<Pe;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,Ne,ye,we,0,Ee,Ae,null),ye>>=1,we>>=1}}else if(nt.length>0){if(Je&&it){let ye=ue(nt[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Ne,ye.width,ye.height)}for(let ye=0,we=nt.length;ye<we;ye++)Oe=nt[ye],Je?te&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ee,Ae,Oe):t.texImage2D(i.TEXTURE_2D,ye,Ne,Ee,Ae,Oe);R.generateMipmaps=!1}else if(Je){if(it){let ye=ue(be);t.texStorage2D(i.TEXTURE_2D,Pe,Ne,ye.width,ye.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ae,be)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Ee,Ae,be);m(R)&&u(ee),xe.__version=Z.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function q(I,R,J){if(R.image.length!==6)return;let ee=K(I,R),ae=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);let Z=n.get(ae);if(ae.version!==Z.__version||ee===!0){t.activeTexture(i.TEXTURE0+J);let xe=at.getPrimaries(at.workingColorSpace),Re=R.colorSpace===vn?null:at.getPrimaries(R.colorSpace),Ce=R.colorSpace===vn||xe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Be=R.isCompressedTexture||R.image[0].isCompressedTexture,be=R.image[0]&&R.image[0].isDataTexture,Ee=[];for(let we=0;we<6;we++)!Be&&!be?Ee[we]=v(R.image[we],!0,s.maxCubemapSize):Ee[we]=be?R.image[we].image:R.image[we],Ee[we]=Q(R,Ee[we]);let Ae=Ee[0],Ne=r.convert(R.format,R.colorSpace),Oe=r.convert(R.type),nt=g(R.internalFormat,Ne,Oe,R.colorSpace),Je=R.isVideoTexture!==!0,it=Z.__version===void 0||ee===!0,te=ae.dataReady,Pe=D(R,Ae);j(i.TEXTURE_CUBE_MAP,R);let ye;if(Be){Je&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,nt,Ae.width,Ae.height);for(let we=0;we<6;we++){ye=Ee[we].mipmaps;for(let Ve=0;Ve<ye.length;Ve++){let Fe=ye[Ve];R.format!==en?Ne!==null?Je?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve,nt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve,0,0,Fe.width,Fe.height,Ne,Oe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve,nt,Fe.width,Fe.height,0,Ne,Oe,Fe.data)}}}else{if(ye=R.mipmaps,Je&&it){ye.length>0&&Pe++;let we=ue(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,nt,we.width,we.height)}for(let we=0;we<6;we++)if(be){Je?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ee[we].width,Ee[we].height,Ne,Oe,Ee[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,nt,Ee[we].width,Ee[we].height,0,Ne,Oe,Ee[we].data);for(let Ve=0;Ve<ye.length;Ve++){let Ye=ye[Ve].image[we].image;Je?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve+1,0,0,Ye.width,Ye.height,Ne,Oe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve+1,nt,Ye.width,Ye.height,0,Ne,Oe,Ye.data)}}else{Je?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ne,Oe,Ee[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,nt,Ne,Oe,Ee[we]);for(let Ve=0;Ve<ye.length;Ve++){let Fe=ye[Ve];Je?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve+1,0,0,Ne,Oe,Fe.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve+1,nt,Ne,Oe,Fe.image[we])}}}m(R)&&u(i.TEXTURE_CUBE_MAP),Z.__version=ae.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ce(I,R,J,ee,ae,Z){let xe=r.convert(J.format,J.colorSpace),Re=r.convert(J.type),Ce=g(J.internalFormat,xe,Re,J.colorSpace),Be=n.get(R),be=n.get(J);if(be.__renderTarget=R,!Be.__hasExternalTextures){let Ee=Math.max(1,R.width>>Z),Ae=Math.max(1,R.height>>Z);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Z,Ce,Ee,Ae,R.depth,0,xe,Re,null):t.texImage2D(ae,Z,Ce,Ee,Ae,0,xe,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),oe(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ae,be.__webglTexture,0,$(R)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ae,be.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function z(I,R,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),R.depthBuffer){let ee=R.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,Z=_(R.stencilBuffer,ae),xe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=$(R);oe(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Z,R.width,R.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Z,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Z,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,I)}else{let ee=R.textures;for(let ae=0;ae<ee.length;ae++){let Z=ee[ae],xe=r.convert(Z.format,Z.colorSpace),Re=r.convert(Z.type),Ce=g(Z.internalFormat,xe,Re,Z.colorSpace),Be=$(R);J&&oe(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ce,R.width,R.height):oe(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,Ce,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(R.depthTexture);ee.__renderTarget=R,(!ee.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),G(R.depthTexture,0);let ae=ee.__webglTexture,Z=$(R);if(R.depthTexture.format===ys)oe(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(R.depthTexture.format===_i)oe(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Me(I){let R=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){let ee=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ee){let ae=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),R.__depthDisposeCallback=ae}R.__boundDepthTexture=ee}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");se(R.__webglFramebuffer,I)}else if(J){R.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ee]),R.__webglDepthbuffer[ee]===void 0)R.__webglDepthbuffer[ee]=i.createRenderbuffer(),z(R.__webglDepthbuffer[ee],I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=R.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),z(R.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(I,R,J){let ee=n.get(I);R!==void 0&&ce(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Me(I)}function le(I){let R=I.texture,J=n.get(I),ee=n.get(R);I.addEventListener("dispose",w);let ae=I.textures,Z=I.isWebGLCubeRenderTarget===!0,xe=ae.length>1;if(xe||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=R.version,o.memory.textures++),Z){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)J.__webglFramebuffer[Re][Ce]=i.createFramebuffer()}else J.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)J.__webglFramebuffer[Re]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(xe)for(let Re=0,Ce=ae.length;Re<Ce;Re++){let Be=n.get(ae[Re]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&oe(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<ae.length;Re++){let Ce=ae[Re];J.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);let Be=r.convert(Ce.format,Ce.colorSpace),be=r.convert(Ce.type),Ee=g(Ce.internalFormat,Be,be,Ce.colorSpace,I.isXRRenderTarget===!0),Ae=$(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Ee,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),z(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),j(i.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)ce(J.__webglFramebuffer[Re][Ce],I,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce);else ce(J.__webglFramebuffer[Re],I,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);m(R)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let Re=0,Ce=ae.length;Re<Ce;Re++){let Be=ae[Re],be=n.get(Be);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),j(i.TEXTURE_2D,Be),ce(J.__webglFramebuffer,I,Be,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),m(Be)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ee.__webglTexture),j(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)ce(J.__webglFramebuffer[Ce],I,R,i.COLOR_ATTACHMENT0,Re,Ce);else ce(J.__webglFramebuffer,I,R,i.COLOR_ATTACHMENT0,Re,0);m(R)&&u(Re),t.unbindTexture()}I.depthBuffer&&Me(I)}function ne(I){let R=I.textures;for(let J=0,ee=R.length;J<ee;J++){let ae=R[J];if(m(ae)){let Z=b(I),xe=n.get(ae).__webglTexture;t.bindTexture(Z,xe),u(Z),t.unbindTexture()}}}let de=[],B=[];function Te(I){if(I.samples>0){if(oe(I)===!1){let R=I.textures,J=I.width,ee=I.height,ae=i.COLOR_BUFFER_BIT,Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(I),Re=R.length>1;if(Re)for(let Ce=0;Ce<R.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ce=0;Ce<R.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]);let Be=n.get(R[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,J,ee,0,0,J,ee,ae,i.NEAREST),l===!0&&(de.length=0,B.length=0,de.push(i.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.resolveDepthBuffer===!1&&(de.push(Z),B.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Ce=0;Ce<R.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]);let Be=n.get(R[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let R=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function $(I){return Math.min(s.maxSamples,I.samples)}function oe(I){let R=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function X(I){let R=o.render.frame;h.get(I)!==R&&(h.set(I,R),I.update())}function Q(I,R){let J=I.colorSpace,ee=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==Bs&&J!==vn&&(at.getTransfer(J)===ut?(ee!==en||ae!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=L,this.setTextureCube=N,this.rebindTextures=me,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=oe}function tv(i,e){function t(n,s=vn){let r,o=at.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===kc)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Gt)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===Yu)return i.RGB;if(n===en)return i.RGBA;if(n===Zu)return i.LUMINANCE;if(n===ju)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Wc)return i.RED;if(n===Xc)return i.RED_INTEGER;if(n===Ku)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Yc)return i.RGBA_INTEGER;if(n===bo||n===Eo||n===wo||n===To)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===xl||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===_l||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===_l)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Ol||n===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ju||n===Bl||n===Hl||n===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ic=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ct=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},nv={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sv=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:iv,fragmentShader:sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends Si{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,x=null,v=new sc,m=t.getContextAttributes(),u=null,b=null,g=[],_=[],D=new Se,C=null,w=new Vt;w.viewport=new gt;let M=new Vt;M.viewport=new gt;let y=[w,M],S=new ic,E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=g[W];return q===void 0&&(q=new ur,g[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=g[W];return q===void 0&&(q=new ur,g[W]=q),q.getGripSpace()},this.getHand=function(W){let q=g[W];return q===void 0&&(q=new ur,g[W]=q),q.getHandSpace()};function T(W){let q=_.indexOf(W.inputSource);if(q===-1)return;let ce=g[q];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function A(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",A),s.removeEventListener("inputsourceschange",G);for(let W=0;W<g.length;W++){let q=_[W];q!==null&&(_[W]=null,g[W].disconnect(q))}E=null,P=null,v.reset(),e.setRenderTarget(u),p=null,d=null,f=null,s=null,b=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",A),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Tt(p.framebufferWidth,p.framebufferHeight,{format:en,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,ce=null,z=null;m.depth&&(z=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?_i:ys,ce=m.stencil?Mi:Fi);let se={colorFormat:t.RGBA8,depthFormat:z,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Tt(d.textureWidth,d.textureHeight,{format:en,type:Ln,depthTexture:new Ps(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(W){for(let q=0;q<W.removed.length;q++){let ce=W.removed[q],z=_.indexOf(ce);z>=0&&(_[z]=null,g[z].disconnect(ce))}for(let q=0;q<W.added.length;q++){let ce=W.added[q],z=_.indexOf(ce);if(z===-1){for(let Me=0;Me<g.length;Me++)if(Me>=_.length){_.push(ce),z=Me;break}else if(_[Me]===null){_[Me]=ce,z=Me;break}if(z===-1)break}let se=g[z];se&&se.connect(ce)}}let H=new O,L=new O;function N(W,q,ce){H.setFromMatrixPosition(q.matrixWorld),L.setFromMatrixPosition(ce.matrixWorld);let z=H.distanceTo(L),se=q.projectionMatrix.elements,Me=ce.projectionMatrix.elements,me=se[14]/(se[10]-1),le=se[14]/(se[10]+1),ne=(se[9]+1)/se[5],de=(se[9]-1)/se[5],B=(se[8]-1)/se[0],Te=(Me[8]+1)/Me[0],$=me*B,oe=me*Te,X=z/(-B+Te),Q=X*-B;if(q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Q),W.translateZ(X),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),se[10]===-1)W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let ue=me+X,I=le+X,R=$-Q,J=oe+(z-Q),ee=ne*le/I*ue,ae=de*le/I*ue;W.projectionMatrix.makePerspective(R,J,ee,ae,ue,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function k(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let q=W.near,ce=W.far;v.texture!==null&&(v.depthNear>0&&(q=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),S.near=M.near=w.near=q,S.far=M.far=w.far=ce,(E!==S.near||P!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,P=S.far),w.layers.mask=W.layers.mask|2,M.layers.mask=W.layers.mask|4,S.layers.mask=w.layers.mask|M.layers.mask;let z=W.parent,se=S.cameras;k(S,z);for(let Me=0;Me<se.length;Me++)k(se[Me],z);se.length===2?N(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),V(W,S,z)};function V(W,q,ce){ce===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ws*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Y=null;function j(W,q){if(h=q.getViewerPose(c||o),x=q,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let z=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,z=!0);for(let Me=0;Me<ce.length;Me++){let me=ce[Me],le=null;if(p!==null)le=p.getViewport(me);else{let de=f.getViewSubImage(d,me);le=de.viewport,Me===0&&(e.setRenderTargetTextures(b,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(b))}let ne=y[Me];ne===void 0&&(ne=new Vt,ne.layers.enable(Me),ne.viewport=new gt,y[Me]=ne),ne.matrix.fromArray(me.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(me.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(le.x,le.y,le.width,le.height),Me===0&&(S.matrix.copy(ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),z===!0&&S.cameras.push(ne)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){let Me=f.getDepthInformation(ce[0]);Me&&Me.isValid&&Me.texture&&v.init(e,Me,s.renderState)}}for(let ce=0;ce<g.length;ce++){let z=_[ce],se=g[ce];z!==null&&se!==void 0&&se.update(z,q,c||o)}Y&&Y(W,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),x=null}let K=new nf;K.setAnimationLoop(j),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}},Ui=new cn,rv=new We;function ov(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,tf(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,g,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,b,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===jt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===jt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let b=e.get(u),g=b.envMap,_=b.envMapRotation;g&&(m.envMap.value=g,Ui.copy(_),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Ui)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=g*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===jt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function av(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,g){let _=g.program;n.uniformBlockBinding(b,_)}function c(b,g){let _=s[b.id];_===void 0&&(x(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",m));let D=g.program;n.updateUBOMapping(b,D);let C=e.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){let g=f();b.__bindingPointIndex=g;let _=i.createBuffer(),D=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,_),_}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let g=s[b.id],_=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let C=0,w=_.length;C<w;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,S=M.length;y<S;y++){let E=M[y];if(p(E,C,y,D)===!0){let P=E.__offset,T=Array.isArray(E.value)?E.value:[E.value],A=0;for(let G=0;G<T.length;G++){let H=T[G],L=v(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,P+A,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,A),A+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,g,_,D){let C=b.value,w=g+"_"+_;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{let M=D[w];if(typeof C=="number"||typeof C=="boolean"){if(M!==C)return D[w]=C,!0}else if(M.equals(C)===!1)return M.copy(C),!0}return!1}function x(b){let g=b.uniforms,_=0,D=16;for(let w=0,M=g.length;w<M;w++){let y=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,E=y.length;S<E;S++){let P=y[S],T=Array.isArray(P.value)?P.value:[P.value];for(let A=0,G=T.length;A<G;A++){let H=T[A],L=v(H),N=_%D,k=N%L.boundary,V=N+k;_+=k,V!==0&&D-V<L.storage&&(_+=D-V),P.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=L.storage}}}let C=_%D;return C>0&&(_+=D-C),b.__size=_,b.__cache={},this}function v(b){let g={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(g.boundary=4,g.storage=4):b.isVector2?(g.boundary=8,g.storage=8):b.isVector3||b.isColor?(g.boundary=16,g.storage=12):b.isVector4?(g.boundary=16,g.storage=16):b.isMatrix3?(g.boundary=48,g.storage=48):b.isMatrix4?(g.boundary=64,g.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),g}function m(b){let g=b.target;g.removeEventListener("dispose",m);let _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Oo=class{constructor(e={}){let{canvas:t=fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),v=new Int32Array(4),m=null,u=null,b=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=vi,this.toneMappingExposure=1;let _=this,D=!1,C=0,w=0,M=null,y=-1,S=null,E=new gt,P=new gt,T=null,A=new ze(0),G=0,H=t.width,L=t.height,N=1,k=null,V=null,Y=new gt(0,0,H,L),j=new gt(0,0,H,L),K=!1,W=new gr,q=!1,ce=!1,z=new We,se=new We,Me=new O,me=new gt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function de(){return M===null?N:1}let B=n;function Te(U,re){return t.getContext(U,re)}try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),B===null){let re="webgl2";if(B=Te(re,U),B===null)throw Te(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let $,oe,X,Q,ue,I,R,J,ee,ae,Z,xe,Re,Ce,Be,be,Ee,Ae,Ne,Oe,nt,Je,it,te;function Pe(){$=new bg(B),$.init(),Je=new tv(B,$),oe=new xg(B,$,e,Je),X=new Qx(B,$),oe.reverseDepthBuffer&&d&&X.buffers.depth.setReversed(!0),Q=new Tg(B),ue=new Bx,I=new ev(B,$,X,ue,oe,Je,Q),R=new yg(_),J=new Sg(_),ee=new Dp(B),it=new mg(B,ee),ae=new Eg(B,ee,Q,it),Z=new Rg(B,ae,ee,Q),Ne=new Ag(B,oe,I),be=new vg(ue),xe=new Fx(_,R,J,$,oe,it,be),Re=new ov(_,ue),Ce=new kx,Be=new Yx($),Ae=new pg(_,R,J,X,Z,p,l),Ee=new Kx(_,Z,oe),te=new av(B,Q,oe,X),Oe=new gg(B,$,Q),nt=new wg(B,$,Q),Q.programs=xe.programs,_.capabilities=oe,_.extensions=$,_.properties=ue,_.renderLists=Ce,_.shadowMap=Ee,_.state=X,_.info=Q}Pe();let ye=new rc(_,B);this.xr=ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let U=$.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=$.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(U){U!==void 0&&(N=U,this.setSize(H,L,!1))},this.getSize=function(U){return U.set(H,L)},this.setSize=function(U,re,ge=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=U,L=re,t.width=Math.floor(U*N),t.height=Math.floor(re*N),ge===!0&&(t.style.width=U+"px",t.style.height=re+"px"),this.setViewport(0,0,U,re)},this.getDrawingBufferSize=function(U){return U.set(H*N,L*N).floor()},this.setDrawingBufferSize=function(U,re,ge){H=U,L=re,N=ge,t.width=Math.floor(U*ge),t.height=Math.floor(re*ge),this.setViewport(0,0,U,re)},this.getCurrentViewport=function(U){return U.copy(E)},this.getViewport=function(U){return U.copy(Y)},this.setViewport=function(U,re,ge,ve){U.isVector4?Y.set(U.x,U.y,U.z,U.w):Y.set(U,re,ge,ve),X.viewport(E.copy(Y).multiplyScalar(N).round())},this.getScissor=function(U){return U.copy(j)},this.setScissor=function(U,re,ge,ve){U.isVector4?j.set(U.x,U.y,U.z,U.w):j.set(U,re,ge,ve),X.scissor(P.copy(j).multiplyScalar(N).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(U){X.setScissorTest(K=U)},this.setOpaqueSort=function(U){k=U},this.setTransparentSort=function(U){V=U},this.getClearColor=function(U){return U.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(U=!0,re=!0,ge=!0){let ve=0;if(U){let ie=!1;if(M!==null){let Ie=M.texture.format;ie=Ie===Yc||Ie===qc||Ie===Xc}if(ie){let Ie=M.texture.type,Ge=Ie===Ln||Ie===Fi||Ie===pr||Ie===Mi||Ie===Vc||Ie===Gc,Xe=Ae.getClearColor(),F=Ae.getClearAlpha(),fe=Xe.r,pe=Xe.g,he=Xe.b;Ge?(x[0]=fe,x[1]=pe,x[2]=he,x[3]=F,B.clearBufferuiv(B.COLOR,0,x)):(v[0]=fe,v[1]=pe,v[2]=he,v[3]=F,B.clearBufferiv(B.COLOR,0,v))}else ve|=B.COLOR_BUFFER_BIT}re&&(ve|=B.DEPTH_BUFFER_BIT),ge&&(ve|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Ce.dispose(),Be.dispose(),ue.dispose(),R.dispose(),J.dispose(),Z.dispose(),it.dispose(),te.dispose(),xe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",un),ye.removeEventListener("sessionend",ji),An.stop()};function we(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let U=Q.autoReset,re=Ee.enabled,ge=Ee.autoUpdate,ve=Ee.needsUpdate,ie=Ee.type;Pe(),Q.autoReset=U,Ee.enabled=re,Ee.autoUpdate=ge,Ee.needsUpdate=ve,Ee.type=ie}function Fe(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Ye(U){let re=U.target;re.removeEventListener("dispose",Ye),mt(re)}function mt(U){wt(U),ue.remove(U)}function wt(U){let re=ue.get(U).programs;re!==void 0&&(re.forEach(function(ge){xe.releaseProgram(ge)}),U.isShaderMaterial&&xe.releaseShaderCache(U))}this.renderBufferDirect=function(U,re,ge,ve,ie,Ie){re===null&&(re=le);let Ge=ie.isMesh&&ie.matrixWorld.determinant()<0,Xe=pn(U,re,ge,ve,ie);X.setMaterial(ve,Ge);let F=ge.index,fe=1;if(ve.wireframe===!0){if(F=ae.getWireframeAttribute(ge),F===void 0)return;fe=2}let pe=ge.drawRange,he=ge.attributes.position,Le=pe.start*fe,Ue=(pe.start+pe.count)*fe;Ie!==null&&(Le=Math.max(Le,Ie.start*fe),Ue=Math.min(Ue,(Ie.start+Ie.count)*fe)),F!==null?(Le=Math.max(Le,0),Ue=Math.min(Ue,F.count)):he!=null&&(Le=Math.max(Le,0),Ue=Math.min(Ue,he.count));let He=Ue-Le;if(He<0||He===1/0)return;it.setup(ie,ve,Xe,ge,F);let Ze,De=Oe;if(F!==null&&(Ze=ee.get(F),De=nt,De.setIndex(Ze)),ie.isMesh)ve.wireframe===!0?(X.setLineWidth(ve.wireframeLinewidth*de()),De.setMode(B.LINES)):De.setMode(B.TRIANGLES);else if(ie.isLine){let _e=ve.linewidth;_e===void 0&&(_e=1),X.setLineWidth(_e*de()),ie.isLineSegments?De.setMode(B.LINES):ie.isLineLoop?De.setMode(B.LINE_LOOP):De.setMode(B.LINE_STRIP)}else ie.isPoints?De.setMode(B.POINTS):ie.isSprite&&De.setMode(B.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)De.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if($.get("WEBGL_multi_draw"))De.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let _e=ie._multiDrawStarts,st=ie._multiDrawCounts,Qe=ie._multiDrawCount,At=F?ee.get(F).bytesPerElement:1,Gn=ue.get(ve).currentProgram.getUniforms();for(let qt=0;qt<Qe;qt++)Gn.setValue(B,"_gl_DrawID",qt),De.render(_e[qt]/At,st[qt])}else if(ie.isInstancedMesh)De.renderInstances(Le,He,ie.count);else if(ge.isInstancedBufferGeometry){let _e=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,st=Math.min(ge.instanceCount,_e);De.renderInstances(Le,He,st)}else De.render(Le,He)};function ct(U,re,ge){U.transparent===!0&&U.side===pt&&U.forceSinglePass===!1?(U.side=jt,U.needsUpdate=!0,Ri(U,re,ge),U.side=yi,U.needsUpdate=!0,Ri(U,re,ge),U.side=pt):Ri(U,re,ge)}this.compile=function(U,re,ge=null){ge===null&&(ge=U),u=Be.get(ge),u.init(re),g.push(u),ge.traverseVisible(function(ie){ie.isLight&&ie.layers.test(re.layers)&&(u.pushLight(ie),ie.castShadow&&u.pushShadow(ie))}),U!==ge&&U.traverseVisible(function(ie){ie.isLight&&ie.layers.test(re.layers)&&(u.pushLight(ie),ie.castShadow&&u.pushShadow(ie))}),u.setupLights();let ve=new Set;return U.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Ie=ie.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){let Xe=Ie[Ge];ct(Xe,ge,ie),ve.add(Xe)}else ct(Ie,ge,ie),ve.add(Ie)}),g.pop(),u=null,ve},this.compileAsync=function(U,re,ge=null){let ve=this.compile(U,re,ge);return new Promise(ie=>{function Ie(){if(ve.forEach(function(Ge){ue.get(Ge).currentProgram.isReady()&&ve.delete(Ge)}),ve.size===0){ie(U);return}setTimeout(Ie,10)}$.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Xt=null;function Jt(U){Xt&&Xt(U)}function un(){An.stop()}function ji(){An.start()}let An=new nf;An.setAnimationLoop(Jt),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(U){Xt=U,ye.setAnimationLoop(U),U===null?An.stop():An.start()},ye.addEventListener("sessionstart",un),ye.addEventListener("sessionend",ji),this.render=function(U,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(re),re=ye.getCamera()),U.isScene===!0&&U.onBeforeRender(_,U,re,M),u=Be.get(U,g.length),u.init(re),g.push(u),se.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),W.setFromProjectionMatrix(se),ce=this.localClippingEnabled,q=be.init(this.clippingPlanes,ce),m=Ce.get(U,b.length),m.init(),b.push(m),ye.enabled===!0&&ye.isPresenting===!0){let Ie=_.xr.getDepthSensingMesh();Ie!==null&&fn(Ie,re,-1/0,_.sortObjects)}fn(U,re,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(k,V),ne=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ne&&Ae.addToRenderList(m,U),this.info.render.frame++,q===!0&&be.beginShadows();let ge=u.state.shadowsArray;Ee.render(ge,U,re),q===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let ve=m.opaque,ie=m.transmissive;if(u.setupLights(),re.isArrayCamera){let Ie=re.cameras;if(ie.length>0)for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++){let F=Ie[Ge];qs(ve,ie,U,F)}ne&&Ae.render(U);for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++){let F=Ie[Ge];Xs(m,U,F,F.viewport)}}else ie.length>0&&qs(ve,ie,U,re),ne&&Ae.render(U),Xs(m,U,re);M!==null&&(I.updateMultisampleRenderTarget(M),I.updateRenderTargetMipmap(M)),U.isScene===!0&&U.onAfterRender(_,U,re),it.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?(u=g[g.length-1],q===!0&&be.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function fn(U,re,ge,ve){if(U.visible===!1)return;if(U.layers.test(re.layers)){if(U.isGroup)ge=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(re);else if(U.isLight)u.pushLight(U),U.castShadow&&u.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||W.intersectsSprite(U)){ve&&me.setFromMatrixPosition(U.matrixWorld).applyMatrix4(se);let Ge=Z.update(U),Xe=U.material;Xe.visible&&m.push(U,Ge,Xe,ge,me.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||W.intersectsObject(U))){let Ge=Z.update(U),Xe=U.material;if(ve&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),me.copy(U.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),me.copy(Ge.boundingSphere.center)),me.applyMatrix4(U.matrixWorld).applyMatrix4(se)),Array.isArray(Xe)){let F=Ge.groups;for(let fe=0,pe=F.length;fe<pe;fe++){let he=F[fe],Le=Xe[he.materialIndex];Le&&Le.visible&&m.push(U,Ge,Le,ge,me.z,he)}}else Xe.visible&&m.push(U,Ge,Xe,ge,me.z,null)}}let Ie=U.children;for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++)fn(Ie[Ge],re,ge,ve)}function Xs(U,re,ge,ve){let ie=U.opaque,Ie=U.transmissive,Ge=U.transparent;u.setupLightsView(ge),q===!0&&be.setGlobalState(_.clippingPlanes,ge),ve&&X.viewport(E.copy(ve)),ie.length>0&&Ai(ie,re,ge),Ie.length>0&&Ai(Ie,re,ge),Ge.length>0&&Ai(Ge,re,ge),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function qs(U,re,ge,ve){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ve.id]===void 0&&(u.state.transmissionRenderTarget[ve.id]=new Tt(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Gt:Ln,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let Ie=u.state.transmissionRenderTarget[ve.id],Ge=ve.viewport||E;Ie.setSize(Ge.z,Ge.w);let Xe=_.getRenderTarget();_.setRenderTarget(Ie),_.getClearColor(A),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),ne&&Ae.render(ge);let F=_.toneMapping;_.toneMapping=vi;let fe=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),u.setupLightsView(ve),q===!0&&be.setGlobalState(_.clippingPlanes,ve),Ai(U,ge,ve),I.updateMultisampleRenderTarget(Ie),I.updateRenderTargetMipmap(Ie),$.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let he=0,Le=re.length;he<Le;he++){let Ue=re[he],He=Ue.object,Ze=Ue.geometry,De=Ue.material,_e=Ue.group;if(De.side===pt&&He.layers.test(ve.layers)){let st=De.side;De.side=jt,De.needsUpdate=!0,Ys(He,ge,ve,Ze,De,_e),De.side=st,De.needsUpdate=!0,pe=!0}}pe===!0&&(I.updateMultisampleRenderTarget(Ie),I.updateRenderTargetMipmap(Ie))}_.setRenderTarget(Xe),_.setClearColor(A,G),fe!==void 0&&(ve.viewport=fe),_.toneMapping=F}function Ai(U,re,ge){let ve=re.isScene===!0?re.overrideMaterial:null;for(let ie=0,Ie=U.length;ie<Ie;ie++){let Ge=U[ie],Xe=Ge.object,F=Ge.geometry,fe=ve===null?Ge.material:ve,pe=Ge.group;Xe.layers.test(ge.layers)&&Ys(Xe,re,ge,F,fe,pe)}}function Ys(U,re,ge,ve,ie,Ie){U.onBeforeRender(_,re,ge,ve,ie,Ie),U.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ie.onBeforeRender(_,re,ge,ve,U,Ie),ie.transparent===!0&&ie.side===pt&&ie.forceSinglePass===!1?(ie.side=jt,ie.needsUpdate=!0,_.renderBufferDirect(ge,re,ve,ie,U,Ie),ie.side=yi,ie.needsUpdate=!0,_.renderBufferDirect(ge,re,ve,ie,U,Ie),ie.side=pt):_.renderBufferDirect(ge,re,ve,ie,U,Ie),U.onAfterRender(_,re,ge,ve,ie,Ie)}function Ri(U,re,ge){re.isScene!==!0&&(re=le);let ve=ue.get(U),ie=u.state.lights,Ie=u.state.shadowsArray,Ge=ie.state.version,Xe=xe.getParameters(U,ie.state,Ie,re,ge),F=xe.getProgramCacheKey(Xe),fe=ve.programs;ve.environment=U.isMeshStandardMaterial?re.environment:null,ve.fog=re.fog,ve.envMap=(U.isMeshStandardMaterial?J:R).get(U.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&U.envMap===null?re.environmentRotation:U.envMapRotation,fe===void 0&&(U.addEventListener("dispose",Ye),fe=new Map,ve.programs=fe);let pe=fe.get(F);if(pe!==void 0){if(ve.currentProgram===pe&&ve.lightsStateVersion===Ge)return Ci(U,Xe),pe}else Xe.uniforms=xe.getUniforms(U),U.onBeforeCompile(Xe,_),pe=xe.acquireProgram(Xe,F),fe.set(F,pe),ve.uniforms=Xe.uniforms;let he=ve.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(he.clippingPlanes=be.uniform),Ci(U,Xe),ve.needsLights=Zs(U),ve.lightsStateVersion=Ge,ve.needsLights&&(he.ambientLightColor.value=ie.state.ambient,he.lightProbe.value=ie.state.probe,he.directionalLights.value=ie.state.directional,he.directionalLightShadows.value=ie.state.directionalShadow,he.spotLights.value=ie.state.spot,he.spotLightShadows.value=ie.state.spotShadow,he.rectAreaLights.value=ie.state.rectArea,he.ltc_1.value=ie.state.rectAreaLTC1,he.ltc_2.value=ie.state.rectAreaLTC2,he.pointLights.value=ie.state.point,he.pointLightShadows.value=ie.state.pointShadow,he.hemisphereLights.value=ie.state.hemi,he.directionalShadowMap.value=ie.state.directionalShadowMap,he.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,he.spotShadowMap.value=ie.state.spotShadowMap,he.spotLightMatrix.value=ie.state.spotLightMatrix,he.spotLightMap.value=ie.state.spotLightMap,he.pointShadowMap.value=ie.state.pointShadowMap,he.pointShadowMatrix.value=ie.state.pointShadowMatrix),ve.currentProgram=pe,ve.uniformsList=null,pe}function dn(U){if(U.uniformsList===null){let re=U.currentProgram.getUniforms();U.uniformsList=_s.seqWithValue(re.seq,U.uniforms)}return U.uniformsList}function Ci(U,re){let ge=ue.get(U);ge.outputColorSpace=re.outputColorSpace,ge.batching=re.batching,ge.batchingColor=re.batchingColor,ge.instancing=re.instancing,ge.instancingColor=re.instancingColor,ge.instancingMorph=re.instancingMorph,ge.skinning=re.skinning,ge.morphTargets=re.morphTargets,ge.morphNormals=re.morphNormals,ge.morphColors=re.morphColors,ge.morphTargetsCount=re.morphTargetsCount,ge.numClippingPlanes=re.numClippingPlanes,ge.numIntersection=re.numClipIntersection,ge.vertexAlphas=re.vertexAlphas,ge.vertexTangents=re.vertexTangents,ge.toneMapping=re.toneMapping}function pn(U,re,ge,ve,ie){re.isScene!==!0&&(re=le),I.resetTextureUnits();let Ie=re.fog,Ge=ve.isMeshStandardMaterial?re.environment:null,Xe=M===null?_.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bs,F=(ve.isMeshStandardMaterial?J:R).get(ve.envMap||Ge),fe=ve.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pe=!!ge.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),he=!!ge.morphAttributes.position,Le=!!ge.morphAttributes.normal,Ue=!!ge.morphAttributes.color,He=vi;ve.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(He=_.toneMapping);let Ze=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,De=Ze!==void 0?Ze.length:0,_e=ue.get(ve),st=u.state.lights;if(q===!0&&(ce===!0||U!==S)){let mn=U===S&&ve.id===y;be.setState(ve,U,mn)}let Qe=!1;ve.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==st.state.version||_e.outputColorSpace!==Xe||ie.isBatchedMesh&&_e.batching===!1||!ie.isBatchedMesh&&_e.batching===!0||ie.isBatchedMesh&&_e.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&_e.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&_e.instancing===!1||!ie.isInstancedMesh&&_e.instancing===!0||ie.isSkinnedMesh&&_e.skinning===!1||!ie.isSkinnedMesh&&_e.skinning===!0||ie.isInstancedMesh&&_e.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&_e.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&_e.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&_e.instancingMorph===!1&&ie.morphTexture!==null||_e.envMap!==F||ve.fog===!0&&_e.fog!==Ie||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==be.numPlanes||_e.numIntersection!==be.numIntersection)||_e.vertexAlphas!==fe||_e.vertexTangents!==pe||_e.morphTargets!==he||_e.morphNormals!==Le||_e.morphColors!==Ue||_e.toneMapping!==He||_e.morphTargetsCount!==De)&&(Qe=!0):(Qe=!0,_e.__version=ve.version);let At=_e.currentProgram;Qe===!0&&(At=Ri(ve,re,ie));let Gn=!1,qt=!1,li=!1,yt=At.getUniforms(),Fn=_e.uniforms;if(X.useProgram(At.program)&&(Gn=!0,qt=!0,li=!0),ve.id!==y&&(y=ve.id,qt=!0),Gn||S!==U){X.buffers.depth.getReversed()?(z.copy(U.projectionMatrix),pp(z),mp(z),yt.setValue(B,"projectionMatrix",z)):yt.setValue(B,"projectionMatrix",U.projectionMatrix),yt.setValue(B,"viewMatrix",U.matrixWorldInverse);let ci=yt.map.cameraPosition;ci!==void 0&&ci.setValue(B,Me.setFromMatrixPosition(U.matrixWorld)),oe.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&yt.setValue(B,"isOrthographic",U.isOrthographicCamera===!0),S!==U&&(S=U,qt=!0,li=!0)}if(ie.isSkinnedMesh){yt.setOptional(B,ie,"bindMatrix"),yt.setOptional(B,ie,"bindMatrixInverse");let mn=ie.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),yt.setValue(B,"boneTexture",mn.boneTexture,I))}ie.isBatchedMesh&&(yt.setOptional(B,ie,"batchingTexture"),yt.setValue(B,"batchingTexture",ie._matricesTexture,I),yt.setOptional(B,ie,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",ie._indirectTexture,I),yt.setOptional(B,ie,"batchingColorTexture"),ie._colorsTexture!==null&&yt.setValue(B,"batchingColorTexture",ie._colorsTexture,I));let js=ge.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&Ne.update(ie,ge,At),(qt||_e.receiveShadow!==ie.receiveShadow)&&(_e.receiveShadow=ie.receiveShadow,yt.setValue(B,"receiveShadow",ie.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(Fn.envMap.value=F,Fn.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&re.environment!==null&&(Fn.envMapIntensity.value=re.environmentIntensity),qt&&(yt.setValue(B,"toneMappingExposure",_.toneMappingExposure),_e.needsLights&&Ki(Fn,li),Ie&&ve.fog===!0&&Re.refreshFogUniforms(Fn,Ie),Re.refreshMaterialUniforms(Fn,ve,N,L,u.state.transmissionRenderTarget[U.id]),_s.upload(B,dn(_e),Fn,I)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(_s.upload(B,dn(_e),Fn,I),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&yt.setValue(B,"center",ie.center),yt.setValue(B,"modelViewMatrix",ie.modelViewMatrix),yt.setValue(B,"normalMatrix",ie.normalMatrix),yt.setValue(B,"modelMatrix",ie.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){let mn=ve.uniformsGroups;for(let ci=0,hi=mn.length;ci<hi;ci++){let _h=mn[ci];te.update(_h,At),te.bind(_h,At)}}return At}function Ki(U,re){U.ambientLightColor.needsUpdate=re,U.lightProbe.needsUpdate=re,U.directionalLights.needsUpdate=re,U.directionalLightShadows.needsUpdate=re,U.pointLights.needsUpdate=re,U.pointLightShadows.needsUpdate=re,U.spotLights.needsUpdate=re,U.spotLightShadows.needsUpdate=re,U.rectAreaLights.needsUpdate=re,U.hemisphereLights.needsUpdate=re}function Zs(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(U,re,ge){ue.get(U.texture).__webglTexture=re,ue.get(U.depthTexture).__webglTexture=ge;let ve=ue.get(U);ve.__hasExternalTextures=!0,ve.__autoAllocateDepthBuffer=ge===void 0,ve.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,re){let ge=ue.get(U);ge.__webglFramebuffer=re,ge.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(U,re=0,ge=0){M=U,C=re,w=ge;let ve=!0,ie=null,Ie=!1,Ge=!1;if(U){let F=ue.get(U);if(F.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(B.FRAMEBUFFER,null),ve=!1;else if(F.__webglFramebuffer===void 0)I.setupRenderTarget(U);else if(F.__hasExternalTextures)I.rebindTextures(U,ue.get(U.texture).__webglTexture,ue.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let he=U.depthTexture;if(F.__boundDepthTexture!==he){if(he!==null&&ue.has(he)&&(U.width!==he.image.width||U.height!==he.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(U)}}let fe=U.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Ge=!0);let pe=ue.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(pe[re])?ie=pe[re][ge]:ie=pe[re],Ie=!0):U.samples>0&&I.useMultisampledRTT(U)===!1?ie=ue.get(U).__webglMultisampledFramebuffer:Array.isArray(pe)?ie=pe[ge]:ie=pe,E.copy(U.viewport),P.copy(U.scissor),T=U.scissorTest}else E.copy(Y).multiplyScalar(N).floor(),P.copy(j).multiplyScalar(N).floor(),T=K;if(X.bindFramebuffer(B.FRAMEBUFFER,ie)&&ve&&X.drawBuffers(U,ie),X.viewport(E),X.scissor(P),X.setScissorTest(T),Ie){let F=ue.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+re,F.__webglTexture,ge)}else if(Ge){let F=ue.get(U.texture),fe=re||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,F.__webglTexture,ge||0,fe)}y=-1},this.readRenderTargetPixels=function(U,re,ge,ve,ie,Ie,Ge){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ue.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){X.bindFramebuffer(B.FRAMEBUFFER,Xe);try{let F=U.texture,fe=F.format,pe=F.type;if(!oe.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=U.width-ve&&ge>=0&&ge<=U.height-ie&&B.readPixels(re,ge,ve,ie,Je.convert(fe),Je.convert(pe),Ie)}finally{let F=M!==null?ue.get(M).__webglFramebuffer:null;X.bindFramebuffer(B.FRAMEBUFFER,F)}}},this.readRenderTargetPixelsAsync=async function(U,re,ge,ve,ie,Ie,Ge){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ue.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){let F=U.texture,fe=F.format,pe=F.type;if(!oe.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(re>=0&&re<=U.width-ve&&ge>=0&&ge<=U.height-ie){X.bindFramebuffer(B.FRAMEBUFFER,Xe);let he=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.bufferData(B.PIXEL_PACK_BUFFER,Ie.byteLength,B.STREAM_READ),B.readPixels(re,ge,ve,ie,Je.convert(fe),Je.convert(pe),0);let Le=M!==null?ue.get(M).__webglFramebuffer:null;X.bindFramebuffer(B.FRAMEBUFFER,Le);let Ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await dp(B,Ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ie),B.deleteBuffer(he),B.deleteSync(Ue),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,re=null,ge=0){U.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),re=arguments[0]||null,U=arguments[1]);let ve=Math.pow(2,-ge),ie=Math.floor(U.image.width*ve),Ie=Math.floor(U.image.height*ve),Ge=re!==null?re.x:0,Xe=re!==null?re.y:0;I.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,ge,0,0,Ge,Xe,ie,Ie),X.unbindTexture()},this.copyTextureToTexture=function(U,re,ge=null,ve=null,ie=0){U.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),ve=arguments[0]||null,U=arguments[1],re=arguments[2],ie=arguments[3]||0,ge=null);let Ie,Ge,Xe,F,fe,pe,he,Le,Ue,He=U.isCompressedTexture?U.mipmaps[ie]:U.image;ge!==null?(Ie=ge.max.x-ge.min.x,Ge=ge.max.y-ge.min.y,Xe=ge.isBox3?ge.max.z-ge.min.z:1,F=ge.min.x,fe=ge.min.y,pe=ge.isBox3?ge.min.z:0):(Ie=He.width,Ge=He.height,Xe=He.depth||1,F=0,fe=0,pe=0),ve!==null?(he=ve.x,Le=ve.y,Ue=ve.z):(he=0,Le=0,Ue=0);let Ze=Je.convert(re.format),De=Je.convert(re.type),_e;re.isData3DTexture?(I.setTexture3D(re,0),_e=B.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(I.setTexture2DArray(re,0),_e=B.TEXTURE_2D_ARRAY):(I.setTexture2D(re,0),_e=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,re.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,re.unpackAlignment);let st=B.getParameter(B.UNPACK_ROW_LENGTH),Qe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),At=B.getParameter(B.UNPACK_SKIP_PIXELS),Gn=B.getParameter(B.UNPACK_SKIP_ROWS),qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,He.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,He.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,F),B.pixelStorei(B.UNPACK_SKIP_ROWS,fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,pe);let li=U.isDataArrayTexture||U.isData3DTexture,yt=re.isDataArrayTexture||re.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){let Fn=ue.get(U),js=ue.get(re),mn=ue.get(Fn.__renderTarget),ci=ue.get(js.__renderTarget);X.bindFramebuffer(B.READ_FRAMEBUFFER,mn.__webglFramebuffer),X.bindFramebuffer(B.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let hi=0;hi<Xe;hi++)li&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ue.get(U).__webglTexture,ie,pe+hi),U.isDepthTexture?(yt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ue.get(re).__webglTexture,ie,Ue+hi),B.blitFramebuffer(F,fe,Ie,Ge,he,Le,Ie,Ge,B.DEPTH_BUFFER_BIT,B.NEAREST)):yt?B.copyTexSubImage3D(_e,ie,he,Le,Ue+hi,F,fe,Ie,Ge):B.copyTexSubImage2D(_e,ie,he,Le,Ue+hi,F,fe,Ie,Ge);X.bindFramebuffer(B.READ_FRAMEBUFFER,null),X.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yt?U.isDataTexture||U.isData3DTexture?B.texSubImage3D(_e,ie,he,Le,Ue,Ie,Ge,Xe,Ze,De,He.data):re.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,ie,he,Le,Ue,Ie,Ge,Xe,Ze,He.data):B.texSubImage3D(_e,ie,he,Le,Ue,Ie,Ge,Xe,Ze,De,He):U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ie,he,Le,Ie,Ge,Ze,De,He.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ie,he,Le,He.width,He.height,Ze,He.data):B.texSubImage2D(B.TEXTURE_2D,ie,he,Le,Ie,Ge,Ze,De,He);B.pixelStorei(B.UNPACK_ROW_LENGTH,st),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,At),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qt),ie===0&&re.generateMipmaps&&B.generateMipmap(_e),X.unbindTexture()},this.copyTextureToTexture3D=function(U,re,ge=null,ve=null,ie=0){return U.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ge=arguments[0]||null,ve=arguments[1]||null,U=arguments[2],re=arguments[3],ie=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,re,ge,ve,ie)},this.initRenderTarget=function(U){ue.get(U).__webglFramebuffer===void 0&&I.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?I.setTextureCube(U,0):U.isData3DTexture?I.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?I.setTexture2DArray(U,0):I.setTexture2D(U,0),X.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,X.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}},Fo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Is=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new O,xr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bi=class extends Sn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},us,er=new O,fs=new O,ds=new O,ps=new Se,tr=new Se,lf=new We,ho=new O,nr=new O,uo=new O,_u=new Se,Ja=new Se,Su=new Se,Ls=class extends Pt{constructor(e=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bo(t,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new xr(n,3,0,!1)),us.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=us,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ds.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;fo(ho.set(-.5,-.5,0),ds,o,fs,s,r),fo(nr.set(.5,-.5,0),ds,o,fs,s,r),fo(uo.set(.5,.5,0),ds,o,fs,s,r),_u.set(0,0),Ja.set(1,0),Su.set(1,1);let a=e.ray.intersectTriangle(ho,nr,uo,!1,er);if(a===null&&(fo(nr.set(-.5,.5,0),ds,o,fs,s,r),Ja.set(0,1),a=e.ray.intersectTriangle(ho,uo,nr,!1,er),a===null))return;let l=e.ray.origin.distanceTo(er);l<e.near||l>e.far||t.push({distance:l,point:er.clone(),uv:xi.getInterpolation(er,ho,nr,uo,_u,Ja,Su,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fo(i,e,t,n,s,r){ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*ps.x-s*ps.y,tr.y=s*ps.x+r*ps.y):tr.copy(ps),i.copy(e),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(lf)}var ni=class extends Nt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dt,h=Dt,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new We,bu=new We,po=[],Eu=new Dn,lv=new We,ir=new qe,sr=new ti,St=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),Eu.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),sr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),bu.multiplyMatrices(n,ms),ir.matrixWorld=bu,ir.raycast(e,po);for(let o=0,a=po.length;o<a;o++){let l=po[o];l.instanceId=r,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(s*this.count),s,this.count,Wc,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Hi=class extends Sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ho=new O,ko=new O,wu=new We,rr=new Ts,mo=new ti,Qa=new O,Tu=new O,yr=class extends Pt{constructor(e=new et,t=new Hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ho.fromBufferAttribute(t,s-1),ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ho.distanceTo(ko);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;wu.copy(s).invert(),rr.copy(e.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let v=p,m=x-1;v<m;v+=c){let u=h.getX(v),b=h.getX(v+1),g=go(this,e,rr,l,u,b);g&&t.push(g)}if(this.isLineLoop){let v=h.getX(x-1),m=h.getX(p),u=go(this,e,rr,l,v,m);u&&t.push(u)}}else{let p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=p,m=x-1;v<m;v+=c){let u=go(this,e,rr,l,v,v+1);u&&t.push(u)}if(this.isLineLoop){let v=go(this,e,rr,l,x-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function go(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ho.fromBufferAttribute(o,s),ko.fromBufferAttribute(o,r),t.distanceSqToSegment(Ho,ko,Qa,Tu)>n)return;Qa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qa);if(!(l<e.near||l>e.far))return{distance:l,point:Tu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Au=new O,Ru=new O,Vo=class extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Au.fromBufferAttribute(t,s),Ru.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Au.distanceTo(Ru);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ki=class extends Sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cu=new We,oc=new Ts,xo=new ti,vo=new O,bi=class extends Pt{constructor(e=new et,t=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Cu.copy(s).invert(),oc.copy(e.ray).applyMatrix4(Cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=d,v=p;x<v;x++){let m=c.getX(x);vo.fromBufferAttribute(f,m),Pu(vo,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,v=p;x<v;x++)vo.fromBufferAttribute(f,x),Pu(vo,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pu(i,e,t,n,s,r,o){let a=oc.distanceSqToPoint(i);if(a<t){let l=new O;oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var It=class extends Nt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],r=[],o=[],a=new O,l=new We;for(let p=0;p<=e;p++){let x=p/e;s[p]=this.getTangentAt(x,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Bt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Bt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mr=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ac=class extends Mr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var yo=new O,$a=new Kc,el=new Kc,tl=new Kc,lc=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),c=yo);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),$a.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,x,v,m),el.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,x,v,m),tl.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),el.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),tl.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set($a.calc(l),el.calc(l),tl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Iu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function cv(i,e){let t=1-i;return t*t*e}function hv(i,e){return 2*(1-i)*i*e}function uv(i,e){return i*i*e}function fr(i,e,t,n){return cv(i,e)+hv(i,t)+uv(i,n)}function fv(i,e){let t=1-i;return t*t*t*e}function dv(i,e){let t=1-i;return 3*t*t*i*e}function pv(i,e){return 3*(1-i)*i*i*e}function mv(i,e){return i*i*i*e}function dr(i,e,t,n,s){return fv(i,e)+dv(i,t)+pv(i,n)+mv(i,s)}var Go=class extends bn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cc=class extends bn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y),dr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends bn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hc=class extends bn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends bn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uc=class extends bn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y),fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Iu(a,l.x,c.x,h.x,f.x),Iu(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},fc=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:lc,CubicBezierCurve:Go,CubicBezierCurve3:cc,EllipseCurve:Mr,LineCurve:Wo,LineCurve3:hc,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:uc,SplineCurve:qo}),dc=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new fc[s.type]().fromJSON(s))}return this}},_r=class extends dc{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wo(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xo(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Go(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Mr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pc=class i extends et{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new O,d=new Se,p=new O,x=new O,v=new O,m=0,u=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,u=e[b+1].y-e[b].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[b+1].x-e[b].x,u=e[b+1].y-e[b].y,p.x=u*1,p.y=-m,p.z=u*0,x.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(x)}for(let b=0;b<=t;b++){let g=n+b*h*s,_=Math.sin(g),D=Math.cos(g);for(let C=0;C<=e.length-1;C++){f.x=e[C].x*_,f.y=e[C].y,f.z=e[C].x*D,o.push(f.x,f.y,f.z),d.x=b/t,d.y=C/(e.length-1),a.push(d.x,d.y);let w=l[3*C+0]*_,M=l[3*C+1],y=l[3*C+0]*D;c.push(w,M,y)}}for(let b=0;b<t;b++)for(let g=0;g<e.length-1;g++){let _=g+b*e.length,D=_,C=_+e.length,w=_+e.length+1,M=_+1;r.push(D,C,M),r.push(w,M,C)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ei=class i extends pc{constructor(e=1,t=1,n=4,s=8){let r=new _r;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var vt=class i extends et{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],x=0,v=[],m=n/2,u=0;b(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ke(f,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(p,2));function b(){let _=new O,D=new O,C=0,w=(t-e)/n;for(let M=0;M<=r;M++){let y=[],S=M/r,E=S*(t-e)+e;for(let P=0;P<=s;P++){let T=P/s,A=T*l+a,G=Math.sin(A),H=Math.cos(A);D.x=E*G,D.y=-S*n+m,D.z=E*H,f.push(D.x,D.y,D.z),_.set(G,w,H).normalize(),d.push(_.x,_.y,_.z),p.push(T,1-S),y.push(x++)}v.push(y)}for(let M=0;M<s;M++)for(let y=0;y<r;y++){let S=v[y][M],E=v[y+1][M],P=v[y+1][M+1],T=v[y][M+1];(e>0||y!==0)&&(h.push(S,E,T),C+=3),(t>0||y!==r-1)&&(h.push(E,P,T),C+=3)}c.addGroup(u,C,0),u+=C}function g(_){let D=x,C=new Se,w=new O,M=0,y=_===!0?e:t,S=_===!0?1:-1;for(let P=1;P<=s;P++)f.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),x++;let E=x;for(let P=0;P<=s;P++){let A=P/s*l+a,G=Math.cos(A),H=Math.sin(A);w.x=y*H,w.y=m*S,w.z=y*G,f.push(w.x,w.y,w.z),d.push(0,S,0),C.x=G*.5+.5,C.y=H*.5*S+.5,p.push(C.x,C.y),x++}for(let P=0;P<s;P++){let T=D+P,A=E+P;_===!0?h.push(A,A+1,T):h.push(A+1,A,T),M+=3}c.addGroup(u,M,_===!0?1:2),u+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hn=class i extends vt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mc=class i extends et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let g=new O,_=new O,D=new O;for(let C=0;C<t.length;C+=3)p(t[C+0],g),p(t[C+1],_),p(t[C+2],D),l(g,_,D,b)}function l(b,g,_,D){let C=D+1,w=[];for(let M=0;M<=C;M++){w[M]=[];let y=b.clone().lerp(_,M/C),S=g.clone().lerp(_,M/C),E=C-M;for(let P=0;P<=E;P++)P===0&&M===C?w[M][P]=y:w[M][P]=y.clone().lerp(S,P/E)}for(let M=0;M<C;M++)for(let y=0;y<2*(C-M)-1;y++){let S=Math.floor(y/2);y%2===0?(d(w[M][S+1]),d(w[M+1][S]),d(w[M][S])):(d(w[M][S+1]),d(w[M+1][S+1]),d(w[M+1][S]))}}function c(b){let g=new O;for(let _=0;_<r.length;_+=3)g.x=r[_+0],g.y=r[_+1],g.z=r[_+2],g.normalize().multiplyScalar(b),r[_+0]=g.x,r[_+1]=g.y,r[_+2]=g.z}function h(){let b=new O;for(let g=0;g<r.length;g+=3){b.x=r[g+0],b.y=r[g+1],b.z=r[g+2];let _=m(b)/2/Math.PI+.5,D=u(b)/Math.PI+.5;o.push(_,1-D)}x(),f()}function f(){for(let b=0;b<o.length;b+=6){let g=o[b+0],_=o[b+2],D=o[b+4],C=Math.max(g,_,D),w=Math.min(g,_,D);C>.9&&w<.1&&(g<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),D<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,g){let _=b*3;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function x(){let b=new O,g=new O,_=new O,D=new O,C=new Se,w=new Se,M=new Se;for(let y=0,S=0;y<r.length;y+=9,S+=6){b.set(r[y+0],r[y+1],r[y+2]),g.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),C.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),M.set(o[S+4],o[S+5]),D.copy(b).add(g).add(_).divideScalar(3);let E=m(D);v(C,S+0,b,E),v(w,S+2,g,E),v(M,S+4,_,E)}}function v(b,g,_,D){D<0&&b.x===1&&(o[g]=b.x-1),_.x===0&&_.z===0&&(o[g]=D/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ds=class extends _r{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new _r().fromJSON(s))}return this}},gv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,d,p;if(n&&(r=_v(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let x=t;x<s;x+=t)f=i[x],d=i[x+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Sr(r,o,t,a,l,p,0),o}};function cf(i,e,t,n,s){let r,o;if(s===Lv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Lu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Lu(r,i[r],i[r+1],o);return o&&oa(o,o.next)&&(Er(o),o=o.next),o}function Vi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oa(t,t.next)||bt(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Sr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Tv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?vv(i,n,s,r):xv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Er(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yv(Vi(i),e,t),Sr(i,e,t,n,s,r,2)):o===2&&Mv(i,e,t,n,s,r):Sr(Vi(i),e,t,n,s,r,1);break}}}function xv(i){let e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=d&&x.y>=f&&x.y<=p&&xs(s,a,r,l,o,c,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function vv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,x=h<f?h<d?h:d:f<d?f:d,v=a>l?a>c?a:c:l>c?l:c,m=h>f?h>d?h:d:f>d?f:d,u=gc(p,x,e,t,n),b=gc(v,m,e,t,n),g=i.prevZ,_=i.nextZ;for(;g&&g.z>=u&&_&&_.z<=b;){if(g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&xs(a,h,l,f,c,d,g.x,g.y)&&bt(g.prev,g,g.next)>=0||(g=g.prevZ,_.x>=p&&_.x<=v&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&xs(a,h,l,f,c,d,_.x,_.y)&&bt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;g&&g.z>=u;){if(g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&xs(a,h,l,f,c,d,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;_&&_.z<=b;){if(_.x>=p&&_.x<=v&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&xs(a,h,l,f,c,d,_.x,_.y)&&bt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function yv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!oa(s,r)&&hf(s,n,n.next,r)&&br(s,r)&&br(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Er(n),Er(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function Mv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cv(o,a)){let l=uf(o,a);o=Vi(o,o.next),l=Vi(l,l.next),Sr(o,e,t,n,s,r,0),Sr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _v(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=cf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Rv(c));for(s.sort(Sv),r=0;r<s.length;r++)t=bv(s[r],t);return t}function Sv(i,e){return i.x-e.x}function bv(i,e){let t=Ev(i,e);if(!t)return e;let n=uf(t,i);return Vi(n,n.next),Vi(t,t.next)}function Ev(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&xs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),br(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&wv(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function wv(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function Tv(i,e,t,n){let s=i;do s.z===0&&(s.z=gc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Av(s)}function Av(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function gc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Rv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Cv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Pv(i,e)&&(br(i,e)&&br(e,i)&&Iv(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||oa(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oa(i,e){return i.x===e.x&&i.y===e.y}function hf(i,e,t,n){let s=_o(bt(i,e,t)),r=_o(bt(i,e,n)),o=_o(bt(t,n,i)),a=_o(bt(t,n,e));return!!(s!==r&&o!==a||s===0&&Mo(i,t,e)||r===0&&Mo(i,n,e)||o===0&&Mo(t,i,n)||a===0&&Mo(t,e,n))}function Mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _o(i){return i>0?1:i<0?-1:0}function Pv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function br(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function Iv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function uf(i,e){let t=new xc(i.i,i.x,i.y),n=new xc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lu(i,e,t,n){let s=new xc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Du(e),Nu(n,e);let o=e.length;t.forEach(Du);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Nu(n,t[l]);let a=gv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var wr=class i extends et{constructor(e=new Ds([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Dv,g,_=!1,D,C,w,M;u&&(g=u.getSpacedPoints(h),_=!0,d=!1,D=u.computeFrenetFrames(h,!1),C=new O,w=new O,M=new O),d||(m=0,p=0,x=0,v=0);let y=a.extractPoints(c),S=y.shape,E=y.holes;if(!yn.isClockWise(S)){S=S.reverse();for(let ne=0,de=E.length;ne<de;ne++){let B=E[ne];yn.isClockWise(B)&&(E[ne]=B.reverse())}}let T=yn.triangulateShape(S,E),A=S;for(let ne=0,de=E.length;ne<de;ne++){let B=E[ne];S=S.concat(B)}function G(ne,de,B){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(de,B)}let H=S.length,L=T.length;function N(ne,de,B){let Te,$,oe,X=ne.x-de.x,Q=ne.y-de.y,ue=B.x-ne.x,I=B.y-ne.y,R=X*X+Q*Q,J=X*I-Q*ue;if(Math.abs(J)>Number.EPSILON){let ee=Math.sqrt(R),ae=Math.sqrt(ue*ue+I*I),Z=de.x-Q/ee,xe=de.y+X/ee,Re=B.x-I/ae,Ce=B.y+ue/ae,Be=((Re-Z)*I-(Ce-xe)*ue)/(X*I-Q*ue);Te=Z+X*Be-ne.x,$=xe+Q*Be-ne.y;let be=Te*Te+$*$;if(be<=2)return new Se(Te,$);oe=Math.sqrt(be/2)}else{let ee=!1;X>Number.EPSILON?ue>Number.EPSILON&&(ee=!0):X<-Number.EPSILON?ue<-Number.EPSILON&&(ee=!0):Math.sign(Q)===Math.sign(I)&&(ee=!0),ee?(Te=-Q,$=X,oe=Math.sqrt(R)):(Te=X,$=Q,oe=Math.sqrt(R/2))}return new Se(Te/oe,$/oe)}let k=[];for(let ne=0,de=A.length,B=de-1,Te=ne+1;ne<de;ne++,B++,Te++)B===de&&(B=0),Te===de&&(Te=0),k[ne]=N(A[ne],A[B],A[Te]);let V=[],Y,j=k.concat();for(let ne=0,de=E.length;ne<de;ne++){let B=E[ne];Y=[];for(let Te=0,$=B.length,oe=$-1,X=Te+1;Te<$;Te++,oe++,X++)oe===$&&(oe=0),X===$&&(X=0),Y[Te]=N(B[Te],B[oe],B[X]);V.push(Y),j=j.concat(Y)}for(let ne=0;ne<m;ne++){let de=ne/m,B=p*Math.cos(de*Math.PI/2),Te=x*Math.sin(de*Math.PI/2)+v;for(let $=0,oe=A.length;$<oe;$++){let X=G(A[$],k[$],Te);z(X.x,X.y,-B)}for(let $=0,oe=E.length;$<oe;$++){let X=E[$];Y=V[$];for(let Q=0,ue=X.length;Q<ue;Q++){let I=G(X[Q],Y[Q],Te);z(I.x,I.y,-B)}}}let K=x+v;for(let ne=0;ne<H;ne++){let de=d?G(S[ne],j[ne],K):S[ne];_?(w.copy(D.normals[0]).multiplyScalar(de.x),C.copy(D.binormals[0]).multiplyScalar(de.y),M.copy(g[0]).add(w).add(C),z(M.x,M.y,M.z)):z(de.x,de.y,0)}for(let ne=1;ne<=h;ne++)for(let de=0;de<H;de++){let B=d?G(S[de],j[de],K):S[de];_?(w.copy(D.normals[ne]).multiplyScalar(B.x),C.copy(D.binormals[ne]).multiplyScalar(B.y),M.copy(g[ne]).add(w).add(C),z(M.x,M.y,M.z)):z(B.x,B.y,f/h*ne)}for(let ne=m-1;ne>=0;ne--){let de=ne/m,B=p*Math.cos(de*Math.PI/2),Te=x*Math.sin(de*Math.PI/2)+v;for(let $=0,oe=A.length;$<oe;$++){let X=G(A[$],k[$],Te);z(X.x,X.y,f+B)}for(let $=0,oe=E.length;$<oe;$++){let X=E[$];Y=V[$];for(let Q=0,ue=X.length;Q<ue;Q++){let I=G(X[Q],Y[Q],Te);_?z(I.x,I.y+g[h-1].y,g[h-1].x+B):z(I.x,I.y,f+B)}}}W(),q();function W(){let ne=s.length/3;if(d){let de=0,B=H*de;for(let Te=0;Te<L;Te++){let $=T[Te];se($[2]+B,$[1]+B,$[0]+B)}de=h+m*2,B=H*de;for(let Te=0;Te<L;Te++){let $=T[Te];se($[0]+B,$[1]+B,$[2]+B)}}else{for(let de=0;de<L;de++){let B=T[de];se(B[2],B[1],B[0])}for(let de=0;de<L;de++){let B=T[de];se(B[0]+H*h,B[1]+H*h,B[2]+H*h)}}n.addGroup(ne,s.length/3-ne,0)}function q(){let ne=s.length/3,de=0;ce(A,de),de+=A.length;for(let B=0,Te=E.length;B<Te;B++){let $=E[B];ce($,de),de+=$.length}n.addGroup(ne,s.length/3-ne,1)}function ce(ne,de){let B=ne.length;for(;--B>=0;){let Te=B,$=B-1;$<0&&($=ne.length-1);for(let oe=0,X=h+m*2;oe<X;oe++){let Q=H*oe,ue=H*(oe+1),I=de+Te+Q,R=de+$+Q,J=de+$+ue,ee=de+Te+ue;Me(I,R,J,ee)}}}function z(ne,de,B){l.push(ne),l.push(de),l.push(B)}function se(ne,de,B){me(ne),me(de),me(B);let Te=s.length/3,$=b.generateTopUV(n,s,Te-3,Te-2,Te-1);le($[0]),le($[1]),le($[2])}function Me(ne,de,B,Te){me(ne),me(de),me(Te),me(de),me(B),me(Te);let $=s.length/3,oe=b.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);le(oe[0]),le(oe[1]),le(oe[3]),le(oe[1]),le(oe[2]),le(oe[3])}function me(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function le(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Nv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fc[s.type]().fromJSON(s)),new i(n,e.options)}},Dv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],x=e[s*3+2],v=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-f),new Se(d,1-x),new Se(v,1-u)]:[new Se(a,1-l),new Se(h,1-f),new Se(p,1-x),new Se(m,1-u)]}};function Nv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Tr=class i extends mc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Et=class i extends et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new O,d=new O,p=[],x=[],v=[],m=[];for(let u=0;u<=n;u++){let b=[],g=u/n,_=0;u===0&&o===0?_=.5/t:u===n&&l===Math.PI&&(_=-.5/t);for(let D=0;D<=t;D++){let C=D/t;f.x=-e*Math.cos(s+C*r)*Math.sin(o+g*a),f.y=e*Math.cos(o+g*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+g*a),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(C+_,1-g),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){let g=h[u][b+1],_=h[u][b],D=h[u+1][b],C=h[u+1][b+1];(u!==0||o>0)&&p.push(g,_,C),(u!==n-1||l<Math.PI)&&p.push(_,D,C)}this.setIndex(p),this.setAttribute("position",new Ke(x,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ns=class i extends et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new O,f=new O,d=new O;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let v=x/s*r,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let v=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,u=(s+1)*(p-1)+x,b=(s+1)*p+x;o.push(v,m,b),o.push(m,u,b)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Yo=class extends ht{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Kt=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zo=class extends Sn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},$e=class extends Sn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function So(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends Us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-n;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,l=2*n-t;break;case Ah:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),v=x*x,m=v*x,u=-d*m+2*d*v-d*x,b=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*x+1,g=(-1-p)*m+(1.5+p)*v+.5*x,_=p*m-p*v;for(let D=0;D!==a;++D)r[D]=u*o[h+D]+b*o[c+D]+g*o[l+D]+_*o[f+D];return r}},yc=class extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Mc=class extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Vl:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Uv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,d=f-n,p=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[d+x]||v!==t[p+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Vl;var Gi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ro;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Nn{};_c.prototype.ValueTypeName="color";var Sc=class extends Nn{};Sc.prototype.ValueTypeName="number";var bc=class extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ft.slerpFlat(r,0,o,c-a,o,c,l);return r}},jo=class extends Nn{InterpolantFactoryMethodLinear(e){return new bc(this.times,this.values,this.getValueSize(),e)}};jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ro;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends Nn{};Ec.prototype.ValueTypeName="vector";var wc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},zv=new wc,Tc=class{constructor(e){this.manager=e!==void 0?e:zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ko=class extends zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nl=new We,Uu=new O,zu=new O,Ar=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ac=class extends Ar{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Jo=class extends zs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ou=new We,or=new O,il=new O,Rc=class extends Ar{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),n.position.copy(or),il.copy(n.position),il.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(il),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},Xi=class extends zs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Cc=class extends Ar{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Fu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Fu(){return performance.now()}var Jc="\\[\\]\\.:\\/",Ov=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",Fv="[^"+Jc.replace("\\.","")+"]",Bv=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Hv=/(WCOD+)?/.source.replace("WCOD",Fv),kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Gv=new RegExp("^"+Bv+Hv+kv+Vv+"$"),Wv=["material","materials","bones","map"],Pc=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ov,"")}static parseTrackName(e){let t=Gv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Pc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zy=new Float32Array(1);var Bu=new We,$o=class{constructor(e,t,n=0,s=1/0){this.ray=new Ts(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(Hu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ic(e[s],this,n,t);return n.sort(Hu),n}};function Hu(i,e){return i.distance-e.distance}function Ic(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ic(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);var Xv={W:17.885,E:17.922,S:49.703,N:49.722};function ff(i=Xv){let e=(i.S+i.N)/2,t=(i.W+i.E)/2,n=6378137,s=.00669437999014,r=e*Math.PI/180,o=1-s*Math.sin(r)**2,a=n/Math.sqrt(o)*Math.cos(r)*Math.PI/180,l=n*(1-s)/o**1.5*(Math.PI/180),c=f=>(f-t)*a,h=f=>-(f-e)*l;return{lat0:e,lon0:t,mx:a,mz:l,x:c,z:h,W:c(i.W),E:c(i.E),N:h(i.N),S:h(i.S)}}function df(i,e,t){let n=(e-i.x0)/i.dx,s=(t-i.z0)/i.dz;n=Math.min(Math.max(n,0),i.w-1.0001),s=Math.min(Math.max(s,0),i.h-1.0001);let r=n|0,o=s|0,a=n-r,l=s-o,c=o*i.w+r,h=i.data,f=h[c],d=h[c+1],p=h[c+i.w],x=h[c+i.w+1];return a+l<=1?f+(d-f)*a+(p-f)*l:x+(p-x)*(1-a)+(d-x)*(1-l)}var pf={trunk:{w:8,r:6,d:1,m:2},primary:{w:8,r:6,d:1,m:2},primary_link:{w:6,r:5,d:1},secondary:{w:7,r:5,d:1,m:2},secondary_link:{w:6,r:5,d:1},tertiary:{w:6.5,r:4,d:1,m:1},tertiary_link:{w:5.5,r:4,d:1},residential:{w:5.5,r:3,d:1,p:1},unclassified:{w:5,r:3,d:1,p:1},living_street:{w:5,r:3,d:.5,p:1},service:{w:3.6,r:2,d:.2},pedestrian:{w:5,r:2,s:"sett"},footway:{w:1.8,r:1,s:"pavers"},cycleway:{w:2,r:1},path:{w:1.4,r:1,s:"gravel"},steps:{w:1.8,r:1,s:"pavers"},bridleway:{w:1.4,r:1,s:"gravel"},track:{w:3,r:1,s:"gravel"},stream:{w:2.4,r:0,s:"water"},rail:{w:3.4,r:2,s:"rail"}};function Vn(i,e){let t=atob(i),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return new e(n.buffer)}var kt=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function gf(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function si(i,e,t,n,s){let r=i.getImageData(0,0,e,t);for(let o=0;o<r.data.length;o+=4){let a=(s()-.5)*n;r.data[o]+=a,r.data[o+1]+=a,r.data[o+2]+=a}i.putImageData(r,0,0)}function Un(i,e,t=!0){let n=new It(i);return n.wrapS=n.wrapT=_n,n.colorSpace=t?_t:vn,n.anisotropy=e.capabilities.getMaxAnisotropy(),n}var En=(i,e,t)=>{let n=gf(i,e),s=n.getContext("2d");return t(s,i,e),n},$c=(i,e,t,n,s,r)=>{i.fillStyle="#cfc8bb",i.fillRect(e-5,s,n-e+10,5),i.fillStyle="#f7f4ee",i.fillRect(e-3,t-3,n-e+6,s-t+6);let o=i.createLinearGradient(0,t,0,s);o.addColorStop(0,"#6f8293"),o.addColorStop(.45,"#36434f"),o.addColorStop(1,"#262f37"),i.fillStyle=o,i.fillRect(e,t,n-e,s-t),i.fillStyle="#f7f4ee",r&&(i.fillRect((e+n)/2-2,t,4,s-t),i.fillRect(e,t+(s-t)*.34,n-e,3))},qv={classic:(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,e),si(i,e,e,14,t),$c(i,e*.32,e*.22,e*.68,e*.74,!0)},panel:(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,e),si(i,e,e,10,t),i.fillStyle="rgba(0,0,0,0.13)",i.fillRect(0,e-3,e,3),i.fillRect(e-2,0,2,e),$c(i,e*.14,e*.3,e*.86,e*.72,!1),i.fillStyle="#f7f4ee",i.fillRect(e*.5-2,e*.3,4,e*.42)},baroque:(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,e),si(i,e,e,14,t),i.fillStyle="rgba(0,0,0,0.10)",i.fillRect(0,6,e,3),i.fillStyle="rgba(255,255,255,0.9)",i.fillRect(e*.3,e*.12,e*.4,e*.72),i.fillStyle="rgba(0,0,0,0.08)",i.fillRect(e*.28,e*.1,e*.44,4),$c(i,e*.36,e*.17,e*.64,e*.8,!0)}};function xf(i){let e={};for(let[t,n]of Object.entries(qv))e[t]=Un(En(128,128,(s,r)=>n(s,r,kt(t.length*97))),i);return e.shop=Un(En(128,128,(t,n)=>{t.fillStyle="#fff",t.fillRect(0,0,n,n),si(t,n,n,12,kt(9));let s=n*.07,r=n*.93,o=n*.14,a=n*.8;t.fillStyle="#2b2f2c",t.fillRect(s-4,o-4,r-s+8,a-o+8);let l=t.createLinearGradient(s,o,r,a);l.addColorStop(0,"#7f93a3"),l.addColorStop(.35,"#3c4a56"),l.addColorStop(.55,"#56697a"),l.addColorStop(1,"#27313a"),t.fillStyle=l,t.fillRect(s,o,r-s,a-o),t.fillStyle="#2b2f2c",t.fillRect(n/2-2,o,4,a-o),t.fillRect(s,a-10,r-s,3)}),i),e.plaster=Un(En(64,64,(t,n)=>{t.fillStyle="#fff",t.fillRect(0,0,n,n),si(t,n,n,16,kt(3))}),i),e.tiles=Un(En(128,128,(t,n)=>{let s=kt(5);t.fillStyle="#fff",t.fillRect(0,0,n,n),si(t,n,n,22,s);let r=4,o=8,a=n/r,l=n/o;for(let c=0;c<r;c++){let h=t.createLinearGradient(0,c*a,0,(c+1)*a);h.addColorStop(0,"rgba(255,255,255,0.15)"),h.addColorStop(.85,"rgba(0,0,0,0.08)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),t.fillStyle=h,t.fillRect(0,c*a,n,a),t.fillStyle="rgba(0,0,0,0.22)";for(let f=0;f<o;f++)t.fillRect(f*l+c%2*l*.5,c*a,1.5,a)}}),i),e}var mf=(i,e,t,n)=>{i.fillStyle="#4b4e51",i.fillRect(0,0,e,t);for(let s=0;s<e*t/6;s++){let r=60+n()*70;i.fillStyle=`rgb(${r},${r},${r+2})`,i.fillRect(n()*e,n()*t,1+n(),1+n())}for(let s=0;s<6;s++)i.fillStyle=`rgba(0,0,0,${.04+n()*.06})`,i.beginPath(),i.ellipse(n()*e,n()*t,20+n()*60,10+n()*40,n()*3,0,7),i.fill()};function vf(i){let e={};e.asphalt=Un(En(256,256,(t,n,s)=>mf(t,n,s,kt(11))),i);for(let t of[1,2])e["asphalt"+t]=Un(En(256,512,(n,s,r)=>{mf(n,s,r,kt(12+t)),n.fillStyle="rgba(236,236,228,0.92)",n.fillRect(s/2-2.5,0,5,r/3),t===2&&(n.fillRect(s*.035,0,4,r),n.fillRect(s*.965-4,0,4,r))}),i);return e.sett=Un(En(256,256,(t,n,s)=>{let r=kt(21),o=16,a=n/o;t.fillStyle="#3f3c38",t.fillRect(0,0,n,s);for(let l=0;l<o;l++)for(let c=-1;c<o;c++){let h=95+r()*55,f=l%2*a*.5+(r()-.5)*2,d=c*a+f,p=l*a+(r()-.5)*2;t.fillStyle=`rgb(${h+6},${h},${h-8})`,t.beginPath(),t.roundRect(d+1.5,p+1.5,a-3,a-3,3),t.fill(),t.fillStyle="rgba(255,255,255,0.10)",t.fillRect(d+2.5,p+2.5,a-7,2)}si(t,n,s,18,r)}),i),e.pavers=Un(En(256,256,(t,n,s)=>{let r=kt(31),o=32,a=16;t.fillStyle="#7d7b76",t.fillRect(0,0,n,s);for(let l=0;l<s/a;l++)for(let c=-1;c<n/o+1;c++){let h=150+r()*30,f=c*o+l%2*o*.5;t.fillStyle=`rgb(${h},${h-3},${h-9})`,t.fillRect(f+1,l*a+1,o-2,a-2)}si(t,n,s,16,r)}),i),e.gravel=Un(En(256,256,(t,n,s)=>{let r=kt(41);t.fillStyle="#8a8172",t.fillRect(0,0,n,s);for(let o=0;o<2600;o++){let a=90+r()*100;t.fillStyle=`rgb(${a+8},${a},${a-12})`,t.beginPath(),t.arc(r()*n,r()*s,.8+r()*2.2,0,7),t.fill()}}),i),e.rail=Un(En(256,128,(t,n,s)=>{let r=kt(51);t.fillStyle="#6f6a62",t.fillRect(0,0,n,s);for(let o=0;o<1800;o++){let a=70+r()*90;t.fillStyle=`rgb(${a},${a-4},${a-10})`,t.fillRect(r()*n,r()*s,2,2)}t.fillStyle="#8d8a84";for(let o of[s*.25,s*.75])t.fillRect(n*.16,o-9,n*.68,18);t.fillStyle="#5b544c";for(let o of[.5-.211,.5+.211])t.fillRect(n*o-3,0,6,s),t.fillStyle="#b8b4ac",t.fillRect(n*o-1,0,2,s),t.fillStyle="#5b544c"}),i),e}function yf(){let e=[(s,r)=>{s.fillStyle="#808080",s.fillRect(0,0,256,256),s.lineCap="round";for(let o=0;o<5200;o++){let a=50+r()*160,l=r()*256,c=r()*256,h=-Math.PI/2+(r()-.5)*1.2,f=3+r()*8;s.strokeStyle=`rgb(${a},${a},${a})`,s.lineWidth=.8+r()*.8,s.beginPath(),s.moveTo(l,c),s.lineTo(l+Math.cos(h)*f,c+Math.sin(h)*f),s.stroke()}},(s,r)=>{s.fillStyle="#7a7a7a",s.fillRect(0,0,256,256);for(let o=0;o<260;o++){let a=70+r()*110;s.fillStyle=`rgba(${a},${a},${a},0.5)`,s.beginPath(),s.arc(r()*256,r()*256,3+r()*12,0,7),s.fill()}for(let o=0;o<1500;o++){let a=60+r()*170;s.fillStyle=`rgb(${a},${a},${a})`,s.beginPath(),s.arc(r()*256,r()*256,.6+r()*1.8,0,7),s.fill()}},(s,r)=>{s.fillStyle="#505050",s.fillRect(0,0,256,256);for(let o=0;o<16;o++)for(let a=-1;a<9;a++){let l=115+r()*50;s.fillStyle=`rgb(${l},${l},${l})`,s.fillRect(a*32+o%2*16+1,o*16+1,30,14)}},(s,r)=>{s.fillStyle="#808080",s.fillRect(0,0,256,256);for(let o=0;o<9e3;o++){let a=70+r()*120;s.fillStyle=`rgb(${a},${a},${a})`,s.fillRect(r()*256,r()*256,1,1)}}],t=new Uint8Array(262144);e.forEach((s,r)=>{let o=gf(256),a=o.getContext("2d"),l=kt(101+r);s(a,l),si(a,256,256,20,l);let c=a.getImageData(0,0,256,256).data;for(let h=0;h<256*256;h++)t[h*4+r]=c[h*4]});let n=new ni(t,256,256,en);return n.wrapS=n.wrapT=_n,n.magFilter=nn,n.minFilter=Qn,n.generateMipmaps=!0,n.anisotropy=8,n.needsUpdate=!0,n}function eh(i,e=!1){let t=e==="bare"?En(256,256,(s,r)=>{let o=kt(79),a=(l,c,h,f,d,p)=>{let x=l+Math.cos(h)*f,v=c+Math.sin(h)*f;if(s.strokeStyle=`rgb(${70+o()*25},${60+o()*20},${52+o()*18})`,s.lineWidth=d,s.beginPath(),s.moveTo(l,c),s.lineTo(x,v),s.stroke(),p>0)for(let m=0;m<2+(o()<.4);m++)a(x,v,h+(o()-.5)*1.6,f*(.6+o()*.2),d*.7,p-1)};s.lineCap="round";for(let l=0;l<7;l++)a(r/2+(o()-.5)*30,r/2+(o()-.5)*30,o()*Math.PI*2,34+o()*18,3.2,4)}):En(256,256,(s,r)=>{let o=kt(e?78:77);for(let a=0;a<420;a++){let l=o()*Math.PI*2,c=Math.sqrt(o())*r*.46,h=r/2+Math.cos(l)*c,f=r/2+Math.sin(l)*c,d=e?[18,30,38,44,52,70][Math.floor(o()*6)]+o()*8:88+o()*26;s.fillStyle=`hsl(${d},${e?62+o()*22:38+o()*20}%,${e?34+o()*22:24+o()*26}%)`,s.beginPath(),s.ellipse(h,f,5+o()*5,2.5+o()*2.5,o()*Math.PI,0,7),s.fill()}}),n=Un(t,i);return n.wrapS=n.wrapT=Jn,n}var ot={uTime:{value:0},uWind:{value:.3},uNight:{value:0},uWet:{value:0},uSnow:{value:0},uLit:{value:.3},uSky:{value:new ze(14017002)}};function qi(i,e=1){let t=i.onBeforeCompile;return i.onBeforeCompile=(n,s)=>{t&&t(n,s),n.uniforms.uSnow=ot.uSnow,n.uniforms.uSnowK={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUp = normalize(mat3(modelMatrix) * objectNormal).y;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow; uniform float uSnowK; varying float vUp;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.95), uSnow * uSnowK * smoothstep(0.35, 0.75, vUp));`)},i}function rn(i){let e=i.onBeforeCompile,t=i.customProgramCacheKey();return i.onBeforeCompile=(n,s)=>{e.call(i,n,s),n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
iblIrradiance = vec3(0.0);`)},i.customProgramCacheKey=()=>t+"|glossy",i}function ks(i,e,t){let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n&&n(s,r),s.uniforms.uTime=ot.uTime,s.uniforms.uWind=ot.uWind,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      float wph = uTime * 1.1 + instanceMatrix[3].x * 0.043 + instanceMatrix[3].z * 0.061;
      float wa = uWind * (sin(wph) * 0.6 + sin(wph * 2.3 + 1.7) * 0.25) * ${e.toFixed(3)} * max(position.y + ${t.toFixed(2)}, 0.0);
      transformed.x += wa; transformed.z += wa * 0.6;
      #endif`)},i}function Mf(i){return i.onBeforeCompile=e=>{Object.assign(e.uniforms,{uNight:ot.uNight,uLit:ot.uLit,uSky:ot.uSky}),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; uniform float uLit; uniform vec3 uSky; varying vec3 vWp;`).replace("#include <map_fragment>",`#include <map_fragment>
        float glassMask = clamp((sampledDiffuseColor.b - sampledDiffuseColor.r) * 20.0, 0.0, 1.0) * (1.0 - smoothstep(0.25, 0.45, dot(sampledDiffuseColor.rgb, vec3(0.333))));
        float litMask = step(fract(sin(dot(floor(vMapUv) + floor(vWp.xz * 0.37), vec2(12.9898, 78.233))) * 43758.5453), uLit);
        diffuseColor.rgb = mix(diffuseColor.rgb, uSky * 0.55, glassMask * 0.3 * (1.0 - uNight));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(1.0, 0.74, 0.4) * glassMask * litMask * uNight * 1.3;`)},i}var wn=i=>new ze(i),wi={day:[wn(4159669),wn(14017002)],overcast:[wn(8226964),wn(12371404)],dusk:[wn(4875667),wn(15774595)],night:[wn(462109),wn(1779259)]},Cr=[{name:"clear",cloud:.2,rain:0},{name:"cloudy",cloud:.65,rain:0},{name:"overcast",cloud:.9,rain:0},{name:"rain",cloud:1,rain:1},{name:"storm",cloud:1,rain:1.5,storm:1},{name:"fog",cloud:.7,rain:0,fog:1},{name:"snow",cloud:.95,rain:0,snow:1,fog:.25}],th=Cr.map(i=>i.name),Yv={clear:["cloudy","cloudy","fog"],cloudy:["clear","overcast","overcast"],overcast:["cloudy","rain","rain","fog","snow"],rain:["overcast","overcast","storm"],storm:["rain"],fog:["clear","cloudy"],snow:["overcast","snow"]};function Zv(){let i=new ht({side:jt,depthWrite:!1,fog:!1,uniforms:{top:{value:new ze},horizon:{value:new ze},sun:{value:new O(0,1,0)},moon:{value:new O(0,-1,0)},uTime:ot.uTime,uCloud:{value:.3},uDay:{value:1},uNight:ot.uNight},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sun; uniform vec3 moon; uniform float uTime; uniform float uCloud; uniform float uDay; uniform float uNight; varying vec3 vDir;
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
      }`}),e=new qe(new Et(5e3,32,16),i);return e.renderOrder=-1,e.frustumCulled=!1,e}function jv(){let e=new Float32Array(21e3),t=new et;for(let s=0;s<7e3;s++)e.set([(Math.random()-.5)*60,Math.random()*30,(Math.random()-.5)*60],s*3);t.setAttribute("position",new lt(e,3).setUsage(tn));let n=new bi(t,new ki({color:16054010,size:.09,transparent:!0,opacity:0,depthWrite:!1}));return n.frustumCulled=!1,n}function Kv(){let e=new Float32Array(54e3),t=new et;for(let s=0;s<9e3;s++){let r=(Math.random()-.5)*50,o=Math.random()*25,a=(Math.random()-.5)*50;e.set([r,o,a,r,o+1.1,a],s*6)}t.setAttribute("position",new lt(e,3).setUsage(tn));let n=new Vo(t,new Hi({color:9279910,transparent:!0,opacity:0,depthWrite:!1}));return n.frustumCulled=!1,n}function _f(i){let e=Zv(),t=Kv(),n=jv(),s=new Ko(15134714,6972748,2.1),r=new Os(16773334,2.5);Object.assign(r.shadow.camera,{left:-140,right:140,top:140,bottom:-140,near:1,far:900}),r.shadow.bias=-4e-4,r.shadow.normalBias=.6,i.fog=new Fo(14017002,6e-4),i.add(e,t,n,s,r,r.target);let o=new Date,a=o.getMonth(),l=[11,0,1].includes(a)?1:[10,2].includes(a)?.5:0,c={hour:o.getHours()+o.getMinutes()/60,day:Math.floor((o-o.getTimezoneOffset()*6e4)/864e5),speed:1/60,w:0,cloud:.2,rain:0,snow:0,fog:0,storm:0,cover:0,flash:0,wet:0,timer:150,queue:[],sunDir:new O,lightDir:new O,month:a,winter:l},h=(T,A)=>{let G=Yv[th[T]].filter(N=>N==="snow"?Math.random()<l:N==="storm"?l<1:!0);(A%24+24)%24>3.5&&(A%24+24)%24<9.5||(G=G.filter(N=>N!=="fog"||Math.random()<.15)),G.length||(G=["cloudy"]);let L=G[Math.floor(Math.random()*G.length)];return L==="rain"&&Math.random()<l*.8&&(L="snow"),{w:th.indexOf(L),dur:120+Math.random()*240}},f=()=>{for(;c.queue.length<4;){let T=c.queue.length?c.queue[c.queue.length-1]:{w:c.w},A=c.hour+(c.timer+c.queue.reduce((G,H)=>G+H.dur,0))/60;c.queue.push(h(T.w,A))}},d=new ze,p=new ze,x=new ze,v=new ze,m=new ze,u=wn(15134714),b=wn(2240586),g=T=>{c.w=(T+Cr.length)%Cr.length,c.timer=120+Math.random()*240,c.queue=[],f()},_=()=>{let T=c.queue.shift();c.w=T.w,c.timer=T.dur,f()};f();let D=6,C=[],w=0,M=(T,A,G)=>{ot.uTime.value=G,c.hour+=T*c.speed,c.hour>=24&&(c.hour-=24,c.day++),(c.timer-=T)<0&&_();let H=Cr[c.w],L=Math.min(1,T*.04);if(c.cloud+=(H.cloud-c.cloud)*L,c.rain+=(H.rain*(c.cloud>.85?1:0)-c.rain)*L*1.5,c.snow+=((H.snow||0)*(c.cloud>.8?1:0)-c.snow)*L*1.5,c.fog+=((H.fog||0)-c.fog)*L,c.storm+=((H.storm||0)-c.storm)*L*2,c.wet+=(Math.min(1,c.rain)-c.wet)*Math.min(1,T*(c.rain>c.wet?.05:.008)),c.cover=Math.min(1,Math.max(0,c.cover+(c.snow>.3?T*.006*c.snow:-T*(l?.0015:.006)))),c.flash=Math.max(0,c.flash-T*6),c.storm>.5&&(D-=T)<0){D=4+Math.random()*12,c.flash=1;let z=.4+Math.random()*3.5;C.push({t:z/.343,p:Math.max(.25,1-z/4.5)}),setTimeout(()=>c.flash=Math.max(c.flash,.8),90)}C=C.filter(z=>(z.t-=T)>0?!0:(P.onThunder?.(z.p),!1));let N=ii.degToRad(52)*Math.sin(Math.PI*(c.hour-6)/12),k=Math.PI/2*((12-c.hour)/6);c.sunDir.set(Math.cos(N)*Math.sin(k),Math.sin(N),Math.cos(N)*Math.cos(k));let V=c.sunDir.y,Y=ii.smoothstep(V,-.12,.2),j=1-Y,K=Math.max(0,1-Math.abs(V-.02)/.22),W=V>-.02;c.lightDir.copy(c.sunDir).multiplyScalar(W?1:-1),c.lightDir.y<.15&&(c.lightDir.y=.15),c.lightDir.normalize(),d.copy(wi.night[0]).lerp(wi.day[0],Y),p.copy(wi.night[1]).lerp(wi.day[1],Y),d.lerp(wi.dusk[0],K*.6),p.lerp(wi.dusk[1],K*.75),x.copy(wi.overcast[0]).multiplyScalar(.15+.85*Y),v.copy(wi.overcast[1]).multiplyScalar(.12+.88*Y),d.lerp(x,c.cloud*.85),p.lerp(v,c.cloud*.7),x.setRGB(.72,.74,.76).multiplyScalar(.12+.88*Y),p.lerp(x,c.fog*.9),d.lerp(x,c.fog*.6),c.storm>.1&&(d.multiplyScalar(1-.35*c.storm),p.multiplyScalar(1-.3*c.storm)),c.flash>0&&(x.setRGB(.85,.88,1),d.lerp(x,c.flash*.7),p.lerp(x,c.flash*.6));let q=e.material.uniforms;q.top.value.copy(d),q.horizon.value.copy(p),q.sun.value.copy(c.sunDir),q.moon.value.copy(c.sunDir).negate(),q.uCloud.value=c.cloud,q.uDay.value=Y,i.fog.color.copy(p),ot.uSky.value.copy(p),i.fog.density=55e-5+c.cloud*5e-4+c.rain*.0016+c.snow*.0022+c.fog*.011,m.setHex(16757626).lerp(wn(16773334),ii.smoothstep(V,0,.35)),r.color.copy(W?m:wn(10466528)),r.intensity=W?3.6*ii.smoothstep(V,-.02,.12)*(1-.72*c.cloud):.55*ii.smoothstep(-V,.02,.15)*(1-.8*c.cloud),r.intensity*=1-.65*c.fog-.3*c.storm,s.intensity=(.5+.9*Y)*(1-.25*c.cloud)*(1-.2*c.storm)+c.flash*3.5,s.color.copy(b).lerp(u,Y),e.position.copy(A),ot.uNight.value=ii.smoothstep(-V,-.06,.1);let ce=c.hour;if(ot.uLit.value=ce>17||ce<6?ce>17&&ce<23?.45:.12:.2,ot.uWet.value=c.wet,ot.uSnow.value=c.cover,ot.uWind.value=.25+.5*c.cloud+.4*Math.min(1,c.rain)+.6*c.storm-.4*c.fog+Math.sin(G*.7)*Math.sin(G*.23+1)*.25,t.material.opacity=.6*c.rain,t.visible=c.rain>.02,t.visible){let z=t.geometry.attributes.position.array,se=11*T,Me=ot.uWind.value*.5;w=Math.round(9e3*Math.min(1,c.rain*1.2)),t.material.opacity=Math.min(.75,.6*c.rain);for(let me=0;me<9e3;me++){let le=me*6,ne=z[le+1]-se,de=ne>A.y+40||ne<A.y-40||Math.abs(z[le]-A.x)>40||Math.abs(z[le+2]-A.z)>40;(ne<A.y-4||de||me>=w)&&(z[le]=A.x+(Math.random()-.5)*50,z[le+2]=A.z+(Math.random()-.5)*50,ne=me>=w?-1e4:de?A.y-4+Math.random()*28:A.y+18+Math.random()*6),z[le+1]=ne,z[le+3]=z[le]+Me*.3,z[le+4]=ne+1.1,z[le+5]=z[le+2]}t.geometry.attributes.position.needsUpdate=!0}if(n.material.opacity=Math.min(.9,c.snow*1.1),n.visible=c.snow>.02,n.visible){let z=n.geometry.attributes.position.array,se=Math.round(7e3*Math.min(1,c.snow*1.2)),Me=ot.uWind.value;for(let me=0;me<7e3;me++){let le=me*3;if(me>=se){z[le+1]=-1e4;continue}z[le]+=(Math.sin(G*.8+me)*.4+Me*.6)*T,z[le+1]-=(.9+me%7*.08)*T,z[le+2]+=Math.cos(G*.6+me*1.3)*.3*T,(z[le+1]<A.y-6||Math.abs(z[le]-A.x)>30||Math.abs(z[le+2]-A.z)>30||z[le+1]>A.y+30)&&(z[le]=A.x+(Math.random()-.5)*60,z[le+2]=A.z+(Math.random()-.5)*60,z[le+1]=z[le+1]<-1e3||z[le+1]>A.y+30?A.y-6+Math.random()*30:A.y+18+Math.random()*8)}n.geometry.attributes.position.needsUpdate=!0}},y=()=>`${String(Math.floor(c.hour)).padStart(2,"0")}:${String(Math.floor(c.hour%1*60)).padStart(2,"0")}`,S=T=>`${String(Math.floor((T%24+24)%24)).padStart(2,"0")}:00`,P={sun:r,hemi:s,sky:e,update:M,st:c,clock:y,forecast:()=>{let T=c.hour+c.timer/60;return c.queue.slice(0,3).map(A=>{let G={at:S(Math.round(T)),name:th[A.w]};return T+=A.dur/60,G})},onThunder:null,weather:()=>Cr[c.w].name,nextWeather:()=>g(c.w+1),skipHour:()=>{c.hour+=1,c.hour>=24&&(c.hour-=24,c.day++)}};return P}function on(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new et,c=0;for(let h=0;h<i.length;++h){let f=i[h],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let x=0;x<p.count;++x)f.push(p.getX(x)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Sf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][d]);let x=Sf(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Sf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new lt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<t;x++){let v=h.getComponent(d,x);a.setComponent(d+f,x,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var bf={asphalt:4,sett:1.6,pavers:1.2,gravel:2,water:5},nh={footway:3,pedestrian:3,steps:1,path:1.5,cycleway:1,living_street:2,residential:1.2,unclassified:1,service:.6,tertiary:.8,secondary:.5,track:.4},Jv={primary:13.9,trunk:13.9,secondary:13.9,tertiary:12.5,residential:8.3,unclassified:8.3,living_street:5.5,service:5.5};function ih(){return rn(new Kt({color:2836036,roughness:.05,metalness:.1,transparent:!0,opacity:.92,side:pt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}))}function Ef(i,e,t){let n=new Map,s=x=>n.get(x)||n.set(x,{pos:[],uv:[],idx:[]}).get(x),r=()=>{let x=[],v=new Map;return{list:x,node:(m,u,b)=>{let g=m.toFixed(1)+","+u.toFixed(1),_=v.get(g);return _==null&&(_=x.length,v.set(g,_),x.push({x:m,y:b,z:u,out:[]})),_}}},o=r(),a=r(),l=o.list,c=o.node;i.roads.forEach((x,v)=>{let m=pf[x.k],u=x.p.filter((H,L)=>!L||Math.hypot(H[0]-x.p[L-1][0],H[1]-x.p[L-1][1])>.05);if(u.length<2)return;let b=[0];for(let H=1;H<u.length;H++)b.push(b[H-1]+Math.hypot(u[H][0]-u[H-1][0],u[H][1]-u[H-1][1]));let g=b[b.length-1],_=x.k==="stream"?.12:.04+m.r*.012+v%4*.004,D=e(...u[0])+_,C=e(...u[u.length-1])+_,w=(H,L,N)=>x.br?D+(C-D)*N/g:e(H,L)+_,M=[];for(let H=0;H+1<u.length;H++){let L=Math.max(1,Math.ceil((b[H+1]-b[H])/3));for(let N=0;N<L;N++){let k=N/L;M.push([u[H][0]+(u[H+1][0]-u[H][0])*k,u[H][1]+(u[H+1][1]-u[H][1])*k,b[H]+(b[H+1]-b[H])*k])}}M.push([...u[u.length-1],g]);let y=x.s==="asphalt"&&m.m,S=y?"asphalt"+m.m:x.s,E=s(S),P=x.s==="water"?null:s("kerb"),T=x.w/2,A=E.pos.length/3,G=P?P.pos.length/3:0;if(M.forEach(([H,L,N],k)=>{let V=M[Math.max(0,k-1)],Y=M[Math.min(M.length-1,k+1)],j=Y[0]-V[0],K=Y[1]-V[1],W=Math.hypot(j,K)||1;j/=W,K/=W;let q=-K,ce=j,z=w(H,L,N);for(let se of[-1,1]){let Me=H+q*T*se,me=L+ce*T*se,le=x.br?z:Math.max(z,e(Me,me)+_*.6);E.pos.push(Me,le,me),E.uv.push(y||x.s==="rail"?(se+1)/2:(se+1)/2*(x.w/(bf[x.s]||4)),N/(y?9:x.s==="rail"?1.2:bf[x.s]||4)),P&&P.pos.push(Me,le,me,Me,x.br?le-.9:e(Me,me)-.15,me)}if(k){let se=A+(k-1)*2;if(E.idx.push(se,se+1,se+2,se+1,se+3,se+2),P)for(let Me of[0,2]){let me=G+(k-1)*4+Me;P.idx.push(me,me+4,me+1,me+1,me+4,me+5)}}}),m.d&&x.k!=="stream"&&x.k!=="rail"){let H=u.map((k,V)=>c(k[0],k[1],w(k[0],k[1],b[V]))),L=Jv[x.k.replace("_link","")]||8.3,N=x.ow?0:Math.min(T*.5,1.8);for(let k=0;k+1<H.length;k++)l[H[k]].out.push({to:H[k+1],d:m.d,v:L,off:N}),x.ow||l[H[k+1]].out.push({to:H[k],d:m.d,v:L,off:N})}if(nh[x.k]){let H=u.map((N,k)=>a.node(N[0],N[1],w(N[0],N[1],b[k]))),L=x.w<=2.6?0:T-.55;for(let N=0;N+1<H.length;N++)a.list[H[N]].out.push({to:H[N+1],d:nh[x.k],off:L}),a.list[H[N+1]].out.push({to:H[N],d:nh[x.k],off:L})}});let h=ih(),f=[],d=[],p=new $e({color:9341828,side:pt});for(let[x,v]of n){if(!v.idx.length)continue;let m=new et;m.setAttribute("position",new Ke(v.pos,3)),v.uv.length&&m.setAttribute("uv",new Ke(v.uv,2)),m.setIndex(v.idx),m.computeVertexNormals();let u=x==="water"?h:x==="kerb"?p:rn(qi(new Kt({map:t[x],roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),.6));u!==h&&u!==p&&d.push(u);let b=new qe(m,u);b.receiveShadow=!0,f.push(b)}for(let x of i.areas){if(x.s!=="water")continue;let v=Math.min(...x.r.map(([b,g])=>e(b,g)))+.1,m=yn.triangulateShape(x.r.map(([b,g])=>new Se(b,g)),[]),u=new et;u.setAttribute("position",new Ke(x.r.flatMap(([b,g])=>[b,v,g]),3)),u.setIndex(m.flat()),u.computeVertexNormals(),f.push(new qe(u,h))}return{meshes:f,graph:l,walk:a.list,wetMaterials:d}}function wf(i,e){let t=Vn(i.lamps,Int16Array),n=t.length/3,s=new vt(.06,.09,6.6,6).translate(0,3.3,0),r=new je(1.3,.08,.08).translate(.62,6.45,0),o=new St(on([s,r]),new $e({color:3751997}),n),a=new xt({color:5592911}),l=new St(new je(.55,.14,.26).translate(1.25,6.38,0),a,n),c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d"),f=h.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.5,"rgba(255,255,255,0.35)"),f.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=f,h.fillRect(0,0,64,64);let d=new xt({map:new It(c),color:16762746,transparent:!0,opacity:0,blending:Mn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),p=new St(new sn(13,13).rotateX(-Math.PI/2),d,n),x=new We,v=new ft,m=new O(0,1,0),u=new O(1,1,1),b=new O;for(let C=0;C<n;C++){let w=t[C*3]/10,M=t[C*3+1]/10,y=t[C*3+2]/1e3;x.compose(b.set(w,e(w,M)-.1,M),v.setFromAxisAngle(m,y),u),o.setMatrixAt(C,x),l.setMatrixAt(C,x);let S=w+Math.cos(y)*1.25,E=M-Math.sin(y)*1.25;p.setMatrixAt(C,x.compose(b.set(S,e(S,E)+.2,E),v.identity(),u))}o.castShadow=o.receiveShadow=!0;for(let C of[o,l,p])C.computeBoundingSphere();p.renderOrder=2;let g=new ze(5592911),_=new ze(16773576).multiplyScalar(2.5);return{meshes:[o,l,p],update:C=>{a.color.copy(g).lerp(_,C),d.opacity=C*.85,p.visible=C>.02}}}function Tf(i,e){let t=kt(e),n=[],s=[],r=[],o=[],a=new O,l=new ft,c=new cn;for(let f=0;f<i;f++){let d,p,x;do d=t()*2-1,p=t()*2-1,x=t()*2-1;while(d*d+p*p+x*x>1);let v=new O(d,p,x).multiplyScalar(.45),m=.55+t()*.25;l.setFromEuler(c.set(t()*6.3,t()*6.3,t()*6.3));let u=n.length/3;for(let[b,g,_,D]of[[-1,-1,0,0],[1,-1,1,0],[1,1,1,1],[-1,1,0,1]])a.set(b*m,g*m,0).applyQuaternion(l).add(v),n.push(a.x,a.y,a.z),a.normalize(),s.push(a.x,a.y,a.z),r.push(_,D);o.push(u,u+1,u+2,u,u+2,u+3)}let h=new et;return h.setAttribute("position",new Ke(n,3)),h.setAttribute("normal",new Ke(s,3)),h.setAttribute("uv",new Ke(r,2)),h.setIndex(o),h}function Qv(){let i=[[1,.5,.25],[.74,.45,.52],[.46,.42,.78]].map(([e,t,n])=>new hn(e,t,8).translate(0,n,0));return on(i).toNonIndexed()}function aa(i){let e=i.onBeforeCompile;return i.onBeforeCompile=(t,n)=>{e&&e(t,n),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
normal = normalize(vNormal);`)},i}function Af(i,e,t=200){let n=new Map;for(let s=0;s<i;s++){let[r,o]=e(s),a=Math.floor(r/t)+","+Math.floor(o/t);(n.get(a)||n.set(a,[]).get(a)).push(s)}return[...n.values()]}function Rf(i,e,t){let n=Vn(i.trees,Int16Array),s=n.length/6,r=i.hmin,o=P=>({x:n[P*6]/10,z:n[P*6+1]/10,g:r+n[P*6+2]/10,h:n[P*6+3]/10,r:n[P*6+4]/10,con:n[P*6+5]}),a=Tf(16,7),l=new Tr(1,0),c=Qv(),h=new vt(.6,1,1,5,1,!0).translate(0,.5,0),f=ks(aa(new $e({map:e,alphaTest:.45,side:pt})),.07,1),d=ks(aa(new $e({map:t,alphaTest:.45,side:pt})),.07,1),p=ks(new $e({flatShading:!0}),.05,1),x=ks(new $e({flatShading:!0}),.035,0),v=new $e({color:5588026}),m=new Date().getMonth(),u=[0,0,0,0,0,0,0,.05,.2,.55,.8,0][m],b=new We,g=new ft,_=new O,D=new O,C=new O(0,1,0),w=new ze,M=[];for(let P of Af(s,T=>[n[T*6]/10,n[T*6+1]/10])){let T=P.filter(q=>!n[q*6+5]),A=P.filter(q=>n[q*6+5]),G=q=>Math.abs(Math.sin(q*4.1414)*9631.7)%1<u,H=T.filter(q=>!G(q)),L=T.filter(G),N=new St(a,f,Math.max(H.length,1)),k=new St(a,d,Math.max(L.length,1)),V=new St(l,p,Math.max(T.length,1)),Y=new St(c,x,Math.max(A.length,1)),j=new St(h,v,P.length);N.count=H.length,k.count=L.length,V.count=T.length,Y.count=A.length;let K=0,W=0;T.forEach((q,ce)=>{let z=o(q),se=Math.abs(Math.sin(q*12.9898)*43758.5453)%1,Me=Math.max(z.h*.62,2.5),me=G(q);g.setFromAxisAngle(C,se*6.283),b.compose(D.set(z.x,z.g+z.h-Me/2,z.z),g,_.set(z.r*(.85+se*.3),Me/2,z.r)),V.setMatrixAt(ce,b),me?(k.setMatrixAt(W,b),k.setColorAt(W++,w.setHSL(.08+se*.06,.3,.75+se*7%1*.2))):(N.setMatrixAt(K,b),N.setColorAt(K++,w.setHSL(.18+se*.12,.3+se*.2,.62+se*7%1*.22))),V.setColorAt(ce,me?w.setHSL(.07+se*.06,.55,.32):w.setHSL(.23+se*.08,.4,.17+se*7%1*.07))}),A.forEach((q,ce)=>{let z=o(q),se=Math.abs(Math.sin(q*78.233)*43758.5453)%1;g.setFromAxisAngle(C,se*6.283),Y.setMatrixAt(ce,b.compose(D.set(z.x,z.g+z.h*.12,z.z),g,_.set(z.r*.75,z.h*.9,z.r*.75))),Y.setColorAt(ce,w.setHSL(.31+se*.06,.32+se*.1,.13+se*.06))}),P.forEach((q,ce)=>{let z=o(q),se=z.con?z.h*.85:Math.max(z.h*.62,2.5),Me=Math.max(z.h-se*.75,1),me=.12+z.h*.012;j.setMatrixAt(ce,b.compose(D.set(z.x,z.g-.3,z.z),g.identity(),_.set(me,Me+.3,me)))});for(let q of[N,k,V,Y,j])q.computeBoundingSphere(),q.receiveShadow=!0,q.castShadow=q!==V;M.push({near:N,nearA:k,far:V,cones:Y,trunks:j,center:j.boundingSphere.center.clone()})}let y=420,S=1500,E=P=>{for(let T of M){let A=T.center.distanceTo(P);T.near.visible=T.nearA.visible=T.trunks.visible=A<y,T.far.visible=A>=y&&A<S,T.cones.visible=A<S}};return{meshes:M.flatMap(P=>[P.near,P.nearA,P.far,P.cones,P.trunks]),update:E,count:s}}function Cf(i,e){let t=Vn(i.bushes,Int16Array),n=t.length/5,s=i.hmin,r=Tf(10,13),o=new Tr(.7,0),a=ks(aa(new $e({map:e,alphaTest:.45,side:pt})),.06,1),l=new $e({color:2372124,flatShading:!0}),c=new We,h=new ft,f=new O,d=new O,p=new O(0,1,0),x=new ze,v=[];for(let m of Af(n,u=>[t[u*5]/10,t[u*5+1]/10])){let u=new St(r,a,m.length),b=new St(o,l,m.length);m.forEach((g,_)=>{let D=t[g*5]/10,C=t[g*5+1]/10,w=s+t[g*5+2]/10,M=t[g*5+3]/10,y=t[g*5+4]/10,S=Math.abs(Math.sin(g*3.7)*9137.13)%1;h.setFromAxisAngle(p,S*6.283),c.compose(d.set(D,w+M*.45,C),h,f.set(y,M*.55,y*(.8+S*.4))),u.setMatrixAt(_,c),b.setMatrixAt(_,c),u.setColorAt(_,x.setHSL(.2+S*.1,.35,.55+S*.2))});for(let g of[u,b])g.computeBoundingSphere(),g.receiveShadow=!0,g.castShadow=g===u;v.push({a:u,b,center:u.boundingSphere.center.clone()})}return{meshes:v.flatMap(m=>[m.a,m.b]),update:m=>{for(let u of v)u.a.visible=u.b.visible=u.center.distanceTo(m)<520},count:n}}function Pf(i,e,t,n){let[s,r,o,a]=i.bounds,l=Math.round(o-s),c=Math.round(a-r),h=document.createElement("canvas");h.width=l,h.height=c;let f=h.getContext("2d",{willReadFrequently:!0});f.drawImage(e,0,0,l,c);let d=f.getImageData(0,0,l,c).data;f.drawImage(t,0,0,l,c);let p=f.getImageData(0,0,l,c).data,x=new Uint8Array(l*c);for(let V=0;V<x.length;V++){let Y=d[V*4],j=d[V*4+1],K=d[V*4+2],W=(2*j-Y-K)/(Y+j+K+1);x[V]=Math.max(0,Math.min(255,(W-.05)*1800))*(1-p[V*4]/255)*(1-p[V*4+2]/255)}let v=kt(9),m=[],u=[];for(let V=0;V<9;V++){let Y=v()*6.3,j=v()*.22,K=Math.cos(Y)*j,W=Math.sin(Y)*j,q=.22+v()*.3,ce=(v()-.5)*.25,z=v()*6.3,se=.025;m.push(K-Math.cos(z)*se,0,W-Math.sin(z)*se,K+Math.cos(z)*se,0,W+Math.sin(z)*se,K+Math.cos(Y)*ce,q,W+Math.sin(Y)*ce),u.push(.45,.45,.45,.45,.45,.45,1.1,1.1,1.1)}let b=new et;b.setAttribute("position",new Ke(m,3)),b.setAttribute("color",new Ke(u,3)),b.setAttribute("normal",new Ke(m.map((V,Y)=>Y%3===1?1:0),3));let g=new $e({vertexColors:!0,side:pt});aa(g);let _=g.onBeforeCompile;g.onBeforeCompile=(V,Y)=>{_(V,Y),V.uniforms.uTime=ot.uTime,V.uniforms.uWind=ot.uWind,V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float ph = uTime * (1.2 + uWind) + instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.23;
transformed.x += (sin(ph) * 0.6 + 0.5) * 0.16 * uWind * position.y;
transformed.z += cos(ph * 0.8) * 0.08 * uWind * position.y;`)};let D=15e3,C=34,w=new St(b,g,D);w.receiveShadow=!0,w.frustumCulled=!1,w.count=0;let M=new We,y=new ft,S=new O,E=new O,P=new O(0,1,0),T=new ze,A=new ze(7311162),G=(V,Y,j)=>{let K=Math.imul(V,374761393)+Math.imul(Y,668265263)+Math.imul(j,2246822519);return K=Math.imul(K^K>>>13,1274126177),((K^K>>>16)>>>0)/4294967296},H=1/0,L=1/0,N=(V,Y)=>{let j=0;for(let K=Math.floor(Y-C);K<=Y+C&&j<D;K++)for(let W=Math.floor(V-C);W<=V+C&&j<D;W++){let q=Math.hypot(W+.5-V,K+.5-Y);if(q>C)continue;let ce=Math.floor(W-s),z=Math.floor(K-r);if(ce<0||z<0||ce>=l||z>=c)continue;let se=x[z*l+ce]/255;for(let Me=0;Me<3&&j<D;Me++){if(G(W,K,Me)>se*.9)continue;let me=W+G(K,W,Me+5),le=K+G(W+3,K,Me+9),ne=(.7+G(W,Me,K)*.6)*Math.min(1,(C-q)/6);w.setMatrixAt(j,M.compose(E.set(me,n(me,le),le),y.setFromAxisAngle(P,G(Me,W,K)*6.3),S.set(ne,ne,ne)));let de=(z*l+ce)*4;w.setColorAt(j,T.setRGB(d[de]/255,d[de+1]/255,d[de+2]/255,_t).lerp(A,.35).multiplyScalar(1.5)),j++}}w.count=j,w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0)};return{mesh:w,update:V=>{Math.hypot(V.x-H,V.z-L)>4&&(H=V.x,L=V.z,N(H,L))}}}var la=[15921903,15921903,1842464,1842464,10462120,10462120,6119782,2833756,9182236,3033651,7035461,13222576,2056075],ri=(i,e)=>{let t=new ze(e),n=new Float32Array(i.attributes.position.count*3);for(let s=0;s<n.length;s+=3)n.set([t.r,t.g,t.b],s);return i.setAttribute("color",new lt(n,3)),i};function Pr(){let i=[[-2.17,.3],[2.1,.3],[2.18,.55],[2.06,.8],[.95,.92],[.2,1.42],[-1.35,1.44],[-2,1.05],[-2.17,.95]],e=new Ds(i.map(([h,f])=>new Se(h,f))),t=new wr(e,{depth:1.76,bevelEnabled:!1}).translate(0,0,-.88),n=(h,f,d)=>[h[0]+(f[0]-h[0])*(d-h[1])/(f[1]-h[1]),d],s=[[.95,.92],n(i[4],i[5],1.37),n(i[7],i[6],1.39),[-2,1.05]],r=new wr(new Ds(s.map(([h,f])=>new Se(h,f))),{depth:1.8,bevelEnabled:!1}).translate(0,0,-.9),o=[];for(let h of[1.32,-1.38])for(let f of[.79,-.79])o.push(new vt(.32,.32,.22,12).rotateX(Math.PI/2).translate(h,.32,f));let a=[];for(let h of[.6,-.6])a.push(ri(new je(.06,.12,.34).translate(2.15,.68,h),16184294)),a.push(ri(new je(.06,.12,.3).translate(-2.18,.84,h),10687765));let l=h=>{let f=h.index?h.toNonIndexed():h;return f.deleteAttribute("uv"),f},c=on([ri(r,1910060),...o.map(h=>ri(h.toNonIndexed(),1579034))].map(l));return t.deleteAttribute("uv"),{body:t,detail:c,lamps:on(a.map(l))}}function $v(){let i=s=>{let r=s.index?s.toNonIndexed():s;return r.deleteAttribute("uv"),r},e=new je(11.8,2.55,2.5).translate(0,1.625,0);e.deleteAttribute("uv");let t=[ri(new je(10.6,.95,2.54).translate(-.4,2,0),1910060),ri(new je(.06,1.45,2.3).translate(5.92,1.95,0),1910060)];for(let s of[3.9,-3.3])for(let r of[1.12,-1.12])t.push(ri(new vt(.5,.5,.3,14).rotateX(Math.PI/2).translate(s,.5,r),1579034));let n=[];for(let s of[.95,-.95])n.push(ri(new je(.06,.16,.36).translate(5.92,.75,s),16184294)),n.push(ri(new je(.06,.2,.3).translate(-5.92,.95,s),10687765));return{body:e,detail:on(t.map(i)),lamps:on(n.map(i))}}function ey(i){let e=document.createElement("canvas");e.width=128,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(20,32,2,40,32,70);n.addColorStop(0,"rgba(255,255,255,0.95)"),n.addColorStop(.6,"rgba(255,255,255,0.25)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,64);let s=new xt({map:new It(e),color:16773324,transparent:!0,opacity:0,blending:Mn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),r=new St(new sn(11,4.2).rotateX(-Math.PI/2),s,i);r.frustumCulled=!1,r.renderOrder=2,r.instanceMatrix.setUsage(tn);let o=new We,a=new ft,l=new O(0,1,0),c=new O(1,1,1),h=new O;return{mesh:r,place:(f,d,p,x,v)=>r.setMatrixAt(f,o.compose(h.set(d,p,x),a.setFromAxisAngle(l,v),c)),update:f=>{s.opacity=f*.5,r.visible=f>.02,r.instanceMatrix.needsUpdate=!0}}}function sh(i,e){let t=new St(i.body,rn(qi(new Kt({roughness:.35,metalness:.4}))),e),n=new St(i.detail,rn(new Kt({vertexColors:!0,roughness:.15,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),e),s=new St(i.lamps,new xt({vertexColors:!0}),e);for(let r of[t,n])r.castShadow=r.receiveShadow=!0;return[t,n,s]}function If(i,e,t){let n=Pr(),s=Vn(i.cars,Int16Array),r=s.length/3,o=new We,a=new ft,l=new ft,c=new O,h=new O,f=new O(0,1,0),d=new O(0,0,1),p=new ze,x=(L,N,k,V,Y,j,K,W)=>{a.setFromAxisAngle(f,k).multiply(l.setFromAxisAngle(d,Y));let q=j*.6180339%1;j<0?h.set(1,1,1):h.set(.92+q*.18,.95+q*7%1*.22,1),o.compose(c.set(L,V,N),a,h);for(let ce of K)ce.setMatrixAt(W,o)},v=sh(n,r),m=[],u=new Float32Array(r*20),b=0,g=(L,N,k,V)=>{let Y=Math.cos(V),j=-Math.sin(V),K=Math.atan2(t(N+Y*1.8,k+j*1.8)-t(N-Y*1.8,k-j*1.8),3.6);x(N,k,V,t(N,k)-.02,K,L,v,L);let W=[[2.2,.9],[-2.2,.9],[-2.2,-.9],[2.2,-.9]].map(([ce,z])=>[N+Y*ce+j*z,k+j*ce-Y*z]);for(let ce=0;ce<4;ce++)u.set([...W[ce],...W[(ce+1)%4],t(N,k)+1.5],b+L*20+ce*5);let q=L*.6180339%1;m[L]={x:N,z:k,yaw:V,paint:la[L*7919%la.length],sx:.92+q*.18,sy:.95+q*7%1*.22}};for(let L=0;L<r;L++)g(L,s[L*3]/10,s[L*3+1]/10,s[L*3+2]/1e3),v[0].setColorAt(L,p.setHex(m[L].paint));for(let L of v)L.computeBoundingSphere();let _=new We().makeScale(0,0,0),D={n:r,get:L=>m[L],hide:L=>{for(let N of v)N.setMatrixAt(L,_),N.instanceMatrix.needsUpdate=!0;for(let N=0;N<4;N++)u[b+L*20+N*5+4]=-1e4},place:(L,N,k,V)=>{g(L,N,k,V);for(let Y of v)Y.instanceMatrix.needsUpdate=!0,Y.computeBoundingSphere()},bind:(L,N)=>{L.set(u.subarray(0,r*20),N),u=L,b=N}},C=e.filter(L=>L.out.length),w=Math.min(48,Math.floor(C.length/10)),M=12345,y=()=>(M=M*1103515245+12345&2147483647)/2147483647,S=(L,N)=>{let k=e[L].out,V=k.filter(W=>W.to!==N),Y=V.length?V:k,j=Y.reduce((W,q)=>W+q.d,0),K=y()*j;for(let W of Y)if((K-=W.d)<=0)return W;return Y[Y.length-1]},E=[{n:w,meshes:sh(n,w),paint:L=>la[L*104729%la.length],speed:1,half:2.2,width:.9,vary:!0},{n:2,meshes:sh($v(),2),paint:L=>[15856108,14201900][L],speed:.72,half:5.9,width:1.25,vary:!1}],P=ey(w+2);for(let L of E){L.agents=[];for(let N=0;N<L.n;N++){let k=e.indexOf(C[Math.floor(y()*C.length)]);L.agents.push({from:k,e:S(k,-1),t:y()*5,v:0,yaw:null}),L.meshes[0].setColorAt(N,p.setHex(L.paint(N)))}for(let N of L.meshes)N.frustumCulled=!1,N.instanceMatrix.setUsage(tn)}let T={meshes:[...v,...E.flatMap(L=>L.meshes),P.mesh],segs:Array.from(u),count:r,traffic:w+2,nearest:1/0,parked:D,agentPos:[]},A=E.flatMap(L=>L.agents.map(()=>[1e9,1e9,L.width,1,0,L.half-L.width,0]));T.agentPos=A;let G=(L,N,k)=>{let V=A[L],Y=A[N],j=Y[0]-V[0],K=Y[1]-V[1],W=j*V[3]+K*V[4];return W>0&&W<V[5]+V[2]+Y[5]+Y[2]+k&&Math.abs(K*V[3]-j*V[4])<V[2]+Y[2]&&Math.abs(V[6]-Y[6])<3},H=(L,N,k=0)=>{T.nearest=1/0;let V=0,Y=0;for(let j of E)j.agents.forEach((K,W)=>{let q=e[K.from],ce=e[K.e.to],z=ce.x-q.x,se=ce.z-q.z,Me=Math.hypot(z,se)||.01,me=Y===T.suspect,le=Y===T.caught,ne=!1;if(!(K.ghost>0)&&!me)for(let Ae=0;Ae<A.length&&!ne;Ae++)Ae!==Y&&G(Y,Ae,2+K.v*.9)&&!(G(Ae,Y,2)&&Y<Ae)&&(ne=!0);K.ghost=(K.ghost||0)-L,K.jam=ne?(K.jam||0)+L:0,K.jam>8&&(K.jam=0,K.ghost=3);let de=N.x-(q.x+z/Me*K.t),B=N.z-(q.z+se/Me*K.t),Te=(de*z+B*se)/Me,$=Math.abs((B*z-de*se)/Me-K.e.off),oe=Te>0&&Te<j.half+7&&$<1.6&&Math.abs(N.y-q.y)<3,X=T.siren,Q=A[Y],ue=X?(Q[0]-X.x)*X.fx+(Q[1]-X.z)*X.fz:0,I=!!X&&!me&&ue>-3&&Math.hypot(Q[0]-X.x,Q[1]-X.z)<55;K.pull=(K.pull||0)+((I||le?1:0)-(K.pull||0))*Math.min(1,L*1.2);let R=I?3.5:K.e.v*j.speed*(me&&!le?1.45:1);for(K.v=oe||ne||le||I&&ue<40?Math.max(0,K.v-9*L):K.v>R?Math.max(R,K.v-6*L):Math.min(R,K.v+2.6*j.speed*L),K.wait=oe?(K.wait||0)+L:0,K.wait>2.5&&!K.honked&&!X&&(K.honked=!0,T.honk=!0),oe||(K.honked=!1),K.t+=K.v*L;K.t>=Me;){K.t-=Me;let Ae=K.from;K.from=K.e.to,K.e=S(K.from,Ae),q=e[K.from],ce=e[K.e.to],z=ce.x-q.x,se=ce.z-q.z,Me=Math.hypot(z,se)||.01}let J=K.t/Me,ee=z/Me,ae=se/Me,Z=Math.atan2(-ae,ee);K.yaw==null&&(K.yaw=Z);let xe=Z-K.yaw;xe=Math.atan2(Math.sin(xe),Math.cos(xe)),K.yaw+=xe*Math.min(1,L*(j.vary?6:3));let Re=K.e.off+K.pull*1.7,Ce=q.x+z*J-ae*Re,Be=q.z+se*J+ee*Re,be=q.y+(ce.y-q.y)*J;x(Ce,Be,K.yaw,be-.04,Math.atan2(ce.y-q.y,Me),j.vary?W:-1,j.meshes,W),P.place(V++,Ce+Math.cos(K.yaw)*(j.half+5),be+.1,Be-Math.sin(K.yaw)*(j.half+5),K.yaw),T.nearest=Math.min(T.nearest,Math.hypot(N.x-Ce,N.z-Be,(N.y-q.y)*2));let Ee=A[Y++];Ee[0]=Ce,Ee[1]=Be,Ee[3]=Math.cos(K.yaw),Ee[4]=-Math.sin(K.yaw),Ee[6]=be});for(let j of E)for(let K of j.meshes)K.instanceMatrix.needsUpdate=!0;P.update(k)};return T.update=H,T}var Lf=[2832981,7040885,10235695,4086330,12759695,15263456,1908258,14066993,5979486,9067068,4157327,11751274],Df=[2306381,2306381,1842207,4934994,9075292,3882826],Nf=[15845544,15053711,13802870,11762261,16044987],Uf=[2300436,4862498,8018486,13215850,10132120,2958368],zf=["Jana","Petr","Marie","Ji\u0159\xED","Eva","Tom\xE1\u0161","Lenka","Martin","Hana","Pavel","V\u011Bra","Josef","Alena","Jan","Lucie","Karel","Zde\u0148ka","Michal","Ivana","Luk\xE1\u0161","Bo\u017Eena","Vladim\xEDr","Kate\u0159ina","Radek"],Of=["Ondra","Ani\u010Dka","Kuba","Terka","Mat\u011Bj","Eli\u0161ka","Vojta","Nat\xE1lka"],Ff=[7031343,1973017,14272678,10906412,15328732];function oi(i,e,t){let n=new St(i,e,t);return n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n.instanceMatrix.setUsage(tn),n}function Bf(i,e,t,n=[],s=150){let[r,o]=e,a=650,l=i.map((j,K)=>K).filter(j=>i[j].out.length&&Math.hypot(i[j].x-r,i[j].z-o)<a),c=new $e,h=new Ei(.17,.42,3,8).scale(.8,1,1.15).translate(0,1.18,0),f=new Et(.115,10,8).translate(0,1.67,0),d=new Et(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(-.012,1.685,0),p=new je(.13,.84,.14).translate(0,-.42,0),x=new je(.085,.6,.085).translate(0,-.3,0),v=new je(.62,.26,.22).translate(0,.44,0),m=new je(.24,.2,.17).translate(.38,.58,0),u=new je(.07,.32,.07).translate(0,-.16,0),b=new hn(.55,.28,8,1,!0).translate(0,2.08,0),g=777,_=()=>(g=g*1103515245+12345&2147483647)/2147483647,D=(j,K)=>{let W=i[j].out,q=W.filter(se=>se.to!==K&&Math.hypot(i[se.to].x-r,i[se.to].z-o)<a),ce=q.length?q:W.filter(se=>se.to===K).length?W.filter(se=>se.to===K):W,z=_()*ce.reduce((se,Me)=>se+Me.d,0);for(let se of ce)if((z-=se.d)<=0)return se;return ce[ce.length-1]},C=[];for(let j=0;j<s&&l.length;j++){let K=l[Math.floor(_()*l.length)],W=_()<.12;C.push({from:K,e:D(K,-1),t:_()*10,v:1.05+_()*.5,side:_()<.5?1:-1,jit:(_()-.5)*.5,s:W?.62+_()*.12:.92+_()*.16,ph:_()*6.3,yaw:0,dog:!W&&_()<.18})}for(let j=0;j<4;j++){let K=r+(_()-.5)*50,W=o+(_()-.5)*50,q=2+Math.floor(_()*2);for(let ce=0;ce<q;ce++){let z=ce/q*6.283+_()*.4;C.push({idle:!0,x:K+Math.cos(z)*.65,z:W+Math.sin(z)*.65,yaw:Math.atan2(Math.sin(z),-Math.cos(z)),s:.92+_()*.16,ph:_()*6.3,dog:!1})}}n.forEach(([j,K,W],q)=>{_()<.6&&C.push({idle:!0,sit:!0,x:j+Math.cos(W)*(_()-.5)*.9,z:K-Math.sin(W)*(_()-.5)*.9,yaw:Math.atan2(-Math.cos(W),Math.sin(W)),s:.92+_()*.14,ph:_()*6.3,dog:!1})});let w=C.length,M=C.filter(j=>j.dog),y={torso:oi(h,c,w),head:oi(f,c,w),hair:oi(d,c,w),legs:oi(p,c,w*2),arms:oi(x,c,w*2),dog:oi(v,c,Math.max(1,M.length)),dogHead:oi(m,c,Math.max(1,M.length)),dogLegs:oi(u,c,Math.max(4,M.length*4)),umbrella:oi(b,new $e({side:pt}),w)};y.dog.count=y.dogHead.count=M.length,y.dogLegs.count=M.length*4;let S=new ze;C.forEach((j,K)=>{let W=Lf[K*7%Lf.length],q=Df[(K*3+1)%Df.length];y.umbrella.setColorAt(K,S.setHex([1908258,8003371,2375787,3103546,7040885][K%5])),y.torso.setColorAt(K,S.setHex(W)),y.head.setColorAt(K,S.setHex(Nf[K*5%Nf.length])),y.hair.setColorAt(K,S.setHex(Uf[K*11%Uf.length]));for(let ce of[0,1])y.legs.setColorAt(K*2+ce,S.setHex(q)),y.arms.setColorAt(K*2+ce,S.setHex(W))}),M.forEach((j,K)=>{let W=Ff[K%Ff.length];y.dog.setColorAt(K,S.setHex(W)),y.dogHead.setColorAt(K,S.setHex(W));for(let q=0;q<4;q++)y.dogLegs.setColorAt(K*4+q,S.setHex(W))});let E=new We,P=new We,T=new We,A=new ft,G=new O(0,1,0),H=new O,L=new O,N=(j,K,W,q,ce,z)=>{P.makeTranslation(W,q,ce).multiply(T.makeRotationZ(z)),j.setMatrixAt(K,P.premultiply(E))},k=new We().makeTranslation(0,-1e4,0),V=(j,K,W={night:0,rain:0})=>{let q=0;Y.dogDist=1/0;let ce=Math.round(w*(1-.75*W.night)*(1-.45*W.rain));C.forEach((z,se)=>{if(z.vis=!1,se>=ce||z.idle&&(W.night>.5||W.rain>.3)){for(let oe of[y.torso,y.head,y.hair,y.umbrella])oe.setMatrixAt(se,k);for(let oe of[0,1])y.legs.setMatrixAt(se*2+oe,k),y.arms.setMatrixAt(se*2+oe,k);if(z.dog){y.dog.setMatrixAt(q,k),y.dogHead.setMatrixAt(q,k);for(let oe=0;oe<4;oe++)y.dogLegs.setMatrixAt(q*4+oe,k);q++}return}let Me,me,le,ne=0;if(z.hitT=Math.max(0,(z.hitT||0)-j),z.panicT>0&&Number.isFinite(z.cx)){if(z.panicT=Math.max(0,z.panicT-j),Me=z.cx+z.panicX*4.5*j,me=z.cz+z.panicZ*4.5*j,le=t(Me,me),ne=1,z.yaw=Math.atan2(-z.panicZ,z.panicX),z.panicT===0){z.idle=!1,z.sit=!1,z.hold=null;let oe=-1,X=1/0;i.forEach((Q,ue)=>{let I=Math.hypot(Q.x-Me,Q.z-me);Q.out.length&&I<X&&(oe=ue,X=I)}),oe>=0&&(z.from=oe,z.e=D(oe,-1),z.t=0)}}else if(z.hold&&!z.idle)Me=z.cx,me=z.cz,le=t(Me,me);else if(z.idle)Me=z.x,me=z.z,le=t(Me,me)+(z.sit?.5-.86*z.s:0);else{let oe=i[z.from],X=i[z.e.to],Q=X.x-oe.x,ue=X.z-oe.z,I=Math.hypot(Q,ue)||.01,R=oe.x+Q/I*z.t,J=oe.z+ue/I*z.t;for(Math.hypot(K.x-R,K.z-J)<1.1||(z.t+=z.v*j,ne=1);z.t>=I;){z.t-=I;let be=z.from;z.from=z.e.to,z.e=D(z.from,be),oe=i[z.from],X=i[z.e.to],Q=X.x-oe.x,ue=X.z-oe.z,I=Math.hypot(Q,ue)||.01}let ae=z.t/I,Z=Q/I,xe=ue/I,Re=z.e.off?z.e.off*z.side:z.jit,Be=Math.atan2(-xe,Z)-z.yaw;Be=Math.atan2(Math.sin(Be),Math.cos(Be)),z.yaw+=Be*Math.min(1,j*5),Me=oe.x+Q*ae-xe*Re,me=oe.z+ue*ae+Z*Re,le=oe.y+(X.y-oe.y)*ae}if(z.hold){let X=Math.atan2(-(z.hold[1]-me),z.hold[0]-Me)-z.yaw;X=Math.atan2(Math.sin(X),Math.cos(X)),z.yaw+=X*Math.min(1,j*6),ne=0}z.cx=Me,z.cz=me,z.vis=!0,z.ph+=j*(ne?(z.panicT>0?4.5:z.v)*5.2/z.s:1.2);let de=ne?Math.sin(z.ph)*.5:0,B=ne?Math.abs(Math.sin(z.ph))*.035:0;E.compose(H.set(Me,le+B,me),A.setFromAxisAngle(G,z.yaw+(z.idle?Math.sin(z.ph*.3)*.15:0)),L.setScalar(z.s)),y.torso.setMatrixAt(se,E),y.head.setMatrixAt(se,E),y.hair.setMatrixAt(se,E),y.umbrella.setMatrixAt(se,W.rain>.25&&!z.idle&&z.s>.8?E:k);let Te=z.sit?1.35:0;N(y.legs,se*2,0,.86,.09,de+Te),N(y.legs,se*2+1,0,.86,-.09,-de+Te);let $=z.idle&&!z.sit?Math.max(0,Math.sin(z.ph*.7))*.6:z.sit?.35:0;if(N(y.arms,se*2,0,1.46,.245,-de*.8-$),N(y.arms,se*2+1,0,1.46,-.245,de*.8),z.dog){let oe=Math.cos(z.yaw),X=-Math.sin(z.yaw),Q=Me+oe*.9-X*.75,ue=me+X*.9+oe*.75;E.compose(H.set(Q,t(Q,ue)+(ne?Math.abs(Math.sin(z.ph*1.6))*.03:0),ue),A.setFromAxisAngle(G,z.yaw),L.setScalar(1)),y.dog.setMatrixAt(q,E),y.dogHead.setMatrixAt(q,E),Y.dogDist=Math.min(Y.dogDist,Math.hypot(K.x-Q,K.z-ue));let I=ne?Math.sin(z.ph*1.6)*.6:0;[[.22,.08,I],[.22,-.08,-I],[-.22,.08,-I],[-.22,-.08,I]].forEach(([R,J,ee],ae)=>N(y.dogLegs,q*4+ae,R,.33,J,ee)),q++}});for(let z of Object.values(y))z.instanceMatrix.needsUpdate=!0};C.forEach((j,K)=>{j.name=j.s<.8?Of[K%Of.length]:zf[K*7%zf.length],j.kid=j.s<.8});let Y={meshes:Object.values(y),humans:[y.torso,y.head,y.hair,y.legs,y.arms,y.umbrella],update:V,count:w,dogs:M.length,dogDist:1/0,nearest:(j,K,W)=>{let q=-1,ce=W;return C.forEach((z,se)=>{if(!z.vis)return;let Me=Math.hypot(z.cx-j,z.cz-K);Me<ce&&(ce=Me,q=se)}),q},person:j=>C[j],hold:(j,K)=>{C[j]&&(C[j].hold=K)},hit:(j,K,W)=>{let q=C[j];if(!q||q.kid||q.hitT>0||!q.vis)return!1;let ce=q.cx-K,z=q.cz-W,se=Math.hypot(ce,z)||1;return q.panicX=ce/se,q.panicZ=z/se,q.panicT=4.5,q.hitT=3,!0}};return V(0,{x:1e9,z:1e9}),Y}function ty(){let i=new hn(.07,.34,5).rotateZ(-Math.PI/2),e=new et;return e.setAttribute("position",new Ke([.08,0,.02,-.08,0,.02,-.02,0,.34],3)),e.setAttribute("normal",new Ke([0,1,0,0,1,0,0,1,0],3)),{body:i,wing:e}}function Hf(i,e){let[t,n]=i,s=ty(),r=4,o=14,a=22,l=r*o+a,c=new $e({side:pt}),h=(E,P)=>{let T=new St(E,c,P);return T.frustumCulled=!1,T.castShadow=!0,T.instanceMatrix.setUsage(tn),T},f=h(s.body,l),d=h(s.wing,l),p=h(s.wing,l),x=new ze,v=4242,m=()=>(v=v*1103515245+12345&2147483647)/2147483647,u=[];for(let E=0;E<r;E++){let P=t+(m()-.5)*900,T=n+(m()-.5)*700,A=35+m()*45,G=60+m()*120,H=(.12+m()*.1)*(m()<.5?1:-1);for(let L=0;L<o;L++)u.push({kind:"flock",cx:P,cz:T,alt:A,R:G+(m()-.5)*30,a:m()*.6+L*.05,sp:H,dy:(m()-.5)*8,ph:m()*6,flap:9+m()*3,s:1.3})}let b=()=>{let E=m()*6.283,P=3+m()*26;return[t+Math.cos(E)*P,n+Math.sin(E)*P]};for(let E=0;E<a;E++){let[P,T]=b();u.push({kind:"pigeon",x:P,z:T,y:e(P,T),yaw:m()*6.3,state:"ground",t:0,ph:m()*6,s:1,vx:0,vy:0,vz:0,tx:P,tz:T})}u.forEach((E,P)=>{let T=E.kind==="pigeon"?x.setHSL(.62,.06,.42+m()*.12):x.setHex(1776414);f.setColorAt(P,T),d.setColorAt(P,T),p.setColorAt(P,T)});let g=new We,_=new We,D=new ft,C=new O(0,1,0),w=new O,M=new O,y=new We().makeScale(1,1,-1),S=(E,P,T)=>{u.forEach((A,G)=>{let H,L,N,k,V=0;if(A.kind==="flock")A.a+=A.sp*E*60/A.R,H=A.cx+Math.cos(A.a)*A.R,N=A.cz+Math.sin(A.a)*A.R,L=Math.max(e(H,N)+15,A.alt+Math.sin(T*.3+A.ph)*6+A.dy),k=Math.atan2(-(Math.cos(A.a)*Math.sign(A.sp)),-Math.sin(A.a)*Math.sign(A.sp)),V=Math.sin(T*.5+A.ph)>.3?.15:Math.sin(T*A.flap+A.ph)*.9;else{let Y=Math.hypot(P.x-A.x,P.z-A.z);if(A.state==="ground"){if(A.t-=E,Y<5.5&&Math.abs(P.y-A.y)<3){A.state="fly",A.t=3+m()*3;let j=(A.x-P.x)/(Y||1),K=(A.z-P.z)/(Y||1);A.vx=j*6+(m()-.5)*3,A.vz=K*6+(m()-.5)*3,A.vy=4+m()*2}else if(A.t<0)A.t=1+m()*3,A.yaw+=(m()-.5)*2;else{let j=.25*E;A.x+=Math.cos(A.yaw)*j,A.z-=Math.sin(A.yaw)*j}A.y=e(A.x,A.z),V=-1.2}else if(A.state==="fly")A.t-=E,A.vy-=.8*E,A.x+=A.vx*E,A.y+=A.vy*E,A.z+=A.vz*E,V=Math.sin(T*22+A.ph)*1,A.t<0&&(A.state="land",[A.tx,A.tz]=b());else{let j=A.tx-A.x,K=A.tz-A.z,W=Math.hypot(j,K),q=e(A.tx,A.tz),ce=Math.min(7,W*1.5+1);A.vx=j/(W||1)*ce,A.vz=K/(W||1)*ce,A.vy=(q-A.y)*.8,A.x+=A.vx*E,A.y+=A.vy*E,A.z+=A.vz*E,V=Math.sin(T*16+A.ph)*.7,W<.4&&(A.state="ground",A.t=2)}H=A.x,L=A.y+.12,N=A.z,k=A.state==="ground"?A.yaw:Math.atan2(-A.vz,A.vx),A.state!=="ground"&&(A.yaw=k)}g.compose(w.set(H,L,N),D.setFromAxisAngle(C,k),M.setScalar(A.s)),A.kind==="pigeon"&&A.state==="ground"&&g.multiply(_.makeRotationZ(Math.max(0,Math.sin(T*3+A.ph))*-.5)),f.setMatrixAt(G,g),p.setMatrixAt(G,_.makeRotationX(-V).premultiply(g)),d.setMatrixAt(G,_.makeRotationX(-V).premultiply(y).premultiply(g))});for(let A of[f,d,p])A.instanceMatrix.needsUpdate=!0};return S(0,{x:1e9,y:0,z:1e9},0),{meshes:[f,d,p],update:S}}var ny={caf\u00E9:"#5b3b2b",restaurant:"#7a2a22",pub:"#4a2a1c",pharmacy:"#1f6b43",bank:"#1d3f73",hotel:"#26324f","post office":"#d2a823",police:"#1f3f7a","fire station":"#9b1d1d","town hall":"#3b3b3b",museum:"#4b2d55",florist:"#2f6a3a",grocery:"#3d6b2f",supermarket:"#7b1f24",optician:"#2a4d6e",newsagent:"#5a4a2a",chemist:"#6b3f7a","pet shop":"#7a5a1f",clothes:"#444b6e",toys:"#b4502b",household:"#556b2f",bikes:"#2b5d7a",hardware:"#5b4636",electrical:"#2f4f6f","fast food":"#9b3a1a",insurance:"#1d4f73",massage:"#4f7a6a",service:"#4a4f55",company:"#3a4048"};function kf(i){let e=[],t=[];for(let n of i.places){let s=document.createElement("canvas"),r=s.getContext("2d"),o="600 76px 'IBM Plex Sans Condensed', 'Arial Narrow', Arial, sans-serif";r.font=o;let a=Math.ceil(r.measureText(n.n).width)+90;s.width=Math.min(2048,a),s.height=128;let l=ny[n.k]||"#2f3634",c=n.k==="post office";r.fillStyle=l,r.fillRect(0,0,s.width,s.height),r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=6,r.strokeRect(8,8,s.width-16,s.height-16),r.font=o,r.fillStyle=c?"#1f2a44":"#f6efdc",r.textBaseline="middle",r.textAlign="center",r.fillText(n.n,s.width/2,68,s.width-60);let h=new It(s);h.colorSpace=_t,h.anisotropy=4;let f=new $e({map:h,emissive:16777215,emissiveMap:h,emissiveIntensity:0,polygonOffset:!0,polygonOffsetFactor:-2}),d=.62,p=new qe(new sn(s.width/s.height*d,d),f);p.position.set(n.x,n.y,n.z),p.rotation.y=n.yaw,e.push(p),t.push(f)}return{meshes:e,update:n=>{for(let s of t)s.emissiveIntensity=n*.55}}}function ca(i){let t=new Float32Array(1440),n=new Float32Array(480),s=new et;for(let h=0;h<480;h++)n[h]=Math.random(),t[h*3+1]=-1e4;s.setAttribute("position",new lt(t,3).setUsage(tn)),s.setAttribute("aAge",new lt(n,1).setUsage(tn));let r=new ht({transparent:!0,depthWrite:!1,uniforms:{uAmount:{value:.6},uColor:{value:new ze(13619151)},uScale:{value:600}},vertexShader:`attribute float aAge; uniform float uScale; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = mix(0.9, 5.0, aAge) * uScale / max(-mv.z, 1.0); vA = aAge; }`,fragmentShader:`uniform float uAmount; uniform vec3 uColor; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, d) * (1.0 - vA) * smoothstep(0.0, 0.1, vA) * 0.3 * uAmount; if (a < 0.004) discard; gl_FragColor = vec4(uColor, a);
        #include <colorspace_fragment>
      }`}),o=new bi(s,r);o.frustumCulled=!1,o.renderOrder=3;let a=[],l=0;return{mesh:o,update:(h,f,d,p,x,v)=>{if((l-=h)<0&&(l=2,a=i.map(m=>[m,(m[0]-f.x)**2+(m[2]-f.z)**2]).filter(m=>m[1]<320*320).sort((m,u)=>m[1]-u[1]).slice(0,24).map(m=>m[0])),o.visible=a.length>0&&p>.02,!!o.visible){r.uniforms.uAmount.value=p,r.uniforms.uScale.value=v,r.uniforms.uColor.value.setScalar(.18+.62*x);for(let m=0;m<480;m++){n[m]+=h/7;let u=m*3;if(n[m]>=1){let g=a[m%a.length];n[m]=0,t[u]=g[0]+(Math.random()-.5)*.3,t[u+1]=g[1],t[u+2]=g[2]+(Math.random()-.5)*.3}let b=n[m]*7;t[u]+=(d*1.6+Math.sin(b*1.3+m)*.15)*h,t[u+1]+=(.6-n[m]*.25)*h,t[u+2]+=(d*.6+Math.cos(b+m)*.12)*h}s.attributes.position.needsUpdate=!0,s.attributes.aAge.needsUpdate=!0}},debug:()=>({active:a.length,pickT:l})}}var rh=new $e({color:13616818}),iy=new $e({color:13214778,emissive:2760197});function Vf(i){return on([new vt(.16*i,.27*i,.95*i,8).translate(0,.475*i,0),new Et(.19*i,8,6).scale(1,.7,1).translate(0,.98*i,0),new Et(.12*i,8,6).translate(0,1.18*i,0)].map(e=>e.toNonIndexed()))}function Gf(i,e){let t=[],n=[],s=[],r=(d,p,x,v,m,u=0)=>{let b=new qe(d,p);return b.position.set(x,v,m),b.rotation.y=u,b.castShadow=b.receiveShadow=!0,t.push(b),b},o=i.monument;if(o){let d=o.g-.1,p=[];[[3.2,.175],[2.7,.525],[2.2,.875]].forEach(([x,v])=>p.push(new vt(x,x,.35,8).translate(0,v,0))),p.push(new je(2.4,3.2,2.4).translate(0,2.65,0),new je(2.8,.3,2.8).translate(0,4.4,0)),p.push(new vt(.42,.5,8,12).translate(0,8.55,0),new je(1.2,.5,1.2).translate(0,12.8,0)),p.push(new Et(1,10,8).scale(1.1,.7,1.1).translate(0,13.6,0),Vf(1.6).translate(0,13.9,0)),r(on(p.map(x=>x.index?x.toNonIndexed():x)),rh,o.x,d,o.z,Math.PI/8),r(new Ns(.42,.05,6,16),iy,o.x,d+15.95,o.z);for(let[x,v]of o.statues){let m=x-o.x,u=v-o.z,b=Math.hypot(m,u)||1;m/=b,u/=b,r(on([new je(.5,.35,.5).translate(0,.175,0).toNonIndexed(),Vf(1.05).translate(0,.35,0)]),rh,o.x+m*1.55,d+4.55,o.z+u*1.55,Math.atan2(m,u))}for(let x=0;x<8;x++){let v=x/8*Math.PI*2+Math.PI/8,m=(x+1)/8*Math.PI*2+Math.PI/8;n.push(o.x+Math.cos(v)*3.2,o.z+Math.sin(v)*3.2,o.x+Math.cos(m)*3.2,o.z+Math.sin(m)*3.2,d+16)}}let a=ih();for(let d of i.fountains){let p=d.reduce((w,M)=>[w[0]+M[0]/d.length,w[1]+M[1]/d.length],[0,0]),x=Math.min(...d.map(([w,M])=>e(w,M))),v=d.map(([w,M])=>{let y=w-p[0],S=M-p[1],E=Math.hypot(y,S)||1,P=Math.max(.2,(E-.35)/E);return[p[0]+y*P,p[1]+S*P]}),m=[],u=x+.55,b=x-.3;for(let w=0;w<d.length;w++){let M=d[w],y=d[(w+1)%d.length],S=v[w],E=v[(w+1)%d.length];m.push(M[0],b,M[1],y[0],b,y[1],y[0],u,y[1],M[0],b,M[1],y[0],u,y[1],M[0],u,M[1]),m.push(M[0],u,M[1],y[0],u,y[1],E[0],u,E[1],M[0],u,M[1],E[0],u,E[1],S[0],u,S[1]),m.push(S[0],u,S[1],E[0],u,E[1],E[0],b,E[1],S[0],u,S[1],E[0],b,E[1],S[0],b,S[1]),n.push(M[0],M[1],y[0],y[1],u)}let g=new et;g.setAttribute("position",new Ke(m,3)),g.computeVertexNormals();let _=r(g,rh.clone(),0,0,0);_.material.side=pt;let D=new et;D.setAttribute("position",new Ke(v.flatMap(([w,M])=>[w,u-.12,M]),3)),D.setIndex(yn.triangulateShape(v.map(([w,M])=>new Se(w,M)),[]).flat()),D.computeVertexNormals(),t.push(new qe(D,a));let C=r(new vt(.05,.35,1.8,10,1,!0),new $e({color:15134964,transparent:!0,opacity:.45,depthWrite:!1,side:pt}),p[0],u+.78,p[1]);C.castShadow=!1,C.userData.jet=!0}let l=on([new je(1.8,.06,.45).translate(0,.45,0),new je(1.8,.42,.05).translate(0,.75,-.21),new je(.06,.45,.42).translate(-.8,.22,0),new je(.06,.45,.42).translate(.8,.22,0)].map(d=>d.toNonIndexed())),c=new $e({color:7031602}),h=i.benches.map(([d,p],x)=>[d,p,x*2.1]);if(o)for(let d=0;d<6;d++){let p=d/6*Math.PI*2+.3;h.push([o.x+Math.cos(p)*7.5,o.z+Math.sin(p)*7.5,Math.atan2(-Math.cos(p),-Math.sin(p))])}for(let[d,p,x]of h)r(l,c,d,e(d,p),p,x),s.push([d,p,x]);return{meshes:t,segs:n,seats:s,update:d=>{for(let p of t)p.userData.jet&&p.scale.set(1+Math.sin(d*9)*.05,1+Math.sin(d*13)*.06,1+Math.cos(d*9)*.05)}}}var oh=(i,e)=>e[Math.floor(i()*e.length)%e.length],ah=(i,e,t)=>e+(t-e)*i(),sy=[15260080,14279620,15786704,13622754,15126424,15921126,15188920,14672086];function Wf(i,e,t){let n=i.e-i.g,s=i.y||0,r=i.u||0,o=i.k||0,a=i.f&&n/i.f>=2.5&&n/i.f<=4.4?i.f:Math.max(1,Math.round(n/(i.f&&n/i.f<2.5?2.9:3.1))),l;[4,41,43].includes(o)||r===6&&a>=4||!r&&a>=5?l="panel":e&&(!s||s<1920)&&a<=4?l="baroque":[1,12,13,16,17].includes(r)?l="industrial":[5,9,10,11,14,15,20].includes(r)?l="civic":[2,3,7,8].includes(r)?l=s>=1990?"newhouse":s>=1945?"house70":"oldhouse":l=s&&s<1945||a>=3?"classic":"house70";let c={panel:[3.6,3.6,.5,.62,.46,.5,[2,1,2],[0,0,1],()=>10|(t()<.7?16:0)],baroque:[2.9,3.4,.36,.44,.55,.6,[0,0,3,5],[0,5,2,1],()=>7],classic:[3,3.6,.38,.48,.52,.58,[0,4,0,5],[0,1,2,0],()=>(t()<.6?1:0)|2|(t()<.6?4:0)],oldhouse:[3.2,4.2,.3,.38,.42,.48,[4,0,4],[2,0,1,4],()=>34|(t()<.4?1:0)],house70:[3.4,4.4,.42,.55,.45,.5,[1,0,2],[1,0,0],()=>2|(t()<.5?32:0)],newhouse:[3.6,5,.4,.6,.45,.55,[1,1,5],[3,0,0,3],()=>32|(t()<.5?2:0)],civic:[3,4,.6,.75,.52,.58,[2,1],[3,0],()=>2|(t()<.4?4:0)],industrial:[4.5,6,.75,.85,.3,.36,[2],[3,0],()=>32]}[l],h={style:l,floors:a,storey:n/a,bay:ah(t,c[0],c[1]),winW:ah(t,c[2],c[3]),winH:ah(t,c[4],c[5]),type:oh(t,c[6]),frame:oh(t,c[7]),decor:c[8](),seed:Math.floor(t()*97)};return l==="panel"&&!i.wc&&(h.wall=oh(t,sy)),h}function Xf(i){let e=new Kt({map:i,vertexColors:!0,side:pt,roughness:.92,metalness:0});return e.onBeforeCompile=t=>{Object.assign(t.uniforms,{uNight:ot.uNight,uLit:ot.uLit,uSky:ot.uSky}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
totalEmissiveRadiance += litC * litA * uNight * 1.25;`)},e}var qf=[7031346,4862498,15263456,3948354,3099192,8008488,9068600,14275783];function ry(){let i=document.createElement("canvas");i.width=128,i.height=256;let e=i.getContext("2d");e.fillStyle="#3a3633",e.fillRect(0,0,128,256),e.fillStyle="#e6e6e6",e.fillRect(10,10,108,246),e.fillStyle="#1c2329",e.fillRect(24,24,80,70),e.fillStyle="rgba(140,170,190,0.35)",e.fillRect(28,28,36,30),e.strokeStyle="rgba(0,0,0,0.28)",e.lineWidth=4,e.strokeRect(24,112,80,56),e.strokeRect(24,180,80,62),e.fillStyle="rgba(255,255,255,0.25)",e.fillRect(26,114,76,3),e.fillRect(26,182,76,3),e.fillStyle="#c9c4b8",e.fillRect(94,150,14,5),e.fillRect(99,150,4,14);let t=new It(i);return t.colorSpace=_t,t.anisotropy=4,t}function Yf(i){let e=i.doors||[];if(!e.length)return{meshes:[]};let t=32,n=Math.ceil(e.length/t),s=document.createElement("canvas");s.width=t*64,s.height=n*40;let r=s.getContext("2d");r.textAlign="center",r.textBaseline="middle",e.forEach((u,b)=>{let g=b%t*64,_=Math.floor(b/t)*40;r.fillStyle="#b8232b",r.fillRect(g+1,_+1,62,38),r.strokeStyle="#f4f1ea",r.lineWidth=2,r.strokeRect(g+4,_+4,56,32),r.fillStyle="#f4f1ea",r.font=`700 ${String(u[3]).length>4?15:21}px 'IBM Plex Sans Condensed', Arial, sans-serif`,r.fillText(String(u[3]),g+32,_+21,52)});let o=new It(s);o.colorSpace=_t,o.anisotropy=4;let a=[],l=[],c=[],h=[],f=[],d=new ze,p=(u,b,g,_,D,C,w,M,y,S)=>{let E=Math.cos(D),P=-Math.sin(D),T=Math.sin(D),A=Math.cos(D),G=g+E*C+T*.01,H=_+P*C+A*.01,L=M/2,N=[G-E*L,w,H-P*L],k=[G+E*L,w,H+P*L],V=[G+E*L,w+y,H+P*L],Y=[G-E*L,w+y,H-P*L];u.push(...N,...k,...V,...N,...V,...Y);let[j,K,W,q]=S;b.push(j,K,W,K,W,q,j,K,W,q,j,q)};e.forEach(([u,b,g,,_],D)=>{p(a,l,u,b,g,0,_,1.1,2.2,[0,0,1,1]),d.setHex(qf[D%qf.length]);for(let S=0;S<6;S++)c.push(d.r,d.g,d.b);let C=D%t/t,w=1-Math.floor(D/t)/n,M=1/t,y=1/n;p(h,f,u,b,g,.95,_+1.75,.3,.19,[C,w-y,C+M,w])});let x=(u,b,g)=>{let _=new et;return _.setAttribute("position",new Ke(u,3)),_.setAttribute("uv",new Ke(b,2)),g&&_.setAttribute("color",new Ke(g,3)),_.computeVertexNormals(),_},v=new qe(x(a,l,c),new $e({map:ry(),vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1})),m=new qe(x(h,f),new $e({map:o,polygonOffset:!0,polygonOffsetFactor:-2}));return v.receiveShadow=m.receiveShadow=!0,{meshes:[v,m]}}var lh=2,Zf=[15782778,15317386,14279620,15918786,15188920,13622754,16050902,15126424,14468832,15850664],Kf=[0,0,0,0,0,0,0,0,-9,-9],hh=class{constructor(){this.p=[],this.n=[],this.c=[],this.u=[],this.x=[],this.cur=Kf}tri(e,t,n,s,r,o,a,l=a,c=a){let h=t[0]-e[0],f=t[1]-e[1],d=t[2]-e[2],p=n[0]-e[0],x=n[1]-e[1],v=n[2]-e[2],m=f*v-d*x,u=d*p-h*v,b=h*x-f*p,g=Math.hypot(m,u,b);if(!(g<1e-9)){m/=g,u/=g,b/=g,this.p.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]);for(let _=0;_<3;_++)this.n.push(m,u,b);for(let _ of[a,l,c])this.c.push(_.r,_.g,_.b);this.u.push(s[0],s[1],r[0],r[1],o[0],o[1]);for(let _=0;_<3;_++)this.x.push(...this.cur)}}quad(e,t,n,s,r,o,a,l,c,h,f,d){this.tri(e,t,n,r,o,a,c,h,f),this.tri(e,n,s,r,a,l,c,f,d)}};function oy(i,e,t,n,s,r,o,a,l,c,h,f){let d=s+.6,p=s+3.2,x=(m,u)=>u.clone().multiplyScalar(.66+.34*Math.min(1,Math.max(0,(m-s)/8))),v=l?l.storey:3;for(let m=0;m<t.length;m++){let u=t[m],b=t[(m+1)%t.length],g=Math.hypot(b[0]-u[0],b[1]-u[1]);if(g<.05)continue;let _=r(u),D=r(b),C=Math.min(d,_),w=Math.min(d,D),M=l&&g>2.2?Math.max(1,Math.round(g/l.bay)):0,y=M||g/8,S=A=>(A-s)/v,E=(A,G,H)=>[A,G,H];e.quad(E(u[0],n,u[1]),E(b[0],n,b[1]),E(b[0],w,b[1]),E(u[0],C,u[1]),[0,0],[g/4,0],[g/4,.15],[0,.15],x(n,a),x(n,a),x(w,a),x(C,a));let P=c&&_>p&&D>p&&c(u,b),T=P?p:d;if(P&&h.quad(E(u[0],d,u[1]),E(b[0],d,b[1]),E(b[0],p,b[1]),E(u[0],p,u[1]),[0,.19],[y,.19],[y,1],[0,1],x(d,o),x(d,o),x(p,o),x(p,o)),M){let A=[-9,-9],G=0;for(let H of f){let L=b[0]-u[0],N=b[1]-u[1],k=((H[0]-u[0])*L+(H[1]-u[1])*N)/(g*g);G<2&&k>0&&k<1&&Math.abs((H[0]-u[0])*N-(H[1]-u[1])*L)/g<.4&&(A[G++]=Math.floor(k*M))}i.cur=[l.winW,l.winH,M,l.floors,l.type,l.frame,l.decor,l.seed,A[0],A[1]]}(_>T||D>T)&&i.quad(E(u[0],T,u[1]),E(b[0],T,b[1]),E(b[0],D,b[1]),E(u[0],_,u[1]),[0,S(T)],[y,S(T)],[y,S(D)],[0,S(_)],x(T,o),x(T,o),x(D,o),x(_,o)),i.cur=Kf}}function jf(i,e){let t=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=e(s),a=e(r);if(t.push(s),o*a<0){let l=o/(o-a);t.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return t}var ch=i=>i.map(([e,t])=>new Se(e,t));function ay(i,e){let t=["facade","plain","plinth","roof","shop"],n=Object.fromEntries(t.map(M=>[M,new hh])),s=new Set(["town hall","police","fire station","museum","company","tourist information","hotel","petrol station","post office"]),r=(i.places||[]).filter(M=>!s.has(M.k)),o=(M,y)=>r.some(S=>{let E=y[0]-M[0],P=y[1]-M[1],T=E*E+P*P||1,A=((S.x-M[0])*E+(S.z-M[1])*P)/T;return A>0&&A<1&&Math.hypot(S.x-M[0]-A*E,S.z-M[1]-A*P)<.5}),a=i.doors||[],l=[],c=[],[h,f]=i.spawn,d=new ze(8014909),p=new ze(9144191);for(let M of i.buildings){let y=new ze(M.w),S=new ze(M.c),E=y.clone().lerp(p,.6).multiplyScalar(.8),[P,T,A,G,H]=M.o,L=M.t-M.e,N=Math.cos(A),k=Math.sin(A),V=-k,Y=N,j=le=>(le[0]-P)*V+(le[1]-T)*Y,K=le=>(le[0]-P)*N+(le[1]-T)*k,W=kt(Math.round(P*31.7+T*117.3)),q=M.win?Wf(M,Math.hypot(P-h,T-f)<260,W):null;q?.style==="baroque"&&!M.wc&&y.setHex(Zf[Math.floor(W()*1e4)%Zf.length]),q?.wall&&y.setHex(q.wall);let ce=a.filter(le=>le[0]>M.o[0]-80&&le[0]<M.o[0]+80&&le[1]>M.o[1]-80&&le[1]<M.o[1]+80),z=M.s==="g",se=z?le=>M.e+L*Math.max(0,1-Math.abs(j(le))/G):()=>M.e;for(let le of M.r){oy(q?n.facade:n.plain,n.plinth,z?jf(le,j):le,M.b,M.g,se,y,E,q,q&&o,n.shop,ce);for(let ne=0;ne<le.length;ne++){let de=le[ne],B=le[(ne+1)%le.length];l.push(de[0],de[1],B[0],B[1],M.t)}}let Me=n.roof,me=le=>[K(le)/lh,Math.abs(j(le))*Math.hypot(1,L/G)/lh];if(z){let le=jf(M.r[0],j);for(let ne of[1,-1]){let de=le.filter(Te=>j(Te)*ne>=-1e-6);if(de.length<3)continue;let B=Te=>[Te[0],se(Te),Te[1]];for(let[Te,$,oe]of yn.triangulateShape(ch(de),[]))Me.tri(B(de[Te]),B(de[$]),B(de[oe]),me(de[Te]),me(de[$]),me(de[oe]),S)}}else if(M.s==="h"){let le=(ue,I,R)=>[P+N*ue+V*I,R,T+k*ue+Y*I],ne=Math.max(H-G,0),de=le(H,G,M.e),B=le(-H,G,M.e),Te=le(-H,-G,M.e),$=le(H,-G,M.e),oe=le(ne,0,M.t),X=le(-ne,0,M.t),Q=ue=>me([ue[0],ue[2]]);Me.quad(de,B,X,oe,Q(de),Q(B),Q(X),Q(oe),S,S,S,S),Me.quad(Te,$,oe,X,Q(Te),Q($),Q(oe),Q(X),S,S,S,S),Me.tri($,de,oe,Q($),Q(de),Q(oe),S),Me.tri(B,Te,X,Q(B),Q(Te),Q(X),S)}else if(M.s==="p"){let le=[P,M.t,T],ne=M.r[0];for(let de=0;de<ne.length;de++){let B=ne[de],Te=ne[(de+1)%ne.length];Me.tri([B[0],M.e,B[1]],[Te[0],M.e,Te[1]],le,[0,0],[1,0],[.5,L/lh],S)}}else{let le=M.r.flat(),ne=de=>[de[0]/6,de[1]/6];for(let[de,B,Te]of yn.triangulateShape(ch(M.r[0]),M.r.slice(1).map(ch)))n.plain.tri([le[de][0],M.t,le[de][1]],[le[B][0],M.t,le[B][1]],[le[Te][0],M.t,le[Te][1]],ne(le[de]),ne(le[B]),ne(le[Te]),S)}if((z||M.s==="h")&&M.win&&H*G<160&&L>1){let le=Math.abs(Math.sin(P*12.9898+T*78.233))%1,ne=H*.35*(le>.5?1:-1),de=G*.25,B=M.e+L*.6,Te=M.t+.8,$=.28,oe=(Q,ue,I)=>[P+N*(ne+Q)+V*(de+ue),I,T+k*(ne+Q)+Y*(de+ue)],X=[[-$,-$],[$,-$],[$,$],[-$,$]];for(let Q=0;Q<4;Q++){let[ue,I]=X[Q],[R,J]=X[(Q+1)%4];n.plain.quad(oe(ue,I,B),oe(R,J,B),oe(R,J,Te),oe(ue,I,Te),[0,0],[.1,0],[.1,.2],[0,.2],d,d,d,d)}n.plain.quad(oe(-$,-$,Te),oe($,-$,Te),oe($,$,Te),oe(-$,$,Te),[0,0],[.1,0],[.1,.1],[0,.1],d,d,d,d),le<.55&&c.push(oe(0,0,Te+.1))}}let x=new et,v=t.map(M=>n[M]),m=(M,y)=>{let S=new Float32Array(v.reduce((P,T)=>P+T[M].length,0)),E=0;for(let P of v)S.set(P[M],E),E+=P[M].length;return new lt(S,y)};x.setAttribute("position",m("p",3)),x.setAttribute("normal",m("n",3)),x.setAttribute("color",m("c",3)),x.setAttribute("uv",m("u",2));let u=m("x",10).array,b=new Float32Array(u.length*.4),g=new Float32Array(u.length*.4),_=new Float32Array(u.length*.2);for(let M=0,y=u.length/10;M<y;M++)b.set(u.subarray(M*10,M*10+4),M*4),g.set(u.subarray(M*10+4,M*10+8),M*4),_.set(u.subarray(M*10+8,M*10+10),M*2);x.setAttribute("fw",new lt(b,4)),x.setAttribute("fs",new lt(g,4)),x.setAttribute("fd",new lt(_,2));let D=0;v.forEach((M,y)=>{x.addGroup(D,M.p.length/3,y),D+=M.p.length/3});let C=M=>new $e({map:M,vertexColors:!0,side:pt}),w=new qe(x,[rn(Xf(e.plaster)),C(e.plaster),qi(C(e.plaster)),qi(C(e.tiles)),Mf(C(e.shop))]);return w.castShadow=w.receiveShadow=!0,{mesh:w,segs:l,chimneys:c}}function ly(i){let[e,t,n,s]=i.bounds,r=document.createElement("canvas");r.width=Math.round(n-e),r.height=Math.round(s-t);let o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,r.width,r.height),o.globalCompositeOperation="lighter",o.lineCap=o.lineJoin="round";let a=(h,f)=>{o.beginPath(),h.forEach(([d,p],x)=>o[x?"lineTo":"moveTo"](d-e,p-t)),f&&o.closePath()};o.fillStyle=o.strokeStyle="rgb(0,255,0)",o.lineWidth=36;for(let h of i.buildings)a(h.r[0],!0),o.fill(),o.stroke();for(let h of i.roads)o.strokeStyle=h.k==="stream"?"rgb(0,0,255)":"rgb(255,0,0)",o.lineWidth=h.w+(h.k==="stream"?1:.6),a(h.p,!1),o.stroke();for(let h of i.areas)o.fillStyle=h.s==="water"?"rgb(0,0,255)":"rgb(255,0,0)",a(h.r,!0),o.fill();o.fillStyle="rgb(255,0,0)";for(let h of i.buildings)a(h.r[0],!0),o.fill();let l=document.createElement("canvas");l.width=r.width,l.height=r.height;let c=l.getContext("2d");return c.filter="blur(1.2px)",c.drawImage(r,0,0),l}function cy(i,e,t,n,s){let[r,o,a,l]=i.bounds,c=e.w*e.h,h=new Float32Array(c*3),f=new Float32Array(c*2),d=new Uint32Array((e.w-1)*(e.h-1)*6);for(let E=0,P=0;E<e.h;E++)for(let T=0;T<e.w;T++,P++){let A=e.x0+T*e.dx,G=e.z0+E*e.dz;h[P*3]=A,h[P*3+1]=e.data[P],h[P*3+2]=G,f[P*2]=(A-r)/(a-r),f[P*2+1]=(l-G)/(l-o)}for(let E=0,P=0;E<e.h-1;E++)for(let T=0;T<e.w-1;T++){let A=E*e.w+T,G=A+1,H=A+e.w,L=H+1;d.set([A,H,G,G,H,L],P),P+=6}let p=new et;p.setAttribute("position",new lt(h,3)),p.setAttribute("uv",new lt(f,2)),p.setIndex(new lt(d,1)),p.computeVertexNormals();let x=t,v=s.capabilities.maxTextureSize;if(t.width>v){let E=document.createElement("canvas"),P=v/t.width;E.width=v,E.height=Math.floor(t.height*P),E.getContext("2d").drawImage(t,0,0,E.width,E.height),x=E}let m=new Nt(x);m.colorSpace=_t,m.anisotropy=s.capabilities.getMaxAnisotropy(),m.needsUpdate=!0;let u=new It(n);u.colorSpace=vn;let b=yf(),g=new $e({map:m});g.onBeforeCompile=E=>{E.uniforms.splatMap={value:u},E.uniforms.detailMap={value:b},E.uniforms.uWet=ot.uWet,E.uniforms.uSnow=ot.uSnow,E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = position;`),E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
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
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.95) * (0.9 + 0.2 * pat), uSnow * (1.0 - sp.b) * (1.0 - 0.4 * sp.r)); // snow cover, slushy on paving`)};let _=new qe(p,g);_.receiveShadow=!0;let D=i.hmin-5,C=[],w=[];for(let E=0;E<e.w;E++)w.push([E,0]);for(let E=1;E<e.h;E++)w.push([e.w-1,E]);for(let E=e.w-2;E>=0;E--)w.push([E,e.h-1]);for(let E=e.h-2;E>0;E--)w.push([0,E]);for(let E=0;E<w.length;E++){let[P,T]=w[E],[A,G]=w[(E+1)%w.length],H=[e.x0+P*e.dx,e.data[T*e.w+P],e.z0+T*e.dz],L=[e.x0+A*e.dx,e.data[G*e.w+A],e.z0+G*e.dz];C.push(...H,H[0],D,H[2],...L,...L,H[0],D,H[2],L[0],D,L[2])}let M=new et;M.setAttribute("position",new lt(Float32Array.from(C),3)),M.computeVertexNormals();let y=new $e({color:5595455,side:pt}),S=new qe(new sn(3e4,3e4).rotateX(-Math.PI/2),y);return S.position.y=D,[_,new qe(M,y),S]}function hy(i){let e=new Set(["castle","place_of_worship","museum","townhall","monastery","church","chapel","manor","ruins","attraction","viewpoint"]),t=new Set,n=[];for(let s of i.pois){if(!e.has(s.k)||t.has(s.n))continue;t.add(s.n);let r=document.createElement("canvas"),o=r.getContext("2d"),a="600 44px 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif";o.font=a;let l=Math.ceil(o.measureText(s.n).width)+40;r.width=l,r.height=72,o.font=a,o.fillStyle="rgba(20,24,22,0.72)",o.beginPath(),o.roundRect(0,0,l,72,10),o.fill(),o.fillStyle="#f3ead2",o.textBaseline="middle",o.fillText(s.n,20,38);let c=new It(r);c.colorSpace=_t;let h=new Ls(new Bi({map:c,depthTest:!1,transparent:!0,fog:!1}));h.scale.set(l/72*2.6,2.6,1),h.position.set(s.p[0],s.p[2]+16,s.p[1]),h.renderOrder=10,n.push(h)}return n}var Vs=["low","medium","high"];function Jf(i,e,t){let n=new Is,s=Vn(i.terrain.cm,Uint16Array),r={...i.terrain,data:Float32Array.from(s,N=>i.hmin+N/100)},o=(N,k)=>df(r,N,k),a=_f(n),l=a.sun,c=ly(i);n.add(...cy(i,r,e,c,t));let h=xf(t),f=vf(t),d=eh(t,[11,0,1,2].includes(new Date().getMonth())?"bare":!1),p=eh(t,!0),{mesh:x,segs:v,chimneys:m}=ay(i,h),u=ca(m);n.add(u.mesh);let b=Ef(i,o,f),g=wf(i,o),_=Rf(i,d,p),D=Cf(i,d),C=Pf(i,e,c,o),w=If(i,b.graph,o),M=Gf(i,o);n.add(...M.meshes);let y=hy(i),S=Bf(b.walk,i.spawn,o,M.seats),E=Hf(i.spawn,o),P=kf(i),T=Yf(i);n.add(...S.meshes,...E.meshes,...P.meshes,...T.meshes),n.add(x,...b.meshes,...g.meshes,..._.meshes,...D.meshes,C.mesh,...w.meshes,...y);let A="medium",G=N=>{A=N,t.setPixelRatio(Math.min(devicePixelRatio,N==="high"?2:N==="medium"?1.25:1)),l.castShadow=N!=="low";let k=N==="high"?4096:2048;l.shadow.mapSize.x!==k&&(l.shadow.map?.dispose(),l.shadow.map=null,l.shadow.mapSize.set(k,k)),C.mesh.visible=N!=="low"};G(A);let H=Float32Array.from([...v,...w.segs,...M.segs]);return w.parked.bind(H,v.length),{scene:n,groundAt:o,segs:H,update:(N,k,V,Y)=>{a.update(N,k,Y);let j=280/l.shadow.mapSize.x;l.target.position.set(Math.round(k.x/j)*j,k.y,Math.round(k.z/j)*j),l.position.copy(l.target.position).addScaledVector(a.st.lightDir,450);let K=ot.uWet.value,W=ot.uNight.value;for(let z of b.wetMaterials)z.color.setScalar(1-.35*K),z.roughness=.9-.72*K;g.update(W);let q=a.st.hour,ce=.35+.45*Math.max(Math.exp(-(((q-7.5)/2)**2)),Math.exp(-(((q-19)/2.5)**2)));u.update(N,k,ot.uWind.value,ce,1-W,innerHeight*t.getPixelRatio()*.71),_.update(k),D.update(k),A!=="low"&&(C.mesh.visible=k.y-o(k.x,k.z)<40&&ot.uSnow.value<.5,C.mesh.visible&&C.update(k)),w.update(N,V,W),S.update(N,V,{night:W,rain:Math.min(1,a.st.rain+a.st.snow*.4)}),E.update(N,V,Y),P.update(W),M.update(Y);for(let z of y)z.visible=z.position.distanceToSquared(k)<380*380},T:r,setQuality:G,quality:()=>A,env:a,cars:w,people:S,chimneys:m,smoke:u,counts:{trees:_.count,bushes:D.count,cars:w.count,traffic:w.traffic,people:S.count,dogs:S.dogs,lamps:i.lamps?Vn(i.lamps,Int16Array).length/3:0}}}function Qf(){let i=null,e,t,n,s,r,o,a=[],l=!1,c=0,h=()=>{if(i){i.state==="suspended"&&i.resume();return}let w=window.AudioContext||window.webkitAudioContext;if(!w)return;i=new w,e=i.createGain(),e.gain.value=l?0:.8,e.connect(i.destination);let M=i.createBuffer(1,i.sampleRate*2,i.sampleRate),y=M.getChannelData(0);for(let P=0;P<y.length;P++)y[P]=Math.random()*2-1;let S=()=>{let P=i.createBufferSource();return P.buffer=M,P.loop=!0,P.start(),P};n=i.createBiquadFilter(),n.type="bandpass",n.frequency.value=400,n.Q.value=.6,t=i.createGain(),t.gain.value=0,S().connect(n).connect(t).connect(e);let E=i.createBiquadFilter();E.type="highpass",E.frequency.value=1400,s=i.createGain(),s.gain.value=0,S().connect(E).connect(s).connect(e),o=i.createBiquadFilter(),o.type="lowpass",o.frequency.value=320,r=i.createGain(),r.gain.value=0,o.connect(r).connect(e),a=[55,83].map(P=>{let T=i.createOscillator();return T.type="sawtooth",T.frequency.value=P,T.connect(o),T.start(),T})},f=(w,M,y,S,E)=>{w.gain.setValueAtTime(1e-4,M),w.gain.exponentialRampToValueAtTime(y,M+S),w.gain.exponentialRampToValueAtTime(1e-4,M+S+E)},d=w=>{let M=i.currentTime,y=i.createBufferSource(),S=i.createBiquadFilter(),E=i.createGain();y.buffer=i.createBuffer(1,i.sampleRate*.08,i.sampleRate);let P=y.buffer.getChannelData(0);for(let T=0;T<P.length;T++)P[T]=(Math.random()*2-1)*(1-T/P.length);S.type="bandpass",S.frequency.value=w?700:1500+Math.random()*300,S.Q.value=1.2,f(E,M,w?.12:.18,.005,.07),y.connect(S).connect(E).connect(e),y.start(M)},p=w=>{if(!i)return;let M=i.currentTime;t.gain.setTargetAtTime(.025+w.wind*.11,M,.4),n.frequency.setTargetAtTime(280+w.wind*520,M,.6),s.gain.setTargetAtTime(w.rain*.22,M,.8);let y=w.drive!=null?1:Math.max(0,1-w.carDist/70);r.gain.setTargetAtTime(w.drive!=null?.05+w.drive*.05:y*y*.07,M,.2),o.frequency.setTargetAtTime(w.drive!=null?320+w.drive*700:320,M,.2),a.forEach((S,E)=>S.frequency.setTargetAtTime((E?83:55)*(w.drive!=null?.8+w.drive*1.6:1+y*.25),M,.3)),w.moving&&(c-=w.dt)<0&&(c=w.running?.32:.52,d(w.rain>.3))},x=()=>{if(!i)return;let w=i.currentTime;for(let M of[392,494]){let y=i.createOscillator(),S=i.createGain(),E=i.createBiquadFilter();y.type="square",y.frequency.value=M,E.type="lowpass",E.frequency.value=1800,S.gain.setValueAtTime(1e-4,w),S.gain.exponentialRampToValueAtTime(.05,w+.02),S.gain.setValueAtTime(.05,w+.35),S.gain.exponentialRampToValueAtTime(1e-4,w+.45),y.connect(E).connect(S).connect(e),y.start(w),y.stop(w+.5)}},v=()=>{if(!i)return;let w=i.currentTime,M=i.createOscillator(),y=i.createGain();M.frequency.setValueAtTime(90,w),M.frequency.exponentialRampToValueAtTime(40,w+.2),f(y,w,.25,.005,.25),M.connect(y).connect(e),M.start(w),M.stop(w+.3)},m=()=>{if(!i)return;let w=i.currentTime,M=.14,y=i.createBuffer(1,Math.floor(i.sampleRate*M),i.sampleRate),S=y.getChannelData(0);for(let A=0;A<S.length;A++)S[A]=(Math.random()*2-1)*(1-A/S.length);let E=i.createBufferSource(),P=i.createBiquadFilter(),T=i.createGain();E.buffer=y,P.type="lowpass",P.frequency.value=1500,f(T,w,.3,.002,M),E.connect(P).connect(T).connect(e),E.start(w),E.stop(w+M)},u=()=>{if(!i)return;let w=i.currentTime,M=.75,y=i.createBuffer(1,Math.floor(i.sampleRate*M),i.sampleRate),S=y.getChannelData(0),E=0;for(let G=0;G<S.length;G++)E=E*.94+(Math.random()*2-1)*.24,S[G]=E*(1-G/S.length);let P=i.createBufferSource(),T=i.createBiquadFilter(),A=i.createGain();P.buffer=y,T.type="lowpass",T.frequency.value=420,f(A,w,.65,.008,M),P.connect(T).connect(A).connect(e),P.start(w),P.stop(w+M)},b=w=>{if(!i)return;let M=i.currentTime,y=4,S=i.createBuffer(1,i.sampleRate*y,i.sampleRate),E=S.getChannelData(0),P=0;for(let H=0;H<E.length;H++)P=P*.985+(Math.random()*2-1)*.15,E[H]=P;let T=i.createBufferSource(),A=i.createBiquadFilter(),G=i.createGain();T.buffer=S,A.type="lowpass",A.frequency.value=160+w*220,G.gain.setValueAtTime(1e-4,M),G.gain.exponentialRampToValueAtTime(.5*w,M+.08+(1-w)*.5),G.gain.exponentialRampToValueAtTime(1e-4,M+y),T.connect(A).connect(G).connect(e),T.start(M)},g=()=>{if(i)for(let w of[0,.22]){let M=i.currentTime+w,y=i.createOscillator(),S=i.createGain(),E=i.createBiquadFilter();y.type="sawtooth",y.frequency.setValueAtTime(420,M),y.frequency.exponentialRampToValueAtTime(240,M+.12),E.type="bandpass",E.frequency.value=700,E.Q.value=2,f(S,M,.09,.01,.13),y.connect(E).connect(S).connect(e),y.start(M),y.stop(M+.2)}},_=null;return{start:h,update:p,toggle:()=>(l=!l,e&&(e.gain.value=l?0:.8),l),siren:w=>{if(!i||!!_===w)return;if(!w){let T=_;_=null,T.g.gain.setTargetAtTime(1e-4,i.currentTime,.08),setTimeout(()=>T.o.forEach(A=>A.stop()),500);return}let M=i.createOscillator(),y=i.createOscillator(),S=i.createGain(),E=i.createBiquadFilter(),P=i.createGain();M.type="sawtooth",M.frequency.value=900,y.type="triangle",y.frequency.value=.28,S.gain.value=380,y.connect(S).connect(M.frequency),E.type="lowpass",E.frequency.value=2200,P.gain.value=1e-4,P.gain.setTargetAtTime(.03,i.currentTime,.1),M.connect(E).connect(P).connect(e),M.start(),y.start(),_={o:[M,y],g:P}},horn:x,thud:v,gunshot:m,explosion:u,thunder:b,bark:g,muted:()=>l}}var Zi={grocery:{open:[7,19],items:[["Rohl\xEDk",4],["Chl\xE9b",45],["Ml\xE9ko",25],["M\xE1slo",55]]},supermarket:{open:[7,21],items:[["Ban\xE1ny 1 kg",35],["K\xE1va",160],["Rohl\xEDky 10 ks",40],["Jablka 1 kg",40]]},pharmacy:{open:[8,17],items:[["N\xE1plasti",60],["Vitam\xEDn C",120],["Pastilky",90]]},optician:{open:[9,17],items:[["\u010Cistic\xED sprej",90],["Pouzdro na br\xFDle",150]]},florist:{open:[8,17],items:[["R\u016F\u017Ee",50],["Kytice",250],["Kv\u011Btin\xE1\u010D",120]]},newsagent:{open:[6,17],items:[["Noviny",30],["Pohled",15],["\u010Casopis",69]]},chemist:{open:[8,19],items:[["M\xFDdlo",35],["Zubn\xED pasta",50],["\u0160ampon",90]]},"pet shop":{open:[9,17],items:[["Granule 1 kg",150],["Pamlsky",45],["M\xED\u010Dek",60]]},clothes:{open:[9,18],items:[["Pono\u017Eky",99],["Tri\u010Dko",199],["\u010Cepice",149]]},toys:{open:[9,17],items:[["Pexeso",99],["Puzzle",250],["Stavebnice",399]]},household:{open:[8,17],items:[["Hrnek",89],["Ut\u011Brky",59],["Sv\xED\u010Dka",49]]},bikes:{open:[9,17],items:[["Du\u0161e",150],["Zvonek",120],["Sv\u011Btlo",290]]},hardware:{open:[7,17],items:[["\u0160roubky",30],["\u0160t\u011Btec",45],["Barva 0,75 l",260]]},electrical:{open:[8,16],items:[["\u017D\xE1rovka",80],["Baterie 4 ks",99],["Prodlu\u017Eova\u010Dka",220]]},caf\u00E9:{open:[8,19],items:[["Espresso",45],["Cappuccino",59],["V\u011Btrn\xEDk",45]]},restaurant:{open:[11,22],items:[["Pol\xE9vka",49],["Hlavn\xED j\xEDdlo",169],["Limon\xE1da",45]]},"fast food":{open:[10,22],items:[["Kebab",129],["Hranolky",49],["Ayran",35]]},pub:{open:[10,23],items:[["Pivo 0,5 l",52],["Kofola",35],["Utopenec",65]]},"post office":{open:[8,17],items:[["Zn\xE1mka",26],["Ob\xE1lka",5],["Bal\xEDk",140]]}};var Yi=i=>`${i.toLocaleString("cs-CZ")} K\u010D`,$f=i=>`${i}:00`;function ed({city:i,toast:e,el:t,landmarks:n}){let s=i.places.filter(b=>Zi[b.k]),r="fulnek3d.life.v1",o={money:500,bag:[],day:-1,tasks:[],stats:{spent:0,earned:0,done:0}};try{Object.assign(o,JSON.parse(localStorage.getItem(r)||"{}"))}catch{}let a=()=>{try{localStorage.setItem(r,JSON.stringify(o))}catch{}},l=null,c=!1,h=Math.random,f=b=>{o.day=b;let g=s.slice().sort(()=>h()-.5),_=[];for(let C of g.slice(0,2)){let w=Zi[C.k].items[Math.floor(h()*Zi[C.k].items.length)];_.push({type:"buy",shop:C.n,item:w[0],x:C.x,z:C.z,done:!1})}let D=n[Math.floor(h()*n.length)];D&&_.push({type:"visit",place:D.n,x:D.x,z:D.z,done:!1}),o.tasks=_.concat(o.tasks.filter(C=>C.type==="deliver"&&!C.done)),a(),e("New day","Your errands are in the list on the left")},d=()=>{let b=o.tasks.filter(g=>g.done).length;t.list.innerHTML="";for(let g of o.tasks){let _=document.createElement("li");_.textContent=g.type==="buy"?`Buy ${g.item} at ${g.shop}`:g.type==="deliver"?`${g.got?"Bring":"Buy"} ${g.item} ${g.got?"to":"at "+g.shop+" for"} ${g.from}, ${g.addr}`:`Visit ${g.place}`,g.done&&(_.className="done"),t.list.append(_)}t.money.textContent=`${Yi(o.money)} \xB7 ${b}/${o.tasks.length} done`,l&&!c?(t.hint.hidden=!1,t.hint.textContent=`E \xB7 enter ${l.n}`):t.hint.hidden=!0},p=()=>{let b=o.tasks.filter(g=>g.type!=="deliver");b.length&&b.every(g=>g.done)&&!o.paid&&(o.money+=200,o.stats.earned+=200,o.paid=!0,a(),e("Errands done",`+${Yi(200)} pocket money \xB7 new list tomorrow`))},x=b=>{let g=Zi[l.k],_=b>=g.open[0]&&b<g.open[1];t.shop.innerHTML="";let D=document.createElement("h2");D.textContent=l.n;let C=document.createElement("p");C.textContent=`${l.k}${l.a?" \xB7 "+l.a:""} \xB7 open ${$f(g.open[0])}\u2013${$f(g.open[1])}`;let w=document.createElement("p");if(w.className="foot",w.textContent="Typical goods, game prices and hours \u2014 not this shop's real offer.",t.shop.append(D,C,w),_)g.items.forEach(([y,S],E)=>{let P=document.createElement("button");P.type="button",P.dataset.i=E;let T=document.createElement("kbd"),A=document.createElement("span"),G=document.createElement("span");T.textContent=E+1,A.textContent=y,G.textContent=Yi(S),P.append(T,A,G),P.addEventListener("click",()=>v(E,b)),t.shop.append(P)});else{let y=document.createElement("p");y.className="closed",y.textContent="Zav\u0159eno \xB7 closed right now",t.shop.append(y)}let M=document.createElement("p");M.className="foot",M.textContent=`Wallet ${Yi(o.money)} \xB7 E or Esc to leave`,t.shop.append(M)},v=(b,g)=>{let _=Zi[l.k],D=_.items[b];if(!D||g<_.open[0]||g>=_.open[1])return;if(o.money<D[1]){e(l.n,"Not enough money");return}o.money-=D[1],o.stats.spent+=D[1],o.bag.push(D[0]);let C=o.tasks.find(M=>!M.done&&M.type==="buy"&&M.shop===l.n&&M.item===D[0]),w=o.tasks.find(M=>!M.done&&M.type==="deliver"&&!M.got&&M.shop===l.n&&M.item===D[0]);C?(C.done=!0,o.stats.done++,e("Errand done",`${D[0]} from ${l.n}`)):w?(w.got=!0,e(`For ${w.from}`,`Now bring it to ${w.addr}`)):e(l.n,`Bought ${D[0]} \xB7 ${Yi(D[1])}`),a(),p(),x(g)};return{update:(b,g,_)=>{o.day!==_&&g>=6&&(o.paid=!1,f(_)),l=s.find(D=>Math.hypot(b.x-D.x,b.z-D.z)<7)||null,c&&!l&&(c=!1,t.shop.hidden=!0);for(let D of o.tasks)!D.done&&D.type==="visit"&&Math.hypot(b.x-D.x,b.z-D.z)<18&&(D.done=!0,o.stats.done++,e("Errand done",`Visited ${D.place}`),a(),p());for(let D of o.tasks)if(!D.done&&D.type==="deliver"&&D.got&&Math.hypot(b.x-D.x,b.z-D.z)<4){let C=o.bag.indexOf(D.item);C>=0&&o.bag.splice(C,1),D.done=!0,o.money+=D.pay,o.stats.earned+=D.pay,o.stats.done++,e(`${D.from} says thanks`,`+${Yi(D.pay)} for the ${D.item}`),a()}d()},key:(b,g)=>{if(c){if(b==="KeyE"||b==="Escape")return c=!1,t.shop.hidden=!0,!0;let _={Digit1:0,Digit2:1,Digit3:2,Digit4:3}[b];return _!=null?(v(_,g),!0):!1}return b==="KeyE"&&l?(c=!0,t.shop.hidden=!1,x(g),!0):!1},isOpen:()=>c,near:()=>l,shops:s,kc:Yi,tasks:()=>o.tasks,money:()=>o.money,bag:()=>o.bag,stats:()=>o.stats,resetStats:()=>{let b=o.stats;return o.stats={spent:0,earned:0,done:0},a(),b},add:b=>{o.tasks.push(b),a(),d()},earn:b=>{o.money+=b,o.stats.earned+=b,o.stats.done++,a(),d()},fine:b=>{let g=Math.min(o.money,Math.max(0,b));return o.money-=g,o.stats.spent+=g,a(),d(),g}}}var td=new O(0,1,0);function uy(){let i=[],e=(t,n,s=.022)=>{let r=new O(...t),o=new O(...n).sub(r),a=o.length();i.push(new vt(s,s,a,6).translate(0,a/2,0).applyQuaternion(new ft().setFromUnitVectors(td,o.normalize())).translate(...t))};for(let t of[.52,-.52])i.push(new Ns(.33,.025,6,20).translate(t,.34,0));return e([-.52,.34,0],[-.05,.36,0]),e([-.05,.36,0],[-.15,.82,0]),e([-.15,.82,0],[.38,.8,0]),e([-.05,.36,0],[.4,.74,0]),e([.52,.34,0],[.4,.95,0]),e([-.52,.34,0],[-.15,.82,0]),e([.4,.98,-.28],[.4,.98,.28],.018),i.push(new je(.24,.05,.12).translate(-.17,.88,0)),i.reduce((t,n)=>{let s=n.index?n.toNonIndexed():n;return s.deleteAttribute("uv"),t.push(s),t},[])}function nd({world:i,city:e,groundAt:t,camera:n,scene:s,audio:r,fleet:o=[]}){let a=i.cars,l=a.parked,c=Pr(),h=rn(new Kt({roughness:.35,metalness:.4})),f=new Ct;f.add(new qe(c.body,h),new qe(c.detail,rn(new Kt({vertexColors:!0,roughness:.15,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1}))),new qe(c.lamps,new xt({vertexColors:!0}))),f.children.forEach(L=>L.castShadow=L.receiveShadow=!0),f.visible=!1,s.add(f);let d=new qe(new sn(12,5).rotateX(-Math.PI/2),new xt({color:16773324,transparent:!0,opacity:0,blending:Mn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));{let L=document.createElement("canvas");L.width=128,L.height=64;let N=L.getContext("2d"),k=N.createRadialGradient(16,32,2,40,32,72);k.addColorStop(0,"rgba(255,255,255,0.95)"),k.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=k,N.fillRect(0,0,128,64),d.material.map=new It(L)}d.visible=!1,s.add(d);let p=new $e({color:2841978}),x=uy(),v=[],m=(L,N)=>{let k=e.places.find(W=>W.n===L);if(!k)return;let V=Math.sin(k.yaw),Y=Math.cos(k.yaw),j=Math.cos(k.yaw),K=-Math.sin(k.yaw);for(let W=0;W<N;W++){let q=k.x+V*1.6+j*(W-(N-1)/2)*.8,ce=k.z+Y*1.6+K*(W-(N-1)/2)*.8;u(q,ce,k.yaw,W)}},u=(L,N,k,V)=>{let Y=new Ct;x.forEach(j=>Y.add(new qe(j,V%2?p:new $e({color:[9182236,3033651,1842464][V%3]})))),Y.position.set(L,t(L,N),N),Y.rotation.y=k,Y.rotation.z=0,Y.children.forEach(j=>j.castShadow=!0),s.add(Y),v.push(Y)};m("Cyklo Ko\u0161\xE1rek",3),m("Informa\u010Dn\xED centrum Fulnek",2),m("Penny",2),m("Hotel Amos",2);let b=new Ct;b.add(new qe(new vt(.014,.014,.58,8).rotateZ(Math.PI/2),p),new qe(new vt(.02,.02,.3,8),p).translateY(-.15));for(let L of[-1,1])b.add(new qe(new vt(.02,.02,.12,8).rotateZ(Math.PI/2),new $e({color:1579034})).translateX(L*.3));b.position.set(0,-.3,-.62),b.visible=!1,n.add(b);let g={mode:"walk",i:-1,bike:null,x:0,z:0,y:0,yaw:0,v:0,steer:0,pitch:0,roll:0,cam:0,camPos:new O,orbit:0,orbitT:0,crank:0},_=(L,N)=>{let k=-1,V=3.2;for(let Y=0;Y<l.n;Y++){let j=l.get(Y),K=Math.hypot(j.x-L,j.z-N);K<V&&(V=K,k=Y)}return k},D=(L,N)=>v.find(k=>Math.hypot(k.position.x-L,k.position.z-N)<2.2)||null,C=(L,N)=>o.find(k=>{let V=Math.cos(k.yaw),Y=-Math.sin(k.yaw),j=Math.max(-k.half,Math.min(k.half,(L-k.x)*V+(N-k.z)*Y));return Math.hypot(L-k.x-V*j,N-k.z-Y*j)<k.w+1.6})||null,w=L=>{g.svc=null;let N=C(L.x,L.z);if(N)return Object.assign(g,{mode:"car",svc:N,x:N.x,z:N.z,yaw:N.yaw,v:0,steer:0,orbit:0}),g.camPos.set(N.x-Math.cos(N.yaw)*N.cam,t(N.x,N.z)+3,N.z+Math.sin(N.yaw)*N.cam),"service";let k=D(L.x,L.z);if(k)return Object.assign(g,{mode:"bike",bike:k,x:k.position.x,z:k.position.z,yaw:k.rotation.y,v:0}),k.visible=!1,b.visible=!0,"bike";let V=_(L.x,L.z);if(V<0)return null;let Y=l.get(V);return l.hide(V),h.color.setHex(Y.paint),f.scale.set(Y.sx,Y.sy,1),Object.assign(g,{mode:"car",i:V,x:Y.x,z:Y.z,yaw:Y.yaw,v:0,steer:0,orbit:0}),g.camPos.set(Y.x-Math.cos(Y.yaw)*7,t(Y.x,Y.z)+3,Y.z+Math.sin(Y.yaw)*7),f.visible=!0,"car"},M=L=>{if(Math.abs(g.v)>3)return!1;let N=-Math.sin(g.yaw),k=-Math.cos(g.yaw);return g.svc?(d.visible=!1,L.set(g.x+N*(g.svc.w+1),0,g.z+k*(g.svc.w+1))):g.mode==="car"?(l.place(g.i,g.x,g.z,g.yaw),f.visible=!1,d.visible=!1,L.set(g.x+N*1.9,0,g.z+k*1.9)):(g.bike.position.set(g.x,t(g.x,g.z),g.z),g.bike.rotation.y=g.yaw,g.bike.visible=!0,b.visible=!1,L.set(g.x+N*.8,0,g.z+k*.8)),L.y=t(L.x,L.z),g.mode="walk",g.v=0,!0},y=i.people,S=(L,N,k,V,Y,j)=>{let K=Math.cos(g.yaw),W=-Math.sin(g.yaw),q=g.x,ce=g.z;for(let z of Y){let se=g.x+K*z,Me=g.z+W*z,me=(le,ne,de)=>{let B=se-le,Te=Me-ne,$=Math.hypot(B,Te);if($<de&&$>1e-6){let oe=de-$;g.x+=B/$*oe,g.z+=Te/$*oe,se+=B/$*oe,Me+=Te/$*oe}};L(se,Me,le=>{let ne=le*5;g.y+.5<=N[ne+4]&&me(...k(se,Me,N[ne],N[ne+1],N[ne+2],N[ne+3]),V)});for(let le of a.agentPos)le!==g.svc?.cap&&Math.abs(le[6]-g.y)<3&&me(...k(se,Me,le[0]-le[3]*le[5],le[1]-le[4]*le[5],le[0]+le[3]*le[5],le[1]+le[4]*le[5]),V+le[2]);for(let le=0;le<y.count;le++){let ne=y.person(le);!ne.vis||Math.hypot(ne.cx-se,ne.cz-Me)>=V+.3||(Math.abs(g.v)>3&&!ne.kid?y.hit(le,g.x,g.z)&&(g.v*=.75,j?.(ne.cx,ne.cz)):me(ne.cx,ne.cz,V+.3))}}return[g.x-q,g.z-ce]},E=(L,N,k)=>{if(g.mode==="walk")return;let V=g.mode==="bike",{throttle:Y,brake:j,steer:K,hand:W}=N,q=g.svc,ce=V?8.5:q?q.maxV:24,z=V?2.2:q?q.acc:4.6,se=V?0:5,Me=Math.cos(g.yaw),me=-Math.sin(g.yaw),le=V?.55:q?q.half*.7:1.6,ne=t(g.x+Me*le,g.z+me*le),de=t(g.x-Me*le,g.z-me*le);g.pitch=Math.atan2(ne-de,le*2);let B=-9.8*Math.sin(g.pitch)*(V?.6:.9);Y&&(B+=g.v<-.3?9:z*(1-Math.max(0,g.v)/ce)),j&&(B+=g.v>.3?-9:-se*(1+g.v/se)*(V?0:1)),W&&(B-=Math.sign(g.v)*7),B-=g.v*(V?.12:.08)+Math.sign(g.v)*(Y?0:.6),g.v+=B*L,!Y&&!j&&Math.abs(g.v)<.25&&Math.abs(g.pitch)<.12&&(g.v=0),g.v=Math.max(V?0:-se,Math.min(ce,g.v));let Te=(V?.7:.55)/(1+Math.abs(g.v)/(V?10:12));g.steer+=(K*Te-g.steer)*Math.min(1,L*6),g.yaw+=g.v/(V?1.05:2.7)*Math.tan(g.steer)*L*(W&&!V?1.6:1),g.x+=Math.cos(g.yaw)*g.v*L,g.z-=Math.sin(g.yaw)*g.v*L,g.y=t(g.x,g.z);let $=q?q.half-q.w:1.3,oe=q?Math.ceil(2*$/q.w)+1:3,[X,Q]=S(k.nearWalls,k.segs,k.closest,V?.45:q?q.w+.05:.95,V?[0]:Array.from({length:oe},(ae,Z)=>-$+2*$*Z/(oe-1)),k.onRunOver),ue=Math.hypot(X,Q);if(g.hit=ue>1e-4,g.hit){let ae=Math.max(0,-Math.sign(g.v)*((Math.cos(g.yaw)*X-Math.sin(g.yaw)*Q)/ue));ae>.5&&Math.abs(g.v)>4&&!V&&r.thud?.(),g.v*=1-.85*ae}let[I,R,J,ee]=e.bounds;g.x=Math.min(Math.max(g.x,I+3),J-3),g.z=Math.min(Math.max(g.z,R+3),ee-3),g.roll+=((V?-g.steer*Math.min(1,g.v/4)*.5:g.steer*g.v*.012)-g.roll)*Math.min(1,L*5),g.crank+=g.v*L},P=new ft,T=new ft,A=new O,G=new O;return{st:g,step:E,view:(L,N,k,V)=>{if(g.mode==="walk")return!1;if(g.mode==="bike"){let me=Math.sin(g.crank*2.4)*.025*Math.min(1,g.v/3);return n.position.set(g.x,g.y+1.58+me,g.z),n.rotation.set(V,g.yaw-Math.PI/2+k,g.roll,"YXZ"),!0}let Y=g.svc;Y?Y.pose(g.x,g.z,g.yaw,g.pitch,g.roll):(f.position.set(g.x,g.y-.02,g.z),f.quaternion.setFromAxisAngle(td,g.yaw).multiply(T.setFromAxisAngle(G.set(0,0,1),g.pitch)).multiply(P.setFromAxisAngle(G.set(1,0,0),g.roll)));let j=Math.cos(g.yaw),K=-Math.sin(g.yaw);if(d.visible=N>.02,d.material.opacity=N*.55,d.position.set(g.x+j*7.5,t(g.x+j*7.5,g.z+K*7.5)+.12,g.z+K*7.5),d.rotation.y=g.yaw,g.cam===1){let me=Y?Y.half-1:1.25;return n.position.set(g.x+j*me,g.y+(Y?Y.eye:1.3)+Math.sin(g.pitch)*me,g.z+K*me),n.rotation.set(g.pitch*.8+V,g.yaw-Math.PI/2+k,0,"YXZ"),!0}let W=g.yaw+Math.PI+k,q=(Y?Y.cam:7)+Math.max(0,g.v)*.08,ce=Y?Y.eye-1.3:0,z=g.x+Math.cos(W)*q,se=g.z-Math.sin(W)*q,Me=Math.max(t(z,se)+1.2,g.y+2.6+ce-V*4);return G.set(z,Me,se),g.camPos.distanceToSquared(G)>900?g.camPos.copy(G):g.camPos.lerp(G,1-Math.exp(-L*5)),n.position.copy(g.camPos),n.lookAt(A.set(g.x+j*2.5,g.y+1.2+ce,g.z+K*2.5)),!0},enter:w,exit:M,toggleCam:()=>{g.cam=(g.cam+1)%2},nearHint:L=>C(L.x,L.z)?`E \xB7 drive the ${C(L.x,L.z).name.toLowerCase()}`:D(L.x,L.z)?"E \xB7 ride the bike":_(L.x,L.z)>=0?"E \xB7 drive this car":"",speed:()=>Math.abs(g.v)*3.6}}var fy=["na sever","na severov\xFDchod","na v\xFDchod","na jihov\xFDchod","na jih","na jihoz\xE1pad","na z\xE1pad","na severoz\xE1pad"],dy=["north","north-east","east","south-east","south","south-west","west","north-west"],id={clear:["Dneska je ale kr\xE1sn\u011B.","Lovely day today."],cloudy:["Trochu se zatahuje.","It's clouding over a bit."],overcast:["\u0160edivo, ale aspo\u0148 nepr\u0161\xED.","Grey, but at least it's dry."],rain:["Zase pr\u0161\xED. Bez de\u0161tn\xEDku ani r\xE1nu.","Raining again. Don't go out without an umbrella."],storm:["Sly\u0161el jste to h\u0159m\u011Bn\xED? Rad\u0161i bych \u0161el dom\u016F.","Hear that thunder? I'd rather head home."],fog:["Ta mlha! Skoro nevid\xEDm na z\xE1mek.","This fog! I can hardly see the castle."],snow:["Sn\u011B\u017E\xED! D\u011Bti budou m\xEDt radost.","It's snowing! The kids will love it."]},py=[["V\xEDte, \u017Ee tady ve Fulneku p\u016Fsobil Jan Amos Komensk\xFD? M\xE1 tu pam\xE1tn\xEDk.","Did you know Comenius worked here in Fulnek? There's a memorial to him."],["Ze z\xE1mku je hezk\xFD v\xFDhled na cel\xE9 m\u011Bsto.","There's a lovely view over the whole town from the castle."],["Kostel Nejsv\u011Bt\u011Bj\u0161\xED Trojice je jedna z dominant Fulneku.","The Holy Trinity church is one of Fulnek's landmarks."],["Kousek odsud vedla zemsk\xE1 hranice mezi Moravou a Slezskem.","The old border between Moravia and Silesia ran close to here."],["Na n\xE1m\u011Bst\xED stoj\xED sloup Nejsv\u011Bt\u011Bj\u0161\xED Trojice se sochami sv\u011Btc\u016F.","On the square stands the Holy Trinity column with its saints."],["Ve Fulneku je i b\xFDval\xFD kapuc\xEDnsk\xFD kl\xE1\u0161ter, zajd\u011Bte se pod\xEDvat.","There's a former Capuchin monastery in Fulnek too, go and have a look."],["V p\xE1tek jdu s kamar\xE1dy na pivo.","On Friday I'm off for a beer with friends."],["N\xE1kupy d\u011Bl\xE1m na n\xE1m\u011Bst\xED, m\xE1m to bl\xEDzko.","I do my shopping on the square, it's close by."]],my=[["V zim\u011B to tu klou\u017Ee, d\xE1vejte pozor.","It gets slippery in winter, watch your step."],["Kone\u010Dn\u011B jaro, v\u0161echno kvete.","Spring at last, everything's in bloom."],["V l\xE9t\u011B tu lidi ve\u010Der sed\xED na lavi\u010Dk\xE1ch.","On summer evenings people sit out on the benches."],["List\xED u\u017E \u017Eloutne, podzim je tady.","The leaves are turning, autumn is here."]],gy=[["Jdu za kamar\xE1dy na h\u0159i\u0161t\u011B!","Off to the playground with my friends!"],["M\xE1te psa? J\xE1 bych cht\u011Bl \u0161t\u011Bn\u011B.","Have you got a dog? I want a puppy."],["Dneska jsme ve \u0161kole psali dikt\xE1t.","We had a dictation at school today."]],ha=["Rex","B\xE1ra","Ben","A\u0161a","Max","Bob\xEDk"],Ir=i=>i[Math.floor(Math.random()*i.length)],xy={Kofola:"kofolu",K\u00E1va:"k\xE1vu",Pol\u00E9vka:"pol\xE9vku",Limon\u00E1da:"limon\xE1du",Zn\u00E1mka:"zn\xE1mku",Ob\u00E1lka:"ob\xE1lku",Sv\u00ED\u010Dka:"sv\xED\u010Dku",\u010Cepice:"\u010Depici",Du\u0161e:"du\u0161i","Barva 0,75 l":"barvu 0,75 l",\u017D\u00E1rovka:"\u017E\xE1rovku",Prodlu\u017Eova\u010Dka:"prodlu\u017Eova\u010Dku","Zubn\xED pasta":"zubn\xED pastu",R\u016F\u017Ee:"r\u016F\u017Ei",Kytice:"kytici",Stavebnice:"stavebnici",Utopenec:"utopence",\u0160unka:"\u0161unku",Klob\u00E1sa:"klob\xE1su"},vy=i=>xy[i]||i.charAt(0).toLowerCase()+i.slice(1);function sd({city:i,world:e,errands:t,el:n,toast:s,setTarget:r,undiscovered:o}){let a=e.people,l=e.env,c=-1,h=null,f=new Set,d=(M,y,S,E)=>{let P=Math.atan2(S-M,-(E-y));return Math.round(P/(Math.PI/4)%8+8)%8},p=(M,y)=>{let S=60,E="";for(let P of i.roads)if(P.n&&P.k!=="stream")for(let T=1;T<P.p.length;T++){let[A,G]=P.p[T-1],[H,L]=P.p[T],N=H-A,k=L-G,V=N*N+k*k||1,Y=Math.max(0,Math.min(1,((M-A)*N+(y-G)*k)/V)),j=Math.hypot(M-A-Y*N,y-G-Y*k);j<S&&(S=j,E=P.n)}return E},x=(M,y,S)=>{n.innerHTML="";let E=document.createElement("h2");E.textContent=M;let P=document.createElement("p");P.className="say",P.textContent=`\u201E${y[0]}\u201C`;let T=document.createElement("p");T.className="en",T.textContent=y[1],n.append(E,P,T),h=S,S.forEach(([G,H],L)=>{let N=document.createElement("button");N.type="button";let k=document.createElement("kbd"),V=document.createElement("span");k.textContent=L+1,V.textContent=G,N.append(k,V,document.createElement("span")),N.addEventListener("click",H),n.append(N)});let A=document.createElement("p");A.className="foot",A.textContent="1\u20134 choose \xB7 E or Esc to leave",n.append(A),n.hidden=!1},v=()=>a.person(c),m=()=>{let M=v(),y=l.st.hour,S=l.weather(),E=M.kid?"Ahoj!":y<9?"Dobr\xE9 r\xE1no!":y<18?"Dobr\xFD den!":"Dobr\xFD ve\u010Der!",P=M.kid?"Hi!":y<9?"Good morning!":y<18?"Good afternoon!":"Good evening!",T=y>=22||y<5?["U\u017E je pozd\u011B, jdu dom\u016F.","It's late, I'm heading home."]:id[S]||id.clear;return[`${E} ${T[0]}`,`${P} ${T[1]}`]},u=M=>x(v().name,M||m(),[["Ask the way",g],["Chat",b],["Need a hand?",D],["Goodbye",C]]),b=()=>{let M=v(),y=l.st.month,S=M.kid?Ir(gy):M.dog&&Math.random()<.4?[`To je ${ha[c%ha.length]}. Nekou\u0161e, nebojte.`,`This is ${ha[c%ha.length]}. Doesn't bite, don't worry.`]:Math.random()<.25?my[[0,0,1,1,1,2,2,2,3,3,3,0][y]]:Ir(py);u(S)},g=()=>{let M=v(),y=[];for(let E of t.tasks())E.done||y.length>=3||(E.type==="deliver"?y.push(E.got?[E.addr,E.x,E.z]:[E.shop,E.sx,E.sz]):E.type==="buy"&&E.x!=null?y.push([E.shop,E.x,E.z]):E.type==="visit"&&y.push([E.place,E.x,E.z]));let S=o(M.cx,M.cz);if(S&&y.push([`Something worth seeing (${S.n})`,S.x,S.z,S.n]),!y.length){u(["Kam pot\u0159ebujete? Tady na n\xE1m\u011Bst\xED je v\u0161echno bl\xEDzko.","Where to? Everything's close to the square here."]);return}x(M.name,["Kam to bude?","Where are you headed?"],y.slice(0,3).map(([E,P,T,A])=>[E,()=>_(A||E,P,T)]).concat([["Never mind",()=>u()]]))},_=(M,y,S)=>{let E=v(),P=Math.max(50,Math.round(Math.hypot(y-E.cx,S-E.cz)/50)*50),T=d(E.cx,E.cz,y,S),A=p(y,S);r(y,S,M);let G=P.toLocaleString("cs-CZ");u(P<=60?[`${M}? To je hned tady!`,`${M}? It's right here!`]:[`${M}? Jd\u011Bte ${fy[T]}, je to asi ${G} metr\u016F${A?`, ulice ${A}`:""}.`,`${M}? Head ${dy[T]}, about ${G} m${A?`, on ${A}`:""}. (Marked on your map.)`])},D=()=>{let M=v(),y=t.tasks().filter(L=>L.type==="deliver"&&!L.done).length;if(M.kid){u(["J\xE1 nic nepot\u0159ebuju, d\u011Bkuju!","I don't need anything, thanks!"]);return}if(f.has(c)){u(["D\u011Bkuju, zat\xEDm nic nepot\u0159ebuju.","Thanks, nothing for now."]);return}if(y>=3){u(["Vid\xEDm, \u017Ee m\xE1te pln\xE9 ruce. N\u011Bkdy jindy!","I can see your hands are full. Another time!"]);return}let S=t.shops.filter(L=>Math.hypot(L.x-M.cx,L.z-M.cz)<900),E=(i.doors||[]).filter(L=>Math.hypot(L[0]-M.cx,L[1]-M.cz)<450);if(!S.length||!E.length){u(["Ani ne, ale d\u011Bkuju.","Not really, but thank you."]);return}let P=Ir(S),T=Ir(Zi[P.k].items),A=Ir(E),G=`${A[5]} ${A[3]}`,H=T[1]+40+Math.floor(Math.random()*9)*10;f.add(c),t.add({type:"deliver",item:T[0],shop:P.n,sx:P.x,sz:P.z,addr:G,x:A[0],z:A[1],pay:H,from:M.name,done:!1,got:!1}),r(P.x,P.z,P.n),u([`Mohl byste mi pros\xEDm koupit ${vy(T[0])} v obchod\u011B ${P.n}? Bydl\xEDm na adrese ${G}. Pen\xEDze v\xE1m vr\xE1t\xEDm a n\u011Bco p\u0159id\xE1m.`,`Could you buy me ${T[0]} at ${P.n}? I live at ${G}. I'll pay you back with a bit extra (${t.kc(H)}).`]),s("New favour",`${T[0]} from ${P.n} to ${G}`)},C=()=>{let M=v();s(M.name,M.kid?"Ahoj!":"Na shledanou!"),w()},w=()=>{c>=0&&a.hold(c,null),c=-1,h=null,n.hidden=!0};return{isOpen:()=>c>=0,nearName:M=>{let y=a.nearest(M.x,M.z,2.6);return y>=0?a.person(y).name:""},start:M=>{let y=a.nearest(M.x,M.z,2.6);return y<0?!1:(c=y,a.hold(y,[M.x,M.z]),u(),!0)},key:M=>{if(c<0)return!1;if(M==="KeyE"||M==="Escape")return w(),!0;let y={Digit1:0,Digit2:1,Digit3:2,Digit4:3}[M];return y!=null&&h&&h[y]?(h[y][1](),!0):!1},update:M=>{c>=0&&Math.hypot(v().cx-M.x,v().cz-M.z)>5&&w()},close:w}}var uh=5,zn=[{name:"PISTOL",clip:12,reserve:60,delay:.24,damage:1,range:90,spread:0,rays:1,color:2435630},{name:"SHOTGUN",clip:8,reserve:40,delay:.72,damage:1,range:38,spread:.055,rays:8,color:4798765},{name:"SMG",clip:30,reserve:180,delay:.095,damage:1,range:65,spread:.012,rays:1,color:2636340},{name:"RIFLE",clip:24,reserve:144,delay:.19,damage:2,range:145,spread:.004,rays:1,color:3490874},{name:"ROCKET",clip:1,reserve:8,delay:1.15,damage:8,range:105,spread:0,rays:1,color:5659468,explosive:!0}];function rd(i,e,t,n,s){let r=Math.hypot(n.x,n.z);if(!i||r<1e-4)return s;let o=s;for(let a=0;a<=s*r+8;a+=8)i(t.x+n.x/r*a,t.z+n.z/r*a,l=>{l*=5;let c=e[l+2]-e[l],h=e[l+3]-e[l+1],f=n.x*h-n.z*c;if(Math.abs(f)<1e-9)return;let d=e[l]-t.x,p=e[l+1]-t.z,x=(d*h-p*c)/f,v=(d*n.z-p*n.x)/f;x>0&&x<o&&v>=0&&v<=1&&t.y+n.y*x<e[l+4]&&(o=x)});return o}function od(i,e,t,n,s,r,o){let a=Math.max(-r,Math.min(r,(i.x-e)*n+(i.z-t)*s)),l=i.x-e-n*a,c=i.z-t-s*a,h=Math.hypot(l,c);return h>=o||h<1e-6?!1:(i.x+=l/h*(o-h),i.z+=c/h*(o-h),!0)}function yy(i,e,t){let n=new Ct,s=new $e({color:e.color}),r=new $e({color:1514269}),o=new $e({color:6638129}),a=(f,d,p,x,v)=>{let m=new qe(f,d);return m.position.set(p,x,v),n.add(m),m},l=t===4?1.65:t===1?1.2:t===3?1.35:1;a(new je(.13*l,.15*l,.38*l),s,0,0,0),a(new je(.095*l,.2*l,.13*l),t===0||t===1||t===3?o:r,0,-.14*l,.085*l).rotation.x=-.25,a(new vt(t===4?.075:.034,t===4?.075:.034,t===4?.64:.36,10).rotateX(Math.PI/2),t===4?r:s,0,.005,t===4?-.4:-.25),t===1&&a(new je(.085,.09,.22),o,0,-.09,.01),t===2&&a(new je(.105,.24,.11),r,0,-.18,-.03),t===3&&(a(new je(.1,.24,.16),r,0,-.15,.16),a(new vt(.035,.035,.32,8).rotateX(Math.PI/2),r,0,.11,-.08)),t===4&&(a(new vt(.105,.105,.35,10).rotateZ(Math.PI/2),r,0,-.07,.11),a(new je(.1,.1,.3),s,0,.11,-.08)),t!==4&&a(new je(.035,.045,.07),r,0,.095,-.08);let c=new qe(new Et(t===4?.18:.075,8,6),new xt({color:t===4?16739110:16761180}));c.position.set(0,.005,t===4?-.79:-.36),c.visible=!1,n.add(c);let h=new Xi(16753974,0,6);return h.position.copy(c.position),n.add(h),n.position.set(.28,-.25,-.52),n.rotation.set(-.04,-.04,0),i.add(n),{root:n,flash:c,light:h}}function My(){let i=new Ct,e=new $e({color:1587029}),t=new $e({color:1515562}),n=new $e({color:13211250}),s=new xt({color:15777109}),r=(a,l,c,h,f)=>{let d=new qe(a,l);return d.position.set(c,h,f),d.castShadow=!0,i.add(d),d};r(new Ei(.24,.48,3,8),e,0,1.04,0),r(new je(.34,.68,.34),t,0,.39,0),r(new Et(.19,10,8),n,0,1.67,0),r(new vt(.2,.2,.09,8),e,0,1.84,0),r(new hn(.16,.1,8),e,0,1.91,0),r(new je(.08,.12,.035),s,.1,1.1,.215),r(new je(.09,.34,.09),t,.25,1.06,.04).rotation.x=-.25;let o=new Ct;o.position.y=2.02;for(let[a,l]of[[-.11,16724016],[.11,3180031]]){let c=new qe(new je(.13,.08,.12),new xt({color:l}));c.position.x=a,o.add(c)}return i.add(o),{group:i,beacon:o}}function Lr(i){let e=new Ct,t=new $e({color:2505794}),n=new xt({color:8108228}),s=new $e({color:1778984}),r=new xt({color:15746110}),o=(a,l,c,h,f,d=e)=>{let p=new qe(a,l);return p.position.set(c,h,f),p.castShadow=!0,d.add(p),p};if(i==="helicopter"){o(new Et(1.05,12,8),t,0,0,0).scale.set(1.1,.75,1.5),o(new Et(.74,12,8),n,0,.13,-.76).scale.set(1.05,.7,.65),o(new vt(.12,.22,4.2,8),t,0,.12,2.45).rotation.x=Math.PI/2,o(new je(1.3,.1,.65),t,0,.13,4.4),o(new Et(.14,8,6),r,0,.55,4.4);let a=new Ct;a.position.y=.9,e.add(a);for(let h=0;h<4;h++){let f=o(new je(.24,.035,7.6),s,0,0,0,a);f.rotation.y=h*Math.PI/2}let l=new Ct;l.position.set(0,.22,4.45),e.add(l);for(let h=0;h<3;h++){let f=o(new je(.09,1.35,.12),s,0,0,0,l);f.rotation.z=h*Math.PI/3}let c=new Jo(16773583,32,70,Math.PI/8,.65);return c.position.set(0,-.15,-.7),c.target.position.set(0,-8,-14),e.add(c,c.target),{group:e,rotors:[a,l]}}return o(new hn(.82,6.4,8).rotateX(-Math.PI/2),t,0,0,0),o(new je(7.4,.16,1.5),t,0,0,.4),o(new je(2.4,.12,.95),t,0,.3,2.1),o(new Et(.45,10,8),n,0,.16,-.65).scale.set(1.35,.65,.7),o(new je(.16,1.2,.95),t,0,.56,2.15),e.scale.setScalar(2.25),{group:e,rotors:[]}}function ad({camera:i,scene:e,people:t,groundAt:n,wantedEl:s,weaponEl:r,toast:o,audio:a,onArrest:l}){let c=zn.map((X,Q)=>yy(i,X,Q)),h=new $o,f=new O,d=new O,p=new O,x=new O,v=zn.map(X=>X.clip),m=zn.map(X=>X.reserve),u=[],b=[],g=[],_=[],D=[null,null],C=(X,Q)=>{let ue=Q.clone().sub(X),I=ue.length();return I<.001||rd(D[0],D[1],X,ue.divideScalar(I),I)>=I},w=!1,M=0,y=0,S=0,E=0,P=0,T=0,A=!1,G=0,H=null,L=null,N=0,k=0,V=-1,Y=()=>{s.hidden=y===0,s.textContent="\u2605".repeat(y)+"\u2606".repeat(uh-y),s.setAttribute("aria-label",`Wanted level ${y} of ${uh}`)},j=(X=1)=>{let Q=y;y=Math.min(uh,Math.max(1,y+X)),A=!1,G=0,T=Math.min(T,1),Y(),y>Q&&o("Wanted",`${"\u2605".repeat(y)} \xB7 Police are looking for you`)},K=()=>c[M],W=X=>{for(let[Q,ue]of c.entries())ue.root.visible=w&&X==="walk"&&Q===M;r.hidden=!w||X!=="walk",r.hidden||(r.textContent=`${M+1} ${zn[M].name}  \xB7  ${v[M]} / ${m[M]}  \xB7  1\u20135 select \xB7 B next \xB7 X holster \xB7 R reload`)},q=X=>{M=X,w=!0,!v[M]&&m[M]&&se(),W("walk"),o(`${zn[X].name} ready`,`Magazine ${v[X]} \xB7 ${m[X]} spare`)},ce=()=>q((M+1)%zn.length),z=()=>{w=!w,w&&!v[M]&&m[M]&&se(),W("walk"),o(w?`${zn[M].name} ready`:"Weapon holstered",w?"Choose 1\u20135 \xB7 left click to fire \xB7 R to reload":"You are unarmed")},se=()=>{if(!w)return;let X=zn[M];if(v[M]>=X.clip||m[M]<=0){o(X.name,m[M]<=0?"No spare ammunition":"Magazine already full");return}let Q=Math.min(X.clip-v[M],m[M]);v[M]+=Q,m[M]-=Q,V=-1,o("Reloaded",`${v[M]} in the magazine \xB7 ${m[M]} spare`)},Me=(X,Q,ue=16766346)=>{let I=new et().setFromPoints([X,Q]),R=new yr(I,new Hi({color:ue,transparent:!0,opacity:.9}));e.add(R),b.push({line:R,t:.11})},me=(X,Q=10294309,ue=9,I=1)=>{for(let R=0;R<ue;R++){let J=new qe(new Et(.045+Math.random()*.09,6,5),new xt({color:Q,transparent:!0,opacity:.92}));J.position.copy(X),e.add(J);let ee=new O((Math.random()-.5)*5,Math.random()*4+.4,(Math.random()-.5)*5).multiplyScalar(I);g.push({mesh:J,v:ee,t:.7+Math.random()*.45})}},le=(X,Q,ue)=>{let I=X.clone().lerp(ue,Math.min(1,.3/(X.distanceTo(ue)||1))),R=new O,J=new qe(new Et(1,12,8),new xt({color:16744750,transparent:!0,opacity:.72}));J.position.copy(X),J.scale.setScalar(.3),e.add(J),_.push({mesh:J,t:.55,life:.55}),me(X,16761180,18,1.8),a.explosion?.();for(let xe of Q)xe.group.position.distanceTo(X)<12&&C(I,R.copy(xe.group.position).setY(xe.group.position.y+1))&&(xe.health-=5,xe.health<=0&&(e.remove(xe.group),xe.remove=!0));let ee=t.humans[0],ae=new We,Z=new O;ee.updateMatrixWorld(!0);for(let xe=0;xe<ee.count;xe++)ee.getMatrixAt(xe,ae),ae.premultiply(ee.matrixWorld),Z.setFromMatrixPosition(ae),Z.distanceTo(X)<8&&C(I,Z.setY(Z.y+1))&&t.hit(xe,X.x,X.z);j(2)},ne=(X="walk")=>{if(!w||X!=="walk"||E>0)return!1;let Q=zn[M],ue=K();if(v[M]<=0)return V!==M&&(o(`${Q.name} empty`,"Press R to reload"),V=M),!1;v[M]--,S++,E=Q.delay,P=Q.explosive?.15:.075,ue.flash.visible=!0,ue.light.intensity=Q.explosive?7:3.5,a.gunshot(Q.name),i.updateMatrixWorld(!0),i.getWorldPosition(d),i.getWorldDirection(f),i.getWorldDirection(x),x.crossVectors(f,new O(1,0,0)).normalize(),p.crossVectors(f,x).normalize();let I=[...t.humans,...u.map(ae=>ae.group)],R=new Set,J=new Set,ee=null;for(let ae=0;ae<Q.rays;ae++){let Z=f.clone().addScaledVector(p,(Math.random()-.5)*Q.spread).addScaledVector(x,(Math.random()-.5)*Q.spread).normalize(),xe=rd(D[0],D[1],d,Z,Q.range);h.set(d,Z),h.far=xe;let Re=h.intersectObjects(I,!0)[0],Ce=Re?Re.point:d.clone().addScaledVector(Z,xe<Q.range?xe:Math.min(Q.range,55));if(Q.explosive){ee=Ce,Me(d,Ce,16739117);break}if(Q.rays===1&&Me(d,Ce),!Re){xe<Q.range&&me(Ce,9077880,3,.4);continue}if(t.humans.includes(Re.object)){let be=t.humans.indexOf(Re.object),Ee=be===3||be===4?Re.instanceId>>1:Re.instanceId;!J.has(Ee)&&t.hit(Ee,d.x,d.z)&&(J.add(Ee),me(Re.point,10294309,6,.7),j(1))}else{let be=Re.object;for(;be&&!u.some(Ae=>Ae.group===be);)be=be.parent;let Ee=u.find(Ae=>Ae.group===be);Ee&&!R.has(Ee)&&(R.add(Ee),Ee.health-=Q.damage,me(Re.point,9182509,10,.8),j(2),Ee.health<=0&&(e.remove(Ee.group),Ee.remove=!0,o("Officer down","More police are responding")))}}return Q.explosive&&ee&&le(ee,u,d),j(S>1&&S%4===0?1:0),W(X),!0},de=(X,Q)=>{let ue=My(),I=Math.random()*1.4-.7,R=52+Math.random()*22,J=Q+Math.PI+I,ee=X.x+Math.cos(J)*R,ae=X.z+Math.sin(J)*R;ue.group.position.set(ee,n(ee,ae),ae),e.add(ue.group),u.push({...ue,x:ee,z:ae,health:3,lost:0,close:0,stuck:0,side:Math.random()<.5?-1:1})},B=()=>{u.forEach(X=>e.remove(X.group)),u.length=0,y=0,A=!1,G=T=0,w=!1,v.splice(0,v.length,...zn.map(X=>X.clip)),m.splice(0,m.length,...zn.map(X=>X.reserve)),Y(),W("walk"),l(),o("Busted","Your loadout was taken \xB7 the police issued a fine")},Te=(X,Q,ue,I,R,J,ee=null,ae=[])=>{if(D=[R,J],E=Math.max(0,E-X),T-=X,k+=X,(P-=X)<=0)for(let Z of c)Z.flash.visible=!1,Z.light.intensity=0;for(let Z=b.length-1;Z>=0;Z--){let xe=b[Z];xe.t-=X,xe.line.material.opacity=Math.max(0,xe.t/.11),xe.t<=0&&(e.remove(xe.line),xe.line.geometry.dispose(),xe.line.material.dispose(),b.splice(Z,1))}for(let Z=g.length-1;Z>=0;Z--){let xe=g[Z];xe.t-=X,xe.v.y-=7*X,xe.mesh.position.addScaledVector(xe.v,X),xe.mesh.material.opacity=Math.max(0,xe.t/1.1),xe.t<=0&&(e.remove(xe.mesh),xe.mesh.geometry.dispose(),xe.mesh.material.dispose(),g.splice(Z,1))}for(let Z=_.length-1;Z>=0;Z--){let xe=_[Z];xe.t-=X,xe.mesh.scale.setScalar(.3+(1-xe.t/xe.life)*9),xe.mesh.material.opacity=Math.max(0,xe.t/xe.life)*.72,xe.t<=0&&(e.remove(xe.mesh),xe.mesh.geometry.dispose(),xe.mesh.material.dispose(),_.splice(Z,1))}y>0&&!A&&T<=0&&u.length<Math.min(y,4)&&(de(Q,ue),T=4.5);for(let Z of u){let xe=Q.x-Z.x,Re=Q.z-Z.z,Ce=Math.hypot(xe,Re);if(Ce>125?Z.lost+=X:Z.lost=0,Z.lost>6){e.remove(Z.group),Z.remove=!0;continue}let Be=Q.x,be=Q.z;Z.stuck>1.5&&(Be+=-Re/(Ce||1)*Z.side*5,be+=xe/(Ce||1)*Z.side*5);let Ee=Be-Z.x,Ae=be-Z.z,Ne=Math.hypot(Ee,Ae)||1,Oe=I==="walk"?2.25+y*.22:7+y*.35,nt=Z.x,Je=Z.z;Z.x+=Ee/Ne*Math.min(Ne,Oe*X),Z.z+=Ae/Ne*Math.min(Ne,Oe*X),R(Z.x,Z.z,it=>{let te=it*5;if(n(Z.x,Z.z)+1.8>J[te+4])return;let Pe=J[te],ye=J[te+1],we=J[te+2],Ve=J[te+3],Fe=we-Pe,Ye=Ve-ye,mt=Math.max(0,Math.min(1,((Z.x-Pe)*Fe+(Z.z-ye)*Ye)/(Fe*Fe+Ye*Ye||1))),wt=Pe+Fe*mt,ct=ye+Ye*mt,Xt=Z.x-wt,Jt=Z.z-ct,un=Math.hypot(Xt,Jt);un<.48&&un>1e-5&&(Z.x+=Xt/un*(.48-un),Z.z+=Jt/un*(.48-un))});for(let it of ae)od(Z,it[0],it[1],it[3],it[4],it[5],it[2]+.4);if(ee&&od(Z,ee.x,ee.z,Math.cos(ee.yaw),-Math.sin(ee.yaw),ee.svc?ee.svc.half-ee.svc.w:1.3,(ee.svc?ee.svc.w:.9)+.4)&&Math.abs(ee.v)>4){me(new O(Z.x,n(Z.x,Z.z)+1,Z.z),9182509,10,.8),j(2),e.remove(Z.group),Z.remove=!0,o("Officer down","More police are responding");continue}if(Math.hypot(Z.x-nt,Z.z-Je)<.03&&Ce>3?Z.stuck+=X:Z.stuck>0&&(Z.stuck=0,Z.side*=-1),Z.group.position.set(Z.x,n(Z.x,Z.z),Z.z),Z.group.rotation.y=Math.atan2(Q.x-Z.x,Q.z-Z.z),Z.beacon.visible=Math.floor(performance.now()/180)%2===0,Ce<1.05&&I==="walk"?Z.close+=X:Z.close=Math.max(0,Z.close-X*.5),Z.close>1.8){B();return}}for(let Z=u.length-1;Z>=0;Z--)u[Z].remove&&u.splice(Z,1);if(y>0&&u.length===0?(A=!0,G+=X,G>=10&&(y--,G=0,Y())):u.length&&(G=0),y===0&&(A=!1),y>=3){H||(H=Lr("helicopter"),e.add(H.group));let Z=k*.19,xe=Q.x+Math.cos(Z)*36,Re=Q.z+Math.sin(Z)*36;H.group.position.set(xe,Math.max(Q.y+19,n(xe,Re)+22),Re),H.group.rotation.y=-Z+Math.PI/2,H.rotors.forEach((Ce,Be)=>{Ce.rotation.y+=X*(Be?22:34)})}else H&&(e.remove(H.group),H=null);y>=5?(N-=X,!L&&N<=0&&(L=Lr("jet"),e.add(L.group),L.group.position.set(Q.x-120,Q.y+38,Q.z-90),N=19),L&&(L.group.position.x+=62*X,L.group.position.z+=42*X,L.group.rotation.y=-Math.atan2(62,42),L.group.position.distanceTo(Q)>220&&(e.remove(L.group),L=null))):L&&(e.remove(L.group),L=null),W(I)},$=()=>{u.forEach(X=>e.remove(X.group)),u.length=0,H&&e.remove(H.group),L&&e.remove(L.group)},oe=(X,Q)=>{me(new O(X,n(X,Q)+.9,Q),10294309,8,.8),j(1)};return Y(),W("walk"),{shoot:ne,toggle:z,reload:se,select:q,cycle:ce,update:Te,carjacked:()=>j(1),runOver:oe,wanted:()=>y,clear:$}}var _y=new Set(["primary","secondary","tertiary","residential","unclassified","service","primary_link","secondary_link"]),Sy={police:{name:"Police car",line:"158",maxV:30,acc:5.6,half:2.2,w:.9,cam:7,eye:1.3},fire:{name:"Fire engine",line:"150",maxV:19,acc:3,half:4.3,w:1.25,cam:11,eye:2.4},ambulance:{name:"Ambulance",line:"155",maxV:25,acc:4.2,half:2.95,w:1.05,cam:8.5,eye:2}},by=new O(0,1,0),Ey=new O(0,0,1),wy=new O(1,0,0);function Ty(i){let e=new Ct,t=(f,d=.4)=>rn(new Kt({color:f,roughness:d,metalness:.25})),n=t(1579034,.8),s=t(1910060,.06),r=t(15921903),o=[],a=(f,d,p,x,v,m,u)=>{let b=new qe(new je(f,d,p),u);return b.position.set(x,v,m),b.castShadow=b.receiveShadow=!0,e.add(b),b},l=(f,d,p)=>{for(let x of f)for(let v of[p,-p]){let m=new qe(new vt(d,d,.28,14).rotateX(Math.PI/2),n);m.position.set(x,d,v),m.castShadow=!0,e.add(m)}},c=(f,d,p)=>{let x=new xt({color:16184294});for(let v of[-1,1])a(.06,.16,.34,f,d,v*p,x)},h=(f,d,p)=>{a(.3,.06,p,f,d-.06,0,n);for(let x of[-1,1]){let v=new xt({color:660544});a(.26,.13,p/2-.05,f,d+.03,x*p/4,v),o.push(v)}};if(i==="police"){let f=Pr();e.add(new qe(f.body,t(15001836,.3)),new qe(f.detail,rn(new Kt({vertexColors:!0,roughness:.15,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1}))),new qe(f.lamps,new xt({vertexColors:!0}))),e.children.forEach(d=>d.castShadow=d.receiveShadow=!0),a(4.3,.15,1.79,0,.66,0,t(2052008)),a(4.3,.1,1.79,0,.53,0,t(13033502)),h(-.55,1.52,1.2)}else if(i==="fire"){let f=t(11867163);a(8.4,.4,2.2,0,.75,0,n),a(2.1,2.3,2.5,3.2,1.75,0,f),a(6.3,2.6,2.5,-1.05,1.9,0,f),a(.06,.9,2.2,4.26,2.3,0,s),a(1.3,.75,2.52,3.35,2.35,0,s),a(6.3,.2,2.54,-1.05,1.35,0,r),a(2.12,.2,2.54,3.2,1.35,0,r),a(6.1,.14,.95,-.9,3.3,0,t(12172480));for(let d=0;d<12;d++)a(.06,.06,.95,-3.8+d*.52,3.4,0,t(12172480));l([2.9,-1.3,-2.7],.52,1.05),c(4.27,1,.95),h(3.2,3,1.7)}else{let f=t(15783962);a(5.6,.35,1.9,0,.55,0,n),a(4.3,2.25,2.1,-.8,1.68,0,f),a(1.6,1.25,2,2.15,1.15,0,f),a(.14,.62,1.9,1.42,2.05,0,s),a(.06,.4,1.7,2.96,1.35,0,s),a(4.32,.3,2.13,-.8,1.2,0,t(3054394)),a(.05,.6,.2,-2.96,2,0,t(13707818)),l([1.95,-1.9],.38,.92),c(2.96,.95,.75),h(1,2.88,1.6)}return{group:e,beacons:o}}function ld({city:i,scene:e,groundAt:t,agentPos:n,parked:s}){let r=i.roads.filter(p=>_y.has(p.k)),o=(p,x,v)=>{let m=null,u=1/0;for(let D of r)for(let C=0;C+1<D.p.length;C++){let[w,M]=D.p[C],[y,S]=D.p[C+1],E=y-w,P=S-M,T=Math.hypot(E,P)||1,A=Math.max(0,Math.min(1,((p.x-w)*E+(p.z-M)*P)/(T*T))),G=w+E*A,H=M+P*A,L=Math.hypot(p.x-G,p.z-H);L<u&&(u=L,m={qx:G,qz:H,ux:E/T,uz:P/T,hw:D.w/2})}let b=(p.x-m.qx)/(u||1),g=(p.z-m.qz)/(u||1),_=Math.max(m.hw*.5,Math.min(m.hw+v+.3,u-v-.6));return{x:m.qx+b*_+m.ux*x,z:m.qz+g*_+m.uz*x,yaw:Math.atan2(-m.uz,m.ux)}},a=new ft,l=new ft,c=[],h=(p,x,v)=>{if(!x)return;let m=Sy[p],u=o(x,v,m.w),{group:b,beacons:g}=Ty(p),_={kind:p,...m,group:b,beacons:g,siren:!1,x:u.x,z:u.z,yaw:u.yaw,home:{x:u.x,z:u.z,n:x.n},cap:[u.x,u.z,m.w,1,0,m.half-m.w,0]};_.pose=(D,C,w,M,y=0)=>{let S=Math.cos(w),E=-Math.sin(w),P=t(D,C);M==null&&(M=Math.atan2(t(D+S*m.half,C+E*m.half)-t(D-S*m.half,C-E*m.half),m.half*2)),Object.assign(_,{x:D,z:C,yaw:w}),b.position.set(D,P-.02,C),b.quaternion.setFromAxisAngle(by,w).multiply(l.setFromAxisAngle(Ey,M)).multiply(a.setFromAxisAngle(wy,y)),_.cap[0]=D,_.cap[1]=C,_.cap[3]=S,_.cap[4]=E,_.cap[6]=P},_.pose(u.x,u.z,u.yaw),e.add(b),n.push(_.cap),c.push(_);for(let D=0;D<(s?.n||0);D++){let C=s.get(D),w=Math.max(-m.half,Math.min(m.half,(C.x-u.x)*_.cap[3]+(C.z-u.z)*_.cap[4]));Math.hypot(C.x-u.x-_.cap[3]*w,C.z-u.z-_.cap[4]*w)<m.w+2.2&&(s.hide(D),C.x=C.z=1e9)}},f=i.places.find(p=>p.k==="police"),d=i.places.find(p=>p.k==="fire station");return h("police",f,0),h("fire",d,-6),h("ambulance",d,5.5),c}function Ay(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,40,2,32,34,30);return t.addColorStop(0,"rgba(255,250,210,1)"),t.addColorStop(.35,"rgba(255,170,50,0.85)"),t.addColorStop(1,"rgba(200,40,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new It(i)}function Ry(){let i=new Ct,e=n=>new $e({color:n}),t=(n,s,r,o,a)=>{let l=new qe(n,s);return l.position.set(r,o,a),l.castShadow=!0,i.add(l),l};t(new Ei(.17,.42,3,8).rotateZ(Math.PI/2),e(10235695),.1,.2,0),t(new Et(.115,10,8),e(15053711),.62,.15,0);for(let n of[.09,-.09])t(new je(.84,.13,.14),e(2306381),-.6,.1,n);return i}function cd({city:i,world:e,scene:t,camera:n,renderer:s,veh:r,fleet:o,errands:a,toast:l,setTarget:c,audio:h}){let f=e.cars,d=e.groundAt,p=a.kc;f.suspect=-1,f.caught=-1,f.siren=null;let x=null,v=null,m=0,u=0,b=new Xi(2117887,0,30);t.add(b);let g=new Xi(16742954,0,45);t.add(g);let _=new Bi({map:Ay(),color:16756832,blending:Mn,depthWrite:!1,transparent:!0}),D=Array.from({length:14},()=>{let $=new Ls(_);return $.visible=!1,t.add($),{s:$,ox:0,oy:0,ph:Math.random()*6}}),C=[],w=ca(C);t.add(w.mesh);let M=220,y=new Float32Array(M*3).fill(-1e4),S=new Float32Array(M*3),E=new Float32Array(M),P=new et;P.setAttribute("position",new lt(y,3).setUsage(tn));let T=new bi(P,new ki({color:14216447,size:.16,transparent:!0,opacity:.75,depthWrite:!1}));T.frustumCulled=!1,t.add(T);let A=0,G=0,H=Ry();H.visible=!1,t.add(H);let L=new qe(new hn(.45,.9,8).rotateX(Math.PI),new xt({color:15217962}));L.visible=!1,t.add(L);let N=new O,k=new O,V=new O,Y=$=>$[Math.floor(Math.random()*$.length)],j=$=>`${$[5]} ${$[3]}`,K=($,oe)=>{let X=(i.doors||[]).filter(Q=>{let ue=Math.hypot(Q[0]-$,Q[1]-oe);return ue>150&&ue<700});return X.length?Y(X):null},W=($,oe)=>[$[0]+Math.sin($[2])*oe,$[1]+Math.cos($[2])*oe],q=()=>r.st.mode==="car"?r.st.svc:null,ce=($,oe,X)=>Math.hypot($-X.x,oe-X.z),z=()=>{f.suspect=f.caught=-1,L.visible=!1,H.visible=!1;for(let $ of D)$.s.visible=!1;g.intensity=0,C.length=0,v=null,c(null)},se=($,oe,X)=>{a.earn($),l(oe,`${X} \xB7 +${p($)}`),z(),m=20+Math.random()*20},Me=($,oe)=>{l($,oe),z(),m=25},me=()=>{let $=x,oe=K($.x,$.z);if($.kind==="police"){let X=f.traffic-2,Q=[];for(let R=0;R<X;R++){let J=Math.hypot(f.agentPos[R][0]-$.x,f.agentPos[R][1]-$.z);J>100&&J<450&&Q.push(R)}if(Q.length&&(Math.random()<.6||!oe)){v={type:"suspect",idx:Y(Q),t:0,limit:300,press:0,lost:0,label:"Suspect vehicle"},f.suspect=v.idx,L.visible=!0,l("Dispatch \xB7 158","A car fled a traffic check \xB7 catch up with lights and siren on (L) and stay close");return}if(!oe)return;let[ue,I]=W(oe,1);v={type:"disturbance",x:ue,z:I,t:0,limit:240,label:`Disturbance \xB7 ${j(oe)}`},l("Dispatch \xB7 158",`Noise complaint at ${j(oe)} \xB7 go there and talk to them on foot`)}else if($.kind==="fire"){if(!oe)return;let[X,Q]=W(oe,.4),ue=d(X,Q),I=Math.cos(oe[2]),R=-Math.sin(oe[2]);v={type:"fire",x:X,z:Q,y:ue,hp:100,t:0,limit:360,label:`Fire \xB7 ${j(oe)}`},D.forEach((J,ee)=>{let ae=(ee/D.length-.5)*5;J.ox=I*ae,J.oz=R*ae,J.oy=.6+Math.random()*3.5,J.s.visible=!0}),C.push([X,ue+4.5,Q]),l("Dispatch \xB7 150",`House fire at ${j(oe)} \xB7 drive there, get out by the engine and hold left click to spray`)}else{if(!oe)return;let[X,Q]=W(oe,1.6);v={type:"patient",x:X,z:Q,t:0,limit:360,treat:0,treating:!1,treated:!1,aboard:!1,label:`Patient \xB7 ${j(oe)}`},H.position.set(X,d(X,Q),Q),H.rotation.y=oe[2],H.visible=!0,l("Dispatch \xB7 155",`Someone collapsed at ${j(oe)} \xB7 get there, give first aid (E), then bring them to the base`)}c(v.x,v.z,v.label,!0)},le=$=>x&&x.kind==="fire"&&r.st.mode==="walk"&&ce(x.x,x.z,$)<50;return{update:($,oe)=>{let X=oe.pos,Q=q(),ue=performance.now()/1e3;Q&&x!==Q&&(v&&z(),x=Q,m=6,l(`On duty \xB7 ${Q.name}`,"Calls come in on the radio \xB7 L blue lights and siren")),!Q&&r.st.mode!=="walk"&&x&&(z(),x=null,l("Off duty","Back to normal life"));let I=null,R=1/0;for(let ee of o){let ae=ee.siren,Z=Math.floor(ue*7)%2;ee.beacons.forEach((xe,Re)=>ae&&Z===Re?xe.color.setRGB(.25,.45,3):xe.color.setHex(660544)),ae&&ce(ee.x,ee.z,X)<R&&(R=ce(ee.x,ee.z,X),I=ee)}if(b.intensity=I?Math.floor(ue*7)%2?40:8:0,I&&b.position.set(I.x,d(I.x,I.z)+3,I.z),h.siren?.(!!(Q&&Q.siren)),f.siren=Q&&Q.siren?{x:Q.x,z:Q.z,fx:Math.cos(Q.yaw),fz:-Math.sin(Q.yaw)}:null,x&&!v&&(m-=$)<=0&&(me(),v||(m=10)),v&&(v.t+=$)>v.limit&&Me("Call timed out",v.type==="fire"?"The fire spread \xB7 the building is lost":v.type==="suspect"?"The suspect got away":"Another crew took the call"),v?.type==="suspect"){let ee=f.agentPos[v.idx],ae=ce(ee[0],ee[1],X);L.position.set(ee[0],ee[6]+3.2+Math.sin(ue*4)*.15,ee[1]),ae>25&&c(ee[0],ee[1],v.label,!0),f.caught!==v.idx&&(Q&&Q.kind==="police"&&Q.siren&&ae<16?v.press+=$:v.press=Math.max(0,v.press-$*.5),v.press>=4&&(f.caught=v.idx,l("Suspect stopped","Get out and arrest the driver (E)")),ae>450?(v.lost+=$)>20&&Me("Lost them","The suspect got away"):v.lost=0)}else if(v?.type==="disturbance")r.st.mode==="walk"&&ce(v.x,v.z,X)<6&&se(300,"Settled",`You calmed things down at ${v.label.split(" \xB7 ")[1]}`);else if(v?.type==="fire"){v.hp=Math.min(160,v.hp+$*.25);let ee=v.hp/100;if(D.forEach((ae,Z)=>{ae.ph+=$*9;let xe=(1.6+Math.sin(ae.ph+Z)*.35)*Math.min(1.4,.35+ee*.75);ae.s.position.set(v.x+ae.ox,v.y+ae.oy*Math.min(1.3,.4+ee*.6)+Math.sin(ae.ph*.7)*.2,v.z+ae.oz),ae.s.scale.set(xe,xe*1.5,1)}),g.position.set(v.x,v.y+2.5,v.z),g.intensity=(60+Math.sin(ue*23)*15+Math.sin(ue*7)*10)*Math.min(1,ee),oe.firing&&le(X)){n.getWorldPosition(k),n.getWorldDirection(N),V.set(v.x-k.x,v.y+2-k.y,v.z-k.z);let ae=V.length();ae<26&&V.dot(N)/ae>Math.cos(.32)&&(v.hp-=$*14)}v.hp<=0&&se(900,"Fire out",`${v.label.split(" \xB7 ")[1]} is safe`)}else if(v?.type==="patient"){let ee=ce(v.x,v.z,X);v.treating&&(ee>3||r.st.mode!=="walk"?(v.treating=!1,l("First aid stopped","Stay with the patient \xB7 E to continue")):(v.treat+=$)>=5&&(v.treating=!1,v.treated=!0,l("Patient stabilised","Bring the ambulance next to them"))),v.treated&&!v.aboard&&x.kind==="ambulance"&&ce(x.x,x.z,v)<9&&(v.aboard=!0,H.visible=!1,c(x.home.x,x.home.z,`Base \xB7 ${x.home.n}`,!0),l("Patient on board",`Drive to the base at ${x.home.n} (lights and siren help)`)),v.aboard&&Q===x&&ce(x.home.x,x.home.z,Q)<25&&se(v.t<150?1100:800,"Patient handed over",v.t<150?"Quick work, with a bonus":"They're in good hands")}if(oe.firing&&le(X))for(n.getWorldPosition(k),n.getWorldDirection(N),G+=$*160;G>=1;G--){let ee=A*3;E[A]=1.3,y[ee]=k.x+N.x*.6,y[ee+1]=k.y-.3+N.y*.6,y[ee+2]=k.z+N.z*.6;let ae=17+Math.random()*3;S[ee]=N.x*ae+(Math.random()-.5),S[ee+1]=N.y*ae+2+(Math.random()-.5),S[ee+2]=N.z*ae+(Math.random()-.5),A=(A+1)%M}let J=!1;for(let ee=0;ee<M;ee++){if(E[ee]<=0)continue;let ae=ee*3;if(J=!0,(E[ee]-=$)<=0){y[ae+1]=-1e4;continue}S[ae+1]-=9.8*$,y[ae]+=S[ae]*$,y[ae+1]+=S[ae+1]*$,y[ae+2]+=S[ae+2]*$}T.visible=J,J&&(P.attributes.position.needsUpdate=!0),w.update($,n.position,ot.uWind.value,v?.type==="fire"?Math.min(1,v.hp/100):0,.1,innerHeight*s.getPixelRatio()*.71)},key:($,oe)=>{let X=q();if($==="KeyL"&&X)return X.siren=!X.siren,l(X.name,X.siren?"Blue lights and siren on \xB7 traffic makes way":"Lights and siren off"),!0;if($!=="KeyE"||r.st.mode!=="walk"||!v)return!1;if(v.type==="patient"&&!v.treated&&!v.treating&&ce(v.x,v.z,oe)<2.6)return v.treating=!0,l("First aid","Stay next to them"),!0;if(v.type==="suspect"&&f.caught===v.idx){let Q=f.agentPos[v.idx];if(ce(Q[0],Q[1],oe)<Q[5]+Q[2]+2.5)return se(700,"Arrested","The driver is in custody"),!0}return!1},hint:$=>{let oe=q();if(v?.type==="suspect"&&oe&&v.press>0&&f.caught!==v.idx)return`Pull them over \xB7 ${Math.round(v.press/4*100)} %`;if(oe||!v||r.st.mode!=="walk")return"";if(v.type==="patient"&&v.treating)return`First aid \xB7 ${Math.round(v.treat/5*100)} %`;if(v.type==="patient"&&!v.treated&&ce(v.x,v.z,$)<2.6)return"E \xB7 first aid";if(v.type==="suspect"&&f.caught===v.idx){let X=f.agentPos[v.idx];if(ce(X[0],X[1],$)<X[5]+X[2]+2.5)return"E \xB7 arrest the driver"}return v.type==="fire"&&le($)&&ce(v.x,v.z,$)<60?`Hold left click \xB7 spray water \xB7 fire ${Math.round(v.hp)} %`:""},status:()=>x?`${x.name} \xB7 ${v?v.label:"waiting for a call"}`:"",hose:$=>le($)&&v?.type==="fire",fleet:o,call:()=>v,duty:()=>x,newCall:me}}var Ti={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Wt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cy=new Rs(-1,1,1,-1,0,1),fh=class extends et{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},Py=new fh,Tn=class{constructor(e){this._mesh=new qe(Py,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ua=class extends Wt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ht.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Tn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Dr=class extends Wt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fa=class extends Wt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var da=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new Tt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ua(Ti),this.copyPass.material.blending=Lt,this.clock=new Qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dr!==void 0&&(o instanceof Dr?n=!0:o instanceof fa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pa=class extends Wt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Nr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new We},cameraProjectionMatrixInverse:{value:new We},cameraWorldMatrix:{value:new We},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},Ur={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ma={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function hd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Iy(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ni(s,e,e);return r.wrapS=_n,r.wrapT=_n,r.needsUpdate=!0,r}function Iy(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var zr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:dh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraProjectionMatrixInverse:{value:new We},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function dh(i,e,t){let n=Ly(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Ly(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),o))}return n}var ga=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,d=l-f,p=c-f,x=e-d,v=t-p,m,u;x>v?(m=1,u=0):(m=0,u=1);let b=x-m+h,g=v-u+h,_=x-1+2*h,D=v-1+2*h,C=l&255,w=c&255,M=this.perm[C+this.perm[w]]%12,y=this.perm[C+m+this.perm[w+u]]%12,S=this.perm[C+1+this.perm[w+1]]%12,E=.5-x*x-v*v;E<0?n=0:(E*=E,n=E*E*this.dot(this.grad3[M],x,v));let P=.5-b*b-g*g;P<0?s=0:(P*=P,s=P*P*this.dot(this.grad3[y],b,g));let T=.5-_*_-D*D;return T<0?r=0:(T*=T,r=T*T*this.dot(this.grad3[S],_,D)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),d=Math.floor(n+c),p=1/6,x=(h+f+d)*p,v=h-x,m=f-x,u=d-x,b=e-v,g=t-m,_=n-u,D,C,w,M,y,S;b>=g?g>=_?(D=1,C=0,w=0,M=1,y=1,S=0):b>=_?(D=1,C=0,w=0,M=1,y=0,S=1):(D=0,C=0,w=1,M=1,y=0,S=1):g<_?(D=0,C=0,w=1,M=0,y=1,S=1):b<_?(D=0,C=1,w=0,M=0,y=1,S=1):(D=0,C=1,w=0,M=1,y=1,S=0);let E=b-D+p,P=g-C+p,T=_-w+p,A=b-M+2*p,G=g-y+2*p,H=_-S+2*p,L=b-1+3*p,N=g-1+3*p,k=_-1+3*p,V=h&255,Y=f&255,j=d&255,K=this.perm[V+this.perm[Y+this.perm[j]]]%12,W=this.perm[V+D+this.perm[Y+C+this.perm[j+w]]]%12,q=this.perm[V+M+this.perm[Y+y+this.perm[j+S]]]%12,ce=this.perm[V+1+this.perm[Y+1+this.perm[j+1]]]%12,z=.6-b*b-g*g-_*_;z<0?s=0:(z*=z,s=z*z*this.dot3(this.grad3[K],b,g,_));let se=.6-E*E-P*P-T*T;se<0?r=0:(se*=se,r=se*se*this.dot3(this.grad3[W],E,P,T));let Me=.6-A*A-G*G-H*H;Me<0?o=0:(Me*=Me,o=Me*Me*this.dot3(this.grad3[q],A,G,H));let me=.6-L*L-N*N-k*k;return me<0?a=0:(me*=me,a=me*me*this.dot3(this.grad3[ce],L,N,k)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,d,p,x,v=(e+t+n+s)*l,m=Math.floor(e+v),u=Math.floor(t+v),b=Math.floor(n+v),g=Math.floor(s+v),_=(m+u+b+g)*c,D=m-_,C=u-_,w=b-_,M=g-_,y=e-D,S=t-C,E=n-w,P=s-M,T=y>S?32:0,A=y>E?16:0,G=S>E?8:0,H=y>P?4:0,L=S>P?2:0,N=E>P?1:0,k=T+A+G+H+L+N,V=o[k][0]>=3?1:0,Y=o[k][1]>=3?1:0,j=o[k][2]>=3?1:0,K=o[k][3]>=3?1:0,W=o[k][0]>=2?1:0,q=o[k][1]>=2?1:0,ce=o[k][2]>=2?1:0,z=o[k][3]>=2?1:0,se=o[k][0]>=1?1:0,Me=o[k][1]>=1?1:0,me=o[k][2]>=1?1:0,le=o[k][3]>=1?1:0,ne=y-V+c,de=S-Y+c,B=E-j+c,Te=P-K+c,$=y-W+2*c,oe=S-q+2*c,X=E-ce+2*c,Q=P-z+2*c,ue=y-se+3*c,I=S-Me+3*c,R=E-me+3*c,J=P-le+3*c,ee=y-1+4*c,ae=S-1+4*c,Z=E-1+4*c,xe=P-1+4*c,Re=m&255,Ce=u&255,Be=b&255,be=g&255,Ee=a[Re+a[Ce+a[Be+a[be]]]]%32,Ae=a[Re+V+a[Ce+Y+a[Be+j+a[be+K]]]]%32,Ne=a[Re+W+a[Ce+q+a[Be+ce+a[be+z]]]]%32,Oe=a[Re+se+a[Ce+Me+a[Be+me+a[be+le]]]]%32,nt=a[Re+1+a[Ce+1+a[Be+1+a[be+1]]]]%32,Je=.6-y*y-S*S-E*E-P*P;Je<0?h=0:(Je*=Je,h=Je*Je*this.dot4(r[Ee],y,S,E,P));let it=.6-ne*ne-de*de-B*B-Te*Te;it<0?f=0:(it*=it,f=it*it*this.dot4(r[Ae],ne,de,B,Te));let te=.6-$*$-oe*oe-X*X-Q*Q;te<0?d=0:(te*=te,d=te*te*this.dot4(r[Ne],$,oe,X,Q));let Pe=.6-ue*ue-I*I-R*R-J*J;Pe<0?p=0:(Pe*=Pe,p=Pe*Pe*this.dot4(r[Oe],ue,I,R,J));let ye=.6-ee*ee-ae*ae-Z*Z-xe*xe;return ye<0?x=0:(ye*=ye,x=ye*ye*this.dot4(r[nt],ee,ae,Z,xe)),27*(h+f+d+p+x)}};var Or=class i extends Wt{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=hd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Tt(this.width,this.height,{type:Gt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ht({defines:Object.assign({},Nr.defines),uniforms:Ht.clone(Nr.uniforms),vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader,blending:Lt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Zo,this.normalMaterial.blending=Lt,this.pdMaterial=new ht({defines:Object.assign({},zr.defines),uniforms:Ht.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ht({defines:Object.assign({},Ur.defines),uniforms:Ht.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,blending:Lt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ht({uniforms:Ht.clone(Ti.uniforms),vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ta,blendDst:Fs,blendEquation:xn,blendSrcAlpha:ea,blendDstAlpha:Fs,blendEquationAlpha:xn}),this.blendMaterial=new ht({uniforms:Ht.clone(ma.uniforms),vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Nc,blendSrc:ta,blendDst:Fs,blendEquation:xn,blendSrcAlpha:ea,blendDstAlpha:Fs,blendEquationAlpha:xn}),this.fsQuad=new Tn(null),this.originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ps,this.depthTexture.format=_i,this.depthTexture.type=Mi,this.normalRenderTarget=new Tt(this.width,this.height,{minFilter:Dt,magFilter:Dt,type:Gt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=dh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new ga,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ni(s,e,e,en,Ln);return r.wrapS=_n,r.wrapT=_n,r.needsUpdate=!0,r}};Or.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ud={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gs=class i extends Wt{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Tt(r,o,{type:Gt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new Tt(r,o,{type:Gt});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Tt(r,o,{type:Gt});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=ud;this.highPassUniforms=Ht.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ti;this.copyUniforms=Ht.clone(h.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Mn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new xt,this.fsQuad=new Tn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Gs.BlurDirectionX=new Se(1,0);Gs.BlurDirectionY=new Se(0,1);var fd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var xa=class extends Wt{constructor(){super();let e=fd;this.uniforms=Ht.clone(e.uniforms),this.material=new Yo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Tn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Fr={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Se(1/1024,1/512)}},vertexShader:`

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

		}`},Br={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Se(1/1024,1/512)}},vertexShader:`

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

		}`},va={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Se(1/1024,1/512)}},vertexShader:`

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

		}`};var ya=class extends Wt{constructor(e,t){super(),this.edgesRT=new Tt(e,t,{depthBuffer:!1,type:Gt}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Tt(e,t,{depthBuffer:!1,type:Gt}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new Nt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=nn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new Nt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=Dt,this.searchTexture.minFilter=Dt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Ht.clone(Fr.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new ht({defines:Object.assign({},Fr.defines),uniforms:this.uniformsEdges,vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader}),this.uniformsWeights=Ht.clone(Br.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new ht({defines:Object.assign({},Br.defines),uniforms:this.uniformsWeights,vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader}),this.uniformsBlend=Ht.clone(va.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new ht({uniforms:this.uniformsBlend,vertexShader:va.vertexShader,fragmentShader:va.fragmentShader}),this.fsQuad=new Tn(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var ph=new We,Hr=class i{constructor(e){e=e||{},this.zNear=e.webGL===!0?-1:0,this.vertices={near:[new O,new O,new O,new O],far:[new O,new O,new O,new O]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){let n=this.zNear,s=e.elements[2*4+3]===0;return ph.copy(e).invert(),this.vertices.near[0].set(1,1,n),this.vertices.near[1].set(1,-1,n),this.vertices.near[2].set(-1,-1,n),this.vertices.near[3].set(-1,1,n),this.vertices.near.forEach(function(r){r.applyMatrix4(ph)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(ph);let o=Math.abs(r.z);s?r.z*=Math.min(t/o,1):r.multiplyScalar(Math.min(t/o,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new i);t.length=e.length;for(let n=0;n<e.length;n++){let s=t[n];if(n===0)for(let r=0;r<4;r++)s.vertices.near[r].copy(this.vertices.near[r]);else for(let r=0;r<4;r++)s.vertices.near[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n-1]);if(n===e.length-1)for(let r=0;r<4;r++)s.vertices.far[r].copy(this.vertices.far[r]);else for(let r=0;r<4;r++)s.vertices.far[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n])}}toSpace(e,t){for(let n=0;n<4;n++)t.vertices.near[n].copy(this.vertices.near[n]).applyMatrix4(e),t.vertices.far[n].copy(this.vertices.far[n]).applyMatrix4(e)}};var mh={lights_fragment_begin:`
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
	`+tt.lights_pars_begin};var dd=new We,gh=new Hr({webGL:!0}),ai=new O,kr=new Dn,xh=[],vh=[],yh=new We,pd=new We,Dy=new O(0,1,0),Ma=class{constructor(e){this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new O(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||3,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Hr({webGL:!0}),this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){let t=new Os(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){let e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){let e=this.frustums;for(let t=0;t<e.length;t++){let s=this.lights[t].shadow.camera,r=this.frustums[t],o=r.vertices.near,a=r.vertices.far,l=a[0],c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let h=l.distanceTo(c);if(this.fade){let f=this.camera,d=Math.max(f.far,this.maxFar),p=r.vertices.far[0].z/(d-f.near),x=.25*Math.pow(p,2)*(d-f.near);h+=x}s.left=-h/2,s.right=h/2,s.top=h/2,s.bottom=-h/2,s.updateProjectionMatrix()}}getBreaks(){let e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":n(this.cascades,e.near,t,this.breaks);break;case"logarithmic":s(this.cascades,e.near,t,this.breaks);break;case"practical":r(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function n(o,a,l,c){for(let h=1;h<o;h++)c.push((a+(l-a)*h/o)/l);c.push(1)}function s(o,a,l,c){for(let h=1;h<o;h++)c.push(a*(l/a)**(h/o)/l);c.push(1)}function r(o,a,l,c,h){xh.length=0,vh.length=0,s(o,a,l,vh),n(o,a,l,xh);for(let f=1;f<o;f++)h.push(ii.lerp(xh[f-1],vh[f-1],c));h.push(1)}}update(){let e=this.camera,t=this.frustums;yh.lookAt(new O,this.lightDirection,Dy),pd.copy(yh).invert();for(let n=0;n<t.length;n++){let s=this.lights[n],r=s.shadow.camera,o=(r.right-r.left)/this.shadowMapSize,a=(r.top-r.bottom)/this.shadowMapSize;dd.multiplyMatrices(pd,e.matrixWorld),t[n].toSpace(dd,gh);let l=gh.vertices.near,c=gh.vertices.far;kr.makeEmpty();for(let h=0;h<4;h++)kr.expandByPoint(l[h]),kr.expandByPoint(c[h]);kr.getCenter(ai),ai.z=kr.max.z+this.lightMargin,ai.x=Math.floor(ai.x/o)*o,ai.y=Math.floor(ai.y/a)*a,ai.applyMatrix4(yh),s.position.copy(ai),s.target.position.copy(ai),s.target.position.x+=this.lightDirection.x,s.target.position.y+=this.lightDirection.y,s.target.position.z+=this.lightDirection.z}}injectInclude(){tt.lights_fragment_begin=mh.lights_fragment_begin,tt.lights_pars_begin=mh.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");let t=[],n=this,s=this.shaders;e.onBeforeCompile=function(r){let o=Math.min(n.camera.far,n.maxFar);n.getExtendedBreaks(t),r.uniforms.CSM_cascades={value:t},r.uniforms.cameraNear={value:n.camera.near},r.uniforms.shadowFar={value:o},s.set(e,r)},s.set(e,null)}updateUniforms(){let e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(n,s){if(n!==null){let r=n.uniforms;this.getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in s.defines?(delete s.defines.CSM_FADE,s.needsUpdate=!0):this.fade&&!("CSM_FADE"in s.defines)&&(s.defines.CSM_FADE="",s.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new Se);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){let n=this.breaks[t],s=this.breaks[t-1]||0;e[t].x=s,e[t].y=n}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){let e=this.shaders;e.forEach(function(t,n){delete n.onBeforeCompile,delete n.defines.USE_CSM,delete n.defines.CSM_CASCADES,delete n.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),n.needsUpdate=!0}),e.clear()}};var Ws={medium:[300,1024],high:[700,2048]};function md({renderer:i,world:e,camera:t}){let n=e.scene,s=e.env,r=s.sun,o=new Cs(i),a=new Is;a.add(new qe(s.sky.geometry,s.sky.material));let l=null,c=0,h=()=>{let T=o.fromScene(a,0,1,6e3);n.environment=T.texture,l?.dispose(),l=T},f=new da(i),d=new Or(n,t,2,2,void 0,{radius:1.2,distanceExponent:2,thickness:1.5,scale:1.1,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),p=d.setSize.bind(d);d.setSize=(T,A)=>p(Math.max(1,T>>1),Math.max(1,A>>1));let x=d.overrideVisibility.bind(d);d.overrideVisibility=()=>{x(),n.traverse(T=>{let A=T.material;(T.isSprite||A&&!Array.isArray(A)&&(A.transparent||A.alphaTest>0||A.depthWrite===!1))&&(T.visible=!1)})};let v=new Gs(new Se(2,2),.35,.45,1.1);f.addPass(new pa(n,t)),f.addPass(d),f.addPass(v),f.addPass(new xa),f.addPass(new ya(2,2));let m=new Se,u=new Se,b=0,g=null,_=0,D=new Map,C=T=>{if(D.has(T)||!(T.isMeshLambertMaterial||T.isMeshStandardMaterial||T.isMeshPhongMaterial))return;let A=T.onBeforeCompile,G=Object.prototype.hasOwnProperty.call(T,"customProgramCacheKey")?T.customProgramCacheKey:null,H=T.customProgramCacheKey();D.set(T,[A,G]),g.setupMaterial(T);let L=T.onBeforeCompile;T.onBeforeCompile=(N,k)=>{L(N,k),A.call(T,N,k)},T.customProgramCacheKey=()=>H+"|csm",T.needsUpdate=!0},w=()=>n.traverse(T=>{if(T.isMesh||T.isInstancedMesh)for(let A of[].concat(T.material))C(A)}),M=null,y=T=>{M=T,g.maxFar=Ws[T][0];for(let A of g.lights)A.shadow.mapSize.x!==Ws[T][1]&&(A.shadow.map?.dispose(),A.shadow.map=null,A.shadow.mapSize.setScalar(Ws[T][1]));g.updateFrustums()},S=T=>{g=new Ma({camera:t,parent:n,cascades:3,maxFar:Ws[T][0],mode:"practical",shadowMapSize:Ws[T][1],lightDirection:new O(0,-1,0),lightIntensity:0,lightMargin:250,lightFar:2e3}),g.fade=!0;for(let A of g.lights)A.shadow.bias=-3e-4,A.shadow.normalBias=.5;r.visible=!1,w(),y(T)},E=()=>{g.remove(),g.dispose(),g=null;for(let[T,[A,G]]of D)T.onBeforeCompile=A,G?T.customProgramCacheKey=G:delete T.customProgramCacheKey,T.needsUpdate=!0;D.clear(),r.visible=!0,M=null};return{render:T=>{let A=e.quality(),G=Ws[A]?A:null;A!=="low"&&(c-=T)<=0&&(c=2,h()),G!==M&&(G?g?y(G):S(G):E()),i.getSize(m);let H=!m.equals(u);if(u.copy(m),g){H&&g.updateFrustums(),(_-=T)<=0&&(_=1,w()),g.lightDirection.copy(s.st.lightDir).negate();for(let N of g.lights)N.intensity=r.intensity,N.color.copy(r.color);t.updateMatrixWorld(),g.update()}if(A!=="high"){i.render(n,t);return}let L=i.getPixelRatio();(H||L!==b)&&(b=L,f.setPixelRatio(L),f.setSize(m.x,m.y)),f.render(T)},composer:f,active:()=>!!g}}var Ny=1.7,gd=.35,_a=8,On=(i,e=0)=>i.toLocaleString("cs-CZ",{minimumFractionDigits:e,maximumFractionDigits:e}),xd=["N","NE","E","SE","S","SW","W","NW"];function Vr(i,e,t){let n=new Map,s=(r,o)=>(r+4096)*8192+(o+4096);for(let r=0;r<i.length/e;r++){let o=r*e,a=Math.floor(Math.min(i[o],i[o+2])/t),l=Math.floor(Math.max(i[o],i[o+2])/t),c=Math.floor(Math.min(i[o+1],i[o+3])/t),h=Math.floor(Math.max(i[o+1],i[o+3])/t);for(let f=a;f<=l;f++)for(let d=c;d<=h;d++){let p=s(f,d);(n.get(p)||n.set(p,[]).get(p)).push(r)}}return(r,o,a)=>{let l=Math.floor(r/t),c=Math.floor(o/t);for(let h=l-1;h<=l+1;h++)for(let f=c-1;f<=c+1;f++){let d=n.get(s(h,f));if(d)for(let p of d)a(p)}}}var Sa=(i,e,t,n,s,r)=>{let o=s-t,a=r-n,l=o*o+a*a||1,c=Math.max(0,Math.min(1,((i-t)*o+(e-n)*a)/l));return[t+c*o,n+c*a]};function vd({world:i,city:e,renderer:t,camera:n,ortho:s}){let r=F=>document.getElementById(F),[o,a,l,c]=e.bounds,h=ff(),{groundAt:f,segs:d}=i,p=Vr(d,5,_a),x=[],v=[];e.roads.forEach((F,fe)=>{if(F.n)for(let pe=0;pe+1<F.p.length;pe++)x.push(F.p[pe][0],F.p[pe][1],F.p[pe+1][0],F.p[pe+1][1]),v.push(fe)});let m=Vr(x,4,20),u=new O(e.spawn[0],0,e.spawn[1]),b=new O;u.y=f(u.x,u.z);let g=e.pois.find(F=>F.k==="castle"),_=g?Math.atan2(-(g.p[0]-u.x),-(g.p[1]-u.z)):0,D=.05,C=!1,w="helicopter",M=null,y=!0,S={},E=t.domElement,P=r("start"),T=r("bigmap"),A=!1,G=!1,H=()=>document.pointerLockElement===E,L={yaw:0,pitch:0,t:0},N=(F,fe)=>{if(V&&V.st.mode!=="walk"){L.yaw=Math.max(-2.6,Math.min(2.6,L.yaw-F*.0022)),L.pitch=Math.max(-.6,Math.min(.5,L.pitch-fe*.0022)),L.t=1.5;return}_-=F*.0022,D=Math.max(-1.5,Math.min(1.5,D-fe*.0022))},k=Qf(),V=null,Y=null,j=null,K=()=>Y&&P.hidden&&T.hidden&&!dn.isOpen()&&!ue.isOpen()&&!j.hose(u)&&Y.shoot(V.st.mode),W=()=>{P.hidden=!0,T.hidden=!0,k.start();try{let F=E.requestPointerLock();F&&F.catch&&F.catch(()=>{})}catch{}};r("go").addEventListener("click",W),document.addEventListener("pointerlockchange",()=>{!H()&&T.hidden&&(P.hidden=!1)}),addEventListener("mousemove",F=>{(H()||A)&&N(F.movementX,F.movementY)}),E.addEventListener("mousedown",F=>{H()?F.button===0&&(G=!0,K()):A=!0}),addEventListener("mouseup",()=>{A=!1,G=!1});let q=F=>{let fe=V.st.mode!=="walk",pe=P.hidden&&T.hidden;if(pe&&dn.key(F)||pe&&ie.key(F)||pe&&Ie.key(F)||pe&&j.key(F,u)||pe&&!fe&&ue.key(F,i.env.st.hour))return!0;if(F==="KeyX"&&pe&&!dn.isOpen()&&Y)return Y.toggle(),!0;if(F==="KeyB"&&pe&&Y)return Y.cycle(),!0;if(/^Digit[1-5]$/.test(F)&&pe&&Y)return Y.select(Number(F.slice(-1))-1),!0;if(F==="KeyR"&&pe&&Y)return Y.reload(),!0;if(F==="KeyP"&&pe)return ie.toggle(),!0;if(F==="KeyE"&&pe&&!fe&&dn.start(u))return!0;if(F==="KeyE"&&pe){if(fe){let he=V.st.mode;V.exit(u)?(_=V.st.yaw-Math.PI/2,D=0,p=Vr(d,5,_a),Q(he==="car"?"Parked":"Bike left here","E to get back on")):Q("Too fast","Stop first, then E")}else{C&&M&&i.scene.remove(M.group),M=null,C=!1;let he=V.enter(u);he&&(L.yaw=L.pitch=0,he==="car"&&Y.carjacked(),he==="service"?Q(V.st.svc.name,"W/S \xB7 A/D steer \xB7 L blue lights and siren \xB7 C camera \xB7 E get out"):Q(he==="car"?"Driving":"Cycling",he==="car"?"W/S throttle and brake \xB7 A/D steer \xB7 Space handbrake \xB7 C camera \xB7 H horn \xB7 E get out":"W pedal \xB7 S brake \xB7 A/D steer \xB7 E get off"))}return!0}if(fe&&F==="KeyC")return V.toggleCam(),!0;if(fe&&F==="KeyH")return k.horn(),!0;if(F==="KeyF"&&!fe&&(C=!C,b.set(0,0,0),C?(w="helicopter",M=Lr(w),i.scene.add(M.group),Q("Helicopter","WASD fly \xB7 Space climb \xB7 C descend \xB7 J jet \xB7 H helicopter \xB7 F land")):(M&&i.scene.remove(M.group),M=null)),C&&(F==="KeyJ"||F==="KeyH")){let he=F==="KeyJ"?"jet":"helicopter";he!==w&&(M&&i.scene.remove(M.group),w=he,M=Lr(w),i.scene.add(M.group),Q(w==="jet"?"Jet":"Helicopter",w==="jet"?"WASD fly fast \xB7 Space climb \xB7 C descend \xB7 H helicopter \xB7 F land":"WASD fly \xB7 Space climb \xB7 C descend \xB7 J jet \xB7 F land"))}return F==="KeyM"&&Je(),F==="KeyT"&&i.env.skipHour(),F==="KeyV"&&Q("Sound",k.toggle()?"off":"on"),F==="KeyY"&&i.env.nextWeather(),F==="KeyG"&&i.setQuality(Vs[(Vs.indexOf(i.quality())+1)%Vs.length]),!1};addEventListener("keydown",F=>{if(q(F.code)){F.preventDefault();return}S[F.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(F.code)&&F.preventDefault()}),addEventListener("keyup",F=>S[F.code]=!1),addEventListener("blur",()=>{for(let F in S)S[F]=!1});let ce=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,z={id:null,ox:0,oy:0,x:0,y:0},se={id:null,x:0,y:0};if(ce){document.body.classList.add("touch"),i.setQuality("low");let F=r("stick");E.addEventListener("touchstart",pe=>{for(let he of pe.changedTouches)he.clientX<innerWidth*.45&&z.id==null?(Object.assign(z,{id:he.identifier,ox:he.clientX,oy:he.clientY,x:0,y:0}),F.hidden=!1,F.style.left=he.clientX+"px",F.style.top=he.clientY+"px"):se.id==null&&Object.assign(se,{id:he.identifier,x:he.clientX,y:he.clientY});pe.preventDefault()},{passive:!1}),E.addEventListener("touchmove",pe=>{for(let he of pe.changedTouches)he.identifier===z.id&&(z.x=Math.max(-1,Math.min(1,(he.clientX-z.ox)/55)),z.y=Math.max(-1,Math.min(1,(he.clientY-z.oy)/55))),he.identifier===se.id&&(N((he.clientX-se.x)*1.8,(he.clientY-se.y)*1.8),se.x=he.clientX,se.y=he.clientY);pe.preventDefault()},{passive:!1});let fe=pe=>{for(let he of pe.changedTouches)he.identifier===z.id&&(z.id=null,z.x=z.y=0,F.hidden=!0),he.identifier===se.id&&(se.id=null)};E.addEventListener("touchend",fe),E.addEventListener("touchcancel",fe);for(let pe of document.querySelectorAll("#touchpad button"))pe.addEventListener("click",()=>{let he=pe.dataset.key;he==="Space"?(S.Space=!0,setTimeout(()=>S.Space=!1,180)):he==="Pause"?P.hidden=!1:he==="Fire"?K():q(he)})}let Me=new Set(["castle","place_of_worship","museum","townhall","monastery","memorial","monument","church","chapel","manor","ruins","attraction","viewpoint","wayside_shrine","wayside_cross"]),me=[],le=new Set;for(let F of e.pois)Me.has(F.k)&&!le.has(F.n)&&(le.add(F.n),me.push({n:F.n,k:F.k.replace(/_/g," ").replace("place of worship","church"),x:F.p[0],z:F.p[1],real:!0,landmark:!0}));for(let F of e.places)!le.has(F.n)&&F.k!=="company"&&(le.add(F.n),me.push({n:F.n,k:F.k,x:F.x,z:F.z,real:!!F.real}));let ne=me.filter(F=>F.real).length,de="fulnek3d.found.v1",B=new Set;try{B=new Set(JSON.parse(localStorage.getItem(de)||"[]"))}catch{}let Te=r("toast"),$=r("log"),oe=0,X="",Q=(F,fe)=>{Te.innerHTML="";let pe=document.createElement("small"),he=document.createElement("strong");pe.textContent=F,he.textContent=fe,Te.append(pe,he),Te.hidden=!1,oe=4},ue=ed({city:e,toast:Q,landmarks:me.filter(F=>F.landmark),el:{list:r("errlist"),money:r("errmoney"),hint:r("hint"),shop:r("shop")}}),I=()=>{for(let F of me){let fe=Math.hypot(u.x-F.x,u.z-F.z);if(F.real&&fe<14&&!B.has(F.n)){B.add(F.n);try{localStorage.setItem(de,JSON.stringify([...B]))}catch{}Q(`Discovered \xB7 ${B.size} of ${ne}`,`${F.n} \xB7 ${F.k}`),Zs++}else!F.real&&fe<9&&X!==F.n&&(X=F.n,Q("Shop",`${F.n} \xB7 ${F.k}`))}$.textContent=`Places found ${B.size}/${ne}`},R=document.createElement("canvas");R.width=Math.round((l-o)/2),R.height=Math.round((c-a)/2);let J=R.getContext("2d");J.drawImage(s,0,0,R.width,R.height),J.lineCap=J.lineJoin="round";let ee=new Set(["primary","secondary","tertiary","trunk"]),ae=new Set(["residential","unclassified","service","living_street","pedestrian"]);for(let F of e.roads)J.strokeStyle=F.k==="stream"?"rgba(120,190,230,0.8)":F.k==="rail"?"rgba(40,40,40,0.7)":ee.has(F.k)?"rgba(255,236,190,0.85)":"rgba(255,255,255,0.55)",J.lineWidth=ee.has(F.k)?3:ae.has(F.k)||F.k==="rail"?2:1,J.beginPath(),F.p.forEach(([fe,pe],he)=>J[he?"lineTo":"moveTo"]((fe-o)/2,(pe-a)/2)),J.stroke();let Z=r("minimap"),xe=Z.getContext("2d"),Re=(F,fe,pe,he,Le)=>{F.save(),F.translate(fe,pe),F.rotate(he),F.beginPath(),F.moveTo(0,-Le),F.lineTo(Le*.62,Le*.7),F.lineTo(0,Le*.35),F.lineTo(-Le*.62,Le*.7),F.closePath(),F.fillStyle="#e0a43a",F.strokeStyle="#14181a",F.lineWidth=2,F.fill(),F.stroke(),F.restore()},Ce=()=>{let F=Z.width,fe=(u.x-o)/2,pe=(u.z-a)/2,he=120;if(xe.fillStyle="#3b4430",xe.fillRect(0,0,F,F),xe.drawImage(R,fe-he/2,pe-he/2,he,he,0,0,F,F),Be){let Le=F/(he*2),Ue=(Be.x-u.x)*Le,He=(Be.z-u.z)*Le,Ze=F/2-14,De=Math.hypot(Ue,He),[_e,st]=De<Ze?[F/2+Ue,F/2+He]:[F/2+Ue/De*Ze,F/2+He/De*Ze];xe.beginPath(),xe.arc(_e,st,F*.028,0,7),xe.fillStyle="#d9442b",xe.strokeStyle="#fff",xe.lineWidth=3,xe.fill(),xe.stroke()}Re(xe,F/2,F/2,-_,F*.06)},Be=null,be=(F,fe,pe,he=!1)=>{Be=F==null?null:{x:F,z:fe,label:pe,quiet:he}},Ee=r("bigcanvas"),Ae=Ee.getContext("2d"),Ne={zoom:1,cx:(o+l)/2,cz:(a+c)/2},Oe=1,nt=()=>{let F=devicePixelRatio,fe=innerWidth*.94,pe=innerHeight*.84;Ee.width=Math.round(fe*F),Ee.height=Math.round(pe*F),Ee.style.width=fe+"px",Ee.style.height=pe+"px",Oe=Math.max((l-o)/Ee.width,(c-a)/Ee.height)/Ne.zoom;let he=Ee.width*Oe/2,Le=Ee.height*Oe/2;Ne.cx=Math.min(Math.max(Ne.cx,o+he),l-he),Ne.cz=Math.min(Math.max(Ne.cz,a+Le),c-Le),he*2>l-o&&(Ne.cx=(o+l)/2),Le*2>c-a&&(Ne.cz=(a+c)/2);let Ue=De=>(De-Ne.cx+he)/Oe,He=De=>(De-Ne.cz+Le)/Oe;if(Ae.fillStyle="#20261f",Ae.fillRect(0,0,Ee.width,Ee.height),Ae.drawImage(s,0,0,s.width,s.height,Ue(o),He(a),(l-o)/Oe,(c-a)/Oe),Ae.lineCap=Ae.lineJoin="round",Ne.zoom>=2){Ae.strokeStyle="rgba(255,255,255,0.35)",Ae.lineWidth=F;for(let De of e.buildings){let _e=De.r[0];Ae.beginPath(),_e.forEach(([st,Qe],At)=>Ae[At?"lineTo":"moveTo"](Ue(st),He(Qe))),Ae.closePath(),Ae.stroke()}}for(let De of e.roads)Ae.strokeStyle=De.k==="stream"?"rgba(120,190,230,0.85)":De.k==="rail"?"rgba(40,40,40,0.8)":ee.has(De.k)?"rgba(255,236,190,0.9)":"rgba(255,255,255,0.65)",Ae.lineWidth=Math.max(F,De.w/Oe*.8),Ae.beginPath(),De.p.forEach(([_e,st],Qe)=>Ae[Qe?"lineTo":"moveTo"](Ue(_e),He(st))),Ae.stroke();let Ze=(De,_e,st,Qe,At="#f3ead2")=>{Ae.font=`600 ${Qe*F}px 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif`,Ae.lineWidth=3*F,Ae.strokeStyle="rgba(20,24,26,0.85)",Ae.strokeText(De,_e,st),Ae.fillStyle=At,Ae.fillText(De,_e,st)};if(Ne.zoom>=3){let De=new Set;for(let _e of e.roads.filter(st=>st.n).sort((st,Qe)=>Qe.p.length-st.p.length)){if(De.has(_e.n))continue;De.add(_e.n);let[st,Qe]=_e.p[Math.floor(_e.p.length/2)];Ae.textAlign="center",Ze(_e.n,Ue(st),He(Qe),11,"#fff3cf"),Ae.textAlign="left"}}for(let De of me){if(!De.real&&Ne.zoom<3)continue;let _e=Ue(De.x),st=He(De.z),Qe=B.has(De.n),At=4*F;Ae.beginPath(),Ae.arc(_e,st,At,0,7),Qe||!De.real?(Ae.fillStyle=De.real?"#e0a43a":"#8fb3d9",Ae.fill()):(Ae.lineWidth=2*F,Ae.strokeStyle="#f3ead2",Ae.stroke()),(Qe||!De.real||Ne.zoom>=4||["castle","place_of_worship","museum"].includes(De.k))&&Ze(De.n,_e+7*F,st+4*F,12)}if(Ne.zoom>=6){Ae.textAlign="center";for(let De of e.doors||[]){let _e=Ue(De[0]),st=He(De[1]);_e>-20&&st>-20&&_e<Ee.width+20&&st<Ee.height+20&&Ze(String(De[3]),_e,st,10,"#ffd2c8")}Ae.textAlign="left"}if(Be){let De=Ue(Be.x),_e=He(Be.z);Ae.beginPath(),Ae.arc(De,_e,7*F,0,7),Ae.fillStyle="#d9442b",Ae.strokeStyle="#fff",Ae.lineWidth=2*F,Ae.fill(),Ae.stroke(),Ze(Be.label,De+10*F,_e-8*F,13,"#ffd9cf")}Re(Ae,Ue(u.x),He(u.z),-_,11*F),r("mapzoom").textContent=`${Ne.zoom.toLocaleString("cs-CZ",{maximumFractionDigits:1})}\xD7`},Je=()=>{T.hidden?(Ne.cx=u.x,Ne.cz=u.z,nt(),T.hidden=!1,P.hidden=!0,H()&&document.exitPointerLock()):W()},it=F=>{let fe=Ee.getBoundingClientRect(),pe=Ee.width/fe.width;return[Ne.cx+((F.clientX-fe.left)*pe-Ee.width/2)*Oe,Ne.cz+((F.clientY-fe.top)*pe-Ee.height/2)*Oe]},te=(F,fe)=>{let[pe,he]=it(F),Le=Ne.zoom;Ne.zoom=Math.min(16,Math.max(1,Ne.zoom*fe));let Ue=Le/Ne.zoom;Ne.cx=pe+(Ne.cx-pe)*Ue,Ne.cz=he+(Ne.cz-he)*Ue,nt()};Ee.addEventListener("wheel",F=>{F.preventDefault(),te(F,F.deltaY<0?1.25:.8)},{passive:!1});let Pe=null;Ee.addEventListener("pointerdown",F=>{Pe={x:F.clientX,y:F.clientY,cx:Ne.cx,cz:Ne.cz,moved:!1},Ee.setPointerCapture(F.pointerId)}),Ee.addEventListener("pointermove",F=>{if(!Pe)return;let fe=Ee.getBoundingClientRect(),pe=Ee.width/fe.width*Oe,he=F.clientX-Pe.x,Le=F.clientY-Pe.y;Math.hypot(he,Le)>4&&(Pe.moved=!0),Pe.moved&&(Ne.cx=Pe.cx-he*pe,Ne.cz=Pe.cz-Le*pe,nt())}),Ee.addEventListener("pointerup",F=>{let fe=Pe;if(Pe=null,!fe||fe.moved)return;let[pe,he]=it(F);ye(pe,he),W()});for(let[F,fe]of[["mapin",1.6],["mapout",.625]])r(F).addEventListener("click",()=>{Ne.zoom=Math.min(16,Math.max(1,Ne.zoom*fe)),nt()});r("closemap").addEventListener("click",W);let ye=(F,fe,pe)=>{V&&V.st.mode!=="walk"&&(V.st.v=0,V.exit(u),p=Vr(d,5,_a)),u.set(Math.min(Math.max(F,o+3),l-3),0,Math.min(Math.max(fe,a+3),c-3)),u.y=pe??f(u.x,u.z),b.set(0,0,0)},we=()=>{let F=([fe,pe],he)=>{let Le=u.x-fe,Ue=u.z-pe,He=Math.hypot(Le,Ue);He<he&&He>1e-6&&(u.x+=Le/He*(he-He),u.z+=Ue/He*(he-He))};for(let fe=0;fe<2;fe++){p(u.x,u.z,pe=>{let he=pe*5;u.y+.3>d[he+4]||F(Sa(u.x,u.z,d[he],d[he+1],d[he+2],d[he+3]),gd)});for(let pe of i.cars.agentPos)u.y>pe[6]-1&&u.y<pe[6]+2.5&&F(Sa(u.x,u.z,pe[0]-pe[3]*pe[5],pe[1]-pe[4]*pe[5],pe[0]+pe[3]*pe[5],pe[1]+pe[4]*pe[5]),gd+pe[2])}},Ve=new O,Fe=new O,Ye=new O,mt=F=>{let fe=(...Le)=>Le.some(Ue=>S[Ue]);if(V.st.mode!=="walk"){V.step(F,{throttle:fe("KeyW","ArrowUp")||z.y<-.3,brake:fe("KeyS","ArrowDown")||z.y>.3,steer:fe("KeyA","ArrowLeft")-fe("KeyD","ArrowRight")-(Math.abs(z.x)>.15?z.x:0),hand:fe("Space")},{nearWalls:p,segs:d,closest:Sa,onRunOver:(Le,Ue)=>V.st.mode==="car"&&Y.runOver(Le,Ue)}),u.set(V.st.x,V.st.y,V.st.z),Ye.set(0,0,0),(L.t-=F)<0&&(L.yaw*=Math.exp(-F*2.5),L.pitch*=Math.exp(-F*2.5));return}Ve.set(-Math.sin(_),0,-Math.cos(_)),Fe.set(Math.cos(_),0,-Math.sin(_)),Ye.set(0,0,0).addScaledVector(Ve,fe("KeyW","ArrowUp")-fe("KeyS","ArrowDown")-z.y).addScaledVector(Fe,fe("KeyD","ArrowRight")-fe("KeyA","ArrowLeft")+z.x);let pe=Math.min(1,Ye.length());Ye.lengthSq()&&Ye.normalize().multiplyScalar(z.id!=null?pe:1);let he=fe("ShiftLeft","ShiftRight")||Math.hypot(z.x,z.y)>.95;if(C){let Le=w==="jet"?he?170:115:he?75:28;u.addScaledVector(Ye,Le*F),u.y+=(fe("Space")-fe("KeyC","ControlLeft")+(z.id!=null?-z.y*Math.sin(D):0))*Le*F,we(),u.y=Math.max(u.y,f(u.x,u.z))}else{let Le=he?9:4.2;u.x+=Ye.x*Le*F,u.z+=Ye.z*Le*F,we(),b.y-=22*F,S.Space&&y&&(b.y=6.2,y=!1),u.y+=b.y*F;let Ue=f(u.x,u.z);u.y<=Ue||y&&b.y<=0&&u.y-Ue<.6?(u.y=Ue,b.y=0,y=!0):y=!1}u.x=Math.min(Math.max(u.x,o+3),l-3),u.z=Math.min(Math.max(u.z,a+3),c-3)},wt=r("street"),ct=r("coords"),Xt=r("fps"),Jt=r("speedo"),un=0,ji=0,An=performance.now(),fn={t:0,n:0,t0:0},Xs=()=>{let F=20,fe="";m(u.x,u.z,Ue=>{let He=Ue*4,[Ze,De]=Sa(u.x,u.z,x[He],x[He+1],x[He+2],x[He+3]),_e=Math.hypot(u.x-Ze,u.z-De);_e<F&&(F=_e,fe=e.roads[v[Ue]].n)}),wt.textContent=fe,wt.hidden=!fe;let pe=h.lat0-u.z/h.mz,he=h.lon0+u.x/h.mx,Le=(-_*180/Math.PI%360+360)%360;ct.textContent=`${On(pe,5)}\xB0 N  ${On(he,5)}\xB0 E  \xB7  ${On(u.y)} m a.s.l.  \xB7  ${xd[Math.round(Le/45)%8]} ${On(Le)}\xB0  \xB7  ${i.env.clock()} ${i.env.weather()}${C?`  \xB7  ${w}`:""}`},qs=()=>{t.setSize(innerWidth,innerHeight),n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),T.hidden||nt()};addEventListener("resize",qs),qs(),i.scene.add(n);let Ai=ld({city:e,scene:i.scene,groundAt:f,agentPos:i.cars.agentPos,parked:i.cars.parked}),Ys=md({renderer:t,world:i,camera:n});V=nd({world:i,city:e,groundAt:f,camera:n,scene:i.scene,audio:k,fleet:Ai}),i.env.onThunder=F=>k.thunder(F);let Ri=(F,fe)=>{let pe=null,he=1/0;for(let Le of me)if(Le.real&&!B.has(Le.n)){let Ue=Math.hypot(Le.x-F,Le.z-fe);Ue<he&&Ue>30&&(he=Ue,pe=Le)}return pe},dn=sd({city:e,world:i,errands:ue,el:r("talk"),toast:Q,setTarget:be,undiscovered:Ri}),Ci=e.places.find(F=>F.k==="police"||/police|policie/i.test(F.n));Y=ad({camera:n,scene:i.scene,people:i.people,groundAt:f,wantedEl:r("wanted"),weaponEl:r("weapon"),toast:Q,audio:k,onArrest:()=>{let F=Ci?Ci.x+5:e.spawn[0],fe=Ci?Ci.z+5:e.spawn[1];ye(F,fe),p=Vr(d,5,_a),ue.fine(250)}}),j=cd({city:e,world:i,scene:i.scene,camera:n,renderer:t,veh:V,fleet:Ai,errands:ue,toast:Q,setTarget:be,audio:k});let pn={walk:0,car:0,bike:0},Ki=null,Zs=0,U=F=>`${On(F/1e3,1)} km`,re=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ge=F=>{let fe=new Date(F*864e5);return`${re[fe.getUTCDay()]} ${fe.getUTCDate()}. ${fe.getUTCMonth()+1}.`},ve=(F,fe,pe)=>{F.innerHTML="";let he=document.createElement("h2");he.textContent=fe,F.append(he);let Le=[];for(let[Ue,He]of pe)if(Ue==="h"){let Ze=document.createElement("h3");Ze.textContent=He,F.append(Ze)}else if(Ue==="p"){let Ze=document.createElement("p");Ze.textContent=He,F.append(Ze)}else if(Ue==="rows"){let Ze=document.createElement("table");for(let[De,_e]of He){let st=Ze.insertRow();st.insertCell().textContent=De,st.insertCell().textContent=_e}F.append(Ze)}else if(Ue==="go"){let[Ze,De,_e,st]=He,Qe=document.createElement("button"),At=document.createElement("kbd"),Gn=document.createElement("span"),qt=document.createElement("span");At.textContent=Le.length+1,Gn.textContent=Ze,qt.textContent=`${On(Math.hypot(De-u.x,_e-u.z))} m`,Qe.type="button",Qe.append(At,Gn,qt);let li=()=>{be(De,_e,st||Ze),Q("Guiding you",st||Ze)};Qe.addEventListener("click",li),Le.push(li),F.append(Qe)}return Le},ie=(()=>{let F=r("phone"),fe=!1,pe=[],he=0,Le=()=>{let Ue=i.env.st,He=ue.stats(),Ze=[["p",`${ge(Ue.day)} \xB7 ${i.env.clock()} \xB7 ${i.env.weather()} \xB7 ${ue.kc(ue.money())}`],["h","Tasks"]];for(let _e of ue.tasks())_e.done||(_e.type==="buy"?Ze.push(["go",[`Buy ${_e.item} \xB7 ${_e.shop}`,_e.x,_e.z,_e.shop]]):_e.type==="visit"?Ze.push(["go",[`Visit ${_e.place}`,_e.x,_e.z,_e.place]]):Ze.push(["go",_e.got?[`Bring ${_e.item} to ${_e.from} \xB7 ${_e.addr}`,_e.x,_e.z,_e.addr]:[`Buy ${_e.item} for ${_e.from} \xB7 ${_e.shop}`,_e.sx,_e.sz,_e.shop]]));ue.tasks().some(_e=>!_e.done)||Ze.push(["p","All done. Ask people if they need a hand (E)."]),ue.bag().length&&Ze.push(["p",`Bag: ${ue.bag().slice(-8).join(", ")}`]),j.status()&&Ze.push(["h","Duty"],["p",j.status()]),Ze.push(["h","Forecast"],["rows",[["now",i.env.weather()],...i.env.forecast().map(_e=>[_e.at,_e.name])]]);let De=Ri(u.x,u.z);Ze.push(["h",`Places \xB7 ${B.size} of ${ne} found`]),De&&Ze.push(["go",[`Nearest new: ${De.n}`,De.x,De.z,De.n]]),Ze.push(["h","Today"],["rows",[["walked",U(pn.walk)],["driven",U(pn.car)],["cycled",U(pn.bike)],["errands done",On(He.done)],["spent",ue.kc(He.spent)],["earned",ue.kc(He.earned)]]]),Ze.push(["p","1\u20139 guide me there \xB7 P or Esc to close"]),pe=ve(F,"Phone",Ze)};return{toggle:()=>{fe=!fe,F.hidden=!fe,fe&&Le()},refresh:()=>{fe&&(he+=.25)>=1&&(he=0,Le())},key:Ue=>{if(!fe)return!1;if(Ue==="Escape"||Ue==="KeyP")return fe=!1,F.hidden=!0,!0;let He=/^Digit([1-9])$/.exec(Ue);return He&&pe[He[1]-1]?(pe[He[1]-1](),fe=!1,F.hidden=!0,!0):!1}}})(),Ie=(()=>{let F=r("summary"),fe=0;return{show:pe=>{let he=ue.resetStats();ve(F,`${ge(pe)} is over`,[["rows",[["walked",U(pn.walk)],["driven",U(pn.car)],["cycled",U(pn.bike)],["errands done",On(he.done)],["spent",ue.kc(he.spent)],["earned",ue.kc(he.earned)],["places found",On(Zs)],["wallet",ue.kc(ue.money())]]],["p","Good night, Fulnek. E to continue."]]),F.hidden=!1,fe=12,pn.walk=pn.car=pn.bike=0,Zs=0;let Le=()=>{(fe-=1)<=0?F.hidden=!0:setTimeout(Le,1e3)};setTimeout(Le,1e3)},key:pe=>F.hidden||!(pe==="KeyE"||pe==="Escape")?!1:(F.hidden=!0,!0)}})(),Ge=performance.now(),Xe=F=>{let fe=Math.max(0,Math.min((F-Ge)/1e3,.05));Ge=F;let pe=P.hidden&&T.hidden;if(pe){let Ue=u.x,He=u.z;mt(fe),C||(pn[V.st.mode]+=Math.min(50,Math.hypot(u.x-Ue,u.z-He)))}pe&&G&&K(),pe&&Y.update(fe,u,_,C?"fly":V.st.mode,p,d,V.st.mode==="car"?V.st:null,i.cars.agentPos),pe&&j.update(fe,{pos:u,firing:G&&T.hidden&&!dn.isOpen()});let he=i.env.st,Le=pe&&!C&&y&&Ye.lengthSq()>0;if(i.cars.honk&&(i.cars.honk=!1,k.horn()),i.people.dogDist<9&&Math.random()<fe*.12&&k.bark(),k.update({dt:fe,wind:ot.uWind.value,rain:he.rain,day:1-ot.uNight.value,carDist:i.cars.nearest,drive:V.st.mode==="car"?Math.min(1,Math.abs(V.st.v)/20):void 0,moving:Le,running:Le&&(S.ShiftLeft||S.ShiftRight),hour:he.hour}),C&&M){M.group.position.set(u.x,u.y+1.2,u.z),M.group.rotation.set(0,_,0),M.rotors.forEach((Ze,De)=>{Ze.rotation.y+=fe*(De?22:34)});let Ue=-Math.sin(_),He=-Math.cos(_);n.position.set(u.x-Ue*(w==="jet"?18:14),u.y+(w==="jet"?7:6),u.z-He*(w==="jet"?18:14)),n.lookAt(u.x+Ue*14,u.y+1.5,u.z+He*14)}else V.view(fe,ot.uNight.value,L.yaw,L.pitch)||(n.position.set(u.x,u.y+Ny,u.z),n.rotation.set(D,_,0,"YXZ"));if(i.update(fe,n.position,u,F/1e3),Ys.render(fe),Ce(),(un+=fe)>.25){un=0,Xs(),I(),ue.update(u,i.env.st.hour,i.env.st.day);let Ue=V.st.mode!=="walk",He=r("hint");Jt.hidden=!Ue,Ue&&(Jt.textContent=`${On(V.speed())} km/h`),dn.update(u);let Ze=j.hint(u);if(Ze)He.hidden=!1,He.textContent=Ze;else if(Ue||dn.isOpen())He.hidden=!0;else if(He.hidden&&!ue.isOpen()){let _e=dn.nearName(u),st=_e?`E \xB7 talk to ${_e}`:V.nearHint(u);He.hidden=!st,He.textContent=st}let De=r("target");if(Be){let _e=Math.hypot(Be.x-u.x,Be.z-u.z),st=(Math.atan2(Be.x-u.x,-(Be.z-u.z))*180/Math.PI+360)%360;_e<12&&!Be.quiet?(Q("You're there",Be.label),Be=null,De.hidden=!0):(De.hidden=!1,De.textContent=`\u2192 ${Be.label} \xB7 ${On(_e)} m ${xd[Math.round(st/45)%8]}`)}else De.hidden=!0;ie.refresh(),he.day!==Ki&&(Ki!==null&&Ie.show(Ki),Ki=he.day)}oe>0&&(oe-=fe)<=0&&(Te.hidden=!0),pe&&fn.t<6&&(fn.t+=fe,fn.n++,fn.t>=6?fn.n/((F-fn.t0)/1e3)<24&&i.quality()!=="low"&&(i.setQuality(Vs[Math.max(0,Vs.indexOf(i.quality())-1)]),Q("Graphics",`Lowered to ${i.quality()} for smoother play \xB7 G to change`)):fn.n===1&&(fn.t0=F)),ji++,F-An>=1e3&&(Xt.textContent=`${Math.round(ji*1e3/(F-An))} fps \xB7 ${i.quality()} quality (G)`,ji=0,An=F),requestAnimationFrame(Xe)};requestAnimationFrame(Xe),Xs(),window.__fulnek={world:i,renderer:t,teleport:ye,pose:(F,fe,pe,he,Le,Ue=!1)=>{ye(F,fe,Le),_=pe,D=he,C=Ue},state:()=>({x:u.x,y:u.y,z:u.z,yaw:_,pitch:D,fly:C,mode:V.st.mode}),press:q,keys:S,veh:V,crime:Y,services:j,post:Ys,talk:dn,phone:ie,summary:Ie,errands:ue,setTarget:be,sim:F=>{for(let fe=0;fe<F;fe+=1/60)mt(1/60)}}}var Mh=document.getElementById("status"),yd=i=>(Mh.textContent=i,new Promise(e=>setTimeout(e,30)));async function Uy(){let i=window.FULNEK_CITY,e=window.FULNEK_ORTHO;if(!i||!e)throw new Error("The map data didn't load. Keep the data folder next to index.html.");let t=new Oo({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.shadowMap.enabled=!0,t.shadowMap.type=Dc,t.toneMapping=Rr,document.getElementById("view").appendChild(t.domElement),await yd("Developing the aerial photo");let n=new Image;n.src=e,await n.decode(),await yd(`Raising ${i.buildings.length.toLocaleString("cs-CZ")} buildings and planting trees`);let s=Jf(i,n,t),r=new Vt(70,innerWidth/innerHeight,.25,6e3);vd({world:s,city:i,renderer:t,camera:r,ortho:n});let o=l=>l.toLocaleString("cs-CZ"),a=s.counts;document.getElementById("facts").textContent=`${o(i.buildings.length)} buildings \xB7 ${o(a.trees)} trees \xB7 ${o(a.bushes)} bushes \xB7 ${o(a.people)} people \xB7 ${o(a.dogs)} dogs \xB7 ${o(a.cars+a.traffic)} cars`,document.getElementById("credits").textContent=i.credits,document.getElementById("go").disabled=!1,document.body.classList.add("ready")}Uy().catch(i=>{console.error(i),Mh.textContent="Couldn't start: "+i.message,Mh.classList.add("error")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
