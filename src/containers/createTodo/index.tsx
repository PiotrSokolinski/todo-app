import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../components/button';
import TextArea from '../../components/textArea';
import { addTodo } from '../../store/reducers/todoList';
import { useDispatch } from 'react-redux';

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  const handleCreate = () => {
    if (!value) return;
    dispatch(addTodo({ uuid: uuidv4(), value, completed: false }));
    setValue('');
  };

  return (
    <div className="w-full flex flex-col">
      <h1 className="mb-5 text-4xl">
        <FormattedMessage id="container.createTodo.title" />
      </h1>
      <TextArea value={value} handleChange={handleChange} />
      <Button
        handleClick={handleCreate}
        className="mt-5 self-center md:self-auto"
        disabled={!value}
      >
        <FormattedMessage id="container.createTodo.addTodo" />
      </Button>
    </div>
  );
};

export default CreateTodo;
