// app/[...not-found]/layout.jsx
export default function NotFoundLayout({ children }) {
    return (
        <div>
            <header>
                {/* Header content */}
            </header>
            <main>{children}</main>
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
}