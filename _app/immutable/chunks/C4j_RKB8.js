import{B as e,C as t,D as n,G as r,J as i,K as a,L as o,X as s,a as c,b as l,c as u,g as d,i as f,l as p,s as m,u as h,v as g,x as _,z as v}from"./VG8m-hD_.js";import"./CFKVnMbq.js";i();function y(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,flash:o,spin:s,spinPulse:c,spinReverse:l,pulse:u,fixedWidth:d,inverse:f,border:p,listItem:m,flip:h,size:g,rotation:_,pull:v}=e,y={"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h===`horizontal`||h===`both`,"fa-flip-vertical":h===`vertical`||h===`both`,[`fa-${g}`]:g!=null,[`fa-rotate-${_}`]:_!=null&&_!==0,[`fa-pull-${v}`]:v!=null,"fa-swap-opacity":e.swapOpacity};return Object.keys(y).map(e=>y[e]?e:null).filter(e=>e)}function b(e){return e-=0,e===e}function x(e){return b(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}function ee(e){return typeof e==`string`?e:Object.keys(e).reduce((t,n)=>t+n.split(/(?=[A-Z])/).join(`-`).toLowerCase()+`:`+e[n]+`;`,``)}function te(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>te(e,t)),i=Object.keys(t.attributes||{}).reduce((e,n)=>{let r=t.attributes[n];return n===`style`?e.attrs.style=ee(r):n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[x(n)]=r,e},{attrs:{}});return e(t.tag,{...i.attrs},r)}function ne(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function S(e){if(Array.isArray(e))return e}function re(e){if(Array.isArray(e))return ne(e)}function ie(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,me(r.key),r)}}function oe(e,t,n){return t&&ae(e.prototype,t),n&&ae(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function C(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ge(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function w(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ce(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function le(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?de(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function fe(e,t){return S(e)||ce(e,t)||ge(e,t)||le()}function E(e){return re(e)||se(e)||ge(e)||ue()}function pe(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function me(e){var t=pe(e,`string`);return typeof t==`symbol`?t:t+``}function he(e){"@babel/helpers - typeof";return he=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},he(e)}function ge(e,t){if(e){if(typeof e==`string`)return ne(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}var _e=function(){},ve={},ye={},be=null,xe={mark:_e,measure:_e};try{typeof window<`u`&&(ve=window),typeof document<`u`&&(ye=document),typeof MutationObserver<`u`&&(be=MutationObserver),typeof performance<`u`&&(xe=performance)}catch{}var Se=(ve.navigator||{}).userAgent,Ce=Se===void 0?``:Se,D=ve,O=ye,we=be,Te=xe;D.document;var k=!!O.documentElement&&!!O.head&&typeof O.addEventListener==`function`&&typeof O.createElement==`function`,Ee=~Ce.indexOf(`MSIE`)||~Ce.indexOf(`Trident/`),De,Oe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ke=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Ae={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},je={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Me=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],A=`classic`,j=`duotone`,Ne=`sharp`,Pe=`sharp-duotone`,Fe=`chisel`,Ie=`etch`,Le=`graphite`,Re=`jelly`,ze=`jelly-duo`,Be=`jelly-fill`,Ve=`notdog`,He=`notdog-duo`,Ue=`slab`,We=`slab-press`,Ge=`thumbprint`,Ke=`utility`,qe=`utility-duo`,Je=`utility-fill`,Ye=`whiteboard`,Xe=`Classic`,Ze=`Duotone`,Qe=`Sharp`,$e=`Sharp Duotone`,et=`Chisel`,tt=`Etch`,nt=`Graphite`,rt=`Jelly`,it=`Jelly Duo`,at=`Jelly Fill`,ot=`Notdog`,st=`Notdog Duo`,ct=`Slab`,lt=`Slab Press`,ut=`Thumbprint`,dt=`Utility`,ft=`Utility Duo`,pt=`Utility Fill`,mt=`Whiteboard`,ht=[A,j,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye];De={},w(w(w(w(w(w(w(w(w(w(De,A,Xe),j,Ze),Ne,Qe),Pe,$e),Fe,et),Ie,tt),Le,nt),Re,rt),ze,it),Be,at),w(w(w(w(w(w(w(w(w(De,Ve,ot),He,st),Ue,ct),We,lt),Ge,ut),Ke,dt),qe,ft),Je,pt),Ye,mt);var gt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},_t={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},vt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),yt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},bt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],xt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},St=[`kit`];w(w({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ct={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},wt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Tt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Et={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Dt,Ot={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},kt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Dt={},w(w(w(w(w(w(w(w(w(w(Dt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),w(w(w(w(w(w(w(w(w(Dt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),w(w({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var At={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},jt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Mt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Nt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(kt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Pt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Ft=[1,2,3,4,5,6,7,8,9,10],It=Ft.concat([11,12,13,14,15,16,17,18,19,20]),Lt=[].concat(E(Object.keys(jt)),Pt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY],Ft.map(function(e){return`${e}x`}),It.map(function(e){return`w-${e}`})),Rt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},M=`___FONT_AWESOME___`,zt=16,Bt=`fa`,Vt=`svg-inline--fa`,N=`data-fa-i2svg`,Ht=`data-fa-pseudo-element`,Ut=`data-fa-pseudo-element-pending`,Wt=`data-prefix`,Gt=`data-icon`,Kt=`fontawesome-i2svg`,qt=`async`,Jt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Yt=[`::before`,`::after`,`:before`,`:after`],Xt=function(){try{return!0}catch{return!1}}();function P(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[A]}})}var Zt=T({},Ae);Zt[A]=T(T(T(T({},{"fa-duotone":`duotone`}),Ae[A]),xt.kit),xt[`kit-duotone`]);var Qt=P(Zt),$t=T({},yt);$t[A]=T(T(T(T({},{duotone:`fad`}),$t[A]),Et.kit),Et[`kit-duotone`]);var en=P($t),tn=T({},Mt);tn[A]=T(T({},tn[A]),Tt.kit);var nn=P(tn),rn=T({},At);rn[A]=T(T({},rn[A]),Ct.kit),P(rn);var an=Oe,on=`fa-layers-text`,sn=ke;P(T({},gt));var cn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],ln=je,un=[].concat(E(St),E(Lt)),F=D.FontAwesomeConfig||{};function dn(e){var t=O.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function fn(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}O&&typeof O.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=fe(e,2),n=t[0],r=t[1],i=fn(dn(n));i!=null&&(F[r]=i)});var pn={styleDefault:`solid`,familyDefault:A,cssPrefix:Bt,replacementClass:Vt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};F.familyPrefix&&(F.cssPrefix=F.familyPrefix);var I=T(T({},pn),F);I.autoReplaceSvg||(I.observeMutations=!1);var L={};Object.keys(pn).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(t){I[e]=t,R.forEach(function(e){return e(L)})},get:function(){return I[e]}})}),Object.defineProperty(L,`familyPrefix`,{enumerable:!0,set:function(e){I.cssPrefix=e,R.forEach(function(e){return e(L)})},get:function(){return I.cssPrefix}}),D.FontAwesomeConfig=L;var R=[];function mn(e){return R.push(e),function(){R.splice(R.indexOf(e),1)}}var z=zt,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hn(e){if(!(!e||!k)){var t=O.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=O.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return O.head.insertBefore(t,r),e}}var gn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function _n(){for(var e=12,t=``;e-- >0;)t+=gn[Math.random()*62|0];return t}function V(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function vn(e){return e.classList?V(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function yn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function bn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${yn(e[n])}" `},``).trim()}function xn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Sn(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function Cn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function wn(e){var t=e.transform,n=e.width,r=n===void 0?zt:n,i=e.height,a=i===void 0?zt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&Ee?c+=`translate(${t.x/z-r/2}em, ${t.y/z-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) `:c+=`translate(${t.x/z}em, ${t.y/z}em) `,c+=`scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Tn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function En(){var e=Bt,t=Vt,n=L.cssPrefix,r=L.replacementClass,i=Tn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Dn=!1;function On(){L.autoAddCss&&!Dn&&(hn(En()),Dn=!0)}var kn={mixout:function(){return{dom:{css:En,insertCss:On}}},hooks:function(){return{beforeDOMElementCreation:function(){On()},beforeI2svg:function(){On()}}}},H=D||{};H[M]||(H[M]={}),H[M].styles||(H[M].styles={}),H[M].hooks||(H[M].hooks={}),H[M].shims||(H[M].shims=[]);var U=H[M],An=[],jn=function(){O.removeEventListener(`DOMContentLoaded`,jn),Mn=1,An.map(function(e){return e()})},Mn=!1;k&&(Mn=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Mn||O.addEventListener(`DOMContentLoaded`,jn));function Nn(e){k&&(Mn?setTimeout(e,0):An.push(e))}function W(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?yn(e):`<${t} ${bn(r)}>${a.map(W).join(``)}</${t}>`}function Pn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},In=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Fn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Ln(e){return E(e).length===1?e.codePointAt(0).toString(16):null}function Rn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function zn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Rn(t);typeof U.hooks.addPack==`function`&&!r?U.hooks.addPack(e,Rn(t)):U.styles[e]=T(T({},U.styles[e]||{}),i),e===`fas`&&zn(`fa`,t)}var G=U.styles,Bn=U.shims,Vn=Object.keys(nn),Hn=Vn.reduce(function(e,t){return e[t]=Object.keys(nn[t]),e},{}),Un=null,Wn={},Gn={},Kn={},qn={},Jn={};function Yn(e){return~un.indexOf(e)}function Xn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Yn(i)?i:null}var Zn=function(){var e=function(e){return In(G,function(t,n,r){return t[r]=In(n,e,{}),t},{})};Wn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Gn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Jn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in G||L.autoFetchSvg,n=In(Bn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Kn=n.names,qn=n.unicodes,Un=ir(L.styleDefault,{family:L.familyDefault})};mn(function(e){Un=ir(e.styleDefault,{family:L.familyDefault})}),Zn();function Qn(e,t){return(Wn[e]||{})[t]}function $n(e,t){return(Gn[e]||{})[t]}function K(e,t){return(Jn[e]||{})[t]}function er(e){return Kn[e]||{prefix:null,iconName:null}}function tr(e){var t=qn[e],n=Qn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function q(){return Un}var nr=function(){return{prefix:null,iconName:null,rest:[]}};function rr(e){var t=A,n=Vn.reduce(function(e,t){return e[t]=`${L.cssPrefix}-${t}`,e},{});return ht.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Hn[r].includes(e)}))&&(t=r)}),t}function ir(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?A:t,r=Qt[n][e];if(n===j&&!e)return`fad`;var i=en[n][e]||en[n][r],a=e in U.styles?e:null;return i||a||null}function ar(e){var t=[],n=null;return e.forEach(function(e){var r=Xn(L.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function or(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var sr=Nt.concat(bt);function cr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=or(e.filter(function(e){return sr.includes(e)})),a=or(e.filter(function(e){return!sr.includes(e)})),o=fe(i.filter(function(e){return r=e,!Me.includes(e)}),1)[0],s=o===void 0?null:o,c=rr(i),l=T(T({},ar(a)),{},{prefix:ir(s,{family:c})});return T(T(T({},l),fr({values:e,family:c,styles:G,config:L,canonical:l,givenPrefix:r})),lr(n,r,l))}function lr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?er(i):{},o=K(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!G.far&&G.fas&&!L.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ur=ht.filter(function(e){return e!==A||e!==j}),dr=Object.keys(Mt).filter(function(e){return e!==A}).map(function(e){return Object.keys(Mt[e])}).flat();function fr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===j,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ur.includes(n)&&(Object.keys(s).find(function(e){return dr.includes(e)})||l.autoFetchSvg)&&(r.prefix=vt.get(n).defaultShortPrefixId,r.iconName=K(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=q()||`fas`),r}var pr=function(){function e(){ie(this,e),this.definitions={}}return oe(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=T(T({},e.definitions[n]||{}),t[n]),zn(n,t[n]);var r=nn[A][n];r&&zn(r,t[n]),Zn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),mr=[],J={},Y={},hr=Object.keys(Y);function gr(e,t){var n=t.mixoutsTo;return mr=e,J={},Object.keys(Y).forEach(function(e){hr.indexOf(e)===-1&&delete Y[e]}),mr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),he(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){J[e]||(J[e]=[]),J[e].push(r[e])})}e.provides&&e.provides(Y)}),n}function _r(e,t){var n=[...arguments].slice(2);return(J[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function X(e){var t=[...arguments].slice(1);(J[e]||[]).forEach(function(e){e.apply(null,t)})}function Z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Y[e]?Y[e].apply(null,t):void 0}function vr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||q();if(t)return t=K(n,t)||t,Pn(yr.definitions,n,t)||Pn(U.styles,n,t)}var yr=new pr,Q={noAuto:function(){L.autoReplaceSvg=!1,L.observeMutations=!1,X(`noAuto`)},config:L,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(X(`beforeI2svg`,e),Z(`pseudoElements2svg`,e),Z(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Nn(function(){br({autoReplaceSvgRoot:t}),X(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(he(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=ir(e[0]);return{prefix:n,iconName:K(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${L.cssPrefix}-`)>-1||e.match(an))){var r=cr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=q();return{prefix:i,iconName:K(i,e)||e}}}},library:yr,findIconDefinition:vr,toHtml:W},br=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?O:e;(Object.keys(U.styles).length>0||L.autoFetchSvg)&&k&&L.autoReplaceSvg&&Q.dom.i2svg({node:t})};function xr(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return W(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(k){var t=O.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Sr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Sn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=xn(T(T({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Cr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${L.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:T(T({},i),{},{id:o}),children:r}]}]}function wr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Tr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[L.replacementClass,a?`${L.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:T(T({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!wr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[N]=``);var _=T(T({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T({},l.styles)}),v=r.found&&n.found?Z(`generateAbstractMask`,_)||{children:[],attributes:{}}:Z(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Cr(_):Sr(_)}function Er(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=T(T({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[N]=``);var l=T({},a.styles);Sn(i)&&(l.transform=wn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=xn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Dr(e){var t=e.content,n=e.extra,r=T(T({},n.attributes),{},{class:n.classes.join(` `)}),i=xn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Or=U.styles;function kr(e){var t=e[0],n=e[1],r=fe(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${L.cssPrefix}-${ln.GROUP}`},children:[{tag:`path`,attributes:{class:`${L.cssPrefix}-${ln.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${L.cssPrefix}-${ln.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Ar={found:!1,width:512,height:512};function jr(e,t){!Xt&&!L.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Mr(e,t){var n=t;return t===`fa`&&L.styleDefault!==null&&(t=q()),new Promise(function(r,i){if(n===`fa`){var a=er(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Or[t]&&Or[t][e]){var o=Or[t][e];return r(kr(o))}jr(e,t),r(T(T({},Ar),{},{icon:L.showMissingIcons&&e&&Z(`missingIconAbstract`)||{}}))})}var Nr=function(){},Pr=L.measurePerformance&&Te&&Te.mark&&Te.measure?Te:{mark:Nr,measure:Nr},$=`FA "7.2.0"`,Fr=function(e){return Pr.mark(`${$} ${e} begins`),function(){return Ir(e)}},Ir=function(e){Pr.mark(`${$} ${e} ends`),Pr.measure(`${$} ${e}`,`${$} ${e} begins`,`${$} ${e} ends`)},Lr={begin:Fr,end:Ir},Rr=function(){};function zr(e){return typeof(e.getAttribute?e.getAttribute(N):null)==`string`}function Br(e){var t=e.getAttribute?e.getAttribute(Wt):null,n=e.getAttribute?e.getAttribute(Gt):null;return t&&n}function Vr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function Hr(){return L.autoReplaceSvg===!0?qr.replace:qr[L.autoReplaceSvg]||qr.replace}function Ur(e){return O.createElementNS(`http://www.w3.org/2000/svg`,e)}function Wr(e){return O.createElement(e)}function Gr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ur:Wr:t;if(typeof e==`string`)return O.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Gr(e,{ceFn:n}))}),r}function Kr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var qr={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Gr(e),t)}),t.getAttribute(N)===null&&L.keepOriginalSource){var n=O.createComment(Kr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~vn(t).indexOf(L.replacementClass))return qr.replace(e);var r=RegExp(`${L.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===L.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return W(e)}).join(`
`);t.setAttribute(N,``),t.innerHTML=a}};function Jr(e){e()}function Yr(e,t){var n=typeof t==`function`?t:Rr;if(e.length===0)n();else{var r=Jr;L.mutateApproach===qt&&(r=D.requestAnimationFrame||Jr),r(function(){var t=Hr(),r=Lr.begin(`mutate`);e.map(t),r(),n()})}}var Xr=!1;function Zr(){Xr=!0}function Qr(){Xr=!1}var $r=null;function ei(e){if(we&&L.observeMutations){var t=e.treeCallback,n=t===void 0?Rr:t,r=e.nodeCallback,i=r===void 0?Rr:r,a=e.pseudoElementsCallback,o=a===void 0?Rr:a,s=e.observeMutationsRoot,c=s===void 0?O:s;$r=new we(function(e){if(!Xr){var t=q();V(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!zr(e.addedNodes[0])&&(L.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&L.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&zr(e.target)&&~cn.indexOf(e.attributeName))if(e.attributeName===`class`&&Br(e.target)){var r=cr(vn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Wt,a||t),s&&e.target.setAttribute(Gt,s)}else Vr(e.target)&&i(e.target)})}}),k&&$r.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ti(){$r&&$r.disconnect()}function ni(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function ri(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=cr(vn(e));return i.prefix||=q(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=$n(i.prefix,e.innerText)||Qn(i.prefix,Ln(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ii(e){return V(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ai(){return{iconName:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ri(e),r=n.iconName,i=n.prefix,a=n.rest,o=ii(e),s=_r(`parseNodeAttributes`,{},e);return T({iconName:r,prefix:i,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?ni(e):[],attributes:o}},s)}var si=U.styles;function ci(e){var t=L.autoReplaceSvg===`nest`?oi(e,{styleParser:!1}):oi(e);return~t.extra.classes.indexOf(on)?Z(`generateLayersText`,e,t):Z(`generateSvgReplacementMutation`,e,t)}function li(){return[].concat(E(bt),E(Nt))}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();var n=O.documentElement.classList,r=function(e){return n.add(`${Kt}-${e}`)},i=function(e){return n.remove(`${Kt}-${e}`)},a=L.autoFetchSvg?li():Me.concat(Object.keys(si));a.includes(`fa`)||a.push(`fa`);var o=[`.${on}:not([${N}])`].concat(a.map(function(e){return`.${e}:not([${N}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=V(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Lr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=ci(t);n&&e.push(n)}catch(e){Xt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Yr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ci(e).then(function(e){e&&Yr([e],t)})}function fi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:vr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:vr(i||{}),e(r,T(T({},n),{},{mask:i}))}}var pi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return xr(T({type:`icon`},e),function(){return X(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Tr({icons:{main:kr(v),mask:s?kr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:T(T({},B),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},mi={mixout:function(){return{icon:fi(pi)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ui,e.nodeCallback=di,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?O:t,r=e.callback;return ui(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Mr(n,r),o.iconName?Mr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=fe(o,2),u=l[0],d=l[1];t([e,Tr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=xn(a);o.length>0&&(n.style=o);var s;return Sn(i)&&(s=Z(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},hi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return xr({type:`layer`},function(){X(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${L.cssPrefix}-layers`].concat(E(r)).join(` `)},children:n}]})}}}},gi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return xr({type:`counter`,content:e},function(){return X(`beforeDOMElementCreation`,{content:e,params:t}),Dr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${L.cssPrefix}-layers-counter`].concat(E(a))}})})}}}},_i={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return xr({type:`text`,content:e},function(){return X(`beforeDOMElementCreation`,{content:e,params:t}),Er({content:e,transform:T(T({},B),r),extra:{attributes:s,styles:l,classes:[`${L.cssPrefix}-layers-text`].concat(E(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Ee){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Er({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},vi=RegExp(`"`,`ug`),yi=[1105920,1112319],bi=T(T(T(T({},{FontAwesome:{normal:`fas`,400:`fas`}}),_t),Rt),wt),xi=Object.keys(bi).reduce(function(e,t){return e[t.toLowerCase()]=bi[t],e},{}),Si=Object.keys(xi).reduce(function(e,t){var n=xi[t];return e[t]=n[900]||E(Object.entries(n))[0][1],e},{});function Ci(e){return Ln(E(e.replace(vi,``))[0]||``)}function wi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(vi,``),r=n.codePointAt(0),i=r>=yi[0]&&r<=yi[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Ti(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(xi[n]||{})[i]||Si[n]}function Ei(e,t){var n=`${Ut}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=V(e.children).filter(function(e){return e.getAttribute(Ht)===t})[0],o=D.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(sn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Ti(s,l),p=Ci(d),m=c[0].startsWith(`FontAwesome`),h=wi(o),g=Qn(f,p),_=g;if(m){var v=tr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Wt)!==f||a.getAttribute(Gt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=ai(),b=y.extra;b.attributes[Ht]=t,Mr(g,f).then(function(i){var a=Tr(T(T({},y),{},{icons:{main:i,mask:nr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=O.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return W(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Di(e){return Promise.all([Ei(e,`::before`),Ei(e,`::after`)])}function Oi(e){return e.parentNode!==document.head&&!~Jt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ht)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ki=function(e){return!!e&&Yt.some(function(t){return e.includes(t)})},Ai=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=C(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ki(a)){var o=Yt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(k){var n;if(t)n=e;else if(L.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=C(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=C(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=C(Ai(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){L.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=V(n).filter(Oi).map(Di),i=Lr.begin(`searchPseudoElements`);Zr(),Promise.all(r).then(function(){i(),Qr(),e()}).catch(function(){i(),Qr(),t()})})}}var Mi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ji,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?O:t;L.searchPseudoElements&&ji(n)}}},Ni=!1,Pi={mixout:function(){return{dom:{unwatch:function(){Zr(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){ei(_r(`mutationObserverCallbacks`,{}))},noAuto:function(){ti()},watch:function(e){var t=e.observeMutationsRoot;Ni?Qr():ei(_r(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Fi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ii={mixout:function(){return{parse:{transform:function(e){return Fi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Fi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:T({},a.outer),children:[{tag:`g`,attributes:T({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:T(T({},t.icon.attributes),a.path)}]}]}}}},Li={x:0,y:0,width:`100%`,height:`100%`};function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function zi(e){return e.tag===`g`?e.children:[e]}gr([kn,mi,hi,gi,_i,Mi,Pi,Ii,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?cr(n.split(` `).map(function(e){return e.trim()})):nr();return r.prefix||=q(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Cn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:T(T({},Li),{},{fill:`white`})},p=c.children?{children:c.children.map(Ri)}:{},m={tag:`g`,attributes:T({},d.inner),children:[Ri(T({tag:c.tag,attributes:T(T({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:T({},d.outer),children:[m]},g=`mask-${a||_n()}`,_=`clip-${a||_n()}`,v={tag:`mask`,attributes:T(T({},Li),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:zi(u)},v]};return t.push(y,{tag:`rect`,attributes:T({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Li)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;D.matchMedia&&(t=D.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:T(T({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=T(T({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:T(T({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:T(T({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:T(T({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:T(T({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:T(T({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:T(T({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:T(T({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Q}),Q.noAuto,Q.config,Q.library,Q.dom;var Bi=Q.parse;Q.findIconDefinition,Q.toHtml;var Vi=Q.icon;Q.layer,Q.text,Q.counter;var Hi=!1;try{Hi=!0}catch{}function Ui(...e){!Hi&&console&&typeof console.error==`function`&&console.error(...e)}function Wi(e){if(e&&typeof e==`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Bi.icon)return Bi.icon(e);if(e===null)return null;if(e&&typeof e==`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function Gi(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?{[e]:t}:{}}var Ki=t(`<svg></svg>`);function qi(e,t){a(t,!1);let n=c(t,`tag`,8),i=c(t,`props`,8),o=c(t,`children`,8),f=c(t,`style`,8,null),m=c(t,`ref`,12,null);if(n()!==`svg`)throw Error(`SvgElement requires a tag of "svg"`);function g(e){return e?.reduce((e,t)=>e+(t.tag?_(t):t),``)||``}function _({tag:e,props:t,children:n}){return`<${e} ${Object.keys(t).map(e=>`${e}="${t[e]}"`).join(` `)}>${g(n)}</${e}>`}let v=g(o()),y=i()?.style?`${i().style}${f()||``}`:f(),b={...i(),style:y};u();var x=Ki();h(x,()=>({...b})),d(x,()=>v,!0),s(x),p(x,e=>m(e),()=>m()),l(e,x),r()}function Ji(t,i){let s=f(i,[`children`,`$$slots`,`$$events`,`$$legacy`]),d=f(s,`border.mask.maskId.fixedWidth.inverse.flip.icon.listItem.pull.pulse.rotation.size.spin.spinPulse.spinReverse.beat.fade.beatFade.bounce.shake.symbol.title.titleId.transform.swapOpacity.ref.style`.split(`.`));a(i,!1),c(i,`border`,8,!1);let p=c(i,`mask`,8,null),h=c(i,`maskId`,8,null);c(i,`fixedWidth`,8,!1),c(i,`inverse`,8,!1),c(i,`flip`,8,!1);let b=c(i,`icon`,8,null);c(i,`listItem`,8,!1),c(i,`pull`,8,null),c(i,`pulse`,8,!1),c(i,`rotation`,8,null),c(i,`size`,8,null),c(i,`spin`,8,!1),c(i,`spinPulse`,8,!1),c(i,`spinReverse`,8,!1),c(i,`beat`,8,!1),c(i,`fade`,8,!1),c(i,`beatFade`,8,!1),c(i,`bounce`,8,!1),c(i,`shake`,8,!1);let x=c(i,`symbol`,8,!1),ee=c(i,`title`,8,``),ne=c(i,`titleId`,8,null),S=c(i,`transform`,8,null);c(i,`swapOpacity`,8,!1);let re=c(i,`ref`,12,null),ie=c(i,`style`,8,null),ae=Wi(b()),oe=Gi(`classes`,[...y(s),...(s.class||``).split(` `)]),C=Gi(`transform`,typeof S()==`string`?Bi.transform(S()):S()),w=Gi(`mask`,Wi(p())),se=Vi(ae,{...oe,...C,...w,symbol:x(),title:ee(),titleId:ne(),maskId:h()}),ce=v(null);if(!se)Ui(`Could not find icon`,ae);else{let{abstract:t}=se;e(ce,te((e,t,n)=>({tag:e,props:t,children:n}),t[0],d))}u();var le=_(),ue=o(le),de=e=>{qi(e,m(()=>n(ce),{get style(){return ie()},get ref(){return re()},set ref(e){re(e)},$$legacy:!0}))};g(ue,e=>{n(ce)&&e(de)}),l(t,le),r()}var Yi={prefix:`fas`,iconName:`rotate`,icon:[512,512,[128260,`sync-alt`],`f2f1`,`M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`]},Xi={prefix:`fas`,iconName:`database`,icon:[448,512,[],`f1c0`,`M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z`]},Zi={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},Qi={prefix:`fas`,iconName:`circle-user`,icon:[512,512,[62142,`user-circle`],`f2bd`,`M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z`]},$i={prefix:`fas`,iconName:`mobile-screen-button`,icon:[384,512,[`mobile-alt`],`f3cd`,`M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 304 224 0 0-304-224 0zM192 472c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z`]},ea={prefix:`fas`,iconName:`house`,icon:[512,512,[127968,63498,63500,`home`,`home-alt`,`home-lg-alt`],`f015`,`M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z`]},ta={prefix:`fas`,iconName:`server`,icon:[448,512,[],`f233`,`M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z`]},na={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},ra={prefix:`fas`,iconName:`triangle-exclamation`,icon:[512,512,[9888,`exclamation-triangle`,`warning`],`f071`,`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]},ia={prefix:`fas`,iconName:`download`,icon:[448,512,[],`f019`,`M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z`]},aa={prefix:`fas`,iconName:`wifi`,icon:[576,512,[`wifi-3`,`wifi-strong`],`f1eb`,`M288 96c-90.9 0-173.2 36-233.7 94.6-12.7 12.3-33 12-45.2-.7s-12-33 .7-45.2C81.7 74.9 179.9 32 288 32S494.3 74.9 566.3 144.7c12.7 12.3 13 32.6 .7 45.2s-32.6 13-45.2 .7C461.2 132 378.9 96 288 96zM240 432a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM168 326.2c-11.7 13.3-31.9 14.5-45.2 2.8s-14.5-31.9-2.8-45.2C161 237.4 221.1 208 288 208s127 29.4 168 75.8c11.7 13.3 10.4 33.5-2.8 45.2s-33.5 10.4-45.2-2.8C378.6 292.9 335.8 272 288 272s-90.6 20.9-120 54.2z`]},oa={prefix:`fas`,iconName:`location-dot`,icon:[384,512,[`map-marker-alt`],`f3c5`,`M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z`]};export{oa as a,ta as c,aa as d,na as f,ea as i,ra as l,Xi as n,$i as o,Ji as p,ia as r,Yi as s,Zi as t,Qi as u};