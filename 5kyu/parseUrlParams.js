const parseUrlParams = (url) => {
	const indexOfQuestionMark = url.indexOf('?');

	if (indexOfQuestionMark === -1) {
		return {};
	}

	const cleanUrl = url.slice(indexOfQuestionMark + 1);

	if (!cleanUrl) {
		return {}
	}

	const arrayParams = cleanUrl.split('&');

	return arrayParams.reduce((acc, params) => {
		const [key, value] = params.split('=');

		acc[key] = value || '';

		return acc
	}, {})
};
console.log(parseUrlParams('https://example.com/page?id=123&name=test_user&active=true'));
/*
Ожидаемый вывод:
{
  id: '123',
  name: 'test_user',
  active: 'true'
}
*/

console.log(parseUrlParams('https://example.com/another-page?category=js&sort=asc'));
/*
Ожидаемый вывод:
{
  category: 'js',
  sort: 'asc'
}
*/

console.log(parseUrlParams('https://example.com/no-params'));
// Ожидаемый вывод: {}