import { Meteor } from 'meteor/meteor'

import { Posts } from '../../../imports/collections/posts'

Meteor.publish('posts', () => {
    return Posts.find()
})

Meteor.publish('post', (id) => {
    check(id, String)
    return Posts.find({ _id: id})
})
