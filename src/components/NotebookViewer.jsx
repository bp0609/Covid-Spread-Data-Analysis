const Notebook = () => {
    return (
      <iframe
        src="/Covid-Spread-Data-Analysis/notebook.html" // ✅ GH Pages-safe path
        title="Notebook"
        style={{ width: '100%', height: '800px', border: 'none' }}
      />
    )
  }
  
  const NotebookViewer = () => {
    return (
        <div className="notebook-viewer">
        <h1>Jupyter Notebook Analysis</h1>
        <section className="notebook-section">
          <h2>Notebook Viewer</h2>
          <Notebook />
          <p>
            This notebook contains various analyses and visualizations related to the data science project.
          </p>
          <p>
            You can interact with the notebook directly in this viewer.
          </p>
        </section>
      </div>
    )
  }
  
  export default NotebookViewer
  