javascript:(function () {  var scripts = [    {      name: 'Rainbow',      action: function () {        javascript:var addingfiltertransition = document.body.style.transition = "filter 1s"; var hueInterval = setInterval(function() {var filterchange0 = document.body.style.filter = "hue-rotate(0deg)"; setTimeout(function() {var filterchange90 = document.body.style.filter = "hue-rotate(90deg)"; setTimeout(function() {var filterchange180 = document.body.style.filter = "hue-rotate(180deg)"; setTimeout(function() {var filterchange270 = document.body.style.filter = "hue-rotate(270deg)"; setTimeout(function() {var filterchange360 = document.body.style.filter = "hue-rotate(360deg)";}, 1000);}, 1000);}, 1000);}, 1000);}, 4000);      }    },    {      name: 'Dark Mode Toggle',      action: function () {                   javascript:(function() {
  var body = document.querySelector('body');
  var invertStyles = window.getComputedStyle(body).getPropertyValue('filter');

  if (invertStyles.includes('invert(100%)')) {
    body.style.filter = 'invert(0%)';
  } else {
    body.style.filter = 'invert(100%)';
  }
})();
 }    },    {      name: 'Crazy Spin',      action: function () {        javascript:var foo = document.createElement("link"); document.head.appendChild(foo); foo.setAttribute("rel", "stylesheet"); foo.setAttribute("href", "https://cerebraldatabank.neocities.org/cool_css.css"); for (var i = 0; i < document.querySelectorAll("*").length; i++) {if (i & 1) {document.querySelectorAll("*")[i].classList.add("gogo-spin-backwards");} else {document.querySelectorAll("*")[i].classList.add("gogo-spin");}}      }    },    {      name: 'Fake Error',      action: function () {        javascript: (function() {let imageUrl = "https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/error.png";function spawnImage() {let img = new Image();img.src = imageUrl;img.style.position = 'fixed';img.style.zIndex = '9999';img.onload = function() {let randomTop = Math.floor(Math.random() * (window.innerHeight - img.height));let randomLeft = Math.floor(Math.random() * (window.innerWidth - img.width));img.style.top = randomTop + 'px';img.style.left = randomLeft + 'px';document.body.appendChild(img);};}setInterval(spawnImage, 8000);})();      }    },    {      name: '”youareanidiot.org”',      action: function () {        javascript:(function() { function mainFunction() { var videoId = 'dPtXaAZHuho'; var iframe = document.createElement('iframe'); iframe.width = '0'; iframe.height = '0'; iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=0&loop=1&playlist=%27 + videoId; iframe.allow = %27autoplay%27; iframe.style.border = %27none%27; iframe.style.position = %27fixed%27; iframe.style.bottom = %270%27; iframe.style.right = %270%27; document.body.appendChild(iframe); var imageUrl = "https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/yournotsmart.gif"; var windowBgUrl = "https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/window.png"; function createBouncingWindow() { var winDiv = document.createElement(%27div%27); winDiv.style.position = %27fixed%27; winDiv.style.bottom = %270%27; winDiv.style.left = %270%27; winDiv.style.width = %27220px%27; winDiv.style.height = %27200px%27; winDiv.style.backgroundImage = %27url(%27 + windowBgUrl + %27)%27; winDiv.style.backgroundSize = %27100% 100%%27; winDiv.style.backgroundRepeat = %27no-repeat%27; winDiv.style.backgroundPosition = %27center%27; winDiv.style.zIndex = %279999%27; var img = document.createElement(%27img%27); img.src = imageUrl; img.style.position = %27relative%27; img.style.top = %2724%%27; img.style.left = %2713.5%%27; img.style.width = %2770%%27; img.style.height = %2760%%27; winDiv.appendChild(img); document.body.appendChild(winDiv); var deltaX = (Math.random() * 7) + 3; var deltaY = (Math.random() * 7) + 3; winDiv.addEventListener(%27click%27, function(event) { for (var i = 0; i < 5; i++) { createBouncingWindow(); } }); function animate() { var rect = winDiv.getBoundingClientRect(); if (rect.left + rect.width > window.innerWidth || rect.left < 0) { deltaX = -deltaX; } if (rect.top + rect.height > window.innerHeight || rect.top < 0) { deltaY = -deltaY; } winDiv.style.left = rect.left + deltaX + %27px%27; winDiv.style.top = rect.top + deltaY + %27px%27; requestAnimationFrame(animate); } animate(); } createBouncingWindow(); } if (!localStorage.getItem(%27scriptActivated%27)) { localStorage.setItem(%27scriptActivated%27, %27true%27); mainFunction(); } else { mainFunction(); } window.addEventListener(%27beforeunload%27, function() { localStorage.removeItem(%27scriptActivated%27); }); })();      }    },    {      name: %27Edit Webpage%27,      action: function () {        javascript:var addingcontenteditableattributeequalstrue = document.body.contentEditable = true; var nospellcheckonbody = document.body.spellcheck = false;      }    },    {      name: %27Save Edits%27,      action: function () {        javascript:var addingcontenteditableattributeequalsfalse = document.body.contentEditable = false;      }    },    {      name: %27Auto Clicker%27,      action: function () {        javascript:(function() {var DELAY = 1;  function enableAutoClicker() {    var autoClickerStyleElement = document.createElement("style");    autoClickerStyleElement.innerHTML = ".auto-clicker-target {cursor: crosshair !important; background-color: red !important;}";    document.body.appendChild(autoClickerStyleElement);    function addClicker(e) {      if (!e.isTrusted) {        return;      }      if (e.target.classList.contains("auto-clicker-target")) {        e.target.classList.remove("auto-clicker-target");      } else {        e.target.classList.add("auto-clicker-target");      }      e.preventDefault();      autoClick(e.target);    }    function autoClick(element) {      if (element.classList.contains("auto-clicker-target")) {        element.click();        setTimeout(function() {          autoClick(element);        }, DELAY);      }    }    document.body.addEventListener("click", addClicker, 0);  }  setTimeout(enableAutoClicker, 1000);})();      }    },    {      name: %27Crash Chrome%27,      action: function () {                  javascript:(function() {    var pauseAnimationsStyle = document.createElement('style');    pauseAnimationsStyle.type = 'text/css';    pauseAnimationsStyle.innerHTML = 'html, body, * { animation-play-state: paused !important; transition: none !important; }';    document.head.appendChild(pauseAnimationsStyle);    var pauseGifsAndVideos = document.createElement('style');    pauseGifsAndVideos.type = 'text/css';    pauseGifsAndVideos.innerHTML = 'video, img { animation-play-state: paused !important; }';    document.head.appendChild(pauseGifsAndVideos);    if (document.documentElement.requestFullscreen) {        document.documentElement.requestFullscreen();    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */        document.documentElement.mozRequestFullScreen();    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari, and Opera */        document.documentElement.webkitRequestFullscreen();    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */        document.documentElement.msRequestFullscreen();    }    setTimeout(() => {        while (true) {            while (1) {                location.reload(1);            }        }    }, .0001);})();}    },    {      name: %27Screen Draw%27,      action: function () {                  javascript:var opt=1;alert("keyboard commands:c=color picker. u=pen up. d=pen down. s=size. o=opacity. reload to clear.");var pen=%27none%27;var size=10;function repeat(event){(function(){  var color=document.createElement(%27div%27);  var body=document.getElementsByTagName(%27body%27)[0];    document.getElementById(%27me%27).addEventListener(%27click%27,function(){window.open(%27https://github.com/dragon731012%27);});}());}function mousemove(event){  var x=event.clientX;  var y=event.clientY;  x=x-9-size;y=y-12-size;  (function(){    var elem=document.createElement(%27div%27);    var body=document.getElementsByTagName(%27body%27)[0];    body.appendChild(elem);    elem.style.position=%27fixed%27;    elem.style.top=%27%27+y+%27px%27;    elem.style.left=%27%27+x+%27px%27;    elem.style.margin=%2710px%27;    elem.style.paddingTop=%2710px%27;    elem.style.width=%27%27+size+%27px%27;    elem.style.height=%27%27+size+%27px%27;    elem.style.zIndex=10000;    elem.style.opacity=opt;    elem.style.color=%27%27+clr+%27%27;    elem.style.backgroundColor=%27%27+clr+%27%27;    elem.style.border=%270px solid white%27;    elem.style.textAlign=%27center%27;    elem.id=%27paint%27;    elem.style.display=%27%27+pen+%27%27;    elem.innerText=%27%27;}());}window.addEventListener("keydown",function(event){  if (event.key=="c"){    clr=prompt("what color do you want? must be very broad, and with no caps or special characters. ex:blue");    elem.style.display=%27block%27;}});window.addEventListener("keydown",function(event){  if (event.key=="s"){    size=prompt("what size do you want? no caps, letters, or special characters. ex: 10");    elem.style.display=%27block%27;}});window.addEventListener("keydown",function(event){  if(event.key=="u"){    pen=%27none%27;}});window.addEventListener("keydown",function(event){  if(event.key=="d"){    pen=%27circle%27;}});window.addEventListener("keydown",function(event){  if(event.key=="o"){    opt=prompt("what do you want the opacity to be? 1 to 0. 1=none. 0=a lot.");}});window.addEventListener(%27mousemove%27,mousemove);repeat();}    },    {      name: %27Screen Dance%27,      action: function () {            javascript:(function() {  const style = document.createElement(%27style%27);  style.innerHTML = `    @keyframes bounce {      0%, 100% {        transform: translateY(0) translateX(0);      }      25%, 75% {        transform: translateY(-30px) translateX(20px);      }      50% {        transform: translateY(-40px) translateX(-20px);      }    }    .bounce-animation {      animation: bounce 0.5s infinite;    }  `;  document.head.appendChild(style);  var videoId = %27hiRacdl02w4%27;  var iframe = document.createElement(%27iframe%27);  iframe.width = %270%27;  iframe.height = %270%27;  iframe.src = %27https://www.youtube.com/embed/%27 + videoId + %27?autoplay=1&controls=0&loop=1&playlist=%27 + videoId;  iframe.allow = %27autoplay%27;  iframe.style.border = %27none%27;  iframe.style.position = %27fixed%27;  iframe.style.bottom = %270%27;  iframe.style.right = %270%27;  document.body.appendChild(iframe);    document.body.classList.add(%27bounce-animation%27);})();}    },    {      name: %27Spin Images%27,      action: function () {        javascript:(function() {  var images = document.querySelectorAll(%27img%27);  images.forEach(function(image) {    image.style.transition = %27transform 2s linear infinite%27;    image.style.animation = %27spin 2s linear infinite%27;  });  var styles = document.createElement(%27style%27);  styles.innerHTML = %27@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }%27;  document.head.appendChild(styles);})();      }    },    {      name: %27Flip Screen 180%27,      action: function () {        javascript:(function(){[%27%27, %27-ms-%27, %27-webkit-%27, %27-o-%27, %27-moz-%27].map(function(prefix){document.body.style[prefix + %27transform%27] = %27rotate(180deg)%27;});}())      }    },    {      name: %27YOU JUST GOT COCONUT MALLED%27,      action: function () {        javascript:(function() {  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);  var replacementImageUrl = %27https://raw.githubusercontent.com/itzjustZJ123/GPortal/main/images/donkey.jpeg%27;  while (walker.nextNode()) {    var node = walker.currentNode;    node.textContent = "You just got coconut malled!";  }  var images = document.getElementsByTagName(%27img%27);  for (var i = 0; i < images.length; i++) {    images[i].src = replacementImageUrl;  }})();      } }, { name: %27History Flooder%27, action: function () {         var num=prompt("History flood amount: "); done = false; x = window.location.href; for (var i=1; i<=num; i++) {history.pushState(0, 0, i==num?x:i.toString()); if(i==num){done=true}}if(done===true){alert("History flood successful! "+window.location.href+" now appears in your history "+num+(num==1?" time.":" times. (Made by JonasFlynn)"))}} } ];  var menu = document.createElement(%27div%27);  menu.style.position = %27fixed%27;  menu.style.top = %2710px%27;  menu.style.right = %2710px%27;  menu.style.zIndex = %279999%27;  menu.style.backgroundColor = %27rgba(0, 0, 0, 0.8)%27;  menu.style.border = %271px solid #fff';  menu.style.padding = '10px';  menu.style.borderRadius = '10px';  menu.style.color = '#fff';  scripts.forEach(function (scriptObj) {    var button = document.createElement('button');    button.innerText = '' + scriptObj.name;    button.style.backgroundColor = '#007bff';    button.style.color = '#fff';    button.style.border = 'none';    button.style.padding = '5px 10px';    button.style.margin = '5px 0';    button.style.borderRadius = '5px';    button.onclick = function () {      scriptObj.action();    };    menu.appendChild(button);  });  var closeButton = document.createElement('button');  closeButton.innerText = 'Close';  closeButton.style.backgroundColor = '#dc3545';  closeButton.style.color = '#fff';  closeButton.style.border = 'none';  closeButton.style.padding = '5px 10px';  closeButton.style.margin = '10px 0';  closeButton.style.borderRadius = '5px';  closeButton.onclick = function () {    document.body.removeChild(menu);  };  menu.appendChild(closeButton);  document.body.appendChild(menu);})();
