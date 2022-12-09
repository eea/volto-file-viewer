import PdfView from './PdfView';

const applyConfig = (config) => {
  console.log('CONFIG', config);
  config.views.contentTypesViews.File = PdfView;

  return config;
};

export default applyConfig;
