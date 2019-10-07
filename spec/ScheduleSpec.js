describe("Schedule", function() {
    let schedule;
  
      beforeEach(function(){
          schedule = new Schedule;
          account = jasmine.createSpy('account');
          credit_amount = jasmine.createSpy('credit_amount');
            jasmine.clock().install();
            var baseTime = new Date(2013, 9, 23)
            jasmine.clock().mockDate(baseTime);
        });

    afterEach(function() {
        jasmine.clock().uninstall();
        });

      it("starts with an empty array of transactions", function() {
        expect(schedule.transactions).toEqual([])
      });
    
      it("returns a credit transaction", function() {
          schedule.submit(10.00, "", 10.00)
          expect(schedule.transactions).toEqual('Wed Oct 23 2013 00:00:00 GMT+0100 (British Summer Time)  || |10.00| || || 10.00')
      });
    });