var React = require("react");

var NoteList = React.createClass({
  render: function() {
    var noteLists = this.props.notes.map(function(note, index){
	    	return(

	    		<li className="list-group-item" key={index}> {note['.value']} </li>
	    	)
	    });
    return (

    	<ul className="list-group">
    		{noteLists}
    	</ul>
	)
  }
});

module.exports = NoteList;