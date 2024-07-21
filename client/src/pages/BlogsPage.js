import React from 'react';
import '../styles/BlogsPage.css'; // Ensure you have this CSS file
import image from '../assets/images/image.png'; // Update the path as needed

const BlogsPage = () => {
  return (
    <div>
      <div className="froker-blog">
          <span className="froker-blog-span1">FROKER </span><span className="froker-blog-span2">BLOG</span>
      </div>
      <div className="sub">
        Articles covering the most recent <br />
        updates and advancements
      </div>
      <div className="newsletter-container">
        <div className="newsletter">
          <div className="letterimg">
            <img 
              src={image}
              className="pic" 
              alt="newsletter"
            />
          </div>
          <div className="lettersecond">
            <div className="subscribetonews">
              Subscribe to our newsletter to get the latest updates and news
            </div>
            <div className="form-container">
              <form>
                <div className="subscribebutton">
                  <div className="mail">
                    <input 
                      type="email" 
                      id="email" 
                      name="Email_ID" 
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                  <button type="submit" className="subscribe">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
