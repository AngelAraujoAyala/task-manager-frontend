import { useAuth } from '../hooks/useAuth';
import { formatTaskDate } from '../utils/date';
export function ProfilePage() {
 const { user } = useAuth();
 if (!user) {
 return <p>Cargando perfil...</p>;
 }
 return (
 <section className="panel" aria-labelledby="profile-title">
 <h2 id="profile-title">Perfil de usuario</h2>
 <dl>
 <div>
 <dt>Nombre</dt>
 <dd>{user.name}</dd>
 </div>
 <div>
 <dt>Correo</dt>
 <dd>{user.email}</dd>
 </div>
 <div>
 <dt>Rol</dt>
 <dd>{user.role}</dd>
 </div>
 <div>
 <dt>Fecha de registro</dt>
 <dd>
 <time dateTime={user.createdAt}>
 {formatTaskDate(user.createdAt)}
 </time>
 </dd>
 </div>
 </dl>
 </section>
 );
}
