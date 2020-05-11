export interface Thread {
    _id?: string
    forumId: string
    name: string
    viewCounter: number
    followCounter: number
    date: Date
    creator: string
}
