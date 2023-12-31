let form = document.querySelector("form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let check = document.querySelector("#checkbox");
let submitBtn = document.querySelector("#submit");

let alreadyStored;

if (alreadyStored !== null) {
  let btn = document.createElement("button");
  btn.id = "existing";
  btn.textContent = "Login as existing user";
  form.appendChild(btn);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alreadyStored = localStorage.getItem("username");
    showExisting(JSON.parse(alreadyStored));
  });
}

function showExisting(obj) {
  alert(`Logged in as ${obj.username}`);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (check.checked) {
    localStorage.setItem(
      "username",
      JSON.stringify({
        username: username.value,
        password: password.value,
      })
    );
  }
  alert(`Logged in as ${username.value}`);
});