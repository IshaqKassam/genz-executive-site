/* Early-registration / support pop-up: appears once after a short delay, easy to dismiss. */
(function(){
  var skip=/(thanks|privacy|terms|404|sponsors)(\.html)?$/i;
  if(skip.test(location.pathname))return;
  var KEY='gz_popup',DELAY=10000,DAY=864e5;
  function get(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){return null}}
  function set(days){try{localStorage.setItem(KEY,JSON.stringify({until:Date.now()+days*DAY}))}catch(e){}}
  var st=get();if(st&&st.until>Date.now())return;
  var shown=false,last=null;
  function open(){
    if(shown||document.querySelector('.co-modal,.coback,[data-open-modal]'))return;
    shown=true;last=document.activeElement;
    var o=document.createElement('div');o.className='gzpop-back';
    o.innerHTML='<div class="gzpop" role="dialog" aria-modal="true" aria-labelledby="gzpop-t">'+
      '<button type="button" class="gzpop-x" aria-label="Close">&times;</button>'+
      '<span class="gzpop-k">Founding circle</span>'+
      '<h2 id="gzpop-t">Register early. <span class="serif">Be first through the door.</span></h2>'+
      '<p>Join the free founding circle for the First 90 Days checklist now, first access to Gravitas at the founding price, and the book launch. Prefer to help? Support the work and keep the core tools free.</p>'+
      '<div class="gzpop-cta"><a class="btn blue" href="gravitas.html#join" data-pop="join">Register early <span class="arrow">&rarr;</span></a><a class="btn ghost" href="sponsors.html" data-pop="give">Support this work</a></div>'+
      '<button type="button" class="gzpop-no">Not now</button></div>';
    document.body.appendChild(o);
    var d=o.querySelector('.gzpop');
    requestAnimationFrame(function(){o.classList.add('on')});
    d.querySelector('.btn').focus();
    function close(days){set(days);o.classList.remove('on');document.removeEventListener('keydown',key);setTimeout(function(){o.remove();if(last&&last.focus)try{last.focus()}catch(e){}},250)}
    function key(e){if(e.key==='Escape')close(14);if(e.key==='Tab'){var f=d.querySelectorAll('a,button');var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}}
    document.addEventListener('keydown',key);
    o.addEventListener('click',function(e){if(e.target===o)close(14)});
    d.querySelector('.gzpop-x').onclick=d.querySelector('.gzpop-no').onclick=function(){close(14)};
    d.querySelectorAll('[data-pop]').forEach(function(a){a.addEventListener('click',function(){set(60)})});
  }
  setTimeout(open,DELAY);
})();
