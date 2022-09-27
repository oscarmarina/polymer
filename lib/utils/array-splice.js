/* eslint-disable valid-jsdoc */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function e(e,t,n){return{index:e,removed:t,addedCount:n};}function t(t,r,u,o,l,f){let i,h=0,s=0,c=Math.min(u-r,f-l);if(0==r&&0==l&&(h=function(e,t,r){for(let u=0;u<r;u++)if(!n(e[u],t[u]))return u;return r;}(t,o,c)),u==t.length&&f==o.length&&(s=function(e,t,r){let u=e.length,o=t.length,l=0;for(;l<r&&n(e[--u],t[--o]);)l++;return l;}(t,o,c-h)),l+=h,f-=s,(u-=s)-(r+=h)==0&&f-l==0)return[];if(r==u){for(i=e(r,[],0);l<f;)i.removed.push(o[l++]);return[i];}if(l==f)return[e(r,[],u-r)];let d=function(e){let t=e.length-1,n=e[0].length-1,r=e[t][n],u=[];for(;t>0||n>0;){if(0==t){u.push(2),n--;continue;}if(0==n){u.push(3),t--;continue;}let o,l=e[t-1][n-1],f=e[t-1][n],i=e[t][n-1];o=f<i?f<l?f:l:i<l?i:l,o==l?(l==r?u.push(0):(u.push(1),r=l),t--,n--):o==f?(u.push(3),t--,r=f):(u.push(2),n--,r=i);}return u.reverse(),u;}(function(e,t,r,u,o,l){let f=l-o+1,i=r-t+1,h=new Array(f);for(let e=0;e<f;e++)h[e]=new Array(i),h[e][0]=e;for(let e=0;e<i;e++)h[0][e]=e;for(let r=1;r<f;r++)for(let l=1;l<i;l++)if(n(e[t+l-1],u[o+r-1]))h[r][l]=h[r-1][l-1];else{let e=h[r-1][l]+1,t=h[r][l-1]+1;h[r][l]=e<t?e:t;}return h;}(t,r,u,o,l,f));i=void 0;let a=[],p=r,g=l;for(let t=0;t<d.length;t++)switch(d[t]){case 0:i&&(a.push(i),i=void 0),p++,g++;break;case 1:i||(i=e(p,[],0)),i.addedCount++,p++,i.removed.push(o[g]),g++;break;case 2:i||(i=e(p,[],0)),i.addedCount++,p++;break;case 3:i||(i=e(p,[],0)),i.removed.push(o[g]),g++;}return i&&a.push(i),a;}export function calculateSplices(e,n){return t(e,0,e.length,n,0,n.length);}function n(e,t){return e===t;}
