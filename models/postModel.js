import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  title: String,
  category: String,
  desc: String,
  body: String,
  auth: String,
  image: String,
  authImage: String,
  clicked: String,
});

const Post = models.Post || model('Post', postSchema);

export default Post;