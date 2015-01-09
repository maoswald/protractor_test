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

###CI
[Sauce labs connection](http://lkrnac.net/blog/tag/protractor/)

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

##CI

To run on [Drone.io](https://drone.io/) add the following line as Command at drone.io

```
make run-drone-tests
```

