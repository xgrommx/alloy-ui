AUI.add("aui-node-html5-print",function(B){(function(K,P,G,D,A,C){if(!C||C>=9){return;}var I=new RegExp("(^|\\s)("+A+")","gi"),Q=new RegExp("<(/*)("+A+")","gi"),R=new RegExp("(^|[^\\n]*?\\s)("+A+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),N=P.createDocumentFragment(),H=P.documentElement,M=H.firstChild,F=P.createElement("body"),O=P.createElement("style");var J;function E(T){var S=-1;while(++S<D){T.createElement(G[S]);}}function L(W,U){var T=-1;var S=W.length;var X;var V=[];while(++T<S){X=W[T];if((U=X.media||U)!="screen"){V.push(L(X.imports,U),X.cssText);}}return V.join("");}E(P);E(N);M.insertBefore(O,M.firstChild);O.media="print";K.attachEvent("onbeforeprint",function(){var T=-1;var S;var W=L(P.styleSheets,"all");var V=[];var U;var Y;var X;J=J||P.body;while((X=R.exec(W))!=null){V.push((X[1]+X[2]+X[3]).replace(I,"$1.iepp_$2")+X[4]);}O.styleSheet.cssText=V.join("\n");while(++T<D){U=P.getElementsByTagName(G[T]),Y=U.length,S=-1;while(++S<Y){if(U[S].className.indexOf("iepp_")<0){U[S].className+=" iepp_"+G[T];}}}N.appendChild(J);H.appendChild(F);F.className=J.className;F.innerHTML=J.innerHTML.replace(Q,"<$1font");});K.attachEvent("onafterprint",function(){F.innerHTML="";H.removeChild(F);H.appendChild(J);O.styleSheet.cssText="";});})(B.config.win,B.config.doc,YUI.AUI.HTML5_ELEMENTS,YUI.AUI.HTML5_ELEMENTS.length,YUI.AUI.HTML5_ELEMENTS.join("|"),B.UA.ie);},"@VERSION@",{requires:["aui-node-html5"]});