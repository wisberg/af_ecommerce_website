import React from "react";
import PageHeroTemp from "../Components/PageHeroTemplate/PageHeroTemp";
import joeLouis from "../Components/Assets/Backgrounds/joeLouis2.jpeg";

const Videos = () => {
  return (
    <div className="videos">
      <PageHeroTemp image={joeLouis} title="Videos" />
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@antiquefists"
        data-unique-id="antiquefists"
        data-embed-type="creator"
        style={{ maxWidth: "780px", minWidth: "288px" }}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            href="https://www.tiktok.com/@antiquefists?refer=creator_embed"
          >
            @antiquefists
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};

export default Videos;
