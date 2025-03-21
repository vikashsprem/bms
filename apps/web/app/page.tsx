import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
      <div style={{margin:'100px'}}>
        <h1>Hello, {user?.username}</h1>
        <p>Here is your password, {user?.password}</p>
      </div>
  );
}
