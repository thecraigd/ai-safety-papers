import{r as se,A as re,a as b,b as oe,i as xe,c as ne,s as ie}from"./hoisted.CvQEWfIr.js";import{f as ye}from"./paper-index.D4PBqQBX.js";const Q=document.getElementById("browse-index-url"),we=Q?JSON.parse(Q.textContent||'""'):"",K=document.getElementById("categories-data"),Le=K?JSON.parse(K.textContent||"{}"):{};let v=[];const u=document.getElementById("search-input"),N=document.getElementById("clear-search"),$=document.getElementById("search-query"),x=document.getElementById("visible-count"),A=document.getElementById("bookmark-total"),V=document.getElementById("clear-all-filters"),S=document.getElementById("clear-all-bookmarks"),T=document.getElementById("no-results"),Z=document.getElementById("sign-in-state"),Se=document.getElementById("sign-in-btn-page"),H=document.getElementById("empty-state"),d=document.getElementById("papers-container"),R=document.querySelectorAll(".filter-btn"),D=document.getElementById("hero-subtitle"),de=document.getElementById("sort-toggle"),g=document.getElementById("sort-dropdown"),ee=document.getElementById("sort-label"),te=document.querySelectorAll(".sort-option");let h="",i=new Set,le="date-desc",M=Array.from(document.querySelectorAll(".paper-item"));const Ee={"date-desc":"Newest","date-asc":"Oldest","editor-score":"Editor Score",author:"Author",title:"Title"};function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Be(e,t){const a=document.createElement("div"),s=e.authors||[],r=e.summary||"",n=e.categories||[],w=c(e.title),o=c(r),E=c(s.join(" ").toLowerCase()),Y=c(e.title.toLowerCase()),_=c(r.toLowerCase()),q=s.length>3?`${s.slice(0,3).join(", ")} +${s.length-3} more`:s.join(", "),B=new Date(e.published),P=new Date().getTime()-B.getTime(),p=Math.floor(P/(1e3*60*60*24));let k="";p===0?k="Today":p===1?k="Yesterday":p<7?k=`${p} days ago`:p<30?k=`${Math.floor(p/7)} weeks ago`:k=`${Math.floor(p/30)} months ago`;const F=B.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),L=e.editor_score?.weighted_score!=null,j=L?e.editor_score.weighted_score:0,W=j.toFixed(1),ge=L?Math.round(j/10*5):0,X=e.bibtex_url||(e.arxiv_url.includes("arxiv.org")?`https://arxiv.org/bibtex/${e.id.replace(/v\\d+$/,"")}`:""),fe=n.map(f=>{const C=Le[f]||{name:f,gradient:"from-slate-500 to-slate-600"},I=c(C.name);return`
        <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-gradient-to-r ${C.gradient} shadow-sm" data-category="${f}">
          ${I}
        </span>
      `}).join(""),G=(e.tags||[]).map(f=>{const C=f.split("-").map(I=>I.charAt(0).toUpperCase()+I.slice(1)).join(" ");return`<a href="/browse?tag=${encodeURIComponent(f)}" class="text-xs text-slate-500 dark:text-slate-400 hover:text-brass-600 dark:hover:text-brass-400 hover:underline transition-colors">${c(C)}</a>`}).join('<span class="text-slate-400 dark:text-slate-500 text-xs">, </span>'),ke=e.conference?e.conference.workshop?`${e.conference.name} ${e.conference.year} Workshop`:`${e.conference.name} ${e.conference.year}`:"",ve=e.conference?e.conference.workshop||e.conference.track:"",be=e.conference?`
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            ${c(ke)}
          </span>
          <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            ${c(ve)}
          </span>
        </div>
      `:"";return a.className="paper-item hidden",a.dataset.paperId=e.id,a.dataset.paperCategories=n.join(","),a.dataset.paperDate=e.published,a.dataset.paperEditorScore=String(j),a.dataset.paperAuthor=(s[0]||"").toLowerCase(),a.dataset.paperTitleSort=e.title.toLowerCase(),a.style.animationDelay=`${t*50}ms`,a.innerHTML=`
      <article
        class="group relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 dark:border-slate-800/60 shadow-[0_20px_50px_-40px_rgba(31,27,23,0.35)] hover:shadow-[0_25px_60px_-40px_rgba(31,27,23,0.45)] transition-all duration-300 overflow-hidden hover-lift"
        data-paper-title="${Y}"
        data-paper-summary="${_}"
        data-paper-authors="${E}"
      >
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brass-400 via-brass-500 to-brass-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div class="p-6">
          <!-- Header with date and editor score -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ${k}
              </span>
              <span class="text-xs text-slate-400 dark:text-slate-500">${F}</span>
            </div>
            <div class="flex flex-col items-end gap-0.5" title="${L?`Editor Score: ${W}/10`:"Not yet scored"}">
              <span class="text-sm font-semibold text-slate-600 dark:text-slate-400">${L?W:"--"}</span>
              <div class="flex items-center gap-1">
                ${[1,2,3,4,5].map(f=>`<div class="w-1 h-3 rounded-full ${L&&f<=ge?"bg-gradient-to-t from-brass-500 to-brass-400":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
              </div>
            </div>
          </div>

          ${be}

          <h3 class="text-lg font-display font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors">
            <a href="${e.arxiv_url}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-2 underline-offset-2">
              ${w}
            </a>
          </h3>

          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="truncate">${c(q)}</span>
          </p>

          <div class="relative mb-5">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
              ${o}
            </p>
          </div>

          <!-- Categories -->
          <div class="flex flex-wrap gap-2 mb-3">
            ${fe}
          </div>

          <!-- Tags -->
          ${G?`<div class="mb-5 leading-relaxed">${G}</div>`:""}

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
              ${X?`
              <a
                href="${X}"
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
    `,a}function Ce(e){if(!d)return;d.innerHTML="";const t=document.createDocumentFragment();e.forEach((a,s)=>{t.appendChild(Be(a,s))}),d.appendChild(t),M=Array.from(d.querySelectorAll(".paper-item"))}function ce(){return v}async function O(){if(!b().isAuthenticated){v=[];return}try{v=await oe()}catch(t){console.error("Failed to load bookmarks:",t),v=[]}}async function me(){try{const e=await ye(we);if(e.length===0)return;const t=ce(),a=e.filter(s=>t.includes(s.id));a.length>0&&(Ce(a),ue(le)),l()}catch(e){console.warn("Unable to load full paper database from R2:",e)}}function ue(e){d&&(M.sort((t,a)=>{const s=t,r=a;switch(e){case"date-desc":return new Date(r.dataset.paperDate||"").getTime()-new Date(s.dataset.paperDate||"").getTime();case"date-asc":return new Date(s.dataset.paperDate||"").getTime()-new Date(r.dataset.paperDate||"").getTime();case"editor-score":return parseFloat(r.dataset.paperEditorScore||"0")-parseFloat(s.dataset.paperEditorScore||"0");case"author":return(s.dataset.paperAuthor||"").localeCompare(r.dataset.paperAuthor||"");case"title":return(s.dataset.paperTitleSort||"").localeCompare(r.dataset.paperTitleSort||"");default:return 0}}),M.forEach((t,a)=>{const s=t;s.style.animationDelay=`${a*30}ms`,s.style.animation="none",d.appendChild(s),s.offsetWidth,s.style.opacity="",s.style.animation=""}))}function l(){const e=b(),t=ce(),a=t.length;let s=0;const r=h.toLowerCase();if(!e.isAuthenticated){Z?.classList.remove("hidden"),H?.classList.add("hidden"),d?.classList.add("hidden"),T?.classList.add("hidden"),x&&(x.textContent="0"),A&&(A.textContent="0"),S&&S.classList.add("hidden"),D&&(D.textContent="Papers you've saved for later reading. Sign in to sync your saved papers across all your devices.");return}if(Z?.classList.add("hidden"),D&&(D.textContent="Papers you've saved for later reading. Your reading list syncs across all your devices."),A&&(A.textContent=String(a)),S&&S.classList.toggle("hidden",a===0),a===0){H?.classList.remove("hidden"),d?.classList.add("hidden"),T?.classList.add("hidden"),x&&(x.textContent="0");return}H?.classList.add("hidden");let n=0;if(M.forEach(w=>{const o=w,E=o.dataset.paperId;if(!(E&&t.includes(E))){o.classList.add("hidden"),o.style.display="none";return}const _=o.querySelector("[data-paper-title]")?.getAttribute("data-paper-title")||"",q=o.querySelector("[data-paper-summary]")?.getAttribute("data-paper-summary")||"",B=o.querySelector("[data-paper-authors]")?.getAttribute("data-paper-authors")||"",J=o.getAttribute("data-paper-categories")?.split(",")||[],P=!h||_.includes(r)||q.includes(r)||B.includes(r),p=i.size===0||i.has("all")||J.some(F=>i.has(F));P&&p?(o.classList.remove("hidden"),o.style.display="block",o.style.animationDelay=`${n*50}ms`,n++,s++):(o.classList.add("hidden"),o.style.display="none")}),x&&(x.textContent=String(s)),$&&(h?($.textContent=`for "${h}"`,$.classList.remove("hidden")):$.classList.add("hidden")),N&&N.classList.toggle("hidden",!h),V){const w=h||i.size>0&&!i.has("all");V.classList.toggle("hidden",!w)}s>0?(d?.classList.remove("hidden"),T?.classList.add("hidden")):(d?.classList.add("hidden"),T?.classList.remove("hidden"))}u?.addEventListener("input",e=>{h=e.target.value,l()});N?.addEventListener("click",()=>{u&&(u.value="",h="",l(),u.focus())});R.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-category");t&&(t==="all"?(i.clear(),R.forEach(a=>a.classList.remove("active")),e.classList.add("active")):(i.delete("all"),document.querySelector('[data-category="all"]')?.classList.remove("active"),i.has(t)?(i.delete(t),e.classList.remove("active")):(i.add(t),e.classList.add("active")),i.size===0&&document.querySelector('[data-category="all"]')?.classList.add("active")),l())})});V?.addEventListener("click",()=>{h="",u&&(u.value=""),i.clear(),R.forEach(e=>e.classList.remove("active")),document.querySelector('[data-category="all"]')?.classList.add("active"),l()});S?.classList.add("hidden");document.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==u&&(e.preventDefault(),u?.focus()),e.key==="Escape"&&(document.activeElement===u&&u?.blur(),g&&!g.classList.contains("hidden")&&g.classList.add("hidden"))});de?.addEventListener("click",e=>{e.stopPropagation(),g?.classList.toggle("hidden")});document.addEventListener("click",e=>{if(g&&!g.classList.contains("hidden")){const t=e.target;!de?.contains(t)&&!g.contains(t)&&g.classList.add("hidden")}});te.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.sort;t&&(le=t,ee&&(ee.textContent=Ee[t]||"Sort"),te.forEach(a=>{const s=a.querySelector(".sort-check"),r=a.dataset.sort===t;s?.classList.toggle("hidden",!r),a.classList.toggle("text-slate-900",r),a.classList.toggle("dark:text-white",r),a.classList.toggle("text-slate-700",!r),a.classList.toggle("dark:text-slate-300",!r)}),ue(t),l(),g?.classList.add("hidden"))})});const U=document.getElementById("toast"),ae=document.getElementById("toast-message");let z=null;function Ie(e){!U||!ae||(z&&clearTimeout(z),ae.textContent=e,U.classList.add("visible"),z=setTimeout(()=>{U.classList.remove("visible")},2e3))}d?.addEventListener("click",async e=>{const a=e.target.closest(".bookmark-btn");if(!a)return;const s=a.dataset.paperId;if(!s)return;const r=a.closest(".paper-item");a.setAttribute("disabled","true"),a.style.opacity="0.5";try{await se(s),v=v.filter(n=>n!==s),Ie("Paper removed from saved"),r?(r.style.opacity="1",r.style.transform="translateY(0)",r.style.animation="none",r.offsetHeight,r.classList.add("removing"),setTimeout(()=>{l(),window.dispatchEvent(new CustomEvent("bookmarksUpdated"))},350)):(l(),window.dispatchEvent(new CustomEvent("bookmarksUpdated")))}catch(n){console.error("Failed to remove bookmark:",n),a.removeAttribute("disabled"),a.style.opacity="1"}});window.addEventListener("bookmarksUpdated",async()=>{await O(),l()});window.addEventListener(re,async()=>{await O(),l(),b().isAuthenticated&&v.length>0&&me()});Se?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("openAuthModal"))});async function $e(){await xe(),await O(),l(),b().isAuthenticated&&me()}$e();let m=new Set;function y(e,t){const a=e.querySelector(".bookmark-icon"),s=e.querySelector(".bookmark-text");t?(e.classList.add("bookmarked"),a&&a.setAttribute("fill","currentColor"),s&&(s.textContent="Saved"),e.setAttribute("aria-label","Remove from saved papers")):(e.classList.remove("bookmarked"),a&&a.setAttribute("fill","none"),s&&(s.textContent="Save"),e.setAttribute("aria-label","Save paper"))}async function Ae(e){const t=e.dataset.paperId;if(!t)return;if(!b().isAuthenticated){sessionStorage.setItem("pendingSavePaperId",t),window.dispatchEvent(new CustomEvent("openAuthModal",{detail:{paperId:t}}));return}const s=m.has(t);s?(m.delete(t),y(e,!1)):(m.add(t),y(e,!0));try{s?await se(t):await ne(t),window.dispatchEvent(new CustomEvent("bookmarksUpdated"))}catch(r){console.error("Failed to update bookmark:",r),s?(m.add(t),y(e,!0)):(m.delete(t),y(e,!1)),ie("Failed to save paper. Please try again.")}}function Te(){document.querySelectorAll(".bookmark-btn").forEach(e=>{const t=e,a=t.dataset.paperId;if(!a)return;y(t,m.has(a));const s=t.cloneNode(!0);t.parentNode?.replaceChild(s,t),s.addEventListener("click",()=>Ae(s))})}async function pe(){if(b().isAuthenticated)try{const t=await oe();m=new Set(t)}catch(t){console.error("Failed to load bookmarks:",t),m=new Set}else m=new Set;Te()}async function he(){const e=sessionStorage.getItem("pendingSavePaperId");if(e&&(sessionStorage.removeItem("pendingSavePaperId"),b().isAuthenticated))try{await ne(e),m.add(e);const a=document.querySelector(`.bookmark-btn[data-paper-id="${e}"]`);a&&y(a,!0),ie("Paper saved to your library"),window.dispatchEvent(new CustomEvent("bookmarksUpdated"))}catch(a){console.error("Failed to save pending paper:",a)}}window.addEventListener(re,()=>{pe().then(he)});document.querySelectorAll(".expand-abstract").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-paper-id"),a=document.querySelector(`[data-abstract-id="${t}"]`),s=e.querySelector(".expand-text"),r=e.querySelector(".expand-icon");if(a&&s&&r){const n=a.classList.toggle("hidden");s.textContent=n?"Show abstract":"Hide abstract",r.classList.toggle("rotate-180",!n)}})});pe().then(he);
