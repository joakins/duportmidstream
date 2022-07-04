import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import "../../styles/MediaAndNews/MediaNewsSingle.css";

const MediaNewsSingle = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const client = createClient({
    space: "y6fz8lfxq5jm",
    accessToken: "gzmy5v0fZKtl6N9Ur5pe7YuIE05NQfFt6MROcYrC3t8",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleBlogPost(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEntryById();
  }, []);

  console.log(singleBlogPost);

  return (
    <>
      <section className="pt-5 pb-5" id="reviews">
        <div className="container">
          <Link to="/media" className="button button1 btn-section1">
            Back To Blog Lists
            <span>
              <img src="./img/arrowRight.png" alt="" />
            </span>
          </Link>
          <div className="container my-5">
            <div className="mx-auto text-secondary mainRow">
              <h3 className="font-weight-bold text-dark">
                <strong>{singleBlogPost?.fields?.blogTitle}</strong>
              </h3>

              <div>
                <small>
                  <p className="my-2">
                    By: {singleBlogPost?.fields?.blogAuthor}&nbsp;&nbsp; Date:
                    {singleBlogPost?.fields?.createdDate}
                  </p>
                </small>
              </div>

              <img
                className="w-65 my-3"
                src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
                title=""
                alt={singleBlogPost?.fields?.blogTitle}
              />
            </div>

            <div className="mx-auto  mainRow">
              <p className="my-2 contentBody">
                {singleBlogPost?.fields?.postContent}
              </p>
              <br />
              <br />

              <br />
            </div>
            <hr />

            <h4 className="font-weight-bold text-dark">Share Article</h4>
            <div className="side-block">
              <a href="#" target="_blank" className="social-icon">
                <img src="img/fbIcon.png" />
              </a>
              <a href="#" target="_blank" className="social-icon">
                <img src="img/twitterIcon.png" />
              </a>
              <a href="#" target="_blank" className="social-icon">
                <img src="img/emailIcon.png" />
              </a>
            </div>

            <hr />

            <h4 className="font-weight-bold text-dark">Latest News</h4>

            <div className="row py-5">
              <div className="col-lg-12 col-12">
                <div className="box-news">
                  <a
                    aria-label="LunarXP Wins Space Innovator of the Year Award"
                    href="#"
                  >
                    <div className="row">
                      <div className="col-lg-3 col-4 pr-1">
                        <img
                          alt="LunarXP Wins Space Innovator of the Year Award"
                          className="img-fluid"
                          src="img/blogIcon.png"
                        />
                      </div>
                      <div className="col-lg-9 col-8">
                        <p>20 June, 2021 </p>
                        <h5>
                          TIPS AND STRATEGIES: INVESTING IN OIL AND GAS
                          COMPANIES 2021
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="box-news">
                  <a href="#">
                    <div className="row">
                      <div className="col-lg-3 col-4 pr-1 py-3">
                        <img
                          alt="New Spending Bill Expands Funding for Space Exploration News Image"
                          className="img-fluid"
                          src="img/blogImgSmall.png"
                        />
                      </div>
                      <div className="col-lg-9 col-8">
                        <p>20 June, 2021, 2:35 pm</p>
                        <h5>FIRM BOOSTS LOCAL CONTENT, UNVEILS ENERGY PARK</h5>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-lg-9 offset-lg-3 col-md-8 offset-md-4 col-7 offset-4">
                  <a href="#" className="view">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaNewsSingle;
