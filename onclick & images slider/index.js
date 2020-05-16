var photos = ["images/01.jpg" , "images/02.jpg" ,"images/03.jpg"];

  var imgTag = document.querySelector("img");

 var count = 0; 

function next(){
    count++;

    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];

    } else{
        imgTag.src = photos[count];

    }

}


function prev(){

    count--;
    
    if(count <0){
        count = photos.length - 1;
        imgTag.src = photos[count];

    } else{
        imgTag.src = photos[count];

    }

}




// for onclick property 

function azeeba(){
  var myVar = document.querySelector("#pgr1");

  myVar.innerHTML = "amader deshe sei sele hobe kobe kothai na boro hoe kaj boro hobe";

}


function natara(){
    alert("we are from Bangladesh");

}


function sobi(){

    var ant = document.querySelector("#amarsobi");

    ant.src = "images/01.jpg";
}