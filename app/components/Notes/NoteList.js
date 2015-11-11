import React from 'react';

class NoteList extends React.Component{
	render(){
		var noteLists = this.props.notes.map((note, index) => {
	    	return(

	    		<li className="list-group-item" key={index}> {note} </li>
	    	)
	    });
		return (

			<ul className="list-group">
				{noteLists}
			</ul>
		)
	}
};

export default NoteList;