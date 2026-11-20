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

/* word-by-word headline */
document.querySelectorAll('h1.words').forEach(function(h){var out='',i=0;
  function walk(n,cls){n.childNodes.forEach(function(c){if(c.nodeType===3){c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t))out+=' ';else{out+='<span class="w'+(cls?' '+cls:'')+'" style="animation-delay:'+(0.15+i*0.09).toFixed(2)+'s">'+t+'</span>';i++}})}else if(c.nodeType===1){walk(c,c.className==='serif'?'gsr':'')}})}
  walk(h,'');h.innerHTML=out});
/* six marks timeline fill */
var tl2=document.querySelector('.tl2');
if(tl2){var tick=function(){var r=tl2.getBoundingClientRect(),p=(innerHeight*.6-r.top)/r.height;tl2.style.setProperty('--tp',Math.max(0,Math.min(1,p)).toFixed(3))};
  addEventListener('scroll',tick,{passive:true});tick()}
/* observe stack */
var sw=document.querySelector('.stackwrap');
if(sw){if('IntersectionObserver' in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){sw.classList.add('in');so.disconnect()}})},{threshold:.3});so.observe(sw)}else sw.classList.add('in')}

/* ===== site-wide visual layer ===== */
document.querySelectorAll('.hero').forEach(function(h){if(h.querySelector('.fl'))return;['a','b','c','sq'].forEach(function(k){var i=document.createElement('i');i.className='fl '+k;i.setAttribute('aria-hidden','true');h.insertBefore(i,h.firstChild)})});
var rt=document.querySelector('.route');
if(rt){if('IntersectionObserver' in window&&!reduce){var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){rt.classList.add('go');ro.disconnect()}})},{threshold:.25});ro.observe(rt)}else rt.classList.add('go')}
var lp=document.querySelector('.ladder.path');
if(lp){var lis2=[].slice.call(lp.children);
  var lo=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){lis2.forEach(function(l,i){setTimeout(function(){l.classList.add('lit');lp.style.setProperty('--pp',((i+1)/lis2.length).toFixed(2))},reduce?0:i*380)});lo.disconnect()}})},{threshold:.35});lo.observe(lp)}
document.querySelectorAll('.dark,.capband,.statement').forEach(function(s){s.classList.add('glowfx');if(fine)s.addEventListener('pointermove',function(e){var r=s.getBoundingClientRect();s.style.setProperty('--gx',(e.clientX-r.left)+'px');s.style.setProperty('--gy',(e.clientY-r.top)+'px')})});
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
/* motion pass: chart, module tiles, scroll progress */
(function(){var rd=matchMedia('(prefers-reduced-motion:reduce)').matches;
function once(sel,thr){var el=document.querySelector(sel);if(!el)return;if(rd||!('IntersectionObserver' in window)){el.classList.add('in');return}
 var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){el.classList.add('in');o.disconnect()}})},{threshold:thr||.3});o.observe(el)}
once('#cmpchart',.35);once('.gf-mods',.25);
if(!rd){var b=document.createElement('div');b.className='sprog';b.setAttribute('aria-hidden','true');document.body.appendChild(b);
 var t=false;function up(){t=false;var h=document.documentElement.scrollHeight-innerHeight;b.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0).toFixed(4)+')'}
 addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(up)}},{passive:true});up()}
})();
