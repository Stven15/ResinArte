// Sistema de Autenticación con Supabase Auth

// Verificar si el usuario está autenticado
async function checkAuth() {
  try {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
  } catch (error) {
    console.error('Error al verificar autenticación:', error);
    return null;
  }
}

// Registrar nuevo usuario
async function handleRegister(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Login de usuario
async function handleLogin(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Logout
async function handleLogout() {
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Obtener usuario actual
async function getCurrentUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

// Listener para cambios de autenticación
function onAuthChange(callback) {
  return supabaseClient.auth.onAuthStateChange((event, session) => {
    callback(event, session?.user || null);
  });
}
