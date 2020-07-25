import React from 'react';

import './index.css';

const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';
  return (
    <div className={'image-preview ' + classNameFullscreen}>
      <img src={dataUri} />
    </div>
  );
};

export default ImagePreview;
