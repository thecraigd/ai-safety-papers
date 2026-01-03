import"./hoisted.BXF0uyWk.js";import"./PaperCard.astro_astro_type_script_index_0_lang.Ct2jDZAO.js";const R="guardrail_bookmarks",q=document.getElementById("all-papers-url"),te=q?JSON.parse(q.textContent||'""'):"",z=document.getElementById("categories-data"),ae=z?JSON.parse(z.textContent||"{}"):{},i=document.getElementById("search-input"),S=document.getElementById("clear-search"),k=document.getElementById("search-query"),x=document.getElementById("visible-count"),P=document.getElementById("bookmark-total"),A=document.getElementById("clear-all-filters"),D=document.getElementById("clear-all-bookmarks"),C=document.getElementById("no-results"),V=document.getElementById("empty-state"),c=document.getElementById("papers-container"),I=document.querySelectorAll(".filter-btn"),U=document.getElementById("sort-toggle"),m=document.getElementById("sort-dropdown"),F=document.getElementById("sort-label"),H=document.querySelectorAll(".sort-option");let d="",n=new Set,N="date-desc",y=Array.from(document.querySelectorAll(".paper-item"));const se={"date-desc":"Newest","date-asc":"Oldest",relevance:"Relevance",author:"Author",title:"Title"};function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function re(e,a){const t=document.createElement("div"),s=e.authors||[],r=e.summary||"",g=e.abstract||"",o=e.categories||[],f=l(e.title),T=l(r),w=l(s.join(" ").toLowerCase()),L=l(e.title.toLowerCase()),E=l(r.toLowerCase()),$=l(g.toLowerCase()),B=s.length>3?`${s.slice(0,3).join(", ")} +${s.length-3} more`:s.join(", "),v=new Date(e.published),b=Math.floor((new Date().getTime()-v.getTime())/(1e3*60*60*24));let p="Today";b===1?p="Yesterday":b>1&&(p=`${b}d ago`);const W=v.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),X=Math.round(e.relevance_score*100),Y=Math.ceil(e.relevance_score*5),G=e.conference?`${e.conference.name} ${e.conference.year}`:"",K=e.conference?e.conference.track==="Workshop"&&e.conference.workshop?`Workshop: ${e.conference.workshop}`:e.conference.track:"",_=e.bibtex_url||(e.arxiv_url.includes("arxiv.org")?`https://arxiv.org/bibtex/${e.id.replace(/v\\d+$/,"")}`:""),Q=o.map(h=>{const j=ae[h]||{name:h,gradient:"from-slate-500 to-slate-600"},ee=l(j.name);return`
        <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${j.gradient} shadow-sm" data-category="${h}">
          ${ee}
        </span>
      `}).join(""),Z=e.conference?`
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-sm">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            ${l(G)}
          </span>
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-brass-500/15 text-brass-700 dark:text-brass-300 border border-brass-500/30">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ${l(K)}
          </span>
        </div>
      `:"";return t.className="paper-item hidden",t.dataset.paperId=e.id,t.dataset.paperCategories=o.join(","),t.dataset.paperDate=e.published,t.dataset.paperRelevance=String(e.relevance_score),t.dataset.paperAuthor=(s[0]||"").toLowerCase(),t.dataset.paperTitleSort=e.title.toLowerCase(),t.style.animationDelay=`${a*50}ms`,t.innerHTML=`
      <article
        class="group relative bg-white/88 dark:bg-slate-900/75 backdrop-blur-sm rounded-2xl border border-slate-200/70 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover-lift overflow-hidden shadow-[0_16px_45px_-40px_rgba(31,27,23,0.35)]"
        data-paper-title="${L}"
        data-paper-summary="${E}"
        data-paper-abstract="${$}"
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
                  ${p}
                </time>
              </div>
              <span class="text-xs text-slate-400 dark:text-slate-500">${W}</span>
            </div>

            <div class="flex items-center gap-1.5">
              <div class="flex gap-0.5">
                ${[1,2,3,4,5].map(h=>`
                  <div class="w-1.5 h-4 rounded-full transition-colors ${h<=Y?"bg-gradient-to-t from-brass-500 to-brass-300":"bg-slate-200 dark:bg-slate-700"}"></div>
                `).join("")}
              </div>
              <span class="text-xs font-medium text-slate-400 dark:text-slate-500 ml-1">${X}%</span>
            </div>
          </div>

          ${Z}

          <h3 class="text-lg font-display font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors">
            <a href="${e.arxiv_url}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-2 underline-offset-2">
              ${f}
            </a>
          </h3>

          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="truncate">${l(B)}</span>
          </p>

          <div class="relative mb-5">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
              ${T}
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mb-5">
            ${Q}
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
              ${_?`
              <a
                href="${_}"
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
    `,t}function oe(e){if(!c)return;c.innerHTML="";const a=document.createDocumentFragment();e.forEach((t,s)=>{a.appendChild(re(t,s))}),c.appendChild(a),y=Array.from(c.querySelectorAll(".paper-item"))}function O(){const e=localStorage.getItem(R);return e?JSON.parse(e):[]}async function ne(){try{const e=await fetch(te,{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch papers: ${e.status}`);const a=await e.json(),t=Array.isArray(a?.papers)?a.papers:[];if(t.length===0)return;const s=O(),r=t.filter(g=>s.includes(g.id));r.length>0&&(oe(r),J(N)),u()}catch(e){console.warn("Unable to load full paper database from R2:",e)}}function J(e){c&&(y.sort((a,t)=>{const s=a,r=t;switch(e){case"date-desc":return new Date(r.dataset.paperDate||"").getTime()-new Date(s.dataset.paperDate||"").getTime();case"date-asc":return new Date(s.dataset.paperDate||"").getTime()-new Date(r.dataset.paperDate||"").getTime();case"relevance":return parseFloat(r.dataset.paperRelevance||"0")-parseFloat(s.dataset.paperRelevance||"0");case"author":return(s.dataset.paperAuthor||"").localeCompare(r.dataset.paperAuthor||"");case"title":return(s.dataset.paperTitleSort||"").localeCompare(r.dataset.paperTitleSort||"");default:return 0}}),y.forEach((a,t)=>{const s=a;s.style.animationDelay=`${t*30}ms`,s.style.animation="none",c.appendChild(s),s.offsetWidth,s.style.opacity="",s.style.animation=""}))}function u(){const e=O(),a=e.length;let t=0;const s=d.toLowerCase();if(P&&(P.textContent=String(a)),D&&D.classList.toggle("hidden",a===0),a===0){V?.classList.remove("hidden"),c?.classList.add("hidden"),C?.classList.add("hidden"),x&&(x.textContent="0");return}V?.classList.add("hidden");let r=0;if(y.forEach(g=>{const o=g,f=o.dataset.paperId;if(!(f&&e.includes(f))){o.classList.add("hidden"),o.style.display="none";return}const w=o.querySelector("[data-paper-title]")?.getAttribute("data-paper-title")||"",L=o.querySelector("[data-paper-summary]")?.getAttribute("data-paper-summary")||"",E=o.querySelector("[data-paper-abstract]")?.getAttribute("data-paper-abstract")||"",$=o.querySelector("[data-paper-authors]")?.getAttribute("data-paper-authors")||"",B=o.getAttribute("data-paper-categories")?.split(",")||[],v=!d||w.includes(s)||L.includes(s)||E.includes(s)||$.includes(s),M=n.size===0||n.has("all")||B.some(p=>n.has(p));v&&M?(o.classList.remove("hidden"),o.style.display="block",o.style.animationDelay=`${r*50}ms`,r++,t++):(o.classList.add("hidden"),o.style.display="none")}),x&&(x.textContent=String(t)),k&&(d?(k.textContent=`for "${d}"`,k.classList.remove("hidden")):k.classList.add("hidden")),S&&S.classList.toggle("hidden",!d),A){const g=d||n.size>0&&!n.has("all");A.classList.toggle("hidden",!g)}t>0?(c?.classList.remove("hidden"),C?.classList.add("hidden")):(c?.classList.add("hidden"),C?.classList.remove("hidden"))}i?.addEventListener("input",e=>{d=e.target.value,u()});S?.addEventListener("click",()=>{i&&(i.value="",d="",u(),i.focus())});I.forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-category");a&&(a==="all"?(n.clear(),I.forEach(t=>t.classList.remove("active")),e.classList.add("active")):(n.delete("all"),document.querySelector('[data-category="all"]')?.classList.remove("active"),n.has(a)?(n.delete(a),e.classList.remove("active")):(n.add(a),e.classList.add("active")),n.size===0&&document.querySelector('[data-category="all"]')?.classList.add("active")),u())})});A?.addEventListener("click",()=>{d="",i&&(i.value=""),n.clear(),I.forEach(e=>e.classList.remove("active")),document.querySelector('[data-category="all"]')?.classList.add("active"),u()});D?.addEventListener("click",()=>{confirm("Are you sure you want to remove all saved papers? This cannot be undone.")&&(localStorage.removeItem(R),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:[]}})),u())});document.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==i&&(e.preventDefault(),i?.focus()),e.key==="Escape"&&(document.activeElement===i&&i?.blur(),m&&!m.classList.contains("hidden")&&m.classList.add("hidden"))});U?.addEventListener("click",e=>{e.stopPropagation(),m?.classList.toggle("hidden")});document.addEventListener("click",e=>{if(m&&!m.classList.contains("hidden")){const a=e.target;!U?.contains(a)&&!m.contains(a)&&m.classList.add("hidden")}});H.forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.sort;a&&(N=a,F&&(F.textContent=se[a]||"Sort"),H.forEach(t=>{const s=t.querySelector(".sort-check"),r=t.dataset.sort===a;s?.classList.toggle("hidden",!r),t.classList.toggle("text-slate-900",r),t.classList.toggle("dark:text-white",r),t.classList.toggle("text-slate-700",!r),t.classList.toggle("dark:text-slate-300",!r)}),J(a),u(),m?.classList.add("hidden"))})});window.addEventListener("bookmarksUpdated",()=>{u()});u();ne();
