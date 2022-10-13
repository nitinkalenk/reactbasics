class Card extends React.Component {
	render() {
    const className="github-profile"
  	return (
    	<div className={className}>
    	  <img src="https://placehold.it/75" style={}/>
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
    	</div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Card />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);