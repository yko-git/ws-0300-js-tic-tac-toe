const itemsItem = document.querySelectorAll(".items-item");
const board = document.querySelector(".l-board");
const jsCell = document.querySelectorAll(".js-cell");
const state = document.querySelector(".js-state");
const jsReset = document.querySelector(".btn-restart");
let done = false;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = ["", "", "", "", "", "", "", "", ""];

const countFunc = (() => {
  let count = 0;

  return {
    inner: () => {
      return count++;
    },
  };
})();

// イベントの登録
jsCell.forEach(function (cell, index) {
  cell.addEventListener("click", () => {
    // セルの中身がある、もしくはdoneがtrueだったら処理せずそのまま
    if (cells[index] || done) {
      return;
    }
    // countFunc関数をcountへ代入
    const count = countFunc.inner();

    // countの値の奇数判定
    const circleTurn = count % 2 === 0;
    // 奇数だったら⚪︎そうでなければ×
    const inputValue = circleTurn ? "○" : "×";

    cell.innerHTML = inputValue;

    // 判定結果をinnerHTMLで出力
    cells[index] = inputValue;

    // itemsItemにtoggleTurn関数を実行
    toggleTurn(itemsItem);

    // cellsを引数にしたjudgeをjudgedに代入
    const judged = judge(cells);

    // judgedの結果で判定
    if (judged) {
      message(inputValue);
      done = true;
    } else if (count === 8) {
      // 揃わずに全てのセルが埋まったら メッセージをdrawに
      state.innerHTML = "draw";
    }
  });
});

// 判定
const judge = (judgeCell) => {
  const judgeInner = winPatterns.some((line) => {
    if (
      judgeCell[line[0]] === "○" &&
      judgeCell[line[1]] === "○" &&
      judgeCell[line[2]] === "○"
    ) {
      return true;
    }
    if (
      judgeCell[line[0]] === "×" &&
      judgeCell[line[1]] === "×" &&
      judgeCell[line[2]] === "×"
    ) {
      return true;
    }
  });
  return judgeInner;
};

// セルをクリックするごとにitemsのactiveを切り替える
const toggleTurn = (items) => {
  for (let item of items) {
    item.classList.toggle("is-active");
  }
};

// const doneFunc = (target) => {
//   debugger;
//   target.classList.add("set");
// };

// どちらかが揃ったら メッセージをwinに
const message = (mark) => {
  state.innerHTML = `${mark} win`;
};

//リセットボタンでリロード
jsReset.addEventListener("click", () => {
  location.reload();
});
