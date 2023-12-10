"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  const handleOrderOnline = () => {
    router.push("/product-list", { scroll: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link href="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Restoran
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <FaBars/>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link href="/" className="nav-item nav-link active">
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
  );
}
