var React = require("react");
var ProfileName = require("./Github/profile_name");
var Repos = require("./Github/repos");
var Notes = require("./Notes/notes");
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('./utils/helpers');

var Profile = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return(
			{
				repos: [],
				notes: [],
				bio: {}
			}
		)
	},
	init: function(){
		this.ref =  new Firebase("https://boiling-fire-8666.firebaseio.com");
		var childRef = this.ref.child(this.props.params.username);
	  	this.bindAsArray(childRef, 'notes');

	  	helpers.getGithubInfo(this.props.params.username).then(function(dataObj){
	  		this.setState({
	  			repos: dataObj.repos,
	  			bio: dataObj.bio
	  		});
	  	}.bind(this));
	},
  componentWillMount: function(){
  	
  	this.init();
  	console.log("willmount");

  },
  componentWillUnMount: function(){
  	this.unbind('notes');
  	console.log("willunmount");
  },
  componentWillReceiveProps: function(){
  	this.unbind('notes');
  	this.init();
  	console.log("Receiveprops");
  },
  handleAddNote: function(newNote){
  	this.ref.child(this.props.params.username).push(newNote);
  },
  render: function() {
    var params =  this.props.params;
    var username = params.username;
    return (
    	<div className="row"> 
			<div className="col-md-4" >
				<ProfileName username={username} bio={this.state.bio} />
			</div>
			<div className="col-md-4" >
				<Repos username={username} repos={this.state.repos}/>
			</div>
			<div className="col-md-4" >
				<Notes username={username} 
					notes={this.state.notes}
					addNote={this.handleAddNote}
				/>
			</div>
		</div>
	)
  }
});

module.exports = Profile;