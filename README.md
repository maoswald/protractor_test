# Protractor test

###Test of the testframework [Protractor](http://angular.github.io/protractor/#/)

###Introduction
[Introduction by Ramon Victor](http://ramonvictor.github.io/protractor/slides/#/)

###Config overview:
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

Run separately before

```
make test-env
```

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

