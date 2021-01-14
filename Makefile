init:
	yarn
	cd ios && \
		pod install
clean:
	rm yarn.lock
	rm -r node_modules
	rm ios/Podfile.lock
	rm -rf ios/Pods
