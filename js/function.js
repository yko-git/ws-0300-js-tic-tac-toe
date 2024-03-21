const itemsItem = document.querySelectorAll(".items-item");
const jsCell = document.querySelectorAll(".js-cell");
const jsReset = document.querySelector(".btn-restart");

itemsItem.forEach((target) => {
  jsCell.forEach((cellTarget) => {
    cellTarget.addEventListener("click", () => {
      target.classList.toggle("is-active");
      cellTarget.classList.add("set");

      if (target.classList.contains("is-active")) {
        cellTarget.innerHTML = target.dataset.set;
      }
    });
  });
});

// resetボタン処理
jsReset.addEventListener("click", () => {
  location.reload();
});
