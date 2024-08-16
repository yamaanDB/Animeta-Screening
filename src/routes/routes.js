const CommonPath = [
  {
    path: "/auth",
    redirect: "/auth",
  },
  {
    path: "/PageNotfound",
    redirect: "/PageNotfound",
  },
  {
    component: "AuthLayout",
    path: "/auth",
    auth: false,
    name: "Auth",
    exact: false,
    redirect: "/auth/login",
    childrens: [
      {
        component: "Login",
        path: "/login",
        componentPath: "pages/Auth/Login",
        name: "Login",
        auth: false,
        exact: true,
      },
      {
        component: "LoginOtp",
        path: "/login/otp",
        componentPath: "pages/Auth/LoginOtp",
        name: "LoginOtp",
        auth: false,
        exact: true,
      },
      {
        component: "ForgetPassword",
        path: "/login/forgetPassword",
        componentPath: "pages/Auth/ForgetPassword",
        name: "ForgetPassword",
        auth: false,
        exact: true,
      },
      {
        component: "RestPassword",
        path: "/login/restpassword",
        componentPath: "pages/Auth/RestPassword",
        name: "RestPassword",
        auth: false,
        exact: true,
      },
    ],
  },
];

export const Routers = [
  ...CommonPath,
  //user
  {
    component: "MainLayout",
    path: "",
    auth: false,
    name: "User",
    exact: false,
    redirect: "/dashboard",
    childrens: [
      // DASHBOARD
      {
        component: "Dashboard",
        path: "/",
        componentPath: "pages/Dashboard/Admin/dashboard",
        name: "Dashboard",
        auth: false,
        exact: true,
      },
      
    ],
  },
];
