pipeline {
    agent {
        node {
            label 'agent_nuxt'
        }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building..'
                    sh('''
                        sudo npm install -g pnpm
                        sudo npm install -g pm2
                        rm -Rf ./node_modules
                        pnpm install
                        pnpm build
                    ''')

                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                script {
                    sh('''
                        pnpm run test:ci-cd
                    ''')
                    echo 'Finished tests!'
                }
            }
        }
        stage('SonarQube Quality Gate') {
            steps {
                echo 'Check quality..'
                script {
                    def scannerHome = tool 'sonarqube-scanner';
                    def sonarqubeBranch = 'chartman2.fr-develop';
                    withCredentials([string(credentialsId: 'sonarqube-server', variable: 'SONAR_URL')]) {
                        withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_CREDENTIALS')]) {
                            withSonarQubeEnv() {
                                if (env.BRANCH_NAME == 'main') {
                                    sonarqubeBranch = 'chartman2.fr'
                                }
                                sh "${scannerHome}/bin/sonar-scanner \
                                        -Dsonar.projectKey=$sonarqubeBranch \
                                        -Dsonar.sources='pages, layouts, components, stores, composables' \
                                        -Dsonar.exclusions=public/**/* \
                                        -Dsonar.host.url=$SONAR_URL \
                                        -Dsonar.token=$SONAR_CREDENTIALS \
                                        -Dsonar.testExecutionReportPaths=sonar-report.xml \
                                        -Dsonar.javascript.lcov.reportPaths=./coverage/lcov.info"
                            }
                        }
                    }
                }
            }
        }
        stage("Quality Gate") {
            steps {
                script {
                    withSonarQubeEnv() {
                        sleep(10)
                        timeout(time: 1, unit: 'HOURS') {
                            def qualitygate = waitForQualityGate()
                            if (qualitygate.status != "OK") {
                                env.WORKSPACE = pwd()
                                error "Pipeline aborted due to quality gate coverage failure: ${qualitygate.status}"
                            }
                        }
                    }
                }
            }
        }
        stage('Github update') {
            steps {
                script {
                    def giteaBranch = env.BRANCH_NAME;
                    if (env.BRANCH_NAME.startsWith('PR')) {
                        echo "PR branch"
                    } else {
                        if (env.BRANCH_NAME == 'main') {
                            withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_CREDENTIALS')]) {
                                sh '''
                                    if git remote | grep github > /dev/null; 
                                    then
                                        git remote rm github
                                    fi
                                    
                                    if [ -f ../.ssh/id_ed25519.pub ]
                                    then
                                        sudo rm ../.ssh/id_ed25519.pub
                                    fi

                                    git remote add github https://$GITHUB_CREDENTIALS@github.com/chartman2/chartman2.fr.git
                                '''
                                sh """
                                    git config --global user.email "chartmann.35@gmail.com"
                                    git config --global user.name "Christophe Hartmann"
                                    touch github-update.txt
                                    touch ./.sonarcloud.properties
                                    echo "sonar.sources=pages,layouts,components,store" >> ./.sonarcloud.properties
                                    echo "sonar.exclusions=test/**/*, coverage/**/*" >> ./.sonarcloud.properties
                                    echo "sonar.testExecutionReportPaths=test-report.xml" >> ./.sonarcloud.properties
                                    echo "sonar.javascript.lcov.reportPaths=./coverage/lcov.info" >> ./.sonarcloud.properties
                                    git add .
                                    git commit -m "feat(github): update repository"
                                    git push -f github HEAD:main
                                """
                            }
                        }
                        if (env.BRANCH_NAME == 'develop') {
                            withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_CREDENTIALS')]) {
                                sh """
                                    if [ -f ../.ssh/id_ed25519.pub ]
                                    then
                                        sudo rm ../.ssh/id_ed25519.pub
                                    fi
                                    
                                    if git remote | grep github > /dev/null; 
                                    then
                                        git remote rm github
                                    fi
                                    
                                    git config --global user.email "chartmann.35@gmail.com"
                                    git config --global user.name "Christophe Hartmann"
                                    git config --global http.sslverify false
                                    git remote add github https://$GITHUB_CREDENTIALS@github.com/chartman2/chartman2.fr.git
                                    
                                    touch github-update.txt
                                    touch ./.sonarcloud.properties
                                    
                                    echo "sonar.sources=pages,layouts,components,store" >> ./.sonarcloud.properties
                                    echo "sonar.exclusions=test/**/*, coverage/**/*" >> ./.sonarcloud.properties
                                    echo "sonar.testExecutionReportPaths=test-report.xml" >> ./.sonarcloud.properties
                                    echo "sonar.javascript.lcov.reportPaths=./coverage/lcov.info" >> ./.sonarcloud.properties
                                    
                                    git add .
                                    git commit -m "feat(github): update repository"
                                    git push -f github HEAD:develop
                                """
                            }
                        }
                        echo 'Github finished'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploy finished'
                    // withCredentials([string(credentialsId: 'home-dev-staging-ip', variable: 'HomeStagingIp')]) {
                    //     withCredentials([string(credentialsId: 'production-ip-1', variable: 'ProductionIp')]) {
                    //         withCredentials([string(credentialsId: 'production-port', variable: 'ProductionPort')]) {
                    //             withCredentials([file(credentialsId: 'staging-ssh-id-file', variable: 'sshId')]) {
                    //                 withCredentials([file(credentialsId: 'chartman2-fr-frontend-env', variable: 'envFile')]) {
                    //                     writeFile file: './.env', text: readFile(envFile)
                    //                     sh '''
                    //                         if [ ! -d ~/.ssh ]
                    //                         then
                    //                             mkdir ~/.ssh
                    //                         fi
                    //                         if [ -f ../.ssh/id_ed25519.pub ]
                    //                         then
                    //                             sudo rm ../.ssh/id_ed25519.pub
                    //                         fi
                    //                     '''
                    //                     writeFile file: '../.ssh/id_ed25519.pub', text: readFile(sshId)
                    //                     sh '''
                    //                         if [ -f ../.ssh/id_ed25519.pub ]
                    //                         then
                    //                             chmod 400 ../.ssh/id_ed25519.pub
                    //                         fi

                    //                         if [ -f "~/.ssh/known_hosts" ]
                    //                         then
                    //                             sudo rm ~/.ssh/known_hosts
                    //                         fi

                    //                         touch ~/.ssh/known_hosts
                    //                         ssh-keyscan -t rsa $HomeStagingIp >> ~/.ssh/known_hosts
                    //                         ssh-keyscan -t rsa -p $ProductionPort $ProductionIp >> ~/.ssh/known_hosts
                    //                     '''
                    //                     if (env.BRANCH_NAME == 'main') {
                    //                         sh '''
                    //                             pm2 deploy production
                    //                         '''
                    //                     }
                    //                     // if (env.BRANCH_NAME == 'develop') {
                    //                     //     sh '''
                    //                     //         pm2 deploy staging
                    //                     //     '''
                    //                     // }
                    //                 }
                    //             }
                    //             echo "PR branch"
                    //         }
                    //     }
                    // }
                }
            }
        }
    }
}