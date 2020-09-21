var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];


function whack(obj){
  //list name, class, and vehicle along with displaying the image
  
  //declaring the variables
  var ele=document.createElement("h4");
  var nEle=document.createElement("h4");
  var cEle=document.createElement("h4");
  var vEle=document.createElement("h4");
  var iEle=document.createElement("img");
  ele.classList.add("character");
  
  //display information part, Name, Class, Vehicle on seperate lines
  nEle.innerHTML="Name: "+chrs[i].name;
  cEle.innerHTML="Class: "+chrs[i].class;
  vEle.innerHTML="Vehicle: "+chrs[i].vehicle;
  
  //capitalize only leader part
  if(obj.class==="leader"){
        cEle.style.textTransform="uppercase" 
  }
  
  //image display part
  if (chrs[i].afl === "autobot") {
    ele.classList.add("autobot");
    iEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }else if (chrs[i].afl === "decepticon"){
    ele.classList.add("decepticon");
    iEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }  
  
  //color change part
  if(chrs[i].vehicle === "truck"){
    vEle.style.color = "blue";
  }else if(chrs[i].vehicle === "tank"){
    vEle.style.color = "green";
  }else if(chrs[i].vehicle === "car"){
    vEle.style.color ="gold";
  }else if(chrs[i].vehicle === "plane")
    vEle.style.color = "white";
  
  
  //apending stuff part
  ele.appendChild(nEle);
  ele.appendChild(cEle);
  ele.appendChild(vEle);
  ele.appendChild(iEle);
  wrapperEle.appendChild(ele);
}
  
  for(var i=0; i<chrs.length; i++){
  whack(chrs[i]);
  }