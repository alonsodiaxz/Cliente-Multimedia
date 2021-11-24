export function postComments(commentData) {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/post-comment`;
  const params = {
    method: "POST",
    body: JSON.stringify(commentData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getComments(film) {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/get-comments/${film}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateComments(id, body) {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/update-comment/${id}`;
  const params = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
