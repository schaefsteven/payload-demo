import React from 'react';

async function getListings() {
	const res = await fetch('http://localhost:3000/api/listings');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();

}

export default async function ListingsPage() {
	const listings = await getListings();
	return (
		<div>
			<h1>Listings</h1>
			<ul>
				{listings.docs.map((listing) => (
					<li key={listing.id}>
						<h2>{listing.title}</h2>
						<span>{listing.description}</span>
					</li>
				))}
			</ul>
		</div>
		);
}
					
