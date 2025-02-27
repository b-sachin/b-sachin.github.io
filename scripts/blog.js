document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        { title: "Introduction to Power BI", link: "blog-posts/powerbi-intro.html" },
        { title: "CI/CD ML Pipeline", link: "blog-posts/cicd-ml.html" },
        { title: "Web Scraping with Python", link: "blog-posts/web-scraping.html" }
    ];

    const blogContainer = document.getElementById("blog-container");

    blogPosts.forEach(post => {
        let postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `<h2><a href="${post.link}">${post.title}</a></h2>`;
        blogContainer.appendChild(postElement);
    });
});
