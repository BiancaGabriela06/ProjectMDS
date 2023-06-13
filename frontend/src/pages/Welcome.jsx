import React from "react";
import "../css/Welcome.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="welcomepage">
      <h1>Welcome, {user} !</h1>
      <div className="introduction">
        <h3>
          Introducing ByteBoost: Your Comprehensive IT Interview Preparation
          Platform
        </h3>

        <div className="text">
          Welcome to ByteBoost, the ultimate online destination for enhancing
          your IT interview skills, gaining industry insights through
          informative articles, and preparing yourself to ace every interview.
          Whether you are a seasoned professional looking to advance your career
          or a fresh graduate stepping into the job market, BoostByte is here to
          equip you with the knowledge and confidence you need to succeed. At
          ByteBoost, we believe that preparation is the key to success in IT
          interviews. With our comprehensive resources, expert guidance, and a
          supportive community, you'll be equipped with the tools needed to
          excel in your interviews and secure your dream job in the IT industry.
        </div>
      </div>
      <div className="questionn">What can you do on ByteBoost?</div>
      <div className="categorypages">
        <div className="interviewsquestions">
          <CustomLink to="/quizList">
            <h4>1. Solve Interview Questions</h4>
            <div className="text">
              With a wide range of questions available, covering popular
              programming languages such as Java, Python, C++, and JavaScript,
              you can choose the specific language or topic you want to focus
              on. Each question is carefully crafted to evaluate your
              understanding of key concepts, problem-solving abilities, and
              coding techniques. Additionally, instant feedback and explanations
              are provided after each question, allowing you to learn from your
              mistakes and deepen your understanding of the subject matter.
            </div>
          </CustomLink>
        </div>

        <div className="tipstricks">
          <CustomLink to="/tipstricks">
            <h4>2. Learn Tips and Tricks</h4>
            <div className="text">
              You can find a wealth of valuable insights and guidance for
              interviews, programming languages, and best practices. Whether you
              are preparing for a technical interview, seeking advice on
              mastering a specific programming language, or looking to enhance
              your overall interviewing skills, our page is a valuable resource
              to help you succeed.
            </div>
          </CustomLink>
        </div>

        <div className="forum">
          <CustomLink to="/forum">
            <h4>3. Ask Questions</h4>
            <div className="text">
              A dedicated space for asking questions and receiving answers from
              our vibrant community of IT enthusiasts. Here, you can freely post
              your queries, seek advice, and engage with fellow users who have
              expertise in various aspects of the IT industry. Whether you're a
              beginner in programming or a seasoned professional, our community
              is here to provide support and share knowledge.
            </div>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Welcome;
