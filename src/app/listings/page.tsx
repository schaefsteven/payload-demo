import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

export default async function ListingsPage() {
	const payload = await getPayload({ config })

	const listings = await payload.find({
		collection: 'listings',
	})

	return (
		<div>
			<h1>Listings</h1>
			<ul>
				{listings.docs.map((listing) => (
					<li key={listing.id}>
						<Link href={`/listings/${listing.id}`}>
							<h2>{listing.title}</h2>
						</Link>
						<span>{listing.description}</span>
					</li>
				))}
			</ul>
		</div>
		);
}
					
