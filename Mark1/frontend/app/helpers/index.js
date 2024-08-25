export const apiCall = (url, method = 'GET', header = {}, body) => {
  const data = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('content'),
      ...header,
    },
    body: body ? JSON.stringify(body) : undefined,
  };
  return fetch(url, data);
};

export const transformDashboardData = (result) => {
  const temp = {};
  const categories = {
    '< 25 hrs': 0,
    '25 - 50 hrs': 0,
    '50 - 75 hrs': 0,
    '75 - 100 hrs': 0,
    '> 100 hrs': 0,
  };

  if (result?.length > 0) {
    result.forEach((ticket) => {
      //for Chart0 open tickets
      const { product, priority } = ticket;
      if (!temp[product]) {
        temp[product] = [0, 0, 0];
      }
      switch (priority) {
        case 'P1':
          temp[product][0]++;
          break;
        case 'P2':
          temp[product][1]++;
          break;
        case 'P3':
          temp[product][2]++;
      }

      //For chart1 TAT
      const timeDifference = calculateTimeDifferenceInHours(
        ticket.start_date,
        ticket.due_date
      );

      if (timeDifference < 25) {
        categories['< 25 hrs']++;
      } else if (timeDifference < 50) {
        categories['25 - 50 hrs']++;
      } else if (timeDifference < 75) {
        categories['50 - 75 hrs']++;
      } else if (timeDifference < 100) {
        categories['75 - 100 hrs']++;
      } else {
        categories['> 100 hrs']++;
      }
    });

    const data = Object.entries(temp).map(([key, value]) => {
      return {
        name: key,
        data: value,
      };
    });

    const totalTickets = result.length;
    for (let category in categories) {
      categories[category] = (
        (categories[category] / totalTickets) *
        100
      ).toFixed(2);
    }

    return { data0: data, data1: categories };
  }
};

function calculateTimeDifferenceInHours(startDate, dueDate) {
  const start = new Date(startDate);
  const due = new Date(dueDate);
  const differenceInMilliseconds = due - start;
  return differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
}
