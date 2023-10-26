import React from "react";

const Videos = () => {
  return (
    <div className="videos">
      <blockquote
        class="tiktok-embed"
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
