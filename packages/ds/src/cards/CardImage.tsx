import Image, { type ImageProps } from "next/image";

export function CardImage({ className = "", alt, ...props }: ImageProps) {
  return <div className={`relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-[var(--color-surface-raised)] ${className}`}><Image alt={alt} className="object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" {...props} /></div>;
}
