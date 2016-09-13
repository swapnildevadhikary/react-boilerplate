var React = require('react');
var Todo = require('Todo');

var TodoSearch=React.createClass({

handleSubmit:function(){
  var showCompleted=this.refs.showCompleted.checked;
  var searchText=this.refs.searchText.value;

  this.props.onSearch(showCompleted,searchText);
},

  render:function(){

    return(
      <div>
         <div>
            <input type="search" ref="searchText" placeholder="type something here" onChange={this.handleSearch}/>

         </div>
         <div>
            <label>
              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
              show completed todos
            </label>
         </div>
      </div>
    )
  }
});

module.exports=TodoSearch;
