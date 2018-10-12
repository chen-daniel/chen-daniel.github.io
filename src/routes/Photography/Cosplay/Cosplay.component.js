import React from 'react';

import './Cosplay.css';

class Cosplay extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 10);
  }

  render() {
    return (
      <section className="tiles" id="main">
        <article className="style1">
          <span className="image">
            <img src="/assets/images/pic02.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Magna</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style2">
          <span className="image">
            <img src="/assets/images/pic03.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Lorem</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style3">
          <span className="image">
            <img src="/assets/images/pic04.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Feugiat</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style4">
          <span className="image">
            <img src="/assets/images/pic05.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Tempus</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style5">
          <span className="image">
            <img src="/assets/images/pic06.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Aliquam</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style6">
          <span className="image">
            <img src="/assets/images/pic07.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Veroeros</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style2">
          <span className="image">
            <img src="/assets/images/pic01.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Ipsum</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style3">
          <span className="image">
            <img src="/assets/images/pic08.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Dolor</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style1">
          <span className="image">
            <img src="/assets/images/pic09.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Nullam</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style5">
          <span className="image">
            <img src="/assets/images/pic10.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Ultricies</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style6">
          <span className="image">
            <img src="/assets/images/pic11.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Dictum</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
        <article className="style4">
          <span className="image">
            <img src="/assets/images/pic12.jpg" alt="" />
          </span>
          <a href="generic.html">
            <h2>Pretium</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </a>
        </article>
      </section>
    );
  }
}

export default Cosplay;
