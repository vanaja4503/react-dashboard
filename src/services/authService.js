// Demo authentication helper.
// Replace this with a real backend login request later.

export function validateLoginForm(email, password) {
  if (!email.trim() || !password.trim()) {
    throw new Error(
      "Please enter your email and password."
    );
  }

  if (!email.includes("@")) {
    throw new Error("Please enter a valid email.");
  }

  return true;
}