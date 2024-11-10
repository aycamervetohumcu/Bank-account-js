const account = {
    accountName: "Ayca Merve",
    balance: 10000,

    getBalance: function() {
        console.log('Current balance: $${this.balance}');
    },
    deposit: function(amount) {
        if (isNaN(amount) || amount <= 0) {
            this.accountError("Invalid deposit amount.");
        } else {
            this.balance += amount;
            console.log('Deposited $${amount}. New balance: $${this.balance}');
        }
    },
    
}