export function getImageUrl(imageName: string) {
  return new URL(
    `../assets/images/background-${imageName}.webp`,
    import.meta.url,
  ).href;
}
