import nextConnect from 'next-connect';
import database from './database';
import session from './session';

const middleware = nextConnect();

middleware.use(database).use(session);


export default middleware;