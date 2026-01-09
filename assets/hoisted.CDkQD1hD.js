import"./hoisted.Counn0XA.js";const M=document.getElementById("papers-data"),T=document.getElementById("categories-data"),O=document.getElementById("all-papers-url"),X=O?JSON.parse(O.textContent||'""'):"";let E=M?JSON.parse(M.textContent||"[]"):[];const ee=T?JSON.parse(T.textContent||"{}"):{};let q=!1,C=!1;function P(){const e=document.querySelector(".filter-scroll-container"),t=e?.querySelector(".filter-scroll-area"),s=e?.querySelector(".scroll-arrow-left"),r=e?.querySelector(".scroll-arrow-right");if(!e||!t||!s||!r)return;const a=200;function o(){const{scrollLeft:p,scrollWidth:_,clientWidth:S}=t,c=p>1,d=p<_-S-1;s.classList.toggle("hidden",!c),r.classList.toggle("hidden",!d),e.classList.toggle("show-left",c),e.classList.toggle("show-right",d)}s.addEventListener("click",()=>{t.scrollBy({left:-a,behavior:"smooth"})}),r.addEventListener("click",()=>{t.scrollBy({left:a,behavior:"smooth"})}),t.addEventListener("scroll",o),new ResizeObserver(()=>{o()}).observe(t),o()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P();let n=[...E],b=0;const U=30;let g="",l=new Set,V="date-desc",$=!1;const i=document.getElementById("search-input"),B=document.getElementById("clear-search"),y=document.getElementById("search-query"),j=document.getElementById("visible-count"),z=document.getElementById("total-matching"),I=document.getElementById("clear-all-filters"),H=document.getElementById("no-results"),w=document.getElementById("end-of-results"),k=document.getElementById("papers-container"),L=document.getElementById("loading-indicator"),R=document.getElementById("scroll-sentinel"),A=document.querySelectorAll(".filter-btn"),J=document.getElementById("sort-toggle"),h=document.getElementById("sort-dropdown"),F=document.getElementById("sort-label"),N=document.querySelectorAll(".sort-option"),te={"date-desc":"Newest","date-asc":"Oldest",relevance:"Relevance",author:"Author",title:"Title"},W="guardrail_bookmarks";function Y(){try{const e=localStorage.getItem(W);return e?JSON.parse(e):[]}catch{return[]}}function se(e){localStorage.setItem(W,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:e}}))}function re(e,t){const r=Y().includes(e.id),a=e.authors||[],o=e.abstract||"",u=e.summary||"",p=new Date(e.published),S=new Date().getTime()-p.getTime(),c=Math.floor(S/(1e3*60*60*24));let d="";c===0?d="Today":c===1?d="Yesterday":c<7?d=`${c} days ago`:c<30?d=`${Math.floor(c/7)} weeks ago`:d=`${Math.floor(c/30)} months ago`;const G=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} more`:a.join(", "),K=Math.round(e.relevance_score*100),Q=Math.round(e.relevance_score*5),Z=(e.categories||[]).map(v=>{const x=ee[v]||{name:v,gradient:"from-slate-500 to-slate-600"};return`<span class="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-gradient-to-r ${x.gradient} shadow-sm">${x.name}</span>`}).join("");let D="";if(e.conference){const v=e.conference.workshop?`${e.conference.name} ${e.conference.year} Workshop`:`${e.conference.name} ${e.conference.year}`,x=e.conference.workshop||e.conference.track;D=`
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            ${v}
          </span>
          <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            ${x}
          </span>
        </div>
      `}return`
      <div class="paper-item" style="animation-delay: ${t%U*30}ms" data-paper-id="${e.id}">
        <article class="group relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 dark:border-slate-800/60 shadow-[0_20px_50px_-40px_rgba(31,27,23,0.35)] hover:shadow-[0_25px_60px_-40px_rgba(31,27,23,0.45)] transition-all duration-300 overflow-hidden hover-lift">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brass-400 via-brass-500 to-brass-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div class="p-6">
            <!-- Header with date and relevance -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ${d}
                </span>
                <span class="text-xs text-slate-400 dark:text-slate-500">${p.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</span>
              </div>
              <div class="flex items-center gap-1.5" title="Relevance: ${K}%">
                ${[1,2,3,4,5].map(v=>`<div class="w-1.5 h-4 rounded-full ${v<=Q?"bg-brass-500":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
              </div>
            </div>

            ${D}

            <!-- Title -->
            <h2 class="text-lg font-display font-semibold tracking-tight text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors">
              <a href="${e.arxiv_url}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-2 underline-offset-2" data-paper-title="${e.title.toLowerCase()}">
                ${e.title}
              </a>
            </h2>

            <!-- Authors -->
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-4" data-paper-authors="${a.join(" ").toLowerCase()}">
              ${G}
            </p>

            <!-- Summary -->
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-[15px]" data-paper-summary="${u.toLowerCase()}">
              ${u}
            </p>

            <!-- Categories -->
            <div class="flex flex-wrap gap-2 mb-5">
              ${Z}
            </div>

            <!-- Action buttons -->
            <div class="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a href="${e.arxiv_url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-md transition-all ring-1 ring-brass-400/40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:ring-brass-300/40">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Paper
              </a>
              <a href="${e.pdf_url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700/60">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF
              </a>
              <button class="bookmark-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-brass-100 dark:hover:bg-brass-900/30 transition-all border border-slate-200/60 dark:border-slate-700/60 hover:border-brass-300 dark:hover:border-brass-700 ${r?"bookmarked":""}" data-paper-id="${e.id}">
                <svg class="w-4 h-4 bookmark-icon" fill="${r?"currentColor":"none"}" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span class="bookmark-text">${r?"Saved":"Save"}</span>
              </button>
            </div>

            <!-- Hidden abstract for search -->
            <div class="hidden" data-paper-abstract="${o.toLowerCase()}"></div>
          </div>
        </article>
      </div>
    `}function f(){const e=g.toLowerCase().trim();n=E.filter(t=>!(e&&!(t.title.toLowerCase().includes(e)||(t.abstract||"").toLowerCase().includes(e)||(t.summary||"").toLowerCase().includes(e)||(t.authors||[]).some(r=>r.toLowerCase().includes(e)))||l.size>0&&!l.has("all")&&!t.categories.some(r=>l.has(r)))),n.sort((t,s)=>{switch(V){case"date-desc":return new Date(s.published).getTime()-new Date(t.published).getTime();case"date-asc":return new Date(t.published).getTime()-new Date(s.published).getTime();case"relevance":return s.relevance_score-t.relevance_score;case"author":return(t.authors[0]||"").localeCompare(s.authors[0]||"");case"title":return t.title.localeCompare(s.title);default:return 0}})}function m(e=!1){if(!k)return;e&&(k.innerHTML="",b=0);const t=b,s=Math.min(t+U,n.length);if(t>=n.length){w&&w.classList.toggle("hidden",n.length===0);return}const r=document.createDocumentFragment(),a=document.createElement("div");for(let o=t;o<s;o++){a.innerHTML=re(n[o],o);const u=a.firstElementChild;u&&r.appendChild(u)}k.appendChild(r),b=s,oe(),ae(),w&&w.classList.toggle("hidden",b<n.length||n.length===0)}function ae(){if(j&&(j.textContent=String(b)),z&&(z.textContent=String(n.length)),H&&k&&(H.classList.toggle("hidden",n.length>0),k.classList.toggle("hidden",n.length===0)),y&&(g?(y.textContent=`for "${g}"`,y.classList.remove("hidden")):y.classList.add("hidden")),B&&B.classList.toggle("hidden",!g),I){const e=g||l.size>0&&!l.has("all");I.classList.toggle("hidden",!e)}}function oe(){document.querySelectorAll(".bookmark-btn:not([data-initialized])").forEach(e=>{const t=e;t.dataset.initialized="true",t.addEventListener("click",()=>{const s=t.dataset.paperId;if(!s)return;let r=Y();const a=t.querySelector(".bookmark-icon"),o=t.querySelector(".bookmark-text");r.includes(s)?(r=r.filter(u=>u!==s),t.classList.remove("bookmarked"),a&&a.setAttribute("fill","none"),o&&(o.textContent="Save")):(r.push(s),t.classList.add("bookmarked"),a&&a.setAttribute("fill","currentColor"),o&&(o.textContent="Saved")),se(r)})})}function ne(e,t){let s;return(...r)=>{clearTimeout(s),s=setTimeout(()=>e(...r),t)}}const le=ne(()=>{g=i?.value||"",f(),m(!0)},200),ie=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!$&&b<n.length&&($=!0,L&&L.classList.remove("hidden"),setTimeout(()=>{m(!1),$=!1,L&&L.classList.add("hidden")},150))})},{rootMargin:"200px"});R&&ie.observe(R);i?.addEventListener("input",le);B?.addEventListener("click",()=>{i&&(i.value="",g="",f(),m(!0),i.focus())});A.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-category");t&&(t==="all"?(l.clear(),A.forEach(s=>s.classList.remove("active")),e.classList.add("active")):(l.delete("all"),document.querySelector('[data-category="all"]')?.classList.remove("active"),l.has(t)?(l.delete(t),e.classList.remove("active")):(l.add(t),e.classList.add("active")),l.size===0&&document.querySelector('[data-category="all"]')?.classList.add("active")),f(),m(!0))})});I?.addEventListener("click",()=>{g="",i&&(i.value=""),l.clear(),A.forEach(e=>e.classList.remove("active")),document.querySelector('[data-category="all"]')?.classList.add("active"),f(),m(!0)});document.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==i&&(e.preventDefault(),i?.focus()),e.key==="Escape"&&(document.activeElement===i&&i?.blur(),h?.classList.add("hidden"))});J?.addEventListener("click",e=>{e.stopPropagation(),h?.classList.toggle("hidden")});document.addEventListener("click",e=>{if(h&&!h.classList.contains("hidden")){const t=e.target;!J?.contains(t)&&!h.contains(t)&&h.classList.add("hidden")}});N.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.sort;t&&(V=t,F&&(F.textContent=te[t]||"Sort"),N.forEach(s=>{const r=s.querySelector(".sort-check"),a=s.dataset.sort===t;r?.classList.toggle("hidden",!a),s.classList.toggle("text-slate-900",a),s.classList.toggle("dark:text-white",a),s.classList.toggle("text-slate-700",!a),s.classList.toggle("dark:text-slate-300",!a)}),f(),m(!0),h?.classList.add("hidden"))})});f();m(!0);async function ce(){if(!(q||C)){C=!0;try{const e=await fetch(X,{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch papers: ${e.status}`);const t=await e.json(),s=Array.isArray(t?.papers)?t.papers:[];s.length>E.length&&(E=s,f(),m(!0)),q=!0}catch(e){console.warn("Unable to load full paper database from R2:",e)}finally{C=!1}}}ce();
