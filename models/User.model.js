const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
          validator:function(v) {
            return /^[a-zA-Z0-9 ]{3,30}$/.test(v)
          }
        }
      },
      pass: {
        type: String,
        require: true
      },
      mail: {
        type: String,
        require: true,
        unique: true,
        index: true,
        validate: {
          validator:function(v){
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
          },
      }
      },
      phone: {
        type: Number,
        require: false
      },
      addresse: {
        type: String,
        require: false
      },
      rol: {
        type: String,
        require: false,
        default:'USER'
      },
      premium: {
        type: Boolean,
        require: true,
        default: false
      },
      dob: {
        type: Date,
        require: false
      },
},{
  timestamps:true
})

const User = mongoose.model('User',UserSchema) //primer param: coleccion, segundo: esquema

module.exports = User