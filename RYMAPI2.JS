
 function getData(gender, status,) {
      const results = fetch(
          `https://rickandmortyapi.com/api/character?gender=${gender || ""}&status=${status || ""}`);
  
      results



// const API = 'https://rickandmortyapi.com/api/character/';


// const getData = (apiURL) => {
//         return  fetch(apiURL)
          .then(response => response.json())
          .then(json => { 
            printData(json), 
            pagination(json.info)
          })
          .catch(error => { console.error('error -->', error)})          
}

const printData = (data) => {
      let html
        data.results.forEach(characters => {
            html += '<div class="cards">'
            html += `<h2>${characters.name}</h2>`
            html += '<div class="charaters">'
            html += `<img src ="${characters.image}" class="charatersIma">`
            html += '</div>' 
            html += `<span id="Gender">${characters.gender}</span>`    
            html += `<span id="aboutChar">${characters.species}</span>`      
            html += '</div>'  
        });

        document.querySelector("main").innerHTML = html
     
   
}        

const pagination = (info) => { 

  let html = `<button class="buttonP"><a class="buttonPag" onclick="getData('${info.prev}')"> << Prev </a></button>`
  html += `<button class="buttonP"><a class="buttonPag" onclick="getData('${info.next}')"> Next >> </a></button>`
  document.getElementById("pag").innerHTML = html
}

const params = new URLSearchParams(window.location.search);
getData(params.get("gender"), params.get("status"));
 

// getData(API);





