var Button = React.createClass({
  getInitialState: function() {
    return {counter: 0}
  },
  onClickHandler: function(){
    this.setState({counter: this.state.counter+1})
  },
  render: function() {
    return (
      <button onClick={this.onClickHandler}>
        {this.state.counter}
      </button>
    );
  }
});


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Button />
      </div>
    );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);