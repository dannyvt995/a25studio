
import Image from 'next/image';

interface ImagePreloadProps {
  src: string;
  alt: string;
  w: string;
  h: string;
}

export default function ImagePreload({ src, alt, w, h }: ImagePreloadProps) {
  return (
    <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes='100vw'
        style={{width:w,height:h}}
      
      />
  );
}
