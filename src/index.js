import FileView from './View/FileView';
import PdfView from './View/PdfView';

const applyConfig = (config) => {
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    File: FileView,
    'application/pdf': PdfView,
  };

  return config;
};

export default applyConfig;
