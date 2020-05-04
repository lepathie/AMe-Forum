import { MongoObservable } from 'meteor-rxjs'

import { Thread } from 'imports/models/thread'

export const Topics = new MongoObservable.Collection<Thread>('thread')