import{a as w,S as b,i as p}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function S(s,r){return await(await w.get("https://pixabay.com/api",{params:{key:"42798522-d824d0eb072596e07151c9725",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}function E(s,r){let a=[];return r.forEach(function(e){const t=document.createElement("li");t.classList.add("gallery-item");const i=document.createElement("a");i.classList.add("gallery-link"),i.setAttribute("href",e.largeImageURL);const l=document.createElement("img");l.classList.add("gallery-image"),l.src=e.webformatURL,l.alt=e.tags,i.append(l),t.append(i);const L=`<div class="description">
                                <div class="likes">
                                    <h4>Likes</h4>
                                    <p>${e.likes}</p>
                                </div>
                                <div class="views">
                                    <h4>Views</h4>
                                    <p>${e.views}</p>
                                </div>
                                <div class="comments">
                                    <h4>Comments</h4>
                                    <p>${e.comments}</p>
                                </div>
                                <div class="dowloads">
                                    <h4>Downloads</h4>
                                    <p>${e.downloads}</p>
                                </div>
                            </div >`;t.innerHTML+=L,a.push(t)}),s.append(...a),new b("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh(),s.children[0].getBoundingClientRect()}const f=document.querySelector(".search-form"),h=document.querySelector(".search-input"),d=document.querySelector(".btn-more"),n=document.createElement("span");n.textContent="Loading images, please wait...";f.append(n);n.hidden=!0;d.hidden=!0;let c,m,g,o=1,y;f.addEventListener("submit",async s=>{s.preventDefault(),o=1,c=h.value.trim(),c==""?p.error({title:"Error",message:"Search field can't be empty"}):await v(c),h.value=""});d.addEventListener("click",async s=>{const r=Math.ceil(g/15);if(o>r)return d.hidden=!0,p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});await v(c),window.scrollBy({top:y.height*2,left:0,behavior:"smooth"})});async function v(s){const r=document.querySelector(".gallery");o==1&&(r.innerHTML=""),n.hidden=!1;const a=await S(s,o);m=a.hits,g=a.totalHits,n.hidden=!0,m.length===0?p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y=E(r,m),o+=1,o>1&&(d.hidden=!1))}
//# sourceMappingURL=commonHelpers.js.map
