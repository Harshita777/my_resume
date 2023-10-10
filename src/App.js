import React from "react";
import PdfViewer from "./PdfViewer";

function App() {
  const pdfUrl = "./Resume.pdf";

  return (
    <div className="App">
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default App;
