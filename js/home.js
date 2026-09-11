document.getElementById("enterBtn").addEventListener("click", () => {
    window.location.href = "menu.html";
});
// ===============================
// 青シャボン玉生成スクリプト（完全版）
// ===============================

// シャボン玉を生成する関数
function createBubbles(targetSelector, count = 14) {
  const area = document.querySelector(targetSelector);
  if (!area) return;

  for (let i = 0; i < count; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // ランダムサイズ（濃い青シャボン玉に最適化）
    const size = Math.random() * 220 + 180; // 180〜400px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // ランダム位置（横方向）
    bubble.style.left = `${Math.random() * 100}%`;

    // ランダム速度（ゆっくり浮かぶ）
    bubble.style.animationDuration = `${22 + Math.random() * 18}s`;

    // ランダム遅延（自然なバラつき）
    bubble.style.animationDelay = `${Math.random() * 8}s`;

    area.appendChild(bubble);
  }
}

// ===============================
// ページ読み込み時にシャボン玉生成
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  createBubbles(".bubble-area", 14); 
});
