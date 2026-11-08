# TGJU API

A production-ready API that scrapes [tgju.org](https://www.tgju.org) and exposes clean, structured data for **gold** and **currency** prices.

Built with **FastAPI**, **HTTPX**, **Pydantic**, background workers (Celery), Redis, and RabbitMQ.

## Why it matters

Paid APIs for the same data were expensive. I built a free, reliable alternative that is actually used in production.

The service currently handles **at least 10,000 requests per day**.

## Architecture

- FastAPI for the public API
- Background scraping with Celery + Celery Beat
- Redis as the shared data store for latest prices
- RabbitMQ as the message broker
- Decoupled scraping from the request lifecycle for better reliability

## Links

- [GitHub Repository](https://github.com/BlackIQ/tgju-api)
- Live API: [tgju.amirhossein.info](https://tgju.amirhossein.info)
- Swagger: [tgju.amirhossein.info/docs](https://tgju.amirhossein.info/docs)
- Redoc: [tgju.amirhossein.info/redoc](https://tgju.amirhossein.info/redoc)
