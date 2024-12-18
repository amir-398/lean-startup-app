import ky from "ky";

export async function get() {
  console.log("tests");

  try {
    const response = await ky
      .get("https://api.spacexdata.com/v3/capsules")
      .json();
    return response;
  } catch (error) {
    throw error;
  }
}
