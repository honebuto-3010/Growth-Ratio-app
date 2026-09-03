// 割合計算：A は B の何％か？
// A ÷ B × 100 の計算を行う

document.getElementById("calcBtn").addEventListener("click", () => {

    const A = Number(document.getElementById("valueA").value);
    const B = Number(document.getElementById("valueB").value);
    const resultBox = document.getElementById("result");

    // 入力チェック
    if (!A || !B) {
        resultBox.textContent = "値を入力してください。";
        return;
    }

    // 割合計算
    const percent = (A / B) * 100;

    // 小数点を整える（Apple風の静かな表示）
    const formatted = percent.toFixed(2);

    resultBox.textContent = `${formatted}%`;
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
