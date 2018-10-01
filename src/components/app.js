import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../actions'
import { Table } from 'react-bootstrap'

const initialState = {
  list: []
}

class App extends Component {
  
  componentWillMount() {
    this.props.showUsers()
  }
  

  
  renderUsersList() {
    return this.props.users.map((users) => {
      return (
        <tr key={users.id}>
          <td>{users.id}</td>
          <td>{users.name}</td>
          <td>{users.email}</td>
        </tr>
      )
    })
  }
  
  render() {
    return (
      <div>
        <h2>Users List</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUsersList() }
          </tbody>
        </Table>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.list
  }
}

export default connect(mapStateToProps, { showUsers })(App)