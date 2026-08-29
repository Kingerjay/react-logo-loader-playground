export const cn = (...classes: (string | undefined | null | boolean)[]) =>
    classes.filter(Boolean).join(" ");
  
  export const generateLoaderCode = (
    component: string,
    size: number,
    color: string,
    speed: string,
    logoBehavior: string,
    supportsLogoBehavior: boolean
  ): string => {
    const behaviorProp = supportsLogoBehavior
      ? `\n  logoBehavior="${logoBehavior}"`
      : "";
  
    return `import { ${component} } from "react-logo-loader";
  
  const MyLogo = () => (
    <svg
    viewBox="0 0 24 24"
    width="60%"
    height="60%"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
  );
  
  <${component}
    size={${size}}
    color="${color}"
    speed="${speed}"${behaviorProp}
    logo={<MyLogo />}
  />`;
  };