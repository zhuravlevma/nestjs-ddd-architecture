## Description

[Domain model](https://martinfowler.com/eaaCatalog/domainModel.html) with a clean architecture with ports and adapters. It takes into account some tactical patterns from DDD.

### Module boundaries

If you have a large monolith that contains many bounded contexts, then the service can be divided into modules by context.

If you have a micro service architecture and you prefer to allocate contexts to different services (which is preferable), then the service can be divided into modules by aggregates.

This is not a production ready solution. For example, eventemitter needs to be replaced with a separate message broker that supports retry with confirmation.

In this example, there are more than one bounded contexts, you have a monolith in front of you. And this monolith is internally divided into modules according to bounded contexts.

### Architecture
![example-uml](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/zhuravlevma/nestjs-clean-architecture/main/diagram.iuml)


### Event Storming schema

![image](https://github.com/zhuravlevma/nestjs-clean-architecture/assets/44276887/396d6ec0-bc43-4cf3-9dec-a77625f2fd11)


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
