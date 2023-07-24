import axios from "axios";

const apiKey = "3a05dad67amshaa28900cba03eedp138c15jsnf470026fc926";

const apiBaseUrl = "https://shazam.p.rapidapi.com/shazam-events/list";

const headers = {
  "x-rapidapi-key": apiKey,
  "x-rapidapi-host": "shazam.p.rapidapi.com",
};

export const searchMusic = async (searchTerm: string) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/search`, {
      headers,
      params: {
        term: searchTerm,
        locale: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while searching music:", error);
    return null;
  }
};

export const getMusicDetails = async (trackId: string) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/songs/get-details`, {
      headers,
      params: {
        id: trackId,
        locale: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while getting music details:", error);
    return null;
  }
};
