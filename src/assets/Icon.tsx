import * as React from "react";
const Logout = React.lazy(() => import("./svg/logout.svg?react"));
const BackArrow = React.lazy(() => import("./svg/back-arrow.svg?react"));

const ICON_LIST = {
  logout: Logout,
  "back-arrow": BackArrow,
};

export type IconKeys = keyof typeof ICON_LIST;

interface IconProps {
  icon: IconKeys;
  size?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Icon = (props: IconProps) => {
  const Component = ICON_LIST[props.icon];
  if (!Component) {
    console.warn(`Icon "${props.icon}" not found.`);
    return null;
  }

  const style: React.CSSProperties = {};
  if (props.size) {
    Object.assign(style, { width: props.size, height: props.size });
  }

  if (props.color) {
    Object.assign(style, { color: props.color });
  }

  return (
    <React.Suspense fallback={<span>⏳</span>}>
      <Component
        onClick={props.onClick}
        className={props.className}
        style={style}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      />
    </React.Suspense>
  );
};

export default Icon;
