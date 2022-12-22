set_env:
	. ./set-env.sh

build_frontend:
	bash ./frontend/build-push-frontend.sh

build_backend:
	bash ./backend/build-push-backend.sh