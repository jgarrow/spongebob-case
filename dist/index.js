var r=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var z=Object.prototype.hasOwnProperty;var C=e=>r(e,"__esModule",{value:!0});var b=(e,t)=>{for(var s in t)r(e,s,{get:t[s],enumerable:!0})},d=(e,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of p(t))!z.call(e,n)&&(s||n!=="default")&&r(e,n,{get:()=>t[n],enumerable:!(o=l(t,n))||o.enumerable});return e};var f=(e=>(t,s)=>e&&e.get(t)||(s=d(C({}),t,1),e&&e.set(t,s),s))(typeof WeakMap!="undefined"?new WeakMap:0);var u={};b(u,{toSpongebobCase:()=>h});function h(e){let t=/[a-zA-Z]/,s=/[a-z]+/;return e.split("").reduce((o,n)=>{var i;if(t.test(n)){let g=(i=o.match(/[a-zA-Z]/g))!=null?i:[""],a=g[g.length-1];return s.test(a)?o+n.toUpperCase():o+n.toLowerCase()}else return o+n},"")}module.exports=f(u);0&&(module.exports={toSpongebobCase});
