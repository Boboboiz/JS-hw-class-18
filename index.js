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
  document.getElementById("count").innerHTML =
    "Số lượng số dương trong mảng là : " + count;
}

function handleFindMin() {
  var numToFind = document.getElementById("number").value;
  var min = arr[0];

  for (var i = 1; i <= arr.length; i++) {
    if (arr[i] < arr[0]) {
      min = arr[i];
    }
  }
  document.getElementById("findMin").innerHTML = "Số nhỏ nhất là :" + min;
}

function handleFindPositiveMin() {
  var numToFind = document.getElementById("number").value;
  var min = arr[0];

  for (var i = 1; i <= arr.length; i++) {
    if (arr[i] < arr[0] && arr[i] > 0) {
      min = arr[i];
    }
  }
  document.getElementById("findMinPositive").innerHTML =
    "Số dương nhỏ nhất là :" + min;
}

function handleFindEven() {
  var index = arr.length;
  var result = "";
  for (i = index - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0 && arr[i] > 0) {
      result = arr[i];
      break;
    } else {
      return alert("-1");
    }
  }
  document.getElementById("findEvenFinalNum").innerHTML =
    "Số dương cuối cùng trong mảng là :" + result;
}

function swapIndex(array, index1, index2) {
  var temp = array[index2];
  array[index1] = array[index2];
  array[index2] = temp;

  return array
}
function doSwap() {
  var swap1 = document.getElementById("swapIndex1").value;
  var swap2 = document.getElementById("swapIndex2").value;
  
  var result = swapIndex(arr, swap1, swap2);
  

  document.getElementById("swap").innerHTML = result;
}

function rangeLinear (){
  for (i= 0 ; i < arr.length -1 ; i++){
    for ( j = i + 1 ; j < arr.length; j++){
      if ( arr[j] > arr[i]){
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr)
  document.getElementById("range").innerHTML = arr;
}

function checkInteger (n) {
  if (n < 2) {
    return false
  } else if ( n === 2){
    return true
  } else {
    for (var j = 2 ; j < n ; j++){
      if ( n % j == 0){
        return false
      }
    }
  }
  return true
}
function findInteger (){
  var result = "";
  
  for ( var i = 0 ; i < arr.length -1 ; i++){
    if (checkInteger(arr[i])){
      result = arr[i]
      break
    }
  }
  document.getElementById("integer").innerHTML = result
}

function findNumber (){
  var count = 0

  for ( var i = 0 ; i < arr.length - 1 ; i++){
    if (arr[i] %1 == 0){
      count++
    }
  }

  document.getElementById("quantNumber").innerHTML = "số nguyên trong mảng là: " + count + "số"
}

function compare (){
  var countPos = 0
  var countNeg = 0
  var result = ""

  for ( var i = 0 ; i < arr.length - 1 ; i++){
    if (arr[i] < 0 ){
      countNeg ++
    } else if ( arr[i] > 0){
      countPos++
    } else {
      countNeg += 0
      countPos += 0
    }
  }
  if (countNeg > countPos){
    result = "số lượng số âm lớn hơn số dương"
  } else if (countPos > countNeg ){
    result = "số lượng số dương lớn hơn số âm"
  } else {
    result = " số lượng số âm bằng số dương"
  }

  document.getElementById("compare").innerHTML= result
}


function saveLocalNum() {
  localStorage.setItem("arrNum", arr);
}
function getLocalNum() {
  var arrNumLocal = localStorage.getItem("arrNum");
  if (!arrNumLocal) return [];
}
