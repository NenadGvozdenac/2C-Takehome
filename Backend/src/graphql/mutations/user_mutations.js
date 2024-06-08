const User = require('../../database/models/user')

const mutations = {
    Mutation: {
        addUser: async (_, { name, email }) => {
            try {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!email.match(emailRegex)) {
                    throw new Error('Invalid email format')
                }

                const user = new User({
                    name,
                    email
                })
                await user.save()
                return user
            } catch (err) {
                throw new Error(err)
            }
        },

        deleteUser: async (_, { id }) => {
            try {
                const user = await User.findById(id)
                if (!user) {
                    throw new Error('User not found')
                }
                await user.deleteOne()
                return user
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}

module.exports = mutations