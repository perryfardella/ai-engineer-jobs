import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8">
        <LoginForm />
      </div>
    </div>
  );
}
