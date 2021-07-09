import { FunctionComponent, HTMLAttributes } from 'react';
import './Loader.css';

export interface ProgressCircularInterface extends HTMLAttributes<HTMLElement> {
  /** Size of circle */
  size?: number;
  /** Circle border width */
  width?: number;
}

/** Circular progress bar with determinate or indeterminate status */
export const Loader: FunctionComponent<ProgressCircularInterface> = ({
  width = 4,
  size = 44,
}) => {

  return (
    <svg width={size} height={size} className="loaderMain" viewBox={`0 0 ${size} ${size}`}>
      <circle
        className="circle"
        cx={size / 2}
        cy={size / 2}
        r={(size - width) / 2}
        stroke="currentColor"
        fill="none"
        strokeWidth={width}
      />
    </svg>
  );
};
