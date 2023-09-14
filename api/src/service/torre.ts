import axios from "axios";

const userByNameService = async (name: string) => {
  const torreResponse = await axios.get(`https://torre.bio/api/bios/${name}`);
  const user = torreResponse.data;
  if (!user) throw new Error("User not found");
  return user;
};

const usersByStreamsService = async (body: any) => {
  const torreResponse = await axios.post(
    "https://torre.ai/api/entities/_searchStream",
    body
  );
  const data = torreResponse.data;
  if (!data) throw new Error("Users not found");
  return data;
};

export { userByNameService, usersByStreamsService };
