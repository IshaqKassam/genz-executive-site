(function(){
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  var safe=function(u){return /^https:\/\//i.test(u||'')?u:''};
  var S=window.SITE||{};

  /* nav */
  var nav=$('#nav'),bg=$('#burger');
  if(nav){
    var on=function(){nav.classList.toggle('scrolled',window.scrollY>8)};on();
    addEventListener('scroll',on,{passive:true});
    if(bg)bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
  }

  /* product covers */
  var C={
    bundle:'<svg viewBox="0 0 320 200"><rect width="320" height="200" fill="#0F2233"/><circle cx="270" cy="30" r="90" fill="#1668A0" opacity=".5"/><g transform="translate(70 36)"><rect x="40" y="0" width="120" height="130" rx="12" fill="#7CC4E8"/><rect x="20" y="14" width="120" height="130" rx="12" fill="#3BA3DB"/><rect x="0" y="28" width="120" height="130" rx="12" fill="#fff"/><rect x="16" y="48" width="64" height="8" rx="4" fill="#0F2233"/><rect x="16" y="66" width="88" height="6" rx="3" fill="#C9DBE8"/><rect x="16" y="80" width="76" height="6" rx="3" fill="#C9DBE8"/><path d="M18 128l14-26 14 26" fill="none" stroke="#1668A0" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
    wb90:'<svg viewBox="0 0 320 200"><rect width="320" height="200" fill="#1668A0"/><g stroke="#fff" stroke-opacity=".12"><path d="M0 40h320M0 80h320M0 120h320M0 160h320M60 0v200M120 0v200M180 0v200M240 0v200"/></g><g fill="#fff"><rect x="40" y="46" width="22" height="22" rx="6"/><rect x="40" y="84" width="22" height="22" rx="6"/><rect x="40" y="122" width="22" height="22" rx="6" fill-opacity=".35"/></g><path d="M45 57l5 5 8-10M45 95l5 5 8-10" stroke="#1668A0" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g fill="#fff" fill-opacity=".9"><rect x="76" y="52" width="90" height="8" rx="4"/><rect x="76" y="90" width="70" height="8" rx="4"/><rect x="76" y="128" width="80" height="8" rx="4" fill-opacity=".4"/></g><path d="M190 150l30-30 24 14 40-56" fill="none" stroke="#7CC4E8" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="284" cy="78" r="9" fill="#fff"/></svg>',
    wb10:'<svg viewBox="0 0 320 200"><defs><linearGradient id="s1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CC4E8"/><stop offset="1" stop-color="#E4F1FA"/></linearGradient></defs><rect width="320" height="200" fill="url(#s1)"/><circle cx="230" cy="86" r="34" fill="#fff" opacity=".85"/><path d="M0 150c60-30 120-20 170-40s100-10 150-30v120H0z" fill="#1668A0"/><path d="M0 172c70-24 130-10 190-26s90-6 130-18v72H0z" fill="#0F2233"/><path d="M70 160c30-28 60-34 100-48s60-30 70-52" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/><circle cx="240" cy="60" r="7" fill="#0F2233"/></svg>',
    cvkit:'<svg viewBox="0 0 320 200"><rect width="320" height="200" fill="#E4F1FA"/><g transform="rotate(-8 100 110)"><rect x="50" y="24" width="110" height="148" rx="10" fill="#fff" stroke="#C3D9E9"/><circle cx="76" cy="52" r="14" fill="#3BA3DB"/><rect x="98" y="44" width="46" height="7" rx="3.5" fill="#0F2233"/><rect x="98" y="58" width="32" height="5" rx="2.5" fill="#9DB8CB"/><rect x="66" y="84" width="78" height="5" rx="2.5" fill="#C9DBE8"/><rect x="66" y="98" width="68" height="5" rx="2.5" fill="#C9DBE8"/><rect x="66" y="112" width="74" height="5" rx="2.5" fill="#C9DBE8"/><rect x="66" y="132" width="40" height="14" rx="7" fill="#1668A0"/></g><g transform="rotate(7 230 100)"><rect x="170" y="30" width="110" height="148" rx="10" fill="#0F2233"/><rect x="186" y="50" width="60" height="9" rx="4.5" fill="#7CC4E8"/><rect x="186" y="72" width="78" height="5" rx="2.5" fill="#5E7A8E"/><rect x="186" y="86" width="66" height="5" rx="2.5" fill="#5E7A8E"/><rect x="186" y="100" width="74" height="5" rx="2.5" fill="#5E7A8E"/><path d="M188 150l12-22 12 22" fill="none" stroke="#7CC4E8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
    jour:'<svg viewBox="0 0 320 200"><rect width="320" height="200" fill="#143650"/><circle cx="60" cy="170" r="100" fill="#1668A0" opacity=".45"/><g transform="rotate(-6 160 100)"><rect x="96" y="20" width="132" height="162" rx="12" fill="#0F2233" stroke="#7CC4E8" stroke-width="2"/><rect x="96" y="20" width="16" height="162" rx="8" fill="#0A1824"/><rect x="128" y="52" width="76" height="9" rx="4.5" fill="#fff"/><rect x="128" y="70" width="54" height="9" rx="4.5" fill="#7CC4E8"/><path d="M130 142l14-26 14 26" fill="none" stroke="#7CC4E8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M200 20v54l10-8 10 8V20" fill="#3BA3DB"/></g></svg>'
  };
  window.GZ_COVERS=C;

  var PRODS=[
    {id:'bundle',hot:1,badge:'Best value',k:'Bundle',t:'The Starter Bundle',p:'KES 2,500',d:'Both workbooks, the templates, the planner and the wallpaper pack in one purchase. Saves KES 1,300.'},
    {id:'wb90',k:'Workbook',t:'90-Day Trust Build',p:'KES 1,200',d:'Weekly plans, a stakeholder map, Friday reviews and a day-90 scorecard for your first three months.'},
    {id:'wb10',k:'Workbook',t:'The Ten-Year You',p:'KES 900',d:'Draw your future self, choose this week’s behaviour and run a Friday audit.'},
    {id:'cvkit',k:'Templates',t:'CV and LinkedIn Kit',p:'KES 1,000',d:'Three CV layouts, a cover letter template and a headline-and-about formula for early-career roles.'},
    {id:'jour',k:'Printable journal',t:'The GenZ Executive Journal',p:'KES 1,500',d:'52 weeks of building yourself: a daily loop, a weekly review and a prompt for every week.'}
  ];
  var card=function(x,i){
    var u=safe((S.pay||{})[x.id]);
    var btn=u?'<a class="btn" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">Buy now <span class="arrow">→</span></a>':'<a class="btn" href="index.html#join">Tell me when it opens <span class="arrow">→</span></a>';
    return '<article class="prod rv d'+(i%3)+(x.hot?' hot':'')+'"><span class="cover">'+C[x.id]+'</span><div class="body">'+(x.badge?'<span class="badge">'+esc(x.badge)+'</span>':'')+'<span class="k">'+esc(x.k)+'</span><h3>'+esc(x.t)+'</h3><p>'+esc(x.d)+'</p><div class="price">'+esc(x.p)+' <small>one-off</small></div>'+btn+'</div></article>';
  };
  var grid=$('#shopgrid');
  if(grid){var lim=+grid.getAttribute('data-limit')||PRODS.length;grid.innerHTML=PRODS.slice(0,lim).map(card).join('')}
  var dv=$('#deliver');if(dv)dv.textContent=S.deliveryPromise||'';

  /* form: native branded capture posting to the Google Form */
  var F=S.formFields||{};
  $$('.formbox').forEach(function(fb){
    var act=safe(S.formAction);
    if(!act){var fs=safe(S.formShareUrl);fb.innerHTML=fs?'<p class="note"><a class="btn blue" href="'+esc(fs)+'" target="_blank" rel="noopener noreferrer">Open the sign-up form</a></p>':'<div class="soon"><strong>The launch list opens very soon.</strong></div>';return}
    var chips=['The book','The Climb','The community','Workshops and speaking'].map(function(v){return '<label class="chip"><input type="checkbox" name="i" value="'+v+'"><span>'+v+'</span></label>'}).join('');
    var opts=['Student','Job seeker','First 5 years of work','Manager','Other'].map(function(v){return '<option>'+v+'</option>'}).join('');
    fb.innerHTML='<form class="capture" novalidate><div class="row2"><label>First and last name<input name="n" autocomplete="name" required></label><label>Email<input type="email" name="e" autocomplete="email" required></label></div>'+
      '<fieldset><legend>I want to hear about</legend><div class="chips">'+chips+'</div></fieldset>'+
      '<label>Where are you in your career?<select name="c"><option value="">Choose one</option>'+opts+'</select></label>'+
      '<label class="consent"><input type="checkbox" name="k" required><span>'+esc(S.consentText||'')+'</span></label>'+
      '<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">'+
      '<p class="err" role="alert" hidden></p><button class="btn blue" type="submit">Join the launch list <span class="arrow">→</span></button>'+
      '<p class="fine">One email when something opens. Unsubscribe any time.</p></form>'+
      '<div class="done" hidden><div class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg></div><h3>You are on the list.</h3><p>Thank you. We will email you when the book, The Climb and the community open.</p>'+(safe(S.linkedin)?'<a class="btn ghost on-dark" href="'+esc(S.linkedin)+'" target="_blank" rel="noopener noreferrer">Follow on LinkedIn</a>':'')+'</div>';
    var f=$('form',fb),er=$('.err',fb),bt=$('button',fb);
    f.addEventListener('submit',function(ev){
      ev.preventDefault();er.hidden=true;
      var nm=f.n.value.trim(),em=f.e.value.trim();
      if(f.website.value)return;
      if(!nm||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){er.textContent='Please add your name and a valid email.';er.hidden=false;return}
      if(!f.k.checked){er.textContent='Please tick the consent box so we can email you.';er.hidden=false;return}
      var p=new URLSearchParams();p.append(F.name,nm);p.append(F.email,em);
      $$('input[name=i]:checked',f).forEach(function(c){p.append(F.interests,c.value)});
      if(f.c.value)p.append(F.career,f.c.value);
      p.append(F.consent,S.consentText);
      bt.disabled=true;bt.classList.add('busy');
      fetch(act,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:p.toString()}).then(function(){
        f.hidden=true;$('.done',fb).hidden=false;
      }).catch(function(){bt.disabled=false;bt.classList.remove('busy');er.textContent='Something went wrong. Please try again.';er.hidden=false});
    });
  });

  /* proof (renders only what is real) */
  var pf=$('#proof');
  if(pf){
    var t=(S.testimonials||[]).filter(function(x){return x&&x.q&&x.n}),v=safe(S.videoEmbedUrl),sc=safe(S.sampleChapterUrl),h='';
    if(v)h+='<div class="vid rv"><iframe src="'+esc(v)+'" title="Welcome from Ishaq" loading="lazy" allowfullscreen></iframe></div>';
    if(t.length)h+='<div class="quotes">'+t.slice(0,3).map(function(x,i){return '<figure class="rv d'+i+'"><blockquote>'+esc(x.q)+'</blockquote><figcaption><b>'+esc(x.n)+'</b>'+(x.r?'<span>'+esc(x.r)+'</span>':'')+'</figcaption></figure>'}).join('')+'</div>';
    if(sc)h+='<p class="rv" style="margin-top:30px"><a class="btn blue" href="'+esc(sc)+'" target="_blank" rel="noopener noreferrer">Read a sample chapter <span class="arrow">→</span></a></p>';
    if(h){$('.proofbody',pf).innerHTML=h;pf.hidden=false;$$('.rv',pf).forEach(function(e){e.classList.add('in')})}
  }

  /* counters */
  var cn=$$('[data-count]');
  var run=function(e){var to=+e.getAttribute('data-count'),t0=null;if(matchMedia('(prefers-reduced-motion:reduce)').matches){e.textContent=to;return}
    var st=function(ts){if(!t0)t0=ts;var k=Math.min(1,(ts-t0)/1200);e.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)};
  if('IntersectionObserver' in window){var co=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){run(x.target);co.unobserve(x.target)}})},{threshold:.6});cn.forEach(function(e){co.observe(e)})}else{cn.forEach(function(e){e.textContent=e.getAttribute('data-count')})}

  /* sticky mobile CTA: hidden while a sign-up form or the hero is on screen */
  var sk=$('.stickycta');
  if(sk&&'IntersectionObserver' in window){
    var seen=0,watch=$$('.formbox,.hero');
    var so=new IntersectionObserver(function(es){es.forEach(function(x){x.target._v=x.isIntersecting});seen=watch.some(function(w){return w._v});sk.classList.toggle('show',!seen)},{threshold:.15});
    watch.forEach(function(w){so.observe(w)});
  }

  /* links */
  var li=safe(S.linkedin);
  $$('.js-linkedin').forEach(function(a){if(li){a.href=li;a.target='_blank';a.rel='noopener noreferrer'}else{a.style.display='none'}});
  $$('.js-email').forEach(function(a){if(S.contactEmail){a.href='mailto:'+S.contactEmail;a.textContent=S.contactEmail}else{a.style.display='none'}});
  var yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();

  /* reveal */
  var els=$$('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
    els.forEach(function(e){io.observe(e)});
  }else{els.forEach(function(e){e.classList.add('in')})}
})();
