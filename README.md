# js-type-gen
CLI for generating JS6 classes. A wrapper around [generator-js-type](https://github.com/igorlima/generator-js-type), which is a [Yeoman Generator](http://yeoman.io/authoring/index.html);

## Install

```sh
npm install -g js-type-gen
```

## Get started

There are two ways to generate JS6 classes:

1. by scaffolding:
 - require the `--classname` argument plus the **class name**
 - take a look at the example bellow:
 - ![example on how to scaffold a js6 class](https://raw.githubusercontent.com/igorlima/js-type-gen/images/images/scaffolding-a-js6-class.gif)

2. from json-schema file:
 - require the `--jsonpath` argument plus the path of **json-schema** file
 - see example bellow:
 - ![example on how generate js6 classes from json schemas](https://raw.githubusercontent.com/igorlima/js-type-gen/images/images/generating-js6-classes-from-json-schema.gif)

Also see further details by ``js-type-gen --help``
