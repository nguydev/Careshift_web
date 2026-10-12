"use server";

import { cookies } from "next/headers";

const apiUrl = process.env.SERVER_URL;

if (!apiUrl) {
  throw new Error("SERVER_URL is not defined");
}

export const sendIncident = async (data) => {
  const token = (await cookies()).get("token")?.value;

  try {
    // const res = await fetch(`${apiUrl}/incident/add`, {
    const res = await fetch(
      `${apiUrl}/incident/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
        cache: "no-store",
      },
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to submit incident");
    }

    return await res.json();
  } catch (error) {
    // console.log(error)
    // console.error("sendIncident error:", error);
    throw error;
  }
};
// // ------------ all games --------------
// export const allGames = async () => {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/game/getAllGame`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       next: {
//         tags: ["GAME"],
//       },
//     });
//     return await res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };

// // ------------ top game of the day --------------
// export const topGamesDay = async () => {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/game/top-game/day`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       next: {
//         tags: ["GAME"],
//       },
//     });
//     return await res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };

// //------------ top game of the week --------------
// export const topGamesWeek = async () => {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/game/top-game/week`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       next: {
//         tags: ["GAME"],
//       },
//     });
//     return await res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };

// export const gameSearch = async (query?: {
//   [key: string]: string | string[] | undefined;
// }) => {
//   const params = new URLSearchParams();

//   if (query?.searchTerm) {
//     params.append("searchTerm", query?.searchTerm.toString());
//   }
//   try {
//     const res = await fetch(
//       `${process.env.BASE_URL}/game/search-game?${params.toString()}`,
//       {
//         next: {
//           tags: ["GAME"],
//         },
//       }
//     );
//     return await res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };

// export const upvoteGame = async (gameId: string) => {
//   const token = (await cookies()).get("accessToken")?.value || "";
//   // console.log("token", gameId);
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/game/upvote-game`, {
//       body: JSON.stringify(gameId),
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     revalidateTag("GAME");
//     return await res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };
