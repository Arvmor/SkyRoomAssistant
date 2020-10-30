chrome.storage.local.get(['key'], function(result) {
        if (result.key == "tick"){
        document.getElementById("checkBox").checked = true;
    };
  });
chrome.storage.local.get(['key2'], function(result) {
        if (result.key2 == "tick"){
        document.getElementById("checkBox2").checked = true;
    };
  });
  chrome.storage.local.get(['key3'], function(result) {
    document.getElementById("clock").value = result.key3
    document.getElementById("timeTable").innerText = result.key3
  });
  chrome.storage.local.get(['key4'], function(result) {
    if (result.key4 == "English"){
      document.getElementById("language1").checked = true;
    };
    if (result.key4 == "فارسی"){
      document.getElementById("language2").checked = true;
      document.getElementById("1Text").innerText = "فعال سازی نوارهای صدا";
      document.getElementById("2Text").innerText = "پنهان سازی اطلاعات ورود شما";
      document.getElementById("3Text").innerText = "ورود خودکار در زمان مشخص";
      document.getElementById("4Text").innerText = "نمایش پیغام خطای مصنوعی";
      document.getElementById("5Text").innerText = "نمایش صفحه بارگزاری تقلبی";
      document.getElementById("btnAutoLogin").innerText = "ورود خودکار";
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