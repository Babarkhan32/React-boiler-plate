import client from "../../../utils/axios";

export const getUsersService = async () => {
  try {
    let result = await client.get("/");
    console.log("Result", process.env.BASE_URL);
    if (!result) {
      return {
        success: false,
        message: "Something went wrogn",
      };
    }
    return {
      success: true,
      data: result.data,
    };
  } catch (exception) {
    return {
      success: false,
      message: exception.message,
    };
  }
};
