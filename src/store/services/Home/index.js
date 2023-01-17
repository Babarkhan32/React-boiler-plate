import client from "../../../utils/axios";

export const getUsersService = async () => {
  try {
    let result = await client.get("/");

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
