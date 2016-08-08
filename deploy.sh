sbt assembly
scp target/scala-2.11/mycotrack-api-assembly-0.1.0-SNAPSHOT.jar root@ocean:/usr/local/jar/mycotrack-api.jar
ssh root@ocean 'service mycotrack-api stop'
ssh root@ocean 'service mycotrack-api start'
