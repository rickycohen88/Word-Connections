//  this is api  request url for spanish to english https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=your-api-key
//  key for span  b1823e2d-0dd8-4ab4-bfa5-f67523265df8
// dictionary api https://www.dictionaryapi.com/api/v3/references/collegiate/json/searchquerey?key=your-api-key
// key for dict 097e4f17-51a3-4c33-868e-e4192b97f92a
// colligate thes https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key
// key 20fc6f58-5554-4511-aeb4-73b02f754ec4

let googleObject;
let googleobjectcounter =0;
let searchText = $("#textarea").value;
let video0 = "https://www.youtube.com/embed/";
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
  UNRESTRICTED: AIzaSyAa4_ZX-UHSjDpcWGY4M_rfq0jS3mbIrbI   Restricted to git hub url: AIzaSyA8fMnoVL3CYKS1ikwHY_Wuv2GXFDSoPoo
    console.log(youtubeAPI);
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed
*/

function googleApi(){
    searchText = document.getElementById("textarea").value;
    console.log(searchText);
    console.log(typeof searchText);
    let youtubeAPI = "https://youtube.googleapis.com/youtube/v3/search?&maxResults=10&order=relevance&q="+searchText+"&type=video&videoEmbeddable=true&videoType=videoTypeUnspecified&key=AIzaSyAa4_ZX-UHSjDpcWGY4M_rfq0jS3mbIrbI"

    $.ajax({url:youtubeAPI,method: "GET"})
    .then(function(responce){
        console.log(responce);
        googleObject=responce;
        console.log(googleObject);
        createVideoCarusel();
        })
    
}




 function createVideoCarusel(){
   googleobjectcounter =0;
    let video1 = googleObject.items[googleobjectcounter].id.videoId;
  console.log(video1);
  let video2 = video0+video1;
  console.log(video2);
  document.getElementById("ytPlayer").setAttribute("src",video2);
 };
 
$("#next-ytplayer").on("click", function(){
    if (googleObject == undefined){
    }
    else{
      console.log(typeof googleObject);
      googleobjectcounter ++;
      console.log(googleobjectcounter);
      let video3 = googleObject.items[googleobjectcounter].id.videoId;
      console.log(video3);
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
    if (googleObject !== 0){
      googleobjectcounter --;
    }
    else{
      googleobjectcounter =0;
    }
    let video3 = googleObject.items[googleobjectcounter].id.videoId;
    document.getElementById("ytPlayer").setAttribute("src",video0+video3);
  }
}
)