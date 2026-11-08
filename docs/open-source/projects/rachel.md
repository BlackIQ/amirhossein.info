# Rachel

**Rachel** is my personal AI assistant that controls real home devices.

She runs fully locally with a custom **Qwen3** model via Ollama, a FastAPI backend, a Next.js frontend, and talks to a **Raspberry Pi Pico** over Wi-Fi.

This is the latest generation of a project that started around 2019–2020.

## What she can do

- Multi-turn chat with history
- Tool calling for home sensors, LEDs, relays, and weather
- Control lights and devices through the Pico
- Reply in the user’s language (including Persian)

## Architecture

| Layer      | Technology                         | Role                         |
| ---------- | ---------------------------------- | ---------------------------- |
| Frontend   | Next.js, React, MUI                | Chat UI and tool results     |
| Backend    | FastAPI, SQLAlchemy, PostgreSQL    | Agent loop and API           |
| MCP Server | Go (Streamable HTTP / STDIO)       | Hardware & weather tools     |
| Firmware   | MicroPython, Microdot              | Pico device control          |
| Hardware   | Raspberry Pi Pico 2 W, DHT11, etc. | Sensors, LEDs, relays        |
| LLM        | Ollama + customized Qwen3          | Reasoning and tool selection |

## Focus areas

- Local LLM agents
- Tool calling and MCP
- IoT / home automation
- End-to-end full-stack + hardware integration

## Links

- [GitHub Repository](https://github.com/BlackIQ/Rachel)
