YUI.add("node",function(C){C.Array._diff=function(P,O){var T=[],V=false;outer:for(var R=0,U=P.length;R<U;R++){V=false;for(var Q=0,S=O.length;Q<S;Q++){if(P[R]===O[Q]){V=true;continue outer;}}if(!V){T[T.length]=P[R];}}return T;};C.Array.diff=function(P,O){return{added:C.Array._diff(O,P),removed:C.Array._diff(P,O)};};var L=[],J=Array.prototype.slice,D="_yuid",A=function(P){var Q=P.doc||C.config.doc,O=P.nodes||[];if(typeof O==="string"){this._query=O;O=C.Selector.query(O,Q);}C.stamp(this);A._instances[this[D]]=this;L[this[D]]=O;A.superclass.constructor.apply(this,arguments);};A.NAME="NodeList";A.ATTRS={style:{value:{}}};A._instances=[];A.each=function(O,R,Q){var P=L[O[D]];if(P&&P.length){C.Array.each(P,R,Q||O);}else{}};A.DEFAULT_SETTER=function(O,Q){var P=A._tmpNode=A._tmpNode||C.Node.create("<div>");A.each(this,function(S){var R=C.Node._instances[S[D]];if(!R){N[P[D]]=S;R=P;}R.set(O,Q);});};A.DEFAULT_GETTER=function(O){var Q=A._tmpNode=A._tmpNode||C.Node.create("<div>"),P=[];A.each(this,function(S){var R=C.Node._instances[S[D]];if(!R){N[Q[D]]=S;R=Q;}P[P.length]=R.get(O);});return P;};C.extend(A,C.Base);C.mix(A.prototype,{initializer:function(O){},item:function(P){var O=L[this[D]]||[];return C.get(O[P]);},each:function(Q,P){var O=this;P=P||this;C.each(L[this[D]],function(S,R){return Q.call(P,C.get(S),R,O);});},filter:function(O){return H.scrubVal(Selector.filter(L[this[D]],O),this);},get:function(O){if(!this.attrAdded(O)){this._addAttr(O);}return A.superclass.constructor.prototype.get.apply(this,arguments);},set:function(O,P){if(!this.attrAdded(O)){this._addAttr(O);}return A.superclass.constructor.prototype.set.apply(this,arguments);},on:function(T,S,R,O){var Q=J.call(arguments,0),P;Q.splice(2,0,L[this[D]]);if(H.DOM_EVENTS[T]){C.Event.attach.apply(C.Event,Q);}return A.superclass.constructor.prototype.on.apply(this,arguments);},destructor:function(){L[this[D]]=[];delete A._instances[this[D]];},refresh:function(){var P,O,Q=L[this[D]];if(this._query){if(L[this[D]]&&L[this[D]][0]&&L[this[D]][0].ownerDocument){P=L[this[D]][0].ownerDocument;}L[this[D]]=C.Selector.query(this._query,P||C.config.doc);O=C.Array.diff(Q,L[this[D]]);O.added=O.added?C.all(O.added):null;O.removed=O.removed?C.all(O.removed):null;this.fire("refresh",O);}},size:function(){return L[this[D]].length;},toString:function(){var R="",Q=this[D]+": not bound to any nodes",O=L[this[D]];if(O&&O[0]){var P=O[0];R+=P[F];if(P.id){R+="#"+P.id;}if(P.className){R+="."+P.className.replace(" ",".");}if(O.length>1){R+="...["+O.length+" items]";}}return R||Q;},_addAttr:function(O){var P=L[this[D]]||[];this.addAttr(O,{getter:function(){return A.DEFAULT_GETTER.call(this,O);},setter:function(Q){A.DEFAULT_SETTER.call(this,O,Q);}});}},true);C.NodeList=A;C.all=function(P,R,O){var Q=new A({nodes:P,doc:R,restrict:O});return Q.size()?Q:null;};var N=[],J=Array.prototype.slice,I=".",F="nodeName",M="nodeTypType",K="tagName",D="_yuid",H=function(O){this[D]=C.stamp(O.node);N[this[D]]=O.node;H._instances[this[D]]=this;G.apply(this,arguments);},G=C.Base,B=C.Base.prototype;H.NAME="Node";H.DOM_EVENTS={click:true};H._instances={};H.getDOMNode=function(O){return N[O[D]];};H.scrubVal=function(R,P,Q){if(R!==undefined){if(typeof R==="object"||typeof R==="function"){if(R!==null&&(M in R||R.item||(R[0]&&R[0][M])||R.document)){if(P&&_restrict&&_restrict[P._yuid]&&!P.contains(R)){R=null;}else{if(R[M]||R.document){R=C.get(R);}else{R=C.all(R);}}}else{Q=(Q===undefined)?4:Q;if(Q>0){for(var O in R){if(R.hasOwnProperty&&R.hasOwnProperty(O)){R[O]=H.scrubVal(R[O],P,--Q);}}}}}}else{R=P;}return R;};H.importMethod=function(Q,O,P){if(typeof O==="string"){P=P||O;console.log(arguments);if(Q&&Q[O]&&typeof Q[O]==="function"){H.prototype[P]=function(){var S=J.call(arguments),R;S.unshift(N[this[D]]);R=H.scrubVal(Q[O].apply(Q,S),this);return R;};}}else{C.each(O,function(R){H.importMethod(Q,R);});}};H.get=function(Q,R,P){var O=null;Q=(typeof Q==="string")?C.Selector.query(Q,R,true):Q;if(Q){O=H._instances[Q[D]]||new H({node:Q,restricted:P});}return O;};H.create=function(){return C.get(C.DOM.create.apply(C.DOM,arguments));};H.ATTRS={text:{getter:function(){return C.DOM.getText(N[this[D]]);},readOnly:true},"options":{getter:function(){var O=N[this[D]];return(O)?C.all(O.getElementsByTagName("option")):[];}},"children":{getter:function(){var R=N[this[D]],Q=R.children;if(Q===undefined){var S=R.childNodes;Q=[];for(var P=0,O=S.length;P<O;++P){if(S[P][K]){Q[Q.length]=S[P];}}}return C.all(Q);}},restricted:{writeOnce:true,value:false}};H.DEFAULT_SETTER=function(O,R){var P=N[this[D]],S,Q;if(O.indexOf(I)!==-1){S=O;Q=O.split(I);O=Q.shift();if(Q){R=C.Object.setValue(P[O],Q,R);if(R===undefined){allowSet=false;}}}else{P[O]=R;}return R;};H.DEFAULT_GETTER=function(O){var P=N[this[D]];return P[O];};C.extend(H,C.Base);C.mix(H.prototype,{toString:function(){var Q="",P=this[D]+": not bound to a node",O=N[this[D]];if(O){Q+=O[F];if(O.id){Q+="#"+O.id;}if(O.className){Q+="."+O.className.replace(" ",".");}Q+=" "+this[D];}return Q||P;},_addDOMAttr:function(O){var P=N[this[D]],Q=O.split(".")[0];if(P&&P[Q]!==undefined){this.addAttr(Q,{getter:function(){return H.DEFAULT_GETTER.call(this,O);},setter:function(R){return H.DEFAULT_SETTER.call(this,O,R);}});}else{}},addNode:function(P,O){return C.DOM.insertNode(N[this[D]],P,O);},on:function(S,R,Q,O){var P=J.call(arguments,0);P.splice(2,0,N[this[D]]);if(H.DOM_EVENTS[S]){C.Event.attach.apply(C.Event,P);}return B.on.apply(this,arguments);},detach:function(Q,P){var O=_slice.call(arguments,0);O.splice(2,0,N[this[D]]);return C.Event.detach.apply(C.Event,O);},get:function(O){if(!this.attrAdded(O)){this._addDOMAttr(O);}return B.get.apply(this,arguments);},set:function(O,P){if(!this.attrAdded(O)){this._addDOMAttr(O);}return B.set.apply(this,arguments);},destructor:function(){N[this[D]]=[];delete H._instances[this[D]];}},true);C.Node=H;C.get=C.Node.get;var E=["hasClass","addClass","removeClass","replaceClass","toggleClass"];C.Node.importMethod(C.DOM,E);},"@VERSION@",{requires:["dom"]});