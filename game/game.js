
var playing = false;
var score = 0;
var beat = 0;
var success = 0;
var knock = 0;
var reTime = 0;
var timeID = null;
var interID = null;


function start(){
  playing = true;
  score   = 0;
  beat    = 0;
  success = 0;
  reTime  = 60;
  document.f1.success.value = success;
  document.f1.score.value = score;
  interID = setInterval("show()",1000);
  timeShow();
}
function over(){
   timeStop();
   playing = false;
   clear();
}

function hit(id){

  if(!playing){
     alert("Please Click start");
     return;
  }else{
    beat ++;
    if(document.getElementById(id).innerHTML != ""){
      score += 1;
      knock += 1;
      success = parseFloat(knock/beat * 100).toFixed(1);
      document.f1.score.value = score;
      document.getElementById(id).innerHTML = "";
    }else{
      success = parseFloat(knock/beat * 100).toFixed(1);
    }
    document.f1.success.value = success +"%";
  }
}


function show(){
    if(playing){
      var ran = Math.floor(Math.random()*30);
      document.getElementById(ran).innerHTML = "<img src = https://mamamiy.github.io/game/image.png>";
      setTimeout("document.getElementById("+ran+").innerHTML=\"\"", 2000);
    }
}

function clear(){
      for(var i = 0; i< 30;i++){
        document.getElementById(i).innerHTML = "";
      }
}

function timeShow(){
  document.f1.retime.value = reTime;
  if(reTime == 0){
    over();
    return;
  }else{
    reTime --;
    timeID = setTimeout("timeShow()",1000);
  }
}

function timeStop(){
  clearInterval(interID);
  clearInterval(timeID);
}
