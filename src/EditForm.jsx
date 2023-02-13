import { Component } from 'react';

export default class EditForm extends Component {
    state = {
        value: this.props.text,
        id: this.props.id,
    };
    handleOnChange = (e) => {
        this.state({ text: e.target.value });
    };

    render() {
        const { text } = this.state;
        const { onCancel } = this.props;

        return (
            <div className='input-group'>
                <input type='text' value={text} className='form-control' onChange={this.handleOnChange} />
                <button className='btn btn-success btn-sm' onClick={this.sendData}>
                    &#10003;
                </button>
                <button className='btn btn-danger btn-sm' onClick={onCancel}>
                    X
                </button>
            </div>
        );
    }
}
