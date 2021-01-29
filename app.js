/*
1. html de saatin gösterilecegi alani olustur.
2. html de sehirlerin secilebilecegi alani olustur.
3. Timezonelere göre zamanlari olusturan functionlari olustur.
4. app.js te documente sehirleri secince göstergede o sehre ait saati göstermesini sagla.
5. SetInterval metodu ile saatin güncel gösterilmesini sagla.
6. Clear interval ekleki bir önceki saat silinsin.

*/


let timerArea = document.getElementById("citys");
let tokyoInterval = "";
let zurichInterval = "";
let yorkerInterval = "";
document.getElementById("citys").addEventListener("change", function () {
  stopClock();
  if (this.value == "tokyo") {
    tokyoInterval = setInterval(getTokyo, 1000);
  }

  if (this.value == "zurich") {
    zurichInterval = setInterval(getZurich, 1000);
  }

  if (this.value == "newyork") {
    yorkerInterval = setInterval(getNewYork, 1000);
  }
});

function getNewYork() {
  document.querySelector("#time").innerHTML = getTimeNewYork();
}

function getTokyo() {
  document.querySelector("#time").innerHTML = getTimeTokyo();
}

function getZurich() {
  document.querySelector("#time").innerHTML = getTimeZurich();
}

function stopClock() {
  clearInterval(tokyoInterval);
  clearInterval(zurichInterval);
  clearInterval(yorkerInterval);
}
