var body = document.getElementById('container');
var $stuff = $(`
  <nav>
    <a href="glassdoor.com"><img src="#" alt="glassdoor-logo"/></a>
    <div class="nav-wrapper-1">
      <ul class="navigation-list">
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Companies</a></li>
        <li><a href="#">Salaries</a></li>
        <li><a href="#">Interviews</a></li>
      </ul>
      <input type="text" class="main-searchbar" placeholder="Search Jobs or Companies"/>
    </div>
    <div class="nav-wrapper-2">
    <ul class="user-options">
      <li><a href="#">Alert</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">+</a></li>
    </ul>
    <a href="#">Employers</a>
    <a href="#">Try Free Job Postings</a>
    </div>
  </nav>

  <header>
    <div class="header-wrapper-1">
      <div class="header-image">
        <a href="#" class="all-photos-btn">See All Photos</a>
        <h2>I work where my ideas are brought to life</h2>
      </div>
      <img src="https://media.glassdoor.com/sqll/354/ibm-squarelogo-1468349448058.png" class="company-logo-img" alt="company logo"/>
      <h3>IBM</h3>
    </div>
    <div class="header-wrapper-2">
      <div class="company-tabs">
        <ul class="tab-list">
          <a href="#"><li>Overview</li></a>
          <a href="#"><li>Reviews</li></a>
          <a href="#"><li>Salaries</li></a>
          <a href="#"><li>Interviews</li></a>
          <a href="#"><li>Benefits</li></a>
          <a href="#"><li>Jobs</li></a>
          <a href="#"><li>More</li></a>
        </ul>
      </div>
      <input type="button" class="follow-company-btn" value="Follow"/>
      <input type="button" class="add-interview-btn" value="Add an Interview"/>
    </div>
  </header>

  <section class="overview-start-section">
    <h4>IBM Overview</h4>
    <ul class="company-overview-info-1">
      <li><em>Website</em>ibm.com</li>
      <li><em>Size</em>10000+ employees</li>
      <li><em>Type</em>Company - Public (IBM)</li>
      <li><em>Revenue</em>$10+ billion (USD) per year</li>
    </ul>
    <ul class="company-overview-info-2">
      <li><em>Headquarters</em>Armonk, NY</li>
      <li><em>Founded</em>1911</li>
      <li><em>Industry</em>Business Services</li>
    </ul>
    <p class="overview-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="overview-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="overview-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
`);

$(body).append($stuff);
