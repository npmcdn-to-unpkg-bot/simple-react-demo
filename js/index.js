var App = React.createClass({
	handleWorld: function(){
		if (this.state.worlds.length<this.state.max) {
			this.state['worlds'].push(this.state['item']);
			console.log(this.state['worlds']);
			this.setState({
				min: this.state['worlds'].length,
				worlds: this.state['worlds'],
				item: '',
				disabled: true,
				label: this.state['worlds'].length+' из '+this.state.max
			});
			console.log(this.state);
			if(this.state.worlds.length==this.state.max){
				this.setState({
					min: 0,
					max: this.state.max/2,
					type: 'text',
					first: this.state.worlds[0],
					second: this.state.worlds[1],
					placeholder: 'Что объединяет эти слова? (существительное)'
				});
			}
		} else {
			this.setState({
				type: 'text',
				first: this.state.worlds[0],
				second: this.state.worlds[1]
			});
		}
	},
	setItem: function(e){
		this.setState({item: e.target.value, disabled: false});
	},
	getInitialState: function(){
		return {
			worlds: [],
			item: '',
			disabled: true,
			label: '0 из 4',
			type: 'hidden',
			first: '',
			second: '',
			placeholder: 'Что пришло Вам в голову? (существительное)',
			min: 0,
			max: 4
		};
	},
	render: function(){
		return (
			<div className="form-group">
        		<h3 className="form-heading">{this.state.label}</h3>
        		<input type={this.state.type} className="form-control" value={this.state.first} disabled/>
        		<input type="text" className="form-control" placeholder={this.state.placeholder} value={this.state.item} onChange={this.setItem}/>
        		<input type={this.state.type} className="form-control" value={this.state.second} disabled/>
        		<button className="btn btn-lg btn-primary btn-block" onClick={this.handleWorld} type="button" disabled={this.state.disabled}>Дальше</button>
      		</div>
      );
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
