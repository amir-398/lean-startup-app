import ky from "ky";

export async function getTestApi() {
  console.log("tests");

  try {
    const response = await ky
      .get("https://api.spacexdata.com/v3/capsules")
      .json();
    console.log("response", response);

    return response;
  } catch (error) {
    throw error;
  }
}
