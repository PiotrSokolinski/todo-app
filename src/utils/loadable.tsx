/* eslint-disable react/display-name */
import React, { ComponentType, lazy, Suspense, ReactNode } from 'react';

const loadable = (
  importFunc: () => Promise<{ default: ComponentType<any> }>,
  { fallback }: { fallback: ReactNode } = { fallback: null },
) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
