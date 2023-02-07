import { ForbiddenException, HttpException } from '@nestjs/common'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'


export type UserDocument = HydratedDocument<User>;

@Schema({ validateBeforeSave: true })
export class User {
  @Prop({ 
    type: mongoose.Schema.Types.String, 
    default: function genUUID() {
      return uuidv4()
    }}
  )
  _id: string;

  @Prop({ 
    type: mongoose.Schema.Types.String, 
    required: false 
  })
  fullname: string;

  @Prop({
    type: mongoose.Schema.Types.String, 
    unique: true,
    required: true,
    validate: {
      validator: function (value: string) {
        const regex = new RegExp("\s", "g")
        return !regex.test(value)
      },
      message: "username can't have space!"
    },
  })
  username: string
}

export const UserSchema = SchemaFactory.createForClass(User);