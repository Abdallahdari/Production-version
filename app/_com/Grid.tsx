"use client";

import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
};

interface GridProps {
  data: User[];
}

export default function Grid({ data }: GridProps) {
  return (
    <ul>
      {data.map((user) => (
        <Link href={`/blogs/${user.id}`} key={user.id}>
          {user.id}
        </Link>
      ))}
    </ul>
  );
}
