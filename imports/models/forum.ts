export interface Forum {
    _id?: string
    active?: boolean
    name?: string
    description?: string
    mods?: [string]
    threads?: [{
        _id?: string
        name?: string
        viewCounter?: bigint
        followCounter?: bigint
        date?: Date
        posts?: [{
            _id?: string
            quotedPost?: string
            textQuoted?: string
            comment?: string
            userId?: string
            postTime?: Date
        }]
    }]
}