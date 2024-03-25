const itemsItem = document.querySelectorAll(".items-item");
const board = document.querySelector(".l-board");
const jsCell = document.querySelectorAll(".js-cell");
const state = document.querySelector(".js-state");
const jsReset = document.querySelector(".btn-restart");
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

jsCell.forEach(function (cell) {
  cell.addEventListener("click", () => {
    addChild(cell);

    addClass(itemsItem);

    judge(jsCell);
  });
});

// 判定
const judge = (judgeCell) => {
  // win.forEach((val) => {
  //   if (
  //     judgeCell[val[0]].innerHTML === "○" &&
  //     judgeCell[val[1]].innerHTML === "○" &&
  //     judgeCell[val[2]].innerHTML === "○"
  //   ) {
  //     return message("○");
  //   } else if (
  //     judgeCell[val[0]].innerHTML === "×" &&
  //     judgeCell[val[1]].innerHTML === "×" &&
  //     judgeCell[val[2]].innerHTML === "×"
  //   ) {
  //     return message("×");
  //   }
  // });

  for (let i = 0; i < win.length; i++) {
    if (
      judgeCell[win[i][0]].innerHTML === "○" &&
      judgeCell[win[i][1]].innerHTML === "○" &&
      judgeCell[win[i][2]].innerHTML === "○"
    ) {
      return message("○");
    } else if (
      judgeCell[win[i][0]].innerHTML === "×" &&
      judgeCell[win[i][1]].innerHTML === "×" &&
      judgeCell[win[i][2]].innerHTML === "×"
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
const addClass = (items) => {
  for (let item of items) {
    item.classList.toggle("is-active");
  }
};

// セルをクリックすると○とバツが交互に出力される
const addChild = (targetChild) => {
  clickCount++;

  if (clickCount % 2 === 0) {
    targetChild.innerHTML = "×";
    targetChild.classList.add("set");
  } else {
    targetChild.innerHTML = "○";
    targetChild.classList.add("set");
  }
};

// どちらかが揃ったら メッセージをwinに
const message = (mark) => {
  state.innerHTML = `${mark} win`;
  board.classList.add("set");
};

//リセットボタンでリロード
jsReset.addEventListener("click", () => {
  location.reload();
});
