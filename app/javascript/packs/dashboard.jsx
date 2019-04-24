// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';




export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      autoCompleteResults: [],
      dictionarySelected: {},
      showDictionarySelected: false
    };

    $.getJSON('/search?q=' + this.state.term)
      .then(response => this.setState({ autoCompleteResults: response.dictionaries }))
  }

  getAutoCompleteResults(e){
    this.setState({
      term: e.target.value
    }, () => {
      $.getJSON('/search?q=' + this.state.term)
        .then(response => this.setState({ autoCompleteResults: response.dictionaries }))
    });
  }

  render(){
    let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
      return <div key={index}>
        <h2>{response.word}</h2>
        <p>{response.definition }</p>
      </div>
    });

    return (
      <div>
        <input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getAutoCompleteResults.bind(this) } type='text' placeholder='Search...' />
        { autoCompleteList }
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
});
