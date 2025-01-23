<footer>
  <div class="container">
    <div class="footer-grid">
      <a href="/"
        ><img src="/images/footer-logo.svg" alt="Dove Design Logo" /></a
      >
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/faq">FAQs</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <a
        href="https://www.linkedin.com/company/dovedesignweb/"
        target="_blank"
        aria-label="LinkedIn"
        ><img src="/images/linkedin-footer.svg" alt="LinkedIn Logo" /></a
      >
    </div>
    <div class="center-align-grid">
      <p>
        &copy;<span id="currentYear">{new Date().getFullYear()}</span> Dove Design
        Ltd
      </p>
      <a
        href="https://www.iubenda.com/privacy-policy/89796861"
        class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Privacy Policy ">Privacy Policy</a
      ><script type="text/javascript">
        (function (w, d) {
          var loader = function () {
            var s = d.createElement('script'),
              tag = d.getElementsByTagName('script')[0];
            s.src = 'https://cdn.iubenda.com/iubenda.js';
            tag.parentNode.insertBefore(s, tag);
          };
          if (w.addEventListener) {
            w.addEventListener('load', loader, false);
          } else if (w.attachEvent) {
            w.attachEvent('onload', loader);
          } else {
            w.onload = loader;
          }
        })(window, document);
      </script>
      <a
        href="https://www.iubenda.com/privacy-policy/89796861/cookie-policy"
        class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Cookie Policy ">Cookie Policy</a
      ><script type="text/javascript">
        (function (w, d) {
          var loader = function () {
            var s = d.createElement('script'),
              tag = d.getElementsByTagName('script')[0];
            s.src = 'https://cdn.iubenda.com/iubenda.js';
            tag.parentNode.insertBefore(s, tag);
          };
          if (w.addEventListener) {
            w.addEventListener('load', loader, false);
          } else if (w.attachEvent) {
            w.attachEvent('onload', loader);
          } else {
            w.onload = loader;
          }
        })(window, document);
      </script>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--black-blue);
    margin-top: auto;
  }

  .footer-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
  }

  .center-align-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }

  a,
  p {
    text-decoration: none;
    color: var(--white);
    margin: 0 1.5rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  ul a {
    text-decoration: none;
    color: var(--white);
    list-style: none;
  }

  a img {
    height: 24px;
  }

  @media screen and (max-width: 600px) {
    .footer-grid {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .center-align-grid {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    ul {
      display: block;
      text-align: center;
      margin: 1rem 0;
    }

    ul li {
      margin: 1rem 0;
    }
  }
</style>
