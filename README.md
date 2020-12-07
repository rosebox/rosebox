<p align="center">
<img height="300" style="margin-left: auto; margin-right:auto; display: block" alt="portfolio_view" src="./logo.jpg">
</p>

# Rosebox 🌹

Rosebox is a Typescript library that models CSS in Typescript in a way that leverages the capabilities of Typescript's type system and Javascript as a programming language, providing strong types, functions, and overall a more structured syntax.

## IMPORTANT NOTE 📢

You can already use all the CSS properties in Rosebox. Missing ones on the API page only indicates that they are not **YET** strongly typed. To use an untyped property, write the property's name prefixed by an underscore (e.g., `_borderImageStyle`, `_all`). Those untyped props will have a type of `string`. When a property gets a strong type, its underscore-prefixed counterpart gets deprecated immediately. However, its removal may only be considered after a minimum of 2 major releases since the deprecation—for example, if `_borderImageStyle` gets deprecated in 0.6.4 it means that it will be removed in 2.0.0.

## Docs

[Docs](https://rosebox.dev)

## Installation

Using npm:

```shell
npm i rosebox
```

## Examples

- [A Simple image carousel](https://codesandbox.io/s/image-carousel-rosebox-h1urb?file=/src/App.tsx)
- More examples of react-components using Rosebox can be found [here](https://github.com/hugonteifeh/react-components)

## Roadmap and future releases

Refer to [milestones](https://github.com/hugonteifeh/rosebox/milestones/) for information about releases and the [roadmap project](https://github.com/hugonteifeh/rosebox/projects/12) for roadmap.
