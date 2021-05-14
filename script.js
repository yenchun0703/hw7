var canvas= document.getElementById('mycanvas');
var ctx= canvas.getContext('2d');
ctx.fillStyle ="red";
ctx.fillRect(100,100,200,200)
//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

function draw(){
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
}
draw()
//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

function draw(){
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //城堡主體繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
  
  //左城門
  ctx.fillStyle = "#ADADAD"
  ctx.fillRect(50,200,25,150) //(x軸,y軸,寬,高)
  ctx.strokeRect(50,200,25,150) //延續地面線條設定，一樣是黑色
  
  //左城門頭蓋
  ctx.fillStyle = "#6C6C6C"
  ctx.fillRect(40,175,325,25)
  ctx.strokeRect(40,175,325,25)
  
  //右城門
  ctx.fillStyle = "#ADADAD"
  ctx.fillRect(325,200,25,150) //(x軸,y軸,寬,高)
  ctx.strokeRect(325,200,25,150) //延續地面線條設定，一樣是黑色
  

  
  //拱門繪製
  ctx.beginPath()
    //右半邊
    ctx.moveTo(100,250)
    ctx.lineTo(300,250)
    ctx.lineTo(400,350)
    ctx.lineTo(400,350)
    //圓弧拱門
    ctx.arc(200,350,50,Math.PI*2,Math.PI,true)
    //左半邊
    ctx.lineTo(0,350)
    ctx.lineTo(0,350)
    ctx.closePath()
    ctx.fillStyle="#E0E0E0"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   
  
  
  
   
  
 
  
  
  
  
  
  //車子
    ctx.fillStyle="white"
    ctx.fillRect(250,220,40,25)
    ctx.strokeRect(250,220,40,25)
  
    ctx.beginPath()
    ctx.arc(250+10,250,5,0,Math.PI*2)
    ctx.arc(250+30,250,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
}
draw()