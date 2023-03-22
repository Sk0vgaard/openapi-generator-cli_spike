# OpenApiSpike

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

- Run `npm run start` for a development server.
- Run `npm run start:prod` for a production server.
- Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Angular OpenAPI Generated Client

This README describes how to generate Angular services, models, and enums from an OpenAPI YAML file and integrate them into an Angular application.
This README provides instructions on how to generate and use API client code for your project using the OpenAPI Generator CLI.

## Prerequisites

Before you begin, make sure you have [Node.js](https://nodejs.org/en/) installed.

## Installation

To use the OpenAPI Generator CLI, you need to install it as a global package:

```bash
$ npm install @openapitools/openapi-generator-cli -g
```

## Configuration
Create a configuration file openapitools.json in your project's root directory:
```
{
  "$schema": "./node_modules/@openapitools/openapi-generator-cli/config.schema.json",
  "spaces": 2,
  "generator-cli": {
    "version": "6.4.0"
  },
  "generatorName": "typescript-angular",
  "inputSpec": "openapi.yaml",
  "outputDir": "openapi-generator",
  "additionalProperties": {
    "basePath": "environment.path"
    }
}
```
This configuration uses the typescript-angular generator, with the input OpenAPI specification file openapi.yaml, and outputs the generated code to the openapi-generator directory. 
It also adds a "environment.path" as basePath to support multiple environments.

## Generating API client code
To generate the API client code using the provided openapitools.json, run the following command:

1. Run the generator command in the directory containing the OpenAPI YAML file (replace `path/to/openapi.yaml` with the correct path):

2. `$ openapi-generator-cli generate -c openapitools.json`
or
`npx @openapitools/openapi-generator-cli generate -i path/to/openapi.yaml -g typescript-angular -o openapi-generator`

Another alternative is to use the script `npm run openapi-generate:dev` or `npm run openapi-generate:prod` which uses the config in openapitools.json


## Integration
1. To integrate the generated API client code into your Angular project, follow these steps:
2. Add the generated openapi-generator folder to your Angular project's src directory.
Update your Angular project's tsconfig.json to include the path to the generated models and services:

```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@app/services/*": ["src/openapi-generator/api/*"],
      "@app/models/*": ["src/openapi-generator/model/*"]
    }
  }
}
```
3. In your Angular components, import and use the generated services:
```
import { ApiService } from '@app/api/api.service';

constructor(private apiService: ApiService) {}

// Example usage:
this.apiService.getSomething().subscribe(response => {
  console.log(response);
});
```
4. Remember to update the import statements and regenerate the code whenever you update the OpenAPI specification.



## OpenAPI YAML File

The OpenAPI YAML file used for this example contains the following API structure:

- Two API endpoints:
  - `GET /users/{id}`: Retrieve a single user by ID.
  - `GET /users`: Retrieve a list of all users.
- A User schema defining the user model.

## Generating Angular Files

To generate Angular services, models, and enums from the OpenAPI YAML file, use the `@openapitools/openapi-generator-cli`. 
Read more about [openapitools here](https://openapi-generator.tech/).

Follow these steps:

## Generated Files Structure

The generated files will have the following structure inside the `src/app/api` folder:
```
src/
└── app/
    └── api/
        ├── api.module.ts
        ├── configuration.ts
        ├── base.service.ts
        ├── api-client.ts
        ├── model/
        │   └── user.ts
        └── api/
            └── user.service.ts
```

- `api.module.ts`: The API module file for bundling all generated services.
- `configuration.ts`: The configuration file containing settings for the API client.
- `base.service.ts`: The base service file with common logic for making API calls.
- `api-client.ts`: The API client file, which is a simple HTTP client that wraps the Angular HttpClient.

Inside the `model` folder:
- `user.ts`: TypeScript model file representing the User schema.

Inside the `api` folder:
- `user.service.ts`: TypeScript service file containing methods for making HTTP requests to the User API endpoints.

