# Code to cloud

## What? Why? How?

You probably have some apps you wrote for fun/class/someone else.

## Demo

What you need:
- Simple node app [node-app](node-app)
- An Azure subscription (free tier is fine)
- Docker Hub account
- Docker CLI / Docker Desktop

### Build and Push the Docker image

```bash
docker build -t <DOCKER_HUB_USERNAME>/cs-000-demo .
docker push <DOCKER_HUB_USERNAME>/cs-000-demo
```

### Azure App Service

1. Log into [Azure](portal.azure.com).
2. Go to "App Services".
3. Click on "Add".
4. Select your subscription, and resource group (you can create a new one, if needed).
5. Enter a name, select "Docker Container" as the runtime stack, "Linux" as the operating system, and a convenient region.
6. On the next page, select "Docker Hub" as the image source, and enter <DOCKER_HUB_USERNAME>/cs-000-demo in the image and tag.
7. That's it! Click "Review + create".
