import React, {Component} from 'react';

class addFilm extends Component {
    state = {
        filmTitle: '',
        synopsis:'',
        genre: '',
        YouTube: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault(); //prevents default refresh of the page after form is submitted
    }
    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">

                <h5 className="grey-text-text-darken-3">Add film to the database</h5>
                <p>Fill out the form to accession a film to the database.</p>

                    <div className="input-field">
                        <label htmlFor="filmTitle">Film title</label>
                        <input type="text" id="filmTitle" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="synopsis">Film synopsis</label>
                        <textarea name="synopsis" id="synopsis" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <p>This is the select widget.</p>
                        <label htmlFor="genre" >Genre</label>
                        <select onChange={this.handleChange}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Action</option>
                            <option value="2">Adventure</option>
                            <option value="3">Option 3</option>

                        </select>
                        
                    </div>

                    <div className = "input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add film</button>
                    </div>

            </form>
                
            </div>
            
        )
    }
}



export default addFilm;