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

  /* founding-price window: real end date, automatic switch to regular prices */
  var OF=S.offer||{},endT=Date.parse(OF.ends||'');
  var isOpen=!!endT&&Date.now()<endT;
  var fmt=function(n){return 'KES '+n.toLocaleString('en-US')};
  var endsText=endT?new Date(endT).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'Africa/Nairobi'}):'';
  var daysLeft=endT?Math.max(0,Math.ceil((endT-Date.now())/864e5)):0;
  window.GZ_OFFER={open:isOpen,endsText:endsText,daysLeft:daysLeft,fmt:fmt};
  $$('.js-offer').forEach(function(e){if(isOpen){e.textContent='Founding prices end '+endsText+' ('+(daysLeft>1?daysLeft+' days left':'last day')+'). Regular prices apply after.';e.hidden=false}else{e.hidden=true}});
  $$('.js-from').forEach(function(e){e.textContent=isOpen?'From KES 790':'From KES 1,200'});

  C.planner=C.wb90;C.onepager=C.cvkit;C.wallpapers=C.wb10;C.meetings=C.cvkit;C.strategy=C.wb10;C.budget=C.wb90;C.scorecards=C.jour;C.toolkit=C.bundle;
  var PRODS=[
    {id:'bundle',hot:1,f:3200,r:3900,v:4890,who:'For: your first job and the climb that follows, in one purchase.',k:'Bundle',t:'The Starter Bundle',d:'Everything you need to run your first 90 days and plan the climb ahead: five tools, one price.',
      inside:['90-Day Trust Build workbook, 26 pages (KES 1,500)','The Career Compass workbook, 17 pages (KES 1,200)','One-Pager Pack: templates for memos, updates and meetings, 17 pages (KES 900)','Executive Weekly Planner, 22 pages (KES 990)','Built, Not Born wallpaper pack, phone and desktop (KES 300)','Bought separately at regular prices: KES 4,890']},
    {id:'toolkit',hot:1,f:8900,r:10900,who:'For: building a complete professional toolkit once.',k:'Bundle',t:'The Complete Executive Toolkit',d:'Every workbook, template pack and Excel workbook in one purchase: planning, meetings, strategy, budgeting, scorecards, your CV and your career map.',
      inside:['90-Day Trust Build workbook (KES 1,500)','The Career Compass workbook (KES 1,200)','CV and LinkedIn Kit (KES 1,200)','The GenZ Executive Journal (KES 1,500)','Executive Weekly Planner (KES 990)','Meeting and Minutes Pack (KES 1,200)','Strategy and Planning Pack (KES 1,900)','Budgeting and Costing Workbook (KES 1,500)','Scorecard Toolkit (KES 1,200)','One-Pager Pack (KES 900)','Wallpaper pack (KES 300)','Bought separately at regular prices: KES 13,390']},
    {id:'wb90',f:990,r:1500,who:'For: your first 90 days in a new role.',k:'Workbook',t:'90-Day Trust Build',d:'A week-by-week plan to become the person your manager and colleagues rely on, with scripts to use word for word.',
      inside:['13 weekly spreads: focus, coaching note, scripts and a Friday review','First-week conversation guide: what to ask your manager','Stakeholder map and a "when things go wrong" page','Day 30, 60 and 90 scorecards','One worked example week']},
    {id:'wb10',f:790,r:1200,who:'For: anyone asking where this career is heading.',k:'Workbook',t:'The Career Compass',d:'Decide who you are becoming, work backwards to this quarter, and check your progress every Friday.',
      inside:['Letter from your future self','Values and strengths prompts','Work-backwards tables from your target role to this quarter','12 weekly Friday audits','A one-page profile template and a commitment page']},
    {id:'cvkit',f:790,r:1200,who:'For: job seekers and anyone updating their profile.',k:'Templates',t:'CV and LinkedIn Kit',d:'Make your CV and LinkedIn profile work for you, with fill-in layouts and formulas you can copy.',
      inside:['Three editable CV layouts: graduate, first job, 2 to 5 years','30 before-and-after bullet rewrites','Cover letter template and examples','10 headline formulas and an About-section formula','30-day LinkedIn posting plan with 12 post prompts','Connection and referral message templates']},
    {id:'jour',f:1200,r:1500,who:'For: building a steady weekly habit.',k:'Printable journal',t:'The GenZ Executive Journal',d:'A year of weekly prompts and a simple daily habit: pick the one thing that matters, do it, and review each Friday.',
      inside:['52 weekly prompts, one for every week of the year','Daily "one thing" tracker with a note on what got in the way','A weekly review: what went well, what to change, next week’s move','Print at home or at a print shop']}    ,{id:'planner',f:690,r:990,who:'For: planning your quarter and running every week well.',k:'Planner',t:'Executive Weekly Planner',d:'A full quarter in one document: vision, quarter plan, monthly pages and thirteen weekly spreads with a Friday review.',
      inside:['Annual vision page and a quarter plan with three goals','Three monthly planning pages with a calendar grid','13 weekly spreads: focus, top three, daily one-thing, energy and habit tracker, Friday review','A weekly prompt for every week','Quarter-end review and next-quarter set-up, 22 pages']},
    {id:'onepager',f:590,r:900,who:'For: writing updates your manager actually reads.',k:'Entry tool',t:'One-Pager Pack',d:'Fill-in templates for memos, status updates and meeting notes, built on the answer-first shape.',
      inside:['Templates for memos, updates and meetings, 17 pages','Answer-first worked examples','Editable, so you can reuse them every week']},
    {id:'wallpapers',f:190,r:300,who:'For: a daily reminder on your phone and desktop.',k:'Entry tool',t:'Built, Not Born Wallpapers',d:'Phone and desktop wallpapers with lines from the book, to keep the habit in front of you.',
      inside:['Eight wallpapers: phone and desktop sizes','PNG files, ready to set']}
    ,{id:'meetings',f:790,r:1200,who:'For: running meetings and writing minutes people use.',k:'Templates',t:'Meeting and Minutes Pack',d:'Fifteen templates with worked examples: agendas, one-on-ones, minutes, action and decision logs, stakeholder updates and a meeting scorecard.',
      inside:['Do-we-need-this-meeting test and agenda template','One-on-one template with twelve questions','Full minutes, short-form minutes and committee minutes with resolutions','Action log and decision log','Weekly team meeting and project kickoff formats','Stakeholder update and customer meeting brief','Retrospective, meeting scorecard and 25 phrases for running a meeting, 18 pages']},
    {id:'strategy',f:1290,r:1900,who:'For: anyone who has to plan, propose or persuade.',k:'Templates',t:'Strategy and Planning Pack',d:'Fourteen working templates: one-page strategy, SWOT, OKRs, business case, project charter, stakeholder map, risk register, decision memo and QBR.',
      inside:['Strategy on one page with a worked example','SWOT, PESTLE prompts and competitor snapshot','Customer profile and positioning statement','OKRs with a scoring method and an impact-and-effort prioritiser','Business case, project charter and decision memo','Stakeholder map, communication plan and risk register','Proposal outline, 90-day leader plan, quarterly business review and a strategy health check, 17 pages']},
    {id:'budget',f:990,r:1500,who:'For: personal money, projects and small businesses.',k:'Excel workbook',t:'Budgeting and Costing Workbook',d:'Eight formula-driven sheets: personal and annual budgets, project budget, department variance, costing and pricing, break-even, 12-month cashflow and a quote builder.',
      inside:['Personal monthly budget with a needs, wants and savings check','Annual budget by month','Project budget with contingency and variance','Department budget vs actual with a status flag','Costing and pricing: cost per unit to the price you need','Break-even with price scenarios','12-month cashflow with a cash warning','Quote builder with discount and tax']},
    {id:'scorecards',f:790,r:1200,who:'For: turning opinions into numbers you can act on.',k:'Excel workbook',t:'Scorecard Toolkit',d:'Six scorecards: your executive skills, first 90 days, projects, team KPIs, suppliers and your quarter, with automatic scoring and red, amber, green flags.',
      inside:['Executive scorecard: eight skills, strongest skill, focus and chart','30-60-90 weighted scorecard for a new role','Project scorecard with an overall status','Team KPI scorecard that handles lower-is-better measures','Supplier scorecard with ranking','Quarterly review with evidence']}
  ];
  var card=function(x,i){
    var u=safe((isOpen?(S.pay||{}):(S.payRegular||{}))[x.id]);
    var btn=u?'<a class="btn" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">Buy now <span class="arrow">→</span></a>':(S.contactEmail?'<a class="btn" href="mailto:'+esc(S.contactEmail)+'?subject='+encodeURIComponent('Order: '+x.t)+'&body='+encodeURIComponent('Hello Ishaq,\n\nI would like to order: '+x.t+' (KES '+(isOpen?x.f:x.r).toLocaleString('en-US')+(isOpen?', founding price':'')+').\n\nName:\nPhone number:\n\nPlease send me the payment details.\n')+'">Order now <span class="arrow">→</span></a>':'<a class="btn" href="index.html#join">Reserve my copy <span class="arrow">→</span></a>');
    var badge=isOpen?'Founding price':(x.hot?'Best value':'');
    var p=isOpen?x.f:x.r;
    return '<article data-p="'+x.id+'" class="prod rv d'+(i%3)+(x.hot?' hot':'')+'"><span class="cover">'+C[x.id]+'</span><div class="body">'+(badge?'<span class="badge">'+esc(badge)+'</span>':'')+'<span class="k">'+esc(x.k)+'</span><h3>'+esc(x.t)+'</h3><p>'+esc(x.d)+'</p>'+(x.who?'<p class="who">'+esc(x.who)+'</p>':'')+'<div class="price">'+esc(fmt(p))+' <small>one-off</small>'+(x.v?'<s>'+esc(fmt(x.v))+' if bought separately</s>':(isOpen?'<s>'+esc(fmt(x.r))+' regular price</s>':''))+'</div>'+(x.v?'<p class="urgency save">You save '+esc(fmt(x.v-p))+' ('+Math.round((x.v-p)/x.v*100)+'% off)'+(isOpen?' · founding price until '+esc(endsText):'')+'</p>':(isOpen?'<p class="urgency">Save '+esc(fmt(x.r-x.f))+' until '+esc(endsText)+'</p>':''))+(x.inside?'<details class="inside"><summary>What is inside</summary><ul>'+x.inside.map(function(i){return '<li>'+esc(i)+'</li>'}).join('')+'</ul></details>':'')+btn+'</div></article>';
  };
  var grid=$('#shopgrid');
  if(grid){var lim=+grid.getAttribute('data-limit')||PRODS.length;grid.innerHTML=PRODS.slice(0,lim).map(card).join('')}
  var dv=$('#deliver');if(dv)dv.textContent=S.deliveryPromise||'';

  /* form: native branded capture posting to the Google Form */
  var F=S.formFields||{};
  $$('.formbox').forEach(function(fb){
    var act=safe(S.formAction);
    if(!act){var fs=safe(S.formShareUrl);fb.innerHTML=fs?'<p class="note"><a class="btn blue" href="'+esc(fs)+'" target="_blank" rel="noopener noreferrer">Open the sign-up form</a></p>':'<div class="soon"><strong>The launch list opens very soon.</strong></div>';return}
    var pre=(fb.getAttribute('data-interest')||'').split('|'),cta=fb.getAttribute('data-cta')||'Join the launch list',dn=fb.getAttribute('data-done')||'Thank you. We will email you when the book, Gravitas and the community open.';
    var chips=['The book','Gravitas','The community','Workshops and speaking'].map(function(v){return '<label class="chip"><input type="checkbox" name="i" value="'+v+'"'+(pre.indexOf(v)>-1?' checked':'')+'><span>'+v+'</span></label>'}).join('');
    var opts=['Student','Job seeker','First 5 years of work','Manager','Other'].map(function(v){return '<option>'+v+'</option>'}).join('');
    fb.innerHTML='<form class="capture" novalidate><div class="row2"><label>First and last name<input name="n" autocomplete="name" required></label><label>Email<input type="email" name="e" autocomplete="email" required></label></div>'+
      '<fieldset><legend>I want to hear about</legend><div class="chips">'+chips+'</div></fieldset>'+
      '<label>Where are you in your career?<select name="c"><option value="">Choose one</option>'+opts+'</select></label>'+
      '<label class="consent"><input type="checkbox" name="k" required><span>'+esc(S.consentText||'')+'</span></label>'+
      '<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">'+
      '<p class="err" role="alert" hidden></p><button class="btn blue" type="submit">'+esc(cta)+' <span class="arrow">→</span></button>'+
      '<p class="fine">One email when something opens. Unsubscribe any time.</p></form>'+
      '<div class="done" hidden><div class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg></div><h3>You are on the list.</h3><p>'+esc(dn)+'</p>'+(S.freeDownloads&&S.freeDownloads.length?'<div class="dl">'+S.freeDownloads.map(function(d){return '<a class="btn blue" href="'+esc(d.u)+'" download>'+esc(d.t)+' <span class="arrow">↓</span></a>'}).join('')+'</div>':'')+(safe(S.linkedin)?'<a class="btn ghost on-dark" href="'+esc(S.linkedin)+'" target="_blank" rel="noopener noreferrer">Follow on LinkedIn</a>':'')+'</div>';
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
      if(F.source)p.append(F.source,(fb.getAttribute('data-source')||(location.pathname.replace(/\W/g,'')||'home')));
      var ml=safe(S.mailerliteAction);
      if(ml){var q=new URLSearchParams();q.append('fields[email]',em);q.append('fields[name]',nm);q.append('ml-submit','1');q.append('anticsrf','true');fetch(ml,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:q.toString()}).catch(function(){})}
      bt.disabled=true;bt.classList.add('busy');
      fetch(act,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:p.toString()}).then(function(){
        f.hidden=true;$('.done',fb).hidden=false;
      }).catch(function(){bt.disabled=false;bt.classList.remove('busy');er.textContent='Something went wrong. Please try again.';er.hidden=false});
    });
  });


  /* Ask Ishaq: question / idea / case scenario */
  var ab=$('#askbox');
  if(ab){
    var A=S.ask||{},AF=A.fields||{},aact=safe(A.action);
    var types=['A question','An idea for a post','A case scenario'];
    var tchips=types.map(function(v,i){return '<label class="chip"><input type="radio" name="t" value="'+v+'"'+(i===0?' checked':'')+'><span>'+v+'</span></label>'}).join('');
    ab.innerHTML='<form class="capture" novalidate><fieldset><legend>I am sending</legend><div class="chips">'+tchips+'</div></fieldset>'+
      '<label>Your message<textarea name="m" rows="6" maxlength="2000" placeholder="Keep it short and specific. For a case scenario, leave out names and say what made it hard." required></textarea></label>'+
      '<div class="row2"><label>Name (optional)<input name="n" autocomplete="name"></label><label>Email (optional, only if you want a reply)<input type="email" name="e" autocomplete="email"></label></div>'+
      '<label class="consent"><input type="checkbox" name="f"><span>You may use my message in a post, guide or newsletter. Remove my name and any details that identify me or others.</span></label>'+
      '<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">'+
      '<p class="err" role="alert" hidden></p><button class="btn blue" type="submit">Send to Ishaq <span class="arrow">→</span></button>'+
      '<p class="fine">I read every message. Your name and email are never shared.</p></form>'+
      '<div class="done" hidden><div class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg></div><h3>Thank you. It is in.</h3><p>If it becomes a post or a guide, you will see it on the blog.</p></div>';
    var af=$('form',ab),aer=$('.err',ab),abt=$('button',af);
    af.addEventListener('submit',function(ev){
      ev.preventDefault();aer.hidden=true;
      if(af.website.value)return;
      var msg=af.m.value.trim(),em=af.e.value.trim(),ty=($('input[name=t]:checked',af)||{}).value||types[0];
      if(msg.length<10){aer.textContent='Please write a little more so I can help.';aer.hidden=false;return}
      if(em&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){aer.textContent='That email does not look right. Leave it empty if you prefer.';aer.hidden=false;return}
      var ok=function(){af.hidden=true;$('.done',ab).hidden=false};
      if(aact){
        var p=new URLSearchParams();p.append(AF.type,ty);p.append(AF.message,msg);
        if(AF.name&&af.n.value.trim())p.append(AF.name,af.n.value.trim());
        if(AF.email&&em)p.append(AF.email,em);
        if(AF.feature)p.append(AF.feature,af.f.checked?'Yes, anonymised':'No, keep private');
        abt.disabled=true;abt.classList.add('busy');
        fetch(aact,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:p.toString()}).then(ok).catch(function(){abt.disabled=false;abt.classList.remove('busy');aer.textContent='Something went wrong. Please try again.';aer.hidden=false});
      }else if(S.contactEmail){
        location.href='mailto:'+S.contactEmail+'?subject='+encodeURIComponent('Ask Ishaq: '+ty)+'&body='+encodeURIComponent(msg+'\n\nName: '+af.n.value.trim()+'\nMay be used anonymously: '+(af.f.checked?'Yes':'No'));ok();
      }else{aer.textContent='Sending opens very soon.';aer.hidden=false}
    });
  }

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
  $$('.js-gift').forEach(function(a){var m=a.getAttribute('data-kind')==='monthly',u=m?S.pledgeUrl:S.giftUrl;if(u){a.href=u;a.target='_blank';a.rel='noopener'}else if(S.contactEmail){a.href='mailto:'+S.contactEmail+'?subject='+encodeURIComponent(m?'Monthly gift pledge':'A gift for The GenZ Executive')+'&body='+encodeURIComponent('Hello Ishaq,\n\nI would like to '+(m?'pledge a monthly gift':'give a gift')+'. Please send me the details.\n\nName (or anonymous):\nAmount I have in mind:\n')}else{a.style.display='none'}});
  $$('.js-enquiry').forEach(function(a){if(S.contactEmail&&a.getAttribute('data-subject')){a.href='mailto:'+S.contactEmail+'?subject='+encodeURIComponent(a.getAttribute('data-subject'))+'&body='+encodeURIComponent(a.getAttribute('data-body')||'');return}if(S.contactEmail){a.href='mailto:'+S.contactEmail+'?subject='+encodeURIComponent('Speaking enquiry')+'&body='+encodeURIComponent('Hello Ishaq,\n\nEvent and organisation:\nAudience and size:\nPreferred date and place (or online):\nFormat (keynote, workshop, panel):\n\nThank you,\n')}else{a.style.display='none'}});
  var yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();

  /* reveal */
  var els=$$('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
    els.forEach(function(e){io.observe(e)});
  }else{els.forEach(function(e){e.classList.add('in')})}
})();

(function(){try{
var w=document.querySelector('.hero-book');if(!w||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var bk=w.querySelector('.book');if(!bk)return;
w.addEventListener('mousemove',function(e){var r=w.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;bk.style.animation='none';bk.style.transform='rotateY('+(-12+x*26)+'deg) rotateX('+(3-y*14)+'deg)'});
w.addEventListener('mouseleave',function(){bk.style.transform='';bk.style.animation=''});
}catch(e){}})();

