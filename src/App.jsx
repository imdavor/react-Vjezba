import { Component } from 'react';
import UserContext from './UserContext';
import Users from './Users';

class App extends Component {
    state = {
        users: [
            {
                id: 1,
                ime: 'Branko',
                prezime: 'Branković',
                dob: 32,
            },
            {
                id: 2,
                ime: 'Janko',
                prezime: 'Janković',
                dob: 42,
            },
            {
                id: 3,
                ime: 'Stanko',
                prezime: 'Stanković',
                dob: 52,
            },
        ],
    };

    componentDidUpdate = () => {};

    saveChanges = (data, type) => {
        const { users } = this.state;

        const userIndex = users.findIndex((user) => data.id === user.id);
        users[userIndex][type] = data.text;

        this.setState({ users: users });
    };

    contextData = {
        onSave: this.saveChanges,
    };

    render() {
        const { users } = this.state;

        return (
            <div className='container'>
                <UserContext.Provider value={this.contextData}>
                    <Users users={users} />
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;
