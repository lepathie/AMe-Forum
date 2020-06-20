import { Forums } from 'imports/collections/forums'
import { Threads } from 'imports/collections/threads'
import { Posts } from "imports/collections/posts"
import _ from 'underscore'
import { identifierModuleUrl } from '@angular/compiler'
/**
 *  @file This file contains the defaults for this AMe-Forum installation
 *  Feel free to customize for your needs.
 */
if (Forums.find().cursor.count() === 0) {
  Forums.insert({ active: true, name: "Help", description: "Contains tutorials on usage of the forums."})
  Forums.insert({ active: true, name: "General", description: "Introduction for new users and general rules."})

  // Threads.insert({ _id: "TestId", forumId: "TestId" , name: "testThread", viewCounter: 0, followCounter: 0, date: new Date(), creator: "auto"})
  // Posts.insert({ _id: "TestId", threadId: "TestId", quotedPost: "", textQuoted: "", comment: "TestKommentar", userId: "auto", postTime: new Date()})

  // Methoden um zum erstellen eines Forums:
  // const idforum = Meteor.call("createForum", "Forum1", "Testforum")
  // const idthread = Meteor.call("createThread", "cwRruXbjRuD47PTf3", "Testthread")
  // const idpost = Meteor.call("addPost", "T9aLNqvAjfL87MoGW", "", "", "Kommentar........")
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
})
