import UserSection from "@/components/UserSection/UserSection";
import AdminLayout from "@/layouts/AdminLayout";

export default function Home() {
  return (
    <AdminLayout>
      <UserSection />
    </AdminLayout>
  );
}
