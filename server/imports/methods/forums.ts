import { Forums } from 'imports/collections/forums'
import { Threads } from 'imports/collections/threads'
import { Posts } from "imports/collections/posts"
import _ from 'underscore'

Meteor.methods({
    createForum(_forumName: string, _description: string, _mod: string) {

    const user = Meteor.user()
    if (user === null) {
       throw new Meteor.Error("You are not logged in!")
      // auskommentiert, für tests, da man beim ausführen von default.ts kein user vorhanden ist
    }
    if (_forumName === "") {
      throw new Meteor.Error("ForumName is required!")
    }
    if (_description === "") {
      throw new Meteor.Error("Description is required!")
    }
    if (_mod === "") {
      throw new Meteor.Error("Moderator is required!")
    }

    return Forums.insert({
      active: true,
      name: _forumName,
      description: _description,
      mods: [_mod]
    })
    // const id = Forums.find({_id: "TrYfp7JsvQTitC6X7"},{_id:1})
  },

    createThread(_forumId: string, _threadName: string) {
    const user = Meteor.user()
    if (user === null) {
      throw new Meteor.Error("You are not logged in!")
      // auskommentiert, für tests, da man beim ausführen von default.ts kein user vorhanden ist
    }
    if (_forumId === "") {
      throw new Meteor.Error("ForumId is required!")
    }
    if (_threadName === "") {
        throw new Meteor.Error("ThreadName is required!")
      }

    const timestamp = new Date()
    return Threads.insert({ forumId: _forumId, name: _threadName, viewCounter: 0, followCounter: 0, date: timestamp, creator: user._id })
  },

    addPost(_threadId: string, _quotedPost: string, _quotedText: string, _comment: string) {
    const user = Meteor.user()
    if (user === null) {
      throw new Meteor.Error("You are not logged in!")
      // auskommentiert, für tests, da man beim ausführen von default.ts kein user vorhanden ist
    }
    if (_threadId === "") {
      throw new Meteor.Error("ThreadId is required!")
    }
    if (_comment === "") {
      throw new Meteor.Error("Comment is required!")
    }
    const timestamp = new Date()
    return Posts.insert({ threadId: _threadId, quotedPost: _quotedText, textQuoted: _quotedText, comment: _comment, userId: user._id, postTime: timestamp })
  }
})
