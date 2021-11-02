import { User } from "./UserListSlice";

type ResponseKind = "success" | "failure";

type NetworkResponse<T> = {
  kind: string;
  body?: T;
};

export const fetchUsers = async (
  page: number,
  count: number
): Promise<NetworkResponse<User[]>> => {
  const respone = await fetch(
    `https://randomuser.me/api/?page=3&results=10&seed=abc`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  if (respone.ok) {
    const json = await respone.json();
    return {
      kind: "success",
      body: json.results,
    };
  } else {
    return {
      kind: "failure",
    };
  }
};
