// Configuración de Supabase
// IMPORTANTES: Reemplaza estas valores con los de tu proyecto Supabase

const SUPABASE_URL = 'https://hhgszskcgcigovqicqrt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Oa-9HFOCtJEIrs5cvk-w2A_mImeGRhP';

// Inicializar cliente de Supabase
const { createClient } = window.supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Verificar conexión
console.log('Supabase cliente inicializado');
