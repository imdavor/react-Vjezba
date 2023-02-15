import { Component } from "react";
import EditForm from "./EditForm";

export default class User extends Component {
    state = {
        isEditName: false,
        isEditSurname: false,
        isEditAge: false,
    };

    handleChangeEditName = () => {
        this.setState({ isEditName: !this.state.isEditName });
    };

    handleChangeEditSurname = () => {
        this.setState({ isEditSurname: !this.state.isEditSurname });
    };

    handleChangeEditAge = () => {
        this.setState({ isEditAge: !this.state.isEditAge });
    };

    render() {
        const { index, user, onSave } = this.props;
        const { isEditName, isEditSurname, isEditAge } = this.state;

        return (
            <tr>
                <td>{index}.</td>
                <td>
                    {!isEditName && (
                        <span
                            className="link-primary"
                            onClick={this.handleChangeEditName}
                        >
                            {user.ime}
                        </span>
                    )}

                    {isEditName && (
                        <EditForm
                            text={user.ime}
                            id={user.id}
                            type="ime"
                            onCancel={this.handleChangeEditName}
                            onSave={onSave}
                        />
                    )}
                </td>
                <td>
                    {!isEditSurname && (
                        <span
                            className="link-primary"
                            onClick={this.handleChangeEditSurname}
                        >
                            {user.prezime}
                        </span>
                    )}
                </td>
                <td>
                    {!isEditAge && (
                        <span
                            className="link-primary"
                            onClick={this.handleChangeEditAge}
                        >
                            {user.dob}
                        </span>
                    )}
                </td>
            </tr>
        );
    }
}
