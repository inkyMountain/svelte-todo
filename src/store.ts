import { derived, writable } from 'svelte/store';

/**
 * 功能：给用户提供输入框，用于添加新的 Todo.
 *
 * consists of:
 * - input 输入框
 * - 添加按钮
 * - 回车添加 Todo
 */

export const getIncrementalCount = (() => {
  let count = 0;
  return () => ++count;
})();

export const completeTodos = writable<ITodoItem[]>([], (set) => {
  const undoneTodos: ITodoItem[] = [
    {
      content: '这周刷两道LeetCode',
      id: getIncrementalCount(),
      isDone: false,
    },
    {
      content: '周五晚上去跑道跑步',
      id: getIncrementalCount(),
      isDone: false,
    },
  ];
  const doneTodos: ITodoItem[] = [
    {
      content: '今天背20个单词',
      id: getIncrementalCount(),
      isDone: true,
    },
    {
      content: '今天晚上做60个俯卧撑',
      id: getIncrementalCount(),
      isDone: true,
    },
  ];
  set([...doneTodos, ...undoneTodos]);
});

export const doneTodos = derived(completeTodos, ($todos) => $todos.filter((todo) => todo.isDone));
export const undoneTodos = derived(completeTodos, ($todos) =>
  $todos.filter((todo) => !todo.isDone)
);
