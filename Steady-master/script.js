document.getElementById('ham').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('collapsed');
  });
  

var com = document.querySelector(".video-grid");
var hamm = document.getElementById("ham");
var side = document.querySelector(".sidebar");

hamm.onclick = function() {
    com.classList.toggle("large-video-grid");
}
