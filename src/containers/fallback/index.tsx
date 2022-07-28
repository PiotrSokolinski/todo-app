import React from 'react';

import PageIssue from '../../components/pageIssue';
import { useFormatMessage } from '../../hooks/useFormatMessage';

const Fallback = () => {
  const formatMessage = useFormatMessage();
  const handleReport = () =>
    alert('Here should be an external service or native solution that handles bug reporting.');
  const handleRefresh = () => window.location.reload();

  return (
    <PageIssue
      headerId="fallback.header"
      subheaderId="fallback.subheader"
      icon={{ iconName: 'fallback', alt: formatMessage('notFound.fallbackAlt') }}
      leftButton={{ messageId: 'fallback.refresh', action: handleRefresh }}
      rightButton={{ messageId: 'fallback.reportBug', action: handleReport }}
    />
  );
};

export default Fallback;
