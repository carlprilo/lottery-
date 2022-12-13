window.onload = function() {
  document.getElementById('main-content').innerHTML = 'Hello, github pages :)'
  var MyDiv = document.getElementById('main-content')
  var button = document.createElement("input");
  button.setAttribute("type", "button");
  button.setAttribute("value", value);
  button.setAttribute("id", id);
  button.setAttribute("class", class);
  button.style.width = "12%";
  button.setAttribute("onclick", "function(this.id)");
  MyDiv.appendChild(button);
}
