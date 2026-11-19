(function(){
  var S=window.SITE||{},CO=S.checkout||{};
  var $=function(s){return document.querySelector(s)};
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  var body=$('#th-body'),h=$('#th-h'),l=$('#th-l'),help=$('#th-help');
  var worker=/^https:\/\//i.test(CO.worker||'')?CO.worker.replace(/\/+$/,''):'';
  var ref=(new URLSearchParams(location.search).get('ref')||'').trim();

  function ask(msg){
    help.hidden=false;
    body.innerHTML=(msg?'<p>'+msg+'</p>':'')+'<p class="note">Already paid? Paste the reference from your Paystack receipt email and we will find your files.</p><form id="th-f"><input type="text" id="th-r" placeholder="Payment reference" autocomplete="off" aria-label="Payment reference"><button class="btn blue" type="submit">Find my files <span class="arrow">&rarr;</span></button></form>';
    $('#th-f').addEventListener('submit',function(e){e.preventDefault();var v=$('#th-r').value.trim();if(v)location.search='?ref='+encodeURIComponent(v)});
  }
  function fail(title,lede,msg){h.innerHTML=title;l.textContent=lede;ask(msg)}

  if(!worker){fail('Downloads open <span class="serif">very soon.</span>','Online checkout is not switched on yet.','');return}
  if(!ref){fail('Find <span class="serif">your files.</span>','Use the reference from your Paystack receipt.','');return}

  var tries=0;
  function load(){
    tries++;
    fetch(worker+'/files?ref='+encodeURIComponent(ref)).then(function(r){return r.json().then(function(j){return{s:r.status,j:j}})}).then(function(x){
      var j=x.j||{};
      if(j.ok){
        h.innerHTML='Thank you. <span class="serif">Your files are ready.</span>';
        l.textContent=(j.title||'Your order')+(j.email?' · receipt sent to '+j.email:'');
        body.innerHTML='<ul class="dl">'+j.files.map(function(f){return '<li><span>'+esc(f.name)+'</span><a class="btn blue" href="'+esc(f.url)+'">Download <span class="arrow">&darr;</span></a></li>'}).join('')+'</ul><p class="note">Bookmark this page. The link keeps working, so you can come back for your files any time. Print the workbooks or fill them in on screen, and start with one habit this week.</p>';
        help.hidden=false;return;
      }
      if(j.reason==='pending'&&tries<10){l.textContent='Waiting for your payment to be confirmed. If you are paying with M-Pesa, enter your PIN on your phone.';setTimeout(load,3000);return}
      if(j.reason==='pending'){fail('Payment <span class="serif">still pending.</span>','This can take a minute.','Refresh this page in a moment. If you were charged and nothing changes, write to us with your reference.');return}
      if(j.reason==='not_paid'){fail('No payment <span class="serif">found.</span>','That payment was not completed.','You have not been charged. <a href="shop.html">Back to the shop</a> to try again.');return}
      if(j.reason==='amount_too_low'||j.reason==='wrong_currency'||j.reason==='unknown_product'){fail('We need to <span class="serif">check this one.</span>','The payment does not match a product.','Write to us with your reference and we will send your files or refund you.');return}
      fail('We could not <span class="serif">find that payment.</span>','Check the reference and try again.','');
    }).catch(function(){
      if(tries<3){setTimeout(load,2500);return}
      fail('We could not <span class="serif">reach the server.</span>','Check your connection, then refresh.','Your payment is safe. Refresh this page, or write to us with your reference.');
    });
  }
  load();
})();
