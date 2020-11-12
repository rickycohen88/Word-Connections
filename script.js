//  this is api  request url for spanish to english https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=your-api-key
//  key for span  b1823e2d-0dd8-4ab4-bfa5-f67523265df8
// dictionary api https://www.dictionaryapi.com/api/v3/references/collegiate/json/searchquerey?key=your-api-key
// key for dict 097e4f17-51a3-4c33-868e-e4192b97f92a
// colligate thes https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key
// key 20fc6f58-5554-4511-aeb4-73b02f754ec4


let googleObject;
let searchText = $("#textarea").value;

let searchBtn = $("#search-button");
let idNumber = 0;

let spanishCall = "https://www.dictionaryapi.com/api/v3/references/spanish/json/"+searchText+"?key=b1823e2d-0dd8-4ab4-bfa5-f67523265df8";
let dict = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+searchText+"?key=097e4f17-51a3-4c33-868e-e4192b97f92a";
let thes = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+searchText+"?key=20fc6f58-5554-4511-aeb4-73b02f754ec4";


$("#search-button").on("click", function () {
    console.log("search button clicked");
    googleApi();
    console.log("called google api");

})


searchBtn.on("click", function(){

    SetHistory();
})


function SetHistory() {
    let textItem = searchText.val();
    let newListItem = $("<li>");
    newListItem.attr("id", idNumber);
    newListItem.attr("class", "historyListItems");
    newListItem.append(textItem);
    newListItem.on("click", function(){historyClick()});
    $("#history-items").prepend(newListItem);
    idNumber++;
}

function historyClick() {
    console.log("hi");
}


  // google api stuffssssss
/*curl \
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed
*/

function googleApi(){
    searchText = document.getElementById("textarea").value;
    console.log(searchText);
    console.log(typeof searchText);
    let youtubeAPI = "https://youtube.googleapis.com/youtube/v3/search?&maxResults=10&order=relevance&q="+searchText+"&type=video&videoEmbeddable=true&videoType=videoTypeUnspecified&key=AIzaSyA8fMnoVL3CYKS1ikwHY_Wuv2GXFDSoPoo"
    console.log(youtubeAPI);

    $.ajax({url:youtubeAPI,method: "GET"})
    .then(function(responce){
        console.log(responce);
        googleObject=responce;
        console.log(googleObject);
        createVideoCarusel();
        })
    
}




 function createVideoCarusel(){
    let video1 = googleObject.items[0].id.videoId;
  console.log(video1);
  let video2 = "https://www.youtube.com/embed/"+video1;
  console.log(video2);
  document.getElementById("ytPlayer").setAttribute("src",video2);
 };
 
 

 let APIKEY = "tuMT3OKsTT4SHjMMy9Gye7GGpAmq9wSw";
      document.addEventListener("DOMContentLoaded", init);
      function init() {
        document.getElementById("search-button").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
          let str = document.getElementById("textarea").value.trim();
          console.log(str);
          url = url.concat(str);
          // url = url + str
          // url += str
          console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(content => {
              //  data, pagination, meta
              console.log(content.data);
              console.log("META", content.meta);
              let fig = document.createElement("figure");
              // let img = document.querySelector(".target")
              let img = document.createElement("img");
              let fc = document.createElement("figcaption");
              img.src = content.data[0].images.downsized.url;
              img.alt = content.data[0].title;
              fc.textContent = content.data[0].title;
            
              fig.appendChild(img);
              fig.appendChild(fc);
              //keep the above the same, just add the stuff to the other div
              let out = document.querySelector(".out");
              let target = document.querySelector(".target");
              target.remove()
              out.insertAdjacentElement("afterbegin", fig);
              document.querySelector("#search").value = "";
            })
            .catch(err => {
              console.error(err);
            });
        });
      }
   // ect

