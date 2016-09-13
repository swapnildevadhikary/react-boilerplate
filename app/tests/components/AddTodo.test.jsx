var React =require('react');
var ReactDOM = require('react-dom');
var expect =require('expect');
var $ = require('jQuery');
var TestUtils =require('react-addons-test-utils');

var AddTodo=require('AddTodo');

describe('AddTodo',()=>{
  it('AddTodo Should Exist',()=>{
    expect(AddTodo).toExist();
  });

  it('should call AddTodo prop with valid data',()=>{
    var todoText='walk the dog';
    var spy=expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call AddTodo prop with invalid data',()=>{
    var todoText='';
    var spy=expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled(todoText);
  });
});
