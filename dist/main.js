(()=>{"use strict";const e=function(){const e=document.querySelector("#image-container"),c=document.createElement("img");c.src="https://placehold.co/400/white/black",e.appendChild(c);const l=document.querySelector(".image5");l.classList.add("lighted-ball"),document.querySelector(".arrow-previous").addEventListener("click",(function(){l.classList.remove("lighted-ball"),e.removeChild(c),t()})),document.querySelector(".arrow-next").addEventListener("click",(function(){l.classList.remove("lighted-ball"),e.removeChild(c),o()}))},t=function(){const t=document.querySelector("#image-container"),l=document.createElement("img");l.src="https://placehold.co/400/red/green",t.appendChild(l);const o=document.querySelector(".image4");o.classList.add("lighted-ball"),document.querySelector(".arrow-previous").addEventListener("click",(function(){o.classList.remove("lighted-ball"),t.removeChild(l),c()})),document.querySelector(".arrow-next").addEventListener("click",(function(){o.classList.remove("lighted-ball"),t.removeChild(l),e()}))},c=function(){const e=document.querySelector("#image-container"),c=document.createElement("img");c.src="https://placehold.co/400/black/white",e.appendChild(c);const o=document.querySelector(".image3");o.classList.add("lighted-ball"),document.querySelector(".arrow-previous").addEventListener("click",(function(){o.classList.remove("lighted-ball"),e.removeChild(c),l()})),document.querySelector(".arrow-next").addEventListener("click",(function(){o.classList.remove("lighted-ball"),e.removeChild(c),t()}))},l=function(){const e=document.querySelector("#image-container"),t=document.createElement("img");t.src="https://placehold.co/400/orange/white",e.appendChild(t);const l=document.querySelector(".image2");l.classList.add("lighted-ball"),document.querySelector(".arrow-previous").addEventListener("click",(function(){l.classList.remove("lighted-ball"),e.removeChild(t),o()})),document.querySelector(".arrow-next").addEventListener("click",(function(){l.classList.remove("lighted-ball"),e.removeChild(t),c()}))},o=function(){const t=document.querySelector("#image-container"),c=document.createElement("img");c.src="https://placehold.co/400",t.appendChild(c);const o=document.querySelector(".image1");o.classList.add("lighted-ball"),document.querySelector(".arrow-previous").addEventListener("click",(function(){o.classList.remove("lighted-ball"),t.removeChild(c),e()})),document.querySelector(".arrow-next").addEventListener("click",(function(){o.classList.remove("lighted-ball"),t.removeChild(c),l()}))};o()})();