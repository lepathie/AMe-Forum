import { MongoObservable } from 'meteor-rxjs'

import { ForumModerator } from 'imports/models/forumModerator'

export const Topics = new MongoObservable.Collection<ForumModerator>('forumModerator')