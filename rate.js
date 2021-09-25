let remindLater = document.getElementById("remindLater");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let radioBoxLanguage1 = document.getElementById("language1");
let radioBoxLanguage2 = document.getElementById("language2");

const buttons = document.querySelectorAll('a');

buttons.forEach(btn => {
    btn.addEventListener('mouseover', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        },1000);
    })
})

// Radio boxes for setting language
radioBoxLanguage1.onclick = function(element) {
  chrome.storage.local.set({key4: "English"}, function() {});
  location.reload();
  document.getElementsByTagName("body")[0].setAttribute("style", "font-family: sans-serif;");
}

radioBoxLanguage2.onclick = function(element) {
  chrome.storage.local.set({key4: "فارسی"}, function() {});
  document.getElementById("language2").checked = true;
  document.getElementsByTagName("body")[0].setAttribute("style", "font-family: 'Bardon', sans-serif;");
  remindLater.innerText = "بعدا یادآوری کن";
  yes.innerText = "میخواهم امتیاز یا پیشنهاد بدهم";
  no.innerText = "علاقه ای ندام"; 
  document.getElementById("text").innerText = "ازین افزونه راضی هستی؟";
  document.getElementById("text2").innerText = "ایده های جدید یا نظرتون رو برای ما بفرستید";
}

chrome.storage.local.get(['key4'], function(result) {
  if (result.key4 == "English"){
    document.getElementById("language1").checked = true;
    document.getElementsByTagName("body")[0].setAttribute("style", "font-family: sans-serif;");
  };
  if (result.key4 == "فارسی"){
    document.getElementById("language2").checked = true;
    document.getElementsByTagName("body")[0].setAttribute("style", "font-family: 'Bardon', sans-serif;");
    remindLater.innerText = "بعدا یادآوری کن";
    yes.innerText = "میخواهم امتیاز یا پیشنهاد بدهم";
    no.innerText = "علاقه ای ندام";
    document.getElementById("text").innerText = "ازین افزونه راضی هستی؟";
    document.getElementById("text2").innerText = "ایده های جدید یا نظرتون رو برای ما بفرستید";
      };
    });
  
  
  yes.onclick = function(element) {
    chrome.storage.local.set({key9:  true}, function() {});
    window.open('https://chrome.google.com/webstore/detail/skyroom-assistant/ljdankmhmhhaadaidbaddioidnfdikdg/reviews')
  }
  
  no.onclick = function(element) {
    chrome.storage.local.set({key9:  true}, function() {});
  }
  
  remindLater.onclick = function(element) {
    chrome.storage.local.set({key8:  0}, function() {});
}