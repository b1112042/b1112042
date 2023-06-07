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
let cmCounter = 0;

function addcm() {
  const cmTitleInput = document.getElementById("cmTitle");
  const cmTitle = cmTitleInput.value.trim();

  if (cmTitle !== "") {
    cmCounter++;
    
    const cmList = document.getElementById("cmList");
    const li = document.createElement("li");
    li.textContent = `留言 #${cmCounter}: ${cmTitle}`;
    cmList.appendChild(li);
    
    cmTitleInput.value = "";
  }
}