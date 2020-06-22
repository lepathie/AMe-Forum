import { Forums } from 'imports/collections/forums'
import { Threads } from 'imports/collections/threads'
import { Posts } from "imports/collections/posts"
import _ from 'underscore'

Meteor.methods({
    /**
     * @function createForum Function to create a new forum
     * @param _forumName Name of the new forum
     * @param _description Description of the new forum
     * @param _mod ID of the Administrator who created the forum
     */
    createForum(_forumName: string, _description: string) {

    const user = Meteor.user()
    if (!user) {
       throw new Meteor.Error("You are not logged in!")
    }
    if (!Roles.userIsInRole(user._id, ['admin', 'mod'])) {
      throw new Meteor.Error("missing permission")
   }
    if (!_forumName || _forumName === "") {
      throw new Meteor.Error("ForumName is required!")
    }

    return Forums.collection.insert({
      active: true,
      name: _forumName,
      description: _description
    })
  }
})
