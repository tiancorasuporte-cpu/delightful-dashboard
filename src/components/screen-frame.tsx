interface ScreenFrameProps {
  src: string;
  title: string;
}

export function ScreenFrame({ src, title }: ScreenFrameProps) {
  return (
    <iframe
      className="block h-screen w-full border-0 bg-background"
      src={src}
      title={title}
    />
  );
}