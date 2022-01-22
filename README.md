1. `npm test`
- The api seems not intact so the test case is not complete.

2. `./device-api/Dockerfile`

3. `./docker-compose.yaml`

4. `./k8s` 
- I am not in favor of using DB connection as the liveness/readiness probe. I will ask the developer to standardize the health check under /health and /ready under either grpc health probe (for go lang) or custom http test. This health check endpoint will be used as monitoring endpoint as well. This will become really important if AWS load balancer controller is implemented.

5. Not sure what platform is needed. If the application is running on k8s, ArgoCD + GitHub + Molliza SOPS should be enough.

6. 
- CI: Any CI software/platform (e.g. travisCI, circleCI, Github Action, Jenkins, CodeBuild) is fine.
- CD: ArgoCD/FluxCD is recommended.
- I have a full set CICD (with approval flow) running in production environment for over 1 year. I can share it later.
