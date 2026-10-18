"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "./modal";

export function RouteModal({ title, children }: { title: string; children: ReactNode }) {
  const router = useRouter();

  return <Modal title={title} wide onClose={() => router.back()}>{children}</Modal>;
}
