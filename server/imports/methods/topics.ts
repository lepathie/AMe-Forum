import { Topics } from 'imports/collections/topics'
import _ from 'underscore'

if (Topics.find().cursor.count() === 0) {
    _.each(['General Discussion', 'Tutorials', 'Help'],
           (topicName) => {
        Topics.insert({ name: topicName })
    })
}