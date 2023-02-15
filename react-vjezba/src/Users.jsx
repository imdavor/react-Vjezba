import { Component } from "react";
import User from "./User";

export default class Users extends Component {
    //users = this.props.users;

    render() {
        const { users, onSave } = this.props;
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>R.br</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Godine</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <User
                            user={user}
                            key={user.id}
                            index={index + 1}
                            onSave={onSave}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}
