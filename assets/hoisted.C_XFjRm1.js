import"./hoisted.CvQEWfIr.js";const x="guardrail_bookmarks",C={"ai-control":{name:"AI Control",gradient:"from-slate-600 to-slate-800"},rlhf:{name:"RLHF",gradient:"from-brass-500 to-brass-700"},"io-classifiers":{name:"I/O Classifiers",gradient:"from-teal-500 to-cyan-700"},"mechanistic-interpretability":{name:"Mech. Interp.",gradient:"from-emerald-500 to-teal-700"},"position-paper":{name:"Position Paper",gradient:"from-amber-500 to-orange-700"},"alignment-theory":{name:"Alignment Theory",gradient:"from-rose-500 to-red-700"},"robustness-security":{name:"Robustness",gradient:"from-stone-500 to-amber-800"},"evaluations-benchmarks":{name:"Evaluations",gradient:"from-blue-500 to-slate-700"},"governance-policy":{name:"Governance",gradient:"from-emerald-600 to-green-800"},"agent-safety":{name:"Agent Safety",gradient:"from-zinc-500 to-zinc-800"}};function p(){try{const e=localStorage.getItem(x);return e?JSON.parse(e):[]}catch{return[]}}function j(e){localStorage.setItem(x,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:e}}))}function B(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function I(e,t=3){return e.length<=t?e.join(", "):`${e.slice(0,t).join(", ")} +${e.length-t}`}function c(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function D(e){return e===1?{bg:"from-amber-400 to-amber-600",ring:"ring-amber-300/50",text:"text-white"}:e===2?{bg:"from-slate-300 to-slate-500",ring:"ring-slate-300/50",text:"text-white"}:e===3?{bg:"from-orange-400 to-orange-600",ring:"ring-orange-300/50",text:"text-white"}:{bg:"from-slate-500 to-slate-700",ring:"ring-slate-400/30",text:"text-white"}}function M(e,t,o,r){const n=o.includes(e.id),s=e.editor_score?.weighted_score!=null,d=s?e.editor_score.weighted_score:0,u=s?Math.round(d/10*5):0,m=(e.categories||[]).map(l=>{const g=C[l]||{name:l,gradient:"from-slate-500 to-slate-700"};return`<span class="px-2 py-0.5 rounded-md text-white bg-gradient-to-r ${g.gradient} text-[10px] font-semibold shadow-sm">${c(g.name)}</span>`}).join(""),f=(e.tags||[]).slice(0,3).map(l=>`<span class="px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 text-[10px] font-medium border border-slate-200/60 dark:border-slate-600/50">${c(l)}</span>`).join(""),b=s?`<div class="flex items-center gap-1.5" title="Editor Score: ${d.toFixed(1)}/10">
          <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">${d.toFixed(1)}</span>
          <div class="flex items-center gap-0.5">
            ${[1,2,3,4,5].map(l=>`<div class="w-1 h-3 rounded-full ${l<=u?"bg-gradient-to-t from-brass-500 to-brass-400":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
          </div>
        </div>`:e.relevance_score!=null?`<div class="flex items-center gap-1.5">
            <div class="flex gap-0.5">
              ${[1,2,3,4,5].map(l=>`<div class="w-1 h-3 rounded-full ${l<=Math.ceil(e.relevance_score*5)?"bg-gradient-to-t from-brass-500 to-brass-300":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
            </div>
            <span class="text-[10px] font-medium text-slate-400 dark:text-slate-500">${Math.round(e.relevance_score*100)}%</span>
          </div>`:"",i=D(t);return`
      <article
        class="paper-card group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-slate-700/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-brass-300/50 dark:hover:border-brass-600/40"
        style="animation-delay: ${r}ms"
        data-paper-id="${c(e.id)}"
      >
        <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brass-400 via-brass-500 to-brass-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <div class="p-4 sm:p-5">
          <div class="flex items-start gap-3 sm:gap-4">
            <div class="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${i.bg} flex items-center justify-center ${i.text} font-bold text-sm shadow-md ring-1 ${i.ring}">
              ${t}
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors line-clamp-2">
                <a href="${c(e.arxiv_url)}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-1 underline-offset-2">
                  ${c(e.title)}
                </a>
              </h3>

              <p class="text-xs text-slate-500 dark:text-slate-500 mb-2 truncate">
                ${c(I(e.authors||[]))}
              </p>

              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed">
                ${c(e.sol_review?.one_line_pitch||e.editor_score?.one_line_pitch||e.summary||"")}
              </p>

              <div class="flex flex-wrap items-center gap-2 text-xs">
                ${b}
                ${m}
                ${f}

                <div class="flex items-center gap-2 ml-auto">
                  <button
                    class="bookmark-btn text-slate-400 hover:text-brass-600 dark:hover:text-brass-400 transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-brass-50 dark:hover:bg-brass-900/30 ${n?"bookmarked":""}"
                    data-paper-id="${c(e.id)}"
                    title="${n?"Remove from saved papers":"Save paper"}"
                  >
                    <svg class="w-3.5 h-3.5 bookmark-icon" fill="${n?"currentColor":"none"}" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span class="bookmark-text hidden sm:inline text-xs font-medium">${n?"Saved":"Save"}</span>
                  </button>
                  <a
                    href="${c(e.arxiv_url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-slate-400 hover:text-brass-600 dark:hover:text-brass-400 transition-colors flex items-center gap-1"
                    title="View on arXiv"
                  >
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="${c(e.pdf_url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-slate-400 hover:text-brass-600 dark:hover:text-brass-400 transition-colors flex items-center gap-1"
                    title="Download PDF"
                  >
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="hidden sm:inline">PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    `}function A(e,t,o,r,n){const s=e.replace(/-/g,""),d=B(e),u=t.map((m,f)=>M(m,f+1,r,f*50)).join("");return`
      <div
        class="day-section"
        data-day-id="${s}"
        style="--day-delay: ${o*100}ms"
      >
        <!-- Day Header (Clickable to collapse/expand) -->
        <div class="day-header mb-6">
          <button
            class="day-toggle w-full text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-2xl glass border border-slate-200/60 dark:border-slate-700/60 shadow-[0_20px_50px_-40px_rgba(31,27,23,0.4)] cursor-pointer hover:border-brass-300/70 dark:hover:border-brass-600/50 transition-colors group"
            data-day-target="${s}"
            aria-expanded="${o===0?"true":"false"}"
            aria-controls="day-content-${s}"
          >
            <div>
              <div class="flex items-center gap-3 mb-1">
                ${n?`
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-brass-500 to-brass-600 text-white text-xs font-semibold shadow-lg">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Latest
                  </span>
                `:""}
                <h2 class="text-xl sm:text-2xl font-display font-semibold text-slate-900 dark:text-white">
                  ${d}
                </h2>
              </div>
              <p class="text-slate-500 dark:text-slate-400 text-sm">
                Top ${t.length} papers
              </p>
            </div>
            <div class="flex items-center gap-4">
              <!-- Collapse indicator -->
              <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brass-100 dark:group-hover:bg-brass-900/30 transition-colors">
                <svg class="collapse-icon w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-brass-600 dark:group-hover:text-brass-400 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <!-- Collapsible Day Content -->
        <div
          id="day-content-${s}"
          class="day-content ${o===0?"":"collapsed"}"
          data-day-id="${s}"
        >
          <div class="day-content-inner">
            <div class="space-y-4">
              ${u}
            </div>
          </div>
        </div>

        <div class="day-divider mt-12 flex items-center justify-center">
          <div class="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
        </div>
      </div>
    `}function H(){document.querySelectorAll("#days-container .bookmark-btn").forEach(e=>{const t=e;t.addEventListener("click",()=>{const o=t.dataset.paperId;if(!o)return;let r=p();const n=t.querySelector(".bookmark-icon"),s=t.querySelector(".bookmark-text");r.includes(o)?(r=r.filter(d=>d!==o),t.classList.remove("bookmarked"),n&&n.setAttribute("fill","none"),s&&(s.textContent="Save"),t.title="Save paper"):(r.push(o),t.classList.add("bookmarked"),n&&n.setAttribute("fill","currentColor"),s&&(s.textContent="Saved"),t.title="Remove from saved papers"),j(r)})})}function T(){document.querySelectorAll(".day-toggle").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-day-target"),o=document.getElementById(`day-content-${t}`),r=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!r)),o?.classList.toggle("collapsed",r),r&&setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})},50)})})}async function h(){const e=document.getElementById("loading-state"),t=document.getElementById("empty-state"),o=document.getElementById("error-state"),r=document.getElementById("days-container"),n=document.getElementById("footer-note"),s=document.getElementById("days-count"),d=document.getElementById("papers-count");if(!e||!t||!o||!r)return;const u=e.dataset.url;if(!u){e.classList.add("hidden"),o.classList.remove("hidden");return}try{const m=await fetch(u,{cache:"no-store"});if(!m.ok)throw new Error(`HTTP ${m.status}`);const b=(await m.json()).papers||[];if(b.length===0){e.classList.add("hidden"),t.classList.remove("hidden");return}const i={};b.forEach(a=>{a.date&&(i[a.date]||=[]).push(a)});const l=a=>a.sol_review?.weighted_score!=null?[1,a.sol_review.weighted_score]:[0,a.editor_score?.weighted_score||a.relevance_score||0];Object.keys(i).forEach(a=>{i[a].sort((v,$)=>{const[E,_]=l(v),[L,S]=l($);return L-E||S-_}),i[a]=i[a].slice(0,5)});const g=Object.keys(i).sort().reverse();if(g.length===0){e.classList.add("hidden"),t.classList.remove("hidden");return}const k=g.reduce((a,v)=>a+i[v].length,0);s&&(s.textContent=g.length.toString()),d&&(d.textContent=k.toString());const y=p(),w=g.map((a,v)=>A(a,i[a],v,y,v===0)).join("");r.innerHTML=w,e.classList.add("hidden"),r.classList.remove("hidden"),n?.classList.remove("hidden"),H(),T()}catch(m){console.error("Failed to load papers:",m),e.classList.add("hidden"),o.classList.remove("hidden")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();
