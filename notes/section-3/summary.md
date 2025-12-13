# Module Summary

## How the Web Works

Client => Request => Server => Respons => CLient

## Program Lifecycle & Event Loop

- NodeJS runs non-Blocking JS Code and uses an event-driven code("Event Loop" for running your logic)
- A node Program exits as soon as there is no more work to do
- Note: The createServer() event never finishes by default

## Asynchronus Code

- JS code is non-blocking
- Use callbacks and events => Order Changes!

## Request and Respons

- Parse request data in chunks (stream & buffers)
- Avoid "double responses"

## NodeJS & Core Modules

- Node.js ships with multiaple core modules (http, fs, path...)
- Core Modules can be importes into any file to be used there
- Import via require("module)

## The node Module System

- Import cia request("./path-to-file") for custom fles or require("module") for core & third Party modules
- Export via modules.exports or just exports (for multiple exports)
