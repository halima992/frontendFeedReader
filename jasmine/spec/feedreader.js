/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
/** @description all test in this function 
 * @param no parameter
 * @returns no return 
 */
$(function() {

    // Testing suite of RSS Feeds
    describe('RSS Feeds', function() {


        //make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });



        //make sure allFeeds object has a URL defined and that the URL is not empty

        it('url defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);

            });
        })


        //make sure allFeeds object has a name defined and not empty 
        it('name defined and  not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);

            });
        })

    });



    //a new test suite named "The menu"
    describe('The menu', function() {
        //to make sure the menu element hidden by debugger
        it('Hidden menu', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Make sure the menu icon hide/show on clicking 
        it('toggles visibility on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(true); //for show the menu
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true); //for hide the menu 
        });
    });


    //Testing suite of Initial Entries

    describe('Initial Entries', function() {
        // this function becuse the load feed asynchronous 
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        //to make sure there at least one single entery
        it('check entery  ', function() {
            expect($('.entry').length).not.toBe(0);
        });
    });


    //testing suit of New Feed Selection
    describe('New Feed Selection', function() {
        let newValue,
            oldValue;
        beforeEach(function() {
            loadFeed(0, function() {
                //the all feeds are assigned to oldValue 
                oldValue = document.querySelector('.feed').innerHTML;
				done();
                // the new feed is loaded by loadFeed function 
                loadFeed(1, done);
            });

        });
        // Make sure the  new feed is loaded and the content change 
        it('add new Feed', function() {
            newValue = document.querySelector('.feed').innerHTML;
            expect(oldValue).not.toBe(newValue);

        })

    });

}());