# Markdown Previewer

A simple, live **Markdown editor + previewer** built with **React** and [Marked](https://github.com/markedjs/marked).  
Type Markdown on the left panel and instantly see the rendered HTML on the right.

![App Screenshot](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


## Features


- **Live Preview:** Write Markdown and see the HTML output instantly.
- **GitHub Flavored Markdown (GFM):** Tables, task lists, and automatic line breaks supported.
- **Syntax Highlighting Ready:** Code blocks are parsed by Marked.
- **Responsive Panels:** Editor and Preview panes side by side.


## Demo

Hosted on **GitHub Pages**:  
[https://netocodez.github.io/Markdown-Previewer/](https://netocodez.github.io/Markdown-Previewer/)



## Tech Stack

- [React](https://reactjs.org/) (Hooks: `useState`, `useMemo`)
- [Marked](https://marked.js.org/) (Markdown parser)
- CSS (custom styling)


## Installation

### Clone the repo:

```bash
git clone https://github.com/Netocodez/Markdown-Previewer.git
cd Markdown-Previewer
```

### Install dependencies:
`npm install`

### Run locally:
`npm start`

### Build for production:
`npm run build`

### Deploy to GitHub Pages:
`npm run deploy`




    
## Usage/Examples

- Type Markdown in the Editor pane (left).
- Rendered HTML appears in the Preview pane (right).
- Supports headings, lists, links, images, blockquotes, inline code, code blocks, and more.

### Example Markdown
```
# Heading 1
## Heading 2

[Link](https://example.com)

Inline code: `const x = 42;`

```js
// Code block
function greet(name) {
  console.log(`Hello, ${name}!`);
}

```
- List item
- Bold item
- Blockquote

## License

This project is open-source under the [MIT License](LICENSE).


## Acknowledgements

- [Marked.js](https://marked.js.org/)
- [freeCodeCamp Frontend Libraries Projects](https://www.freecodecamp.org/learn)

