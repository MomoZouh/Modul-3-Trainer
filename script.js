const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const categoryGrid = document.getElementById("categoryGrid");
const backHome = document.getElementById("backHome");
const brandHome = document.getElementById("brandHome");

const icons = ["🌐","🧩","🖥️","📡","🛡️","🎯","🔗","📚"];
const categoryDescriptions = {
  "Netzwerk-Grundlagen":"Knoten, Links, Endsysteme und Zwischensysteme",
  "Client-Server & P2P":"Architekturen, Rollen und Vor- und Nachteile",
  "Server & Netzwerktypen":"Server, LAN, SOHO, CAN, WAN und Datacenter",
  "Appliances & Dienste":"Switch, Router, Firewall, DHCP, DNS, VPN und QoS",
  "OSI-Grundlagen":"Die sieben OSI-Schichten und ihre Aufgaben",
  "Kapselung & PDU":"Header, Nutzlast, Trailer und PDU-Bezeichnungen",
  "Adressierung & Geräte":"MAC, IP und Aufgaben von Switches und Routern",
  "Praxis & Protokolle":"Webseitenaufruf, DNS, HTTP/HTTPS, TCP und IP",
  "TCP/IP & OSI":"Zuordnung und Unterschiede der Modelle",
  "Fehlersuche & Sicherheit":"Schichtweise Fehlersuche und Sicherheitsgeräte"
};

const categories = [...new Set(quizData.map(x => x.cat))];

function makeCategoryCard(cat, index){
  const count = quizData.filter(x => x.cat === cat).length;
  const el = document.createElement("div");
  el.className = "category";
  el.innerHTML = `<div class="icon">${icons[index % icons.length]}</div>
    <b>${cat}</b>
    <small>${categoryDescriptions[cat] || "Fragen aus deinen Präsentationen"}</small>
    <button data-cat="${cat}">${count} ${count === 1 ? "Frage" : "Fragen"} starten</button>`;
  return el;
}

function renderCategories(){
  categoryGrid.innerHTML = "";
  categories.forEach((cat,i) => categoryGrid.appendChild(makeCategoryCard(cat,i)));
  categoryGrid.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => startQuiz(btn.dataset.cat));
  });
}
renderCategories();

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

let currentCategory = "";
let quizQuestions = [];
let current = 0;
let score = 0;
let answered = false;

function startQuiz(category){
  currentCategory = category;
  quizQuestions = shuffle(quizData.filter(x => x.cat === category)).map(item => {
    const options = item.a.map((text, index) => ({text, correct:index === item.c}));
    return {...item, options: shuffle(options)};
  });
  current = 0;
  score = 0;
  showScreen("quiz");
  renderQuestion();
}

function showScreen(name){
  [home,quiz,result].forEach(s => s.classList.add("hidden"));
  document.getElementById(name).classList.remove("hidden");
  backHome.classList.toggle("hidden", name === "home");
  window.scrollTo({top:0,behavior:"instant"});
}

function renderQuestion(){
  answered = false;
  const item = quizQuestions[current];
  document.getElementById("quizCategory").textContent = currentCategory;
  document.getElementById("counter").textContent = `Frage ${current+1} von ${quizQuestions.length}`;
  document.getElementById("score").textContent = `${score} / ${current}`;
  document.getElementById("qNumber").textContent = String(current+1).padStart(2,"0");
  document.getElementById("question").textContent = item.q;
  document.getElementById("progressBar").style.width = `${((current)/quizQuestions.length)*100}%`;
  const answers = document.getElementById("answers");
  answers.innerHTML = "";
  document.getElementById("feedback").className = "feedback hidden";
  document.getElementById("feedback").textContent = "";
  document.getElementById("next").disabled = true;

  item.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="answer";
    btn.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${opt.text}</span>`;
    btn.addEventListener("click",()=>selectAnswer(i));
    answers.appendChild(btn);
  });
}

function selectAnswer(index){
  if(answered) return;
  answered = true;
  const item = quizQuestions[current];
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach((b,i)=>{
    b.classList.add("locked");
    if(item.options[i].correct) b.classList.add("correct");
    if(i === index && !item.options[i].correct) b.classList.add("wrong");
  });
  const isCorrect = item.options[index].correct;
  if(isCorrect) score++;
  const feedback=document.getElementById("feedback");
  feedback.className=`feedback ${isCorrect ? "ok" : "bad"}`;
  feedback.textContent=(isCorrect ? "Richtig! " : "Nicht ganz. ") + item.e;
  document.getElementById("score").textContent=`${score} / ${current+1}`;
  document.getElementById("next").disabled=false;
  document.getElementById("progressBar").style.width=`${((current+1)/quizQuestions.length)*100}%`;
}

document.getElementById("next").addEventListener("click",()=>{
  if(!answered) return;
  if(current < quizQuestions.length-1){
    current++;
    renderQuestion();
  }else{
    finishQuiz();
  }
});

function finishQuiz(){
  const total=quizQuestions.length;
  const percent=Math.round((score/total)*100);
  document.getElementById("percent").textContent=`${percent}%`;
  document.getElementById("right").textContent=score;
  document.getElementById("wrong").textContent=total-score;
  document.getElementById("total").textContent=total;
  document.getElementById("resultHeadline").textContent =
    percent >= 90 ? "Sehr stark!" :
    percent >= 75 ? "Gut gemacht!" :
    percent >= 50 ? "Schon ganz gut!" : "Weiter üben!";
  document.getElementById("resultDescription").textContent =
    `Du hast ${score} von ${total} Fragen richtig beantwortet.`;
  showScreen("result");
}

document.getElementById("again").addEventListener("click",()=>startQuiz(currentCategory));
document.getElementById("choose").addEventListener("click",()=>showScreen("home"));
backHome.addEventListener("click",()=>showScreen("home"));
brandHome.addEventListener("click",(e)=>{e.preventDefault();showScreen("home")});
