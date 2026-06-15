export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-foreground/60">
      <p>
        &copy; {new Date().getFullYear()} MechTechnologie. All rights reserved.
      </p>
    </footer>
  );
}
