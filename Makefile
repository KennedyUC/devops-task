set_env:
	bash set_env.sh && ./set_env.sh

build_frontend:
	bash frontend/build-push-frontend.sh && ./frontend/build-push-frontend.sh

build_backend:
	bash backend/build-push-backend.sh && ./backend/build-push-backend.sh