const account = {
    accountName: "Ayca Merve",
    balance: 50000,

    getBalance: function() {
        console.log(`Current balance: $${this.balance}`);
    },

    deposit: function(amount) {
        if (isNaN(amount) || amount <= 0) {
            this.accountError("Invalid deposit amount.");
        } else {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
    },

    withdrawal: function(amount) {
        if (isNaN(amount) || amount <= 0) {
            this.accountError("Invalid withdrawal amount.");
        } else if (amount > this.balance) {
            this.accountError("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        }
    },

    getAccountName: function() {
        console.log(`Account holder: ${this.accountName}`);
    },

    accountError: function(message) {
        console.log(`Error: ${message}`);
    },

    exitAccount: function() {
        console.log("Exiting account. Goodbye!");
    }
};

function atm() {
    let exit = false;
    while (!exit) {
        const choice = prompt(
            "Choose an option: \n1. View Balance\n2. Deposit\n3. Withdraw\n4. Account Holder's Name\n5. Exit"
        );
        switch (choice) {
            case "1":
                account.getBalance();
                break;
            case "2":
                const depositAmount = parseFloat(prompt("Enter deposit amount:"));
                account.deposit(depositAmount);
                break;
            case "3":
                const withdrawAmount = parseFloat(prompt("Enter withdrawal amount:"));
                account.withdrawal(withdrawAmount);
                break;
            case "4":
                account.getAccountName();
                break;
            case "5":
                account.exitAccount();
                exit = true;
                break;
            default:
                account.accountError("Invalid option. Please try again.");
                break;
        }
    }
}
