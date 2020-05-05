---
page_type: sample
languages:
- javascript
products:
- azure
- vuejs
description: "Products Manager application for Serverless API Module"
---

# Sample

This is a sample web application frontend for the Serverless API Learn Module.

## Contents

Outline the file contents of the repository. It helps users navigate the codebase, build configuration and any related assets.

| File/folder       | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `frontend`        | The frontend website for the Products Manager application. |
| `api`             | An empty folder where the user will create the API project |
| `.gitignore`      | Define what to ignore at commit time.                      |
| `CHANGELOG.md`    | List of changes to the sample.                             |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample.                 |
| `README.md`       | This README file.                                          |
| `LICENSE`         | The license for the sample.                                |

## Prerequisites

- Node.js

## Setup

Switch to the "frontend" directory.

## Running the sample

Run `npm start`.

## Key concepts

The "frontend" folder contains a single `index.html` file. This file defines the interface for the Products Manager application. It references the Bulma CSS framework, the Vue.js JavaScript framework, and a reference to the `index.js` file.

The `index.js` file is a single Vue.js object which the `index.html` file needs to properly function. This `index.js` file contains all of the application logic, binding code and AJAX requests.
