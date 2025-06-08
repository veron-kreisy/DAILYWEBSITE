// mask sensitive information using asterisks or other characters



// let email = "veronica@example.com";

// function maskEmail(email) {
//   const [username, domain] = email.split("@");

//   if (username.length <= 2) {
//     return "*@" + domain;
//   }

//   const firstChar = username[0];
//   const lastChar = username[username.length - 1];
//   const maskedPart = "*".repeat(username.length - 2);

//   return `${firstChar}${maskedPart}${lastChar}@${domain}`;
// }
// console.log(maskEmail(email));


// const togglePassword = document.getElementById("togglePassword");
// const passwordInput = document.getElementById("password");

// togglePassword.addEventListener("click", () => {
//   const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//   passwordInput.setAttribute("type", type);
//   togglePassword.textContent = type === "password" ? "Show" : "Hide";
// });


// this is the my javascript code

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
});
