import mongoose, { Schema, Document, Date } from 'mongoose';


interface IList extends Document {
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const listSchema: Schema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    completed: { type: Boolean, require: true },
    createdAt: { type: Date, require: true },
    updatedAt: { type: Date, require: true }
});

const List = mongoose.model<IList>('List', listSchema);

export default List;