// Sistema de Autenticación con Supabase Auth

function getSupabaseClient() {
  if (!window.supabaseClient) {
    throw new Error('Supabase no esta listo. Revisa tu conexion e intenta de nuevo.');
  }

  return window.supabaseClient;
}

function getAuthRedirectUrl() {
  const baseUrl = window.location.href.replace(/auth\.html.*$/, '');
  return `${baseUrl}dashboard.html`;
}

function translateAuthError(message) {
  const normalized = (message || '').toLowerCase();

  if (normalized.includes('already registered') || normalized.includes('already exists')) {
    return 'Este correo ya esta registrado. Inicia sesion o usa otro correo.';
  }

  if (normalized.includes('invalid email')) {
    return 'Ingresa un correo valido.';
  }

  if (normalized.includes('password') && normalized.includes('6')) {
    return 'La contrasena debe tener al menos 6 caracteres.';
  }

  if (normalized.includes('invalid login credentials')) {
    return 'Correo o contrasena incorrectos.';
  }

  if (normalized.includes('email not confirmed')) {
    return 'Confirma tu correo antes de iniciar sesion.';
  }

  return message || 'Ocurrio un error. Intenta de nuevo.';
}

// Verificar si el usuario esta autenticado
async function checkAuth() {
  try {
    const { data: { user } } = await getSupabaseClient().auth.getUser();
    return user;
  } catch (error) {
    console.error('Error al verificar autenticacion:', error);
    return null;
  }
}

// Registrar nuevo usuario
async function handleRegister(email, password, metadata = {}) {
  try {
    const { data, error } = await getSupabaseClient().auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: getAuthRedirectUrl(),
        data: metadata
      }
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: translateAuthError(error.message) };
  }
}

// Login de usuario
async function handleLogin(email, password) {
  try {
    const { data, error } = await getSupabaseClient().auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: translateAuthError(error.message) };
  }
}

// Logout
async function handleLogout() {
  try {
    const { error } = await getSupabaseClient().auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: translateAuthError(error.message) };
  }
}

// Obtener usuario actual
async function getCurrentUser() {
  const { data: { user } } = await getSupabaseClient().auth.getUser();
  return user;
}

// Listener para cambios de autenticación
function onAuthChange(callback) {
  return getSupabaseClient().auth.onAuthStateChange((event, session) => {
    callback(event, session?.user || null);
  });
}
