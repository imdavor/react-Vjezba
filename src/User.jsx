import { Component } from 'react';
import EditForm from './EditForm';

export default class User extends Component {
    state = {
        isEditName: false,
        isEditSurname: false,
        isEditAge: false,
    };

    clickChangeEditName = () => {
        this.setState({ isEditName: !this.state.isEditName });
    };
    clickChangeEditSurname = () => {
        this.setState({ isEditSurname: !this.state.isEditSurname });
    };
    clickChangeEditAge = () => {
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
                            className='link-primary'
                            onClick={this.clickChangeEditName}
                        >
                            {user.ime}
                        </span>
                    )}
                    {isEditName && (
                        <EditForm
                            text={user.ime}
                            id={user.id}
                            onCancel={this.clickChangeEditName}
                            onSave={onSave}
                        />
                    )}
                </td>
                <td>
                    {!isEditSurname && (
                        <span
                            className='link-primary'
                            onClick={this.clickChangeEditSurname}
                        >
                            {user.prezime}
                        </span>
                    )}
                </td>
                <td>
                    {!isEditAge && (
                        <span
                            className='link-primary'
                            onClick={this.clickChangeEditAge}
                        >
                            {user.dob}
                        </span>
                    )}
                </td>
            </tr>
        );
    }
}
