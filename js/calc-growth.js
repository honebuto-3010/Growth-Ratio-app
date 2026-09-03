// 増益計算：増加率（％）を求める
// (current - prev) / prev × 100

document.getElementById("calcBtn").addEventListener("click", () => {

    const prev = Number(document.getElementById("prevValue").value);
    const current = Number(document.getElementById("currentValue").value);
    const resultBox = document.getElementById("result");

    // 入力チェック
    if (!prev || !current) {
        resultBox.textContent = "値を入力してください。";
        return;
    }

    // 増加額
    const diff = current - prev;

    // 増加率（％）
    const percent = (diff / prev) * 100;

    // 小数点を整える（Apple風）
    const formattedPercent = percent.toFixed(2);
    const formattedDiff = diff.toFixed(2);

    resultBox.textContent = `増加額：${formattedDiff} ／ 増加率：${formattedPercent}%`;
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
