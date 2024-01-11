window.addEventListener("scroll",setScrolVar)


console.log(document.title);
console.log(document.URL);


document.title = "Delisha Holdings LTD";

function setScrolVar() {
     const htmlElement = document.documentElement
     const percentOfScreenHeightScrolled = htmlElement.scrollTop / 
       htmlElement.clientheight
       console.log(Math.min(percentOfScreenHeightScrolled*100,100))
     htmlElement.style.setProperty("--scroll", 
      Math.min(percentOfScreenHeightScrolled*100,100))
}

setScrolVar()

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();
