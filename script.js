const inputText = document.getElementById("text-input");
const checkerBtn = document.getElementById("check-btn");
const results = document.getElementById("result");
console.log(inputText);
console.log(checkerBtn);

function errorInput() {
  if (inputText.value === "") {
    return alert("Please input a value");
  }
}

function palindromeChecker() {
  const regex = /[^a-zA-Z0-9]/g;
  const rawText = inputText.value.replace(regex, "").toLowerCase();
  const reverseText = rawText.split("").reverse().join("").replace(regex, "").toLowerCase();
  console.log(rawText);
  console.log(reverseText);
  if (rawText === reverseText) {
    results.style.backgroundColor = "var(--light-green)";
    return (results.innerText = `${inputText.value} is a palindrome`);
  } else {
    results.style.backgroundColor = "var(--light-red)";
    return (results.innerText = `${inputText.value} is not a palindrome`);
  }
}

checkerBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    return errorInput();
  }
  palindromeChecker();
});
