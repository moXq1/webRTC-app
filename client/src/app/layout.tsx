import type { Metadata } from "next";

import "./globals.css";
import { ColorSwitcher } from "./components/ui/ColorSwitcher";
import { Theme } from "./components/ui/Theme";
import { ThemeProvider } from "@/store";
import { Glass } from "./components/ui/Glass";

import styles from "./page.module.css";
import Link from "next/link";
import { SettingsIcon } from "./(home)/chat/page";
import { Icon } from "./components/ui/Icon";

export const metadata: Metadata = {
  title: "Talk Fuse",
  description: "Cool and epic text ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Theme>
            <nav className={styles.nav}>
              <Glass>
                <div className={styles.navContent}>
                  <Link
                    title="home"
                    className={`${styles.link} ${styles.logo}`}
                    href="/">
                    <Icon />
                  </Link>
                  <div className={styles.links}>
                    <Link
                      title="settings"
                      className={styles.link}
                      href="/settings">
                      <SettingsIcon />
                    </Link>

                    <ColorSwitcher />
                  </div>
                </div>
              </Glass>
            </nav>

            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
