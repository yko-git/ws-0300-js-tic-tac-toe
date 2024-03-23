const itemsItem = document.querySelectorAll(".items-item");
const jsCell = document.querySelectorAll(".js-cell");
const Board = document.querySelector(".l-board");
const jsReset = document.querySelector(".btn-restart");
const state = document.querySelector(".js-state");
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let clickCount = 0;

for (let i = 0; i < jsCell.length; i++) {
  jsCell[i].addEventListener("click", () => {
    addChild(jsCell[i]);

    addClass();

    judge();
  });
}

// 判定
const judge = () => {
  for (let j = 0; j < win.length; j++) {
    if (
      jsCell[win[j][0]].innerHTML === "○" &&
      jsCell[win[j][1]].innerHTML === "○" &&
      jsCell[win[j][2]].innerHTML === "○"
    ) {
      return message("○");
    } else if (
      jsCell[win[j][0]].innerHTML === "×" &&
      jsCell[win[j][1]].innerHTML === "×" &&
      jsCell[win[j][2]].innerHTML === "×"
    ) {
      return message("×");
    }
  }
  // 揃わずに全てのセルが埋まったら メッセージをdrawに
  if (clickCount === 9) {
    state.innerHTML = "draw";
  }
};

// セルをクリックするごとにitemsのactiveを切り替える
const addClass = () => {
  for (let item of itemsItem) {
    item.classList.toggle("is-active");
  }
};

// セルをクリックすると○とバツが交互に出力される
const addChild = (targetChild) => {
  clickCount++;

  if (clickCount % 2 === 0) {
    targetChild.innerHTML = "×";
  } else {
    targetChild.innerHTML = "○";
  }
};

// どちらかが揃ったら メッセージをwinに
const message = (mark) => {
  state.innerHTML = `${mark} win`;
  Board.classList.add("set");
};

//リセットボタンでリロード
jsReset.addEventListener("click", () => {
  location.reload();
});
