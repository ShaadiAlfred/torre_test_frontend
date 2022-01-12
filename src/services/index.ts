import { UserInfo } from "../types/UserInfo";

export const getUserDetails = async (
  username: string
): Promise<UserInfo | null> => {
  const url = (process.env.API_URL ?? "") + "/api/" + username + "/skills";

  try {
    const response = await fetch(url);

    if (response.status === 404) throw new Error();

    return (await response.json()) as unknown as UserInfo;
  } catch (error) {
    return null;
  }
};
