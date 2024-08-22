function sanitizeHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Remove scripts and potentially harmful elements
    const scripts = doc.querySelectorAll('script, iframe, object, embed');
    scripts.forEach(script => script.remove());

    return doc.body.innerHTML;
}