function E(t){return t&&t.ownerDocument||document}function w(t){var e=E(t);return e&&e.defaultView||window}function d(t,e){return w(t).getComputedStyle(t,e)}var y=/([A-Z])/g;function p(t){return t.replace(y,"-$1").toLowerCase()}var L=/^ms-/;function a(t){return p(t).replace(L,"-ms-")}var g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function _(t){return!!(t&&g.test(t))}function D(t,e){var r="",n="";if(typeof e=="string")return t.style.getPropertyValue(a(e))||d(t).getPropertyValue(a(e));Object.keys(e).forEach(function(i){var o=e[i];!o&&o!==0?t.style.removeProperty(a(i)):_(i)?n+=i+"("+o+") ":r+=a(i)+": "+o+";"}),n&&(r+="transform: "+n+";"),t.style.cssText+=";"+r}const T=!!(typeof window<"u"&&window.document&&window.document.createElement);var c=!1,f=!1;try{var s={get passive(){return c=!0},get once(){return f=c=!0}};T&&(window.addEventListener("test",s,s),window.removeEventListener("test",s,!0))}catch{}function P(t,e,r,n){if(n&&typeof n!="boolean"&&!f){var i=n.once,o=n.capture,u=r;!f&&i&&(u=r.__once||function m(l){this.removeEventListener(e,m,o),r.call(this,l)},r.__once=u),t.addEventListener(e,u,c?n:o)}t.addEventListener(e,r,n)}function S(t,e,r,n){var i=n&&typeof n!="boolean"?n.capture:n;t.removeEventListener(e,r,i),r.__once&&t.removeEventListener(e,r.__once,i)}function v(t,e,r,n){return P(t,e,r,n),function(){S(t,e,r,n)}}function h(t,e,r,n){if(r===void 0&&(r=!1),n===void 0&&(n=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,r,n),t.dispatchEvent(i)}}function q(t){var e=D(t,"transitionDuration")||"",r=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*r}function A(t,e,r){r===void 0&&(r=5);var n=!1,i=setTimeout(function(){n||h(t,"transitionend",!0)},e+r),o=v(t,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(i),o()}}function F(t,e,r,n){r==null&&(r=q(t)||0);var i=A(t,r,n),o=v(t,"transitionend",e);return function(){i(),o()}}var C=Function.prototype.bind.call(Function.prototype.call,[].slice);function O(t,e){return C(t.querySelectorAll(e))}function V(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}export{T as a,P as b,V as c,v as l,E as o,O as q,D as s,F as t};
