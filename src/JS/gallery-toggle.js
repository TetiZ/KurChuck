"use strict";

const gallery = document.querySelector(".about-gallery");
const images = document.querySelectorAll(".about-img");

const prevBtn = document.querySelector(".prev-img");
const nextBtn = document.querySelector(".next-img");

let currentIdx = 0;

const imageCount = images.length;

const showImg = (index) => {
  images.forEach((img, idx) => {
    img.classList.toggle("active", idx === index);
  });
};

const prevImg = () => {
  currentIdx = (currentIdx - 1 + imageCount) % imageCount;
  showImg(currentIdx);
};

const nextImg = () => {
  currentIdx = (currentIdx + 1) % imageCount;
  showImg(currentIdx);
};

prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

showImg(currentIdx);
