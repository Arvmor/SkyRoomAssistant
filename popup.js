let checkBox = document.getElementById('checkBox');

checkBox.onclick = function(element) {
  if (checkBox.checked == true){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.getElementById("audios").classList.remove("hidden");'});
            });
        }   else {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'document.getElementById("audios").classList.add("hidden");'});
                    });
          }
};
let checkBox2 = document.getElementById('checkBox2');

checkBox2.onclick = function(element) {
  if (checkBox2.checked == true){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.getElementById("username").setAttribute("type", "password");'});
            });
        }   else {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'document.getElementById("username").setAttribute("type", "text");'});
                    });
          }
};