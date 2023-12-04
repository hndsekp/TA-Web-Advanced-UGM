import { Sidebar } from "../components/sidebar";
import classes from "./dashboard.module.css";

export function DashboardLayout({children}) {
    return (
        <>
            <div className={classes.container}>
                <aside className={classes.menu}>
                    <Sidebar/>
                </aside>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </>
    )
}