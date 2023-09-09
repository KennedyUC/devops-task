ENV :=dev
SHELL := /bin/bash

CWD:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

ifeq ($(ENV), dev)
	SKAFFOLD_DEFAULT_REPO := ""
endif

DOCKER_PASSWORD := ""

docker_login:
	echo $(DOCKER_PASSWORD) | docker login -u $(SKAFFOLD_DEFAULT_REPO) --password-stdin

skaffold-build:
	skaffold build  --platform linux/amd64 --default-repo="$(SKAFFOLD_DEFAULT_REPO).azurecr.io" --push

build_frontend:
	bash ./frontend/build-push-frontend.sh

build_backend:
	bash ./backend/build-push-backend.sh

list_pods:
	kubectl get pods -A

list_svc:
	kubectl get svc -A

install_istio:
	helm repo add istio https://istio-release.storage.googleapis.com/charts && \
	helm repo update && \
	helm install istio-base istio/base -n istio-system --create-namespace && \
	helm install istiod istio/istiod -n istio-system --wait && \
	kubectl label namespace default istio-injection=enabled && \
	helm install istio-ingress istio/gateway --wait

uninstall_istio:
	helm uninstall istio-base -n istio-system && \
	helm uninstall istiod -n istio-system && \
	helm uninstall istio-ingress

install_ingress:
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml

uninstall_ingress:
	kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml

install_app_istio:
	helm install test-app test-helm-istio

install_app_nginx:
	helm install test-app test-helm-nginx

upgrade_app_nginx:
	helm upgrade test-app test-helm-nginx

upgrade_app_istio:
	helm upgrade test-app test-helm-istio

uninstall_app:
	helm uninstall test-app
