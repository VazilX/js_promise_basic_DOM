var e=document.querySelector(".logo"),t=document.createElement("div");t.className="message",new Promise(function(e,t){setTimeout(function(){t()},3e3)}).catch(function(){t.classList.add("error-message"),t.textContent="Promise was rejected!",document.body.append(t)}),e.addEventListener("click",function(){new Promise(function(e){return e()}).then(function(){t.textContent="Promise was resolved!",document.body.append(t)})});
//# sourceMappingURL=index.f151c130.js.map
