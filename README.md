**Table of Contents**
- [Installation](#installation)
    - [Setting up pnpm](#setting-up-pnpm)
    - [Setup the project](#setup-the-project)
- [Technologies](#technologies)
## Installation
We are using `16.6.1` version for node, We strongly recommand you to use [nvm](https://github.com/nvm-sh/nvm) to manage multiple node version,

```shell
# install node version 16.6.1
nvm install 16.6.1
# if you already have 16.6.1
nvm use 16.6.1
# optional, set to default
nvm default 16.6.1
```

#### Setting up pnpm
This project uses [pnpm](https://pnpm.io/) for managing its packages.  
To install pnpm, please select one of the following installation methods:  
  
Using a standalone script 
```shell
curl -f https://get.pnpm.io/v6.7.js | node - add --global pnpm
```

On Windows (PowerShell):  
```shell
(Invoke-WebRequest 'https://get.pnpm.io/v6.7.js' -UseBasicParsing).Content | node - add --global pnpm
```

Using npm
```shell
npm install -g pnpm
```

Via npx resolution
```shell
npx pnpm add -g pnpm
```

#### Setup the project
To have the project running, we first need to install the required dependencies and build the project.
```shell
pnpm install
pnpm clean && pnpm build
```
Once the project is built, we can run it by running the following command
```shell
pnpm dev
```

After you ran the above command, it will automatically setup a server pointing to the following url: http://localhost:3000. 

## Technologies
| Purpose                 | Item                                   | Description                                    |
| ----------------------- | -------------------------------------- | ---------------------------------------------- |
| Programming Language    | Typescript                             |                                                |
| VDOM framework          | React                                  | React 17                                       |
| Global State Management | Redux                                  | 5                                              |
| UI Framework            | Material UI                            |                                                |
| Unit tests              | Mocha / Jest                           |                                                |
| Linting                 | ESlint                                 | Airbnb Extension                               |
| Compile / Building      | Vite / tsc                             |                                                | 
| API				              | Node                      						 | node.js (16.6.1 LTS)                           |
