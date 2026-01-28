import"./hoisted.CvQEWfIr.js";const f="guardrail_bookmarks",h={"ai-control":{name:"AI Control",gradient:"from-slate-600 to-slate-800"},rlhf:{name:"RLHF",gradient:"from-brass-500 to-brass-700"},"io-classifiers":{name:"I/O Classifiers",gradient:"from-teal-500 to-cyan-700"},"mechanistic-interpretability":{name:"Mech. Interp.",gradient:"from-emerald-500 to-teal-700"},"position-paper":{name:"Position Paper",gradient:"from-amber-500 to-orange-700"},"alignment-theory":{name:"Alignment Theory",gradient:"from-rose-500 to-red-700"},"robustness-security":{name:"Robustness",gradient:"from-stone-500 to-amber-800"},"evaluations-benchmarks":{name:"Evaluations",gradient:"from-blue-500 to-slate-700"},"governance-policy":{name:"Governance",gradient:"from-emerald-600 to-green-800"},"agent-safety":{name:"Agent Safety",gradient:"from-zinc-500 to-zinc-800"}};function b(){try{const e=localStorage.getItem(f);return e?JSON.parse(e):[]}catch{return[]}}function x(e){localStorage.setItem(f,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("bookmarksUpdated",{detail:{bookmarks:e}}))}function k(e){const t=new Date(e),s=new Date().getTime()-t.getTime(),r=Math.floor(s/(1e3*60*60*24));return r===0?"Today":r===1?"Yesterday":r<7?`${r}d ago`:`${Math.floor(r/7)}w ago`}function w(e,t=3){return e.length<=t?e.join(", "):`${e.slice(0,t).join(", ")} +${e.length-t}`}function i(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function y(e,t,a){const s=a.includes(e.id),r=e.editor_score?.weighted_score!=null,o=r?e.editor_score.weighted_score:0,l=r?Math.round(o/10*5):0,g=(e.categories||[]).map(n=>{const c=h[n]||{name:n,gradient:"from-slate-500 to-slate-700"};return`<span class="px-2 py-0.5 rounded-md text-white bg-gradient-to-r ${c.gradient} text-[10px] font-semibold shadow-sm">${i(c.name)}</span>`}).join(""),d=(e.tags||[]).slice(0,3).map(n=>`<span class="px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 text-[10px] font-medium border border-slate-200/60 dark:border-slate-600/50">${i(n)}</span>`).join(""),m=r?`<div class="flex items-center gap-1.5" title="Editor Score: ${o.toFixed(1)}/10">
          <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">${o.toFixed(1)}</span>
          <div class="flex items-center gap-0.5">
            ${[1,2,3,4,5].map(n=>`<div class="w-1 h-3 rounded-full ${n<=l?"bg-gradient-to-t from-brass-500 to-brass-400":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
          </div>
        </div>`:e.relevance_score!=null?`<div class="flex items-center gap-1.5">
            <div class="flex gap-0.5">
              ${[1,2,3,4,5].map(n=>`<div class="w-1 h-3 rounded-full ${n<=Math.ceil(e.relevance_score*5)?"bg-gradient-to-t from-brass-500 to-brass-300":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
            </div>
            <span class="text-[10px] font-medium text-slate-400 dark:text-slate-500">${Math.round(e.relevance_score*100)}%</span>
          </div>`:"";return`
      <article
        class="paper-card group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-slate-700/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-brass-300/50 dark:hover:border-brass-600/40"
        style="animation-delay: ${t*50}ms"
        data-paper-id="${i(e.id)}"
      >
        <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brass-400 via-brass-500 to-brass-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <div class="p-4 sm:p-5">
          <div class="flex items-start gap-3 sm:gap-4">
            <div class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-brass-500 to-brass-700 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md ring-1 ring-brass-400/30">
              ${t+1}
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors line-clamp-2">
                <a href="${i(e.arxiv_url)}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-1 underline-offset-2">
                  ${i(e.title)}
                </a>
              </h3>

              <p class="text-xs text-slate-500 dark:text-slate-500 mb-2 truncate">
                ${i(w(e.authors||[]))}
              </p>

              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed">
                ${i(e.editor_score?.one_line_pitch||e.summary||"")}
              </p>

              <div class="flex flex-wrap items-center gap-2 text-xs">
                <span class="text-slate-400 dark:text-slate-500 font-medium">
                  ${k(e.published)}
                </span>

                ${m}
                ${g}
                ${d}

                <div class="flex items-center gap-2 ml-auto">
                  <button
                    class="bookmark-btn text-slate-400 hover:text-brass-600 dark:hover:text-brass-400 transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-brass-50 dark:hover:bg-brass-900/30 ${s?"bookmarked":""}"
                    data-paper-id="${i(e.id)}"
                    title="${s?"Remove from saved papers":"Save paper"}"
                  >
                    <svg class="w-3.5 h-3.5 bookmark-icon" fill="${s?"currentColor":"none"}" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span class="bookmark-text hidden sm:inline text-xs font-medium">${s?"Saved":"Save"}</span>
                  </button>
                  <a
                    href="${i(e.arxiv_url)}"
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
                    href="${i(e.pdf_url)}"
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
    `}function $(){document.querySelectorAll("#papers-content .bookmark-btn").forEach(e=>{const t=e;t.addEventListener("click",()=>{const a=t.dataset.paperId;if(!a)return;let s=b();const r=t.querySelector(".bookmark-icon"),o=t.querySelector(".bookmark-text");s.includes(a)?(s=s.filter(l=>l!==a),t.classList.remove("bookmarked"),r&&r.setAttribute("fill","none"),o&&(o.textContent="Save"),t.title="Save paper"):(s.push(a),t.classList.add("bookmarked"),r&&r.setAttribute("fill","currentColor"),o&&(o.textContent="Saved"),t.title="Remove from saved papers"),x(s)})})}async function u(){const e=document.getElementById("todays-top-papers"),t=document.getElementById("papers-loading"),a=document.getElementById("papers-content"),s=document.getElementById("papers-error");if(!e||!t||!a||!s)return;const r=parseInt(e.dataset.limit||"5",10),o=e.dataset.url;if(!o){t.classList.add("hidden"),s.classList.remove("hidden");return}try{const l=await fetch(o,{cache:"no-store"});if(!l.ok)throw new Error(`HTTP ${l.status}`);const d=(await l.json()).papers||[];if(d.length===0){t.classList.add("hidden"),s.classList.remove("hidden");return}const m=d.slice(0,r),n=b(),c=m.map((v,p)=>y(v,p,n)).join("");a.innerHTML=c,t.classList.add("hidden"),a.classList.remove("hidden"),$()}catch(l){console.error("Failed to load papers:",l),t.classList.add("hidden"),s.classList.remove("hidden")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();
