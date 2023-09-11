import React from 'react';
import { Helmet } from 'react-helmet';
import { AdminFooter, AdminHeader, AdminSidebar } from '../admin';

type AdminLayoutProps = {
    children: React.ReactNode,
    title?: string,
    desc?: string
}

const AdminLayout = ({children, title, desc}: AdminLayoutProps) => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Helmet>
            <header className="w-[100%] h-[100px] flex flex-row justify-between items-center">
              <section className="w-[20%]">
                <AdminSidebar />
              </section>
              <section className="w-[80%] fixed top-0 right-0 z-10">
                <AdminHeader />
              </section>
            </header>
            <main className="ml-[20%] bg-[#f6f6f6] overflow-y-auto">
              {children}
            </main>
            <footer className="ml-[20%] w-[80%] min-h-[300px] bg-[#0F172A]">
              <AdminFooter />
            </footer>
    </>
  )
}

AdminLayout.defaultProps = {
    title: "Delivery",
  };
  

export default AdminLayout