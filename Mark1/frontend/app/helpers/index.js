export const apiCall = (url,method='GET',header={},body) => {
    const data = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        ...header
      },
      body: body ? JSON.stringify(body) : undefined
    }
    return fetch(url, data)
}


export const transformDashboardData = (result) => {
  const temp = {}
  if(result?.length > 0) {
    result.forEach( ticket =>{
      const {product,priority} = ticket
        if(!temp[product]){
          temp[product] =[0,0,0]
        }
        switch(priority){
          case 'P1':
            temp[product][0] = temp[product][0] +1
            break;
          case 'P2':
            temp[product][1] = temp[product][1] +1
            break;
          case 'P3':
            temp[product][2] = temp[product][2] +1

        }
    })
    const data = Object.entries(temp).map(([key,value])=>{
      return {
        name:key,
        data:value
      }
    })
    return data
  }
}