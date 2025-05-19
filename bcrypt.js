import bcrypt from "bcrypt";

const saltRounds = 10; // The number of rounds to process the data for
const plainPassword = 'Av701049300';

// Hash the password
bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
    if (err) {
        console.error('Error hashing password:', err);
    } else {
        console.log('Hashed password:', hash);
    }
});