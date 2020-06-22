/**
 * @interface Post Post: components of the post collection
 */
export interface Post {
    /**
     * ID: automatically generated identifier
     */
    _id?: string

    /**
     * Thread ID: ID of the forum this post belongs to
     */
    threadId: string

    /**
     * Quoted Post: ID of the post whitch ist quoted by this  post
     */
    quotedPost?: string

    /**
     * Quoted Text: Text of the quoted post
     */
    textQuoted?: string

    /**
     * content: Text of the post
     */
    content: string

    /**
     * User ID: User that wrote this post
     */
    userId: string

    /**
     * Posttime: exact time this post was created
     */
    postTime: Date

}
