# Maia Score API Documentation

[![Build Status](https://travis-ci.com/maia-score/documentation.svg?branch=master)](https://travis-ci.com/maia-score/documentation)

This is the main API documentation repository for *Maia Score*.

- To visit the online documentation please refer to the [live site of this document](https://maia.synx.ai/documentation).
- To learn more, please visit [main site](https://maia.synx.ai/documentation).


# To update or maintain this repository

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Compile OpenAPI to Markdown

```console
yarn openapi2md --spec spec/openapi.json --target docs/paths
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
