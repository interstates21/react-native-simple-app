export const JSONRequest = request => {
  return fetch(request)
    .then(response => {
      if (response.status === 401 || response.status === 403) {
        logout();
      } else if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        return response.json();
      } else {
        throw new Error(response);
      }
    })
    .catch(error => {
      return { error };
    });
};

export const EmptyRequest = request => {
  return fetch(request)
    .then(response => {
      return response;
    })
    .catch(error => {
      return { error };
    });
};
