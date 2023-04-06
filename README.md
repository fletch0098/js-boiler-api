# js-boiler-api

Node.js Api boiler plate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Description

Node.js Api boiler plate to kick off backend projects

## Requirements

- Git
- Node

## Installation

Clone the repo, install the dependencies

```bash
git clone https://github.com/fletch0098/js-boiler-api
cd js-boiler-api
```

```bash
npm install
```

## Settings

The apps settings all have defaults with no sensitive data, but if you wish to modify them create a .env from the .env.example.

NODE_ENV="local"
APP_NAME="js-boiler-api"
PORT="3000"
URL="http://localhost:3000"
LOG_LEVEL="info"

## Starting the api

Start the api and recieve requests.

```bash
npm start
```

or in development mode

```bash
npm run start:dev
```

## Api Docs

Api is documented using swagger. Generate the documentation bu running:

```bash
npm run swagger-autogen
```

You can view the documentation at /doc

## ATesting

Api uses Jest for Unit and Integration tests. Run the tests and/ or view code coverage:

```bash
npm test
```

or

```bash
npm test -- --coverage
```

## Roadmap

Some possible oppurtunities for enhacement in the future could be:

- User - Authentication with Users and JWT

## Logs

Logs can be found in the /logs folder. When running in production there is no console log.

## License

[GNU](https://choosealicense.com/licenses/gpl-3.0/)
