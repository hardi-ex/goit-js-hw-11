import{S as p,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function m(e){const s="https://pixabay.com",o="/api/",i="44013925-160a3698223f11c3c7b6b04f2",t=new URLSearchParams({key:i,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${s}${o}?${t}`;return fetch(r).then(n=>n.json()).catch(n=>console.error("Error fetching posts:",n))}function f(e){return`<div class="gallery-item">
  <a href="${e.largeImageURL}">
    <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
  </a>
  <ul class="block-info">
    <li>
      <p class="title">Likes</p>
      <p class="text">${e.likes}</p>
    </li>

    <li>
      <p class="title">Views</p>
      <p class="text">${e.views}</p>
    </li>

    <li>
      <p class="title">Comments</p>
      <p class="text">${e.comments}</p>
    </li>

    <li>
      <p class="title">Downloads</p>
      <p class="text">${e.downloads}</p>
    </li>
  </ul>
</div>`}function d(e){return e.map(f).join("")}const g=new p(".gallery-item a",{captionsData:"alt"}),h=document.querySelector(".js-form"),l=document.querySelector(".js-gallery"),a=document.querySelector(".loader-span");h.addEventListener("submit",y);function y(e){e.preventDefault(),l.innerHTML="";const s=e.target.elements.query.value.trim();if(!s)return c("Please enter a search term.");a.classList.add("loader"),m(s).then(o=>{if(!o.hits.length)return c("Sorry, there are no images matching your search query. Please try again!");const i=d(o.hits);l.innerHTML=i,g.refresh()}).catch(o=>console.log(o)).finally(()=>{a.classList.remove("loader")}),e.target.reset()}function c(e){u.warning({title:"Warning",titleColor:"#FAFAFB",message:e,messageColor:"#FAFAFB",color:"#EF4040",position:"topRight",timeout:5e3,iconUrl:"./parts/error.svg"})}
//# sourceMappingURL=commonHelpers.js.map
