import React, { useState } from 'react';
import {
  func, string, oneOfType, number, bool,
} from 'prop-types';

import ImagePlaceholder from '../ImagePlaceholder';

import { mapImgSrc } from '../../../utils/imageMappers';

const Img = (props) => {
  const [loading, setLoading] = useState(true);

  if (!props.src) return <ImagePlaceholder className="image-placeholder" />;

  const { url, previewUrl } = mapImgSrc({
    originalSrc: props.src,
    width: props.minWidth,
    height: props.minHeight,
    previewWidth: Math.round((Number(props.minWidth) * 10) / 100),
    previewHeight: Math.round((Number(props.minHeight) * 10) / 100),
  });

  const toggleLoading = () => {
    setLoading(false);
  };

  const handleRef = (img) => {
    if (!img) { return; }

    if (img.complete && loading) {
      toggleLoading();
    }
  };

  const imgClass = loading ? 'img-loading' : '';

  const content = () => (
    <>
      <img
        role="presentation"
        className={`f-img ds-image ${imgClass} ${props.className}`}
        src={url}
        alt={props.alt}
        onClick={props.onClick}
        onLoad={toggleLoading}
        ref={handleRef}
      />
      {loading && (
        <img
          role="presentation"
          className={`f-img ds-image img-preview ${props.className}`}
          src={previewUrl}
          alt={props.alt}
          style={{
            width: (Number(props.minWidth) * 80) / 100,
          }}
        />
      )}
    </>
  );

  return props.useWrapper
    ? (
      <div className={`ds-image-wrap ${props.wrapClassName}`}>
        {content()}
      </div>
    )
    : content();
};

Img.propTypes = {
  src: string,
  alt: string,
  className: string,
  wrapClassName: string,
  onClick: func,
  minWidth: oneOfType([string, number]),
  minHeight: oneOfType([string, number]),
  useWrapper: bool,
};

Img.defaultProps = {
  src: '',
  alt: '',
  className: '',
  wrapClassName: '',
  minWidth: '',
  minHeight: '',
  onClick: null,
  useWrapper: false,
};

export default Img;
