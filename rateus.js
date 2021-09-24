let rateValue = document.getElementById("rateValue");

window.onload = function(){
    chrome.storage.local.get(['key7'], function(result) {
        result.key7 = Number(result.key7) + 1
        chrome.storage.local.set({key7:  Number(result.key7)}, function() {});
        document.getElementById("rateValue").innerText = Number(result.key7);
        if (Number(result.key7)==10){
            chrome.storage.local.set({key7:  0}, function() {});
            alert("rate me")
        }
    });
}