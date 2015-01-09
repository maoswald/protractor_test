exports.config = {

    capabilities: {
        'browserName': 'chrome'
    },

    suites: {
        angular: 'angularjs_hp_test/*.js',
        protractor: 'protractor_demo_test/*.js'
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
