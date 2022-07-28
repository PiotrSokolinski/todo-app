import React from 'react';
import { isEmpty } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/button';
import SingleTodo from '../singleTodo';
import { RootState } from '../../store';
import { Todo } from '../../types';
import { replaceTodos } from '../../store/reducers/todoList';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todoList);

  const handleBulkDelete = () => dispatch(replaceTodos(todoList.filter((todo) => !todo.completed)));

  const ifEmpty = isEmpty(todoList);
  return (
    <div className="w-full flex flex-col mt-5">
      <div className="flex align-center justify-between py-5 border-y-2">
        <h1 className="text-4xl leading-[35px]">
          <FormattedMessage id="container.todoList.title" />
        </h1>
        {!ifEmpty && (
          <Button
            handleClick={handleBulkDelete}
            className="py-3"
            color="blue"
            disabled={isEmpty(todoList.filter((todo) => todo.completed))}
          >
            <FormattedMessage id="container.todoList.removeBulk" />
          </Button>
        )}
      </div>
      <div
        className={`w-full flex ${ifEmpty ? 'justify-start md:justify-center' : 'justify-center'}`}
      >
        {ifEmpty ? (
          <h2 className="text-6xl mt-20">
            <FormattedMessage id="container.todoList.empty" />
          </h2>
        ) : (
          <div className="w-full md:w-8/12">
            {todoList.map((todo: Todo) => (
              <SingleTodo key={todo.uuid} todo={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
