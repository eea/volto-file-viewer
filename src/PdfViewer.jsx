import React from 'react';
import loadable from '@loadable/component';
import { flattenToAppURL } from '@plone/volto/helpers';
import NavigationToolbar from './PDFNavigation';
import './pdf-styling.css';

const LoadablePDFViewer = loadable(
  () => import('@eeacms/volto-pdf-block/components/manage/PDFViewer/PDFViewer'),
  {
    fallback: () => <div>Loading PDF file...</div>,
    ssr: false,
  },
);
const CSS_UNITS = 96 / 72;

const PdfViewer = ({ content }) => {
  const [size, setSize] = React.useState();

  return (
    <LoadablePDFViewer
      document={{
        url: flattenToAppURL(content.file.download),
      }}
      css="pdf-viewer"
      navigation={NavigationToolbar}
      showToolbar={true}
      showNavbar={false}
      page={1}
      onPageRenderSuccess={(page, canvasEl, viewport) => {
        setSize([
          `${Math.round(viewport.width / CSS_UNITS)}px`,
          `${Math.round(viewport.height / CSS_UNITS)}px`,
        ]);
      }}
    />
  );
};

export default PdfViewer;
