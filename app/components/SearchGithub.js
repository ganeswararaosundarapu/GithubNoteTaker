var React = require("react");
var ReactRouter = require('react-router');


var SearchGithub = React.createClass({
	mixins: [ReactRouter.History],
  handleSubmit: function(){
    var username = this.refs.username.value;
    this.refs.username.value = "";
   this.history.pushState(null, 'profile/'+username, null);

  },
  render: function() {
    return (
    	<div className="col-sm-12">
    		<form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary"> Search Github</button>
          </div>
        </form>

    	</div>
	)
  }
});

module.exports = SearchGithub;