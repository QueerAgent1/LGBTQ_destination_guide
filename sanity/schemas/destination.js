// sanity/schemas/schema.js
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import destination from './destination'
import event from './event'
import accommodation from './accommodation'
import activity from './activity'
import recommendation from './recommendation'
import deal from './deal'
import endorsement from './endorsement'
import multimediaContent from './multimediaContent'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    destination,
    event,
    accommodation,
    activity,
    recommendation,
    deal,
    endorsement,
    multimediaContent,
  ]),
})