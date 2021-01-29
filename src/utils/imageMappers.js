import {
  s3BucketName, awsRegion, awsS3ImageCropUrl,
} from './config';

export const mapS3ImgSrc = ({
  url, width, /* height, */ previewWidth, /* previewHeight, */
}) => {
  const filledImgUrl = `${awsS3ImageCropUrl}/${width}${url.pathname}`;
  const filledPreviewImgUrl = `${awsS3ImageCropUrl}/${previewWidth}${url.pathname}`;
  return {
    url: filledImgUrl,
    previewUrl: filledPreviewImgUrl,
  };
};

export const mapImgSrc = ({
  originalSrc, width, height, previewWidth, previewHeight,
}) => {
  let result = {};
  const url = new URL(originalSrc);
  const isS3ImgUrl = url.host === `${s3BucketName}.s3.${awsRegion}.amazonaws.com`;

  if (!isS3ImgUrl || (!width && !height)) return { url: originalSrc };
  if (isS3ImgUrl) {
    result = mapS3ImgSrc({
      url, width, height, previewWidth, previewHeight,
    });
  }
  return result;
};
