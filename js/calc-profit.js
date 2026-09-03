// 利益率計算：利益額と利益率を求める
// 利益額 = sales - cost
// 利益率 = (利益額 / sales) × 100

document.getElementById("calcBtn").addEventListener("click", () => {

    const sales = Number(document.getElementById("sales").value);
    const cost = Number(document.getElementById("cost").value);
    const resultBox = document.getElementById("result");

    // 入力チェック
    if (!sales || !cost) {
        resultBox.textContent = "値を入力してください。";
        return;
    }

    // 利益額
    const profit = sales - cost;

    // 利益率（％）
    const percent = (profit / sales) * 100;

    // 小数点を整える（Apple風）
    const formattedProfit = profit.toFixed(2);
    const formattedPercent = percent.toFixed(2);

    resultBox.textContent = `利益額：${formattedProfit} ／ 利益率：${formattedPercent}%`;
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
