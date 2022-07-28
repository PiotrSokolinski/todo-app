import React from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from '../icon';
import { useFormatMessage } from '../../hooks/useFormatMessage';

type ModalProps = {
  isOpen: boolean;
  closeAction: () => void;
  confirmAction: () => void;
  title: string;
  body: React.ReactNode;
};
const Modal = ({ isOpen, closeAction, confirmAction, title, body }: ModalProps) => {
  const formatMessage = useFormatMessage();

  if (isOpen)
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-4xl font-semibold">{title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeAction}
                >
                  <Icon
                    className="w-[24px] h-[24px]"
                    iconName="close"
                    alt={formatMessage('component.modal.closeAlt')}
                  />
                </button>
              </div>
              <div className="relative p-10 flex-auto text-3xl">{body}</div>
              <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={closeAction}
                >
                  <FormattedMessage id="component.modal.cancel" />
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-2xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={confirmAction}
                >
                  <FormattedMessage id="component.modal.confirm" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    );

  return null;
};

export default Modal;
