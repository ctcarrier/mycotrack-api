Requires [MongoDB][www.mongodb.com] running on localhost:27017 and [SBT 0.11.0][https://github.com/harrah/xsbt/wiki]

1. Launch [SBT](http://code.google.com/p/simple-build-tool).

        ./sbt


2. Run Jetty

        jetty-run


3. Run tests

        test

4. Package project as a runnable jar

        assembly

5. Run JAR

        java -Dakka.mode=dev -jar target/<JAR_NAME>.jar