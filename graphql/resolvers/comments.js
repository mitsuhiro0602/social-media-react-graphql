const { UserInputError } = require('apollo-server');
const Post = require('../../models/Post');

module.exports = {
  Mutation: {
    createComment: async(_, { postId, body }, context) => {
      const user = checkAuth(context);
      if(body.trim() === ''){
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Comment body must not empty'
          }
        })
      }
      const post = Post.findById(postId);

      if(post){
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString()
        })
        await Post.save();
        return post;
      } else throw new UserInputError('Post not found');
    }
  }
}