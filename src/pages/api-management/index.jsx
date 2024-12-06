import ApiSection from "@/components/ApiSection/ApiSection";
import ContentSection from "@/components/ContentSection/ContentSection";
import AdminLayout from "@/layouts/AdminLayout";
import React from "react";

const apiManagement = () => {
  return (
    <AdminLayout>
      <ApiSection />;
    </AdminLayout>
  );
};

export default apiManagement;
