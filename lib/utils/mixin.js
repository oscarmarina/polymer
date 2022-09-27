/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let t=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;export const dedupingMixin=function(i){let e=i.__mixinApplications;e||(e=new WeakMap,i.__mixinApplications=e);let n=t++;return function(t){let _=t.__mixinSet;if(_&&_[n])return t;let p=e,o=p.get(t);if(!o){o=i(t),p.set(t,o);let e=Object.create(o.__mixinSet||_||null);e[n]=!0,o.__mixinSet=e;}return o;};};
