

// const RandMapi = 'https://rickandmortyapi.com/api/character/';

// getCharacters = (RandMapiURL) => {
//           fetch(RandMapiURL)
//           .then(res => res.json())
//           .then(data => {
//              characters(data),
//              pagination(data.info)
//           })
              
  
//       .catch(error => { console.error('error: ', error)})
// }

// const characters = (data) => {

//         data.results.forEach(characters => {
//         const article = document.createRange().createContextualFragment(/*html*/`
//             <article> 
//               <div class="cards">
//                 <h2>${characters.name}</h2>
//                 <div class="charaters">
//                   <img src ="${characters.image}" class="charatersIma">
//                 </div>
//                 <span id="Gender">${characters.gender}</span>
//                 <span id="aboutChar">${characters.species}</span>
//               </div>  
//             </article> 
//             `);
                  
//             const main = document.querySelector("main");
                        
//             main.append(article);
//       });
       
// }              

// const params = new URLSearchParams(window.location.search);
// getCharacters(params.get("gender"), params.get("status"));

// const pagination = (info)



// const button = ( pagination ) {
//   for (var i = 0; i = < 42; i++)
// }



// const pagination = (info) => { 
//   let html = `<li><a href="" onclick="getCharacters('${info.prev}')"> previous </a></li>`
//   html += `<li><a href=""onclick="getCharacters('${info.next}')"> next </a></li>`
//   document.getElementById("pagination").innerHTML = html
// }
 
// getCharacters(RandMapi);

// const params = new URLSearchParams(window.location.search);
// getCharacters(params.get("gender"), params.get("status"));



function getCharacters(gender, status, prev, next) {
    const results = fetch(
        `https://rickandmortyapi.com/api/character?gender=${gender || ""}&status=${status || ""}&prev=${prev || ""}&next=${next || ""}`);

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

              const pagination = (info => { 
              let html = `<li><a href="" onclick="getCharacters('${info.prev}')"> previous </a></li>`
              html += `<li><a href=""onclick="getCharacters('${info.next}')"> next </a></li>`
              document.getElementById("pagination").innerHTML = html

      
            });
                      
          });
      
}

const params = new URLSearchParams(window.location.search);
getCharacters(params.get("gender"), params.get("status"), params.get("next"), params.get("prev"));

const pagination = (info) => { 
  let html = `<li><a href="" onclick="getCharacters('${info.prev}')"> previous </a></li>`
  html += `<li><a href=""onclick="getCharacters('${info.next}')"> next </a></li>`
  document.getElementById("pagination").innerHTML = html
}


//  const pagination = (info) => {}
 

// // https://www.youtube.com/watch?v=S8YV9YfK9nI&t=617s