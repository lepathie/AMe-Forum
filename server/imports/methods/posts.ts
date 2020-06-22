import { Posts } from "imports/collections/posts"
import _ from 'underscore'

Meteor.methods({
    /**
     * @function createPost Function to add a post to a forum
     * @param _threadId ID of the thread the new post should be placed in
     * @param _quotedPost ID of the post whitch ist quoted by this new post
     * @param _quotedText Text of the quoted post
     * @param content Text of the new post
     */
    createPost(_threadId: string, _quotedPost: string, _quotedText: string, _content: string) {
    const user = Meteor.user()
    if (user === null) {
      throw new Meteor.Error("You are not logged in!")
      // auskommentiert, für tests, da man beim ausführen von default.ts kein user vorhanden ist
    }
    if (_threadId === "") {
      throw new Meteor.Error("ThreadId is required!")
    }
    if (_content === "") {
      throw new Meteor.Error("Content is required!")
    }
    const timestamp = new Date()
    return Posts.collection.insert({ threadId: _threadId, quotedPost: _quotedText, textQuoted: _quotedText, content: _content, userId: user._id, postTime: timestamp })
  }
})
