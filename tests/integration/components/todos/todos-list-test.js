import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, findAll, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const template = hbs`<Todos::TodosList
  @todos={{this.todos}}/>`

const selectors = {
  todoItem: '[data-ref="todos-list.component.item"]',
  todoItemCheckbox: '[data-ref="todos-list.component.item"] > input',
  todoTitle: '[data-ref="todo-list.component.title"]',
  clearBtn: '[data-ref="todo-list.component.clear-btn"]',
  doneCount: '[data-ref="todo-list.component.donecount"]',
}

module('Integration | Component | todos/todos-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders 3 todos', async function(assert) {
    this.todos =  [
      {
          id: 1,
          title: 'Learn Programming',
          created: new Date(),
          done: false,
      },
      {
          id: 2,
          title: 'Go for a movie',
          created: new Date(),
          done: true,
      },
      {
          id: 3,
          title: 'learn Cooking',
          created: new Date(),
          done: false,
      }
    ];
    await render(template);
    assert.dom(selectors.todoItem).exists({ count: 3 });
    const todoTitleElements = findAll(selectors.todoTitle);
    assert.dom(todoTitleElements[0]).hasText('Learn programming');
    assert.dom(todoTitleElements[2]).hasText('Learn cooking');
  });

  test('it renders no todos', async function (assert) {
    this.todos = [];
    await render(template);

    assert.dom(selectors.todoItem).doesNotExist();
  });

  test('the clear completed todos button enabling/disabling', async function (assert) {
    this.todos =  [
      {
          id: 1,
          title: 'Learn Programming',
          created: new Date(),
          done: false,
      },
      {
          id: 2,
          title: 'Go for a movie',
          created: new Date(),
          done: false,
      },
      {
          id: 3,
          title: 'learn Cooking',
          created: new Date(),
          done: false,
      }
    ];
    await render(template);
    assert.dom(selectors.clearBtn).isDisabled();
    await click(selectors.todoItemCheckbox);
    assert.dom(selectors.clearBtn).isNotDisabled();

    await click(selectors.todoItemCheckbox);
    assert.dom(selectors.clearBtn).isDisabled();
  });

  test('it verifies the done count', async function (assert) {
    this.todos =  [
      {
          id: 1,
          title: 'Learn Programming',
          created: new Date(),
          done: false,
      },
      {
          id: 2,
          title: 'Go for a movie',
          created: new Date(),
          done: false,
      },
      {
          id: 3,
          title: 'learn Cooking',
          created: new Date(),
          done: false,
      }
    ];
    await render(template);
    assert.dom(selectors.doneCount).hasText('(0)');
    await click(selectors.todoItemCheckbox);
    assert.dom(selectors.doneCount).hasText('(1)');
    await click(selectors.todoItemCheckbox);
    assert.dom(selectors.doneCount).hasText('(0)');
  });
});
