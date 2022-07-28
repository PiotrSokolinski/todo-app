import React, { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { isEqual } from 'lodash';
import { toast } from 'react-toast';

import Button from '../../components/button';
import Modal from '../../components/modal';
import TextArea from '../../components/textArea';
import Toggle from '../../components/toggle';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import { Todo } from '../../types';
import { deleteTodo, updateTodo } from '../../store/reducers/todoList';
import { useDispatch } from 'react-redux';
import { useFormatMessage } from '../../hooks/useFormatMessage';

type SingleTodoProps = { todo: Todo };

const SingleTodo = ({ todo }: SingleTodoProps) => {
  const { uuid, value, completed } = todo;
  const formatMessage = useFormatMessage();
  const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [currentCompleted, setCurrentCompleted] = useState(completed);
  const prevTodo = useRef(todo);

  useDidUpdateEffect(() => {
    if (!isEqual(prevTodo.current, todo))
      toast.success(formatMessage('container.singleTodo.success'));
  }, [todo]);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    dispatch(deleteTodo(uuid));
    closeModal();
  };

  const handleUpdate = () =>
    dispatch(updateTodo({ uuid, value: currentValue, completed: currentCompleted }));

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCurrentValue(event.target.value);

  const handleCompletedChange = () => setCurrentCompleted(!currentCompleted);

  return (
    <div className="w-full mb-10">
      <div className="w-full flex flex-col md:flex-row items-center p-5">
        <div className="flex flex-col w-full md:flex-1 text-2xl">
          <div className="flex items-center">
            <span className="font-bold mr-1.5">
              <FormattedMessage id="container.singleTodo.uuid" />
            </span>
            <div>{uuid}</div>
          </div>
          <div className="flex flex-col mt-5">
            <span className="mr-1.5 text-2xl">
              <FormattedMessage id="container.singleTodo.text" />
            </span>
            <TextArea value={currentValue} handleChange={handleValueChange} />
          </div>
          <Toggle
            uuid={uuid}
            className="mt-5"
            value={currentCompleted}
            handleChange={handleCompletedChange}
            label={formatMessage('container.singleTodo.completedLabel')}
          />
        </div>
        <div className="flex items-center md:flex-col mt-5 md:mt-0 md:ml-5">
          <Button
            handleClick={handleUpdate}
            className="py-4"
            disabled={currentValue === value && completed === currentCompleted}
          >
            <FormattedMessage id="container.singleTodo.update" />
          </Button>
          <Button handleClick={openModal} className="ml-5 md:ml-0 md:mt-5 py-4" color="red">
            <FormattedMessage id="container.singleTodo.delete" />
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        closeAction={closeModal}
        confirmAction={handleDelete}
        title={formatMessage('container.singleTodo.modalTitle')}
        body={formatMessage('container.singleTodo.modalBody', { uuid })}
      />
    </div>
  );
};

export default SingleTodo;
