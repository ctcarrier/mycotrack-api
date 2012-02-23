Requires [MongoDB][www.mongodb.com] running on localhost:27017 and [SBT 0.11.0][https://github.com/harrah/xsbt/wiki]

1. Launch [SBT](http://code.google.com/p/simple-build-tool).

        sbt


2. Run spray-can in continuous deployment mode.  Right now the akka.mode is configured in the build.sbt until we have a better way to override it at run time.

        ~re:start


3. Run tests

        test

