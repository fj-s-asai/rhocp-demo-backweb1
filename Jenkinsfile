pipeline {
  agent {
    node {
      label 'nodejs'
    }
  }
  stages {
    stage("project") {
      steps {
        script {
          openshift.withCluster() {
            openshift.withProject() {
              echo "Using project: ${openshift.project()}"
            }
          }
        }
      }
    }
    stage("build image") {
     steps {
        script {
          openshift.withCluster() {
            openshift.withProject() {
              echo "Build Appliction Image: backweb1"
              def bc = openshift.selector("bc", "backweb1-v10")
              def bc = openshift.selector("bc", "backweb1-v11")
              bc.startBuild().logs("-f")
              def bb = bc.narrow("bc").related("builds")
              timeout(10) {
                bb.untilEach(1) {
                  return (it.object().status.phase == "Complete")
                }
              }
            }
          }
        }
      }
    }
    stage("create tag") {
      steps {
        script {
          openshift.withCluster() {
            openshift.withProject() {
              echo "Create Tag Image: backweb1"
              openshift.tag("backweb1:1.0", "backweb1:1.1")
            }
          }
        }
      }
    }
  }
}
