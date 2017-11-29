import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFruit()
    this.fetchFilters()
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({fruit}))
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({filters}))
  }

  handleChange = event => {
    this.setState({
      currentFilter: event
    })
  }

  handleFilterChange = event => {
    this.setState({
      currentFilter: event.target.value
    })
  }

  render() {
    return (
      <FruitBasket fruit={this.state.fruit}
        filter={this.state.currentFilter}
        handleChange={this.handleChange}
      />
    )
  }
}
export default App;
