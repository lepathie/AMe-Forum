import { MongoObservable } from 'meteor-rxjs'

import { Post } from 'imports/models/post'

export const Posts = new MongoObservable.Collection<Post>('posts')
