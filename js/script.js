
let clockFun=()=>{
let hourBox=document.getElementById('hours');
let minuteBox=document.getElementById('minutes');
let secondBox=document.getElementById('seconds');
let ampm=document.getElementById('ampm');
let myDate=new Date();
let myHour=myDate.getHours();
let myMinute=myDate.getMinutes();
let mySecond=myDate.getSeconds();

if(myHour>12){
    myHour=myHour-12;
    ampm.innerHTML='PM';
}
else{
    ampm.innerHTML='AM';
}

myHour= myHour < 10 ? '0' + myHour : myHour;
myMinute= myMinute < 10 ? '0' + myMinute : myMinute;
mySecond= mySecond < 10 ? '0' + mySecond : mySecond;



hourBox.innerHTML=myHour;
minuteBox.innerHTML=myMinute;
secondBox.innerHTML=mySecond;

}

setInterval(clockFun,1000);