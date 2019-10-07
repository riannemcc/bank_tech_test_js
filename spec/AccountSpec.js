describe("Account", function() {
  let account;

    beforeEach(function(){
        account = new Account;
      });
  
    it("starts with an opening balance of 0", function() {
      expect(account.balance).toEqual(0)
    });
  
    it("allows balance to be credited with specified amount", function() {
        account.deposit(20);
        expect(account.balance).toEqual(20)
    });

    it("allows balance to be debited with specified amount", function() {
        account.deposit(20);
        account.withdraw(10);
        expect(account.balance).toEqual(10)
    });
  });
  