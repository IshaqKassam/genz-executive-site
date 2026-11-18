(function(){
  var Q=[
    {k:'Reliability',t:'I do what I said I would do, by the date I said, and I tell people early if that will change.',tip:'Write down every commitment you make this week and the date. Send a one-line update before a deadline slips, not after.'},
    {k:'Communication',t:'I lead with the answer, keep messages short and make it clear what I need from the reader.',tip:'Rewrite your next email so the first line is the conclusion and the last line is the ask.'},
    {k:'Judgement',t:'When something is unclear, I think it through, propose a way forward and then ask, instead of waiting to be told.',tip:'Next time you are stuck, bring your manager the problem, two options and your recommendation.'},
    {k:'Reading the room',t:'I notice who influences decisions, what people care about and how to adjust my approach to them.',tip:'Draw a simple map of the five people who most affect your work and write what each one needs from you.'},
    {k:'Ownership',t:'I treat my work as mine: I check quality, follow it through and fix problems without being chased.',tip:'Pick one task this week and own it end to end, including a final check and a short note on the result.'},
    {k:'Learning speed',t:'I ask for feedback, act on it quickly and keep learning outside my formal job description.',tip:'Ask one colleague each week, "What is one thing I could do better?" and act on the answer within three days.'},
    {k:'Money habits',t:'I have a simple plan for my income: saving, spending and an emergency buffer.',tip:'Set up one automatic transfer to savings on payday, however small, and write a one-page money plan.'},
    {k:'Network',t:'I build relationships on purpose, with peers, seniors and people outside my company.',tip:'Message one person you admire this week with a specific question or a thank-you. Keep it short.'}
  ];
  var A=[],i=0,root=document.getElementById('sc');if(!root)return;
  var $=function(s,r){return (r||document).querySelector(s)};
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  var labels=['Never','Rarely','Sometimes','Often','Always'];
  function ask(){
    var q=Q[i],p=Math.round(i/Q.length*100);
    root.innerHTML='<div class="scbar"><i style="width:'+p+'%"></i></div><p class="scn">Question '+(i+1)+' of '+Q.length+' · '+esc(q.k)+'</p><h2 class="scq">'+esc(q.t)+'</h2><div class="scopts">'+labels.map(function(l,n){return '<button type="button" data-v="'+(n+1)+'"><b>'+(n+1)+'</b><span>'+l+'</span></button>'}).join('')+'</div>'+(i?'<button class="scback" type="button">Back</button>':'');
    root.querySelectorAll('.scopts button').forEach(function(b){b.addEventListener('click',function(){A[i]=+b.getAttribute('data-v');i++;i<Q.length?ask():done()})});
    var bk=$('.scback',root);if(bk)bk.addEventListener('click',function(){i--;ask()});
  }
  function band(s){
    if(s>=37)return['Executive-ready','You already act like an executive in most areas. Your next step is to lift others and stretch into bigger scope.'];
    if(s>=29)return['Building momentum','You have strong habits. A few deliberate moves will make you stand out quickly.'];
    if(s>=21)return['Laying foundations','The basics are forming. Focus on one or two skills for the next 30 days and the gains will show.'];
    return['Getting started','This is a normal place to begin. Pick one skill, run a small experiment this week, and re-score in 30 days.'];
  }
  function done(){
    var s=A.reduce(function(a,b){return a+b},0),b=band(s);
    var rank=Q.map(function(q,n){return{k:q.k,v:A[n],tip:q.tip}}).sort(function(x,y){return x.v-y.v});
    var weak=rank[0],strong=rank[rank.length-1];
    var share='I took the GenZ Executive Scorecard and scored '+s+'/40 ('+b[0]+'). My strongest skill: '+strong.k+'. My focus for the next 30 days: '+weak.k+'. Take it free: genzexecutive.com/scorecard.html #GenZExecutive';
    root.innerHTML='<p class="scn">Your result</p><div class="scres"><div class="big"><b>'+s+'</b><span>out of 40</span></div><div><h2 class="scq" style="margin:0 0 8px">'+b[0]+'</h2><p style="margin:0;color:#BFD6E6">'+esc(b[1])+'</p></div></div>'+
      '<div class="scbars">'+Q.map(function(q,n){return '<div><span>'+esc(q.k)+'</span><i><u style="width:'+(A[n]*20)+'%"></u></i><b>'+A[n]+'</b></div>'}).join('')+'</div>'+
      '<div class="sctip"><p class="scn" style="margin:0 0 6px">Your focus for the next 30 days: '+esc(weak.k)+'</p><p style="margin:0">'+esc(weak.tip)+'</p></div>'+
      '<div class="scshare"><textarea readonly rows="4" id="scshare">'+esc(share)+'</textarea><div class="cta"><button class="btn blue" type="button" id="sccopy">Copy for LinkedIn</button><a class="btn ghost on-dark" id="scli" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/feed/?shareActive=true&text='+encodeURIComponent(share)+'">Share on LinkedIn</a><button class="btn ghost on-dark" type="button" id="scagain">Retake</button></div></div>';
    $('#sccopy').addEventListener('click',function(){var t=$('#scshare');t.select();try{navigator.clipboard.writeText(t.value)}catch(e){document.execCommand('copy')}this.textContent='Copied'});
    $('#scagain').addEventListener('click',function(){A=[];i=0;ask()});
    var f=document.getElementById('scform');if(f){f.hidden=false;f.scrollIntoView&&0}
    try{window.scrollTo({top:root.offsetTop-90,behavior:'smooth'})}catch(e){}
  }
  ask();
})();
