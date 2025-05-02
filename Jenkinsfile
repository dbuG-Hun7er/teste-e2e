pipeline {
    agent any

    stages {
        stage('Clonando repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/dbuG-Hun7er/teste-e2e.git'
            }
        }

        stage('Configuração - Instalação') {
            steps {
                sh 'npm install'
            }
        }

        stage('Testes') {
            steps {
                sh 'npm run cy:run'
            }
        }
    }
}
