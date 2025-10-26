import { currentUser } from "@clerk/nextjs/server";
import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import NavigationHeader from "./NavigationHeaderClient";

export default async function NavigationHeaderWrapper() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const user = await currentUser();

  let convexUser = null;
  if (user) {
    convexUser = await convex.query(api.users.getUser, { userId: user.id });
  }

  return <NavigationHeader convexUser={convexUser} />;
}
