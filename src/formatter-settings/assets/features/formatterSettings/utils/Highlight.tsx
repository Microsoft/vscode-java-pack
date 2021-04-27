// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from "react";
import * as hljs from "highlight.js";
import "../../../../../../webview-resources/highlight.css";
import { DOMParser, XMLSerializer } from "xmldom";

export function Highlighter(content: string, language?: string): JSX.Element {
  const highlighted = language ? hljs.highlight(language, content) : hljs.highlightAuto(content);
  const document = new DOMParser().parseFromString(highlighted.value);
  return (
    <pre className="hljs d-flex flex-grow-1">
      <code className="hljs flex-grow-1" dangerouslySetInnerHTML={{ __html: highlighted.value }} />
    </pre>
  );
}
