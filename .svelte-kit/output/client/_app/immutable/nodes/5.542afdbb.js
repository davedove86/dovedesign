import{s as N,n as A}from"../chunks/scheduler.63274e7e.js";import{S as B,i as G,g as d,s as k,r as J,z as K,h as m,f as i,c as D,j as b,x as j,u as Q,k as x,y as n,a as L,v as R,d as U,t as X,A as z,w as Y,m as M,n as S}from"../chunks/index.2226f978.js";import{e as F}from"../chunks/each.e59479a4.js";import{p as Z}from"../chunks/projectData.96482f9e.js";import{T as ee}from"../chunks/Testimonials.c61882bc.js";function te(o,e,l){const a=o.slice();return a[0]=e[l],a}function se(o,e,l){const a=o.slice();return a[3]=e[l],a}function ne(o){let e,l,a,r;return{c(){e=d("div"),l=d("p"),a=M(o[3]),r=k(),this.h()},l(s){e=m(s,"DIV",{class:!0});var h=b(e);l=m(h,"P",{});var y=b(l);a=S(y,o[3]),y.forEach(i),r=D(h),h.forEach(i),this.h()},h(){x(e,"class","tags svelte-gm6unn")},m(s,h){L(s,e,h),n(e,l),n(l,a),n(e,r)},p:A,d(s){s&&i(e)}}}function le(o){let e,l,a=`<img class="portfolio-image svelte-gm6unn" src="${o[0].image}" alt="${o[0].name} website"/>`,r,s,h,y=o[0].name+"",$,I,_,p,g,H=o[0].kicker+"",v,t,c,E='<button class="svelte-gm6unn">View Project</button>',w,V=F(o[0].tags),C=[];for(let u=0;u<V.length;u+=1)C[u]=ne(se(o,V,u));return{c(){e=d("div"),l=d("div"),l.innerHTML=a,r=k(),s=d("div"),h=d("h2"),$=M(y),I=k(),_=d("div");for(let u=0;u<C.length;u+=1)C[u].c();p=k(),g=d("p"),v=M(H),t=k(),c=d("a"),c.innerHTML=E,w=k(),this.h()},l(u){e=m(u,"DIV",{class:!0});var T=b(e);l=m(T,"DIV",{"data-svelte-h":!0}),j(l)!=="svelte-xjuy3p"&&(l.innerHTML=a),r=D(T),s=m(T,"DIV",{});var f=b(s);h=m(f,"H2",{class:!0});var O=b(h);$=S(O,y),O.forEach(i),I=D(f),_=m(f,"DIV",{class:!0});var W=b(_);for(let P=0;P<C.length;P+=1)C[P].l(W);W.forEach(i),p=D(f),g=m(f,"P",{});var q=b(g);v=S(q,H),q.forEach(i),t=D(f),c=m(f,"A",{href:!0,rel:!0,"data-svelte-h":!0}),j(c)!=="svelte-15yuvwm"&&(c.innerHTML=E),f.forEach(i),w=D(T),T.forEach(i),this.h()},h(){x(h,"class","svelte-gm6unn"),x(_,"class","tags-wrapper svelte-gm6unn"),x(c,"href",o[0].link),x(c,"rel","noopener noreferrer"),x(e,"class","grid-col-2 svelte-gm6unn")},m(u,T){L(u,e,T),n(e,l),n(e,r),n(e,s),n(s,h),n(h,$),n(s,I),n(s,_);for(let f=0;f<C.length;f+=1)C[f]&&C[f].m(_,null);n(s,p),n(s,g),n(g,v),n(s,t),n(s,c),n(e,w)},p:A,d(u){u&&i(e),z(C,u)}}}function ae(o){let e,l,a,r,s,h="Our Work",y,$,I,_,p,g,H=F(Z),v=[];for(let t=0;t<H.length;t+=1)v[t]=le(te(o,H,t));return p=new ee({}),{c(){e=d("meta"),l=k(),a=d("section"),r=d("div"),s=d("h1"),s.textContent=h,y=k(),$=d("div"),I=k();for(let t=0;t<v.length;t+=1)v[t].c();_=k(),J(p.$$.fragment),this.h()},l(t){const c=K("svelte-15whexk",document.head);e=m(c,"META",{name:!0,content:!0}),c.forEach(i),l=D(t),a=m(t,"SECTION",{});var E=b(a);r=m(E,"DIV",{class:!0});var w=b(r);s=m(w,"H1",{"data-svelte-h":!0}),j(s)!=="svelte-15p12fn"&&(s.textContent=h),y=D(w),$=m(w,"DIV",{class:!0}),b($).forEach(i),I=D(w);for(let V=0;V<v.length;V+=1)v[V].l(w);w.forEach(i),E.forEach(i),_=D(t),Q(p.$$.fragment,t),this.h()},h(){document.title=`Our Web Design Portfolio | Dove Design Ltd | Creative Website Projects &
    Success Stories`,x(e,"name","description"),x(e,"content","Explore the web design portfolio of Dove Design Ltd, featuring cutting-edge websites for diverse industries. From e-commerce to corporate sites, see how we deliver outstanding digital experiences."),x($,"class","work-wrapper svelte-gm6unn"),x(r,"class","container")},m(t,c){n(document.head,e),L(t,l,c),L(t,a,c),n(a,r),n(r,s),n(r,y),n(r,$),n(r,I);for(let E=0;E<v.length;E+=1)v[E]&&v[E].m(r,null);L(t,_,c),R(p,t,c),g=!0},p:A,i(t){g||(U(p.$$.fragment,t),g=!0)},o(t){X(p.$$.fragment,t),g=!1},d(t){t&&(i(l),i(a),i(_)),i(e),z(v,t),Y(p,t)}}}class ue extends B{constructor(e){super(),G(this,e,null,ae,N,{})}}export{ue as component};