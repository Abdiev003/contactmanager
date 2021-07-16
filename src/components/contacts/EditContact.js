import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import TextInputGroup from "../layout/TextInputGroup"
import { updateContact } from '../../actions/contactAction'

class EditContact extends Component {

    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        const contact = res.data

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }


    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault()

        const { id } = this.props.match.params

        const { name, email, phone } = this.state;

        if (name === "") {
            this.setState({
                errors: { name: "Name is required" }
            })
            return;
        }

        if (email === "") {
            this.setState({
                errors: { email: "Email is required" }
            })
            return;
        }

        if (phone === "") {
            this.setState({
                errors: { phone: "Phone is required" }
            })
            return;
        }

        const updContact = {
            name,
            email,
            phone
        }

        this.props.updateContact(id, updContact)

        this.setState({
            name: "",
            email: "",
            phone: ""
        })

        this.props.history.push('/')
    }

    render() {
        const { name, email, phone, errors } = this.state;

        return (

            <div className="card mb-3">
                <div className="card-header">Edit Contacts</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup
                            label="Name"
                            name="name"
                            value={name}
                            placeholder="Enter Name..."
                            onChange={this.onChange}
                            error={errors.name}
                        />
                        <TextInputGroup
                            label="Email"
                            name="email"
                            value={email}
                            placeholder="Enter Email..."
                            onChange={this.onChange}
                            error={errors.email}
                        />
                        <TextInputGroup
                            label="Phone"
                            name="phone"
                            value={phone}
                            placeholder="Enter Phone..."
                            onChange={this.onChange}
                            error={errors.phone}
                        />

                        <div className="form-group">
                            <input
                                type="submit"
                                value="Update Contact"
                                className="btn btn-secondary w-100 mt-3"
                            />
                        </div>
                    </form>
                </div>
            </div>

        )
    }
};



export default connect(null, { updateContact })(EditContact);
