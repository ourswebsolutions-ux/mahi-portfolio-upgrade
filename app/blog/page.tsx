import { redirect } from "next/navigation";

// The journal now holds video breakdowns, all listed on /work.
export default function BlogIndex() {
  redirect("/work");
}
