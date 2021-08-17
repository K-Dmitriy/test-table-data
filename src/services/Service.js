class Service {
	async getData(URL) {
		const res = await fetch(URL);

		if (!res.ok) {
			throw new Error(`Could not fetch ${URL}, received ${res.status}`);
		}

		return await res.json();
	}
}

export default Service;
