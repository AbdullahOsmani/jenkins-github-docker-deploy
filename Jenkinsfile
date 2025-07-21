pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("jenkins-node-app")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker rm -f jenkins-running-app || true'
                    sh 'docker run -d --name jenkins-running-app -p 3000:3000 jenkins-node-app'
                }
            }
        }
    }
}
