# Expense Tracker Pro - Frontend

Frontend completo para la aplicación Expense Tracker Pro, construido con React + Vite, TailwindCSS, React Query y Zustand.

##  Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router** - Enrutamiento
- **TailwindCSS** - Estilos
- **Axios** - Cliente HTTP
- **Zustand** - Manejo de estado global
- **React Query** - Gestión de peticiones y cache
- **Recharts** - Gráficos y visualizaciones

##  Estructura del Proyecto

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

##  Funcionalidades

- Autenticación con JWT (Login y Registro)
- Dashboard con gráficos y resumen de gastos
- Gestión completa de gastos (CRUD)
- Gestión de categorías
- Filtros y búsqueda de gastos
- Generación y descarga de reportes PDF
