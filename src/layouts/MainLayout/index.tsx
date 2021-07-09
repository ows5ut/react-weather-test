import { FunctionComponent, HTMLAttributes } from 'react';
import './MainLayout.css';

export const MainLayout: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
children
}) => <div className="MainLayout">
  {children}
</div>