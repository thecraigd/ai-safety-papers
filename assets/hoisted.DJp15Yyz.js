import"./hoisted.Counn0XA.js";const F=document.getElementById("papers-data"),N=document.getElementById("categories-data"),U=document.getElementById("conference-papers-urls"),J=U?JSON.parse(U.textContent||"[]"):[];let b=F?JSON.parse(F.textContent||"[]"):[];const le=N?JSON.parse(N.textContent||"{}"):{};let _=!1,A=!1;function W(){const e=document.querySelectorAll(".filter-scroll-container"),t=200;e.forEach(a=>{const r=a.querySelector(".filter-scroll-area"),s=a.querySelector(".scroll-arrow-left"),n=a.querySelector(".scroll-arrow-right");if(!r||!s||!n)return;function l(){const{scrollLeft:I,scrollWidth:M,clientWidth:g}=r,v=I>1,S=I<M-g-1;s.classList.toggle("hidden",!v),n.classList.toggle("hidden",!S),a.classList.toggle("show-left",v),a.classList.toggle("show-right",S)}s.addEventListener("click",()=>{r.scrollBy({left:-t,behavior:"smooth"})}),n.addEventListener("click",()=>{r.scrollBy({left:t,behavior:"smooth"})}),r.addEventListener("scroll",l),new ResizeObserver(()=>{l()}).observe(r),l()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",W):W();let u=[...b],w=0;const ce=30;let k="",i=new Set,c=new Set,d=new Set,Z="date-desc",T=!1;const m=document.getElementById("search-input"),j=document.getElementById("clear-search"),$=document.getElementById("search-query"),X=document.getElementById("visible-count"),Y=document.getElementById("total-matching"),D=document.getElementById("clear-all-filters"),q=document.getElementById("no-results"),E=document.getElementById("end-of-results"),x=document.getElementById("papers-container"),O=document.getElementById("loading-indicator"),B=document.getElementById("scroll-loading-indicator"),G=document.getElementById("scroll-sentinel"),P=document.querySelectorAll(".filter-btn"),ie=document.querySelectorAll(".conference-filter-btn"),V=document.querySelectorAll(".track-filter-btn"),ee=document.getElementById("sort-toggle"),y=document.getElementById("sort-dropdown"),K=document.getElementById("sort-label"),Q=document.querySelectorAll(".sort-option"),de={"date-desc":"Newest","date-asc":"Oldest",relevance:"Relevance",author:"Author",title:"Title"},te="guardrail_bookmarks";function ae(){try{const e=localStorage.getItem(te);return e?JSON.parse(e):[]}catch{return[]}}function ue(e){localStorage.setItem(te,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:e}}))}function o(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function fe(e,t){const r=ae().includes(e.id),s=e.authors||[],n=e.abstract||"",l=e.summary||"",L=new Date(e.published),M=new Date().getTime()-L.getTime(),g=Math.floor(M/(1e3*60*60*24));let v="";g===0?v="Today":g===1?v="Yesterday":g<7?v=`${g}d ago`:g<30?v=`${Math.floor(g/7)}w ago`:v=`${Math.floor(g/30)}mo ago`;const S=s.length>3?`${s.slice(0,3).join(", ")} +${s.length-3} more`:s.join(", "),se=Math.round(e.relevance_score*100),re=Math.ceil(e.relevance_score*5),oe=(e.categories||[]).map(p=>{const C=le[p]||{name:p,gradient:"from-slate-500 to-slate-600"};return`<span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${C.gradient} shadow-sm" data-category="${o(p)}">${o(C.name)}</span>`}).join("");let H="";if(e.conference){const p=`${e.conference.name} ${e.conference.year}`,C=e.conference.track==="Workshop"&&e.conference.workshop?`Workshop: ${e.conference.workshop}`:e.conference.track;H=`
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-sm">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            ${o(p)}
          </span>
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-brass-500/15 text-brass-700 dark:text-brass-300 border border-brass-500/30">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ${o(C)}
          </span>
        </div>
      `}const R=e.bibtex_url||(e.arxiv_url.includes("arxiv.org")?`https://arxiv.org/bibtex/${e.id.replace(/v\\d+$/,"")}`:""),ne=R?`
      <a href="${o(R)}" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700/60"
        title="Export BibTeX citation">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        BibTeX
      </a>
    `:"";return`
      <div class="paper-item" style="animation-delay: ${t%30*30}ms"
        data-paper-categories="${o(e.categories.join(","))}"
        data-paper-date="${o(e.published)}"
        data-paper-relevance="${e.relevance_score}"
        data-paper-author="${o(s[0]?.toLowerCase()||"")}"
        data-paper-title-sort="${o(e.title.toLowerCase())}"
        data-paper-conference="${o(e.conference?.name||"")}"
        data-paper-track="${o(e.conference?.track||"")}">
        <article class="group relative bg-white/88 dark:bg-slate-900/75 backdrop-blur-sm rounded-2xl border border-slate-200/70 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover-lift overflow-hidden shadow-[0_16px_45px_-40px_rgba(31,27,23,0.35)]"
          data-paper-title="${o(e.title.toLowerCase())}"
          data-paper-summary="${o(l.toLowerCase())}"
          data-paper-abstract="${o(n.toLowerCase())}"
          data-paper-authors="${o(s.join(" ").toLowerCase())}">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-slate-500 to-brass-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div class="p-6">
            <!-- Header -->
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time class="text-xs font-medium text-slate-600 dark:text-slate-400" datetime="${o(e.published)}">
                    ${o(v)}
                  </time>
                </div>
                <span class="text-xs text-slate-400 dark:text-slate-500">${L.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</span>
              </div>

              <!-- Relevance indicator -->
              <div class="flex items-center gap-1.5">
                <div class="flex gap-0.5">
                  ${[1,2,3,4,5].map(p=>`<div class="w-1.5 h-4 rounded-full transition-colors ${p<=re?"bg-gradient-to-t from-brass-500 to-brass-300":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
                </div>
                <span class="text-xs font-medium text-slate-400 dark:text-slate-500 ml-1">${se}%</span>
              </div>
            </div>

            ${H}

            <!-- Title -->
            <h3 class="text-lg font-display font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors">
              <a href="${o(e.arxiv_url)}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-2 underline-offset-2">
                ${o(e.title)}
              </a>
            </h3>

            <!-- Authors -->
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="truncate">${o(S)}</span>
            </p>

            <!-- Summary -->
            <div class="relative mb-5">
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                ${o(l)}
              </p>
            </div>

            <!-- Categories -->
            <div class="flex flex-wrap gap-2 mb-5">
              ${oe}
            </div>

            <!-- Actions -->
            <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <div class="flex items-center gap-2">
                <a href="${o(e.arxiv_url)}" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-md transition-all ring-1 ring-brass-400/40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:ring-brass-300/40">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Paper
                </a>
                <a href="${o(e.pdf_url)}" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700/60">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF
                </a>
                ${ne}
                <button class="bookmark-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-brass-100 dark:hover:bg-brass-900/30 transition-all border border-slate-200/60 dark:border-slate-700/60 hover:border-brass-300 dark:hover:border-brass-700 ${r?"bookmarked":""}"
                  data-paper-id="${o(e.id)}" aria-label="${r?"Remove from saved papers":"Save paper"}">
                  <svg class="w-4 h-4 bookmark-icon" fill="${r?"currentColor":"none"}" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span class="bookmark-text">${r?"Saved":"Save"}</span>
                </button>
              </div>

              <button class="expand-abstract inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-brass-700 dark:text-slate-400 dark:hover:text-brass-400 transition-colors"
                data-paper-id="${o(e.id)}">
                <span class="expand-text">Show abstract</span>
                <svg class="w-4 h-4 expand-icon transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Expandable abstract -->
            <div class="abstract-content hidden mt-5 p-5 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/70 dark:to-slate-900/70 rounded-xl border border-slate-200/50 dark:border-slate-700/50" data-abstract-id="${o(e.id)}">
              <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-brass-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Full Abstract
              </h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                ${o(n)}
              </p>
            </div>
          </div>
        </article>
      </div>
    `}function h(){const e=k.toLowerCase();u=b.filter(t=>{const a=!k||t.title.toLowerCase().includes(e)||t.summary.toLowerCase().includes(e)||t.abstract.toLowerCase().includes(e)||t.authors.join(" ").toLowerCase().includes(e),r=i.size===0||i.has("all")||t.categories.some(l=>i.has(l)),s=c.size===0||c.has("all")||t.conference?.name&&c.has(t.conference.name),n=d.size===0||d.has("all")||t.conference?.track&&d.has(t.conference.track);return a&&r&&s&&n}),me()}function me(){u.sort((e,t)=>{switch(Z){case"date-desc":return new Date(t.published).getTime()-new Date(e.published).getTime();case"date-asc":return new Date(e.published).getTime()-new Date(t.published).getTime();case"relevance":return t.relevance_score-e.relevance_score;case"author":return(e.authors[0]||"").localeCompare(t.authors[0]||"");case"title":return e.title.localeCompare(t.title);default:return 0}})}function f(e=!1){if(!x)return;O?.classList.add("hidden"),e&&(x.innerHTML="",w=0);const t=w,a=Math.min(t+ce,u.length);if(u.length===0){b.length===0&&!_&&!A?(O?.classList.remove("hidden"),x.classList.add("hidden"),q?.classList.add("hidden")):(x.classList.add("hidden"),q?.classList.remove("hidden")),E?.classList.add("hidden"),z();return}if(x.classList.remove("hidden"),q?.classList.add("hidden"),t>=u.length){E&&E.classList.toggle("hidden",u.length===0),z();return}const r=document.createDocumentFragment(),s=document.createElement("div");for(let n=t;n<a;n++){s.innerHTML=fe(u[n],n);const l=s.firstElementChild;l&&r.appendChild(l)}x.appendChild(r),w=a,he(),ge(),z(),E&&E.classList.toggle("hidden",w<u.length||u.length===0)}function z(){if(X&&(X.textContent=String(w)),Y&&(Y.textContent=String(u.length)),$&&(k?($.textContent=`for "${k}"`,$.classList.remove("hidden")):$.classList.add("hidden")),j&&j.classList.toggle("hidden",!k),D){const e=k||i.size>0&&!i.has("all")||c.size>0&&!c.has("all")||d.size>0&&!d.has("all");D.classList.toggle("hidden",!e)}}function he(){document.querySelectorAll(".bookmark-btn").forEach(e=>{const t=e;t.addEventListener("click",()=>{const a=t.dataset.paperId;if(!a)return;let r=ae();const s=t.querySelector(".bookmark-icon"),n=t.querySelector(".bookmark-text");r.includes(a)?(r=r.filter(l=>l!==a),t.classList.remove("bookmarked"),s&&s.setAttribute("fill","none"),n&&(n.textContent="Save"),t.setAttribute("aria-label","Save paper")):(r.push(a),t.classList.add("bookmarked"),s&&s.setAttribute("fill","currentColor"),n&&(n.textContent="Saved"),t.setAttribute("aria-label","Remove from saved papers")),ue(r)})})}function ge(){document.querySelectorAll(".expand-abstract").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-paper-id"),a=document.querySelector(`[data-abstract-id="${t}"]`),r=e.querySelector(".expand-text"),s=e.querySelector(".expand-icon");if(a&&r&&s){const n=a.classList.toggle("hidden");r.textContent=n?"Show abstract":"Hide abstract",s.classList.toggle("rotate-180",!n)}})})}function ve(e,t){let a;return(...r)=>{clearTimeout(a),a=setTimeout(()=>e(...r),t)}}const be=ve(()=>{h(),f(!0)},200);m?.addEventListener("input",e=>{k=e.target.value,be()});j?.addEventListener("click",()=>{m&&(m.value="",k="",h(),f(!0),m.focus())});const ke=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!T&&w<u.length&&(T=!0,B&&B.classList.remove("hidden"),setTimeout(()=>{f(!1),T=!1,B&&B.classList.add("hidden")},150))})},{rootMargin:"200px"});G&&ke.observe(G);P.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-category");t&&(t==="all"?(i.clear(),P.forEach(a=>a.classList.remove("active")),e.classList.add("active")):(i.delete("all"),document.querySelector('[data-category="all"]')?.classList.remove("active"),i.has(t)?(i.delete(t),e.classList.remove("active")):(i.add(t),e.classList.add("active")),i.size===0&&document.querySelector('[data-category="all"]')?.classList.add("active")),h(),f(!0))})});ie.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-conference");t&&(t==="all"?(c.clear(),document.querySelectorAll(".conference-filter-btn").forEach(a=>a.classList.remove("active")),e.classList.add("active")):(c.delete("all"),document.querySelector('[data-conference="all"]')?.classList.remove("active"),c.has(t)?(c.delete(t),e.classList.remove("active")):(c.add(t),e.classList.add("active")),c.size===0&&document.querySelector('[data-conference="all"]')?.classList.add("active")),h(),f(!0))})});V.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-track");t&&(t==="all"?(d.clear(),V.forEach(a=>a.classList.remove("active")),e.classList.add("active")):(d.delete("all"),document.querySelector('[data-track="all"]')?.classList.remove("active"),d.has(t)?(d.delete(t),e.classList.remove("active")):(d.add(t),e.classList.add("active")),d.size===0&&document.querySelector('[data-track="all"]')?.classList.add("active")),h(),f(!0))})});D?.addEventListener("click",()=>{k="",m&&(m.value=""),i.clear(),c.clear(),d.clear(),P.forEach(e=>e.classList.remove("active")),document.querySelectorAll(".conference-filter-btn").forEach(e=>e.classList.remove("active")),V.forEach(e=>e.classList.remove("active")),document.querySelector('[data-category="all"]')?.classList.add("active"),document.querySelector('[data-conference="all"]')?.classList.add("active"),document.querySelector('[data-track="all"]')?.classList.add("active"),h(),f(!0)});document.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==m&&(e.preventDefault(),m?.focus()),e.key==="Escape"&&document.activeElement===m&&m?.blur(),e.key==="Escape"&&y?.classList.add("hidden")});ee?.addEventListener("click",e=>{e.stopPropagation(),y?.classList.toggle("hidden")});document.addEventListener("click",e=>{const t=e.target;y&&!y.classList.contains("hidden")&&!ee?.contains(t)&&!y.contains(t)&&y.classList.add("hidden")});Q.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.sort;t&&(Z=t,K&&(K.textContent=de[t]||"Sort"),Q.forEach(a=>{const r=a.querySelector(".sort-check"),s=a.dataset.sort===t;r?.classList.toggle("hidden",!s),a.classList.toggle("text-slate-900",s),a.classList.toggle("dark:text-white",s),a.classList.toggle("text-slate-700",!s),a.classList.toggle("dark:text-slate-300",!s)}),h(),f(!0),y?.classList.add("hidden"))})});function pe(e){const t=document.querySelector(".conference-filter-btn")?.parentElement;if(!t)return;const a=new Set;t.querySelectorAll(".conference-filter-btn[data-conference]").forEach(r=>{const s=r.dataset.conference;s&&s!=="all"&&a.add(s)}),e.forEach(r=>{if(!a.has(r)){const s=document.createElement("button");s.className="conference-filter-btn shrink-0 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-slate-300/80 dark:hover:bg-slate-800 transition-all",s.dataset.conference=r,s.textContent=r,s.addEventListener("click",()=>{c.delete("all"),document.querySelector('[data-conference="all"]')?.classList.remove("active"),c.has(r)?(c.delete(r),s.classList.remove("active")):(c.add(r),s.classList.add("active")),c.size===0&&document.querySelector('[data-conference="all"]')?.classList.add("active"),h(),f(!0)}),t.appendChild(s)}})}function xe(e){if(Array.isArray(e))return e;if(e&&typeof e=="object"){const t=e;if(Array.isArray(t.papers))return t.papers;if(Array.isArray(t.data))return t.data}return[]}async function ye(e){const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to fetch conference papers: ${t.status}`);const a=await t.json();return xe(a)}async function we(){if(!(_||A||J.length===0)){A=!0;try{let e=[];for(const t of J){try{e=await ye(t)}catch(a){console.warn("Unable to load conference papers from R2:",a),e=[]}if(e.length>0)break}if(e.length>0){b=e,h(),f(!0);const t=document.querySelector('[data-stat="paper-count"]'),a=document.querySelector('[data-stat="conference-count"]'),r=document.querySelector('[data-stat="workshop-count"]'),s=document.getElementById("total-count");t&&(t.textContent=String(b.length)),s&&(s.textContent=String(b.length));const n=Array.from(new Set(b.map(l=>l.conference?.name).filter(Boolean)));if(a&&(a.textContent=String(n.length)),r){const l=b.filter(L=>L.conference?.track==="Workshop").length;r.textContent=String(l)}pe(n)}}catch(e){console.warn("Unable to load conference papers from R2:",e)}finally{_=!0,A=!1}}}b.length===0?(O?.classList.remove("hidden"),x?.classList.add("hidden"),q?.classList.add("hidden")):(h(),f(!0));we();
