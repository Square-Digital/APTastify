# Aptastify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Docker Deployment

### AWS Profile Setup

If you have multiple AWS accounts, you may need to switch to the correct profile:

```bash
# List available profiles
aws configure list-profiles

# Switch to aptastify profile for current session
export AWS_PROFILE=aptastify

# Or use profile for a single command
aws sts get-caller-identity --profile aptastify
```

### Deploy to ECR

1. **Authenticate with ECR:**
   ```bash
   aws ecr get-login-password --region us-east-2 --profile aptastify | docker login --username AWS --password-stdin 425865275823.dkr.ecr.us-east-2.amazonaws.com
   ```

2. **Build your Docker image for Linux:**
   ```bash
   docker build --platform linux/amd64 -t aptastify-ui .
   ```

3. **Tag your image:**
   ```bash
   docker tag aptastify-ui:latest 425865275823.dkr.ecr.us-east-2.amazonaws.com/aptastify-ui:latest
   ```

4. **Push to ECR:**
   ```bash
   docker push 425865275823.dkr.ecr.us-east-2.amazonaws.com/aptastify-ui:latest
   ```

**Note:** The `--platform linux/amd64` flag ensures the image is built for Linux (not macOS) and will run properly in AWS environments.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
