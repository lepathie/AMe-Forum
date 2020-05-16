/**
 * @interface Thread Thread: components of the thread collection
 */
export interface Thread {
    /**
     * ID: automatically generated identifier
     */
    _id?: string

    /**
     * Forum ID: ID of the forum this thread belongs to
     */
    forumId: string

    /**
     * Name: Name of this Thread
     */
    name: string

    /**
     * Viewcounter: Counts how many views this thread has
     */
    viewCounter: number

    /**
     * Followcounter: Counts how many follows this thread has
     */
    followCounter: number

    /**
     * Date: Date this thread was created
     */
    date: Date

    /**
     * Creator: User that created this thread
     */
    creator: string
}
