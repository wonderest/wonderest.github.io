(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4912:(e,r,n)=>{Promise.resolve().then(n.bind(n,1123))},6046:(e,r,n)=>{"use strict";var t=n(6658);n.o(t,"useRouter")&&n.d(r,{useRouter:function(){return t.useRouter}})},1123:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>s});var t=n(5155),o=n(2115),i=n(6046);function s(){let[e,r]=(0,o.useState)(!1),n=(0,i.useRouter)();return(0,o.useEffect)(()=>{let e=()=>{r(!0)},t=()=>{r(!1),n.push("/fallback")};return r(navigator.onLine),window.addEventListener("online",e),window.addEventListener("offline",t),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",t)}},[n]),(0,o.useEffect)(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("Service Worker registered with scope:",e.scope)}).catch(e=>{console.error("Service Worker registration failed:",e)})},[]),(0,t.jsxs)("div",{className:"flex mx-auto h-dvh max-w-[500px] w-full flex-col items-center justify-center h-screen bg-foreground text-black p-6 mt-12",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mb-6 underline decoration-2",children:e?"You are online!":"You are offline"}),(0,t.jsx)("p",{className:"text-lg text-center mb-6",children:!e&&"Please check your internet connection and try again."}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)("p",{children:"Offline Page"})})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[441,517,358],()=>r(4912)),_N_E=e.O()}]);