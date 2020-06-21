import { Threads } from 'imports/collections/threads'
import _ from 'underscore'
import { bindCallback, Observable } from 'rxjs'

Meteor.methods({
    /**
     * @function createThread Function to create a new thread inside a forum
     * @param _forumId ID of the forum the new thread should be placed in
     * @param _threadName name of the new thread
     */
    createThread(_forumId: string, _threadName: string) {
      const user = Meteor.user()
      if (user === null) {
        throw new Meteor.Error("You are not logged in!")
      }
      if (_forumId === "") {
        throw new Meteor.Error("ForumId is required!")
      }
      if (_threadName === "") {
        throw new Meteor.Error("ThreadName is required!")
      }
      const timestamp = new Date()

      return Threads.collection.insert({ forumId: _forumId, name: _threadName, viewCounter: 0, followCounter: 0, date: timestamp, creator: user._id })
  }
})
