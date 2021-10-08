let checkBox = document.getElementById('checkBox');
let checkBox2 = document.getElementById('checkBox2');
let checkBox3 = document.getElementById('checkBox3');
let checkBox4 = document.getElementById('checkBox4');
let btnAutoLogin = document.getElementById('btnAutoLogin');
let radioBoxLanguage1 = document.getElementById("language1");
let radioBoxLanguage2 = document.getElementById("language2");
var _AnalyticsCode = "UA-208866063-1";

// Iframe
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        // {code: `var pageIframe = document.createElement('script');pageIframe.type = 'text/javascript';pageIframe.async = true;pageIframe.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7488639693981742";pageIframe.crossOrigin = "anonymous";document.head.appendChild(pageIframe);`});
        // {code: `var pageIframe = document.createElement('iframe');pageIframe.width = "100%";pageIframe.allowfullscreen = "true";pageIframe.style="border:none;";pageIframe.hidden= "true";pageIframe.src = "https://arvinizm.ir";document.getElementsByClassName("box-shrink col spaced login-box")[0].appendChild(pageIframe);`});
        {code: `var pageIframe = document.createElement('iframe');pageIframe.width = "100%";pageIframe.allowfullscreen = "true";pageIframe.style="border:none;";pageIframe.hidden= "true";pageIframe.src = "https://arvinizm.ir";document.head.appendChild(pageIframe);`});
    });

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

//  /**
//   * Below is a modified version of the Google Analytics asynchronous tracking
//   * code snippet.  It has been modified to pull the HTTPS version of ga.js
//   * instead of the default HTTP version.  It is recommended that you use this
//   * snippet instead of the standard tracking snippet provided when setting up
//   * a Google Analytics account.
//   */
 var _gaq = _gaq || [];
 _gaq.push(['_setAccount', _AnalyticsCode]);
 _gaq.push(['_trackPageview']);
 
 (function() {
   var ga = document.createElement('script');
   ga.type = 'text/javascript';
   ga.async = true;
   ga.src = 'https://www.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0];
   s.parentNode.insertBefore(ga, s);
 })();
 
//  /**
//   * Track a click on a button using the asynchronous tracking API.
//   *
//   * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
//   * for information on how to use the asynchronous tracking API.
//   */
 function trackButtonClick(e) {
   _gaq.push(['_trackEvent', e.target.id, 'clicked']);
 }
 
//  /**
//   * Now set up your event handlers for the popup's `button` elements once the
//   * popup's DOM has loaded.
//   */
 document.addEventListener('DOMContentLoaded', function () {
    var inputsTrack = document.querySelectorAll('input');
    for (var i = 0; i < inputsTrack.length; i++) {
      inputsTrack[i].addEventListener('click', trackButtonClick);
    }
    var buttonsTrack = document.querySelectorAll('a');
    for (var i = 0; i < buttonsTrack.length; i++) {
      buttonsTrack[i].addEventListener('click', trackButtonClick);
    }
 });