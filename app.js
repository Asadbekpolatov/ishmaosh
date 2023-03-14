const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")
const input4 = document.querySelector(".input4")
const input5 = document.querySelector(".input5")
const select = document.querySelector("select")
const pul = document.querySelector(".pul")
const natija = document.querySelector(".h1")
// console.log(input1);
// console.log(input2);
// console.log(input3);
// console.log(input4);
// console.log(input5);
// console.log(select);


const kalkulyator = () => {
    const maosh = input1.value
    const soliqlar = input2.value
    const yol_haqqi = input3.value
    const obet = input4.value
    const rozgor = input5.value
    const selectvalue = select.value
   

    if (selectvalue === "-") {
        // ayirish funksiyasi 
        natija.innerHTML = Number(maosh) - Number(soliqlar) - Number(yol_haqqi) - Number(obet) - Number(rozgor) + (" so'm")
    }

    else if (selectvalue === "+") {
        // qushish funksiyasi
        natija.innerHTML = Number + (maosh) + Number(soliqlar) + Number(yol_haqqi) + Number(obet) + Number(rozgor) + (" so'm")
    }
    else if (selectvalue === "*") {
        // kopayturuv funksiyasi
        natija.innerHTML = Number * (maosh) * Number(soliqlar) * Number(yol_haqqi) * Number(obet) * Number(rozgor) + (" so'm")
    }
    else {
        //buluv funksiyasi
        natija.innerHTML = Number(maosh) / Number(soliqlar) / Number(yol_haqqi) / Number(obet) / Number(rozgor) + (" so'm")
    }






}


