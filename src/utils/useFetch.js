import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
	const [data, setData] = useState(null);
	const [isError, setError] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const controller = new AbortController();

	useEffect(() => {
		setLoading(true);
		setError(false);
		setData(undefined);

		fetch(url, { signal: controller.signal, ...options })
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				}
				return Promise.reject(res);
			})
			.then(setData)
			.catch((err) => {
				if (err.name === "AbortError") return;
				setError(err);
				console.warn(err);
				setLoading(false);
			})
			.finally(() => {
				if (controller.signal.aborted) {
					console.log("SIGNAL ABORTED");
					return;
				}
				setLoading(false);
			});
		localStorage.setItem("Issues", JSON.stringify(data));
		return () => controller.abort();
	}, [url]);

	return { data, isLoading, isError };
}
