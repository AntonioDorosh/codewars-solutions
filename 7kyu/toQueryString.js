const toQueryString = (obj) => Object.entries(obj).reduce((acc, [key, value]) => [...acc, `${encodeURIComponent(key)}=${encodeURIComponent(value)}`], []).join('&');

console.log(toQueryString({ name: "John Doe", city: "New York" }));