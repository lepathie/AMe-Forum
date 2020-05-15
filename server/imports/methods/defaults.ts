import { Topics } from "imports/collections/topics"
import _ from 'underscore'

/**
 *  @file This file contains the defaults for this AMe-Forum installation
 *  Feel free to customize for your needs.
 */

Meteor.startup(() => {
  // Default topics
  if (Topics.find().cursor.count() === 0) {
    _.each(["General Discussion", "Tutorials", "Help"], (topicName) => {
      Topics.insert({ name: topicName })
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
})
