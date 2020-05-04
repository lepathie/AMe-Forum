import { MongoObservable } from 'meteor-rxjs'

import { Topic } from '../models/topic'

export const Topics = new MongoObservable.Collection<Topic>('topic')