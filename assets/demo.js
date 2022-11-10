let projectA = document.querySelector("#projecta");
let projectB = document.querySelector("#projectb");
let projectC = document.querySelector("#projectc");
let projectD = document.querySelector("#projectd");


projectA.addEventListener('mouseover', function(){
    projectA.src="images/demo.gif"
});

projectA.addEventListener('mouseleave', function(){
    projectA.src="images/projectA.png"
});


projectB.addEventListener('mouseover', function(){
    projectB.src="images/demo2.gif"
});

projectB.addEventListener('mouseleave', function(){
    projectB.src="images/projectB.png"
});

projectC.addEventListener('mouseover', function(){
    projectC.src="images/demo3.gif"
});

projectC.addEventListener('mouseleave', function(){
    projectC.src="images/projectC.png"
});

projectD.addEventListener('mouseover', function(){
    projectD.src="images/demo4.gif"
});

projectD.addEventListener('mouseleave', function(){
    projectD.src="images/projectD.png"
});