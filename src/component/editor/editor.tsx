import { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import EditorToolbar, { modules, formats } from "./toolbar";

const Editor = () => {
  const [editorState, setEditorState] = useState("");

  return (
    <>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={editorState}
        onChange={setEditorState}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default Editor;
