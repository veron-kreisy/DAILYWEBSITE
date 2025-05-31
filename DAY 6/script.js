// mask sensitive information using asterisks or other characters


// function maskEmail(email){

// }
// let email = "Email addresss";

// console.log(maskEmail());
let email = "veronica@example.com";

function maskEmail(email) {
  const [username, domain] = email.split("@");

  if (username.length <= 2) {
    return "*@" + domain;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedPart = "*".repeat(username.length - 2);

  return `${firstChar}${maskedPart}${lastChar}@${domain}`;
}
console.log(maskEmail(email));
