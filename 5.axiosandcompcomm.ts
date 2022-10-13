// gaearon, sophiebits, sebmarkbage, bvaughn
const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const profileData = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    console.log(profileData);
    const profile = {
      name : profileData.data.name,
      avatar_url : profileData.data.avatar_url,
      company: profileData.data.company
    }
    console.log(profile);
    this.props.addProfileHandler(profile);
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData,
  };
  
  addProfile = (profileData) => {
    console.log(this);
  //tis.state.profiles.push(profileData);
  //this.setState({ profiles: [...this.state.profiles, profileData]});
    this.setState(prevData => ({
      profiles : [...prevData.profiles, profileData]
    }))
  }
  
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form addProfileHandler={this.addProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);