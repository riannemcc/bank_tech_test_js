function Account(){
    this.balance = 0;
    this.schedule = new Schedule();
  }

  Account.prototype.balance = function(){
    return this.balance;
  };
  
  Account.prototype.deposit = function(credit_amount) {
    this.balance += credit_amount
    this.schedule.submit(credit_amount.toFixed(2), "", this.balance.toFixed(2))
  };

  Account.prototype.withdraw = function(debit_amount) {
    this.balance -= debit_amount
    this.schedule.submit("", debit_amount.toFixed(2), this.balance.toFixed(2))
  };

  Account.prototype.statement = function(schedule) {
    return this.schedule.statement();
  };
  