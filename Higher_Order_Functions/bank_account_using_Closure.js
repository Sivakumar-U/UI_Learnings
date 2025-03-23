// Bank Account program using Closure function.

function bankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit: function (amount) {
      balance = balance + amount;
      console.log(`Deposited:${amount}, New Balabce:${balance}`);
    },

    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Indufficient balance!");
      } else {
        balance = balance - amount;
        console.log(`Withdrawn: ${amount}, New Balance:${balance}`);
      }
    },
  };
}

const myAccount = bankAccount(1000); // Initial balance = 1000
myAccount.deposit(500); // Deposited: 500, New Balance: 1500
myAccount.withdraw(200); // Withdrawn: 200, New Balance: 1300
