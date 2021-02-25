import { derived, readable, writable } from 'svelte/store';

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
  set([
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
  ]);
});

export const doneTodos = derived(completeTodos, (todos) => {
  return todos.filter((todo) => todo.isDone);
});
export const undoneTodos = derived(completeTodos, (todos) => {
  return todos.filter((todo) => !todo.isDone);
});

const fetchAppName = () => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Svelte Todo');
    }, 2000);
  });
};

export const appNamePromise = readable(Promise.resolve(''), (set) => {
  set(fetchAppName());
});
