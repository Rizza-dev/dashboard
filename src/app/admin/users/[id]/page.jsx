import EditUser from "@/components/admin/EditUser";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function EditUserPage({ params }) {
  // ⚡ params یک promise است، باید await شود
  const { id } = await params;
  
  
  await connectDB();
  const user = await User.findById(id).lean();

  if (!user) {
    return <div>کاربری پیدا نشد</div>;
  }
  

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">ویرایش کاربر</h1>
      <EditUser user={JSON.parse(JSON.stringify(user))} />
    </div>
  );
}
