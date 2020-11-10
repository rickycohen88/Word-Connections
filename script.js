//  this is api  request url for spanish to english https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=your-api-key
//  key for span  b1823e2d-0dd8-4ab4-bfa5-f67523265df8
// dictionary api https://www.dictionaryapi.com/api/v3/references/collegiate/json/searchquerey?key=your-api-key
// key for dict 097e4f17-51a3-4c33-868e-e4192b97f92a
// colligate thes https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key
// key 20fc6f58-5554-4511-aeb4-73b02f754ec4

let storageKey = 1;





$("#search-button").on("click", function () {
  // set search term to localStorage
  localStorage.setItem(storageKey, $("#textarea").val());
  storageKey++;
  $("#textarea").val("");
})


