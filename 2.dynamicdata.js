
	const testData = [
        {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
      {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = () => (
//<Card {...testData[0]} />
<div>
  {testData.map(td => <Card {...td} />)}
</div>
)

class Card extends React.Component {
render() {
  return (
    <div className="github-profile">
      <img src={this.props.avatar_url} />
    <div className="info">
      <div className="name">{this.props.name}</div>
      <div className="company">{this.props.company}</div>
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
    <CardList />
    </div>
);
}	
}

ReactDOM.render(
<App title="The GitHub Cards App" />,
mountNode,
);