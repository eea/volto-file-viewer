import PdfViewer from './PdfViewer';

const applyConfig = (config) => {
  config.views.contentTypesViews.File = PdfViewer;

  return config;
};

export default applyConfig;
