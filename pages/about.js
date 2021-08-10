import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import OurTeamLoader from "../components/Layout/components/OurTeam/components/TeamMember/OurTeamLoader";
import PageTitleBox from "../components/PageTitleBox/PageTitleBox";


const OurTeam = dynamic(
  () => import("../components/Layout/components/OurTeam/OurTeam"),
  { loading: () => <OurTeamLoader />, ssr: false }
);

OurTeam.displayName = 'OurTeam';

const about = () => {
  return (
    <>
      <PageTitleBox />
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                We are <span>ThewayShop</span>
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
              <Image
                  className="Image-thumbnail Image-fluid"
                  src="/images/about-img.jpg"
                  layout="fill"
                  alt="image"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Trusted</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Expert</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
          <OurTeam />
        </div>
      </div>
    </>
  );
};

export default about;
