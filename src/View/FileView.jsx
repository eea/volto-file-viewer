import { useCallback, useMemo } from 'react';
import config from '@plone/volto/registry';
import DefaultFileView from '@plone/volto/components/theme/View/FileView';

const FileView = (props) => {
  let fileType = props.content.file['content-type'];

  const getViewByType = useCallback(
    () => config.views.contentTypesViews[fileType] || null,
    [fileType],
  );

  const RenderFileView = useMemo(
    () => getViewByType() || DefaultFileView,
    [getViewByType],
  );

  return <RenderFileView {...props} />;
};

export default FileView;
