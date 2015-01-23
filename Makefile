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

run-elementexplorer:
	webdriver-manager start &
	sleep 3
	/usr/local/lib/node_modules/protractor/bin/elementexplorer.js http://localhost:3000

run-elementexplorer:
	webdriver-manager start &
	sleep 3
	/usr/local/lib/node_modules/protractor/bin/elementexplorer.js http://localhost:3000/$(P)

run-tests-saucelabs:
	export SAUCE_USERNAME=
	export SAUCE_ACCESS_KEY=
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


