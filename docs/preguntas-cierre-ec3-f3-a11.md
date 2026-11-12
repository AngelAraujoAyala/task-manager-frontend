# Preguntas de cierre EC3 F3 A11

## 1. ¿Qué diferencia existe entre autenticación y autorización?
Autenticación verifica quién eres, mientras que autorización verifica qué tienes permiso para hacer una vez autenticado.

## 2. ¿Qué información guarda sessionStorage y qué información no debe guardar?
Guarda solo el `accessToken`. No debe guardar datos sensibles como contraseñas o información de usuario para evitar riesgos de XSS.

## 3. ¿Por qué se consulta /api/auth/me al recargar?
Para validar si el `accessToken` guardado en `sessionStorage` sigue siendo válido y para recuperar la identidad del usuario actual sin decodificar el JWT en el cliente.

## 4. ¿Por qué el Frontend no debe confiar en decodificar un JWT sin verificarlo?
Porque el Frontend no puede verificar de forma segura la firma del JWT. El Backend es la única entidad confiable para verificar la validez e integridad del token.

## 5. ¿Qué responsabilidad tiene AuthProvider?
Gestionar el estado global de autenticación, proveer las funciones de login/logout, manejar la restauración de la sesión y coordinar la navegación en caso de expiración del token.

## 6. ¿Qué beneficio ofrece useAuth?
Permite consumir el estado y las funciones de autenticación desde cualquier componente sin necesidad de prop drilling, garantizando que el componente esté dentro del `AuthProvider`.

## 7. ¿Qué representa el estado checking?
Indica que el sistema está validando el `accessToken` presente en `sessionStorage` mediante una llamada a `/auth/me`.

## 8. ¿Qué diferencia existe entre 401 y 403?
401 significa no autenticado (o token inválido). 403 significa autenticado pero sin permisos suficientes para la acción.

## 9. ¿Por qué ProtectedRoute no sustituye la seguridad del Backend?
Porque es solo seguridad en la interfaz de usuario. Cualquier usuario puede omitir la interfaz y hacer peticiones directamente a la API, por lo que el Backend siempre debe validar las peticiones.

## 10. ¿Por qué ocultar Eliminar a user no constituye autorización?
Porque es una medida visual para mejorar la UX. La seguridad real debe estar en el Backend, que debe rechazar la petición DELETE si el usuario no tiene rol admin, independientemente de si la interfaz oculta el botón.

## 11. ¿Por qué un cambio de rol exige iniciar sesión de nuevo?
Porque el rol suele estar codificado dentro del token JWT. Si el rol cambia en el Backend, el token anterior sigue siendo válido pero contiene información desactualizada, por lo que es necesario emitir uno nuevo.

## 12. ¿Qué ocurre realmente al seleccionar Cerrar sesión?
El cliente elimina el `accessToken` del `sessionStorage` y actualiza el estado de React para reflejar que el usuario ya no está autenticado, redirigiendo al usuario a la página de login.

## 13. ¿Qué riesgo conserva sessionStorage ante XSS?
Cualquier script malicioso inyectado en el mismo dominio puede acceder a `sessionStorage` y extraer el token.

## 14. ¿Por qué las tareas todavía no pertenecen a un usuario específico?
Porque el modelo de datos `Task` aún no ha sido modificado para asociar cada tarea con un `userId`, aunque la API ahora valida los roles para las acciones sobre ellas.

## 15. ¿Qué dificultad encontraste al integrar la sesión y cómo la resolviste?
Manejar correctamente el flujo de restauración de sesión y la redirección post-login fue desafiante; lo resolví utilizando el estado `checking` y guardando la ruta de origen en la navegación.
