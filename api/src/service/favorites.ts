import UserModel from "../models/user";
import { User } from "../interface/user";

const postFavoriteUserService = async ({
  ardaId,
  username,
  name,
  imageUrl,
  professionalHeadline,
}: User) => {
  const userInDB = await UserModel.findOne({ ardaId });
  if (userInDB) throw new Error("User already exists");
  const newFavoriteUser = await UserModel.create({
    ardaId,
    username,
    name,
    imageUrl,
    professionalHeadline,
  });
  return newFavoriteUser;
};

const getAllFavoritesService =  async () => {
    const allUsers = await UserModel.find();
    return allUsers;
  };

const deleteFavoriteUserService = async (ardaId: String) => {
  const user = await UserModel.findOneAndDelete({ ardaId });
  if (!user) {
    throw new Error("user not found");
  }
  return `${user?.name} Deleted from favorites`;
};

export { postFavoriteUserService, deleteFavoriteUserService, getAllFavoritesService };