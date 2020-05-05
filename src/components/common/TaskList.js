import React from 'react';

import axios from 'axios';

import TaskPost from './TaskPost';

export default class TaskList extends React.Component {
  state = {
    persons: []
  }

    componentDidMount() {
      axios.get(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
    handleDataChange = () => {
      axios.get(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  render() {
    return (
      <>
      <TaskPost handleDataChange={this.handleDataChange} />
      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
      </>
    )
  }
}
