import * as z from 'zod'

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export const createPostSchema = z.object({
	title: z.string(),
	slug: z.string().check(z.regex(slugRegex)),
	content: z.string(),
})

export const updatePostSchema = z.object({
	id: z.string().transform((id) => Number(id)),
	title: z.string(),
	slug: z.string().check(z.regex(slugRegex)),
	content: z.string(),
})

export const postCommentSchema = z.object({
	postId: z.string().transform((id) => Number(id)),
	author: z.string(),
	comment: z.string().check(z.minLength(2)),
})
