import{a as v,S as L,i as m}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function w(a,s){return await(await v.get("https://pixabay.com/api",{params:{key:"42798522-d824d0eb072596e07151c9725",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}function b(a,s){let o=[];return s.forEach(function(r){const e=document.createElement("li");e.classList.add("gallery-item");const t=document.createElement("a");t.classList.add("gallery-link"),t.setAttribute("href",r.largeImageURL);const i=document.createElement("img");i.classList.add("gallery-image"),i.src=r.webformatURL,i.alt=r.tags,t.append(i),e.append(t);const y=`<div class="description">
                                <div class="likes">
                                    <h4>Likes</h4>
                                    <p>${r.likes}</p>
                                </div>
                                <div class="views">
                                    <h4>Views</h4>
                                    <p>${r.views}</p>
                                </div>
                                <div class="comments">
                                    <h4>Comments</h4>
                                    <p>${r.comments}</p>
                                </div>
                                <div class="dowloads">
                                    <h4>Downloads</h4>
                                    <p>${r.downloads}</p>
                                </div>
                            </div >`;e.innerHTML+=y,o.push(e)}),a.append(...o),new L("ul.gallery a",{captionsData:"alt",captionDelay:250}),a.children[0].getBoundingClientRect()}const h=document.querySelector(".search-form"),p=document.querySelector(".search-input"),c=document.querySelector(".btn-more");c.hidden=!0;let l,d,u,n=1,g;h.addEventListener("submit",async a=>{a.preventDefault(),n=1,l=p.value.trim(),l==""?m.error({title:"Error",message:"Search field can't be empty"}):await f(l),p.value=""});c.addEventListener("click",async a=>{console.log(u);const s=Math.ceil(u/15);if(n>s)return c.hidden=!0,m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});await f(l),window.scrollBy({top:g.height*2,left:0,behavior:"smooth"})});async function f(a){const s=document.querySelector(".gallery");n==1&&(s.innerHTML="");const o=document.createElement("span");o.classList.add("loading"),o.textContent="Loading images, please wait...",h.append(o);const r=await w(a,n);d=r.hits,u=r.totalHits,o.remove(),d.length===0?m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(g=b(s,d),n+=1,n>1&&(c.hidden=!1))}
//# sourceMappingURL=commonHelpers.js.map
