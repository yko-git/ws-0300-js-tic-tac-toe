const itemsItem = document.querySelectorAll(".items-item");
const jsCell = document.querySelectorAll(".js-cell");
const Board = document.querySelector(".l-board");
const jsReset = document.querySelector(".btn-restart");
const state = document.querySelector(".js-state");
let clickCount = 0;

// セルをクリックするごとにitemsのactiveを切り替える

for (let i = 0; i < jsCell.length; i++) {
  jsCell[i].addEventListener("click", (e) => {
    if (jsCell[i].childNodes.length >= 1) {
      return;
    }
    addChild(jsCell[i]);
    for (let item of itemsItem) {
      addClass(item);
    }

    // console.log(jsCell[i].innerHTML);
    if (
      jsCell[0].innerHTML === "⚪︎" &&
      jsCell[1].innerHTML === "⚪︎" &&
      jsCell[2].innerHTML === "⚪︎"
    ) {
      state.innerHTML = "win!";
      Board.classList.add("set");
    } else if (
      jsCell[0].innerHTML === "⚪︎" &&
      jsCell[3].innerHTML === "⚪︎" &&
      jsCell[6].innerHTML === "⚪︎"
    ) {
      state.innerHTML = "win!";
      Board.classList.add("set");
    }
  });
}

const addClass = (classItem) => {
  classItem.classList.toggle("is-active");
};

// セルをクリックすると⚪︎とバツが交互に出力される
const addChild = (targetChild) => {
  clickCount++;
  if (clickCount % 2 === 0) {
    targetChild.innerHTML = "×";
  } else {
    targetChild.innerHTML = "⚪︎";
  }
};

// どちらかが揃ったら メッセージをwinに
// 揃わずに全てのセルが埋まったら メッセージをdrawに

//リセットボタンでリロード
jsReset.addEventListener("click", () => {
  location.reload();
});
