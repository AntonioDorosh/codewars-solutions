const domainName = (url) => {
    url = url.replace('http://', '');
    url = url.replace('https://', '');
    url = url.replace('www.', '');

    return url.split('.')[0]
};

console.log(domainName("http://google.com"), "google")
console.log(domainName("www.xakep.ru"), "xakep")