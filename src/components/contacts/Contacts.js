import React, { Component } from 'react';
import { connect } from 'react-redux'

import Contact from './Contact';

import { getContacts } from '../../actions/contactAction'


class Contacts extends Component {

    componentDidMount() {
        this.props.getContacts()
    }

    render() {

        const { contacts } = this.props

        return (
            <React.Fragment>
                <h1 className="display-4 mb-4">
                    <span className="text-danger">Contact</span> List
                </h1>
                {contacts.map(contact => (
                    <Contact key={contact.id} contacts={contact} />
                ))}
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
})


export default connect(mapStateToProps, { getContacts })(Contacts);
