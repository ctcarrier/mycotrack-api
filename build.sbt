import AssemblyKeys._

import com.typesafe.startscript.StartScriptPlugin

organization := "mycotrack"

name := "mycotrack-api"

version := "0.1.0-SNAPSHOT"

scalaVersion := "2.9.1"

seq(assemblySettings: _*)

seq(Revolver.settings: _*)

seq(StartScriptPlugin.startScriptForClassesSettings: _*)

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

libraryDependencies ++= Seq(
  //LOGGING
    "org.slf4j" % "jcl-over-slf4j" % "1.6.1",
    "org.slf4j" % "slf4j-api" % "1.6.1",
    "com.weiglewilczek.slf4s" %% "slf4s" % "1.0.7",
    "ch.qos.logback" % "logback-classic" % "0.9.28" % "runtime",
    "ch.qos.logback" % "logback-core" % "0.9.28" % "runtime",
    //SPRAY
    "cc.spray" % "spray-base" % "1.0-M2" % "compile" withSources(),
    "cc.spray" % "spray-server" % "1.0-M2" % "compile" withSources(),
    "cc.spray" % "spray-can" % "1.0-M2" % "compile" withSources(),
    "cc.spray" % "spray-io" % "1.0-M2" % "compile" withSources(),
    //AKKA
    "com.typesafe.akka" % "akka-actor" % "2.0.1",
    "com.typesafe.akka" % "akka-testkit" % "2.0.1",
    "com.typesafe.akka" % "akka-slf4j" % "2.0.1",
  //LIFT-JSON
  "net.liftweb" % "lift-json-ext_2.9.0-1" % "2.4-M2",
  "net.liftweb" % "lift-json_2.9.0-1" % "2.4-M2",
  //CASBAH
  "com.mongodb.casbah" % "casbah_2.9.0-1" % "2.1.5.0",
  "com.novus" % "salat-core_2.9.0-1" % "0.0.8-SNAPSHOT",
  //TESTING
  "org.specs2" %% "specs2" % "1.5" % "test",
  "org.specs2" % "specs2-scalaz-core_2.9.0-1" % "6.0.RC2" % "test",
  // Dispatch
  "net.databinder" %% "dispatch-http" % "0.8.6"
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

testOptions in Test += Tests.Setup( loader => {
  val oldEnv = System.getProperty("akka.mode")
  if (oldEnv != null) {
    System.setProperty("akka.mode.old", oldEnv)
  }
  System.setProperty("akka.mode", "test")
} )

testOptions in Test += Tests.Cleanup( loader => {
  val oldEnv = System.getProperty("akka.mode.old")
  if (oldEnv != null) {
    System.setProperty("akka.mode", oldEnv)
  }
} )
