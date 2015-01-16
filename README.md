# Protractor test

###Test of the testframework [Protractor](http://angular.github.io/protractor/#/)

###Introduction & Overview
[Introduction by Ramon Victor](http://ramonvictor.github.io/protractor/slides/#/)

[Practical End-to-End Testing with Protractor](http://www.ng-newsletter.com/posts/practical-protractor.html)

[Get Hands-on with Protractor in 3 Steps](http://www.thoughtworks.com/de/insights/blog/hands-protractor-3-steps)

[An Introduction to AngularJS End to End Testing with Protractor - Youtube](https://www.youtube.com/watch?v=idb6hOxlyb8)

###Doc files:
[Github](https://github.com/angular/protractor/tree/master/docs)

###Config file:
[Config file overview](https://github.com/angular/protractor/blob/master/docs/referenceConf.js)

##Setup
###Required

[NodeJS](http://nodejs.org/)

###How to setup

```
git clone git@github.com:maoswald/protractor_test.git
cd protractor_test
make install
```

###Run tests

Start all tests

```
make run-tests
```

Start single test suite, e.g. 'protractor' suite

```
make run-test S=protractor
```

Start multiple test suites

```
make run-test S=protractor,angular
```

To find elements you can use the elementexplorer

```
make run-elementexplorer
```

If you want to use the elementexplorer without AngularJS pass this after starting

```
browser.ignoreSynchronization = true
```

##CI

To run on [Drone.io](https://drone.io/) add the following line as Command at drone.io

```
make drone-run-tests
```

To connect to sauce labs (sauce: [Sauce labs connection](http://lkrnac.net/blog/tag/protractor/)) add the following
lines at drone.io

As Environment Variables with your own username and access key

```
export SAUCE_USERNAME=
export SAUCE_ACCESS_KEY=
```

As Commands

```
wget https://saucelabs.com/downloads/sc-latest-linux.tar.gz
tar -xzvf sc-latest-linux.tar.gz
cd sc-4.3-linux/bin
./sc &
cd ../..
make drone-run-tests-saucelabs
kill %1
```

To Run sauce labs tests local you have to add your sauce labs credentials to the make file and then run

```
make run-tests-saucelabs
```

##Protractor without AngularJS

Pass this after the outer descripe block in every test

```
beforeEach(function() {
	isAngularSite(false); // isAngularSite(true), if it's an Angular app!
});
```

##How to use Protractor and test behaviors

####Remember: Every test has to fail at least once!

####To run just these tests rename (Jasmin style)

```
describe() -> ddescribe()
it() -> iit()
```

###Protractor functions

```
protractor.wrapDriver

protractor.By
protractor.By.binding
protractor.By.select
protractor.By.selectedOption
protractor.By.input
protractor.By.repeater
protractor.By.className
protractor.By.class name
protractor.By.css
protractor.By.id
protractor.By.js
protractor.By.linkText
protractor.By.link text
protractor.By.name
protractor.By.partialLinkText
protractor.By.partial link text
protractor.By.tagName
protractor.By.tag name
protractor.By.xpath
```
###Browser functions

```
browser.controlFlow
browser.schedule
browser.getSession
browser.getCapability
browser.quit
browser.actions
browser.executeScript
browser.executeAsyncScript
browser.call
browser.wait
browser.sleep
browser.getWindowHandle
browser.getAllWindowHandles
browser.getPageSource
browser.close
browser.getCurrentUrl
browser.getTitle
browser.findDomElement_
browser.isElementPresent
browser.takeScreenshot
browser.manage
browser.navigate
browser.switchTo
browser.driver
browser.baseUrl
browser.moduleNames_
browser.moduleScripts_
browser.waitForAngular
browser.findElement
browser.findElements
browser.addMockModule
browser.clearMockModules
browser.get
```


###Debugging
[Debugging possibilities](https://github.com/angular/protractor/blob/master/docs/debugging.md)
[AngularJS Protractor Doc](https://github.com/angular/protractor/blob/master/docs/debugging.md)

To debug your code add

```
browser.pause()
```






