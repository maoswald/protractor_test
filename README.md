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

###Debugging
[Debugging possibilities](https://github.com/angular/protractor/blob/master/docs/debugging.md)

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

