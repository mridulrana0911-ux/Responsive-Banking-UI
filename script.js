let balance = 0;

function deposit() {
  const amount = Number(document.getElementById("amount").value);
  if (amount > 0) {
    balance += amount;
    document.getElementById("balance").innerText = balance;
  }
}

function withdraw() {
  const amount = Number(document.getElementById("amount").value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    document.getElementById("balance").innerText = balance;
  } else {
    alert("Insufficient balance or invalid amount");
  }
}
