exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    //multiCapabilities: [
    //    {
    //        'browserName' : 'chrome'
    //    },
    //    {
    //        'browserName' : 'firefox'
    //    }
    //],

    suites: {
        angular: 'angularjs_hp_test/*.js',
        protractor: 'protractor_demo_test/*.js'
        //homepage: 'tests/e2e/homepage/**/*Spec.js',
        //search: ['tests/e2e/contact_search/**/*Spec.js']
    },

    onPrepare: function() {
        //set window size, maybe good for responsive sizes
        browser.driver.manage().window().setSize(1600, 800);

    },

    jasmineNodeOpts: {
        showColors: true
    }
};

//https://github.com/angular/protractor/blob/master/docs/referenceConf.js
