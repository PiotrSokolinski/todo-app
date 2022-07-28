import React from 'react';
import { FormattedMessage } from 'react-intl';

import CreateTodo from '../createTodo';
import TodoList from '../todoList';

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-6xl mb-1.5">
        <FormattedMessage id="container.dashboard.title" />
      </h1>
      <div className="w-full lg:w-6/12">
        <CreateTodo />
      </div>
      <TodoList />
    </div>
  );
};

export default Dashboard;
