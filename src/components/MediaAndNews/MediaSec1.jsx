import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
import "../../styles/MediaAndNews/MediaSec1.css";

const MediaSec1 = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "y6fz8lfxq5jm",
    accessToken: "gzmy5v0fZKtl6N9Ur5pe7YuIE05NQfFt6MROcYrC3t8",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, []);

  return (
    <>
      <section class="pt-5 pb-5" id="reviews">
        <div class="container">
          <div class="row">
            <div class="leftcolumn">
              {blogPosts?.items?.map((post) => (
                <div class="card" data-aos="fade-up" key={post.sys.id}>
                  <h3 class="font-weight-bold text-dark">
                    <strong>{post.fields.blogTitle}</strong>
                  </h3>
                  <small>
                    <p class="my-2">
                      By: {post.fields.blogAuthor}&nbsp;&nbsp; Date:
                      {post.fields.createdDate}
                    </p>
                  </small>
                  <div class="">
                    <img
                      class="w-65 my-3 featureImg"
                      src={post.fields.blogImage.fields.file.url}
                      alt={post.fields.blogTitle}
                    />
                  </div>
                  <p class="my-2">{post.fields.blogSummary}</p>
                  <Link
                    to={`/mediaDetails/${post.sys.id}`}
                    className="button button1 btn-section1"
                  >
                    Read More
                    <span>
                      <img src="./img/arrowRight.png" alt="" />
                    </span>
                  </Link>
                  &nbsp;
                </div>
              ))}
              <hr />

              <button class="btnLoadMore">
                Show More
                <span>
                  <img src="./img/arrowRight.png" alt="arrowRight" />
                </span>
              </button>
            </div>

            <div class="rightcolumn" data-aos="fade-left">
              <div class="card">
                <h3>Recent Post</h3>
                <hr />
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-4 col-4 pr-1">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/blogIcon.png"
                      />
                    </div>
                    <div class="col-lg-8 col-8">
                      <p class="rightcolumnDate">20 June, 2021 </p>
                      <p class="rightcolumnTitle">
                        We are a leading Energy company developing the first
                        energy park in Nigeria
                      </p>
                    </div>
                  </div>
                </a>
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-4 col-4 pr-1">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/blogIcon2.png"
                      />
                    </div>
                    <div class="col-lg-8 col-8">
                      <p class="rightcolumnDate">20 June, 2021 </p>
                      <p class="rightcolumnTitle">
                        We are a leading Energy company developing the first
                        energy park in Nigeria
                      </p>
                    </div>
                  </div>
                </a>
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-4 col-4 pr-1">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/blogIcon3.png"
                      />
                    </div>
                    <div class="col-lg-8 col-8">
                      <p class="rightcolumnDate">20 June, 2021 </p>
                      <p class="rightcolumnTitle">
                        We are a leading Energy company developing the first
                        energy park in Nigeria
                      </p>
                    </div>
                  </div>
                </a>
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-4 col-4 pr-1">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/blogIcon4.png"
                      />
                    </div>
                    <div class="col-lg-8 col-8">
                      <p class="rightcolumnDate">20 June, 2021 </p>
                      <p class="rightcolumnTitle">
                        We are a leading Energy company developing the first
                        energy park in Nigeria
                      </p>
                    </div>
                  </div>
                </a>
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-4 col-4 pr-1">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/blogIcon5.png"
                      />
                    </div>
                    <div class="col-lg-8 col-8">
                      <p class="rightcolumnDate">20 June, 2021 </p>
                      <p class="rightcolumnTitle">
                        We are a leading Energy company developing the first
                        energy park in Nigeria
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <hr />
              <div class="card">
                <h3>Archives</h3>
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-10 col-4 pr-1">
                      <p class="rightcolumnDate">June, 2021 </p>
                    </div>
                    <div class="col-lg-2 col-8">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/arrowDown.png"
                      />
                    </div>
                  </div>

                  <div class="column">
                    <div class="col-lg-10 col-4 pr-1">
                      <p class="rightcolumnDate">
                        Xiaomi's stumble allows Apple to reclaim No.2 spot in
                        smartphones
                      </p>
                      <p class="rightcolumnDate">
                        Xiaomi's stumble allows Apple to reclaim No.2 spot in
                        smartphones
                      </p>
                      <p class="rightcolumnDate">
                        Xiaomi's stumble allows Apple to reclaim No.2 spot in
                        smartphones
                      </p>
                    </div>
                  </div>
                </a>

                <hr />
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-10 col-4 pr-1">
                      <p class="rightcolumnDate">May, 2021 </p>
                    </div>
                    <div class="col-lg-2 col-8">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/arrowDown.png"
                      />
                    </div>
                  </div>
                </a>
                <hr />
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-10 col-4 pr-1">
                      <p class="rightcolumnDate">April, 2021 </p>
                    </div>
                    <div class="col-lg-2 col-8">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/arrowDown.png"
                      />
                    </div>
                  </div>
                </a>
                <hr />
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-10 col-4 pr-1">
                      <p class="rightcolumnDate">March, 2021 </p>
                    </div>
                    <div class="col-lg-2 col-8">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/arrowDown.png"
                      />
                    </div>
                  </div>
                </a>
                <hr />
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-10 col-4 pr-1">
                      <p class="rightcolumnDate">Fbruary, 2021 </p>
                    </div>
                    <div class="col-lg-2 col-8">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/arrowDown.png"
                      />
                    </div>
                  </div>
                </a>
                <hr />
                <a aria-label="Blog Sidebar" href="/#">
                  <div class="row">
                    <div class="col-lg-10 col-4 pr-1">
                      <p class="rightcolumnDate">January, 2021 </p>
                    </div>
                    <div class="col-lg-2 col-8">
                      <img
                        alt="Blog Sidebar"
                        class="img-fluid"
                        src="./img/arrowDown.png"
                      />
                    </div>
                  </div>
                </a>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaSec1;
