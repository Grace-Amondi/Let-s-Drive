import React from "react";
import {
  Container,
  Menu,
  Header,
  Icon,
  Image,
  Segment,
  Grid,
  List,
  Card,
  Rating,
  Popup
} from "semantic-ui-react";
import "./App.css";

const ImageGroup = (
  <Grid columns={3} relaxed>
    <Grid.Column>
      <Segment basic>
        <Card
          image="http://wallvie.com/wp-content/uploads/2017/02/download-full-hd-wallpaper-car-girl-backgrounds-high-resolution-collection-of-girls-and-cars-on-desktop-.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment basic>
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_Li_gYhH6ZepB985kZSl47-kRSqD1pxyWGrNPgUEujSebb32fw"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment basic>
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYga_B2FKeeWZU5hcflmXRQ785EaQ6ghnAHXN8JK6jxd2y3lP8A"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
      </Segment>
    </Grid.Column>
  </Grid>
);
const PopupExampleHtml = () => (
  <Popup trigger={ImageGroup}>
    <Popup.Header>User Rating</Popup.Header>
    <Popup.Content>
      <Rating icon="star" defaultRating={3} maxRating={4} />
    </Popup.Content>
  </Popup>
);

const ImageExampleFloated = () => (
  <Segment>
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGml4EMVb-ERb-tgphoW48G2gA87MnAVwaywPbXbKDzZs7sfJrw"
      size="small"
      floated="left"
    />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
      referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
    <Image
      src="http://2.bp.blogspot.com/-WK9YdlC6DFE/T_BgNWvwCBI/AAAAAAAAAXs/iJ5Dp-_ddEk/s1600/%252823%2529.jpg"
      size="small"
      floated="right"
    />
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
      definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
      phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
      phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
      facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
      porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
      everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
      per, quas minimum postulant per id.
    </p>
  </Segment>
);

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="car" circular />
      <Header size="huge">Let's Drive</Header>
    </Header>
    <Image
      centered
      size="large"
      src="https://react.semantic-ui.com/assets/images/wireframe/centered-paragraph.png"
    />
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "home"
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing stackable size="massive" sticky="top" color={"blue"}>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="sign up"
              active={activeItem === "sign up"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <HeaderExampleUsersIcon />
        <Container>
          <ImageExampleFloated />
          <PopupExampleHtml />
          </Container>

          <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="About" />
                    <List link inverted>
                      <List.Item as="a">Sitemap</List.Item>
                      <List.Item as="a">Contact Us</List.Item>
                      <List.Item as="a">Religious Ceremonies</List.Item>
                      <List.Item as="a">Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Services" />
                    <List link inverted>
                      <List.Item as="a">Banana Pre-Order</List.Item>
                      <List.Item as="a">DNA FAQ</List.Item>
                      <List.Item as="a">How To Access</List.Item>
                      <List.Item as="a">Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4" inverted>
                      Footer Header
                    </Header>
                    <p>
                      Extra space for a call to action inside the footer that
                      could help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
      </div>
    );
  }
}

export default App;
