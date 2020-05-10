import { MongoObservable } from 'meteor-rxjs'

import { User } from 'imports/models/user'

export const Users = new MongoObservable.Collection<User>('user')
