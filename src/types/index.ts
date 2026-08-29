export type AnimationSpeed = "slow" | "normal" | "fast";
export type LogoBehavior = "pulse" | "blur" | "bounce" | "none";
export type StrokeWidth = "thin" | "normal" | "thick" | "bold";

export interface LoaderConfig {
  component: string;
  size: number;
  color: string;
  speed: AnimationSpeed;
  logoBehavior: LogoBehavior;
  svgCode: string;
  logoFileName: string;
  logoDataUrl: string;
  logoScale: number;
  strokeWidth: StrokeWidth;
}

export interface LoaderMeta {
  name: string;
  component: string;
  description: string;
  family: "arc" | "ring" | "dot" | "logo" | "special";
  supportsLogoBehavior: boolean;
  supportsDotsSpeed: boolean;
  tags: string[];
}