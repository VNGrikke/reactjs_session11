class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
        console.log(`Đã gửi ${amount} vào tài khoản ${this.accountNumber}.`);
    }

    withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        } else {
            console.log(`Số dư không đủ trong tài khoản ${this.accountNumber}.`);
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
        console.log(`Đã tính tiền lãi hàng tháng và gửi vào tài khoản ${this.accountNumber}: ${interest}`);
    }
}

let account1 = new SavingsAccount("Vương", 1000, 5);
account1.calculateInterest();
account1.deposit(500);
account1.calculateInterest();
