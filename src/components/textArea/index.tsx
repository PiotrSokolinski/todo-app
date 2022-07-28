import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFormatMessage } from '../../hooks/useFormatMessage';

type TextAreaProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  labelId?: string;
};

const TextArea = ({ value, handleChange, labelId }: TextAreaProps) => {
  const formatMessage = useFormatMessage();

  return (
    <>
      {labelId && (
        <label
          htmlFor={labelId ? `textarea-${labelId}` : ''}
          className="block mb-2 text-2xl font-medium text-gray-900"
        >
          <FormattedMessage id={labelId} />
        </label>
      )}
      <textarea
        id={labelId ? `textarea-${labelId}` : ''}
        rows={10}
        className="block resize-none p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder={formatMessage('component.textArea.placeholder')}
        required={false}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

export default TextArea;
