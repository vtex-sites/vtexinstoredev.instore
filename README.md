# VTEX inStore Dev

This project is to launch the tenant vtexinstoredev using the instore-core Gatsby plugins.

## Setup

```bash
yarn
```

PS.: must have npm permission to use private @vtexlab packages

## Run

```bash
yarn start
```

## Build

```bash
yarn build
```

To test build:

```bash
yarn serve
```

## Test

```bash
yarn test
```

## To launch another version

```
Open a PR on this repo (probably updating @vtexlab/gatsby-theme-instore-core version)
```

## To run Cypress locally

Declare the environment variables on your terminal:

```bash
export CYPRESS_DEFAULT_LOGIN='VALUE'
export CYPRESS_DEFAULT_PASSWORD='VALUE'
```

And run Cypress with:

```bash
yarn cypress:open
```
