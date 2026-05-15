import { redirect } from "next/navigation";

const defaultCategory = "01";

export default async function page() {
  redirect(`/category/${defaultCategory}`);
}
