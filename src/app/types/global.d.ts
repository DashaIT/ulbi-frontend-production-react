declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg' {
  import React = require('react');

    const SVG: React.SFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__ : boolean;
declare const __API__ : string;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
