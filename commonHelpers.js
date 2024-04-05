import{a as w,S as b,i as m}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&h(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function h(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function S(s,r){return await(await w.get("https://pixabay.com/api",{params:{key:"42798522-d824d0eb072596e07151c9725",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}function E(s,r){let a=[];return r.forEach(function(e){const t=document.createElement("li");t.classList.add("gallery-item");const i=document.createElement("a");i.classList.add("gallery-link"),i.setAttribute("href",e.largeImageURL);const c=document.createElement("img");c.classList.add("gallery-image"),c.src=e.webformatURL,c.alt=e.tags,i.append(c),t.append(i);const L=`<div class="description">
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
                            </div >`;t.innerHTML+=L,a.push(t)}),s.append(...a),new b("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh(),s.children[0].getBoundingClientRect()}const f=document.querySelector(".search-form"),p=document.querySelector(".search-input"),n=document.querySelector(".btn-more"),l=document.createElement("span");l.textContent="Loading images, please wait...";f.append(l);l.hidden=!0;n.hidden=!0;let u,d,g,o=1,y;f.addEventListener("submit",async s=>{s.preventDefault(),o=1,u=p.value.trim(),u==""?m.error({title:"Error",message:"Search field can't be empty"}):await v(u),p.value=""});n.addEventListener("click",async s=>{const r=Math.ceil(g/15);if(o>r)return n.hidden=!0,m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});await v(u),window.scrollBy({top:y.height*2,left:0,behavior:"smooth"})});async function v(s){const r=document.querySelector(".gallery");o==1&&(r.innerHTML=""),l.hidden=!1,n.hidden=!0;const a=await S(s,o);d=a.hits,g=a.totalHits,d.length<15?n.hidden=!0:n.hidden=!1,l.hidden=!0,d.length===0?m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y=E(r,d),o>1&&(n.hidden=!1),o+=1)}
//# sourceMappingURL=commonHelpers.js.map
