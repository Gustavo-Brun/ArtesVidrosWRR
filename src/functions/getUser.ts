import { authorizedUsers } from "@/data/authorizedUsers";

export type UserProps = {
  name: string;
  password: string;
};

export default function getUser(user: UserProps) {
  switch (user.name) {
    case "carlos":
      if (user.password === process.env.CARLOS_PASSWORD) {
        return authorizedUsers[0];
      } else throw new Error("Invalid password");

    case "gustavo":
      if (user.password === process.env.GUSTAVO_PASSWORD) {
        return authorizedUsers[1];
      } else throw new Error("Invalid password");
  }
}
