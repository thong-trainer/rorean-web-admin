import React from "react";
import {Link} from 'react-router-dom';
// Import React Tab
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "Room 1",
          description: "This is our room."
        }, {
          name: "Room 2",
          description: "This is our room."
        }, {
          name: "Room 3",
          description: "This is our room."
        }, {
          name: "Room 4",
          description: "This is our room."
        }, {
          name: "Room 5",
          description: "This is our room."
        }, {
          name: "Room 6",
          description: "This is our room."
        }
      ]
    };
  }

  render() {
    return (<div className="content-wrapper">
      <section className="content-header">
        <h1> Settings </h1>
        <ol className="breadcrumb">
          <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
          <li className="active">Settings</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">

            <Tabs>
              <TabList>
                <Tab>General</Tab>
                <Tab>Backup</Tab>
                <Tab>Restore</Tab>
              </TabList>

              <TabPanel>
                <p>
                  <b>Luigi</b>
                  (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                </p>

              </TabPanel>
              <TabPanel>
                <p>
                  <b>Luigi</b>
                  (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                </p>

              </TabPanel>
              <TabPanel>
                <p>
                  <b>Princess Peach</b>
                  (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>) is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto, Peach is the princess of the fictional Mushroom Kingdom, which is constantly under attack by Bowser. She often plays the damsel in distress role within the series and is the lead female. She is often portrayed as Mario's love interest and has appeared in Super Princess Peach, where she is the main playable character.
                </p>

              </TabPanel>

            </Tabs>

          </div>
        </div>
      </section>
    </div>);
  }
}
