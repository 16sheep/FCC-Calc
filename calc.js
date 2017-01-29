var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var opArr = ["*", "/", "-", "+"]
var finalRes = ""

$("button").click(function () {
  var curId = this.id
  var curHTML = getById(curId).innerHTML
  var resHTML = getById("result").innerHTML
  if (curId == "ac") {
    getById("result").innerHTML = ""
    getById("input").innerHTML = ""
    finalRes = ""
  } else if (curId == "ce") {
    finalRes = finalRes.slice(0, -1)
    getById("result").innerHTML = finalRes.charAt(finalRes.length - 1)
    getById("input").innerHTML = finalRes
  } else if (numArr.indexOf(parseInt(curHTML)) > -1) {
    getById("result").innerHTML += curHTML
    getById("input").innerHTML += curHTML
    finalRes += curHTML
    console.log(finalRes)

  } else if (opArr.indexOf(curHTML) > -1) {
    var parMatch = finalRes.match(/[(]/g)

    getById("result").innerHTML = curHTML
    getById("input").innerHTML += curHTML
    finalRes += curHTML

    if (parMatch.length == true && parMatch.length % 2 != 0) {
      getById("result").innerHTML = curHTML
      getById("input").innerHTML = getById("input").innerHTML.slice(0, getById("input").innerHTML.length - 1)
      getById("input").innerHTML += ")" + curHTML
      finalRes.slice(0, finalRes.length - 1)
      finalRes = finalRes += ")" + curHTML
    }

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
