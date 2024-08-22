function sanitizeHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Remove scripts and potentially harmful elements
    const scripts = doc.querySelectorAll('script, iframe, object, embed');
    scripts.forEach(script => script.remove());

    return doc.body.innerHTML;
}

function debounce(func, delay=500) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}




var apiCall = (url,method='GET',header={},body={},callback=()=>{}) => {
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      ...header
    },
    body: JSON.stringify(body)
  }) .then(response => {
    if (!response.ok) {
      throw new Error(`Error:: Response in ${url} -> ${response.statusText}` );
    }
    return response.json();
  }).then(callback);
}
var reload = () => window.location.reload();
document.addEventListener('DOMContentLoaded', function() {
    var languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() { apiCall('/set_language','POST',null,{ locale: this.value },reload)});
  });
  