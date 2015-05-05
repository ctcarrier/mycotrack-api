import AssemblyKeys._

import com.typesafe.sbt.SbtStartScript

organization := "mycotrack"

name := "mycotrack-api"

version := "0.1.0-SNAPSHOT"

scalaVersion := "2.11.5"

seq(assemblySettings: _*)

seq(Revolver.settings: _*)

seq(SbtStartScript.startScriptForClassesSettings: _*)

scalacOptions ++= Seq("-feature")

parallelExecution in Test := false

javaOptions in Revolver.reStart += "-Dakka.mode=dev"

javaOptions in Revolver.reStart += "-Xdebug"

javaOptions in Revolver.reStart += "-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"

unmanagedResourceDirectories in Compile <+=
    (baseDirectory) { _ / "src" / "main" / "webapp" }

ivyXML :=
 	        <dependencies>
 	        	<exclude org="org.slf4j" module="slf4j-simple"/>
	 	        <exclude org="commons-logging" module="commons-logging"/>
 	        </dependencies>

ivyScala := ivyScala.value map { _.copy(overrideScalaVersion = true) }

libraryDependencies ++= Seq(
  //LOGGING
  "org.slf4j" % "jcl-over-slf4j" % "1.7.7",
  "org.slf4j" % "slf4j-api" % "1.7.7",
  "com.typesafe.scala-logging" %% "scala-logging" % "3.0.0",
  "ch.qos.logback" % "logback-classic" % "1.1.2",
  "ch.qos.logback" % "logback-core" % "1.1.2",
    //SPRAY
  "io.spray" %% "spray-routing" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-http" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-httpx" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-can" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-io" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-caching" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-client" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-util" % "1.3.1" % "compile" withSources(),
  "io.spray" %% "spray-testkit" % "1.3.1" % "test" withSources(),
    //AKKA
  "org.scaldi" %% "scaldi-akka" % "0.4",
  "com.typesafe.akka" %% "akka-actor" % "2.3.6",
  "com.typesafe.akka" %% "akka-slf4j" % "2.3.6",
  "org.json4s" %% "json4s-jackson" % "3.2.11",
  "com.github.nscala-time" %% "nscala-time" % "1.4.0",
  "org.mindrot" % "jbcrypt" % "0.3m",
  //ReactiveMongo
  "org.reactivemongo" %% "reactivemongo" % "0.10.5.0.akka23" % "compile",
  //TESTING
  "org.specs2" %% "specs2" % "2.4.2" % "test",
  "org.scalatest" % "scalatest_2.11" % "2.2.2" % "test",
  "commons-codec" % "commons-codec" % "1.10"
)

resolvers ++= Seq(
  "Akka Repository" at "http://repo.typesafe.com/typesafe/releases",
  "Sonatype OSS" at "http://oss.sonatype.org/content/repositories/releases/",
  "Sonatype OSS Snapshots" at "http://oss.sonatype.org/content/repositories/snapshots/",
  "Web plugin repo" at "http://siasia.github.com/maven2",
  "Akka Repo" at "http://akka.io/repository",
  "repo.novus rels" at "http://repo.novus.com/releases/",
  "repo.novus snaps" at "http://repo.novus.com/snapshots/",
  "Spray repo" at "http://repo.spray.cc"
)
