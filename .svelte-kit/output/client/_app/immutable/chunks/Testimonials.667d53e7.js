import{s as J,n as P,f as N}from"./scheduler.63274e7e.js";import{S as O,i as B,g as r,s as b,h as o,j as f,x as W,c as C,f as v,k as _,a as G,y as t,A as K,m as M,n as S}from"./index.2226f978.js";import{e as Q}from"./each.e59479a4.js";const R=[{id:1,name:"Jim Cunningham",title:"Community Peer Mentors",crest:"/images/cpm-logo.png",quote:'"I cannot praise Dove Design enough. From the very start of this project they were very professional, providing great support, advice and guidance at all times. The process was quick and completed before the deadline and the final product was brilliant. Thank you so much for everything."'},{id:2,name:"Steve White",title:"Durham Police & Crime Commissioner",crest:"/images/pcc-logo.png",quote:'"We commissioned our new website with Dove Design and they have been fantastic to work with on this major project. They were brilliant to work with during development of the project, were quick to respond to any queries we had and were always available to contact. We would recommend to anyone."'}];function U(d,e,s){const c=d.slice();return c[0]=e[s],c}function X(d){let e,s,c='<img src="/images/star.svg" alt="blue star" class="svelte-150hnly"/> <img src="/images/star.svg" alt="blue star" class="svelte-150hnly"/> <img src="/images/star.svg" alt="blue star" class="svelte-150hnly"/> <img src="/images/star.svg" alt="blue star" class="svelte-150hnly"/> <img src="/images/star.svg" alt="blue star" class="svelte-150hnly"/>',x,u,p=d[0].quote+"",D,y,i,m,h,a,n,l,E=d[0].name+"",w,V,k,L=d[0].title+"",j,H;return{c(){e=r("div"),s=r("div"),s.innerHTML=c,x=b(),u=r("p"),D=M(p),y=b(),i=r("div"),m=r("img"),a=b(),n=r("div"),l=r("p"),w=M(E),V=b(),k=r("p"),j=M(L),H=b(),this.h()},l(I){e=o(I,"DIV",{});var g=f(e);s=o(g,"DIV",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-12n0o0f"&&(s.innerHTML=c),x=C(g),u=o(g,"P",{});var z=f(u);D=S(z,p),z.forEach(v),y=C(g),i=o(g,"DIV",{class:!0});var T=f(i);m=o(T,"IMG",{src:!0,alt:!0,class:!0}),a=C(T),n=o(T,"DIV",{class:!0});var q=f(n);l=o(q,"P",{class:!0});var A=f(l);w=S(A,E),A.forEach(v),V=C(q),k=o(q,"P",{});var F=f(k);j=S(F,L),F.forEach(v),q.forEach(v),T.forEach(v),H=C(g),g.forEach(v),this.h()},h(){_(s,"class","star-wrap svelte-150hnly"),N(m.src,h=d[0].crest)||_(m,"src",h),_(m,"alt",d[0].name+" Logo"),_(m,"class","svelte-150hnly"),_(l,"class","bold svelte-150hnly"),_(n,"class","testimonial-text"),_(i,"class","testimonial-item svelte-150hnly")},m(I,g){G(I,e,g),t(e,s),t(e,x),t(e,u),t(u,D),t(e,y),t(e,i),t(i,m),t(i,a),t(i,n),t(n,l),t(l,w),t(n,V),t(n,k),t(k,j),t(e,H)},p:P,d(I){I&&v(e)}}}function Y(d){let e,s,c,x="Happy Clients",u,p,D="Hear what our clients have to say about our Webflow services",y,i,m=Q(R),h=[];for(let a=0;a<m.length;a+=1)h[a]=X(U(d,m,a));return{c(){e=r("section"),s=r("div"),c=r("h2"),c.textContent=x,u=b(),p=r("p"),p.textContent=D,y=b(),i=r("div");for(let a=0;a<h.length;a+=1)h[a].c();this.h()},l(a){e=o(a,"SECTION",{});var n=f(e);s=o(n,"DIV",{class:!0});var l=f(s);c=o(l,"H2",{"data-svelte-h":!0}),W(c)!=="svelte-gl34zw"&&(c.textContent=x),u=C(l),p=o(l,"P",{"data-svelte-h":!0}),W(p)!=="svelte-130l551"&&(p.textContent=D),y=C(l),i=o(l,"DIV",{class:!0});var E=f(i);for(let w=0;w<h.length;w+=1)h[w].l(E);E.forEach(v),l.forEach(v),n.forEach(v),this.h()},h(){_(i,"class","grid-col-2 testimonials svelte-150hnly"),_(s,"class","container")},m(a,n){G(a,e,n),t(e,s),t(s,c),t(s,u),t(s,p),t(s,y),t(s,i);for(let l=0;l<h.length;l+=1)h[l]&&h[l].m(i,null)},p:P,i:P,o:P,d(a){a&&v(e),K(h,a)}}}class te extends O{constructor(e){super(),B(this,e,null,Y,J,{})}}export{te as T};
