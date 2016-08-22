
var App = React.createClass({
	handleWorld: function(){
		if (this.state.worlds.length<16) {
			this.state['worlds'].push(this.state['item']);
			this.setState({worlds: this.state['worlds'], item: '', disabled: true});
			console.log(this.state);
		}
	},
	setItem: function(e){
		this.state.disabled = false;
		this.setState({item: e.target.value});
	},
	getInitialState: function(){
		return {worlds: [], item: '', disabled: true};
	},
	render: function(){
		return (
			<div className="form-group">
        		<h3 className="form-heading">{this.state.worlds.length} из 16</h3>
        		<input type="text" className="form-control" placeholder="Что пришло Вам в голову? (существительное)" value={this.state.item} onChange={this.setItem}/>
        		<button className="btn btn-lg btn-primary btn-block" onClick={this.handleWorld} type="button" disabled={this.state.disabled}>Дальше</button>
      		</div>
      );
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);