const api = "";

export const fetchGet = async () => {
  try {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response != null) {
      const resJson = await response.json();
      return resJson;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = async (data) => {
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response != null) {
      const resJson = await response.json();
      return resJson;
    }
  } catch (error) {}
};
