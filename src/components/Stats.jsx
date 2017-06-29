import React from 'react';

function Stats(props) {
  let total = props.todos.length;
  let completed = props.todos.filter(todo => todo.completed).length;
  let notCompleted = props.todos.filter(todo => !todo.completed).length;

  return (
    <table>
      <tbody>
        <tr>
          <td>Всего задач:</td>
          <th>{total}</th>
        </tr>
        <tr>
          <td>Выполнено:</td>
          <th>{completed}</th>
        </tr>
        <tr>
          <td>Осталось:</td>
          <th>{notCompleted}</th>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  todos: React.PropTypes.array.isRequired
}

export default Stats;
