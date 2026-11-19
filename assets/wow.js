(function(){
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
/* scroll progress */
var bar=document.createElement('div');bar.className='sprog';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
function prog(){var h=document.documentElement,m=h.scrollHeight-innerHeight;bar.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0)+')'}
addEventListener('scroll',prog,{passive:true});prog();
/* rungs light up as you scroll */
var st=document.querySelector('.stairs');
if(st){var lis=[].slice.call(st.children);
  if('IntersectionObserver' in window&&!reduce){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){lis.forEach(function(l,i){setTimeout(function(){l.classList.add('lit')},i*220)});o.disconnect()}})},{threshold:.3});o.observe(st)}else lis.forEach(function(l){l.classList.add('lit')})}
if(reduce||!fine)return;
/* spotlight + tilt on cards */
document.querySelectorAll('.card,.prod,.pcard,.freeband').forEach(function(c){
  c.classList.add('spot');
  c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');
    c.style.setProperty('--rx',((y/r.height-.5)*-5).toFixed(2)+'deg');c.style.setProperty('--ry',((x/r.width-.5)*6).toFixed(2)+'deg')});
  c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
});
/* magnetic buttons */
document.querySelectorAll('.btn').forEach(function(b){
  b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.25).toFixed(1)+'px)'});
  b.addEventListener('pointerleave',function(){b.style.transform=''});
});
/* hero book follows the pointer */
var hb=document.querySelector('.hero-book .book');
if(hb){var hero=document.querySelector('.hero');hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();
  var bw=hb.closest('.bookwrap');bw.style.transform='scale(1.04) rotateY('+(((e.clientX-r.left)/r.width-.5)*14).toFixed(1)+'deg) rotateX('+(((e.clientY-r.top)/r.height-.5)*-8).toFixed(1)+'deg)'});}
})();
