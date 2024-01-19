const chatApi = "http://192.168.0.108:3000/openai/api";
const pokeApi = "https://api.pokemontcg.io/v2/cards/";

export const fetchGet = async () => {
  try {
    const response = await fetch(chatApi, {
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
    console.log("fetGetErr >>>", error);
  }
};

export const fetchPost = async (data: any) => {
  try {
    const response = await fetch(chatApi, {
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
  } catch (error) {
    console.log("fetchPost Error >>>", error);
  }
};
