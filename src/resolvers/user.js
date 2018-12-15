import Joi from 'joi'
import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { SignUp } from '../schemas'
import { User } from '../models'

export default {
  Query: {
    users: (root, args, context, info) => {
      // TODO: suth, projection, pagination
      return User.find({})
    },
    user: (root, { id }, context, info) => {
      if (mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }
      return User.findById(id)
    }
  },
  Mutation: {
    signUp: async (root, args, context, info) => {
      // TODO: not auth 
      await Joi.validate(args, SignUp, { abortEarly: false })
      // validation
      return User.create(args)
    }
  }
}
