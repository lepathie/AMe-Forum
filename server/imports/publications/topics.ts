import { Meteor } from 'meteor/meteor'

import { Topics } from '../../../imports/collections/topics'

Meteor.publish('topics', () => {
    return Topics.find()
})

Meteor.publish('topic', (id) => {
    check(id, String)
    return Topics.find({ _id: id})
})
