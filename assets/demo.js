let projectA = document.querySelector("#projecta");
let projectB = document.querySelector("#projectb");
let projectC = document.querySelector("#projectc");
let projectD = document.querySelector("#projectd");


projectA.addEventListener('mouseover', function(){
    projectA.src="assets/images/demo.gif"
});

projectA.addEventListener('mouseleave', function(){
    projectA.src="assets/images/projectA.png"
});


projectB.addEventListener('mouseover', function(){
    projectB.src="assets/images/demo2.gif"
});

projectB.addEventListener('mouseleave', function(){
    projectB.src="assets/images/projectB.png"
});

projectC.addEventListener('mouseover', function(){
    projectC.src="assets/images/demo3.gif"
});

projectC.addEventListener('mouseleave', function(){
    projectC.src="assets/images/projectC.png"
});

projectD.addEventListener('mouseover', function(){
    projectD.src="assets/images/demo4.gif"
});

projectD.addEventListener('mouseleave', function(){
    projectD.src="assets/images/projectD.png"
});