import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface ITask {
  name: string;
  completed: boolean;
}

const taskSchema = new Schema<ITask>({
  name: {
    type: String,
    trim: true,
    maxLength: [20, "Name cannot be more than 20 characters"],
    required: [true, "A name must be given"],
  },
  completed: {
    type: Boolean,
    default: false,
  },skill:{
    
  }

});

const Task: Model<ITask> = model("Task", taskSchema);

export default Task;
