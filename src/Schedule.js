function Schedule(){
    this.transactions = [];
  }

  Schedule.prototype.submit = function(credit_amount, debit_amount, balance){
    let date = Date(Date.now()); 
    this.transactions.push(`${date} || |${credit_amount}| |${debit_amount}| || ${balance}`) ;
  };

  Schedule.prototype.statement = function(){
    return "date || credit || debit || balance\\n" + this.transactions.join("\\n")
  };

