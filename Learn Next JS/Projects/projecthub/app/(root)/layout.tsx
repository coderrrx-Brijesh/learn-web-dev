export default function layout ({children}: Readonly<{children: React.ReactNode}>){
    return (
        <main className="text-2xl">
            {children}

        </main>
)
}