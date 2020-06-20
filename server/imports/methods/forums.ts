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

    // const user = Meteor.user()
    // if (user === null) {
    //   throw new Meteor.Error("You are not logged in!")
      // auskommentiert, für tests, da man beim ausführen von default.ts kein user vorhanden ist
    // }
    if (_forumName === "") {
      throw new Meteor.Error("ForumName is required!")
    }
    if (_description === "") {
      throw new Meteor.Error("Description is required!")
    }

    return Forums.insert({
      active: true,
      name: _forumName,
      description: _description
    })
    // const id = Forums.find({_id: "TrYfp7JsvQTitC6X7"},{_id:1}) => liefert nur ID zurück
  }
})
