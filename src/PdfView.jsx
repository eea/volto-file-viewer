import PdfViewer from './PdfViewer';
import FileView from '@plone/volto/components/theme/View/FileView';

const PdfView = (props) => {
  let fileType = props.content.file['content-type'];
  const isPdf = fileType === 'application/pdf';

  return isPdf ? <PdfViewer {...props} /> : <FileView {...props} />;
};

export default PdfView;
