export function signUp(userData) {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return result;
      }
    })
    .catch((err) => {
      return err.message;
    });
}

export function signIn(userData) {
  console.log(process.env.BASE_PATH);
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/sign-in`;
  const params = {
    method: "POST",
    body: JSON.stringify(userData),
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
      return err.message;
    });
}
