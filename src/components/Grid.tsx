import React from 'react';
import '../styles/reset.scss';
import '../styles/fonts.scss';
import '../styles/grid.scss';
import '../styles/utils.scss';
import '../styles/logo.scss';
interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Grid: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <main className={`grid ${className}`}>{children}</main>
    </>
  );
};

Grid.defaultProps = {
  className: '',
};

export default Grid;
