const height = document.querySelector("#height");
const weight = document.querySelector("#weight")
const age = document.querySelector("#age");
const button = document.querySelector(".calculate-button")
const vki = document.querySelector(".vki");
const state = document.querySelector(".status");



button.addEventListener("click", () => {
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);
    const a = parseInt(age.value);

    if (isNaN(h) || isNaN(w) || isNaN(a)) {
        alert("Lütfen geçerli bir değer giriniz");
        // return;
    } else {
        const bmi = w / ((h / 100) * (h / 100)); 
        vki.innerHTML = `VKİ : ${bmi.toFixed(2)}`;
        if (bmi < 18.5) {
            state.innerHTML = "DURUM : Zayıf";
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            state.innerHTML = "DURUM : Sağlıklı";
        }
        else if (bmi >= 25 && bmi < 29.9) {
            state.innerHTML = "DURUM : Kilolu";
        }
        else if (bmi >= 30 && bmi < 34.9) {
            state.innerHTML = "DURUM : Obez (I. Derece)";
        }
        else if (bmi >= 35 && bmi < 39.9) {
            state.innerHTML = "DURUM : Obez (II. Derece)";
        }
        else {
            state.innerHTML = "DURUM : Morbid Obez";
        }
       
    }

});







