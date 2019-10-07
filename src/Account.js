function Account(){
    this.balance = 0;
    this.schedule = new Schedule();
  }

  Account.prototype.balance = function(){
    return this.balance;
  };
  
  Account.prototype.deposit = function(credit_amount) {
    this.balance += credit_amount
    this.schedule.submit(credit_amount, null, this.balance)
  };

  Account.prototype.withdraw = function(debit_amount) {
    this.balance -= debit_amount
    this.schedule.submit(null, debit_amount, this.balance)
  };
  