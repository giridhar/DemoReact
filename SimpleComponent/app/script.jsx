var Button = React.createClass({
  getInitialState: function() {
    return {counter: 0}
  },
  onClickHandler: function(){
    this.setState({counter: this.state.counter+this.props.counter_of})
  },
  render: function() {
    return (
      <div>
        <button onClick={this.onClickHandler}>
          +{this.props.counter_of}
        </button>
        <span>{this.state.counter}</span>
      </div>
    );
  }
});


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Button counter_of={1}/>
        <Button counter_of={5}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('content')
);