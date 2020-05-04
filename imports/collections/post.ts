import { MongoObservable } from 'meteor-rxjs'

import { Post } from 'imports/models/post'

export const Topics = new MongoObservable.Collection<Post>('post')