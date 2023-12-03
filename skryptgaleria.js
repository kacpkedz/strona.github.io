const THUMBNAILS = document.querySelectorAll(".elemencik img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__zamkniecie");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__strzalka--lewo");
const ARROW_RIGHT = document.querySelector(".popup__strzalka--prawo");

let currentImgIndex;

const showNextImg = () => {
    if (currentImgIndex === THUMBNAILS.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const showLastImg = () => {
    if (currentImgIndex === 0) {
        currentImgIndex = THUMBNAILS.length - 1;
    } else {
        currentImgIndex--;
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
}

const closePopImg = () => {
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add ("hidden");
        POPUP.classList.remove("fade-out");
    }, 300);
};

THUMBNAILS.forEach((elemencik, index) => {
    elemencik.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
    });
});

POPUP_CLOSE.addEventListener("click", closePopImg);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showLastImg);

document.addEventListener("keydown", (e) => {

    if (!POPUP.classList.contains("hidden")) {
    if (e.code === "ArrowRight") {
        showNextImg();
    } else if (e.code === "ArrowLeft") {
        showLastImg();
    }

    if (e.code ==="Escape") {
        closePopImg();
    }
}
});

POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP) {
        closePopImg();
    }
});