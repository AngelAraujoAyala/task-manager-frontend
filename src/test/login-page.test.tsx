import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import type { AuthContextValue } from '../context/auth-context';
import { useAuth } from '../hooks/useAuth';
import type { AuthUser } from '../models/auth.types';
import { LoginPage } from '../pages/LoginPage';

vi.mock('../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}));

const mockedUseAuth = vi.mocked(useAuth);

const user: AuthUser = {
  id: 'user-01',
  name: 'Ana Torres',
  email: 'ana@example.com',
  role: 'user',
  createdAt: '2026-10-14T00:00:00.000Z',
  updatedAt: '2026-10-14T00:00:00.000Z',
};

function createAuthValue(
  overrides: Partial<AuthContextValue> = {},
): AuthContextValue {
  return {
    status: 'anonymous',
    user: null,
    accessToken: null,
    sessionMessage: '',
    login: vi.fn(async () => user),
    register: vi.fn(async () => user),
    logout: vi.fn(),
    retrySession: vi.fn(async () => undefined),
    clearSessionMessage: vi.fn(),
    ...overrides,
  };
}

function renderLogin() {
  return render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<h1>Mis tareas</h1>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('página de acceso', () => {
  beforeEach(() => {
    mockedUseAuth.mockReturnValue(createAuthValue());
  });

  it('envía el correo y la contraseña a login', async () => {
    const authValue = createAuthValue();
    mockedUseAuth.mockReturnValue(authValue);
    const userEventSetup = userEvent.setup();

    renderLogin();

    await userEventSetup.type(
      screen.getByLabelText('Correo electrónico'),
      'ana@example.com',
    );
    await userEventSetup.type(
      screen.getByLabelText('Contraseña'),
      'Secreta123',
    );
    await userEventSetup.click(
      screen.getByRole('button', { name: 'Iniciar sesión' }),
    );

    expect(authValue.login).toHaveBeenCalledWith({
      email: 'ana@example.com',
      password: 'Secreta123',
    });
    expect(
      await screen.findByRole('heading', { name: 'Mis tareas' }),
    ).toBeInTheDocument();
  });
});
