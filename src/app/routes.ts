export const pathsRoutes = {
    NONE: '',
    // =================== auth ======================
    AUTH: 'auth',
    SIGN_IN: 'sign-in',
    REGISTER_USER: 'register-user',
    VERIFY_EMAIL: 'verify-email-address',
    FORGOT_PASSWORD: 'forgot-password',
    // =================== dashboard ======================
    DASHBOARD: 'dashboard',

    // =================== users ======================
    USERS: 'users',
    PLANETS: 'planets',
    INFO_USERS: 'info',
    FORM_USERS: 'form',
    FORM_USERS_PLANET: 'planet',
    INFO_USER: 'info-persona',
};

export const appRoutes = {
    NONE: '',
    // =================== auth ======================
    AUTH: `${pathsRoutes.AUTH}`,
    SIGN_IN: `${pathsRoutes.AUTH}/${pathsRoutes.SIGN_IN}`,
    REGISTER_USER: `${pathsRoutes.AUTH}/${pathsRoutes.REGISTER_USER}`,
    VERIFY_EMAIL: `${pathsRoutes.AUTH}/${pathsRoutes.VERIFY_EMAIL}`,
    FORGOT_PASSWORD: `${pathsRoutes.AUTH}/${pathsRoutes.FORGOT_PASSWORD}`,

    // =================== dashboard ======================
    DASHBOARD: `${pathsRoutes.DASHBOARD}`,

    // =================== users ======================
    USERS: `${pathsRoutes.DASHBOARD}/${pathsRoutes.USERS}`,
    INFO_USERS: `${pathsRoutes.DASHBOARD}/${pathsRoutes.USERS}/${pathsRoutes.INFO_USERS}`,
    FORM_USERS: `${pathsRoutes.DASHBOARD}/${pathsRoutes.USERS}/${pathsRoutes.FORM_USERS}`,
    FORM_USERS_PLANET: `${pathsRoutes.DASHBOARD}/${pathsRoutes.USERS}/${pathsRoutes.FORM_USERS_PLANET}`,
    INFO_USER: `${pathsRoutes.DASHBOARD}/${pathsRoutes.USERS}/${pathsRoutes.INFO_USER}`,
};
