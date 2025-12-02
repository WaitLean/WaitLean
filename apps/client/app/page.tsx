import { redirect } from "next/navigation";

export default function DashboardRedirect() {
  return redirect("/app/dashboard");
}
