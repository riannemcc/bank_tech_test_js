describe("Account", function() {
  
    beforeEach(function(){
        account = new Account;
      });
  
    it("starts with an opening balance of 0", function() {
      expect(account.balance).toEqual(0)
    });
  
  
  });
  