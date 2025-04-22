// let paragraphs = document.querySelectorAll(".col-1.text p");
// let tabs = document.querySelectorAll(".tab ul li");
// let row2 = document.querySelectorAll(".row-2 ul");
// let row2LiCol1 = document.querySelectorAll(".row-2 .col-1 ul li");

// tabs.forEach((tab, tabIndex) => {
//   tab.addEventListener("click", () => {
//     tabs.forEach(tab => tab.classList.remove("active"));

//     paragraphs.forEach(paragraph => paragraph.classList.remove("active"));
//     tab.classList.add("active");
//     paragraphs[tabIndex].classList.add("active");

//     //Transition --0
//     // row2LiCol1.forEach(el1 => el1.classList.remove("actives"));
//     // row2LiCol1[tabIndex].classList.add("actives");
//     row2[0].style.setProperty("--tr", `${tabIndex * -100}vh`);
//     row2[1].style.setProperty("--tr", `${tabIndex * -100}vh`);
//   });
// });
const tabs = document.querySelectorAll(".tab ul li");
const paragraphs = document.querySelectorAll(".text p");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab ul li.active").classList.remove("active");
    tab.classList.add("active");

    document.querySelector(".text p.active").classList.remove("active");
    paragraphs[i].classList.add("active");

    col1.style.transform = `translateY(${i * -100}vh)`;
    col2.style.transform = `translateY(${i * -100}vh)`;
  });
});