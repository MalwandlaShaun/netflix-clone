import React, { useState, useEffect, useContext } from 'react';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import RowPost from '../functionality/RowPost/RowPost';
import Banner from '../functionality/Banner/Banner';
import {
  actions,
  comedy,
  horror,
  originals,
  romance,
  topRated,
  trending,
  documentary,
} from '../functionality/constants/urls';

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Header.TextLink>Series</Header.TextLink>
          <Header.TextLink>Films</Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search />
          <Header.Profile>
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>
                  Sign out
                </Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>

      <Banner />
      <RowPost title="Netflix Originals" api={originals} />

      <RowPost title="Trending Now" api={trending} isSmall={true} />

      <RowPost title="Top Rated" api={topRated} />

      <RowPost title="Action Movies" api={actions} isSmall={true} />

      <RowPost title="Romantic Movies" api={romance} isSmall={true} />

      <RowPost title="Comedy Movies" api={comedy} isSmall={true} />

      <RowPost title="Horror Movies" api={horror} isSmall={true} />

      <RowPost title="Documentaries" api={documentary} isSmall={true} />

      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
