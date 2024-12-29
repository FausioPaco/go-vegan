type ImageFormat = 'webp' | 'jpg' | 'jpeg' | 'png';

export function getBackgroundImageUrl(
  imageName: string,
  imageFormat: ImageFormat = 'webp',
) {
  return new URL(
    `../assets/images/background-${imageName}.${imageFormat}`,
    import.meta.url,
  ).href;
}
