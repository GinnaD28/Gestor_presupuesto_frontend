# Expense Tracker Pro - Frontend

Frontend completo para la aplicación Expense Tracker Pro, construido con React + Vite, TailwindCSS, React Query y Zustand.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router** - Enrutamiento
- **TailwindCSS** - Estilos
- **Axios** - Cliente HTTP
- **Zustand** - Manejo de estado global
- **React Query** - Gestión de peticiones y cache
- **Recharts** - Gráficos y visualizaciones

## 📋 Requisitos Previos

- Node.js 18+ y npm/yarn/pnpm
- Backend de Expense Tracker Pro corriendo (por defecto en `http://localhost:3000`)

## 🔧 Instalación

1. Clona el repositorio o navega al directorio del proyecto

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=http://localhost:3000
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── api/              # Configuración de API y endpoints
│   ├── axiosInstance.js
│   ├── auth.api.js
│   ├── expenses.api.js
│   ├── categories.api.js
│   └── reports.api.js
├── components/        # Componentes reutilizables
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── ProtectedRoute.jsx
│   ├── ExpenseForm.jsx
│   ├── ExpenseTable.jsx
│   └── CategoryForm.jsx
├── hooks/            # Custom hooks
│   ├── useAuth.js
│   ├── useExpenses.js
│   └── useCategories.js
├── pages/            # Páginas de la aplicación
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Expenses.jsx
│   ├── Categories.jsx
│   └── NotFound.jsx
├── store/            # Store de Zustand
│   └── authStore.js
├── utils/            # Utilidades
│   └── formatCurrency.js
├── App.jsx           # Componente principal
├── main.jsx          # Punto de entrada
└── index.css         # Estilos globales
```

## 📱 Funcionalidades

### Autenticación
- ✅ Registro de usuarios
- ✅ Inicio de sesión
- ✅ Protección de rutas
- ✅ Manejo de tokens JWT

### Dashboard
- ✅ Resumen de gastos del mes
- ✅ Gráficos de gastos por categoría (Pie Chart y Bar Chart)
- ✅ Lista de gastos más recientes
- ✅ Descarga de reporte PDF

### Gastos
- ✅ Lista completa de gastos
- ✅ Crear nuevo gasto
- ✅ Editar gasto existente
- ✅ Eliminar gasto con confirmación
- ✅ Filtros por categoría y rango de fechas
- ✅ Descarga de reporte PDF con filtros

### Categorías
- ✅ Lista de categorías
- ✅ Crear nueva categoría
- ✅ Validación de nombres duplicados

## 🔐 Autenticación

La aplicación usa JWT para autenticación. El token se guarda en `localStorage` y se incluye automáticamente en todas las peticiones mediante interceptores de Axios.

## 🎨 Estilos

El proyecto usa TailwindCSS con un tema personalizado. Los estilos están configurados para soportar modo claro y oscuro.

## 📦 Build para Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

## 🚢 Despliegue

El proyecto está listo para desplegarse en Vercel, Netlify o cualquier plataforma que soporte aplicaciones React estáticas.

### Vercel

1. Conecta tu repositorio a Vercel
2. Configura la variable de entorno `VITE_API_URL` con la URL de tu backend
3. Deploy automático

## 🔗 Variables de Entorno

- `VITE_API_URL` - URL base del backend API (requerido)

## 📝 Notas

- Asegúrate de que el backend esté corriendo antes de iniciar el frontend
- El token JWT se guarda en localStorage
- Los errores de autenticación redirigen automáticamente al login

## 🐛 Solución de Problemas

### Error de conexión con el backend
- Verifica que el backend esté corriendo
- Verifica la variable de entorno `VITE_API_URL`
- Revisa la consola del navegador para más detalles

### Token expirado
- El sistema redirige automáticamente al login cuando el token expira
- Simplemente inicia sesión nuevamente

## 📄 Licencia

Este proyecto es parte de Expense Tracker Pro.

