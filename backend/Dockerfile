FROM tiangolo/uvicorn-gunicorn:python3.11-slim
RUN apt-get update && apt-get install weasyprint -y

COPY backend/requirements.txt /tmp/requirements.txt

RUN pip install --no-cache-dir -r /tmp/requirements.txt

COPY backend/app /app
