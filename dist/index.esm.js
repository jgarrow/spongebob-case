function a(o){let r=/[a-zA-Z]/,i=/[a-z]+/;return o.split("").reduce((t,e)=>{var s;if(r.test(e)){let n=(s=t.match(/[a-zA-Z]/g))!=null?s:[""],g=n[n.length-1];return i.test(g)?t+e.toUpperCase():t+e.toLowerCase()}else return t+e},"")}export{a as toSpongebobCase};
