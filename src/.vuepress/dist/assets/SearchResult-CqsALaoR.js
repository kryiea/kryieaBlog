import{u as _,j as te,m as ae,p as U,q as se,P as le,v as re,x as oe,l as S,y as B,z as ue,w as M,k as a,A as ie,R as T,B as ne,C as he,D as ce,E as pe,G as ve,H as ye,I as de,J as me,K as ge,L as H,M as Ee,N as ze,O as fe,Q as $,S as j,T as Ae}from"./app-CnDdiDIt.js";const be=["/intro.html","/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/demo/","/posts/cherry.html","/posts/dragonfruit.html","/posts/strawberry.html","/posts/tomato.html","/zh/intro.html","/zh/","/posts/apple/1.html","/posts/apple/2.html","/posts/apple/3.html","/posts/apple/4.html","/posts/banana/1.html","/posts/banana/2.html","/posts/banana/3.html","/posts/banana/4.html","/zh/demo/disable.html","/zh/demo/layout.html","/zh/demo/markdown.html","/zh/demo/page.html","/zh/demo/","/zh/posts/cherry.html","/zh/posts/dragonfruit.html","/zh/posts/strawberry.html","/zh/posts/tomato.html","/zh/posts/apple/1.html","/zh/posts/apple/2.html","/zh/posts/apple/3.html","/zh/posts/apple/4.html","/zh/posts/banana/1.html","/zh/posts/banana/2.html","/zh/posts/banana/3.html","/zh/posts/banana/4.html","/404.html","/posts/","/posts/apple/","/posts/banana/","/zh/posts/","/zh/posts/apple/","/zh/posts/banana/","/category/","/category/guide/","/category/cherry/","/category/dragon-fruit/","/category/fruit/","/category/strawberry/","/category/vegetable/","/category/apple/","/category/banana/","/zh/category/","/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/zh/category/%E6%8C%87%E5%8D%97/","/zh/category/%E6%A8%B1%E6%A1%83/","/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/","/zh/category/%E6%B0%B4%E6%9E%9C/","/zh/category/%E8%8D%89%E8%8E%93/","/zh/category/%E8%94%AC%E8%8F%9C/","/zh/category/%E8%8B%B9%E6%9E%9C/","/zh/category/%E9%A6%99%E8%95%89/","/tag/","/tag/disable/","/tag/encryption/","/tag/layout/","/tag/markdown/","/tag/page-config/","/tag/guide/","/tag/red/","/tag/small/","/tag/round/","/tag/big/","/tag/yellow/","/tag/curly/","/tag/long/","/zh/tag/","/zh/tag/%E7%A6%81%E7%94%A8/","/zh/tag/%E5%8A%A0%E5%AF%86/","/zh/tag/%E5%B8%83%E5%B1%80/","/zh/tag/markdown/","/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/zh/tag/%E7%BA%A2/","/zh/tag/%E5%B0%8F/","/zh/tag/%E5%9C%86/","/zh/tag/%E5%A4%A7/","/zh/tag/%E9%BB%84/","/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/","/zh/tag/%E9%95%BF/","/article/","/zh/article/","/star/","/zh/star/","/timeline/","/zh/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",g=_(we,[]),Be=()=>{const{queryHistoryCount:s}=H,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=s=>be[s.id]+("anchor"in s?`#${s.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=H,E=_(He,[]),ke=()=>{const s=I>0;return{enabled:s,resultHistory:E,addResultHistory:l=>{if(s){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,I-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},Ce=s=>{const l=pe(),r=U(),k=ve(),u=S(0),A=B(()=>u.value>0),y=ye([]);return de(()=>{const{search:d,terminate:C}=me(),z=ge(h=>{const f=h.join(" "),{searchFilter:R=v=>v,splitWord:D,suggestionsFilter:L,...m}=l.value;f?(u.value+=1,d(h.join(" "),r.value,m).then(v=>R(v,f,r.value,k.value)).then(v=>{u.value-=1,y.value=v}).catch(v=>{console.warn(v),u.value-=1,u.value||(y.value=[])})):y.value=[]},H.searchDelay-H.suggestDelay);M([s,r],([h])=>z(h),{immediate:!0}),Ee(()=>{C()})}),{isSearching:A,results:y}};var De=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),k=U(),u=se(le),{enabled:A,addQueryHistory:y,queryHistory:d,removeQueryHistory:C}=Be(),{enabled:z,resultHistory:h,addResultHistory:f,removeResultHistory:R}=ke(),D=A||z,L=re(s,"queries"),{results:m,isSearching:v}=Ce(L),o=oe({isQuery:!0,index:0}),c=S(0),p=S(0),O=B(()=>D&&(d.value.length>0||h.value.length>0)),Q=B(()=>m.value.length>0),q=B(()=>m.value[c.value]||null),Y=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?h.value.length-1:d.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?d.value.length-1:h.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{c.value=c.value>0?c.value-1:m.value.length-1,p.value=q.value.contents.length-1},K=()=>{c.value=c.value<m.value.length-1?c.value+1:0,p.value=0},N=()=>{p.value<q.value.contents.length-1?p.value+=1:K()},V=()=>{p.value>0?p.value-=1:J()},x=e=>e.map(t=>Ae(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ze[e.index]||"$content",[i,w=""]=fe(t)?t[k.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",x([i,...n,w])))}return e.display.map(t=>a("div",x(t)))},b=()=>{c.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>A?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),d.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:i=>{i.preventDefault(),i.stopPropagation(),C(t)}})]))])):null,Z=()=>z?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),h.value.map((e,t)=>a(T,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{b()}},()=>[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(i=>x(i)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:i=>{i.preventDefault(),i.stopPropagation(),R(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(Q.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=q.value.contents[p.value];y(s.queries.join(" ")),f(t),r.push(F(t)),b()}}else if(z){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",d.value[t]),e.preventDefault()):(r.push(h.value[t].link),b())}}}}),M([c,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!Q.value:!O.value}],id:"search-pro-results"},s.queries.length?v.value?a(ie,{hint:u.value.searching}):Q.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},i)=>{const w=c.value===i;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const P=w&&p.value===ee;return a(T,{to:F(n),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{y(s.queries.join(" ")),f(n),b()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?he:ce,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):u.value.emptyResult:D?O.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{De as default};