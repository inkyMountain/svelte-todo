<script lang="ts">
  /**
   * 展示一个带有标题的 Todo 列表。
   * consists of:
   * - title prop export & h1 tag display
   * - todoList prop export
   * - todoItem 组件 {#each} & 传给它的 prop: todo 对象
   */
</script>

<div class="todo-list">
  <h1></h1>
</div>

<style>
  h1 {
    padding: 10px;
  }

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
