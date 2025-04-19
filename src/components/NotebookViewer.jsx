import React, { useState, useEffect } from "react";
import "../styles/NotebookStyles.css";

const Notebook = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="notebook-container">
      {isLoading && (
        <div className="notebook-loading">
          <div className="spinner"></div>
          <p>Loading Jupyter Notebook...</p>
        </div>
      )}
      <iframe
        src="/Covid-Spread-Data-Analysis/notebook.html"
        title="Jupyter Notebook"
        className="notebook-iframe"
        onLoad={handleIframeLoad}
      />
    </div>
  );
};

const NotebookViewer = () => {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 70));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  useEffect(() => {
    const notebookIframe = document.querySelector(".notebook-iframe");
    if (notebookIframe) {
      notebookIframe.style.transform = `scale(${zoomLevel / 100})`;
      notebookIframe.style.transformOrigin = "top center";
    }
  }, [zoomLevel]);

  return (
    <div className="notebook-viewer">
      <h1>COVID-19 Data Analysis Notebook</h1>

      <div className="notebook-info">
        <div className="info-card">
          <h3>About This Notebook</h3>
          <p>
            This Jupyter Notebook contains comprehensive data analysis of the
            COVID-19 pandemic, including visualizations, statistical tests, and
            hypothesis validation.
          </p>
          <p>
            The analysis explores various factors affecting COVID-19 spread and
            mortality rates across different countries and regions.
          </p>
        </div>

        <div className="info-card">
          <h3>How to Use</h3>
          <ul>
            <li>Scroll through the notebook to view different sections</li>
            <li>Use the zoom controls below to adjust the view</li>
            <li>Click on visualizations to interact with them</li>
            <li>Code cells show the Python code used for analysis</li>
          </ul>
        </div>
      </div>

      <section className="notebook-section">
        <h2>Interactive Notebook Viewer</h2>

        <div className="notebook-controls">
          <button className="notebook-button" onClick={handleZoomOut}>
            <span role="img" aria-label="Zoom Out">
              🔍-
            </span>{" "}
            Zoom Out
          </button>
          <button className="notebook-button" onClick={handleResetZoom}>
            <span role="img" aria-label="Reset Zoom">
              🔄
            </span>{" "}
            Reset Zoom
          </button>
          <button className="notebook-button" onClick={handleZoomIn}>
            <span role="img" aria-label="Zoom In">
              🔍+
            </span>{" "}
            Zoom In
          </button>
        </div>

        <Notebook />

        <p>
          This notebook contains the complete data science workflow, from data
          cleaning and preprocessing to exploratory data analysis, hypothesis
          testing, and visualization.
        </p>
        <p>
          The analysis examines factors such as healthcare infrastructure,
          population demographics, and socioeconomic indicators to understand
          their impact on COVID-19 outcomes.
        </p>
      </section>

      <section className="notebook-section">
        <h2>Key Findings</h2>
        <div className="info-card">
          <p>
            The notebook analysis reveals several important insights about the
            COVID-19 pandemic:
          </p>
          <ul>
            <li>
              Countries with stronger healthcare systems generally experienced
              lower case fatality rates
            </li>
            <li>
              Population density significantly affected the spread rate of the
              virus
            </li>
            <li>
              Age demographics played a crucial role in determining mortality
              rates
            </li>
            <li>
              Vaccination coverage correlated with reduced transmission in most
              regions
            </li>
            <li>
              Significant underreporting occurred in countries with limited
              testing capacity
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NotebookViewer;
