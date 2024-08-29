import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (!data.user) return null;

  if (error) throw new Error(error.message);
  return data.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signup({ name, email, password, profile_pic }) {
  const filename = `dp-${name.split(" ").join("-")}-${Math.random()}`;
  const { error: errorStorage } = await supabase.storage
    .from("profile_pic")
    .upload(filename, profile_pic);
  if (errorStorage) throw new Error(errorStorage.message);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        profile_pic: `${supabaseUrl}/storage/v1/object/public/profile_pic/${filename}`,
      },
    },
  });
  if (error) throw new Error(error.messag);
  return data;
}
