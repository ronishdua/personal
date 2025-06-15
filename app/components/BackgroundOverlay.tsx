const gradientStyle = {
  maskImage:
    "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
  WebkitMaskImage:
    "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
};

const backgroundStyle = {
  ...gradientStyle,
  background:
    "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
};

export const BackgroundOverlay = () => (
  <>
    <div
      className='fixed top-0 w-full h-16 backdrop-blur-sm z-10'
      style={backgroundStyle}
    />
    <div
      className='fixed top-0 w-full h-16 backdrop-blur-sm z-20'
      style={gradientStyle}
    />
    <div
      className='fixed top-0 w-full h-16 backdrop-blur-sm z-30'
      style={gradientStyle}
    />
  </>
);
