import React from 'react';

import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 50);
  }

  render() {
    return (
      <section className="project-page" id="main">
        <h1 id="personal">
          <b>Personal</b>
        </h1>
        <h4 id="personal-site">Personal Site</h4>
        <p>
          This site actually turned out to be a much bigger undertaking than I
          initially thought it would be.
          <br />
          In the beginning, I started out with a basic HTML, CSS, and JavaScript
          template from HTML5 Up (Identity). This gave me an extremely solid
          starting point both aesthetically and functionally as a common vertex
          between my other profiles and was easy to deploy on Github Pages.
          However, the template I started out with didn't provide me with all
          the behavior I wanted the site to possess. So I found a couple more
          templates from HTML5 Up (Escape Velocity, Phantom, and Multiverse).
          Escape Velocity gave me a nice navbar to build off of using the jQuery
          dropotron library, Phantom gave me a nice grid layout for my
          photography, and Multiverse provided me a nice starting point to use
          the jQuery poptrox library.
          <br />
          From here I realized that building this website using only HTML, CSS,
          and JavaScript was a terrible idea. I wanted the smooth seamless
          experience of a single page application. With some research I found
          that React has a gh-pages plugin that automatically build and deploys
          React applications for Github Pages. With some fiddling around I was
          able to get this working on my chen-daniel.github.io repository master
          branch (the plugin defaults to deploy on a gh-pages branch).
          <br />
          Now I began migrating what I'd already built from my previous files
          into my new React project. There was a certain amount of loopholes I
          had to find. For example, the React HashRouter helped me get around
          some routing issues that Github Pages would introduce. The responsive
          designs of the templates also had to be reworked, I had to properly
          learn how to use CSS to format the page how I wanted for every size. I
          also wanted to maintain my CSS transitions between pages, so I had to
          make some modifications on my Links. Though the setup process for
          moving my site into React was somewhat tedious, it paid off as making
          changes to my app began to move much quicker. Changes propagated
          across similar elements and making everything modular became a smooth
          process.
          <br />
          Overall, this project gave me a lot more confidence in my front end
          development. I was able to learn a lot more of the tips and tricks
          around CSS, and gain a lot of practice in React.
        </p>
        <h4 id="home-automation">Home Automation</h4>
        <p>
          The backstory of this project involves the apartment I moved into in
          the fall of 2017. This apartment was great, but for some reason lacked
          any ceiling lights in any of the rooms beyond the kitchen. So during
          out furnishing shopping spree to IKEA, we had to purchase several
          floor lamps to light every room. Our final setup had 3 several lamps
          around our living room, and 2 lamps in each bedroom on opposite
          corners. This introduced quite a large inefficiency in our lives with
          having to walk around the room each time we needed to turn on our shut
          off lights.
          <br />
          This quickly got pretty tiring, and I started to do research on how we
          could improve this. There were several reasons why I didn't opt for
          the immediately obvious choice of existing home automating solutions,
          but most importantly I was just very interested in how these solutions
          worked and what technologies they were built on.
          <br />
          My research began with what wireless options were available. Between
          Wifi, Bluetooth, and RF, I decided to go for the RF option as RF
          controlled outlets were more easily accessible and controllable than
          bluetooth and Wifi solutions. The 433 MHz frequency seemed to be the
          best option for its range and strength through walls. I purchased a
          set of Etekcity RF outlets with this information that came with their
          own remote. This worked out great as I put a remote in each room where
          light switches normally would be, and they controlled the outlets in
          each room. This was a great starting point.
          <br />I was of course not satisfied with just this much. I decided to
          move further and make these outlets voice controlled. Firstly I had to
          move control of these outlets off of the remotes. I used an ESP8266
          microcontroller wired to a 433MHz receiver to first read the signals
          being sent from our remote to our outlets, copy them, and then send
          the same signals from our 433Mhz transmitter. With this set up, I used
          the built in web server properties of the ESP8266 to create an API on
          our home network. From here, I used Google Home to read my voice, the
          result is piped through to the IFTTT app, which then makes a web
          request to our server to switch on and off the lights. I ran into a
          problem here where the IFTTT app required our API to be open to the
          Internet. It was easily resolved by port forwarding with our router.
          Fingers crossed no security concerns come up!
        </p>
        <h1 id="hackathon">
          <b>Hackathon</b>
        </h1>
        <h4 id="cappy">Cap.py</h4>
        <p>
          This project was built over a weekend during HackBeanpot 2018 where it
          won the Most Entrepreneurial Hack prize from Rough Draft Ventures and
          the Best Everyday Hack prize from PowerAdvocate. The goal of this
          project was to build a web application that was able to generate
          caption suggestions given a photo. Our team for this hackathon
          included Abel Shin, Caitlin Wang, Elizabeth Cho, Brandon Yip, Abby Ko,
          Alice Mo, Eric Chung, Duk Hwan Kim, Austin Kim, and Alice Mo.
          <br />
          My team for this hackathon was several friends who we'd successfully
          convinced to sign up. I've been a pretty strong advocate for
          hackathons since I've been able to both learn and apply so much new
          knowledge through them. For several of these people, this was their
          first hackathon and may have also been their first time coding outside
          of a classroom so with this team, I adopted a leadership role, making
          sure that my priority was in making sure everyone had something to
          work on, and knew where we were moving on the project.
          <br />
          Our final product came out looking very good. Our front end designer
          did an amazing job and our back-end was solid and with more time
          could've had all loose ends tied up. We built the app using the Flask
          framework, this was new to most of our team so they all had a chance
          to learn both Flask and Python. The flow of our app started with a
          home page with an upload button. Upon uploading a photo, we feed the
          photo to Google's vision API which generates several tags. We first
          take the most prominent tag and generate a GIF using the Giphy API.
          The user is then forwarded to a loading screen with the GIF. The GIF
          loading screen enhances the user-experience over just sitting and
          waiting on the upload screen. While the user is enjoying the loading
          screen and GIF, our back-end goes to work. It scrapes certain webpages
          dynamically based on the tags generated. It then compiles a list of
          suggestions and returns the results back to the user on completion. It
          also presents the tags as hashtag suggestions for the social media
          posts.
          <br />
          Given more time, we definitely would've wanted to improve the flow by
          improving efficiency and maybe add caching to improve the search
          times. We also would've wanted to add more pages and options to
          generate captions from.
          <br />
          Personally, I can see that I have a lot of room for improvement as a
          leader. Though I think everyone was able to contribute or learn
          throughout the entire process, I struggled to communicate some ideas
          as well as I could have which made it harder for others to implement
          it or unsure of what they were doing. I'm definitely extremely proud
          of everyone on the team that came together to create this project and
          the outcome!
        </p>
        <h4 id="argot">ARgot</h4>
        <p>
          This project was built over a weekend during WHACK 2017 where it won
          the Most Entrepreneurial Hack prize from Rough Draft Ventures. For
          this project, our goal was an augmented reality iOS app that could
          assist in language learning by providing a nice interface where
          recognized items are translated into a foreign language, then natural
          phrases in the chosen language would be generated as well along with
          recordings of the phrase being spoken in the chosen language. Our team
          for this hackathon included Aliyah Tyshkanbayeva, Victoria Yang, Minh
          Tâm Vũ, and Abby Ko.
          <br />
          For this project, I worked on the back-end of our app with Victoria.
          Our back-end was a web-api built in Flask that scraped and compiled
          translations from multiple dictionaries, then generated a common JSON
          response. It then also used Google Translate's text-to-speech engine
          to generate recordings for each of the translations. Deploying this to
          AWS was also a new challenge for us. With very little knowledge of
          servers and Linux debugging at this point, we had to do a lot of
          research together to eventually figure it out.
        </p>
        <h4 id="dangerzone">DangerZone</h4>
        <p>
          This project was built over a weekend during BostonHacks 2017. This
          project was geared towards residents in the Greater Boston area. It
          provided various safety statistics given a specific location in the
          city. During this hackathon, I worked with Abel Shin, Tim Wong, Abby
          Ko, and Eric Chung.
          <br />
          For this project, after initial ideation, I mainly worked on the
          front-end of our app. This was mostly pure HTML, CSS, and Javascript
          work. After that was setup, I worked on deploying the app with Heroku
          and ran into several issues. We originally built the app with MongoDB,
          however Heroku wanted us to use a different database. We were unable
          to deploy in time for presentation though we finally got it to work
          later after the hackathon.
          <br />
          Additional functionality we wanted to add was to use the Twilio API
          that would allow a user to text a number which would then inform us of
          the users location and provide them with the statistics at that
          position.
        </p>
        <h4 id="iceboxme">Icebox.me</h4>
        <p>
          This project was built over a weekend during HackUMass 2016. The
          concept of this project was a reverse recipe site which would generate
          recipes based on available ingredients. This was the first hackathon I
          ever attended so I went in with very little knowledge aside from basic
          command line Java apps. During this hackathon, I worked with Ellen Lo
          and CJ Moynihan.
          <br />
          For this project I worked with CJ on our back-end. We started off by
          writing a python script to recursively scrape a recipe site into our
          own sqlite database. This also separated recipe instructions from
          ingredient requirements. We then used the Bottle framework to build
          our web application. Based on user inputted ingredients, the app finds
          a list of recipes that can be made with the given ingredients. We ran
          into some issues where ingredients were listed differently on
          different recipes so we had to normalize the amount.
          <br />
          With most of this setup, I started to work with the Clarifai Image
          Recognition API. The goal of this section was to build a recipe reader
          that would add ingredients into the users ingredients. I used a python
          library that could split an image of a recipe into individual images
          of characters on the page. After successfully snipping several
          samples, I fed them into the Clarifai API to develop a model to read
          the text. It eventually reached about 80% accuracy. Though we didn't
          get to finish this functionality, it was extremely interesting to work
          on.
        </p>
        <h1 id="school">
          <b>School</b>
        </h1>
        <h4 id="mcu-visualization">MCU Visualization</h4>
        <p>
          This project was for my CS3200 Database Design class. For this project
          I worked with Abel Shin and Minh Tâm Vũ. The assignment was to
          demonstrate all 4 database transactions in an application of our
          choice on a data domain of our choice. We decided to make a
          visualization of the Marvel Cinematic Universe as we thought it would
          create some interesting models and also contain a lot of interesting
          information.
          <br />
          We used the D3.js library for our data visualization which allowed us
          to make really visually interesting models. Our back-end was built in
          Flask and a MySQL database. A lot of the info in our database was
          manually populated. In order to fulfill the requirement of using the
          different database transactions, we also added an admin section. As an
          admin, you are allowed to view all of the data and tables in a grid,
          and also add or remove data points. After implementing this, it also
          got much easier to add new data for new movies that came out.
          <br />
          This project gave me a lot of practice in building web applications
          across the stack after getting to study it more in depth in Web
          Development class. It also gave me a lot of practice with setting up a
          good data schema. Our web application was also dynamic, not loading
          all data at once which would take a long time, but loading it in
          chunks as necessary with AJAX. Implementing that with our timeline was
          very fun.
        </p>
        <h4 id="spoiled-tomatillos">Spoiled Tomatillos</h4>
        <p>
          This was a semester-long project for my CS4500 Software Development
          class. For this project, I worked with Abel Shin, Jay Lok, Matthew
          Morgan, and Veronica Shei. We were tasked with creating a web
          application called Spoiled Tomatillos for our clients (the professor).
          The app was essentially a social movie review website (It took us
          embarrassingly long to realize that the title of the project was a
          play on Rotten Tomatoes).
          <br />
          During this project, we followed proper software development practice.
          We setup a Jenkins pipeline to build and deploy our project for
          continuous integration, tracked our tasks in sprints with Jira,
          communicated with each other and had standup on Slack, and had
          biweekly sprint reviews.
          <br />
          Our app was very successful and through the development I was given
          exposure to proper development standards and practices. I worked
          across the stack for most of the projects, doing several reworks of
          our design on the front-end, movie recommendations and friend
          functionality on the back-end, and building efficient and optimized
          queries for movie recommendations in our database. My teammates were
          also awesome to work with and I was able to learn a lot from each of
          them in different areas.
        </p>
        <h4 id="web-dev-projects">Web Dev Projects</h4>
        <p>
          Over the course of the semester in my CS4550 Web Development class. We
          constantly built projects on our own Linux server. All of our projects
          were built using the Phoenix framework and Elixir on the back-end, and
          React and Bootstrap on the front-end. Throughout these projects we
          constantly added new web development technologies such a websockets,
          ajax, redux, security practices and single page application
          functionality.
          <br />
          Examples of some of these projects included a Memory game, first built
          completely on the front end, then modified to have the logic verified
          on the back-end. We then built a multiplayer chess game that allowed
          for an unlimited amount of rooms. And each room could have 2 players
          and an unlimited amount of spectators. We also built a task tracker
          with users similar to Github, with the ability to track issues and
          assign tasks. We then converted that app into a single page
          application. Finally we built a web application that acted as a review
          site for anything. These reviews could be categorized and also
          referenced reviews from other sites depending on the category (i.e
          food, movies, services, etc.).
          <br />
          This class really helped me to fully understand so many of the
          technologies and concepts that I'd been employing for so long at
          hackathons. I got a much greater appreciation for web development and
          the direction that this field is heading in from these projects.
        </p>
      </section>
    );
  }
}

export default Projects;
