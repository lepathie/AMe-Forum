import { MongoObservable } from 'meteor-rxjs'

import { User } from 'imports/models/user'

export const Topics = new MongoObservable.Collection<User>('user')


