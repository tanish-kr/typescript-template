# TypeScript themplate

## Description

TypeScript template using webpack

```
|-- .gitignore
|-- .nycrc
|-- .sass-lint.yml
|-- README.md
|-- dist
|   |-- .gitkeep
|   |-- css
|   `-- js
|-- mocha.opts
|-- package.json
|-- src
|   |-- sass
|   `-- ts
|-- test
|   `-- app.spec.ts
|-- tsconfig.json
|-- tslint.json
|-- webpack.config.js
`-- yarn.lock
```

## Dependencies

- yarn
- TypeScript
- Sass
- webpack
- mocha
- chai

- for Mac OSX

```
$ brew install yarn
```

```
$ yarn
```

## Download

```
$ cd <project_directory>
$ curl -L https://github.com/kitaro-tn/typescript-template/tarball/master | tar xz --strip=1
```

## Scrpits

- test

```
$ yarn run test
```

- coverage

```
$ yarn run coverage
```

- document generate

```
$ yarn run doc
```

- lint Typescript

```
$ yarn run lint:ts
```

- lint Sass

```
$ yarn run lint:sass
```

- run webpack dev server

```
$ yarn run start:dev
```

- build webpack

```
$ yarn run build
```
