import admin from './admin'
import shared from './shared';
import users from './user'

export default [
    ...users,
    ...admin,
    ...shared,
];