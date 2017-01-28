var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var opArr = ["*", "/", "-", "+"]
var finalRes = ""
$("button").click(function () {
  var curId = this.id
  var curHTML = getById(curId).innerHTML
  if (curId == "ac") {
    getById("result").innerHTML = ""
    getById("input").innerHTML = ""
    finalRes = ""
  } else if (curId == "ce") {
    finalRes = finalRes.slice(0, -1)
    getById("result").innerHTML = finalRes.charAt(finalRes.length - 1)
    getById("input").innerHTML = finalRes
  } else if (numArr.indexOf(parseInt(curHTML)) > -1) {
    if (getById("result").innerHTML.charAt(0) == "-") {
      getById("result").innerHTML += curHTML
      getById("input").innerHTML += curHTML + ")"
      finalRes += curHTML + ")"
      console.log(finalRes)
    } else {
      getById("result").innerHTML += curHTML
      getById("input").innerHTML += curHTML
      finalRes += curHTML
      console.log(finalRes)
    }
  } else if (opArr.indexOf(getById(curId).innerHTML) > -1) {
    getById("result").innerHTML = curHTML
    getById("input").innerHTML += curHTML
    finalRes += curHTML
  } else if (curId == "dot") {
    getById("result").innerHTML += curHTML
    getById("input").innerHTML += curHTML
    finalRes += curHTML
  } else if (curId == "neg") {
    getById("result").innerHTML = "-"
    getById("input").innerHTML += "(-"
    finalRes += "(-"
  } else if (curId == "equals") {
    getById("result").innerHTML = Math.round(eval(finalRes) * 100000000) / 100000000
  }

});

function getById(element) {
  return document.getElementById(element)
}

function getByClass(element) {
  return document.getElementsByClassName(element)
}