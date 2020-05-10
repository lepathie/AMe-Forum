import { MongoObservable } from 'meteor-rxjs'

import { Forum } from 'imports/models/forum';

export const Forums = new MongoObservable.Collection<Forum>('forum')