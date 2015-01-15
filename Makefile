install:
	npm install
	npm install protractor -g
	webdriver-manager update

fix-permission:
	sudo chown -R $(whoami) ~/.npm
	sudo chown -R `whoami` /usr/local/lib/node_modules

run-tests:
	protractor tests/e2e/protractor.conf.js

run-test:
	protractor tests/e2e/protractor.conf.js --suite $(S)

run-tests-saucelabs:
	protractor tests/e2e/protractor.saucelabs.conf.js

drone-run-tests:
	npm install protractor -g
	webdriver-manager update
	sudo start xvfb
	protractor tests/e2e/protractor.drone.conf.js

drone-run-tests-saucelabs:
	npm install protractor -g
	webdriver-manager update
	sudo start xvfb
	protractor tests/e2e/protractor.saucelabs.conf.js
