import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function AuthedPage() {
  await auth.protect();
  const user = await currentUser();

  return (
    <main className="px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            Welcome, {user?.firstName}!
          </CardTitle>
          <CardDescription className="text-lg">
            This page is only accessible to authenticated users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Your Information:</h3>
          <ul className="list-disc list-inside pl-1">
            <li>
              Full Name: {user?.firstName} {user?.lastName}
            </li>
            <li>Email: {user?.emailAddresses[0].emailAddress}</li>
            <li>User ID: {user?.id}</li>
            <li>
              Created At:{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
