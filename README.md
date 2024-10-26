# Cream Biscuit

_Cookiecutter template for full-stack web app_

## Uses

- Python 3.12 / FastAPI
- Svelte 5 / Sveltekit
- Docker
- MongoDB

## Deployment

- Copy `.env.example` to `.env` and set the variables.
- Run `docker compose up` to start the app.

## Notes

- Note that the `data` folder is mounted as a volume and changes are persisted.
- Mongo logs have been suppressed by default. You can change this in `docker-compose.yml`.
