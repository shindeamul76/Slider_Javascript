const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slidNumber = 1;
const length = images.length

const bottom = document.querySelector(".bottom");
for (let i = 0; i < length; i++) {
    console.log("me")
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button";
    bottom.appendChild(buttonDiv);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";
const makeTranParent = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"
    })
}


buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        makeTranParent();
        slider.style.transform = `translateX(-${i * 800}px)`
        slidNumber = i + 1;
        button.style.backgroundColor = "white";
    })
})

const changeColor = () => {
    makeTranParent();
    buttons[slidNumber-1].style.backgroundColor = "white";
}
const nextSlide = () => {
    slider.style.transform = `translateX(-${slidNumber * 800}px)`
    slidNumber++;
    changeColor();
};
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slidNumber-2) * 800}px)`
    slidNumber--;
    changeColor();
};
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slidNumber = 1;
    changeColor();
};
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1) * 800}px)`
    slidNumber = length;
    changeColor();
};

right.addEventListener("click" , () => {
     slidNumber < images.length ? nextSlide() : getFirstSlide(); 
})

left.addEventListener("click", () => {
    slidNumber > 1 ? prevSlide() : getLastSlide()
})

