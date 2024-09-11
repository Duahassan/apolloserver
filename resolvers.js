import { quotes, Users } from './data.js';
import { randomBytes } from 'crypto';

const resolvers = {
  Query: {
    Users: () => Users,
    user: (_, { _id }) => Users.find(user => user._id === _id),
    quotes: () => quotes,
    iquote: (_, { by }) => quotes.filter(quote => quote.by === by),
  },
  User: {
    quotes: (user) => quotes.filter(quote => quote.by === user._id),
  },
  Mutation: {
    SignUp: (_, { newUser }) => {
      
    },
  },
};

export default resolvers;
