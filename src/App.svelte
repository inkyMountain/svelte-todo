<script lang="ts">
  /**
   * Todo 应用的根组件
   * consists of:
   * - App name
   * - TodoAdder & TodoList 组件。
   * - 从 store 引入 doneTodos & undoneTodos。
   */
  import TodoAdder from './components/done/TodoAdder.svelte';
  import TodoList from './components/done/TodoList.svelte';
  
  // import TodoAdder from './components/needCompletion/TodoAdder.svelte';
  // import TodoList from './components/needCompletion/TodoList.svelte';
  import { doneTodos, undoneTodos } from './store';
</script>

<main id="app">
  <h1 class="app-name">Todo App</h1>
  <TodoAdder />
  <TodoList title={'Done'} todoList={$doneTodos}/>
  <TodoList title={'Undone'} todoList={$undoneTodos}/>
</main>

<style>
  #app {
    padding: 0 10px;
    max-width: 1000px;
    margin: 0 auto;
  }
  .app-name {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  }

  /* 
		svelte 默认给样式加上 scoped 特性。
		使用 :global(选择器) 全局应用该样式。
	 */
  :global(*, *::before, *::after) {
    /* Reset all CSS */
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    border: none;
    font-family: PingFang SC Medium, fira code, monospace;
    box-sizing: border-box;
  }
  :global(button) {
    padding: 5px 8px;
    background-color: #f2f2f2;
    transition: all ease 0.2s;
    cursor: pointer;
    border: black 2px solid;
    border-radius: 5px;
  }
  :global(button:hover) {
    background-color: rgb(206, 206, 206);
  }
  :global(button:active) {
    background-color: #9c9c9c;
  }
  :global(body, html) {
    background-color: #f1f1f1;
    height: 100%;
    overflow: auto;
  }

  /* 给 input 元素加上默认样式 */
  :global(input) {
    border: transparent 2px solid;
    transition: all ease 0.2s;
  }
  :global(input:focus) {
    border: rgba(0, 0, 0, 0.8) 2px solid;
  }
</style>
