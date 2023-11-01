function createAccount(pin, amount = 0) {
  let balance = amount;
  let currentPin = pin;

  return {
    checkBalance(inputPin) {
      if (inputPin !== currentPin) {
        return "Invalid PIN.";
      }
      return `$${balance}`;
    },
    deposit(inputPin, depositAmount) {
      if (inputPin !== currentPin) {
        return "Invalid PIN.";
      }
      balance += depositAmount;
      return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
    },
    withdraw(inputPin, withdrawalAmount) {
      if (inputPin !== currentPin) {
        return "Invalid PIN.";
      }
      if (withdrawalAmount > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      balance -= withdrawalAmount;
      return `Successfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== currentPin) {
        return "Invalid PIN.";
      }
      currentPin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };