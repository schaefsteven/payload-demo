import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

type Args = {
	params: Promise<{
		listingID: string
	}>
}

export default async function Page({ params: paramsPromise }: Args) {
	const { id = '' } = await paramsPromise
	const url = '/listings/' + id
	const payload = await getPayload({ config })
	const result = await payload.find({
		collection: 'listings',
		limit: 1,
		pagination: false,
		where: {
			id: {
				equals: id,
			},
		},
	})
	const listing = result.docs?.[0] || null

	return (
		<div>
			<Link href="/listings">&lt; Listings</Link>
			<h1>{listing.title}</h1>
		</div>
	)

}
