<script lang="ts">
  /**
   * 功能：给用户提供输入框，用于添加新的 Todo.
   *
   * consists of:
   * - input 输入框
   * - 添加按钮
   * - 回车添加 Todo
   */
</script>

<div class="todo-adder">
  <h1 class="title">Todo Adder</h1>
  <div class="edition">
    <input type="text" placeholder="请输入待办事项" />
    <button class="submit">Add</button>
  </div>
</div>

<style>
  .todo-adder {
    padding: 10px;
  }
  .todo-adder {
    padding: 10px;
    border-radius: 4px;
    /* border: rgba(0, 0, 0, 0.2) 2px solid; */
    transition: all ease 0.5s;
  }

  .todo-adder .title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .edition {
    display: flex;
    align-items: center;
  }
  .todo-adder .edition input {
    width: 100%;
    padding: 10px 5px;
    margin-right: 20px;
    border-radius: 5px;
  }
</style>
