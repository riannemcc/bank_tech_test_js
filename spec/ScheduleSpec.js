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
          expect(schedule.transactions).toEqual('23/10/2013 || |10.00| || || 10.00')
      });
    });