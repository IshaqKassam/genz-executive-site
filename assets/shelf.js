/* The GenZ Executive Bookshelf. Flags: s = start here for that shelf, r = Ishaq has read it. */
(function(){
var SHELVES=['Know yourself','Start your career','Focus and reading','Communicate and influence','Lead people','Understand business','Money','Think clearly','The future of work','African voices','Builders’ stories'];
var B=[
[0,'Atomic Habits','James Clear','Small habits that compound into who you become.','s'],
[0,'Man’s Search for Meaning','Viktor E. Frankl','Purpose, and choosing your response under pressure.',''],
[0,'The 7 Habits of Highly Effective People','Stephen R. Covey','Character before technique.',''],
[0,'Mindset','Carol Dweck','Why believing you can improve changes what you attempt.',''],
[0,'Hidden Potential','Adam Grant','Growth comes from character skills as much as raw talent.',''],
[1,'So Good They Can’t Ignore You','Cal Newport','Build rare skills first; passion follows mastery.','s'],
[1,'The First 90 Days','Michael Watkins','A framework for landing well in any new role.',''],
[1,'The Defining Decade','Meg Jay','Why the early years of a career carry so much weight.',''],
[1,'Designing Your Life','Bill Burnett and Dave Evans','Design thinking applied to career choices.',''],
[1,'Range','David Epstein','Why breadth beats early specialising for many careers.',''],
[2,'Deep Work','Cal Newport','Focus as a competitive advantage.','s'],
[2,'Essentialism','Greg McKeown','Do less, better, and learn to say no.',''],
[2,'How to Read a Book','Mortimer J. Adler','The classic method for reading actively and getting more out of every book.','r'],
[2,'The Little Guide to Your Well-Read Life','Steve Leveen','Practical ways to fit more books into a busy life.','r'],
[3,'How to Win Friends and Influence People','Dale Carnegie','Timeless people skills.','s'],
[3,'Crucial Conversations','Patterson, Grenny, McMillan and Switzler','How to speak up when the stakes are high.',''],
[3,'Never Split the Difference','Chris Voss','Negotiation that helps in salary talks and deals.',''],
[3,'Made to Stick','Chip Heath and Dan Heath','Make your ideas memorable.',''],
[3,'Show Your Work!','Austin Kleon','Share what you are learning so people can find you.','r'],
[4,'The Effective Executive','Peter F. Drucker','The original playbook: effectiveness can be learned.','s'],
[4,'Extreme Ownership','Jocko Willink and Leif Babin','Owning outcomes as a leader.',''],
[4,'Leaders Eat Last','Simon Sinek','Trust, safety and serving your team.',''],
[4,'What Got You Here Won’t Get You There','Marshall Goldsmith','The habits that quietly block promotion.',''],
[5,'The Personal MBA','Josh Kaufman','Business fundamentals in one book.','s'],
[5,'Financial Intelligence','Karen Berman and Joe Knight','Read financial statements without being a finance person.',''],
[5,'What the CEO Wants You to Know','Ram Charan','Cash, margin, velocity, growth and customers made simple.',''],
[5,'The Trusted Advisor','Maister, Green and Galford','How trust is earned and why it wins work.',''],
[6,'The Psychology of Money','Morgan Housel','Behaviour matters more than maths with money.','s'],
[6,'I Will Teach You to Be Rich','Ramit Sethi','A practical money system for young earners.',''],
[6,'The Richest Man in Babylon','George S. Clason','Saving and investing basics told as parables.',''],
[7,'Thinking in Bets','Annie Duke','Deciding well when you cannot be sure.','s'],
[7,'Thinking, Fast and Slow','Daniel Kahneman','How judgement goes wrong, and how to catch it.',''],
[7,'Originals','Adam Grant','Why being first is not always best.','r'],
[8,'Co-Intelligence','Ethan Mollick','Working alongside AI at work.','s'],
[8,'The Innovator’s Dilemma','Clayton M. Christensen','Why good companies get disrupted.',''],
[9,'Things Fall Apart','Chinua Achebe','Africa’s foundational novel on identity and change.','sr'],
[9,'Born a Crime','Trevor Noah','A young African’s story of hustle and humour.',''],
[9,'Unbowed','Wangari Maathai','A Kenyan who built something from nothing and stood firm.',''],
[9,'Dead Aid','Dambisa Moyo','An African economist challenges the aid model.','r'],
[9,'The River and the Source','Margaret A. Ogola','Four generations of Kenyan women building lives through change.','r'],
[9,'Long Walk to Freedom','Nelson Mandela','Leadership, patience and purpose.',''],
[10,'Shoe Dog','Phil Knight','The messy middle of building Nike.','s'],
[10,'The Third Door','Alex Banayan','A young person learning from the world’s most successful people.','r'],
[10,'The Ride of a Lifetime','Robert Iger','Rising from the bottom to run Disney.','']
];
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var f=document.getElementById('shelfFilters'),g=document.getElementById('shelfGrid'),cnt=document.getElementById('shelfCount');
if(!f||!g)return;
var cur=-1,onlyRead=false;
f.innerHTML='<button class="sf on" data-s="-1">All shelves</button>'+SHELVES.map(function(s,i){return'<button class="sf" data-s="'+i+'">'+esc(s)+'</button>'}).join('')+'<button class="sf read" data-r="1">Ishaq has read</button>';
function draw(){
  var n=0,h='';
  B.forEach(function(b){
    if(cur>=0&&b[0]!==cur)return;
    if(onlyRead&&b[4].indexOf('r')<0)return;
    n++;
    h+='<article class="bk"><span class="sh">'+esc(SHELVES[b[0]])+'</span><h3>'+esc(b[1])+'</h3><p class="au">'+esc(b[2])+'</p><p>'+esc(b[3])+'</p><div class="tags">'+(b[4].indexOf('s')>=0?'<span class="tg st">Start here</span>':'')+(b[4].indexOf('r')>=0?'<span class="tg rd">Ishaq has read</span>':'')+(b[4].indexOf('s')>=0?'<span class="tg lk">Takeaway for members</span>':'')+'</div></article>';
  });
  g.innerHTML=h||'<p class="fine">Nothing here yet.</p>';
  cnt.textContent=n+(n===1?' book':' books');
}
f.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-r')){onlyRead=!onlyRead;b.classList.toggle('on',onlyRead)}
  else{cur=+b.getAttribute('data-s');[].forEach.call(f.querySelectorAll('.sf:not(.read)'),function(x){x.classList.toggle('on',x===b)})}
  draw();
});
draw();
})();
