import { Meteor } from 'meteor/meteor'

import { Forums } from '../../../imports/collections/forums'

Meteor.publish('forum', () => {
    return Forums.find()
})

Meteor.publish('forum', (id) => {
    check(id, String)
    return Forums.find({ _id: id})
})
