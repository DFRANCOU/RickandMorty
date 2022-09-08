window.addEventListener("DOMContentLoaded", getCharacters)

function getCharacters(gender, status,) {
    const results = fetch(
        `https://rickandmortyapi.com/api/character?gender=${gender || ""}&status=${status || ""}`);
    results
          .then(response => response.json())
          .then(data => { 
            //  done(data)
            
            data.results.forEach(characters => {

                const article = document.createRange().createContextualFragment(/*html*/`
                <article> 
                  <div class="cards">
                    <h2>${characters.name}</h2>
                    <div class="charaters">
                     <img src ="${characters.image}" class="charatersIma">
                    </div>
                   <span id="Gender">${characters.gender}</span>
                   <span id="aboutChar">${characters.species}</span>
                  </div>  
                </article> 
                `);
          
                const main = document.querySelector("main");
                
                main.append(article);
          
             });
          });

}

const params = new URLSearchParams(window.location.search)
getCharacters(params.get("gender"), params.get("status"));

const buttonP = document.querySelector(".prev")
const buttonN = document.querySelector(".next")

buttonP.addEventListener("click", pagination)
buttonN.addEventListener("click", pagination)


function pagination (done) {
  
  const info = fetch(
    "https://rickandmortyapi.com/api/character/?page=2")
  info
        .then(response => response.json())
        .then(data => { 
           done(data)})
}

console.log(pagination)