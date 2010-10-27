/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("loader-base",function(D){if(!YUI.Env[D.version]){(function(){var i=D.version,e="/build/",f=i+e,X=D.Env.base,Y="gallery-2010.09.01-19-12",a="2in3",Z="3",c="2.8.1",g=X+"combo?",h={version:i,root:f,base:D.Env.base,comboBase:g,skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["cssreset","cssfonts","cssgrids","cssbase","cssreset-context","cssfonts-context"]},groups:{},patterns:{}},b=h.groups,d=function(k,l){var j=a+"."+(k||Z)+"/"+(l||c)+e;b.yui2.base=X+j;b.yui2.root=j;},L=function(j){var k=(j||Y)+e;b.gallery.base=X+k;b.gallery.root=k;};b[i]={};b.gallery={ext:false,combine:true,comboBase:g,update:L,patterns:{"gallery-":{},"gallerycss-":{type:"css"}}};b.yui2={combine:true,ext:false,comboBase:g,update:d,patterns:{"yui2-":{configFn:function(j){if(/-skin|reset|fonts|grids|base/.test(j.name)){j.type="css";j.path=j.path.replace(/\.js/,".css");j.path=j.path.replace(/\/yui2-skin/,"/assets/skins/sam/yui2-skin");}}}}};L();d();YUI.Env[i]=h;}());}var F={},M=[],B=(D.UA.ie)?2048:8192,O=YUI.Env,R=O._loaded,Q="css",K="js",W="intl",T=D.version,V="",I=D.Object,S=I.each,E=D.Array,H=O._loaderQueue,U=O[T],N="skin-",J=D.Lang,A=O.mods,C,P,G=function(X,Y,Z,L){var a=X+"/"+Y;if(!L){a+="-min";}a+="."+(Z||Q);return a;};D.Env.meta=U;D.Loader=function(Y){var X=U.modules,L=this;C=U.md5;L.context=D;L.base=D.Env.meta.base;L.comboBase=D.Env.meta.comboBase;L.combine=Y.base&&(Y.base.indexOf(L.comboBase.substr(0,20))>-1);L.maxURLLength=B;L.root=D.Env.meta.root;L.timeout=0;L.forceMap={};L.allowRollup=true;L.filters={};L.required={};L.patterns={};L.moduleInfo={};L.groups=D.merge(D.Env.meta.groups);L.skin=D.merge(D.Env.meta.skin);L.conditions={};L.config=Y;L._internal=true;P=O._renderedMods;if(P){S(P,function(a,Z){L.moduleInfo[Z]=D.merge(a);});P=O._conditions;S(P,function(a,Z){L.conditions[Z]=D.merge(a);});}else{S(X,L.addModule,L);}if(!O._renderedMods){O._renderedMods=D.merge(L.moduleInfo);O._conditions=D.merge(L.conditions);}L._inspectPage();L._internal=false;L._config(Y);L.sorted=[];L.loaded=R[T];L.dirty=true;L.inserted={};L.skipped={};};D.Loader.prototype={FILTER_DEFS:{RAW:{"searchExp":"-min\\.js","replaceStr":".js"},DEBUG:{"searchExp":"-min\\.js","replaceStr":"-debug.js"}},_inspectPage:function(){S(A,function(Y,X){if(Y.details){var L=this.moduleInfo[X],a=Y.details.requires,Z=L&&L.requires;if(L){if(!L._inspected&&a&&Z.length!=a.length){delete L.expanded;}}else{L=this.addModule(Y.details,X);}L._inspected=true;}},this);},_requires:function(d,c){var Z,b,L,e,f,X=this.moduleInfo,Y=X[d],a=X[c];if(!Y||!a){return false;}b=Y.expanded_map;L=Y.after;e=Y.after_map;if(b&&(c in b)){return true;}if(e&&(c in e)){return true;}else{if(L&&E.indexOf(L,c)>-1){return true;}}f=X[c]&&X[c].supersedes;if(f){for(Z=0;Z<f.length;Z++){if(this._requires(d,f[Z])){return true;}}}if(Y.ext&&Y.type==Q&&!a.ext&&a.type==Q){return true;}return false;},_config:function(d){var Y,X,c,Z,b,a,L=this;if(d){for(Y in d){if(d.hasOwnProperty(Y)){c=d[Y];if(Y=="require"){L.require(c);}else{if(Y=="skin"){D.mix(L.skin,d[Y],true);}else{if(Y=="groups"){for(X in c){if(c.hasOwnProperty(X)){a=X;b=c[X];L.addGroup(b,a);}}}else{if(Y=="modules"){S(c,L.addModule,L);}else{if(Y=="gallery"){this.groups.gallery.update(c);}else{if(Y=="yui2"||Y=="2in3"){this.groups.yui2.update(d["2in3"],d.yui2);}else{if(Y=="maxURLLength"){L[Y]=Math.min(B,c);}else{L[Y]=c;}}}}}}}}}}Z=L.filter;if(J.isString(Z)){Z=Z.toUpperCase();L.filterName=Z;L.filter=L.FILTER_DEFS[Z];if(Z=="DEBUG"){L.require("yui-log","dump");}}},formatSkin:function(Y,L){var X=N+Y;if(L){X=X+"-"+L;}return X;},_addSkin:function(e,b,d){var c,a,L,Z=this.moduleInfo,X=this.skin,Y=Z[b]&&Z[b].ext;if(b){L=this.formatSkin(e,b);if(!Z[L]){c=Z[b];a=c.pkg||b;this.addModule({name:L,group:c.group,type:"css",after:X.after,after_map:E.hash(X.after),path:(d||a)+"/"+X.base+e+"/"+b+".css",ext:Y});}}return L;},addGroup:function(Z,X){var Y=Z.modules,L=this;X=X||Z.name;Z.name=X;L.groups[X]=Z;if(Z.patterns){S(Z.patterns,function(b,a){b.group=X;L.patterns[a]=b;});}if(Y){S(Y,function(b,a){b.group=X;L.addModule(b,a);},L);}},addModule:function(m,v){v=v||m.name;m.name=v;if(!m||!m.name){return null;}if(!m.type){m.type=K;}if(!m.path&&!m.fullpath){m.path=G(v,v,m.type);}m.ext=("ext" in m)?m.ext:(this._internal)?false:true;m.requires=m.requires||[];var q=m.submodules,r,n,Y,k,Z,t,X,p,h,g,d,e,a,w,u,L,c,b=this.conditions,f;this.moduleInfo[v]=m;if(!m.langPack&&m.lang){h=E(m.lang);for(p=0;p<h.length;p++){w=h[p];g=this.getLangPackName(w,v);Z=this.moduleInfo[g];if(!Z){Z=this._addLangPack(w,m,g);}}}if(q){Y=m.supersedes||[];n=0;for(r in q){if(q.hasOwnProperty(r)){k=q[r];k.path=k.path||G(v,r,m.type);k.pkg=v;k.group=m.group;if(k.supersedes){Y=Y.concat(k.supersedes);}Z=this.addModule(k,r);Y.push(r);if(Z.skinnable){m.skinnable=true;L=this.skin.overrides;if(L&&L[r]){for(p=0;p<L[r].length;p++){c=this._addSkin(L[r][p],r,v);Y.push(c);}}c=this._addSkin(this.skin.defaultSkin,r,v);Y.push(c);}if(k.lang&&k.lang.length){h=E(k.lang);for(p=0;p<h.length;p++){w=h[p];g=this.getLangPackName(w,v);d=this.getLangPackName(w,r);Z=this.moduleInfo[g];if(!Z){Z=this._addLangPack(w,m,g);}e=e||E.hash(Z.supersedes);if(!(d in e)){Z.supersedes.push(d);}m.lang=m.lang||[];a=a||E.hash(m.lang);if(!(w in a)){m.lang.push(w);}}}n++;}}m.supersedes=I.keys(E.hash(Y));m.rollup=(n<4)?n:Math.min(n-1,4);}t=m.plugins;if(t){for(r in t){if(t.hasOwnProperty(r)){X=t[r];X.pkg=v;X.path=X.path||G(v,r,m.type);X.requires=X.requires||[];X.group=m.group;this.addModule(X,r);if(m.skinnable){this._addSkin(this.skin.defaultSkin,r,v);}}}}if(m.condition){f=m.condition.trigger;b[f]=b[f]||{};b[f][v]=m.condition;}if(m.configFn){u=m.configFn(m);if(u===false){delete this.moduleInfo[v];m=null;}}return m;},require:function(X){var L=(typeof X==="string")?arguments:X;this.dirty=true;D.mix(this.required,E.hash(L));},getRequires:function(t){if(!t||t._parsed){return M;}var n,h,l,b,Z,v,u=t.name,Y,k,c=A[u]&&A[u].details,q=[],a,g,e,X,s,f=t.lang||t.intl,p=this.moduleInfo,L={};if(t.temp&&c){g=t;t=this.addModule(c,u);t.group=g.group;t.pkg=g.pkg;delete t.expanded;
}if(t.expanded&&(!t.langCache||t.langCache==this.lang)){return t.expanded;}a=t.requires;e=t.optional;t._parsed=true;if(t.skinnable){s=this.skin.overrides;if(s&&s[u]){for(n=0;n<s[u].length;n++){X=this._addSkin(s[u][n],u);q.push(X);}}else{X=this._addSkin(this.skin.defaultSkin,u);q.push(X);}}for(n=0;n<a.length;n++){if(!L[a[n]]){q.push(a[n]);L[a[n]]=true;h=this.getModule(a[n]);if(h){b=this.getRequires(h);f=f||(h.expanded_map&&(W in h.expanded_map));for(l=0;l<b.length;l++){q.push(b[l]);}}}}a=t.supersedes;if(a){for(n=0;n<a.length;n++){if(!L[a[n]]){if(t.submodules){q.push(a[n]);}L[a[n]]=true;h=this.getModule(a[n]);if(h){b=this.getRequires(h);f=f||(h.expanded_map&&(W in h.expanded_map));for(l=0;l<b.length;l++){q.push(b[l]);}}}}}if(e&&this.loadOptional){for(n=0;n<e.length;n++){if(!L[e[n]]){q.push(e[n]);L[e[n]]=true;h=p[e[n]];if(h){b=this.getRequires(h);f=f||(h.expanded_map&&(W in h.expanded_map));for(l=0;l<b.length;l++){q.push(b[l]);}}}}}Y=this.conditions[u];if(Y){S(Y,function(i,d){if(!L[d]){k=i&&((i.ua&&D.UA[i.ua])||(i.test&&i.test(D,a)));if(k){L[d]=true;q.push(d);h=this.getModule(d);if(h){b=this.getRequires(h);for(l=0;l<b.length;l++){q.push(b[l]);}}}}},this);}t._parsed=false;if(f){if(t.lang&&!t.langPack&&D.Intl){v=D.Intl.lookupBestLang(this.lang||V,t.lang);t.langCache=this.lang;Z=this.getLangPackName(v,u);if(Z){q.unshift(Z);}}q.unshift(W);}t.expanded_map=E.hash(q);t.expanded=I.keys(t.expanded_map);return t.expanded;},getProvides:function(X){var L=this.getModule(X),Z,Y;if(!L){return F;}if(L&&!L.provides){Z={};Y=L.supersedes;if(Y){E.each(Y,function(a){D.mix(Z,this.getProvides(a));},this);}Z[X]=true;L.provides=Z;}return L.provides;},calculate:function(X,L){if(X||L||this.dirty){if(X){this._config(X);}if(!this._init){this._setup();}this._explode();if(this.allowRollup){this._rollup();}this._reduce();this._sort();}},_addLangPack:function(b,L,a){var Z=L.name,Y,X=this.moduleInfo[a];if(!X){Y=G((L.pkg||Z),a,K,true);this.addModule({path:Y,intl:true,langPack:true,ext:L.ext,group:L.group,supersedes:[]},a,true);if(b){D.Env.lang=D.Env.lang||{};D.Env.lang[b]=D.Env.lang[b]||{};D.Env.lang[b][Z]=true;}}return this.moduleInfo[a];},_setup:function(){var c=this.moduleInfo,Z,a,Y,L,X,b;for(Z in c){if(c.hasOwnProperty(Z)){L=c[Z];if(L){L.requires=I.keys(E.hash(L.requires));if(L.lang&&L.lang.length){b=this.getLangPackName(V,Z);this._addLangPack(null,L,b);}}}}X={};if(!this.ignoreRegistered){D.mix(X,O.mods);}if(this.ignore){D.mix(X,E.hash(this.ignore));}for(Y in X){if(X.hasOwnProperty(Y)){D.mix(X,this.getProvides(Y));}}if(this.force){for(a=0;a<this.force.length;a++){if(this.force[a] in X){delete X[this.force[a]];}}}D.mix(this.loaded,X);this._init=true;},getLangPackName:function(X,L){return("lang/"+L+((X)?"_"+X:""));},_explode:function(){var a=this.required,L,Z,X={},Y=this;Y.dirty=false;S(a,function(b,d){if(!X[d]){X[d]=true;L=Y.getModule(d);if(L){var c=L.expound;if(c){a[c]=Y.getModule(c);Z=Y.getRequires(a[c]);D.mix(a,E.hash(Z));}Z=Y.getRequires(L);D.mix(a,E.hash(Z));}}});},getModule:function(b){if(!b){return null;}var a,Z,X,L=this.moduleInfo[b],Y=this.patterns;if(!L){for(X in Y){if(Y.hasOwnProperty(X)){a=Y[X];if(b.indexOf(X)>-1){Z=a;break;}}}if(Z){if(a.action){a.action.call(this,b,X);}else{L=this.addModule(D.merge(Z),b);L.temp=true;}}}return L;},_rollup:function(){},_reduce:function(b){b=b||this.required;var Y,X,a,L,Z=this.loadType;for(Y in b){if(b.hasOwnProperty(Y)){L=this.getModule(Y);if(((this.loaded[Y]||A[Y])&&!this.forceMap[Y]&&!this.ignoreRegistered)||(Z&&L&&L.type!=Z)){delete b[Y];}a=L&&L.supersedes;if(a){for(X=0;X<a.length;X++){if(a[X] in b){delete b[a[X]];}}}}}return b;},_finish:function(Y,X){H.running=false;var L=this.onEnd;if(L){L.call(this.context,{msg:Y,data:this.data,success:X});}this._continue();},_onSuccess:function(){var L=D.merge(this.skipped),X;S(L,function(Y){delete this.inserted[Y];},this);this.skipped={};S(this.inserted,function(Z,Y){D.mix(this.loaded,this.getProvides(Y));},this);X=this.onSuccess;if(X){X.call(this.context,{msg:"success",data:this.data,success:true,skipped:L});}this._finish("success",true);},_onFailure:function(Y){var L=this.onFailure,X="failure: "+Y.msg;if(L){L.call(this.context,{msg:X,data:this.data,success:false});}this._finish(X,false);},_onTimeout:function(){var L=this.onTimeout;if(L){L.call(this.context,{msg:"timeout",data:this.data,success:false});}this._finish("timeout",false);},_sort:function(){var h=I.keys(this.required),c={},L=0,Y,g,f,d,Z,e,X;for(;;){Y=h.length;e=false;for(d=L;d<Y;d++){g=h[d];for(Z=d+1;Z<Y;Z++){X=g+h[Z];if(!c[X]&&this._requires(g,h[Z])){f=h.splice(Z,1);h.splice(d,0,f[0]);c[X]=true;e=true;break;}}if(e){break;}else{L++;}}if(!e){break;}}this.sorted=h;},_insert:function(L,Z,Y){if(L){this._config(L);}this.calculate(Z);this.loadType=Y;if(!Y){var X=this;this._internalCallback=function(){var b=X.onCSS,d,c,a;if(this.insertBefore&&D.UA.ie){d=D.config.doc.getElementById(this.insertBefore);c=d.parentNode;a=d.nextSibling;c.removeChild(d);if(a){c.insertBefore(d,a);}else{c.appendChild(d);}}if(b){b.call(X.context,D);}X._internalCallback=null;X._insert(null,null,K);};this._insert(null,null,Q);return;}this._loading=true;this._combineComplete={};this.loadNext();},_continue:function(){if(!(H.running)&&H.size()>0){H.running=true;H.next()();}},insert:function(Y,X){var L=this,Z=D.merge(this,true);delete Z.require;delete Z.dirty;H.add(function(){L._insert(Z,Y,X);});this._continue();},loadNext:function(e){if(!this._loading){return;}var h,v,u,q,a,f,d,r,g,L,t,Y,b,p,c,X,w,o,Z=this.loadType,n=this,k=function(i){n.loadNext(i.data);},l=function(s){n._combineComplete[Z]=true;var m,j=X.length;for(m=0;m<j;m++){n.inserted[X[m]]=true;}k(s);};if(this.combine&&(!this._combineComplete[Z])){X=[];this._combining=X;h=this.sorted;v=h.length;o=this.comboBase;a=o;w=[];p={};for(u=0;u<v;u++){b=o;q=this.getModule(h[u]);L=q&&q.group;if(L){g=this.groups[L];if(!g.combine){q.combine=false;continue;}q.combine=true;if(g.comboBase){b=g.comboBase;}if(g.root){q.root=g.root;}}p[b]=p[b]||[];p[b].push(q);}for(t in p){if(p.hasOwnProperty(t)){a=t;
c=p[t];v=c.length;for(u=0;u<v;u++){q=c[u];if(q&&(q.type===Z)&&(q.combine||!q.ext)){Y=(q.root||this.root)+q.path;if((a!==t)&&(u<(v-1))&&((Y.length+a.length)>this.maxURLLength)){w.push(this._filter(a));a=t;}a+=Y;if(u<(v-1)){a+="&";}X.push(q.name);}}if(X.length&&(a!=t)){w.push(this._filter(a));}}}if(X.length){if(Z===Q){f=D.Get.css;r=this.cssAttributes;}else{f=D.Get.script;r=this.jsAttributes;}f(w,{data:this._loading,onSuccess:l,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,attributes:r,timeout:this.timeout,autopurge:false,context:this});return;}else{this._combineComplete[Z]=true;}}if(e){if(e!==this._loading){return;}this.inserted[e]=true;if(this.onProgress){this.onProgress.call(this.context,{name:e,data:this.data});}}h=this.sorted;v=h.length;for(u=0;u<v;u=u+1){if(h[u] in this.inserted){continue;}if(h[u]===this._loading){return;}q=this.getModule(h[u]);if(!q){d="Undefined module "+h[u]+" skipped";this.skipped[h[u]]=true;continue;}g=(q.group&&this.groups[q.group])||F;if(!Z||Z===q.type){this._loading=h[u];if(q.type===Q){f=D.Get.css;r=this.cssAttributes;}else{f=D.Get.script;r=this.jsAttributes;}a=(q.fullpath)?this._filter(q.fullpath,h[u]):this._url(q.path,h[u],g.base||q.base);f(a,{data:h[u],onSuccess:k,insertBefore:this.insertBefore,charset:this.charset,attributes:r,onFailure:this._onFailure,onTimeout:this._onTimeout,timeout:this.timeout,autopurge:false,context:n});return;}}this._loading=null;f=this._internalCallback;if(f){this._internalCallback=null;f.call(this);}else{this._onSuccess();}},_filter:function(X,L){var a=this.filter,Z=L&&(L in this.filters),Y=Z&&this.filters[L];if(X){if(Z){a=(J.isString(Y))?this.FILTER_DEFS[Y.toUpperCase()]||null:Y;}if(a){X=X.replace(new RegExp(a.searchExp,"g"),a.replaceStr);}}return X;},_url:function(Y,L,X){return this._filter((X||this.base||"")+Y,L);}};},"3.2.0",{requires:["get"]});