// 税率計算：税抜 → 税込
// price × (1 + taxRate / 100)

document.getElementById("calcBtn").addEventListener("click", () => {

    const price = Number(document.getElementById("price").value);
    const taxRate = Number(document.getElementById("taxRate").value);
    const resultBox = document.getElementById("result");

    // 入力チェック
    if (!price || !taxRate) {
        resultBox.textContent = "値を入力してください。";
        return;
    }

    // 税込計算
    const taxIncluded = price * (1 + taxRate / 100);

    // 小数点を整える（Apple風の静かな表示）
    const formatted = taxIncluded.toFixed(2);

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
