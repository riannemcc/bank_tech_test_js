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

describe("statement", function() {
    let account;
    let timeNow;
      
        beforeEach(function(){
            account = new Account;
            jasmine.clock().install();
            var baseTime = new Date(2013, 9, 23)
            jasmine.clock().mockDate(baseTime);

            schedule = jasmine.createSpy('schedule');
        });

        afterEach(function() {
            jasmine.clock().uninstall();
          });
        
    it("returns the schedule statement", function() {
        account.deposit(100);
        schedule.statement;
        expect(account.statement()).toEqual("date || credit || debit || balance\\nWed Oct 23 2013 00:00:00 GMT+0100 (British Summer Time) || |100.00| || || 100.00")
    })

    it("returns multiple transactions with a header", function() {
        account.deposit(100);
        account.withdraw(20);
        schedule.statement;
        expect(account.statement()).toEqual("date || credit || debit || balance\\nWed Oct 23 2013 00:00:00 GMT+0100 (British Summer Time) || |100.00| || || 100.00\\nWed Oct 23 2013 00:00:00 GMT+0100 (British Summer Time) || || |20.00| || 80.00")
    })
  });
});
  