import"./hoisted.BXF0uyWk.js";const D=document.getElementById("papers-data"),T=document.getElementById("categories-data"),M=document.getElementById("all-papers-url"),W=M?JSON.parse(M.textContent||'""'):"";let L=D?JSON.parse(D.textContent||"[]"):[];const Z=T?JSON.parse(T.textContent||"{}"):{};let A=!1,E=!1,o=[...L],b=0;const F=30;let d="",n=new Set,N="date-desc",C=!1;const i=document.getElementById("search-input"),$=document.getElementById("clear-search"),x=document.getElementById("search-query"),P=document.getElementById("visible-count"),j=document.getElementById("total-matching"),S=document.getElementById("clear-all-filters"),q=document.getElementById("no-results"),y=document.getElementById("end-of-results"),p=document.getElementById("papers-container"),w=document.getElementById("loading-indicator"),H=document.getElementById("scroll-sentinel"),B=document.querySelectorAll(".filter-btn"),R=document.getElementById("sort-toggle"),g=document.getElementById("sort-dropdown"),O=document.getElementById("sort-label"),z=document.querySelectorAll(".sort-option"),X={"date-desc":"Newest","date-asc":"Oldest",relevance:"Relevance",author:"Author",title:"Title"},J="guardrail_bookmarks";function U(){try{const e=localStorage.getItem(J);return e?JSON.parse(e):[]}catch{return[]}}function ee(e){localStorage.setItem(J,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:e}}))}function te(e,t){const a=U().includes(e.id),r=e.authors||[],l=e.abstract||"",u=e.summary||"",I=new Date(e.published),V=new Date().getTime()-I.getTime(),m=Math.floor(V/(1e3*60*60*24));let f="";m===0?f="Today":m===1?f="Yesterday":m<7?f=`${m} days ago`:m<30?f=`${Math.floor(m/7)} weeks ago`:f=`${Math.floor(m/30)} months ago`;const Y=r.length>3?`${r.slice(0,3).join(", ")} +${r.length-3} more`:r.join(", "),G=Math.round(e.relevance_score*100),K=Math.round(e.relevance_score*5),Q=(e.categories||[]).map(v=>{const k=Z[v]||{name:v,gradient:"from-slate-500 to-slate-600"};return`<span class="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-gradient-to-r ${k.gradient} shadow-sm">${k.name}</span>`}).join("");let _="";if(e.conference){const v=e.conference.workshop?`${e.conference.name} ${e.conference.year} Workshop`:`${e.conference.name} ${e.conference.year}`,k=e.conference.workshop||e.conference.track;_=`
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            ${v}
          </span>
          <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            ${k}
          </span>
        </div>
      `}return`
      <div class="paper-item" style="animation-delay: ${t%F*30}ms" data-paper-id="${e.id}">
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
                  ${f}
                </span>
                <span class="text-xs text-slate-400 dark:text-slate-500">${I.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</span>
              </div>
              <div class="flex items-center gap-1.5" title="Relevance: ${G}%">
                ${[1,2,3,4,5].map(v=>`<div class="w-1.5 h-4 rounded-full ${v<=K?"bg-brass-500":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
              </div>
            </div>

            ${_}

            <!-- Title -->
            <h2 class="text-lg font-display font-semibold tracking-tight text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors">
              <a href="${e.arxiv_url}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-2 underline-offset-2" data-paper-title="${e.title.toLowerCase()}">
                ${e.title}
              </a>
            </h2>

            <!-- Authors -->
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-4" data-paper-authors="${r.join(" ").toLowerCase()}">
              ${Y}
            </p>

            <!-- Summary -->
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-[15px]" data-paper-summary="${u.toLowerCase()}">
              ${u}
            </p>

            <!-- Categories -->
            <div class="flex flex-wrap gap-2 mb-5">
              ${Q}
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
              <button class="bookmark-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-brass-100 dark:hover:bg-brass-900/30 transition-all border border-slate-200/60 dark:border-slate-700/60 hover:border-brass-300 dark:hover:border-brass-700 ${a?"bookmarked":""}" data-paper-id="${e.id}">
                <svg class="w-4 h-4 bookmark-icon" fill="${a?"currentColor":"none"}" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span class="bookmark-text">${a?"Saved":"Save"}</span>
              </button>
            </div>

            <!-- Hidden abstract for search -->
            <div class="hidden" data-paper-abstract="${l.toLowerCase()}"></div>
          </div>
        </article>
      </div>
    `}function h(){const e=d.toLowerCase().trim();o=L.filter(t=>!(e&&!(t.title.toLowerCase().includes(e)||(t.abstract||"").toLowerCase().includes(e)||(t.summary||"").toLowerCase().includes(e)||(t.authors||[]).some(a=>a.toLowerCase().includes(e)))||n.size>0&&!n.has("all")&&!t.categories.some(a=>n.has(a)))),o.sort((t,s)=>{switch(N){case"date-desc":return new Date(s.published).getTime()-new Date(t.published).getTime();case"date-asc":return new Date(t.published).getTime()-new Date(s.published).getTime();case"relevance":return s.relevance_score-t.relevance_score;case"author":return(t.authors[0]||"").localeCompare(s.authors[0]||"");case"title":return t.title.localeCompare(s.title);default:return 0}})}function c(e=!1){if(!p)return;e&&(p.innerHTML="",b=0);const t=b,s=Math.min(t+F,o.length);if(t>=o.length){y&&y.classList.toggle("hidden",o.length===0);return}const a=document.createDocumentFragment(),r=document.createElement("div");for(let l=t;l<s;l++){r.innerHTML=te(o[l],l);const u=r.firstElementChild;u&&a.appendChild(u)}p.appendChild(a),b=s,ae(),se(),y&&y.classList.toggle("hidden",b<o.length||o.length===0)}function se(){if(P&&(P.textContent=String(b)),j&&(j.textContent=String(o.length)),q&&p&&(q.classList.toggle("hidden",o.length>0),p.classList.toggle("hidden",o.length===0)),x&&(d?(x.textContent=`for "${d}"`,x.classList.remove("hidden")):x.classList.add("hidden")),$&&$.classList.toggle("hidden",!d),S){const e=d||n.size>0&&!n.has("all");S.classList.toggle("hidden",!e)}}function ae(){document.querySelectorAll(".bookmark-btn:not([data-initialized])").forEach(e=>{const t=e;t.dataset.initialized="true",t.addEventListener("click",()=>{const s=t.dataset.paperId;if(!s)return;let a=U();const r=t.querySelector(".bookmark-icon"),l=t.querySelector(".bookmark-text");a.includes(s)?(a=a.filter(u=>u!==s),t.classList.remove("bookmarked"),r&&r.setAttribute("fill","none"),l&&(l.textContent="Save")):(a.push(s),t.classList.add("bookmarked"),r&&r.setAttribute("fill","currentColor"),l&&(l.textContent="Saved")),ee(a)})})}function re(e,t){let s;return(...a)=>{clearTimeout(s),s=setTimeout(()=>e(...a),t)}}const oe=re(()=>{d=i?.value||"",h(),c(!0)},200),ne=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!C&&b<o.length&&(C=!0,w&&w.classList.remove("hidden"),setTimeout(()=>{c(!1),C=!1,w&&w.classList.add("hidden")},150))})},{rootMargin:"200px"});H&&ne.observe(H);i?.addEventListener("input",oe);$?.addEventListener("click",()=>{i&&(i.value="",d="",h(),c(!0),i.focus())});B.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-category");t&&(t==="all"?(n.clear(),B.forEach(s=>s.classList.remove("active")),e.classList.add("active")):(n.delete("all"),document.querySelector('[data-category="all"]')?.classList.remove("active"),n.has(t)?(n.delete(t),e.classList.remove("active")):(n.add(t),e.classList.add("active")),n.size===0&&document.querySelector('[data-category="all"]')?.classList.add("active")),h(),c(!0))})});S?.addEventListener("click",()=>{d="",i&&(i.value=""),n.clear(),B.forEach(e=>e.classList.remove("active")),document.querySelector('[data-category="all"]')?.classList.add("active"),h(),c(!0)});document.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==i&&(e.preventDefault(),i?.focus()),e.key==="Escape"&&(document.activeElement===i&&i?.blur(),g?.classList.add("hidden"))});R?.addEventListener("click",e=>{e.stopPropagation(),g?.classList.toggle("hidden")});document.addEventListener("click",e=>{if(g&&!g.classList.contains("hidden")){const t=e.target;!R?.contains(t)&&!g.contains(t)&&g.classList.add("hidden")}});z.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.sort;t&&(N=t,O&&(O.textContent=X[t]||"Sort"),z.forEach(s=>{const a=s.querySelector(".sort-check"),r=s.dataset.sort===t;a?.classList.toggle("hidden",!r),s.classList.toggle("text-slate-900",r),s.classList.toggle("dark:text-white",r),s.classList.toggle("text-slate-700",!r),s.classList.toggle("dark:text-slate-300",!r)}),h(),c(!0),g?.classList.add("hidden"))})});h();c(!0);async function le(){if(!(A||E)){E=!0;try{const e=await fetch(W,{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch papers: ${e.status}`);const t=await e.json(),s=Array.isArray(t?.papers)?t.papers:[];s.length>L.length&&(L=s,h(),c(!0)),A=!0}catch(e){console.warn("Unable to load full paper database from R2:",e)}finally{E=!1}}}le();
