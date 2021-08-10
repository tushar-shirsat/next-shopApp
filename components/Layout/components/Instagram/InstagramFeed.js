import React from "react";
import Image from 'next/image'

const InstagramFeed = () => {
  return (
    <div className="instagram-box">
      <div className="main-instagram owl-carousel owl-theme">
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-01.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-02.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-03.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-04.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-05.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-06.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-07.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-08.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-09.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ins-inner-box">
            <Image src="/images/instagram-Image-05.jpg" alt="" layout='fill' />
            <div className="hov-in">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
