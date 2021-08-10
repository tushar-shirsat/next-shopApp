import React from "react";
import TopBar from '../TopBar/TopBar'
import TopSearch from "../TopSearch/TopSearch";
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from "react-redux";

const Header = () => {
  const cartItemsCount = useSelector(state => state.cart.length);

  return (
    <>
    <TopBar/>
    <header className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-menu"
              aria-controls="navbars-rs-food"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <Image src="/images/logo.png" className="logo" alt="" width="160px" height="50px" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav ml-auto"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="dropdown megamenu-fw">
                <a
                  href="#"
                  className="nav-link dropdown-toggle arrow"
                  data-toggle="dropdown"
                >
                  Product
                </a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="row">
                      <div className="col-menu col-md-3">
                        <h6 className="title">Top</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="shop.html">Jackets</a>
                            </li>
                            <li>
                              <a href="shop.html">Shirts</a>
                            </li>
                            <li>
                              <a href="shop.html">Sweaters & Cardigans</a>
                            </li>
                            <li>
                              <a href="shop.html">T-shirts</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">Bottom</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="shop.html">Swimwear</a>
                            </li>
                            <li>
                              <a href="shop.html">Skirts</a>
                            </li>
                            <li>
                              <a href="shop.html">Jeans</a>
                            </li>
                            <li>
                              <a href="shop.html">Trousers</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">Clothing</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="shop.html">Top Wear</a>
                            </li>
                            <li>
                              <a href="shop.html">Party wear</a>
                            </li>
                            <li>
                              <a href="shop.html">Bottom Wear</a>
                            </li>
                            <li>
                              <a href="shop.html">Indian Wear</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">Accessories</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li>
                              <a href="shop.html">Bags</a>
                            </li>
                            <li>
                              <a href="shop.html">Sunglasses</a>
                            </li>
                            <li>
                              <a href="shop.html">Fragrances</a>
                            </li>
                            <li>
                              <a href="shop.html">Wallets</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle arrow"
                  data-toggle="dropdown"
                >
                  SHOP
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/cart">
                      <a>Cart</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/checkout">
                      <a >Checkout</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-account">
                      <a>My Account</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/wishlist">
                      <a>Wishlist</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/our-services">
                  <a className="nav-link">
                    Our Service
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-us">
                <a className="nav-link">
                  Contact Us
                </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="attr-nav">
            <ul>
              <li className="search">
                <a href="#">
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li className="side-menu">
                <Link href="/cart">
                  <a>
                    <i className="fa fa-shopping-bag"></i>
                    <span className="badge">{cartItemsCount}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <TopSearch/>
    </>
  );
};

export default Header;
