
all: scripts/ styles/ scripts/shower.min.js styles/screen.css fonts/ images/

scripts/:
	@mkdir $@

styles/:
	@mkdir $@

scripts/shower.min.js: bower_components/shower-core/shower.min.js
	@cp -rf $< $@

styles/screen.css: bower_components/shower-ribbon/styles/screen.css
	@cp -rf $< $@

fonts/: bower_components/shower-ribbon/fonts/
	@cp -rf $< $@

images/: bower_components/shower-ribbon/images/
	@cp -rf $< $@

