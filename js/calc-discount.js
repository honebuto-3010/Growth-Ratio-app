// 割引計算：割引後の価格を求める
// originalPrice × (1 - discountRate / 100)

document.getElementById("calcBtn").addEventListener("click", () => {

    const original = Number(document.getElementById("originalPrice").value);
    const rate = Number(document.getElementById("discountRate").value);
    const resultBox = document.getElementById("result");

    // 入力チェック
    if (!original || !rate) {
        resultBox.textContent = "値を入力してください。";
        return;
    }

    // 割引後の価格
    const discounted = original * (1 - rate / 100);

    // 小数点を整える（Apple風）
    const formatted = discounted.toFixed(2);

    resultBox.textContent = `${formatted} 円`;
});

document.getElementById("resetBtn").addEventListener("click", () => {

    // すべての input を空にする
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });

    // 結果を消す
    const resultBox = document.getElementById("result");
    if (resultBox) resultBox.textContent = "";
});
