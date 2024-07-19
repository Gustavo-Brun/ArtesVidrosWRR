import { authorizedUsers } from "@/data/authorizedUsers";

export type UserProps = {
  password: string;
};

export default function getUser(user: UserProps) {
  switch (user.password) {
    case process.env.CARLOS_PASSWORD:
      return authorizedUsers[0];

    case process.env.GUSTAVO_PASSWORD:
      return authorizedUsers[1];
  }
}
