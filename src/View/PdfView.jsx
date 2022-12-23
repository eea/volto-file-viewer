import React from 'react';
import loadable from '@loadable/component';
import { flattenToAppURL } from '@plone/volto/helpers';
import NavigationToolbar from '@eeacms/volto-pdf-block/components/manage/PDFViewer/PDFNavigation';

// import './styles.css';

const LoadablePDFViewer = loadable(
  () => import('@eeacms/volto-pdf-block/components/manage/PDFViewer/PDFViewer'),
  {
    fallback: () => <div>Loading PDF file...</div>,
    ssr: false,
  },
);

const PdfView = ({ content }) => {
  return (
    <div className="ui container">
      <LoadablePDFViewer
        document={{
          url: flattenToAppURL(content.file.download),
        }}
        css="pdf-viewer"
        navigation={NavigationToolbar}
        showToolbar={true}
        showNavbar={true}
        page={1}
      />
    </div>
  );
};

export default PdfView;
