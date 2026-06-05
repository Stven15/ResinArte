// Manejador del formulario de personalizacion con Supabase

const RESINARTE_TABLE = 'personalizaciones';

function getFormStatus(form) {
  return form.querySelector('[data-form-status]');
}

function setFormStatus(form, message, type = 'info') {
  const status = getFormStatus(form);
  if (!status) return;

  status.textContent = message;
  status.classList.remove('is-success', 'is-error', 'is-info');
  status.classList.add(`is-${type}`);
}

function setSubmitState(form, isSubmitting) {
  const submitButton = form.querySelector('button[type="submit"]');
  if (!submitButton) return null;

  if (!submitButton.dataset.defaultText) {
    submitButton.dataset.defaultText = submitButton.textContent;
  }

  submitButton.textContent = isSubmitting ? 'Enviando...' : submitButton.dataset.defaultText;
  submitButton.disabled = isSubmitting;
  return submitButton;
}

function validateRequiredFields(form) {
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    field.classList.remove('field-error');
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('field-error');
    }
  });

  return { isValid, requiredFields };
}

async function handleFormSubmission(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  const form = event.target;
  const formData = new FormData(form);

  const { isValid, requiredFields } = validateRequiredFields(form);

  if (!isValid) {
    setFormStatus(form, 'Por favor completa los campos obligatorios.', 'error');
    return;
  }

  if (!window.supabaseClient) {
    setFormStatus(form, 'Supabase no esta configurado. Revisa js/supabase-config.js.', 'error');
    return;
  }

  const inspirationFile = formData.get('imagen');
  const hasFile = inspirationFile instanceof File && inspirationFile.name;

  const personalizationData = {
    nombre: formData.get('nombre') || '',
    email: formData.get('email') || '',
    imagen_inspiracion: hasFile ? inspirationFile.name : 'No adjuntada',
    texto_pieza: formData.get('texto') || '',
    color_preferido: formData.get('color') || '',
    tamano: formData.get('tamano') || '',
    comentarios: formData.get('comentarios') || '',
    proyecto: 'ResinArte',
    fecha_solicitud: new Date().toISOString(),
    estado: 'pendiente'
  };

  try {
    setSubmitState(form, true);
    setFormStatus(form, 'Guardando tu solicitud...', 'info');

    const { error } = await window.supabaseClient
      .from(RESINARTE_TABLE)
      .insert([personalizationData]);

    if (error) {
      console.error('Error en Supabase:', error);
      setFormStatus(form, 'No pudimos guardar tu solicitud. Revisa la tabla en Supabase e intenta otra vez.', 'error');
      return;
    }

    setFormStatus(form, 'Solicitud enviada. Te contactaremos en menos de 24 horas.', 'success');
    form.reset();

    requiredFields.forEach(field => field.classList.remove('field-error'));
  } catch (error) {
    console.error('Error general:', error);
    setFormStatus(form, 'Ocurrio un error inesperado. Intenta de nuevo.', 'error');
  } finally {
    setSubmitState(form, false);
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const personalizationForm = document.querySelector('.personalization-form');
  if (personalizationForm) {
    personalizationForm.addEventListener('submit', handleFormSubmission);
  }
});
