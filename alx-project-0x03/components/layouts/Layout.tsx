// components/layouts/Layout.tsx

import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header here if any */}
      <main className="flex-grow">{children}</main>
      {/* Footer here if any */}
    </div>
  );
};

export default Layout;
