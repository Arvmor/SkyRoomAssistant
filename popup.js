let checkBox = document.getElementById('checkBox');
let checkBox2 = document.getElementById('checkBox2');
let checkBox3 = document.getElementById('checkBox3');
let checkBox4 = document.getElementById('checkBox4');
let btnAutoLogin = document.getElementById('btnAutoLogin');
let radioBoxLanguage1 = document.getElementById("language1");
let radioBoxLanguage2 = document.getElementById("language2");

// Radio boxes for setting language
radioBoxLanguage1.onclick = function(element) {
    chrome.storage.local.set({key4: "English"}, function() {});
    location.reload();
    document.getElementsByTagName("body")[0].setAttribute("style", "font-family: sans-serif;");
}
// alert("لطفا افزونه را بسته و باز کرده تا تغییرات اعمال شود")  

radioBoxLanguage2.onclick = function(element) {
    chrome.storage.local.set({key4: "فارسی"}, function() {});
    document.getElementById("language2").checked = true;
    document.getElementsByTagName("body")[0].setAttribute("style", "font-family: 'Bardon', sans-serif;");
    document.getElementById("1Text").innerText = "فعال سازی نوارهای صدا";
    document.getElementById("2Text").innerText = "پنهان سازی اطلاعات ورود شما";
    document.getElementById("3Text").innerText = "ورود خودکار در زمان مشخص";
    document.getElementById("4Text").innerText = "نمایش پیغام خطای مصنوعی";
    document.getElementById("5Text").innerText = "نمایش صفحه بارگزاری تقلبی";
    document.getElementById("btnAutoLogin").innerText = "ورود خودکار";
    document.getElementById("volumeLabel").innerText = "بلندی صدا";
    document.getElementById("clockLabel").innerText = "ساعت";}
    // alert("Please reload the extension to set the changes")  

// first check box function for appearing volume bars
checkBox.onclick = function(element) {
  if (checkBox.checked == true){
        document.getElementById('volumePercentDiv').hidden = false;
        chrome.storage.local.set({key: "tick"}, function() {});
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: `document.getElementById("audios").classList.remove("hidden");for (let index = 0; document.getElementsByTagName("audio")[index]!='<audio id="silence" src="asset/sound/silence.mp3" loop=""></audio>'; index++) {document.getElementsByTagName("audio")[index].volume = ${document.getElementById("volumePercent").value / 100}}`});
            });
        }   else {
            document.getElementById('volumePercentDiv').hidden = true;
            chrome.storage.local.set({key: "untick"}, function() {});
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'document.getElementById("audios").classList.add("hidden");document.getElementsByTagName("audio").forEach(function(currentIndex) {document.getElementsByTagName("audio")[currentIndex].volume = 1;});'});
                    });
                }
            };
            
// save volume percentage to google chrome storage on deselect
document.getElementById("volumePercent").onblur = function(){
    chrome.storage.local.set({key7: document.getElementById("volumePercent").value}, function() {});
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: `for (let index = 0; document.getElementsByTagName("audio")[index]!='<audio id="silence" src="asset/sound/silence.mp3" loop=""></audio>'; index++) {document.getElementsByTagName("audio")[index].volume = ${document.getElementById("volumePercent").value / 100}}`});
                });
};
document.getElementById("volumePercent").onchange = function(){
    chrome.storage.local.set({key7: document.getElementById("volumePercent").value}, function() {});
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: `for (let index = 0; document.getElementsByTagName("audio")[index]!='<audio id="silence" src="asset/sound/silence.mp3" loop=""></audio>'; index++) {document.getElementsByTagName("audio")[index].volume = ${document.getElementById("volumePercent").value / 100}}`});
                });
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
        {code: `alert("Automated Login set for ${document.getElementById("clock").value.slice(0,2)}:${document.getElementById("clock").value.slice(3)}\\n*Do NOT close this tab*");setTimeout(function(){document.getElementById("btn_login").click()}, ${msTillTime});`});
      });
    };

// third checkbox for displaying a fake error
checkBox3.onclick = function(element) {
    if (checkBox3.checked == true){
          chrome.storage.local.set({key5: "tick"}, function() {});
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.executeScript(
                  tabs[0].id,
                  {code: `document.getElementById("error_message").innerHTML = '<div class="warning">اتصال به سرور با خطا روبرو شد.</div>'`});
              });
          }   else {
              chrome.storage.local.set({key5: "untick"}, function() {});
                  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                      chrome.tabs.executeScript(
                          tabs[0].id,
                          {code: `document.getElementById("error_message").innerHTML = '<div class="warning"></div>'`});
                      });
            }
  };
  
// forth checkbox for displaying a fake loading icon
checkBox4.onclick = function(element) {
    if (checkBox4.checked == true){
          chrome.storage.local.set({key6: "tick"}, function() {});
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.executeScript(
                  tabs[0].id,
                  {code: `var newDiv = document.createElement('div');newDiv.id = 'fakeLoading';newDiv.innerHTML = '<div class="col spinner" style="z-index: 9999; z-index: 9999; position: fixed;top: 50%;left: 50%; margin-top: -15px;margin-left:-15px;"><div class="row centered box-shrink dialog-header"><div class="box dialog-title"></div><div class="box-shrink icon-container"><svg width="24" height="24" class="icon spin"><use xlink:href="asset/icons.svg?v12.4.4#shape_cached"></use></svg></div></div></div><div class="dialog-overlay" style="z-index: 9998;"></div>';document.body.appendChild(newDiv)`});
              });
          }   else {
              chrome.storage.local.set({key6: "untick"}, function() {});
                  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                      chrome.tabs.executeScript(
                          tabs[0].id,
                          {code: `document.getElementById("fakeLoading").remove();`});
                      });
            }
  };