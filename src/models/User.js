import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (pass?.length || pass.length > 5) {
          new Error('Password must be at least 5 charachters ')
          return false
        }
      },
    },
  },
  { timestamps: true },
)

// UserSchema.pre('save', (next, ...rest) => {
//   console.log(rest);
//   next()
// })

export const User = models?.User || model('User', UserSchema)

