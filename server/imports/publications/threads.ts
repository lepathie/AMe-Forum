import { Meteor } from 'meteor/meteor'

import { Threads } from '../../../imports/collections/threads'

Meteor.publish('threads', () => {
    return Threads.find()
})

Meteor.publish('thread', (id) => {
    check(id, String)
    return Threads.find({ _id: id})
})
