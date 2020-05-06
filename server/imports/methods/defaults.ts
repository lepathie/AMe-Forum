import { Topics } from "imports/collections/topics"

// This file contains the defaults for this AMe-Forum installation
// Feel free to customize for your needs.

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
          username: "user@user.de",
          email: "user@user.de",
          password: "sh7up#KT!",
          profile: {
            first_name: "",
            last_name: "",
            company: ""
          }
        },
        {
          username: "admin@admin.de",
          email: "admin@admin.de",
          password: "sh7up#KT!",
          profile: {
            first_name: "",
            last_name: "",
            company: ""
          }
        },
        {
          username: "mod@mod.de",
          email: "mod@mod.de",
          password: "sh7up#KT!",
          profile: {
            first_name: "",
            last_name: "",
            company: ""
          }
        }
      ],
      (user) => {
        Accounts.createUser(user)
      }
    )
  }
})
