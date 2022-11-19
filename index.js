var arr = [];

function handleInputNum() {
  var num = +document.getElementById("number").value;

  arr.push(num);

  document.getElementById("saveNum").innerHTML = arr;

  saveLocalNum();
}

function calSum() {
  var sum = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  document.getElementById("sum").innerHTML = "Tổng các số dương là: " + sum;
}
function count() {
  var count = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  document.getElementById("count").innerHTML = "Số lượng số dương trong mảng là : " + count;
}

function saveLocalNum() {
  localStorage.setItem("arrNum", arr);
}
function getLocalNum() {
  var arrNumLocal = localStorage.getItem("arrNum");
  if (!arrNumLocal) return [];
}
