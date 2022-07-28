import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../button';
import Icon from '../icon';

type ButtonType = {
  action: () => void;
  messageId: string;
};

type PageIssueType = {
  headerId: string;
  subheaderId: string;
  icon: {
    iconName: string;
    alt: string;
  };
  leftButton: ButtonType;
  rightButton: ButtonType;
};

const PageIssue = ({ headerId, subheaderId, leftButton, rightButton, icon }: PageIssueType) => {
  const { action: leftAction, messageId: leftMessageId } = leftButton;
  const { action: rightAction, messageId: rightMessageId } = rightButton;

  return (
    <div className="w-full h-full items-center flex justify-center flex-col">
      <Icon {...icon} className="max-w-[512px] max-h-[512px] w-full h-auto" />
      <h1 className="mt-4 text-center md:mt-8 text-6xl">
        <FormattedMessage id={headerId} />
      </h1>
      <h2 className="mt-4 mb-8 md:mt-8 md:mb-20 text-center text-4xl">
        <FormattedMessage id={subheaderId} />
      </h2>
      <div className="flex items-center md:justify-center flex-col md:flex-row">
        <Button handleClick={leftAction} color="blue">
          <FormattedMessage id={leftMessageId} />
        </Button>
        <Button handleClick={rightAction} color="blue" className="mt-10 md:mt-0 md:ml-10">
          <FormattedMessage id={rightMessageId} />
        </Button>
      </div>
    </div>
  );
};

export default PageIssue;
