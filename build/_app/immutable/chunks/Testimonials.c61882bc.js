import{s as J,n as P,f as N}from"./scheduler.63274e7e.js";import{S as O,i as B,g as n,s as b,h as o,j as f,x as W,c as C,f as m,k as _,a as G,y as t,A as K,m as M,n as S}from"./index.2226f978.js";import{e as Q}from"./each.e59479a4.js";const R=[{id:1,name:"Jim Cunningham",title:"Community Peer Mentors",crest:"/images/cpm-logo.png",quote:'"I cannot praise Dove Design enough. From the very start of this project they were very professional, providing great support, advice and guidance at all times. The process was quick and completed before the deadline and the final product was brilliant. Thank you so much for everything."'},{id:2,name:"Steve White",title:"Durham Police & Crime Commissioner",crest:"/images/pcc-logo.png",quote:'"We commissioned our new website with Dove Design and they have been fantastic to work with on this major project. They were brilliant to work with during development of the project, were quick to respond to any queries we had and were always available to contact. We would recommend to anyone."'}];function U(d,e,s){const c=d.slice();return c[0]=e[s],c}function X(d){let e,s,c='<img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"/> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"/> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"/> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"/> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"/>',x,u,p=d[0].quote+"",D,y,i,h,v,a,r,l,k=d[0].name+"",w,V,E,L=d[0].title+"",j,H;return{c(){e=n("div"),s=n("div"),s.innerHTML=c,x=b(),u=n("p"),D=M(p),y=b(),i=n("div"),h=n("img"),a=b(),r=n("div"),l=n("p"),w=M(k),V=b(),E=n("p"),j=M(L),H=b(),this.h()},l(I){e=o(I,"DIV",{});var g=f(e);s=o(g,"DIV",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-1mkximo"&&(s.innerHTML=c),x=C(g),u=o(g,"P",{});var z=f(u);D=S(z,p),z.forEach(m),y=C(g),i=o(g,"DIV",{class:!0});var T=f(i);h=o(T,"IMG",{src:!0,alt:!0,class:!0}),a=C(T),r=o(T,"DIV",{class:!0});var q=f(r);l=o(q,"P",{class:!0});var A=f(l);w=S(A,k),A.forEach(m),V=C(q),E=o(q,"P",{});var F=f(E);j=S(F,L),F.forEach(m),q.forEach(m),T.forEach(m),H=C(g),g.forEach(m),this.h()},h(){_(s,"class","star-wrap svelte-ntl4c6"),N(h.src,v=d[0].crest)||_(h,"src",v),_(h,"alt","Community Peer Mentors Logo"),_(h,"class","svelte-ntl4c6"),_(l,"class","bold svelte-ntl4c6"),_(r,"class","testimonial-text"),_(i,"class","testimonial-item svelte-ntl4c6")},m(I,g){G(I,e,g),t(e,s),t(e,x),t(e,u),t(u,D),t(e,y),t(e,i),t(i,h),t(i,a),t(i,r),t(r,l),t(l,w),t(r,V),t(r,E),t(E,j),t(e,H)},p:P,d(I){I&&m(e)}}}function Y(d){let e,s,c,x="Happy Clients",u,p,D="Hear what our clients have to say about our Webflow services",y,i,h=Q(R),v=[];for(let a=0;a<h.length;a+=1)v[a]=X(U(d,h,a));return{c(){e=n("section"),s=n("div"),c=n("h2"),c.textContent=x,u=b(),p=n("p"),p.textContent=D,y=b(),i=n("div");for(let a=0;a<v.length;a+=1)v[a].c();this.h()},l(a){e=o(a,"SECTION",{});var r=f(e);s=o(r,"DIV",{class:!0});var l=f(s);c=o(l,"H2",{"data-svelte-h":!0}),W(c)!=="svelte-gl34zw"&&(c.textContent=x),u=C(l),p=o(l,"P",{"data-svelte-h":!0}),W(p)!=="svelte-130l551"&&(p.textContent=D),y=C(l),i=o(l,"DIV",{class:!0});var k=f(i);for(let w=0;w<v.length;w+=1)v[w].l(k);k.forEach(m),l.forEach(m),r.forEach(m),this.h()},h(){_(i,"class","grid-col-2 testimonials svelte-ntl4c6"),_(s,"class","container")},m(a,r){G(a,e,r),t(e,s),t(s,c),t(s,u),t(s,p),t(s,y),t(s,i);for(let l=0;l<v.length;l+=1)v[l]&&v[l].m(i,null)},p:P,i:P,o:P,d(a){a&&m(e),K(v,a)}}}class te extends O{constructor(e){super(),B(this,e,null,Y,J,{})}}export{te as T};