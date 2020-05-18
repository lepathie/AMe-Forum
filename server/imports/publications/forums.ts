import { Meteor } from 'meteor/meteor'

import { Forums } from '../../../imports/collections/forums'

Meteor.publish('forums', () => {
    return Forums.find()
})

Meteor.publish('topic', (id) => {
    check(id, String)
    return Forums.find({ _id: id})
})