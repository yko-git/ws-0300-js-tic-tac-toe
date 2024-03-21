const itemsItem = document.querySelectorAll(".items-item");
const jsCell = document.querySelectorAll(".js-cell");
const jsReset = document.querySelector(".btn-restart");

for (let cell of jsCell) {
  cell.addEventListener("click", clickFunc);
}

function clickFunc() {
  this.style.pointerEvents = "none";
  for (let target of itemsItem) {
    if (target.classList.contains("is-active")) {
      this.innerHTML = target.innerHTML;
      console.log(this.innerHTML);
      //   if (this.dataset === 1) {
      //     console.log(this.innerHTML);
      //   }
    }
    target.classList.toggle("is-active");
  }
}

// function setClass() {
//   this.classList.add("set");
// }

// itemsItem.forEach((target) => {
//   jsCell.forEach((cellTarget) => {
//     cellTarget.addEventListener("click", () => {
//       target.classList.toggle("is-active");
//       cellTarget.classList.add("set");

//       if (target.classList.contains("is-active")) {
//         cellTarget.innerHTML = target.dataset.set;
//       }
//     });
//   });
// });

// resetボタン処理
jsReset.addEventListener("click", () => {
  location.reload();
});
