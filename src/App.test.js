import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext/AuthContext";
import App from "./App";

describe("React App routing and pages", () => {
  test("renders Signup page at /signup", () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/signup"]}>
          <App />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  });

  test("renders Login page at /login", () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/login"]}>
          <App />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument();
  });

  test("redirects to login when accessing Home unauthenticated", () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </AuthProvider>
    );

    // Since user is not authenticated, Home should not show
    expect(screen.queryByText(/Welcome Home/i)).not.toBeInTheDocument();

    // Login page should show
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });

  test("allows Home access when logged in", () => {
    // simulate authenticated user by setting localStorage
    localStorage.setItem("isAuthenticated", "true");

    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText(/Welcome Home/i)).toBeInTheDocument();

    // cleanup
    localStorage.removeItem("isAuthenticated");
  });
});
