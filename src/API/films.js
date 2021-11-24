export function getFilmsName(name) {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/get-films-name/${name}`;
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

export function getFilmsGender(gender) {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/get-films-gender/${gender}`;
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

export function getPremieres() {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/get-premieres`;
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

export function getAllFilms() {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/get-films`;
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

export function getFilmsRating() {
  const url = `${process.env.REACT_APP_BASE_PATH}/${process.env.REACT_APP_API_VERSION}/get-films-rating`;
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
