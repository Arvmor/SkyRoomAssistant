chrome.storage.local.get(['key'], function(result) {
        if (result.key == "tick"){
        document.getElementById('volumePercentDiv').hidden = false;
        chrome.storage.local.get(['key7'], function(result) {
          document.getElementById("volumePercent").value = result.key7;
      });
        document.getElementById("checkBox").checked = true;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: `document.getElementById("audios").classList.remove("hidden");for (let index = 0; document.getElementsByTagName("audio")[index]!='<audio id="silence" src="asset/sound/silence.mp3" loop=""></audio>'; index++) {document.getElementsByTagName("audio")[index].volume = ${document.getElementById("volumePercent").value / 100}}`});
          });
    };
  });
chrome.storage.local.get(['key2'], function(result) {
        if (result.key2 == "tick"){
        document.getElementById("checkBox2").checked = true;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: 'document.getElementById("username").setAttribute("type", "password");'});
            });
    };
  });
  chrome.storage.local.get(['key3'], function(result) {
    document.getElementById("clock").value = result.key3
  });
  chrome.storage.local.get(['key4'], function(result) {
    if (result.key4 == "English"){
      document.getElementById("language1").checked = true;
      document.getElementsByTagName("body")[0].setAttribute("style", "font-family: sans-serif;");
    };
    if (result.key4 == "فارسی"){
      document.getElementById("language2").checked = true;
      document.getElementsByTagName("body")[0].setAttribute("style", "font-family: 'Bardon', sans-serif;");
      document.getElementById("1Text").innerText = "فعال سازی نوارهای صدا";
      document.getElementById("2Text").innerText = "پنهان سازی اطلاعات ورود شما";
      document.getElementById("3Text").innerText = "ورود خودکار در زمان مشخص";
      document.getElementById("4Text").innerText = "نمایش پیغام خطای مصنوعی";
      document.getElementById("5Text").innerText = "نمایش صفحه بارگزاری تقلبی";
      document.getElementById("btnAutoLogin").innerText = "ورود خودکار";
      document.getElementById("volumeLabel").innerText = "بلندی صدا";
      document.getElementById("clockLabel").innerText = "ساعت";
    };
  });
chrome.storage.local.get(['key5'], function(result) {
        if (result.key5 == "tick"){
        document.getElementById("checkBox3").checked = true;
    };
  });
chrome.storage.local.get(['key6'], function(result) {
        if (result.key6 == "tick"){
        document.getElementById("checkBox4").checked = true;
    };
  });