pipeline {
  agent any

  stages {
    stage('📦 Clone Repository') {
      steps {
        echo "✅ Cloning repo..."
        git url: 'https://github.com/ankitaubale1323/to-do-list-fullstack.git', branch: 'main'
      }
    }

    stage('🐳 Docker Compose Build & Run') {
      steps {
        echo "🔧 Running docker-compose..."
        sh 'docker-compose down -v'
        sh 'docker-compose up --build -d'
      }
    }
  }
}
