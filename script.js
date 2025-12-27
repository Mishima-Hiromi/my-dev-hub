// 1. HTMLの要素を取得する（DOM）
const btn = document.getElementById("color-btn");
const title = document.getElementById("title");

// --- 2. データの管理 (State) ---
// アプリが今どんな状態かを、変数で持っておくのが「不変の基礎」です
let isRed = false;

// --- 3. 振る舞いの定義 (Event Handling) ---
btn.addEventListener("click", () => {
  // 状態を反転
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
