<script lang="ts">
  /**
   * 展示一个带有标题的 Todo 列表。
   * consists of:
   * - title prop
   * - todoList prop
   * - todoItem 组件 & 传给它的 prop: todo 对象
   */
  import TodoItem from './TodoItem.svelte';
  export let title = '';
  export let todoList: ITodoItem[] = [];
</script>

<div class="todo-list">
  <h1>{title}</h1>
  {#each todoList as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</div>

<style>
  h1 {
    padding: 10px;
  }
</style>
