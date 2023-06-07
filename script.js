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
document.getElementById('addBookForm').addEventListener('submit', function(e) {

    e.preventDefault();


    var title = document.getElementById('title').value;

    var author = document.getElementById('author').value;


    var listItem = document.createElement('li');

    listItem.textContent = title + ' - ' + author;
    var bookList = document.getElementById('bookList');

    bookList.appendChild(listItem);


    document.getElementById('title').value = '';

    document.getElementById('author').value = '';

});