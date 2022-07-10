import React from 'react';
import { JsxEmit } from 'typescript';

type checkContainerProps = {
  checked: boolean;
};

const CheckContainer = ({ checked }: checkContainerProps): JSX.Element => {
  return <div className="check-container"></div>;
};
