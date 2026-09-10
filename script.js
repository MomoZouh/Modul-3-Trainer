const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const categoryGrid = document.getElementById("categoryGrid");
const backHome = document.getElementById("backHome");
const brandHome = document.getElementById("brandHome");

const eduBites = [...new Set(quizData.map(x => x.eduBite || "eduBite 1"))];

const icons = ["📘","📗","📙","📕","📓","📔"];

function getWrongQuestions(){
  try{
    return JSON.parse(localStorage.getItem("wrongQuestions") || "[]");
  }catch(e){
    return [];
  }
}

function saveWrongQuestions(ids){
  localStorage.setItem("wrongQuestions", JSON.stringify([...new Set(ids)]));
}

function getWrongCount(){
  return getWrongQuestions().filter(id => quizData.some(q => q.id === id)).length;
}

function makeCategoryCard(title, description, count, action, icon){
  const el = document.createElement("div");
  el.className = "category";
  el.innerHTML = `<div class="icon">${icon}</div>
    <b>${title}</b>
    <small>${description}</small>
    <button>${count} ${count === 1 ? "Frage" : "Fragen"} starten</button>`;
  el.querySelector("button").addEventListener("click", action);
  return el;
}

function renderCategories(){
  categoryGrid.innerHTML = "";

  eduBites.forEach((bite, i) => {
    const count = quizData.filter(q => (q.eduBite || "eduBite 1") === bite).length;
    categoryGrid.appendChild(
      makeCategoryCard(
        bite,
        "Alle Fragen aus diesem eduBite",
        count,
        () => startQuiz(bite, "edubite"),
        icons[i % icons.length]
      )
    );
  });

  const allCount = quizData.length;
  categoryGrid.appendChild(
    makeCategoryCard(
      "🎲 Alle Fragen – Zufall",
      "Alle Fragen aus allen eduBites komplett gemischt",
      allCount,
      startRandomQuiz,
      "🎲"
    )
  );

  const wrongCount = getWrongCount();
  const wrongCard = makeCategoryCard(
    "❌ Meine falschen Fragen",
    "Fragen, die du zuletzt falsch beantwortet hast",
    wrongCount,
    startWrongQuiz,
    "❌"
  );
  wrongCard.id = "wrongCategory";
  categoryGrid.appendChild(wrongCard);
}

renderCategories();

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

let currentCategory = "";
let currentMode = "";
let quizQuestions = [];
let current = 0;
let score = 0;
let answered = false;
let wrongIdsThisQuiz = [];

function prepareQuestions(items){
  return shuffle(items).map(item => {
    const options = item.a.map((text,index)=>({
      text,
      correct:index === item.c
    }));
    return {...item, options:shuffle(options)};
  });
}

function startQuiz(category, mode="edubite"){
  currentCategory = category;
  currentMode = mode;
  const items = quizData.filter(x =>
    mode === "edubite"
      ? (x.eduBite || "eduBite 1") === category
      : x.cat === category
  );
  quizQuestions = prepareQuestions(items);
  current = 0;
  score = 0;
  wrongIdsThisQuiz = [];
  showScreen("quiz");
  renderQuestion();
}

function startRandomQuiz(){
  currentCategory = "Alle Fragen · Zufall";
  currentMode = "random";
  quizQuestions = prepareQuestions(quizData);
  current = 0;
  score = 0;
  wrongIdsThisQuiz = [];
  showScreen("quiz");
  renderQuestion();
}

function startWrongQuiz(){
  const ids = getWrongQuestions();
  const items = ids
    .map(id => quizData.find(q => q.id === id))
    .filter(Boolean);

  if(items.length === 0){
    alert("Du hast aktuell keine falschen Fragen gespeichert.");
    return;
  }

  currentCategory = "Meine falschen Fragen";
  currentMode = "wrong";
  quizQuestions = prepareQuestions(items);
  current = 0;
  score = 0;
  wrongIdsThisQuiz = [];
  showScreen("quiz");
  renderQuestion();
}

function showScreen(name){
  [home,quiz,result].forEach(s=>s.classList.add("hidden"));
  document.getElementById(name).classList.remove("hidden");
  backHome.classList.toggle("hidden",name==="home");
  window.scrollTo({top:0,behavior:"instant"});
}

function renderQuestion(){
  answered=false;
  const item=quizQuestions[current];

  const label = currentMode === "random"
    ? (item.eduBite || "eduBite 1")
    : currentCategory;

  document.getElementById("quizCategory").textContent=label;
  document.getElementById("counter").textContent=`Frage ${current+1} von ${quizQuestions.length}`;
  document.getElementById("score").textContent=`${score} / ${current}`;
  document.getElementById("qNumber").textContent=String(current+1).padStart(2,"0");
  document.getElementById("question").textContent=item.q;
  document.getElementById("progressBar").style.width=`${(current/quizQuestions.length)*100}%`;

  const answers=document.getElementById("answers");
  answers.innerHTML="";
  document.getElementById("feedback").className="feedback hidden";
  document.getElementById("feedback").textContent="";
  document.getElementById("next").disabled=true;

  item.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="answer";
    btn.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${opt.text}</span>`;
    btn.addEventListener("click",()=>selectAnswer(i));
    answers.appendChild(btn);
  });
}

function selectAnswer(index){
  if(answered)return;
  answered=true;

  const item=quizQuestions[current];
  const buttons=[...document.querySelectorAll(".answer")];

  buttons.forEach((b,i)=>{
    b.classList.add("locked");
    if(item.options[i].correct)b.classList.add("correct");
    if(i===index && !item.options[i].correct)b.classList.add("wrong");
  });

  const isCorrect=item.options[index].correct;

  if(isCorrect){
    score++;
  }else{
    wrongIdsThisQuiz.push(item.id);
  }

  const feedback=document.getElementById("feedback");
  feedback.className=`feedback ${isCorrect ? "ok" : "bad"}`;
  feedback.textContent=(isCorrect ? "Richtig! " : "Nicht ganz. ")+item.e;

  document.getElementById("score").textContent=`${score} / ${current+1}`;
  document.getElementById("next").disabled=false;
  document.getElementById("progressBar").style.width=`${((current+1)/quizQuestions.length)*100}%`;
}

document.getElementById("next").addEventListener("click",()=>{
  if(!answered)return;

  if(current < quizQuestions.length-1){
    current++;
    renderQuestion();
  }else{
    finishQuiz();
  }
});

function finishQuiz(){
  // Update the persistent wrong-question list:
  // - questions answered incorrectly in this quiz are added
  // - questions answered correctly in the "wrong questions" quiz are removed
  const existing = new Set(getWrongQuestions());

  if(currentMode === "wrong"){
    const answeredIds = new Set(quizQuestions.slice(0,current+1).map(q=>q.id));
    const stillWrong = new Set(wrongIdsThisQuiz);
    answeredIds.forEach(id=>{
      if(!stillWrong.has(id)) existing.delete(id);
    });
  }else{
    wrongIdsThisQuiz.forEach(id=>existing.add(id));
  }

  saveWrongQuestions([...existing]);
  renderCategories();

  const total=quizQuestions.length;
  const percent=Math.round((score/total)*100);

  document.getElementById("percent").textContent=`${percent}%`;
  document.getElementById("right").textContent=score;
  document.getElementById("wrong").textContent=total-score;
  document.getElementById("total").textContent=total;

  document.getElementById("resultHeadline").textContent =
    percent>=90 ? "Sehr stark!" :
    percent>=75 ? "Gut gemacht!" :
    percent>=50 ? "Schon ganz gut!" : "Weiter üben!";

  document.getElementById("resultDescription").textContent =
    `Du hast ${score} von ${total} Fragen richtig beantwortet.`;

  showScreen("result");
}

document.getElementById("again").addEventListener("click",()=>{
  if(currentMode === "random"){
    startRandomQuiz();
  }else if(currentMode === "wrong"){
    startWrongQuiz();
  }else{
    startQuiz(currentCategory, "edubite");
  }
});

document.getElementById("choose").addEventListener("click",()=>showScreen("home"));
backHome.addEventListener("click",()=>showScreen("home"));
brandHome.addEventListener("click",(e)=>{
  e.preventDefault();
  showScreen("home");
});
