import"./hoisted.Counn0XA.js";const O="guardrail_bookmarks",j=document.getElementById("all-papers-url"),oe=j?JSON.parse(j.textContent||'""'):"",P=document.getElementById("conference-papers-urls"),ne=P?JSON.parse(P.textContent||"[]"):[],R=document.getElementById("categories-data"),le=R?JSON.parse(R.textContent||"{}"):{},c=document.getElementById("search-input"),A=document.getElementById("clear-search"),b=document.getElementById("search-query"),x=document.getElementById("visible-count"),z=document.getElementById("bookmark-total"),$=document.getElementById("clear-all-filters"),I=document.getElementById("clear-all-bookmarks"),B=document.getElementById("no-results"),V=document.getElementById("empty-state"),u=document.getElementById("papers-container"),D=document.querySelectorAll(".filter-btn"),U=document.getElementById("sort-toggle"),m=document.getElementById("sort-dropdown"),F=document.getElementById("sort-label"),H=document.querySelectorAll(".sort-option");let d="",l=new Set,N="date-desc",y=Array.from(document.querySelectorAll(".paper-item"));const ie={"date-desc":"Newest","date-asc":"Oldest",relevance:"Relevance",author:"Author",title:"Title"};function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ce(e,a){const t=document.createElement("div"),s=e.authors||[],r=e.summary||"",n=e.abstract||"",o=e.categories||[],h=i(e.title),q=i(r),w=i(s.join(" ").toLowerCase()),L=i(e.title.toLowerCase()),S=i(r.toLowerCase()),E=i(n.toLowerCase()),C=s.length>3?`${s.slice(0,3).join(", ")} +${s.length-3} more`:s.join(", "),k=new Date(e.published),v=Math.floor((new Date().getTime()-k.getTime())/(1e3*60*60*24));let g="Today";v===1?g="Yesterday":v>1&&(g=`${v}d ago`);const X=k.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),Q=Math.round(e.relevance_score*100),Z=Math.ceil(e.relevance_score*5),ee=e.conference?`${e.conference.name} ${e.conference.year}`:"",te=e.conference?e.conference.track==="Workshop"&&e.conference.workshop?`Workshop: ${e.conference.workshop}`:e.conference.track:"",M=e.bibtex_url||(e.arxiv_url.includes("arxiv.org")?`https://arxiv.org/bibtex/${e.id.replace(/v\\d+$/,"")}`:""),ae=o.map(f=>{const _=le[f]||{name:f,gradient:"from-slate-500 to-slate-600"},re=i(_.name);return`
        <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${_.gradient} shadow-sm" data-category="${f}">
          ${re}
        </span>
      `}).join(""),se=e.conference?`
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-sm">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            ${i(ee)}
          </span>
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-brass-500/15 text-brass-700 dark:text-brass-300 border border-brass-500/30">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ${i(te)}
          </span>
        </div>
      `:"";return t.className="paper-item hidden",t.dataset.paperId=e.id,t.dataset.paperCategories=o.join(","),t.dataset.paperDate=e.published,t.dataset.paperRelevance=String(e.relevance_score),t.dataset.paperAuthor=(s[0]||"").toLowerCase(),t.dataset.paperTitleSort=e.title.toLowerCase(),t.style.animationDelay=`${a*50}ms`,t.innerHTML=`
      <article
        class="group relative bg-white/88 dark:bg-slate-900/75 backdrop-blur-sm rounded-2xl border border-slate-200/70 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover-lift overflow-hidden shadow-[0_16px_45px_-40px_rgba(31,27,23,0.35)]"
        data-paper-title="${L}"
        data-paper-summary="${S}"
        data-paper-abstract="${E}"
        data-paper-authors="${w}"
      >
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-slate-500 to-brass-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div class="p-6">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time class="text-xs font-medium text-slate-600 dark:text-slate-400" datetime="${e.published}">
                  ${g}
                </time>
              </div>
              <span class="text-xs text-slate-400 dark:text-slate-500">${X}</span>
            </div>

            <div class="flex items-center gap-1.5">
              <div class="flex gap-0.5">
                ${[1,2,3,4,5].map(f=>`
                  <div class="w-1.5 h-4 rounded-full transition-colors ${f<=Z?"bg-gradient-to-t from-brass-500 to-brass-300":"bg-slate-200 dark:bg-slate-700"}"></div>
                `).join("")}
              </div>
              <span class="text-xs font-medium text-slate-400 dark:text-slate-500 ml-1">${Q}%</span>
            </div>
          </div>

          ${se}

          <h3 class="text-lg font-display font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors">
            <a href="${e.arxiv_url}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-2 underline-offset-2">
              ${h}
            </a>
          </h3>

          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="truncate">${i(C)}</span>
          </p>

          <div class="relative mb-5">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
              ${q}
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mb-5">
            ${ae}
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-2">
              <a
                href="${e.arxiv_url}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-md transition-all ring-1 ring-brass-400/40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:ring-brass-300/40"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Paper
              </a>
              <a
                href="${e.pdf_url}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700/60"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF
              </a>
              ${M?`
              <a
                href="${M}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700/60"
                title="Export BibTeX citation"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                BibTeX
              </a>`:""}
              <button
                class="bookmark-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-brass-100 dark:hover:bg-brass-900/30 transition-all border border-slate-200/60 dark:border-slate-700/60 hover:border-brass-300 dark:hover:border-brass-700 bookmarked"
                data-paper-id="${e.id}"
                aria-label="Save paper"
              >
                <svg class="w-4 h-4 bookmark-icon" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span class="bookmark-text">Saved</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `,t}function de(e){if(!u)return;u.innerHTML="";const a=document.createDocumentFragment();e.forEach((t,s)=>{a.appendChild(ce(t,s))}),u.appendChild(a),y=Array.from(u.querySelectorAll(".paper-item"))}function J(){const e=localStorage.getItem(O);return e?JSON.parse(e):[]}function W(e){if(Array.isArray(e))return e;if(e&&typeof e=="object"){const a=e;if(Array.isArray(a.papers))return a.papers;if(Array.isArray(a.data))return a.data}return[]}async function ue(){for(const e of ne)try{const a=await fetch(e,{cache:"no-store"});if(a.ok){const t=await a.json(),s=W(t);if(s.length>0)return s}}catch{}return[]}async function me(){try{const[e,a]=await Promise.all([fetch(oe,{cache:"no-store"}).then(async n=>{if(n.ok){const o=await n.json();return W(o)}return[]}).catch(()=>[]),ue()]);let t=e;if(a.length>0){const n=new Set(t.map(o=>o.id));for(const o of a)n.has(o.id)||t.push(o)}if(t.length===0)return;const s=J(),r=t.filter(n=>s.includes(n.id));r.length>0&&(de(r),Y(N)),p()}catch(e){console.warn("Unable to load full paper database from R2:",e)}}function Y(e){u&&(y.sort((a,t)=>{const s=a,r=t;switch(e){case"date-desc":return new Date(r.dataset.paperDate||"").getTime()-new Date(s.dataset.paperDate||"").getTime();case"date-asc":return new Date(s.dataset.paperDate||"").getTime()-new Date(r.dataset.paperDate||"").getTime();case"relevance":return parseFloat(r.dataset.paperRelevance||"0")-parseFloat(s.dataset.paperRelevance||"0");case"author":return(s.dataset.paperAuthor||"").localeCompare(r.dataset.paperAuthor||"");case"title":return(s.dataset.paperTitleSort||"").localeCompare(r.dataset.paperTitleSort||"");default:return 0}}),y.forEach((a,t)=>{const s=a;s.style.animationDelay=`${t*30}ms`,s.style.animation="none",u.appendChild(s),s.offsetWidth,s.style.opacity="",s.style.animation=""}))}function p(){const e=J(),a=e.length;let t=0;const s=d.toLowerCase();if(z&&(z.textContent=String(a)),I&&I.classList.toggle("hidden",a===0),a===0){V?.classList.remove("hidden"),u?.classList.add("hidden"),B?.classList.add("hidden"),x&&(x.textContent="0");return}V?.classList.add("hidden");let r=0;if(y.forEach(n=>{const o=n,h=o.dataset.paperId;if(!(h&&e.includes(h))){o.classList.add("hidden"),o.style.display="none";return}const w=o.querySelector("[data-paper-title]")?.getAttribute("data-paper-title")||"",L=o.querySelector("[data-paper-summary]")?.getAttribute("data-paper-summary")||"",S=o.querySelector("[data-paper-abstract]")?.getAttribute("data-paper-abstract")||"",E=o.querySelector("[data-paper-authors]")?.getAttribute("data-paper-authors")||"",C=o.getAttribute("data-paper-categories")?.split(",")||[],k=!d||w.includes(s)||L.includes(s)||S.includes(s)||E.includes(s),T=l.size===0||l.has("all")||C.some(g=>l.has(g));k&&T?(o.classList.remove("hidden"),o.style.display="block",o.style.animationDelay=`${r*50}ms`,r++,t++):(o.classList.add("hidden"),o.style.display="none")}),x&&(x.textContent=String(t)),b&&(d?(b.textContent=`for "${d}"`,b.classList.remove("hidden")):b.classList.add("hidden")),A&&A.classList.toggle("hidden",!d),$){const n=d||l.size>0&&!l.has("all");$.classList.toggle("hidden",!n)}t>0?(u?.classList.remove("hidden"),B?.classList.add("hidden")):(u?.classList.add("hidden"),B?.classList.remove("hidden"))}c?.addEventListener("input",e=>{d=e.target.value,p()});A?.addEventListener("click",()=>{c&&(c.value="",d="",p(),c.focus())});D.forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-category");a&&(a==="all"?(l.clear(),D.forEach(t=>t.classList.remove("active")),e.classList.add("active")):(l.delete("all"),document.querySelector('[data-category="all"]')?.classList.remove("active"),l.has(a)?(l.delete(a),e.classList.remove("active")):(l.add(a),e.classList.add("active")),l.size===0&&document.querySelector('[data-category="all"]')?.classList.add("active")),p())})});$?.addEventListener("click",()=>{d="",c&&(c.value=""),l.clear(),D.forEach(e=>e.classList.remove("active")),document.querySelector('[data-category="all"]')?.classList.add("active"),p()});I?.addEventListener("click",()=>{confirm("Are you sure you want to remove all saved papers? This cannot be undone.")&&(localStorage.removeItem(O),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:[]}})),p())});document.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==c&&(e.preventDefault(),c?.focus()),e.key==="Escape"&&(document.activeElement===c&&c?.blur(),m&&!m.classList.contains("hidden")&&m.classList.add("hidden"))});U?.addEventListener("click",e=>{e.stopPropagation(),m?.classList.toggle("hidden")});document.addEventListener("click",e=>{if(m&&!m.classList.contains("hidden")){const a=e.target;!U?.contains(a)&&!m.contains(a)&&m.classList.add("hidden")}});H.forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.sort;a&&(N=a,F&&(F.textContent=ie[a]||"Sort"),H.forEach(t=>{const s=t.querySelector(".sort-check"),r=t.dataset.sort===a;s?.classList.toggle("hidden",!r),t.classList.toggle("text-slate-900",r),t.classList.toggle("dark:text-white",r),t.classList.toggle("text-slate-700",!r),t.classList.toggle("dark:text-slate-300",!r)}),Y(a),p(),m?.classList.add("hidden"))})});window.addEventListener("bookmarksUpdated",()=>{p()});p();me();const G="guardrail_bookmarks";function K(){const e=localStorage.getItem(G);return e?JSON.parse(e):[]}function pe(e){localStorage.setItem(G,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:e}}))}function ge(e){const a=e.dataset.paperId;if(!a)return;let t=K();const s=e.querySelector(".bookmark-icon"),r=e.querySelector(".bookmark-text");t.includes(a)?(t=t.filter(n=>n!==a),e.classList.remove("bookmarked"),s&&s.setAttribute("fill","none"),r&&(r.textContent="Save"),e.setAttribute("aria-label","Save paper")):(t.push(a),e.classList.add("bookmarked"),s&&s.setAttribute("fill","currentColor"),r&&(r.textContent="Saved"),e.setAttribute("aria-label","Remove from saved papers")),pe(t)}function fe(){const e=K();document.querySelectorAll(".bookmark-btn").forEach(a=>{const t=a,s=t.dataset.paperId;if(s){if(e.includes(s)){t.classList.add("bookmarked");const r=t.querySelector(".bookmark-icon"),n=t.querySelector(".bookmark-text");r&&r.setAttribute("fill","currentColor"),n&&(n.textContent="Saved"),t.setAttribute("aria-label","Remove from saved papers")}t.addEventListener("click",()=>ge(t))}})}document.querySelectorAll(".expand-abstract").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-paper-id"),t=document.querySelector(`[data-abstract-id="${a}"]`),s=e.querySelector(".expand-text"),r=e.querySelector(".expand-icon");if(t&&s&&r){const n=t.classList.toggle("hidden");s.textContent=n?"Show abstract":"Hide abstract",r.classList.toggle("rotate-180",!n)}})});fe();
