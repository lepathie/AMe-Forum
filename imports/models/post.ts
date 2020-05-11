export interface Post {
    _id?: string
    threadId: string
    quotedPost?: string
    textQuoted?: string
    comment: string
    userId: string
    postTime: Date

}