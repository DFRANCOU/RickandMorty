



<<<<<<< HEAD
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
=======

// function getCharacters(gender, status, prev, next) {
//     const results = fetch(
//         `https://rickandmortyapi.com/api/character?gender=${gender || ""}&status=${status || ""}`);

//     results
//           .then(response => response.json())
//           .then(data => { 
//             //  done(data)
            
           
//               data.results.forEach(characters => {
              
//                 const article = document.createRange().createContextualFragment(/*html*/`
//                 <article> 
//                   <div class="cards">
//                     <h2>${characters.name}</h2>
//                     <div class="charaters">
//                      <img src ="${characters.image}" class="charatersIma">
//                     </div>
//                    <span id="Gender">${characters.gender}</span>
//                    <span id="aboutChar">${characters.species}</span>
//                   </div>  
//                 </article> 
//                 `);
>>>>>>> 29dae9f97aa2b1407465e5e1fcc1030589d2d4bd
          
//                 const main = document.querySelector("main");
                
//                 main.append(article);
          
//              });

//               const pagination = (info => { 
//               let html = `<li><a href="" onclick="getCharacters('${info.prev}')"> previous </a></li>`
//               html += `<li><a href=""onclick="getCharacters('${info.next}')"> next </a></li>`
//               document.getElementById("pagination").innerHTML = html

      
//             });
                      
//           });
      
// }

// const params = new URLSearchParams(window.location.search);
// getCharacters(params.get("gender"), params.get("status"));

<<<<<<< HEAD





function pag(done){
  const info = fetch(
    `https://rickandmortyapi.com/api/character/?page=1`);
  info
     .then(response = response.json())
     .then(data => {
       done(data)
=======
// const pagination = (info) => { 
//   let html = `<li><a href="" onclick="getCharacters('${info.prev}')"> previous </a></li>`
//   html += `<li><a href=""onclick="getCharacters('${info.next}')"> next </a></li>`
//   document.getElementById("pagination").innerHTML = html
// }
>>>>>>> 29dae9f97aa2b1407465e5e1fcc1030589d2d4bd


 

// // https://www.youtube.com/watch?v=S8YV9YfK9nI&t=617s