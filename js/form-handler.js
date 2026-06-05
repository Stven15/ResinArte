// Manejador del formulario con Supabase

async function handleFormSubmission(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Validar campos requeridos
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    field.classList.remove('border-red-500');
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('border-red-500');
    }
  });

  if (!isValid) {
    alert('Por favor completa los campos obligatorios.');
    return;
  }

  // Preparar datos para enviar
  const personalizationData = {
    nombre: formData.get('nombre') || '',
    email: formData.get('email') || '',
    imagen_inspiracion: formData.get('imagen') || 'No adjuntada',
    texto_pieza: formData.get('texto') || '',
    color_preferido: formData.get('color') || '',
    tamaño: formData.get('tamaño') || '',
    comentarios: formData.get('comentarios') || '',
    fecha_solicitud: new Date().toISOString(),
    estado: 'pendiente'
  };

  try {
    // Mostrar estado de carga
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    // Insertar datos en Supabase
    const { data, error } = await supabaseClient
      .from('personalizaciones')
      .insert([personalizationData]);

    if (error) {
      console.error('Error en Supabase:', error);
      alert('Hubo un error al enviar tu solicitud. Intenta más tarde.');
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      return;
    }

    // Éxito
    alert('¡Solicitud enviada exitosamente! Te contactaremos en menos de 24 horas.');
    form.reset();

    // Reset button
    submitButton.textContent = originalText;
    submitButton.disabled = false;

    // Limpiar campos con error
    requiredFields.forEach(field => field.classList.remove('border-red-500'));

  } catch (error) {
    console.error('Error general:', error);
    alert('Ocurrió un error inesperado. Intenta de nuevo.');
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const personalizationForm = document.querySelector('.personalization-form');
  if (personalizationForm) {
    personalizationForm.addEventListener('submit', handleFormSubmission);
  }
});
