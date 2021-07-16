import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, EDIT_CONTACT } from './types';
import axios from "axios";

export const getContacts = () => async (dispatch) => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users')

    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    })
}

export const deleteContact = (id) => async (dispatch) => {

    try {
        const res = await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)

        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }
    catch {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }

}

export const addContact = (contact) => async (dispatch) => {
    const res = await axios.post('http://jsonplaceholder.typicode.com/users', contact)

    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    })
}

export const updateContact = (id, contact) => async (dispatch) => {
    const res = await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, contact)

    dispatch({
        type: EDIT_CONTACT,
        payload: res.data
    })
}