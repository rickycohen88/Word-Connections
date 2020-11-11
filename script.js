//  this is api  request url for spanish to english https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=your-api-key
//  key for span  b1823e2d-0dd8-4ab4-bfa5-f67523265df8
// dictionary api https://www.dictionaryapi.com/api/v3/references/collegiate/json/searchquerey?key=your-api-key
// key for dict 097e4f17-51a3-4c33-868e-e4192b97f92a
// colligate thes https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key

let googleObject;
let googleObjectCounter =0;
//let searchText = $("#textarea").value;
let video0 = "https://www.youtube.com/embed/";
let searchValue = $("#textarea");
let searchBtn = $("#search-button");
let idNumber = 0;

//let spanishCall = "https://www.dictionaryapi.com/api/v3/references/spanish/json/"+searchText+"?key=b1823e2d-0dd8-4ab4-bfa5-f67523265df8";
//let dict = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+searchText+"?key=097e4f17-51a3-4c33-868e-e4192b97f92a";
//let thes = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+searchText+"?key=20fc6f58-5554-4511-aeb4-73b02f754ec4";
let storageKey = 1;
 function setLocalStorage() {
  // set search term to localStorage
  localStorage.setItem(storageKey, $("#textarea").val());
  storageKey++;
  $("#textarea").val("");
}


searchBtn.on("click", function () {
  let textItem = searchValue.val();
  searchValue.empty();
  SetHistory(textItem);
  googleApi(textItem);
  dictionaryAPI(textItem);
  setLocalStorage();
});

function SetHistory(textItem) {
  let newListItem = $("<li>");
  newListItem.attr("id", idNumber);
  newListItem.attr("class", "historyListItems");
  newListItem.append(textItem);
  newListItem.on("click", function () {
    getHistory(textItem);
  });
  $("#history-items").prepend(newListItem);
  idNumber++;
}

function getHistory(textItem) {
  googleApi(textItem);
  dictionaryAPI(textItem);
}


  // google api stuffssssss


// google api stuffssssss
/*curl \
'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=[YOUR_API_KEY]' \
--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
--header 'Accept: application/json' \
--compressed
*/

function googleApi(searchText) {
  let apiKey = "&key=AIzaSyAa4_ZX-UHSjDpcWGY4M_rfq0jS3mbIrbI";
  let youtubeAPI =
    "https://youtube.googleapis.com/youtube/v3/search?&maxResults=10&order=relevance&q=" +
    searchText +
    "&type=video&videoEmbeddable=true&videoType=videoTypeUnspecified" +
    apiKey;
  console.log(youtubeAPI);

  $.ajax({ url: youtubeAPI, method: "GET" }).then(function (responce) {
    console.log(responce);
    googleObject = responce;
    console.log(googleObject);
    createVideoCarusel();
  });
}

function createVideoCarusel() {
  let video1 = googleObject.items[0].id.videoId;
  console.log(video1);
  let video2 = "https://www.youtube.com/embed/" + video1;
  console.log(video2);
  document.getElementById("ytPlayer").setAttribute("src", video2);
}
$("#next-ytplayer").on("click", function(){
    if (googleObject == undefined){
      ;
    }
    else{
      googleObjectCounter ++;
      let video3 = googleObject.items[googleObjectCounter].id.videoId;
      document.getElementById("ytPlayer").setAttribute("src",video0+video3);
    }
  }
)
$("#previous-ytplayer").on("click", function(){
  if (googleObject == undefined){
      ;
  }
  else{
    console.log(typeof googleObject);
    if (googleObjectCounter !== 0){
      googleObjectCounter --;
    }
    else{
      googleObjectCounter = 0;
    }
    let video3 = googleObject.items[googleObjectCounter].id.videoId;
    document.getElementById("ytPlayer").setAttribute("src",video0+video3);
    }
  }
)

function dictionaryAPI(searchText) {
$("#definitions").empty();
let dict =
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
  searchText +
  "?key=097e4f17-51a3-4c33-868e-e4192b97f92a";
$.ajax({
  url: dict,
  method: "GET",
}).then(function (response) {
  $("#searched-word").text(searchText);
  for (let i = 0; i < response[0].shortdef.length; i++) {
    let listItem = $("<li>");
    listItem.text(response[0].shortdef[i]);
    $("#definitions").append(listItem);
  }
  $("#definition").empty();
  console.log(response);
});
}
