/**
 * @interface Forum Forum: components of the forum collection
 */
export interface Forum {
    /**
     * ID: Automatically generated identifier
     */
    _id?: string

    /**
     * Active: Boolean value that decides whether this Forum is visible or not
     */
    active: boolean

    /**
     * Name: Name of this forum
     */
    name: string

    /**
     * Description: Description of this forum
     */
    description?: string
}
