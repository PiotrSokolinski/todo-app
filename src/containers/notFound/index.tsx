import React from 'react';
import { useNavigate } from 'react-router-dom';

import PageIssue from '../../components/pageIssue';
import routes from '../app/routes';
import { useFormatMessage } from '../../hooks/useFormatMessage';

const NotFound = () => {
  const formatMessage = useFormatMessage();
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const handleGoDashboard = () => navigate(routes.dashboard);

  return (
    <PageIssue
      headerId="notFound.header"
      subheaderId="notFound.subheader"
      icon={{ iconName: 'notFound', alt: formatMessage('notFound.iconAlt') }}
      leftButton={{ messageId: 'notFound.goBack', action: handleGoBack }}
      rightButton={{ messageId: 'notFound.goDashboard', action: handleGoDashboard }}
    />
  );
};

export default NotFound;
