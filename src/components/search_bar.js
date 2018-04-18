import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { keywords: '' };
    };

    render() {
        return (
            <div className="search-bar">
                <input
                    value = { this.state.keywords } 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    };

    onInputChange(keywords){
        this.setState({ keywords });
        this.props.onSearchTermChange(keywords);
    };
}

export default SearchBar;
