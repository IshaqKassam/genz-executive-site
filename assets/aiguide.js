(function(){
function copy(t,b){var done=function(){b.textContent='Copied';b.classList.add('ok');setTimeout(function(){b.textContent='Copy';b.classList.remove('ok')},1600)};
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,function(){fb(t);done()})}else{fb(t);done()}}
function fb(t){var a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(a)}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.cp');if(b)copy(b.getAttribute('data-copy'),b)});
var tabs=document.querySelectorAll('.tabs button');
tabs.forEach(function(b){b.addEventListener('click',function(){tabs.forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false')});
 document.querySelectorAll('.tabpanel').forEach(function(p){p.hidden=p.id!==b.getAttribute('data-tab')})})});
})();
