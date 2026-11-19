/* The GenZ Executive Bookshelf. Flags: s = start here for that shelf, r = Ishaq has read it. */
(function(){
var SHELVES=["Know yourself", "Start your career", "Focus and reading", "Communicate and influence", "Lead people", "Understand business", "Money", "Think clearly and read people", "The future of work", "African voices", "Builders’ stories", "Understanding GenZ", "Philosophy and wisdom", "Faith and spiritual wisdom", "Classic and modern literature", "Learning and teaching", "History, society and technology"];
var B=[
[0, "Atomic Habits", "James Clear", "Small habits that compound into who you become.", "s"],
[0, "Man’s Search for Meaning", "Viktor E. Frankl", "Purpose, and choosing your response under pressure.", ""],
[0, "The 7 Habits of Highly Effective People", "Stephen R. Covey", "Character before technique.", ""],
[0, "Mindset", "Carol Dweck", "Why believing you can improve changes what you attempt.", ""],
[0, "Hidden Potential", "Adam Grant", "Growth comes from character skills as much as raw talent.", ""],
[0, "Grit", "Angela Duckworth", "Passion plus perseverance as a predictor of long-run success.", ""],
[0, "Everything Is Figureoutable", "Marie Forleo", "A practical case for working problems out instead of waiting for permission.", ""],
[0, "Stillness Is the Key", "Ryan Holiday", "Calm as a leadership advantage, drawing on several wisdom traditions.", ""],
[0, "Pressure Is a Privilege", "Billie Jean King", "A champion’s view that pressure means you are where it matters.", ""],
[0, "Who Moved My Cheese?", "Spencer Johnson", "A short parable about adapting to change.", "r"],
[0, "Don’t Sweat the Small Stuff", "Richard Carlson", "Calm and perspective in daily life.", "r"],
[0, "Steal Like an Artist", "Austin Kleon", "Copy the principles of those ahead of you, then make it your own.", "r"],
[0, "All I Really Need to Know I Learned in Kindergarten", "Robert Fulghum", "The simple lessons are often the most profound.", "r"],
[0, "The Midnight Library", "Matt Haig", "Regret, choice and tending the life you actually have.", "r"],
[0, "The Power of a Positive Attitude", "Roger Fritz", "Attitude as something you practise, not a mood you wait for.", "r"],
[0, "Writing a Vision Statement and Setting Goals", "Lisa Shea", "A short guide to writing the vision before the goals.", ""],
[1, "So Good They Can’t Ignore You", "Cal Newport", "Build rare skills first; passion follows mastery.", "s"],
[1, "The First 90 Days", "Michael Watkins", "A framework for landing well in any new role.", ""],
[1, "The Defining Decade", "Meg Jay", "Why the early working years carry so much weight.", ""],
[1, "Designing Your Life", "Bill Burnett and Dave Evans", "Design thinking applied to career choices.", ""],
[1, "Range", "David Epstein", "Why breadth beats early specialising for many careers.", ""],
[1, "Outliers", "Malcolm Gladwell", "Opportunity, timing and practice behind unusual success.", "r"],
[1, "The Little Book of Talent", "Daniel Coyle", "Fifty-two practical tips for deliberate practice.", "r"],
[1, "Talent Is Overrated", "Geoff Colvin", "Deliberate practice beats natural talent.", ""],
[1, "The Clean Coder", "Robert C. Martin", "Professionalism: how to say no, say yes and own your craft.", "r"],
[2, "Deep Work", "Cal Newport", "Focus as a competitive advantage.", "s"],
[2, "Essentialism", "Greg McKeown", "Do less, better, and learn to say no.", ""],
[2, "Getting Things Done", "David Allen", "A system for managing tasks and commitments.", ""],
[2, "Flow", "Mihaly Csikszentmihalyi", "The psychology of being fully absorbed in your work.", ""],
[2, "Amusing Ourselves to Death", "Neil Postman", "How entertainment media shapes attention and public thought.", ""],
[2, "The Winter of Our Disconnect", "Susan Maushart", "A family switches off its screens for six months.", ""],
[2, "How to Read a Book", "Mortimer J. Adler and Charles Van Doren", "The classic method for reading actively.", "r"],
[2, "The Little Guide to Your Well-Read Life", "Steve Leveen", "Practical ways to fit more books into a busy life.", "r"],
[2, "Slow Reading in a Hurried Age", "David Mikics", "Reading deeply when everything pushes you to skim.", ""],
[2, "Mind Palace", "Ron White", "A memory technique for names, talks and lists.", "r"],
[3, "How to Win Friends and Influence People", "Dale Carnegie", "Timeless people skills.", "s"],
[3, "Crucial Conversations", "Patterson, Grenny, McMillan and Switzler", "How to speak up when the stakes are high.", ""],
[3, "Never Split the Difference", "Chris Voss", "Negotiation that helps in salary talks and deals.", ""],
[3, "Made to Stick", "Chip Heath and Dan Heath", "Make your ideas memorable.", ""],
[3, "Show Your Work!", "Austin Kleon", "Share what you are learning so people can find you.", "r"],
[3, "Radical Candor", "Kim Scott", "Give and receive honest feedback without being unkind.", ""],
[3, "Emotional Intelligence", "Daniel Goleman", "Why reading yourself and others matters as much as IQ.", ""],
[3, "Difficult Conversations", "Stone, Patton and Heen", "How to handle the conversations you dread.", ""],
[3, "Surrounded by Idiots", "Thomas Erikson", "A popular take on behaviour styles; use it lightly.", ""],
[3, "How to Speak How to Listen", "Mortimer J. Adler", "Persuasion, and the listening skill schools rarely teach.", ""],
[3, "The Tipping Point", "Malcolm Gladwell", "How ideas spread, and who spreads them.", ""],
[3, "The Book You Wish Your Parents Had Read", "Philippa Perry", "Conflict, repair and healthier relationships.", ""],
[4, "The Effective Executive", "Peter F. Drucker", "The original playbook: effectiveness can be learned.", "s"],
[4, "Extreme Ownership", "Jocko Willink and Leif Babin", "Owning outcomes as a leader.", ""],
[4, "Leaders Eat Last", "Simon Sinek", "Trust, safety and serving your team.", ""],
[4, "What Got You Here Won’t Get You There", "Marshall Goldsmith", "The habits that quietly block promotion.", ""],
[4, "High Output Management", "Andrew S. Grove", "Management as leverage.", ""],
[5, "The Personal MBA", "Josh Kaufman", "Business fundamentals in one book.", "s"],
[5, "Financial Intelligence", "Karen Berman and Joe Knight", "Read financial statements without being a finance person.", ""],
[5, "What the CEO Wants You to Know", "Ram Charan", "Cash, margin, velocity, growth and customers made simple.", ""],
[5, "The Trusted Advisor", "Maister, Green and Galford", "How trust is earned and why it wins work.", ""],
[5, "The Challenger Sale", "Matthew Dixon and Brent Adamson", "Consultative selling that teaches the client something.", ""],
[5, "Good to Great", "Jim Collins", "What separates great companies and leaders.", ""],
[5, "The Lean Startup", "Eric Ries", "Build, measure and learn quickly.", ""],
[5, "Business Model Generation", "Osterwalder and Pigneur", "Map how any company makes money on one canvas.", ""],
[5, "Measure What Matters", "John Doerr", "Goal setting with objectives and key results (OKRs).", ""],
[5, "Traction", "Gino Wickman", "A simple operating system for running a business.", ""],
[5, "Sales for Startups", "Subramanian Chandramouli", "Building a sales strategy and process step by step.", "r"],
[5, "Tickle: Digital Marketing for Tech Companies", "Peter Thomson", "Marketing ideas for technology firms.", ""],
[5, "The Basics of User Experience Design", "Mads Soegaard", "See the product through the customer’s eyes.", ""],
[5, "The Art of War", "Sun Tzu", "Strategy, preparation and positioning.", ""],
[6, "The Psychology of Money", "Morgan Housel", "Behaviour matters more than maths with money.", "s"],
[6, "I Will Teach You to Be Rich", "Ramit Sethi", "A practical money system for young earners.", ""],
[6, "The Richest Man in Babylon", "George S. Clason", "Saving and investing basics told as parables.", ""],
[6, "Rich Dad Poor Dad", "Robert T. Kiyosaki", "Assets versus liabilities; popular but debated, so read critically.", ""],
[6, "The New Good Life", "John Robbins", "Living well on less by valuing time, health and people.", ""],
[7, "Thinking in Bets", "Annie Duke", "Deciding well when you cannot be sure.", "s"],
[7, "Thinking, Fast and Slow", "Daniel Kahneman", "How judgement goes wrong, and how to catch it.", ""],
[7, "Originals", "Adam Grant", "Why being first is not always best.", "r"],
[7, "Why People Believe Weird Things", "Michael Shermer", "The thinking errors behind false beliefs.", ""],
[7, "Euclid’s Elements", "Euclid", "Reasoning step by step from first principles.", ""],
[7, "Vital Lies, Simple Truths", "Daniel Goleman", "How self-deception and groupthink hide hard truths.", ""],
[7, "The Sociopath Next Door", "Martha Stout", "On people who lack a conscience and how to spot the signs.", ""],
[7, "Envy: A Theory of Social Behaviour", "Helmut Schoeck", "Why envy shapes how people react to success.", ""],
[8, "Co-Intelligence", "Ethan Mollick", "Working alongside AI at work.", "s"],
[8, "The Innovator’s Dilemma", "Clayton M. Christensen", "Why good companies get disrupted.", ""],
[8, "AI 2041", "Kai-Fu Lee and Chen Qiufan", "Stories and analysis of how AI could change work and life.", ""],
[8, "The New Digital Age", "Eric Schmidt and Jared Cohen", "How near-universal connectivity reshapes business and states.", ""],
[8, "The Whale and the Reactor", "Langdon Winner", "Technologies carry choices about power and use.", ""],
[9, "Things Fall Apart", "Chinua Achebe", "Africa’s foundational novel on identity and change.", "sr"],
[9, "Born a Crime", "Trevor Noah", "A young African’s story of hustle and humour.", ""],
[9, "Unbowed", "Wangari Maathai", "A Kenyan who built something from nothing and stood firm.", ""],
[9, "Dead Aid", "Dambisa Moyo", "An African economist challenges the aid model.", "r"],
[9, "The Bottom Billion", "Paul Collier", "Why the poorest countries fall behind; a counterpoint to Dead Aid.", "r"],
[9, "The River and the Source", "Margaret A. Ogola", "Four generations of Kenyan women building lives through change.", "r"],
[9, "Long Walk to Freedom", "Nelson Mandela", "Leadership, patience and purpose.", ""],
[9, "Africa’s Business Revolution", "Leke, Chironga and Desvaux", "Where the continent’s business opportunity lies.", ""],
[10, "Shoe Dog", "Phil Knight", "The messy middle of building Nike.", "s"],
[10, "The Third Door", "Alex Banayan", "A young person learning from the world’s most successful people.", "r"],
[10, "The Ride of a Lifetime", "Robert Iger", "Rising from the bottom to run Disney.", ""],
[10, "Steve Jobs", "Walter Isaacson", "The vision, intensity and flaws of a builder.", ""],
[10, "The Autobiography of Malcolm X", "Malcolm X with Alex Haley", "Self-education that changed a life.", ""],
[11, "Generations", "Jean Twenge", "A data-driven portrait of each generation.", ""],
[11, "The Anxious Generation", "Jonathan Haidt", "Smartphones, childhood and mental health; a counter-view to weigh.", ""],
[11, "Gen Z @ Work", "David and Jonah Stillman", "The best-known book on GenZ at work, written for managers.", ""],
[11, "Zconomy", "Jason Dorsey and Denise Villa", "GenZ as consumers and as employees.", ""],
[11, "The Case Against Adolescence", "Robert Epstein", "Argues young people are more capable than society assumes.", ""],
[11, "The Sibling Society", "Robert Bly", "A society short of elders and mentors.", ""],
[12, "Meditations", "Marcus Aurelius", "Stoic self-discipline from the ruler of an empire.", ""],
[12, "Nicomachean Ethics", "Aristotle", "Character and virtue as habits.", ""],
[12, "The Republic", "Plato", "Justice, education and the examined life.", ""],
[12, "Apology", "Plato", "Socrates on knowing what you do not know.", ""],
[12, "Politics", "Aristotle", "How communities are organised and governed.", ""],
[12, "Poetics", "Aristotle", "The structure of a good story: beginning, middle, turning point.", ""],
[12, "The Consolation of Philosophy", "Boethius", "Staying grounded when fortune turns; written in prison.", "r"],
[12, "The Abolition of Man", "C.S. Lewis", "Why education must form character, not only minds.", "r"],
[12, "The Portable Nietzsche", "Friedrich Nietzsche", "Selected writings on values, will and meaning.", ""],
[12, "Critique of Pure Reason", "Immanuel Kant", "The limits and powers of human reason.", ""],
[12, "A Treatise of Human Nature", "David Hume", "An empirical inquiry into how people think and feel.", ""],
[12, "The City and Man", "Leo Strauss", "Reflections on political philosophy and the good life.", ""],
[12, "The Destiny of Man", "Nikolai Berdyaev", "A Christian existentialist on freedom and purpose.", ""],
[12, "The Postmodern Condition", "Jean-François Lyotard", "How knowledge changes in the information age.", ""],
[12, "The Passion of the Western Mind", "Richard Tarnas", "A sweep of Western ideas from the Greeks onward.", ""],
[12, "All Things Shining", "Hubert Dreyfus and Sean Kelly", "Finding meaning in a secular age through the classics.", ""],
[12, "The Two Greatest Ideas", "Linda Trinkaus Zagzebski", "How our grasp of the universe and of minds changed everything.", ""],
[12, "Cynical Theories", "Helen Pluckrose and James Lindsay", "A critical look at identity-focused scholarship.", ""],
[12, "A History of Philosophy: The Condensed Copleston", "Frederick Copleston", "A single-volume path through the history of philosophy.", ""],
[12, "The Book of Virtues", "William J. Bennett", "Stories and poems organised by virtue.", ""],
[12, "The Hero with a Thousand Faces", "Joseph Campbell", "The hero’s journey, with the mentor as a guide.", ""],
[12, "Thunder in the Sky", "Thomas Cleary (trans.)", "Classical Chinese strategy on power and persuasion.", ""],
[13, "Sufism: Its Essence and the Traits of Its People", "Al-Habib Umar bin Hafiz", "Character and inner discipline.", "r"],
[13, "Islam and Secularism", "Syed Muhammad Naquib al-Attas", "Knowledge, meaning and the purpose of education.", "r"],
[13, "The Way of Sufi Chivalry", "Al-Sulami", "Generosity, loyalty and service as a way of life.", ""],
[13, "On the Duties of Brotherhood", "Abu Hamid al-Ghazali", "The duties of friendship and loyalty.", ""],
[13, "On Disciplining the Soul", "Abu Hamid al-Ghazali", "Good character is trained through practice.", ""],
[13, "An-Nawawi’s Forty Hadith", "Yahya ibn Sharaf al-Nawawi", "Short foundations of conduct and intention.", ""],
[13, "Al-Shama’il al-Muhammadiyya", "Muhammad al-Tirmidhi", "A classical portrait of the Prophet’s character and manners.", ""],
[13, "Muhammad: His Life Based on the Earliest Sources", "Martin Lings", "A widely read biography drawn from early sources.", ""],
[13, "The Content of Character", "Al-Amin bin Ali Mazrui (trans. Hamza Yusuf)", "Short ethical sayings for daily conduct.", ""],
[13, "In Pursuit of Virtue", "Ibn Hazm", "Practical notes on people, friendship and fixing your faults.", ""],
[13, "The Essential Rumi", "Rumi (trans. Coleman Barks)", "Poems on feeling, longing and presence.", ""],
[13, "The Masnavi, Book One", "Rumi", "Rumi’s spiritual epic, opening with the reed flute.", ""],
[13, "The Masnavi, Book Two", "Rumi", "The second book of Rumi’s teaching stories.", ""],
[13, "The Lives of Man", "Imam Abdallah ibn Alawi al-Haddad", "Life seen as stages of a journey.", ""],
[13, "The Prophetic Invocations", "Imam Abdallah ibn Alawi al-Haddad", "A collection of prayers drawn from the Prophetic tradition.", ""],
[13, "The Book of Certainty", "Martin Lings", "A Sufi approach to faith, vision and certainty.", ""],
[13, "The Burda of al-Busiri", "Al-Busiri", "A celebrated poem in praise of the Prophet.", ""],
[13, "Tadhkaratul Auliya", "Attar of Nishapur", "Memorial of the saints: lives of early Sufi figures.", ""],
[13, "Sufi Sage of Arabia", "Mostafa al-Badawi", "The life and teaching of Imam al-Haddad.", ""],
[13, "The Tao of Islam", "Sachiko Murata", "Polarity and gender in Islamic thought.", ""],
[13, "An Introduction to Islamic Theology", "Ahmad ibn Mahmud al-Sabuni", "A classical summary of Islamic belief.", ""],
[13, "The Koran Interpreted", "A.J. Arberry", "A well-known English rendering of the Qur’an.", ""],
[13, "The Qur’an: A New Translation", "Thomas Cleary", "A modern English translation of the Qur’an.", ""],
[13, "The Signs Before Judgement Day", "Ibn Kathir", "A classical account of end-time signs in Islamic tradition.", ""],
[13, "Dajjal", "Ahmad Thomson", "On the Antichrist figure in Islamic teaching.", ""],
[13, "God and Logic in Islam", "John Walbridge", "The place of reason in classical Islamic thought.", ""],
[13, "Islam and the Destiny of Man", "Charles Le Gai Eaton", "An introduction to Islam and its view of human purpose.", ""],
[13, "Muhammad, the World-Changer", "Mohamad Jebara", "An intimate account of the Prophet’s life.", ""],
[13, "Muhammad", "Karen Armstrong", "A biography of the Prophet for general readers.", ""],
[13, "Muhammad: Prophet of Peace amid the Clash of Empires", "Juan R.I. Cole", "The Prophet’s life set against the empires of his time.", ""],
[13, "Arabic Thought and the Western World in the Golden Age of Islam", "Eugene A. Myers", "How Islamic scholarship fed Western thought.", ""],
[13, "The Cambridge History of Islam, Volume 1A", "P.M. Holt (ed.)", "A scholarly history of the early Islamic lands.", ""],
[13, "The Cambridge History of Islam, Volume 2B", "P.M. Holt (ed.)", "A scholarly history of Islamic society and culture.", ""],
[13, "Islam in Britain, 1558–1685", "Nabil Matar", "Early encounters between Britons and Muslims.", ""],
[13, "The Bible, the Qur’an, and Science", "Maurice Bucaille", "Compares scripture with modern science; widely debated.", ""],
[13, "Summa Theologica", "Thomas Aquinas", "The great medieval summary of Christian theology.", ""],
[13, "Treatise on Happiness", "Thomas Aquinas", "Why wealth, honour and power cannot fully satisfy.", ""],
[13, "On Christian Doctrine", "Augustine of Hippo", "How to read and teach scripture.", ""],
[13, "City of God", "Augustine of Hippo", "History and the two cities, earthly and heavenly.", ""],
[13, "Confessions", "Augustine of Hippo", "Honest self-examination from ambition to change.", ""],
[13, "The Screwtape Letters", "C.S. Lewis", "A senior devil’s advice shows how small compromises add up.", "r"],
[13, "The Monastic Rules", "Agatha Mary", "Classic rules of monastic life and discipline.", ""],
[13, "Putting Away Childish Things", "David A. Seamands", "A Christian guide to emotional maturity.", ""],
[13, "Losing Moses on the Freeway", "Chris Hedges", "The Ten Commandments read for modern life.", ""],
[13, "Faith and Wealth", "Justo L. González", "How early Christians thought about money and wealth.", ""],
[13, "Saints and Psychopaths", "William L. Hamilton", "A study of moral extremes in human character.", ""],
[13, "God Has a Communication Problem", "Chester A. Pennington", "Reflections on faith and how it is communicated.", ""],
[13, "The History and Future of Faith", "Robert S. Ellwood", "A broad look at religion’s past and where it may go.", ""],
[13, "Christianity and the World Religions", "Hans Küng", "A comparative study of faith traditions.", ""],
[13, "The World’s Religions", "Huston Smith", "The standard introduction to the major faiths.", ""],
[13, "The Revenge of God", "Gilles Kepel", "Why religion returned to public life.", ""],
[13, "God: The Evidence", "Patrick Glynn", "Argues modern science points toward belief.", ""],
[13, "Darwin’s Black Box", "Michael J. Behe", "A biochemist’s case for design; widely debated.", ""],
[13, "The Drama of Atheist Humanism", "Henri de Lubac", "A Catholic response to modern atheist thought.", ""],
[13, "A Jewish Theology", "Behrman House", "An introduction to Jewish belief.", ""],
[13, "Everyman’s Talmud", "Abraham Cohen", "A guide to rabbinic teaching.", ""],
[13, "The Dhammapada", "Anonymous (sayings of the Buddha)", "Short verses on training the mind.", ""],
[13, "The Blind Beekeeper", "Daniel Abdal-Hayy Moore", "Poems of faith and wonder.", ""],
[14, "Crime and Punishment", "Fyodor Dostoevsky", "What the belief that exceptional people can break the rules does to a man.", "r"],
[14, "Notes from Underground", "Fyodor Dostoevsky", "Overthinking that ends in paralysis.", "r"],
[14, "White Nights", "Fyodor Dostoevsky", "A dreamer who lives in his head instead of his life.", "r"],
[14, "The Brothers Karamazov", "Fyodor Dostoevsky", "Faith, doubt and responsibility in a family story.", ""],
[14, "Bartleby, the Scrivener", "Herman Melville", "A clerk’s quiet refusal: a 19th-century picture of quiet quitting.", "r"],
[14, "Pygmalion", "George Bernard Shaw", "How you are treated shapes who you become.", "r"],
[14, "Macbeth", "William Shakespeare", "Ambition without character destroys itself.", "r"],
[14, "The Merchant of Venice", "William Shakespeare", "A story about bonds, contracts and reading the fine print.", "r"],
[14, "Hamlet", "William Shakespeare", "Doubt, action and advice from a father to a son.", ""],
[14, "King Lear", "William Shakespeare", "What happens to leaders who reward flattery over truth.", ""],
[14, "Measure for Measure", "William Shakespeare", "Power, justice and mercy tested.", ""],
[14, "To Kill a Mockingbird", "Harper Lee", "Courage and seeing things from the other person’s side.", "r"],
[14, "The Hobbit", "J.R.R. Tolkien", "Growth starts outside the comfortable hole.", "r"],
[14, "Tartuffe", "Molière", "A portrait of a manipulator who performs virtue.", "r"],
[14, "The Fault in Our Stars", "John Green", "Meaning measured by depth, not length.", "r"],
[14, "The Book Thief", "Markus Zusak", "Words can build and destroy.", "r"],
[14, "The Prince and the Pauper", "Mark Twain", "Swap the clothes and the treatment changes.", ""],
[14, "A Tale of Two Cities", "Charles Dickens", "A story of extremes, sacrifice and renewal.", ""],
[14, "David Copperfield", "Charles Dickens", "A young man’s rise, with Micawber’s famous rule of money.", ""],
[14, "Les Misérables", "Victor Hugo", "Mercy, justice and the power of being trusted.", ""],
[14, "The Odyssey", "Homer", "Where the word mentor comes from.", ""],
[14, "The Iliad", "Homer", "Honour, anger and the cost of war.", ""],
[14, "War and Peace", "Leo Tolstoy", "History, patience and ordinary lives in war.", ""],
[14, "Brave New World", "Aldous Huxley", "A society kept content by pleasure and distraction.", ""],
[14, "Animal Farm", "George Orwell", "How power changes those who hold it.", ""],
[14, "Invisible Man", "Ralph Ellison", "Being seen as a stereotype instead of a person.", ""],
[14, "Sense and Sensibility", "Jane Austen", "Two sisters balance reason and feeling.", ""],
[14, "Moby-Dick", "Herman Melville", "Obsession that sinks the ship.", ""],
[14, "The Country of the Blind", "H.G. Wells", "Being right is not enough; you must bring people along.", ""],
[14, "The Catcher in the Rye", "J.D. Salinger", "A young outsider adrift without a guide.", ""],
[14, "Amazing Grace", "Mary Hoffman", "A picture book about refusing to be limited by a label.", ""],
[14, "The Bacchae", "Euripides", "What happens when reason denies a powerful force.", ""],
[14, "Paradise Lost", "John Milton", "Pride, choice and the cost of rebellion.", ""],
[14, "Don Quixote", "Miguel de Cervantes", "Idealism, delusion and the stories we live by.", ""],
[14, "Billy Budd, Sailor", "Herman Melville", "Innocence, authority and the limits of rules.", ""],
[14, "The Chronicles of Narnia", "C.S. Lewis", "Courage and character in a fantasy world.", ""],
[15, "Instruction of the Student", "Burhan al-Din al-Zarnuji", "A classical manual on how a student should learn and respect the teacher.", ""],
[15, "The Courage to Teach", "Parker J. Palmer", "Good teaching comes from the identity and integrity of the teacher.", "r"],
[15, "Pedagogy of the Oppressed", "Paulo Freire", "Learning as dialogue, not deposit.", ""],
[15, "Dumbing Us Down", "John Taylor Gatto", "A provocative critique of what school teaches by default.", ""],
[15, "The Lost Tools of Learning", "Dorothy L. Sayers", "Teach how to learn, not just what.", ""],
[15, "The Rise of Colleges", "George Makdisi", "How the madrasa shaped the licence to teach and the first universities.", ""],
[16, "The Muqaddimah", "Ibn Khaldun", "An early theory of history, economics and the generational cycle.", ""],
[16, "A Study of History", "Arnold J. Toynbee", "Civilisations rise by answering hard challenges.", ""],
[16, "Democracy in America", "Alexis de Tocqueville", "How a people organises itself without waiting to be told.", ""],
[16, "The Corporation", "Joel Bakan", "A critical view of how companies behave.", ""],
[16, "The Hidden Persuaders", "Vance Packard", "How advertisers work on hidden wants.", ""],
[16, "Past and Present", "Thomas Carlyle", "The dignity of work in a changing age.", ""],
[16, "The Hundred Years’ War on Palestine", "Rashid Khalidi", "A history of settler colonialism and resistance, 1917–2017.", ""]
];

var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var HUES=[205,160,28,350,222,190,142,265,310,18,45,175,240,95,0,330,68];
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function short(t){return t.split(':')[0].replace(/^The /,'The ')}
var room=document.getElementById('shelfRoom'),f=document.getElementById('shelfFilters'),cnt=document.getElementById('shelfCount'),sb=document.getElementById('shelfSearch');
/* ---------- hero spine strip ---------- */
var hs=document.getElementById('heroSpines');
if(hs){
  var pick=[0,16,32,40,56,73,86,98,110,130,150,172,190,205,215,225,12,60,100,140,180,210];
  hs.innerHTML=pick.map(function(ix,k){var b=B[ix%B.length],hh=hash(b[1]),H=HUES[b[0]]+(hh%30)-15;
    return '<i style="--c:hsl('+H+' 42% '+(26+hh%10)+'%);--h:'+(80+hh%80)+'px;--w:'+(22+hh%20)+'px;--d:'+(k*70)+'ms"></i>'}).join('');
}
if(!room)return;
room.innerHTML='<canvas id="shelfDust" aria-hidden="true"></canvas><div class="stack"></div><p class="empty" hidden>No books match that search yet. Try a shorter word.</p><div class="lampfx" aria-hidden="true"></div>';
var cv=document.getElementById('shelfDust');
/* ---------- model ---------- */
var items=B.map(function(b,ix){
  var hh=hash(b[1]+b[2]),len=Math.min(short(b[1]).length,34);
  return{ix:ix,shelf:b[0],title:b[1],author:b[2],why:b[3],flags:b[4],hh:hh,
    w:30+(len>22?10:len>14?5:0)+(hh%9),h:Math.round(150+len*3.5+(hh>>>5)%20),
    hue:HUES[b[0]]+((hh>>>3)%34)-17,sat:34+(hh>>>7)%24,lig:22+(hh>>>11)%12,
    lean:((hh>>>13)%11===0)?((hh%2)?-5:5):0,
    font:(hh>>>9)%3,start:b[4].indexOf('s')>=0,read:b[4].indexOf('r')>=0};
});
var state={cur:-1,read:false,q:''};
function match(it){
  if(state.cur>=0&&it.shelf!==state.cur)return false;
  if(state.read&&!it.read)return false;
  if(state.q&&(it.title+' '+it.author+' '+it.why+' '+SHELVES[it.shelf]).toLowerCase().indexOf(state.q)<0)return false;
  return true;
}
/* ---------- build ---------- */
var lastW=0,units=[];
function build(){
  var W=room.clientWidth-(room.clientWidth<700?96:138);lastW=room.clientWidth;
  var u=room.clientWidth<700?0.8:1,gap=3;
  var html='';
  SHELVES.forEach(function(name,si){
    var list=items.filter(function(it){return it.shelf===si});
    var rows=[],row=[],used=0;
    list.forEach(function(it){var w=it.w*u+gap;if(used+w>W&&row.length){rows.push(row);row=[];used=0}row.push(it);used+=w});
    if(row.length)rows.push(row);
    html+='<section class="unit" data-s="'+si+'" aria-label="'+esc(name)+'"><header class="plate"><span class="brass"><b>'+esc(name)+'</b><em>'+list.length+' books</em></span></header><div class="case">';
    rows.forEach(function(r,ri){
      html+='<div class="row">';
      r.forEach(function(it,k){
        var st='--w:'+it.w+';--h:'+it.h+';--c:hsl('+it.hue+' '+it.sat+'% '+it.lig+'%);--c2:hsl('+it.hue+' '+it.sat+'% '+(it.lig+9)+'%);--lean:'+it.lean+'deg;--d:'+((ri*6+k)*26)+'ms';
        html+='<button class="sp f'+it.font+(it.start?' st':'')+(it.read?' rd':'')+'" data-i="'+it.ix+'" style="'+st+'" aria-label="'+esc(it.title+' by '+it.author)+'"><span class="t">'+esc(short(it.title).replace(/’/g,"'"))+'</span><span class="a">'+esc(it.author.split(' and ')[0].split(' ').slice(-1)[0])+'</span>'+(it.start?'<span class="star">★</span>':'')+(it.read?'<span class="rib"></span>':'')+'</button>';
      });
      if(ri===rows.length-1&&si%3===0)html+='<span class="prop plant" aria-hidden="true"></span>';
      if(ri===rows.length-1&&si%3===1)html+='<span class="prop hourglass" aria-hidden="true"></span>';
      html+='<span class="plank"></span></div>';
    });
    html+='</div></section>';
  });
  room.querySelector('.stack').innerHTML=html;
  units=[].slice.call(room.querySelectorAll('.unit'));
  watch();apply();
}
var io;
function watch(){
  if(io)io.disconnect();
  if(!('IntersectionObserver' in window)||reduce){units.forEach(function(u){u.classList.add('in')});return}
  io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0.12,rootMargin:'0px 0px -6% 0px'});
  units.forEach(function(u){io.observe(u)});
}
function apply(){
  var n=0,per={};
  [].forEach.call(room.querySelectorAll('.sp'),function(el){
    var it=items[+el.getAttribute('data-i')],m=match(it);
    el.classList.toggle('dim',!m);el.tabIndex=m?0:-1;el.setAttribute('aria-hidden',m?'false':'true');
    if(m){n++;per[it.shelf]=(per[it.shelf]||0)+1}
  });
  units.forEach(function(u){var s=+u.getAttribute('data-s');var show=!!per[s];u.hidden=!show;if(show&&state.cur>=0)u.classList.add('in')});
  cnt.textContent=n+(n===1?' book':' books')+(n===items.length?'':' of '+items.length);
  var e=room.querySelector('.empty');if(e)e.hidden=n>0;
}
/* ---------- filters ---------- */
f.innerHTML='<button class="sf on" data-s="-1">All shelves</button>'+SHELVES.map(function(s,i){return'<button class="sf" data-s="'+i+'">'+esc(s)+'</button>'}).join('')+'<button class="sf read" data-r="1">Ishaq has read</button><button class="sf surprise" data-x="1">Surprise me ✦</button>';
f.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-x')){var pool=items.filter(match);if(pool.length)openBook(pool[Math.floor(Math.random()*pool.length)].ix);return}
  if(b.hasAttribute('data-r')){state.read=!state.read;b.classList.toggle('on',state.read)}
  else{state.cur=+b.getAttribute('data-s');[].forEach.call(f.querySelectorAll('.sf:not(.read):not(.surprise)'),function(x){x.classList.toggle('on',x===b)})}
  apply();
});
if(sb)sb.addEventListener('input',function(){state.q=sb.value.trim().toLowerCase();apply()});
/* ---------- tooltip + hover ---------- */
var tip=document.createElement('div');tip.className='sptip';tip.setAttribute('aria-hidden','true');document.body.appendChild(tip);
var canHover=window.matchMedia&&matchMedia('(hover:hover)').matches;
room.addEventListener('mouseover',function(e){if(!canHover)return;var b=e.target.closest('.sp');if(!b||b.classList.contains('dim')){tip.classList.remove('on');return}
  var it=items[+b.getAttribute('data-i')],r=b.getBoundingClientRect();tip.innerHTML='<b>'+esc(it.title)+'</b><span>'+esc(it.author)+'</span>';
  tip.style.left=Math.max(8,Math.min(innerWidth-8-tip.offsetWidth,r.left+r.width/2-tip.offsetWidth/2))+'px';tip.style.top=(r.top-tip.offsetHeight-20)+'px';tip.classList.add('on')});
room.addEventListener('mouseout',function(e){if(!e.relatedTarget||!e.relatedTarget.closest||!e.relatedTarget.closest('.sp'))tip.classList.remove('on')});
window.addEventListener('scroll',function(){tip.classList.remove('on')},{passive:true});
/* ---------- lamp light that follows the pointer ---------- */
var mx=0.5*innerWidth,my=300,tx=mx,ty=my,raf=0;
function lamp(){mx+=(tx-mx)*.12;my+=(ty-my)*.12;var r=room.getBoundingClientRect();room.style.setProperty('--mx',(mx-r.left)+'px');room.style.setProperty('--my',(my-r.top)+'px');if(Math.abs(tx-mx)+Math.abs(ty-my)>.5)raf=requestAnimationFrame(lamp);else raf=0}
if(!reduce){room.addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;if(!raf)raf=requestAnimationFrame(lamp)});window.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(lamp)},{passive:true})}
/* ---------- dust motes ---------- */
if(cv&&!reduce){
  var cx=cv.getContext('2d'),P=[],vis=false,run=0;
  function size(){cv.width=room.clientWidth;cv.height=Math.min(room.clientHeight,3000)}
  function seed(){P=[];for(var i=0;i<46;i++)P.push({x:Math.random(),y:Math.random(),r:Math.random()*1.6+.4,s:Math.random()*.25+.05,d:Math.random()*6.28,a:Math.random()*.4+.15})}
  function tick(t){if(!vis){run=0;return}cx.clearRect(0,0,cv.width,cv.height);
    var sy=Math.max(0,-room.getBoundingClientRect().top),vh=innerHeight;
    P.forEach(function(p){p.d+=.004;p.y-=p.s/900;if(p.y<0)p.y=1;var x=(p.x+Math.sin(p.d)*.02)*cv.width,y=sy+((p.y*1.2)%1)*vh;
      cx.beginPath();cx.fillStyle='rgba(255,226,160,'+p.a+')';cx.shadowColor='rgba(255,210,120,.8)';cx.shadowBlur=6;cx.arc(x,y,p.r,0,6.28);cx.fill()});
    run=requestAnimationFrame(tick)}
  size();seed();window.addEventListener('resize',size);
  new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis&&!run)run=requestAnimationFrame(tick)}).observe(room);
}
/* ---------- the book: pull out, open ---------- */
var modal=document.createElement('div');modal.className='bkm';modal.hidden=true;modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Book details');
modal.innerHTML='<div class="bkm-bg"></div><div class="bkm-stage"><div class="bkm-book"><div class="bkm-page"><div class="pg-in"></div></div><div class="bkm-cover"><div class="cv-front"></div><div class="cv-back"></div></div></div></div><button class="bkm-x" aria-label="Close">&times;</button><button class="bkm-n prev" aria-label="Previous book">&lsaquo;</button><button class="bkm-n next" aria-label="Next book">&rsaquo;</button>';
document.body.appendChild(modal);
var curIx=-1,opener=null,openT=0;
function vis_(){return items.filter(match)}
function openBook(ix,el){
  var it=items[ix];curIx=ix;opener=el||room.querySelector('.sp[data-i="'+ix+'"]');
  var c='hsl('+it.hue+' '+it.sat+'% '+it.lig+'%)',c2='hsl('+it.hue+' '+(it.sat+6)+'% '+(it.lig+11)+'%)';
  modal.style.setProperty('--c',c);modal.style.setProperty('--c2',c2);
  modal.querySelector('.cv-front').innerHTML='<div class="ft"><span>'+esc(SHELVES[it.shelf])+'</span></div><h3 class="f'+it.font+'">'+esc(it.title)+'</h3><p>'+esc(it.author)+'</p>'+(it.start?'<div class="seal">Start<br>here</div>':'')+'<div class="ln"></div>';
  modal.querySelector('.cv-back').innerHTML='<div class="endp"><b>The GenZ Executive Bookshelf</b><span>'+esc(SHELVES[it.shelf])+'</span>'+(it.read?'<em>Ishaq has read this</em>':'')+'</div>';
  modal.querySelector('.pg-in').innerHTML='<span class="kick2">'+esc(SHELVES[it.shelf])+'</span><h3>'+esc(it.title)+'</h3><p class="au">'+esc(it.author)+'</p><p class="why">'+esc(it.why)+'</p><div class="tags">'+(it.start?'<span class="tg st">Start here</span>':'')+(it.read?'<span class="tg rd">Ishaq has read</span>':'')+'</div>'+(it.start?'<div class="mem"><b>Members get the takeaway.</b> A one-page summary and one move to try at work.<a class="btn blue sm" href="#join" data-close="1">Get it free</a></div>':'<div class="mem soft">Find it at your library or favourite bookshop.</div>')+'<div class="pgnav"><button data-d="-1">&lsaquo; Previous</button><button data-d="1">Next &rsaquo;</button></div>';
  modal.hidden=false;modal.classList.remove('open','in');
  document.body.classList.add('bkm-lock');
  if(opener&&!reduce){var r=opener.getBoundingClientRect();modal.style.setProperty('--ox',(r.left+r.width/2-innerWidth/2)+'px');modal.style.setProperty('--oy',(r.top+r.height/2-innerHeight/2)+'px')}else{modal.style.setProperty('--ox','0px');modal.style.setProperty('--oy','0px')}
  void modal.offsetWidth;modal.classList.add('in');
  clearTimeout(openT);openT=setTimeout(function(){modal.classList.add('open')},reduce?0:950);
  modal.querySelector('.bkm-x').focus({preventScroll:true});
}
function closeBook(){clearTimeout(openT);modal.classList.remove('open','in');document.body.classList.remove('bkm-lock');setTimeout(function(){modal.hidden=true},reduce?0:380);if(opener)opener.focus({preventScroll:true})}
function step(d){var v=vis_();if(!v.length)return;var k=v.findIndex(function(x){return x.ix===curIx});k=(k+d+v.length)%v.length;var op=opener;modal.classList.remove('open');clearTimeout(openT);openBook(v[k].ix,room.querySelector('.sp[data-i="'+v[k].ix+'"]'))}
room.addEventListener('click',function(e){var b=e.target.closest('.sp');if(b&&!b.classList.contains('dim'))openBook(+b.getAttribute('data-i'),b)});
modal.addEventListener('click',function(e){
  var t=e.target;
  if(t.closest('.bkm-x')||t.classList.contains('bkm-bg')||t.classList.contains('bkm-stage')||t.closest('[data-close]'))return closeBook();
  if(t.closest('.bkm-n'))return step(t.closest('.bkm-n').classList.contains('prev')?-1:1);
  var d=t.closest('[data-d]');if(d)return step(+d.getAttribute('data-d'));
  if(t.closest('.bkm-cover')){clearTimeout(openT);modal.classList.toggle('open')}
});
document.addEventListener('keydown',function(e){if(modal.hidden)return;if(e.key==='Escape')closeBook();else if(e.key==='ArrowRight')step(1);else if(e.key==='ArrowLeft')step(-1);else if(e.key==='Tab'){var fs=[].slice.call(modal.querySelectorAll('button,a[href]')).filter(function(x){return x.offsetParent});var i=fs.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();fs[fs.length-1].focus()}else if(!e.shiftKey&&i===fs.length-1){e.preventDefault();fs[0].focus()}}});
/* ---------- boot ---------- */
build();
var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){if(Math.abs(room.clientWidth-lastW)>40){build()}},180)});
})();
