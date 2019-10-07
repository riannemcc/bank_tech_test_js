function Schedule(){
    this.transactions = [];
  }

  Schedule.prototype.submit = function(credit_amount, debit_amount, balance){
    let d = new Date(); 
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    let date = (curr_date + "/" + curr_month + "/" + curr_year);
    this.transactions.push(`${date} || |${credit_amount}| |${debit_amount}| || ${balance}`) ;
  };

  Schedule.prototype.statement = function(){
    return "date || credit || debit || balance\\n" + this.transactions.join("\\n")
  };

