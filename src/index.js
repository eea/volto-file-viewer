import PdfView from './PdfView';

const applyConfig = (config) => {
  config.views.contentTypesViews.File = PdfView;

  return config;
};

export default applyConfig;
