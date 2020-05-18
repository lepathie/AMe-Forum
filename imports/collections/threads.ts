import { MongoObservable } from 'meteor-rxjs'

import { Thread } from 'imports/models/thread'

export const Threads = new MongoObservable.Collection<Thread>('thread')