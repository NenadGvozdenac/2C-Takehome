const User = require('../../database/models/user')

const resolvers = {
    Query: {
        users: async () => {
            try {
                const users = await User.find()
                return users
            } catch (err) {
                throw new Error(err)
            }
        },

        user: async (_, { id }) => {
            try {
                const user = await User.findOne({ id })
                return user
            } catch (err) {
                throw new Error(err)
            }
        },

        filterUserByName: async (_, { name }) => {
            try {
                // If any name starts with the given name, it will return all users with that name
                const users = await User.find({ name: { $regex: name, $options: 'i' } })
                return users
            } catch (err) {
                throw new Error(err)
            }
        },

        filterUserByEmail: async (_, { email }) => {
            try {
                // If any email starts with the given email, it will return all users with that email
                const users = await User.find({ email: { $regex: email, $options: 'i' } })
                return users
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}

module.exports = resolvers