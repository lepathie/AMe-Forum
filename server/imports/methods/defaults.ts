import { Forums } from 'imports/collections/forums'
import _ from 'underscore'
/**
 *  @file This file contains the defaults for this AMe-Forum installation
 *  Feel free to customize for your needs.
 */
if (Forums.find().cursor.count() === 0) {
  _.each([{ active: true, name: "Help", description: "Contains tutorials on usage of the forums." }, { active: true, name: "General", description: "Introduction for new users and general rules."} ], (forum) => {
    Forums.insert(forum)
  })
  // Threads.insert({ _id: "TestId", forumId: "TestId" , name: "testThread", viewCounter: 0, followCounter: 0, date: new Date(), creator: "auto"})
  // Posts.insert({ _id: "TestId", threadId: "TestId", quotedPost: "", textQuoted: "", content: "TestKommentar", userId: "auto", postTime: new Date()})

  // Methoden um zum erstellen eines Forums:
  // const idforum = Meteor.call("createForum", "Forum1", "Testforum", "TestModeratorId")
  // const idthread = Meteor.call("createThread", "cwRruXbjRuD47PTf3", "Testthread")
  // const idpost = Meteor.call("createPost", "T9aLNqvAjfL87MoGW", "", "", "Kommentar........")
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
