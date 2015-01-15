exports.config = {

    capabilities: {
        'browserName': 'chrome'
    },

    //Add new test suites here!!
    suites: {
        angular: 'angularjs_hp_test/*.js',
        protractor: 'protractor_demo_test/*.js',
        saucelabs: 'saucelabs_demo_test/examples-spec.js'
    },

    onPrepare: function() {

        //If app is not an angular app use following hook in tests and access browser with 'dvr'
        //beforeEach(function() {
        //    isAngularSite(false); // isAngularSite(true), if it's an Angular app!
        //});
        global.dvr = browser.driver;
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };

        //set window size, maybe good for responsive sizes
        browser.driver.manage().window().setSize(1600, 800);

    },

    jasmineNodeOpts: {
        showColors: true
    }
};

//https://github.com/angular/protractor/blob/master/docs/referenceConf.js
