function toggleTable() {
  var table = document.getElementById("myTable");
  var button = document.getElementsByTagName("button")[0];

  if (table.style.display === "none") {
    table.style.display = "table";
    button.textContent = "關閉課表";
  } else {
    table.style.display = "none";
    button.textContent = "展開課表";
  }
}
  function toggleMenu(number) {
    var list = document.getElementsByTagName("ol")[number-1];
    list.style.display = (list.style.display === "none") ? "block" : "none";
  }