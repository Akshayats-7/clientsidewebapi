// Load name if it exists
window.onload = function() {
  const savedName = localStorage.getItem("myName");
  if (savedName) {
    document.getElementById("greeting").textContent = `Welcome back, ${savedName}!`;
  }
};

function saveName() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    localStorage.setItem("myName", name);
    document.getElementById("greeting").textContent = `Nice to meet you, ${name}!`;
  }
}
