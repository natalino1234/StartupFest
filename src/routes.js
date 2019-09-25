import Ranking from "./pages/Ranking/Ranking";
import Lista from "./pages/Lista/Lista";

export const routes = [
    {
        path: "/",
        component: Lista,
        exact: true
        
    },
    {
        path: "/Detalhar",
        component: null,
        exact: true
    },
    {
        path: "/Ranking",
        component: Ranking,
        exact: true
    }
];