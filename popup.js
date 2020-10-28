let checkBox = document.getElementById('checkBox');
let checkBox2 = document.getElementById('checkBox2');
let btnAutoLogin = document.getElementById('btnAutoLogin');

// first check box function for appearing volume bars
checkBox.onclick = function(element) {
  if (checkBox.checked == true){
        chrome.storage.local.set({key: "tick"}, function() {});
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.getElementById("audios").classList.remove("hidden");'});
            });
        }   else {
            chrome.storage.local.set({key: "untick"}, function() {});
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'document.getElementById("audios").classList.add("hidden");'});
                    });
          }
};
// second check box function for hiding username characters
checkBox2.onclick = function(element) {
  if (checkBox2.checked == true){
    chrome.storage.local.set({key2: "tick"}, function() {});
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: 'document.getElementById("username").setAttribute("type", "password");'});
            });
        }   else {
            chrome.storage.local.set({key2: "untick"}, function() {});
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'document.getElementById("username").setAttribute("type", "text");'});
                });
            }
        };

// first button function for auto login
btnAutoLogin.onclick = function(element) {
var now = new Date();
var msTillTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), document.getElementById("clock").value.slice(0,2), document.getElementById("clock").value.slice(3), 0, 0) - now;
if (msTillTime < 0) {
     msTillTime += 86400000; // it's after that time, try tomorrow.
}
chrome.storage.local.set({key3: `${document.getElementById("clock").value.slice(0,2)}:${document.getElementById("clock").value.slice(3)}`}, function() {});
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: `alert("Automated Login set at ${document.getElementById("clock").value.slice(0,2)}:${document.getElementById("clock").value.slice(3)}\\n${msTillTime}ms remaining\\n*Do NOT close this tab*");setTimeout(function(){document.getElementById("btn_login").click()}, ${msTillTime});`});
      });
    };