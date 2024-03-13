import{a as L,S as w,i as p}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function b(s,r){return await(await L.get("https://pixabay.com/api",{params:{key:"42798522-d824d0eb072596e07151c9725",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}function S(s,r){let a=[];return r.forEach(function(e){const t=document.createElement("li");t.classList.add("gallery-item");const o=document.createElement("a");o.classList.add("gallery-link"),o.setAttribute("href",e.largeImageURL);const l=document.createElement("img");l.classList.add("gallery-image"),l.src=e.webformatURL,l.alt=e.tags,o.append(l),t.append(o);const v=`<div class="description">
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
                            </div >`;t.innerHTML+=v,a.push(t)}),s.append(...a),new w("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh(),s.children[0].getBoundingClientRect()}const g=document.querySelector(".search-form"),h=document.querySelector(".search-input"),d=document.querySelector(".btn-more");d.hidden=!0;let c,u,m,n=1,f;g.addEventListener("submit",async s=>{s.preventDefault(),n=1,c=h.value.trim(),c==""?p.error({title:"Error",message:"Search field can't be empty"}):await y(c),h.value=""});d.addEventListener("click",async s=>{console.log(m);const r=Math.ceil(m/15);if(n>r)return d.hidden=!0,p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});await y(c),window.scrollBy({top:f.height*2,left:0,behavior:"smooth"})});async function y(s){const r=document.querySelector(".gallery");n==1&&(r.innerHTML="");const a=document.createElement("span");a.classList.add("loading"),a.textContent="Loading images, please wait...",g.append(a);const i=await b(s,n);u=i.hits,m=i.totalHits,a.remove(),u.length===0?p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(f=S(r,u),n+=1,n>1&&(d.hidden=!1))}
//# sourceMappingURL=commonHelpers.js.map
