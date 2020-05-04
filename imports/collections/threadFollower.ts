import { MongoObservable } from 'meteor-rxjs'

import { ThreadFollower } from 'imports/models/threadFollower'

export const Topics = new MongoObservable.Collection<ThreadFollower>('threadFollower')