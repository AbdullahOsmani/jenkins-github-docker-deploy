# jenkins-github-docker-deploy



#  CI/CD Pipeline: GitHub → Jenkins → Docker (Deployed on AWS EC2)

##  Project Summary

This project demonstrates a complete **CI/CD pipeline** using **GitHub**, **Jenkins**, and **Docker**, deployed on an **AWS EC2 instance**. The goal is to automate application deployment such that every push to GitHub triggers Jenkins to pull the code, build a Docker image, and run the containerized app.

---

## Tools & Technologies

* **AWS EC2** (Ubuntu 22.04 LTS, `t3.small`)
* **Jenkins**
* **Docker**
* **GitHub**
* **Git**
* **SSH**

---

##  How It Works

1. **Code Push to GitHub**
   → triggers Jenkins webhook (or poll SCM).

2. **Jenkins Pipeline**
   → clones the repo, builds a Docker image, and runs a container.

3. **Deployment**
   → app is automatically deployed on the EC2 server inside Docker.

---

##  Jenkins Job Example

Pipeline script:

```groovy
pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 80:3000 myapp:latest'
            }
        }
    }
}
```

---

## 🧩 Problems Faced & Solutions

| Problem                      | Cause                        | Solution                                          |
| ---------------------------- | ---------------------------- | ------------------------------------------------- |
| SSH unresponsive             | Low memory (t3.micro)        | Upgraded to `t3.small`                            |
| Jenkins failed to load       | Jenkins not running          | Restarted Jenkins: `sudo systemctl start jenkins` |
| Plugin install failed        | Insufficient memory          | Instance upgrade fixed it                         |
| “Site not secure” warning    | No HTTPS                     | Accepted HTTP for local lab                       |
| `curl` shows wrong IP        | Outbound IP != EC2 public IP | Use EC2 Dashboard Public IP                       |
| Laptop sleep closed terminal | Session disconnect           | SSH again + restart Jenkins                       |



## ✅ Outcome

* Fully automated CI/CD pipeline working from GitHub to Docker deployment.
* Hands-on experience with Jenkins, Docker, and EC2.
* Debugging and system resource tuning experience (Jenkins on EC2).

---

