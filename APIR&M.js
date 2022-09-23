


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






function pag(done){
  const info = fetch(
    `https://rickandmortyapi.com/api/character/?page=1`);
  info
     .then(response = response.json())
     .then(data => {
       done(data)

   data.info.forEach(pagination => {
     const div = document.createRange().createContextualFragment(/*html*/`
     <div>
       <button class="buttonPn" class="prev">${pagination.next} < </button>
       <button class="buttonPn" class="next">${pagination.prev} > </button>
     </div>
     `);

     const pag = document.querySelector(".next_prev");

     pag.append(div);

   });
 });
}  