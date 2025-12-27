// 1. HTMLの要素を取得する（DOM）
const btn = document.getElementById("color-btn");
const display = document.getElementById("count-num");
const title = document.getElementById("title");

// --- 2. データの管理 (State) ---
// アプリが今どんな状態かを、変数で持っておくのが「不変の基礎」です
let isRed = false;
let count = 0;

// --- 3. 振る舞いの定義 (Event Handling) ---
btn.addEventListener("click", () => {
  // カウントを更新
  count = count + 1;

  // 更新されたカウントを画面（DOM）に反映
  display.innerText = count;

  if (count >= 20) {
    display.style.color = "gold";
    document.body.style.backgroundColor = "#333";
  } else if (count >= 10) {
    display.style.color = "blue";
    display.style.fontWeight = "bold";
  } else {
    display.style.color = "black";
  }

  // // 状態を反転
  isRed = !isRed;

  // 3. 状態を変化させる
  if (isRed) {
    title.innerText = "赤になりました！";
    title.style.color = "red";
  } else {
    title.innerText = "Hello,World";
    title.style.color = "black";
  }

  //デバッグ
  console.log("現在の状態:", isRed);
});
