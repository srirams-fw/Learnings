export const apiCall = (url,method='GET',header={},body={}) => {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        ...header
      },
      body: JSON.stringify(body)
    })
}