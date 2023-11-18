pipeline {
    agent any

    tools {
        jdk 'jdk17'
        nodejs 'node20'
    }

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }

    stages {
        stage('Clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout from Git') {
            steps {
                git branch: 'main', url: 'https://github.com/Zackaria-Slimane/gittrackr.git'
            }
        }

        stage("SonarQube Analysis") {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh """$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Gittracker \
                        -Dsonar.projectKey=Gittracker"""
                }
            }
        }

        stage("Quality gate") {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonarqube'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "npm install"
            }
        }

        stage('OWASP FS SCAN') {
            steps {
                dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit', odcInstallation: 'dp-check'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

        stage('TRIVY FS SCAN') {
            steps {
                sh "trivy fs . > trivyfs.txt"
            }
        }
				stage("Configure Docker") {
						steps {
								script {
										echo "Attempting to add jenkins to the docker group..."

								}
						}
				}
				stage("Docker Build & Push") {
						steps {
								script {
										withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
												sh "docker buildx build -t gittracker ."
												sh "docker tag gittracker zackariasl/gittracker:latest"
												sh "docker push zackariasl/gittracker:latest"
										}
								}
						}
				}
        stage("Docker TRIVY") {
            steps {
                sh "trivy image zackariasl/gittracker:latest > trivy.txt"
            }
        }
    }
}
