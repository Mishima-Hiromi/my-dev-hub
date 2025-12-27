// 1. HTMLの要素を取得する（DOM）
const btn = document.getElementById("color-btn");
const title = document.getElementById("title");

// 2. イベントを監視する（Event Listener）
btn.addEventListener("click", () => {
  // 3. 状態を変化させる
  title.style.color = "red";
  console.log("ボタンが押されました！");
});
