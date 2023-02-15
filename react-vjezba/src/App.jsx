import { Component } from "react";
import Users from "./Users";

class App extends Component {
    state = {
        users: [
            {
                id: 1,
                ime: "Branko",
                prezime: "Branković",
                dob: 32,
            },
            {
                id: 2,
                ime: "Janko",
                prezime: "Janković",
                dob: 42,
            },
            {
                id: 3,
                ime: "Stanko",
                prezime: "Stanković",
                dob: 52,
            },
        ],
    };

    saveChanges = (data, type) => {
        const { users } = this.state;
        const user = users.find((user) => data.id == user.id);
        user[type] = data.text;

        this.setState([...users, user]);
    };
    render() {
        const { users } = this.state;

        return (
            <div className="container">
                <Users users={users} onSave={this.saveChanges} />
            </div>
        );
    }
}

export default App;
