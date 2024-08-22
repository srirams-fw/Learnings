function sanitizeHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Remove scripts and potentially harmful elements
    const scripts = doc.querySelectorAll('script, iframe, object, embed');
    scripts.forEach(script => script.remove());

    return doc.body.innerHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    var languageSelect = document.getElementById('language-select');
  
    languageSelect.addEventListener('change', function() {
      var selectedLanguage = this.value;
  
      // Send an AJAX request to change the language
      fetch('/set_language', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ locale: selectedLanguage })
      }).then(function() {
        // Reload the page to apply the language change
        window.location.reload();
      });
    });
  });
  