let rateValue = document.getElementById("rateValue");

document.getElementById("rateImage").onclick = function(element) {
    window.open('https://chrome.google.com/webstore/detail/skyroom-assistant/ljdankmhmhhaadaidbaddioidnfdikdg/reviews')
  }
  
document.getElementById("instagramId").onclick = function(element) {
    window.open('https://instagram.com/arvinizm')
  }

window.onload = function(){
    chrome.storage.local.get(['key8'], function(result) {
        chrome.storage.local.get(['key9'], function(result2) {
            if(result2.key9 == undefined){
                chrome.storage.local.set({key9:  false}, function() {});
                chrome.storage.local.set({key8:  0}, function() {});
            }
            result.key8 = Number(result.key8) + 1
            chrome.storage.local.set({key8:  Number(result.key8)}, function() {});
            document.getElementById("rateValue").innerText = Number(result.key8);
            if (Number(result.key8)>=20 && result2.key9 != true){
                window.location = "rateus.html";
            }
        });
    });
}