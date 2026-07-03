function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} MiniBlog | Built with React & Tailwind CSS
      </div>
    </footer>
  );
}

export default Footer;