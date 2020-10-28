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
    document.getElementById("timeTable").innerText = result.key3
  });