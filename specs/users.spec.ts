var expect = require('chai').expect
import SearchPage from '../pages/search.page'

browser.timeouts('pageLoad', 200000);

let RERUN_TIMES = 2


describe('Google ', function() {
        
    this.retries(RERUN_TIMES)
        it('Lets me search for a text', function() {
            SearchPage.open();
            SearchPage.searchText('callmegino');
            
            expect(browser.getUrl()).to.have.string("q=callmegino")
        });

        // it('Lets me get lucky with a text', function() {
        //     SearchPage.open();
        //     SearchPage.getLuckyText('callmegino');
            
        //     expect(browser.getUrl()).to.not.have.string("google")
        // });
});
