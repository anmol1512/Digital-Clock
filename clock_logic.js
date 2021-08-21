digital=()=>{
    let date=new Date();
let dt;
if(date.getSeconds()<10){
    dt=date.getHours()+":"+date.getMinutes()+":0"+date.getSeconds();
}
else{
    dt=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}
document.getElementById("logic").innerText="The Current Time is "+dt;
}
setInterval(digital,1000);