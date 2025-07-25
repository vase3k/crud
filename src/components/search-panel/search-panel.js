import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    onUpdateSearch = e => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    };

    render() {
        return (
            <input
                type="text"
                value={this.state.term}
                onChange={this.onUpdateSearch}
                className="form-control search-input"
                placeholder="найти сотрудника"
            />
        );
    }
}

export default SearchPanel;
