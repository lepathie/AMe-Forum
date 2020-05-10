import { Forums } from 'imports/collections/forums'
import _ from 'underscore'

Meteor.methods({
    createForum: function(name, description, mod){
      check(name, String);
      check(description, String);
      check(mod,     String);

      var user = Meteor.user();
      if (!user) {
        throw new Meteor.Error("You are not logged in!");
      }
      if (!name) {
        throw new Meteor.Error("ForumName is required!");
      }
      if (!description){
        throw new Meteor.Error("Description is required!");
      }
      if (!mod){
        throw new Meteor.Error("Moderator is required!");
      }

      var newForum = {
        active: true,
        name: name,
        description: description,
        mods: [mod],
        threads:[],
      };
      return Forums.insert(newForum);
    },  
    
    createThread: function(forumId, name){
        check(forumId, String);
        check(name, String);
        var user = Meteor.user();
        if (!user) {
          throw new Meteor.Error("You are not logged in!");
        }
        if (!forumId){
          throw new Meteor.Error("ForumId is required!");
        }
        if (!name){
            throw new Meteor.Error("ThreadName is required!");
          }
        var newthread = {
          name: name,
          viewCounter: 0,
          followCounter: 0,
          date: new Date().getTime,
          posts: [],
        };
        return Forums.find({_id: forumId}).threads.insert(newthread)
      },

      addPost: function(forumId, threadId, quotedPost, quotedText, comment){
        check(forumId, String);
        check(threadId, String);
        check(quotedPost, String);
        check(quotedText, String);
        check(comment, String);
        var user = Meteor.user();
        if (!user) {
          throw new Meteor.Error("You are not logged in!");
        }
        if (!forumId){
          throw new Meteor.Error("ForumId is required!");
        }
        if (!threadId){
          throw new Meteor.Error("ThreadId is required!");
        }
        if (!comment){
          throw new Meteor.Error("Comment is required!");
        }
        
        var newPost = {
          quotedPost: quotedPost,
          quotedText: quotedText,
          comment: comment,
          userId: user._id,
          postTime: new Date().getTime,
        };
        return Forums.find({_id: forumId}).threads.find({_id: threadId}).insert(newPost)
      }
  });
  