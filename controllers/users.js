import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req, res) => {
    res.send(users)
};

export const createUser = (req, res) => {
    // Get the new user from the user request
    const new_user = req.body;

    // Add user to the array
    users.push({ ...new_user, id: uuidv4() });

    // Response to the request
    res.send(users);
};

export const findUser = (req, res) => {
    const { id } = req.params;

    // Find the user from database
    const found = users.find(user => user.id === id);

    res.send(found);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id !== id);

    res.send(users);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const updatedUser = users.find(user => user.id === id)

    if (firstName) updatedUser.firstName = firstName;
    if (lastName) updatedUser.lastName = lastName;
    if (age) updatedUser.age = age;

    res.send(users);
};