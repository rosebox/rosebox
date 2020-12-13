<p align="center">
<img height="300" style="margin-left: auto; margin-right:auto; display: block" alt="portfolio_view" src="./logo.jpg">
</p>

# Rosebox 🌹

The Rosebox project is an effort to improve the CSS-in-JS experience by providing features like strong types, typed functions (e.g., [`linGrad`](https://www.rosebox.dev/api/#rb-vc-lingrad)), extra shorthand properties(e.g., [`marginX`](https://www.rosebox.dev/api/#rb-prop-paddingx), [`paddingX`](https://www.rosebox.dev/api/#rb-prop-paddingx), an object-based syntax for the values of complex properties (e.g., [`animation`](https://www.rosebox.dev/api/#rb-prop-animation)), and support for high-quality IntelliSense.

## IMPORTANT NOTE 📢

Already today, you can use all the CSS properties in Rosebox. Missing ones on the API page only indicate that they are not **YET** strongly typed. The library exposes all untyped/loosely-typed properties by prefixing them with an underscore (e.g., `_borderImageStyle`, `_all`). Those loosely-typed props will have a type of `string`. When a property becomes strongly-typed, its underscore-prefixed version gets deprecated immediately. However, its removal may only be considered after a minimum of 2 major releases since the deprecation—for example, if `_borderImageStyle` gets deprecated in 0.6.4, it means that it will be removed in 2.0.0.

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

## Contribute

There are many way in which you can contribute:

* Submit a feature request.
* Report a bug.
* Suggest a useful integration with another library.

## Help and questions 🙋

If you have a question or need help, feel free to create an issue here 👌.