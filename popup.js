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