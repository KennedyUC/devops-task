#!/bin/sh

function log {
  echo "$@"
  return 0
}

# Login to Docker Container Registry
log '✅ Authenticating with Docker Container Registry...'
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER_NAME --password-stdin

# Docker build image
log '✅ Docker building $IMAGE_NAME image for $IMAGE_TAG version...'

docker build -t $FRONTEND_IMAGE_NAME:$FRONTEND_IMAGE_TAG ./frontend

# Docker tag image
log '✅ Tagging image for deployment to Docker...'

docker tag $FRONTEND_IMAGE_NAME:$FRONTEND_IMAGE_TAG $DOCKER_USER_NAME/$FRONTEND_IMAGE_NAME:$FRONTEND_IMAGE_TAG

# Docker push image to container registry
log '✅ Push image to Dockerhub account...'

docker push $DOCKER_USER_NAME/$FRONTEND_IMAGE_NAME:$FRONTEND_IMAGE_TAG