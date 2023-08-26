
// code no.1
// let img1 = document.querySelector('.image1');
// let img2 = document.querySelector(".image2");

// let ehhh = "ehhh";

// img1.addEventListener('click', () => {
//     document.getElementById("image-1").style.display = "none";
//     document.getElementById("image-2").style.display = "inline-block";
//     document.getElementById("span1").innerHTML = "Bulaga";
// })

// img2.addEventListener('click', () => {
//     document.getElementById("image-2").style.display = "none";
//     document.getElementById("image-1").style.display = "inline-block";
//     document.getElementById("span1").innerHTML = ehhh += "h";
// })


// code 2 much better
let img1 = document.querySelector(".image1");
let img2 = document.querySelector(".image2");

let ehhh = "ehhh";

img1.addEventListener('click', () => {
    if (img1.classList.contains('active')){
        img2.classList.add('active');
        img1.classList.remove('active');
        document.getElementById('span1').innerHTML = 'bulaga';
    }
})
    
img2.addEventListener('click', () => {
    if (img2.classList.contains('active')){
        img2.classList.remove('active');
        img1.classList.add('active');
        document.getElementById('span1').innerHTML = ehhh += 'h';
    }
})


  

