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
  pathname === "/our-menu" ? "Our Menu" :
  pathname === "/about-us" ? "About Us" :
  pathname === "/contact-us" ? "Contact Us" :
  pathname === "/book-a-table" ? "Booking" :
  pathname === "/our-services" ? "Our Services" :
  pathname === "/product-list" ? "Product Store Online" :
  null;
  
  return (
    <div class="container-xxl position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link href="/" class="navbar-brand p-0">
          <h1 class="text-primary m-0">
            <i class="fa fa-utensils me-3"></i>Restoran
          </h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0 pe-4">
            <Link href="/" class="nav-item nav-link">
              Home
            </Link>
            <Link href="/about-us" class="nav-item nav-link">
              About
            </Link>
            <Link href="/our-services" class="nav-item nav-link">
              Service
            </Link>
            <Link href="/our-menu" class="nav-item nav-link">
              Menu
            </Link>
            <Link href="/contact-us" class="nav-item nav-link">
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

      <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container text-center my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            {TitleText}
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center text-uppercase">
              <li class="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li class="breadcrumb-item text-white active" aria-current="page">
                {TitleText}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
