// counter = 1;

// carousel = document.getElementsByClassName("li_img");
// total = carousel.length;

// setInterval(() => {
//   if (counter >= total) {
//     for (li of carousel) {
//       li.style.left = 0;
//     }
//     counter = 1
//   } else {
//     for (li of carousel) {
//       li.style.left = `${(-20 * counter)}%`;
//     }
//     counter++;
//   }
// }, 1000);


const slide = (element) => {
  setTimeout((element) => {
    element.style.left = `${(-20 * counter)}%`;
  }, 1000);
}