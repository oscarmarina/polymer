/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const e={},a=/-[a-z]/g,o=/([A-Z])/g;export function dashToCamelCase(o){return e[o]||(e[o]=o.indexOf("-")<0?o:o.replace(a,(e=>e[1].toUpperCase())));}export function camelToDashCase(a){return e[a]||(e[a]=a.replace(o,"-$1").toLowerCase());}
