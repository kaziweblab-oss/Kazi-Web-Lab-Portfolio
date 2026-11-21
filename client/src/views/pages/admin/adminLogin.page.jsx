import { useLocation, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../../hooks/useAdminAuth";
import { useState } from "react";

import {
  FaAtom,
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";

export const AdminLoginPage = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, pass);

      const nextPath = location.state?.from?.pathname;

      navigate(
        nextPath?.startsWith("/admin/") ? nextPath : "/admin/dashboard",
        { replace: true },
      );
    } catch (loginError) {
      setError(
        loginError.response?.data?.message ||
          loginError.message ||
          "Login Failed",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#020817] px-4 py-10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#17004d_0%,_transparent_40%),radial-gradient(ellipse_at_bottom_right,_#001d5c_0%,_transparent_45%)]" />

      <div className="absolute w-96 h-96 rounded-full bg-purple-700/30 blur-[120px] -top-40 -left-40" />

      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px] -bottom-40 -right-40" />

      {/* Decorative Orbs */}
      <div className="absolute w-72 h-72 rounded-full border border-purple-500/20 -top-40 -left-20 shadow-[0_0_80px_#7c3aed]" />

      <div className="absolute w-80 h-80 rounded-full border border-cyan-500/20 -bottom-48 -right-20 shadow-[0_0_80px_#06b6d4]" />

      {/* Stars */}
      <div className="absolute top-[15%] left-[10%] w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
      <div className="absolute top-[30%] right-[12%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
      <div className="absolute bottom-[20%] left-[8%] w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
      <div className="absolute top-[8%] right-[25%] w-1 h-1 rounded-full bg-cyan-400" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[550px]">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3">
            <div className="relative text-cyan-400 text-5xl">
              <FaAtom />
              <div
                className="absolute inset-0 blur-xl
                  bg-cyan-400/40"
              />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              KWL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Portfolio
              </span>
            </h1>
          </div>

          <p className="text-slate-300 text-sm tracking-wide mt-2">
            Explore · Download · Grow
          </p>
        </div>

        {/* Login Card */}
        <div className="relative rounded-[28px] p-7 sm:p-9 bg-[#07132d]/90 backdrop-blur-2xl border border-cyan-400/60 shadow-[0_0_25px_rgba(0,212,255,0.25),0_0_50px_rgba(139,92,246,0.15)]">
          {/* Card Top Glow */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/15 pointer-events-none" />

          <div className="relative z-10">
            {/* Admin Icon */}
            <div className="flex justify-center -mt-1 mb-4">
              <div className="relative w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <div className="absolute inset-1 rounded-full border border-purple-500/70" />

                <FaUserShield className="text-4xl text-white" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-[34px] font-extrabold text-center mb-1">
              <span className="text-white">Admin </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Login
              </span>
            </h2>

            <p className="text-center text-slate-300 mb-6">
              Access your dashboard securely
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-7">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-500/70" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/70" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-14 flex items-center justify-center border-r border-cyan-500/20 text-cyan-100 text-xl pointer-events-none">
                  <FaEnvelope />
                </div>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Your Email"
                  className="w-full h-[52px] pl-[70px] pr-4 rounded-2xl bg-[#07132d]/80 border border-blue-400/40 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-14 flex items-center justify-center border-r border-cyan-500/20 text-cyan-100 text-xl pointer-events-none">
                  <FaLock />
                </div>

                <input
                  type={showPass ? "text" : "password"}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                  placeholder="Enter Your Password"
                  className="w-full h-[52px] pl-[70px] pr-14 rounded-2xl bg-[#07132d]/80 border border-blue-400/40 text-white placeholder:text-slate-400 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm py-1">
                <label className="flex items-center gap-3 text-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] accent-cyan-400 cursor-pointer"
                  />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-cyan-400 hover:text-purple-400 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Error */}
              {error && (
                <p role="alert" className="text-red-400 text-sm text-center">
                  {error}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[52px] rounded-full flex items-center justify-center gap-3 text-white text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:brightness-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 disabled:opacity-50"
              >
                <FaSignInAlt />
                {loading ? "Logging in..." : "Sign in"}
              </button>
            </form>

            {/* Footer */}
            <div className="flex items-center gap-4 mt-7">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />

              <p className="text-xs sm:text-sm text-slate-300 whitespace-nowrap">
                © 2026{" "}
                <span className="text-cyan-400 font-semibold">
                  KWL Portfolio.
                </span>{" "}
                All rights reserved.
              </p>

              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
