import { Forums } from 'imports/collections/forums'
import _ from 'underscore'

Meteor.methods({
    createForum(name, description, mod) {
      check(name, String)
      check(description, String)
      check(mod,     String)

      const user = Meteor.user()
      if (!user) {
        throw new Meteor.Error("You are not logged in!")
      }
      if (!name) {
        throw new Meteor.Error("ForumName is required!")
      }
      if (!description) {
        throw new Meteor.Error("Description is required!")
      }
      if (!mod) {
        throw new Meteor.Error("Moderator is required!")
      }

      return Forums.insert({
        active: true,
        name,
        description,
        mods: [mod]
      })
    },

    createThread(forumId, name) {
        check(forumId, String)
        check(name, String)
        const user = Meteor.user()
        if (!user) {
          throw new Meteor.Error("You are not logged in!")
        }
        if (!forumId) {
          throw new Meteor.Error("ForumId is required!")
        }
        if (!name) {
            throw new Meteor.Error("ThreadName is required!")
          }
        const newthread = {
          name,
          viewCounter: 0,
          followCounter: 0,
          date: new Date().getTime
        }

        return Forums.update({ _id: forumId}, { $push: { "threads" : newthread}})
      },

    addPost(forumId, threadId, quotedPost, quotedText, comment) {
        check(forumId, String)
        check(threadId, String)
        check(quotedPost, String)
        check(quotedText, String)
        check(comment, String)
        const user = Meteor.user()
        if (!user) {
          throw new Meteor.Error("You are not logged in!")
        }
        if (!forumId) {
          throw new Meteor.Error("ForumId is required!")
        }
        if (!threadId) {
          throw new Meteor.Error("ThreadId is required!")
        }
        if (!comment) {
          throw new Meteor.Error("Comment is required!")
        }

        const newPost = {
          quotedPost,
          quotedText,
          comment,
          userId: user._id,
          postTime: new Date().getTime
        }
        // Forums.update( { threads: { threadId: { threadId { $push: { "posts" : newPost}} } } } )
        // Forums.find( { threads: { threadId: { threadId } } } )
        const index = { $indexOfArray: Forums.find( { threads: { threadId: { threadId } } } ) }
        const searchstring = "threads.".concat(index.toString() , ".posts" )
        return Forums.update({ _id: forumId}, { $push: { searchstring : newPost}})

      }
  })
