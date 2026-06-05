// Configuración de Supabase
// IMPORTANTES: Reemplaza estas valores con los de tu proyecto Supabase

const SUPABASE_URL = 'https://hhgszskcgcigovqicqrt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Oa-9HFOCtJEIrs5cvk-w2A_mImeGRhP';

// Inicializar cliente de Supabase
if (!window.supabase?.createClient) {
  console.error('No se pudo cargar Supabase. Revisa la conexion o el CDN.');
} else {
  const { createClient } = window.supabase;
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseClient = supabaseClient;

  // Verificar conexion
  console.log('Supabase cliente inicializado para ResinArte');
}
