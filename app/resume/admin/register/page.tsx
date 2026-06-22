"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode, FormEvent } from "react";
import {
  User,
  Mail,
  AtSign,
  Lock,
  Calendar,
  Eye,
  EyeOff,
  ChevronDown,
  UserPlus,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
type FormType = {
  fullName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  dob: string;
  gender: string;
  agree: boolean;
};
type Errors = {
  fullName?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  dob?: string;
  gender?: string;
  agree?: string;
};
export default function RegistrationPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState<FormType>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    agree: false,
  });

  

const [errors, setErrors] = useState<Errors>({});
  function goToLogin() {
  router.push("/resume/admin/login");
}

  function update(field: keyof typeof form, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate():Errors {
    const next:Errors = {};
    if (!form.fullName.trim()) next.fullName = "Enter your full name";
    if (!form.email.trim()) next.email = "Enter your email address";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.username.trim()) next.username = "Choose a username";
    if (!form.password) next.password = "Create a password";
    else if (form.password.length < 6) next.password = "At least 6 characters";
    if (form.confirmPassword !== form.password) next.confirmPassword = "Passwords do not match";
    if (!form.dob) next.dob = "Select your date of birth";
    if (!form.gender) next.gender = "Select your gender";
    if (!form.agree) next.agree = "You must agree to continue";
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setForm({
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      agree: false,
    });
    setErrors({});
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-4">
      <div className="flex gap-3 mb-8">
        <Badge color="violet">REGISTRATION FORM</Badge>
        <Badge color="emerald">REGISTRATION OUTPUT</Badge>
      </div>

      <div className="w-full max-w-md">
        {!submitted ? (
          <FormCard
            form={form}
            errors={errors}
            update={update}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
            onSubmit={handleSubmit}
          />
        ) : (
          <SuccessCard form={form} onGoToLogin={goToLogin} />
        )}
      </div>
    </div>
  );
}
type BadgeProps = {
  children: ReactNode;
  color: "violet" | "emerald";
};
function Badge({ children, color }: BadgeProps) {
  const styles =
    color === "violet"
      ? "bg-violet-100 text-violet-700"
      : "bg-emerald-100 text-emerald-700";
  return (
    <span className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide ${styles}`}>
      {children}
    </span>
  );
}
type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }:FieldProps) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-rose-500">{error}</p>}
    </div>
  );
}
type IconInputProps = {
  icon: any;
  error?: string;
  rightSlot?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

function IconInput({ icon: Icon, error, rightSlot, ...props }:IconInputProps) {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-1 flex items-center justify-center w-9 h-9 rounded-lg bg-violet-50 text-violet-500">
        <Icon size={16} />
      </span>
      <input
        {...props}
        className={`w-full pl-12 pr-10 py-2.5 rounded-xl border text-sm placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-violet-200 ${
          error ? "border-rose-300" : "border-slate-200 focus:border-violet-400"
        }`}
      />
      {rightSlot}
    </div>
  );
}
type FormCardProps = {
  form: FormType;
  errors: Errors;
  update: (field: keyof FormType, value: any) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
function FormCard({
  form,
  errors,
  update,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  onSubmit,
}: FormCardProps) { 
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 relative overflow-hidden">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-violet-200">
          <User className="text-white" size={28} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Create Your Account</h1>
        <p className="text-sm text-slate-500 mt-1">Join us today! Fill in the details to get started.</p>
      </div>

      <form onSubmit={onSubmit} noValidate>
        <Field label="Full Name" error={errors.fullName}>
          <IconInput
            icon={User}
            error={errors.fullName}
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
          />
        </Field>

        <Field label="Email Address" error={errors.email}>
          <IconInput
            icon={Mail}
            error={errors.email}
            type="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>

        <Field label="Username" error={errors.username}>
          <IconInput
            icon={AtSign}
            error={errors.username}
            placeholder="Choose a username"
            value={form.username}
            onChange={(e) => update("username", e.target.value)}
          />
        </Field>

        <Field label="Password" error={errors.password}>
          <IconInput
            icon={Lock}
            error={errors.password}
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 text-slate-400 hover:text-slate-600"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </Field>

        <Field label="Confirm Password" error={errors.confirmPassword}>
          <IconInput
            icon={Lock}
            error={errors.confirmPassword}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={(e) => update("confirmPassword", e.target.value)}
            rightSlot={
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute right-3 text-slate-400 hover:text-slate-600"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </Field>

        <div className="grid grid-cols-2 gap-4 mb-1">
          <Field label="Date of Birth" error={errors.dob}>
            <IconInput
              icon={Calendar}
              error={errors.dob}
              type="date"
              value={form.dob}
              onChange={(e) => update("dob", e.target.value)}
            />
          </Field>

          <Field label="Gender" error={errors.gender}>
            <div className="relative">
              <select
                value={form.gender}
                onChange={(e) => update("gender", e.target.value)}
                className={`w-full pl-3 pr-8 py-2.5 rounded-xl border text-sm outline-none transition appearance-none bg-white focus:ring-2 focus:ring-violet-200 ${
                  errors.gender ? "border-rose-300" : "border-slate-200 focus:border-violet-400"
                } ${form.gender ? "text-slate-700" : "text-slate-400"}`}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="nonbinary">Non-binary</option>
                <option value="prefer-not">Prefer not to say</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </Field>
        </div>

        <div className="mb-5">
          <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => update("agree", e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-violet-600"
            />
            <span>
              I agree to the{" "}
              <span className="text-violet-600 font-medium">Terms & Conditions</span> and{" "}
              <span className="text-violet-600 font-medium">Privacy Policy</span>
            </span>
          </label>
          {errors.agree && <p className="mt-1 text-xs text-rose-500">{errors.agree}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold shadow-lg shadow-violet-200 hover:opacity-95 active:scale-[0.99] transition"
        >
          <UserPlus size={18} />
          Create Account
        </button>

        <p className="text-center text-sm text-slate-500 mt-4">
          Already have an account?{" "}
          <span className="text-violet-600 font-semibold cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
}
type SuccessCardProps = {
  form: FormType;
  onGoToLogin: () => void;
};
function SuccessCard({ form, onGoToLogin }:SuccessCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 relative overflow-hidden">
      <Confetti />

      <div className="relative flex flex-col items-center text-center">
        <div className="relative w-28 h-28 flex items-center justify-center mb-2">
          <div className="absolute inset-0 rounded-full bg-emerald-100 animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
            <CheckCircle2 className="text-white" size={40} strokeWidth={2.5} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mt-2">Registration Successful!</h1>
        <p className="text-sm text-slate-500 mt-1">Welcome to our community 🎉</p>

        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mt-6 shadow-lg shadow-violet-200">
          <User className="text-white" size={32} />
        </div>

        <h2 className="text-lg font-bold text-slate-900 mt-3">{form.fullName || "John Doe"}</h2>
        <p className="text-sm text-slate-500">{form.username || "johndoe123"}</p>
        <p className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
          <Mail size={14} />
          {form.email || "john.doe@email.com"}
        </p>

        <div className="w-full mt-6 bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex gap-3 text-left">
          <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-emerald-700">
            Your account has been created successfully. You can now log in and explore our features.
          </p>
        </div>

        <button
          onClick={onGoToLogin}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold shadow-lg shadow-violet-200 hover:opacity-95 active:scale-[0.99] transition mt-6"
        >
          Go to Login
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

function Confetti() {
  const pieces = [
    { left: "8%", top: "12%", color: "bg-pink-400", rotate: "rotate-12", size: "w-2 h-2" },
    { left: "18%", top: "28%", color: "bg-blue-400", rotate: "rotate-45", size: "w-1.5 h-3" },
    { left: "30%", top: "8%", color: "bg-violet-400", rotate: "rotate-0", size: "w-2 h-2 rounded-full" },
    { left: "78%", top: "10%", color: "bg-pink-400", rotate: "rotate-12", size: "w-2 h-2 rounded-full" },
    { left: "88%", top: "22%", color: "bg-emerald-400", rotate: "-rotate-12", size: "w-1.5 h-3" },
    { left: "92%", top: "6%", color: "bg-yellow-400", rotate: "rotate-45", size: "w-2 h-2" },
    { left: "12%", top: "45%", color: "bg-blue-400", rotate: "rotate-12", size: "w-1.5 h-1.5 rounded-full" },
    { left: "85%", top: "42%", color: "bg-pink-300", rotate: "-rotate-12", size: "w-2 h-2" },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {pieces.map((p, i) => (
        <span
          key={i}
          className={`absolute ${p.size} ${p.color} ${p.rotate} opacity-80`}
          style={{ left: p.left, top: p.top }}
        />
      ))}
    </div>
  );
}