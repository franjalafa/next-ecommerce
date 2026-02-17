import { Navbar } from "@/components";


export default function PublicLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="bg-gray-100 w-full h-screen flex flex-col">
                <Navbar />
                <main className="flex flex-col items-center p-24">
                    <div className="text-lg">Hola muindfo</div>
                    {children}
                </main>
            </div>
        </>
    );
}

