import { URLS } from "~/constants/url-constants";

const DEFAULT_OPTIONS: { credentials: RequestCredentials; headers: {} } = {
  credentials: "include",
  headers: { "Content-Type": "application/json" },
};

class BackendApiService {
  async _makeGetRequest(
    endpoint: string,
    {
      credentials = "include",
      headers = { "Content-Type": "application/json" },
    }: { credentials: RequestCredentials; headers: {} } = DEFAULT_OPTIONS
  ) {
    const response = await fetch(`${URLS().ROOT}/${endpoint}`, {
      credentials,
      headers,
    });
    return response.json();
  }

  async GET(endpoint: string, callback: () => any) {
    this._makeGetRequest(endpoint)
      .then(callback)
      .catch((error) => console.log(error));
  }

  async _makePostRequest(
    endpoint: string,
    data: {},
    {
      credentials = "include",
      headers = { "Content-Type": "application/json" },
    }: { credentials: RequestCredentials; headers: {} } = DEFAULT_OPTIONS
  ) {
    const response = await fetch(`${URLS().ROOT}/${endpoint}`, {
      credentials,
      headers,
      body: JSON.stringify(data),
      method: "post",
    });
    return response.json();
  }

  async POST(endpoint: string, data: {}) {
    try {
      const response = await this._makePostRequest(endpoint, data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new BackendApiService();
