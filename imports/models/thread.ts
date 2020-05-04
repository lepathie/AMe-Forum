export interface Thread {
    _id?: string
    locked?: boolean
    sticky?: boolean
    active?: boolean
    subject?: string
    forumId?: string
    viewCount?: BigInteger
    startedBy?: string
    dateCreated?: Date
}