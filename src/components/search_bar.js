import React, {Component} from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ""
        };
    }
    
    handleSearch(term){
        this.setState({term});
        this.props.onSearchTerm(term);
    }

    render(){
        return(
            <div className="row">                
                <div className="col-md-4 pull-right search-bar">
                    <input className="form-control input-search"
                        type="text"
                        placeholder="Search a Video"
                        onChange={(e) => this.handleSearch(e.target.value)}
                        value={this.props.term}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;