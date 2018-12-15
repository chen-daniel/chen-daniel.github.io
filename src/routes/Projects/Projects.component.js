import React from 'react';
import $ from 'jquery';

import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = $('#wrapper');
      wrapper.removeClass('is-loading');
      const body = $('body');
      body.removeClass('modal-active');
      setTimeout(() => {
        const key = window.location.hash.split('#')[2];
        if (key) {
          $('#main').animate(
            {
              scrollTop:
                $('#main')[0].scrollTop + $('#' + key).position().top - 20
            },
            500
          );
        }
      }, 150);
    }, 50);
  }

  componentDidUpdate() {
    const key = window.location.hash.split('#')[2];
    if (key) {
      $('#main').animate(
        {
          scrollTop: $('#main')[0].scrollTop + $('#' + key).position().top - 20
        },
        500
      );
    } else {
      $('#main').animate({ scrollTop: 0 }, 500);
    }
  }

  render() {
    return (
      <section className="project-page" id="main">
        <h1 id="personal">
          <b>Personal Projects</b>
        </h1>
        <h4 id="basic_user_app"><a href="https://github.com/chen-daniel/basic-node-auth-app">Basic User App</a></h4>
        <p>
          A very barebones user authentication application built in Node.js 
          with Express and React on the front-end for the purposes of being 
          easily extensible. Includes signup, login, and session management flows.
        </p>
        <h4 id="personal_site"><a href="https://github.com/chen-daniel/chen-daniel.github.io/tree/dev-branch">Personal Site</a></h4>
        <p>
          This site! Built in React, utilizing some HTML and CSS templates from 
          HTML5Up, exported to and hosted by Github Pages.
        </p>
        <h4 id="home_automation"><a href="https://github.com/chen-daniel/home_automation">Home Automation</a></h4>
        <p>
          Some basic home automation built with an ESP8266 microcontroller. 
          The microcontroller hosts a web server with webhooks which trigger RF 
          signals to be sent to various appliances around my apartment. Webhooks 
          are triggered by Google Home/Assistant commands.
        </p>
        <h1 id="hackathon">
          <b>Hackathon Projects</b>
        </h1>
        <h4 id="divvi"><a href="https://github.com/chen-daniel/divvi">divvi</a></h4>
        <p class="hackathon clearfix">
          <div class="hackathon-div">
            BostonHacks 2018
          </div>
          <div class="hackathon-opener">
            Hackathon:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
            <a href="https://github.com/Shinabel"> Abel Shin </a>|
            <a href="https://parke.myportfolio.com/"> Emily Park </a> |
            <a href="https://abbyko.github.io/"> Abby Ko </a> |
            <a href="https://www.linkedin.com/in/duk-hwan-kim/"> Duk Hwan Kim </a> |
            <a href="https://www.linkedin.com/in/mo-alice/"> Alice Mo </a> |
            <a href="https://www.linkedin.com/in/tiffanytiho/"> Tiffany Ho </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <img
          class="project-img"
          src="/assets/images/Projects/divvi.gif"
          alt=""
        />
        <p>
          Venmo, Square Cash, Circle Pay, Zelle, etc, have all done a great job 
          improving the process of transferring money between people. However, 
          splitting a bill for broke college students still has a headache of 
          someone needing to pull out a calculator and tapping in numbers to 
          find what everyone owes.
          <br />
          Enter Divvi, a peer to peer payments application that provides a 
          seamless process for splitting a bill between groups based on 
          intelligent processing of a photo of the receipt.
        </p>
        <h4 id="lingo">linGO</h4>
        <p class="hackathon clearfix">
          <div class="hackathon-div">
            HackHarvard 2018
          </div>
          <div class="hackathon-opener">
            Hackathon:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
          <a href="https://github.com/Shinabel"> Abel Shin </a>|
          <a href="https://www.linkedin.com/in/brandonyip/"> Brandon Yip </a>|
          <a href="https://abbyko.github.io/"> Abby Ko </a>|
          <a href="https://github.com/kiminlee2000225"> Kimin Lee </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <img
          class="project-img"
          src="/assets/images/Projects/lingo.gif"
          alt=""
        />
        <p>
          Services like Google Translate help us a lot in our basic translation 
          needs, such as understanding the latest multilingual meme, or some 
          KPop song lyrics. But we have yet to develop technology sophisticated 
          enough to truly replace a human translator. 
          <br />
          LinGO is an on-demand translator service, connecting live translators 
          with people who require translations in a high stakes environments 
          (i.e doctor's appointment).
        </p>
        <h4 id="cappy"><a href="https://github.com/Shinabel/Cap.py">Cap.py</a></h4>
        <p class="hackathon clearfix">
          <div class="hackathon-div">
            HackBeanpot 2018
          </div>
          <div class="hackathon-opener">
            Hackathon:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
            <a href="https://ctlnwng.github.io/"> Caitlin Wang </a>|
            <a href="https://github.com/Shinabel"> Abel Shin </a>|
            <a href="https://www.linkedin.com/in/elizabeth-c/"> Elizabeth Cho </a>|
            <a href="https://www.linkedin.com/in/brandonyip/"> Brandon Yip </a>|
            <a href="https://abbyko.github.io/"> Abby Ko </a>|
            <a href="https://www.linkedin.com/in/mo-alice/"> Alice Mo </a>|
            <a href="https://www.linkedin.com/in/ericjichung/"> Eric Chung </a>|
            <a href="https://www.linkedin.com/in/jeffrey-chan-a80372109/">
              {' '}
              Jeffrey Chan{' '}
            </a>|
            <a href="https://www.linkedin.com/in/austin-kim-741b96149/">
              {' '}
              Austin Kim{' '}
            </a>|
            <a href="https://www.linkedin.com/in/duk-hwan-kim/"> Duk Hwan Kim </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <img
          class="project-img"
          src="/assets/images/Projects/cappy.gif"
          alt=""
        />
        <p>
          Ever had a great photo that you struggled to post to Instagram because 
          you couldn't think of a caption? No longer. With Cap.py, simply upload 
          your photo, wait a few second, and bam, a selection of perfectly 
          relevant captions for your use.
        </p>
        <h4 id="argot"><a href="https://github.com/wenhuiyang/ARgot">ARgot</a></h4>
        <p class="hackathon clearfix">
          <div class="hackathon-div">
            WHACK 2017
          </div>
          <div class="hackathon-opener">
            Hackathon:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
          <a href="https://www.linkedin.com/in/aliyatoday/">
            {' '}
            Aliyah Tyshkanbayeva{' '}
          </a>|
          <a href="https://www.linkedin.com/in/victoriayang3/">
            {' '}
            Victoria Yang{' '}
          </a>|
          <a href="https://www.linkedin.com/in/mtamvu/"> Minh Tâm Vũ </a>|
          <a href="https://abbyko.github.io/"> Abby Ko </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <p>
          A VR iOS application that makes the process of learning a new language 
          interactive. Want to know how to refer to something in another 
          language? Simply point your iPhone at the object and you'll be 
          provided with pronunciations (with sound), phrases, and examples.
        </p>
        <h4 id="dangerzone"><a href="https://github.com/dchen7321/DangerZone">DangerZone</a></h4>
        <p class="hackathon clearfix">
          <div class="hackathon-div">
            BostonHacks 2017
          </div>
          <div class="hackathon-opener">
            Hackathon:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
          <a href="https://github.com/Shinabel"> Abel Shin </a>|
          <a href="https://www.linkedin.com/in/timothy-wong-7222107b/">
            {' '}
            Tim Wong{' '}
          </a>|
          <a href="https://abbyko.github.io/"> Abby Ko </a>|
          <a href="https://www.linkedin.com/in/ericjichung/"> Eric Chung </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <p>
          A one stop solution to getting various safety statistics, and a relative 
          safety score for any position or zone in the Greater Boston Area. 
        </p>
        <h4 id="iceboxme"><a href="https://github.com/partyrico/icebox">Icebox.me</a></h4>
        <p class="hackathon clearfix">
          <div class="hackathon-div">
            HackUMass 2016
          </div>
          <div class="hackathon-opener">
            Hackathon:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
          <a href="https://ellenlowing.github.io/"> Ellen Lo </a>|
          <a href="https://www.linkedin.com/in/cj-moynihan-366ab9b0/">
            {' '}
            CJ Moynihan{' '}
          </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <p>
          We've all run into the issue of random groceries sitting around our 
          kitchen with no idea what to do with them. With Icebox, you simply give 
          it a list of what groceries you have, and you're provided with a list of 
          recipes that can be made from those groceries.
        </p>
        <h1 id="school">
          <b>School Projects</b>
        </h1>
        <h4 id="mcu_visualization"><a href="https://github.com/chen-daniel/MCU_Visualization">MCU Visualization</a></h4>
        <p class="school clearfix">
          <div class="school-div">
            CS3200 - Database Design
          </div>
          <div class="school-opener">
            Class:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
          <a href="https://github.com/Shinabel"> Abel Shin </a>|
          <a href="https://www.linkedin.com/in/mtamvu/"> Minh Tâm Vũ </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <img class="project-img" src="/assets/images/Projects/mcu.gif" alt="" />
        <p>
          A visualization of the characters, events, organizations, and movies 
          in the Marvel Cinematic Universe with support for viewing every data 
          point and performing all 4 CRUD operations on the database. Built for 
          our CS3200 Database Design final project. 
        </p>
        <h4 id="spoiled_tomatillos"><a href="https://github.com/Shinabel/spoiled_tomatillos">Spoiled Tomatillos</a></h4>
        <p class="school clearfix">
          <div class="school-div">
            CS4500 - Software Development
          </div>
          <div class="school-opener">
            Class:
          </div>
        </p>
        <p class="team-members clearfix">
          <div class="team-div">
          <a href="https://github.com/Shinabel"> Abel Shin </a>|
          <a href="https://jayylok.com/"> Jay Lok </a>|
          <a href="https://www.linkedin.com/in/matthew-morgan-8612a5121/">
            {' '}
            Matthew Morgan{' '}
          </a>|
          <a href="https://www.linkedin.com/in/veronica-shei/">
            {' '}
            Veronica Shei{' '}
          </a>
          </div>
          <div class="team-opener">
            Team:
          </div>
        </p>
        <p>
          A social movie recommendation platform that allows users to connect 
          with friends, rate and review movies, and generates recommendations 
          based on your activity. Built for our CS4500 Software Development 
          semester-long project utilizing standard agile workflows and project 
          management technologies such as Jenkins CI, Jira, Slack, and scrum.
        </p>
        <h4 id="web_dev_projects">Web Dev Projects</h4>
        <p class="school clearfix">
          <div class="school-div">
            CS4550 - Web Development
          </div>
          <div class="school-opener">
            Class:
          </div>
        </p>
        <p>
          Several projects and assignments hosted on a Virtual Private Server 
          setup by ourselves. Throughout the semester for CS4550 Web Development, 
          we were required to build and deploy each assignment and project to 
          this site. Projects included an online server-validated chess game that 
          could host an unlimited number of rooms and spectators, a Github style 
          task tracker and a version converted to a single-page application, and 
          a SPA recommendation engine for various categories.
        </p>
      </section>
    );
  }
}

export default Projects;
