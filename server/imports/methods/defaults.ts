import { Forums } from 'imports/collections/forums'
import _ from 'underscore'
import { Threads } from 'imports/collections/threads'
import { Posts } from 'imports/collections/posts'
/**
 *  @file This file contains the defaults for this AMe-Forum installation
 *  Feel free to customize for your needs.
 */

 // Default Forums, Threads and Posts
if (Forums.find().cursor.count() === 0) {
  _.each([{ active: true, name: "Help", description: "Contains tutorials on usage of the forums." }, { active: true, name: "General", description: "Introduction for new users and general rules."} ], (forum) => {
    Forums.insert(forum)
  })

  Forums.insert({ active: true, name: "Feature-Showcase", description: "Contains some showcases of features."}).subscribe((_forumId) => {
      Threads.insert({ forumId: _forumId , name: "Markdown Support", viewCounter: 0, followCounter: 0, date: new Date(), creator: "System"}).subscribe((_threadId) => {
        Posts.insert({ threadId: _threadId, userId: "System", postTime: new Date(), content: "# We support Markdown 🙂\n\nYou can use **Markdown** in all of your posts.  \nMake 'em *pretty*!"})
      })
  })
}
// Default users
if (Meteor.users.find().count() === 0) {
    _.each(
      [
        {
          name: "Normal User",
          email: "user@user.de",
          roles: []
        },
        {
          name: "Admin User",
          email: "admin@admin.de",
          roles: ['admin']
        },
        {
          name: "Moderator User",
          email: "mod@mod.de",
          roles: ['mod']
        }
      ],
      (user) => {
        let id
        id = Accounts.createUser({
          email: user.email,
          password: "sh7up#KT!",
          profile: {
            name: user.name
          }
        })

        // verify email
        Meteor.users.update({ _id: id}, { $set: { 'emails.0.verified': true }})

        // create roles if necessary
        _.each(user.roles, (role) => {
          Roles.createRole(role, { unlessExists: true })
        })

        // add user to roll
        Roles.addUsersToRoles(id, user.roles)
      }
    )
}
