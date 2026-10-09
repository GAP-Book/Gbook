const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
$('#year').textContent = new Date().getFullYear();

const bookInfo = {
  last:{title:'The Last Message',genre:'Psychological Mystery • English',description:'A mysterious final message leads to an old, isolated mansion in Mumbai. The story explores memory, trust and the possibility that the past is not finished with us.',cover:'linear-gradient(145deg,#201a4a,#47348e 60%,#211d51)'},
  shadow:{title:'The Shadow of Truth',genre:'Romantic Suspense • English',description:'A Mumbai software engineer, his fiancée and an investigator become connected by a secret project. A romantic suspense story about identity, trust and hidden motives.',cover:'linear-gradient(140deg,#f0caa7,#e5b6aa 45%,#463d6d)'},
  start:{title:'Nayi Shuruaat',genre:'Self-improvement • Hindi',description:'A planned Hindi reading project about small habits, confidence, a calmer mind and practical ways to begin again, one step at a time.',cover:'linear-gradient(160deg,#ffc875,#ffdfb3 50%,#f5a8a8)'}
};
$$('.details-btn').forEach(btn => btn.addEventListener('click', () => {
  const b=bookInfo[btn.dataset.book]; if(!b) return;
  $('#modalTitle').textContent=b.title; $('#modalGenre').textContent=b.genre; $('#modalDescription').textContent=b.description; $('#modalCover').style.background=b.cover;
  $('#bookModal').hidden=false; $('#modalClose').focus();
}));
function closeModal(){ $('#bookModal').hidden=true; }
$('#modalClose').addEventListener('click',closeModal);
$('#bookModal').addEventListener('click',e=>{if(e.target===$('#bookModal')) closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
$('#modalRead').addEventListener('click',()=>{closeModal();location.hash='#books';});

function filterBooks(){
 const q=$('#searchInput').value.trim().toLowerCase(), genre=$('#genreFilter').value, language=$('#languageFilter').value;
 let visible=0;
 $$('.book-card').forEach(card=>{
  const matchText=(card.dataset.title+' '+card.dataset.genre+' '+card.dataset.language+' '+card.textContent).toLowerCase().includes(q);
  const show=(matchText&&(genre==='all'||card.dataset.genre===genre)&&(language==='all'||card.dataset.language===language));
  card.hidden=!show;if(show)visible++;
 });
 $('#emptyState').hidden=visible>0;
}
$('#searchInput').addEventListener('input',filterBooks);
$('#genreFilter').addEventListener('change',filterBooks);
$('#languageFilter').addEventListener('change',filterBooks);

$('#themeBtn').addEventListener('click',()=>{
 document.body.classList.toggle('dark');
 $('#themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾';
});
$('#menuBtn').addEventListener('click',()=>{
 const nav=$('.desktop-nav');
 const open=nav.style.display==='flex';
 nav.style.display=open?'none':'flex';
 nav.style.position='absolute';nav.style.top='68px';nav.style.left='0';nav.style.right='0';
 nav.style.padding='18px 22px';nav.style.background='var(--surface)';nav.style.borderBottom='1px solid var(--line)';
 nav.style.flexDirection='column';nav.style.gap='17px';
});
const translations={
 en:{navHome:'Home',navExplore:'Explore Books',navFree:'Free Reading',navAbout:'About',eyebrow:'A LITTLE WORLD OF STORIES',heroTitle1:'Every book opens',heroTitle2:'a new world.',heroText:'Discover mysteries, heartfelt stories and ideas that stay with you — written by Ganesh Anil Patil.',explore:'Explore Books',readFree:'Read for free →',heroFoot:'Stories in Hindi & English',noAccount:'No account needed',strip1:'Find your next favourite',strip2:'Read at your own pace',strip3:'Stories made to connect',curated:"THE AUTHOR'S SHELF",booksTitle:'Books to get lost in.',booksSub:'Choose a mood, pick a story, and settle in.',viewAll:'View all books ↗',searchPlaceholder:'Search title, author, genre…',freeEyebrow:'YOUR NEXT CHAPTER STARTS HERE',freeTitle:'Take a little reading break.',freeText:'Explore free samples and selected chapters directly on the website — no account required.',browseBooks:'Browse books',aboutEyebrow:'MEET THE AUTHOR',aboutTitle:'Stories, ideas & a little wonder.',aboutText:'Ganesh Anil Patil writes across genres, bringing together mystery, emotion and practical ideas. This space is a home for current books, free reading and updates from the writing desk.',contactAuthor:'Contact the author →',stat1:'Languages planned',stat2:'Worlds to explore',stayInTouch:'STAY IN THE LOOP',newsletterTitle:'A note when something new arrives.',newsletterText:'Newsletter signup will be connected after the backend is configured.',notifyMe:'Keep me posted ↗',footerText:'Stories worth your time. Words that stay with you.'},
 hi:{navHome:'होम',navExplore:'किताबें देखें',navFree:'मुफ़्त पढ़ें',navAbout:'लेखक',eyebrow:'कहानियों की एक छोटी-सी दुनिया',heroTitle1:'हर किताब खोलती है',heroTitle2:'एक नई दुनिया।',heroText:'रहस्य, दिल को छू लेने वाली कहानियाँ और ऐसे विचार खोजें जो आपके साथ रहें — लेखक गणेश अनिल पाटिल की कलम से।',explore:'किताबें देखें',readFree:'मुफ़्त पढ़ें →',heroFoot:'हिंदी और अंग्रेज़ी में कहानियाँ',noAccount:'अकाउंट की ज़रूरत नहीं',strip1:'अपनी अगली पसंद खोजें',strip2:'अपनी गति से पढ़ें',strip3:'जुड़ाव बनाने वाली कहानियाँ',curated:'लेखक की किताबें',booksTitle:'कहानियों में खो जाइए।',booksSub:'अपना मूड चुनें, कहानी चुनें और आराम से पढ़ें।',viewAll:'सभी किताबें देखें ↗',searchPlaceholder:'शीर्षक, लेखक या शैली खोजें…',freeEyebrow:'आपका अगला अध्याय यहाँ शुरू होता है',freeTitle:'थोड़ा पढ़ने का विराम लें।',freeText:'वेबसाइट पर ही मुफ़्त नमूने और चुने हुए अध्याय पढ़ें — अकाउंट की ज़रूरत नहीं।',browseBooks:'किताबें देखें',aboutEyebrow:'लेखक से मिलें',aboutTitle:'कहानियाँ, विचार और थोड़ा-सा आश्चर्य।',aboutText:'गणेश अनिल पाटिल रहस्य, भावनाओं और व्यावहारिक विचारों को जोड़ते हुए अलग-अलग विधाओं में लिखते हैं। यह जगह उनकी किताबों, मुफ़्त पढ़ने और लेखन से जुड़े नए अपडेट के लिए है।',contactAuthor:'लेखक से संपर्क करें →',stat1:'योजनाबद्ध भाषाएँ',stat2:'खोजने के लिए दुनिया',stayInTouch:'जुड़े रहें',newsletterTitle:'कुछ नया आए तो एक संदेश।',newsletterText:'बैकएंड सेट होने के बाद न्यूज़लेटर जोड़ा जाएगा।',notifyMe:'अपडेट पाएँ ↗',footerText:'ऐसी कहानियाँ जो आपका समय सार्थक बनाएँ।'}
};
let language='en';
$('#languageBtn').addEventListener('click',()=>{
 language=language==='en'?'hi':'en';const t=translations[language];
 $$('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[k])el.textContent=t[k]});
 $$('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(t[k])el.placeholder=t[k]});
 $('#languageBtn').textContent=language==='en'?'हिंदी':'English';
 document.documentElement.lang=language==='hi'?'hi':'en';
});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();$('#newsletterMessage').textContent='Demo only: newsletter backend is not connected yet.';});
