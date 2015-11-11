// var React = require("react");
// var ProfileName = require("./Github/profile_name");
// var Repos = require("./Github/repos");
// var Notes = require("./Notes/notes");
// var ReactFireMixin = require('reactfire');
// var Firebase = require('firebase');
// var helpers = require('./utils/helpers');

import React from 'react';
import ProfileName from './Github/profile_name';
import Repos from './Github/repos';
import Notes from './Notes/notes';
import helpers from './utils/helpers';
import Rebase from 're-base';

var base = Rebase.createClass('https://boiling-fire-8666.firebaseio.com');

class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			repos: [],
			notes: [],
			bio: {}
		};
	}
	init(){
		
	 	  this.ref = base.bindToState(this.props.params.username, {
		    context: this,
		    state: 'notes',
		    asArray: true
		  });

		

	  	helpers.getGithubInfo(this.props.params.username).then((dataObj) => {
	  		this.setState({
	  			repos: dataObj.repos,
	  			bio: dataObj.bio
	  		});
	  	});
	}
  componentWillMount(){
  	this.init();
  }
  componentWillUnMount(){
  	base.removeBinding(this.ref);
  }
  componentWillReceiveProps(){
  	base.removeBinding(this.ref);
  	this.init();
  	
  }
  handleAddNote(newNote){
  	base.post(this.props.params.username, {
	    data: this.state.notes.concat([newNote])
    });
  }
  render() {
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
					addNote={this.handleAddNote.bind(this)}
				/>
			</div>
		</div>
	)
  }
};

// var Profile = React.createClass({
// 	mixins: [ReactFireMixin],
// 	getInitialState: function(){
// 		return(
// 			{
// 				repos: [],
// 				notes: [],
// 				bio: {}
// 			}
// 		)
// 	},
// 	init: function(){
		
// 		var childRef = this.ref.child(this.props.params.username);
// 	  	this.bindAsArray(childRef, 'notes');

// 	  	helpers.getGithubInfo(this.props.params.username).then(function(dataObj){
// 	  		this.setState({
// 	  			repos: dataObj.repos,
// 	  			bio: dataObj.bio
// 	  		});
// 	  	}.bind(this));
// 	},
//   componentWillMount: function(){
//   	this.ref =  new Firebase("https://boiling-fire-8666.firebaseio.com");
//   	this.init();

//   },
//   componentWillUnMount: function(){
//   	this.unbind('notes');
//   	console.log("willunmount"+this.props);
//   },
//   componentWillReceiveProps: function(){
//   	this.unbind('notes');
//   	this.init();
  	
//   },
//   handleAddNote: function(newNote){
//   	this.ref.child(this.props.params.username).push(newNote);
//   },
//   render: function() {
//     var params =  this.props.params;
//     var username = params.username;
//     return (
//     	<div className="row"> 
// 			<div className="col-md-4" >
// 				<ProfileName username={username} bio={this.state.bio} />
// 			</div>
// 			<div className="col-md-4" >
// 				<Repos username={username} repos={this.state.repos}/>
// 			</div>
// 			<div className="col-md-4" >
// 				<Notes username={username} 
// 					notes={this.state.notes}
// 					addNote={this.handleAddNote}
// 				/>
// 			</div>
// 		</div>
// 	)
//   }
// });

export default Profile;

// module.exports = Profile;