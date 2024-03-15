"use client";

import { PortableText } from "@portabletext/react";

export default function PostBody({ value }: { value: any }) {
  return (
    <div>
      <PortableText value={value} />
    </div>
  );
}
