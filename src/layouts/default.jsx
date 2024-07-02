import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <header className="w-full bg-white shadow">
        <nav className="container mx-auto p-4 flex justify-between">
          <a href="/" className="text-xl font-bold">MyApp</a>
          <div>
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="w-full bg-white shadow p-4 text-center">
        <p className="text-gray-600">© 2023 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;