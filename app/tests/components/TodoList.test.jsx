var React =require('react');
var ReactDOM = require('react-dom');
var expect =require('expect');
var $ = require('jQuery');
var TestUtils =require('react-addons-test-utils');

var TodoList=require('TodoList');
var Todo=require('Todo');

describe('TodoList',()=>{
  it('TodoList Should Exist',()=>{
    expect(TodoList).toExist();
  });
  it('should render one todo component for each todo items',()=>{
    var todos=[{
         id:1,
         text:'walk the dog'
      },{
         id:2,
         text:'Clean the yard'
      }];
    var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents=TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todoComponents.length).toBe(todos.length);
  });
});
