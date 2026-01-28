import{r as oe,A as ne,a as y,b as ie,i as Se,c as le,s as de}from"./hoisted.CvQEWfIr.js";const K=document.getElementById("all-papers-url"),Ee=K?JSON.parse(K.textContent||'""'):"",Z=document.getElementById("conference-papers-urls"),Ce=Z?JSON.parse(Z.textContent||"[]"):[],ee=document.getElementById("categories-data"),Be=ee?JSON.parse(ee.textContent||"{}"):{};let b=[];const p=document.getElementById("search-input"),R=document.getElementById("clear-search"),I=document.getElementById("search-query"),x=document.getElementById("visible-count"),$=document.getElementById("bookmark-total"),V=document.getElementById("clear-all-filters"),S=document.getElementById("clear-all-bookmarks"),P=document.getElementById("no-results"),te=document.getElementById("sign-in-state"),Ae=document.getElementById("sign-in-btn-page"),H=document.getElementById("empty-state"),c=document.getElementById("papers-container"),O=document.querySelectorAll(".filter-btn"),T=document.getElementById("hero-subtitle"),ce=document.getElementById("sort-toggle"),g=document.getElementById("sort-dropdown"),ae=document.getElementById("sort-label"),se=document.querySelectorAll(".sort-option");let h="",l=new Set,ue="date-desc",D=Array.from(document.querySelectorAll(".paper-item"));const Ie={"date-desc":"Newest","date-asc":"Oldest","editor-score":"Editor Score",author:"Author",title:"Title"};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function $e(e,t){const a=document.createElement("div"),s=e.authors||[],r=e.summary||"",o=e.abstract||"",i=e.categories||[],n=d(e.title),E=d(r),Y=d(s.join(" ").toLowerCase()),M=d(e.title.toLowerCase()),_=d(r.toLowerCase()),q=d(o.toLowerCase()),j=s.length>3?`${s.slice(0,3).join(", ")} +${s.length-3} more`:s.join(", "),C=new Date(e.published),F=new Date().getTime()-C.getTime(),f=Math.floor(F/(1e3*60*60*24));let k="";f===0?k="Today":f===1?k="Yesterday":f<7?k=`${f} days ago`:f<30?k=`${Math.floor(f/7)} weeks ago`:k=`${Math.floor(f/30)} months ago`;const ve=C.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),L=e.editor_score?.weighted_score!=null,U=L?e.editor_score.weighted_score:0,X=U.toFixed(1),be=L?Math.round(U/10*5):0,G=e.bibtex_url||(e.arxiv_url.includes("arxiv.org")?`https://arxiv.org/bibtex/${e.id.replace(/v\\d+$/,"")}`:""),ye=i.map(v=>{const B=Be[v]||{name:v,gradient:"from-slate-500 to-slate-600"},A=d(B.name);return`
        <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-gradient-to-r ${B.gradient} shadow-sm" data-category="${v}">
          ${A}
        </span>
      `}).join(""),Q=(e.tags||[]).map(v=>{const B=v.split("-").map(A=>A.charAt(0).toUpperCase()+A.slice(1)).join(" ");return`<a href="/browse?tag=${encodeURIComponent(v)}" class="text-xs text-slate-500 dark:text-slate-400 hover:text-brass-600 dark:hover:text-brass-400 hover:underline transition-colors">${d(B)}</a>`}).join('<span class="text-slate-400 dark:text-slate-500 text-xs">, </span>'),xe=e.conference?e.conference.workshop?`${e.conference.name} ${e.conference.year} Workshop`:`${e.conference.name} ${e.conference.year}`:"",we=e.conference?e.conference.workshop||e.conference.track:"",Le=e.conference?`
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            ${d(xe)}
          </span>
          <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            ${d(we)}
          </span>
        </div>
      `:"";return a.className="paper-item hidden",a.dataset.paperId=e.id,a.dataset.paperCategories=i.join(","),a.dataset.paperDate=e.published,a.dataset.paperEditorScore=String(U),a.dataset.paperAuthor=(s[0]||"").toLowerCase(),a.dataset.paperTitleSort=e.title.toLowerCase(),a.style.animationDelay=`${t*50}ms`,a.innerHTML=`
      <article
        class="group relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 dark:border-slate-800/60 shadow-[0_20px_50px_-40px_rgba(31,27,23,0.35)] hover:shadow-[0_25px_60px_-40px_rgba(31,27,23,0.45)] transition-all duration-300 overflow-hidden hover-lift"
        data-paper-title="${M}"
        data-paper-summary="${_}"
        data-paper-abstract="${q}"
        data-paper-authors="${Y}"
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
              <span class="text-xs text-slate-400 dark:text-slate-500">${ve}</span>
            </div>
            <div class="flex flex-col items-end gap-0.5" title="${L?`Editor Score: ${X}/10`:"Not yet scored"}">
              <span class="text-sm font-semibold text-slate-600 dark:text-slate-400">${L?X:"--"}</span>
              <div class="flex items-center gap-1">
                ${[1,2,3,4,5].map(v=>`<div class="w-1 h-3 rounded-full ${L&&v<=be?"bg-gradient-to-t from-brass-500 to-brass-400":"bg-slate-200 dark:bg-slate-700"}"></div>`).join("")}
              </div>
            </div>
          </div>

          ${Le}

          <h3 class="text-lg font-display font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brass-700 dark:group-hover:text-brass-400 transition-colors">
            <a href="${e.arxiv_url}" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-2 underline-offset-2">
              ${n}
            </a>
          </h3>

          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="truncate">${d(j)}</span>
          </p>

          <div class="relative mb-5">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
              ${E}
            </p>
          </div>

          <!-- Categories -->
          <div class="flex flex-wrap gap-2 mb-3">
            ${ye}
          </div>

          <!-- Tags -->
          ${Q?`<div class="mb-5 leading-relaxed">${Q}</div>`:""}

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
              ${G?`
              <a
                href="${G}"
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
    `,a}function Pe(e){if(!c)return;c.innerHTML="";const t=document.createDocumentFragment();e.forEach((a,s)=>{t.appendChild($e(a,s))}),c.appendChild(t),D=Array.from(c.querySelectorAll(".paper-item"))}function me(){return b}async function J(){if(!y().isAuthenticated){b=[];return}try{b=await ie()}catch(t){console.error("Failed to load bookmarks:",t),b=[]}}function pe(e){if(Array.isArray(e))return e;if(e&&typeof e=="object"){const t=e;if(Array.isArray(t.papers))return t.papers;if(Array.isArray(t.data))return t.data}return[]}async function Te(){for(const e of Ce)try{const t=await fetch(e,{cache:"no-store"});if(t.ok){const a=await t.json(),s=pe(a);if(s.length>0)return s}}catch{}return[]}async function he(){try{const[e,t]=await Promise.all([fetch(Ee,{cache:"no-store"}).then(async o=>{if(o.ok){const i=await o.json();return pe(i)}return[]}).catch(()=>[]),Te()]);let a=e;if(t.length>0){const o=new Set(a.map(i=>i.id));for(const i of t)o.has(i.id)||a.push(i)}if(a.length===0)return;const s=me(),r=a.filter(o=>s.includes(o.id));r.length>0&&(Pe(r),ge(ue)),u()}catch(e){console.warn("Unable to load full paper database from R2:",e)}}function ge(e){c&&(D.sort((t,a)=>{const s=t,r=a;switch(e){case"date-desc":return new Date(r.dataset.paperDate||"").getTime()-new Date(s.dataset.paperDate||"").getTime();case"date-asc":return new Date(s.dataset.paperDate||"").getTime()-new Date(r.dataset.paperDate||"").getTime();case"editor-score":return parseFloat(r.dataset.paperEditorScore||"0")-parseFloat(s.dataset.paperEditorScore||"0");case"author":return(s.dataset.paperAuthor||"").localeCompare(r.dataset.paperAuthor||"");case"title":return(s.dataset.paperTitleSort||"").localeCompare(r.dataset.paperTitleSort||"");default:return 0}}),D.forEach((t,a)=>{const s=t;s.style.animationDelay=`${a*30}ms`,s.style.animation="none",c.appendChild(s),s.offsetWidth,s.style.opacity="",s.style.animation=""}))}function u(){const e=y(),t=me(),a=t.length;let s=0;const r=h.toLowerCase();if(!e.isAuthenticated){te?.classList.remove("hidden"),H?.classList.add("hidden"),c?.classList.add("hidden"),P?.classList.add("hidden"),x&&(x.textContent="0"),$&&($.textContent="0"),S&&S.classList.add("hidden"),T&&(T.textContent="Papers you've saved for later reading. Sign in to sync your saved papers across all your devices.");return}if(te?.classList.add("hidden"),T&&(T.textContent="Papers you've saved for later reading. Your reading list syncs across all your devices."),$&&($.textContent=String(a)),S&&S.classList.toggle("hidden",a===0),a===0){H?.classList.remove("hidden"),c?.classList.add("hidden"),P?.classList.add("hidden"),x&&(x.textContent="0");return}H?.classList.add("hidden");let o=0;if(D.forEach(i=>{const n=i,E=n.dataset.paperId;if(!(E&&t.includes(E))){n.classList.add("hidden"),n.style.display="none";return}const M=n.querySelector("[data-paper-title]")?.getAttribute("data-paper-title")||"",_=n.querySelector("[data-paper-summary]")?.getAttribute("data-paper-summary")||"",q=n.querySelector("[data-paper-abstract]")?.getAttribute("data-paper-abstract")||"",j=n.querySelector("[data-paper-authors]")?.getAttribute("data-paper-authors")||"",C=n.getAttribute("data-paper-categories")?.split(",")||[],W=!h||M.includes(r)||_.includes(r)||q.includes(r)||j.includes(r),F=l.size===0||l.has("all")||C.some(k=>l.has(k));W&&F?(n.classList.remove("hidden"),n.style.display="block",n.style.animationDelay=`${o*50}ms`,o++,s++):(n.classList.add("hidden"),n.style.display="none")}),x&&(x.textContent=String(s)),I&&(h?(I.textContent=`for "${h}"`,I.classList.remove("hidden")):I.classList.add("hidden")),R&&R.classList.toggle("hidden",!h),V){const i=h||l.size>0&&!l.has("all");V.classList.toggle("hidden",!i)}s>0?(c?.classList.remove("hidden"),P?.classList.add("hidden")):(c?.classList.add("hidden"),P?.classList.remove("hidden"))}p?.addEventListener("input",e=>{h=e.target.value,u()});R?.addEventListener("click",()=>{p&&(p.value="",h="",u(),p.focus())});O.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-category");t&&(t==="all"?(l.clear(),O.forEach(a=>a.classList.remove("active")),e.classList.add("active")):(l.delete("all"),document.querySelector('[data-category="all"]')?.classList.remove("active"),l.has(t)?(l.delete(t),e.classList.remove("active")):(l.add(t),e.classList.add("active")),l.size===0&&document.querySelector('[data-category="all"]')?.classList.add("active")),u())})});V?.addEventListener("click",()=>{h="",p&&(p.value=""),l.clear(),O.forEach(e=>e.classList.remove("active")),document.querySelector('[data-category="all"]')?.classList.add("active"),u()});S?.classList.add("hidden");document.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==p&&(e.preventDefault(),p?.focus()),e.key==="Escape"&&(document.activeElement===p&&p?.blur(),g&&!g.classList.contains("hidden")&&g.classList.add("hidden"))});ce?.addEventListener("click",e=>{e.stopPropagation(),g?.classList.toggle("hidden")});document.addEventListener("click",e=>{if(g&&!g.classList.contains("hidden")){const t=e.target;!ce?.contains(t)&&!g.contains(t)&&g.classList.add("hidden")}});se.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.sort;t&&(ue=t,ae&&(ae.textContent=Ie[t]||"Sort"),se.forEach(a=>{const s=a.querySelector(".sort-check"),r=a.dataset.sort===t;s?.classList.toggle("hidden",!r),a.classList.toggle("text-slate-900",r),a.classList.toggle("dark:text-white",r),a.classList.toggle("text-slate-700",!r),a.classList.toggle("dark:text-slate-300",!r)}),ge(t),u(),g?.classList.add("hidden"))})});const N=document.getElementById("toast"),re=document.getElementById("toast-message");let z=null;function De(e){!N||!re||(z&&clearTimeout(z),re.textContent=e,N.classList.add("visible"),z=setTimeout(()=>{N.classList.remove("visible")},2e3))}c?.addEventListener("click",async e=>{const a=e.target.closest(".bookmark-btn");if(!a)return;const s=a.dataset.paperId;if(!s)return;const r=a.closest(".paper-item");a.setAttribute("disabled","true"),a.style.opacity="0.5";try{await oe(s),b=b.filter(o=>o!==s),De("Paper removed from saved"),r?(r.style.opacity="1",r.style.transform="translateY(0)",r.style.animation="none",r.offsetHeight,r.classList.add("removing"),setTimeout(()=>{u(),window.dispatchEvent(new CustomEvent("bookmarksUpdated"))},350)):(u(),window.dispatchEvent(new CustomEvent("bookmarksUpdated")))}catch(o){console.error("Failed to remove bookmark:",o),a.removeAttribute("disabled"),a.style.opacity="1"}});window.addEventListener("bookmarksUpdated",async()=>{await J(),u()});window.addEventListener(ne,async()=>{await J(),u(),y().isAuthenticated&&b.length>0&&he()});Ae?.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("openAuthModal"))});async function Me(){await Se(),await J(),u(),y().isAuthenticated&&he()}Me();let m=new Set;function w(e,t){const a=e.querySelector(".bookmark-icon"),s=e.querySelector(".bookmark-text");t?(e.classList.add("bookmarked"),a&&a.setAttribute("fill","currentColor"),s&&(s.textContent="Saved"),e.setAttribute("aria-label","Remove from saved papers")):(e.classList.remove("bookmarked"),a&&a.setAttribute("fill","none"),s&&(s.textContent="Save"),e.setAttribute("aria-label","Save paper"))}async function _e(e){const t=e.dataset.paperId;if(!t)return;if(!y().isAuthenticated){sessionStorage.setItem("pendingSavePaperId",t),window.dispatchEvent(new CustomEvent("openAuthModal",{detail:{paperId:t}}));return}const s=m.has(t);s?(m.delete(t),w(e,!1)):(m.add(t),w(e,!0));try{s?await oe(t):await le(t),window.dispatchEvent(new CustomEvent("bookmarksUpdated"))}catch(r){console.error("Failed to update bookmark:",r),s?(m.add(t),w(e,!0)):(m.delete(t),w(e,!1)),de("Failed to save paper. Please try again.")}}function qe(){document.querySelectorAll(".bookmark-btn").forEach(e=>{const t=e,a=t.dataset.paperId;if(!a)return;w(t,m.has(a));const s=t.cloneNode(!0);t.parentNode?.replaceChild(s,t),s.addEventListener("click",()=>_e(s))})}async function fe(){if(y().isAuthenticated)try{const t=await ie();m=new Set(t)}catch(t){console.error("Failed to load bookmarks:",t),m=new Set}else m=new Set;qe()}async function ke(){const e=sessionStorage.getItem("pendingSavePaperId");if(e&&(sessionStorage.removeItem("pendingSavePaperId"),y().isAuthenticated))try{await le(e),m.add(e);const a=document.querySelector(`.bookmark-btn[data-paper-id="${e}"]`);a&&w(a,!0),de("Paper saved to your library"),window.dispatchEvent(new CustomEvent("bookmarksUpdated"))}catch(a){console.error("Failed to save pending paper:",a)}}window.addEventListener(ne,()=>{fe().then(ke)});document.querySelectorAll(".expand-abstract").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-paper-id"),a=document.querySelector(`[data-abstract-id="${t}"]`),s=e.querySelector(".expand-text"),r=e.querySelector(".expand-icon");if(a&&s&&r){const o=a.classList.toggle("hidden");s.textContent=o?"Show abstract":"Hide abstract",r.classList.toggle("rotate-180",!o)}})});fe().then(ke);
