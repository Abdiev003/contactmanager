import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { deleteContact } from '../../actions/contactAction'


class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onClickHandle = (id) => {;
        this.props.deleteContact(id)
    }


    render() {
        const { id, name, email, phone } = this.props.contacts;
        const { showContactInfo } = this.state

        return (
            <div className="card card-body">
                <h4>
                    {name}
                    &nbsp;
                    <i onClick={() => {
                        this.setState({
                            showContactInfo: !this.state.showContactInfo
                        });
                    }}
                        className="fas fa-sort-down"
                        style={{ cursor: "pointer" }}
                    />

                    <i
                        className="fas fa-times"
                        style={{ cursor: "pointer", float: "right", color: "red" }}
                        onClick={this.onClickHandle.bind(this, id)}
                    />

                    <Link to={`/contact/edit/${id}`}>
                        <i
                            className="fas fa-pencil-alt"
                            style={{
                                cursor: "pointer",
                                float: "right",
                                color: "black",
                                marginRight: "1rem"
                            }}
                        />
                    </Link>

                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null}

            </div>
        )
    }
};

export default connect(null, { deleteContact })(Contact);
