import { auth, currentUser } from "@clerk/nextjs/server";
import Prisma from "./db";

export async function syncUserWithDatabase() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      console.error("No authenticated user found");
      return null;
    }

    const dbUser = await Prisma.user.upsert({
      where: {
        id: userId, // String ID from Clerk
      },
      update: {
        email: user.emailAddresses[0]?.emailAddress || "",
        username: user.username || user.firstName || "user",
      },
      create: {
        id: userId,
        email: user.emailAddresses[0]?.emailAddress || "",
        username: user.username || user.firstName || "user",
        clerkId: userId,
      },
  
    });

    console.log("User synced with database", dbUser.id);
    return dbUser;
  } catch (error) {
    console.error("Error syncing user with database:", error);
    return null;
  }
}
