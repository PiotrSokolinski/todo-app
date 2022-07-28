import { useIntl } from 'react-intl';

export const useFormatMessage = () => {
  const intl = useIntl();

  return (id: string, values?: Record<string, string>) => intl.formatMessage({ id }, values);
};
