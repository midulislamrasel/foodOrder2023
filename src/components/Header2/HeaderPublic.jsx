"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function HeaderPublic() {
  const router = useRouter();
  const pathname = usePathname();

  const handleOrderOnline = () => {
    router.push("/product-list", { scroll: true });
  };

  const TitleText =
    pathname === "/our-menu"
      ? "Our Menu"
      : pathname === "/about-us"
      ? "About Us"
      : pathname === "/contact-us"
      ? "Contact Us"
      : pathname === "/book-a-table"
      ? "Booking"
      : pathname === "/our-services"
      ? "Our Services"
      : pathname === "/product-list"
      ? "Product Store Online"
      : pathname === "/terms-and-condition"
      ? "Our terms and condition"
      : pathname === "/privacy-policy"
      ? "Our policy"
      : null;

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>BUBT SDP-3
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link href="/" className="nav-item nav-link">
              Home
            </Link>
            <Link href="/about-us" className="nav-item nav-link">
              About
            </Link>
            <Link href="/our-services" className="nav-item nav-link">
              Service
            </Link>
            <Link href="/our-menu" className="nav-item nav-link">
              Menu
            </Link>
            <Link href="/contact-us" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <button
            onClick={() => handleOrderOnline()}
            className="btn btn-primary py-2 px-4"
          >
            Order online
          </button>
        </div>
      </nav>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            {TitleText}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                {TitleText}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
