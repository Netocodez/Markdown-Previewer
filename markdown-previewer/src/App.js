import React, { useState, useMemo } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({ gfm: true, breaks: true });

const defaultMarkdown = `

# Welcome to my Markdown Previewer (h1)

## This is a subheading (H2)

Here's a link to **FreeCodeCamp**: [freeCodeCamp.org](https://www.freecodecamp.org)

Inline code looks like this: \`const x = 42;\`

### Code block

\`\`\`js
function greet(name) {
  console.log(\`Hello, ${'name'}!\`);
}

greet('World');
\`\`\`

### Lists
- Item one
- Item two
  - Nested item
- **Bold list item**

> Blockquote: 
> “Talk is cheap. Show me the code.” — Linus Torvalds

### Image
![FCC Secondary Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Bold text** works too!
`;

export default function App() {
  const [text, setText] = useState(defaultMarkdown);
  const html = useMemo(() => marked.parse(text), [text]);

  return (
    <div className="app-shell">
      <div className="app-header">
        <div className="brand">
          Markdown <span className="spark">Previewer</span>
        </div>
        <div className="hint">
          Type Markdown on the left. See HTML on the right — live.
        </div>
      </div>

      <div className="panes">
        <section className="panel">
          <div className="panel-header">
            <div className="traffic">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="panel-title">Editor</div>
          </div>
          <textarea
            id="editor"
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck="false"
          />
        </section>

        <section className="panel">
          <div className="panel-header">
            <div className="traffic">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="panel-title">Preview</div>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </div>

      <div className="footer">
        Built with React + Marked. Optional line breaks are enabled (GFM).
      </div>
    </div>
  );
}
