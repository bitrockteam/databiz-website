
import RadicalbitLogo from './../src/assets/logos/RadicalbitLogo.svg';
import BitrockLogo from './../src/assets/logos/BitrockLogo.svg';
import philosophyCover from './../src/assets/img/img-philosophy.jpg';

import confluentLogo from './../src/assets/partners/logo-confluent.png';
import lightbendLogo from './../src/assets/partners/logo-lightbend.png';
import webtrekkLogo from './../src/assets/partners/logo-webtrekk.png';
import mesosphereLogo from './../src/assets/partners/logo-mesosphere.png';
import clouderaLogo from './../src/assets/partners/logo-cloudera.png';
import datastaxLogo from './../src/assets/partners/logo-datastax.png';

export default {
  "navigation": [
    { "label": "About", "link": "#about" },
    { "label": "Group", "link": "#group" },
    { "label": "Philosophy", "link": "#philosophy" },
    { "label": "Partners", "link": "#partners" },
    { "label": "Contact", "link": "#contact" }
  ],
  "hero": {
    "titles": {
      "main": "to face the future",
      "secondary": "we have evolved"
    },
    "cta": {
      "label": "Discover",
      "link": "#about"
    }
  },
  "about": {
    "title": "we are a group",
    "post": {
      "title": "From Databiz to Databiz Group",
      "content": "Born as an innovative system integrator in 2009, Databiz evolves in 2018 and transforms into a holding company (Databiz Group), in order to scale fast, facing  the evolving market scenario and  aggregate innovative competences and methodologies addressing the Digital Transformation challenges. The new corporate group includes Bitrock, a consulting and system integration company, and Radicalbit, a software firm focused on the design and development of Fast Data and Agile Data Preparation products and solutions."
    },
    "timeline": [
      { "year": "2009", "content": "“Databiz | Your solution builder” is founded based on a headquarter in Treviso and operational office in Milan" },
      { "year": "2011", "content": "First product, AGO, for a structured and effective management of repetitional risk" },
      { "year": "2013", "content": "Databiz signs a partnership with Typesafe, now Lightbend, and starts an internal UX unit" },
      { "year": "2015", "content": "Databiz founds Radicalbit and starts sponsoring international Scala events. Databiz becomes Lightbend Premier Partner, the first company in Europe" },
      { "year": "2016", "content": "Databiz becomes Lightbend Platinum trainer and starts a professional academy" },
      { "year": "2017", "content": "Databiz founds Bitrock and signs a partnership with Confluent" },
      { "year": "2018", "content": "Databiz becomes a holding (Databiz Group)" }
    ]
  },
  "group": {
    "title": "our identity",
    "posts": [
      {
        "title": "Reliable innovation",
        "company": "Bitrock",
        "logo": BitrockLogo,
        "content": "Bitrock is a consulting and system integration company committed to offer avant-garde and innovative solutions in the field of Microservices, Reactive Platform and DevOps, with the objective to accompany and support companies along the digital transformation path. Innovation and research are the core of Bitrock. The company aims to provide reliable innovation through a completely different paradigm of projectuality, in order to understand the real needs of the clients and anticipate trends and evolutions.",
        "cta": {
          "label": "discover",
          "link": "https://bitrock.it"
        }
      },{
        "title": "Deep, Different, Disruptive.",
        "company": "Radicalbit",
        "logo": RadicalbitLogo,
        "content": "Bitrock is a consulting and system integration company committed to offer avant-garde and innovative solutions in the field of Microservices, Reactive Platform and DevOps, with the objective to accompany and support companies along the digital transformation path. Innovation and research are the core of Bitrock. The company aims to provide reliable innovation through a completely different paradigm of projectuality, in order to understand the real needs of the clients and anticipate trends and evolutions.",
        "cta": {
          "label": "discover",
          "link": "https://bitrock.it"
        }
      }
    ]
  },
  "philosophy": {
    "title": "we have a mission",
    "cover": philosophyCover,
    "post": {
      "title": "Innovation delivered",
      "content": "Databiz Group has the ambition to create a holding specialized in sustainable and reliable innovation. We aim to face the market with valuable business enabling solutions.This means working together with our customers, side by side in order to better understand their needs in depth, to propose solutions that allow the implementation of cutting-edge technological solutions, not futuristic, but which led to immediate and tangible results.Our group grows through the sum of skills, building year after year, month after month a working place where talents can find space to express their own capabilities, where personal initiative is encouraged and valued, and professional growth is ensured and boosted."
    }
  },
  "partners": {
    "title": "our partners",
    "items": [
      {
        "name": "Confluent",
        "logo": confluentLogo,
        "description": "Confluent, founded by the creators of open source Apache Kafka®, provides the streaming platform that enables enterprises to maximize the value of data."
      }, {
        "name": "Lightbend",
        "logo": lightbendLogo,
        "description": "Lightbend provides the leading Reactive application development platform for building distributed systems."
      }, {
        "name": "Webtrekk",
        "logo": webtrekkLogo,
        "description": "Webtrekk is a customer analytics platform that allows you to connect, analyze and activate your user and marketing data across all devices."
      }, {
        "name": "Mesosphere",
        "logo": mesosphereLogo,
        "description": "Mesosphere is dedicated to helping enterprises unlock the next generation of datacenter scale, efficiency and automation with Apache Mesos."
      }, {
        "name": "Cloudera",
        "logo": clouderaLogo,
        "description": "Cloudera delivers the modern platform for machine learning and analytics optimized for the cloud. Imagine having access to all your data in one platform."
      }, {
        "name": "Datastax",
        "logo": datastaxLogo,
        "description": "DataStax powers the Right-Now Enterprise with the always-on, distributed cloud database built on Apache Cassandra™ and designed for hybrid cloud."
      }
    ]
  }
}