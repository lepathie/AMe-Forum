import { MongoObservable } from 'meteor-rxjs'

import { Forum } from 'imports/models/forum'

export const Topics = new MongoObservable.Collection<Forum>('forum')