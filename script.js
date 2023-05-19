const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`; 
const input = document.getElementById(`textarea`);
const btn = document.querySelector(".btn")
const TranslationArea = document.querySelector(".TranslationArea")
function getdata(){
  
  fetch(`${url}${input.value}`)
  .then((res)=>res.json())
  .then((val)=>{
    console.log( val)
    console.log( val[0].word)
    TranslationArea.innerHTML = `
     <div class="word">
          <h1 id="heading">${val[0].word}</h1>
          <p id="wordPronounce">${val[0].phonetics[1].text}</p>
        </div>
        <p id="partOfSpeech">
          ${val[0].meanings[0].partOfSpeech}
        </p>
        <div class="synonyms">
          ${val[0].meanings[0].synonyms[0]}
          
        </div>
        <div class="meaning">
          ${val[0].meanings[0].definitions[0].definition}
          
        </div>
    `
  });
}

btn.addEventListener("click",getdata)