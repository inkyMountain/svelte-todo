<script lang="ts">
  import { completeTodos } from '../../store';

  /**
   * TodoList 中的某个 todo item.
   * consists of:
   * - isDone Checkbox.
   * - Todo content.
   * - "Delete" button.
   */
  export let todo: ITodoItem;

  const onClickCheckBox = (clickedTodo: ITodoItem) => {
    const clickedTodoIndex = $completeTodos.findIndex((todo) => todo.id === clickedTodo.id);
    $completeTodos[clickedTodoIndex].isDone = !clickedTodo.isDone;
  };

  const onClickDelete = (todoToDelete: ITodoItem) => {
    $completeTodos = $completeTodos.filter((todo) => todo.id !== todoToDelete.id);
  };
</script>

<div class="todo-item">
  <input type="checkbox" checked={todo.isDone} on:click={() => onClickCheckBox(todo)} />
  <div class="content">{todo.content}</div>
  <button class="delete" on:click={() => onClickDelete(todo)}>Delete</button>
</div>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    padding: 10px;
    opacity: 0.8;
    border-left: transparent 5px solid;
    transition: all ease 0.2s;
    color: black;
  }
  .todo-item:hover {
    border-left: rgb(0, 0, 0, 0.8) 5px solid;
    color: white;
    background-color: rgb(197, 197, 197);
    cursor: pointer;
  }

  .todo-item .content {
    margin-left: 10px;
    flex-grow: 1;
  }

  .todo-item input {
    cursor: pointer;
  }
</style>
